// package: bmapi.stocks.productbrand
// file: productbrand.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as productbrand_pb from "./productbrand_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IProductBrandServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllProductBrands: IProductBrandServiceService_IGetAllProductBrands;
    getProductBrands: IProductBrandServiceService_IGetProductBrands;
    saveProductBrand: IProductBrandServiceService_ISaveProductBrand;
    setProductBrandIsHidden: IProductBrandServiceService_ISetProductBrandIsHidden;
}

interface IProductBrandServiceService_IGetAllProductBrands extends grpc.MethodDefinition<productbrand_pb.GetAllProductBrandsRequestProto, productbrand_pb.GetAllProductBrandsResponseProto> {
    path: "/bmapi.stocks.productbrand.ProductBrandService/GetAllProductBrands";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<productbrand_pb.GetAllProductBrandsRequestProto>;
    requestDeserialize: grpc.deserialize<productbrand_pb.GetAllProductBrandsRequestProto>;
    responseSerialize: grpc.serialize<productbrand_pb.GetAllProductBrandsResponseProto>;
    responseDeserialize: grpc.deserialize<productbrand_pb.GetAllProductBrandsResponseProto>;
}
interface IProductBrandServiceService_IGetProductBrands extends grpc.MethodDefinition<productbrand_pb.GetProductBrandsRequestProto, productbrand_pb.GetProductBrandsResponseProto> {
    path: "/bmapi.stocks.productbrand.ProductBrandService/GetProductBrands";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<productbrand_pb.GetProductBrandsRequestProto>;
    requestDeserialize: grpc.deserialize<productbrand_pb.GetProductBrandsRequestProto>;
    responseSerialize: grpc.serialize<productbrand_pb.GetProductBrandsResponseProto>;
    responseDeserialize: grpc.deserialize<productbrand_pb.GetProductBrandsResponseProto>;
}
interface IProductBrandServiceService_ISaveProductBrand extends grpc.MethodDefinition<productbrand_pb.SaveProductBrandRequestProto, productbrand_pb.SaveProductBrandResponseProto> {
    path: "/bmapi.stocks.productbrand.ProductBrandService/SaveProductBrand";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<productbrand_pb.SaveProductBrandRequestProto>;
    requestDeserialize: grpc.deserialize<productbrand_pb.SaveProductBrandRequestProto>;
    responseSerialize: grpc.serialize<productbrand_pb.SaveProductBrandResponseProto>;
    responseDeserialize: grpc.deserialize<productbrand_pb.SaveProductBrandResponseProto>;
}
interface IProductBrandServiceService_ISetProductBrandIsHidden extends grpc.MethodDefinition<productbrand_pb.SetProductBrandIsHiddenRequestProto, productbrand_pb.SetProductBrandIsHiddenResponseProto> {
    path: "/bmapi.stocks.productbrand.ProductBrandService/SetProductBrandIsHidden";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<productbrand_pb.SetProductBrandIsHiddenRequestProto>;
    requestDeserialize: grpc.deserialize<productbrand_pb.SetProductBrandIsHiddenRequestProto>;
    responseSerialize: grpc.serialize<productbrand_pb.SetProductBrandIsHiddenResponseProto>;
    responseDeserialize: grpc.deserialize<productbrand_pb.SetProductBrandIsHiddenResponseProto>;
}

export const ProductBrandServiceService: IProductBrandServiceService;

export interface IProductBrandServiceServer extends grpc.UntypedServiceImplementation {
    getAllProductBrands: grpc.handleUnaryCall<productbrand_pb.GetAllProductBrandsRequestProto, productbrand_pb.GetAllProductBrandsResponseProto>;
    getProductBrands: grpc.handleUnaryCall<productbrand_pb.GetProductBrandsRequestProto, productbrand_pb.GetProductBrandsResponseProto>;
    saveProductBrand: grpc.handleUnaryCall<productbrand_pb.SaveProductBrandRequestProto, productbrand_pb.SaveProductBrandResponseProto>;
    setProductBrandIsHidden: grpc.handleUnaryCall<productbrand_pb.SetProductBrandIsHiddenRequestProto, productbrand_pb.SetProductBrandIsHiddenResponseProto>;
}

