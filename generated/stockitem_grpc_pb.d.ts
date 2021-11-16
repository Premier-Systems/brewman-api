// package: bmapi.stocks.stockitem
// file: stockitem.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as stockitem_pb from "./stockitem_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IStockItemServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllStockItems: IStockItemServiceService_IGetAllStockItems;
    getStockItem: IStockItemServiceService_IGetStockItem;
    getStockItems: IStockItemServiceService_IGetStockItems;
    getStockItemsByFilter: IStockItemServiceService_IGetStockItemsByFilter;
    getGlCodeOverridesForStockItem: IStockItemServiceService_IGetGlCodeOverridesForStockItem;
    setStockItemIsHidden: IStockItemServiceService_ISetStockItemIsHidden;
}

interface IStockItemServiceService_IGetAllStockItems extends grpc.MethodDefinition<stockitem_pb.GetAllStockItemsRequestProto, stockitem_pb.GetAllStockItemsResponseProto> {
    path: "/bmapi.stocks.stockitem.StockItemService/GetAllStockItems";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stockitem_pb.GetAllStockItemsRequestProto>;
    requestDeserialize: grpc.deserialize<stockitem_pb.GetAllStockItemsRequestProto>;
    responseSerialize: grpc.serialize<stockitem_pb.GetAllStockItemsResponseProto>;
    responseDeserialize: grpc.deserialize<stockitem_pb.GetAllStockItemsResponseProto>;
}
interface IStockItemServiceService_IGetStockItem extends grpc.MethodDefinition<stockitem_pb.GetStockItemRequestProto, stockitem_pb.GetStockItemResponseProto> {
    path: "/bmapi.stocks.stockitem.StockItemService/GetStockItem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stockitem_pb.GetStockItemRequestProto>;
    requestDeserialize: grpc.deserialize<stockitem_pb.GetStockItemRequestProto>;
    responseSerialize: grpc.serialize<stockitem_pb.GetStockItemResponseProto>;
    responseDeserialize: grpc.deserialize<stockitem_pb.GetStockItemResponseProto>;
}
interface IStockItemServiceService_IGetStockItems extends grpc.MethodDefinition<stockitem_pb.GetStockItemsRequestProto, stockitem_pb.GetStockItemsResponseProto> {
    path: "/bmapi.stocks.stockitem.StockItemService/GetStockItems";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stockitem_pb.GetStockItemsRequestProto>;
    requestDeserialize: grpc.deserialize<stockitem_pb.GetStockItemsRequestProto>;
    responseSerialize: grpc.serialize<stockitem_pb.GetStockItemsResponseProto>;
    responseDeserialize: grpc.deserialize<stockitem_pb.GetStockItemsResponseProto>;
}
interface IStockItemServiceService_IGetStockItemsByFilter extends grpc.MethodDefinition<stockitem_pb.GetStockItemsByFilterRequestProto, stockitem_pb.GetStockItemsByFilterResponseProto> {
    path: "/bmapi.stocks.stockitem.StockItemService/GetStockItemsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stockitem_pb.GetStockItemsByFilterRequestProto>;
    requestDeserialize: grpc.deserialize<stockitem_pb.GetStockItemsByFilterRequestProto>;
    responseSerialize: grpc.serialize<stockitem_pb.GetStockItemsByFilterResponseProto>;
    responseDeserialize: grpc.deserialize<stockitem_pb.GetStockItemsByFilterResponseProto>;
}
interface IStockItemServiceService_IGetGlCodeOverridesForStockItem extends grpc.MethodDefinition<stockitem_pb.GetGlCodeOverridesForStockItemRequestProto, stockitem_pb.GetGlCodeOverridesForStockItemResponseProto> {
    path: "/bmapi.stocks.stockitem.StockItemService/GetGlCodeOverridesForStockItem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stockitem_pb.GetGlCodeOverridesForStockItemRequestProto>;
    requestDeserialize: grpc.deserialize<stockitem_pb.GetGlCodeOverridesForStockItemRequestProto>;
    responseSerialize: grpc.serialize<stockitem_pb.GetGlCodeOverridesForStockItemResponseProto>;
    responseDeserialize: grpc.deserialize<stockitem_pb.GetGlCodeOverridesForStockItemResponseProto>;
}
interface IStockItemServiceService_ISetStockItemIsHidden extends grpc.MethodDefinition<stockitem_pb.SetStockItemIsHiddenRequestProto, stockitem_pb.SetStockItemIsHiddenResponseProto> {
    path: "/bmapi.stocks.stockitem.StockItemService/SetStockItemIsHidden";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stockitem_pb.SetStockItemIsHiddenRequestProto>;
    requestDeserialize: grpc.deserialize<stockitem_pb.SetStockItemIsHiddenRequestProto>;
    responseSerialize: grpc.serialize<stockitem_pb.SetStockItemIsHiddenResponseProto>;
    responseDeserialize: grpc.deserialize<stockitem_pb.SetStockItemIsHiddenResponseProto>;
}

