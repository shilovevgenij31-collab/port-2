import { toolGroups } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

export function ToolsSection() {
  return (
    <section
      className="border-y border-white/[0.04] py-12 sm:py-14 lg:py-[120px]"
      style={{ background: "#0A0A0B" }}
    >
      <div className="container-narrow">
        <Reveal>
          <p className="font-display mb-3 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-faint)]">
            Инструменты
          </p>
          <h2 className="font-display mb-7 text-[22px] font-semibold leading-[1.2] sm:text-[26px] lg:mb-[48px] lg:text-[30px]">
            Среда, в которой я работаю
          </h2>
        </Reveal>

        <div className="mb-6 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:mb-8 lg:gap-10">
          <Reveal>
            <p className="mb-4 text-[12.5px] font-semibold text-[var(--color-text-primary)]">
              {toolGroups.core.label}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {toolGroups.core.items.map((item) => (
                <span key={item} className="tool-chip tool-chip-core">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={90}>
            <p className="mb-4 text-[12.5px] font-semibold text-[var(--color-text-secondary)]">
              {toolGroups.project.label}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {toolGroups.project.items.map((item) => (
                <span key={item} className="tool-chip tool-chip-project">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="max-w-[680px] text-[13.5px] leading-[1.7] text-[var(--color-text-muted)]">{toolGroups.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
