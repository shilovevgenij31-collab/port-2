export function ToolsFamilyVisual() {
  const tiles = [
    { bar: "w-[60%] bg-white/10", body: "bg-white/[0.05]" },
    { bar: "w-1/2 bg-[rgba(59,130,246,0.2)]", body: "border border-[rgba(59,130,246,0.15)] bg-[rgba(59,130,246,0.07)]" },
    { bar: "w-[70%] bg-white/10", body: "bg-white/[0.05]" },
    { bar: "w-[40%] bg-white/10", body: "bg-white/[0.05]" },
  ];

  return (
    <div aria-hidden="true" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {tiles.map((tile, index) => (
        <div
          key={index}
          className="flex h-24 flex-col justify-center gap-1.5 rounded-[10px] border border-white/[0.06] bg-[var(--color-bg-raised-5)] p-3"
        >
          <div className={`h-1.5 rounded ${tile.bar}`} />
          <div className={`h-5 rounded-[5px] ${tile.body}`} />
        </div>
      ))}
    </div>
  );
}
