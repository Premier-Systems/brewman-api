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

function serialize_bmapi_outlets_outlettype_GetOutletTypeRequestProto(arg) {
  if (!(arg instanceof outlettype_pb.GetOutletTypeRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlettype.GetOutletTypeRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlettype_GetOutletTypeRequestProto(buffer_arg) {
  return outlettype_pb.GetOutletTypeRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlettype_GetOutletTypeResponseProto(arg) {
  if (!(arg instanceof outlettype_pb.GetOutletTypeResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlettype.GetOutletTypeResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlettype_GetOutletTypeResponseProto(buffer_arg) {
  return outlettype_pb.GetOutletTypeResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Gets a specific outlet type. (Errors if not found).
getOutletType: {
    path: '/bmapi.outlets.outlettype.OutletTypeService/GetOutletType',
    requestStream: false,
    responseStream: false,
    requestType: outlettype_pb.GetOutletTypeRequestProto,
    responseType: outlettype_pb.GetOutletTypeResponseProto,
    requestSerialize: serialize_bmapi_outlets_outlettype_GetOutletTypeRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outlettype_GetOutletTypeRequestProto,
    responseSerialize: serialize_bmapi_outlets_outlettype_GetOutletTypeResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outlettype_GetOutletTypeResponseProto,
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
};

exports.OutletTypeServiceClient = grpc.makeGenericClientConstructor(OutletTypeServiceService);