export const StockItemServiceService: IStockItemServiceService;

export interface IStockItemServiceServer extends grpc.UntypedServiceImplementation {
    getAllStockItems: grpc.handleUnaryCall<stockitem_pb.GetAllStockItemsRequestProto, stockitem_pb.GetAllStockItemsResponseProto>;
    getStockItem: grpc.handleUnaryCall<stockitem_pb.GetStockItemRequestProto, stockitem_pb.GetStockItemResponseProto>;
    getStockItems: grpc.handleUnaryCall<stockitem_pb.GetStockItemsRequestProto, stockitem_pb.GetStockItemsResponseProto>;
    getStockItemsByFilter: grpc.handleUnaryCall<stockitem_pb.GetStockItemsByFilterRequestProto, stockitem_pb.GetStockItemsByFilterResponseProto>;
    getGlCodeOverridesForStockItem: grpc.handleUnaryCall<stockitem_pb.GetGlCodeOverridesForStockItemRequestProto, stockitem_pb.GetGlCodeOverridesForStockItemResponseProto>;
    setStockItemIsHidden: grpc.handleUnaryCall<stockitem_pb.SetStockItemIsHiddenRequestProto, stockitem_pb.SetStockItemIsHiddenResponseProto>;
}

export interface IStockItemServiceClient {
    getAllStockItems(request: stockitem_pb.GetAllStockItemsRequestProto, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetAllStockItemsResponseProto) => void): grpc.ClientUnaryCall;
    getAllStockItems(request: stockitem_pb.GetAllStockItemsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetAllStockItemsResponseProto) => void): grpc.ClientUnaryCall;
    getAllStockItems(request: stockitem_pb.GetAllStockItemsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetAllStockItemsResponseProto) => void): grpc.ClientUnaryCall;
    getStockItem(request: stockitem_pb.GetStockItemRequestProto, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemResponseProto) => void): grpc.ClientUnaryCall;
    getStockItem(request: stockitem_pb.GetStockItemRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemResponseProto) => void): grpc.ClientUnaryCall;
    getStockItem(request: stockitem_pb.GetStockItemRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemResponseProto) => void): grpc.ClientUnaryCall;
    getStockItems(request: stockitem_pb.GetStockItemsRequestProto, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemsResponseProto) => void): grpc.ClientUnaryCall;
    getStockItems(request: stockitem_pb.GetStockItemsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemsResponseProto) => void): grpc.ClientUnaryCall;
    getStockItems(request: stockitem_pb.GetStockItemsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemsResponseProto) => void): grpc.ClientUnaryCall;
    getStockItemsByFilter(request: stockitem_pb.GetStockItemsByFilterRequestProto, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemsByFilterResponseProto) => void): grpc.ClientUnaryCall;
    getStockItemsByFilter(request: stockitem_pb.GetStockItemsByFilterRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemsByFilterResponseProto) => void): grpc.ClientUnaryCall;
    getStockItemsByFilter(request: stockitem_pb.GetStockItemsByFilterRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemsByFilterResponseProto) => void): grpc.ClientUnaryCall;
    getGlCodeOverridesForStockItem(request: stockitem_pb.GetGlCodeOverridesForStockItemRequestProto, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetGlCodeOverridesForStockItemResponseProto) => void): grpc.ClientUnaryCall;
    getGlCodeOverridesForStockItem(request: stockitem_pb.GetGlCodeOverridesForStockItemRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetGlCodeOverridesForStockItemResponseProto) => void): grpc.ClientUnaryCall;
    getGlCodeOverridesForStockItem(request: stockitem_pb.GetGlCodeOverridesForStockItemRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetGlCodeOverridesForStockItemResponseProto) => void): grpc.ClientUnaryCall;
    setStockItemIsHidden(request: stockitem_pb.SetStockItemIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: stockitem_pb.SetStockItemIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setStockItemIsHidden(request: stockitem_pb.SetStockItemIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockitem_pb.SetStockItemIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    setStockItemIsHidden(request: stockitem_pb.SetStockItemIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockitem_pb.SetStockItemIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
}

export class StockItemServiceClient extends grpc.Client implements IStockItemServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllStockItems(request: stockitem_pb.GetAllStockItemsRequestProto, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetAllStockItemsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllStockItems(request: stockitem_pb.GetAllStockItemsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetAllStockItemsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllStockItems(request: stockitem_pb.GetAllStockItemsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetAllStockItemsResponseProto) => void): grpc.ClientUnaryCall;
    public getStockItem(request: stockitem_pb.GetStockItemRequestProto, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemResponseProto) => void): grpc.ClientUnaryCall;
    public getStockItem(request: stockitem_pb.GetStockItemRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemResponseProto) => void): grpc.ClientUnaryCall;
    public getStockItem(request: stockitem_pb.GetStockItemRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemResponseProto) => void): grpc.ClientUnaryCall;
    public getStockItems(request: stockitem_pb.GetStockItemsRequestProto, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemsResponseProto) => void): grpc.ClientUnaryCall;
    public getStockItems(request: stockitem_pb.GetStockItemsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemsResponseProto) => void): grpc.ClientUnaryCall;
    public getStockItems(request: stockitem_pb.GetStockItemsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemsResponseProto) => void): grpc.ClientUnaryCall;
    public getStockItemsByFilter(request: stockitem_pb.GetStockItemsByFilterRequestProto, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemsByFilterResponseProto) => void): grpc.ClientUnaryCall;
    public getStockItemsByFilter(request: stockitem_pb.GetStockItemsByFilterRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemsByFilterResponseProto) => void): grpc.ClientUnaryCall;
    public getStockItemsByFilter(request: stockitem_pb.GetStockItemsByFilterRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetStockItemsByFilterResponseProto) => void): grpc.ClientUnaryCall;
    public getGlCodeOverridesForStockItem(request: stockitem_pb.GetGlCodeOverridesForStockItemRequestProto, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetGlCodeOverridesForStockItemResponseProto) => void): grpc.ClientUnaryCall;
    public getGlCodeOverridesForStockItem(request: stockitem_pb.GetGlCodeOverridesForStockItemRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetGlCodeOverridesForStockItemResponseProto) => void): grpc.ClientUnaryCall;
    public getGlCodeOverridesForStockItem(request: stockitem_pb.GetGlCodeOverridesForStockItemRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockitem_pb.GetGlCodeOverridesForStockItemResponseProto) => void): grpc.ClientUnaryCall;
    public setStockItemIsHidden(request: stockitem_pb.SetStockItemIsHiddenRequestProto, callback: (error: grpc.ServiceError | null, response: stockitem_pb.SetStockItemIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setStockItemIsHidden(request: stockitem_pb.SetStockItemIsHiddenRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockitem_pb.SetStockItemIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
    public setStockItemIsHidden(request: stockitem_pb.SetStockItemIsHiddenRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockitem_pb.SetStockItemIsHiddenResponseProto) => void): grpc.ClientUnaryCall;
}
