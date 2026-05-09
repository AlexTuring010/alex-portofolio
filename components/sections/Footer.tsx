import { useTranslations } from 'next-intl';

const EMAIL = 'alexgkiafis@gmail.com';
const PHONE_DISPLAY = '+30 694 546 5063';
const PHONE_DIGITS = '306945465063';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-contact">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <span className="footer-sep" aria-hidden="true">
            ·
          </span>
          <a href={`tel:+${PHONE_DIGITS}`}>{PHONE_DISPLAY}</a>
        </div>
        <div className="footer-copy">{t('copyright')}</div>
      </div>
    </footer>
  );
}
