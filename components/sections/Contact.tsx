'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_PHONE_WHATSAPP
} from '@/lib/contact';

export default function Contact() {
  const t = useTranslations('contact');
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('modal-open');
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('modal-open');
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    openBtnRef.current?.focus();
  };

  const emailUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    t('emailSubject')
  )}&body=${encodeURIComponent(t('emailBody'))}`;
  const viberUrl = `viber://chat?number=${encodeURIComponent(CONTACT_PHONE_TEL)}`;
  const whatsappUrl = `https://wa.me/${CONTACT_PHONE_WHATSAPP}?text=${encodeURIComponent(
    t('whatsappGreeting')
  )}`;
  const phoneUrl = `tel:${CONTACT_PHONE_TEL}`;

  return (
    <>
      <section className="contact" id="contact">
        <h2>
          {t.rich('h2', {
            em: (chunks) => <em>{chunks}</em>
          })}
        </h2>
        <p>{t('p')}</p>
        <div className="contact-buttons">
          <button
            ref={openBtnRef}
            type="button"
            className="btn-primary"
            onClick={() => setOpen(true)}
          >
            {t('btnPrimary')}
          </button>
          <a href={viberUrl} className="btn-secondary">
            {t('btnViber')}
          </a>
          <a href={emailUrl} className="btn-secondary">
            {t('btnEmail')}
          </a>
        </div>
      </section>

      <div
        className={`modal-backdrop${open ? ' open' : ''}`}
        onClick={close}
        aria-hidden={!open}
      >
        <div
          className="modal"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <button
            ref={closeBtnRef}
            type="button"
            className="modal-close"
            onClick={close}
            aria-label={t('modalClose')}
          >
            ×
          </button>
          <span className="modal-tag">{t('modalTag')}</span>
          <h3 id="contact-modal-title" className="modal-title">
            {t.rich('modalTitle', {
              em: (chunks) => <em>{chunks}</em>
            })}
          </h3>
          <p className="modal-sub">{t('modalSub')}</p>

          <div className="modal-options">
            <a href={viberUrl} className="modal-option modal-option-primary">
              <div className="modal-option-label">{t('optionViber')}</div>
              <div className="modal-option-detail">{CONTACT_PHONE_DISPLAY}</div>
              <div className="modal-option-hint">{t('viberHint')}</div>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-option"
            >
              <div className="modal-option-label">{t('optionWhatsapp')}</div>
              <div className="modal-option-detail">{CONTACT_PHONE_DISPLAY}</div>
              <div className="modal-option-hint">{t('whatsappHint')}</div>
            </a>
            <a href={emailUrl} className="modal-option">
              <div className="modal-option-label">{t('optionEmail')}</div>
              <div className="modal-option-detail">{CONTACT_EMAIL}</div>
              <div className="modal-option-hint">{t('emailHint')}</div>
            </a>
            <a href={phoneUrl} className="modal-option">
              <div className="modal-option-label">{t('optionPhone')}</div>
              <div className="modal-option-detail">{CONTACT_PHONE_DISPLAY}</div>
              <div className="modal-option-hint">{t('phoneHint')}</div>
            </a>
          </div>

          <p className="modal-footer-note">{t('modalFooterNote')}</p>
        </div>
      </div>
    </>
  );
}
