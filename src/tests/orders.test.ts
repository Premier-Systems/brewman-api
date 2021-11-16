/* eslint-disable @typescript-eslint/no-var-requires */

const orderMessages = require("../../generated/order_pb");
const orderServices = require("../../generated/order_grpc_pb");
const grpc = require("@grpc/grpc-js");

// Staging testing credentials
const server = "brewman-staging.premiersystems.com";
const apiToken = "V1T496732CEEED04B86BF31C1438887FBC2";
const tenantId = "9382da84-be90-4d27-9fe3-57f0a19a4df5";

test("Can create order", (done) => {
  const orderService = new orderServices.OrderV2ServiceClient(server, grpc.credentials.createSsl());

  const getOrdersRequest = new orderMessages.GetOrdersRequestProto();
  getOrdersRequest.setTenantId(tenantId);

  const metadata = new grpc.Metadata();
  metadata.add("API_TOKEN", apiToken);

  orderService.getOrders(getOrdersRequest, metadata, (error, response) => {
    console.log(error);
    console.log(response);
    // Verify response here once Api auth is functioning
    done();
  });
});
