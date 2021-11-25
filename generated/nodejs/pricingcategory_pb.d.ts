// package: bmapi.price.pricingcategory
// file: pricingcategory.proto

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

export class GetAllPricingCategoriesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllPricingCategoriesRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllPricingCategoriesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllPricingCategoriesRequestProto): GetAllPricingCategoriesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllPricingCategoriesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllPricingCategoriesRequestProto;
    static deserializeBinaryFromReader(message: GetAllPricingCategoriesRequestProto, reader: jspb.BinaryReader): GetAllPricingCategoriesRequestProto;
}

export namespace GetAllPricingCategoriesRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllPricingCategoriesResponseProto extends jspb.Message { 
    clearPricingCategoriesList(): void;
    getPricingCategoriesList(): Array<PricingCategoryProto>;
    setPricingCategoriesList(value: Array<PricingCategoryProto>): GetAllPricingCategoriesResponseProto;
    addPricingCategories(value?: PricingCategoryProto, index?: number): PricingCategoryProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllPricingCategoriesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllPricingCategoriesResponseProto): GetAllPricingCategoriesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllPricingCategoriesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllPricingCategoriesResponseProto;
    static deserializeBinaryFromReader(message: GetAllPricingCategoriesResponseProto, reader: jspb.BinaryReader): GetAllPricingCategoriesResponseProto;
}

export namespace GetAllPricingCategoriesResponseProto {
    export type AsObject = {
        pricingCategoriesList: Array<PricingCategoryProto.AsObject>,
    }
}

export class GetPricingCategoryRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetPricingCategoryRequestProto;
    getPricingCategoryId(): string;
    setPricingCategoryId(value: string): GetPricingCategoryRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPricingCategoryRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetPricingCategoryRequestProto): GetPricingCategoryRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPricingCategoryRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPricingCategoryRequestProto;
    static deserializeBinaryFromReader(message: GetPricingCategoryRequestProto, reader: jspb.BinaryReader): GetPricingCategoryRequestProto;
}

export namespace GetPricingCategoryRequestProto {
    export type AsObject = {
        tenantId: string,
        pricingCategoryId: string,
    }
}

export class GetPricingCategoryResponseProto extends jspb.Message { 

    hasPricingCategory(): boolean;
    clearPricingCategory(): void;
    getPricingCategory(): PricingCategoryProto | undefined;
    setPricingCategory(value?: PricingCategoryProto): GetPricingCategoryResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPricingCategoryResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetPricingCategoryResponseProto): GetPricingCategoryResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPricingCategoryResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPricingCategoryResponseProto;
    static deserializeBinaryFromReader(message: GetPricingCategoryResponseProto, reader: jspb.BinaryReader): GetPricingCategoryResponseProto;
}

export namespace GetPricingCategoryResponseProto {
    export type AsObject = {
        pricingCategory?: PricingCategoryProto.AsObject,
    }
}

export class GetPricingCategoriesRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetPricingCategoriesRequestProto;
    clearPricingCategoryIdsList(): void;
    getPricingCategoryIdsList(): Array<string>;
    setPricingCategoryIdsList(value: Array<string>): GetPricingCategoriesRequestProto;
    addPricingCategoryIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPricingCategoriesRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetPricingCategoriesRequestProto): GetPricingCategoriesRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPricingCategoriesRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPricingCategoriesRequestProto;
    static deserializeBinaryFromReader(message: GetPricingCategoriesRequestProto, reader: jspb.BinaryReader): GetPricingCategoriesRequestProto;
}

export namespace GetPricingCategoriesRequestProto {
    export type AsObject = {
        tenantId: string,
        pricingCategoryIdsList: Array<string>,
    }
}

export class GetPricingCategoriesResponseProto extends jspb.Message { 
    clearPricingCategoryList(): void;
    getPricingCategoryList(): Array<PricingCategoryProto>;
    setPricingCategoryList(value: Array<PricingCategoryProto>): GetPricingCategoriesResponseProto;
    addPricingCategory(value?: PricingCategoryProto, index?: number): PricingCategoryProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPricingCategoriesResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetPricingCategoriesResponseProto): GetPricingCategoriesResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPricingCategoriesResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPricingCategoriesResponseProto;
    static deserializeBinaryFromReader(message: GetPricingCategoriesResponseProto, reader: jspb.BinaryReader): GetPricingCategoriesResponseProto;
}

export namespace GetPricingCategoriesResponseProto {
    export type AsObject = {
        pricingCategoryList: Array<PricingCategoryProto.AsObject>,
    }
}

export class PricingCategoryProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): PricingCategoryProto;
    getId(): string;
    setId(value: string): PricingCategoryProto;
    getName(): string;
    setName(value: string): PricingCategoryProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): PricingCategoryProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PricingCategoryProto.AsObject;
    static toObject(includeInstance: boolean, msg: PricingCategoryProto): PricingCategoryProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PricingCategoryProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PricingCategoryProto;
    static deserializeBinaryFromReader(message: PricingCategoryProto, reader: jspb.BinaryReader): PricingCategoryProto;
}

export namespace PricingCategoryProto {
    export type AsObject = {
        version: number,
        id: string,
        name: string,
        isHidden: boolean,
    }
}
