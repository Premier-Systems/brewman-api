// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var outlettype_pb = require('./outlettype_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_outlets_outlettype_GetAllOutletTypesRequestProto(arg) {
  if (!(arg instanceof outlettype_pb.GetAllOutletTypesRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlettype.GetAllOutletTypesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlettype_GetAllOutletTypesRequestProto(buffer_arg) {
  return outlettype_pb.GetAllOutletTypesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlettype_GetAllOutletTypesResponseProto(arg) {
  if (!(arg instanceof outlettype_pb.GetAllOutletTypesResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlettype.GetAllOutletTypesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlettype_GetAllOutletTypesResponseProto(buffer_arg) {
  return outlettype_pb.GetAllOutletTypesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlettype_GetOutletTypesRequestProto(arg) {
  if (!(arg instanceof outlettype_pb.GetOutletTypesRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlettype.GetOutletTypesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlettype_GetOutletTypesRequestProto(buffer_arg) {
  return outlettype_pb.GetOutletTypesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlettype_GetOutletTypesResponseProto(arg) {
  if (!(arg instanceof outlettype_pb.GetOutletTypesResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlettype.GetOutletTypesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlettype_GetOutletTypesResponseProto(buffer_arg) {
  return outlettype_pb.GetOutletTypesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlettype_SaveOutletTypesRequestProto(arg) {
  if (!(arg instanceof outlettype_pb.SaveOutletTypesRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlettype.SaveOutletTypesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlettype_SaveOutletTypesRequestProto(buffer_arg) {
  return outlettype_pb.SaveOutletTypesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlettype_SaveOutletTypesResponseProto(arg) {
  if (!(arg instanceof outlettype_pb.SaveOutletTypesResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlettype.SaveOutletTypesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlettype_SaveOutletTypesResponseProto(buffer_arg) {
  return outlettype_pb.SaveOutletTypesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlettype_SetOutletTypeIsHiddenRequestProto(arg) {
  if (!(arg instanceof outlettype_pb.SetOutletTypeIsHiddenRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlettype.SetOutletTypeIsHiddenRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlettype_SetOutletTypeIsHiddenRequestProto(buffer_arg) {
  return outlettype_pb.SetOutletTypeIsHiddenRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlettype_SetOutletTypeIsHiddenResponseProto(arg) {
  if (!(arg instanceof outlettype_pb.SetOutletTypeIsHiddenResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlettype.SetOutletTypeIsHiddenResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlettype_SetOutletTypeIsHiddenResponseProto(buffer_arg) {
  return outlettype_pb.SetOutletTypeIsHiddenResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var OutletTypeServiceService = exports.OutletTypeServiceService = {
  // Gets all outlet types.
getAllOutletTypes: {
    path: '/bmapi.outlets.outlettype.OutletTypeService/GetAllOutletTypes',
    requestStream: false,
    responseStream: false,
    requestType: outlettype_pb.GetAllOutletTypesRequestProto,
    responseType: outlettype_pb.GetAllOutletTypesResponseProto,
    requestSerialize: serialize_bmapi_outlets_outlettype_GetAllOutletTypesRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outlettype_GetAllOutletTypesRequestProto,
    responseSerialize: serialize_bmapi_outlets_outlettype_GetAllOutletTypesResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outlettype_GetAllOutletTypesResponseProto,
  },
  // Gets specific outlet types. (Errors if any not found).
getOutletTypes: {
    path: '/bmapi.outlets.outlettype.OutletTypeService/GetOutletTypes',
    requestStream: false,
    responseStream: false,
    requestType: outlettype_pb.GetOutletTypesRequestProto,
    responseType: outlettype_pb.GetOutletTypesResponseProto,
    requestSerialize: serialize_bmapi_outlets_outlettype_GetOutletTypesRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outlettype_GetOutletTypesRequestProto,
    responseSerialize: serialize_bmapi_outlets_outlettype_GetOutletTypesResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outlettype_GetOutletTypesResponseProto,
  },
  // Saves one or many outlet types
saveOutletTypes: {
    path: '/bmapi.outlets.outlettype.OutletTypeService/SaveOutletTypes',
    requestStream: false,
    responseStream: false,
    requestType: outlettype_pb.SaveOutletTypesRequestProto,
    responseType: outlettype_pb.SaveOutletTypesResponseProto,
    requestSerialize: serialize_bmapi_outlets_outlettype_SaveOutletTypesRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outlettype_SaveOutletTypesRequestProto,
    responseSerialize: serialize_bmapi_outlets_outlettype_SaveOutletTypesResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outlettype_SaveOutletTypesResponseProto,
  },
  // Hides or unhides the given Outlet Type.
setOutletTypeIsHidden: {
    path: '/bmapi.outlets.outlettype.OutletTypeService/SetOutletTypeIsHidden',
    requestStream: false,
    responseStream: false,
    requestType: outlettype_pb.SetOutletTypeIsHiddenRequestProto,
    responseType: outlettype_pb.SetOutletTypeIsHiddenResponseProto,
    requestSerialize: serialize_bmapi_outlets_outlettype_SetOutletTypeIsHiddenRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outlettype_SetOutletTypeIsHiddenRequestProto,
    responseSerialize: serialize_bmapi_outlets_outlettype_SetOutletTypeIsHiddenResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outlettype_SetOutletTypeIsHiddenResponseProto,
  },
};

exports.OutletTypeServiceClient = grpc.makeGenericClientConstructor(OutletTypeServiceService);
