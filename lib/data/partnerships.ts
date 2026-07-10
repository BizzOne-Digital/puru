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
    slug: 'importer-partnerships',
    title: 'Importer Partnerships',
    description: 'Connect with reliable product sources and suppliers for your import business needs.',
    icon: 'Download',
    image: '/hero-background.png',
  },
  {
    slug: 'exporter-partnerships',
    title: 'Exporter Partnerships',
    description: 'Expand your export reach with international buyer connections and distribution channels.',
    icon: 'Upload',
    image: '/hero-background.png',
  },
  {
    slug: 'manufacturer-partnerships',
    title: 'Manufacturer Partnerships',
    description: 'Build sourcing and distribution relationships with manufacturers across global markets.',
    icon: 'Factory',
    image: '/hero-background.png',
  },
  {
    slug: 'supplier-partnerships',
    title: 'Supplier Partnerships',
    description: 'Register as a supplier and connect with buyers seeking your product categories.',
    icon: 'Boxes',
    image: '/hero-background.png',
  },
  {
    slug: 'distributor-partnerships',
    title: 'Distributor Partnerships',
    description: 'Explore distribution agreements and wholesale channel development opportunities.',
    icon: 'Truck',
    image: '/hero-background.png',
  },
  {
    slug: 'wholesale-partnerships',
    title: 'Wholesale Partnerships',
    description: 'Access bulk trade opportunities and wholesale buyer networks.',
    icon: 'Package',
    image: '/hero-background.png',
  },
  {
    slug: 'industrial-machinery-partnerships',
    title: 'Industrial Machinery Partnerships',
    description: 'Source, supply, or distribute industrial machinery and heavy equipment.',
    icon: 'Settings',
    image: '/hero-background.png',
  },
  {
    slug: 'project-infrastructure-partnerships',
    title: 'Project & Infrastructure Partnerships',
    description: 'Collaborate on large-scale project sourcing, supply, and trade requirements.',
    icon: 'Building2',
    image: '/hero-background.png',
  },
];

export function getPartnershipBySlug(slug: string): PartnershipType | undefined {
  return partnershipTypes.find((p) => p.slug === slug);
}
