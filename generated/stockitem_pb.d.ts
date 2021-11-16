// package: bmapi.stocks.stockitem
// file: stockitem.proto

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

export class GetAllStockItemsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetAllStockItemsRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllStockItemsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllStockItemsRequestProto): GetAllStockItemsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllStockItemsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllStockItemsRequestProto;
    static deserializeBinaryFromReader(message: GetAllStockItemsRequestProto, reader: jspb.BinaryReader): GetAllStockItemsRequestProto;
}

export namespace GetAllStockItemsRequestProto {
    export type AsObject = {
        tenantId: string,
    }
}

export class GetAllStockItemsResponseProto extends jspb.Message { 
    clearStockItemsList(): void;
    getStockItemsList(): Array<StockItemProto>;
    setStockItemsList(value: Array<StockItemProto>): GetAllStockItemsResponseProto;
    addStockItems(value?: StockItemProto, index?: number): StockItemProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllStockItemsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllStockItemsResponseProto): GetAllStockItemsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllStockItemsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllStockItemsResponseProto;
    static deserializeBinaryFromReader(message: GetAllStockItemsResponseProto, reader: jspb.BinaryReader): GetAllStockItemsResponseProto;
}

export namespace GetAllStockItemsResponseProto {
    export type AsObject = {
        stockItemsList: Array<StockItemProto.AsObject>,
    }
}

export class GetStockItemRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetStockItemRequestProto;
    getStockItemId(): string;
    setStockItemId(value: string): GetStockItemRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockItemRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockItemRequestProto): GetStockItemRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockItemRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockItemRequestProto;
    static deserializeBinaryFromReader(message: GetStockItemRequestProto, reader: jspb.BinaryReader): GetStockItemRequestProto;
}

export namespace GetStockItemRequestProto {
    export type AsObject = {
        tenantId: string,
        stockItemId: string,
    }
}

export class GetStockItemResponseProto extends jspb.Message { 

    hasStockItem(): boolean;
    clearStockItem(): void;
    getStockItem(): StockItemProto | undefined;
    setStockItem(value?: StockItemProto): GetStockItemResponseProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockItemResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockItemResponseProto): GetStockItemResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockItemResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockItemResponseProto;
    static deserializeBinaryFromReader(message: GetStockItemResponseProto, reader: jspb.BinaryReader): GetStockItemResponseProto;
}

export namespace GetStockItemResponseProto {
    export type AsObject = {
        stockItem?: StockItemProto.AsObject,
    }
}

export class GetStockItemsRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetStockItemsRequestProto;
    clearStockItemIdsList(): void;
    getStockItemIdsList(): Array<string>;
    setStockItemIdsList(value: Array<string>): GetStockItemsRequestProto;
    addStockItemIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockItemsRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockItemsRequestProto): GetStockItemsRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockItemsRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockItemsRequestProto;
    static deserializeBinaryFromReader(message: GetStockItemsRequestProto, reader: jspb.BinaryReader): GetStockItemsRequestProto;
}

export namespace GetStockItemsRequestProto {
    export type AsObject = {
        tenantId: string,
        stockItemIdsList: Array<string>,
    }
}

export class GetStockItemsResponseProto extends jspb.Message { 
    clearStockItemsList(): void;
    getStockItemsList(): Array<StockItemProto>;
    setStockItemsList(value: Array<StockItemProto>): GetStockItemsResponseProto;
    addStockItems(value?: StockItemProto, index?: number): StockItemProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockItemsResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockItemsResponseProto): GetStockItemsResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockItemsResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockItemsResponseProto;
    static deserializeBinaryFromReader(message: GetStockItemsResponseProto, reader: jspb.BinaryReader): GetStockItemsResponseProto;
}

export namespace GetStockItemsResponseProto {
    export type AsObject = {
        stockItemsList: Array<StockItemProto.AsObject>,
    }
}

