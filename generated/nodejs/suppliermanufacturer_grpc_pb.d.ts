// package: bmapi.stocks.suppliermanufacturer
// file: suppliermanufacturer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as suppliermanufacturer_pb from "./suppliermanufacturer_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface ISupplierManufacturerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllSupplierManufacturers: ISupplierManufacturerServiceService_IGetAllSupplierManufacturers;
    getSupplierManufacturer: ISupplierManufacturerServiceService_IGetSupplierManufacturer;
    getSupplierManufacturers: ISupplierManufacturerServiceService_IGetSupplierManufacturers;
    saveSupplierManufacturer: ISupplierManufacturerServiceService_ISaveSupplierManufacturer;
    setSupplierManufacturerIsHidden: ISupplierManufacturerServiceService_ISetSupplierManufacturerIsHidden;
    getSupplierManufacturersByFilter: ISupplierManufacturerServiceService_IGetSupplierManufacturersByFilter;
}

interface ISupplierManufacturerServiceService_IGetAllSupplierManufacturers extends grpc.MethodDefinition<suppliermanufacturer_pb.GetAllSupplierManufacturersRequestProto, suppliermanufacturer_pb.GetAllSupplierManufacturersResponseProto> {
    path: "/bmapi.stocks.suppliermanufacturer.SupplierManufacturerService/GetAllSupplierManufacturers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<suppliermanufacturer_pb.GetAllSupplierManufacturersRequestProto>;
    requestDeserialize: grpc.deserialize<suppliermanufacturer_pb.GetAllSupplierManufacturersRequestProto>;
    responseSerialize: grpc.serialize<suppliermanufacturer_pb.GetAllSupplierManufacturersResponseProto>;
    responseDeserialize: grpc.deserialize<suppliermanufacturer_pb.GetAllSupplierManufacturersResponseProto>;
}
interface ISupplierManufacturerServiceService_IGetSupplierManufacturer extends grpc.MethodDefinition<suppliermanufacturer_pb.GetSupplierManufacturerRequestProto, suppliermanufacturer_pb.GetSupplierManufacturerResponseProto> {
    path: "/bmapi.stocks.suppliermanufacturer.SupplierManufacturerService/GetSupplierManufacturer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<suppliermanufacturer_pb.GetSupplierManufacturerRequestProto>;
    requestDeserialize: grpc.deserialize<suppliermanufacturer_pb.GetSupplierManufacturerRequestProto>;
    responseSerialize: grpc.serialize<suppliermanufacturer_pb.GetSupplierManufacturerResponseProto>;
    responseDeserialize: grpc.deserialize<suppliermanufacturer_pb.GetSupplierManufacturerResponseProto>;
}
interface ISupplierManufacturerServiceService_IGetSupplierManufacturers extends grpc.MethodDefinition<suppliermanufacturer_pb.GetSupplierManufacturersRequestProto, suppliermanufacturer_pb.GetSupplierManufacturersResponseProto> {
    path: "/bmapi.stocks.suppliermanufacturer.SupplierManufacturerService/GetSupplierManufacturers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<suppliermanufacturer_pb.GetSupplierManufacturersRequestProto>;
    requestDeserialize: grpc.deserialize<suppliermanufacturer_pb.GetSupplierManufacturersRequestProto>;
    responseSerialize: grpc.serialize<suppliermanufacturer_pb.GetSupplierManufacturersResponseProto>;
    responseDeserialize: grpc.deserialize<suppliermanufacturer_pb.GetSupplierManufacturersResponseProto>;
}
interface ISupplierManufacturerServiceService_ISaveSupplierManufacturer extends grpc.MethodDefinition<suppliermanufacturer_pb.SaveSupplierManufacturerRequestProto, suppliermanufacturer_pb.SaveSupplierManufacturerResponseProto> {
    path: "/bmapi.stocks.suppliermanufacturer.SupplierManufacturerService/SaveSupplierManufacturer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<suppliermanufacturer_pb.SaveSupplierManufacturerRequestProto>;
    requestDeserialize: grpc.deserialize<suppliermanufacturer_pb.SaveSupplierManufacturerRequestProto>;
    responseSerialize: grpc.serialize<suppliermanufacturer_pb.SaveSupplierManufacturerResponseProto>;
    responseDeserialize: grpc.deserialize<suppliermanufacturer_pb.SaveSupplierManufacturerResponseProto>;
}
interface ISupplierManufacturerServiceService_ISetSupplierManufacturerIsHidden extends grpc.MethodDefinition<suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenRequestProto, suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenResponseProto> {
    path: "/bmapi.stocks.suppliermanufacturer.SupplierManufacturerService/SetSupplierManufacturerIsHidden";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenRequestProto>;
    requestDeserialize: grpc.deserialize<suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenRequestProto>;
    responseSerialize: grpc.serialize<suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenResponseProto>;
    responseDeserialize: grpc.deserialize<suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenResponseProto>;
}
interface ISupplierManufacturerServiceService_IGetSupplierManufacturersByFilter extends grpc.MethodDefinition<suppliermanufacturer_pb.GetSupplierManufacturersByFilterRequestProto, suppliermanufacturer_pb.GetSupplierManufacturersByFilterResponseProto> {
    path: "/bmapi.stocks.suppliermanufacturer.SupplierManufacturerService/GetSupplierManufacturersByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<suppliermanufacturer_pb.GetSupplierManufacturersByFilterRequestProto>;
    requestDeserialize: grpc.deserialize<suppliermanufacturer_pb.GetSupplierManufacturersByFilterRequestProto>;
    responseSerialize: grpc.serialize<suppliermanufacturer_pb.GetSupplierManufacturersByFilterResponseProto>;
    responseDeserialize: grpc.deserialize<suppliermanufacturer_pb.GetSupplierManufacturersByFilterResponseProto>;
}

