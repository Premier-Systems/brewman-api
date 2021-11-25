// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var creditterm_pb = require('./creditterm_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_outlets_creditterm_GetAllCreditTermsRequestProto(arg) {
  if (!(arg instanceof creditterm_pb.GetAllCreditTermsRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.GetAllCreditTermsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_GetAllCreditTermsRequestProto(buffer_arg) {
  return creditterm_pb.GetAllCreditTermsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_GetAllCreditTermsResponseProto(arg) {
  if (!(arg instanceof creditterm_pb.GetAllCreditTermsResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.GetAllCreditTermsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_GetAllCreditTermsResponseProto(buffer_arg) {
  return creditterm_pb.GetAllCreditTermsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_GetCreditTermRequestProto(arg) {
  if (!(arg instanceof creditterm_pb.GetCreditTermRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.GetCreditTermRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_GetCreditTermRequestProto(buffer_arg) {
  return creditterm_pb.GetCreditTermRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_GetCreditTermResponseProto(arg) {
  if (!(arg instanceof creditterm_pb.GetCreditTermResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.GetCreditTermResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_GetCreditTermResponseProto(buffer_arg) {
  return creditterm_pb.GetCreditTermResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_GetCreditTermsRequestProto(arg) {
  if (!(arg instanceof creditterm_pb.GetCreditTermsRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.GetCreditTermsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_GetCreditTermsRequestProto(buffer_arg) {
  return creditterm_pb.GetCreditTermsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_GetCreditTermsResponseProto(arg) {
  if (!(arg instanceof creditterm_pb.GetCreditTermsResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.GetCreditTermsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_GetCreditTermsResponseProto(buffer_arg) {
  return creditterm_pb.GetCreditTermsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var CreditTermServiceService = exports.CreditTermServiceService = {
  // Gets all CreditTerms
getAllCreditTerms: {
    path: '/bmapi.outlets.creditterm.CreditTermService/GetAllCreditTerms',
    requestStream: false,
    responseStream: false,
    requestType: creditterm_pb.GetAllCreditTermsRequestProto,
    responseType: creditterm_pb.GetAllCreditTermsResponseProto,
    requestSerialize: serialize_bmapi_outlets_creditterm_GetAllCreditTermsRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_creditterm_GetAllCreditTermsRequestProto,
    responseSerialize: serialize_bmapi_outlets_creditterm_GetAllCreditTermsResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_creditterm_GetAllCreditTermsResponseProto,
  },
  // Gets a specific CreditTerm by Id. (Errors if not found).
getCreditTerm: {
    path: '/bmapi.outlets.creditterm.CreditTermService/GetCreditTerm',
    requestStream: false,
    responseStream: false,
    requestType: creditterm_pb.GetCreditTermRequestProto,
    responseType: creditterm_pb.GetCreditTermResponseProto,
    requestSerialize: serialize_bmapi_outlets_creditterm_GetCreditTermRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_creditterm_GetCreditTermRequestProto,
    responseSerialize: serialize_bmapi_outlets_creditterm_GetCreditTermResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_creditterm_GetCreditTermResponseProto,
  },
  // Gets specific CreditTerms by Ids. (Errors if any not found).
getCreditTerms: {
    path: '/bmapi.outlets.creditterm.CreditTermService/GetCreditTerms',
    requestStream: false,
    responseStream: false,
    requestType: creditterm_pb.GetCreditTermsRequestProto,
    responseType: creditterm_pb.GetCreditTermsResponseProto,
    requestSerialize: serialize_bmapi_outlets_creditterm_GetCreditTermsRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_creditterm_GetCreditTermsRequestProto,
    responseSerialize: serialize_bmapi_outlets_creditterm_GetCreditTermsResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_creditterm_GetCreditTermsResponseProto,
  },
};

exports.CreditTermServiceClient = grpc.makeGenericClientConstructor(CreditTermServiceService);
