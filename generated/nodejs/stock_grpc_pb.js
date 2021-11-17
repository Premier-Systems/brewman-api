// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var stock_pb = require('./stock_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_stocks_stock_GetStockItemsQuantityCurrentlyInStockRequestProto(arg) {
  if (!(arg instanceof stock_pb.GetStockItemsQuantityCurrentlyInStockRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stock.GetStockItemsQuantityCurrentlyInStockRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stock_GetStockItemsQuantityCurrentlyInStockRequestProto(buffer_arg) {
  return stock_pb.GetStockItemsQuantityCurrentlyInStockRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stock_GetStockItemsQuantityCurrentlyInStockResponseProto(arg) {
  if (!(arg instanceof stock_pb.GetStockItemsQuantityCurrentlyInStockResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stock.GetStockItemsQuantityCurrentlyInStockResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stock_GetStockItemsQuantityCurrentlyInStockResponseProto(buffer_arg) {
  return stock_pb.GetStockItemsQuantityCurrentlyInStockResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var StockServiceService = exports.StockServiceService = {
  // Gets the current Stock Level (sum of all batches for each stock item)
getStockItemsQuantityCurrentlyInStock: {
    path: '/bmapi.stocks.stock.StockService/GetStockItemsQuantityCurrentlyInStock',
    requestStream: false,
    responseStream: false,
    requestType: stock_pb.GetStockItemsQuantityCurrentlyInStockRequestProto,
    responseType: stock_pb.GetStockItemsQuantityCurrentlyInStockResponseProto,
    requestSerialize: serialize_bmapi_stocks_stock_GetStockItemsQuantityCurrentlyInStockRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_stock_GetStockItemsQuantityCurrentlyInStockRequestProto,
    responseSerialize: serialize_bmapi_stocks_stock_GetStockItemsQuantityCurrentlyInStockResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_stock_GetStockItemsQuantityCurrentlyInStockResponseProto,
  },
};

exports.StockServiceClient = grpc.makeGenericClientConstructor(StockServiceService);
