// package: bmapi.stocks.suppliermanufacturer
// file: suppliermanufacturer.proto

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

export class GetAllSupplierManufacturersRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllSupplierManufacturersRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllSupplierManufacturersRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllSupplierManufacturersRequestProto): GetAllSupplierManufacturersRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllSupplierManufacturersRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllSupplierManufacturersRequestProto;
    static deserializeBinaryFromReader(message: GetAllSupplierManufacturersRequestProto, reader: jspb.BinaryReader): GetAllSupplierManufacturersRequestProto;
}

export namespace GetAllSupplierManufacturersRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllSupplierManufacturersResponseProto extends jspb.Message { 
    clearSupplierManufacturersList(): void;
    getSupplierManufacturersList(): Array<SupplierManufacturerProto>;
    setSupplierManufacturersList(value: Array<SupplierManufacturerProto>): GetAllSupplierManufacturersResponseProto;
    addSupplierManufacturers(value?: SupplierManufacturerProto, index?: number): SupplierManufacturerProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllSupplierManufacturersResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllSupplierManufacturersResponseProto): GetAllSupplierManufacturersResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllSupplierManufacturersResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllSupplierManufacturersResponseProto;
    static deserializeBinaryFromReader(message: GetAllSupplierManufacturersResponseProto, reader: jspb.BinaryReader): GetAllSupplierManufacturersResponseProto;
}

export namespace GetAllSupplierManufacturersResponseProto {
    export type AsObject = {
        supplierManufacturersList: Array<SupplierManufacturerProto.AsObject>,
    }
}

export class GetSupplierManufacturerRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetSupplierManufacturerRequestProto;
    getSupplierManufacturerId(): string;
    setSupplierManufacturerId(value: string): GetSupplierManufacturerRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSupplierManufacturerRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetSupplierManufacturerRequestProto): GetSupplierManufacturerRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSupplierManufacturerRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSupplierManufacturerRequestProto;
    static deserializeBinaryFromReader(message: GetSupplierManufacturerRequestProto, reader: jspb.BinaryReader): GetSupplierManufacturerRequestProto;
}

export namespace GetSupplierManufacturerRequestProto {
    export type AsObject = {
        tenantId: string,
        supplierManufacturerId: string,
    }
}

export class GetSupplierManufacturerResponseProto extends jspb.Message { 

    hasSupplierManufacturer(): boolean;
    clearSupplierManufacturer(): void;
    getSupplierManufacturer(): SupplierManufacturerProto | undefined;
    setSupplierManufacturer(value?: SupplierManufacturerProto): GetSupplierManufacturerResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSupplierManufacturerResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetSupplierManufacturerResponseProto): GetSupplierManufacturerResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSupplierManufacturerResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSupplierManufacturerResponseProto;
    static deserializeBinaryFromReader(message: GetSupplierManufacturerResponseProto, reader: jspb.BinaryReader): GetSupplierManufacturerResponseProto;
}

export namespace GetSupplierManufacturerResponseProto {
    export type AsObject = {
        supplierManufacturer?: SupplierManufacturerProto.AsObject,
    }
}

export class GetSupplierManufacturersRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetSupplierManufacturersRequestProto;
    clearSupplierManufacturerIdsList(): void;
    getSupplierManufacturerIdsList(): Array<string>;
    setSupplierManufacturerIdsList(value: Array<string>): GetSupplierManufacturersRequestProto;
    addSupplierManufacturerIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSupplierManufacturersRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetSupplierManufacturersRequestProto): GetSupplierManufacturersRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSupplierManufacturersRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSupplierManufacturersRequestProto;
    static deserializeBinaryFromReader(message: GetSupplierManufacturersRequestProto, reader: jspb.BinaryReader): GetSupplierManufacturersRequestProto;
}

export namespace GetSupplierManufacturersRequestProto {
    export type AsObject = {
        tenantId: string,
        supplierManufacturerIdsList: Array<string>,
    }
}

