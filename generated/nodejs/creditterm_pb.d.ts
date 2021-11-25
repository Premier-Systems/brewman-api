// package: bmapi.outlets.creditterm
// file: creditterm.proto

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

export class GetAllCreditTermsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllCreditTermsRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllCreditTermsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllCreditTermsRequestProto): GetAllCreditTermsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllCreditTermsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllCreditTermsRequestProto;
    static deserializeBinaryFromReader(message: GetAllCreditTermsRequestProto, reader: jspb.BinaryReader): GetAllCreditTermsRequestProto;
}

export namespace GetAllCreditTermsRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllCreditTermsResponseProto extends jspb.Message { 
    clearCreditTermsList(): void;
    getCreditTermsList(): Array<CreditTermProto>;
    setCreditTermsList(value: Array<CreditTermProto>): GetAllCreditTermsResponseProto;
    addCreditTerms(value?: CreditTermProto, index?: number): CreditTermProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllCreditTermsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllCreditTermsResponseProto): GetAllCreditTermsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllCreditTermsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllCreditTermsResponseProto;
    static deserializeBinaryFromReader(message: GetAllCreditTermsResponseProto, reader: jspb.BinaryReader): GetAllCreditTermsResponseProto;
}

export namespace GetAllCreditTermsResponseProto {
    export type AsObject = {
        creditTermsList: Array<CreditTermProto.AsObject>,
    }
}

export class GetCreditTermRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetCreditTermRequestProto;
    getCreditTermId(): string;
    setCreditTermId(value: string): GetCreditTermRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCreditTermRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetCreditTermRequestProto): GetCreditTermRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCreditTermRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCreditTermRequestProto;
    static deserializeBinaryFromReader(message: GetCreditTermRequestProto, reader: jspb.BinaryReader): GetCreditTermRequestProto;
}

export namespace GetCreditTermRequestProto {
    export type AsObject = {
        tenantId: string,
        creditTermId: string,
    }
}

export class GetCreditTermResponseProto extends jspb.Message { 

    hasCreditTerm(): boolean;
    clearCreditTerm(): void;
    getCreditTerm(): CreditTermProto | undefined;
    setCreditTerm(value?: CreditTermProto): GetCreditTermResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCreditTermResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetCreditTermResponseProto): GetCreditTermResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCreditTermResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCreditTermResponseProto;
    static deserializeBinaryFromReader(message: GetCreditTermResponseProto, reader: jspb.BinaryReader): GetCreditTermResponseProto;
}

export namespace GetCreditTermResponseProto {
    export type AsObject = {
        creditTerm?: CreditTermProto.AsObject,
    }
}

export class GetCreditTermsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetCreditTermsRequestProto;
    clearCreditTermIdsList(): void;
    getCreditTermIdsList(): Array<string>;
    setCreditTermIdsList(value: Array<string>): GetCreditTermsRequestProto;
    addCreditTermIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCreditTermsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetCreditTermsRequestProto): GetCreditTermsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCreditTermsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCreditTermsRequestProto;
    static deserializeBinaryFromReader(message: GetCreditTermsRequestProto, reader: jspb.BinaryReader): GetCreditTermsRequestProto;
}

export namespace GetCreditTermsRequestProto {
    export type AsObject = {
        tenantId: string,
        creditTermIdsList: Array<string>,
    }
}

export class GetCreditTermsResponseProto extends jspb.Message { 
    clearCreditTermsList(): void;
    getCreditTermsList(): Array<CreditTermProto>;
    setCreditTermsList(value: Array<CreditTermProto>): GetCreditTermsResponseProto;
    addCreditTerms(value?: CreditTermProto, index?: number): CreditTermProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCreditTermsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetCreditTermsResponseProto): GetCreditTermsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCreditTermsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCreditTermsResponseProto;
    static deserializeBinaryFromReader(message: GetCreditTermsResponseProto, reader: jspb.BinaryReader): GetCreditTermsResponseProto;
}

export namespace GetCreditTermsResponseProto {
    export type AsObject = {
        creditTermsList: Array<CreditTermProto.AsObject>,
    }
}

export class CreditTermProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): CreditTermProto;
    getId(): string;
    setId(value: string): CreditTermProto;
    getCalculationDay(): number;
    setCalculationDay(value: number): CreditTermProto;
    getCalculationType(): common_enums_generated_pb.EnumCreditCalculationType;
    setCalculationType(value: common_enums_generated_pb.EnumCreditCalculationType): CreditTermProto;
    getName(): string;
    setName(value: string): CreditTermProto;
    getShowBalance(): boolean;
    setShowBalance(value: boolean): CreditTermProto;
    getAccountsAnalysisCode(): string;
    setAccountsAnalysisCode(value: string): CreditTermProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): CreditTermProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreditTermProto.AsObject;
    static toObject(includeInstance: boolean, msg: CreditTermProto): CreditTermProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreditTermProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreditTermProto;
    static deserializeBinaryFromReader(message: CreditTermProto, reader: jspb.BinaryReader): CreditTermProto;
}

export namespace CreditTermProto {
    export type AsObject = {
        version: number,
        id: string,
        calculationDay: number,
        calculationType: common_enums_generated_pb.EnumCreditCalculationType,
        name: string,
        showBalance: boolean,
        accountsAnalysisCode: string,
        isHidden: boolean,
    }
}
