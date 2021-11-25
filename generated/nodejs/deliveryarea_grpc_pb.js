// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var deliveryarea_pb = require('./deliveryarea_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_distribution_deliveryarea_CalculateNextDespatchDateByDeliveryAreaRequestProto(arg) {
  if (!(arg instanceof deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaRequestProto)) {
    throw new Error('Expected argument of type bmapi.distribution.deliveryarea.CalculateNextDespatchDateByDeliveryAreaRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_deliveryarea_CalculateNextDespatchDateByDeliveryAreaRequestProto(buffer_arg) {
  return deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_deliveryarea_CalculateNextDespatchDateByDeliveryAreaResponseProto(arg) {
  if (!(arg instanceof deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaResponseProto)) {
    throw new Error('Expected argument of type bmapi.distribution.deliveryarea.CalculateNextDespatchDateByDeliveryAreaResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_deliveryarea_CalculateNextDespatchDateByDeliveryAreaResponseProto(buffer_arg) {
  return deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_deliveryarea_GetAllDeliveryAreasRequestProto(arg) {
  if (!(arg instanceof deliveryarea_pb.GetAllDeliveryAreasRequestProto)) {
    throw new Error('Expected argument of type bmapi.distribution.deliveryarea.GetAllDeliveryAreasRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_deliveryarea_GetAllDeliveryAreasRequestProto(buffer_arg) {
  return deliveryarea_pb.GetAllDeliveryAreasRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_deliveryarea_GetAllDeliveryAreasResponseProto(arg) {
  if (!(arg instanceof deliveryarea_pb.GetAllDeliveryAreasResponseProto)) {
    throw new Error('Expected argument of type bmapi.distribution.deliveryarea.GetAllDeliveryAreasResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_deliveryarea_GetAllDeliveryAreasResponseProto(buffer_arg) {
  return deliveryarea_pb.GetAllDeliveryAreasResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_deliveryarea_GetDeliveryAreaRequestProto(arg) {
  if (!(arg instanceof deliveryarea_pb.GetDeliveryAreaRequestProto)) {
    throw new Error('Expected argument of type bmapi.distribution.deliveryarea.GetDeliveryAreaRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_deliveryarea_GetDeliveryAreaRequestProto(buffer_arg) {
  return deliveryarea_pb.GetDeliveryAreaRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_deliveryarea_GetDeliveryAreaResponseProto(arg) {
  if (!(arg instanceof deliveryarea_pb.GetDeliveryAreaResponseProto)) {
    throw new Error('Expected argument of type bmapi.distribution.deliveryarea.GetDeliveryAreaResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_deliveryarea_GetDeliveryAreaResponseProto(buffer_arg) {
  return deliveryarea_pb.GetDeliveryAreaResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_deliveryarea_GetDeliveryAreasRequestProto(arg) {
  if (!(arg instanceof deliveryarea_pb.GetDeliveryAreasRequestProto)) {
    throw new Error('Expected argument of type bmapi.distribution.deliveryarea.GetDeliveryAreasRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_deliveryarea_GetDeliveryAreasRequestProto(buffer_arg) {
  return deliveryarea_pb.GetDeliveryAreasRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_deliveryarea_GetDeliveryAreasResponseProto(arg) {
  if (!(arg instanceof deliveryarea_pb.GetDeliveryAreasResponseProto)) {
    throw new Error('Expected argument of type bmapi.distribution.deliveryarea.GetDeliveryAreasResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_deliveryarea_GetDeliveryAreasResponseProto(buffer_arg) {
  return deliveryarea_pb.GetDeliveryAreasResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var DeliveryAreaServiceService = exports.DeliveryAreaServiceService = {
  // Gets all DeliveryAreas
getAllDeliveryAreas: {
    path: '/bmapi.distribution.deliveryarea.DeliveryAreaService/GetAllDeliveryAreas',
    requestStream: false,
    responseStream: false,
    requestType: deliveryarea_pb.GetAllDeliveryAreasRequestProto,
    responseType: deliveryarea_pb.GetAllDeliveryAreasResponseProto,
    requestSerialize: serialize_bmapi_distribution_deliveryarea_GetAllDeliveryAreasRequestProto,
    requestDeserialize: deserialize_bmapi_distribution_deliveryarea_GetAllDeliveryAreasRequestProto,
    responseSerialize: serialize_bmapi_distribution_deliveryarea_GetAllDeliveryAreasResponseProto,
    responseDeserialize: deserialize_bmapi_distribution_deliveryarea_GetAllDeliveryAreasResponseProto,
  },
  // Gets a specific DeliveryArea by Id. (Errors if not found).
getDeliveryArea: {
    path: '/bmapi.distribution.deliveryarea.DeliveryAreaService/GetDeliveryArea',
    requestStream: false,
    responseStream: false,
    requestType: deliveryarea_pb.GetDeliveryAreaRequestProto,
    responseType: deliveryarea_pb.GetDeliveryAreaResponseProto,
    requestSerialize: serialize_bmapi_distribution_deliveryarea_GetDeliveryAreaRequestProto,
    requestDeserialize: deserialize_bmapi_distribution_deliveryarea_GetDeliveryAreaRequestProto,
    responseSerialize: serialize_bmapi_distribution_deliveryarea_GetDeliveryAreaResponseProto,
    responseDeserialize: deserialize_bmapi_distribution_deliveryarea_GetDeliveryAreaResponseProto,
  },
  // Gets specific DeliveryAreas by Id. (Errors if any not found).
getDeliveryAreas: {
    path: '/bmapi.distribution.deliveryarea.DeliveryAreaService/GetDeliveryAreas',
    requestStream: false,
    responseStream: false,
    requestType: deliveryarea_pb.GetDeliveryAreasRequestProto,
    responseType: deliveryarea_pb.GetDeliveryAreasResponseProto,
    requestSerialize: serialize_bmapi_distribution_deliveryarea_GetDeliveryAreasRequestProto,
    requestDeserialize: deserialize_bmapi_distribution_deliveryarea_GetDeliveryAreasRequestProto,
    responseSerialize: serialize_bmapi_distribution_deliveryarea_GetDeliveryAreasResponseProto,
    responseDeserialize: deserialize_bmapi_distribution_deliveryarea_GetDeliveryAreasResponseProto,
  },
  // Calculate the next despatch date by the given Delivery Area id.
calculateNextDespatchDateByDeliveryArea: {
    path: '/bmapi.distribution.deliveryarea.DeliveryAreaService/CalculateNextDespatchDateByDeliveryArea',
    requestStream: false,
    responseStream: false,
    requestType: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaRequestProto,
    responseType: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaResponseProto,
    requestSerialize: serialize_bmapi_distribution_deliveryarea_CalculateNextDespatchDateByDeliveryAreaRequestProto,
    requestDeserialize: deserialize_bmapi_distribution_deliveryarea_CalculateNextDespatchDateByDeliveryAreaRequestProto,
    responseSerialize: serialize_bmapi_distribution_deliveryarea_CalculateNextDespatchDateByDeliveryAreaResponseProto,
    responseDeserialize: deserialize_bmapi_distribution_deliveryarea_CalculateNextDespatchDateByDeliveryAreaResponseProto,
  },
};

exports.DeliveryAreaServiceClient = grpc.makeGenericClientConstructor(DeliveryAreaServiceService);
