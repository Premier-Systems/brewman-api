// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var pricingcategory_pb = require('./pricingcategory_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_price_pricingcategory_GetAllPricingCategoriesRequestProto(arg) {
  if (!(arg instanceof pricingcategory_pb.GetAllPricingCategoriesRequestProto)) {
    throw new Error('Expected argument of type bmapi.price.pricingcategory.GetAllPricingCategoriesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_price_pricingcategory_GetAllPricingCategoriesRequestProto(buffer_arg) {
  return pricingcategory_pb.GetAllPricingCategoriesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_price_pricingcategory_GetAllPricingCategoriesResponseProto(arg) {
  if (!(arg instanceof pricingcategory_pb.GetAllPricingCategoriesResponseProto)) {
    throw new Error('Expected argument of type bmapi.price.pricingcategory.GetAllPricingCategoriesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_price_pricingcategory_GetAllPricingCategoriesResponseProto(buffer_arg) {
  return pricingcategory_pb.GetAllPricingCategoriesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_price_pricingcategory_GetPricingCategoriesRequestProto(arg) {
  if (!(arg instanceof pricingcategory_pb.GetPricingCategoriesRequestProto)) {
    throw new Error('Expected argument of type bmapi.price.pricingcategory.GetPricingCategoriesRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_price_pricingcategory_GetPricingCategoriesRequestProto(buffer_arg) {
  return pricingcategory_pb.GetPricingCategoriesRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_price_pricingcategory_GetPricingCategoriesResponseProto(arg) {
  if (!(arg instanceof pricingcategory_pb.GetPricingCategoriesResponseProto)) {
    throw new Error('Expected argument of type bmapi.price.pricingcategory.GetPricingCategoriesResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_price_pricingcategory_GetPricingCategoriesResponseProto(buffer_arg) {
  return pricingcategory_pb.GetPricingCategoriesResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_price_pricingcategory_GetPricingCategoryRequestProto(arg) {
  if (!(arg instanceof pricingcategory_pb.GetPricingCategoryRequestProto)) {
    throw new Error('Expected argument of type bmapi.price.pricingcategory.GetPricingCategoryRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_price_pricingcategory_GetPricingCategoryRequestProto(buffer_arg) {
  return pricingcategory_pb.GetPricingCategoryRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_price_pricingcategory_GetPricingCategoryResponseProto(arg) {
  if (!(arg instanceof pricingcategory_pb.GetPricingCategoryResponseProto)) {
    throw new Error('Expected argument of type bmapi.price.pricingcategory.GetPricingCategoryResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_price_pricingcategory_GetPricingCategoryResponseProto(buffer_arg) {
  return pricingcategory_pb.GetPricingCategoryResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_price_pricingcategory_SavePricingCategoryRequestProto(arg) {
  if (!(arg instanceof pricingcategory_pb.SavePricingCategoryRequestProto)) {
    throw new Error('Expected argument of type bmapi.price.pricingcategory.SavePricingCategoryRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_price_pricingcategory_SavePricingCategoryRequestProto(buffer_arg) {
  return pricingcategory_pb.SavePricingCategoryRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_price_pricingcategory_SavePricingCategoryResponseProto(arg) {
  if (!(arg instanceof pricingcategory_pb.SavePricingCategoryResponseProto)) {
    throw new Error('Expected argument of type bmapi.price.pricingcategory.SavePricingCategoryResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_price_pricingcategory_SavePricingCategoryResponseProto(buffer_arg) {
  return pricingcategory_pb.SavePricingCategoryResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_price_pricingcategory_SetPricingCategoryIsHiddenRequestProto(arg) {
  if (!(arg instanceof pricingcategory_pb.SetPricingCategoryIsHiddenRequestProto)) {
    throw new Error('Expected argument of type bmapi.price.pricingcategory.SetPricingCategoryIsHiddenRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_price_pricingcategory_SetPricingCategoryIsHiddenRequestProto(buffer_arg) {
  return pricingcategory_pb.SetPricingCategoryIsHiddenRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_price_pricingcategory_SetPricingCategoryIsHiddenResponseProto(arg) {
  if (!(arg instanceof pricingcategory_pb.SetPricingCategoryIsHiddenResponseProto)) {
    throw new Error('Expected argument of type bmapi.price.pricingcategory.SetPricingCategoryIsHiddenResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_price_pricingcategory_SetPricingCategoryIsHiddenResponseProto(buffer_arg) {
  return pricingcategory_pb.SetPricingCategoryIsHiddenResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var PricingCategoryServiceService = exports.PricingCategoryServiceService = {
  // Gets all pricing categories
getAllPricingCategories: {
    path: '/bmapi.price.pricingcategory.PricingCategoryService/GetAllPricingCategories',
    requestStream: false,
    responseStream: false,
    requestType: pricingcategory_pb.GetAllPricingCategoriesRequestProto,
    responseType: pricingcategory_pb.GetAllPricingCategoriesResponseProto,
    requestSerialize: serialize_bmapi_price_pricingcategory_GetAllPricingCategoriesRequestProto,
    requestDeserialize: deserialize_bmapi_price_pricingcategory_GetAllPricingCategoriesRequestProto,
    responseSerialize: serialize_bmapi_price_pricingcategory_GetAllPricingCategoriesResponseProto,
    responseDeserialize: deserialize_bmapi_price_pricingcategory_GetAllPricingCategoriesResponseProto,
  },
  // Gets a specific pricing category. (Errors if not found).
getPricingCategory: {
    path: '/bmapi.price.pricingcategory.PricingCategoryService/GetPricingCategory',
    requestStream: false,
    responseStream: false,
    requestType: pricingcategory_pb.GetPricingCategoryRequestProto,
    responseType: pricingcategory_pb.GetPricingCategoryResponseProto,
    requestSerialize: serialize_bmapi_price_pricingcategory_GetPricingCategoryRequestProto,
    requestDeserialize: deserialize_bmapi_price_pricingcategory_GetPricingCategoryRequestProto,
    responseSerialize: serialize_bmapi_price_pricingcategory_GetPricingCategoryResponseProto,
    responseDeserialize: deserialize_bmapi_price_pricingcategory_GetPricingCategoryResponseProto,
  },
  // Saves a single PricingCategory
savePricingCategory: {
    path: '/bmapi.price.pricingcategory.PricingCategoryService/SavePricingCategory',
    requestStream: false,
    responseStream: false,
    requestType: pricingcategory_pb.SavePricingCategoryRequestProto,
    responseType: pricingcategory_pb.SavePricingCategoryResponseProto,
    requestSerialize: serialize_bmapi_price_pricingcategory_SavePricingCategoryRequestProto,
    requestDeserialize: deserialize_bmapi_price_pricingcategory_SavePricingCategoryRequestProto,
    responseSerialize: serialize_bmapi_price_pricingcategory_SavePricingCategoryResponseProto,
    responseDeserialize: deserialize_bmapi_price_pricingcategory_SavePricingCategoryResponseProto,
  },
  // Hides or unhides the given Pricing Category.
setPricingCategoryIsHidden: {
    path: '/bmapi.price.pricingcategory.PricingCategoryService/SetPricingCategoryIsHidden',
    requestStream: false,
    responseStream: false,
    requestType: pricingcategory_pb.SetPricingCategoryIsHiddenRequestProto,
    responseType: pricingcategory_pb.SetPricingCategoryIsHiddenResponseProto,
    requestSerialize: serialize_bmapi_price_pricingcategory_SetPricingCategoryIsHiddenRequestProto,
    requestDeserialize: deserialize_bmapi_price_pricingcategory_SetPricingCategoryIsHiddenRequestProto,
    responseSerialize: serialize_bmapi_price_pricingcategory_SetPricingCategoryIsHiddenResponseProto,
    responseDeserialize: deserialize_bmapi_price_pricingcategory_SetPricingCategoryIsHiddenResponseProto,
  },
  // Gets specific pricing categories. (Errors if any not found).
getPricingCategories: {
    path: '/bmapi.price.pricingcategory.PricingCategoryService/GetPricingCategories',
    requestStream: false,
    responseStream: false,
    requestType: pricingcategory_pb.GetPricingCategoriesRequestProto,
    responseType: pricingcategory_pb.GetPricingCategoriesResponseProto,
    requestSerialize: serialize_bmapi_price_pricingcategory_GetPricingCategoriesRequestProto,
    requestDeserialize: deserialize_bmapi_price_pricingcategory_GetPricingCategoriesRequestProto,
    responseSerialize: serialize_bmapi_price_pricingcategory_GetPricingCategoriesResponseProto,
    responseDeserialize: deserialize_bmapi_price_pricingcategory_GetPricingCategoriesResponseProto,
  },
};

exports.PricingCategoryServiceClient = grpc.makeGenericClientConstructor(PricingCategoryServiceService);
