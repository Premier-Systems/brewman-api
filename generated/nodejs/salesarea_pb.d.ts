// package: bmapi.outlets.salesarea
// file: salesarea.proto

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

export class GetAllSalesAreasRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllSalesAreasRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllSalesAreasRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllSalesAreasRequestProto): GetAllSalesAreasRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllSalesAreasRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllSalesAreasRequestProto;
    static deserializeBinaryFromReader(message: GetAllSalesAreasRequestProto, reader: jspb.BinaryReader): GetAllSalesAreasRequestProto;
}

export namespace GetAllSalesAreasRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllSalesAreasResponseProto extends jspb.Message { 
    clearSalesAreasList(): void;
    getSalesAreasList(): Array<SalesAreaProto>;
    setSalesAreasList(value: Array<SalesAreaProto>): GetAllSalesAreasResponseProto;
    addSalesAreas(value?: SalesAreaProto, index?: number): SalesAreaProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllSalesAreasResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllSalesAreasResponseProto): GetAllSalesAreasResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllSalesAreasResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllSalesAreasResponseProto;
    static deserializeBinaryFromReader(message: GetAllSalesAreasResponseProto, reader: jspb.BinaryReader): GetAllSalesAreasResponseProto;
}

export namespace GetAllSalesAreasResponseProto {
    export type AsObject = {
        salesAreasList: Array<SalesAreaProto.AsObject>,
    }
}

export class GetSalesAreasRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetSalesAreasRequestProto;
    clearSalesAreaIdsList(): void;
    getSalesAreaIdsList(): Array<string>;
    setSalesAreaIdsList(value: Array<string>): GetSalesAreasRequestProto;
    addSalesAreaIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSalesAreasRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetSalesAreasRequestProto): GetSalesAreasRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSalesAreasRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSalesAreasRequestProto;
    static deserializeBinaryFromReader(message: GetSalesAreasRequestProto, reader: jspb.BinaryReader): GetSalesAreasRequestProto;
}

export namespace GetSalesAreasRequestProto {
    export type AsObject = {
        tenantId: string,
        salesAreaIdsList: Array<string>,
    }
}

export class GetSalesAreasResponseProto extends jspb.Message { 
    clearSalesAreasList(): void;
    getSalesAreasList(): Array<SalesAreaProto>;
    setSalesAreasList(value: Array<SalesAreaProto>): GetSalesAreasResponseProto;
    addSalesAreas(value?: SalesAreaProto, index?: number): SalesAreaProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSalesAreasResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetSalesAreasResponseProto): GetSalesAreasResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSalesAreasResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSalesAreasResponseProto;
    static deserializeBinaryFromReader(message: GetSalesAreasResponseProto, reader: jspb.BinaryReader): GetSalesAreasResponseProto;
}

export namespace GetSalesAreasResponseProto {
    export type AsObject = {
        salesAreasList: Array<SalesAreaProto.AsObject>,
    }
}

export class SaveSalesAreasRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SaveSalesAreasRequestProto;
    clearSalesAreasList(): void;
    getSalesAreasList(): Array<SalesAreaProto>;
    setSalesAreasList(value: Array<SalesAreaProto>): SaveSalesAreasRequestProto;
    addSalesAreas(value?: SalesAreaProto, index?: number): SalesAreaProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveSalesAreasRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveSalesAreasRequestProto): SaveSalesAreasRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveSalesAreasRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveSalesAreasRequestProto;
    static deserializeBinaryFromReader(message: SaveSalesAreasRequestProto, reader: jspb.BinaryReader): SaveSalesAreasRequestProto;
}

export namespace SaveSalesAreasRequestProto {
    export type AsObject = {
        tenantId: string,
        salesAreasList: Array<SalesAreaProto.AsObject>,
    }
}

export class SaveSalesAreasResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveSalesAreasResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveSalesAreasResponseProto): SaveSalesAreasResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveSalesAreasResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveSalesAreasResponseProto;
    static deserializeBinaryFromReader(message: SaveSalesAreasResponseProto, reader: jspb.BinaryReader): SaveSalesAreasResponseProto;
}

export namespace SaveSalesAreasResponseProto {
    export type AsObject = {
    }
}

export class SetSalesAreaIsHiddenRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SetSalesAreaIsHiddenRequestProto;
    getSalesAreaId(): string;
    setSalesAreaId(value: string): SetSalesAreaIsHiddenRequestProto;
    getHide(): boolean;
    setHide(value: boolean): SetSalesAreaIsHiddenRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetSalesAreaIsHiddenRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetSalesAreaIsHiddenRequestProto): SetSalesAreaIsHiddenRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetSalesAreaIsHiddenRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetSalesAreaIsHiddenRequestProto;
    static deserializeBinaryFromReader(message: SetSalesAreaIsHiddenRequestProto, reader: jspb.BinaryReader): SetSalesAreaIsHiddenRequestProto;
}

export namespace SetSalesAreaIsHiddenRequestProto {
    export type AsObject = {
        tenantId: string,
        salesAreaId: string,
        hide: boolean,
    }
}

export class SetSalesAreaIsHiddenResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetSalesAreaIsHiddenResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetSalesAreaIsHiddenResponseProto): SetSalesAreaIsHiddenResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetSalesAreaIsHiddenResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetSalesAreaIsHiddenResponseProto;
    static deserializeBinaryFromReader(message: SetSalesAreaIsHiddenResponseProto, reader: jspb.BinaryReader): SetSalesAreaIsHiddenResponseProto;
}

export namespace SetSalesAreaIsHiddenResponseProto {
    export type AsObject = {
    }
}

export class SalesAreaProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): SalesAreaProto;
    getId(): string;
    setId(value: string): SalesAreaProto;
    getName(): string;
    setName(value: string): SalesAreaProto;
    getDescription(): string;
    setDescription(value: string): SalesAreaProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): SalesAreaProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SalesAreaProto.AsObject;
    static toObject(includeInstance: boolean, msg: SalesAreaProto): SalesAreaProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SalesAreaProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SalesAreaProto;
    static deserializeBinaryFromReader(message: SalesAreaProto, reader: jspb.BinaryReader): SalesAreaProto;
}

export namespace SalesAreaProto {
    export type AsObject = {
        version: number,
        id: string,
        name: string,
        description: string,
        isHidden: boolean,
    }
}
