/**
 * Every real-world fact about RiverGuard Solutions lives here, in one place.
 *
 * Values in [SQUARE BRACKETS] are placeholders still to fill in.
 * They render on the site with a visible amber highlight so nothing that
 * isn't true yet can be mistaken for a fact. Replace the bracketed text and
 * the highlight disappears automatically.
 */

export const business = {
  name: 'RiverGuard Solutions',
  legalName: 'RiverGuard Solutions LLC',
  tagline: 'Managed IT for small businesses in the Wood River Valley',
  description:
    'RiverGuard Solutions is a managed IT provider serving small and mid-sized businesses in Idaho’s Wood River Valley — medical practices, public districts, non-profits, and the shops and offices that keep the valley running. We keep your systems running, your data recoverable, and your questions answered by someone who knows your name.',
  url: 'https://riverguard.solutions',

  phone: '208-481-0984',
  email: 'brad@riverguard.solutions',
  hours: 'Monday–Friday, 9am–5pm Mountain',
  /** Home-based — no street address is published. */
  address: {
    city: 'Hailey',
    state: 'ID',
    zip: '83333',
  },

  yearsLocal: 20,
  serviceArea: ['Hailey', 'Bellevue', 'Carey', 'Picabo', 'Sun Valley', 'Ketchum'],
  region: 'Wood River Valley',

  /** Proof strip numbers. Keep to three. Numbers beat adjectives. */
  stats: [
    { value: '20+', label: 'years in the valley' },
    { value: '24/7', label: 'monitoring and security' },
    { value: '< 1 hr', label: 'average response time' },
  ],

  /**
   * Formspree form ID, e.g. "xabcdefg". Create a free form at formspree.io,
   * paste the ID here, run `npm run deploy`. Until it is set, the Contact page
   * shows phone/email instead of a form.
   */
  formspreeId: '',

  /** First client testimonial. Set to null until you have a real one with a real name. */
  testimonial: null as null | { quote: string; name: string; role: string; town: string },

  // TODO: links, or leave empty to hide
  social: {
    googleBusiness: '',
    linkedin: '',
  },
} as const;

/** True when a value is still a [BRACKETED] placeholder. */
export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim());

/** tel: href from a display phone number, or '#' while it is a placeholder. */
export const phoneHref = isPlaceholder(business.phone)
  ? '#'
  : `tel:+1${business.phone.replace(/\D/g, '')}`;

export const emailHref = isPlaceholder(business.email) ? '#' : `mailto:${business.email}`;

/** "Hailey, Bellevue, Carey, Picabo, Sun Valley, and Ketchum" */
export const serviceAreaSentence = (() => {
  const towns = [...business.serviceArea];
  const last = towns.pop();
  return `${towns.join(', ')}, and ${last}`;
})();
