// package: bmapi.distribution.courier
// file: courier.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as courier_pb from "./courier_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface ICourierServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllCouriers: ICourierServiceService_IGetAllCouriers;
    getCourier: ICourierServiceService_IGetCourier;
    getCouriers: ICourierServiceService_IGetCouriers;
    saveCouriers: ICourierServiceService_ISaveCouriers;
    setCourierIsHidden: ICourierServiceService_ISetCourierIsHidden;
    calculateNextDespatchDateByCourier: ICourierServiceService_ICalculateNextDespatchDateByCourier;
}

interface ICourierServiceService_IGetAllCouriers extends grpc.MethodDefinition<courier_pb.GetAllCouriersRequestProto, courier_pb.GetAllCouriersResponseProto> {
    path: "/bmapi.distribution.courier.CourierService/GetAllCouriers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<courier_pb.GetAllCouriersRequestProto>;
    requestDeserialize: grpc.deserialize<courier_pb.GetAllCouriersRequestProto>;
    responseSerialize: grpc.serialize<courier_pb.GetAllCouriersResponseProto>;
    responseDeserialize: grpc.deserialize<courier_pb.GetAllCouriersResponseProto>;
}
interface ICourierServiceService_IGetCourier extends grpc.MethodDefinition<courier_pb.GetCourierRequestProto, courier_pb.GetCourierResponseProto> {
    path: "/bmapi.distribution.courier.CourierService/GetCourier";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<courier_pb.GetCourierRequestProto>;
    requestDeserialize: grpc.deserialize<courier_pb.GetCourierRequestProto>;
    responseSerialize: grpc.serialize<courier_pb.GetCourierResponseProto>;
    responseDeserialize: grpc.deserialize<courier_pb.GetCourierResponseProto>;
}
interface ICourierServiceService_IGetCouriers extends grpc.MethodDefinition<courier_pb.GetCouriersRequestProto, courier_pb.GetCouriersResponseProto> {
    path: "/bmapi.distribution.courier.CourierService/GetCouriers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<courier_pb.GetCouriersRequestProto>;
    requestDeserialize: grpc.deserialize<courier_pb.GetCouriersRequestProto>;
    responseSerialize: grpc.serialize<courier_pb.GetCouriersResponseProto>;
    responseDeserialize: grpc.deserialize<courier_pb.GetCouriersResponseProto>;
}
interface ICourierServiceService_ISaveCouriers extends grpc.MethodDefinition<courier_pb.SaveCouriersRequestProto, courier_pb.SaveCouriersResponseProto> {
    path: "/bmapi.distribution.courier.CourierService/SaveCouriers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<courier_pb.SaveCouriersRequestProto>;
    requestDeserialize: grpc.deserialize<courier_pb.SaveCouriersRequestProto>;
    responseSerialize: grpc.serialize<courier_pb.SaveCouriersResponseProto>;
    responseDeserialize: grpc.deserialize<courier_pb.SaveCouriersResponseProto>;
}
interface ICourierServiceService_ISetCourierIsHidden extends grpc.MethodDefinition<courier_pb.SetCourierIsHiddenRequestProto, courier_pb.SetCourierIsHiddenResponseProto> {
    path: "/bmapi.distribution.courier.CourierService/SetCourierIsHidden";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<courier_pb.SetCourierIsHiddenRequestProto>;
    requestDeserialize: grpc.deserialize<courier_pb.SetCourierIsHiddenRequestProto>;
    responseSerialize: grpc.serialize<courier_pb.SetCourierIsHiddenResponseProto>;
    responseDeserialize: grpc.deserialize<courier_pb.SetCourierIsHiddenResponseProto>;
}
interface ICourierServiceService_ICalculateNextDespatchDateByCourier extends grpc.MethodDefinition<courier_pb.CalculateNextDespatchDateByCourierRequestProto, courier_pb.CalculateNextDespatchDateByCourierResponseProto> {
    path: "/bmapi.distribution.courier.CourierService/CalculateNextDespatchDateByCourier";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<courier_pb.CalculateNextDespatchDateByCourierRequestProto>;
    requestDeserialize: grpc.deserialize<courier_pb.CalculateNextDespatchDateByCourierRequestProto>;
    responseSerialize: grpc.serialize<courier_pb.CalculateNextDespatchDateByCourierResponseProto>;
    responseDeserialize: grpc.deserialize<courier_pb.CalculateNextDespatchDateByCourierResponseProto>;
}

