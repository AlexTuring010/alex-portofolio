import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageToggle from '@/components/LanguageToggle';

export default function Nav() {
  const t = useTranslations('nav');

  return (
    <nav className="nav-top">
      <Link href="/" className="logo-wrap">
        <Image
          src="/me.jpg"
          alt=""
          width={40}
          height={40}
          className="nav-avatar"
          priority
        />
        <span className="logo-mark">{t('name')}</span>
        <span className="logo-role">/ Web Dev</span>
      </Link>

      <div className="links">
        <Link href="/#work">{t('work')}</Link>
        <Link href="/#services">{t('services')}</Link>
        <Link href="/#contact">{t('contact')}</Link>
      </div>

      <LanguageToggle />
    </nav>
  );
}
