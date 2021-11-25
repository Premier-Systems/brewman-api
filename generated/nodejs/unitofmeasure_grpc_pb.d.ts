// package: bmapi.stocks.unitofmeasure
// file: unitofmeasure.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as unitofmeasure_pb from "./unitofmeasure_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IUnitOfMeasureServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllUnitsOfMeasure: IUnitOfMeasureServiceService_IGetAllUnitsOfMeasure;
    getUnitOfMeasure: IUnitOfMeasureServiceService_IGetUnitOfMeasure;
    getUnitsOfMeasure: IUnitOfMeasureServiceService_IGetUnitsOfMeasure;
}

interface IUnitOfMeasureServiceService_IGetAllUnitsOfMeasure extends grpc.MethodDefinition<unitofmeasure_pb.GetAllUnitsOfMeasureRequestProto, unitofmeasure_pb.GetAllUnitsOfMeasureResponseProto> {
    path: "/bmapi.stocks.unitofmeasure.UnitOfMeasureService/GetAllUnitsOfMeasure";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<unitofmeasure_pb.GetAllUnitsOfMeasureRequestProto>;
    requestDeserialize: grpc.deserialize<unitofmeasure_pb.GetAllUnitsOfMeasureRequestProto>;
    responseSerialize: grpc.serialize<unitofmeasure_pb.GetAllUnitsOfMeasureResponseProto>;
    responseDeserialize: grpc.deserialize<unitofmeasure_pb.GetAllUnitsOfMeasureResponseProto>;
}
interface IUnitOfMeasureServiceService_IGetUnitOfMeasure extends grpc.MethodDefinition<unitofmeasure_pb.GetUnitOfMeasureRequestProto, unitofmeasure_pb.GetUnitOfMeasureResponseProto> {
    path: "/bmapi.stocks.unitofmeasure.UnitOfMeasureService/GetUnitOfMeasure";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<unitofmeasure_pb.GetUnitOfMeasureRequestProto>;
    requestDeserialize: grpc.deserialize<unitofmeasure_pb.GetUnitOfMeasureRequestProto>;
    responseSerialize: grpc.serialize<unitofmeasure_pb.GetUnitOfMeasureResponseProto>;
    responseDeserialize: grpc.deserialize<unitofmeasure_pb.GetUnitOfMeasureResponseProto>;
}
interface IUnitOfMeasureServiceService_IGetUnitsOfMeasure extends grpc.MethodDefinition<unitofmeasure_pb.GetUnitsOfMeasureRequestProto, unitofmeasure_pb.GetUnitsOfMeasureResponseProto> {
    path: "/bmapi.stocks.unitofmeasure.UnitOfMeasureService/GetUnitsOfMeasure";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<unitofmeasure_pb.GetUnitsOfMeasureRequestProto>;
    requestDeserialize: grpc.deserialize<unitofmeasure_pb.GetUnitsOfMeasureRequestProto>;
    responseSerialize: grpc.serialize<unitofmeasure_pb.GetUnitsOfMeasureResponseProto>;
    responseDeserialize: grpc.deserialize<unitofmeasure_pb.GetUnitsOfMeasureResponseProto>;
}

export const UnitOfMeasureServiceService: IUnitOfMeasureServiceService;

export interface IUnitOfMeasureServiceServer extends grpc.UntypedServiceImplementation {
    getAllUnitsOfMeasure: grpc.handleUnaryCall<unitofmeasure_pb.GetAllUnitsOfMeasureRequestProto, unitofmeasure_pb.GetAllUnitsOfMeasureResponseProto>;
    getUnitOfMeasure: grpc.handleUnaryCall<unitofmeasure_pb.GetUnitOfMeasureRequestProto, unitofmeasure_pb.GetUnitOfMeasureResponseProto>;
    getUnitsOfMeasure: grpc.handleUnaryCall<unitofmeasure_pb.GetUnitsOfMeasureRequestProto, unitofmeasure_pb.GetUnitsOfMeasureResponseProto>;
}

export interface IUnitOfMeasureServiceClient {
    getAllUnitsOfMeasure(request: unitofmeasure_pb.GetAllUnitsOfMeasureRequestProto, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetAllUnitsOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    getAllUnitsOfMeasure(request: unitofmeasure_pb.GetAllUnitsOfMeasureRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetAllUnitsOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    getAllUnitsOfMeasure(request: unitofmeasure_pb.GetAllUnitsOfMeasureRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetAllUnitsOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    getUnitOfMeasure(request: unitofmeasure_pb.GetUnitOfMeasureRequestProto, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetUnitOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    getUnitOfMeasure(request: unitofmeasure_pb.GetUnitOfMeasureRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetUnitOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    getUnitOfMeasure(request: unitofmeasure_pb.GetUnitOfMeasureRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetUnitOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    getUnitsOfMeasure(request: unitofmeasure_pb.GetUnitsOfMeasureRequestProto, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetUnitsOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    getUnitsOfMeasure(request: unitofmeasure_pb.GetUnitsOfMeasureRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetUnitsOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    getUnitsOfMeasure(request: unitofmeasure_pb.GetUnitsOfMeasureRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetUnitsOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
}

export class UnitOfMeasureServiceClient extends grpc.Client implements IUnitOfMeasureServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllUnitsOfMeasure(request: unitofmeasure_pb.GetAllUnitsOfMeasureRequestProto, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetAllUnitsOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    public getAllUnitsOfMeasure(request: unitofmeasure_pb.GetAllUnitsOfMeasureRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetAllUnitsOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    public getAllUnitsOfMeasure(request: unitofmeasure_pb.GetAllUnitsOfMeasureRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetAllUnitsOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    public getUnitOfMeasure(request: unitofmeasure_pb.GetUnitOfMeasureRequestProto, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetUnitOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    public getUnitOfMeasure(request: unitofmeasure_pb.GetUnitOfMeasureRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetUnitOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    public getUnitOfMeasure(request: unitofmeasure_pb.GetUnitOfMeasureRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetUnitOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    public getUnitsOfMeasure(request: unitofmeasure_pb.GetUnitsOfMeasureRequestProto, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetUnitsOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    public getUnitsOfMeasure(request: unitofmeasure_pb.GetUnitsOfMeasureRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetUnitsOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
    public getUnitsOfMeasure(request: unitofmeasure_pb.GetUnitsOfMeasureRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unitofmeasure_pb.GetUnitsOfMeasureResponseProto) => void): grpc.ClientUnaryCall;
}
