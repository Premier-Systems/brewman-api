// package: bmapi.orders.order
// file: order.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as order_pb from "./order_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IOrderV2ServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOrder: IOrderV2ServiceService_ICreateOrder;
    saveOrder: IOrderV2ServiceService_ISaveOrder;
    getOrder: IOrderV2ServiceService_IGetOrder;
    getOrders: IOrderV2ServiceService_IGetOrders;
    getOrdersByFilter: IOrderV2ServiceService_IGetOrdersByFilter;
    performStandardOrderEvaluation: IOrderV2ServiceService_IPerformStandardOrderEvaluation;
}

interface IOrderV2ServiceService_ICreateOrder extends grpc.MethodDefinition<order_pb.CreateOrderRequestProto, order_pb.CreateOrderResponseProto> {
    path: "/bmapi.orders.order.OrderV2Service/CreateOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.CreateOrderRequestProto>;
    requestDeserialize: grpc.deserialize<order_pb.CreateOrderRequestProto>;
    responseSerialize: grpc.serialize<order_pb.CreateOrderResponseProto>;
    responseDeserialize: grpc.deserialize<order_pb.CreateOrderResponseProto>;
}
interface IOrderV2ServiceService_ISaveOrder extends grpc.MethodDefinition<order_pb.SaveOrderRequestProto, order_pb.SaveOrderResponseProto> {
    path: "/bmapi.orders.order.OrderV2Service/SaveOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.SaveOrderRequestProto>;
    requestDeserialize: grpc.deserialize<order_pb.SaveOrderRequestProto>;
    responseSerialize: grpc.serialize<order_pb.SaveOrderResponseProto>;
    responseDeserialize: grpc.deserialize<order_pb.SaveOrderResponseProto>;
}
interface IOrderV2ServiceService_IGetOrder extends grpc.MethodDefinition<order_pb.GetOrderRequestProto, order_pb.GetOrderResponseProto> {
    path: "/bmapi.orders.order.OrderV2Service/GetOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.GetOrderRequestProto>;
    requestDeserialize: grpc.deserialize<order_pb.GetOrderRequestProto>;
    responseSerialize: grpc.serialize<order_pb.GetOrderResponseProto>;
    responseDeserialize: grpc.deserialize<order_pb.GetOrderResponseProto>;
}
interface IOrderV2ServiceService_IGetOrders extends grpc.MethodDefinition<order_pb.GetOrdersRequestProto, order_pb.GetOrdersResponseProto> {
    path: "/bmapi.orders.order.OrderV2Service/GetOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.GetOrdersRequestProto>;
    requestDeserialize: grpc.deserialize<order_pb.GetOrdersRequestProto>;
    responseSerialize: grpc.serialize<order_pb.GetOrdersResponseProto>;
    responseDeserialize: grpc.deserialize<order_pb.GetOrdersResponseProto>;
}
interface IOrderV2ServiceService_IGetOrdersByFilter extends grpc.MethodDefinition<order_pb.GetOrdersByFilterRequestProto, order_pb.GetOrdersByFilterResponseProto> {
    path: "/bmapi.orders.order.OrderV2Service/GetOrdersByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.GetOrdersByFilterRequestProto>;
    requestDeserialize: grpc.deserialize<order_pb.GetOrdersByFilterRequestProto>;
    responseSerialize: grpc.serialize<order_pb.GetOrdersByFilterResponseProto>;
    responseDeserialize: grpc.deserialize<order_pb.GetOrdersByFilterResponseProto>;
}
interface IOrderV2ServiceService_IPerformStandardOrderEvaluation extends grpc.MethodDefinition<order_pb.PerformStandardOrderEvaluationRequestProto, order_pb.PerformStandardOrderEvaluationResponseProto> {
    path: "/bmapi.orders.order.OrderV2Service/PerformStandardOrderEvaluation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.PerformStandardOrderEvaluationRequestProto>;
    requestDeserialize: grpc.deserialize<order_pb.PerformStandardOrderEvaluationRequestProto>;
    responseSerialize: grpc.serialize<order_pb.PerformStandardOrderEvaluationResponseProto>;
    responseDeserialize: grpc.deserialize<order_pb.PerformStandardOrderEvaluationResponseProto>;
}

export const OrderV2ServiceService: IOrderV2ServiceService;

export interface IOrderV2ServiceServer extends grpc.UntypedServiceImplementation {
    createOrder: grpc.handleUnaryCall<order_pb.CreateOrderRequestProto, order_pb.CreateOrderResponseProto>;
    saveOrder: grpc.handleUnaryCall<order_pb.SaveOrderRequestProto, order_pb.SaveOrderResponseProto>;
    getOrder: grpc.handleUnaryCall<order_pb.GetOrderRequestProto, order_pb.GetOrderResponseProto>;
    getOrders: grpc.handleUnaryCall<order_pb.GetOrdersRequestProto, order_pb.GetOrdersResponseProto>;
    getOrdersByFilter: grpc.handleUnaryCall<order_pb.GetOrdersByFilterRequestProto, order_pb.GetOrdersByFilterResponseProto>;
    performStandardOrderEvaluation: grpc.handleUnaryCall<order_pb.PerformStandardOrderEvaluationRequestProto, order_pb.PerformStandardOrderEvaluationResponseProto>;
}

