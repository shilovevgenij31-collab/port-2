import { contact, contactLinks } from "@/data/site";
import { ContactForm } from "@/components/ui/contact-form";

export function ContactSection() {
  const primaryContact = contactLinks.find((item) => item.primary);
  const otherContacts = contactLinks.filter((item) => !item.primary);

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
        <div className="mb-8 max-w-[640px] lg:mb-14">
          <h2 className="display-title mb-4 text-[30px] leading-[1.14] sm:text-[38px] lg:mb-5 lg:text-[46px]">
            {contact.heading}
          </h2>
          <p className="text-[15.5px] leading-[1.7] text-[var(--color-text-secondary)]">{contact.paragraph}</p>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            {primaryContact && (
              <a
                href={primaryContact.href}
                target="_blank"
                rel="noreferrer"
                className="mb-3.5 flex items-center gap-3.5 rounded-2xl p-5"
                style={{
                  background: "linear-gradient(155deg,#181614,#131210)",
                  border: "1px solid rgba(245,236,217,0.18)",
                  boxShadow: "0 1px 0 rgba(245,236,217,0.16) inset",
                }}
              >
                <span className="h-[38px] w-[38px] flex-shrink-0 rounded-[10px] border border-[rgba(245,236,217,0.24)] bg-[rgba(245,236,217,0.1)]" />
                <div>
                  <p className="mb-0.5 text-[11.5px] uppercase tracking-wide text-[var(--color-text-label)]">
                    {primaryContact.label}
                  </p>
                  <p className="text-[16px] font-semibold text-[var(--color-text-primary)]">{primaryContact.value}</p>
                </div>
              </a>
            )}

            <div className="flex flex-col">
              {otherContacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-white/[0.06] py-3.5 text-[14.5px] font-medium text-[var(--color-text-secondary)] last:border-b-0"
                >
                  {item.label} — {item.value}
                </a>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
