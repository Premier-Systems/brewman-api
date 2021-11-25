// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var glcode_pb = require('./glcode_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_stocks_glcode_GetAllGlCodeOverridesRequestProto(arg) {
  if (!(arg instanceof glcode_pb.GetAllGlCodeOverridesRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.glcode.GetAllGlCodeOverridesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_glcode_GetAllGlCodeOverridesRequestProto(buffer_arg) {
  return glcode_pb.GetAllGlCodeOverridesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_glcode_GetAllGlCodeOverridesResponseProto(arg) {
  if (!(arg instanceof glcode_pb.GetAllGlCodeOverridesResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.glcode.GetAllGlCodeOverridesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_glcode_GetAllGlCodeOverridesResponseProto(buffer_arg) {
  return glcode_pb.GetAllGlCodeOverridesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_glcode_GetAllGlCodesRequestProto(arg) {
  if (!(arg instanceof glcode_pb.GetAllGlCodesRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.glcode.GetAllGlCodesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_glcode_GetAllGlCodesRequestProto(buffer_arg) {
  return glcode_pb.GetAllGlCodesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_glcode_GetAllGlCodesResponseProto(arg) {
  if (!(arg instanceof glcode_pb.GetAllGlCodesResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.glcode.GetAllGlCodesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_glcode_GetAllGlCodesResponseProto(buffer_arg) {
  return glcode_pb.GetAllGlCodesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_glcode_GetGlCodeRequestProto(arg) {
  if (!(arg instanceof glcode_pb.GetGlCodeRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.glcode.GetGlCodeRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_glcode_GetGlCodeRequestProto(buffer_arg) {
  return glcode_pb.GetGlCodeRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_glcode_GetGlCodeResponseProto(arg) {
  if (!(arg instanceof glcode_pb.GetGlCodeResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.glcode.GetGlCodeResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_glcode_GetGlCodeResponseProto(buffer_arg) {
  return glcode_pb.GetGlCodeResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_glcode_GetGlCodesRequestProto(arg) {
  if (!(arg instanceof glcode_pb.GetGlCodesRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.glcode.GetGlCodesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_glcode_GetGlCodesRequestProto(buffer_arg) {
  return glcode_pb.GetGlCodesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_glcode_GetGlCodesResponseProto(arg) {
  if (!(arg instanceof glcode_pb.GetGlCodesResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.glcode.GetGlCodesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_glcode_GetGlCodesResponseProto(buffer_arg) {
  return glcode_pb.GetGlCodesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var GlCodeServiceService = exports.GlCodeServiceService = {
  // Gets all GlCodes
getAllGlCodes: {
    path: '/bmapi.stocks.glcode.GlCodeService/GetAllGlCodes',
    requestStream: false,
    responseStream: false,
    requestType: glcode_pb.GetAllGlCodesRequestProto,
    responseType: glcode_pb.GetAllGlCodesResponseProto,
    requestSerialize: serialize_bmapi_stocks_glcode_GetAllGlCodesRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_glcode_GetAllGlCodesRequestProto,
    responseSerialize: serialize_bmapi_stocks_glcode_GetAllGlCodesResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_glcode_GetAllGlCodesResponseProto,
  },
  // Gets a specific GlCode by Id. (Errors if not found).
getGlCode: {
    path: '/bmapi.stocks.glcode.GlCodeService/GetGlCode',
    requestStream: false,
    responseStream: false,
    requestType: glcode_pb.GetGlCodeRequestProto,
    responseType: glcode_pb.GetGlCodeResponseProto,
    requestSerialize: serialize_bmapi_stocks_glcode_GetGlCodeRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_glcode_GetGlCodeRequestProto,
    responseSerialize: serialize_bmapi_stocks_glcode_GetGlCodeResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_glcode_GetGlCodeResponseProto,
  },
  // Gets specific GlCodes by Ids. (Errors if any not found).
getGlCodes: {
    path: '/bmapi.stocks.glcode.GlCodeService/GetGlCodes',
    requestStream: false,
    responseStream: false,
    requestType: glcode_pb.GetGlCodesRequestProto,
    responseType: glcode_pb.GetGlCodesResponseProto,
    requestSerialize: serialize_bmapi_stocks_glcode_GetGlCodesRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_glcode_GetGlCodesRequestProto,
    responseSerialize: serialize_bmapi_stocks_glcode_GetGlCodesResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_glcode_GetGlCodesResponseProto,
  },
  // Gets all GlCodeOverrides
getAllGlCodeOverrides: {
    path: '/bmapi.stocks.glcode.GlCodeService/GetAllGlCodeOverrides',
    requestStream: false,
    responseStream: false,
    requestType: glcode_pb.GetAllGlCodeOverridesRequestProto,
    responseType: glcode_pb.GetAllGlCodeOverridesResponseProto,
    requestSerialize: serialize_bmapi_stocks_glcode_GetAllGlCodeOverridesRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_glcode_GetAllGlCodeOverridesRequestProto,
    responseSerialize: serialize_bmapi_stocks_glcode_GetAllGlCodeOverridesResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_glcode_GetAllGlCodeOverridesResponseProto,
  },
};

exports.GlCodeServiceClient = grpc.makeGenericClientConstructor(GlCodeServiceService);