export class GetStockItemsByFilterRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetStockItemsByFilterRequestProto;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): StockItemFilterProto | undefined;
    setFilter(value?: StockItemFilterProto): GetStockItemsByFilterRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockItemsByFilterRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockItemsByFilterRequestProto): GetStockItemsByFilterRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockItemsByFilterRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockItemsByFilterRequestProto;
    static deserializeBinaryFromReader(message: GetStockItemsByFilterRequestProto, reader: jspb.BinaryReader): GetStockItemsByFilterRequestProto;
}

export namespace GetStockItemsByFilterRequestProto {
    export type AsObject = {
        tenantId: string,
        filter?: StockItemFilterProto.AsObject,
    }
}

export class GetStockItemsByFilterResponseProto extends jspb.Message { 
    clearStockItemsList(): void;
    getStockItemsList(): Array<StockItemProto>;
    setStockItemsList(value: Array<StockItemProto>): GetStockItemsByFilterResponseProto;
    addStockItems(value?: StockItemProto, index?: number): StockItemProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStockItemsByFilterResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetStockItemsByFilterResponseProto): GetStockItemsByFilterResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStockItemsByFilterResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStockItemsByFilterResponseProto;
    static deserializeBinaryFromReader(message: GetStockItemsByFilterResponseProto, reader: jspb.BinaryReader): GetStockItemsByFilterResponseProto;
}

export namespace GetStockItemsByFilterResponseProto {
    export type AsObject = {
        stockItemsList: Array<StockItemProto.AsObject>,
    }
}

export class GetGlCodeOverridesForStockItemRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): GetGlCodeOverridesForStockItemRequestProto;
    getStockItemId(): string;
    setStockItemId(value: string): GetGlCodeOverridesForStockItemRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGlCodeOverridesForStockItemRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetGlCodeOverridesForStockItemRequestProto): GetGlCodeOverridesForStockItemRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGlCodeOverridesForStockItemRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGlCodeOverridesForStockItemRequestProto;
    static deserializeBinaryFromReader(message: GetGlCodeOverridesForStockItemRequestProto, reader: jspb.BinaryReader): GetGlCodeOverridesForStockItemRequestProto;
}

export namespace GetGlCodeOverridesForStockItemRequestProto {
    export type AsObject = {
        tenantId: string,
        stockItemId: string,
    }
}

export class GetGlCodeOverridesForStockItemResponseProto extends jspb.Message { 
    clearGlCodeOverridesList(): void;
    getGlCodeOverridesList(): Array<GlCodeOverrideForStockItemProto>;
    setGlCodeOverridesList(value: Array<GlCodeOverrideForStockItemProto>): GetGlCodeOverridesForStockItemResponseProto;
    addGlCodeOverrides(value?: GlCodeOverrideForStockItemProto, index?: number): GlCodeOverrideForStockItemProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGlCodeOverridesForStockItemResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: GetGlCodeOverridesForStockItemResponseProto): GetGlCodeOverridesForStockItemResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGlCodeOverridesForStockItemResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGlCodeOverridesForStockItemResponseProto;
    static deserializeBinaryFromReader(message: GetGlCodeOverridesForStockItemResponseProto, reader: jspb.BinaryReader): GetGlCodeOverridesForStockItemResponseProto;
}

export namespace GetGlCodeOverridesForStockItemResponseProto {
    export type AsObject = {
        glCodeOverridesList: Array<GlCodeOverrideForStockItemProto.AsObject>,
    }
}

export class SetStockItemIsHiddenRequestProto extends jspb.Message { 
    getTenantId(): string;
    setTenantId(value: string): SetStockItemIsHiddenRequestProto;
    getStockItemId(): string;
    setStockItemId(value: string): SetStockItemIsHiddenRequestProto;
    getHide(): boolean;
    setHide(value: boolean): SetStockItemIsHiddenRequestProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetStockItemIsHiddenRequestProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetStockItemIsHiddenRequestProto): SetStockItemIsHiddenRequestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetStockItemIsHiddenRequestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetStockItemIsHiddenRequestProto;
    static deserializeBinaryFromReader(message: SetStockItemIsHiddenRequestProto, reader: jspb.BinaryReader): SetStockItemIsHiddenRequestProto;
}

