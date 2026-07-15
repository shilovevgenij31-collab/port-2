import { capabilities } from "@/data/site";

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="border-y border-white/[0.04] py-16 md:py-24 lg:py-[120px]"
      style={{ background: "linear-gradient(180deg,#0B0B0C,#080809)" }}
    >
      <div className="container-shell">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-12">
          <h2 className="display-title text-[26px] leading-[1.15] sm:text-[32px] lg:text-[38px]">
            Что я могу создавать
          </h2>
          <p className="whitespace-nowrap text-[12.5px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-faint)] sm:text-right">
            Возможности — 4 направления
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-white/[0.07] sm:grid-cols-2">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="border-t-2 border-white/[0.08] p-7 lg:p-10"
              style={{ background: "linear-gradient(160deg,#131316,#0C0C0D)" }}
            >
              <h3 className="font-display mb-2.5 text-[19px] font-semibold text-[var(--color-text-primary)]">
                {capability.title}
              </h3>
              <p className="mb-4 text-[14px] leading-[1.65] text-[var(--color-text-secondary)]">
                {capability.description}
              </p>
              <ul className="flex flex-col gap-1.5">
                {capability.examples.map((example) => (
                  <li key={example} className="text-[12.5px] text-[var(--color-text-muted)]">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
