// package: bmapi.stocks.productbrand
// file: productbrand.proto

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

export class GetAllProductBrandsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllProductBrandsRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllProductBrandsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllProductBrandsRequestProto): GetAllProductBrandsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllProductBrandsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllProductBrandsRequestProto;
    static deserializeBinaryFromReader(message: GetAllProductBrandsRequestProto, reader: jspb.BinaryReader): GetAllProductBrandsRequestProto;
}

export namespace GetAllProductBrandsRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllProductBrandsResponseProto extends jspb.Message { 
    clearProductBrandsList(): void;
    getProductBrandsList(): Array<ProductBrandProto>;
    setProductBrandsList(value: Array<ProductBrandProto>): GetAllProductBrandsResponseProto;
    addProductBrands(value?: ProductBrandProto, index?: number): ProductBrandProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllProductBrandsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllProductBrandsResponseProto): GetAllProductBrandsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllProductBrandsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllProductBrandsResponseProto;
    static deserializeBinaryFromReader(message: GetAllProductBrandsResponseProto, reader: jspb.BinaryReader): GetAllProductBrandsResponseProto;
}

export namespace GetAllProductBrandsResponseProto {
    export type AsObject = {
        productBrandsList: Array<ProductBrandProto.AsObject>,
    }
}

export class GetProductBrandRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetProductBrandRequestProto;
    getProductBrandId(): string;
    setProductBrandId(value: string): GetProductBrandRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductBrandRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductBrandRequestProto): GetProductBrandRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductBrandRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductBrandRequestProto;
    static deserializeBinaryFromReader(message: GetProductBrandRequestProto, reader: jspb.BinaryReader): GetProductBrandRequestProto;
}

export namespace GetProductBrandRequestProto {
    export type AsObject = {
        tenantId: string,
        productBrandId: string,
    }
}

export class GetProductBrandResponseProto extends jspb.Message { 

    hasProductBrand(): boolean;
    clearProductBrand(): void;
    getProductBrand(): ProductBrandProto | undefined;
    setProductBrand(value?: ProductBrandProto): GetProductBrandResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductBrandResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductBrandResponseProto): GetProductBrandResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductBrandResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductBrandResponseProto;
    static deserializeBinaryFromReader(message: GetProductBrandResponseProto, reader: jspb.BinaryReader): GetProductBrandResponseProto;
}

export namespace GetProductBrandResponseProto {
    export type AsObject = {
        productBrand?: ProductBrandProto.AsObject,
    }
}

export class GetProductBrandsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetProductBrandsRequestProto;
    clearProductBrandIdsList(): void;
    getProductBrandIdsList(): Array<string>;
    setProductBrandIdsList(value: Array<string>): GetProductBrandsRequestProto;
    addProductBrandIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductBrandsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductBrandsRequestProto): GetProductBrandsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductBrandsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductBrandsRequestProto;
    static deserializeBinaryFromReader(message: GetProductBrandsRequestProto, reader: jspb.BinaryReader): GetProductBrandsRequestProto;
}

export namespace GetProductBrandsRequestProto {
    export type AsObject = {
        tenantId: string,
        productBrandIdsList: Array<string>,
    }
}

export class GetProductBrandsResponseProto extends jspb.Message { 
    clearProductBrandsList(): void;
    getProductBrandsList(): Array<ProductBrandProto>;
    setProductBrandsList(value: Array<ProductBrandProto>): GetProductBrandsResponseProto;
    addProductBrands(value?: ProductBrandProto, index?: number): ProductBrandProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductBrandsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductBrandsResponseProto): GetProductBrandsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductBrandsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductBrandsResponseProto;
    static deserializeBinaryFromReader(message: GetProductBrandsResponseProto, reader: jspb.BinaryReader): GetProductBrandsResponseProto;
}

export namespace GetProductBrandsResponseProto {
    export type AsObject = {
        productBrandsList: Array<ProductBrandProto.AsObject>,
    }
}

export class ProductBrandProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): ProductBrandProto;
    getId(): string;
    setId(value: string): ProductBrandProto;
    getName(): string;
    setName(value: string): ProductBrandProto;

    hasImageId(): boolean;
    clearImageId(): void;
    getImageId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setImageId(value?: google_protobuf_wrappers_pb.StringValue): ProductBrandProto;
    getAllowSales(): boolean;
    setAllowSales(value: boolean): ProductBrandProto;
    getNotes(): string;
    setNotes(value: string): ProductBrandProto;
    getTastingNotes(): string;
    setTastingNotes(value: string): ProductBrandProto;
    getIngredientsAndAllergens(): string;
    setIngredientsAndAllergens(value: string): ProductBrandProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): ProductBrandProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductBrandProto.AsObject;
    static toObject(includeInstance: boolean, msg: ProductBrandProto): ProductBrandProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductBrandProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductBrandProto;
    static deserializeBinaryFromReader(message: ProductBrandProto, reader: jspb.BinaryReader): ProductBrandProto;
}

export namespace ProductBrandProto {
    export type AsObject = {
        version: number,
        id: string,
        name: string,
        imageId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        allowSales: boolean,
        notes: string,
        tastingNotes: string,
        ingredientsAndAllergens: string,
        isHidden: boolean,
    }
}
