import { projectVisibilityLabels, projects, selectedWork } from "@/data/site";
import { ReportStackVisual } from "@/components/project-visuals/report-stack-visual";
import { ProposalVisual } from "@/components/project-visuals/proposal-visual";
import { ContentPlatformVisual } from "@/components/project-visuals/content-platform-visual";
import { BusinessAnalysisVisual } from "@/components/project-visuals/business-analysis-visual";
import { ToolsFamilyVisual } from "@/components/project-visuals/tools-family-visual";
import { SelectedWorkMobileCarousel } from "@/components/sections/selected-work-mobile";

const [flagship, major, contentProject, analysisProject, family] = projects;

export function SelectedWorkSection() {
  return (
    <section
      id="work"
      className="py-12 sm:py-14 lg:py-[120px]"
      style={{ background: "linear-gradient(180deg,#050505,#0A0A0B 40%,#050505)" }}
    >
      <div className="container-shell">
        <div className="mb-8 max-w-[640px] lg:mb-14">
          <p className="section-label mb-4">{selectedWork.label}</p>
          <h2 className="display-title text-[28px] leading-[1.15] sm:text-[34px] lg:text-[42px]">
            {selectedWork.heading}
          </h2>
        </div>
      </div>

      {/* Mobile (<1024px): horizontal snap carousel, all 5 projects in order */}
      <SelectedWorkMobileCarousel />

      {/* Desktop (>=1024px): original flagship / major / paired / family layout, unchanged */}
      <div className="hidden lg:block">
      <div className="container-shell">
        {/* Flagship project */}
        <article className="surface-card-flagship mb-6 p-6 sm:p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
            <div>
              <div className="mb-4 flex flex-wrap gap-2.5">
                <span className="pill">{projectVisibilityLabels[flagship.visibility]}</span>
                <span className="pill pill-gold">Флагман</span>
              </div>
              <p className="mb-2.5 text-[12.5px] font-medium text-[var(--color-text-secondary)]">{flagship.category}</p>
              <h3 className="display-title mb-4 text-[22px] leading-[1.25] sm:text-[26px] lg:text-[30px]">
                {flagship.title}
              </h3>
              <p className="mb-5 text-[14.5px] leading-[1.7] text-[var(--color-text-secondary)]">{flagship.summary}</p>
              <p className="mb-2.5 text-xs font-semibold tracking-wide text-[var(--color-text-muted)]">
                РОЛЬ: {flagship.role.toUpperCase()}
              </p>
              <ul className="bullet-list">
                {flagship.contribution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <ReportStackVisual />
          </div>
        </article>

        {/* Major featured project */}
        <article className="surface-card-major mb-6 p-6 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-9">
            <div>
              <span className="pill mb-4 inline-flex">{projectVisibilityLabels[major.visibility]}</span>
              <p className="mb-2.5 text-[12.5px] font-medium text-[var(--color-text-secondary)]">{major.category}</p>
              <h3 className="display-title mb-3.5 text-[20px] leading-[1.25] sm:text-[24px] lg:text-[26px]">
                {major.title}
              </h3>
              <p className="mb-4.5 text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">{major.summary}</p>
              <ul className="bullet-list">
                {major.contribution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <ProposalVisual />
          </div>
        </article>

        {/* Paired mid-size projects */}
        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          <article className="surface-card p-6 sm:p-7 lg:p-8">
            <span className="pill mb-3.5 inline-flex">{projectVisibilityLabels[contentProject.visibility]}</span>
            <p className="mb-2 text-xs font-medium text-[var(--color-text-secondary)]">{contentProject.category}</p>
            <h3 className="display-title mb-3 text-[19px] leading-[1.3]">{contentProject.title}</h3>
            <p className="mb-4 text-[13.5px] leading-[1.65] text-[var(--color-text-secondary)]">
              {contentProject.summary}
            </p>
            <ContentPlatformVisual />
            <ul className="bullet-list">
              {contentProject.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="surface-card p-6 sm:p-7 lg:p-8">
            <span className="pill mb-3.5 inline-flex">{projectVisibilityLabels[analysisProject.visibility]}</span>
            <p className="mb-2 text-xs font-medium text-[var(--color-text-secondary)]">{analysisProject.category}</p>
            <h3 className="display-title mb-3 text-[19px] leading-[1.3]">{analysisProject.title}</h3>
            <p className="mb-4 text-[13.5px] leading-[1.65] text-[var(--color-text-secondary)]">
              {analysisProject.summary}
            </p>
            <BusinessAnalysisVisual />
            <ul className="bullet-list">
              {analysisProject.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        {/* Product family */}
        <article className="rounded-[18px] border border-[var(--color-border-soft)] bg-[var(--color-bg-raised-1)] p-6 sm:p-8 lg:p-9">
          <div className="mb-5 flex flex-wrap justify-between gap-4">
            <div>
              <span className="pill mb-3.5 inline-flex">{projectVisibilityLabels[family.visibility]}</span>
              <p className="mb-1.5 text-xs font-medium text-[var(--color-text-secondary)]">{family.category}</p>
              <h3 className="display-title text-[20px]">{family.title}</h3>
            </div>
            <p className="max-w-[420px] text-[13.5px] leading-[1.65] text-[var(--color-text-secondary)]">
              {family.summary}
            </p>
          </div>
          <ToolsFamilyVisual />
        </article>
      </div>
      </div>
    </section>
  );
}
