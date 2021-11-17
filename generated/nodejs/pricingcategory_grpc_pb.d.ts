// package: bmapi.price.pricingcategory
// file: pricingcategory.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as pricingcategory_pb from "./pricingcategory_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IPricingCategoryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllPricingCategories: IPricingCategoryServiceService_IGetAllPricingCategories;
    getPricingCategory: IPricingCategoryServiceService_IGetPricingCategory;
    savePricingCategory: IPricingCategoryServiceService_ISavePricingCategory;
    setPricingCategoryIsHidden: IPricingCategoryServiceService_ISetPricingCategoryIsHidden;
    getPricingCategories: IPricingCategoryServiceService_IGetPricingCategories;
}

interface IPricingCategoryServiceService_IGetAllPricingCategories extends grpc.MethodDefinition<pricingcategory_pb.GetAllPricingCategoriesRequestProto, pricingcategory_pb.GetAllPricingCategoriesResponseProto> {
    path: "/bmapi.price.pricingcategory.PricingCategoryService/GetAllPricingCategories";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pricingcategory_pb.GetAllPricingCategoriesRequestProto>;
    requestDeserialize: grpc.deserialize<pricingcategory_pb.GetAllPricingCategoriesRequestProto>;
    responseSerialize: grpc.serialize<pricingcategory_pb.GetAllPricingCategoriesResponseProto>;
    responseDeserialize: grpc.deserialize<pricingcategory_pb.GetAllPricingCategoriesResponseProto>;
}
interface IPricingCategoryServiceService_IGetPricingCategory extends grpc.MethodDefinition<pricingcategory_pb.GetPricingCategoryRequestProto, pricingcategory_pb.GetPricingCategoryResponseProto> {
    path: "/bmapi.price.pricingcategory.PricingCategoryService/GetPricingCategory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pricingcategory_pb.GetPricingCategoryRequestProto>;
    requestDeserialize: grpc.deserialize<pricingcategory_pb.GetPricingCategoryRequestProto>;
    responseSerialize: grpc.serialize<pricingcategory_pb.GetPricingCategoryResponseProto>;
    responseDeserialize: grpc.deserialize<pricingcategory_pb.GetPricingCategoryResponseProto>;
}
interface IPricingCategoryServiceService_ISavePricingCategory extends grpc.MethodDefinition<pricingcategory_pb.SavePricingCategoryRequestProto, pricingcategory_pb.SavePricingCategoryResponseProto> {
    path: "/bmapi.price.pricingcategory.PricingCategoryService/SavePricingCategory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pricingcategory_pb.SavePricingCategoryRequestProto>;
    requestDeserialize: grpc.deserialize<pricingcategory_pb.SavePricingCategoryRequestProto>;
    responseSerialize: grpc.serialize<pricingcategory_pb.SavePricingCategoryResponseProto>;
    responseDeserialize: grpc.deserialize<pricingcategory_pb.SavePricingCategoryResponseProto>;
}
interface IPricingCategoryServiceService_ISetPricingCategoryIsHidden extends grpc.MethodDefinition<pricingcategory_pb.SetPricingCategoryIsHiddenRequestProto, pricingcategory_pb.SetPricingCategoryIsHiddenResponseProto> {
    path: "/bmapi.price.pricingcategory.PricingCategoryService/SetPricingCategoryIsHidden";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pricingcategory_pb.SetPricingCategoryIsHiddenRequestProto>;
    requestDeserialize: grpc.deserialize<pricingcategory_pb.SetPricingCategoryIsHiddenRequestProto>;
    responseSerialize: grpc.serialize<pricingcategory_pb.SetPricingCategoryIsHiddenResponseProto>;
    responseDeserialize: grpc.deserialize<pricingcategory_pb.SetPricingCategoryIsHiddenResponseProto>;
}
interface IPricingCategoryServiceService_IGetPricingCategories extends grpc.MethodDefinition<pricingcategory_pb.GetPricingCategoriesRequestProto, pricingcategory_pb.GetPricingCategoriesResponseProto> {
    path: "/bmapi.price.pricingcategory.PricingCategoryService/GetPricingCategories";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pricingcategory_pb.GetPricingCategoriesRequestProto>;
    requestDeserialize: grpc.deserialize<pricingcategory_pb.GetPricingCategoriesRequestProto>;
    responseSerialize: grpc.serialize<pricingcategory_pb.GetPricingCategoriesResponseProto>;
    responseDeserialize: grpc.deserialize<pricingcategory_pb.GetPricingCategoriesResponseProto>;
}

export const PricingCategoryServiceService: IPricingCategoryServiceService;

export interface IPricingCategoryServiceServer extends grpc.UntypedServiceImplementation {
    getAllPricingCategories: grpc.handleUnaryCall<pricingcategory_pb.GetAllPricingCategoriesRequestProto, pricingcategory_pb.GetAllPricingCategoriesResponseProto>;
    getPricingCategory: grpc.handleUnaryCall<pricingcategory_pb.GetPricingCategoryRequestProto, pricingcategory_pb.GetPricingCategoryResponseProto>;
    savePricingCategory: grpc.handleUnaryCall<pricingcategory_pb.SavePricingCategoryRequestProto, pricingcategory_pb.SavePricingCategoryResponseProto>;
    setPricingCategoryIsHidden: grpc.handleUnaryCall<pricingcategory_pb.SetPricingCategoryIsHiddenRequestProto, pricingcategory_pb.SetPricingCategoryIsHiddenResponseProto>;
    getPricingCategories: grpc.handleUnaryCall<pricingcategory_pb.GetPricingCategoriesRequestProto, pricingcategory_pb.GetPricingCategoriesResponseProto>;
}

