// package: bmapi.stocks.glcode
// file: glcode.proto

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

export class GetAllGlCodesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllGlCodesRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllGlCodesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllGlCodesRequestProto): GetAllGlCodesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllGlCodesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllGlCodesRequestProto;
    static deserializeBinaryFromReader(message: GetAllGlCodesRequestProto, reader: jspb.BinaryReader): GetAllGlCodesRequestProto;
}

export namespace GetAllGlCodesRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllGlCodesResponseProto extends jspb.Message { 
    clearGlCodesList(): void;
    getGlCodesList(): Array<GlCodeProto>;
    setGlCodesList(value: Array<GlCodeProto>): GetAllGlCodesResponseProto;
    addGlCodes(value?: GlCodeProto, index?: number): GlCodeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllGlCodesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllGlCodesResponseProto): GetAllGlCodesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllGlCodesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllGlCodesResponseProto;
    static deserializeBinaryFromReader(message: GetAllGlCodesResponseProto, reader: jspb.BinaryReader): GetAllGlCodesResponseProto;
}

export namespace GetAllGlCodesResponseProto {
    export type AsObject = {
        glCodesList: Array<GlCodeProto.AsObject>,
    }
}

export class GetGlCodeRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetGlCodeRequestProto;
    getGlCodeId(): string;
    setGlCodeId(value: string): GetGlCodeRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGlCodeRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetGlCodeRequestProto): GetGlCodeRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGlCodeRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGlCodeRequestProto;
    static deserializeBinaryFromReader(message: GetGlCodeRequestProto, reader: jspb.BinaryReader): GetGlCodeRequestProto;
}

export namespace GetGlCodeRequestProto {
    export type AsObject = {
        tenantId: string,
        glCodeId: string,
    }
}

export class GetGlCodeResponseProto extends jspb.Message { 

    hasGlCode(): boolean;
    clearGlCode(): void;
    getGlCode(): GlCodeProto | undefined;
    setGlCode(value?: GlCodeProto): GetGlCodeResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGlCodeResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetGlCodeResponseProto): GetGlCodeResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGlCodeResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGlCodeResponseProto;
    static deserializeBinaryFromReader(message: GetGlCodeResponseProto, reader: jspb.BinaryReader): GetGlCodeResponseProto;
}

export namespace GetGlCodeResponseProto {
    export type AsObject = {
        glCode?: GlCodeProto.AsObject,
    }
}

export class GetGlCodesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetGlCodesRequestProto;
    clearGlCodeIdsList(): void;
    getGlCodeIdsList(): Array<string>;
    setGlCodeIdsList(value: Array<string>): GetGlCodesRequestProto;
    addGlCodeIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGlCodesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetGlCodesRequestProto): GetGlCodesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGlCodesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGlCodesRequestProto;
    static deserializeBinaryFromReader(message: GetGlCodesRequestProto, reader: jspb.BinaryReader): GetGlCodesRequestProto;
}

export namespace GetGlCodesRequestProto {
    export type AsObject = {
        tenantId: string,
        glCodeIdsList: Array<string>,
    }
}

export class GetGlCodesResponseProto extends jspb.Message { 
    clearGlCodesList(): void;
    getGlCodesList(): Array<GlCodeProto>;
    setGlCodesList(value: Array<GlCodeProto>): GetGlCodesResponseProto;
    addGlCodes(value?: GlCodeProto, index?: number): GlCodeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGlCodesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetGlCodesResponseProto): GetGlCodesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGlCodesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGlCodesResponseProto;
    static deserializeBinaryFromReader(message: GetGlCodesResponseProto, reader: jspb.BinaryReader): GetGlCodesResponseProto;
}

export namespace GetGlCodesResponseProto {
    export type AsObject = {
        glCodesList: Array<GlCodeProto.AsObject>,
    }
}

export class SaveGlCodeRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SaveGlCodeRequestProto;

    hasGlCode(): boolean;
    clearGlCode(): void;
    getGlCode(): GlCodeProto | undefined;
    setGlCode(value?: GlCodeProto): SaveGlCodeRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveGlCodeRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveGlCodeRequestProto): SaveGlCodeRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveGlCodeRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveGlCodeRequestProto;
    static deserializeBinaryFromReader(message: SaveGlCodeRequestProto, reader: jspb.BinaryReader): SaveGlCodeRequestProto;
}

export namespace SaveGlCodeRequestProto {
    export type AsObject = {
        tenantId: string,
        glCode?: GlCodeProto.AsObject,
    }
}

export class SaveGlCodeResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveGlCodeResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveGlCodeResponseProto): SaveGlCodeResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveGlCodeResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveGlCodeResponseProto;
    static deserializeBinaryFromReader(message: SaveGlCodeResponseProto, reader: jspb.BinaryReader): SaveGlCodeResponseProto;
}

