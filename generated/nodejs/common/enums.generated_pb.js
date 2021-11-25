// source: common/enums.generated.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.bmapi.common.EnumAlcoholType', null, global);
goog.exportSymbol('proto.bmapi.common.EnumCreditCalculationType', null, global);
goog.exportSymbol('proto.bmapi.common.EnumDayOfWeek', null, global);
goog.exportSymbol('proto.bmapi.common.EnumDiscountBasis', null, global);
goog.exportSymbol('proto.bmapi.common.EnumDistributionType', null, global);
goog.exportSymbol('proto.bmapi.common.EnumExportIncotermCode', null, global);
goog.exportSymbol('proto.bmapi.common.EnumOrderSource', null, global);
goog.exportSymbol('proto.bmapi.common.EnumOrderStatus', null, global);
goog.exportSymbol('proto.bmapi.common.EnumRetailPaymentMethod', null, global);
goog.exportSymbol('proto.bmapi.common.EnumStandardOrder', null, global);
goog.exportSymbol('proto.bmapi.common.EnumStockItemType', null, global);
goog.exportSymbol('proto.bmapi.common.EnumStockMovementReferenceSource', null, global);
goog.exportSymbol('proto.bmapi.common.EnumYesNoEither', null, global);
/**
 * @enum {number}
 */
proto.bmapi.common.EnumStockMovementReferenceSource = {
  ENUMSTOCKMOVEMENTREFERENCESOURCE_NONE: 0,
  ENUMSTOCKMOVEMENTREFERENCESOURCE_ORDER: 1,
  ENUMSTOCKMOVEMENTREFERENCESOURCE_CREDIT: 2,
  ENUMSTOCKMOVEMENTREFERENCESOURCE_TRANSFERFROM: 3,
  ENUMSTOCKMOVEMENTREFERENCESOURCE_TRANSFERTO: 4,
  ENUMSTOCKMOVEMENTREFERENCESOURCE_ASSEMBLYINPUT: 5,
  ENUMSTOCKMOVEMENTREFERENCESOURCE_ASSEMBLYOUTPUT: 6,
  ENUMSTOCKMOVEMENTREFERENCESOURCE_PURCHASEORDER: 7
};

/**
 * @enum {number}
 */
proto.bmapi.common.EnumYesNoEither = {
  ENUMYESNOEITHER_EITHER: 0,
  ENUMYESNOEITHER_YES: 1,
  ENUMYESNOEITHER_NO: 2
};

/**
 * @enum {number}
 */
proto.bmapi.common.EnumAlcoholType = {
  ENUMALCOHOLTYPE_NONE: 0,
  ENUMALCOHOLTYPE_BEER: 1,
  ENUMALCOHOLTYPE_STILLCIDERPERRY: 2,
  ENUMALCOHOLTYPE_SPARKLINGCIDERPERRY: 3,
  ENUMALCOHOLTYPE_STILLWINE: 4,
  ENUMALCOHOLTYPE_SPARKLINGWINE: 5,
  ENUMALCOHOLTYPE_SPIRITS: 6,
  ENUMALCOHOLTYPE_SCOTCHWHISKY: 7,
  ENUMALCOHOLTYPE_IRISHWHISKEY: 8,
  ENUMALCOHOLTYPE_TRADITIONALAFRICANBEERFROMMALT: 9,
  ENUMALCOHOLTYPE_BEERFROMMALT: 10,
  ENUMALCOHOLTYPE_TRADITIONALAFRICANBEERNOTFROMMALT: 11,
  ENUMALCOHOLTYPE_BEERNOTFROMMALT: 12,
  ENUMALCOHOLTYPE_BRANDY: 13,
  ENUMALCOHOLTYPE_SPIRITSFROMGRAPE: 14,
  ENUMALCOHOLTYPE_WHISKY: 15,
  ENUMALCOHOLTYPE_RUMANDSUGARSPIRITS: 16,
  ENUMALCOHOLTYPE_GIN: 17,
  ENUMALCOHOLTYPE_VODKA: 18
};

/**
 * @enum {number}
 */
proto.bmapi.common.EnumStockItemType = {
  ENUMSTOCKITEMTYPE_UNKNOWN: 0,
  ENUMSTOCKITEMTYPE_MATERIAL: 1,
  ENUMSTOCKITEMTYPE_PRODUCT: 2
};

/**
 * @enum {number}
 */
