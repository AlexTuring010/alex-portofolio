export type ProjectCategory = 'websites' | 'ecommerce' | 'systems' | 'concepts';
export type ProjectStatus = 'live' | 'concept' | 'demo';

export type Project = {
  slug: string;
  title: { el: string; en: string };
  client: { el: string; en: string };
  meta: { el: string; en: string };
  description: { el: string; en: string };
  category: ProjectCategory;
  status: ProjectStatus;
  tagLabel: string;
  gradient: string;
  /** Short label shown over the gradient when no `image` is set. Falls back to `title[locale]`. */
  placeholderLabel?: string;
  image?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: 'heypeach',
    title: { el: 'HeyPeach', en: 'HeyPeach' },
    client: { el: 'HeyPeach Magazine', en: 'HeyPeach Magazine' },
    meta: { el: '~ Personal blog, 2026', en: '~ Personal blog, 2026' },
    description: {
      el: 'Reading-first blog με focus στην τυπογραφία και την εμπειρία ανάγνωσης. Σχεδιασμένο γύρω από τη φωνή και το brand της δημιουργού.',
      en: "Reading-first blog with a focus on typography and reading experience. Designed around the creator's voice and brand."
    },
    category: 'websites',
    status: 'live',
    tagLabel: 'Live',
    gradient: 'linear-gradient(135deg, var(--terracotta), var(--mustard))',
    image: '/projects/heypeach.png',
    liveUrl: 'https://blog-nextjs-sanity-weld-nine.vercel.app/'
  },
  {
    slug: 'signal-processing-hub',
    title: {
      el: 'Εκπαιδευτική Πλατφόρμα ΕΚΠΑ',
      en: 'NKUA Educational Platform'
    },
    client: {
      el: 'Συμφοιτητές Πληροφορικής',
      en: 'CS Classmates'
    },
    meta: {
      el: '~ ΕΚΠΑ Πληροφορική, 2026',
      en: '~ NKUA Informatics, 2026'
    },
    description: {
      el: 'Συνεργατική πλατφόρμα μελέτης για το μάθημα Συστημάτων Επικοινωνιών. 33 ενότητες θεωρίας, λυμένες ασκήσεις παλαιότερων θεμάτων με filtering, quiz mode, τυπολόγιο, σύστημα σχολίων με points & leaderboard. Auth, search, και custom comment privacy.',
      en: 'Collaborative study platform for a Communication Systems course. 33 theory sections, solved exam problems with filters, quiz mode, formula sheet, comment system with points & leaderboard. Auth, search, and custom comment privacy.'
    },
    category: 'systems',
    status: 'live',
    tagLabel: 'Live',
    gradient: 'linear-gradient(135deg, var(--ink), var(--terracotta))',
    placeholderLabel: 'Class Hub',
    image: '/projects/signals.png',
    liveUrl: 'https://signal-processing-with-alexturing.vercel.app/'
  },
  {
    slug: 'paradosiaki-taverna',
    title: { el: 'Ψηφιακό Μενού QR', en: 'Digital QR Menu' },
    client: { el: 'Παραδοσιακή Ταβέρνα', en: 'Traditional Tavern' },
    meta: { el: '~ Εστιατόριο, 2026', en: '~ Restaurant, 2026' },
    description: {
      el: 'Πολυγλωσσικό menu σε PWA, με φωτογραφίες πιάτων και integration με Google Reviews. +18% average ticket size στους δύο πρώτους μήνες.',
      en: 'Multilingual PWA menu with dish photos and Google Reviews integration. +18% average ticket size in the first two months.'
    },
    category: 'systems',
    status: 'live',
    tagLabel: 'Live',
    gradient: 'linear-gradient(135deg, var(--sage), var(--cream-dark))',
    placeholderLabel: 'Traditional Tavern'
  },
  {
    slug: 'frames-koronaios',
    title: { el: 'Κορνίζες Κορωναίος', en: 'Frames Koronaios' },
    client: { el: 'Frames Koronaios', en: 'Frames Koronaios' },
    meta: { el: '~ Παγκράτι, 2026', en: '~ Pagrati, 2026' },
    description: {
      el: 'Editorial concept site για 3 γενιές κορνιζοποιοί από το 1957. Heritage feel με sepia παλέτα, timeline και gallery δουλειάς.',
      en: 'Editorial concept site for 3 generations of frame-makers since 1957. Heritage feel with sepia palette, timeline and work gallery.'
    },
    category: 'concepts',
    status: 'concept',
    tagLabel: 'Concept',
    gradient: 'linear-gradient(135deg, var(--ink), var(--terracotta))',
    placeholderLabel: 'Frames Koronaios'
  },
  {
    slug: 'online-ordering',
    title: { el: 'Online Ordering', en: 'Online Ordering' },
    client: { el: 'Ordering System', en: 'Ordering System' },
    meta: { el: '~ Custom σύστημα', en: '~ Custom system' },
    description: {
      el: 'Live ordering app για μικρές επιχειρήσεις. Stripe checkout, real-time παραγγελίες, admin dashboard. Χωρίς commission σε τρίτους.',
      en: 'Live ordering app for small businesses. Stripe checkout, real-time orders, admin dashboard. No third-party commission.'
    },
    category: 'systems',
    status: 'demo',
    tagLabel: 'Demo',
    gradient: 'linear-gradient(135deg, var(--mustard), var(--sage))',
    placeholderLabel: 'Ordering System'
  }
];
