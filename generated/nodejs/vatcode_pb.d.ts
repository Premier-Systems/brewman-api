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

export class GetVatCodeRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetVatCodeRequestProto;
    getVatCodeId(): string;
    setVatCodeId(value: string): GetVatCodeRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVatCodeRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetVatCodeRequestProto): GetVatCodeRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVatCodeRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVatCodeRequestProto;
    static deserializeBinaryFromReader(message: GetVatCodeRequestProto, reader: jspb.BinaryReader): GetVatCodeRequestProto;
}

export namespace GetVatCodeRequestProto {
    export type AsObject = {
        tenantId: string,
        vatCodeId: string,
    }
}

export class GetVatCodeResponseProto extends jspb.Message { 

    hasVatCode(): boolean;
    clearVatCode(): void;
    getVatCode(): VatCodeProto | undefined;
    setVatCode(value?: VatCodeProto): GetVatCodeResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVatCodeResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetVatCodeResponseProto): GetVatCodeResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVatCodeResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVatCodeResponseProto;
    static deserializeBinaryFromReader(message: GetVatCodeResponseProto, reader: jspb.BinaryReader): GetVatCodeResponseProto;
}

export namespace GetVatCodeResponseProto {
    export type AsObject = {
        vatCode?: VatCodeProto.AsObject,
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
