// package: bmapi.orders.order
// file: order.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

export class CreateOrderRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): CreateOrderRequestProto;
    getOutletId(): string;
    setOutletId(value: string): CreateOrderRequestProto;
    getOrderSource(): common_enums_generated_pb.EnumOrderSource;
    setOrderSource(value: common_enums_generated_pb.EnumOrderSource): CreateOrderRequestProto;
    getExternalReference(): string;
    setExternalReference(value: string): CreateOrderRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrderRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrderRequestProto): CreateOrderRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrderRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrderRequestProto;
    static deserializeBinaryFromReader(message: CreateOrderRequestProto, reader: jspb.BinaryReader): CreateOrderRequestProto;
}

export namespace CreateOrderRequestProto {
    export type AsObject = {
        tenantId: string,
        outletId: string,
        orderSource: common_enums_generated_pb.EnumOrderSource,
        externalReference: string,
    }
}

export class CreateOrderResponseProto extends jspb.Message { 

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): OrderProto | undefined;
    setOrder(value?: OrderProto): CreateOrderResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrderResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrderResponseProto): CreateOrderResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrderResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrderResponseProto;
    static deserializeBinaryFromReader(message: CreateOrderResponseProto, reader: jspb.BinaryReader): CreateOrderResponseProto;
}

export namespace CreateOrderResponseProto {
    export type AsObject = {
        order?: OrderProto.AsObject,
    }
}

export class SaveOrderRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SaveOrderRequestProto;

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): OrderProto | undefined;
    setOrder(value?: OrderProto): SaveOrderRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveOrderRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveOrderRequestProto): SaveOrderRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveOrderRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveOrderRequestProto;
    static deserializeBinaryFromReader(message: SaveOrderRequestProto, reader: jspb.BinaryReader): SaveOrderRequestProto;
}

export namespace SaveOrderRequestProto {
    export type AsObject = {
        tenantId: string,
        order?: OrderProto.AsObject,
    }
}

export class SaveOrderResponseProto extends jspb.Message { 

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): OrderProto | undefined;
    setOrder(value?: OrderProto): SaveOrderResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveOrderResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveOrderResponseProto): SaveOrderResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveOrderResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveOrderResponseProto;
    static deserializeBinaryFromReader(message: SaveOrderResponseProto, reader: jspb.BinaryReader): SaveOrderResponseProto;
}

export namespace SaveOrderResponseProto {
    export type AsObject = {
        order?: OrderProto.AsObject,
    }
}

export class GetOrderRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetOrderRequestProto;
    getOrderId(): string;
    setOrderId(value: string): GetOrderRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderRequestProto): GetOrderRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderRequestProto;
    static deserializeBinaryFromReader(message: GetOrderRequestProto, reader: jspb.BinaryReader): GetOrderRequestProto;
}

export namespace GetOrderRequestProto {
    export type AsObject = {
        tenantId: string,
        orderId: string,
    }
}

export class GetOrderResponseProto extends jspb.Message { 

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): OrderProto | undefined;
    setOrder(value?: OrderProto): GetOrderResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderResponseProto): GetOrderResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderResponseProto;
    static deserializeBinaryFromReader(message: GetOrderResponseProto, reader: jspb.BinaryReader): GetOrderResponseProto;
}

export namespace GetOrderResponseProto {
    export type AsObject = {
        order?: OrderProto.AsObject,
    }
}

export class GetOrdersRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetOrdersRequestProto;
    clearOrderIdsList(): void;
    getOrderIdsList(): Array<string>;
    setOrderIdsList(value: Array<string>): GetOrdersRequestProto;
    addOrderIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrdersRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrdersRequestProto): GetOrdersRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrdersRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrdersRequestProto;
    static deserializeBinaryFromReader(message: GetOrdersRequestProto, reader: jspb.BinaryReader): GetOrdersRequestProto;
}

export namespace GetOrdersRequestProto {
    export type AsObject = {
        tenantId: string,
        orderIdsList: Array<string>,
    }
}

export class GetOrdersResponseProto extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<OrderProto>;
    setOrdersList(value: Array<OrderProto>): GetOrdersResponseProto;
    addOrders(value?: OrderProto, index?: number): OrderProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrdersResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrdersResponseProto): GetOrdersResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrdersResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrdersResponseProto;
    static deserializeBinaryFromReader(message: GetOrdersResponseProto, reader: jspb.BinaryReader): GetOrdersResponseProto;
}

