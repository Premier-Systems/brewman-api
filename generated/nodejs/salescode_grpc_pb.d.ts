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
    getSalesCode: ISalesCodeServiceService_IGetSalesCode;
    getSalesCodes: ISalesCodeServiceService_IGetSalesCodes;
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
interface ISalesCodeServiceService_IGetSalesCode extends grpc.MethodDefinition<salescode_pb.GetSalesCodeRequestProto, salescode_pb.GetSalesCodeResponseProto> {
    path: "/bmapi.outlets.salescode.SalesCodeService/GetSalesCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<salescode_pb.GetSalesCodeRequestProto>;
    requestDeserialize: grpc.deserialize<salescode_pb.GetSalesCodeRequestProto>;
    responseSerialize: grpc.serialize<salescode_pb.GetSalesCodeResponseProto>;
    responseDeserialize: grpc.deserialize<salescode_pb.GetSalesCodeResponseProto>;
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

export const SalesCodeServiceService: ISalesCodeServiceService;

export interface ISalesCodeServiceServer extends grpc.UntypedServiceImplementation {
    getAllSalesCodes: grpc.handleUnaryCall<salescode_pb.GetAllSalesCodesRequestProto, salescode_pb.GetAllSalesCodesResponseProto>;
    getSalesCode: grpc.handleUnaryCall<salescode_pb.GetSalesCodeRequestProto, salescode_pb.GetSalesCodeResponseProto>;
    getSalesCodes: grpc.handleUnaryCall<salescode_pb.GetSalesCodesRequestProto, salescode_pb.GetSalesCodesResponseProto>;
}

export interface ISalesCodeServiceClient {
    getAllSalesCodes(request: salescode_pb.GetAllSalesCodesRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetAllSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    getAllSalesCodes(request: salescode_pb.GetAllSalesCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetAllSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    getAllSalesCodes(request: salescode_pb.GetAllSalesCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetAllSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    getSalesCode(request: salescode_pb.GetSalesCodeRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodeResponseProto) => void): grpc.ClientUnaryCall;
    getSalesCode(request: salescode_pb.GetSalesCodeRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodeResponseProto) => void): grpc.ClientUnaryCall;
    getSalesCode(request: salescode_pb.GetSalesCodeRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodeResponseProto) => void): grpc.ClientUnaryCall;
    getSalesCodes(request: salescode_pb.GetSalesCodesRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    getSalesCodes(request: salescode_pb.GetSalesCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    getSalesCodes(request: salescode_pb.GetSalesCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
}

export class SalesCodeServiceClient extends grpc.Client implements ISalesCodeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllSalesCodes(request: salescode_pb.GetAllSalesCodesRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetAllSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllSalesCodes(request: salescode_pb.GetAllSalesCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetAllSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllSalesCodes(request: salescode_pb.GetAllSalesCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetAllSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesCode(request: salescode_pb.GetSalesCodeRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodeResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesCode(request: salescode_pb.GetSalesCodeRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodeResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesCode(request: salescode_pb.GetSalesCodeRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodeResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesCodes(request: salescode_pb.GetSalesCodesRequestProto, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesCodes(request: salescode_pb.GetSalesCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesCodes(request: salescode_pb.GetSalesCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salescode_pb.GetSalesCodesResponseProto) => void): grpc.ClientUnaryCall;
}
