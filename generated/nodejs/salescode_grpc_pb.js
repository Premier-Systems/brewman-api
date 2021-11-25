// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var salescode_pb = require('./salescode_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_outlets_salescode_GetAllSalesCodesRequestProto(arg) {
  if (!(arg instanceof salescode_pb.GetAllSalesCodesRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salescode.GetAllSalesCodesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salescode_GetAllSalesCodesRequestProto(buffer_arg) {
  return salescode_pb.GetAllSalesCodesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_salescode_GetAllSalesCodesResponseProto(arg) {
  if (!(arg instanceof salescode_pb.GetAllSalesCodesResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salescode.GetAllSalesCodesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salescode_GetAllSalesCodesResponseProto(buffer_arg) {
  return salescode_pb.GetAllSalesCodesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_salescode_GetSalesCodeRequestProto(arg) {
  if (!(arg instanceof salescode_pb.GetSalesCodeRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salescode.GetSalesCodeRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salescode_GetSalesCodeRequestProto(buffer_arg) {
  return salescode_pb.GetSalesCodeRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_salescode_GetSalesCodeResponseProto(arg) {
  if (!(arg instanceof salescode_pb.GetSalesCodeResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salescode.GetSalesCodeResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salescode_GetSalesCodeResponseProto(buffer_arg) {
  return salescode_pb.GetSalesCodeResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_salescode_GetSalesCodesRequestProto(arg) {
  if (!(arg instanceof salescode_pb.GetSalesCodesRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salescode.GetSalesCodesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salescode_GetSalesCodesRequestProto(buffer_arg) {
  return salescode_pb.GetSalesCodesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_salescode_GetSalesCodesResponseProto(arg) {
  if (!(arg instanceof salescode_pb.GetSalesCodesResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salescode.GetSalesCodesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salescode_GetSalesCodesResponseProto(buffer_arg) {
  return salescode_pb.GetSalesCodesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var SalesCodeServiceService = exports.SalesCodeServiceService = {
  // Gets all SalesCodes
getAllSalesCodes: {
    path: '/bmapi.outlets.salescode.SalesCodeService/GetAllSalesCodes',
    requestStream: false,
    responseStream: false,
    requestType: salescode_pb.GetAllSalesCodesRequestProto,
    responseType: salescode_pb.GetAllSalesCodesResponseProto,
    requestSerialize: serialize_bmapi_outlets_salescode_GetAllSalesCodesRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_salescode_GetAllSalesCodesRequestProto,
    responseSerialize: serialize_bmapi_outlets_salescode_GetAllSalesCodesResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_salescode_GetAllSalesCodesResponseProto,
  },
  // Gets a specific SalesCode. (Errors if not found).
getSalesCode: {
    path: '/bmapi.outlets.salescode.SalesCodeService/GetSalesCode',
    requestStream: false,
    responseStream: false,
    requestType: salescode_pb.GetSalesCodeRequestProto,
    responseType: salescode_pb.GetSalesCodeResponseProto,
    requestSerialize: serialize_bmapi_outlets_salescode_GetSalesCodeRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_salescode_GetSalesCodeRequestProto,
    responseSerialize: serialize_bmapi_outlets_salescode_GetSalesCodeResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_salescode_GetSalesCodeResponseProto,
  },
  // Gets specific SalesCodes. (Errors if any not found).
getSalesCodes: {
    path: '/bmapi.outlets.salescode.SalesCodeService/GetSalesCodes',
    requestStream: false,
    responseStream: false,
    requestType: salescode_pb.GetSalesCodesRequestProto,
    responseType: salescode_pb.GetSalesCodesResponseProto,
    requestSerialize: serialize_bmapi_outlets_salescode_GetSalesCodesRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_salescode_GetSalesCodesRequestProto,
    responseSerialize: serialize_bmapi_outlets_salescode_GetSalesCodesResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_salescode_GetSalesCodesResponseProto,
  },
};

exports.SalesCodeServiceClient = grpc.makeGenericClientConstructor(SalesCodeServiceService);
