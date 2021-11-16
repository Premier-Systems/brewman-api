// package: bmapi.outlets.outlet
// file: outlet.proto

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

export class GetAllOutletsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllOutletsRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllOutletsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllOutletsRequestProto): GetAllOutletsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllOutletsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllOutletsRequestProto;
    static deserializeBinaryFromReader(message: GetAllOutletsRequestProto, reader: jspb.BinaryReader): GetAllOutletsRequestProto;
}

export namespace GetAllOutletsRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllOutletsResponseProto extends jspb.Message { 
    clearOutletsList(): void;
    getOutletsList(): Array<OutletProto>;
    setOutletsList(value: Array<OutletProto>): GetAllOutletsResponseProto;
    addOutlets(value?: OutletProto, index?: number): OutletProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllOutletsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllOutletsResponseProto): GetAllOutletsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllOutletsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllOutletsResponseProto;
    static deserializeBinaryFromReader(message: GetAllOutletsResponseProto, reader: jspb.BinaryReader): GetAllOutletsResponseProto;
}

export namespace GetAllOutletsResponseProto {
    export type AsObject = {
        outletsList: Array<OutletProto.AsObject>,
    }
}

export class GetOutletsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetOutletsRequestProto;
    clearOutletIdList(): void;
    getOutletIdList(): Array<string>;
    setOutletIdList(value: Array<string>): GetOutletsRequestProto;
    addOutletId(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOutletsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOutletsRequestProto): GetOutletsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOutletsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOutletsRequestProto;
    static deserializeBinaryFromReader(message: GetOutletsRequestProto, reader: jspb.BinaryReader): GetOutletsRequestProto;
}

export namespace GetOutletsRequestProto {
    export type AsObject = {
        tenantId: string,
        outletIdList: Array<string>,
    }
}

export class GetOutletsResponseProto extends jspb.Message { 
    clearOutletsList(): void;
    getOutletsList(): Array<OutletProto>;
    setOutletsList(value: Array<OutletProto>): GetOutletsResponseProto;
    addOutlets(value?: OutletProto, index?: number): OutletProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOutletsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOutletsResponseProto): GetOutletsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOutletsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOutletsResponseProto;
    static deserializeBinaryFromReader(message: GetOutletsResponseProto, reader: jspb.BinaryReader): GetOutletsResponseProto;
}

export namespace GetOutletsResponseProto {
    export type AsObject = {
        outletsList: Array<OutletProto.AsObject>,
    }
}

export class GetOutletRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetOutletRequestProto;
    getOutletId(): string;
    setOutletId(value: string): GetOutletRequestProto;

    hasEnsureLatLongs(): boolean;
    clearEnsureLatLongs(): void;
    getEnsureLatLongs(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnsureLatLongs(value?: google_protobuf_wrappers_pb.BoolValue): GetOutletRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOutletRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOutletRequestProto): GetOutletRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOutletRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOutletRequestProto;
    static deserializeBinaryFromReader(message: GetOutletRequestProto, reader: jspb.BinaryReader): GetOutletRequestProto;
}

export namespace GetOutletRequestProto {
    export type AsObject = {
        tenantId: string,
        outletId: string,
        ensureLatLongs?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class GetOutletResponseProto extends jspb.Message { 

    hasOutlet(): boolean;
    clearOutlet(): void;
    getOutlet(): OutletProto | undefined;
    setOutlet(value?: OutletProto): GetOutletResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOutletResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOutletResponseProto): GetOutletResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOutletResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOutletResponseProto;
    static deserializeBinaryFromReader(message: GetOutletResponseProto, reader: jspb.BinaryReader): GetOutletResponseProto;
}

export namespace GetOutletResponseProto {
    export type AsObject = {
        outlet?: OutletProto.AsObject,
    }
}

export class SetOutletIsHiddenRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SetOutletIsHiddenRequestProto;
    getOutletId(): string;
    setOutletId(value: string): SetOutletIsHiddenRequestProto;
    getHide(): boolean;
    setHide(value: boolean): SetOutletIsHiddenRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOutletIsHiddenRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetOutletIsHiddenRequestProto): SetOutletIsHiddenRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOutletIsHiddenRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOutletIsHiddenRequestProto;
    static deserializeBinaryFromReader(message: SetOutletIsHiddenRequestProto, reader: jspb.BinaryReader): SetOutletIsHiddenRequestProto;
}

export namespace SetOutletIsHiddenRequestProto {
    export type AsObject = {
        tenantId: string,
        outletId: string,
        hide: boolean,
    }
}

