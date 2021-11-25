// package: bmapi.outlets.outlet
// file: outlet.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as outlet_pb from "./outlet_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IOutletServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllOutlets: IOutletServiceService_IGetAllOutlets;
    getOutlets: IOutletServiceService_IGetOutlets;
    getOutlet: IOutletServiceService_IGetOutlet;
}

interface IOutletServiceService_IGetAllOutlets extends grpc.MethodDefinition<outlet_pb.GetAllOutletsRequestProto, outlet_pb.GetAllOutletsResponseProto> {
    path: "/bmapi.outlets.outlet.OutletService/GetAllOutlets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<outlet_pb.GetAllOutletsRequestProto>;
    requestDeserialize: grpc.deserialize<outlet_pb.GetAllOutletsRequestProto>;
    responseSerialize: grpc.serialize<outlet_pb.GetAllOutletsResponseProto>;
    responseDeserialize: grpc.deserialize<outlet_pb.GetAllOutletsResponseProto>;
}
interface IOutletServiceService_IGetOutlets extends grpc.MethodDefinition<outlet_pb.GetOutletsRequestProto, outlet_pb.GetOutletsResponseProto> {
    path: "/bmapi.outlets.outlet.OutletService/GetOutlets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<outlet_pb.GetOutletsRequestProto>;
    requestDeserialize: grpc.deserialize<outlet_pb.GetOutletsRequestProto>;
    responseSerialize: grpc.serialize<outlet_pb.GetOutletsResponseProto>;
    responseDeserialize: grpc.deserialize<outlet_pb.GetOutletsResponseProto>;
}
interface IOutletServiceService_IGetOutlet extends grpc.MethodDefinition<outlet_pb.GetOutletRequestProto, outlet_pb.GetOutletResponseProto> {
    path: "/bmapi.outlets.outlet.OutletService/GetOutlet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<outlet_pb.GetOutletRequestProto>;
    requestDeserialize: grpc.deserialize<outlet_pb.GetOutletRequestProto>;
    responseSerialize: grpc.serialize<outlet_pb.GetOutletResponseProto>;
    responseDeserialize: grpc.deserialize<outlet_pb.GetOutletResponseProto>;
}

export const OutletServiceService: IOutletServiceService;

export interface IOutletServiceServer extends grpc.UntypedServiceImplementation {
    getAllOutlets: grpc.handleUnaryCall<outlet_pb.GetAllOutletsRequestProto, outlet_pb.GetAllOutletsResponseProto>;
    getOutlets: grpc.handleUnaryCall<outlet_pb.GetOutletsRequestProto, outlet_pb.GetOutletsResponseProto>;
    getOutlet: grpc.handleUnaryCall<outlet_pb.GetOutletRequestProto, outlet_pb.GetOutletResponseProto>;
}

export interface IOutletServiceClient {
    getAllOutlets(request: outlet_pb.GetAllOutletsRequestProto, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetAllOutletsResponseProto) => void): grpc.ClientUnaryCall;
    getAllOutlets(request: outlet_pb.GetAllOutletsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetAllOutletsResponseProto) => void): grpc.ClientUnaryCall;
    getAllOutlets(request: outlet_pb.GetAllOutletsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetAllOutletsResponseProto) => void): grpc.ClientUnaryCall;
    getOutlets(request: outlet_pb.GetOutletsRequestProto, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetOutletsResponseProto) => void): grpc.ClientUnaryCall;
    getOutlets(request: outlet_pb.GetOutletsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetOutletsResponseProto) => void): grpc.ClientUnaryCall;
    getOutlets(request: outlet_pb.GetOutletsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetOutletsResponseProto) => void): grpc.ClientUnaryCall;
    getOutlet(request: outlet_pb.GetOutletRequestProto, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetOutletResponseProto) => void): grpc.ClientUnaryCall;
    getOutlet(request: outlet_pb.GetOutletRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetOutletResponseProto) => void): grpc.ClientUnaryCall;
    getOutlet(request: outlet_pb.GetOutletRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetOutletResponseProto) => void): grpc.ClientUnaryCall;
}

export class OutletServiceClient extends grpc.Client implements IOutletServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllOutlets(request: outlet_pb.GetAllOutletsRequestProto, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetAllOutletsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllOutlets(request: outlet_pb.GetAllOutletsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetAllOutletsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllOutlets(request: outlet_pb.GetAllOutletsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetAllOutletsResponseProto) => void): grpc.ClientUnaryCall;
    public getOutlets(request: outlet_pb.GetOutletsRequestProto, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetOutletsResponseProto) => void): grpc.ClientUnaryCall;
    public getOutlets(request: outlet_pb.GetOutletsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetOutletsResponseProto) => void): grpc.ClientUnaryCall;
    public getOutlets(request: outlet_pb.GetOutletsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetOutletsResponseProto) => void): grpc.ClientUnaryCall;
    public getOutlet(request: outlet_pb.GetOutletRequestProto, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetOutletResponseProto) => void): grpc.ClientUnaryCall;
    public getOutlet(request: outlet_pb.GetOutletRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetOutletResponseProto) => void): grpc.ClientUnaryCall;
    public getOutlet(request: outlet_pb.GetOutletRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outlet_pb.GetOutletResponseProto) => void): grpc.ClientUnaryCall;
}
