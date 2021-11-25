// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var stocklocation_pb = require('./stocklocation_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_stocks_stocklocation_GetAllStockLocationsRequestProto(arg) {
  if (!(arg instanceof stocklocation_pb.GetAllStockLocationsRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stocklocation.GetAllStockLocationsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stocklocation_GetAllStockLocationsRequestProto(buffer_arg) {
  return stocklocation_pb.GetAllStockLocationsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stocklocation_GetAllStockLocationsResponseProto(arg) {
  if (!(arg instanceof stocklocation_pb.GetAllStockLocationsResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stocklocation.GetAllStockLocationsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stocklocation_GetAllStockLocationsResponseProto(buffer_arg) {
  return stocklocation_pb.GetAllStockLocationsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stocklocation_GetStockLocationRequestProto(arg) {
  if (!(arg instanceof stocklocation_pb.GetStockLocationRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stocklocation.GetStockLocationRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stocklocation_GetStockLocationRequestProto(buffer_arg) {
  return stocklocation_pb.GetStockLocationRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stocklocation_GetStockLocationResponseProto(arg) {
  if (!(arg instanceof stocklocation_pb.GetStockLocationResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stocklocation.GetStockLocationResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stocklocation_GetStockLocationResponseProto(buffer_arg) {
  return stocklocation_pb.GetStockLocationResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stocklocation_GetStockLocationsRequestProto(arg) {
  if (!(arg instanceof stocklocation_pb.GetStockLocationsRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stocklocation.GetStockLocationsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stocklocation_GetStockLocationsRequestProto(buffer_arg) {
  return stocklocation_pb.GetStockLocationsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stocklocation_GetStockLocationsResponseProto(arg) {
  if (!(arg instanceof stocklocation_pb.GetStockLocationsResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stocklocation.GetStockLocationsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stocklocation_GetStockLocationsResponseProto(buffer_arg) {
  return stocklocation_pb.GetStockLocationsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var StockLocationServiceService = exports.StockLocationServiceService = {
  // Gets all StockLocations
getAllStockLocations: {
    path: '/bmapi.stocks.stocklocation.StockLocationService/GetAllStockLocations',
    requestStream: false,
    responseStream: false,
    requestType: stocklocation_pb.GetAllStockLocationsRequestProto,
    responseType: stocklocation_pb.GetAllStockLocationsResponseProto,
    requestSerialize: serialize_bmapi_stocks_stocklocation_GetAllStockLocationsRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_stocklocation_GetAllStockLocationsRequestProto,
    responseSerialize: serialize_bmapi_stocks_stocklocation_GetAllStockLocationsResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_stocklocation_GetAllStockLocationsResponseProto,
  },
  // Gets a specific stock location. (Errors if not found).
getStockLocation: {
    path: '/bmapi.stocks.stocklocation.StockLocationService/GetStockLocation',
    requestStream: false,
    responseStream: false,
    requestType: stocklocation_pb.GetStockLocationRequestProto,
    responseType: stocklocation_pb.GetStockLocationResponseProto,
    requestSerialize: serialize_bmapi_stocks_stocklocation_GetStockLocationRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_stocklocation_GetStockLocationRequestProto,
    responseSerialize: serialize_bmapi_stocks_stocklocation_GetStockLocationResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_stocklocation_GetStockLocationResponseProto,
  },
  // Gets specific stock locations. (Errors if any not found).
getStockLocations: {
    path: '/bmapi.stocks.stocklocation.StockLocationService/GetStockLocations',
    requestStream: false,
    responseStream: false,
    requestType: stocklocation_pb.GetStockLocationsRequestProto,
    responseType: stocklocation_pb.GetStockLocationsResponseProto,
    requestSerialize: serialize_bmapi_stocks_stocklocation_GetStockLocationsRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_stocklocation_GetStockLocationsRequestProto,
    responseSerialize: serialize_bmapi_stocks_stocklocation_GetStockLocationsResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_stocklocation_GetStockLocationsResponseProto,
  },
};

exports.StockLocationServiceClient = grpc.makeGenericClientConstructor(StockLocationServiceService);
