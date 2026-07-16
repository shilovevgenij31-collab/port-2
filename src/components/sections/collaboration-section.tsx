import { collaboration } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

export function CollaborationSection() {
  return (
    <section className="bg-[var(--color-bg-raised-1)] py-12 sm:py-14 lg:py-[120px]">
      <div className="container-shell">
        <Reveal>
          <h2 className="display-title mb-8 max-w-[700px] text-[26px] leading-[1.2] sm:text-[32px] lg:mb-[48px] lg:text-[38px]">
            {collaboration.heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 lg:gap-5 lg:grid-cols-2">
          {collaboration.formats.map((format, index) => (
            <Reveal key={format.title} delay={index * 90}>
              <div
                className="collab-card rounded-[18px] p-6 sm:p-8 lg:p-10"
                style={
                  format.emphasis
                    ? {
                        background: "linear-gradient(155deg,#161514,#121110)",
                        border: "1px solid rgba(245,236,217,0.14)",
                        boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset,0 40px 70px -30px rgba(0,0,0,0.7)",
                      }
                    : {
                        background: "#111113",
                        border: "1px solid var(--color-border-soft)",
                      }
                }
              >
                <h3 className="font-display mb-3.5 text-[21px] font-semibold text-[var(--color-text-primary)]">
                  {format.title}
                </h3>
                <p className="mb-6 text-[14.5px] leading-[1.7] text-[var(--color-text-secondary)]">{format.text}</p>
                <a href={format.ctaHref} className={format.emphasis ? "btn btn-primary" : "btn btn-secondary"}>
                  {format.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
