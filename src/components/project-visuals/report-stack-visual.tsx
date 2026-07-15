export function ReportStackVisual() {
  return (
    <div aria-hidden="true" className="relative h-[300px] sm:h-[340px] lg:h-[380px]">
      <div
        className="absolute right-0 top-[6%] h-[88%] w-[78%] rounded-2xl border border-[rgba(139,92,246,0.14)]"
        style={{ background: "linear-gradient(160deg,#18191D,#0D0D0F)", boxShadow: "0 40px 80px -30px rgba(0,0,0,0.7)" }}
      />
      <div
        className="absolute right-[9%] top-0 h-[88%] w-[78%] rounded-2xl border border-white/[0.07] p-5"
        style={{
          background: "linear-gradient(160deg,#17181B,#0E0E10)",
          boxShadow: "0 1px 0 rgba(245,236,217,0.06) inset, 0 50px 90px -26px rgba(0,0,0,0.75)",
        }}
      >
        <div className="mb-4 flex justify-between">
          <div className="h-2.5 w-[40%] rounded bg-white/[0.16]" />
          <div className="h-2.5 w-[14%] rounded bg-[rgba(139,92,246,0.24)]" />
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="h-[52px] rounded-[10px] border border-white/[0.06] bg-white/[0.04]" />
          <div className="h-2 w-[88%] rounded bg-white/[0.07]" />
          <div className="h-2 w-[72%] rounded bg-white/[0.07]" />
          <div className="mt-1.5 h-20 rounded-[10px] border border-[rgba(139,92,246,0.16)] bg-[rgba(139,92,246,0.06)]" />
          <div className="h-2 w-[60%] rounded bg-white/[0.07]" />
        </div>
      </div>
    </div>
  );
}
