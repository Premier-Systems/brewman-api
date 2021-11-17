// package: bmapi.orders.collectiontime
// file: collectiontime.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as collectiontime_pb from "./collectiontime_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface ICollectionTimeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllCollectionTimes: ICollectionTimeServiceService_IGetAllCollectionTimes;
    getCollectionTimes: ICollectionTimeServiceService_IGetCollectionTimes;
    saveCollectionTimes: ICollectionTimeServiceService_ISaveCollectionTimes;
}

interface ICollectionTimeServiceService_IGetAllCollectionTimes extends grpc.MethodDefinition<collectiontime_pb.GetAllCollectionTimesRequestProto, collectiontime_pb.GetAllCollectionTimesResponseProto> {
    path: "/bmapi.orders.collectiontime.CollectionTimeService/GetAllCollectionTimes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<collectiontime_pb.GetAllCollectionTimesRequestProto>;
    requestDeserialize: grpc.deserialize<collectiontime_pb.GetAllCollectionTimesRequestProto>;
    responseSerialize: grpc.serialize<collectiontime_pb.GetAllCollectionTimesResponseProto>;
    responseDeserialize: grpc.deserialize<collectiontime_pb.GetAllCollectionTimesResponseProto>;
}
interface ICollectionTimeServiceService_IGetCollectionTimes extends grpc.MethodDefinition<collectiontime_pb.GetCollectionTimesRequestProto, collectiontime_pb.GetCollectionTimesResponseProto> {
    path: "/bmapi.orders.collectiontime.CollectionTimeService/GetCollectionTimes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<collectiontime_pb.GetCollectionTimesRequestProto>;
    requestDeserialize: grpc.deserialize<collectiontime_pb.GetCollectionTimesRequestProto>;
    responseSerialize: grpc.serialize<collectiontime_pb.GetCollectionTimesResponseProto>;
    responseDeserialize: grpc.deserialize<collectiontime_pb.GetCollectionTimesResponseProto>;
}
interface ICollectionTimeServiceService_ISaveCollectionTimes extends grpc.MethodDefinition<collectiontime_pb.SaveCollectionTimesRequestProto, collectiontime_pb.SaveCollectionTimesResponseProto> {
    path: "/bmapi.orders.collectiontime.CollectionTimeService/SaveCollectionTimes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<collectiontime_pb.SaveCollectionTimesRequestProto>;
    requestDeserialize: grpc.deserialize<collectiontime_pb.SaveCollectionTimesRequestProto>;
    responseSerialize: grpc.serialize<collectiontime_pb.SaveCollectionTimesResponseProto>;
    responseDeserialize: grpc.deserialize<collectiontime_pb.SaveCollectionTimesResponseProto>;
}

export const CollectionTimeServiceService: ICollectionTimeServiceService;

export interface ICollectionTimeServiceServer extends grpc.UntypedServiceImplementation {
    getAllCollectionTimes: grpc.handleUnaryCall<collectiontime_pb.GetAllCollectionTimesRequestProto, collectiontime_pb.GetAllCollectionTimesResponseProto>;
    getCollectionTimes: grpc.handleUnaryCall<collectiontime_pb.GetCollectionTimesRequestProto, collectiontime_pb.GetCollectionTimesResponseProto>;
    saveCollectionTimes: grpc.handleUnaryCall<collectiontime_pb.SaveCollectionTimesRequestProto, collectiontime_pb.SaveCollectionTimesResponseProto>;
}

export interface ICollectionTimeServiceClient {
    getAllCollectionTimes(request: collectiontime_pb.GetAllCollectionTimesRequestProto, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.GetAllCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    getAllCollectionTimes(request: collectiontime_pb.GetAllCollectionTimesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.GetAllCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    getAllCollectionTimes(request: collectiontime_pb.GetAllCollectionTimesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.GetAllCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    getCollectionTimes(request: collectiontime_pb.GetCollectionTimesRequestProto, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.GetCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    getCollectionTimes(request: collectiontime_pb.GetCollectionTimesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.GetCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    getCollectionTimes(request: collectiontime_pb.GetCollectionTimesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.GetCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    saveCollectionTimes(request: collectiontime_pb.SaveCollectionTimesRequestProto, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.SaveCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    saveCollectionTimes(request: collectiontime_pb.SaveCollectionTimesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.SaveCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    saveCollectionTimes(request: collectiontime_pb.SaveCollectionTimesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.SaveCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
}

export class CollectionTimeServiceClient extends grpc.Client implements ICollectionTimeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllCollectionTimes(request: collectiontime_pb.GetAllCollectionTimesRequestProto, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.GetAllCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllCollectionTimes(request: collectiontime_pb.GetAllCollectionTimesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.GetAllCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllCollectionTimes(request: collectiontime_pb.GetAllCollectionTimesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.GetAllCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    public getCollectionTimes(request: collectiontime_pb.GetCollectionTimesRequestProto, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.GetCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    public getCollectionTimes(request: collectiontime_pb.GetCollectionTimesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.GetCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    public getCollectionTimes(request: collectiontime_pb.GetCollectionTimesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.GetCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    public saveCollectionTimes(request: collectiontime_pb.SaveCollectionTimesRequestProto, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.SaveCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    public saveCollectionTimes(request: collectiontime_pb.SaveCollectionTimesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.SaveCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
    public saveCollectionTimes(request: collectiontime_pb.SaveCollectionTimesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: collectiontime_pb.SaveCollectionTimesResponseProto) => void): grpc.ClientUnaryCall;
}
