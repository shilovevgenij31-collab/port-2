import { contactLinks, hero } from "@/data/site";
import { HeroProductVisual } from "@/components/hero/hero-product-visual";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-[84px] lg:pb-32 lg:pt-[140px]"
      style={{
        background:
          "radial-gradient(ellipse 640px 460px at 12% 8%, rgba(245,236,217,0.05), transparent 62%), radial-gradient(ellipse 760px 560px at 82% 42%, rgba(59,130,246,0.10), transparent 62%), #050505",
      }}
    >
      <div className="container-shell relative z-[2] grid items-start gap-12 lg:grid-cols-[minmax(420px,640px)_1fr] lg:gap-14">
        <div>
          <h1 className="display-title mb-10 max-w-[19ch] text-balance text-[40px] leading-[1.14] tracking-[-0.016em] sm:text-[48px] md:text-[56px] lg:-mt-2 lg:mb-14 lg:text-[62px] lg:leading-[1.08] lg:tracking-[-0.02em]">
            {hero.headingLead}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#F3E6C9,#B9C0CE)" }}
            >
              {hero.headingHighlight}
            </span>{" "}
            {hero.headingTail}
          </h1>

          <p className="lead-copy mb-2 max-w-[460px] text-pretty text-[15.5px] leading-[1.75] tracking-[0.002em] sm:text-[17px]">
            {hero.paragraph}
          </p>
          <p
            className="mb-3 ml-[18px] max-w-[400px] text-pretty text-[14.5px] leading-[1.8] tracking-[0.004em] text-[var(--color-text-muted)]"
            style={{ wordSpacing: "0.5px" }}
          >
            {hero.secondary}
          </p>
          <div className="mb-10 flex items-center gap-2.5 lg:mb-14">
            <span className="status-dot" />
            <span className="text-[13.5px] text-[var(--color-text-secondary)]">{hero.status}</span>
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-3.5 lg:mb-8">
            <a href={hero.ctaPrimary.href} className="btn btn-primary">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn btn-secondary">
              {hero.ctaSecondary.label}
            </a>
          </div>

          <div className="ml-2 flex flex-wrap items-center gap-7">
            <a
              href={hero.ctaTertiary.href}
              className="text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            >
              {hero.ctaTertiary.label}
            </a>
            <div className="flex flex-wrap gap-5">
              {contactLinks
                .filter((item) => item.label !== "Email")
                .map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                  >
                    {item.label}
                  </a>
                ))}
              <a
                href="mailto:Shilovevgenij31@gmail.com"
                className="text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div
          className="hidden min-w-0 lg:-mt-6 lg:block"
          style={{ width: "calc(100% + min(320px, max(0px, 50vw - 600px)))" }}
        >
          <HeroProductVisual />
        </div>
      </div>
    </section>
  );
}
