import { useTranslations } from 'next-intl';
import FloatingDecor from '@/components/FloatingDecor';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="hero">
      <FloatingDecor />
      <div className="hero-grid">
        <div className="hero-content">
          <h1>
            {t.rich('h1', {
              highlight: (chunks) => <span className="highlight">{chunks}</span>,
              em: (chunks) => <em>{chunks}</em>
            })}
          </h1>
          <p className="hero-sub">{t('sub')}</p>
          <a href="#work" className="hero-cta">
            {t('ctaPrimary')}
          </a>
          <a href="#contact" className="hero-cta-secondary">
            {t('ctaSecondary')}
          </a>
        </div>
        <div className="hero-photo-wrap">
          {/* Placeholder until owner provides /public/photos/alex.jpg */}
          <div
            className="hero-photo"
            role="img"
            aria-label={t('photoAlt')}
          />
          <div className="hero-photo-tag">{t('photoTag')}</div>
        </div>
      </div>
    </section>
  );
}
