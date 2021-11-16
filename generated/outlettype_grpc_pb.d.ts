// package: bmapi.outlets.outlettype
// file: outlettype.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as outlettype_pb from "./outlettype_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IOutletTypeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllOutletTypes: IOutletTypeServiceService_IGetAllOutletTypes;
    getOutletTypes: IOutletTypeServiceService_IGetOutletTypes;
    saveOutletTypes: IOutletTypeServiceService_ISaveOutletTypes;
    setOutletTypeIsHidden: IOutletTypeServiceService_ISetOutletTypeIsHidden;
}

interface IOutletTypeServiceService_IGetAllOutletTypes extends grpc.MethodDefinition<outlettype_pb.GetAllOutletTypesRequestProto, outlettype_pb.GetAllOutletTypesResponseProto> {
    path: "/bmapi.outlets.outlettype.OutletTypeService/GetAllOutletTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<outlettype_pb.GetAllOutletTypesRequestProto>;
    requestDeserialize: grpc.deserialize<outlettype_pb.GetAllOutletTypesRequestProto>;
    responseSerialize: grpc.serialize<outlettype_pb.GetAllOutletTypesResponseProto>;
    responseDeserialize: grpc.deserialize<outlettype_pb.GetAllOutletTypesResponseProto>;
}
interface IOutletTypeServiceService_IGetOutletTypes extends grpc.MethodDefinition<outlettype_pb.GetOutletTypesRequestProto, outlettype_pb.GetOutletTypesResponseProto> {
    path: "/bmapi.outlets.outlettype.OutletTypeService/GetOutletTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<outlettype_pb.GetOutletTypesRequestProto>;
    requestDeserialize: grpc.deserialize<outlettype_pb.GetOutletTypesRequestProto>;
    responseSerialize: grpc.serialize<outlettype_pb.GetOutletTypesResponseProto>;
    responseDeserialize: grpc.deserialize<outlettype_pb.GetOutletTypesResponseProto>;
}
interface IOutletTypeServiceService_ISaveOutletTypes extends grpc.MethodDefinition<outlettype_pb.SaveOutletTypesRequestProto, outlettype_pb.SaveOutletTypesResponseProto> {
    path: "/bmapi.outlets.outlettype.OutletTypeService/SaveOutletTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<outlettype_pb.SaveOutletTypesRequestProto>;
    requestDeserialize: grpc.deserialize<outlettype_pb.SaveOutletTypesRequestProto>;
    responseSerialize: grpc.serialize<outlettype_pb.SaveOutletTypesResponseProto>;
    responseDeserialize: grpc.deserialize<outlettype_pb.SaveOutletTypesResponseProto>;
}
interface IOutletTypeServiceService_ISetOutletTypeIsHidden extends grpc.MethodDefinition<outlettype_pb.SetOutletTypeIsHiddenRequestProto, outlettype_pb.SetOutletTypeIsHiddenResponseProto> {
    path: "/bmapi.outlets.outlettype.OutletTypeService/SetOutletTypeIsHidden";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<outlettype_pb.SetOutletTypeIsHiddenRequestProto>;
    requestDeserialize: grpc.deserialize<outlettype_pb.SetOutletTypeIsHiddenRequestProto>;
    responseSerialize: grpc.serialize<outlettype_pb.SetOutletTypeIsHiddenResponseProto>;
    responseDeserialize: grpc.deserialize<outlettype_pb.SetOutletTypeIsHiddenResponseProto>;
}

export const OutletTypeServiceService: IOutletTypeServiceService;

export interface IOutletTypeServiceServer extends grpc.UntypedServiceImplementation {
    getAllOutletTypes: grpc.handleUnaryCall<outlettype_pb.GetAllOutletTypesRequestProto, outlettype_pb.GetAllOutletTypesResponseProto>;
    getOutletTypes: grpc.handleUnaryCall<outlettype_pb.GetOutletTypesRequestProto, outlettype_pb.GetOutletTypesResponseProto>;
    saveOutletTypes: grpc.handleUnaryCall<outlettype_pb.SaveOutletTypesRequestProto, outlettype_pb.SaveOutletTypesResponseProto>;
    setOutletTypeIsHidden: grpc.handleUnaryCall<outlettype_pb.SetOutletTypeIsHiddenRequestProto, outlettype_pb.SetOutletTypeIsHiddenResponseProto>;
}

export interface IOutletTypeServiceClient {
    getAllOutletTypes(request: outlettype_pb.GetAllOutletTypesRequestProto, callback: (error: grpc.ServiceError | null, response: outlettype_pb.GetAllOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    getAllOutletTypes(request: outlettype_pb.GetAllOutletTypesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlettype_pb.GetAllOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    getAllOutletTypes(request: outlettype_pb.GetAllOutletTypesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlettype_pb.GetAllOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    getOutletTypes(request: outlettype_pb.GetOutletTypesRequestProto, callback: (error: grpc.ServiceError | null, response: outlettype_pb.GetOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    getOutletTypes(request: outlettype_pb.GetOutletTypesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlettype_pb.GetOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    getOutletTypes(request: outlettype_pb.GetOutletTypesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlettype_pb.GetOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    saveOutletTypes(request: outlettype_pb.SaveOutletTypesRequestProto, callback: (error: grpc.ServiceError | null, response: outlettype_pb.SaveOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    saveOutletTypes(request: outlettype_pb.SaveOutletTypesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlettype_pb.SaveOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    saveOutletTypes(request: outlettype_pb.SaveOutletTypesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlettype_pb.SaveOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    setOutletTypeIsHidden(request: outlettype_pb.SetOutletTypeIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: outlettype_pb.SetOutletTypeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setOutletTypeIsHidden(request: outlettype_pb.SetOutletTypeIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlettype_pb.SetOutletTypeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setOutletTypeIsHidden(request: outlettype_pb.SetOutletTypeIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlettype_pb.SetOutletTypeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
}

export class OutletTypeServiceClient extends grpc.Client implements IOutletTypeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllOutletTypes(request: outlettype_pb.GetAllOutletTypesRequestProto, callback: (error: grpc.ServiceError | null, response: outlettype_pb.GetAllOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllOutletTypes(request: outlettype_pb.GetAllOutletTypesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlettype_pb.GetAllOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllOutletTypes(request: outlettype_pb.GetAllOutletTypesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlettype_pb.GetAllOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    public getOutletTypes(request: outlettype_pb.GetOutletTypesRequestProto, callback: (error: grpc.ServiceError | null, response: outlettype_pb.GetOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    public getOutletTypes(request: outlettype_pb.GetOutletTypesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlettype_pb.GetOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    public getOutletTypes(request: outlettype_pb.GetOutletTypesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlettype_pb.GetOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    public saveOutletTypes(request: outlettype_pb.SaveOutletTypesRequestProto, callback: (error: grpc.ServiceError | null, response: outlettype_pb.SaveOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    public saveOutletTypes(request: outlettype_pb.SaveOutletTypesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlettype_pb.SaveOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    public saveOutletTypes(request: outlettype_pb.SaveOutletTypesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlettype_pb.SaveOutletTypesResponseProto) => void): grpc.ClientUnaryCall;
    public setOutletTypeIsHidden(request: outlettype_pb.SetOutletTypeIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: outlettype_pb.SetOutletTypeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setOutletTypeIsHidden(request: outlettype_pb.SetOutletTypeIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlettype_pb.SetOutletTypeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setOutletTypeIsHidden(request: outlettype_pb.SetOutletTypeIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlettype_pb.SetOutletTypeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
}