export interface IPricingCategoryServiceClient {
    getAllPricingCategories(request: pricingcategory_pb.GetAllPricingCategoriesRequestProto, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetAllPricingCategoriesResponseProto) => void): grpc.ClientUnaryCall;
    getAllPricingCategories(request: pricingcategory_pb.GetAllPricingCategoriesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetAllPricingCategoriesResponseProto) => void): grpc.ClientUnaryCall;
    getAllPricingCategories(request: pricingcategory_pb.GetAllPricingCategoriesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetAllPricingCategoriesResponseProto) => void): grpc.ClientUnaryCall;
    getPricingCategory(request: pricingcategory_pb.GetPricingCategoryRequestProto, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetPricingCategoryResponseProto) => void): grpc.ClientUnaryCall;
    getPricingCategory(request: pricingcategory_pb.GetPricingCategoryRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetPricingCategoryResponseProto) => void): grpc.ClientUnaryCall;
    getPricingCategory(request: pricingcategory_pb.GetPricingCategoryRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetPricingCategoryResponseProto) => void): grpc.ClientUnaryCall;
    savePricingCategory(request: pricingcategory_pb.SavePricingCategoryRequestProto, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.SavePricingCategoryResponseProto) => void): grpc.ClientUnaryCall;
    savePricingCategory(request: pricingcategory_pb.SavePricingCategoryRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.SavePricingCategoryResponseProto) => void): grpc.ClientUnaryCall;
    savePricingCategory(request: pricingcategory_pb.SavePricingCategoryRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.SavePricingCategoryResponseProto) => void): grpc.ClientUnaryCall;
    setPricingCategoryIsHidden(request: pricingcategory_pb.SetPricingCategoryIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.SetPricingCategoryIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setPricingCategoryIsHidden(request: pricingcategory_pb.SetPricingCategoryIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.SetPricingCategoryIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setPricingCategoryIsHidden(request: pricingcategory_pb.SetPricingCategoryIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.SetPricingCategoryIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    getPricingCategories(request: pricingcategory_pb.GetPricingCategoriesRequestProto, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetPricingCategoriesResponseProto) => void): grpc.ClientUnaryCall;
    getPricingCategories(request: pricingcategory_pb.GetPricingCategoriesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetPricingCategoriesResponseProto) => void): grpc.ClientUnaryCall;
    getPricingCategories(request: pricingcategory_pb.GetPricingCategoriesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetPricingCategoriesResponseProto) => void): grpc.ClientUnaryCall;
}

export class PricingCategoryServiceClient extends grpc.Client implements IPricingCategoryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllPricingCategories(request: pricingcategory_pb.GetAllPricingCategoriesRequestProto, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetAllPricingCategoriesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllPricingCategories(request: pricingcategory_pb.GetAllPricingCategoriesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetAllPricingCategoriesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllPricingCategories(request: pricingcategory_pb.GetAllPricingCategoriesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetAllPricingCategoriesResponseProto) => void): grpc.ClientUnaryCall;
    public getPricingCategory(request: pricingcategory_pb.GetPricingCategoryRequestProto, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetPricingCategoryResponseProto) => void): grpc.ClientUnaryCall;
    public getPricingCategory(request: pricingcategory_pb.GetPricingCategoryRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetPricingCategoryResponseProto) => void): grpc.ClientUnaryCall;
    public getPricingCategory(request: pricingcategory_pb.GetPricingCategoryRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetPricingCategoryResponseProto) => void): grpc.ClientUnaryCall;
    public savePricingCategory(request: pricingcategory_pb.SavePricingCategoryRequestProto, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.SavePricingCategoryResponseProto) => void): grpc.ClientUnaryCall;
    public savePricingCategory(request: pricingcategory_pb.SavePricingCategoryRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.SavePricingCategoryResponseProto) => void): grpc.ClientUnaryCall;
    public savePricingCategory(request: pricingcategory_pb.SavePricingCategoryRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.SavePricingCategoryResponseProto) => void): grpc.ClientUnaryCall;
    public setPricingCategoryIsHidden(request: pricingcategory_pb.SetPricingCategoryIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.SetPricingCategoryIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setPricingCategoryIsHidden(request: pricingcategory_pb.SetPricingCategoryIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.SetPricingCategoryIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setPricingCategoryIsHidden(request: pricingcategory_pb.SetPricingCategoryIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.SetPricingCategoryIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public getPricingCategories(request: pricingcategory_pb.GetPricingCategoriesRequestProto, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetPricingCategoriesResponseProto) => void): grpc.ClientUnaryCall;
    public getPricingCategories(request: pricingcategory_pb.GetPricingCategoriesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetPricingCategoriesResponseProto) => void): grpc.ClientUnaryCall;
    public getPricingCategories(request: pricingcategory_pb.GetPricingCategoriesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pricingcategory_pb.GetPricingCategoriesResponseProto) => void): grpc.ClientUnaryCall;
}
