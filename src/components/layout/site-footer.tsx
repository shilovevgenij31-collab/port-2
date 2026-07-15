import { brandName, brandTitle, footer, primaryNavigation } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-bg)] pb-8">
      <div className="container-shell">
        <div className="footer-line" />
        <div className="flex flex-col gap-4.5 py-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-[18px] tracking-[-0.02em] text-[var(--color-text-primary)]">
              © {new Date().getFullYear()} {brandName}
            </p>
            <p className="mt-1.5 text-[12.5px] uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
              {brandTitle}
            </p>
            <p className="mt-2 text-[14px] text-[var(--color-text-muted)]">{footer.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-x-4.5 gap-y-2 text-[14px] text-[var(--color-text-muted)]">
            {primaryNavigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[var(--color-text-primary)]">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
