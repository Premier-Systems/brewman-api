// package: bmapi.stocks.stock
// file: stock.proto

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

export class GetStockItemsQuantityCurrentlyInStockRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetStockItemsQuantityCurrentlyInStockRequestProto;

    hasLimitStockLocationIds(): boolean;
    clearLimitStockLocationIds(): void;
    getLimitStockLocationIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitStockLocationIds(value?: common_arrayvalues_pb.StringArrayValue): GetStockItemsQuantityCurrentlyInStockRequestProto;

    hasLimitStockItemIds(): boolean;
    clearLimitStockItemIds(): void;
    getLimitStockItemIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitStockItemIds(value?: common_arrayvalues_pb.StringArrayValue): GetStockItemsQuantityCurrentlyInStockRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockItemsQuantityCurrentlyInStockRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockItemsQuantityCurrentlyInStockRequestProto): GetStockItemsQuantityCurrentlyInStockRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockItemsQuantityCurrentlyInStockRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockItemsQuantityCurrentlyInStockRequestProto;
    static deserializeBinaryFromReader(message: GetStockItemsQuantityCurrentlyInStockRequestProto, reader: jspb.BinaryReader): GetStockItemsQuantityCurrentlyInStockRequestProto;
}

export namespace GetStockItemsQuantityCurrentlyInStockRequestProto {
    export type AsObject = {
        tenantId: string,
        limitStockLocationIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
        limitStockItemIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
    }
}

export class GetStockItemsQuantityCurrentlyInStockResponseProto extends jspb.Message { 
    clearStockLevelsList(): void;
    getStockLevelsList(): Array<StockItemStockSumProto>;
    setStockLevelsList(value: Array<StockItemStockSumProto>): GetStockItemsQuantityCurrentlyInStockResponseProto;
    addStockLevels(value?: StockItemStockSumProto, index?: number): StockItemStockSumProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockItemsQuantityCurrentlyInStockResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockItemsQuantityCurrentlyInStockResponseProto): GetStockItemsQuantityCurrentlyInStockResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockItemsQuantityCurrentlyInStockResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockItemsQuantityCurrentlyInStockResponseProto;
    static deserializeBinaryFromReader(message: GetStockItemsQuantityCurrentlyInStockResponseProto, reader: jspb.BinaryReader): GetStockItemsQuantityCurrentlyInStockResponseProto;
}

export namespace GetStockItemsQuantityCurrentlyInStockResponseProto {
    export type AsObject = {
        stockLevelsList: Array<StockItemStockSumProto.AsObject>,
    }
}

export class StockItemStockSumProto extends jspb.Message { 
    getStockLocationId(): string;
    setStockLocationId(value: string): StockItemStockSumProto;
    getStockItemId(): string;
    setStockItemId(value: string): StockItemStockSumProto;
    getQuantity(): number;
    setQuantity(value: number): StockItemStockSumProto;
    getUnitOfMeasureId(): string;
    setUnitOfMeasureId(value: string): StockItemStockSumProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StockItemStockSumProto.AsObject;
    static toObject(includeInstance: boolean, msg: StockItemStockSumProto): StockItemStockSumProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StockItemStockSumProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StockItemStockSumProto;
    static deserializeBinaryFromReader(message: StockItemStockSumProto, reader: jspb.BinaryReader): StockItemStockSumProto;
}

export namespace StockItemStockSumProto {
    export type AsObject = {
        stockLocationId: string,
        stockItemId: string,
        quantity: number,
        unitOfMeasureId: string,
    }
}
