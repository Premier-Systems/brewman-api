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

function serialize_bmapi_stocks_productbrand_SaveProductBrandRequestProto(arg) {
  if (!(arg instanceof productbrand_pb.SaveProductBrandRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.productbrand.SaveProductBrandRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_productbrand_SaveProductBrandRequestProto(buffer_arg) {
  return productbrand_pb.SaveProductBrandRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_productbrand_SaveProductBrandResponseProto(arg) {
  if (!(arg instanceof productbrand_pb.SaveProductBrandResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.productbrand.SaveProductBrandResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_productbrand_SaveProductBrandResponseProto(buffer_arg) {
  return productbrand_pb.SaveProductBrandResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_productbrand_SetProductBrandIsHiddenRequestProto(arg) {
  if (!(arg instanceof productbrand_pb.SetProductBrandIsHiddenRequestProto)) {
    throw new Error('Expected argument of type bmapi.stocks.productbrand.SetProductBrandIsHiddenRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_productbrand_SetProductBrandIsHiddenRequestProto(buffer_arg) {
  return productbrand_pb.SetProductBrandIsHiddenRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_stocks_productbrand_SetProductBrandIsHiddenResponseProto(arg) {
  if (!(arg instanceof productbrand_pb.SetProductBrandIsHiddenResponseProto)) {
    throw new Error('Expected argument of type bmapi.stocks.productbrand.SetProductBrandIsHiddenResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_stocks_productbrand_SetProductBrandIsHiddenResponseProto(buffer_arg) {
  return productbrand_pb.SetProductBrandIsHiddenResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Gets specific ProductBrands
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
  // Saves a ProductBrand
saveProductBrand: {
    path: '/bmapi.stocks.productbrand.ProductBrandService/SaveProductBrand',
    requestStream: false,
    responseStream: false,
    requestType: productbrand_pb.SaveProductBrandRequestProto,
    responseType: productbrand_pb.SaveProductBrandResponseProto,
    requestSerialize: serialize_bmapi_stocks_productbrand_SaveProductBrandRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_productbrand_SaveProductBrandRequestProto,
    responseSerialize: serialize_bmapi_stocks_productbrand_SaveProductBrandResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_productbrand_SaveProductBrandResponseProto,
  },
  // Hides or unhides the given product brand.
setProductBrandIsHidden: {
    path: '/bmapi.stocks.productbrand.ProductBrandService/SetProductBrandIsHidden',
    requestStream: false,
    responseStream: false,
    requestType: productbrand_pb.SetProductBrandIsHiddenRequestProto,
    responseType: productbrand_pb.SetProductBrandIsHiddenResponseProto,
    requestSerialize: serialize_bmapi_stocks_productbrand_SetProductBrandIsHiddenRequestProto,
    requestDeserialize: deserialize_bmapi_stocks_productbrand_SetProductBrandIsHiddenRequestProto,
    responseSerialize: serialize_bmapi_stocks_productbrand_SetProductBrandIsHiddenResponseProto,
    responseDeserialize: deserialize_bmapi_stocks_productbrand_SetProductBrandIsHiddenResponseProto,
  },
};

exports.ProductBrandServiceClient = grpc.makeGenericClientConstructor(ProductBrandServiceService);