export class GetSupplierManufacturersResponseProto extends jspb.Message { 
    clearSupplierManufacturersList(): void;
    getSupplierManufacturersList(): Array<SupplierManufacturerProto>;
    setSupplierManufacturersList(value: Array<SupplierManufacturerProto>): GetSupplierManufacturersResponseProto;
    addSupplierManufacturers(value?: SupplierManufacturerProto, index?: number): SupplierManufacturerProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSupplierManufacturersResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetSupplierManufacturersResponseProto): GetSupplierManufacturersResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSupplierManufacturersResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSupplierManufacturersResponseProto;
    static deserializeBinaryFromReader(message: GetSupplierManufacturersResponseProto, reader: jspb.BinaryReader): GetSupplierManufacturersResponseProto;
}

export namespace GetSupplierManufacturersResponseProto {
    export type AsObject = {
        supplierManufacturersList: Array<SupplierManufacturerProto.AsObject>,
    }
}

export class SaveSupplierManufacturerRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SaveSupplierManufacturerRequestProto;

    hasSupplierManufacturer(): boolean;
    clearSupplierManufacturer(): void;
    getSupplierManufacturer(): SupplierManufacturerProto | undefined;
    setSupplierManufacturer(value?: SupplierManufacturerProto): SaveSupplierManufacturerRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveSupplierManufacturerRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveSupplierManufacturerRequestProto): SaveSupplierManufacturerRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveSupplierManufacturerRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveSupplierManufacturerRequestProto;
    static deserializeBinaryFromReader(message: SaveSupplierManufacturerRequestProto, reader: jspb.BinaryReader): SaveSupplierManufacturerRequestProto;
}

export namespace SaveSupplierManufacturerRequestProto {
    export type AsObject = {
        tenantId: string,
        supplierManufacturer?: SupplierManufacturerProto.AsObject,
    }
}

export class SaveSupplierManufacturerResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveSupplierManufacturerResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SaveSupplierManufacturerResponseProto): SaveSupplierManufacturerResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveSupplierManufacturerResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveSupplierManufacturerResponseProto;
    static deserializeBinaryFromReader(message: SaveSupplierManufacturerResponseProto, reader: jspb.BinaryReader): SaveSupplierManufacturerResponseProto;
}

export namespace SaveSupplierManufacturerResponseProto {
    export type AsObject = {
    }
}

export class SetSupplierManufacturerIsHiddenRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SetSupplierManufacturerIsHiddenRequestProto;
    getSupplierManufacturerId(): string;
    setSupplierManufacturerId(value: string): SetSupplierManufacturerIsHiddenRequestProto;
    getHide(): boolean;
    setHide(value: boolean): SetSupplierManufacturerIsHiddenRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetSupplierManufacturerIsHiddenRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetSupplierManufacturerIsHiddenRequestProto): SetSupplierManufacturerIsHiddenRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetSupplierManufacturerIsHiddenRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetSupplierManufacturerIsHiddenRequestProto;
    static deserializeBinaryFromReader(message: SetSupplierManufacturerIsHiddenRequestProto, reader: jspb.BinaryReader): SetSupplierManufacturerIsHiddenRequestProto;
}

export namespace SetSupplierManufacturerIsHiddenRequestProto {
    export type AsObject = {
        tenantId: string,
        supplierManufacturerId: string,
        hide: boolean,
    }
}

export class SetSupplierManufacturerIsHiddenResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetSupplierManufacturerIsHiddenResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetSupplierManufacturerIsHiddenResponseProto): SetSupplierManufacturerIsHiddenResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetSupplierManufacturerIsHiddenResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetSupplierManufacturerIsHiddenResponseProto;
    static deserializeBinaryFromReader(message: SetSupplierManufacturerIsHiddenResponseProto, reader: jspb.BinaryReader): SetSupplierManufacturerIsHiddenResponseProto;
}

export namespace SetSupplierManufacturerIsHiddenResponseProto {
    export type AsObject = {
    }
}

export class GetSupplierManufacturersByFilterRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetSupplierManufacturersByFilterRequestProto;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): SupplierManufacturerFilterProto | undefined;
    setFilter(value?: SupplierManufacturerFilterProto): GetSupplierManufacturersByFilterRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSupplierManufacturersByFilterRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetSupplierManufacturersByFilterRequestProto): GetSupplierManufacturersByFilterRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSupplierManufacturersByFilterRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSupplierManufacturersByFilterRequestProto;
    static deserializeBinaryFromReader(message: GetSupplierManufacturersByFilterRequestProto, reader: jspb.BinaryReader): GetSupplierManufacturersByFilterRequestProto;
}

export namespace GetSupplierManufacturersByFilterRequestProto {
    export type AsObject = {
        tenantId: string,
        filter?: SupplierManufacturerFilterProto.AsObject,
    }
}

export class GetSupplierManufacturersByFilterResponseProto extends jspb.Message { 
    clearSupplierManufacturersList(): void;
    getSupplierManufacturersList(): Array<SupplierManufacturerProto>;
    setSupplierManufacturersList(value: Array<SupplierManufacturerProto>): GetSupplierManufacturersByFilterResponseProto;
    addSupplierManufacturers(value?: SupplierManufacturerProto, index?: number): SupplierManufacturerProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSupplierManufacturersByFilterResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetSupplierManufacturersByFilterResponseProto): GetSupplierManufacturersByFilterResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSupplierManufacturersByFilterResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSupplierManufacturersByFilterResponseProto;
    static deserializeBinaryFromReader(message: GetSupplierManufacturersByFilterResponseProto, reader: jspb.BinaryReader): GetSupplierManufacturersByFilterResponseProto;
}

export namespace GetSupplierManufacturersByFilterResponseProto {
    export type AsObject = {
        supplierManufacturersList: Array<SupplierManufacturerProto.AsObject>,
    }
}

export class SupplierManufacturerProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): SupplierManufacturerProto;
    getId(): string;
    setId(value: string): SupplierManufacturerProto;
    getAddressLine1(): string;
    setAddressLine1(value: string): SupplierManufacturerProto;
    getAddressLine2(): string;
    setAddressLine2(value: string): SupplierManufacturerProto;
    getAddressLine3(): string;
    setAddressLine3(value: string): SupplierManufacturerProto;
    getAddressLine4(): string;
    setAddressLine4(value: string): SupplierManufacturerProto;
    getAddressLine5(): string;
    setAddressLine5(value: string): SupplierManufacturerProto;
    getAddressLine6(): string;
    setAddressLine6(value: string): SupplierManufacturerProto;
    getBusinessName(): string;
    setBusinessName(value: string): SupplierManufacturerProto;
    getCode(): string;
    setCode(value: string): SupplierManufacturerProto;
    getContactName(): string;
    setContactName(value: string): SupplierManufacturerProto;
    getEmailAddress(): string;
    setEmailAddress(value: string): SupplierManufacturerProto;
    getIsManufacturer(): boolean;
    setIsManufacturer(value: boolean): SupplierManufacturerProto;
    getIsSupplier(): boolean;
    setIsSupplier(value: boolean): SupplierManufacturerProto;
    getMobileNumber(): string;
    setMobileNumber(value: string): SupplierManufacturerProto;
    getNotes(): string;
    setNotes(value: string): SupplierManufacturerProto;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): SupplierManufacturerProto;
    getPostcode(): string;
    setPostcode(value: string): SupplierManufacturerProto;

    hasVatCodeId(): boolean;
    clearVatCodeId(): void;
    getVatCodeId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setVatCodeId(value?: google_protobuf_wrappers_pb.StringValue): SupplierManufacturerProto;
    getVatReg(): string;
    setVatReg(value: string): SupplierManufacturerProto;
    clearAnnualProductionList(): void;
    getAnnualProductionList(): Array<AnnualProductionEntryProto>;
    setAnnualProductionList(value: Array<AnnualProductionEntryProto>): SupplierManufacturerProto;
    addAnnualProduction(value?: AnnualProductionEntryProto, index?: number): AnnualProductionEntryProto;

    hasReadOnly(): boolean;
    clearReadOnly(): void;
    getReadOnly(): SupplierManufacturerReadOnlyProto | undefined;
    setReadOnly(value?: SupplierManufacturerReadOnlyProto): SupplierManufacturerProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): SupplierManufacturerProto;
    getAwrsNumber(): string;
    setAwrsNumber(value: string): SupplierManufacturerProto;
    getIban(): string;
    setIban(value: string): SupplierManufacturerProto;
    getBic(): string;
    setBic(value: string): SupplierManufacturerProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupplierManufacturerProto.AsObject;
    static toObject(includeInstance: boolean, msg: SupplierManufacturerProto): SupplierManufacturerProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupplierManufacturerProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupplierManufacturerProto;
    static deserializeBinaryFromReader(message: SupplierManufacturerProto, reader: jspb.BinaryReader): SupplierManufacturerProto;
}

