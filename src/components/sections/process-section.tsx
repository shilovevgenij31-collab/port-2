import { processSteps } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

export function ProcessSection() {
  return (
    <section id="process" className="bg-[var(--color-bg)] py-12 sm:py-14 lg:py-[120px]">
      <div className="container-shell">
        <Reveal>
          <p className="section-label mb-3 lg:mb-4">Подход</p>
          <h2 className="display-title mb-8 text-[26px] leading-[1.2] sm:text-[32px] lg:mb-[56px] lg:text-[38px]">
            Как я превращаю задачу в рабочий продукт
          </h2>
        </Reveal>

        <div className="flex flex-col gap-7 lg:flex-row lg:gap-0">
          {processSteps.map((step, index) => (
            <Reveal key={step.index} className="lg:flex-1" delay={index * 80}>
              <div className="process-step lg:pr-4">
                <div className="mb-3.5 flex items-center gap-2.5">
                  <span className="process-step-index font-display text-[13px] font-bold text-[var(--color-text-label)]">
                    {step.index}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="font-display mb-2 text-[17px] font-semibold text-[var(--color-text-primary)]">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-[var(--color-text-muted)]">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