export namespace SetStockItemIsHiddenRequestProto {
    export type AsObject = {
        tenantId: string,
        stockItemId: string,
        hide: boolean,
    }
}

export class SetStockItemIsHiddenResponseProto extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetStockItemIsHiddenResponseProto.AsObject;
    static toObject(includeInstance: boolean, msg: SetStockItemIsHiddenResponseProto): SetStockItemIsHiddenResponseProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetStockItemIsHiddenResponseProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetStockItemIsHiddenResponseProto;
    static deserializeBinaryFromReader(message: SetStockItemIsHiddenResponseProto, reader: jspb.BinaryReader): SetStockItemIsHiddenResponseProto;
}

export namespace SetStockItemIsHiddenResponseProto {
    export type AsObject = {
    }
}

export class StockItemProto extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): StockItemProto;
    getId(): string;
    setId(value: string): StockItemProto;
    getIsHidden(): boolean;
    setIsHidden(value: boolean): StockItemProto;
    getName(): string;
    setName(value: string): StockItemProto;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCode(value?: google_protobuf_wrappers_pb.StringValue): StockItemProto;
    getDeliveryBatchTracked(): boolean;
    setDeliveryBatchTracked(value: boolean): StockItemProto;
    getIsMaterial(): boolean;
    setIsMaterial(value: boolean): StockItemProto;
    getCostPrice(): number;
    setCostPrice(value: number): StockItemProto;
    getIsPerishable(): boolean;
    setIsPerishable(value: boolean): StockItemProto;
    getIsStockTracked(): boolean;
    setIsStockTracked(value: boolean): StockItemProto;
    getIsBatchTracked(): boolean;
    setIsBatchTracked(value: boolean): StockItemProto;
    getNotes(): string;
    setNotes(value: string): StockItemProto;

    hasPackageTypeId(): boolean;
    clearPackageTypeId(): void;
    getPackageTypeId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPackageTypeId(value?: google_protobuf_wrappers_pb.StringValue): StockItemProto;

    hasStockGroupId(): boolean;
    clearStockGroupId(): void;
    getStockGroupId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setStockGroupId(value?: google_protobuf_wrappers_pb.StringValue): StockItemProto;
    getUnitOfMeasureId(): string;
    setUnitOfMeasureId(value: string): StockItemProto;
    getVatCodeId(): string;
    setVatCodeId(value: string): StockItemProto;
    getAlcoholType(): common_enums_generated_pb.EnumAlcoholType;
    setAlcoholType(value: common_enums_generated_pb.EnumAlcoholType): StockItemProto;
    getAbv(): number;
    setAbv(value: number): StockItemProto;
    getDutiableLitres(): number;
    setDutiableLitres(value: number): StockItemProto;

    hasManufacturerId(): boolean;
    clearManufacturerId(): void;
    getManufacturerId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setManufacturerId(value?: google_protobuf_wrappers_pb.StringValue): StockItemProto;

    hasPlato(): boolean;
    clearPlato(): void;
    getPlato(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setPlato(value?: google_protobuf_wrappers_pb.DoubleValue): StockItemProto;
    getLabelUsesBrandTastingNotes(): boolean;
    setLabelUsesBrandTastingNotes(value: boolean): StockItemProto;
    getLabelTastingNotes(): string;
    setLabelTastingNotes(value: string): StockItemProto;
    getLabelUsesBrandIngredientsAndAllergens(): boolean;
    setLabelUsesBrandIngredientsAndAllergens(value: boolean): StockItemProto;
    getLabelIngredientsAndAllergens(): string;
    setLabelIngredientsAndAllergens(value: string): StockItemProto;

    hasSupplierId(): boolean;
    clearSupplierId(): void;
    getSupplierId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSupplierId(value?: google_protobuf_wrappers_pb.StringValue): StockItemProto;
    getSupplierPartNo(): string;
    setSupplierPartNo(value: string): StockItemProto;

    hasPurchasePrice(): boolean;
    clearPurchasePrice(): void;
    getPurchasePrice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setPurchasePrice(value?: google_protobuf_wrappers_pb.DoubleValue): StockItemProto;

    hasPurchaseGlCodeId(): boolean;
    clearPurchaseGlCodeId(): void;
    getPurchaseGlCodeId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPurchaseGlCodeId(value?: google_protobuf_wrappers_pb.StringValue): StockItemProto;

    hasPurchasePackSize(): boolean;
    clearPurchasePackSize(): void;
    getPurchasePackSize(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setPurchasePackSize(value?: google_protobuf_wrappers_pb.DoubleValue): StockItemProto;
    getLeadTimeDays(): number;
    setLeadTimeDays(value: number): StockItemProto;
    getAllowSales(): boolean;
    setAllowSales(value: boolean): StockItemProto;

    hasProductBrandId(): boolean;
    clearProductBrandId(): void;
    getProductBrandId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setProductBrandId(value?: google_protobuf_wrappers_pb.StringValue): StockItemProto;

    hasExportWeight(): boolean;
    clearExportWeight(): void;
    getExportWeight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setExportWeight(value?: google_protobuf_wrappers_pb.DoubleValue): StockItemProto;

    hasPricingCategoryId(): boolean;
    clearPricingCategoryId(): void;
    getPricingCategoryId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPricingCategoryId(value?: google_protobuf_wrappers_pb.StringValue): StockItemProto;
    getRackToOrder(): boolean;
    setRackToOrder(value: boolean): StockItemProto;
    getWeightKg(): number;
    setWeightKg(value: number): StockItemProto;

    hasSalesGlCodeId(): boolean;
    clearSalesGlCodeId(): void;
    getSalesGlCodeId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSalesGlCodeId(value?: google_protobuf_wrappers_pb.StringValue): StockItemProto;
    getCountryOfOrigin(): string;
    setCountryOfOrigin(value: string): StockItemProto;

    hasNetWeightKg(): boolean;
    clearNetWeightKg(): void;
    getNetWeightKg(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setNetWeightKg(value?: google_protobuf_wrappers_pb.DoubleValue): StockItemProto;
    getEanBarcodeNumber(): string;
    setEanBarcodeNumber(value: string): StockItemProto;
    getBeerflexCode(): string;
    setBeerflexCode(value: string): StockItemProto;
    getExportCommodityCode(): string;
    setExportCommodityCode(value: string): StockItemProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StockItemProto.AsObject;
    static toObject(includeInstance: boolean, msg: StockItemProto): StockItemProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StockItemProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StockItemProto;
    static deserializeBinaryFromReader(message: StockItemProto, reader: jspb.BinaryReader): StockItemProto;
}

export namespace StockItemProto {
    export type AsObject = {
        version: number,
        id: string,
        isHidden: boolean,
        name: string,
        code?: google_protobuf_wrappers_pb.StringValue.AsObject,
        deliveryBatchTracked: boolean,
        isMaterial: boolean,
        costPrice: number,
        isPerishable: boolean,
        isStockTracked: boolean,
        isBatchTracked: boolean,
        notes: string,
        packageTypeId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        stockGroupId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        unitOfMeasureId: string,
        vatCodeId: string,
        alcoholType: common_enums_generated_pb.EnumAlcoholType,
        abv: number,
        dutiableLitres: number,
        manufacturerId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        plato?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        labelUsesBrandTastingNotes: boolean,
        labelTastingNotes: string,
        labelUsesBrandIngredientsAndAllergens: boolean,
        labelIngredientsAndAllergens: string,
        supplierId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        supplierPartNo: string,
        purchasePrice?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        purchaseGlCodeId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        purchasePackSize?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        leadTimeDays: number,
        allowSales: boolean,
        productBrandId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        exportWeight?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        pricingCategoryId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        rackToOrder: boolean,
        weightKg: number,
        salesGlCodeId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        countryOfOrigin: string,
        netWeightKg?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        eanBarcodeNumber: string,
        beerflexCode: string,
        exportCommodityCode: string,
    }
}

export class StockItemFilterProto extends jspb.Message { 
    getIncludeMaterials(): boolean;
    setIncludeMaterials(value: boolean): StockItemFilterProto;
    getIncludeProducts(): boolean;
    setIncludeProducts(value: boolean): StockItemFilterProto;

    hasLimitStockGroupIds(): boolean;
    clearLimitStockGroupIds(): void;
    getLimitStockGroupIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitStockGroupIds(value?: common_arrayvalues_pb.StringArrayValue): StockItemFilterProto;

    hasLimitSupplierIds(): boolean;
    clearLimitSupplierIds(): void;
    getLimitSupplierIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitSupplierIds(value?: common_arrayvalues_pb.StringArrayValue): StockItemFilterProto;

    hasLimitPurchaseGlCodeIds(): boolean;
    clearLimitPurchaseGlCodeIds(): void;
    getLimitPurchaseGlCodeIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitPurchaseGlCodeIds(value?: common_arrayvalues_pb.StringArrayValue): StockItemFilterProto;

    hasLimitSalesGlCodeIds(): boolean;
    clearLimitSalesGlCodeIds(): void;
    getLimitSalesGlCodeIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitSalesGlCodeIds(value?: common_arrayvalues_pb.StringArrayValue): StockItemFilterProto;

    hasLimitVatCodeIds(): boolean;
    clearLimitVatCodeIds(): void;
    getLimitVatCodeIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitVatCodeIds(value?: common_arrayvalues_pb.StringArrayValue): StockItemFilterProto;

    hasLimitCodes(): boolean;
    clearLimitCodes(): void;
    getLimitCodes(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitCodes(value?: common_arrayvalues_pb.StringArrayValue): StockItemFilterProto;

    hasLimitStockItemIds(): boolean;
    clearLimitStockItemIds(): void;
    getLimitStockItemIds(): common_arrayvalues_pb.StringArrayValue | undefined;
    setLimitStockItemIds(value?: common_arrayvalues_pb.StringArrayValue): StockItemFilterProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StockItemFilterProto.AsObject;
    static toObject(includeInstance: boolean, msg: StockItemFilterProto): StockItemFilterProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StockItemFilterProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StockItemFilterProto;
    static deserializeBinaryFromReader(message: StockItemFilterProto, reader: jspb.BinaryReader): StockItemFilterProto;
}

export namespace StockItemFilterProto {
    export type AsObject = {
        includeMaterials: boolean,
        includeProducts: boolean,
        limitStockGroupIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
        limitSupplierIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
        limitPurchaseGlCodeIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
        limitSalesGlCodeIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
        limitVatCodeIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
        limitCodes?: common_arrayvalues_pb.StringArrayValue.AsObject,
        limitStockItemIds?: common_arrayvalues_pb.StringArrayValue.AsObject,
    }
}

export class GlCodeOverrideForStockItemProto extends jspb.Message { 
    getOutletTypeId(): string;
    setOutletTypeId(value: string): GlCodeOverrideForStockItemProto;

    hasGlCodeId(): boolean;
    clearGlCodeId(): void;
    getGlCodeId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGlCodeId(value?: google_protobuf_wrappers_pb.StringValue): GlCodeOverrideForStockItemProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GlCodeOverrideForStockItemProto.AsObject;
    static toObject(includeInstance: boolean, msg: GlCodeOverrideForStockItemProto): GlCodeOverrideForStockItemProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GlCodeOverrideForStockItemProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GlCodeOverrideForStockItemProto;
    static deserializeBinaryFromReader(message: GlCodeOverrideForStockItemProto, reader: jspb.BinaryReader): GlCodeOverrideForStockItemProto;
}

export namespace GlCodeOverrideForStockItemProto {
    export type AsObject = {
        outletTypeId: string,
        glCodeId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}