export const CourierServiceService: ICourierServiceService;

export interface ICourierServiceServer extends grpc.UntypedServiceImplementation {
    getAllCouriers: grpc.handleUnaryCall<courier_pb.GetAllCouriersRequestProto, courier_pb.GetAllCouriersResponseProto>;
    getCourier: grpc.handleUnaryCall<courier_pb.GetCourierRequestProto, courier_pb.GetCourierResponseProto>;
    getCouriers: grpc.handleUnaryCall<courier_pb.GetCouriersRequestProto, courier_pb.GetCouriersResponseProto>;
    saveCouriers: grpc.handleUnaryCall<courier_pb.SaveCouriersRequestProto, courier_pb.SaveCouriersResponseProto>;
    setCourierIsHidden: grpc.handleUnaryCall<courier_pb.SetCourierIsHiddenRequestProto, courier_pb.SetCourierIsHiddenResponseProto>;
    calculateNextDespatchDateByCourier: grpc.handleUnaryCall<courier_pb.CalculateNextDespatchDateByCourierRequestProto, courier_pb.CalculateNextDespatchDateByCourierResponseProto>;
}

export interface ICourierServiceClient {
    getAllCouriers(request: courier_pb.GetAllCouriersRequestProto, callback: (error: grpc.ServiceError | null, response: courier_pb.GetAllCouriersResponseProto) => void): grpc.ClientUnaryCall;
    getAllCouriers(request: courier_pb.GetAllCouriersRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: courier_pb.GetAllCouriersResponseProto) => void): grpc.ClientUnaryCall;
    getAllCouriers(request: courier_pb.GetAllCouriersRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: courier_pb.GetAllCouriersResponseProto) => void): grpc.ClientUnaryCall;
    getCourier(request: courier_pb.GetCourierRequestProto, callback: (error: grpc.ServiceError | null, response: courier_pb.GetCourierResponseProto) => void): grpc.ClientUnaryCall;
    getCourier(request: courier_pb.GetCourierRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: courier_pb.GetCourierResponseProto) => void): grpc.ClientUnaryCall;
    getCourier(request: courier_pb.GetCourierRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: courier_pb.GetCourierResponseProto) => void): grpc.ClientUnaryCall;
    getCouriers(request: courier_pb.GetCouriersRequestProto, callback: (error: grpc.ServiceError | null, response: courier_pb.GetCouriersResponseProto) => void): grpc.ClientUnaryCall;
    getCouriers(request: courier_pb.GetCouriersRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: courier_pb.GetCouriersResponseProto) => void): grpc.ClientUnaryCall;
    getCouriers(request: courier_pb.GetCouriersRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: courier_pb.GetCouriersResponseProto) => void): grpc.ClientUnaryCall;
    saveCouriers(request: courier_pb.SaveCouriersRequestProto, callback: (error: grpc.ServiceError | null, response: courier_pb.SaveCouriersResponseProto) => void): grpc.ClientUnaryCall;
    saveCouriers(request: courier_pb.SaveCouriersRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: courier_pb.SaveCouriersResponseProto) => void): grpc.ClientUnaryCall;
    saveCouriers(request: courier_pb.SaveCouriersRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: courier_pb.SaveCouriersResponseProto) => void): grpc.ClientUnaryCall;
    setCourierIsHidden(request: courier_pb.SetCourierIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: courier_pb.SetCourierIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setCourierIsHidden(request: courier_pb.SetCourierIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: courier_pb.SetCourierIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setCourierIsHidden(request: courier_pb.SetCourierIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: courier_pb.SetCourierIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    calculateNextDespatchDateByCourier(request: courier_pb.CalculateNextDespatchDateByCourierRequestProto, callback: (error: grpc.ServiceError | null, response: courier_pb.CalculateNextDespatchDateByCourierResponseProto) => void): grpc.ClientUnaryCall;
    calculateNextDespatchDateByCourier(request: courier_pb.CalculateNextDespatchDateByCourierRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: courier_pb.CalculateNextDespatchDateByCourierResponseProto) => void): grpc.ClientUnaryCall;
    calculateNextDespatchDateByCourier(request: courier_pb.CalculateNextDespatchDateByCourierRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: courier_pb.CalculateNextDespatchDateByCourierResponseProto) => void): grpc.ClientUnaryCall;
}

