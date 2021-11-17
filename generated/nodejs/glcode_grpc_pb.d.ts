// package: bmapi.stocks.glcode
// file: glcode.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as glcode_pb from "./glcode_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IGlCodeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllGlCodes: IGlCodeServiceService_IGetAllGlCodes;
    getGlCode: IGlCodeServiceService_IGetGlCode;
    getGlCodes: IGlCodeServiceService_IGetGlCodes;
    saveGlCode: IGlCodeServiceService_ISaveGlCode;
    setGlCodeIsHidden: IGlCodeServiceService_ISetGlCodeIsHidden;
    getAllGlCodeOverrides: IGlCodeServiceService_IGetAllGlCodeOverrides;
}

interface IGlCodeServiceService_IGetAllGlCodes extends grpc.MethodDefinition<glcode_pb.GetAllGlCodesRequestProto, glcode_pb.GetAllGlCodesResponseProto> {
    path: "/bmapi.stocks.glcode.GlCodeService/GetAllGlCodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<glcode_pb.GetAllGlCodesRequestProto>;
    requestDeserialize: grpc.deserialize<glcode_pb.GetAllGlCodesRequestProto>;
    responseSerialize: grpc.serialize<glcode_pb.GetAllGlCodesResponseProto>;
    responseDeserialize: grpc.deserialize<glcode_pb.GetAllGlCodesResponseProto>;
}
interface IGlCodeServiceService_IGetGlCode extends grpc.MethodDefinition<glcode_pb.GetGlCodeRequestProto, glcode_pb.GetGlCodeResponseProto> {
    path: "/bmapi.stocks.glcode.GlCodeService/GetGlCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<glcode_pb.GetGlCodeRequestProto>;
    requestDeserialize: grpc.deserialize<glcode_pb.GetGlCodeRequestProto>;
    responseSerialize: grpc.serialize<glcode_pb.GetGlCodeResponseProto>;
    responseDeserialize: grpc.deserialize<glcode_pb.GetGlCodeResponseProto>;
}
interface IGlCodeServiceService_IGetGlCodes extends grpc.MethodDefinition<glcode_pb.GetGlCodesRequestProto, glcode_pb.GetGlCodesResponseProto> {
    path: "/bmapi.stocks.glcode.GlCodeService/GetGlCodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<glcode_pb.GetGlCodesRequestProto>;
    requestDeserialize: grpc.deserialize<glcode_pb.GetGlCodesRequestProto>;
    responseSerialize: grpc.serialize<glcode_pb.GetGlCodesResponseProto>;
    responseDeserialize: grpc.deserialize<glcode_pb.GetGlCodesResponseProto>;
}
interface IGlCodeServiceService_ISaveGlCode extends grpc.MethodDefinition<glcode_pb.SaveGlCodeRequestProto, glcode_pb.SaveGlCodeResponseProto> {
    path: "/bmapi.stocks.glcode.GlCodeService/SaveGlCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<glcode_pb.SaveGlCodeRequestProto>;
    requestDeserialize: grpc.deserialize<glcode_pb.SaveGlCodeRequestProto>;
    responseSerialize: grpc.serialize<glcode_pb.SaveGlCodeResponseProto>;
    responseDeserialize: grpc.deserialize<glcode_pb.SaveGlCodeResponseProto>;
}
interface IGlCodeServiceService_ISetGlCodeIsHidden extends grpc.MethodDefinition<glcode_pb.SetGlCodeIsHiddenRequestProto, glcode_pb.SetGlCodeIsHiddenResponseProto> {
    path: "/bmapi.stocks.glcode.GlCodeService/SetGlCodeIsHidden";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<glcode_pb.SetGlCodeIsHiddenRequestProto>;
    requestDeserialize: grpc.deserialize<glcode_pb.SetGlCodeIsHiddenRequestProto>;
    responseSerialize: grpc.serialize<glcode_pb.SetGlCodeIsHiddenResponseProto>;
    responseDeserialize: grpc.deserialize<glcode_pb.SetGlCodeIsHiddenResponseProto>;
}
interface IGlCodeServiceService_IGetAllGlCodeOverrides extends grpc.MethodDefinition<glcode_pb.GetAllGlCodeOverridesRequestProto, glcode_pb.GetAllGlCodeOverridesResponseProto> {
    path: "/bmapi.stocks.glcode.GlCodeService/GetAllGlCodeOverrides";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<glcode_pb.GetAllGlCodeOverridesRequestProto>;
    requestDeserialize: grpc.deserialize<glcode_pb.GetAllGlCodeOverridesRequestProto>;
    responseSerialize: grpc.serialize<glcode_pb.GetAllGlCodeOverridesResponseProto>;
    responseDeserialize: grpc.deserialize<glcode_pb.GetAllGlCodeOverridesResponseProto>;
}

export const GlCodeServiceService: IGlCodeServiceService;

export interface IGlCodeServiceServer extends grpc.UntypedServiceImplementation {
    getAllGlCodes: grpc.handleUnaryCall<glcode_pb.GetAllGlCodesRequestProto, glcode_pb.GetAllGlCodesResponseProto>;
    getGlCode: grpc.handleUnaryCall<glcode_pb.GetGlCodeRequestProto, glcode_pb.GetGlCodeResponseProto>;
    getGlCodes: grpc.handleUnaryCall<glcode_pb.GetGlCodesRequestProto, glcode_pb.GetGlCodesResponseProto>;
    saveGlCode: grpc.handleUnaryCall<glcode_pb.SaveGlCodeRequestProto, glcode_pb.SaveGlCodeResponseProto>;
    setGlCodeIsHidden: grpc.handleUnaryCall<glcode_pb.SetGlCodeIsHiddenRequestProto, glcode_pb.SetGlCodeIsHiddenResponseProto>;
    getAllGlCodeOverrides: grpc.handleUnaryCall<glcode_pb.GetAllGlCodeOverridesRequestProto, glcode_pb.GetAllGlCodeOverridesResponseProto>;
}

