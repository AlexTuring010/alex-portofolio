import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';

export default function Services() {
  const t = useTranslations('services');

  return (
    <Reveal>
      <section className="services" id="services">
        <div className="services-inner">
          <span className="section-tag">{t('tag')}</span>
          <h2 className="section-title">{t('title')}</h2>
          <div className="service-cards">
            <div className="service-card">
              <div className="service-icon">✦</div>
              <h3>{t('card1Title')}</h3>
              <p>{t('card1Body')}</p>
            </div>
            <div className="service-card">
              <div className="service-icon service-icon-terracotta">↗</div>
              <h3>{t('card2Title')}</h3>
              <p>{t('card2Body')}</p>
            </div>
            <div className="service-card">
              <div className="service-icon service-icon-sage">⚙</div>
              <h3>{t('card3Title')}</h3>
              <p>{t('card3Body')}</p>
            </div>
          </div>
          <p className="services-cta">
            <a href="#contact">{t('footer')}</a>
          </p>
        </div>
      </section>
    </Reveal>
  );
}