export interface IOrderV2ServiceClient {
    createOrder(request: order_pb.CreateOrderRequestProto, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponseProto) => void): grpc.ClientUnaryCall;
    createOrder(request: order_pb.CreateOrderRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponseProto) => void): grpc.ClientUnaryCall;
    createOrder(request: order_pb.CreateOrderRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponseProto) => void): grpc.ClientUnaryCall;
    saveOrder(request: order_pb.SaveOrderRequestProto, callback: (error: grpc.ServiceError | null, response: order_pb.SaveOrderResponseProto) => void): grpc.ClientUnaryCall;
    saveOrder(request: order_pb.SaveOrderRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.SaveOrderResponseProto) => void): grpc.ClientUnaryCall;
    saveOrder(request: order_pb.SaveOrderRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.SaveOrderResponseProto) => void): grpc.ClientUnaryCall;
    getOrder(request: order_pb.GetOrderRequestProto, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrderResponseProto) => void): grpc.ClientUnaryCall;
    getOrder(request: order_pb.GetOrderRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrderResponseProto) => void): grpc.ClientUnaryCall;
    getOrder(request: order_pb.GetOrderRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrderResponseProto) => void): grpc.ClientUnaryCall;
    getOrders(request: order_pb.GetOrdersRequestProto, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrdersResponseProto) => void): grpc.ClientUnaryCall;
    getOrders(request: order_pb.GetOrdersRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrdersResponseProto) => void): grpc.ClientUnaryCall;
    getOrders(request: order_pb.GetOrdersRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrdersResponseProto) => void): grpc.ClientUnaryCall;
    getOrdersByFilter(request: order_pb.GetOrdersByFilterRequestProto, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrdersByFilterResponseProto) => void): grpc.ClientUnaryCall;
    getOrdersByFilter(request: order_pb.GetOrdersByFilterRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrdersByFilterResponseProto) => void): grpc.ClientUnaryCall;
    getOrdersByFilter(request: order_pb.GetOrdersByFilterRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrdersByFilterResponseProto) => void): grpc.ClientUnaryCall;
    performStandardOrderEvaluation(request: order_pb.PerformStandardOrderEvaluationRequestProto, callback: (error: grpc.ServiceError | null, response: order_pb.PerformStandardOrderEvaluationResponseProto) => void): grpc.ClientUnaryCall;
    performStandardOrderEvaluation(request: order_pb.PerformStandardOrderEvaluationRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.PerformStandardOrderEvaluationResponseProto) => void): grpc.ClientUnaryCall;
    performStandardOrderEvaluation(request: order_pb.PerformStandardOrderEvaluationRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.PerformStandardOrderEvaluationResponseProto) => void): grpc.ClientUnaryCall;
}

export class OrderV2ServiceClient extends grpc.Client implements IOrderV2ServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createOrder(request: order_pb.CreateOrderRequestProto, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponseProto) => void): grpc.ClientUnaryCall;
    public createOrder(request: order_pb.CreateOrderRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponseProto) => void): grpc.ClientUnaryCall;
    public createOrder(request: order_pb.CreateOrderRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponseProto) => void): grpc.ClientUnaryCall;
    public saveOrder(request: order_pb.SaveOrderRequestProto, callback: (error: grpc.ServiceError | null, response: order_pb.SaveOrderResponseProto) => void): grpc.ClientUnaryCall;
    public saveOrder(request: order_pb.SaveOrderRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.SaveOrderResponseProto) => void): grpc.ClientUnaryCall;
    public saveOrder(request: order_pb.SaveOrderRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.SaveOrderResponseProto) => void): grpc.ClientUnaryCall;
    public getOrder(request: order_pb.GetOrderRequestProto, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrderResponseProto) => void): grpc.ClientUnaryCall;
    public getOrder(request: order_pb.GetOrderRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrderResponseProto) => void): grpc.ClientUnaryCall;
    public getOrder(request: order_pb.GetOrderRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrderResponseProto) => void): grpc.ClientUnaryCall;
    public getOrders(request: order_pb.GetOrdersRequestProto, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrdersResponseProto) => void): grpc.ClientUnaryCall;
    public getOrders(request: order_pb.GetOrdersRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrdersResponseProto) => void): grpc.ClientUnaryCall;
    public getOrders(request: order_pb.GetOrdersRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrdersResponseProto) => void): grpc.ClientUnaryCall;
    public getOrdersByFilter(request: order_pb.GetOrdersByFilterRequestProto, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrdersByFilterResponseProto) => void): grpc.ClientUnaryCall;
    public getOrdersByFilter(request: order_pb.GetOrdersByFilterRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrdersByFilterResponseProto) => void): grpc.ClientUnaryCall;
    public getOrdersByFilter(request: order_pb.GetOrdersByFilterRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrdersByFilterResponseProto) => void): grpc.ClientUnaryCall;
    public performStandardOrderEvaluation(request: order_pb.PerformStandardOrderEvaluationRequestProto, callback: (error: grpc.ServiceError | null, response: order_pb.PerformStandardOrderEvaluationResponseProto) => void): grpc.ClientUnaryCall;
    public performStandardOrderEvaluation(request: order_pb.PerformStandardOrderEvaluationRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.PerformStandardOrderEvaluationResponseProto) => void): grpc.ClientUnaryCall;
    public performStandardOrderEvaluation(request: order_pb.PerformStandardOrderEvaluationRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.PerformStandardOrderEvaluationResponseProto) => void): grpc.ClientUnaryCall;
}
