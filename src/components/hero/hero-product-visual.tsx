export function HeroProductVisual() {
  return (
    <div aria-hidden="true" className="relative hidden h-[520px] w-full lg:block">
      <div
        className="absolute -inset-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 68% 28%, rgba(59,130,246,0.16), transparent 55%), radial-gradient(circle at 15% 85%, rgba(245,236,217,0.06), transparent 55%)",
        }}
      />
      <div
        className="absolute inset-x-[8%] bottom-[-4%] h-[60px]"
        style={{ background: "radial-gradient(ellipse, rgba(0,0,0,0.75), transparent 70%)" }}
      />

      {/* rear panel */}
      <div
        className="hero-float-slow absolute right-0 top-[4%] h-[52%] w-[60%] rounded-2xl border"
        style={{
          borderColor: "var(--color-border)",
          background: "linear-gradient(155deg,#26272C 0%,#18191C 45%,#0C0C0D 100%)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.12) inset, 0 -20px 34px -26px rgba(255,255,255,0.08) inset, 0 45px 80px -22px rgba(0,0,0,0.8)",
          transform: "rotate(-2deg)",
        }}
      />

      {/* middle panel: processing */}
      <div
        className="hero-float absolute left-[10%] top-[12%] h-[58%] w-[54%] overflow-hidden rounded-[18px] border p-5"
        style={{
          borderColor: "var(--color-border)",
          background: "linear-gradient(155deg, rgba(36,37,42,0.95), rgba(12,13,15,0.97))",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.12) inset, 0 -34px 56px -38px rgba(255,255,255,0.09) inset, 0 50px 90px -22px rgba(0,0,0,0.8)",
          transform: "rotate(-1deg)",
        }}
      >
        <div className="mb-3.5 text-[10.5px] uppercase tracking-wider text-[var(--color-text-muted)]">Обработка</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 flex-shrink-0 rounded-full border border-[rgba(52,211,153,0.45)] bg-[rgba(52,211,153,0.16)]" />
            <div className="h-2 flex-1 rounded bg-white/[0.06]" />
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 flex-shrink-0 rounded-full border-[1.5px] border-[var(--color-accent-blue)] bg-[rgba(59,130,246,0.2)] shadow-[0_0_8px_rgba(59,130,246,0.45)]" />
            <div className="h-2 flex-1 rounded bg-[rgba(59,130,246,0.22)]" />
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 flex-shrink-0 rounded-full border border-white/10 bg-white/5" />
            <div className="h-2 flex-1 rounded bg-white/5" />
          </div>
        </div>
        <div className="mt-4 flex gap-2 border-t border-white/[0.07] pt-3.5">
          <div className="h-[34px] flex-1 rounded-lg border border-white/[0.06] bg-white/[0.04]" />
          <div className="h-[34px] flex-1 rounded-lg border border-white/[0.06] bg-white/[0.04]" />
        </div>
      </div>

      {/* foreground panel: result */}
      <div
        className="absolute bottom-0 left-[18%] h-[44%] w-[64%] rounded-[18px] border p-5"
        style={{
          borderColor: "var(--color-border)",
          background: "linear-gradient(150deg,#1F2023 0%,#131417 50%,#07080A 100%)",
          boxShadow:
            "0 1px 0 rgba(245,236,217,0.2) inset, 0 -26px 44px -34px rgba(255,255,255,0.12) inset, 0 70px 110px -16px rgba(0,0,0,0.9)",
        }}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="text-[10.5px] uppercase tracking-wider text-[var(--color-text-muted)]">Результат</div>
          <div className="rounded-full bg-[rgba(52,211,153,0.12)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-accent-green)]">
            Готово
          </div>
        </div>
        <div className="mb-2.5 h-2.5 w-[70%] rounded bg-white/[0.14]" />
        <div className="mb-2 h-2 w-[92%] rounded bg-white/[0.06]" />
        <div className="mb-4 h-2 w-[84%] rounded bg-white/[0.06]" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg border border-[rgba(245,236,217,0.16)] bg-[rgba(245,236,217,0.06)]" />
          <div className="h-10 rounded-lg border border-white/[0.06] bg-white/[0.04]" />
          <div className="h-10 rounded-lg border border-white/[0.06] bg-white/[0.04]" />
        </div>
      </div>

      <div className="absolute left-[5%] top-[34%] h-2 w-2 rounded-full bg-[var(--color-accent-blue)] shadow-[0_0_10px_3px_rgba(59,130,246,0.6)]" />
    </div>
  );
}
