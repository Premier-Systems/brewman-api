// package: bmapi.stocks.stock
// file: stock.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as stock_pb from "./stock_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IStockServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getStockItemsQuantityCurrentlyInStock: IStockServiceService_IGetStockItemsQuantityCurrentlyInStock;
}

interface IStockServiceService_IGetStockItemsQuantityCurrentlyInStock extends grpc.MethodDefinition<stock_pb.GetStockItemsQuantityCurrentlyInStockRequestProto, stock_pb.GetStockItemsQuantityCurrentlyInStockResponseProto> {
    path: "/bmapi.stocks.stock.StockService/GetStockItemsQuantityCurrentlyInStock";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stock_pb.GetStockItemsQuantityCurrentlyInStockRequestProto>;
    requestDeserialize: grpc.deserialize<stock_pb.GetStockItemsQuantityCurrentlyInStockRequestProto>;
    responseSerialize: grpc.serialize<stock_pb.GetStockItemsQuantityCurrentlyInStockResponseProto>;
    responseDeserialize: grpc.deserialize<stock_pb.GetStockItemsQuantityCurrentlyInStockResponseProto>;
}

export const StockServiceService: IStockServiceService;

export interface IStockServiceServer extends grpc.UntypedServiceImplementation {
    getStockItemsQuantityCurrentlyInStock: grpc.handleUnaryCall<stock_pb.GetStockItemsQuantityCurrentlyInStockRequestProto, stock_pb.GetStockItemsQuantityCurrentlyInStockResponseProto>;
}

export interface IStockServiceClient {
    getStockItemsQuantityCurrentlyInStock(request: stock_pb.GetStockItemsQuantityCurrentlyInStockRequestProto, callback: (error: grpc.ServiceError | null, response: stock_pb.GetStockItemsQuantityCurrentlyInStockResponseProto) => void): grpc.ClientUnaryCall;
    getStockItemsQuantityCurrentlyInStock(request: stock_pb.GetStockItemsQuantityCurrentlyInStockRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stock_pb.GetStockItemsQuantityCurrentlyInStockResponseProto) => void): grpc.ClientUnaryCall;
    getStockItemsQuantityCurrentlyInStock(request: stock_pb.GetStockItemsQuantityCurrentlyInStockRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stock_pb.GetStockItemsQuantityCurrentlyInStockResponseProto) => void): grpc.ClientUnaryCall;
}

export class StockServiceClient extends grpc.Client implements IStockServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getStockItemsQuantityCurrentlyInStock(request: stock_pb.GetStockItemsQuantityCurrentlyInStockRequestProto, callback: (error: grpc.ServiceError | null, response: stock_pb.GetStockItemsQuantityCurrentlyInStockResponseProto) => void): grpc.ClientUnaryCall;
    public getStockItemsQuantityCurrentlyInStock(request: stock_pb.GetStockItemsQuantityCurrentlyInStockRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stock_pb.GetStockItemsQuantityCurrentlyInStockResponseProto) => void): grpc.ClientUnaryCall;
    public getStockItemsQuantityCurrentlyInStock(request: stock_pb.GetStockItemsQuantityCurrentlyInStockRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stock_pb.GetStockItemsQuantityCurrentlyInStockResponseProto) => void): grpc.ClientUnaryCall;
}
