import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'alex@gkiafis.gr';

  const greeting = t('whatsappGreeting');
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(greeting)}`
    : '#';

  return (
    <section className="contact" id="contact">
      <h2>
        {t.rich('h2', {
          em: (chunks) => <em>{chunks}</em>
        })}
      </h2>
      <p>{t('p')}</p>
      <div className="contact-buttons">
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {t('btnPrimary')}
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          {t('btnWhatsapp')}
        </a>
        <a href={`mailto:${email}`} className="btn-secondary">
          {t('btnEmail')}
        </a>
      </div>
    </section>
  );
}
