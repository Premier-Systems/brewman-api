// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var unitofmeasure_pb = require('./unitofmeasure_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_stocks_unitofmeasure_GetAllUnitsOfMeasureRequestProto(arg) {
  if (!(arg instanceof unitofmeasure_pb.GetAllUnitsOfMeasureRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.unitofmeasure.GetAllUnitsOfMeasureRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_unitofmeasure_GetAllUnitsOfMeasureRequestProto(buffer_arg) {
  return unitofmeasure_pb.GetAllUnitsOfMeasureRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_unitofmeasure_GetAllUnitsOfMeasureResponseProto(arg) {
  if (!(arg instanceof unitofmeasure_pb.GetAllUnitsOfMeasureResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.unitofmeasure.GetAllUnitsOfMeasureResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_unitofmeasure_GetAllUnitsOfMeasureResponseProto(buffer_arg) {
  return unitofmeasure_pb.GetAllUnitsOfMeasureResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_unitofmeasure_GetUnitOfMeasureRequestProto(arg) {
  if (!(arg instanceof unitofmeasure_pb.GetUnitOfMeasureRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.unitofmeasure.GetUnitOfMeasureRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_unitofmeasure_GetUnitOfMeasureRequestProto(buffer_arg) {
  return unitofmeasure_pb.GetUnitOfMeasureRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_unitofmeasure_GetUnitOfMeasureResponseProto(arg) {
  if (!(arg instanceof unitofmeasure_pb.GetUnitOfMeasureResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.unitofmeasure.GetUnitOfMeasureResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_unitofmeasure_GetUnitOfMeasureResponseProto(buffer_arg) {
  return unitofmeasure_pb.GetUnitOfMeasureResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_unitofmeasure_GetUnitsOfMeasureRequestProto(arg) {
  if (!(arg instanceof unitofmeasure_pb.GetUnitsOfMeasureRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.unitofmeasure.GetUnitsOfMeasureRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_unitofmeasure_GetUnitsOfMeasureRequestProto(buffer_arg) {
  return unitofmeasure_pb.GetUnitsOfMeasureRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_unitofmeasure_GetUnitsOfMeasureResponseProto(arg) {
  if (!(arg instanceof unitofmeasure_pb.GetUnitsOfMeasureResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.unitofmeasure.GetUnitsOfMeasureResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_unitofmeasure_GetUnitsOfMeasureResponseProto(buffer_arg) {
  return unitofmeasure_pb.GetUnitsOfMeasureResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var UnitOfMeasureServiceService = exports.UnitOfMeasureServiceService = {
  // Gets all UnitsOfMeasure
getAllUnitsOfMeasure: {
    path: '/bmapi.stocks.unitofmeasure.UnitOfMeasureService/GetAllUnitsOfMeasure',
    requestStream: false,
    responseStream: false,
    requestType: unitofmeasure_pb.GetAllUnitsOfMeasureRequestProto,
    responseType: unitofmeasure_pb.GetAllUnitsOfMeasureResponseProto,
    requestSerialize: serialize_bmapi_stocks_unitofmeasure_GetAllUnitsOfMeasureRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_unitofmeasure_GetAllUnitsOfMeasureRequestProto,
    responseSerialize: serialize_bmapi_stocks_unitofmeasure_GetAllUnitsOfMeasureResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_unitofmeasure_GetAllUnitsOfMeasureResponseProto,
  },
  // Gets a single unit of measure. (Errors if not found).
getUnitOfMeasure: {
    path: '/bmapi.stocks.unitofmeasure.UnitOfMeasureService/GetUnitOfMeasure',
    requestStream: false,
    responseStream: false,
    requestType: unitofmeasure_pb.GetUnitOfMeasureRequestProto,
    responseType: unitofmeasure_pb.GetUnitOfMeasureResponseProto,
    requestSerialize: serialize_bmapi_stocks_unitofmeasure_GetUnitOfMeasureRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_unitofmeasure_GetUnitOfMeasureRequestProto,
    responseSerialize: serialize_bmapi_stocks_unitofmeasure_GetUnitOfMeasureResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_unitofmeasure_GetUnitOfMeasureResponseProto,
  },
  // Gets specific units of measure. (Errors if any not found).
getUnitsOfMeasure: {
    path: '/bmapi.stocks.unitofmeasure.UnitOfMeasureService/GetUnitsOfMeasure',
    requestStream: false,
    responseStream: false,
    requestType: unitofmeasure_pb.GetUnitsOfMeasureRequestProto,
    responseType: unitofmeasure_pb.GetUnitsOfMeasureResponseProto,
    requestSerialize: serialize_bmapi_stocks_unitofmeasure_GetUnitsOfMeasureRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_unitofmeasure_GetUnitsOfMeasureRequestProto,
    responseSerialize: serialize_bmapi_stocks_unitofmeasure_GetUnitsOfMeasureResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_unitofmeasure_GetUnitsOfMeasureResponseProto,
  },
};

exports.UnitOfMeasureServiceClient = grpc.makeGenericClientConstructor(UnitOfMeasureServiceService);
