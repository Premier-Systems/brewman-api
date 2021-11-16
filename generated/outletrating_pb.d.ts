// package: bmapi.outlets.outletrating
// file: outletrating.proto

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

export class GetAllOutletRatingsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllOutletRatingsRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllOutletRatingsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllOutletRatingsRequestProto): GetAllOutletRatingsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllOutletRatingsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllOutletRatingsRequestProto;
    static deserializeBinaryFromReader(message: GetAllOutletRatingsRequestProto, reader: jspb.BinaryReader): GetAllOutletRatingsRequestProto;
}

export namespace GetAllOutletRatingsRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllOutletRatingsResponseProto extends jspb.Message { 
    clearOutletRatingsList(): void;
    getOutletRatingsList(): Array<OutletRatingProto>;
    setOutletRatingsList(value: Array<OutletRatingProto>): GetAllOutletRatingsResponseProto;
    addOutletRatings(value?: OutletRatingProto, index?: number): OutletRatingProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllOutletRatingsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllOutletRatingsResponseProto): GetAllOutletRatingsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllOutletRatingsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllOutletRatingsResponseProto;
    static deserializeBinaryFromReader(message: GetAllOutletRatingsResponseProto, reader: jspb.BinaryReader): GetAllOutletRatingsResponseProto;
}

export namespace GetAllOutletRatingsResponseProto {
    export type AsObject = {
        outletRatingsList: Array<OutletRatingProto.AsObject>,
    }
}

export class GetOutletRatingsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetOutletRatingsRequestProto;
    clearOutletRatingIdsList(): void;
    getOutletRatingIdsList(): Array<string>;
    setOutletRatingIdsList(value: Array<string>): GetOutletRatingsRequestProto;
    addOutletRatingIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOutletRatingsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOutletRatingsRequestProto): GetOutletRatingsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOutletRatingsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOutletRatingsRequestProto;
    static deserializeBinaryFromReader(message: GetOutletRatingsRequestProto, reader: jspb.BinaryReader): GetOutletRatingsRequestProto;
}

export namespace GetOutletRatingsRequestProto {
    export type AsObject = {
        tenantId: string,
        outletRatingIdsList: Array<string>,
    }
}

export class GetOutletRatingsResponseProto extends jspb.Message { 
    clearOutletRatingsList(): void;
    getOutletRatingsList(): Array<OutletRatingProto>;
    setOutletRatingsList(value: Array<OutletRatingProto>): GetOutletRatingsResponseProto;
    addOutletRatings(value?: OutletRatingProto, index?: number): OutletRatingProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOutletRatingsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOutletRatingsResponseProto): GetOutletRatingsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOutletRatingsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOutletRatingsResponseProto;
    static deserializeBinaryFromReader(message: GetOutletRatingsResponseProto, reader: jspb.BinaryReader): GetOutletRatingsResponseProto;
}

export namespace GetOutletRatingsResponseProto {
    export type AsObject = {
        outletRatingsList: Array<OutletRatingProto.AsObject>,
    }
}

export class SaveOutletRatingsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SaveOutletRatingsRequestProto;
    clearOutletRatingsList(): void;
    getOutletRatingsList(): Array<OutletRatingProto>;
    setOutletRatingsList(value: Array<OutletRatingProto>): SaveOutletRatingsRequestProto;
    addOutletRatings(value?: OutletRatingProto, index?: number): OutletRatingProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveOutletRatingsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveOutletRatingsRequestProto): SaveOutletRatingsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveOutletRatingsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveOutletRatingsRequestProto;
    static deserializeBinaryFromReader(message: SaveOutletRatingsRequestProto, reader: jspb.BinaryReader): SaveOutletRatingsRequestProto;
}

export namespace SaveOutletRatingsRequestProto {
    export type AsObject = {
        tenantId: string,
        outletRatingsList: Array<OutletRatingProto.AsObject>,
    }
}

export class SaveOutletRatingsResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveOutletRatingsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveOutletRatingsResponseProto): SaveOutletRatingsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveOutletRatingsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveOutletRatingsResponseProto;
    static deserializeBinaryFromReader(message: SaveOutletRatingsResponseProto, reader: jspb.BinaryReader): SaveOutletRatingsResponseProto;
}

export namespace SaveOutletRatingsResponseProto {
    export type AsObject = {
    }
}

export class SetOutletRatingIsHiddenRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SetOutletRatingIsHiddenRequestProto;
    getOutletRatingId(): string;
    setOutletRatingId(value: string): SetOutletRatingIsHiddenRequestProto;
    getHide(): boolean;
    setHide(value: boolean): SetOutletRatingIsHiddenRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOutletRatingIsHiddenRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetOutletRatingIsHiddenRequestProto): SetOutletRatingIsHiddenRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOutletRatingIsHiddenRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOutletRatingIsHiddenRequestProto;
    static deserializeBinaryFromReader(message: SetOutletRatingIsHiddenRequestProto, reader: jspb.BinaryReader): SetOutletRatingIsHiddenRequestProto;
}

export namespace SetOutletRatingIsHiddenRequestProto {
    export type AsObject = {
        tenantId: string,
        outletRatingId: string,
        hide: boolean,
    }
}

export class SetOutletRatingIsHiddenResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOutletRatingIsHiddenResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetOutletRatingIsHiddenResponseProto): SetOutletRatingIsHiddenResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOutletRatingIsHiddenResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOutletRatingIsHiddenResponseProto;
    static deserializeBinaryFromReader(message: SetOutletRatingIsHiddenResponseProto, reader: jspb.BinaryReader): SetOutletRatingIsHiddenResponseProto;
}

export namespace SetOutletRatingIsHiddenResponseProto {
    export type AsObject = {
    }
}

export class OutletRatingProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): OutletRatingProto;
    getId(): string;
    setId(value: string): OutletRatingProto;
    getName(): string;
    setName(value: string): OutletRatingProto;
    getAllowOrders(): boolean;
    setAllowOrders(value: boolean): OutletRatingProto;
    getExcludeFromOutletList(): boolean;
    setExcludeFromOutletList(value: boolean): OutletRatingProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): OutletRatingProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutletRatingProto.AsObject;
    static toObject(includeInstance: boolean, msg: OutletRatingProto): OutletRatingProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutletRatingProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutletRatingProto;
    static deserializeBinaryFromReader(message: OutletRatingProto, reader: jspb.BinaryReader): OutletRatingProto;
}

export namespace OutletRatingProto {
    export type AsObject = {
        version: number,
        id: string,
        name: string,
        allowOrders: boolean,
        excludeFromOutletList: boolean,
        isHidden: boolean,
    }
}
