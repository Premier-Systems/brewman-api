// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var stockitem_pb = require('./stockitem_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_stocks_stockitem_GetAllStockItemsRequestProto(arg) {
  if (!(arg instanceof stockitem_pb.GetAllStockItemsRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockitem.GetAllStockItemsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockitem_GetAllStockItemsRequestProto(buffer_arg) {
  return stockitem_pb.GetAllStockItemsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockitem_GetAllStockItemsResponseProto(arg) {
  if (!(arg instanceof stockitem_pb.GetAllStockItemsResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockitem.GetAllStockItemsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockitem_GetAllStockItemsResponseProto(buffer_arg) {
  return stockitem_pb.GetAllStockItemsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockitem_GetGlCodeOverridesForStockItemRequestProto(arg) {
  if (!(arg instanceof stockitem_pb.GetGlCodeOverridesForStockItemRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockitem.GetGlCodeOverridesForStockItemRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockitem_GetGlCodeOverridesForStockItemRequestProto(buffer_arg) {
  return stockitem_pb.GetGlCodeOverridesForStockItemRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockitem_GetGlCodeOverridesForStockItemResponseProto(arg) {
  if (!(arg instanceof stockitem_pb.GetGlCodeOverridesForStockItemResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockitem.GetGlCodeOverridesForStockItemResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockitem_GetGlCodeOverridesForStockItemResponseProto(buffer_arg) {
  return stockitem_pb.GetGlCodeOverridesForStockItemResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockitem_GetStockItemRequestProto(arg) {
  if (!(arg instanceof stockitem_pb.GetStockItemRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockitem.GetStockItemRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockitem_GetStockItemRequestProto(buffer_arg) {
  return stockitem_pb.GetStockItemRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockitem_GetStockItemResponseProto(arg) {
  if (!(arg instanceof stockitem_pb.GetStockItemResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockitem.GetStockItemResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockitem_GetStockItemResponseProto(buffer_arg) {
  return stockitem_pb.GetStockItemResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockitem_GetStockItemsByFilterRequestProto(arg) {
  if (!(arg instanceof stockitem_pb.GetStockItemsByFilterRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockitem.GetStockItemsByFilterRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockitem_GetStockItemsByFilterRequestProto(buffer_arg) {
  return stockitem_pb.GetStockItemsByFilterRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockitem_GetStockItemsByFilterResponseProto(arg) {
  if (!(arg instanceof stockitem_pb.GetStockItemsByFilterResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockitem.GetStockItemsByFilterResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockitem_GetStockItemsByFilterResponseProto(buffer_arg) {
  return stockitem_pb.GetStockItemsByFilterResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockitem_GetStockItemsRequestProto(arg) {
  if (!(arg instanceof stockitem_pb.GetStockItemsRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockitem.GetStockItemsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockitem_GetStockItemsRequestProto(buffer_arg) {
  return stockitem_pb.GetStockItemsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockitem_GetStockItemsResponseProto(arg) {
  if (!(arg instanceof stockitem_pb.GetStockItemsResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockitem.GetStockItemsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockitem_GetStockItemsResponseProto(buffer_arg) {
  return stockitem_pb.GetStockItemsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockitem_SetStockItemIsHiddenRequestProto(arg) {
  if (!(arg instanceof stockitem_pb.SetStockItemIsHiddenRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockitem.SetStockItemIsHiddenRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockitem_SetStockItemIsHiddenRequestProto(buffer_arg) {
  return stockitem_pb.SetStockItemIsHiddenRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_stockitem_SetStockItemIsHiddenResponseProto(arg) {
  if (!(arg instanceof stockitem_pb.SetStockItemIsHiddenResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.stockitem.SetStockItemIsHiddenResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_stockitem_SetStockItemIsHiddenResponseProto(buffer_arg) {
  return stockitem_pb.SetStockItemIsHiddenResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var StockItemServiceService = exports.StockItemServiceService = {
  // Gets all undeleted StockItems
getAllStockItems: {
    path: '/bmapi.stocks.stockitem.StockItemService/GetAllStockItems',
    requestStream: false,
    responseStream: false,
    requestType: stockitem_pb.GetAllStockItemsRequestProto,
    responseType: stockitem_pb.GetAllStockItemsResponseProto,
    requestSerialize: serialize_bmapi_stocks_stockitem_GetAllStockItemsRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_stockitem_GetAllStockItemsRequestProto,
    responseSerialize: serialize_bmapi_stocks_stockitem_GetAllStockItemsResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_stockitem_GetAllStockItemsResponseProto,
  },
  // Gets a single StockItem by Id, even if it has been soft-deleted. (Errors if not found).
getStockItem: {
    path: '/bmapi.stocks.stockitem.StockItemService/GetStockItem',
    requestStream: false,
    responseStream: false,
    requestType: stockitem_pb.GetStockItemRequestProto,
    responseType: stockitem_pb.GetStockItemResponseProto,
    requestSerialize: serialize_bmapi_stocks_stockitem_GetStockItemRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_stockitem_GetStockItemRequestProto,
    responseSerialize: serialize_bmapi_stocks_stockitem_GetStockItemResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_stockitem_GetStockItemResponseProto,
  },
  // Gets specific StockItems by Ids, including soft-deleted ones. (Errors if any not found).
getStockItems: {
    path: '/bmapi.stocks.stockitem.StockItemService/GetStockItems',
    requestStream: false,
    responseStream: false,
    requestType: stockitem_pb.GetStockItemsRequestProto,
    responseType: stockitem_pb.GetStockItemsResponseProto,
    requestSerialize: serialize_bmapi_stocks_stockitem_GetStockItemsRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_stockitem_GetStockItemsRequestProto,
    responseSerialize: serialize_bmapi_stocks_stockitem_GetStockItemsResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_stockitem_GetStockItemsResponseProto,
  },
  // Gets StockItems matching the given filter. (soft-deleted stock items are not returned).
getStockItemsByFilter: {
    path: '/bmapi.stocks.stockitem.StockItemService/GetStockItemsByFilter',
    requestStream: false,
    responseStream: false,
    requestType: stockitem_pb.GetStockItemsByFilterRequestProto,
    responseType: stockitem_pb.GetStockItemsByFilterResponseProto,
    requestSerialize: serialize_bmapi_stocks_stockitem_GetStockItemsByFilterRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_stockitem_GetStockItemsByFilterRequestProto,
    responseSerialize: serialize_bmapi_stocks_stockitem_GetStockItemsByFilterResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_stockitem_GetStockItemsByFilterResponseProto,
  },
  // Gets GlCodeOverrides for a specific Stock Item
getGlCodeOverridesForStockItem: {
    path: '/bmapi.stocks.stockitem.StockItemService/GetGlCodeOverridesForStockItem',
    requestStream: false,
    responseStream: false,
    requestType: stockitem_pb.GetGlCodeOverridesForStockItemRequestProto,
    responseType: stockitem_pb.GetGlCodeOverridesForStockItemResponseProto,
    requestSerialize: serialize_bmapi_stocks_stockitem_GetGlCodeOverridesForStockItemRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_stockitem_GetGlCodeOverridesForStockItemRequestProto,
    responseSerialize: serialize_bmapi_stocks_stockitem_GetGlCodeOverridesForStockItemResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_stockitem_GetGlCodeOverridesForStockItemResponseProto,
  },
  // Hides or unhides the given stock item.
setStockItemIsHidden: {
    path: '/bmapi.stocks.stockitem.StockItemService/SetStockItemIsHidden',
    requestStream: false,
    responseStream: false,
    requestType: stockitem_pb.SetStockItemIsHiddenRequestProto,
    responseType: stockitem_pb.SetStockItemIsHiddenResponseProto,
    requestSerialize: serialize_bmapi_stocks_stockitem_SetStockItemIsHiddenRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_stockitem_SetStockItemIsHiddenRequestProto,
    responseSerialize: serialize_bmapi_stocks_stockitem_SetStockItemIsHiddenResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_stockitem_SetStockItemIsHiddenResponseProto,
  },
};

exports.StockItemServiceClient = grpc.makeGenericClientConstructor(StockItemServiceService);
