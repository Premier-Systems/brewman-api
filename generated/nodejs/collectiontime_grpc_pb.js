// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var collectiontime_pb = require('./collectiontime_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_orders_collectiontime_GetAllCollectionTimesRequestProto(arg) {
  if (!(arg instanceof collectiontime_pb.GetAllCollectionTimesRequestProto)) {
    throw new Error('Expected argument of type bmapi.orders.collectiontime.GetAllCollectionTimesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_collectiontime_GetAllCollectionTimesRequestProto(buffer_arg) {
  return collectiontime_pb.GetAllCollectionTimesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_collectiontime_GetAllCollectionTimesResponseProto(arg) {
  if (!(arg instanceof collectiontime_pb.GetAllCollectionTimesResponseProto)) {
    throw new Error('Expected argument of type bmapi.orders.collectiontime.GetAllCollectionTimesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_collectiontime_GetAllCollectionTimesResponseProto(buffer_arg) {
  return collectiontime_pb.GetAllCollectionTimesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_collectiontime_GetCollectionTimeRequestProto(arg) {
  if (!(arg instanceof collectiontime_pb.GetCollectionTimeRequestProto)) {
    throw new Error('Expected argument of type bmapi.orders.collectiontime.GetCollectionTimeRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_collectiontime_GetCollectionTimeRequestProto(buffer_arg) {
  return collectiontime_pb.GetCollectionTimeRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_collectiontime_GetCollectionTimeResponseProto(arg) {
  if (!(arg instanceof collectiontime_pb.GetCollectionTimeResponseProto)) {
    throw new Error('Expected argument of type bmapi.orders.collectiontime.GetCollectionTimeResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_collectiontime_GetCollectionTimeResponseProto(buffer_arg) {
  return collectiontime_pb.GetCollectionTimeResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_collectiontime_GetCollectionTimesRequestProto(arg) {
  if (!(arg instanceof collectiontime_pb.GetCollectionTimesRequestProto)) {
    throw new Error('Expected argument of type bmapi.orders.collectiontime.GetCollectionTimesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_collectiontime_GetCollectionTimesRequestProto(buffer_arg) {
  return collectiontime_pb.GetCollectionTimesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_orders_collectiontime_GetCollectionTimesResponseProto(arg) {
  if (!(arg instanceof collectiontime_pb.GetCollectionTimesResponseProto)) {
    throw new Error('Expected argument of type bmapi.orders.collectiontime.GetCollectionTimesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_orders_collectiontime_GetCollectionTimesResponseProto(buffer_arg) {
  return collectiontime_pb.GetCollectionTimesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var CollectionTimeServiceService = exports.CollectionTimeServiceService = {
  getAllCollectionTimes: {
    path: '/bmapi.orders.collectiontime.CollectionTimeService/GetAllCollectionTimes',
    requestStream: false,
    responseStream: false,
    requestType: collectiontime_pb.GetAllCollectionTimesRequestProto,
    responseType: collectiontime_pb.GetAllCollectionTimesResponseProto,
    requestSerialize: serialize_bmapi_orders_collectiontime_GetAllCollectionTimesRequestProto,
    requestDeserialize: deserialize_bmapi_orders_collectiontime_GetAllCollectionTimesRequestProto,
    responseSerialize: serialize_bmapi_orders_collectiontime_GetAllCollectionTimesResponseProto,
    responseDeserialize: deserialize_bmapi_orders_collectiontime_GetAllCollectionTimesResponseProto,
  },
  getCollectionTime: {
    path: '/bmapi.orders.collectiontime.CollectionTimeService/GetCollectionTime',
    requestStream: false,
    responseStream: false,
    requestType: collectiontime_pb.GetCollectionTimeRequestProto,
    responseType: collectiontime_pb.GetCollectionTimeResponseProto,
    requestSerialize: serialize_bmapi_orders_collectiontime_GetCollectionTimeRequestProto,
    requestDeserialize: deserialize_bmapi_orders_collectiontime_GetCollectionTimeRequestProto,
    responseSerialize: serialize_bmapi_orders_collectiontime_GetCollectionTimeResponseProto,
    responseDeserialize: deserialize_bmapi_orders_collectiontime_GetCollectionTimeResponseProto,
  },
  getCollectionTimes: {
    path: '/bmapi.orders.collectiontime.CollectionTimeService/GetCollectionTimes',
    requestStream: false,
    responseStream: false,
    requestType: collectiontime_pb.GetCollectionTimesRequestProto,
    responseType: collectiontime_pb.GetCollectionTimesResponseProto,
    requestSerialize: serialize_bmapi_orders_collectiontime_GetCollectionTimesRequestProto,
    requestDeserialize: deserialize_bmapi_orders_collectiontime_GetCollectionTimesRequestProto,
    responseSerialize: serialize_bmapi_orders_collectiontime_GetCollectionTimesResponseProto,
    responseDeserialize: deserialize_bmapi_orders_collectiontime_GetCollectionTimesResponseProto,
  },
};

exports.CollectionTimeServiceClient = grpc.makeGenericClientConstructor(CollectionTimeServiceService);
