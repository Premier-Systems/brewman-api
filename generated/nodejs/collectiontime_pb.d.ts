// package: bmapi.orders.collectiontime
// file: collectiontime.proto

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

export class GetAllCollectionTimesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllCollectionTimesRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllCollectionTimesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllCollectionTimesRequestProto): GetAllCollectionTimesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllCollectionTimesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllCollectionTimesRequestProto;
    static deserializeBinaryFromReader(message: GetAllCollectionTimesRequestProto, reader: jspb.BinaryReader): GetAllCollectionTimesRequestProto;
}

export namespace GetAllCollectionTimesRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllCollectionTimesResponseProto extends jspb.Message { 
    clearCollectionTimesList(): void;
    getCollectionTimesList(): Array<CollectionTimeProto>;
    setCollectionTimesList(value: Array<CollectionTimeProto>): GetAllCollectionTimesResponseProto;
    addCollectionTimes(value?: CollectionTimeProto, index?: number): CollectionTimeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllCollectionTimesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllCollectionTimesResponseProto): GetAllCollectionTimesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllCollectionTimesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllCollectionTimesResponseProto;
    static deserializeBinaryFromReader(message: GetAllCollectionTimesResponseProto, reader: jspb.BinaryReader): GetAllCollectionTimesResponseProto;
}

export namespace GetAllCollectionTimesResponseProto {
    export type AsObject = {
        collectionTimesList: Array<CollectionTimeProto.AsObject>,
    }
}

export class GetCollectionTimeRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetCollectionTimeRequestProto;
    getCollectionTimeId(): string;
    setCollectionTimeId(value: string): GetCollectionTimeRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCollectionTimeRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetCollectionTimeRequestProto): GetCollectionTimeRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCollectionTimeRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCollectionTimeRequestProto;
    static deserializeBinaryFromReader(message: GetCollectionTimeRequestProto, reader: jspb.BinaryReader): GetCollectionTimeRequestProto;
}

export namespace GetCollectionTimeRequestProto {
    export type AsObject = {
        tenantId: string,
        collectionTimeId: string,
    }
}

export class GetCollectionTimeResponseProto extends jspb.Message { 

    hasCollectionTime(): boolean;
    clearCollectionTime(): void;
    getCollectionTime(): CollectionTimeProto | undefined;
    setCollectionTime(value?: CollectionTimeProto): GetCollectionTimeResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCollectionTimeResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetCollectionTimeResponseProto): GetCollectionTimeResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCollectionTimeResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCollectionTimeResponseProto;
    static deserializeBinaryFromReader(message: GetCollectionTimeResponseProto, reader: jspb.BinaryReader): GetCollectionTimeResponseProto;
}

export namespace GetCollectionTimeResponseProto {
    export type AsObject = {
        collectionTime?: CollectionTimeProto.AsObject,
    }
}

export class GetCollectionTimesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetCollectionTimesRequestProto;
    clearCollectionTimeIdsList(): void;
    getCollectionTimeIdsList(): Array<string>;
    setCollectionTimeIdsList(value: Array<string>): GetCollectionTimesRequestProto;
    addCollectionTimeIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCollectionTimesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetCollectionTimesRequestProto): GetCollectionTimesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCollectionTimesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCollectionTimesRequestProto;
    static deserializeBinaryFromReader(message: GetCollectionTimesRequestProto, reader: jspb.BinaryReader): GetCollectionTimesRequestProto;
}

export namespace GetCollectionTimesRequestProto {
    export type AsObject = {
        tenantId: string,
        collectionTimeIdsList: Array<string>,
    }
}

export class GetCollectionTimesResponseProto extends jspb.Message { 
    clearCollectionTimesList(): void;
    getCollectionTimesList(): Array<CollectionTimeProto>;
    setCollectionTimesList(value: Array<CollectionTimeProto>): GetCollectionTimesResponseProto;
    addCollectionTimes(value?: CollectionTimeProto, index?: number): CollectionTimeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCollectionTimesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetCollectionTimesResponseProto): GetCollectionTimesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCollectionTimesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCollectionTimesResponseProto;
    static deserializeBinaryFromReader(message: GetCollectionTimesResponseProto, reader: jspb.BinaryReader): GetCollectionTimesResponseProto;
}

export namespace GetCollectionTimesResponseProto {
    export type AsObject = {
        collectionTimesList: Array<CollectionTimeProto.AsObject>,
    }
}

export class CollectionTimeProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): CollectionTimeProto;
    getId(): string;
    setId(value: string): CollectionTimeProto;
    getName(): string;
    setName(value: string): CollectionTimeProto;
    getIsDefault(): boolean;
    setIsDefault(value: boolean): CollectionTimeProto;
    getSequence(): number;
    setSequence(value: number): CollectionTimeProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollectionTimeProto.AsObject;
    static toObject(includeInstance: boolean, msg: CollectionTimeProto): CollectionTimeProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CollectionTimeProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollectionTimeProto;
    static deserializeBinaryFromReader(message: CollectionTimeProto, reader: jspb.BinaryReader): CollectionTimeProto;
}

export namespace CollectionTimeProto {
    export type AsObject = {
        version: number,
        id: string,
        name: string,
        isDefault: boolean,
        sequence: number,
    }
}
