import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Caveat, Fraunces, DM_Sans } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import '../globals.css';

// Caveat only ships Latin/Cyrillic glyphs; Greek text in this font falls back
// to system handwriting (matches the reference HTML behavior).
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--ff-caveat',
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

// Fraunces and DM Sans also don't ship Greek subsets. Greek body/headings
// fall back to system serif/sans (matches the reference HTML behavior).
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--ff-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz']
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--ff-dm-sans',
  weight: ['400', '500', '600'],
  display: 'swap'
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
