import { createFileRoute } from "@tanstack/react-router";

import { TopNav } from "@/components/dex/TopNav";
import { MarketBar } from "@/components/dex/MarketBar";
import { ChartPanel } from "@/components/dex/ChartPanel";
import { OrderBook } from "@/components/dex/OrderBook";
import { OrderForm } from "@/components/dex/OrderForm";
import { FooterTicker } from "@/components/dex/FooterTicker";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aster DEX — BTCUSDT Perpetual Trading Terminal" },
      {
        name: "description",
        content:
          "Trade BTCUSDT perpetuals on Aster: live order book, candlestick chart, funding rate and limit orders in a warm light terminal.",
      },
      { property: "og:title", content: "Aster DEX — BTCUSDT Perpetual Trading Terminal" },
      {
        property: "og:description",
        content:
          "Live order book, candlestick chart and limit order ticket for BTCUSDT perpetuals on Aster.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="h-screen overflow-y-auto bg-panel-2 p-[5px]">
      <h1 className="sr-only">Aster DEX BTCUSDT perpetual trading interface</h1>
      <div className="flex h-full min-h-0 flex-col gap-[5px]">
        <div className="shrink-0 overflow-hidden rounded-2xl shadow-[var(--shadow-panel)]">
          <TopNav />
        </div>
        <div className="flex min-h-0 flex-1 gap-[5px] pb-[200px] [&>*]:h-[calc(100%+200px)]">
          <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-[5px]">
            <div className="shrink-0 overflow-hidden rounded-2xl shadow-[var(--shadow-panel)]">
              <MarketBar />
            </div>
            <div className="flex min-h-0 flex-1 overflow-hidden rounded-2xl shadow-[var(--shadow-panel)]">
              <ChartPanel />
            </div>
          </div>
          <div className="min-h-0 overflow-hidden rounded-2xl shadow-[var(--shadow-panel)]">
            <OrderBook />
          </div>
          <div className="min-h-0 self-start overflow-hidden rounded-2xl shadow-[var(--shadow-panel)] [&&]:h-full">
            <OrderForm />
          </div>
        </div>
        <div className="shrink-0 overflow-hidden rounded-2xl shadow-[var(--shadow-panel)]">
          <FooterTicker />
        </div>
      </div>
    </div>
  );
}
