// package: bmapi.outlets.outletrating
// file: outletrating.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as outletrating_pb from "./outletrating_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IOutletRatingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllOutletRatings: IOutletRatingServiceService_IGetAllOutletRatings;
    getOutletRating: IOutletRatingServiceService_IGetOutletRating;
    getOutletRatings: IOutletRatingServiceService_IGetOutletRatings;
}

interface IOutletRatingServiceService_IGetAllOutletRatings extends grpc.MethodDefinition<outletrating_pb.GetAllOutletRatingsRequestProto, outletrating_pb.GetAllOutletRatingsResponseProto> {
    path: "/bmapi.outlets.outletrating.OutletRatingService/GetAllOutletRatings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<outletrating_pb.GetAllOutletRatingsRequestProto>;
    requestDeserialize: grpc.deserialize<outletrating_pb.GetAllOutletRatingsRequestProto>;
    responseSerialize: grpc.serialize<outletrating_pb.GetAllOutletRatingsResponseProto>;
    responseDeserialize: grpc.deserialize<outletrating_pb.GetAllOutletRatingsResponseProto>;
}
interface IOutletRatingServiceService_IGetOutletRating extends grpc.MethodDefinition<outletrating_pb.GetOutletRatingRequestProto, outletrating_pb.GetOutletRatingResponseProto> {
    path: "/bmapi.outlets.outletrating.OutletRatingService/GetOutletRating";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<outletrating_pb.GetOutletRatingRequestProto>;
    requestDeserialize: grpc.deserialize<outletrating_pb.GetOutletRatingRequestProto>;
    responseSerialize: grpc.serialize<outletrating_pb.GetOutletRatingResponseProto>;
    responseDeserialize: grpc.deserialize<outletrating_pb.GetOutletRatingResponseProto>;
}
interface IOutletRatingServiceService_IGetOutletRatings extends grpc.MethodDefinition<outletrating_pb.GetOutletRatingsRequestProto, outletrating_pb.GetOutletRatingsResponseProto> {
    path: "/bmapi.outlets.outletrating.OutletRatingService/GetOutletRatings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<outletrating_pb.GetOutletRatingsRequestProto>;
    requestDeserialize: grpc.deserialize<outletrating_pb.GetOutletRatingsRequestProto>;
    responseSerialize: grpc.serialize<outletrating_pb.GetOutletRatingsResponseProto>;
    responseDeserialize: grpc.deserialize<outletrating_pb.GetOutletRatingsResponseProto>;
}

export const OutletRatingServiceService: IOutletRatingServiceService;

export interface IOutletRatingServiceServer extends grpc.UntypedServiceImplementation {
    getAllOutletRatings: grpc.handleUnaryCall<outletrating_pb.GetAllOutletRatingsRequestProto, outletrating_pb.GetAllOutletRatingsResponseProto>;
    getOutletRating: grpc.handleUnaryCall<outletrating_pb.GetOutletRatingRequestProto, outletrating_pb.GetOutletRatingResponseProto>;
    getOutletRatings: grpc.handleUnaryCall<outletrating_pb.GetOutletRatingsRequestProto, outletrating_pb.GetOutletRatingsResponseProto>;
}

export interface IOutletRatingServiceClient {
    getAllOutletRatings(request: outletrating_pb.GetAllOutletRatingsRequestProto, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetAllOutletRatingsResponseProto) => void): grpc.ClientUnaryCall;
    getAllOutletRatings(request: outletrating_pb.GetAllOutletRatingsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetAllOutletRatingsResponseProto) => void): grpc.ClientUnaryCall;
    getAllOutletRatings(request: outletrating_pb.GetAllOutletRatingsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetAllOutletRatingsResponseProto) => void): grpc.ClientUnaryCall;
    getOutletRating(request: outletrating_pb.GetOutletRatingRequestProto, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetOutletRatingResponseProto) => void): grpc.ClientUnaryCall;
    getOutletRating(request: outletrating_pb.GetOutletRatingRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetOutletRatingResponseProto) => void): grpc.ClientUnaryCall;
    getOutletRating(request: outletrating_pb.GetOutletRatingRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetOutletRatingResponseProto) => void): grpc.ClientUnaryCall;
    getOutletRatings(request: outletrating_pb.GetOutletRatingsRequestProto, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetOutletRatingsResponseProto) => void): grpc.ClientUnaryCall;
    getOutletRatings(request: outletrating_pb.GetOutletRatingsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetOutletRatingsResponseProto) => void): grpc.ClientUnaryCall;
    getOutletRatings(request: outletrating_pb.GetOutletRatingsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetOutletRatingsResponseProto) => void): grpc.ClientUnaryCall;
}

export class OutletRatingServiceClient extends grpc.Client implements IOutletRatingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllOutletRatings(request: outletrating_pb.GetAllOutletRatingsRequestProto, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetAllOutletRatingsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllOutletRatings(request: outletrating_pb.GetAllOutletRatingsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetAllOutletRatingsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllOutletRatings(request: outletrating_pb.GetAllOutletRatingsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetAllOutletRatingsResponseProto) => void): grpc.ClientUnaryCall;
    public getOutletRating(request: outletrating_pb.GetOutletRatingRequestProto, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetOutletRatingResponseProto) => void): grpc.ClientUnaryCall;
    public getOutletRating(request: outletrating_pb.GetOutletRatingRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetOutletRatingResponseProto) => void): grpc.ClientUnaryCall;
    public getOutletRating(request: outletrating_pb.GetOutletRatingRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetOutletRatingResponseProto) => void): grpc.ClientUnaryCall;
    public getOutletRatings(request: outletrating_pb.GetOutletRatingsRequestProto, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetOutletRatingsResponseProto) => void): grpc.ClientUnaryCall;
    public getOutletRatings(request: outletrating_pb.GetOutletRatingsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetOutletRatingsResponseProto) => void): grpc.ClientUnaryCall;
    public getOutletRatings(request: outletrating_pb.GetOutletRatingsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: outletrating_pb.GetOutletRatingsResponseProto) => void): grpc.ClientUnaryCall;
}
