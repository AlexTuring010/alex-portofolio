import Nav from '@/components/sections/Nav';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-[1280px] px-10 py-24 max-[880px]:px-5 max-[880px]:py-16">
        <p className="font-caveat text-2xl text-ink-soft">
          Hero / How I Work / Work / Services / Contact — coming next.
        </p>
      </section>
    </main>
  );
}