proto.bmapi.common.EnumDistributionType = {
  ENUMDISTRIBUTIONTYPE_NONE: 0,
  ENUMDISTRIBUTIONTYPE_DELIVERY: 1,
  ENUMDISTRIBUTIONTYPE_COURIER: 2,
  ENUMDISTRIBUTIONTYPE_COLLECTION: 3
};

/**
 * @enum {number}
 */
proto.bmapi.common.EnumExportIncotermCode = {
  ENUMEXPORTINCOTERMCODE_NONE: 0,
  ENUMEXPORTINCOTERMCODE_EXW: 1,
  ENUMEXPORTINCOTERMCODE_FCA: 2,
  ENUMEXPORTINCOTERMCODE_FAS: 3,
  ENUMEXPORTINCOTERMCODE_FOB: 4,
  ENUMEXPORTINCOTERMCODE_CFR: 5,
  ENUMEXPORTINCOTERMCODE_CIF: 6,
  ENUMEXPORTINCOTERMCODE_CIP: 7,
  ENUMEXPORTINCOTERMCODE_DPU: 8,
  ENUMEXPORTINCOTERMCODE_DDP: 9,
  ENUMEXPORTINCOTERMCODE_CPT: 10,
  ENUMEXPORTINCOTERMCODE_DAP: 11
};

/**
 * @enum {number}
 */
proto.bmapi.common.EnumStandardOrder = {
  ENUMSTANDARDORDER_FULLPRICEDUTYPAID: 0,
  ENUMSTANDARDORDER_PRICEEXCLUDINGDUTYDUTYSUSPENDED: 1,
  ENUMSTANDARDORDER_FULLPRICEDUTYPAIDELSEWHERE: 2,
  ENUMSTANDARDORDER_EXPORTDUTYSUSPENDED: 3
};

/**
 * @enum {number}
 */
proto.bmapi.common.EnumCreditCalculationType = {
  ENUMCREDITCALCULATIONTYPE_NONE: 0,
  ENUMCREDITCALCULATIONTYPE_OFFOLLOWINGMONTH: 1,
  ENUMCREDITCALCULATIONTYPE_DAYSAFTERINVOICE: 2,
  ENUMCREDITCALCULATIONTYPE_DAYSAFTERINVOICEMONTH: 3,
  ENUMCREDITCALCULATIONTYPE_OFCURRENTMONTH: 4
};

/**
 * @enum {number}
 */
proto.bmapi.common.EnumOrderSource = {
  ENUMORDERSOURCE_NONE: 0,
  ENUMORDERSOURCE_BREWMAN: 1,
  ENUMORDERSOURCE_WOOCOMMERCE: 2,
  ENUMORDERSOURCE_SHOPIFY: 3,
  ENUMORDERSOURCE_SELLAR: 4
};

/**
 * @enum {number}
 */
proto.bmapi.common.EnumOrderStatus = {
  ENUMORDERSTATUS_NONE: 0,
  ENUMORDERSTATUS_OPEN: 1,
  ENUMORDERSTATUS_COMPLETE: 2,
  ENUMORDERSTATUS_HISTORIC: 3,
  ENUMORDERSTATUS_CANCELLED: 4,
  ENUMORDERSTATUS_POSTING: 5
};

/**
 * @enum {number}
 */
proto.bmapi.common.EnumRetailPaymentMethod = {
  ENUMRETAILPAYMENTMETHOD_NONE: 0,
  ENUMRETAILPAYMENTMETHOD_DEBITCREDITCARD: 1,
  ENUMRETAILPAYMENTMETHOD_OTHER: 2,
  ENUMRETAILPAYMENTMETHOD_CASH: 3
};

/**
 * @enum {number}
 */
proto.bmapi.common.EnumDiscountBasis = {
  ENUMDISCOUNTBASIS_NONE: 0,
  ENUMDISCOUNTBASIS_PERCENT: 1,
  ENUMDISCOUNTBASIS_CURRENCYPERUNIT: 2,
  ENUMDISCOUNTBASIS_CURRENCYPERBARREL: 3
};

/**
 * @enum {number}
 */
proto.bmapi.common.EnumDayOfWeek = {
  ENUMDAYOFWEEK_NONE: 0,
  ENUMDAYOFWEEK_MONDAY: 1,
  ENUMDAYOFWEEK_TUESDAY: 2,
  ENUMDAYOFWEEK_WEDNESDAY: 3,
  ENUMDAYOFWEEK_THURSDAY: 4,
  ENUMDAYOFWEEK_FRIDAY: 5,
  ENUMDAYOFWEEK_SATURDAY: 6,
  ENUMDAYOFWEEK_SUNDAY: 7
};

goog.object.extend(exports, proto.bmapi.common);