export namespace GetOrdersResponseProto {
    export type AsObject = {
        ordersList: Array<OrderProto.AsObject>,
    }
}

export class GetOrdersByFilterRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetOrdersByFilterRequestProto;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): OrderFilterProto | undefined;
    setFilter(value?: OrderFilterProto): GetOrdersByFilterRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrdersByFilterRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrdersByFilterRequestProto): GetOrdersByFilterRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrdersByFilterRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrdersByFilterRequestProto;
    static deserializeBinaryFromReader(message: GetOrdersByFilterRequestProto, reader: jspb.BinaryReader): GetOrdersByFilterRequestProto;
}

export namespace GetOrdersByFilterRequestProto {
    export type AsObject = {
        tenantId: string,
        filter?: OrderFilterProto.AsObject,
    }
}

export class GetOrdersByFilterResponseProto extends jspb.Message { 

    hasResults(): boolean;
    clearResults(): void;
    getResults(): FilteredOrdersResultProto | undefined;
    setResults(value?: FilteredOrdersResultProto): GetOrdersByFilterResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrdersByFilterResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrdersByFilterResponseProto): GetOrdersByFilterResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrdersByFilterResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrdersByFilterResponseProto;
    static deserializeBinaryFromReader(message: GetOrdersByFilterResponseProto, reader: jspb.BinaryReader): GetOrdersByFilterResponseProto;
}

export namespace GetOrdersByFilterResponseProto {
    export type AsObject = {
        results?: FilteredOrdersResultProto.AsObject,
    }
}

export class PerformStandardOrderEvaluationRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): PerformStandardOrderEvaluationRequestProto;

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): OrderProto | undefined;
    setOrder(value?: OrderProto): PerformStandardOrderEvaluationRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PerformStandardOrderEvaluationRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: PerformStandardOrderEvaluationRequestProto): PerformStandardOrderEvaluationRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PerformStandardOrderEvaluationRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PerformStandardOrderEvaluationRequestProto;
    static deserializeBinaryFromReader(message: PerformStandardOrderEvaluationRequestProto, reader: jspb.BinaryReader): PerformStandardOrderEvaluationRequestProto;
}

export namespace PerformStandardOrderEvaluationRequestProto {
    export type AsObject = {
        tenantId: string,
        order?: OrderProto.AsObject,
    }
}

export class PerformStandardOrderEvaluationResponseProto extends jspb.Message { 

    hasResults(): boolean;
    clearResults(): void;
    getResults(): OrderProto | undefined;
    setResults(value?: OrderProto): PerformStandardOrderEvaluationResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PerformStandardOrderEvaluationResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: PerformStandardOrderEvaluationResponseProto): PerformStandardOrderEvaluationResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PerformStandardOrderEvaluationResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PerformStandardOrderEvaluationResponseProto;
    static deserializeBinaryFromReader(message: PerformStandardOrderEvaluationResponseProto, reader: jspb.BinaryReader): PerformStandardOrderEvaluationResponseProto;
}

export namespace PerformStandardOrderEvaluationResponseProto {
    export type AsObject = {
        results?: OrderProto.AsObject,
    }
}

export class OrderProto extends jspb.Message { 
    getId(): string;
    setId(value: string): OrderProto;

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): OrderHeaderProto | undefined;
    setHeader(value?: OrderHeaderProto): OrderProto;
    clearLinesList(): void;
    getLinesList(): Array<OrderLineProto>;
    setLinesList(value: Array<OrderLineProto>): OrderProto;
    addLines(value?: OrderLineProto, index?: number): OrderLineProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderProto.AsObject;
    static toObject(includeInstance: boolean, msg: OrderProto): OrderProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderProto;
    static deserializeBinaryFromReader(message: OrderProto, reader: jspb.BinaryReader): OrderProto;
}

export namespace OrderProto {
    export type AsObject = {
        id: string,
        header?: OrderHeaderProto.AsObject,
        linesList: Array<OrderLineProto.AsObject>,
    }
}

export class OrderFilterProto extends jspb.Message { 

