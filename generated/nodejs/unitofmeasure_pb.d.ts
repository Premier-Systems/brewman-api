// package: bmapi.stocks.unitofmeasure
// file: unitofmeasure.proto

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

export class GetAllUnitsOfMeasureRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllUnitsOfMeasureRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllUnitsOfMeasureRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllUnitsOfMeasureRequestProto): GetAllUnitsOfMeasureRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllUnitsOfMeasureRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllUnitsOfMeasureRequestProto;
    static deserializeBinaryFromReader(message: GetAllUnitsOfMeasureRequestProto, reader: jspb.BinaryReader): GetAllUnitsOfMeasureRequestProto;
}

export namespace GetAllUnitsOfMeasureRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllUnitsOfMeasureResponseProto extends jspb.Message { 
    clearUnitsOfMeasureList(): void;
    getUnitsOfMeasureList(): Array<UnitOfMeasureProto>;
    setUnitsOfMeasureList(value: Array<UnitOfMeasureProto>): GetAllUnitsOfMeasureResponseProto;
    addUnitsOfMeasure(value?: UnitOfMeasureProto, index?: number): UnitOfMeasureProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllUnitsOfMeasureResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllUnitsOfMeasureResponseProto): GetAllUnitsOfMeasureResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllUnitsOfMeasureResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllUnitsOfMeasureResponseProto;
    static deserializeBinaryFromReader(message: GetAllUnitsOfMeasureResponseProto, reader: jspb.BinaryReader): GetAllUnitsOfMeasureResponseProto;
}

export namespace GetAllUnitsOfMeasureResponseProto {
    export type AsObject = {
        unitsOfMeasureList: Array<UnitOfMeasureProto.AsObject>,
    }
}

export class GetUnitOfMeasureRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetUnitOfMeasureRequestProto;
    getUnitOfMeasureId(): string;
    setUnitOfMeasureId(value: string): GetUnitOfMeasureRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUnitOfMeasureRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetUnitOfMeasureRequestProto): GetUnitOfMeasureRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUnitOfMeasureRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUnitOfMeasureRequestProto;
    static deserializeBinaryFromReader(message: GetUnitOfMeasureRequestProto, reader: jspb.BinaryReader): GetUnitOfMeasureRequestProto;
}

export namespace GetUnitOfMeasureRequestProto {
    export type AsObject = {
        tenantId: string,
        unitOfMeasureId: string,
    }
}

export class GetUnitOfMeasureResponseProto extends jspb.Message { 

    hasUnitOfMeasure(): boolean;
    clearUnitOfMeasure(): void;
    getUnitOfMeasure(): UnitOfMeasureProto | undefined;
    setUnitOfMeasure(value?: UnitOfMeasureProto): GetUnitOfMeasureResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUnitOfMeasureResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetUnitOfMeasureResponseProto): GetUnitOfMeasureResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUnitOfMeasureResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUnitOfMeasureResponseProto;
    static deserializeBinaryFromReader(message: GetUnitOfMeasureResponseProto, reader: jspb.BinaryReader): GetUnitOfMeasureResponseProto;
}

export namespace GetUnitOfMeasureResponseProto {
    export type AsObject = {
        unitOfMeasure?: UnitOfMeasureProto.AsObject,
    }
}

export class GetUnitsOfMeasureRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetUnitsOfMeasureRequestProto;
    clearUnitOfMeasureIdsList(): void;
    getUnitOfMeasureIdsList(): Array<string>;
    setUnitOfMeasureIdsList(value: Array<string>): GetUnitsOfMeasureRequestProto;
    addUnitOfMeasureIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUnitsOfMeasureRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetUnitsOfMeasureRequestProto): GetUnitsOfMeasureRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUnitsOfMeasureRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUnitsOfMeasureRequestProto;
    static deserializeBinaryFromReader(message: GetUnitsOfMeasureRequestProto, reader: jspb.BinaryReader): GetUnitsOfMeasureRequestProto;
}

export namespace GetUnitsOfMeasureRequestProto {
    export type AsObject = {
        tenantId: string,
        unitOfMeasureIdsList: Array<string>,
    }
}

export class GetUnitsOfMeasureResponseProto extends jspb.Message { 
    clearUnitsOfMeasureList(): void;
    getUnitsOfMeasureList(): Array<UnitOfMeasureProto>;
    setUnitsOfMeasureList(value: Array<UnitOfMeasureProto>): GetUnitsOfMeasureResponseProto;
    addUnitsOfMeasure(value?: UnitOfMeasureProto, index?: number): UnitOfMeasureProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUnitsOfMeasureResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetUnitsOfMeasureResponseProto): GetUnitsOfMeasureResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUnitsOfMeasureResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUnitsOfMeasureResponseProto;
    static deserializeBinaryFromReader(message: GetUnitsOfMeasureResponseProto, reader: jspb.BinaryReader): GetUnitsOfMeasureResponseProto;
}

export namespace GetUnitsOfMeasureResponseProto {
    export type AsObject = {
        unitsOfMeasureList: Array<UnitOfMeasureProto.AsObject>,
    }
}

export class UnitOfMeasureProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): UnitOfMeasureProto;
    getId(): string;
    setId(value: string): UnitOfMeasureProto;

    hasLitres(): boolean;
    clearLitres(): void;
    getLitres(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLitres(value?: google_protobuf_wrappers_pb.DoubleValue): UnitOfMeasureProto;
    getName(): string;
    setName(value: string): UnitOfMeasureProto;

    hasReadOnly(): boolean;
    clearReadOnly(): void;
    getReadOnly(): UnitOfMeasureReadOnlyProto | undefined;
    setReadOnly(value?: UnitOfMeasureReadOnlyProto): UnitOfMeasureProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): UnitOfMeasureProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnitOfMeasureProto.AsObject;
    static toObject(includeInstance: boolean, msg: UnitOfMeasureProto): UnitOfMeasureProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnitOfMeasureProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnitOfMeasureProto;
    static deserializeBinaryFromReader(message: UnitOfMeasureProto, reader: jspb.BinaryReader): UnitOfMeasureProto;
}

export namespace UnitOfMeasureProto {
    export type AsObject = {
        version: number,
        id: string,
        litres?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        name: string,
        readOnly?: UnitOfMeasureReadOnlyProto.AsObject,
        isHidden: boolean,
    }
}

export class UnitOfMeasureReadOnlyProto extends jspb.Message { 
    getIsUnits(): boolean;
    setIsUnits(value: boolean): UnitOfMeasureReadOnlyProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnitOfMeasureReadOnlyProto.AsObject;
    static toObject(includeInstance: boolean, msg: UnitOfMeasureReadOnlyProto): UnitOfMeasureReadOnlyProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnitOfMeasureReadOnlyProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnitOfMeasureReadOnlyProto;
    static deserializeBinaryFromReader(message: UnitOfMeasureReadOnlyProto, reader: jspb.BinaryReader): UnitOfMeasureReadOnlyProto;
}

export namespace UnitOfMeasureReadOnlyProto {
    export type AsObject = {
        isUnits: boolean,
    }
}
