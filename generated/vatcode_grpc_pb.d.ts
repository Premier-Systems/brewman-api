// package: bmapi.stocks.vatcode
// file: vatcode.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as vatcode_pb from "./vatcode_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IVatCodeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllVatCodes: IVatCodeServiceService_IGetAllVatCodes;
    getVatCodes: IVatCodeServiceService_IGetVatCodes;
    saveVatCodes: IVatCodeServiceService_ISaveVatCodes;
    setVatCodeIsHidden: IVatCodeServiceService_ISetVatCodeIsHidden;
}

interface IVatCodeServiceService_IGetAllVatCodes extends grpc.MethodDefinition<vatcode_pb.GetAllVatCodesRequestProto, vatcode_pb.GetAllVatCodesResponseProto> {
    path: "/bmapi.stocks.vatcode.VatCodeService/GetAllVatCodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vatcode_pb.GetAllVatCodesRequestProto>;
    requestDeserialize: grpc.deserialize<vatcode_pb.GetAllVatCodesRequestProto>;
    responseSerialize: grpc.serialize<vatcode_pb.GetAllVatCodesResponseProto>;
    responseDeserialize: grpc.deserialize<vatcode_pb.GetAllVatCodesResponseProto>;
}
interface IVatCodeServiceService_IGetVatCodes extends grpc.MethodDefinition<vatcode_pb.GetVatCodesRequestProto, vatcode_pb.GetVatCodesResponseProto> {
    path: "/bmapi.stocks.vatcode.VatCodeService/GetVatCodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vatcode_pb.GetVatCodesRequestProto>;
    requestDeserialize: grpc.deserialize<vatcode_pb.GetVatCodesRequestProto>;
    responseSerialize: grpc.serialize<vatcode_pb.GetVatCodesResponseProto>;
    responseDeserialize: grpc.deserialize<vatcode_pb.GetVatCodesResponseProto>;
}
interface IVatCodeServiceService_ISaveVatCodes extends grpc.MethodDefinition<vatcode_pb.SaveVatCodesRequestProto, vatcode_pb.SaveVatCodesResponseProto> {
    path: "/bmapi.stocks.vatcode.VatCodeService/SaveVatCodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vatcode_pb.SaveVatCodesRequestProto>;
    requestDeserialize: grpc.deserialize<vatcode_pb.SaveVatCodesRequestProto>;
    responseSerialize: grpc.serialize<vatcode_pb.SaveVatCodesResponseProto>;
    responseDeserialize: grpc.deserialize<vatcode_pb.SaveVatCodesResponseProto>;
}
interface IVatCodeServiceService_ISetVatCodeIsHidden extends grpc.MethodDefinition<vatcode_pb.SetVatCodeIsHiddenRequestProto, vatcode_pb.SetVatCodeIsHiddenResponseProto> {
    path: "/bmapi.stocks.vatcode.VatCodeService/SetVatCodeIsHidden";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vatcode_pb.SetVatCodeIsHiddenRequestProto>;
    requestDeserialize: grpc.deserialize<vatcode_pb.SetVatCodeIsHiddenRequestProto>;
    responseSerialize: grpc.serialize<vatcode_pb.SetVatCodeIsHiddenResponseProto>;
    responseDeserialize: grpc.deserialize<vatcode_pb.SetVatCodeIsHiddenResponseProto>;
}

export const VatCodeServiceService: IVatCodeServiceService;

export interface IVatCodeServiceServer extends grpc.UntypedServiceImplementation {
    getAllVatCodes: grpc.handleUnaryCall<vatcode_pb.GetAllVatCodesRequestProto, vatcode_pb.GetAllVatCodesResponseProto>;
    getVatCodes: grpc.handleUnaryCall<vatcode_pb.GetVatCodesRequestProto, vatcode_pb.GetVatCodesResponseProto>;
    saveVatCodes: grpc.handleUnaryCall<vatcode_pb.SaveVatCodesRequestProto, vatcode_pb.SaveVatCodesResponseProto>;
    setVatCodeIsHidden: grpc.handleUnaryCall<vatcode_pb.SetVatCodeIsHiddenRequestProto, vatcode_pb.SetVatCodeIsHiddenResponseProto>;
}

export interface IVatCodeServiceClient {
    getAllVatCodes(request: vatcode_pb.GetAllVatCodesRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetAllVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    getAllVatCodes(request: vatcode_pb.GetAllVatCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetAllVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    getAllVatCodes(request: vatcode_pb.GetAllVatCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetAllVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    getVatCodes(request: vatcode_pb.GetVatCodesRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    getVatCodes(request: vatcode_pb.GetVatCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    getVatCodes(request: vatcode_pb.GetVatCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    saveVatCodes(request: vatcode_pb.SaveVatCodesRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.SaveVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    saveVatCodes(request: vatcode_pb.SaveVatCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.SaveVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    saveVatCodes(request: vatcode_pb.SaveVatCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.SaveVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    setVatCodeIsHidden(request: vatcode_pb.SetVatCodeIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.SetVatCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setVatCodeIsHidden(request: vatcode_pb.SetVatCodeIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.SetVatCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setVatCodeIsHidden(request: vatcode_pb.SetVatCodeIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.SetVatCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
}

export class VatCodeServiceClient extends grpc.Client implements IVatCodeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllVatCodes(request: vatcode_pb.GetAllVatCodesRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetAllVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllVatCodes(request: vatcode_pb.GetAllVatCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetAllVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllVatCodes(request: vatcode_pb.GetAllVatCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetAllVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getVatCodes(request: vatcode_pb.GetVatCodesRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getVatCodes(request: vatcode_pb.GetVatCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getVatCodes(request: vatcode_pb.GetVatCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public saveVatCodes(request: vatcode_pb.SaveVatCodesRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.SaveVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public saveVatCodes(request: vatcode_pb.SaveVatCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.SaveVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public saveVatCodes(request: vatcode_pb.SaveVatCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.SaveVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public setVatCodeIsHidden(request: vatcode_pb.SetVatCodeIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.SetVatCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setVatCodeIsHidden(request: vatcode_pb.SetVatCodeIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.SetVatCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setVatCodeIsHidden(request: vatcode_pb.SetVatCodeIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.SetVatCodeIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
}
