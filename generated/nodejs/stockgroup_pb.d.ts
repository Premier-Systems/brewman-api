// package: bmapi.stocks.stockgroup
// file: stockgroup.proto

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

export class GetAllStockGroupsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllStockGroupsRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllStockGroupsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllStockGroupsRequestProto): GetAllStockGroupsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllStockGroupsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllStockGroupsRequestProto;
    static deserializeBinaryFromReader(message: GetAllStockGroupsRequestProto, reader: jspb.BinaryReader): GetAllStockGroupsRequestProto;
}

export namespace GetAllStockGroupsRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllStockGroupsResponseProto extends jspb.Message { 
    clearStockGroupsList(): void;
    getStockGroupsList(): Array<StockGroupProto>;
    setStockGroupsList(value: Array<StockGroupProto>): GetAllStockGroupsResponseProto;
    addStockGroups(value?: StockGroupProto, index?: number): StockGroupProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllStockGroupsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllStockGroupsResponseProto): GetAllStockGroupsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllStockGroupsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllStockGroupsResponseProto;
    static deserializeBinaryFromReader(message: GetAllStockGroupsResponseProto, reader: jspb.BinaryReader): GetAllStockGroupsResponseProto;
}

export namespace GetAllStockGroupsResponseProto {
    export type AsObject = {
        stockGroupsList: Array<StockGroupProto.AsObject>,
    }
}

export class GetStockGroupRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetStockGroupRequestProto;
    getStockGroupId(): string;
    setStockGroupId(value: string): GetStockGroupRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockGroupRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockGroupRequestProto): GetStockGroupRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockGroupRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockGroupRequestProto;
    static deserializeBinaryFromReader(message: GetStockGroupRequestProto, reader: jspb.BinaryReader): GetStockGroupRequestProto;
}

export namespace GetStockGroupRequestProto {
    export type AsObject = {
        tenantId: string,
        stockGroupId: string,
    }
}

export class GetStockGroupResponseProto extends jspb.Message { 

    hasStockGroup(): boolean;
    clearStockGroup(): void;
    getStockGroup(): StockGroupProto | undefined;
    setStockGroup(value?: StockGroupProto): GetStockGroupResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockGroupResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockGroupResponseProto): GetStockGroupResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockGroupResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockGroupResponseProto;
    static deserializeBinaryFromReader(message: GetStockGroupResponseProto, reader: jspb.BinaryReader): GetStockGroupResponseProto;
}

export namespace GetStockGroupResponseProto {
    export type AsObject = {
        stockGroup?: StockGroupProto.AsObject,
    }
}

export class SaveStockGroupRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SaveStockGroupRequestProto;

    hasStockGroup(): boolean;
    clearStockGroup(): void;
    getStockGroup(): StockGroupProto | undefined;
    setStockGroup(value?: StockGroupProto): SaveStockGroupRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveStockGroupRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveStockGroupRequestProto): SaveStockGroupRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveStockGroupRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveStockGroupRequestProto;
    static deserializeBinaryFromReader(message: SaveStockGroupRequestProto, reader: jspb.BinaryReader): SaveStockGroupRequestProto;
}

export namespace SaveStockGroupRequestProto {
    export type AsObject = {
        tenantId: string,
        stockGroup?: StockGroupProto.AsObject,
    }
}

export class SaveStockGroupResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveStockGroupResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveStockGroupResponseProto): SaveStockGroupResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveStockGroupResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveStockGroupResponseProto;
    static deserializeBinaryFromReader(message: SaveStockGroupResponseProto, reader: jspb.BinaryReader): SaveStockGroupResponseProto;
}

export namespace SaveStockGroupResponseProto {
    export type AsObject = {
    }
}

export class GetStockGroupsByIdRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetStockGroupsByIdRequestProto;
    clearStockGroupIdsList(): void;
    getStockGroupIdsList(): Array<string>;
    setStockGroupIdsList(value: Array<string>): GetStockGroupsByIdRequestProto;
    addStockGroupIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockGroupsByIdRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockGroupsByIdRequestProto): GetStockGroupsByIdRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockGroupsByIdRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockGroupsByIdRequestProto;
    static deserializeBinaryFromReader(message: GetStockGroupsByIdRequestProto, reader: jspb.BinaryReader): GetStockGroupsByIdRequestProto;
}

export namespace GetStockGroupsByIdRequestProto {
    export type AsObject = {
        tenantId: string,
        stockGroupIdsList: Array<string>,
    }
}

export class GetStockGroupsByIdResponseProto extends jspb.Message { 
    clearStockGroupsList(): void;
    getStockGroupsList(): Array<StockGroupProto>;
    setStockGroupsList(value: Array<StockGroupProto>): GetStockGroupsByIdResponseProto;
    addStockGroups(value?: StockGroupProto, index?: number): StockGroupProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockGroupsByIdResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockGroupsByIdResponseProto): GetStockGroupsByIdResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockGroupsByIdResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockGroupsByIdResponseProto;
    static deserializeBinaryFromReader(message: GetStockGroupsByIdResponseProto, reader: jspb.BinaryReader): GetStockGroupsByIdResponseProto;
}

export namespace GetStockGroupsByIdResponseProto {
    export type AsObject = {
        stockGroupsList: Array<StockGroupProto.AsObject>,
    }
}

export class StockGroupProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): StockGroupProto;
    getId(): string;
    setId(value: string): StockGroupProto;
    getName(): string;
    setName(value: string): StockGroupProto;
    getRestrictedStock(): boolean;
    setRestrictedStock(value: boolean): StockGroupProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): StockGroupProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StockGroupProto.AsObject;
    static toObject(includeInstance: boolean, msg: StockGroupProto): StockGroupProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StockGroupProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StockGroupProto;
    static deserializeBinaryFromReader(message: StockGroupProto, reader: jspb.BinaryReader): StockGroupProto;
}

export namespace StockGroupProto {
    export type AsObject = {
        version: number,
        id: string,
        name: string,
        restrictedStock: boolean,
        isHidden: boolean,
    }
}
