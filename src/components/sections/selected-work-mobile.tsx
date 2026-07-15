import { projectVisibilityLabels, projects, type Project } from "@/data/site";
import { ReportStackVisual } from "@/components/project-visuals/report-stack-visual";
import { ProposalVisual } from "@/components/project-visuals/proposal-visual";
import { ContentPlatformVisual } from "@/components/project-visuals/content-platform-visual";
import { BusinessAnalysisVisual } from "@/components/project-visuals/business-analysis-visual";
import { ToolsFamilyVisual } from "@/components/project-visuals/tools-family-visual";

function ProjectVisual({ project }: { project: Project }) {
  switch (project.visual) {
    case "flagship":
      return <ReportStackVisual />;
    case "proposal":
      return <ProposalVisual />;
    case "content":
      return <ContentPlatformVisual />;
    case "analysis":
      return <BusinessAnalysisVisual />;
    case "family":
      return <ToolsFamilyVisual />;
    default:
      return null;
  }
}

function MobileProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="carousel-card surface-card p-5">
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="pill">{projectVisibilityLabels[project.visibility]}</span>
        {index === 0 && <span className="pill pill-gold">Флагман</span>}
      </div>
      <p className="mb-2 text-xs font-medium text-[var(--color-text-secondary)]">{project.category}</p>
      <h3 className="display-title mb-3 text-[19px] leading-[1.3]">{project.title}</h3>
      <p className="mb-4 text-[13.5px] leading-[1.65] text-[var(--color-text-secondary)]">{project.summary}</p>
      <div className="mb-4">
        <ProjectVisual project={project} />
      </div>
      <ul className="bullet-list">
        {project.contribution.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export function SelectedWorkMobileCarousel() {
  return (
    <div className="lg:hidden">
      <p className="container-shell mb-3 text-[12px] text-[var(--color-text-muted)]">Листайте карточки →</p>
      <div className="relative">
        <div className="carousel-track" aria-label="Проекты" aria-roledescription="карусель проектов">
          {projects.map((project, index) => (
            <MobileProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="carousel-hint" aria-hidden="true" />
      </div>
    </div>
  );
}
