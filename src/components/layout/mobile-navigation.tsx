"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import type { NavigationItem } from "@/data/site";

type MobileContact = {
  label: string;
  href: string;
};

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
  items: NavigationItem[];
  ctaHref: string;
  ctaLabel: string;
  contacts: MobileContact[];
  triggerRef: RefObject<HTMLButtonElement | null>;
};

export function MobileNavigation({
  open,
  onClose,
  items,
  ctaHref,
  ctaLabel,
  contacts,
  triggerRef,
}: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      triggerRef.current?.focus();
    }
  }, [open, triggerRef]);

  if (!open) return null;

  return (
    <div className="mobile-nav-backdrop" onClick={onClose}>
      <div
        id="mobile-nav-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Мобильная навигация"
        className="mobile-nav-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-display text-[15px] font-bold text-[var(--color-text-primary)]">Меню</span>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Закрыть меню"
            onClick={onClose}
            className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-[var(--color-border)] bg-white/5 text-[16px] text-[var(--color-text-primary)]"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col" aria-label="Разделы сайта">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="mobile-nav-link" onClick={onClose}>
              {item.label}
            </a>
          ))}
        </nav>

        {contacts.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-medium text-[var(--color-text-muted)]"
                onClick={onClose}
              >
                {contact.label}
              </a>
            ))}
          </div>
        )}

        <a href={ctaHref} onClick={onClose} className="btn btn-primary mt-6 justify-center">
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
