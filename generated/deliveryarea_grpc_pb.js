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

function serialize_bmapi_distribution_deliveryarea_SaveDeliveryAreasRequestProto(arg) {
  if (!(arg instanceof deliveryarea_pb.SaveDeliveryAreasRequestProto)) {
    throw new Error('Expected argument of type bmapi.distribution.deliveryarea.SaveDeliveryAreasRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_deliveryarea_SaveDeliveryAreasRequestProto(buffer_arg) {
  return deliveryarea_pb.SaveDeliveryAreasRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_deliveryarea_SaveDeliveryAreasResponseProto(arg) {
  if (!(arg instanceof deliveryarea_pb.SaveDeliveryAreasResponseProto)) {
    throw new Error('Expected argument of type bmapi.distribution.deliveryarea.SaveDeliveryAreasResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_deliveryarea_SaveDeliveryAreasResponseProto(buffer_arg) {
  return deliveryarea_pb.SaveDeliveryAreasResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_deliveryarea_SetDeliveryAreaIsHiddenRequestProto(arg) {
  if (!(arg instanceof deliveryarea_pb.SetDeliveryAreaIsHiddenRequestProto)) {
    throw new Error('Expected argument of type bmapi.distribution.deliveryarea.SetDeliveryAreaIsHiddenRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_deliveryarea_SetDeliveryAreaIsHiddenRequestProto(buffer_arg) {
  return deliveryarea_pb.SetDeliveryAreaIsHiddenRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_deliveryarea_SetDeliveryAreaIsHiddenResponseProto(arg) {
  if (!(arg instanceof deliveryarea_pb.SetDeliveryAreaIsHiddenResponseProto)) {
    throw new Error('Expected argument of type bmapi.distribution.deliveryarea.SetDeliveryAreaIsHiddenResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_deliveryarea_SetDeliveryAreaIsHiddenResponseProto(buffer_arg) {
  return deliveryarea_pb.SetDeliveryAreaIsHiddenResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var DeliveryAreaServiceService = exports.DeliveryAreaServiceService = {
  // Gets all undeleted DeliveryAreas
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
  // Gets a specific DeliveryArea by Id, even if it has been soft-deleted. (Errors if not found).
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
  // Saves zero or more Delivery Areas
saveDeliveryAreas: {
    path: '/bmapi.distribution.deliveryarea.DeliveryAreaService/SaveDeliveryAreas',
    requestStream: false,
    responseStream: false,
    requestType: deliveryarea_pb.SaveDeliveryAreasRequestProto,
    responseType: deliveryarea_pb.SaveDeliveryAreasResponseProto,
    requestSerialize: serialize_bmapi_distribution_deliveryarea_SaveDeliveryAreasRequestProto,
    requestDeserialize: deserialize_bmapi_distribution_deliveryarea_SaveDeliveryAreasRequestProto,
    responseSerialize: serialize_bmapi_distribution_deliveryarea_SaveDeliveryAreasResponseProto,
    responseDeserialize: deserialize_bmapi_distribution_deliveryarea_SaveDeliveryAreasResponseProto,
  },
  // Hides or unhides the given Delivery Area
setDeliveryAreaIsHidden: {
    path: '/bmapi.distribution.deliveryarea.DeliveryAreaService/SetDeliveryAreaIsHidden',
    requestStream: false,
    responseStream: false,
    requestType: deliveryarea_pb.SetDeliveryAreaIsHiddenRequestProto,
    responseType: deliveryarea_pb.SetDeliveryAreaIsHiddenResponseProto,
    requestSerialize: serialize_bmapi_distribution_deliveryarea_SetDeliveryAreaIsHiddenRequestProto,
    requestDeserialize: deserialize_bmapi_distribution_deliveryarea_SetDeliveryAreaIsHiddenRequestProto,
    responseSerialize: serialize_bmapi_distribution_deliveryarea_SetDeliveryAreaIsHiddenResponseProto,
    responseDeserialize: deserialize_bmapi_distribution_deliveryarea_SetDeliveryAreaIsHiddenResponseProto,
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
