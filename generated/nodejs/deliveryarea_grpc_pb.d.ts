// package: bmapi.distribution.deliveryarea
// file: deliveryarea.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as deliveryarea_pb from "./deliveryarea_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IDeliveryAreaServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllDeliveryAreas: IDeliveryAreaServiceService_IGetAllDeliveryAreas;
    getDeliveryArea: IDeliveryAreaServiceService_IGetDeliveryArea;
    getDeliveryAreas: IDeliveryAreaServiceService_IGetDeliveryAreas;
    calculateNextDespatchDateByDeliveryArea: IDeliveryAreaServiceService_ICalculateNextDespatchDateByDeliveryArea;
}

interface IDeliveryAreaServiceService_IGetAllDeliveryAreas extends grpc.MethodDefinition<deliveryarea_pb.GetAllDeliveryAreasRequestProto, deliveryarea_pb.GetAllDeliveryAreasResponseProto> {
    path: "/bmapi.distribution.deliveryarea.DeliveryAreaService/GetAllDeliveryAreas";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<deliveryarea_pb.GetAllDeliveryAreasRequestProto>;
    requestDeserialize: grpc.deserialize<deliveryarea_pb.GetAllDeliveryAreasRequestProto>;
    responseSerialize: grpc.serialize<deliveryarea_pb.GetAllDeliveryAreasResponseProto>;
    responseDeserialize: grpc.deserialize<deliveryarea_pb.GetAllDeliveryAreasResponseProto>;
}
interface IDeliveryAreaServiceService_IGetDeliveryArea extends grpc.MethodDefinition<deliveryarea_pb.GetDeliveryAreaRequestProto, deliveryarea_pb.GetDeliveryAreaResponseProto> {
    path: "/bmapi.distribution.deliveryarea.DeliveryAreaService/GetDeliveryArea";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<deliveryarea_pb.GetDeliveryAreaRequestProto>;
    requestDeserialize: grpc.deserialize<deliveryarea_pb.GetDeliveryAreaRequestProto>;
    responseSerialize: grpc.serialize<deliveryarea_pb.GetDeliveryAreaResponseProto>;
    responseDeserialize: grpc.deserialize<deliveryarea_pb.GetDeliveryAreaResponseProto>;
}
interface IDeliveryAreaServiceService_IGetDeliveryAreas extends grpc.MethodDefinition<deliveryarea_pb.GetDeliveryAreasRequestProto, deliveryarea_pb.GetDeliveryAreasResponseProto> {
    path: "/bmapi.distribution.deliveryarea.DeliveryAreaService/GetDeliveryAreas";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<deliveryarea_pb.GetDeliveryAreasRequestProto>;
    requestDeserialize: grpc.deserialize<deliveryarea_pb.GetDeliveryAreasRequestProto>;
    responseSerialize: grpc.serialize<deliveryarea_pb.GetDeliveryAreasResponseProto>;
    responseDeserialize: grpc.deserialize<deliveryarea_pb.GetDeliveryAreasResponseProto>;
}
interface IDeliveryAreaServiceService_ICalculateNextDespatchDateByDeliveryArea extends grpc.MethodDefinition<deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaRequestProto, deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaResponseProto> {
    path: "/bmapi.distribution.deliveryarea.DeliveryAreaService/CalculateNextDespatchDateByDeliveryArea";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaRequestProto>;
    requestDeserialize: grpc.deserialize<deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaRequestProto>;
    responseSerialize: grpc.serialize<deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaResponseProto>;
    responseDeserialize: grpc.deserialize<deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaResponseProto>;
}

export const DeliveryAreaServiceService: IDeliveryAreaServiceService;

export interface IDeliveryAreaServiceServer extends grpc.UntypedServiceImplementation {
    getAllDeliveryAreas: grpc.handleUnaryCall<deliveryarea_pb.GetAllDeliveryAreasRequestProto, deliveryarea_pb.GetAllDeliveryAreasResponseProto>;
    getDeliveryArea: grpc.handleUnaryCall<deliveryarea_pb.GetDeliveryAreaRequestProto, deliveryarea_pb.GetDeliveryAreaResponseProto>;
    getDeliveryAreas: grpc.handleUnaryCall<deliveryarea_pb.GetDeliveryAreasRequestProto, deliveryarea_pb.GetDeliveryAreasResponseProto>;
    calculateNextDespatchDateByDeliveryArea: grpc.handleUnaryCall<deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaRequestProto, deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaResponseProto>;
}

