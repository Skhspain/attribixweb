// src/app/analytics/attribution/logic.ts
import type { CustomerConversion } from "./data";

export type Model = "last" | "first" | "linear" | "timeDecay";

export type ChannelTotals = Record<string, { revenue: number; conversions: number }>;

export function attribute(customers: CustomerConversion[], model: Model) {
  const totals: ChannelTotals = {};
  const perCustomer: {
    customerId: string;
    orderId: string;
    orderValue: number;
    shares: Record<string, number>; // channel -> revenue share
    path: CustomerConversion["path"];
    customerName: string;
  }[] = [];

  const push = (ch: string, rev: number) => {
    if (!totals[ch]) totals[ch] = { revenue: 0, conversions: 0 };
    totals[ch].revenue += rev;
  };

  for (const c of customers) {
    const touches = c.path;
    const L = touches.length;
    const shares: Record<string, number> = {};

    if (L === 0) continue;

    if (model === "last") {
      const ch = touches[L - 1].source;
      shares[ch] = c.orderValue;
    } else if (model === "first") {
      const ch = touches[0].source;
      shares[ch] = c.orderValue;
    } else if (model === "linear") {
      const w = 1 / L;
      for (const t of touches) shares[t.source] = (shares[t.source] || 0) + c.orderValue * w;
    } else if (model === "timeDecay") {
      // simple positional decay: more recent gets higher weight
      let sumW = 0;
      const weights = touches.map((_, i) => Math.pow(2, i)); // oldest i=0 .. newest i=L-1
      sumW = weights.reduce((a, b) => a + b, 0);
      touches.forEach((t, i) => {
        const w = weights[i] / sumW;
        shares[t.source] = (shares[t.source] || 0) + c.orderValue * w;
      });
    }

    // record totals
    for (const [ch, rev] of Object.entries(shares)) {
      push(ch, rev);
    }
    // conversion counts: give +1 to channels that received any credit on this order
    for (const ch of Object.keys(shares)) {
      totals[ch].conversions += 1;
    }

    perCustomer.push({
      customerId: c.customerId,
      customerName: c.customerName,
      orderId: c.orderId,
      orderValue: c.orderValue,
      shares,
      path: c.path,
    });
  }

  // sort channels by revenue desc
  const channels = Object.entries(totals)
    .map(([channel, v]) => ({ channel, ...v }))
    .sort((a, b) => b.revenue - a.revenue);

  const totalRevenue = channels.reduce((s, r) => s + r.revenue, 0);
  const totalConversions = channels.reduce((s, r) => s + r.conversions, 0);

  return { channels, totalRevenue, totalConversions, perCustomer };
}

export function fmtCurrency(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}
