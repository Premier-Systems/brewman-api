// package: bmapi.common
// file: common/enumarrayvalues.generated.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_enums_generated_pb from "../common/enums.generated_pb";

export class EnumStockItemTypeArrayValue extends jspb.Message { 
    clearValueList(): void;
    getValueList(): Array<common_enums_generated_pb.EnumStockItemType>;
    setValueList(value: Array<common_enums_generated_pb.EnumStockItemType>): EnumStockItemTypeArrayValue;
    addValue(value: common_enums_generated_pb.EnumStockItemType, index?: number): common_enums_generated_pb.EnumStockItemType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnumStockItemTypeArrayValue.AsObject;
    static toObject(includeInstance: boolean, msg: EnumStockItemTypeArrayValue): EnumStockItemTypeArrayValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnumStockItemTypeArrayValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnumStockItemTypeArrayValue;
    static deserializeBinaryFromReader(message: EnumStockItemTypeArrayValue, reader: jspb.BinaryReader): EnumStockItemTypeArrayValue;
}

export namespace EnumStockItemTypeArrayValue {
    export type AsObject = {
        valueList: Array<common_enums_generated_pb.EnumStockItemType>,
    }
}

export class EnumOrderSourceArrayValue extends jspb.Message { 
    clearValueList(): void;
    getValueList(): Array<common_enums_generated_pb.EnumOrderSource>;
    setValueList(value: Array<common_enums_generated_pb.EnumOrderSource>): EnumOrderSourceArrayValue;
    addValue(value: common_enums_generated_pb.EnumOrderSource, index?: number): common_enums_generated_pb.EnumOrderSource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnumOrderSourceArrayValue.AsObject;
    static toObject(includeInstance: boolean, msg: EnumOrderSourceArrayValue): EnumOrderSourceArrayValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnumOrderSourceArrayValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnumOrderSourceArrayValue;
    static deserializeBinaryFromReader(message: EnumOrderSourceArrayValue, reader: jspb.BinaryReader): EnumOrderSourceArrayValue;
}

export namespace EnumOrderSourceArrayValue {
    export type AsObject = {
        valueList: Array<common_enums_generated_pb.EnumOrderSource>,
    }
}

export class EnumDistributionTypeArrayValue extends jspb.Message { 
    clearValueList(): void;
    getValueList(): Array<common_enums_generated_pb.EnumDistributionType>;
    setValueList(value: Array<common_enums_generated_pb.EnumDistributionType>): EnumDistributionTypeArrayValue;
    addValue(value: common_enums_generated_pb.EnumDistributionType, index?: number): common_enums_generated_pb.EnumDistributionType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnumDistributionTypeArrayValue.AsObject;
    static toObject(includeInstance: boolean, msg: EnumDistributionTypeArrayValue): EnumDistributionTypeArrayValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnumDistributionTypeArrayValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnumDistributionTypeArrayValue;
    static deserializeBinaryFromReader(message: EnumDistributionTypeArrayValue, reader: jspb.BinaryReader): EnumDistributionTypeArrayValue;
}

export namespace EnumDistributionTypeArrayValue {
    export type AsObject = {
        valueList: Array<common_enums_generated_pb.EnumDistributionType>,
    }
}

export class EnumOrderStatusArrayValue extends jspb.Message { 
    clearValueList(): void;
    getValueList(): Array<common_enums_generated_pb.EnumOrderStatus>;
    setValueList(value: Array<common_enums_generated_pb.EnumOrderStatus>): EnumOrderStatusArrayValue;
    addValue(value: common_enums_generated_pb.EnumOrderStatus, index?: number): common_enums_generated_pb.EnumOrderStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnumOrderStatusArrayValue.AsObject;
    static toObject(includeInstance: boolean, msg: EnumOrderStatusArrayValue): EnumOrderStatusArrayValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnumOrderStatusArrayValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnumOrderStatusArrayValue;
    static deserializeBinaryFromReader(message: EnumOrderStatusArrayValue, reader: jspb.BinaryReader): EnumOrderStatusArrayValue;
}

export namespace EnumOrderStatusArrayValue {
    export type AsObject = {
        valueList: Array<common_enums_generated_pb.EnumOrderStatus>,
    }
}