export interface IGlCodeServiceClient {
    getAllGlCodes(request: glcode_pb.GetAllGlCodesRequestProto, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetAllGlCodesResponseProto) => void): grpc.ClientUnaryCall;
    getAllGlCodes(request: glcode_pb.GetAllGlCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetAllGlCodesResponseProto) => void): grpc.ClientUnaryCall;
    getAllGlCodes(request: glcode_pb.GetAllGlCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetAllGlCodesResponseProto) => void): grpc.ClientUnaryCall;
    getGlCode(request: glcode_pb.GetGlCodeRequestProto, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetGlCodeResponseProto) => void): grpc.ClientUnaryCall;
    getGlCode(request: glcode_pb.GetGlCodeRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetGlCodeResponseProto) => void): grpc.ClientUnaryCall;
    getGlCode(request: glcode_pb.GetGlCodeRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetGlCodeResponseProto) => void): grpc.ClientUnaryCall;
    getGlCodes(request: glcode_pb.GetGlCodesRequestProto, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetGlCodesResponseProto) => void): grpc.ClientUnaryCall;
    getGlCodes(request: glcode_pb.GetGlCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetGlCodesResponseProto) => void): grpc.ClientUnaryCall;
    getGlCodes(request: glcode_pb.GetGlCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetGlCodesResponseProto) => void): grpc.ClientUnaryCall;
    saveGlCode(request: glcode_pb.SaveGlCodeRequestProto, callback: (error: grpc.ServiceError | null, response: glcode_pb.SaveGlCodeResponseProto) => void): grpc.ClientUnaryCall;
    saveGlCode(request: glcode_pb.SaveGlCodeRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: glcode_pb.SaveGlCodeResponseProto) => void): grpc.ClientUnaryCall;
    saveGlCode(request: glcode_pb.SaveGlCodeRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: glcode_pb.SaveGlCodeResponseProto) => void): grpc.ClientUnaryCall;
    setGlCodeIsHidden(request: glcode_pb.SetGlCodeIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: glcode_pb.SetGlCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setGlCodeIsHidden(request: glcode_pb.SetGlCodeIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: glcode_pb.SetGlCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setGlCodeIsHidden(request: glcode_pb.SetGlCodeIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: glcode_pb.SetGlCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    getAllGlCodeOverrides(request: glcode_pb.GetAllGlCodeOverridesRequestProto, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetAllGlCodeOverridesResponseProto) => void): grpc.ClientUnaryCall;
    getAllGlCodeOverrides(request: glcode_pb.GetAllGlCodeOverridesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetAllGlCodeOverridesResponseProto) => void): grpc.ClientUnaryCall;
    getAllGlCodeOverrides(request: glcode_pb.GetAllGlCodeOverridesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetAllGlCodeOverridesResponseProto) => void): grpc.ClientUnaryCall;
}

export class GlCodeServiceClient extends grpc.Client implements IGlCodeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllGlCodes(request: glcode_pb.GetAllGlCodesRequestProto, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetAllGlCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllGlCodes(request: glcode_pb.GetAllGlCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetAllGlCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllGlCodes(request: glcode_pb.GetAllGlCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetAllGlCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getGlCode(request: glcode_pb.GetGlCodeRequestProto, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetGlCodeResponseProto) => void): grpc.ClientUnaryCall;
    public getGlCode(request: glcode_pb.GetGlCodeRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetGlCodeResponseProto) => void): grpc.ClientUnaryCall;
    public getGlCode(request: glcode_pb.GetGlCodeRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetGlCodeResponseProto) => void): grpc.ClientUnaryCall;
    public getGlCodes(request: glcode_pb.GetGlCodesRequestProto, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetGlCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getGlCodes(request: glcode_pb.GetGlCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetGlCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getGlCodes(request: glcode_pb.GetGlCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetGlCodesResponseProto) => void): grpc.ClientUnaryCall;
    public saveGlCode(request: glcode_pb.SaveGlCodeRequestProto, callback: (error: grpc.ServiceError | null, response: glcode_pb.SaveGlCodeResponseProto) => void): grpc.ClientUnaryCall;
    public saveGlCode(request: glcode_pb.SaveGlCodeRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: glcode_pb.SaveGlCodeResponseProto) => void): grpc.ClientUnaryCall;
    public saveGlCode(request: glcode_pb.SaveGlCodeRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: glcode_pb.SaveGlCodeResponseProto) => void): grpc.ClientUnaryCall;
    public setGlCodeIsHidden(request: glcode_pb.SetGlCodeIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: glcode_pb.SetGlCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setGlCodeIsHidden(request: glcode_pb.SetGlCodeIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: glcode_pb.SetGlCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setGlCodeIsHidden(request: glcode_pb.SetGlCodeIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: glcode_pb.SetGlCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public getAllGlCodeOverrides(request: glcode_pb.GetAllGlCodeOverridesRequestProto, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetAllGlCodeOverridesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllGlCodeOverrides(request: glcode_pb.GetAllGlCodeOverridesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetAllGlCodeOverridesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllGlCodeOverrides(request: glcode_pb.GetAllGlCodeOverridesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: glcode_pb.GetAllGlCodeOverridesResponseProto) => void): grpc.ClientUnaryCall;
}
