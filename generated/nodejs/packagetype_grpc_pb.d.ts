// package: bmapi.stocks.packagetype
// file: packagetype.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as packagetype_pb from "./packagetype_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IPackageTypeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllPackageTypes: IPackageTypeServiceService_IGetAllPackageTypes;
    getPackageType: IPackageTypeServiceService_IGetPackageType;
    getPackageTypes: IPackageTypeServiceService_IGetPackageTypes;
}

interface IPackageTypeServiceService_IGetAllPackageTypes extends grpc.MethodDefinition<packagetype_pb.GetAllPackageTypesRequestProto, packagetype_pb.GetAllPackageTypesResponseProto> {
    path: "/bmapi.stocks.packagetype.PackageTypeService/GetAllPackageTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<packagetype_pb.GetAllPackageTypesRequestProto>;
    requestDeserialize: grpc.deserialize<packagetype_pb.GetAllPackageTypesRequestProto>;
    responseSerialize: grpc.serialize<packagetype_pb.GetAllPackageTypesResponseProto>;
    responseDeserialize: grpc.deserialize<packagetype_pb.GetAllPackageTypesResponseProto>;
}
interface IPackageTypeServiceService_IGetPackageType extends grpc.MethodDefinition<packagetype_pb.GetPackageTypeRequestProto, packagetype_pb.GetPackageTypeResponseProto> {
    path: "/bmapi.stocks.packagetype.PackageTypeService/GetPackageType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<packagetype_pb.GetPackageTypeRequestProto>;
    requestDeserialize: grpc.deserialize<packagetype_pb.GetPackageTypeRequestProto>;
    responseSerialize: grpc.serialize<packagetype_pb.GetPackageTypeResponseProto>;
    responseDeserialize: grpc.deserialize<packagetype_pb.GetPackageTypeResponseProto>;
}
interface IPackageTypeServiceService_IGetPackageTypes extends grpc.MethodDefinition<packagetype_pb.GetPackageTypesRequestProto, packagetype_pb.GetPackageTypesResponseProto> {
    path: "/bmapi.stocks.packagetype.PackageTypeService/GetPackageTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<packagetype_pb.GetPackageTypesRequestProto>;
    requestDeserialize: grpc.deserialize<packagetype_pb.GetPackageTypesRequestProto>;
    responseSerialize: grpc.serialize<packagetype_pb.GetPackageTypesResponseProto>;
    responseDeserialize: grpc.deserialize<packagetype_pb.GetPackageTypesResponseProto>;
}

export const PackageTypeServiceService: IPackageTypeServiceService;

export interface IPackageTypeServiceServer extends grpc.UntypedServiceImplementation {
    getAllPackageTypes: grpc.handleUnaryCall<packagetype_pb.GetAllPackageTypesRequestProto, packagetype_pb.GetAllPackageTypesResponseProto>;
    getPackageType: grpc.handleUnaryCall<packagetype_pb.GetPackageTypeRequestProto, packagetype_pb.GetPackageTypeResponseProto>;
    getPackageTypes: grpc.handleUnaryCall<packagetype_pb.GetPackageTypesRequestProto, packagetype_pb.GetPackageTypesResponseProto>;
}

export interface IPackageTypeServiceClient {
    getAllPackageTypes(request: packagetype_pb.GetAllPackageTypesRequestProto, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetAllPackageTypesResponseProto) => void): grpc.ClientUnaryCall;
    getAllPackageTypes(request: packagetype_pb.GetAllPackageTypesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetAllPackageTypesResponseProto) => void): grpc.ClientUnaryCall;
    getAllPackageTypes(request: packagetype_pb.GetAllPackageTypesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetAllPackageTypesResponseProto) => void): grpc.ClientUnaryCall;
    getPackageType(request: packagetype_pb.GetPackageTypeRequestProto, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetPackageTypeResponseProto) => void): grpc.ClientUnaryCall;
    getPackageType(request: packagetype_pb.GetPackageTypeRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetPackageTypeResponseProto) => void): grpc.ClientUnaryCall;
    getPackageType(request: packagetype_pb.GetPackageTypeRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetPackageTypeResponseProto) => void): grpc.ClientUnaryCall;
    getPackageTypes(request: packagetype_pb.GetPackageTypesRequestProto, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetPackageTypesResponseProto) => void): grpc.ClientUnaryCall;
    getPackageTypes(request: packagetype_pb.GetPackageTypesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetPackageTypesResponseProto) => void): grpc.ClientUnaryCall;
    getPackageTypes(request: packagetype_pb.GetPackageTypesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetPackageTypesResponseProto) => void): grpc.ClientUnaryCall;
}

export class PackageTypeServiceClient extends grpc.Client implements IPackageTypeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllPackageTypes(request: packagetype_pb.GetAllPackageTypesRequestProto, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetAllPackageTypesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllPackageTypes(request: packagetype_pb.GetAllPackageTypesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetAllPackageTypesResponseProto) => void): grpc.ClientUnaryCall;
    public getAllPackageTypes(request: packagetype_pb.GetAllPackageTypesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetAllPackageTypesResponseProto) => void): grpc.ClientUnaryCall;
    public getPackageType(request: packagetype_pb.GetPackageTypeRequestProto, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetPackageTypeResponseProto) => void): grpc.ClientUnaryCall;
    public getPackageType(request: packagetype_pb.GetPackageTypeRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetPackageTypeResponseProto) => void): grpc.ClientUnaryCall;
    public getPackageType(request: packagetype_pb.GetPackageTypeRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetPackageTypeResponseProto) => void): grpc.ClientUnaryCall;
    public getPackageTypes(request: packagetype_pb.GetPackageTypesRequestProto, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetPackageTypesResponseProto) => void): grpc.ClientUnaryCall;
    public getPackageTypes(request: packagetype_pb.GetPackageTypesRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetPackageTypesResponseProto) => void): grpc.ClientUnaryCall;
    public getPackageTypes(request: packagetype_pb.GetPackageTypesRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: packagetype_pb.GetPackageTypesResponseProto) => void): grpc.ClientUnaryCall;
}
