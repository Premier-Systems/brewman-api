// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var packagetype_pb = require('./packagetype_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_stocks_packagetype_GetAllPackageTypesRequestProto(arg) {
  if (!(arg instanceof packagetype_pb.GetAllPackageTypesRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.packagetype.GetAllPackageTypesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_packagetype_GetAllPackageTypesRequestProto(buffer_arg) {
  return packagetype_pb.GetAllPackageTypesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_packagetype_GetAllPackageTypesResponseProto(arg) {
  if (!(arg instanceof packagetype_pb.GetAllPackageTypesResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.packagetype.GetAllPackageTypesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_packagetype_GetAllPackageTypesResponseProto(buffer_arg) {
  return packagetype_pb.GetAllPackageTypesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_packagetype_GetPackageTypeRequestProto(arg) {
  if (!(arg instanceof packagetype_pb.GetPackageTypeRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.packagetype.GetPackageTypeRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_packagetype_GetPackageTypeRequestProto(buffer_arg) {
  return packagetype_pb.GetPackageTypeRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_packagetype_GetPackageTypeResponseProto(arg) {
  if (!(arg instanceof packagetype_pb.GetPackageTypeResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.packagetype.GetPackageTypeResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_packagetype_GetPackageTypeResponseProto(buffer_arg) {
  return packagetype_pb.GetPackageTypeResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_packagetype_GetPackageTypesRequestProto(arg) {
  if (!(arg instanceof packagetype_pb.GetPackageTypesRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.packagetype.GetPackageTypesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_packagetype_GetPackageTypesRequestProto(buffer_arg) {
  return packagetype_pb.GetPackageTypesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_packagetype_GetPackageTypesResponseProto(arg) {
  if (!(arg instanceof packagetype_pb.GetPackageTypesResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.packagetype.GetPackageTypesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_packagetype_GetPackageTypesResponseProto(buffer_arg) {
  return packagetype_pb.GetPackageTypesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_packagetype_SavePackageTypeRequestProto(arg) {
  if (!(arg instanceof packagetype_pb.SavePackageTypeRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.packagetype.SavePackageTypeRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_packagetype_SavePackageTypeRequestProto(buffer_arg) {
  return packagetype_pb.SavePackageTypeRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_packagetype_SavePackageTypeResponseProto(arg) {
  if (!(arg instanceof packagetype_pb.SavePackageTypeResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.packagetype.SavePackageTypeResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_packagetype_SavePackageTypeResponseProto(buffer_arg) {
  return packagetype_pb.SavePackageTypeResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_packagetype_SetPackageTypeIsHiddenRequestProto(arg) {
  if (!(arg instanceof packagetype_pb.SetPackageTypeIsHiddenRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.packagetype.SetPackageTypeIsHiddenRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_packagetype_SetPackageTypeIsHiddenRequestProto(buffer_arg) {
  return packagetype_pb.SetPackageTypeIsHiddenRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_packagetype_SetPackageTypeIsHiddenResponseProto(arg) {
  if (!(arg instanceof packagetype_pb.SetPackageTypeIsHiddenResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.packagetype.SetPackageTypeIsHiddenResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_packagetype_SetPackageTypeIsHiddenResponseProto(buffer_arg) {
  return packagetype_pb.SetPackageTypeIsHiddenResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var PackageTypeServiceService = exports.PackageTypeServiceService = {
  // Gets all undeleted PackageTypes
getAllPackageTypes: {
    path: '/bmapi.stocks.packagetype.PackageTypeService/GetAllPackageTypes',
    requestStream: false,
    responseStream: false,
    requestType: packagetype_pb.GetAllPackageTypesRequestProto,
    responseType: packagetype_pb.GetAllPackageTypesResponseProto,
    requestSerialize: serialize_bmapi_stocks_packagetype_GetAllPackageTypesRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_packagetype_GetAllPackageTypesRequestProto,
    responseSerialize: serialize_bmapi_stocks_packagetype_GetAllPackageTypesResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_packagetype_GetAllPackageTypesResponseProto,
  },
  // Gets a specific PackageType by Id, even if it has been soft-deleted. (Errors if not found).
getPackageType: {
    path: '/bmapi.stocks.packagetype.PackageTypeService/GetPackageType',
    requestStream: false,
    responseStream: false,
    requestType: packagetype_pb.GetPackageTypeRequestProto,
    responseType: packagetype_pb.GetPackageTypeResponseProto,
    requestSerialize: serialize_bmapi_stocks_packagetype_GetPackageTypeRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_packagetype_GetPackageTypeRequestProto,
    responseSerialize: serialize_bmapi_stocks_packagetype_GetPackageTypeResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_packagetype_GetPackageTypeResponseProto,
  },
  // Gets specific PackageTypes by Ids, including soft-deleted ones. (Errors if any not found).
getPackageTypes: {
    path: '/bmapi.stocks.packagetype.PackageTypeService/GetPackageTypes',
    requestStream: false,
    responseStream: false,
    requestType: packagetype_pb.GetPackageTypesRequestProto,
    responseType: packagetype_pb.GetPackageTypesResponseProto,
    requestSerialize: serialize_bmapi_stocks_packagetype_GetPackageTypesRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_packagetype_GetPackageTypesRequestProto,
    responseSerialize: serialize_bmapi_stocks_packagetype_GetPackageTypesResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_packagetype_GetPackageTypesResponseProto,
  },
  // Saves a single PackageType
savePackageType: {
    path: '/bmapi.stocks.packagetype.PackageTypeService/SavePackageType',
    requestStream: false,
    responseStream: false,
    requestType: packagetype_pb.SavePackageTypeRequestProto,
    responseType: packagetype_pb.SavePackageTypeResponseProto,
    requestSerialize: serialize_bmapi_stocks_packagetype_SavePackageTypeRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_packagetype_SavePackageTypeRequestProto,
    responseSerialize: serialize_bmapi_stocks_packagetype_SavePackageTypeResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_packagetype_SavePackageTypeResponseProto,
  },
  // Hides or unhides the given Package Type.
setPackageTypeIsHidden: {
    path: '/bmapi.stocks.packagetype.PackageTypeService/SetPackageTypeIsHidden',
    requestStream: false,
    responseStream: false,
    requestType: packagetype_pb.SetPackageTypeIsHiddenRequestProto,
    responseType: packagetype_pb.SetPackageTypeIsHiddenResponseProto,
    requestSerialize: serialize_bmapi_stocks_packagetype_SetPackageTypeIsHiddenRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_packagetype_SetPackageTypeIsHiddenRequestProto,
    responseSerialize: serialize_bmapi_stocks_packagetype_SetPackageTypeIsHiddenResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_packagetype_SetPackageTypeIsHiddenResponseProto,
  },
};

exports.PackageTypeServiceClient = grpc.makeGenericClientConstructor(PackageTypeServiceService);
