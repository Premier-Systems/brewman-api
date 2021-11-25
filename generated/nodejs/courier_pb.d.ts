// package: bmapi.distribution.courier
// file: courier.proto

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

export class GetAllCouriersRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllCouriersRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllCouriersRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllCouriersRequestProto): GetAllCouriersRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllCouriersRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllCouriersRequestProto;
    static deserializeBinaryFromReader(message: GetAllCouriersRequestProto, reader: jspb.BinaryReader): GetAllCouriersRequestProto;
}

export namespace GetAllCouriersRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllCouriersResponseProto extends jspb.Message { 
    clearCouriersList(): void;
    getCouriersList(): Array<CourierProto>;
    setCouriersList(value: Array<CourierProto>): GetAllCouriersResponseProto;
    addCouriers(value?: CourierProto, index?: number): CourierProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllCouriersResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllCouriersResponseProto): GetAllCouriersResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllCouriersResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllCouriersResponseProto;
    static deserializeBinaryFromReader(message: GetAllCouriersResponseProto, reader: jspb.BinaryReader): GetAllCouriersResponseProto;
}

export namespace GetAllCouriersResponseProto {
    export type AsObject = {
        couriersList: Array<CourierProto.AsObject>,
    }
}

export class GetCourierRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetCourierRequestProto;
    getCourierId(): string;
    setCourierId(value: string): GetCourierRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCourierRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetCourierRequestProto): GetCourierRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCourierRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCourierRequestProto;
    static deserializeBinaryFromReader(message: GetCourierRequestProto, reader: jspb.BinaryReader): GetCourierRequestProto;
}

export namespace GetCourierRequestProto {
    export type AsObject = {
        tenantId: string,
        courierId: string,
    }
}

export class GetCourierResponseProto extends jspb.Message { 

    hasCourier(): boolean;
    clearCourier(): void;
    getCourier(): CourierProto | undefined;
    setCourier(value?: CourierProto): GetCourierResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCourierResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetCourierResponseProto): GetCourierResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCourierResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCourierResponseProto;
    static deserializeBinaryFromReader(message: GetCourierResponseProto, reader: jspb.BinaryReader): GetCourierResponseProto;
}

export namespace GetCourierResponseProto {
    export type AsObject = {
        courier?: CourierProto.AsObject,
    }
}

export class GetCouriersRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetCouriersRequestProto;
    clearCourierIdsList(): void;
    getCourierIdsList(): Array<string>;
    setCourierIdsList(value: Array<string>): GetCouriersRequestProto;
    addCourierIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCouriersRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetCouriersRequestProto): GetCouriersRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCouriersRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCouriersRequestProto;
    static deserializeBinaryFromReader(message: GetCouriersRequestProto, reader: jspb.BinaryReader): GetCouriersRequestProto;
}

export namespace GetCouriersRequestProto {
    export type AsObject = {
        tenantId: string,
        courierIdsList: Array<string>,
    }
}

export class GetCouriersResponseProto extends jspb.Message { 
    clearCouriersList(): void;
    getCouriersList(): Array<CourierProto>;
    setCouriersList(value: Array<CourierProto>): GetCouriersResponseProto;
    addCouriers(value?: CourierProto, index?: number): CourierProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCouriersResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetCouriersResponseProto): GetCouriersResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCouriersResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCouriersResponseProto;
    static deserializeBinaryFromReader(message: GetCouriersResponseProto, reader: jspb.BinaryReader): GetCouriersResponseProto;
}

export namespace GetCouriersResponseProto {
    export type AsObject = {
        couriersList: Array<CourierProto.AsObject>,
    }
}

export class CalculateNextDespatchDateByCourierRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): CalculateNextDespatchDateByCourierRequestProto;
    getCourierId(): string;
    setCourierId(value: string): CalculateNextDespatchDateByCourierRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateNextDespatchDateByCourierRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateNextDespatchDateByCourierRequestProto): CalculateNextDespatchDateByCourierRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateNextDespatchDateByCourierRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateNextDespatchDateByCourierRequestProto;
    static deserializeBinaryFromReader(message: CalculateNextDespatchDateByCourierRequestProto, reader: jspb.BinaryReader): CalculateNextDespatchDateByCourierRequestProto;
}

export namespace CalculateNextDespatchDateByCourierRequestProto {
    export type AsObject = {
        tenantId: string,
        courierId: string,
    }
}

export class CalculateNextDespatchDateByCourierResponseProto extends jspb.Message { 

    hasDespatchDate(): boolean;
    clearDespatchDate(): void;
    getDespatchDate(): google_type_date_pb.Date | undefined;
    setDespatchDate(value?: google_type_date_pb.Date): CalculateNextDespatchDateByCourierResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateNextDespatchDateByCourierResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateNextDespatchDateByCourierResponseProto): CalculateNextDespatchDateByCourierResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateNextDespatchDateByCourierResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateNextDespatchDateByCourierResponseProto;
    static deserializeBinaryFromReader(message: CalculateNextDespatchDateByCourierResponseProto, reader: jspb.BinaryReader): CalculateNextDespatchDateByCourierResponseProto;
}

export namespace CalculateNextDespatchDateByCourierResponseProto {
    export type AsObject = {
        despatchDate?: google_type_date_pb.Date.AsObject,
    }
}

export class CourierProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): CourierProto;
    getId(): string;
    setId(value: string): CourierProto;
    getLeadTimeDays(): number;
    setLeadTimeDays(value: number): CourierProto;
    getName(): string;
    setName(value: string): CourierProto;
    getNotes(): string;
    setNotes(value: string): CourierProto;
    clearDespatchDaysList(): void;
    getDespatchDaysList(): Array<common_enums_generated_pb.EnumDayOfWeek>;
    setDespatchDaysList(value: Array<common_enums_generated_pb.EnumDayOfWeek>): CourierProto;
    addDespatchDays(value: common_enums_generated_pb.EnumDayOfWeek, index?: number): common_enums_generated_pb.EnumDayOfWeek;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): CourierProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CourierProto.AsObject;
    static toObject(includeInstance: boolean, msg: CourierProto): CourierProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CourierProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CourierProto;
    static deserializeBinaryFromReader(message: CourierProto, reader: jspb.BinaryReader): CourierProto;
}

export namespace CourierProto {
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
