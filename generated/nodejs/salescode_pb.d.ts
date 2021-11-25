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

export class GetSalesCodeRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetSalesCodeRequestProto;
    getSalesCodeId(): string;
    setSalesCodeId(value: string): GetSalesCodeRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSalesCodeRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetSalesCodeRequestProto): GetSalesCodeRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSalesCodeRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSalesCodeRequestProto;
    static deserializeBinaryFromReader(message: GetSalesCodeRequestProto, reader: jspb.BinaryReader): GetSalesCodeRequestProto;
}

export namespace GetSalesCodeRequestProto {
    export type AsObject = {
        tenantId: string,
        salesCodeId: string,
    }
}

export class GetSalesCodeResponseProto extends jspb.Message { 

    hasSalesCode(): boolean;
    clearSalesCode(): void;
    getSalesCode(): SalesCodeProto | undefined;
    setSalesCode(value?: SalesCodeProto): GetSalesCodeResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSalesCodeResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetSalesCodeResponseProto): GetSalesCodeResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSalesCodeResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSalesCodeResponseProto;
    static deserializeBinaryFromReader(message: GetSalesCodeResponseProto, reader: jspb.BinaryReader): GetSalesCodeResponseProto;
}

export namespace GetSalesCodeResponseProto {
    export type AsObject = {
        salesCode?: SalesCodeProto.AsObject,
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
