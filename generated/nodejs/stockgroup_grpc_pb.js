// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var stockgroup_pb = require('./stockgroup_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_stocks_stockgroup_GetAllStockGroupsRequestProto(arg) {
  if (!(arg instanceof stockgroup_pb.GetAllStockGroupsRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockgroup.GetAllStockGroupsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockgroup_GetAllStockGroupsRequestProto(buffer_arg) {
  return stockgroup_pb.GetAllStockGroupsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockgroup_GetAllStockGroupsResponseProto(arg) {
  if (!(arg instanceof stockgroup_pb.GetAllStockGroupsResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockgroup.GetAllStockGroupsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockgroup_GetAllStockGroupsResponseProto(buffer_arg) {
  return stockgroup_pb.GetAllStockGroupsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockgroup_GetStockGroupRequestProto(arg) {
  if (!(arg instanceof stockgroup_pb.GetStockGroupRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockgroup.GetStockGroupRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockgroup_GetStockGroupRequestProto(buffer_arg) {
  return stockgroup_pb.GetStockGroupRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockgroup_GetStockGroupResponseProto(arg) {
  if (!(arg instanceof stockgroup_pb.GetStockGroupResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockgroup.GetStockGroupResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockgroup_GetStockGroupResponseProto(buffer_arg) {
  return stockgroup_pb.GetStockGroupResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockgroup_GetStockGroupsRequestProto(arg) {
  if (!(arg instanceof stockgroup_pb.GetStockGroupsRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockgroup.GetStockGroupsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockgroup_GetStockGroupsRequestProto(buffer_arg) {
  return stockgroup_pb.GetStockGroupsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockgroup_GetStockGroupsResponseProto(arg) {
  if (!(arg instanceof stockgroup_pb.GetStockGroupsResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockgroup.GetStockGroupsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockgroup_GetStockGroupsResponseProto(buffer_arg) {
  return stockgroup_pb.GetStockGroupsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var StockGroupServiceService = exports.StockGroupServiceService = {
  // Gets all stock groups
getAllStockGroups: {
    path: '/bmapi.stocks.stockgroup.StockGroupService/GetAllStockGroups',
    requestStream: false,
    responseStream: false,
    requestType: stockgroup_pb.GetAllStockGroupsRequestProto,
    responseType: stockgroup_pb.GetAllStockGroupsResponseProto,
    requestSerialize: serialize_bmapi_stocks_stockgroup_GetAllStockGroupsRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_stockgroup_GetAllStockGroupsRequestProto,
    responseSerialize: serialize_bmapi_stocks_stockgroup_GetAllStockGroupsResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_stockgroup_GetAllStockGroupsResponseProto,
  },
  // Gets a specific stock group. (Errors if not found).
getStockGroup: {
    path: '/bmapi.stocks.stockgroup.StockGroupService/GetStockGroup',
    requestStream: false,
    responseStream: false,
    requestType: stockgroup_pb.GetStockGroupRequestProto,
    responseType: stockgroup_pb.GetStockGroupResponseProto,
    requestSerialize: serialize_bmapi_stocks_stockgroup_GetStockGroupRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_stockgroup_GetStockGroupRequestProto,
    responseSerialize: serialize_bmapi_stocks_stockgroup_GetStockGroupResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_stockgroup_GetStockGroupResponseProto,
  },
  // Get specific stock groups. (Errors if any not found).
getStockGroups: {
    path: '/bmapi.stocks.stockgroup.StockGroupService/GetStockGroups',
    requestStream: false,
    responseStream: false,
    requestType: stockgroup_pb.GetStockGroupsRequestProto,
    responseType: stockgroup_pb.GetStockGroupsResponseProto,
    requestSerialize: serialize_bmapi_stocks_stockgroup_GetStockGroupsRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_stockgroup_GetStockGroupsRequestProto,
    responseSerialize: serialize_bmapi_stocks_stockgroup_GetStockGroupsResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_stockgroup_GetStockGroupsResponseProto,
  },
};

exports.StockGroupServiceClient = grpc.makeGenericClientConstructor(StockGroupServiceService);
