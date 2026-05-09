import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Caveat, Fraunces, DM_Sans } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import '../globals.css';

// All three fonts ship Latin only — Greek glyphs come from the OS default
// serif/sans, matching how design.html behaves. adjustFontFallback:false
// keeps next/font from injecting a metric-adjusted intermediate that would
// render Greek differently from the reference.
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--ff-caveat',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  adjustFontFallback: false,
  fallback: ['cursive']
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--ff-fraunces',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  adjustFontFallback: false,
  fallback: ['serif']
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--ff-dm-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
  adjustFontFallback: false,
  fallback: ['system-ui', 'sans-serif']
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const url = locale === routing.defaultLocale ? '/' : `/${locale}`;

  return {
    metadataBase: new URL('https://gkiafis.gr'),
    title: {
      default: t('title'),
      template: '%s | Αλέξανδρος Γκιάφης'
    },
    description: t('description'),
    alternates: {
      canonical: url,
      languages: {
        el: '/',
        en: '/en'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale === 'el' ? 'el_GR' : 'en_US',
      url: `https://gkiafis.gr${url === '/' ? '' : url}`,
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ['/og-image.png']
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${caveat.variable} ${fraunces.variable} ${dmSans.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