    hasMaximumResults(): boolean;
    clearMaximumResults(): void;
    getMaximumResults(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setMaximumResults(value?: google_protobuf_wrappers_pb.Int32Value): OrderFilterProto;

    hasSingleOutletId(): boolean;
    clearSingleOutletId(): void;
    getSingleOutletId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSingleOutletId(value?: google_protobuf_wrappers_pb.StringValue): OrderFilterProto;

    hasSingleGroupId(): boolean;
    clearSingleGroupId(): void;
    getSingleGroupId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSingleGroupId(value?: google_protobuf_wrappers_pb.StringValue): OrderFilterProto;

    hasFromDeliveryDate(): boolean;
    clearFromDeliveryDate(): void;
    getFromDeliveryDate(): google_type_date_pb.Date | undefined;
    setFromDeliveryDate(value?: google_type_date_pb.Date): OrderFilterProto;

    hasToDeliveryDate(): boolean;
    clearToDeliveryDate(): void;
    getToDeliveryDate(): google_type_date_pb.Date | undefined;
    setToDeliveryDate(value?: google_type_date_pb.Date): OrderFilterProto;

    hasFromDutyReturnDate(): boolean;
    clearFromDutyReturnDate(): void;
    getFromDutyReturnDate(): google_type_date_pb.Date | undefined;
    setFromDutyReturnDate(value?: google_type_date_pb.Date): OrderFilterProto;

    hasToDutyReturnDate(): boolean;
    clearToDutyReturnDate(): void;
    getToDutyReturnDate(): google_type_date_pb.Date | undefined;
    setToDutyReturnDate(value?: google_type_date_pb.Date): OrderFilterProto;

    hasFromDespatchDate(): boolean;
    clearFromDespatchDate(): void;
    getFromDespatchDate(): google_type_date_pb.Date | undefined;
    setFromDespatchDate(value?: google_type_date_pb.Date): OrderFilterProto;

    hasToDespatchDate(): boolean;
    clearToDespatchDate(): void;
    getToDespatchDate(): google_type_date_pb.Date | undefined;
    setToDespatchDate(value?: google_type_date_pb.Date): OrderFilterProto;

    hasSources(): boolean;
    clearSources(): void;
    getSources(): common_enumarrayvalues_generated_pb.EnumOrderSourceArrayValue | undefined;
    setSources(value?: common_enumarrayvalues_generated_pb.EnumOrderSourceArrayValue): OrderFilterProto;

    hasDistributionTypes(): boolean;
    clearDistributionTypes(): void;
    getDistributionTypes(): common_enumarrayvalues_generated_pb.EnumDistributionTypeArrayValue | undefined;
    setDistributionTypes(value?: common_enumarrayvalues_generated_pb.EnumDistributionTypeArrayValue): OrderFilterProto;

    hasLimitCourierIdsForCourierOrders(): boolean;
    clearLimitCourierIdsForCourierOrders(): void;
    getLimitCourierIdsForCourierOrders(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitCourierIdsForCourierOrders(value?: common_arrayvalues_pb.StringArrayValue): OrderFilterProto;

    hasExternalReferences(): boolean;
    clearExternalReferences(): void;
    getExternalReferences(): common_arrayvalues_pb.StringArrayValue | undefined;
    setExternalReferences(value?: common_arrayvalues_pb.StringArrayValue): OrderFilterProto;

    hasOrderNumbers(): boolean;
    clearOrderNumbers(): void;
    getOrderNumbers(): common_arrayvalues_pb.StringArrayValue | undefined;
    setOrderNumbers(value?: common_arrayvalues_pb.StringArrayValue): OrderFilterProto;

    hasInvoiceNumbers(): boolean;
    clearInvoiceNumbers(): void;
    getInvoiceNumbers(): common_arrayvalues_pb.StringArrayValue | undefined;
    setInvoiceNumbers(value?: common_arrayvalues_pb.StringArrayValue): OrderFilterProto;

    hasLimitStatuses(): boolean;
    clearLimitStatuses(): void;
    getLimitStatuses(): common_enumarrayvalues_generated_pb.EnumOrderStatusArrayValue | undefined;
    setLimitStatuses(value?: common_enumarrayvalues_generated_pb.EnumOrderStatusArrayValue): OrderFilterProto;

    hasLimitOrderHeaderIds(): boolean;
    clearLimitOrderHeaderIds(): void;
    getLimitOrderHeaderIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitOrderHeaderIds(value?: common_arrayvalues_pb.StringArrayValue): OrderFilterProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderFilterProto.AsObject;
    static toObject(includeInstance: boolean, msg: OrderFilterProto): OrderFilterProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderFilterProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderFilterProto;
    static deserializeBinaryFromReader(message: OrderFilterProto, reader: jspb.BinaryReader): OrderFilterProto;
}

export namespace OrderFilterProto {
    export type AsObject = {
        maximumResults?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        singleOutletId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        singleGroupId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        fromDeliveryDate?: google_type_date_pb.Date.AsObject,
        toDeliveryDate?: google_type_date_pb.Date.AsObject,
        fromDutyReturnDate?: google_type_date_pb.Date.AsObject,
        toDutyReturnDate?: google_type_date_pb.Date.AsObject,
        fromDespatchDate?: google_type_date_pb.Date.AsObject,
        toDespatchDate?: google_type_date_pb.Date.AsObject,
        sources?: common_enumarrayvalues_generated_pb.EnumOrderSourceArrayValue.AsObject,
        distributionTypes?: common_enumarrayvalues_generated_pb.EnumDistributionTypeArrayValue.AsObject,
        limitCourierIdsForCourierOrders?: common_arrayvalues_pb.StringArrayValue.AsObject,
        externalReferences?: common_arrayvalues_pb.StringArrayValue.AsObject,
        orderNumbers?: common_arrayvalues_pb.StringArrayValue.AsObject,
        invoiceNumbers?: common_arrayvalues_pb.StringArrayValue.AsObject,
        limitStatuses?: common_enumarrayvalues_generated_pb.EnumOrderStatusArrayValue.AsObject,
        limitOrderHeaderIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
    }
}

export class FilteredOrdersResultProto extends jspb.Message { 
    getMatchingCount(): number;
    setMatchingCount(value: number): FilteredOrdersResultProto;
    clearOrdersList(): void;
    getOrdersList(): Array<OrderProto>;
    setOrdersList(value: Array<OrderProto>): FilteredOrdersResultProto;
    addOrders(value?: OrderProto, index?: number): OrderProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilteredOrdersResultProto.AsObject;
    static toObject(includeInstance: boolean, msg: FilteredOrdersResultProto): FilteredOrdersResultProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilteredOrdersResultProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilteredOrdersResultProto;
    static deserializeBinaryFromReader(message: FilteredOrdersResultProto, reader: jspb.BinaryReader): FilteredOrdersResultProto;
}

export namespace FilteredOrdersResultProto {
    export type AsObject = {
        matchingCount: number,
        ordersList: Array<OrderProto.AsObject>,
    }
}

export class OrderHeaderProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): OrderHeaderProto;
    getOrderId(): string;
    setOrderId(value: string): OrderHeaderProto;