export class CourierServiceClient extends grpc.Client implements ICourierServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllCouriers(request: courier_pb.GetAllCouriersRequestProto, callback: (error: grpc.ServiceError | null, response: courier_pb.GetAllCouriersResponseProto) => void): grpc.ClientUnaryCall;
    public getAllCouriers(request: courier_pb.GetAllCouriersRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: courier_pb.GetAllCouriersResponseProto) => void): grpc.ClientUnaryCall;
    public getAllCouriers(request: courier_pb.GetAllCouriersRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: courier_pb.GetAllCouriersResponseProto) => void): grpc.ClientUnaryCall;
    public getCourier(request: courier_pb.GetCourierRequestProto, callback: (error: grpc.ServiceError | null, response: courier_pb.GetCourierResponseProto) => void): grpc.ClientUnaryCall;
    public getCourier(request: courier_pb.GetCourierRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: courier_pb.GetCourierResponseProto) => void): grpc.ClientUnaryCall;
    public getCourier(request: courier_pb.GetCourierRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: courier_pb.GetCourierResponseProto) => void): grpc.ClientUnaryCall;
    public getCouriers(request: courier_pb.GetCouriersRequestProto, callback: (error: grpc.ServiceError | null, response: courier_pb.GetCouriersResponseProto) => void): grpc.ClientUnaryCall;
    public getCouriers(request: courier_pb.GetCouriersRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: courier_pb.GetCouriersResponseProto) => void): grpc.ClientUnaryCall;
    public getCouriers(request: courier_pb.GetCouriersRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: courier_pb.GetCouriersResponseProto) => void): grpc.ClientUnaryCall;
    public saveCouriers(request: courier_pb.SaveCouriersRequestProto, callback: (error: grpc.ServiceError | null, response: courier_pb.SaveCouriersResponseProto) => void): grpc.ClientUnaryCall;
    public saveCouriers(request: courier_pb.SaveCouriersRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: courier_pb.SaveCouriersResponseProto) => void): grpc.ClientUnaryCall;
    public saveCouriers(request: courier_pb.SaveCouriersRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: courier_pb.SaveCouriersResponseProto) => void): grpc.ClientUnaryCall;
    public setCourierIsHidden(request: courier_pb.SetCourierIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: courier_pb.SetCourierIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setCourierIsHidden(request: courier_pb.SetCourierIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: courier_pb.SetCourierIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setCourierIsHidden(request: courier_pb.SetCourierIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: courier_pb.SetCourierIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public calculateNextDespatchDateByCourier(request: courier_pb.CalculateNextDespatchDateByCourierRequestProto, callback: (error: grpc.ServiceError | null, response: courier_pb.CalculateNextDespatchDateByCourierResponseProto) => void): grpc.ClientUnaryCall;
    public calculateNextDespatchDateByCourier(request: courier_pb.CalculateNextDespatchDateByCourierRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: courier_pb.CalculateNextDespatchDateByCourierResponseProto) => void): grpc.ClientUnaryCall;
    public calculateNextDespatchDateByCourier(request: courier_pb.CalculateNextDespatchDateByCourierRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: courier_pb.CalculateNextDespatchDateByCourierResponseProto) => void): grpc.ClientUnaryCall;
}
