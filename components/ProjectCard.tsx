import type { Project } from '@/lib/projects';
import type { Locale } from '@/i18n/routing';

export default function ProjectCard({
  project,
  locale
}: {
  project: Project;
  locale: Locale;
}) {
  const content = (
    <article className="project">
      <div className="project-img" style={{ background: project.gradient }}>
        <span className="project-tag">{project.tagLabel}</span>
        <span>{project.placeholderLabel[locale]}</span>
      </div>
      <div className="project-meta">{project.meta[locale]}</div>
      <h3>{project.title[locale]}</h3>
      <p className="project-desc">{project.description[locale]}</p>
    </article>
  );

  if (project.liveUrl) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        {content}
      </a>
    );
  }
  return content;
}