export class SetOutletIsHiddenResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOutletIsHiddenResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetOutletIsHiddenResponseProto): SetOutletIsHiddenResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOutletIsHiddenResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOutletIsHiddenResponseProto;
    static deserializeBinaryFromReader(message: SetOutletIsHiddenResponseProto, reader: jspb.BinaryReader): SetOutletIsHiddenResponseProto;
}

export namespace SetOutletIsHiddenResponseProto {
    export type AsObject = {
    }
}

export class GetOutletsByFilterRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetOutletsByFilterRequestProto;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): OutletFilterProto | undefined;
    setFilter(value?: OutletFilterProto): GetOutletsByFilterRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOutletsByFilterRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOutletsByFilterRequestProto): GetOutletsByFilterRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOutletsByFilterRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOutletsByFilterRequestProto;
    static deserializeBinaryFromReader(message: GetOutletsByFilterRequestProto, reader: jspb.BinaryReader): GetOutletsByFilterRequestProto;
}

export namespace GetOutletsByFilterRequestProto {
    export type AsObject = {
        tenantId: string,
        filter?: OutletFilterProto.AsObject,
    }
}

export class GetOutletsByFilterResponseProto extends jspb.Message { 
    clearOutletsList(): void;
    getOutletsList(): Array<OutletProto>;
    setOutletsList(value: Array<OutletProto>): GetOutletsByFilterResponseProto;
    addOutlets(value?: OutletProto, index?: number): OutletProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOutletsByFilterResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetOutletsByFilterResponseProto): GetOutletsByFilterResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOutletsByFilterResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOutletsByFilterResponseProto;
    static deserializeBinaryFromReader(message: GetOutletsByFilterResponseProto, reader: jspb.BinaryReader): GetOutletsByFilterResponseProto;
}

export namespace GetOutletsByFilterResponseProto {
    export type AsObject = {
        outletsList: Array<OutletProto.AsObject>,
    }
}

