// package: bmapi.outlets.creditterm
// file: creditterm.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as creditterm_pb from "./creditterm_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface ICreditTermServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllCreditTerms: ICreditTermServiceService_IGetAllCreditTerms;
    getCreditTerm: ICreditTermServiceService_IGetCreditTerm;
    getCreditTerms: ICreditTermServiceService_IGetCreditTerms;
}

interface ICreditTermServiceService_IGetAllCreditTerms extends grpc.MethodDefinition<creditterm_pb.GetAllCreditTermsRequestProto, creditterm_pb.GetAllCreditTermsResponseProto> {
    path: "/bmapi.outlets.creditterm.CreditTermService/GetAllCreditTerms";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<creditterm_pb.GetAllCreditTermsRequestProto>;
    requestDeserialize: grpc.deserialize<creditterm_pb.GetAllCreditTermsRequestProto>;
    responseSerialize: grpc.serialize<creditterm_pb.GetAllCreditTermsResponseProto>;
    responseDeserialize: grpc.deserialize<creditterm_pb.GetAllCreditTermsResponseProto>;
}
interface ICreditTermServiceService_IGetCreditTerm extends grpc.MethodDefinition<creditterm_pb.GetCreditTermRequestProto, creditterm_pb.GetCreditTermResponseProto> {
    path: "/bmapi.outlets.creditterm.CreditTermService/GetCreditTerm";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<creditterm_pb.GetCreditTermRequestProto>;
    requestDeserialize: grpc.deserialize<creditterm_pb.GetCreditTermRequestProto>;
    responseSerialize: grpc.serialize<creditterm_pb.GetCreditTermResponseProto>;
    responseDeserialize: grpc.deserialize<creditterm_pb.GetCreditTermResponseProto>;
}
interface ICreditTermServiceService_IGetCreditTerms extends grpc.MethodDefinition<creditterm_pb.GetCreditTermsRequestProto, creditterm_pb.GetCreditTermsResponseProto> {
    path: "/bmapi.outlets.creditterm.CreditTermService/GetCreditTerms";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<creditterm_pb.GetCreditTermsRequestProto>;
    requestDeserialize: grpc.deserialize<creditterm_pb.GetCreditTermsRequestProto>;
    responseSerialize: grpc.serialize<creditterm_pb.GetCreditTermsResponseProto>;
    responseDeserialize: grpc.deserialize<creditterm_pb.GetCreditTermsResponseProto>;
}

export const CreditTermServiceService: ICreditTermServiceService;

export interface ICreditTermServiceServer extends grpc.UntypedServiceImplementation {
    getAllCreditTerms: grpc.handleUnaryCall<creditterm_pb.GetAllCreditTermsRequestProto, creditterm_pb.GetAllCreditTermsResponseProto>;
    getCreditTerm: grpc.handleUnaryCall<creditterm_pb.GetCreditTermRequestProto, creditterm_pb.GetCreditTermResponseProto>;
    getCreditTerms: grpc.handleUnaryCall<creditterm_pb.GetCreditTermsRequestProto, creditterm_pb.GetCreditTermsResponseProto>;
}

export interface ICreditTermServiceClient {
    getAllCreditTerms(request: creditterm_pb.GetAllCreditTermsRequestProto, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetAllCreditTermsResponseProto) => void): grpc.ClientUnaryCall;
    getAllCreditTerms(request: creditterm_pb.GetAllCreditTermsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetAllCreditTermsResponseProto) => void): grpc.ClientUnaryCall;
    getAllCreditTerms(request: creditterm_pb.GetAllCreditTermsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetAllCreditTermsResponseProto) => void): grpc.ClientUnaryCall;
    getCreditTerm(request: creditterm_pb.GetCreditTermRequestProto, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetCreditTermResponseProto) => void): grpc.ClientUnaryCall;
    getCreditTerm(request: creditterm_pb.GetCreditTermRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetCreditTermResponseProto) => void): grpc.ClientUnaryCall;
    getCreditTerm(request: creditterm_pb.GetCreditTermRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetCreditTermResponseProto) => void): grpc.ClientUnaryCall;
    getCreditTerms(request: creditterm_pb.GetCreditTermsRequestProto, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetCreditTermsResponseProto) => void): grpc.ClientUnaryCall;
    getCreditTerms(request: creditterm_pb.GetCreditTermsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetCreditTermsResponseProto) => void): grpc.ClientUnaryCall;
    getCreditTerms(request: creditterm_pb.GetCreditTermsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetCreditTermsResponseProto) => void): grpc.ClientUnaryCall;
}

export class CreditTermServiceClient extends grpc.Client implements ICreditTermServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllCreditTerms(request: creditterm_pb.GetAllCreditTermsRequestProto, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetAllCreditTermsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllCreditTerms(request: creditterm_pb.GetAllCreditTermsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetAllCreditTermsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllCreditTerms(request: creditterm_pb.GetAllCreditTermsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetAllCreditTermsResponseProto) => void): grpc.ClientUnaryCall;
    public getCreditTerm(request: creditterm_pb.GetCreditTermRequestProto, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetCreditTermResponseProto) => void): grpc.ClientUnaryCall;
    public getCreditTerm(request: creditterm_pb.GetCreditTermRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetCreditTermResponseProto) => void): grpc.ClientUnaryCall;
    public getCreditTerm(request: creditterm_pb.GetCreditTermRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetCreditTermResponseProto) => void): grpc.ClientUnaryCall;
    public getCreditTerms(request: creditterm_pb.GetCreditTermsRequestProto, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetCreditTermsResponseProto) => void): grpc.ClientUnaryCall;
    public getCreditTerms(request: creditterm_pb.GetCreditTermsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetCreditTermsResponseProto) => void): grpc.ClientUnaryCall;
    public getCreditTerms(request: creditterm_pb.GetCreditTermsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: creditterm_pb.GetCreditTermsResponseProto) => void): grpc.ClientUnaryCall;
}
