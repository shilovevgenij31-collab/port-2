import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProfessionalSummarySection } from "@/components/sections/professional-summary-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ToolsSection } from "@/components/sections/tools-section";
import { AboutSection } from "@/components/sections/about-section";
import { CollaborationSection } from "@/components/sections/collaboration-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProfessionalSummarySection />
        <SelectedWorkSection />
        <ExperienceSection />
        <CapabilitiesSection />
        <ProcessSection />
        <ToolsSection />
        <AboutSection />
        <CollaborationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