export class OutletProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): OutletProto;
    getId(): string;
    setId(value: string): OutletProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): OutletProto;
    getBusinessName(): string;
    setBusinessName(value: string): OutletProto;
    getDisplayName(): string;
    setDisplayName(value: string): OutletProto;
    getTelephoneNumber(): string;
    setTelephoneNumber(value: string): OutletProto;
    getEmailAddress(): string;
    setEmailAddress(value: string): OutletProto;

    hasGroupId(): boolean;
    clearGroupId(): void;
    getGroupId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGroupId(value?: google_protobuf_wrappers_pb.StringValue): OutletProto;

    hasSalesAreaId(): boolean;
    clearSalesAreaId(): void;
    getSalesAreaId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSalesAreaId(value?: google_protobuf_wrappers_pb.StringValue): OutletProto;

    hasSalesCodeId(): boolean;
    clearSalesCodeId(): void;
    getSalesCodeId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSalesCodeId(value?: google_protobuf_wrappers_pb.StringValue): OutletProto;
    getOutletRatingId(): string;
    setOutletRatingId(value: string): OutletProto;

    hasOutletTypeId(): boolean;
    clearOutletTypeId(): void;
    getOutletTypeId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOutletTypeId(value?: google_protobuf_wrappers_pb.StringValue): OutletProto;
    getStockLocationId(): string;
    setStockLocationId(value: string): OutletProto;
    getMainAddressLine1(): string;
    setMainAddressLine1(value: string): OutletProto;
    getMainAddressLine2(): string;
    setMainAddressLine2(value: string): OutletProto;
    getMainAddressLine3(): string;
    setMainAddressLine3(value: string): OutletProto;
    getMainAddressLine4(): string;
    setMainAddressLine4(value: string): OutletProto;
    getMainAddressLine5(): string;
    setMainAddressLine5(value: string): OutletProto;
    getMainAddressLine6(): string;
    setMainAddressLine6(value: string): OutletProto;
    getMainAddressPostcode(): string;
    setMainAddressPostcode(value: string): OutletProto;
    getPriceListId(): string;
    setPriceListId(value: string): OutletProto;
    getVatNumber(): string;
    setVatNumber(value: string): OutletProto;
    getCreditTermsSet(): boolean;
    setCreditTermsSet(value: boolean): OutletProto;

    hasCreditTermsId(): boolean;
    clearCreditTermsId(): void;
    getCreditTermsId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCreditTermsId(value?: google_protobuf_wrappers_pb.StringValue): OutletProto;

    hasCreditLimit(): boolean;
    clearCreditLimit(): void;
    getCreditLimit(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setCreditLimit(value?: google_protobuf_wrappers_pb.DoubleValue): OutletProto;

    hasReviewDate(): boolean;
    clearReviewDate(): void;
    getReviewDate(): google_type_date_pb.Date | undefined;
    setReviewDate(value?: google_type_date_pb.Date): OutletProto;
    getBankName(): string;
    setBankName(value: string): OutletProto;
    getBankSortCode(): string;
    setBankSortCode(value: string): OutletProto;
    getBankAccountNumber(): string;
    setBankAccountNumber(value: string): OutletProto;
    getEmailInvoices(): boolean;
    setEmailInvoices(value: boolean): OutletProto;

    hasDefaultInvoiceTemplateId(): boolean;
    clearDefaultInvoiceTemplateId(): void;
    getDefaultInvoiceTemplateId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDefaultInvoiceTemplateId(value?: google_protobuf_wrappers_pb.StringValue): OutletProto;
    getDefaultInvoiceRecipient(): string;
    setDefaultInvoiceRecipient(value: string): OutletProto;
    getDefaultInvoiceEmailAddress(): string;
    setDefaultInvoiceEmailAddress(value: string): OutletProto;
    getHasDefaultInvoiceAddress(): boolean;
    setHasDefaultInvoiceAddress(value: boolean): OutletProto;
    getDefaultInvoiceAddressBusiness(): string;
    setDefaultInvoiceAddressBusiness(value: string): OutletProto;
    getDefaultInvoiceAddressLine1(): string;
    setDefaultInvoiceAddressLine1(value: string): OutletProto;
    getDefaultInvoiceAddressLine2(): string;
    setDefaultInvoiceAddressLine2(value: string): OutletProto;
    getDefaultInvoiceAddressLine3(): string;
    setDefaultInvoiceAddressLine3(value: string): OutletProto;
    getDefaultInvoiceAddressLine4(): string;
    setDefaultInvoiceAddressLine4(value: string): OutletProto;
    getDefaultInvoiceAddressLine5(): string;
    setDefaultInvoiceAddressLine5(value: string): OutletProto;
    getDefaultInvoiceAddressLine6(): string;
    setDefaultInvoiceAddressLine6(value: string): OutletProto;
    getDefaultInvoiceAddressPostcode(): string;
    setDefaultInvoiceAddressPostcode(value: string): OutletProto;
    getCountryCode(): string;
    setCountryCode(value: string): OutletProto;
    getAccountsDepartmentNumber(): number;
    setAccountsDepartmentNumber(value: number): OutletProto;

    hasDefaultDespatchNoteTemplateId(): boolean;
    clearDefaultDespatchNoteTemplateId(): void;
    getDefaultDespatchNoteTemplateId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDefaultDespatchNoteTemplateId(value?: google_protobuf_wrappers_pb.StringValue): OutletProto;

    hasCourierId(): boolean;
    clearCourierId(): void;
    getCourierId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCourierId(value?: google_protobuf_wrappers_pb.StringValue): OutletProto;

    hasDeliveryAreaId(): boolean;
    clearDeliveryAreaId(): void;
    getDeliveryAreaId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDeliveryAreaId(value?: google_protobuf_wrappers_pb.StringValue): OutletProto;

    hasDeliveryTimeEnd(): boolean;
    clearDeliveryTimeEnd(): void;
    getDeliveryTimeEnd(): google_type_timeofday_pb.TimeOfDay | undefined;
    setDeliveryTimeEnd(value?: google_type_timeofday_pb.TimeOfDay): OutletProto;

    hasDeliveryTimeStart(): boolean;
    clearDeliveryTimeStart(): void;
    getDeliveryTimeStart(): google_type_timeofday_pb.TimeOfDay | undefined;
    setDeliveryTimeStart(value?: google_type_timeofday_pb.TimeOfDay): OutletProto;
    getDistributionType(): common_enums_generated_pb.EnumDistributionType;
    setDistributionType(value: common_enums_generated_pb.EnumDistributionType): OutletProto;
    getStopMinutes(): number;
    setStopMinutes(value: number): OutletProto;
    getDeliveryNoteText(): string;
    setDeliveryNoteText(value: string): OutletProto;
    getDrayRunNotes(): string;
    setDrayRunNotes(value: string): OutletProto;
    getEoriNumber(): string;
    setEoriNumber(value: string): OutletProto;
    getExportingIncotermCode(): common_enums_generated_pb.EnumExportIncotermCode;
    setExportingIncotermCode(value: common_enums_generated_pb.EnumExportIncotermCode): OutletProto;
    getExportingIncotermPlace(): string;
    setExportingIncotermPlace(value: string): OutletProto;
    getDefaultDeliveryEmailAddress(): string;
    setDefaultDeliveryEmailAddress(value: string): OutletProto;
    getDefaultDeliveryTelephoneNumber(): string;
    setDefaultDeliveryTelephoneNumber(value: string): OutletProto;
    getDefaultDeliveryRecipient(): string;
    setDefaultDeliveryRecipient(value: string): OutletProto;
    getHasDefaultDeliveryAddress(): boolean;
    setHasDefaultDeliveryAddress(value: boolean): OutletProto;
    getDefaultDeliveryAddressBusiness(): string;
    setDefaultDeliveryAddressBusiness(value: string): OutletProto;
    getDefaultDeliveryAddressLine1(): string;
    setDefaultDeliveryAddressLine1(value: string): OutletProto;
    getDefaultDeliveryAddressLine2(): string;
    setDefaultDeliveryAddressLine2(value: string): OutletProto;
    getDefaultDeliveryAddressLine3(): string;
    setDefaultDeliveryAddressLine3(value: string): OutletProto;
    getDefaultDeliveryAddressLine4(): string;
    setDefaultDeliveryAddressLine4(value: string): OutletProto;
    getDefaultDeliveryAddressLine5(): string;
    setDefaultDeliveryAddressLine5(value: string): OutletProto;
    getDefaultDeliveryAddressLine6(): string;
    setDefaultDeliveryAddressLine6(value: string): OutletProto;
    getDefaultDeliveryAddressPostcode(): string;
    setDefaultDeliveryAddressPostcode(value: string): OutletProto;
    getBeerflexCode(): string;
    setBeerflexCode(value: string): OutletProto;
    getStandardOrderType(): common_enums_generated_pb.EnumStandardOrder;
    setStandardOrderType(value: common_enums_generated_pb.EnumStandardOrder): OutletProto;
    getVatCodeId(): string;
    setVatCodeId(value: string): OutletProto;
    getApplicationFormReturned(): boolean;
    setApplicationFormReturned(value: boolean): OutletProto;
    getTradingTerms(): string;
    setTradingTerms(value: string): OutletProto;
    getCompanyRegNumber(): string;
    setCompanyRegNumber(value: string): OutletProto;
    getSalesNotes(): string;
    setSalesNotes(value: string): OutletProto;

    hasReadOnly(): boolean;
    clearReadOnly(): void;
    getReadOnly(): OutletReadOnlyProto | undefined;
    setReadOnly(value?: OutletReadOnlyProto): OutletProto;
    getIban(): string;
    setIban(value: string): OutletProto;
    getBic(): string;
    setBic(value: string): OutletProto;
    getOutletGroupCode(): string;
    setOutletGroupCode(value: string): OutletProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutletProto.AsObject;
    static toObject(includeInstance: boolean, msg: OutletProto): OutletProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutletProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutletProto;
    static deserializeBinaryFromReader(message: OutletProto, reader: jspb.BinaryReader): OutletProto;
}

