/**
 * The four things RiverGuard does. Plain descriptive names, not product
 * branding. Tools are described by what they do, never by vendor name.
 */
export type Service = {
  slug: string;
  name: string;
  promise: string;
  detail: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: 'managed-it',
    name: 'Managed IT and monitoring',
    promise: 'Your computers stay updated and watched, around the clock.',
    detail:
      'A small agent runs quietly on every computer and server. It installs updates on a schedule you approve, keeps an eye on disk space, backups, and hardware health, and alerts us the moment something looks wrong — usually before anyone in your office notices.',
    bullets: [
      'Windows, Mac, and server updates on a schedule, not at 9am on a Monday',
      'Health checks on every machine, 24 hours a day',
      'We get the alert, we fix it, you get a plain-English note',
      'A monthly report of what we did and what we saw',
    ],
  },
  {
    slug: 'security',
    name: 'Managed security',
    promise: 'Security that watches every computer around the clock — and a plan for when something gets through.',
    detail:
      'Every computer gets managed detection and response (MDR): software that runs 24/7 and watches for the behaviour of an attacker, not just known viruses. When it sees something, it can isolate that machine automatically to stop the spread while we investigate and get you back to work. Your Microsoft 365 and email accounts get the same kind of protection, so a stolen password doesn’t become a stolen mailbox.',
    bullets: [
      'Detection and response running 24/7 on every computer',
      'Compromised machines isolated automatically to stop the spread',
      'Identity protection for Microsoft 365 and email accounts',
      'Multi-factor authentication (MFA) set up properly, once',
      'Short, practical security training for your staff',
    ],
  },
  {
    slug: 'help-desk',
    name: 'Help desk',
    promise: 'A person you know answers.',
    detail:
      'Call, email, or click the icon on your desktop. You get someone who knows your office — not a queue, not a script, not a different stranger every time. Most fixes happen remotely, often the same day. If it needs hands on a keyboard, we come to you.',
    bullets: [
      'Phone, email, or one click from your desktop',
      'Remote fixes for most issues, often the same day',
      'We explain what happened in words you’d use yourself',
      'No ticket left open without a next step and a date',
    ],
  },
  {
    slug: 'on-site',
    name: 'On-site service',
    promise: 'We drive to you. Hailey to Ketchum is 20 minutes.',
    detail:
      'Some things can’t be fixed over a screen: a dead switch, a new office, a printer that has finally given up, a server that needs to move. We’re in Hailey and we cover the whole valley, so on-site help is a short drive, not a two-day wait for a technician from Boise.',
    bullets: [
      'New office and move-in setups: network, Wi-Fi, desks, phones',
      'Hardware installs, replacements, and honest end-of-life advice',
      'Scheduled on-site visits if you’d rather see a face than a ticket',
      'Serving Hailey, Bellevue, Carey, Picabo, Sun Valley, and Ketchum',
    ],
  },
];

/**
 * Trust is built by limits. These appear on the Services page.
 * TODO: edit to match your actual policies — especially anything about contracts or after-hours.
 */
export const wontDo: string[] = [
  'Name-drop vendors to sound impressive. We’ll tell you what a tool does and why you need it.',
  'Sell you fear. We’ll state a risk once, plainly, then talk about the fix.',
  'Recommend hardware you don’t need, or replace something that’s working fine.',
  'Talk over your head. If you didn’t understand the explanation, we didn’t finish the job.',
];
