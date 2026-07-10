import type { IconName } from './icons';

export interface IndustryFAQ {
  q: string;
  a: string;
}

export interface Industry {
  slug: string;
  title: string;
  eyebrow: string;
  icon: IconName;
  description: string;
  fullDescription: string;
  whoWeServe: string[];
  tradeTypes: string[];
  whatWeSupport: string[];
  relatedProducts: string[];
  faqs: IndustryFAQ[];
}

export const industries: Industry[] = [
  {
    slug: 'industrial-machinery',
    title: 'Industrial Machinery',
    eyebrow: 'Heavy Industry',
    icon: 'Factory',
    description: 'Connecting industrial machinery buyers, suppliers, and distributors across international markets with precision sourcing support.',
    fullDescription: 'The industrial machinery sector demands precision sourcing, reliable suppliers, and strong international distribution networks. YUVAAN INTERNATIONAL supports machinery buyers, manufacturers, and equipment dealers with trade connections spanning production equipment, processing systems, and industrial plant machinery.',
    whoWeServe: ['Equipment Buyers', 'Machinery Manufacturers', 'Industrial Distributors', 'Plant Operators'],
    tradeTypes: ['Import', 'Export', 'Sourcing', 'Distribution'],
    whatWeSupport: [
      'Industrial machinery buyer-supplier matching',
      'Equipment import and export coordination',
      'Machinery distributor partnership development',
      'Production equipment sourcing inquiries',
      'Cross-border industrial trade connections',
    ],
    relatedProducts: ['Industrial Machinery', 'Heavy Equipment & Parts', 'Manufacturing Supplies'],
    faqs: [
      { q: 'Who can submit an industrial machinery inquiry?', a: 'Buyers, manufacturers, suppliers, distributors, and industrial project partners operating in the machinery sector.' },
      { q: 'Do you support both new and used equipment trade?', a: 'Submit your specific requirement and our team will review applicable trade pathways.' },
    ],
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    eyebrow: 'Production Sector',
    icon: 'Settings',
    description: 'Supporting manufacturers seeking supply chain connections, raw materials, and distribution partners for efficient production.',
    fullDescription: 'Manufacturing businesses need dependable supply chains, quality inputs, and access to international markets. YUVAAN INTERNATIONAL helps manufacturers connect with raw material suppliers, component providers, and distribution partners to support efficient, scalable production operations.',
    whoWeServe: ['Manufacturers', 'Production Managers', 'Procurement Teams', 'OEM Suppliers'],
    tradeTypes: ['Sourcing', 'Import', 'Wholesale', 'Partnership'],
    whatWeSupport: [
      'Raw material and component sourcing',
      'Manufacturer-supplier trade connections',
      'Production supply chain coordination',
      'Distribution channel development',
      'International manufacturing partnerships',
    ],
    relatedProducts: ['Manufacturing Supplies', 'Industrial Chemicals & Materials', 'Packaging & Distribution Products'],
    faqs: [
      { q: 'What size manufacturers do you work with?', a: 'We review inquiries from manufacturing businesses of various scales seeking supply or trade connections.' },
      { q: 'Can you help with multi-supplier sourcing?', a: 'Yes. Describe your production inputs and our team will assess sourcing and coordination options.' },
    ],
  },
  {
    slug: 'construction-infrastructure',
    title: 'Construction & Infrastructure',
    eyebrow: 'Infrastructure',
    icon: 'Building2',
    description: 'Bridging construction firms with material suppliers and equipment sources for large-scale infrastructure projects.',
    fullDescription: 'Construction and infrastructure projects require coordinated sourcing of materials, equipment, and specialized supplies. YUVAAN INTERNATIONAL connects contractors, developers, and EPC firms with international suppliers and trade partners to support project delivery at scale.',
    whoWeServe: ['Contractors', 'Developers', 'EPC Firms', 'Project Managers'],
    tradeTypes: ['Import', 'Sourcing', 'Project Supply', 'Distribution'],
    whatWeSupport: [
      'Construction material sourcing',
      'Infrastructure project supply coordination',
      'Equipment and material trade connections',
      'Contractor-supplier matching',
      'Large-scale project sourcing inquiries',
    ],
    relatedProducts: ['Construction & Infrastructure Materials', 'Heavy Equipment & Parts', 'Industrial Machinery'],
    faqs: [
      { q: 'Do you support government or public infrastructure projects?', a: 'We review all project inquiries subject to applicable regulations and trade requirements.' },
      { q: 'Can material suppliers register interest?', a: 'Yes. Suppliers and manufacturers serving the construction sector can submit partnership inquiries.' },
    ],
  },
  {
    slug: 'wholesale-distribution',
    title: 'Wholesale & Distribution',
    eyebrow: 'Distribution',
    icon: 'Package',
    description: 'Facilitating wholesale trade and distribution network development for diverse product categories internationally.',
    fullDescription: 'Wholesale and distribution businesses thrive on reliable product supply and strong channel partnerships. YUVAAN INTERNATIONAL supports wholesalers and distributors in building international trade connections, sourcing product lines, and developing distribution agreements across markets.',
    whoWeServe: ['Wholesalers', 'Distributors', 'Channel Partners', 'Retail Suppliers'],
    tradeTypes: ['Wholesale', 'Import', 'Export', 'Distribution'],
    whatWeSupport: [
      'Wholesale product sourcing',
      'Distributor partnership development',
      'Bulk import-export coordination',
      'Channel expansion trade support',
      'Cross-border distribution connections',
    ],
    relatedProducts: ['Wholesale Consumer Products', 'Packaging & Distribution Products', 'Agricultural & Food Trade Products'],
    faqs: [
      { q: 'Can new distributors explore product lines through you?', a: 'Yes. Submit your market and product interest and our team will review relevant trade pathways.' },
      { q: 'Do you support exclusive distribution inquiries?', a: 'Partnership terms are reviewed on a case-by-case basis through the inquiry process.' },
    ],
  },
  {
    slug: 'consumer-products',
    title: 'Consumer Products',
    eyebrow: 'Consumer Goods',
    icon: 'ShoppingBag',
    description: 'Connecting consumer goods importers and exporters with reliable product sources across global markets.',
    fullDescription: 'Consumer product trade spans a wide range of categories and market channels. YUVAAN INTERNATIONAL helps importers, exporters, and distributors connect with product sources, wholesale partners, and retail supply opportunities in international markets.',
    whoWeServe: ['Importers', 'Exporters', 'Retail Suppliers', 'Brand Distributors'],
    tradeTypes: ['Import', 'Export', 'Wholesale', 'Sourcing'],
    whatWeSupport: [
      'Consumer goods sourcing',
      'Import-export trade coordination',
      'Retail and wholesale supply connections',
      'Product line expansion support',
      'International brand distribution pathways',
    ],
    relatedProducts: ['Wholesale Consumer Products', 'Custom Product Sourcing', 'Packaging & Distribution Products'],
    faqs: [
      { q: 'What consumer product categories do you cover?', a: 'We review inquiries across general consumer goods categories including household, personal care, and commercial retail products.' },
      { q: 'Can I inquire about private label products?', a: 'Yes. Include your private label or branding requirements in your inquiry submission.' },
    ],
  },
  {
    slug: 'agriculture-food-trade',
    title: 'Agriculture & Food Trade',
    eyebrow: 'Agri-Food',
    icon: 'Wheat',
    description: 'Supporting agri-trade businesses with international sourcing, commodity trade, and distribution channels.',
    fullDescription: 'Agriculture and food trade involves commodities, processed products, and specialty goods moving across borders. YUVAAN INTERNATIONAL supports agri-food businesses with sourcing coordination, import-export connections, and distribution partnership development.',
    whoWeServe: ['Commodity Traders', 'Food Importers', 'Agri Exporters', 'Food Distributors'],
    tradeTypes: ['Import', 'Export', 'Commodity Trade', 'Distribution'],
    whatWeSupport: [
      'Agricultural commodity trade coordination',
      'Food product import-export support',
      'Agri-food distributor connections',
      'Bulk commodity sourcing inquiries',
      'Cross-border food trade partnerships',
    ],
    relatedProducts: ['Agricultural & Food Trade Products', 'Wholesale Consumer Products', 'Custom Product Sourcing'],
    faqs: [
      { q: 'Are all food products eligible for trade support?', a: 'All inquiries are subject to review, market availability, and applicable food trade regulations.' },
      { q: 'Do you support organic or specialty food products?', a: 'Yes. Submit your product specifications and certification details for review.' },
    ],
  },
  {
    slug: 'packaging-supplies',
    title: 'Packaging & Supplies',
    eyebrow: 'Supply Chain',
    icon: 'Boxes',
    description: 'Packaging material sourcing and supply chain solutions for commercial manufacturing and distribution operations.',
    fullDescription: 'Packaging is critical to manufacturing output and distribution efficiency. YUVAAN INTERNATIONAL connects businesses with packaging material suppliers, logistics product sources, and distribution supply partners across international trade channels.',
    whoWeServe: ['Manufacturers', 'Distributors', 'Logistics Firms', 'Retail Packagers'],
    tradeTypes: ['Sourcing', 'Wholesale', 'Import', 'Distribution'],
    whatWeSupport: [
      'Packaging material sourcing',
      'Commercial packaging supply connections',
      'Logistics product trade coordination',
      'Bulk packaging procurement support',
      'Supply chain packaging partnerships',
    ],
    relatedProducts: ['Packaging & Distribution Products', 'Manufacturing Supplies', 'Wholesale Consumer Products'],
    faqs: [
      { q: 'What types of packaging materials do you support?', a: 'Inquiries may include industrial packaging, commercial packaging, and logistics-related supply products.' },
      { q: 'Can packaging manufacturers find buyers?', a: 'Yes. Packaging suppliers can submit inquiries to explore buyer and distribution connections.' },
    ],
  },
  {
    slug: 'industrial-materials',
    title: 'Industrial Materials',
    eyebrow: 'Raw Materials',
    icon: 'Layers',
    description: 'Raw material and industrial compound trade for manufacturers and processors across global supply chains.',
    fullDescription: 'Industrial materials form the foundation of manufacturing and processing operations. YUVAAN INTERNATIONAL supports trade inquiries for raw materials, industrial compounds, and specialty inputs used across production and heavy industry supply chains.',
    whoWeServe: ['Manufacturers', 'Processors', 'Material Suppliers', 'Procurement Teams'],
    tradeTypes: ['Import', 'Export', 'Sourcing', 'Bulk Supply'],
    whatWeSupport: [
      'Raw material sourcing coordination',
      'Industrial compound trade connections',
      'Processor-supplier matching',
      'Bulk material procurement support',
      'Cross-border industrial supply partnerships',
    ],
    relatedProducts: ['Industrial Chemicals & Materials', 'Manufacturing Supplies', 'Industrial Machinery'],
    faqs: [
      { q: 'Do you handle hazardous or regulated materials?', a: 'All material inquiries are subject to regulatory review and applicable trade compliance requirements.' },
      { q: 'What volume requirements apply?', a: 'Submit your volume and specification details — we review inquiries across various scales.' },
    ],
  },
  {
    slug: 'import-export',
    title: 'Import & Export Businesses',
    eyebrow: 'Global Trade',
    icon: 'ArrowLeftRight',
    description: 'Full-scope trade support for import-export businesses operating across global markets and trade corridors.',
    fullDescription: 'Import-export businesses operate at the center of international trade. YUVAAN INTERNATIONAL provides comprehensive support for traders seeking product sources, buyer connections, supply partnerships, and market access across global trade corridors.',
    whoWeServe: ['Importers', 'Exporters', 'Trading Companies', 'Trade Agents'],
    tradeTypes: ['Import', 'Export', 'Sourcing', 'Partnership'],
    whatWeSupport: [
      'Import-export trade coordination',
      'Buyer and supplier matching',
      'Product sourcing across categories',
      'Market entry trade support',
      'Cross-border partnership development',
    ],
    relatedProducts: ['Custom Product Sourcing', 'Wholesale Consumer Products', 'Agricultural & Food Trade Products'],
    faqs: [
      { q: 'Do you support new import-export businesses?', a: 'Yes. New and established trading businesses can submit inquiries for trade connection support.' },
      { q: 'Can I inquire about multiple product categories?', a: 'Yes. Describe your full trade portfolio or target categories in your inquiry.' },
    ],
  },
  {
    slug: 'custom-trade',
    title: 'Custom Trade Requirements',
    eyebrow: 'Bespoke Trade',
    icon: 'Star',
    description: "Bespoke trade coordination for unique product, sourcing, or partnership requirements that don't fit standard categories.",
    fullDescription: 'Some trade requirements are unique, project-specific, or cross multiple sectors. YUVAAN INTERNATIONAL provides bespoke trade coordination for businesses whose needs do not fit standard product or industry categories — connecting you with relevant pathways through a tailored review process.',
    whoWeServe: ['Project Partners', 'All Business Types', 'Specialty Traders', 'Consultants'],
    tradeTypes: ['Sourcing', 'Partnership', 'Import', 'Export'],
    whatWeSupport: [
      'Non-standard trade requirement review',
      'Cross-category sourcing coordination',
      'Project-based trade connections',
      'Specialty product trade inquiries',
      'Tailored partnership development',
    ],
    relatedProducts: ['Custom Product Sourcing', 'Industrial Machinery', 'Construction & Infrastructure Materials'],
    faqs: [
      { q: 'When should I use custom trade requirements?', a: 'Use this when your business need spans multiple sectors or does not fit existing product or industry categories.' },
      { q: 'How long does a custom inquiry review take?', a: 'Review timelines vary by complexity. Our team will contact you after assessing your submitted requirements.' },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug);
}

export function getIndustryTitleBySlug(slug: string): string | undefined {
  return getIndustryBySlug(slug)?.title;
}
