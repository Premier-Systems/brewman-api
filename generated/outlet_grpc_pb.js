// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var outlet_pb = require('./outlet_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_outlets_outlet_GetAllOutletsRequestProto(arg) {
  if (!(arg instanceof outlet_pb.GetAllOutletsRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlet.GetAllOutletsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlet_GetAllOutletsRequestProto(buffer_arg) {
  return outlet_pb.GetAllOutletsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlet_GetAllOutletsResponseProto(arg) {
  if (!(arg instanceof outlet_pb.GetAllOutletsResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlet.GetAllOutletsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlet_GetAllOutletsResponseProto(buffer_arg) {
  return outlet_pb.GetAllOutletsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlet_GetOutletRequestProto(arg) {
  if (!(arg instanceof outlet_pb.GetOutletRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlet.GetOutletRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlet_GetOutletRequestProto(buffer_arg) {
  return outlet_pb.GetOutletRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlet_GetOutletResponseProto(arg) {
  if (!(arg instanceof outlet_pb.GetOutletResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlet.GetOutletResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlet_GetOutletResponseProto(buffer_arg) {
  return outlet_pb.GetOutletResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlet_GetOutletsByFilterRequestProto(arg) {
  if (!(arg instanceof outlet_pb.GetOutletsByFilterRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlet.GetOutletsByFilterRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlet_GetOutletsByFilterRequestProto(buffer_arg) {
  return outlet_pb.GetOutletsByFilterRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlet_GetOutletsByFilterResponseProto(arg) {
  if (!(arg instanceof outlet_pb.GetOutletsByFilterResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlet.GetOutletsByFilterResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlet_GetOutletsByFilterResponseProto(buffer_arg) {
  return outlet_pb.GetOutletsByFilterResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlet_GetOutletsRequestProto(arg) {
  if (!(arg instanceof outlet_pb.GetOutletsRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlet.GetOutletsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlet_GetOutletsRequestProto(buffer_arg) {
  return outlet_pb.GetOutletsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlet_GetOutletsResponseProto(arg) {
  if (!(arg instanceof outlet_pb.GetOutletsResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlet.GetOutletsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlet_GetOutletsResponseProto(buffer_arg) {
  return outlet_pb.GetOutletsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlet_SetOutletIsHiddenRequestProto(arg) {
  if (!(arg instanceof outlet_pb.SetOutletIsHiddenRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlet.SetOutletIsHiddenRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlet_SetOutletIsHiddenRequestProto(buffer_arg) {
  return outlet_pb.SetOutletIsHiddenRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_outlet_SetOutletIsHiddenResponseProto(arg) {
  if (!(arg instanceof outlet_pb.SetOutletIsHiddenResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.outlet.SetOutletIsHiddenResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_outlet_SetOutletIsHiddenResponseProto(buffer_arg) {
  return outlet_pb.SetOutletIsHiddenResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var OutletServiceService = exports.OutletServiceService = {
  // Gets all undeleted Outlets
getAllOutlets: {
    path: '/bmapi.outlets.outlet.OutletService/GetAllOutlets',
    requestStream: false,
    responseStream: false,
    requestType: outlet_pb.GetAllOutletsRequestProto,
    responseType: outlet_pb.GetAllOutletsResponseProto,
    requestSerialize: serialize_bmapi_outlets_outlet_GetAllOutletsRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outlet_GetAllOutletsRequestProto,
    responseSerialize: serialize_bmapi_outlets_outlet_GetAllOutletsResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outlet_GetAllOutletsResponseProto,
  },
  // Gets specific Outlets by Ids, including soft-deleted ones. (Errors if any not found).
getOutlets: {
    path: '/bmapi.outlets.outlet.OutletService/GetOutlets',
    requestStream: false,
    responseStream: false,
    requestType: outlet_pb.GetOutletsRequestProto,
    responseType: outlet_pb.GetOutletsResponseProto,
    requestSerialize: serialize_bmapi_outlets_outlet_GetOutletsRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outlet_GetOutletsRequestProto,
    responseSerialize: serialize_bmapi_outlets_outlet_GetOutletsResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outlet_GetOutletsResponseProto,
  },
  // Gets a specific Outlet by Id, even if soft-deleted. (Errors if not found).
getOutlet: {
    path: '/bmapi.outlets.outlet.OutletService/GetOutlet',
    requestStream: false,
    responseStream: false,
    requestType: outlet_pb.GetOutletRequestProto,
    responseType: outlet_pb.GetOutletResponseProto,
    requestSerialize: serialize_bmapi_outlets_outlet_GetOutletRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outlet_GetOutletRequestProto,
    responseSerialize: serialize_bmapi_outlets_outlet_GetOutletResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outlet_GetOutletResponseProto,
  },
  // Hides or unhides the given Outlet.
setOutletIsHidden: {
    path: '/bmapi.outlets.outlet.OutletService/SetOutletIsHidden',
    requestStream: false,
    responseStream: false,
    requestType: outlet_pb.SetOutletIsHiddenRequestProto,
    responseType: outlet_pb.SetOutletIsHiddenResponseProto,
    requestSerialize: serialize_bmapi_outlets_outlet_SetOutletIsHiddenRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outlet_SetOutletIsHiddenRequestProto,
    responseSerialize: serialize_bmapi_outlets_outlet_SetOutletIsHiddenResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outlet_SetOutletIsHiddenResponseProto,
  },
  // Get Outlets matching the given filter. (soft-deleted outlets are not returned).
getOutletsByFilter: {
    path: '/bmapi.outlets.outlet.OutletService/GetOutletsByFilter',
    requestStream: false,
    responseStream: false,
    requestType: outlet_pb.GetOutletsByFilterRequestProto,
    responseType: outlet_pb.GetOutletsByFilterResponseProto,
    requestSerialize: serialize_bmapi_outlets_outlet_GetOutletsByFilterRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_outlet_GetOutletsByFilterRequestProto,
    responseSerialize: serialize_bmapi_outlets_outlet_GetOutletsByFilterResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_outlet_GetOutletsByFilterResponseProto,
  },
};

exports.OutletServiceClient = grpc.makeGenericClientConstructor(OutletServiceService);