export namespace OutletProto {
    export type AsObject = {
        version: number,
        id: string,
        isHidden: boolean,
        businessName: string,
        displayName: string,
        telephoneNumber: string,
        emailAddress: string,
        groupId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        salesAreaId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        salesCodeId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        outletRatingId: string,
        outletTypeId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        stockLocationId: string,
        mainAddressLine1: string,
        mainAddressLine2: string,
        mainAddressLine3: string,
        mainAddressLine4: string,
        mainAddressLine5: string,
        mainAddressLine6: string,
        mainAddressPostcode: string,
        priceListId: string,
        vatNumber: string,
        creditTermsSet: boolean,
        creditTermsId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        creditLimit?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        reviewDate?: google_type_date_pb.Date.AsObject,
        bankName: string,
        bankSortCode: string,
        bankAccountNumber: string,
        emailInvoices: boolean,
        defaultInvoiceTemplateId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        defaultInvoiceRecipient: string,
        defaultInvoiceEmailAddress: string,
        hasDefaultInvoiceAddress: boolean,
        defaultInvoiceAddressBusiness: string,
        defaultInvoiceAddressLine1: string,
        defaultInvoiceAddressLine2: string,
        defaultInvoiceAddressLine3: string,
        defaultInvoiceAddressLine4: string,
        defaultInvoiceAddressLine5: string,
        defaultInvoiceAddressLine6: string,
        defaultInvoiceAddressPostcode: string,
        countryCode: string,
        accountsDepartmentNumber: number,
        defaultDespatchNoteTemplateId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        courierId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        deliveryAreaId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        deliveryTimeEnd?: google_type_timeofday_pb.TimeOfDay.AsObject,
        deliveryTimeStart?: google_type_timeofday_pb.TimeOfDay.AsObject,
        distributionType: common_enums_generated_pb.EnumDistributionType,
        stopMinutes: number,
        deliveryNoteText: string,
        drayRunNotes: string,
        eoriNumber: string,
        exportingIncotermCode: common_enums_generated_pb.EnumExportIncotermCode,
        exportingIncotermPlace: string,
        defaultDeliveryEmailAddress: string,
        defaultDeliveryTelephoneNumber: string,
        defaultDeliveryRecipient: string,
        hasDefaultDeliveryAddress: boolean,
        defaultDeliveryAddressBusiness: string,
        defaultDeliveryAddressLine1: string,
        defaultDeliveryAddressLine2: string,
        defaultDeliveryAddressLine3: string,
        defaultDeliveryAddressLine4: string,
        defaultDeliveryAddressLine5: string,
        defaultDeliveryAddressLine6: string,
        defaultDeliveryAddressPostcode: string,
        beerflexCode: string,
        standardOrderType: common_enums_generated_pb.EnumStandardOrder,
        vatCodeId: string,
        applicationFormReturned: boolean,
        tradingTerms: string,
        companyRegNumber: string,
        salesNotes: string,
        readOnly?: OutletReadOnlyProto.AsObject,
        iban: string,
        bic: string,
        outletGroupCode: string,
    }
}

