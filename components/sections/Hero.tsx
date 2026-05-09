import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="hero">
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
          <Image
            src="/me.jpg"
            alt={t('photoAlt')}
            width={320}
            height={320}
            className="hero-photo"
            priority
          />
          <div className="hero-photo-tag">{t('photoTag')}</div>
        </div>
      </div>
    </section>
  );
}
