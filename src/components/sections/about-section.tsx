import { about } from "@/data/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-[120px]"
      style={{
        background: "radial-gradient(ellipse 700px 400px at 15% 20%, rgba(245,236,217,0.05), transparent 60%), #050505",
      }}
    >
      <div className="container-shell grid items-start gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-14">
        <div className="hidden lg:block" aria-hidden="true">
          <span className="font-display text-[96px] font-extrabold leading-none text-[rgba(245,236,217,0.06)] xl:text-[120px]">
            ET
          </span>
        </div>

        <div>
          <p className="section-label mb-4">{about.label}</p>
          <h2 className="display-title mb-6 text-[26px] leading-[1.2] sm:text-[32px] lg:text-[38px]">
            {about.heading}
          </h2>

          <div className="flex max-w-[620px] flex-col gap-4.5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-[1.75] text-[var(--color-text-secondary)] sm:text-[15.5px]">
                {paragraph}
              </p>
            ))}
            <p className="text-[15px] font-medium leading-[1.75] text-[var(--color-text-primary)] sm:text-[15.5px]">
              {about.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
