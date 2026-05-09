'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, routing, type Locale } from '@/i18n/routing';

export default function LanguageToggle() {
  const t = useTranslations('languageToggle');
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <div className="lang-toggle" role="group" aria-label={t('ariaLabel')}>
      {routing.locales.map((lng) => {
        const active = locale === lng;
        return (
          <Link
            key={lng}
            href={pathname}
            locale={lng}
            scroll={false}
            prefetch
            className={active ? 'active' : ''}
            aria-current={active ? 'page' : undefined}
          >
            {t(lng)}
          </Link>
        );
      })}
    </div>
  );
}