    hasCollectionTimeId(): boolean;
    clearCollectionTimeId(): void;
    getCollectionTimeId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCollectionTimeId(value?: google_protobuf_wrappers_pb.StringValue): OrderHeaderProto;

    hasCourierId(): boolean;
    clearCourierId(): void;
    getCourierId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCourierId(value?: google_protobuf_wrappers_pb.StringValue): OrderHeaderProto;
    getCreditTermsDescription(): string;
    setCreditTermsDescription(value: string): OrderHeaderProto;
    getCustomerReference(): string;
    setCustomerReference(value: string): OrderHeaderProto;
    getDeliveryAddressBusiness(): string;
    setDeliveryAddressBusiness(value: string): OrderHeaderProto;
    getDeliveryAddress1(): string;
    setDeliveryAddress1(value: string): OrderHeaderProto;
    getDeliveryAddress2(): string;
    setDeliveryAddress2(value: string): OrderHeaderProto;
    getDeliveryAddress3(): string;
    setDeliveryAddress3(value: string): OrderHeaderProto;
    getDeliveryAddress4(): string;
    setDeliveryAddress4(value: string): OrderHeaderProto;
    getDeliveryAddress5(): string;
    setDeliveryAddress5(value: string): OrderHeaderProto;
    getDeliveryAddress6(): string;
    setDeliveryAddress6(value: string): OrderHeaderProto;

    hasDeliveryAreaId(): boolean;
    clearDeliveryAreaId(): void;
    getDeliveryAreaId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDeliveryAreaId(value?: google_protobuf_wrappers_pb.StringValue): OrderHeaderProto;

