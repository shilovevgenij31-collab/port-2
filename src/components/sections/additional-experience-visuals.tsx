export function LandingBlueprintVisual() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-[14px] border border-white/[0.06] bg-[var(--color-bg-raised-5)] p-3"
    >
      <div className="mb-2.5 flex items-center justify-between">
        <div className="h-2 w-6 rounded-full bg-white/[0.14]" />
        <div className="flex gap-1.5">
          <div className="h-1.5 w-5 rounded bg-white/[0.08]" />
          <div className="h-1.5 w-5 rounded bg-white/[0.08]" />
          <div className="h-1.5 w-5 rounded bg-white/[0.08]" />
        </div>
        <div className="h-3.5 w-8 rounded-full bg-[rgba(59,130,246,0.18)]" />
      </div>

      <div className="mb-2.5 rounded-[8px] border border-white/[0.05] bg-white/[0.03] p-2.5">
        <div className="mb-1.5 h-2 w-[70%] rounded bg-white/[0.12]" />
        <div className="mb-2 h-1.5 w-[50%] rounded bg-white/[0.06]" />
        <div className="h-3 w-9 rounded-full bg-[rgba(245,236,217,0.14)]" />
      </div>

      <div className="mb-2.5 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((tile) => (
          <div key={tile} className="rounded-[6px] border border-white/[0.05] bg-white/[0.03] p-1.5">
            <div className="mb-1 h-1.5 w-1.5 rounded-full bg-[rgba(59,130,246,0.35)]" />
            <div className="h-1 w-full rounded bg-white/[0.07]" />
          </div>
        ))}
      </div>

      <div className="mb-2.5 flex gap-1.5">
        <div className="h-4 flex-1 rounded border border-white/[0.06] bg-white/[0.02]" />
        <div className="h-4 w-10 rounded bg-[rgba(59,130,246,0.18)]" />
      </div>

      <div className="h-1 w-[40%] rounded bg-white/[0.05]" />
    </div>
  );
}

export function AutomationFlowVisual() {
  const nodes = ["Telegram", "n8n", "CRM", "Уведомления"];

  return (
    <div
      aria-hidden="true"
      className="rounded-[14px] border border-white/[0.06] bg-[var(--color-bg-raised-5)] p-3"
    >
      <div className="flex flex-col items-stretch">
        {nodes.map((label, index) => (
          <div key={label} className="flex flex-col items-center">
            <div className="flex w-full items-center gap-2.5 rounded-[10px] border border-white/[0.06] bg-white/[0.03] px-3 py-2">
              <span
                className={
                  index === 1
                    ? "automation-pulse h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-accent-blue)] shadow-[0_0_8px_2px_rgba(59,130,246,0.5)]"
                    : "h-2 w-2 flex-shrink-0 rounded-full bg-white/[0.15]"
                }
              />
              <span className="text-[11.5px] font-medium text-[var(--color-text-secondary)]">{label}</span>
            </div>
            {index < nodes.length - 1 && <div className="h-3.5 w-px bg-white/[0.12]" />}
          </div>
        ))}
      </div>
    </div>
  );
}
