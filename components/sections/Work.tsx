import { useTranslations, useLocale } from 'next-intl';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import type { Locale } from '@/i18n/routing';

export default function Work() {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;

  return (
    <Reveal>
      <section id="work">
        <span className="section-tag">{t('tag')}</span>
        <h2 className="section-title">{t('title')}</h2>
        <div className="work-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
        {/*
          TODO: When projects.length > 8, implement filter tabs above the grid
          (categories: Όλα · Websites · E-shops · Συστήματα · Concepts).
          See option_B_filters.html in design references for visual treatment
          if owner provides one.
        */}
      </section>
    </Reveal>
  );
}