    hasDeliveryDate(): boolean;
    clearDeliveryDate(): void;
    getDeliveryDate(): google_type_date_pb.Date | undefined;
    setDeliveryDate(value?: google_type_date_pb.Date): OrderHeaderProto;
    getDeliveryEmailAddress(): string;
    setDeliveryEmailAddress(value: string): OrderHeaderProto;
    getExternalDispatchNotes(): string;
    setExternalDispatchNotes(value: string): OrderHeaderProto;
    getDeliveryPostcode(): string;
    setDeliveryPostcode(value: string): OrderHeaderProto;
    getDeliveryRecipient(): string;
    setDeliveryRecipient(value: string): OrderHeaderProto;
    getDeliveryTelephoneNumber(): string;
    setDeliveryTelephoneNumber(value: string): OrderHeaderProto;

    hasDeliveryTimeEnd(): boolean;
    clearDeliveryTimeEnd(): void;
    getDeliveryTimeEnd(): google_type_timeofday_pb.TimeOfDay | undefined;
    setDeliveryTimeEnd(value?: google_type_timeofday_pb.TimeOfDay): OrderHeaderProto;

    hasDeliveryTimeStart(): boolean;
    clearDeliveryTimeStart(): void;
    getDeliveryTimeStart(): google_type_timeofday_pb.TimeOfDay | undefined;
    setDeliveryTimeStart(value?: google_type_timeofday_pb.TimeOfDay): OrderHeaderProto;

    hasDespatchDate(): boolean;
    clearDespatchDate(): void;
    getDespatchDate(): google_type_date_pb.Date | undefined;
    setDespatchDate(value?: google_type_date_pb.Date): OrderHeaderProto;
    getDistributionType(): common_enums_generated_pb.EnumDistributionType;
    setDistributionType(value: common_enums_generated_pb.EnumDistributionType): OrderHeaderProto;

    hasDutyReturnDateOverride(): boolean;
    clearDutyReturnDateOverride(): void;
    getDutyReturnDateOverride(): google_type_date_pb.Date | undefined;
    setDutyReturnDateOverride(value?: google_type_date_pb.Date): OrderHeaderProto;
    getInvoiceSent(): boolean;
    setInvoiceSent(value: boolean): OrderHeaderProto;
    getInvoiceAddressBusiness(): string;
    setInvoiceAddressBusiness(value: string): OrderHeaderProto;
    getInvoiceAddress1(): string;
    setInvoiceAddress1(value: string): OrderHeaderProto;
    getInvoiceAddress2(): string;
    setInvoiceAddress2(value: string): OrderHeaderProto;
    getInvoiceAddress3(): string;
    setInvoiceAddress3(value: string): OrderHeaderProto;
    getInvoiceAddress4(): string;
    setInvoiceAddress4(value: string): OrderHeaderProto;
    getInvoiceAddress5(): string;
    setInvoiceAddress5(value: string): OrderHeaderProto;
    getInvoiceAddress6(): string;
    setInvoiceAddress6(value: string): OrderHeaderProto;
    getInvoiceEmailAddress(): string;
    setInvoiceEmailAddress(value: string): OrderHeaderProto;
    getInvoicePostcode(): string;
    setInvoicePostcode(value: string): OrderHeaderProto;
    getInvoiceRecipient(): string;
    setInvoiceRecipient(value: string): OrderHeaderProto;
    getOurReference(): string;
    setOurReference(value: string): OrderHeaderProto;
    getOutletRatingId(): string;
    setOutletRatingId(value: string): OrderHeaderProto;

    hasOutletTypeId(): boolean;
    clearOutletTypeId(): void;
    getOutletTypeId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOutletTypeId(value?: google_protobuf_wrappers_pb.StringValue): OrderHeaderProto;
    getPriceListId(): string;
    setPriceListId(value: string): OrderHeaderProto;
    getRetailPaymentMethod(): common_enums_generated_pb.EnumRetailPaymentMethod;
    setRetailPaymentMethod(value: common_enums_generated_pb.EnumRetailPaymentMethod): OrderHeaderProto;

    hasSalesAreaId(): boolean;
    clearSalesAreaId(): void;
    getSalesAreaId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSalesAreaId(value?: google_protobuf_wrappers_pb.StringValue): OrderHeaderProto;

