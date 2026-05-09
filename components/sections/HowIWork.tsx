import { useTranslations } from 'next-intl';
import Reveal from '@/components/Reveal';

export default function HowIWork() {
  const t = useTranslations('howIWork');

  return (
    <Reveal>
      <section id="how">
        <span className="section-tag">{t('tag')}</span>
        <h2 className="section-title">{t('title')}</h2>
        <div className="stickies">
          <div className="sticky">
            <div className="sticky-num">01</div>
            <h3>{t('step1Title')}</h3>
            <p>{t('step1Body')}</p>
          </div>
          <div className="sticky">
            <div className="sticky-num">02</div>
            <h3>{t('step2Title')}</h3>
            <p>{t('step2Body')}</p>
          </div>
          <div className="sticky">
            <div className="sticky-num">03</div>
            <h3>{t('step3Title')}</h3>
            <p>{t('step3Body')}</p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
