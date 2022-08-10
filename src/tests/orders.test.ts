import {test} from 'vitest';
import {
  postItemV1GetEntireItemsByFilter,
  postOrderV1BuildOrderLines, postOrderV1CreateOrder, postOrderV1SaveOrder,
  postOutletV1GetAllOutlets
} from "../bmapi/services";
import {TENANT_ID} from "../auth";
import {EnumItemMainPurpose, EnumOrderSource} from "../bmapi/types";

import * as crypto from "crypto";

test("Creating Order", async () => {

  // 1) Find the outlet that we want to create the order for
  const allOutlets = await postOutletV1GetAllOutlets({
    tenantId: TENANT_ID
  })
  const outlet = allOutlets.data.outlets.filter(o => o.readOnly.code === "G4UBLA")[0];

  // 2) Find all the products
  const items = await postItemV1GetEntireItemsByFilter({
    tenantId: TENANT_ID,
    filter: {
      mainPurposes: [EnumItemMainPurpose.Product],
      codes: ["Star9GCask", "Star50012X500Case"]
    }
  });

  const orderHeader = await postOrderV1CreateOrder({
    tenantId: TENANT_ID,
    externalReference: "my-external-system-order-1",
    outletId: outlet.id,
    orderSource: EnumOrderSource.Other,
  })

  const caskId = crypto.randomUUID();
  const caseId = crypto.randomUUID();

  // Build the order lines (this will add default values and calculate prices from price lists etc.)
  const order = await postOrderV1BuildOrderLines({
    tenantId: TENANT_ID,
    items: [
      {
        lineId: caskId,
        stockItemId: items.data.results.entireItems.filter(x => x.details.code === "Star9GCask")[0].details.id,
        quantity: 2
      },
      {
        lineId: caseId,
        stockItemId: items.data.results.entireItems.filter(x => x.details.code === "Star50012X500Case")[0].details.id,
        quantity: 6
      }
    ],
    orderHeader: orderHeader.data.order.header
  });

  // as an example we want to override the price of cask for this order.
  const caskItem = order.data.results.lines.filter(l => l.id === caskId)[0];
  caskItem.lineNetPrice = 200.00;
  caskItem.lineVat = 40.00;

  await postOrderV1SaveOrder({
    tenantId: TENANT_ID,
    order: order.data.results
  })
})
