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

function serialize_bmapi_outlets_outletrating_GetOutletRatingRequestProto(arg) {
  if (!(arg instanceof outletrating_pb.GetOutletRatingRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outletrating.GetOutletRatingRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outletrating_GetOutletRatingRequestProto(buffer_arg) {
  return outletrating_pb.GetOutletRatingRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outletrating_GetOutletRatingResponseProto(arg) {
  if (!(arg instanceof outletrating_pb.GetOutletRatingResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outletrating.GetOutletRatingResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outletrating_GetOutletRatingResponseProto(buffer_arg) {
  return outletrating_pb.GetOutletRatingResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Gets a specific outlet rating. (Errors if not found).
getOutletRating: {
    path: '/bmapi.outlets.outletrating.OutletRatingService/GetOutletRating',
    requestStream: false,
    responseStream: false,
    requestType: outletrating_pb.GetOutletRatingRequestProto,
    responseType: outletrating_pb.GetOutletRatingResponseProto,
    requestSerialize: serialize_bmapi_outlets_outletrating_GetOutletRatingRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outletrating_GetOutletRatingRequestProto,
    responseSerialize: serialize_bmapi_outlets_outletrating_GetOutletRatingResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outletrating_GetOutletRatingResponseProto,
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
};

exports.OutletRatingServiceClient = grpc.makeGenericClientConstructor(OutletRatingServiceService);
