/* eslint-disable @typescript-eslint/no-var-requires */

import {
  CreateOrderRequestProto,
  OrderLineProto,
  SaveOrderRequestProto,
} from "../../generated/order_pb";
import { OutletServiceClient } from "../../generated/outlet_grpc_pb";
import { GetAllOutletsRequestProto } from "../../generated/outlet_pb";
import {
  EnumOrderSource,
  EnumStockItemType,
} from "../../generated/common/enums.generated_pb";
import { StockItemServiceClient } from "../../generated/stockitem_grpc_pb";
import { credentials, Metadata } from "@grpc/grpc-js";
import { OrderV2ServiceClient } from "../../generated/order_grpc_pb";
import {
  GetStockItemsByFilterRequestProto,
  StockItemFilterProto,
  StockItemProto,
} from "../../generated/stockitem_pb";
import { EnumStockItemTypeArrayValue } from "../../generated/common/enumarrayvalues.generated_pb";
import * as crypto from "crypto";

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
            EnumOrderSource.ENUMORDERSOURCE_NONE
          );
          createOrderRequest.setOutletId(breweryShopOutlet.getId());
          orderService.createOrder(
            createOrderRequest,
            requestMetadata,
            (error, response) => {
              if (error) {
                done(error);
              }

              // A new order will be created with suitable defaults (taken from the supplied outlet)
              // Update any properties that are not from the outlet and add order lines.
              const newOrder = response.getOrder();
              newOrder.getHeader().setCustomerReference("My custom reference");

              // Add lines

              const starCase12x500ml = stockItems.filter(
                (si) => si.getCode().getValue() === "Star50012X500Case"
              )[0];

              const orderLine = new OrderLineProto();
              orderLine.setId(crypto.randomUUID()); // A unique guid to reference this line
              orderLine.setOrderId(newOrder.getId());
              orderLine.setStockItemId(starCase12x500ml.getId());
              orderLine.setStockLocationId(breweryShopOutlet.getStockLocationId());
              orderLine.setAbv(starCase12x500ml.getAbv());
              orderLine.setAlcoholType(starCase12x500ml.getAlcoholType());
              orderLine.setUnitOfMeasureId(starCase12x500ml.getUnitOfMeasureId());
              orderLine.setGlCodeId(starCase12x500ml.getSalesGlCodeId().getValue());
              orderLine.setManufacturerId(starCase12x500ml.getManufacturerId());
              orderLine.setProductName(starCase12x500ml.getName());
              orderLine.setProductCode(starCase12x500ml.getCode());
              orderLine.setProductBrandId(starCase12x500ml.getProductBrandId());
              orderLine.setVatCodeId(starCase12x500ml.getVatCodeId());
              orderLine.setUnitDutiableLitres(starCase12x500ml.getDutiableLitres());
              // Totals
              orderLine.setQuantity(2);
              orderLine.setVatPercentage(20);
              orderLine.setLineCostNetPrice(starCase12x500ml.getCostPrice() * 2);
              orderLine.setLineNetPrice(200);
              orderLine.setLineVat(40);
              orderLine.setUnitCostNetPrice(100);

              newOrder.addLines(orderLine);

              const saveOrderRequest = new SaveOrderRequestProto();
              saveOrderRequest.setTenantId(tenantId);
              saveOrderRequest.setOrder(newOrder);
              orderService.saveOrder(
                saveOrderRequest,
                requestMetadata,
                (error1, response1) => {
                  if (error1) {
                    done(error1);
                  }

                  expect(response1.hasOrder()).toBeTruthy();
                  console.log(newOrder.getHeader().getReadOnly().getOrderNumber())
                  done();
                }
              );
            }
          );
        }
      );
    }
  );
});
