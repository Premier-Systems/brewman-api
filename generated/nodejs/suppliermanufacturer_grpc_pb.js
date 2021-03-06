// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var suppliermanufacturer_pb = require('./suppliermanufacturer_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_stocks_suppliermanufacturer_GetAllSupplierManufacturersRequestProto(arg) {
  if (!(arg instanceof suppliermanufacturer_pb.GetAllSupplierManufacturersRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.suppliermanufacturer.GetAllSupplierManufacturersRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_suppliermanufacturer_GetAllSupplierManufacturersRequestProto(buffer_arg) {
  return suppliermanufacturer_pb.GetAllSupplierManufacturersRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_suppliermanufacturer_GetAllSupplierManufacturersResponseProto(arg) {
  if (!(arg instanceof suppliermanufacturer_pb.GetAllSupplierManufacturersResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.suppliermanufacturer.GetAllSupplierManufacturersResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_suppliermanufacturer_GetAllSupplierManufacturersResponseProto(buffer_arg) {
  return suppliermanufacturer_pb.GetAllSupplierManufacturersResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturerRequestProto(arg) {
  if (!(arg instanceof suppliermanufacturer_pb.GetSupplierManufacturerRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.suppliermanufacturer.GetSupplierManufacturerRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturerRequestProto(buffer_arg) {
  return suppliermanufacturer_pb.GetSupplierManufacturerRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturerResponseProto(arg) {
  if (!(arg instanceof suppliermanufacturer_pb.GetSupplierManufacturerResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.suppliermanufacturer.GetSupplierManufacturerResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturerResponseProto(buffer_arg) {
  return suppliermanufacturer_pb.GetSupplierManufacturerResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturersRequestProto(arg) {
  if (!(arg instanceof suppliermanufacturer_pb.GetSupplierManufacturersRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.suppliermanufacturer.GetSupplierManufacturersRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturersRequestProto(buffer_arg) {
  return suppliermanufacturer_pb.GetSupplierManufacturersRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturersResponseProto(arg) {
  if (!(arg instanceof suppliermanufacturer_pb.GetSupplierManufacturersResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.suppliermanufacturer.GetSupplierManufacturersResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturersResponseProto(buffer_arg) {
  return suppliermanufacturer_pb.GetSupplierManufacturersResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var SupplierManufacturerServiceService = exports.SupplierManufacturerServiceService = {
  // Gets all SupplierManufacturers
getAllSupplierManufacturers: {
    path: '/bmapi.stocks.suppliermanufacturer.SupplierManufacturerService/GetAllSupplierManufacturers',
    requestStream: false,
    responseStream: false,
    requestType: suppliermanufacturer_pb.GetAllSupplierManufacturersRequestProto,
    responseType: suppliermanufacturer_pb.GetAllSupplierManufacturersResponseProto,
    requestSerialize: serialize_bmapi_stocks_suppliermanufacturer_GetAllSupplierManufacturersRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_suppliermanufacturer_GetAllSupplierManufacturersRequestProto,
    responseSerialize: serialize_bmapi_stocks_suppliermanufacturer_GetAllSupplierManufacturersResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_suppliermanufacturer_GetAllSupplierManufacturersResponseProto,
  },
  // Gets a specific SupplierManufacturer by Id. (Errors if not found).
getSupplierManufacturer: {
    path: '/bmapi.stocks.suppliermanufacturer.SupplierManufacturerService/GetSupplierManufacturer',
    requestStream: false,
    responseStream: false,
    requestType: suppliermanufacturer_pb.GetSupplierManufacturerRequestProto,
    responseType: suppliermanufacturer_pb.GetSupplierManufacturerResponseProto,
    requestSerialize: serialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturerRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturerRequestProto,
    responseSerialize: serialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturerResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturerResponseProto,
  },
  // Gets specific SupplierManufacturers by Ids. (Errors if any not found).
getSupplierManufacturers: {
    path: '/bmapi.stocks.suppliermanufacturer.SupplierManufacturerService/GetSupplierManufacturers',
    requestStream: false,
    responseStream: false,
    requestType: suppliermanufacturer_pb.GetSupplierManufacturersRequestProto,
    responseType: suppliermanufacturer_pb.GetSupplierManufacturersResponseProto,
    requestSerialize: serialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturersRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturersRequestProto,
    responseSerialize: serialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturersResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_suppliermanufacturer_GetSupplierManufacturersResponseProto,
  },
};

exports.SupplierManufacturerServiceClient = grpc.makeGenericClientConstructor(SupplierManufacturerServiceService);
