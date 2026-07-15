"use client";

import { useEffect, useRef, useState } from "react";
import { brandName, brandTitle, contactLinks, primaryNavigation } from "@/data/site";
import { cn } from "@/lib/cn";
import { MobileNavigation } from "./mobile-navigation";

const mobileContacts = contactLinks
  .filter((item) => item.label === "Telegram" || item.label === "GitHub" || item.label === "LinkedIn")
  .map((item) => ({ label: item.label, href: item.href }));

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = primaryNavigation
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) {
          setActiveHref(`#${mostVisible.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-2 px-[var(--gutter)] py-3 sm:gap-3 sm:py-3.5 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-4 lg:px-10 lg:py-4">
        <a href="#top" className="flex min-w-0 flex-col leading-tight" aria-label="Перейти в начало страницы">
          <span className="brand-name">{brandName}</span>
          <span className="brand-title">{brandTitle}</span>
        </a>

        <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Основная навигация">
          {primaryNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn("nav-link", item.href === activeHref && "nav-link-active")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-2">
          <a href="#contact" className="btn btn-primary">
            Связаться
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className="menu-toggle lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="menu-toggle-bar" />
            <span className="menu-toggle-bar" />
          </button>
        </div>
      </div>

      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={primaryNavigation}
        ctaHref="#contact"
        ctaLabel="Связаться"
        contacts={mobileContacts}
        triggerRef={menuButtonRef}
      />
    </header>
  );
}
