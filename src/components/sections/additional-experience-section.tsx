import { additionalExperience, type AdditionalExperienceEntry } from "@/data/site";
import { AutomationFlowVisual, LandingBlueprintVisual } from "@/components/sections/additional-experience-visuals";
import { Reveal } from "@/components/ui/reveal";

function EntryVisual({ visual }: { visual: AdditionalExperienceEntry["visual"] }) {
  return visual === "landing" ? <LandingBlueprintVisual /> : <AutomationFlowVisual />;
}

export function AdditionalExperienceSection() {
  return (
    <section className="py-12 sm:py-14 lg:py-[120px]" style={{ background: "#050505" }}>
      <div className="container-narrow">
        <Reveal>
          <div className="mb-5 flex items-baseline gap-4">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-faint)] sm:whitespace-nowrap sm:tracking-[0.14em]">
              {additionalExperience.label}
            </p>
            <div className="hidden h-px flex-1 bg-[var(--color-border-soft)] sm:block" />
          </div>
          <h2 className="display-title mb-3 max-w-[560px] text-[24px] leading-[1.25] sm:text-[28px] lg:mb-4 lg:text-[34px]">
            {additionalExperience.heading}
          </h2>
          <p className="mb-8 max-w-[620px] text-[14px] leading-[1.7] text-[var(--color-text-muted)] sm:text-[14.5px] lg:mb-12">
            {additionalExperience.paragraph}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {additionalExperience.entries.map((entry, index) => (
            <Reveal key={entry.title} delay={index * 90}>
              <div className="surface-card p-6 lg:p-8">
                <h3 className="font-display mb-3 text-[18px] font-semibold text-[var(--color-text-primary)] lg:text-[19px]">
                  {entry.title}
                </h3>
                <p className="mb-5 text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">{entry.description}</p>
                <EntryVisual visual={entry.visual} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
