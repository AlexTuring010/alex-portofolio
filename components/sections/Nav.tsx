import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageToggle from '@/components/LanguageToggle';

export default function Nav() {
  const t = useTranslations('nav');

  const linkClass =
    'text-[15px] font-medium text-ink transition-colors hover:text-terracotta';

  return (
    <nav className="relative z-10 mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-10 py-6 max-[880px]:px-5 max-[880px]:py-5">
      <Link href="/" className="flex items-center gap-3 no-underline">
        {/* Avatar placeholder until owner provides /public/photos/alex.jpg */}
        <span
          aria-hidden
          className="block h-10 w-10 rounded-full border-2 border-ink bg-mustard shadow-[2px_2px_0_var(--terracotta)] max-[880px]:h-8 max-[880px]:w-8"
        />
        <span className="logo-mark text-[32px] max-[880px]:text-[26px]">
          Αλέξανδρος
        </span>
      </Link>

      <div className="flex items-center gap-8 max-[880px]:gap-5">
        <Link href="/#work" className={linkClass}>
          {t('work')}
        </Link>
        <Link href="/#services" className={linkClass}>
          {t('services')}
        </Link>
        <Link href="/#contact" className={linkClass}>
          {t('contact')}
        </Link>
        <LanguageToggle />
      </div>
    </nav>
  );
}