export interface IDeliveryAreaServiceClient {
    getAllDeliveryAreas(request: deliveryarea_pb.GetAllDeliveryAreasRequestProto, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetAllDeliveryAreasResponseProto) => void): grpc.ClientUnaryCall;
    getAllDeliveryAreas(request: deliveryarea_pb.GetAllDeliveryAreasRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetAllDeliveryAreasResponseProto) => void): grpc.ClientUnaryCall;
    getAllDeliveryAreas(request: deliveryarea_pb.GetAllDeliveryAreasRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetAllDeliveryAreasResponseProto) => void): grpc.ClientUnaryCall;
    getDeliveryArea(request: deliveryarea_pb.GetDeliveryAreaRequestProto, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetDeliveryAreaResponseProto) => void): grpc.ClientUnaryCall;
    getDeliveryArea(request: deliveryarea_pb.GetDeliveryAreaRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetDeliveryAreaResponseProto) => void): grpc.ClientUnaryCall;
    getDeliveryArea(request: deliveryarea_pb.GetDeliveryAreaRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetDeliveryAreaResponseProto) => void): grpc.ClientUnaryCall;
    getDeliveryAreas(request: deliveryarea_pb.GetDeliveryAreasRequestProto, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetDeliveryAreasResponseProto) => void): grpc.ClientUnaryCall;
    getDeliveryAreas(request: deliveryarea_pb.GetDeliveryAreasRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetDeliveryAreasResponseProto) => void): grpc.ClientUnaryCall;
    getDeliveryAreas(request: deliveryarea_pb.GetDeliveryAreasRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetDeliveryAreasResponseProto) => void): grpc.ClientUnaryCall;
    calculateNextDespatchDateByDeliveryArea(request: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaRequestProto, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaResponseProto) => void): grpc.ClientUnaryCall;
    calculateNextDespatchDateByDeliveryArea(request: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaResponseProto) => void): grpc.ClientUnaryCall;
    calculateNextDespatchDateByDeliveryArea(request: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaResponseProto) => void): grpc.ClientUnaryCall;
}

export class DeliveryAreaServiceClient extends grpc.Client implements IDeliveryAreaServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllDeliveryAreas(request: deliveryarea_pb.GetAllDeliveryAreasRequestProto, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetAllDeliveryAreasResponseProto) => void): grpc.ClientUnaryCall;
    public getAllDeliveryAreas(request: deliveryarea_pb.GetAllDeliveryAreasRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetAllDeliveryAreasResponseProto) => void): grpc.ClientUnaryCall;
    public getAllDeliveryAreas(request: deliveryarea_pb.GetAllDeliveryAreasRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetAllDeliveryAreasResponseProto) => void): grpc.ClientUnaryCall;
    public getDeliveryArea(request: deliveryarea_pb.GetDeliveryAreaRequestProto, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetDeliveryAreaResponseProto) => void): grpc.ClientUnaryCall;
    public getDeliveryArea(request: deliveryarea_pb.GetDeliveryAreaRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetDeliveryAreaResponseProto) => void): grpc.ClientUnaryCall;
    public getDeliveryArea(request: deliveryarea_pb.GetDeliveryAreaRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetDeliveryAreaResponseProto) => void): grpc.ClientUnaryCall;
    public getDeliveryAreas(request: deliveryarea_pb.GetDeliveryAreasRequestProto, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetDeliveryAreasResponseProto) => void): grpc.ClientUnaryCall;
    public getDeliveryAreas(request: deliveryarea_pb.GetDeliveryAreasRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetDeliveryAreasResponseProto) => void): grpc.ClientUnaryCall;
    public getDeliveryAreas(request: deliveryarea_pb.GetDeliveryAreasRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.GetDeliveryAreasResponseProto) => void): grpc.ClientUnaryCall;
    public calculateNextDespatchDateByDeliveryArea(request: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaRequestProto, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaResponseProto) => void): grpc.ClientUnaryCall;
    public calculateNextDespatchDateByDeliveryArea(request: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaResponseProto) => void): grpc.ClientUnaryCall;
    public calculateNextDespatchDateByDeliveryArea(request: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: deliveryarea_pb.CalculateNextDespatchDateByDeliveryAreaResponseProto) => void): grpc.ClientUnaryCall;
}
