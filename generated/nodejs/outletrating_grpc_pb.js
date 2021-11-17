// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var outletrating_pb = require('./outletrating_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_outlets_outletrating_GetAllOutletRatingsRequestProto(arg) {
  if (!(arg instanceof outletrating_pb.GetAllOutletRatingsRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outletrating.GetAllOutletRatingsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outletrating_GetAllOutletRatingsRequestProto(buffer_arg) {
  return outletrating_pb.GetAllOutletRatingsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outletrating_GetAllOutletRatingsResponseProto(arg) {
  if (!(arg instanceof outletrating_pb.GetAllOutletRatingsResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outletrating.GetAllOutletRatingsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outletrating_GetAllOutletRatingsResponseProto(buffer_arg) {
  return outletrating_pb.GetAllOutletRatingsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outletrating_GetOutletRatingsRequestProto(arg) {
  if (!(arg instanceof outletrating_pb.GetOutletRatingsRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outletrating.GetOutletRatingsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outletrating_GetOutletRatingsRequestProto(buffer_arg) {
  return outletrating_pb.GetOutletRatingsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outletrating_GetOutletRatingsResponseProto(arg) {
  if (!(arg instanceof outletrating_pb.GetOutletRatingsResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outletrating.GetOutletRatingsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outletrating_GetOutletRatingsResponseProto(buffer_arg) {
  return outletrating_pb.GetOutletRatingsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outletrating_SaveOutletRatingsRequestProto(arg) {
  if (!(arg instanceof outletrating_pb.SaveOutletRatingsRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outletrating.SaveOutletRatingsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outletrating_SaveOutletRatingsRequestProto(buffer_arg) {
  return outletrating_pb.SaveOutletRatingsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outletrating_SaveOutletRatingsResponseProto(arg) {
  if (!(arg instanceof outletrating_pb.SaveOutletRatingsResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outletrating.SaveOutletRatingsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outletrating_SaveOutletRatingsResponseProto(buffer_arg) {
  return outletrating_pb.SaveOutletRatingsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outletrating_SetOutletRatingIsHiddenRequestProto(arg) {
  if (!(arg instanceof outletrating_pb.SetOutletRatingIsHiddenRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outletrating.SetOutletRatingIsHiddenRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outletrating_SetOutletRatingIsHiddenRequestProto(buffer_arg) {
  return outletrating_pb.SetOutletRatingIsHiddenRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outletrating_SetOutletRatingIsHiddenResponseProto(arg) {
  if (!(arg instanceof outletrating_pb.SetOutletRatingIsHiddenResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outletrating.SetOutletRatingIsHiddenResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outletrating_SetOutletRatingIsHiddenResponseProto(buffer_arg) {
  return outletrating_pb.SetOutletRatingIsHiddenResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var OutletRatingServiceService = exports.OutletRatingServiceService = {
  // Gets all outlet ratings.
getAllOutletRatings: {
    path: '/bmapi.outlets.outletrating.OutletRatingService/GetAllOutletRatings',
    requestStream: false,
    responseStream: false,
    requestType: outletrating_pb.GetAllOutletRatingsRequestProto,
    responseType: outletrating_pb.GetAllOutletRatingsResponseProto,
    requestSerialize: serialize_bmapi_outlets_outletrating_GetAllOutletRatingsRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outletrating_GetAllOutletRatingsRequestProto,
    responseSerialize: serialize_bmapi_outlets_outletrating_GetAllOutletRatingsResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outletrating_GetAllOutletRatingsResponseProto,
  },
  // Gets specific outlet ratings. (Errors if any not found).
getOutletRatings: {
    path: '/bmapi.outlets.outletrating.OutletRatingService/GetOutletRatings',
    requestStream: false,
    responseStream: false,
    requestType: outletrating_pb.GetOutletRatingsRequestProto,
    responseType: outletrating_pb.GetOutletRatingsResponseProto,
    requestSerialize: serialize_bmapi_outlets_outletrating_GetOutletRatingsRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outletrating_GetOutletRatingsRequestProto,
    responseSerialize: serialize_bmapi_outlets_outletrating_GetOutletRatingsResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outletrating_GetOutletRatingsResponseProto,
  },
  // Saves one or many outlet ratings
saveOutletRatings: {
    path: '/bmapi.outlets.outletrating.OutletRatingService/SaveOutletRatings',
    requestStream: false,
    responseStream: false,
    requestType: outletrating_pb.SaveOutletRatingsRequestProto,
    responseType: outletrating_pb.SaveOutletRatingsResponseProto,
    requestSerialize: serialize_bmapi_outlets_outletrating_SaveOutletRatingsRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outletrating_SaveOutletRatingsRequestProto,
    responseSerialize: serialize_bmapi_outlets_outletrating_SaveOutletRatingsResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outletrating_SaveOutletRatingsResponseProto,
  },
  // Hides or unhides the given OutletRating.
setOutletRatingIsHidden: {
    path: '/bmapi.outlets.outletrating.OutletRatingService/SetOutletRatingIsHidden',
    requestStream: false,
    responseStream: false,
    requestType: outletrating_pb.SetOutletRatingIsHiddenRequestProto,
    responseType: outletrating_pb.SetOutletRatingIsHiddenResponseProto,
    requestSerialize: serialize_bmapi_outlets_outletrating_SetOutletRatingIsHiddenRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outletrating_SetOutletRatingIsHiddenRequestProto,
    responseSerialize: serialize_bmapi_outlets_outletrating_SetOutletRatingIsHiddenResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outletrating_SetOutletRatingIsHiddenResponseProto,
  },
};

exports.OutletRatingServiceClient = grpc.makeGenericClientConstructor(OutletRatingServiceService);
