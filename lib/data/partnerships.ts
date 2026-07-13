import type { IconName } from './icons';

export interface PartnershipType {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  image: string;
}

export const partnershipTypes: PartnershipType[] = [
  {
    slug: 'manufacturer-partnerships',
    title: 'Manufacturer Partnerships',
    description: 'Become a manufacturer partner and access YUVAAN\'s global distribution network across 11+ markets. We help manufacturers reach new buyers and establish exclusive distribution agreements internationally.',
    icon: 'Factory',
    image: '/images/products/global-trading.jpg',
  },
  {
    slug: 'country-representative',
    title: 'Country Representative',
    description: 'Represent YUVAAN INTERNATIONAL in your country and facilitate regional trade, project opportunities, and business development. Ideal for established professionals with local market knowledge.',
    icon: 'Globe',
    image: '/images/products/global-trading.jpg',
  },
  {
    slug: 'importer-partnerships',
    title: 'Importer Partnerships',
    description: 'Connect with reliable product sources, technologies, and suppliers to support your import operations. YUVAAN helps importers access BESS, EV infrastructure, industrial machinery, and wholesale goods.',
    icon: 'Download',
    image: '/images/products/global-trading.jpg',
  },
  {
    slug: 'exporter-partnerships',
    title: 'Exporter Partnerships',
    description: 'Expand your export reach with YUVAAN\'s international buyer connections and established distribution channels across North America, Asia, Europe, the Middle East, and beyond.',
    icon: 'Upload',
    image: '/images/products/global-trading.jpg',
  },
  {
    slug: 'joint-venture-partnerships',
    title: 'Joint Venture Partnerships',
    description: 'Co-develop projects, technologies, and business ventures with YUVAAN\'s global network. We facilitate joint venture formation including partner identification and cross-border coordination.',
    icon: 'Handshake',
    image: '/images/products/business-development.jpg',
  },
  {
    slug: 'government-institutional',
    title: 'Government & Institutional',
    description: 'Collaborate on infrastructure, energy, and development projects with government agencies and institutions. YUVAAN supports PPP structures, procurement, and institutional project development.',
    icon: 'Landmark',
    image: '/images/products/project-development.jpg',
  },
  {
    slug: 'investment-partnerships',
    title: 'Investment Partnerships',
    description: 'Explore real estate, renewable energy, and infrastructure investment opportunities through YUVAAN\'s global project pipeline. We connect investors with high-value international opportunities.',
    icon: 'TrendingUp',
    image: '/images/products/project-development.jpg',
  },
  {
    slug: 'technology-transfer',
    title: 'Technology Transfer',
    description: 'License, commercialize, or deploy cutting-edge technologies across new markets through YUVAAN. We facilitate technology transfer in energy storage, EV infrastructure, smart grid, and industrial technology.',
    icon: 'Settings',
    image: '/images/products/smart-grid.jpg',
  },
];

export function getPartnershipBySlug(slug: string): PartnershipType | undefined {
  return partnershipTypes.find((p) => p.slug === slug);
}
