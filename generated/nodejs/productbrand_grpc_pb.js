// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var productbrand_pb = require('./productbrand_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_stocks_productbrand_GetAllProductBrandsRequestProto(arg) {
  if (!(arg instanceof productbrand_pb.GetAllProductBrandsRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.productbrand.GetAllProductBrandsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_productbrand_GetAllProductBrandsRequestProto(buffer_arg) {
  return productbrand_pb.GetAllProductBrandsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_productbrand_GetAllProductBrandsResponseProto(arg) {
  if (!(arg instanceof productbrand_pb.GetAllProductBrandsResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.productbrand.GetAllProductBrandsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_productbrand_GetAllProductBrandsResponseProto(buffer_arg) {
  return productbrand_pb.GetAllProductBrandsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_productbrand_GetProductBrandRequestProto(arg) {
  if (!(arg instanceof productbrand_pb.GetProductBrandRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.productbrand.GetProductBrandRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_productbrand_GetProductBrandRequestProto(buffer_arg) {
  return productbrand_pb.GetProductBrandRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_productbrand_GetProductBrandResponseProto(arg) {
  if (!(arg instanceof productbrand_pb.GetProductBrandResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.productbrand.GetProductBrandResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_productbrand_GetProductBrandResponseProto(buffer_arg) {
  return productbrand_pb.GetProductBrandResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_productbrand_GetProductBrandsRequestProto(arg) {
  if (!(arg instanceof productbrand_pb.GetProductBrandsRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.productbrand.GetProductBrandsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_productbrand_GetProductBrandsRequestProto(buffer_arg) {
  return productbrand_pb.GetProductBrandsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_productbrand_GetProductBrandsResponseProto(arg) {
  if (!(arg instanceof productbrand_pb.GetProductBrandsResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.productbrand.GetProductBrandsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_productbrand_GetProductBrandsResponseProto(buffer_arg) {
  return productbrand_pb.GetProductBrandsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductBrandServiceService = exports.ProductBrandServiceService = {
  // Gets all ProductBrands
getAllProductBrands: {
    path: '/bmapi.stocks.productbrand.ProductBrandService/GetAllProductBrands',
    requestStream: false,
    responseStream: false,
    requestType: productbrand_pb.GetAllProductBrandsRequestProto,
    responseType: productbrand_pb.GetAllProductBrandsResponseProto,
    requestSerialize: serialize_bmapi_stocks_productbrand_GetAllProductBrandsRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_productbrand_GetAllProductBrandsRequestProto,
    responseSerialize: serialize_bmapi_stocks_productbrand_GetAllProductBrandsResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_productbrand_GetAllProductBrandsResponseProto,
  },
  // Gets a specific ProductBrand. (Errors if not found).
getProductBrand: {
    path: '/bmapi.stocks.productbrand.ProductBrandService/GetProductBrand',
    requestStream: false,
    responseStream: false,
    requestType: productbrand_pb.GetProductBrandRequestProto,
    responseType: productbrand_pb.GetProductBrandResponseProto,
    requestSerialize: serialize_bmapi_stocks_productbrand_GetProductBrandRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_productbrand_GetProductBrandRequestProto,
    responseSerialize: serialize_bmapi_stocks_productbrand_GetProductBrandResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_productbrand_GetProductBrandResponseProto,
  },
  // Gets specific ProductBrands. (Errors if any not found).
getProductBrands: {
    path: '/bmapi.stocks.productbrand.ProductBrandService/GetProductBrands',
    requestStream: false,
    responseStream: false,
    requestType: productbrand_pb.GetProductBrandsRequestProto,
    responseType: productbrand_pb.GetProductBrandsResponseProto,
    requestSerialize: serialize_bmapi_stocks_productbrand_GetProductBrandsRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_productbrand_GetProductBrandsRequestProto,
    responseSerialize: serialize_bmapi_stocks_productbrand_GetProductBrandsResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_productbrand_GetProductBrandsResponseProto,
  },
};

exports.ProductBrandServiceClient = grpc.makeGenericClientConstructor(ProductBrandServiceService);