    hasSalesCodeId(): boolean;
    clearSalesCodeId(): void;
    getSalesCodeId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSalesCodeId(value?: google_protobuf_wrappers_pb.StringValue): OrderHeaderProto;
    getSalesOrderNotes(): string;
    setSalesOrderNotes(value: string): OrderHeaderProto;
    getStandardOrderType(): common_enums_generated_pb.EnumStandardOrder;
    setStandardOrderType(value: common_enums_generated_pb.EnumStandardOrder): OrderHeaderProto;
    getStopMinutes(): number;
    setStopMinutes(value: number): OrderHeaderProto;
    getTrackingReference(): string;
    setTrackingReference(value: string): OrderHeaderProto;
    getVatCodeId(): string;
    setVatCodeId(value: string): OrderHeaderProto;

    hasReadOnly(): boolean;
    clearReadOnly(): void;
    getReadOnly(): OrderHeaderReadOnlyProto | undefined;
    setReadOnly(value?: OrderHeaderReadOnlyProto): OrderHeaderProto;
    getInternalDispatchNotes(): string;
    setInternalDispatchNotes(value: string): OrderHeaderProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderHeaderProto.AsObject;
    static toObject(includeInstance: boolean, msg: OrderHeaderProto): OrderHeaderProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderHeaderProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderHeaderProto;
    static deserializeBinaryFromReader(message: OrderHeaderProto, reader: jspb.BinaryReader): OrderHeaderProto;
}

export namespace OrderHeaderProto {
    export type AsObject = {
        version: number,
        orderId: string,
        collectionTimeId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        courierId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        creditTermsDescription: string,
        customerReference: string,
        deliveryAddressBusiness: string,
        deliveryAddress1: string,
        deliveryAddress2: string,
        deliveryAddress3: string,
        deliveryAddress4: string,
        deliveryAddress5: string,
        deliveryAddress6: string,
        deliveryAreaId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        deliveryDate?: google_type_date_pb.Date.AsObject,
        deliveryEmailAddress: string,
        externalDispatchNotes: string,
        deliveryPostcode: string,
        deliveryRecipient: string,
        deliveryTelephoneNumber: string,
        deliveryTimeEnd?: google_type_timeofday_pb.TimeOfDay.AsObject,
        deliveryTimeStart?: google_type_timeofday_pb.TimeOfDay.AsObject,
        despatchDate?: google_type_date_pb.Date.AsObject,
        distributionType: common_enums_generated_pb.EnumDistributionType,
        dutyReturnDateOverride?: google_type_date_pb.Date.AsObject,
        invoiceSent: boolean,
        invoiceAddressBusiness: string,
        invoiceAddress1: string,
        invoiceAddress2: string,
        invoiceAddress3: string,
        invoiceAddress4: string,
        invoiceAddress5: string,
        invoiceAddress6: string,
        invoiceEmailAddress: string,
        invoicePostcode: string,
        invoiceRecipient: string,
        ourReference: string,
        outletRatingId: string,
        outletTypeId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        priceListId: string,
        retailPaymentMethod: common_enums_generated_pb.EnumRetailPaymentMethod,
        salesAreaId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        salesCodeId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        salesOrderNotes: string,
        standardOrderType: common_enums_generated_pb.EnumStandardOrder,
        stopMinutes: number,
        trackingReference: string,
        vatCodeId: string,
        readOnly?: OrderHeaderReadOnlyProto.AsObject,
        internalDispatchNotes: string,
    }
}

export class OrderLineProto extends jspb.Message { 
    getId(): string;
    setId(value: string): OrderLineProto;
    getOrderId(): string;
    setOrderId(value: string): OrderLineProto;
    getProductName(): string;
    setProductName(value: string): OrderLineProto;
    getQuantity(): number;
    setQuantity(value: number): OrderLineProto;
    getStockLocationId(): string;
    setStockLocationId(value: string): OrderLineProto;
    getUnitListNetPrice(): number;
    setUnitListNetPrice(value: number): OrderLineProto;

