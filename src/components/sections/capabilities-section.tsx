import { capabilities } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="border-y border-white/[0.04] py-12 sm:py-14 lg:py-[120px]"
      style={{ background: "linear-gradient(180deg,#0B0B0C,#080809)" }}
    >
      <div className="container-shell">
        <Reveal>
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-12">
            <h2 className="display-title text-[26px] leading-[1.15] sm:text-[32px] lg:text-[38px]">
              Что я могу создавать
            </h2>
            <p className="whitespace-nowrap text-[12.5px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-faint)] sm:text-right">
              Возможности — 4 направления
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 70}>
              <div className="capability-card p-6 lg:p-10">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
