import { contactLinks, hero } from "@/data/site";
import { HeroProductVisual } from "@/components/hero/hero-product-visual";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-10 pt-[92px] lg:pb-24 lg:pt-[168px]"
      style={{
        background:
          "radial-gradient(ellipse 640px 460px at 12% 8%, rgba(245,236,217,0.05), transparent 62%), radial-gradient(ellipse 760px 560px at 82% 42%, rgba(59,130,246,0.10), transparent 62%), #050505",
      }}
    >
      <div className="container-shell relative z-[2] grid items-center gap-10 lg:grid-cols-[minmax(420px,560px)_1fr] lg:gap-14">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--color-border-strong)] bg-white/[0.03] px-3.5 py-1.5 lg:mb-6">
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent-blue)] shadow-[0_0_8px_2px_rgba(59,130,246,0.55)]" />
            <span className="whitespace-nowrap text-[12.5px] font-semibold tracking-wide text-[var(--color-text-secondary)]">
              {hero.label}
            </span>
          </div>

          <h1 className="display-title mb-4 text-[38px] leading-[1.08] sm:text-[46px] md:text-[54px] lg:mb-5 lg:text-[64px]">
            {hero.headingLead}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#F3E6C9,#B9C0CE)" }}
            >
              {hero.headingHighlight}
            </span>
            <br />
            {hero.headingTail}
          </h1>

          <p className="lead-copy mb-3 max-w-[520px] text-[15px] sm:text-[16.5px] lg:mb-3.5">{hero.paragraph}</p>
          <p className="mb-5 max-w-[500px] text-[15px] leading-[1.6] text-[var(--color-text-muted)] lg:mb-8">
            {hero.secondary}
          </p>

          <div className="mb-6 flex items-center gap-2.5 lg:mb-9">
            <span className="status-dot" />
            <span className="text-[13.5px] text-[var(--color-text-secondary)]">{hero.status}</span>
          </div>

          <div className="mb-7 flex flex-wrap items-center gap-3.5 lg:mb-9">
            <a href={hero.ctaPrimary.href} className="btn btn-primary">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn btn-secondary">
              {hero.ctaSecondary.label}
            </a>
            <a href={hero.ctaTertiary.href} className="btn btn-ghost">
              {hero.ctaTertiary.label}
            </a>
          </div>

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

        <HeroProductVisual />
      </div>
    </section>
  );
}
