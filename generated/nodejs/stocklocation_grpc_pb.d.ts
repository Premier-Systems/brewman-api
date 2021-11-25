// package: bmapi.stocks.stocklocation
// file: stocklocation.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as stocklocation_pb from "./stocklocation_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IStockLocationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllStockLocations: IStockLocationServiceService_IGetAllStockLocations;
    getStockLocation: IStockLocationServiceService_IGetStockLocation;
    getStockLocations: IStockLocationServiceService_IGetStockLocations;
}

interface IStockLocationServiceService_IGetAllStockLocations extends grpc.MethodDefinition<stocklocation_pb.GetAllStockLocationsRequestProto, stocklocation_pb.GetAllStockLocationsResponseProto> {
    path: "/bmapi.stocks.stocklocation.StockLocationService/GetAllStockLocations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stocklocation_pb.GetAllStockLocationsRequestProto>;
    requestDeserialize: grpc.deserialize<stocklocation_pb.GetAllStockLocationsRequestProto>;
    responseSerialize: grpc.serialize<stocklocation_pb.GetAllStockLocationsResponseProto>;
    responseDeserialize: grpc.deserialize<stocklocation_pb.GetAllStockLocationsResponseProto>;
}
interface IStockLocationServiceService_IGetStockLocation extends grpc.MethodDefinition<stocklocation_pb.GetStockLocationRequestProto, stocklocation_pb.GetStockLocationResponseProto> {
    path: "/bmapi.stocks.stocklocation.StockLocationService/GetStockLocation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stocklocation_pb.GetStockLocationRequestProto>;
    requestDeserialize: grpc.deserialize<stocklocation_pb.GetStockLocationRequestProto>;
    responseSerialize: grpc.serialize<stocklocation_pb.GetStockLocationResponseProto>;
    responseDeserialize: grpc.deserialize<stocklocation_pb.GetStockLocationResponseProto>;
}
interface IStockLocationServiceService_IGetStockLocations extends grpc.MethodDefinition<stocklocation_pb.GetStockLocationsRequestProto, stocklocation_pb.GetStockLocationsResponseProto> {
    path: "/bmapi.stocks.stocklocation.StockLocationService/GetStockLocations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stocklocation_pb.GetStockLocationsRequestProto>;
    requestDeserialize: grpc.deserialize<stocklocation_pb.GetStockLocationsRequestProto>;
    responseSerialize: grpc.serialize<stocklocation_pb.GetStockLocationsResponseProto>;
    responseDeserialize: grpc.deserialize<stocklocation_pb.GetStockLocationsResponseProto>;
}

export const StockLocationServiceService: IStockLocationServiceService;

export interface IStockLocationServiceServer extends grpc.UntypedServiceImplementation {
    getAllStockLocations: grpc.handleUnaryCall<stocklocation_pb.GetAllStockLocationsRequestProto, stocklocation_pb.GetAllStockLocationsResponseProto>;
    getStockLocation: grpc.handleUnaryCall<stocklocation_pb.GetStockLocationRequestProto, stocklocation_pb.GetStockLocationResponseProto>;
    getStockLocations: grpc.handleUnaryCall<stocklocation_pb.GetStockLocationsRequestProto, stocklocation_pb.GetStockLocationsResponseProto>;
}

export interface IStockLocationServiceClient {
    getAllStockLocations(request: stocklocation_pb.GetAllStockLocationsRequestProto, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetAllStockLocationsResponseProto) => void): grpc.ClientUnaryCall;
    getAllStockLocations(request: stocklocation_pb.GetAllStockLocationsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetAllStockLocationsResponseProto) => void): grpc.ClientUnaryCall;
    getAllStockLocations(request: stocklocation_pb.GetAllStockLocationsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetAllStockLocationsResponseProto) => void): grpc.ClientUnaryCall;
    getStockLocation(request: stocklocation_pb.GetStockLocationRequestProto, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetStockLocationResponseProto) => void): grpc.ClientUnaryCall;
    getStockLocation(request: stocklocation_pb.GetStockLocationRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetStockLocationResponseProto) => void): grpc.ClientUnaryCall;
    getStockLocation(request: stocklocation_pb.GetStockLocationRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetStockLocationResponseProto) => void): grpc.ClientUnaryCall;
    getStockLocations(request: stocklocation_pb.GetStockLocationsRequestProto, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetStockLocationsResponseProto) => void): grpc.ClientUnaryCall;
    getStockLocations(request: stocklocation_pb.GetStockLocationsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetStockLocationsResponseProto) => void): grpc.ClientUnaryCall;
    getStockLocations(request: stocklocation_pb.GetStockLocationsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetStockLocationsResponseProto) => void): grpc.ClientUnaryCall;
}

export class StockLocationServiceClient extends grpc.Client implements IStockLocationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllStockLocations(request: stocklocation_pb.GetAllStockLocationsRequestProto, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetAllStockLocationsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllStockLocations(request: stocklocation_pb.GetAllStockLocationsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetAllStockLocationsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllStockLocations(request: stocklocation_pb.GetAllStockLocationsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetAllStockLocationsResponseProto) => void): grpc.ClientUnaryCall;
    public getStockLocation(request: stocklocation_pb.GetStockLocationRequestProto, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetStockLocationResponseProto) => void): grpc.ClientUnaryCall;
    public getStockLocation(request: stocklocation_pb.GetStockLocationRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetStockLocationResponseProto) => void): grpc.ClientUnaryCall;
    public getStockLocation(request: stocklocation_pb.GetStockLocationRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetStockLocationResponseProto) => void): grpc.ClientUnaryCall;
    public getStockLocations(request: stocklocation_pb.GetStockLocationsRequestProto, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetStockLocationsResponseProto) => void): grpc.ClientUnaryCall;
    public getStockLocations(request: stocklocation_pb.GetStockLocationsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetStockLocationsResponseProto) => void): grpc.ClientUnaryCall;
    public getStockLocations(request: stocklocation_pb.GetStockLocationsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stocklocation_pb.GetStockLocationsResponseProto) => void): grpc.ClientUnaryCall;
}
