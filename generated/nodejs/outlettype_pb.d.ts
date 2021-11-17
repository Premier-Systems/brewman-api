// package: bmapi.outlets.outlettype
// file: outlettype.proto

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

export class GetAllOutletTypesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllOutletTypesRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllOutletTypesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllOutletTypesRequestProto): GetAllOutletTypesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllOutletTypesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllOutletTypesRequestProto;
    static deserializeBinaryFromReader(message: GetAllOutletTypesRequestProto, reader: jspb.BinaryReader): GetAllOutletTypesRequestProto;
}

export namespace GetAllOutletTypesRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllOutletTypesResponseProto extends jspb.Message { 
    clearOutletTypesList(): void;
    getOutletTypesList(): Array<OutletTypeProto>;
    setOutletTypesList(value: Array<OutletTypeProto>): GetAllOutletTypesResponseProto;
    addOutletTypes(value?: OutletTypeProto, index?: number): OutletTypeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllOutletTypesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllOutletTypesResponseProto): GetAllOutletTypesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllOutletTypesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllOutletTypesResponseProto;
    static deserializeBinaryFromReader(message: GetAllOutletTypesResponseProto, reader: jspb.BinaryReader): GetAllOutletTypesResponseProto;
}

export namespace GetAllOutletTypesResponseProto {
    export type AsObject = {
        outletTypesList: Array<OutletTypeProto.AsObject>,
    }
}

export class GetOutletTypesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetOutletTypesRequestProto;
    clearOutletTypeIdsList(): void;
    getOutletTypeIdsList(): Array<string>;
    setOutletTypeIdsList(value: Array<string>): GetOutletTypesRequestProto;
    addOutletTypeIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOutletTypesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOutletTypesRequestProto): GetOutletTypesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOutletTypesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOutletTypesRequestProto;
    static deserializeBinaryFromReader(message: GetOutletTypesRequestProto, reader: jspb.BinaryReader): GetOutletTypesRequestProto;
}

export namespace GetOutletTypesRequestProto {
    export type AsObject = {
        tenantId: string,
        outletTypeIdsList: Array<string>,
    }
}

export class GetOutletTypesResponseProto extends jspb.Message { 
    clearOutletTypesList(): void;
    getOutletTypesList(): Array<OutletTypeProto>;
    setOutletTypesList(value: Array<OutletTypeProto>): GetOutletTypesResponseProto;
    addOutletTypes(value?: OutletTypeProto, index?: number): OutletTypeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOutletTypesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOutletTypesResponseProto): GetOutletTypesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOutletTypesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOutletTypesResponseProto;
    static deserializeBinaryFromReader(message: GetOutletTypesResponseProto, reader: jspb.BinaryReader): GetOutletTypesResponseProto;
}

export namespace GetOutletTypesResponseProto {
    export type AsObject = {
        outletTypesList: Array<OutletTypeProto.AsObject>,
    }
}

export class SaveOutletTypesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SaveOutletTypesRequestProto;
    clearOutletTypesList(): void;
    getOutletTypesList(): Array<OutletTypeProto>;
    setOutletTypesList(value: Array<OutletTypeProto>): SaveOutletTypesRequestProto;
    addOutletTypes(value?: OutletTypeProto, index?: number): OutletTypeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveOutletTypesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveOutletTypesRequestProto): SaveOutletTypesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveOutletTypesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveOutletTypesRequestProto;
    static deserializeBinaryFromReader(message: SaveOutletTypesRequestProto, reader: jspb.BinaryReader): SaveOutletTypesRequestProto;
}

export namespace SaveOutletTypesRequestProto {
    export type AsObject = {
        tenantId: string,
        outletTypesList: Array<OutletTypeProto.AsObject>,
    }
}

export class SaveOutletTypesResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveOutletTypesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveOutletTypesResponseProto): SaveOutletTypesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveOutletTypesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveOutletTypesResponseProto;
    static deserializeBinaryFromReader(message: SaveOutletTypesResponseProto, reader: jspb.BinaryReader): SaveOutletTypesResponseProto;
}

export namespace SaveOutletTypesResponseProto {
    export type AsObject = {
    }
}

export class SetOutletTypeIsHiddenRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SetOutletTypeIsHiddenRequestProto;
    getOutletTypeId(): string;
    setOutletTypeId(value: string): SetOutletTypeIsHiddenRequestProto;
    getHide(): boolean;
    setHide(value: boolean): SetOutletTypeIsHiddenRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOutletTypeIsHiddenRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetOutletTypeIsHiddenRequestProto): SetOutletTypeIsHiddenRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOutletTypeIsHiddenRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOutletTypeIsHiddenRequestProto;
    static deserializeBinaryFromReader(message: SetOutletTypeIsHiddenRequestProto, reader: jspb.BinaryReader): SetOutletTypeIsHiddenRequestProto;
}

export namespace SetOutletTypeIsHiddenRequestProto {
    export type AsObject = {
        tenantId: string,
        outletTypeId: string,
        hide: boolean,
    }
}

export class SetOutletTypeIsHiddenResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOutletTypeIsHiddenResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetOutletTypeIsHiddenResponseProto): SetOutletTypeIsHiddenResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOutletTypeIsHiddenResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOutletTypeIsHiddenResponseProto;
    static deserializeBinaryFromReader(message: SetOutletTypeIsHiddenResponseProto, reader: jspb.BinaryReader): SetOutletTypeIsHiddenResponseProto;
}

export namespace SetOutletTypeIsHiddenResponseProto {
    export type AsObject = {
    }
}

export class OutletTypeProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): OutletTypeProto;
    getId(): string;
    setId(value: string): OutletTypeProto;
    getName(): string;
    setName(value: string): OutletTypeProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): OutletTypeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutletTypeProto.AsObject;
    static toObject(includeInstance: boolean, msg: OutletTypeProto): OutletTypeProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutletTypeProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutletTypeProto;
    static deserializeBinaryFromReader(message: OutletTypeProto, reader: jspb.BinaryReader): OutletTypeProto;
}

export namespace OutletTypeProto {
    export type AsObject = {
        version: number,
        id: string,
        name: string,
        isHidden: boolean,
    }
}
