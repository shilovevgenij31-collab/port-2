export function HeroProductVisual() {
  return (
    <div aria-hidden="true" className="relative h-[600px] w-full">
      <div
        className="absolute -inset-2"
        style={{
          background: "radial-gradient(ellipse 280px 210px at 90% 94%, rgba(0,0,0,0.26), transparent 65%)",
        }}
      />
      <div
        className="absolute inset-x-[16%] bottom-[-2%] h-[38px]"
        style={{ background: "radial-gradient(ellipse, rgba(0,0,0,0.85), transparent 72%)" }}
      />

      {/* back panel: processing / pipeline — secondary, recedes, tucked into the corner */}
      <div
        className="hero-float absolute left-[4%] top-[8%] h-[56%] w-[44%] overflow-hidden rounded-[18px] border p-5"
        style={{
          borderColor: "var(--color-border)",
          background:
            "radial-gradient(120% 85% at 16% 10%, rgba(255,255,255,0.03), transparent 44%), linear-gradient(155deg, rgba(44,45,50,0.97) 0%, rgba(23,24,27,0.96) 38%, rgba(13,14,16,0.98) 74%, rgba(8,8,9,0.98) 100%)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.11) inset, 0 14px 26px -24px rgba(0,0,0,0.5) inset, 0 0 0 1px rgba(0,0,0,0.28), 0 22px 40px -22px rgba(0,0,0,0.55)",
          transform: "rotate(-3deg)",
        }}
      >
        <div className="mb-3 flex items-center justify-between border-b border-white/[0.04] pb-3">
          <div className="text-[10.5px] uppercase tracking-wider text-[var(--color-text-muted)]">Обработка</div>
          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
        </div>

        <div
          className="relative flex flex-col rounded-[14px]"
          style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.02), 0 0 0 1px rgba(0,0,0,0.12) inset" }}
        >
          <div
            className="rounded-[12px] p-3"
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0.32), rgba(0,0,0,0.1))",
              boxShadow:
                "0 1px 0 rgba(0,0,0,0.5) inset, 0 -1px 0 rgba(255,255,255,0.025) inset, 0 0 0 1px rgba(0,0,0,0.25) inset",
            }}
          >
            <div className="relative flex flex-col gap-2 pl-0.5">
              <span
                className="absolute left-[5px] top-1 bottom-1 w-px"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))" }}
              />
              <div className="relative flex items-center gap-2.5">
                <span className="relative z-[1] h-[11px] w-[11px] flex-shrink-0 rounded-full border border-[rgba(52,211,153,0.4)] bg-[rgba(52,211,153,0.15)]" />
                <div className="h-1.5 w-[58%] rounded-[3px] bg-white/[0.05]" />
              </div>
              <div className="relative flex items-center gap-2.5">
                <span className="relative z-[1] h-[11px] w-[11px] flex-shrink-0 rounded-full border-[1.5px] border-[var(--color-accent-blue)] bg-[rgba(59,130,246,0.14)]" />
                <div className="h-[7px] flex-1 rounded-full bg-[rgba(59,130,246,0.2)]" />
              </div>
              <div className="relative mt-1.5 flex items-center gap-2.5">
                <span className="relative z-[1] h-[11px] w-[11px] flex-shrink-0 rounded-full border border-white/10 bg-white/5" />
                <div className="h-1.5 w-[78%] rounded-full bg-white/[0.04]" />
              </div>
              <div className="relative flex items-center gap-2.5">
                <span className="relative z-[1] h-[11px] w-[11px] flex-shrink-0 rounded-full border border-white/10 bg-white/5" />
                <div className="flex flex-1 flex-col gap-1">
                  <div className="h-1.5 w-[55%] rounded-full bg-white/[0.04]" />
                  <div className="h-1 w-[28%] rounded-full bg-white/[0.028]" />
                </div>
              </div>
            </div>

            <div className="mt-2.5 flex flex-col gap-1.5 border-t border-white/[0.045] pt-2.5">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 flex-shrink-0 rounded-[2px] bg-white/[0.07]" />
                <div className="h-1 w-[46%] rounded-full bg-white/[0.04]" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 flex-shrink-0 rounded-full bg-white/[0.07]" />
                <div className="h-1 w-[36%] rounded-full bg-white/[0.03]" />
              </div>
            </div>
          </div>

          <div className="mt-3.5 flex items-center gap-2.5 border-t border-white/[0.05] pt-3.5">
            <div
              className="relative h-[26px] flex-1 overflow-hidden rounded-full border border-white/[0.05] bg-white/[0.025]"
              style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset" }}
            >
              <div
                className="h-full w-[62%] rounded-full"
                style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))" }}
              />
            </div>
            <div className="flex flex-shrink-0 items-center gap-1">
              <div
                className="h-[26px] w-[26px] flex-shrink-0 rounded-[8px] border border-white/[0.05] bg-white/[0.03]"
                style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset, 0 -1px 0 rgba(0,0,0,0.2) inset" }}
              />
              <div
                className="relative flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-[8px] border border-white/[0.05] bg-white/[0.03]"
                style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset, 0 -1px 0 rgba(0,0,0,0.2) inset" }}
              >
                <span className="h-1 w-1 rounded-full bg-white/15" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* front panel: result / summary — primary, dominant object */}
      <div
        className="absolute bottom-0 left-[16%] h-[48%] w-[68%] overflow-hidden rounded-[18px] border p-5"
        style={{
          borderColor: "var(--color-border)",
          background:
            "radial-gradient(240px 100px at 10% 0%, rgba(0,0,0,0.3), transparent 68%), radial-gradient(120% 80% at 14% 8%, rgba(255,255,255,0.055), transparent 46%), linear-gradient(150deg,#242529 0%,#17181b 40%,#0e0f11 76%,#07080A 100%)",
          boxShadow:
            "0 1px 0 rgba(245,236,217,0.24) inset, 0 -20px 36px -30px rgba(255,255,255,0.09) inset, 0 20px 38px -28px rgba(0,0,0,0.6) inset, 0 0 0 1px rgba(0,0,0,0.38), 0 60px 100px -20px rgba(0,0,0,0.88)",
        }}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="text-[10.5px] uppercase tracking-wider text-[var(--color-text-muted)]">Результат</div>
          <div className="rounded-full bg-[rgba(52,211,153,0.12)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-accent-green)]">
            Готово
          </div>
        </div>

        <div
          className="relative flex flex-col rounded-[14px]"
          style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.025), 0 0 0 1px rgba(0,0,0,0.12) inset" }}
        >
          <div
            className="mb-2.5 rounded-[12px] p-3"
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.08))",
              boxShadow: "0 1px 0 rgba(0,0,0,0.5) inset, 0 0 0 1px rgba(0,0,0,0.25) inset",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="h-9 w-9 flex-shrink-0 rounded-[8px] border border-white/[0.08]"
                style={{
                  background: "linear-gradient(155deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset, 0 -1px 0 rgba(0,0,0,0.3) inset",
                }}
              />
              <div className="flex-1">
                <div className="mb-1.5 h-2.5 w-[78%] rounded-full bg-white/[0.15]" />
                <div className="mb-1 h-1.5 w-[64%] rounded-full bg-white/[0.055]" />
                <div className="flex gap-1.5">
                  <div className="h-1.5 w-[42%] rounded-full bg-white/[0.06]" />
                  <div className="h-1.5 w-[24%] rounded-full bg-white/[0.04]" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="mb-3.5 flex items-center gap-2 rounded-full border border-white/[0.05] bg-white/[0.02] px-2.5 py-1.5"
            style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset" }}
          >
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[rgba(52,211,153,0.5)]" />
            <div className="h-1 w-[52%] rounded-full bg-white/[0.06]" />
            <span className="ml-auto h-[9px] w-[9px] flex-shrink-0 rounded-[2px] border border-white/15 bg-white/[0.04]" />
          </div>

          <div className="grid grid-cols-[1.15fr_0.8fr_1fr] gap-2">
            <div
              className="relative h-10 rounded-lg border border-[rgba(245,236,217,0.16)]"
              style={{
                background: "linear-gradient(155deg, rgba(245,236,217,0.08), rgba(245,236,217,0.03))",
                boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset",
              }}
            >
              <span className="absolute right-1.5 top-1.5 h-1 w-1 rounded-full bg-[rgba(245,236,217,0.5)]" />
            </div>
            <div className="relative flex h-10 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.04]">
              <span
                className="h-2.5 w-2.5 rounded-[3px] border border-white/20"
                style={{
                  background: "linear-gradient(155deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02))",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset",
                }}
              />
            </div>
            <div className="flex h-10 items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.04] px-2">
              <span className="h-1 w-1 flex-shrink-0 rounded-full bg-white/20" />
              <div className="flex flex-1 flex-col gap-1">
                <div className="h-1 w-[80%] rounded-full bg-white/[0.08]" />
                <div className="h-[3px] w-[55%] rounded-full bg-white/[0.05]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