    hasUnitListGrossPriceForRounding(): boolean;
    clearUnitListGrossPriceForRounding(): void;
    getUnitListGrossPriceForRounding(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setUnitListGrossPriceForRounding(value?: google_protobuf_wrappers_pb.DoubleValue): OrderLineProto;
    getUnitOfMeasureId(): string;
    setUnitOfMeasureId(value: string): OrderLineProto;
    getAbv(): number;
    setAbv(value: number): OrderLineProto;
    getAlcoholType(): common_enums_generated_pb.EnumAlcoholType;
    setAlcoholType(value: common_enums_generated_pb.EnumAlcoholType): OrderLineProto;
    getGlCodeId(): string;
    setGlCodeId(value: string): OrderLineProto;
    getLineCostNetPrice(): number;
    setLineCostNetPrice(value: number): OrderLineProto;
    getLineNetPrice(): number;
    setLineNetPrice(value: number): OrderLineProto;
    getLineVat(): number;
    setLineVat(value: number): OrderLineProto;

    hasManufacturerId(): boolean;
    clearManufacturerId(): void;
    getManufacturerId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setManufacturerId(value?: google_protobuf_wrappers_pb.StringValue): OrderLineProto;

    hasProductBrandId(): boolean;
    clearProductBrandId(): void;
    getProductBrandId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setProductBrandId(value?: google_protobuf_wrappers_pb.StringValue): OrderLineProto;
    getProductCode(): string;
    setProductCode(value: string): OrderLineProto;
    getStockItemId(): string;
    setStockItemId(value: string): OrderLineProto;
    getUnitCostNetPrice(): number;
    setUnitCostNetPrice(value: number): OrderLineProto;
    getUnitDutiableLitres(): number;
    setUnitDutiableLitres(value: number): OrderLineProto;
    getUnitLitres(): number;
    setUnitLitres(value: number): OrderLineProto;
    getUnitNetPrice(): number;
    setUnitNetPrice(value: number): OrderLineProto;
    getUnitWeight(): number;
    setUnitWeight(value: number): OrderLineProto;
    getVatPercentage(): number;
    setVatPercentage(value: number): OrderLineProto;
    getVatCodeId(): string;
    setVatCodeId(value: string): OrderLineProto;
    getDiscountBasis(): common_enums_generated_pb.EnumDiscountBasis;
    setDiscountBasis(value: common_enums_generated_pb.EnumDiscountBasis): OrderLineProto;
    getDiscountLevel(): number;
    setDiscountLevel(value: number): OrderLineProto;
    getIsDiscountAutomatic(): boolean;
    setIsDiscountAutomatic(value: boolean): OrderLineProto;

    hasPricingCategoryId(): boolean;
    clearPricingCategoryId(): void;
    getPricingCategoryId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPricingCategoryId(value?: google_protobuf_wrappers_pb.StringValue): OrderLineProto;

    hasReadOnly(): boolean;
    clearReadOnly(): void;
    getReadOnly(): OrderLineReadOnlyProto | undefined;
    setReadOnly(value?: OrderLineReadOnlyProto): OrderLineProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderLineProto.AsObject;
    static toObject(includeInstance: boolean, msg: OrderLineProto): OrderLineProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderLineProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderLineProto;
    static deserializeBinaryFromReader(message: OrderLineProto, reader: jspb.BinaryReader): OrderLineProto;
}

export namespace OrderLineProto {
    export type AsObject = {
        id: string,
        orderId: string,
        productName: string,
        quantity: number,
        stockLocationId: string,
        unitListNetPrice: number,
        unitListGrossPriceForRounding?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        unitOfMeasureId: string,
        abv: number,
        alcoholType: common_enums_generated_pb.EnumAlcoholType,
        glCodeId: string,
        lineCostNetPrice: number,
        lineNetPrice: number,
        lineVat: number,
        manufacturerId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        productBrandId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        productCode: string,
        stockItemId: string,
        unitCostNetPrice: number,
        unitDutiableLitres: number,
        unitLitres: number,
        unitNetPrice: number,
        unitWeight: number,
        vatPercentage: number,
        vatCodeId: string,
        discountBasis: common_enums_generated_pb.EnumDiscountBasis,
        discountLevel: number,
        isDiscountAutomatic: boolean,
        pricingCategoryId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        readOnly?: OrderLineReadOnlyProto.AsObject,
    }
}

export class OrderHeaderReadOnlyProto extends jspb.Message { 
    getCancellationReason(): string;
    setCancellationReason(value: string): OrderHeaderReadOnlyProto;

    hasCancelledByUserId(): boolean;
    clearCancelledByUserId(): void;
    getCancelledByUserId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCancelledByUserId(value?: google_protobuf_wrappers_pb.StringValue): OrderHeaderReadOnlyProto;

    hasCancelledAt(): boolean;
    clearCancelledAt(): void;
    getCancelledAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCancelledAt(value?: google_protobuf_timestamp_pb.Timestamp): OrderHeaderReadOnlyProto;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OrderHeaderReadOnlyProto;
    getCreatedByUserId(): string;
    setCreatedByUserId(value: string): OrderHeaderReadOnlyProto;
    getCurrentPostingError(): string;
    setCurrentPostingError(value: string): OrderHeaderReadOnlyProto;

