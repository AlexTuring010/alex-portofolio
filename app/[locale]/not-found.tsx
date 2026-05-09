import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-[1280px] flex-col items-center justify-center px-10 text-center max-[880px]:px-5">
      <h1 className="font-fraunces text-5xl font-medium text-ink">404</h1>
      <p className="mt-4 font-caveat text-2xl text-terracotta">
        Δεν βρέθηκε η σελίδα · Page not found
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-ink px-6 py-3 font-medium text-cream shadow-[4px_4px_0_var(--terracotta)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
      >
        ← Αρχική / Home
      </Link>
    </main>
  );
}
