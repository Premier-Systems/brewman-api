// package: bmapi.distribution.deliveryarea
// file: deliveryarea.proto

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

export class GetAllDeliveryAreasRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllDeliveryAreasRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllDeliveryAreasRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllDeliveryAreasRequestProto): GetAllDeliveryAreasRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllDeliveryAreasRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllDeliveryAreasRequestProto;
    static deserializeBinaryFromReader(message: GetAllDeliveryAreasRequestProto, reader: jspb.BinaryReader): GetAllDeliveryAreasRequestProto;
}

export namespace GetAllDeliveryAreasRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllDeliveryAreasResponseProto extends jspb.Message { 
    clearDeliveryAreasList(): void;
    getDeliveryAreasList(): Array<DeliveryAreaProto>;
    setDeliveryAreasList(value: Array<DeliveryAreaProto>): GetAllDeliveryAreasResponseProto;
    addDeliveryAreas(value?: DeliveryAreaProto, index?: number): DeliveryAreaProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllDeliveryAreasResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllDeliveryAreasResponseProto): GetAllDeliveryAreasResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllDeliveryAreasResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllDeliveryAreasResponseProto;
    static deserializeBinaryFromReader(message: GetAllDeliveryAreasResponseProto, reader: jspb.BinaryReader): GetAllDeliveryAreasResponseProto;
}

export namespace GetAllDeliveryAreasResponseProto {
    export type AsObject = {
        deliveryAreasList: Array<DeliveryAreaProto.AsObject>,
    }
}

export class GetDeliveryAreaRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetDeliveryAreaRequestProto;
    getDeliveryAreaId(): string;
    setDeliveryAreaId(value: string): GetDeliveryAreaRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDeliveryAreaRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetDeliveryAreaRequestProto): GetDeliveryAreaRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDeliveryAreaRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDeliveryAreaRequestProto;
    static deserializeBinaryFromReader(message: GetDeliveryAreaRequestProto, reader: jspb.BinaryReader): GetDeliveryAreaRequestProto;
}

export namespace GetDeliveryAreaRequestProto {
    export type AsObject = {
        tenantId: string,
        deliveryAreaId: string,
    }
}

export class GetDeliveryAreaResponseProto extends jspb.Message { 

    hasDeliveryArea(): boolean;
    clearDeliveryArea(): void;
    getDeliveryArea(): DeliveryAreaProto | undefined;
    setDeliveryArea(value?: DeliveryAreaProto): GetDeliveryAreaResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDeliveryAreaResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetDeliveryAreaResponseProto): GetDeliveryAreaResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDeliveryAreaResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDeliveryAreaResponseProto;
    static deserializeBinaryFromReader(message: GetDeliveryAreaResponseProto, reader: jspb.BinaryReader): GetDeliveryAreaResponseProto;
}

export namespace GetDeliveryAreaResponseProto {
    export type AsObject = {
        deliveryArea?: DeliveryAreaProto.AsObject,
    }
}

export class GetDeliveryAreasRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetDeliveryAreasRequestProto;
    clearDeliveryAreaIdsList(): void;
    getDeliveryAreaIdsList(): Array<string>;
    setDeliveryAreaIdsList(value: Array<string>): GetDeliveryAreasRequestProto;
    addDeliveryAreaIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDeliveryAreasRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetDeliveryAreasRequestProto): GetDeliveryAreasRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDeliveryAreasRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDeliveryAreasRequestProto;
    static deserializeBinaryFromReader(message: GetDeliveryAreasRequestProto, reader: jspb.BinaryReader): GetDeliveryAreasRequestProto;
}

export namespace GetDeliveryAreasRequestProto {
    export type AsObject = {
        tenantId: string,
        deliveryAreaIdsList: Array<string>,
    }
}

