// package: bmapi.outlets.salesarea
// file: salesarea.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as salesarea_pb from "./salesarea_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface ISalesAreaServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllSalesAreas: ISalesAreaServiceService_IGetAllSalesAreas;
    getSalesArea: ISalesAreaServiceService_IGetSalesArea;
    getSalesAreas: ISalesAreaServiceService_IGetSalesAreas;
}

interface ISalesAreaServiceService_IGetAllSalesAreas extends grpc.MethodDefinition<salesarea_pb.GetAllSalesAreasRequestProto, salesarea_pb.GetAllSalesAreasResponseProto> {
    path: "/bmapi.outlets.salesarea.SalesAreaService/GetAllSalesAreas";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<salesarea_pb.GetAllSalesAreasRequestProto>;
    requestDeserialize: grpc.deserialize<salesarea_pb.GetAllSalesAreasRequestProto>;
    responseSerialize: grpc.serialize<salesarea_pb.GetAllSalesAreasResponseProto>;
    responseDeserialize: grpc.deserialize<salesarea_pb.GetAllSalesAreasResponseProto>;
}
interface ISalesAreaServiceService_IGetSalesArea extends grpc.MethodDefinition<salesarea_pb.GetSalesAreaRequestProto, salesarea_pb.GetSalesAreaResponseProto> {
    path: "/bmapi.outlets.salesarea.SalesAreaService/GetSalesArea";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<salesarea_pb.GetSalesAreaRequestProto>;
    requestDeserialize: grpc.deserialize<salesarea_pb.GetSalesAreaRequestProto>;
    responseSerialize: grpc.serialize<salesarea_pb.GetSalesAreaResponseProto>;
    responseDeserialize: grpc.deserialize<salesarea_pb.GetSalesAreaResponseProto>;
}
interface ISalesAreaServiceService_IGetSalesAreas extends grpc.MethodDefinition<salesarea_pb.GetSalesAreasRequestProto, salesarea_pb.GetSalesAreasResponseProto> {
    path: "/bmapi.outlets.salesarea.SalesAreaService/GetSalesAreas";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<salesarea_pb.GetSalesAreasRequestProto>;
    requestDeserialize: grpc.deserialize<salesarea_pb.GetSalesAreasRequestProto>;
    responseSerialize: grpc.serialize<salesarea_pb.GetSalesAreasResponseProto>;
    responseDeserialize: grpc.deserialize<salesarea_pb.GetSalesAreasResponseProto>;
}

export const SalesAreaServiceService: ISalesAreaServiceService;

export interface ISalesAreaServiceServer extends grpc.UntypedServiceImplementation {
    getAllSalesAreas: grpc.handleUnaryCall<salesarea_pb.GetAllSalesAreasRequestProto, salesarea_pb.GetAllSalesAreasResponseProto>;
    getSalesArea: grpc.handleUnaryCall<salesarea_pb.GetSalesAreaRequestProto, salesarea_pb.GetSalesAreaResponseProto>;
    getSalesAreas: grpc.handleUnaryCall<salesarea_pb.GetSalesAreasRequestProto, salesarea_pb.GetSalesAreasResponseProto>;
}

export interface ISalesAreaServiceClient {
    getAllSalesAreas(request: salesarea_pb.GetAllSalesAreasRequestProto, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetAllSalesAreasResponseProto) => void): grpc.ClientUnaryCall;
    getAllSalesAreas(request: salesarea_pb.GetAllSalesAreasRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetAllSalesAreasResponseProto) => void): grpc.ClientUnaryCall;
    getAllSalesAreas(request: salesarea_pb.GetAllSalesAreasRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetAllSalesAreasResponseProto) => void): grpc.ClientUnaryCall;
    getSalesArea(request: salesarea_pb.GetSalesAreaRequestProto, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetSalesAreaResponseProto) => void): grpc.ClientUnaryCall;
    getSalesArea(request: salesarea_pb.GetSalesAreaRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetSalesAreaResponseProto) => void): grpc.ClientUnaryCall;
    getSalesArea(request: salesarea_pb.GetSalesAreaRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetSalesAreaResponseProto) => void): grpc.ClientUnaryCall;
    getSalesAreas(request: salesarea_pb.GetSalesAreasRequestProto, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetSalesAreasResponseProto) => void): grpc.ClientUnaryCall;
    getSalesAreas(request: salesarea_pb.GetSalesAreasRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetSalesAreasResponseProto) => void): grpc.ClientUnaryCall;
    getSalesAreas(request: salesarea_pb.GetSalesAreasRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetSalesAreasResponseProto) => void): grpc.ClientUnaryCall;
}

export class SalesAreaServiceClient extends grpc.Client implements ISalesAreaServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllSalesAreas(request: salesarea_pb.GetAllSalesAreasRequestProto, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetAllSalesAreasResponseProto) => void): grpc.ClientUnaryCall;
    public getAllSalesAreas(request: salesarea_pb.GetAllSalesAreasRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetAllSalesAreasResponseProto) => void): grpc.ClientUnaryCall;
    public getAllSalesAreas(request: salesarea_pb.GetAllSalesAreasRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetAllSalesAreasResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesArea(request: salesarea_pb.GetSalesAreaRequestProto, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetSalesAreaResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesArea(request: salesarea_pb.GetSalesAreaRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetSalesAreaResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesArea(request: salesarea_pb.GetSalesAreaRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetSalesAreaResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesAreas(request: salesarea_pb.GetSalesAreasRequestProto, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetSalesAreasResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesAreas(request: salesarea_pb.GetSalesAreasRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetSalesAreasResponseProto) => void): grpc.ClientUnaryCall;
    public getSalesAreas(request: salesarea_pb.GetSalesAreasRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: salesarea_pb.GetSalesAreasResponseProto) => void): grpc.ClientUnaryCall;
}
