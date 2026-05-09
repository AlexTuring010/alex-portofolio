'use client';

import { useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, routing, type Locale } from '@/i18n/routing';

export default function LanguageToggle() {
  const t = useTranslations('languageToggle');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale || isPending) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      role="group"
      aria-label={t('ariaLabel')}
      className="ml-2 inline-flex items-center rounded-full border-2 border-ink bg-cream-dark p-[3px] shadow-[2px_2px_0_var(--ink)]"
    >
      {routing.locales.map((lng) => {
        const active = locale === lng;
        return (
          <button
            key={lng}
            type="button"
            onClick={() => switchTo(lng)}
            aria-pressed={active}
            disabled={isPending}
            className={
              'cursor-pointer rounded-full border-none px-3 py-1 text-[13px] font-semibold transition-colors disabled:cursor-wait ' +
              (active
                ? 'bg-ink text-cream'
                : 'bg-transparent text-ink-soft hover:text-ink')
            }
          >
            {t(lng)}
          </button>
        );
      })}
    </div>
  );
}
