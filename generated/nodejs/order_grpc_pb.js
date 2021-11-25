// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var order_pb = require('./order_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_orders_order_BuildOrderLinesRequestProto(arg) {
  if (!(arg instanceof order_pb.BuildOrderLinesRequestProto)) {
    throw new Error('Expected argument of type bmapi.orders.order.BuildOrderLinesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_order_BuildOrderLinesRequestProto(buffer_arg) {
  return order_pb.BuildOrderLinesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_order_BuildOrderLinesResponseProto(arg) {
  if (!(arg instanceof order_pb.BuildOrderLinesResponseProto)) {
    throw new Error('Expected argument of type bmapi.orders.order.BuildOrderLinesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_order_BuildOrderLinesResponseProto(buffer_arg) {
  return order_pb.BuildOrderLinesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_order_CreateOrderRequestProto(arg) {
  if (!(arg instanceof order_pb.CreateOrderRequestProto)) {
    throw new Error('Expected argument of type bmapi.orders.order.CreateOrderRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_order_CreateOrderRequestProto(buffer_arg) {
  return order_pb.CreateOrderRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_order_CreateOrderResponseProto(arg) {
  if (!(arg instanceof order_pb.CreateOrderResponseProto)) {
    throw new Error('Expected argument of type bmapi.orders.order.CreateOrderResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_order_CreateOrderResponseProto(buffer_arg) {
  return order_pb.CreateOrderResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_order_GetOrderRequestProto(arg) {
  if (!(arg instanceof order_pb.GetOrderRequestProto)) {
    throw new Error('Expected argument of type bmapi.orders.order.GetOrderRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_order_GetOrderRequestProto(buffer_arg) {
  return order_pb.GetOrderRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_order_GetOrderResponseProto(arg) {
  if (!(arg instanceof order_pb.GetOrderResponseProto)) {
    throw new Error('Expected argument of type bmapi.orders.order.GetOrderResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_order_GetOrderResponseProto(buffer_arg) {
  return order_pb.GetOrderResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_order_GetOrdersByFilterRequestProto(arg) {
  if (!(arg instanceof order_pb.GetOrdersByFilterRequestProto)) {
    throw new Error('Expected argument of type bmapi.orders.order.GetOrdersByFilterRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_order_GetOrdersByFilterRequestProto(buffer_arg) {
  return order_pb.GetOrdersByFilterRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_order_GetOrdersByFilterResponseProto(arg) {
  if (!(arg instanceof order_pb.GetOrdersByFilterResponseProto)) {
    throw new Error('Expected argument of type bmapi.orders.order.GetOrdersByFilterResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_order_GetOrdersByFilterResponseProto(buffer_arg) {
  return order_pb.GetOrdersByFilterResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_order_GetOrdersRequestProto(arg) {
  if (!(arg instanceof order_pb.GetOrdersRequestProto)) {
    throw new Error('Expected argument of type bmapi.orders.order.GetOrdersRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_order_GetOrdersRequestProto(buffer_arg) {
  return order_pb.GetOrdersRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_order_GetOrdersResponseProto(arg) {
  if (!(arg instanceof order_pb.GetOrdersResponseProto)) {
    throw new Error('Expected argument of type bmapi.orders.order.GetOrdersResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_order_GetOrdersResponseProto(buffer_arg) {
  return order_pb.GetOrdersResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_order_SaveOrderRequestProto(arg) {
  if (!(arg instanceof order_pb.SaveOrderRequestProto)) {
    throw new Error('Expected argument of type bmapi.orders.order.SaveOrderRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_order_SaveOrderRequestProto(buffer_arg) {
  return order_pb.SaveOrderRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_order_SaveOrderResponseProto(arg) {
  if (!(arg instanceof order_pb.SaveOrderResponseProto)) {
    throw new Error('Expected argument of type bmapi.orders.order.SaveOrderResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_order_SaveOrderResponseProto(buffer_arg) {
  return order_pb.SaveOrderResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderV2ServiceService = exports.OrderV2ServiceService = {
  // Creates a new order in Open status.
createOrder: {
    path: '/bmapi.orders.order.OrderV2Service/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.CreateOrderRequestProto,
    responseType: order_pb.CreateOrderResponseProto,
    requestSerialize: serialize_bmapi_orders_order_CreateOrderRequestProto,
    requestDeserialize: deserialize_bmapi_orders_order_CreateOrderRequestProto,
    responseSerialize: serialize_bmapi_orders_order_CreateOrderResponseProto,
    responseDeserialize: deserialize_bmapi_orders_order_CreateOrderResponseProto,
  },
  // Saves the given order. Must be Open or Complete.
saveOrder: {
    path: '/bmapi.orders.order.OrderV2Service/SaveOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.SaveOrderRequestProto,
    responseType: order_pb.SaveOrderResponseProto,
    requestSerialize: serialize_bmapi_orders_order_SaveOrderRequestProto,
    requestDeserialize: deserialize_bmapi_orders_order_SaveOrderRequestProto,
    responseSerialize: serialize_bmapi_orders_order_SaveOrderResponseProto,
    responseDeserialize: deserialize_bmapi_orders_order_SaveOrderResponseProto,
  },
  // Gets a single Order.
getOrder: {
    path: '/bmapi.orders.order.OrderV2Service/GetOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.GetOrderRequestProto,
    responseType: order_pb.GetOrderResponseProto,
    requestSerialize: serialize_bmapi_orders_order_GetOrderRequestProto,
    requestDeserialize: deserialize_bmapi_orders_order_GetOrderRequestProto,
    responseSerialize: serialize_bmapi_orders_order_GetOrderResponseProto,
    responseDeserialize: deserialize_bmapi_orders_order_GetOrderResponseProto,
  },
  // Gets zero or more orders. Errors if any do not exist.
getOrders: {
    path: '/bmapi.orders.order.OrderV2Service/GetOrders',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.GetOrdersRequestProto,
    responseType: order_pb.GetOrdersResponseProto,
    requestSerialize: serialize_bmapi_orders_order_GetOrdersRequestProto,
    requestDeserialize: deserialize_bmapi_orders_order_GetOrdersRequestProto,
    responseSerialize: serialize_bmapi_orders_order_GetOrdersResponseProto,
    responseDeserialize: deserialize_bmapi_orders_order_GetOrdersResponseProto,
  },
  // Gets full orders (header plus lines) by a given filter.
getOrdersByFilter: {
    path: '/bmapi.orders.order.OrderV2Service/GetOrdersByFilter',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.GetOrdersByFilterRequestProto,
    responseType: order_pb.GetOrdersByFilterResponseProto,
    requestSerialize: serialize_bmapi_orders_order_GetOrdersByFilterRequestProto,
    requestDeserialize: deserialize_bmapi_orders_order_GetOrdersByFilterRequestProto,
    responseSerialize: serialize_bmapi_orders_order_GetOrdersByFilterResponseProto,
    responseDeserialize: deserialize_bmapi_orders_order_GetOrdersByFilterResponseProto,
  },
  // Performs standard calculations and extractions for simple addition of items to an Order. Returns what the order would look like with standard (BrewMan UI behaviour) of adding the given items to an order. The order is NOT saved to the database with the evaluated lines.  It can be easily saved by sending to the SaveOrder Api method, or can be adjusted as desired before saving.
buildOrderLines: {
    path: '/bmapi.orders.order.OrderV2Service/BuildOrderLines',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.BuildOrderLinesRequestProto,
    responseType: order_pb.BuildOrderLinesResponseProto,
    requestSerialize: serialize_bmapi_orders_order_BuildOrderLinesRequestProto,
    requestDeserialize: deserialize_bmapi_orders_order_BuildOrderLinesRequestProto,
    responseSerialize: serialize_bmapi_orders_order_BuildOrderLinesResponseProto,
    responseDeserialize: deserialize_bmapi_orders_order_BuildOrderLinesResponseProto,
  },
};

exports.OrderV2ServiceClient = grpc.makeGenericClientConstructor(OrderV2ServiceService);