export namespace SaveGlCodeResponseProto {
    export type AsObject = {
    }
}

export class SetGlCodeIsHiddenRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SetGlCodeIsHiddenRequestProto;
    getGlCodeId(): string;
    setGlCodeId(value: string): SetGlCodeIsHiddenRequestProto;
    getHide(): boolean;
    setHide(value: boolean): SetGlCodeIsHiddenRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetGlCodeIsHiddenRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetGlCodeIsHiddenRequestProto): SetGlCodeIsHiddenRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetGlCodeIsHiddenRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetGlCodeIsHiddenRequestProto;
    static deserializeBinaryFromReader(message: SetGlCodeIsHiddenRequestProto, reader: jspb.BinaryReader): SetGlCodeIsHiddenRequestProto;
}

export namespace SetGlCodeIsHiddenRequestProto {
    export type AsObject = {
        tenantId: string,
        glCodeId: string,
        hide: boolean,
    }
}

export class SetGlCodeIsHiddenResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetGlCodeIsHiddenResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetGlCodeIsHiddenResponseProto): SetGlCodeIsHiddenResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetGlCodeIsHiddenResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetGlCodeIsHiddenResponseProto;
    static deserializeBinaryFromReader(message: SetGlCodeIsHiddenResponseProto, reader: jspb.BinaryReader): SetGlCodeIsHiddenResponseProto;
}

export namespace SetGlCodeIsHiddenResponseProto {
    export type AsObject = {
    }
}

export class GetAllGlCodeOverridesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllGlCodeOverridesRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllGlCodeOverridesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllGlCodeOverridesRequestProto): GetAllGlCodeOverridesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllGlCodeOverridesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllGlCodeOverridesRequestProto;
    static deserializeBinaryFromReader(message: GetAllGlCodeOverridesRequestProto, reader: jspb.BinaryReader): GetAllGlCodeOverridesRequestProto;
}

export namespace GetAllGlCodeOverridesRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllGlCodeOverridesResponseProto extends jspb.Message { 
    clearGlCodeOverridesList(): void;
    getGlCodeOverridesList(): Array<GlCodeOverrideProto>;
    setGlCodeOverridesList(value: Array<GlCodeOverrideProto>): GetAllGlCodeOverridesResponseProto;
    addGlCodeOverrides(value?: GlCodeOverrideProto, index?: number): GlCodeOverrideProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllGlCodeOverridesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllGlCodeOverridesResponseProto): GetAllGlCodeOverridesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllGlCodeOverridesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllGlCodeOverridesResponseProto;
    static deserializeBinaryFromReader(message: GetAllGlCodeOverridesResponseProto, reader: jspb.BinaryReader): GetAllGlCodeOverridesResponseProto;
}

export namespace GetAllGlCodeOverridesResponseProto {
    export type AsObject = {
        glCodeOverridesList: Array<GlCodeOverrideProto.AsObject>,
    }
}

export class GlCodeProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): GlCodeProto;
    getId(): string;
    setId(value: string): GlCodeProto;
    getCode(): string;
    setCode(value: string): GlCodeProto;
    getName(): string;
    setName(value: string): GlCodeProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): GlCodeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GlCodeProto.AsObject;
    static toObject(includeInstance: boolean, msg: GlCodeProto): GlCodeProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GlCodeProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GlCodeProto;
    static deserializeBinaryFromReader(message: GlCodeProto, reader: jspb.BinaryReader): GlCodeProto;
}

export namespace GlCodeProto {
    export type AsObject = {
        version: number,
        id: string,
        code: string,
        name: string,
        isHidden: boolean,
    }
}

export class GlCodeOverrideProto extends jspb.Message { 
    getStockItemId(): string;
    setStockItemId(value: string): GlCodeOverrideProto;
    getOutletTypeId(): string;
    setOutletTypeId(value: string): GlCodeOverrideProto;

    hasGlCodeId(): boolean;
    clearGlCodeId(): void;
    getGlCodeId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGlCodeId(value?: google_protobuf_wrappers_pb.StringValue): GlCodeOverrideProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GlCodeOverrideProto.AsObject;
    static toObject(includeInstance: boolean, msg: GlCodeOverrideProto): GlCodeOverrideProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GlCodeOverrideProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GlCodeOverrideProto;
    static deserializeBinaryFromReader(message: GlCodeOverrideProto, reader: jspb.BinaryReader): GlCodeOverrideProto;
}

export namespace GlCodeOverrideProto {
    export type AsObject = {
        stockItemId: string,
        outletTypeId: string,
        glCodeId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}
