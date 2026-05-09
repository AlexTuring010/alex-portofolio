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
  placeholderLabel: { el: string; en: string };
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
    placeholderLabel: { el: 'HeyPeach Magazine', en: 'HeyPeach Magazine' }
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
    placeholderLabel: { el: 'Παραδοσιακή Ταβέρνα', en: 'Traditional Tavern' }
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
    placeholderLabel: { el: 'Frames Koronaios', en: 'Frames Koronaios' }
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
    placeholderLabel: { el: 'Ordering System', en: 'Ordering System' }
  },
  {
    slug: 'roulas-studio',
    title: { el: "Roula's Studio", en: "Roula's Studio" },
    client: { el: 'Sewing Studio', en: 'Sewing Studio' },
    meta: { el: '~ Γλυφάδα, 2026', en: '~ Glyfada, 2026' },
    description: {
      el: 'Site για ραφείο με focus σε bridal alterations. Pastel παλέτα, WhatsApp-first contact, optimized για local SEO searches.',
      en: 'Site for tailoring studio with focus on bridal alterations. Pastel palette, WhatsApp-first contact, optimized for local SEO.'
    },
    category: 'concepts',
    status: 'concept',
    tagLabel: 'Concept',
    gradient: 'linear-gradient(135deg, var(--terracotta-dark), var(--mustard))',
    placeholderLabel: { el: 'Sewing Studio', en: 'Sewing Studio' }
  },
  {
    slug: 'smile-studio',
    title: { el: 'Smile Studio Athens', en: 'Smile Studio Athens' },
    client: { el: 'Dental Clinic', en: 'Dental Clinic' },
    meta: { el: '~ Κηφισιά, 2026', en: '~ Kifisia, 2026' },
    description: {
      el: 'Σύγχρονο site για ορθοδοντικό ιατρείο με online booking, virtual tour του χώρου και integration με patient management system.',
      en: 'Modern site for orthodontic clinic with online booking, virtual tour, and patient management system integration.'
    },
    category: 'websites',
    status: 'live',
    tagLabel: 'Live',
    gradient: 'linear-gradient(135deg, var(--sage), var(--mustard))',
    placeholderLabel: { el: 'Dental Clinic', en: 'Dental Clinic' }
  },
  {
    slug: 'peris-auto',
    title: { el: 'Peris Auto', en: 'Peris Auto' },
    client: { el: 'Auto Mechanic', en: 'Auto Mechanic' },
    meta: { el: '~ Ίλιον, 2026', en: '~ Ilion, 2026' },
    description: {
      el: 'Δίγλωσσο site (EL/EN) για μηχανικό αυτοκινήτων με focus στην expat community της Αθήνας. Service booking και transparent pricing.',
      en: 'Bilingual site (EL/EN) for auto mechanic targeting Athens expat community. Service booking and transparent pricing.'
    },
    category: 'concepts',
    status: 'concept',
    tagLabel: 'Concept',
    gradient: 'linear-gradient(135deg, var(--ink), var(--sage))',
    placeholderLabel: { el: 'Auto Mechanic', en: 'Auto Mechanic' }
  },
  {
    slug: 'cohort-suites',
    title: { el: 'Cohort Suites', en: 'Cohort Suites' },
    client: { el: 'Boutique Hotel', en: 'Boutique Hotel' },
    meta: { el: '~ Κουκάκι, 2026', en: '~ Koukaki, 2026' },
    description: {
      el: 'Direct-booking platform για boutique ξενοδοχείο, με στόχο τη μείωση εξάρτησης από Booking.com και άλλα OTAs.',
      en: 'Direct-booking platform for boutique hotel, aimed at reducing dependency on Booking.com and other OTAs.'
    },
    category: 'websites',
    status: 'live',
    tagLabel: 'Live',
    gradient: 'linear-gradient(135deg, var(--terracotta), var(--ink))',
    placeholderLabel: { el: 'Boutique Hotel', en: 'Boutique Hotel' }
  }
];
