import { ChevronDown, PlusCircle } from "lucide-react";

export function OrderForm() {
  return (
    <section className="flex w-[430px] shrink-0 flex-col bg-background">
      <div className="grid grid-cols-3 border-b border-border text-[14px]">
        <button className="py-3 text-muted-foreground">Market</button>
        <button className="border-b-2 border-gold-strong py-3 font-semibold">Limit</button>
        <button className="flex items-center justify-center gap-1 py-3 text-muted-foreground">
          Stop Limit <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex items-center gap-2 px-4 py-3 text-[13px]">
        <span className="text-muted-foreground">Avbl</span>
        <span className="font-mono">0.00 USDT</span>
        <PlusCircle className="h-4 w-4 text-muted-foreground" />
      </div>

      <div className="grid grid-cols-3 gap-2 px-4">
        {["Cross", "20x", "M"].map((b) => (
          <button
            key={b}
            className="rounded-md border border-border bg-panel py-2 text-[14px] font-medium"
          >
            {b}
          </button>
        ))}
      </div>

      <div className="mt-3 px-4">
        <div className="flex items-center rounded-md border border-border bg-panel px-3 py-3">
          <input
            defaultValue="61789.0"
            className="min-w-0 flex-1 bg-transparent font-mono text-[17px] outline-none"
          />
          <span className="px-3 text-[14px] text-muted-foreground">USDT</span>
          <span className="h-5 w-px bg-border" />
          <span className="pl-3 text-[14px] font-medium">BBO</span>
        </div>

        <div className="mt-2 flex items-center rounded-md border border-border bg-panel px-3 py-3">
          <input
            placeholder="Size"
            className="min-w-0 flex-1 bg-transparent font-mono text-[15px] outline-none placeholder:text-muted-foreground"
          />
          <button className="flex items-center gap-1 text-[14px] text-muted-foreground">
            USDT <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="relative mt-6 mb-4 h-1 rounded-full bg-panel-2">
          <div className="absolute -top-[5px] left-0 h-[14px] w-[14px] rounded-full border-2 border-gold-strong bg-background" />
          {[25, 50, 75, 100].map((p) => (
            <span
              key={p}
              className="absolute -top-[2px] h-[6px] w-[6px] -translate-x-1/2 rotate-45 bg-panel-2"
              style={{ left: `${p}%` }}
            />
          ))}
        </div>

        <div className="space-y-3 py-2 text-[14px]">
          <label className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-sm border border-border bg-panel" />
            <span className="underline decoration-dotted underline-offset-4">TP/SL</span>
          </label>
          <label className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-sm border border-border bg-panel" />
            <span className="underline decoration-dotted underline-offset-4">Hidden Order</span>
          </label>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-sm border border-border bg-panel" />
              <span className="underline decoration-dotted underline-offset-4">Reduce-Only</span>
            </label>
            <button className="flex items-center gap-1 text-muted-foreground">
              GTC <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <button className="mt-4 w-full rounded-md bg-[var(--gradient-gold)] py-3.5 text-[16px] font-semibold text-primary-foreground shadow-[var(--shadow-panel)]">
          Connect Wallet
        </button>

        <div className="mt-5 space-y-3 text-[13px]">
          {[
            ["Liq.Price", "--", "Liq.Price", "--"],
            ["Margin", "0.00", "Margin", "0.00"],
          ].map(([l1, v1, l2, v2]) => (
            <div key={l1 + v1 + l2} className="flex justify-between">
              <span className="text-muted-foreground">
                {l1} <span className="font-mono text-foreground">{v1}</span>
              </span>
              <span className="text-muted-foreground">
                {l2} <span className="font-mono text-foreground">{v2}</span>
              </span>
            </div>
          ))}
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Max <span className="font-mono text-foreground">0.00 USDT</span>
            </span>
            <span className="text-muted-foreground">
              Max <span className="font-mono text-foreground">0.00 USDT</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}