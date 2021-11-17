// package: bmapi.outlets.salescode
// file: salescode.proto

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

export class GetAllSalesCodesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllSalesCodesRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllSalesCodesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllSalesCodesRequestProto): GetAllSalesCodesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllSalesCodesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllSalesCodesRequestProto;
    static deserializeBinaryFromReader(message: GetAllSalesCodesRequestProto, reader: jspb.BinaryReader): GetAllSalesCodesRequestProto;
}

export namespace GetAllSalesCodesRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllSalesCodesResponseProto extends jspb.Message { 
    clearSalesCodesList(): void;
    getSalesCodesList(): Array<SalesCodeProto>;
    setSalesCodesList(value: Array<SalesCodeProto>): GetAllSalesCodesResponseProto;
    addSalesCodes(value?: SalesCodeProto, index?: number): SalesCodeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllSalesCodesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllSalesCodesResponseProto): GetAllSalesCodesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllSalesCodesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllSalesCodesResponseProto;
    static deserializeBinaryFromReader(message: GetAllSalesCodesResponseProto, reader: jspb.BinaryReader): GetAllSalesCodesResponseProto;
}

export namespace GetAllSalesCodesResponseProto {
    export type AsObject = {
        salesCodesList: Array<SalesCodeProto.AsObject>,
    }
}

export class GetSalesCodesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetSalesCodesRequestProto;
    clearSalesCodeIdsList(): void;
    getSalesCodeIdsList(): Array<string>;
    setSalesCodeIdsList(value: Array<string>): GetSalesCodesRequestProto;
    addSalesCodeIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSalesCodesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetSalesCodesRequestProto): GetSalesCodesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSalesCodesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSalesCodesRequestProto;
    static deserializeBinaryFromReader(message: GetSalesCodesRequestProto, reader: jspb.BinaryReader): GetSalesCodesRequestProto;
}

export namespace GetSalesCodesRequestProto {
    export type AsObject = {
        tenantId: string,
        salesCodeIdsList: Array<string>,
    }
}

export class GetSalesCodesResponseProto extends jspb.Message { 
    clearSalesCodesList(): void;
    getSalesCodesList(): Array<SalesCodeProto>;
    setSalesCodesList(value: Array<SalesCodeProto>): GetSalesCodesResponseProto;
    addSalesCodes(value?: SalesCodeProto, index?: number): SalesCodeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSalesCodesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetSalesCodesResponseProto): GetSalesCodesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSalesCodesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSalesCodesResponseProto;
    static deserializeBinaryFromReader(message: GetSalesCodesResponseProto, reader: jspb.BinaryReader): GetSalesCodesResponseProto;
}

export namespace GetSalesCodesResponseProto {
    export type AsObject = {
        salesCodesList: Array<SalesCodeProto.AsObject>,
    }
}

export class SaveSalesCodesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SaveSalesCodesRequestProto;
    clearSalesCodesList(): void;
    getSalesCodesList(): Array<SalesCodeProto>;
    setSalesCodesList(value: Array<SalesCodeProto>): SaveSalesCodesRequestProto;
    addSalesCodes(value?: SalesCodeProto, index?: number): SalesCodeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveSalesCodesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveSalesCodesRequestProto): SaveSalesCodesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveSalesCodesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveSalesCodesRequestProto;
    static deserializeBinaryFromReader(message: SaveSalesCodesRequestProto, reader: jspb.BinaryReader): SaveSalesCodesRequestProto;
}

export namespace SaveSalesCodesRequestProto {
    export type AsObject = {
        tenantId: string,
        salesCodesList: Array<SalesCodeProto.AsObject>,
    }
}

export class SaveSalesCodesResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveSalesCodesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveSalesCodesResponseProto): SaveSalesCodesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveSalesCodesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveSalesCodesResponseProto;
    static deserializeBinaryFromReader(message: SaveSalesCodesResponseProto, reader: jspb.BinaryReader): SaveSalesCodesResponseProto;
}

export namespace SaveSalesCodesResponseProto {
    export type AsObject = {
    }
}

export class SetSalesCodeIsHiddenRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SetSalesCodeIsHiddenRequestProto;
    getSalesCodeId(): string;
    setSalesCodeId(value: string): SetSalesCodeIsHiddenRequestProto;
    getHide(): boolean;
    setHide(value: boolean): SetSalesCodeIsHiddenRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetSalesCodeIsHiddenRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetSalesCodeIsHiddenRequestProto): SetSalesCodeIsHiddenRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetSalesCodeIsHiddenRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetSalesCodeIsHiddenRequestProto;
    static deserializeBinaryFromReader(message: SetSalesCodeIsHiddenRequestProto, reader: jspb.BinaryReader): SetSalesCodeIsHiddenRequestProto;
}

export namespace SetSalesCodeIsHiddenRequestProto {
    export type AsObject = {
        tenantId: string,
        salesCodeId: string,
        hide: boolean,
    }
}

export class SetSalesCodeIsHiddenResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetSalesCodeIsHiddenResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetSalesCodeIsHiddenResponseProto): SetSalesCodeIsHiddenResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetSalesCodeIsHiddenResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetSalesCodeIsHiddenResponseProto;
    static deserializeBinaryFromReader(message: SetSalesCodeIsHiddenResponseProto, reader: jspb.BinaryReader): SetSalesCodeIsHiddenResponseProto;
}

export namespace SetSalesCodeIsHiddenResponseProto {
    export type AsObject = {
    }
}

export class SalesCodeProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): SalesCodeProto;
    getId(): string;
    setId(value: string): SalesCodeProto;
    getName(): string;
    setName(value: string): SalesCodeProto;
    getDescription(): string;
    setDescription(value: string): SalesCodeProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): SalesCodeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SalesCodeProto.AsObject;
    static toObject(includeInstance: boolean, msg: SalesCodeProto): SalesCodeProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SalesCodeProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SalesCodeProto;
    static deserializeBinaryFromReader(message: SalesCodeProto, reader: jspb.BinaryReader): SalesCodeProto;
}

export namespace SalesCodeProto {
    export type AsObject = {
        version: number,
        id: string,
        name: string,
        description: string,
        isHidden: boolean,
    }
}
