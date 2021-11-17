// package: bmapi.stocks.vatcode
// file: vatcode.proto

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

export class GetAllVatCodesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllVatCodesRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllVatCodesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllVatCodesRequestProto): GetAllVatCodesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllVatCodesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllVatCodesRequestProto;
    static deserializeBinaryFromReader(message: GetAllVatCodesRequestProto, reader: jspb.BinaryReader): GetAllVatCodesRequestProto;
}

export namespace GetAllVatCodesRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllVatCodesResponseProto extends jspb.Message { 
    clearVatCodesList(): void;
    getVatCodesList(): Array<VatCodeProto>;
    setVatCodesList(value: Array<VatCodeProto>): GetAllVatCodesResponseProto;
    addVatCodes(value?: VatCodeProto, index?: number): VatCodeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllVatCodesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllVatCodesResponseProto): GetAllVatCodesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllVatCodesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllVatCodesResponseProto;
    static deserializeBinaryFromReader(message: GetAllVatCodesResponseProto, reader: jspb.BinaryReader): GetAllVatCodesResponseProto;
}

export namespace GetAllVatCodesResponseProto {
    export type AsObject = {
        vatCodesList: Array<VatCodeProto.AsObject>,
    }
}

export class GetVatCodesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetVatCodesRequestProto;
    clearVatCodeIdsList(): void;
    getVatCodeIdsList(): Array<string>;
    setVatCodeIdsList(value: Array<string>): GetVatCodesRequestProto;
    addVatCodeIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVatCodesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetVatCodesRequestProto): GetVatCodesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVatCodesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVatCodesRequestProto;
    static deserializeBinaryFromReader(message: GetVatCodesRequestProto, reader: jspb.BinaryReader): GetVatCodesRequestProto;
}

export namespace GetVatCodesRequestProto {
    export type AsObject = {
        tenantId: string,
        vatCodeIdsList: Array<string>,
    }
}

export class GetVatCodesResponseProto extends jspb.Message { 
    clearVatCodesList(): void;
    getVatCodesList(): Array<VatCodeProto>;
    setVatCodesList(value: Array<VatCodeProto>): GetVatCodesResponseProto;
    addVatCodes(value?: VatCodeProto, index?: number): VatCodeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVatCodesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetVatCodesResponseProto): GetVatCodesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVatCodesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVatCodesResponseProto;
    static deserializeBinaryFromReader(message: GetVatCodesResponseProto, reader: jspb.BinaryReader): GetVatCodesResponseProto;
}

export namespace GetVatCodesResponseProto {
    export type AsObject = {
        vatCodesList: Array<VatCodeProto.AsObject>,
    }
}

export class SaveVatCodesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SaveVatCodesRequestProto;
    clearVatCodesList(): void;
    getVatCodesList(): Array<VatCodeProto>;
    setVatCodesList(value: Array<VatCodeProto>): SaveVatCodesRequestProto;
    addVatCodes(value?: VatCodeProto, index?: number): VatCodeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveVatCodesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveVatCodesRequestProto): SaveVatCodesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveVatCodesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveVatCodesRequestProto;
    static deserializeBinaryFromReader(message: SaveVatCodesRequestProto, reader: jspb.BinaryReader): SaveVatCodesRequestProto;
}

export namespace SaveVatCodesRequestProto {
    export type AsObject = {
        tenantId: string,
        vatCodesList: Array<VatCodeProto.AsObject>,
    }
}

export class SaveVatCodesResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveVatCodesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveVatCodesResponseProto): SaveVatCodesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveVatCodesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveVatCodesResponseProto;
    static deserializeBinaryFromReader(message: SaveVatCodesResponseProto, reader: jspb.BinaryReader): SaveVatCodesResponseProto;
}

export namespace SaveVatCodesResponseProto {
    export type AsObject = {
    }
}

export class SetVatCodeIsHiddenRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SetVatCodeIsHiddenRequestProto;
    getVatCodeId(): string;
    setVatCodeId(value: string): SetVatCodeIsHiddenRequestProto;
    getHide(): boolean;
    setHide(value: boolean): SetVatCodeIsHiddenRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetVatCodeIsHiddenRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetVatCodeIsHiddenRequestProto): SetVatCodeIsHiddenRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetVatCodeIsHiddenRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetVatCodeIsHiddenRequestProto;
    static deserializeBinaryFromReader(message: SetVatCodeIsHiddenRequestProto, reader: jspb.BinaryReader): SetVatCodeIsHiddenRequestProto;
}

export namespace SetVatCodeIsHiddenRequestProto {
    export type AsObject = {
        tenantId: string,
        vatCodeId: string,
        hide: boolean,
    }
}

export class SetVatCodeIsHiddenResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetVatCodeIsHiddenResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetVatCodeIsHiddenResponseProto): SetVatCodeIsHiddenResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetVatCodeIsHiddenResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetVatCodeIsHiddenResponseProto;
    static deserializeBinaryFromReader(message: SetVatCodeIsHiddenResponseProto, reader: jspb.BinaryReader): SetVatCodeIsHiddenResponseProto;
}

export namespace SetVatCodeIsHiddenResponseProto {
    export type AsObject = {
    }
}

export class VatCodeProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): VatCodeProto;
    getId(): string;
    setId(value: string): VatCodeProto;
    getAccountsCodeForSales(): string;
    setAccountsCodeForSales(value: string): VatCodeProto;
    getAccountsCodeForPurchases(): string;
    setAccountsCodeForPurchases(value: string): VatCodeProto;
    getIsDefault(): boolean;
    setIsDefault(value: boolean): VatCodeProto;
    getIsExempt(): boolean;
    setIsExempt(value: boolean): VatCodeProto;
    getIsExport(): boolean;
    setIsExport(value: boolean): VatCodeProto;
    getName(): string;
    setName(value: string): VatCodeProto;
    getVatPercentage(): number;
    setVatPercentage(value: number): VatCodeProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): VatCodeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VatCodeProto.AsObject;
    static toObject(includeInstance: boolean, msg: VatCodeProto): VatCodeProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VatCodeProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VatCodeProto;
    static deserializeBinaryFromReader(message: VatCodeProto, reader: jspb.BinaryReader): VatCodeProto;
}

export namespace VatCodeProto {
    export type AsObject = {
        version: number,
        id: string,
        accountsCodeForSales: string,
        accountsCodeForPurchases: string,
        isDefault: boolean,
        isExempt: boolean,
        isExport: boolean,
        name: string,
        vatPercentage: number,
        isHidden: boolean,
    }
}
