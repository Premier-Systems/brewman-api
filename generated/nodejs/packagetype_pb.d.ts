// package: bmapi.stocks.packagetype
// file: packagetype.proto

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

export class GetAllPackageTypesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllPackageTypesRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllPackageTypesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllPackageTypesRequestProto): GetAllPackageTypesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllPackageTypesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllPackageTypesRequestProto;
    static deserializeBinaryFromReader(message: GetAllPackageTypesRequestProto, reader: jspb.BinaryReader): GetAllPackageTypesRequestProto;
}

export namespace GetAllPackageTypesRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllPackageTypesResponseProto extends jspb.Message { 
    clearPackageTypesList(): void;
    getPackageTypesList(): Array<PackageTypeProto>;
    setPackageTypesList(value: Array<PackageTypeProto>): GetAllPackageTypesResponseProto;
    addPackageTypes(value?: PackageTypeProto, index?: number): PackageTypeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllPackageTypesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllPackageTypesResponseProto): GetAllPackageTypesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllPackageTypesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllPackageTypesResponseProto;
    static deserializeBinaryFromReader(message: GetAllPackageTypesResponseProto, reader: jspb.BinaryReader): GetAllPackageTypesResponseProto;
}

export namespace GetAllPackageTypesResponseProto {
    export type AsObject = {
        packageTypesList: Array<PackageTypeProto.AsObject>,
    }
}

export class GetPackageTypeRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetPackageTypeRequestProto;
    getPackageTypeId(): string;
    setPackageTypeId(value: string): GetPackageTypeRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPackageTypeRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetPackageTypeRequestProto): GetPackageTypeRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPackageTypeRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPackageTypeRequestProto;
    static deserializeBinaryFromReader(message: GetPackageTypeRequestProto, reader: jspb.BinaryReader): GetPackageTypeRequestProto;
}

export namespace GetPackageTypeRequestProto {
    export type AsObject = {
        tenantId: string,
        packageTypeId: string,
    }
}

export class GetPackageTypeResponseProto extends jspb.Message { 

    hasPackageType(): boolean;
    clearPackageType(): void;
    getPackageType(): PackageTypeProto | undefined;
    setPackageType(value?: PackageTypeProto): GetPackageTypeResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPackageTypeResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetPackageTypeResponseProto): GetPackageTypeResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPackageTypeResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPackageTypeResponseProto;
    static deserializeBinaryFromReader(message: GetPackageTypeResponseProto, reader: jspb.BinaryReader): GetPackageTypeResponseProto;
}

export namespace GetPackageTypeResponseProto {
    export type AsObject = {
        packageType?: PackageTypeProto.AsObject,
    }
}

export class GetPackageTypesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetPackageTypesRequestProto;
    clearPackageTypeIdsList(): void;
    getPackageTypeIdsList(): Array<string>;
    setPackageTypeIdsList(value: Array<string>): GetPackageTypesRequestProto;
    addPackageTypeIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPackageTypesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetPackageTypesRequestProto): GetPackageTypesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPackageTypesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPackageTypesRequestProto;
    static deserializeBinaryFromReader(message: GetPackageTypesRequestProto, reader: jspb.BinaryReader): GetPackageTypesRequestProto;
}

export namespace GetPackageTypesRequestProto {
    export type AsObject = {
        tenantId: string,
        packageTypeIdsList: Array<string>,
    }
}

export class GetPackageTypesResponseProto extends jspb.Message { 
    clearPackageTypesList(): void;
    getPackageTypesList(): Array<PackageTypeProto>;
    setPackageTypesList(value: Array<PackageTypeProto>): GetPackageTypesResponseProto;
    addPackageTypes(value?: PackageTypeProto, index?: number): PackageTypeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPackageTypesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetPackageTypesResponseProto): GetPackageTypesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPackageTypesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPackageTypesResponseProto;
    static deserializeBinaryFromReader(message: GetPackageTypesResponseProto, reader: jspb.BinaryReader): GetPackageTypesResponseProto;
}

export namespace GetPackageTypesResponseProto {
    export type AsObject = {
        packageTypesList: Array<PackageTypeProto.AsObject>,
    }
}

export class PackageTypeProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): PackageTypeProto;
    getId(): string;
    setId(value: string): PackageTypeProto;
    getName(): string;
    setName(value: string): PackageTypeProto;

    hasLitres(): boolean;
    clearLitres(): void;
    getLitres(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLitres(value?: google_protobuf_wrappers_pb.DoubleValue): PackageTypeProto;
    getIsTraceable(): boolean;
    setIsTraceable(value: boolean): PackageTypeProto;
    getIsReturnable(): boolean;
    setIsReturnable(value: boolean): PackageTypeProto;

    hasDefaultReturnableLabelDocumentTemplateId(): boolean;
    clearDefaultReturnableLabelDocumentTemplateId(): void;
    getDefaultReturnableLabelDocumentTemplateId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDefaultReturnableLabelDocumentTemplateId(value?: google_protobuf_wrappers_pb.StringValue): PackageTypeProto;

    hasDefaultNonReturnableLabelDocumentTemplateId(): boolean;
    clearDefaultNonReturnableLabelDocumentTemplateId(): void;
    getDefaultNonReturnableLabelDocumentTemplateId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDefaultNonReturnableLabelDocumentTemplateId(value?: google_protobuf_wrappers_pb.StringValue): PackageTypeProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): PackageTypeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageTypeProto.AsObject;
    static toObject(includeInstance: boolean, msg: PackageTypeProto): PackageTypeProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackageTypeProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackageTypeProto;
    static deserializeBinaryFromReader(message: PackageTypeProto, reader: jspb.BinaryReader): PackageTypeProto;
}

export namespace PackageTypeProto {
    export type AsObject = {
        version: number,
        id: string,
        name: string,
        litres?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        isTraceable: boolean,
        isReturnable: boolean,
        defaultReturnableLabelDocumentTemplateId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        defaultNonReturnableLabelDocumentTemplateId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        isHidden: boolean,
    }
}
