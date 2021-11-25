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
    getVatCode: IVatCodeServiceService_IGetVatCode;
    getVatCodes: IVatCodeServiceService_IGetVatCodes;
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
interface IVatCodeServiceService_IGetVatCode extends grpc.MethodDefinition<vatcode_pb.GetVatCodeRequestProto, vatcode_pb.GetVatCodeResponseProto> {
    path: "/bmapi.stocks.vatcode.VatCodeService/GetVatCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vatcode_pb.GetVatCodeRequestProto>;
    requestDeserialize: grpc.deserialize<vatcode_pb.GetVatCodeRequestProto>;
    responseSerialize: grpc.serialize<vatcode_pb.GetVatCodeResponseProto>;
    responseDeserialize: grpc.deserialize<vatcode_pb.GetVatCodeResponseProto>;
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

export const VatCodeServiceService: IVatCodeServiceService;

export interface IVatCodeServiceServer extends grpc.UntypedServiceImplementation {
    getAllVatCodes: grpc.handleUnaryCall<vatcode_pb.GetAllVatCodesRequestProto, vatcode_pb.GetAllVatCodesResponseProto>;
    getVatCode: grpc.handleUnaryCall<vatcode_pb.GetVatCodeRequestProto, vatcode_pb.GetVatCodeResponseProto>;
    getVatCodes: grpc.handleUnaryCall<vatcode_pb.GetVatCodesRequestProto, vatcode_pb.GetVatCodesResponseProto>;
}

export interface IVatCodeServiceClient {
    getAllVatCodes(request: vatcode_pb.GetAllVatCodesRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetAllVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    getAllVatCodes(request: vatcode_pb.GetAllVatCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetAllVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    getAllVatCodes(request: vatcode_pb.GetAllVatCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetAllVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    getVatCode(request: vatcode_pb.GetVatCodeRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodeResponseProto) => void): grpc.ClientUnaryCall;
    getVatCode(request: vatcode_pb.GetVatCodeRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodeResponseProto) => void): grpc.ClientUnaryCall;
    getVatCode(request: vatcode_pb.GetVatCodeRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodeResponseProto) => void): grpc.ClientUnaryCall;
    getVatCodes(request: vatcode_pb.GetVatCodesRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    getVatCodes(request: vatcode_pb.GetVatCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    getVatCodes(request: vatcode_pb.GetVatCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodesResponseProto) => void): grpc.ClientUnaryCall;
}

export class VatCodeServiceClient extends grpc.Client implements IVatCodeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllVatCodes(request: vatcode_pb.GetAllVatCodesRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetAllVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllVatCodes(request: vatcode_pb.GetAllVatCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetAllVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllVatCodes(request: vatcode_pb.GetAllVatCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetAllVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getVatCode(request: vatcode_pb.GetVatCodeRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodeResponseProto) => void): grpc.ClientUnaryCall;
    public getVatCode(request: vatcode_pb.GetVatCodeRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodeResponseProto) => void): grpc.ClientUnaryCall;
    public getVatCode(request: vatcode_pb.GetVatCodeRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodeResponseProto) => void): grpc.ClientUnaryCall;
    public getVatCodes(request: vatcode_pb.GetVatCodesRequestProto, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getVatCodes(request: vatcode_pb.GetVatCodesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodesResponseProto) => void): grpc.ClientUnaryCall;
    public getVatCodes(request: vatcode_pb.GetVatCodesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vatcode_pb.GetVatCodesResponseProto) => void): grpc.ClientUnaryCall;
}
