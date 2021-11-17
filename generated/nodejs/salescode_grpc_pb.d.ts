// package: bmapi.outlets.salescode
// file: salescode.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as salescode_pb from "./salescode_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface ISalesCodeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllSalesCodes: ISalesCodeServiceService_IGetAllSalesCodes;
    getSalesCodes: ISalesCodeServiceService_IGetSalesCodes;
    saveSalesCodes: ISalesCodeServiceService_ISaveSalesCodes;
    setSalesCodeIsHidden: ISalesCodeServiceService_ISetSalesCodeIsHidden;
}

interface ISalesCodeServiceService_IGetAllSalesCodes extends grpc.MethodDefinition<salescode_pb.GetAllSalesCodesRequestProto, salescode_pb.GetAllSalesCodesResponseProto> {
    path: "/bmapi.outlets.salescode.SalesCodeService/GetAllSalesCodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<salescode_pb.GetAllSalesCodesRequestProto>;
    requestDeserialize: grpc.deserialize<salescode_pb.GetAllSalesCodesRequestProto>;
    responseSerialize: grpc.serialize<salescode_pb.GetAllSalesCodesResponseProto>;
    responseDeserialize: grpc.deserialize<salescode_pb.GetAllSalesCodesResponseProto>;
}
interface ISalesCodeServiceService_IGetSalesCodes extends grpc.MethodDefinition<salescode_pb.GetSalesCodesRequestProto, salescode_pb.GetSalesCodesResponseProto> {
    path: "/bmapi.outlets.salescode.SalesCodeService/GetSalesCodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<salescode_pb.GetSalesCodesRequestProto>;
    requestDeserialize: grpc.deserialize<salescode_pb.GetSalesCodesRequestProto>;
    responseSerialize: grpc.serialize<salescode_pb.GetSalesCodesResponseProto>;
    responseDeserialize: grpc.deserialize<salescode_pb.GetSalesCodesResponseProto>;
}
interface ISalesCodeServiceService_ISaveSalesCodes extends grpc.MethodDefinition<salescode_pb.SaveSalesCodesRequestProto, salescode_pb.SaveSalesCodesResponseProto> {
    path: "/bmapi.outlets.salescode.SalesCodeService/SaveSalesCodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<salescode_pb.SaveSalesCodesRequestProto>;
    requestDeserialize: grpc.deserialize<salescode_pb.SaveSalesCodesRequestProto>;
    responseSerialize: grpc.serialize<salescode_pb.SaveSalesCodesResponseProto>;
    responseDeserialize: grpc.deserialize<salescode_pb.SaveSalesCodesResponseProto>;
}
interface ISalesCodeServiceService_ISetSalesCodeIsHidden extends grpc.MethodDefinition<salescode_pb.SetSalesCodeIsHiddenRequestProto, salescode_pb.SetSalesCodeIsHiddenResponseProto> {
    path: "/bmapi.outlets.salescode.SalesCodeService/SetSalesCodeIsHidden";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<salescode_pb.SetSalesCodeIsHiddenRequestProto>;
    requestDeserialize: grpc.deserialize<salescode_pb.SetSalesCodeIsHiddenRequestProto>;
    responseSerialize: grpc.serialize<salescode_pb.SetSalesCodeIsHiddenResponseProto>;
    responseDeserialize: grpc.deserialize<salescode_pb.SetSalesCodeIsHiddenResponseProto>;
}

export const SalesCodeServiceService: ISalesCodeServiceService;

export interface ISalesCodeServiceServer extends grpc.UntypedServiceImplementation {
    getAllSalesCodes: grpc.handleUnaryCall<salescode_pb.GetAllSalesCodesRequestProto, salescode_pb.GetAllSalesCodesResponseProto>;
    getSalesCodes: grpc.handleUnaryCall<salescode_pb.GetSalesCodesRequestProto, salescode_pb.GetSalesCodesResponseProto>;
    saveSalesCodes: grpc.handleUnaryCall<salescode_pb.SaveSalesCodesRequestProto, salescode_pb.SaveSalesCodesResponseProto>;
    setSalesCodeIsHidden: grpc.handleUnaryCall<salescode_pb.SetSalesCodeIsHiddenRequestProto, salescode_pb.SetSalesCodeIsHiddenResponseProto>;
}

export interface ISalesCodeServiceClient {
    getAllSalesCodes(request: salescode_pb.GetAllSalesCodesRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetAllSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    getAllSalesCodes(request: salescode_pb.GetAllSalesCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetAllSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    getAllSalesCodes(request: salescode_pb.GetAllSalesCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetAllSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    getSalesCodes(request: salescode_pb.GetSalesCodesRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    getSalesCodes(request: salescode_pb.GetSalesCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    getSalesCodes(request: salescode_pb.GetSalesCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    saveSalesCodes(request: salescode_pb.SaveSalesCodesRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.SaveSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    saveSalesCodes(request: salescode_pb.SaveSalesCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.SaveSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    saveSalesCodes(request: salescode_pb.SaveSalesCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.SaveSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    setSalesCodeIsHidden(request: salescode_pb.SetSalesCodeIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.SetSalesCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setSalesCodeIsHidden(request: salescode_pb.SetSalesCodeIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.SetSalesCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setSalesCodeIsHidden(request: salescode_pb.SetSalesCodeIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.SetSalesCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
}

export class SalesCodeServiceClient extends grpc.Client implements ISalesCodeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllSalesCodes(request: salescode_pb.GetAllSalesCodesRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetAllSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllSalesCodes(request: salescode_pb.GetAllSalesCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetAllSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllSalesCodes(request: salescode_pb.GetAllSalesCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetAllSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesCodes(request: salescode_pb.GetSalesCodesRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesCodes(request: salescode_pb.GetSalesCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesCodes(request: salescode_pb.GetSalesCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public saveSalesCodes(request: salescode_pb.SaveSalesCodesRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.SaveSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public saveSalesCodes(request: salescode_pb.SaveSalesCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.SaveSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public saveSalesCodes(request: salescode_pb.SaveSalesCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.SaveSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public setSalesCodeIsHidden(request: salescode_pb.SetSalesCodeIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.SetSalesCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setSalesCodeIsHidden(request: salescode_pb.SetSalesCodeIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.SetSalesCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setSalesCodeIsHidden(request: salescode_pb.SetSalesCodeIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.SetSalesCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
}