export interface IProductBrandServiceClient {
    getAllProductBrands(request: productbrand_pb.GetAllProductBrandsRequestProto, callback: (error: grpc.ServiceError | null, response: productbrand_pb.GetAllProductBrandsResponseProto) => void): grpc.ClientUnaryCall;
    getAllProductBrands(request: productbrand_pb.GetAllProductBrandsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: productbrand_pb.GetAllProductBrandsResponseProto) => void): grpc.ClientUnaryCall;
    getAllProductBrands(request: productbrand_pb.GetAllProductBrandsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: productbrand_pb.GetAllProductBrandsResponseProto) => void): grpc.ClientUnaryCall;
    getProductBrands(request: productbrand_pb.GetProductBrandsRequestProto, callback: (error: grpc.ServiceError | null, response: productbrand_pb.GetProductBrandsResponseProto) => void): grpc.ClientUnaryCall;
    getProductBrands(request: productbrand_pb.GetProductBrandsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: productbrand_pb.GetProductBrandsResponseProto) => void): grpc.ClientUnaryCall;
    getProductBrands(request: productbrand_pb.GetProductBrandsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: productbrand_pb.GetProductBrandsResponseProto) => void): grpc.ClientUnaryCall;
    saveProductBrand(request: productbrand_pb.SaveProductBrandRequestProto, callback: (error: grpc.ServiceError | null, response: productbrand_pb.SaveProductBrandResponseProto) => void): grpc.ClientUnaryCall;
    saveProductBrand(request: productbrand_pb.SaveProductBrandRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: productbrand_pb.SaveProductBrandResponseProto) => void): grpc.ClientUnaryCall;
    saveProductBrand(request: productbrand_pb.SaveProductBrandRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: productbrand_pb.SaveProductBrandResponseProto) => void): grpc.ClientUnaryCall;
    setProductBrandIsHidden(request: productbrand_pb.SetProductBrandIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: productbrand_pb.SetProductBrandIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setProductBrandIsHidden(request: productbrand_pb.SetProductBrandIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: productbrand_pb.SetProductBrandIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setProductBrandIsHidden(request: productbrand_pb.SetProductBrandIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: productbrand_pb.SetProductBrandIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
}

export class ProductBrandServiceClient extends grpc.Client implements IProductBrandServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllProductBrands(request: productbrand_pb.GetAllProductBrandsRequestProto, callback: (error: grpc.ServiceError | null, response: productbrand_pb.GetAllProductBrandsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllProductBrands(request: productbrand_pb.GetAllProductBrandsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: productbrand_pb.GetAllProductBrandsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllProductBrands(request: productbrand_pb.GetAllProductBrandsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: productbrand_pb.GetAllProductBrandsResponseProto) => void): grpc.ClientUnaryCall;
    public getProductBrands(request: productbrand_pb.GetProductBrandsRequestProto, callback: (error: grpc.ServiceError | null, response: productbrand_pb.GetProductBrandsResponseProto) => void): grpc.ClientUnaryCall;
    public getProductBrands(request: productbrand_pb.GetProductBrandsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: productbrand_pb.GetProductBrandsResponseProto) => void): grpc.ClientUnaryCall;
    public getProductBrands(request: productbrand_pb.GetProductBrandsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: productbrand_pb.GetProductBrandsResponseProto) => void): grpc.ClientUnaryCall;
    public saveProductBrand(request: productbrand_pb.SaveProductBrandRequestProto, callback: (error: grpc.ServiceError | null, response: productbrand_pb.SaveProductBrandResponseProto) => void): grpc.ClientUnaryCall;
    public saveProductBrand(request: productbrand_pb.SaveProductBrandRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: productbrand_pb.SaveProductBrandResponseProto) => void): grpc.ClientUnaryCall;
    public saveProductBrand(request: productbrand_pb.SaveProductBrandRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: productbrand_pb.SaveProductBrandResponseProto) => void): grpc.ClientUnaryCall;
    public setProductBrandIsHidden(request: productbrand_pb.SetProductBrandIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: productbrand_pb.SetProductBrandIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setProductBrandIsHidden(request: productbrand_pb.SetProductBrandIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: productbrand_pb.SetProductBrandIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setProductBrandIsHidden(request: productbrand_pb.SetProductBrandIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: productbrand_pb.SetProductBrandIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
}
