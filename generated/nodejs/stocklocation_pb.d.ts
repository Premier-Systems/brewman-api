// package: bmapi.stocks.stocklocation
// file: stocklocation.proto

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

export class GetAllStockLocationsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllStockLocationsRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllStockLocationsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllStockLocationsRequestProto): GetAllStockLocationsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllStockLocationsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllStockLocationsRequestProto;
    static deserializeBinaryFromReader(message: GetAllStockLocationsRequestProto, reader: jspb.BinaryReader): GetAllStockLocationsRequestProto;
}

export namespace GetAllStockLocationsRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllStockLocationsResponseProto extends jspb.Message { 
    clearStockLocationsList(): void;
    getStockLocationsList(): Array<StockLocationProto>;
    setStockLocationsList(value: Array<StockLocationProto>): GetAllStockLocationsResponseProto;
    addStockLocations(value?: StockLocationProto, index?: number): StockLocationProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllStockLocationsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllStockLocationsResponseProto): GetAllStockLocationsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllStockLocationsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllStockLocationsResponseProto;
    static deserializeBinaryFromReader(message: GetAllStockLocationsResponseProto, reader: jspb.BinaryReader): GetAllStockLocationsResponseProto;
}

export namespace GetAllStockLocationsResponseProto {
    export type AsObject = {
        stockLocationsList: Array<StockLocationProto.AsObject>,
    }
}

export class GetStockLocationRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetStockLocationRequestProto;
    getStockLocationId(): string;
    setStockLocationId(value: string): GetStockLocationRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockLocationRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockLocationRequestProto): GetStockLocationRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockLocationRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockLocationRequestProto;
    static deserializeBinaryFromReader(message: GetStockLocationRequestProto, reader: jspb.BinaryReader): GetStockLocationRequestProto;
}

export namespace GetStockLocationRequestProto {
    export type AsObject = {
        tenantId: string,
        stockLocationId: string,
    }
}

export class GetStockLocationResponseProto extends jspb.Message { 

    hasStockLocation(): boolean;
    clearStockLocation(): void;
    getStockLocation(): StockLocationProto | undefined;
    setStockLocation(value?: StockLocationProto): GetStockLocationResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockLocationResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockLocationResponseProto): GetStockLocationResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockLocationResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockLocationResponseProto;
    static deserializeBinaryFromReader(message: GetStockLocationResponseProto, reader: jspb.BinaryReader): GetStockLocationResponseProto;
}

export namespace GetStockLocationResponseProto {
    export type AsObject = {
        stockLocation?: StockLocationProto.AsObject,
    }
}

export class GetStockLocationsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetStockLocationsRequestProto;
    clearStockLocationIdsList(): void;
    getStockLocationIdsList(): Array<string>;
    setStockLocationIdsList(value: Array<string>): GetStockLocationsRequestProto;
    addStockLocationIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockLocationsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockLocationsRequestProto): GetStockLocationsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockLocationsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockLocationsRequestProto;
    static deserializeBinaryFromReader(message: GetStockLocationsRequestProto, reader: jspb.BinaryReader): GetStockLocationsRequestProto;
}

export namespace GetStockLocationsRequestProto {
    export type AsObject = {
        tenantId: string,
        stockLocationIdsList: Array<string>,
    }
}

export class GetStockLocationsResponseProto extends jspb.Message { 
    clearStockLocationsList(): void;
    getStockLocationsList(): Array<StockLocationProto>;
    setStockLocationsList(value: Array<StockLocationProto>): GetStockLocationsResponseProto;
    addStockLocations(value?: StockLocationProto, index?: number): StockLocationProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockLocationsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockLocationsResponseProto): GetStockLocationsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockLocationsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockLocationsResponseProto;
    static deserializeBinaryFromReader(message: GetStockLocationsResponseProto, reader: jspb.BinaryReader): GetStockLocationsResponseProto;
}

export namespace GetStockLocationsResponseProto {
    export type AsObject = {
        stockLocationsList: Array<StockLocationProto.AsObject>,
    }
}

export class StockLocationProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): StockLocationProto;
    getId(): string;
    setId(value: string): StockLocationProto;
    getAddressLine1(): string;
    setAddressLine1(value: string): StockLocationProto;
    getAddressLine2(): string;
    setAddressLine2(value: string): StockLocationProto;
    getAddressLine3(): string;
    setAddressLine3(value: string): StockLocationProto;
    getAddressLine4(): string;
    setAddressLine4(value: string): StockLocationProto;
    getAddressLine5(): string;
    setAddressLine5(value: string): StockLocationProto;
    getAddressLine6(): string;
    setAddressLine6(value: string): StockLocationProto;
    getIsBonded(): boolean;
    setIsBonded(value: boolean): StockLocationProto;
    getContactName(): string;
    setContactName(value: string): StockLocationProto;
    getIsDefault(): boolean;
    setIsDefault(value: boolean): StockLocationProto;
    getName(): string;
    setName(value: string): StockLocationProto;
    getEmailAddress(): string;
    setEmailAddress(value: string): StockLocationProto;
    getPostcode(): string;
    setPostcode(value: string): StockLocationProto;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): StockLocationProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): StockLocationProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StockLocationProto.AsObject;
    static toObject(includeInstance: boolean, msg: StockLocationProto): StockLocationProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StockLocationProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StockLocationProto;
    static deserializeBinaryFromReader(message: StockLocationProto, reader: jspb.BinaryReader): StockLocationProto;
}

export namespace StockLocationProto {
    export type AsObject = {
        version: number,
        id: string,
        addressLine1: string,
        addressLine2: string,
        addressLine3: string,
        addressLine4: string,
        addressLine5: string,
        addressLine6: string,
        isBonded: boolean,
        contactName: string,
        isDefault: boolean,
        name: string,
        emailAddress: string,
        postcode: string,
        phoneNumber: string,
        isHidden: boolean,
    }
}
