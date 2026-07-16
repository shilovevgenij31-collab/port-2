import { professionalSummary } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

export function ProfessionalSummarySection() {
  return (
    <section className="bg-[var(--color-bg)] py-12 sm:py-14 lg:py-[120px]">
      <div className="container-narrow">
        <Reveal>
          <p className="section-label mb-3 lg:mb-4">{professionalSummary.label}</p>
          <h2 className="display-title mb-4 text-[26px] leading-[1.2] sm:text-[32px] lg:mb-5 lg:text-[38px]">
            {professionalSummary.heading}
          </h2>
          <p className="lead-copy mb-6 text-[16px] lg:mb-9">{professionalSummary.paragraph}</p>
        </Reveal>

        <div className="mb-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:mb-9 lg:gap-y-3.5">
          {professionalSummary.focusAreas.map((area, index) => (
            <Reveal key={area} delay={index * 70}>
              <div className="experience-entry flex items-baseline gap-2.5 border-t border-[var(--color-border-soft)] px-2.5 py-3.5">
                <span className="font-display text-xs text-[var(--color-text-muted)]">{index + 1}</span>
                <span className="text-[14.5px] font-medium text-[var(--color-text-primary)]">{area}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg-raised-2)] px-5 py-4.5">
            <p className="text-[13.5px] leading-[1.7] text-[var(--color-text-muted)]">
              {professionalSummary.confidentialityNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