export namespace SupplierManufacturerProto {
    export type AsObject = {
        version: number,
        id: string,
        addressLine1: string,
        addressLine2: string,
        addressLine3: string,
        addressLine4: string,
        addressLine5: string,
        addressLine6: string,
        businessName: string,
        code: string,
        contactName: string,
        emailAddress: string,
        isManufacturer: boolean,
        isSupplier: boolean,
        mobileNumber: string,
        notes: string,
        phoneNumber: string,
        postcode: string,
        vatCodeId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        vatReg: string,
        annualProductionList: Array<AnnualProductionEntryProto.AsObject>,
        readOnly?: SupplierManufacturerReadOnlyProto.AsObject,
        isHidden: boolean,
        awrsNumber: string,
        iban: string,
        bic: string,
    }
}

export class SupplierManufacturerFilterProto extends jspb.Message { 

    hasLimitVatCodeIds(): boolean;
    clearLimitVatCodeIds(): void;
    getLimitVatCodeIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitVatCodeIds(value?: common_arrayvalues_pb.StringArrayValue): SupplierManufacturerFilterProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupplierManufacturerFilterProto.AsObject;
    static toObject(includeInstance: boolean, msg: SupplierManufacturerFilterProto): SupplierManufacturerFilterProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupplierManufacturerFilterProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupplierManufacturerFilterProto;
    static deserializeBinaryFromReader(message: SupplierManufacturerFilterProto, reader: jspb.BinaryReader): SupplierManufacturerFilterProto;
}

export namespace SupplierManufacturerFilterProto {
    export type AsObject = {
        limitVatCodeIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
    }
}

export class AnnualProductionEntryProto extends jspb.Message { 
    getAnnualBeerProductionLitres(): number;
    setAnnualBeerProductionLitres(value: number): AnnualProductionEntryProto;

    hasEffectiveDate(): boolean;
    clearEffectiveDate(): void;
    getEffectiveDate(): google_type_date_pb.Date | undefined;
    setEffectiveDate(value?: google_type_date_pb.Date): AnnualProductionEntryProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnnualProductionEntryProto.AsObject;
    static toObject(includeInstance: boolean, msg: AnnualProductionEntryProto): AnnualProductionEntryProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnnualProductionEntryProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnnualProductionEntryProto;
    static deserializeBinaryFromReader(message: AnnualProductionEntryProto, reader: jspb.BinaryReader): AnnualProductionEntryProto;
}

export namespace AnnualProductionEntryProto {
    export type AsObject = {
        annualBeerProductionLitres: number,
        effectiveDate?: google_type_date_pb.Date.AsObject,
    }
}

export class SupplierManufacturerReadOnlyProto extends jspb.Message { 
    getIsTenant(): boolean;
    setIsTenant(value: boolean): SupplierManufacturerReadOnlyProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupplierManufacturerReadOnlyProto.AsObject;
    static toObject(includeInstance: boolean, msg: SupplierManufacturerReadOnlyProto): SupplierManufacturerReadOnlyProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupplierManufacturerReadOnlyProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupplierManufacturerReadOnlyProto;
    static deserializeBinaryFromReader(message: SupplierManufacturerReadOnlyProto, reader: jspb.BinaryReader): SupplierManufacturerReadOnlyProto;
}

export namespace SupplierManufacturerReadOnlyProto {
    export type AsObject = {
        isTenant: boolean,
    }
}