export class OutletFilterProto extends jspb.Message { 

    hasLimitPriceListIds(): boolean;
    clearLimitPriceListIds(): void;
    getLimitPriceListIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitPriceListIds(value?: common_arrayvalues_pb.StringArrayValue): OutletFilterProto;

    hasLimitStockLocationIds(): boolean;
    clearLimitStockLocationIds(): void;
    getLimitStockLocationIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitStockLocationIds(value?: common_arrayvalues_pb.StringArrayValue): OutletFilterProto;

    hasLimitVatCodeIds(): boolean;
    clearLimitVatCodeIds(): void;
    getLimitVatCodeIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitVatCodeIds(value?: common_arrayvalues_pb.StringArrayValue): OutletFilterProto;

    hasLimitOutletGroupIds(): boolean;
    clearLimitOutletGroupIds(): void;
    getLimitOutletGroupIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitOutletGroupIds(value?: common_arrayvalues_pb.StringArrayValue): OutletFilterProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutletFilterProto.AsObject;
    static toObject(includeInstance: boolean, msg: OutletFilterProto): OutletFilterProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutletFilterProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutletFilterProto;
    static deserializeBinaryFromReader(message: OutletFilterProto, reader: jspb.BinaryReader): OutletFilterProto;
}

export namespace OutletFilterProto {
    export type AsObject = {
        limitPriceListIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
        limitStockLocationIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
        limitVatCodeIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
        limitOutletGroupIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
    }
}

export class OutletReadOnlyProto extends jspb.Message { 
    getIsRetail(): boolean;
    setIsRetail(value: boolean): OutletReadOnlyProto;

    hasDefaultDeliveryLatitude(): boolean;
    clearDefaultDeliveryLatitude(): void;
    getDefaultDeliveryLatitude(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setDefaultDeliveryLatitude(value?: google_protobuf_wrappers_pb.DoubleValue): OutletReadOnlyProto;

    hasDefaultDeliveryLongitude(): boolean;
    clearDefaultDeliveryLongitude(): void;
    getDefaultDeliveryLongitude(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setDefaultDeliveryLongitude(value?: google_protobuf_wrappers_pb.DoubleValue): OutletReadOnlyProto;

    hasMainLongitude(): boolean;
    clearMainLongitude(): void;
    getMainLongitude(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMainLongitude(value?: google_protobuf_wrappers_pb.DoubleValue): OutletReadOnlyProto;

    hasMainLatitude(): boolean;
    clearMainLatitude(): void;
    getMainLatitude(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMainLatitude(value?: google_protobuf_wrappers_pb.DoubleValue): OutletReadOnlyProto;
    getCode(): string;
    setCode(value: string): OutletReadOnlyProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutletReadOnlyProto.AsObject;
    static toObject(includeInstance: boolean, msg: OutletReadOnlyProto): OutletReadOnlyProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutletReadOnlyProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutletReadOnlyProto;
    static deserializeBinaryFromReader(message: OutletReadOnlyProto, reader: jspb.BinaryReader): OutletReadOnlyProto;
}

export namespace OutletReadOnlyProto {
    export type AsObject = {
        isRetail: boolean,
        defaultDeliveryLatitude?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        defaultDeliveryLongitude?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        mainLongitude?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        mainLatitude?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        code: string,
    }
}
