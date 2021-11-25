// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var vatcode_pb = require('./vatcode_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_stocks_vatcode_GetAllVatCodesRequestProto(arg) {
  if (!(arg instanceof vatcode_pb.GetAllVatCodesRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.vatcode.GetAllVatCodesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_vatcode_GetAllVatCodesRequestProto(buffer_arg) {
  return vatcode_pb.GetAllVatCodesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_vatcode_GetAllVatCodesResponseProto(arg) {
  if (!(arg instanceof vatcode_pb.GetAllVatCodesResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.vatcode.GetAllVatCodesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_vatcode_GetAllVatCodesResponseProto(buffer_arg) {
  return vatcode_pb.GetAllVatCodesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_vatcode_GetVatCodeRequestProto(arg) {
  if (!(arg instanceof vatcode_pb.GetVatCodeRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.vatcode.GetVatCodeRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_vatcode_GetVatCodeRequestProto(buffer_arg) {
  return vatcode_pb.GetVatCodeRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_vatcode_GetVatCodeResponseProto(arg) {
  if (!(arg instanceof vatcode_pb.GetVatCodeResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.vatcode.GetVatCodeResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_vatcode_GetVatCodeResponseProto(buffer_arg) {
  return vatcode_pb.GetVatCodeResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_vatcode_GetVatCodesRequestProto(arg) {
  if (!(arg instanceof vatcode_pb.GetVatCodesRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.vatcode.GetVatCodesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_vatcode_GetVatCodesRequestProto(buffer_arg) {
  return vatcode_pb.GetVatCodesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_vatcode_GetVatCodesResponseProto(arg) {
  if (!(arg instanceof vatcode_pb.GetVatCodesResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.vatcode.GetVatCodesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_vatcode_GetVatCodesResponseProto(buffer_arg) {
  return vatcode_pb.GetVatCodesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var VatCodeServiceService = exports.VatCodeServiceService = {
  // Gets all vat codes
getAllVatCodes: {
    path: '/bmapi.stocks.vatcode.VatCodeService/GetAllVatCodes',
    requestStream: false,
    responseStream: false,
    requestType: vatcode_pb.GetAllVatCodesRequestProto,
    responseType: vatcode_pb.GetAllVatCodesResponseProto,
    requestSerialize: serialize_bmapi_stocks_vatcode_GetAllVatCodesRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_vatcode_GetAllVatCodesRequestProto,
    responseSerialize: serialize_bmapi_stocks_vatcode_GetAllVatCodesResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_vatcode_GetAllVatCodesResponseProto,
  },
  // Gets a specific vat code. (Errors if not found).
getVatCode: {
    path: '/bmapi.stocks.vatcode.VatCodeService/GetVatCode',
    requestStream: false,
    responseStream: false,
    requestType: vatcode_pb.GetVatCodeRequestProto,
    responseType: vatcode_pb.GetVatCodeResponseProto,
    requestSerialize: serialize_bmapi_stocks_vatcode_GetVatCodeRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_vatcode_GetVatCodeRequestProto,
    responseSerialize: serialize_bmapi_stocks_vatcode_GetVatCodeResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_vatcode_GetVatCodeResponseProto,
  },
  // Gets specific vat codes. (Errors if any not found).
getVatCodes: {
    path: '/bmapi.stocks.vatcode.VatCodeService/GetVatCodes',
    requestStream: false,
    responseStream: false,
    requestType: vatcode_pb.GetVatCodesRequestProto,
    responseType: vatcode_pb.GetVatCodesResponseProto,
    requestSerialize: serialize_bmapi_stocks_vatcode_GetVatCodesRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_vatcode_GetVatCodesRequestProto,
    responseSerialize: serialize_bmapi_stocks_vatcode_GetVatCodesResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_vatcode_GetVatCodesResponseProto,
  },
};

exports.VatCodeServiceClient = grpc.makeGenericClientConstructor(VatCodeServiceService);
