/* eslint-disable @typescript-eslint/no-var-requires */

import {
  BuildOrderLinesRequestProto,
  CreateOrderRequestProto,
  ProductQuantityProto,
  SaveOrderRequestProto,
} from "../../generated/nodejs/order_pb";
import { OutletServiceClient } from "../../generated/nodejs/outlet_grpc_pb";
import { GetAllOutletsRequestProto } from "../../generated/nodejs/outlet_pb";
import {
  EnumOrderSource,
  EnumStockItemType,
} from "../../generated/nodejs/common/enums.generated_pb";
import { StockItemServiceClient } from "../../generated/nodejs/stockitem_grpc_pb";
import { credentials, Metadata } from "@grpc/grpc-js";
import { OrderV2ServiceClient } from "../../generated/nodejs/order_grpc_pb";
import {
  GetStockItemsByFilterRequestProto,
  StockItemFilterProto,
  StockItemProto,
} from "../../generated/nodejs/stockitem_pb";
import { EnumStockItemTypeArrayValue } from "../../generated/nodejs/common/enumarrayvalues.generated_pb";

// Staging testing credentials (use 'brewman.premiersystems.com' for production)
// Tenant Group Name: ApiUnitTests
// Tenant Group Id: 5e424ccd-9994-4785-9f6d-ff0981ffb9bb
// Tenant Name: Plucky Brewery Demo Data
const server = "brewman-staging.premiersystems.com";
const apiToken = "V1T24C44CDD1D5141B0BD35E17073A12C39"; // ApiUser
const tenantId = "9382da84-be90-4d27-9fe3-57f0a19a4df5"; // Plucky Demo Data

test("Can create order", (done) => {
  // Set up our metadata to carry the api token as taken from the user page in the web application.
  // https://brewman-staging.premiersystems.com/administration/users
  const requestMetadata = new Metadata();
  requestMetadata.add("API_TOKEN", apiToken);

  // Find the Brewery Shop Outlet
  const outletService = new OutletServiceClient(
    server,
    credentials.createSsl()
  );
  const outletServiceRequest = new GetAllOutletsRequestProto();
  outletServiceRequest.setTenantId(tenantId);
  outletService.getAllOutlets(
    outletServiceRequest,
    requestMetadata,
    (error, response) => {
      if (error) {
        done(error);
        return;
      }

      const breweryShopOutlet = response
        .getOutletsList()
        .filter((outlet) => outlet.getReadOnly().getCode() === "BREWSHOP")[0];
      expect(breweryShopOutlet).toBeTruthy();

      let stockItems: StockItemProto[] = [];

      const stockItemService = new StockItemServiceClient(
        server,
        credentials.createSsl()
      );
      const stockItemFilter = new StockItemFilterProto();
      const stockItemTypes = new EnumStockItemTypeArrayValue();
      stockItemTypes.addValue(EnumStockItemType.ENUMSTOCKITEMTYPE_PRODUCT);
      stockItemFilter.setStockItemTypes(stockItemTypes);
      const stockItemFilterRequest = new GetStockItemsByFilterRequestProto();
      stockItemFilterRequest.setTenantId(tenantId);
      stockItemFilterRequest.setFilter(stockItemFilter);
      stockItemService.getStockItemsByFilter(
        stockItemFilterRequest,
        requestMetadata,
        (error, response) => {
          if (error) {
            done(error);
            return;
          }

          stockItems = response.getResults().getStockItemsList();
          expect(stockItems.length).toBeGreaterThan(0);

          // Create a new order for this outlet
          const orderService = new OrderV2ServiceClient(
            server,
            credentials.createSsl()
          );
          const createOrderRequest = new CreateOrderRequestProto();
          createOrderRequest.setTenantId(tenantId);
          createOrderRequest.setExternalReference("");
          createOrderRequest.setOrderSource(
            EnumOrderSource.ENUMORDERSOURCE_BREWMAN
          );
          createOrderRequest.setOutletId(breweryShopOutlet.getId());
          orderService.createOrder(
            createOrderRequest,
            requestMetadata,
            (error, response) => {
              if (error) {
                done(error);
                return;
              }

              // A new order will be created with suitable defaults (taken from the supplied outlet)
              // Update any properties that are not from the outlet and add order lines.
              const newOrder = response.getOrder();
              newOrder.getHeader().setCustomerReference("My custom reference");

              const starCase12x500ml = stockItems.filter(
                (si) => si.getCode().getValue() === "Star50012X500Case"
              )[0];

              const pluckyTShirt = stockItems.filter(
                (si) => si.getCode().getValue() === "PluckBreweryTShirt"
              )[0];

              // Add lines
              const buildOrderLinesRequest = new BuildOrderLinesRequestProto();
              buildOrderLinesRequest.setTenantId(tenantId);
              buildOrderLinesRequest.setOrderHeader(newOrder.getHeader());
              const line1 = new ProductQuantityProto();
              line1.setStockItemId(starCase12x500ml.getId());
              line1.setQuantity(2);
              const line2 = new ProductQuantityProto();
              line2.setStockItemId(pluckyTShirt.getId());
              line2.setQuantity(4);
              buildOrderLinesRequest.setItemsList([line1, line2]);
              orderService.buildOrderLines(
                buildOrderLinesRequest,
                requestMetadata,
                (error1, response1) => {
                  if (error1) {
                    done(error1);
                    return;
                  }

                  const saveOrderRequest = new SaveOrderRequestProto();
                  saveOrderRequest.setTenantId(tenantId);
                  saveOrderRequest.setOrder(response1.getResults());
                  orderService.saveOrder(
                    saveOrderRequest,
                    requestMetadata,
                    (error1, response1) => {
                      if (error1) {
                        done(error1);
                      }

                      expect(response1.hasOrder()).toBeTruthy();
                      console.log(
                        newOrder.getHeader().getReadOnly().getOrderNumber()
                      );
                      done();
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
});
