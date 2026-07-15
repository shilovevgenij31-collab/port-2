import { professionalSummary } from "@/data/site";

export function ProfessionalSummarySection() {
  return (
    <section className="bg-[var(--color-bg)] py-16 md:py-24 lg:py-[120px]">
      <div className="container-narrow">
        <p className="section-label mb-4">{professionalSummary.label}</p>
        <h2 className="display-title mb-5 text-[26px] leading-[1.2] sm:text-[32px] lg:text-[38px]">
          {professionalSummary.heading}
        </h2>
        <p className="lead-copy mb-9 text-[16px]">{professionalSummary.paragraph}</p>

        <div className="mb-9 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
          {professionalSummary.focusAreas.map((area, index) => (
            <div
              key={area}
              className="flex items-baseline gap-2.5 border-t border-[var(--color-border-soft)] py-3.5"
            >
              <span className="font-display text-xs text-[var(--color-text-muted)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[14.5px] font-medium text-[var(--color-text-primary)]">{area}</span>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg-raised-2)] px-5 py-4.5">
          <p className="text-[13.5px] leading-[1.7] text-[var(--color-text-muted)]">
            {professionalSummary.confidentialityNote}
          </p>
        </div>
      </div>
    </section>
  );
}
