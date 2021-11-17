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

function serialize_bmapi_stocks_vatcode_SaveVatCodesRequestProto(arg) {
  if (!(arg instanceof vatcode_pb.SaveVatCodesRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.vatcode.SaveVatCodesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_vatcode_SaveVatCodesRequestProto(buffer_arg) {
  return vatcode_pb.SaveVatCodesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_vatcode_SaveVatCodesResponseProto(arg) {
  if (!(arg instanceof vatcode_pb.SaveVatCodesResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.vatcode.SaveVatCodesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_vatcode_SaveVatCodesResponseProto(buffer_arg) {
  return vatcode_pb.SaveVatCodesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_vatcode_SetVatCodeIsHiddenRequestProto(arg) {
  if (!(arg instanceof vatcode_pb.SetVatCodeIsHiddenRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.vatcode.SetVatCodeIsHiddenRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_vatcode_SetVatCodeIsHiddenRequestProto(buffer_arg) {
  return vatcode_pb.SetVatCodeIsHiddenRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_vatcode_SetVatCodeIsHiddenResponseProto(arg) {
  if (!(arg instanceof vatcode_pb.SetVatCodeIsHiddenResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.vatcode.SetVatCodeIsHiddenResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_vatcode_SetVatCodeIsHiddenResponseProto(buffer_arg) {
  return vatcode_pb.SetVatCodeIsHiddenResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Saves one or many VatCodes
saveVatCodes: {
    path: '/bmapi.stocks.vatcode.VatCodeService/SaveVatCodes',
    requestStream: false,
    responseStream: false,
    requestType: vatcode_pb.SaveVatCodesRequestProto,
    responseType: vatcode_pb.SaveVatCodesResponseProto,
    requestSerialize: serialize_bmapi_stocks_vatcode_SaveVatCodesRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_vatcode_SaveVatCodesRequestProto,
    responseSerialize: serialize_bmapi_stocks_vatcode_SaveVatCodesResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_vatcode_SaveVatCodesResponseProto,
  },
  // Hides or unhides the given Vat Code.
setVatCodeIsHidden: {
    path: '/bmapi.stocks.vatcode.VatCodeService/SetVatCodeIsHidden',
    requestStream: false,
    responseStream: false,
    requestType: vatcode_pb.SetVatCodeIsHiddenRequestProto,
    responseType: vatcode_pb.SetVatCodeIsHiddenResponseProto,
    requestSerialize: serialize_bmapi_stocks_vatcode_SetVatCodeIsHiddenRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_vatcode_SetVatCodeIsHiddenRequestProto,
    responseSerialize: serialize_bmapi_stocks_vatcode_SetVatCodeIsHiddenResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_vatcode_SetVatCodeIsHiddenResponseProto,
  },
};

exports.VatCodeServiceClient = grpc.makeGenericClientConstructor(VatCodeServiceService);
