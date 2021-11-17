// package: bmapi.common
// file: common/arrayvalues.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class StringArrayValue extends jspb.Message { 
    clearValueList(): void;
    getValueList(): Array<string>;
    setValueList(value: Array<string>): StringArrayValue;
    addValue(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringArrayValue.AsObject;
    static toObject(includeInstance: boolean, msg: StringArrayValue): StringArrayValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StringArrayValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringArrayValue;
    static deserializeBinaryFromReader(message: StringArrayValue, reader: jspb.BinaryReader): StringArrayValue;
}

export namespace StringArrayValue {
    export type AsObject = {
        valueList: Array<string>,
    }
}

export class Int32ArrayValue extends jspb.Message { 
    clearValueList(): void;
    getValueList(): Array<number>;
    setValueList(value: Array<number>): Int32ArrayValue;
    addValue(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Int32ArrayValue.AsObject;
    static toObject(includeInstance: boolean, msg: Int32ArrayValue): Int32ArrayValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Int32ArrayValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Int32ArrayValue;
    static deserializeBinaryFromReader(message: Int32ArrayValue, reader: jspb.BinaryReader): Int32ArrayValue;
}

export namespace Int32ArrayValue {
    export type AsObject = {
        valueList: Array<number>,
    }
}