export const SupplierManufacturerServiceService: ISupplierManufacturerServiceService;

export interface ISupplierManufacturerServiceServer extends grpc.UntypedServiceImplementation {
    getAllSupplierManufacturers: grpc.handleUnaryCall<suppliermanufacturer_pb.GetAllSupplierManufacturersRequestProto, suppliermanufacturer_pb.GetAllSupplierManufacturersResponseProto>;
    getSupplierManufacturer: grpc.handleUnaryCall<suppliermanufacturer_pb.GetSupplierManufacturerRequestProto, suppliermanufacturer_pb.GetSupplierManufacturerResponseProto>;
    getSupplierManufacturers: grpc.handleUnaryCall<suppliermanufacturer_pb.GetSupplierManufacturersRequestProto, suppliermanufacturer_pb.GetSupplierManufacturersResponseProto>;
    saveSupplierManufacturer: grpc.handleUnaryCall<suppliermanufacturer_pb.SaveSupplierManufacturerRequestProto, suppliermanufacturer_pb.SaveSupplierManufacturerResponseProto>;
    setSupplierManufacturerIsHidden: grpc.handleUnaryCall<suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenRequestProto, suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenResponseProto>;
    getSupplierManufacturersByFilter: grpc.handleUnaryCall<suppliermanufacturer_pb.GetSupplierManufacturersByFilterRequestProto, suppliermanufacturer_pb.GetSupplierManufacturersByFilterResponseProto>;
}

export interface ISupplierManufacturerServiceClient {
    getAllSupplierManufacturers(request: suppliermanufacturer_pb.GetAllSupplierManufacturersRequestProto, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetAllSupplierManufacturersResponseProto) => void): grpc.ClientUnaryCall;
    getAllSupplierManufacturers(request: suppliermanufacturer_pb.GetAllSupplierManufacturersRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetAllSupplierManufacturersResponseProto) => void): grpc.ClientUnaryCall;
    getAllSupplierManufacturers(request: suppliermanufacturer_pb.GetAllSupplierManufacturersRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetAllSupplierManufacturersResponseProto) => void): grpc.ClientUnaryCall;
    getSupplierManufacturer(request: suppliermanufacturer_pb.GetSupplierManufacturerRequestProto, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturerResponseProto) => void): grpc.ClientUnaryCall;
    getSupplierManufacturer(request: suppliermanufacturer_pb.GetSupplierManufacturerRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturerResponseProto) => void): grpc.ClientUnaryCall;
    getSupplierManufacturer(request: suppliermanufacturer_pb.GetSupplierManufacturerRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturerResponseProto) => void): grpc.ClientUnaryCall;
    getSupplierManufacturers(request: suppliermanufacturer_pb.GetSupplierManufacturersRequestProto, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturersResponseProto) => void): grpc.ClientUnaryCall;
    getSupplierManufacturers(request: suppliermanufacturer_pb.GetSupplierManufacturersRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturersResponseProto) => void): grpc.ClientUnaryCall;
    getSupplierManufacturers(request: suppliermanufacturer_pb.GetSupplierManufacturersRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturersResponseProto) => void): grpc.ClientUnaryCall;
    saveSupplierManufacturer(request: suppliermanufacturer_pb.SaveSupplierManufacturerRequestProto, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.SaveSupplierManufacturerResponseProto) => void): grpc.ClientUnaryCall;
    saveSupplierManufacturer(request: suppliermanufacturer_pb.SaveSupplierManufacturerRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.SaveSupplierManufacturerResponseProto) => void): grpc.ClientUnaryCall;
    saveSupplierManufacturer(request: suppliermanufacturer_pb.SaveSupplierManufacturerRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.SaveSupplierManufacturerResponseProto) => void): grpc.ClientUnaryCall;
    setSupplierManufacturerIsHidden(request: suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setSupplierManufacturerIsHidden(request: suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setSupplierManufacturerIsHidden(request: suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    getSupplierManufacturersByFilter(request: suppliermanufacturer_pb.GetSupplierManufacturersByFilterRequestProto, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturersByFilterResponseProto) => void): grpc.ClientUnaryCall;
    getSupplierManufacturersByFilter(request: suppliermanufacturer_pb.GetSupplierManufacturersByFilterRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturersByFilterResponseProto) => void): grpc.ClientUnaryCall;
    getSupplierManufacturersByFilter(request: suppliermanufacturer_pb.GetSupplierManufacturersByFilterRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturersByFilterResponseProto) => void): grpc.ClientUnaryCall;
}

