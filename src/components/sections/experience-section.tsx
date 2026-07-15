import { experience } from "@/data/site";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-14 lg:py-[120px]"
      style={{
        background:
          "radial-gradient(ellipse 900px 300px at 50% 0%, rgba(0,0,0,0.5), transparent 70%), #030303",
      }}
    >
      <div className="container-narrow">
        <div className="mb-5 flex items-baseline gap-4">
          <p className="whitespace-nowrap text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-faint)]">
            Опыт
          </p>
          <div className="h-px flex-1 bg-[var(--color-border-soft)]" />
        </div>
        <h2 className="display-title mb-8 max-w-[460px] text-[24px] leading-[1.25] sm:text-[28px] lg:mb-[48px] lg:text-[34px]">
          От сайтов и автоматизаций — к AI-продуктам
        </h2>

        <div className="flex flex-col gap-0">
          {experience.map((entry, index) => (
            <div key={entry.role} className="flex gap-6">
              <div className="relative w-0.5 flex-shrink-0">
                <span
                  className="absolute -left-[3px] top-1 h-2 w-2 rounded-full"
                  style={{
                    background: entry.current ? "#E7D3AC" : "#4A4E59",
                    boxShadow: entry.current ? "0 0 8px 2px rgba(231,211,172,0.3)" : "none",
                  }}
                />
                {index < experience.length - 1 && (
                  <div
                    className="h-full w-0.5"
                    style={{ background: "linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))" }}
                  />
                )}
              </div>
              <div className="pb-7 lg:pb-10">
                <p
                  className="font-display mb-1.5 text-[13px] font-bold"
                  style={{ color: entry.current ? "#E7D3AC" : "var(--color-text-muted)" }}
                >
                  {entry.period}
                </p>
                <h3
                  className="font-display mb-3 text-[19px] font-bold sm:text-[22px]"
                  style={{ color: entry.current ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}
                >
                  {entry.role}
                </h3>
                <p className="mb-4 max-w-[620px] text-[14px] leading-[1.7] text-[var(--color-text-muted)] sm:text-[14.5px]">
                  {entry.description}
                </p>
                <ul className="bullet-list">
                  {entry.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
