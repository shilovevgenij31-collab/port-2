import type { ComponentType } from "react";
import { contact, contactLinks, type ContactLink } from "@/data/site";
import { ContactForm } from "@/components/ui/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { EmailIcon, GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/ui/icons";

const contactIcons: Record<string, ComponentType<{ className?: string }>> = {
  Telegram: TelegramIcon,
  Email: EmailIcon,
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
};

function ContactCard({ item, index }: { item: ContactLink; index: number }) {
  const Icon = contactIcons[item.label];

  return (
    <Reveal delay={index * 70}>
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={`contact-card${item.primary ? " contact-card-primary" : ""}`}
      >
        <span className="contact-icon">{Icon && <Icon className="h-[19px] w-[19px]" />}</span>
        <div className="min-w-0">
          <p className="mb-0.5 text-[11.5px] uppercase tracking-wide text-[var(--color-text-label)]">{item.label}</p>
          <p className="truncate text-[15px] font-semibold text-[var(--color-text-primary)]">{item.value}</p>
        </div>
      </a>
    </Reveal>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-[52px] sm:py-[60px] lg:py-[140px]"
      style={{
        background:
          "radial-gradient(ellipse 800px 560px at 30% -5%, rgba(245,236,217,0.09), transparent 62%), radial-gradient(ellipse 700px 500px at 82% 8%, rgba(59,130,246,0.1), transparent 62%), linear-gradient(180deg,#060605,#040404)",
      }}
    >
      <div className="container-shell relative z-[1]">
        <Reveal>
          <div className="mb-8 max-w-[640px] lg:mb-14">
            <p className="section-label mb-3 lg:mb-4">Контакты</p>
            <h2 className="display-title mb-4 text-[30px] leading-[1.14] sm:text-[38px] lg:mb-5 lg:text-[46px]">
              {contact.heading}
            </h2>
            <p className="text-[15.5px] leading-[1.7] text-[var(--color-text-secondary)]">{contact.paragraph}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="order-2 grid grid-cols-1 gap-3 self-start sm:grid-cols-2 lg:order-1">
            {contactLinks.map((item, index) => (
              <ContactCard key={item.label} item={item} index={index} />
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
