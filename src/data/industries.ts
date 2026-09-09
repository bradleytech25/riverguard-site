/**
 * The kinds of small business RiverGuard serves best. Each gets its own page
 * at /industries/<slug>. Specificity is the whole point — this is what a
 * local provider has that a national helpdesk does not.
 */
export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  headline: string;
  intro: string;
  pains: { title: string; body: string }[];
  whatWeDo: string[];
  proofLine: string;
  cta: string;
  seoDescription: string;
};

export const industries: Industry[] = [
  {
    slug: 'medical-practices',
    name: 'Medical and surgical practices',
    shortName: 'Medical practices',
    eyebrow: 'Medical and surgical practices',
    headline: 'Your schedule runs on the EHR. We make sure the EHR runs.',
    intro:
      'A clinic that can’t reach its records can’t see patients. We keep the network, the workstations, and the connection to your electronic health record (EHR) up, and we handle the security and paperwork that HIPAA expects of a covered entity — including signing a business associate agreement.',
    pains: [
      { title: 'Downtime costs appointments', body: 'When the front desk is frozen, patients are rescheduled and staff go home late. Monitoring catches most problems before the first patient arrives.' },
      { title: 'HIPAA is a checklist, not a feeling', body: 'Risk assessments, access reviews, encrypted devices, audit logs. We keep the evidence organised so an audit is a folder, not a scramble.' },
      { title: 'Vendors point at each other', body: 'Your EHR vendor blames the network; the ISP blames the computer. We’re the one number to call, and we stay on the line until it’s working.' },
    ],
    whatWeDo: [
      'Sign a business associate agreement (BAA) and act like it',
      '24/7 detection and response on every workstation and server',
      'Encrypted laptops and phones, with remote wipe if one goes missing',
      'Updates scheduled around clinic hours, never during them',
      'Backups tested with a real restore, and the result reported to you',
      'Support for your EHR, imaging, and practice-management vendors',
    ],
    proofLine: 'Serving practices from Hailey to Ketchum, 20 minutes door to door.',
    cta: 'Book a walkthrough',
    seoDescription: 'Managed IT and security for medical and surgical practices in Idaho’s Wood River Valley. HIPAA-ready, 24/7 monitored, with a BAA and a local number.',
  },
  {
    slug: 'public-districts',
    name: 'Public districts and co-ops',
    shortName: 'Districts and co-ops',
    eyebrow: 'Highway districts, water districts, rural co-ops',
    headline: 'Public money, public records, and a board that wants a straight answer.',
    intro:
      'Districts and cooperatives run lean: a small office, a few field staff, and systems that everyone in the county depends on. We keep those systems patched and watched, keep public records retrievable, and give your board a one-page report they can actually read.',
    pains: [
      { title: 'Records requests can’t wait on a broken server', body: 'Public records law doesn’t care that the file server is down. Backups, retention, and searchable archives are part of the service, not an add-on.' },
      { title: 'Field staff and office staff need the same access', body: 'Trucks, shops, and pump houses aren’t offices. We set up secure remote access that works from a tablet in a cab.' },
      { title: 'Cyber insurance forms keep getting longer', body: 'MFA, endpoint detection, backup testing, staff training — we implement what the insurer asks for and give you the documentation to prove it.' },
    ],
    whatWeDo: [
      'Patch and monitor every office and field device, 24/7',
      'Managed detection and response with human analysts on watch',
      'Backup and retention that matches your records-retention schedule',
      'Secure remote access for field crews and remote board members',
      'Cyber insurance questionnaire support, with evidence',
      'A plain-English quarterly report for the board',
    ],
    proofLine: 'Based in Hailey, on the road to Carey and Picabo when you need us.',
    cta: 'Talk to Brad',
    seoDescription: 'Managed IT for highway districts, water districts, and rural co-ops in the Wood River Valley. Patching, 24/7 security, records-ready backups, board-ready reporting.',
  },
  {
    slug: 'nonprofits',
    name: 'Non-profits',
    shortName: 'Non-profits',
    eyebrow: 'Community non-profits',
    headline: 'Every dollar you spend on IT is a dollar not spent on the mission. We get that.',
    intro:
      'Non-profits in the valley run on donated laptops, volunteer time, and grant cycles. We help you get the free and discounted software you’re entitled to, keep the machines you have running safely, and make sure donor data is protected the way donors assume it is.',
    pains: [
      { title: 'Mixed, aging hardware', body: 'Donated machines are welcome; unpatched machines are not. We bring every device up to a safe baseline and tell you honestly which ones to retire.' },
      { title: 'Donor data is a trust', body: 'Names, addresses, and giving history deserve the same protection as a medical record. MFA, encryption, and monitoring are included, not upsold.' },
      { title: 'Staff turnover and volunteers', body: 'People come and go. We handle onboarding and offboarding so a departed volunteer’s login is closed the same day.' },
    ],
    whatWeDo: [
      'Help claiming non-profit pricing on Microsoft 365, Google Workspace, and more',
      'A safe baseline for every donated or aging device',
      '24/7 monitoring and security on the same footing as our business clients',
      'Fast onboarding and same-day offboarding for staff and volunteers',
      'Backup for donor databases and grant files, tested regularly',
      'Predictable monthly pricing that fits a grant budget',
    ],
    proofLine: 'Proud to work alongside the organisations that make the Wood River Valley a community.',
    cta: 'Get a quote',
    seoDescription: 'Affordable managed IT and security for non-profits in Idaho’s Wood River Valley. Non-profit software pricing, safe donated hardware, protected donor data.',
  },
];

/** Verticals we serve but do not (yet) have a dedicated page for. */
export const alsoServe = ['law firms', 'accountants', 'property managers', 'retail and restaurants', 'contractors and trades'];
