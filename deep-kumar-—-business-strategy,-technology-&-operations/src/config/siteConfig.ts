import { PALETTE } from './palette';

export const SITE_CONFIG = {
  brandName: 'Deep Kumar',
  positioning: 'Business Strategy · Technology · Operations',
  resumePdfUrl: '/assets/aistudio/Deep_Kumar_-_Business_Analyst_-_Resume_fa911578.pdf',
  email: 'dkr7836@gmail.com',
  phone: '+91 9874754022',
  linkedinUrl: 'https://www.linkedin.com/in/dkr7836/',
  location: 'Kolkata, India',
  assets: {
    heroPortraitUrl: '/assets/aistudio/07_010e4a85.JPG',
    headshotUrl: '/assets/aistudio/07_2414f2c2.jpeg',
  },
} as const;

export type PrimaryRoutePath =
  | '/'
  | '/about'
  | '/projects'
  | '/d-talks'
  | '/resume';

export interface SpreadMeta {
  id: 'home' | 'about' | 'projects' | 'd-talks' | 'resume';
  label: string;
  sectionTag: string;
  route: PrimaryRoutePath;
  theme: 'pine' | 'ivory' | 'burntOrange' | 'sage';
  bgHex: string;
  isDark: boolean;
  seoTitle: string;
  seoDescription: string;
}

export const MAGAZINE_SPREADS: SpreadMeta[] = [
  {
    id: 'home',
    label: 'Home',
    sectionTag: 'Home',
    route: '/',
    theme: 'pine',
    bgHex: PALETTE.deepPine,
    isDark: true,
    seoTitle: 'Deep Kumar — Business Strategy, Technology & Operations',
    seoDescription:
      'Business professional based in Kolkata, India, exploring business strategy, technology and operations through independent research and structured problem-solving.',
  },
  {
    id: 'about',
    label: 'About Me',
    sectionTag: 'About Me',
    route: '/about',
    theme: 'ivory',
    bgHex: PALETTE.warmIvory,
    isDark: false,
    seoTitle: 'About Me — Deep Kumar',
    seoDescription:
      'Learn about Deep Kumar, a business professional based in Kolkata, India, with experience in entrepreneurship, business analysis, product management and procurement operations. Incoming PGDM ExP candidate at IMT Ghaziabad.',
  },
  {
    id: 'projects',
    label: 'Projects',
    sectionTag: 'Projects & StrategyDeck',
    route: '/projects',
    theme: 'sage',
    bgHex: PALETTE.mutedSage,
    isDark: false,
    seoTitle: 'Projects & StrategyDeck — Deep Kumar',
    seoDescription:
      'Explore projects and independent initiatives by Deep Kumar across business analysis, product thinking, technology and operations.',
  },
  {
    id: 'd-talks',
    label: 'D-Talks',
    sectionTag: 'D-Talks',
    route: '/d-talks',
    theme: 'burntOrange',
    bgHex: PALETTE.burntOrange,
    isDark: true,
    seoTitle: 'D-Talks — Deep Kumar',
    seoDescription:
      'D-Talks by Deep Kumar — independent business research, case studies and articles on strategy, technology and operations. Publishing launch coming soon.',
  },
  {
    id: 'resume',
    label: 'Resume',
    sectionTag: 'Resume',
    route: '/resume',
    theme: 'ivory',
    bgHex: PALETTE.warmIvory,
    isDark: false,
    seoTitle: 'Resume — Deep Kumar',
    seoDescription:
      'Resume, experience, core capabilities, education, certifications, and PDF download for Deep Kumar.',
  },
];

export const PRIMARY_NAV_ITEMS: Array<{
  label: string;
  route: PrimaryRoutePath;
  targetSpreadIndex: number;
}> = [
  { label: 'About Me', route: '/about', targetSpreadIndex: 1 },
  { label: 'Projects', route: '/projects', targetSpreadIndex: 2 },
  { label: 'D-Talks', route: '/d-talks', targetSpreadIndex: 3 },
  { label: 'Resume', route: '/resume', targetSpreadIndex: 4 },
];
