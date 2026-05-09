import { useTranslations } from 'next-intl';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL
} from '@/lib/contact';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-contact">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <span className="footer-sep" aria-hidden="true">
            ·
          </span>
          <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE_DISPLAY}</a>
        </div>
        <div className="footer-copy">{t('copyright')}</div>
      </div>
    </footer>
  );
}