export class GetDeliveryAreasResponseProto extends jspb.Message { 
    clearDeliveryAreasList(): void;
    getDeliveryAreasList(): Array<DeliveryAreaProto>;
    setDeliveryAreasList(value: Array<DeliveryAreaProto>): GetDeliveryAreasResponseProto;
    addDeliveryAreas(value?: DeliveryAreaProto, index?: number): DeliveryAreaProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDeliveryAreasResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetDeliveryAreasResponseProto): GetDeliveryAreasResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDeliveryAreasResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDeliveryAreasResponseProto;
    static deserializeBinaryFromReader(message: GetDeliveryAreasResponseProto, reader: jspb.BinaryReader): GetDeliveryAreasResponseProto;
}

export namespace GetDeliveryAreasResponseProto {
    export type AsObject = {
        deliveryAreasList: Array<DeliveryAreaProto.AsObject>,
    }
}

export class CalculateNextDespatchDateByDeliveryAreaRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): CalculateNextDespatchDateByDeliveryAreaRequestProto;
    getDeliveryAreaId(): string;
    setDeliveryAreaId(value: string): CalculateNextDespatchDateByDeliveryAreaRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateNextDespatchDateByDeliveryAreaRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateNextDespatchDateByDeliveryAreaRequestProto): CalculateNextDespatchDateByDeliveryAreaRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateNextDespatchDateByDeliveryAreaRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateNextDespatchDateByDeliveryAreaRequestProto;
    static deserializeBinaryFromReader(message: CalculateNextDespatchDateByDeliveryAreaRequestProto, reader: jspb.BinaryReader): CalculateNextDespatchDateByDeliveryAreaRequestProto;
}

export namespace CalculateNextDespatchDateByDeliveryAreaRequestProto {
    export type AsObject = {
        tenantId: string,
        deliveryAreaId: string,
    }
}

export class CalculateNextDespatchDateByDeliveryAreaResponseProto extends jspb.Message { 

    hasDespatchDate(): boolean;
    clearDespatchDate(): void;
    getDespatchDate(): google_type_date_pb.Date | undefined;
    setDespatchDate(value?: google_type_date_pb.Date): CalculateNextDespatchDateByDeliveryAreaResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateNextDespatchDateByDeliveryAreaResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateNextDespatchDateByDeliveryAreaResponseProto): CalculateNextDespatchDateByDeliveryAreaResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateNextDespatchDateByDeliveryAreaResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateNextDespatchDateByDeliveryAreaResponseProto;
    static deserializeBinaryFromReader(message: CalculateNextDespatchDateByDeliveryAreaResponseProto, reader: jspb.BinaryReader): CalculateNextDespatchDateByDeliveryAreaResponseProto;
}

export namespace CalculateNextDespatchDateByDeliveryAreaResponseProto {
    export type AsObject = {
        despatchDate?: google_type_date_pb.Date.AsObject,
    }
}

export class DeliveryAreaProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): DeliveryAreaProto;
    getId(): string;
    setId(value: string): DeliveryAreaProto;
    getLeadTimeDays(): number;
    setLeadTimeDays(value: number): DeliveryAreaProto;
    getName(): string;
    setName(value: string): DeliveryAreaProto;
    getNotes(): string;
    setNotes(value: string): DeliveryAreaProto;
    clearDespatchDaysList(): void;
    getDespatchDaysList(): Array<common_enums_generated_pb.EnumDayOfWeek>;
    setDespatchDaysList(value: Array<common_enums_generated_pb.EnumDayOfWeek>): DeliveryAreaProto;
    addDespatchDays(value: common_enums_generated_pb.EnumDayOfWeek, index?: number): common_enums_generated_pb.EnumDayOfWeek;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): DeliveryAreaProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeliveryAreaProto.AsObject;
    static toObject(includeInstance: boolean, msg: DeliveryAreaProto): DeliveryAreaProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeliveryAreaProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeliveryAreaProto;
    static deserializeBinaryFromReader(message: DeliveryAreaProto, reader: jspb.BinaryReader): DeliveryAreaProto;
}

export namespace DeliveryAreaProto {
    export type AsObject = {
        version: number,
        id: string,
        leadTimeDays: number,
        name: string,
        notes: string,
        despatchDaysList: Array<common_enums_generated_pb.EnumDayOfWeek>,
        isHidden: boolean,
    }
}