    hasDeliveryLatitude(): boolean;
    clearDeliveryLatitude(): void;
    getDeliveryLatitude(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setDeliveryLatitude(value?: google_protobuf_wrappers_pb.DoubleValue): OrderHeaderReadOnlyProto;

    hasDeliveryLongitude(): boolean;
    clearDeliveryLongitude(): void;
    getDeliveryLongitude(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setDeliveryLongitude(value?: google_protobuf_wrappers_pb.DoubleValue): OrderHeaderReadOnlyProto;
    getExternalReference(): string;
    setExternalReference(value: string): OrderHeaderReadOnlyProto;

    hasGroupId(): boolean;
    clearGroupId(): void;
    getGroupId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGroupId(value?: google_protobuf_wrappers_pb.StringValue): OrderHeaderReadOnlyProto;
    getHasStockBeenAdjusted(): boolean;
    setHasStockBeenAdjusted(value: boolean): OrderHeaderReadOnlyProto;
    getIsRetailOrder(): boolean;
    setIsRetailOrder(value: boolean): OrderHeaderReadOnlyProto;
    getInvoiceNumber(): string;
    setInvoiceNumber(value: string): OrderHeaderReadOnlyProto;

    hasLastUpdatedAt(): boolean;
    clearLastUpdatedAt(): void;
    getLastUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OrderHeaderReadOnlyProto;
    getOrderNumber(): string;
    setOrderNumber(value: string): OrderHeaderReadOnlyProto;
    getOrderSource(): common_enums_generated_pb.EnumOrderSource;
    setOrderSource(value: common_enums_generated_pb.EnumOrderSource): OrderHeaderReadOnlyProto;
    getOutletId(): string;
    setOutletId(value: string): OrderHeaderReadOnlyProto;
    getStatus(): common_enums_generated_pb.EnumOrderStatus;
    setStatus(value: common_enums_generated_pb.EnumOrderStatus): OrderHeaderReadOnlyProto;
    getTotalCostNet(): number;
    setTotalCostNet(value: number): OrderHeaderReadOnlyProto;
    getTotalNetPrice(): number;
    setTotalNetPrice(value: number): OrderHeaderReadOnlyProto;
    getTotalVat(): number;
    setTotalVat(value: number): OrderHeaderReadOnlyProto;
    getTotalApproximateDutyCostOfSale(): number;
    setTotalApproximateDutyCostOfSale(value: number): OrderHeaderReadOnlyProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderHeaderReadOnlyProto.AsObject;
    static toObject(includeInstance: boolean, msg: OrderHeaderReadOnlyProto): OrderHeaderReadOnlyProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderHeaderReadOnlyProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderHeaderReadOnlyProto;
    static deserializeBinaryFromReader(message: OrderHeaderReadOnlyProto, reader: jspb.BinaryReader): OrderHeaderReadOnlyProto;
}

export namespace OrderHeaderReadOnlyProto {
    export type AsObject = {
        cancellationReason: string,
        cancelledByUserId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        cancelledAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdByUserId: string,
        currentPostingError: string,
        deliveryLatitude?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        deliveryLongitude?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        externalReference: string,
        groupId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        hasStockBeenAdjusted: boolean,
        isRetailOrder: boolean,
        invoiceNumber: string,
        lastUpdatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        orderNumber: string,
        orderSource: common_enums_generated_pb.EnumOrderSource,
        outletId: string,
        status: common_enums_generated_pb.EnumOrderStatus,
        totalCostNet: number,
        totalNetPrice: number,
        totalVat: number,
        totalApproximateDutyCostOfSale: number,
    }
}

export class OrderLineReadOnlyProto extends jspb.Message { 
    getApproximateDutyCostOfSale(): number;
    setApproximateDutyCostOfSale(value: number): OrderLineReadOnlyProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderLineReadOnlyProto.AsObject;
    static toObject(includeInstance: boolean, msg: OrderLineReadOnlyProto): OrderLineReadOnlyProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderLineReadOnlyProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderLineReadOnlyProto;
    static deserializeBinaryFromReader(message: OrderLineReadOnlyProto, reader: jspb.BinaryReader): OrderLineReadOnlyProto;
}

export namespace OrderLineReadOnlyProto {
    export type AsObject = {
        approximateDutyCostOfSale: number,
    }
}
