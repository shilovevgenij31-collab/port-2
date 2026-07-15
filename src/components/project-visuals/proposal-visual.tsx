export function ProposalVisual() {
  return (
    <div aria-hidden="true" className="flex h-[240px] gap-2.5 sm:h-[270px] lg:h-[300px]">
      <div className="flex flex-1 flex-col gap-2 rounded-[14px] border border-white/[0.06] bg-[linear-gradient(160deg,#1A1B1F,#131316)] p-4">
        <div className="text-[9.5px] uppercase tracking-wider text-[var(--color-text-muted)]">Параметры</div>
        <div className="h-1.5 w-[80%] rounded bg-white/[0.08]" />
        <div className="h-1.5 w-[60%] rounded bg-white/[0.08]" />
        <div className="mt-1.5 h-6 rounded-md border border-[rgba(59,130,246,0.22)] bg-[rgba(59,130,246,0.1)]" />
      </div>
      <div
        className="flex flex-[1.3] flex-col gap-2 rounded-[14px] border border-[rgba(245,236,217,0.18)] p-4"
        style={{
          background: "linear-gradient(150deg,#1D1B15,#151310)",
          boxShadow: "0 1px 0 rgba(245,236,217,0.2) inset",
        }}
      >
        <div className="text-[9.5px] uppercase tracking-wider text-[#F0E4CC] opacity-85">Предложение</div>
        <div className="h-2 w-[70%] rounded bg-white/[0.18]" />
        <div className="h-[34px] rounded-md bg-white/[0.05]" />
        <div className="h-[34px] rounded-md bg-white/[0.05]" />
        <div className="mt-auto h-4 w-[50%] rounded bg-[rgba(245,236,217,0.3)]" />
      </div>
    </div>
  );
}