export class SupplierManufacturerServiceClient extends grpc.Client implements ISupplierManufacturerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllSupplierManufacturers(request: suppliermanufacturer_pb.GetAllSupplierManufacturersRequestProto, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetAllSupplierManufacturersResponseProto) => void): grpc.ClientUnaryCall;
    public getAllSupplierManufacturers(request: suppliermanufacturer_pb.GetAllSupplierManufacturersRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetAllSupplierManufacturersResponseProto) => void): grpc.ClientUnaryCall;
    public getAllSupplierManufacturers(request: suppliermanufacturer_pb.GetAllSupplierManufacturersRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetAllSupplierManufacturersResponseProto) => void): grpc.ClientUnaryCall;
    public getSupplierManufacturer(request: suppliermanufacturer_pb.GetSupplierManufacturerRequestProto, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturerResponseProto) => void): grpc.ClientUnaryCall;
    public getSupplierManufacturer(request: suppliermanufacturer_pb.GetSupplierManufacturerRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturerResponseProto) => void): grpc.ClientUnaryCall;
    public getSupplierManufacturer(request: suppliermanufacturer_pb.GetSupplierManufacturerRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturerResponseProto) => void): grpc.ClientUnaryCall;
    public getSupplierManufacturers(request: suppliermanufacturer_pb.GetSupplierManufacturersRequestProto, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturersResponseProto) => void): grpc.ClientUnaryCall;
    public getSupplierManufacturers(request: suppliermanufacturer_pb.GetSupplierManufacturersRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturersResponseProto) => void): grpc.ClientUnaryCall;
    public getSupplierManufacturers(request: suppliermanufacturer_pb.GetSupplierManufacturersRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturersResponseProto) => void): grpc.ClientUnaryCall;
    public saveSupplierManufacturer(request: suppliermanufacturer_pb.SaveSupplierManufacturerRequestProto, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.SaveSupplierManufacturerResponseProto) => void): grpc.ClientUnaryCall;
    public saveSupplierManufacturer(request: suppliermanufacturer_pb.SaveSupplierManufacturerRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.SaveSupplierManufacturerResponseProto) => void): grpc.ClientUnaryCall;
    public saveSupplierManufacturer(request: suppliermanufacturer_pb.SaveSupplierManufacturerRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.SaveSupplierManufacturerResponseProto) => void): grpc.ClientUnaryCall;
    public setSupplierManufacturerIsHidden(request: suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setSupplierManufacturerIsHidden(request: suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setSupplierManufacturerIsHidden(request: suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.SetSupplierManufacturerIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public getSupplierManufacturersByFilter(request: suppliermanufacturer_pb.GetSupplierManufacturersByFilterRequestProto, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturersByFilterResponseProto) => void): grpc.ClientUnaryCall;
    public getSupplierManufacturersByFilter(request: suppliermanufacturer_pb.GetSupplierManufacturersByFilterRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturersByFilterResponseProto) => void): grpc.ClientUnaryCall;
    public getSupplierManufacturersByFilter(request: suppliermanufacturer_pb.GetSupplierManufacturersByFilterRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliermanufacturer_pb.GetSupplierManufacturersByFilterResponseProto) => void): grpc.ClientUnaryCall;
}
