import { setRequestLocale } from 'next-intl/server';
import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import HowIWork from '@/components/sections/HowIWork';
import Work from '@/components/sections/Work';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowIWork />
        <Work />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
