import type { IconName } from './icons';

export interface ProductFAQ {
  q: string;
  a: string;
}

export interface ProductCategory {
  slug: string;
  title: string;
  category: string;
  eyebrow: string;
  icon: IconName;
  shortDescription: string;
  fullDescription: string;
  audience: string[];
  tradeTypes: string[];
  keyPoints: string[];
  relatedIndustrySlugs: string[];
  faqs: ProductFAQ[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'industrial-machinery',
    title: 'Industrial Machinery',
    category: 'Industrial Machinery',
    eyebrow: 'Industrial Machinery',
    icon: 'Settings',
    shortDescription: 'Heavy-duty industrial machinery for manufacturing, processing, and production operations across various industries.',
    fullDescription: 'YUVAAN INTERNATIONAL connects businesses with reliable sources for industrial machinery used in manufacturing, processing, and large-scale production. Whether you are sourcing new equipment, identifying suppliers, or exploring distribution partnerships, we help coordinate trade connections across international markets.',
    audience: ['Manufacturers', 'Industrial Buyers', 'Equipment Distributors', 'Plant Operators'],
    tradeTypes: ['Import', 'Export', 'Sourcing', 'Distribution'],
    keyPoints: [
      'Production and processing machinery sourcing',
      'Equipment supplier and buyer matching',
      'Industrial machinery import-export coordination',
      'Spare parts and component trade support',
      'Manufacturer and distributor connection pathways',
    ],
    relatedIndustrySlugs: ['industrial-machinery', 'manufacturing', 'construction-infrastructure'],
    faqs: [
      { q: 'What types of industrial machinery can you help source?', a: 'We support inquiries for production machinery, processing equipment, plant machinery, and related industrial systems used across manufacturing and heavy industry sectors.' },
      { q: 'Do you work with both buyers and suppliers?', a: 'Yes. We connect industrial machinery buyers, manufacturers, suppliers, and distributors looking to expand through international trade channels.' },
      { q: 'Can you support custom machinery requirements?', a: 'Yes. Submit your specification and our team will review the requirement and identify relevant sourcing or partnership pathways.' },
    ],
  },
  {
    slug: 'heavy-equipment-parts',
    title: 'Heavy Equipment & Parts',
    category: 'Industrial Machinery',
    eyebrow: 'Equipment & Parts',
    icon: 'Factory',
    shortDescription: 'Construction and industrial heavy equipment components, spare parts, and accessories for operational needs.',
    fullDescription: 'From construction fleets to industrial operations, heavy equipment reliability depends on quality parts and dependable supply channels. YUVAAN INTERNATIONAL helps businesses source heavy equipment, components, and spare parts through verified international trade connections.',
    audience: ['Construction Companies', 'Equipment Dealers', 'Fleet Operators', 'Maintenance Contractors'],
    tradeTypes: ['Import', 'Sourcing', 'Wholesale', 'Distribution'],
    keyPoints: [
      'Heavy equipment and fleet component sourcing',
      'OEM and aftermarket parts trade coordination',
      'Construction equipment supply connections',
      'Bulk parts procurement support',
      'Dealer and distributor partnership pathways',
    ],
    relatedIndustrySlugs: ['industrial-machinery', 'construction-infrastructure', 'import-export'],
    faqs: [
      { q: 'Can you help with spare parts for existing fleets?', a: 'Yes. We review parts requirements and work to identify sourcing channels for components, accessories, and replacement parts.' },
      { q: 'Do you support equipment dealers?', a: 'Yes. We assist dealers and distributors seeking supply partnerships and international product channels.' },
    ],
  },
  {
    slug: 'manufacturing-supplies',
    title: 'Manufacturing Supplies',
    category: 'Manufacturing',
    eyebrow: 'Manufacturing',
    icon: 'Layers',
    shortDescription: 'Raw materials, components, and supplies for manufacturing and production facilities worldwide.',
    fullDescription: 'Manufacturers depend on consistent supply of raw materials, components, and production inputs. YUVAAN INTERNATIONAL supports manufacturing businesses by connecting them with suppliers, wholesalers, and trade partners across global supply chains.',
    audience: ['Manufacturers', 'Production Managers', 'Procurement Teams', 'Plant Buyers'],
    tradeTypes: ['Import', 'Sourcing', 'Wholesale', 'Supply Chain'],
    keyPoints: [
      'Raw material and component sourcing',
      'Production supply chain coordination',
      'Manufacturer-supplier matching',
      'Bulk procurement trade support',
      'Cross-border supply partnership development',
    ],
    relatedIndustrySlugs: ['manufacturing', 'industrial-materials', 'packaging-supplies'],
    faqs: [
      { q: 'What manufacturing supplies do you cover?', a: 'We support a broad range of production inputs including raw materials, components, industrial consumables, and facility supplies.' },
      { q: 'Can small manufacturers submit inquiries?', a: 'Yes. Businesses of various sizes can submit sourcing inquiries for review.' },
    ],
  },
  {
    slug: 'wholesale-consumer-products',
    title: 'Wholesale Consumer Products',
    category: 'Wholesale Products',
    eyebrow: 'Wholesale Products',
    icon: 'Package',
    shortDescription: 'Bulk consumer goods for wholesale distribution across retail and commercial channels internationally.',
    fullDescription: 'Wholesale consumer product trade requires reliable suppliers, competitive sourcing, and strong distribution networks. YUVAAN INTERNATIONAL helps wholesalers, distributors, and retailers connect with product sources and trade opportunities across international markets.',
    audience: ['Wholesalers', 'Distributors', 'Retailers', 'Importers'],
    tradeTypes: ['Import', 'Export', 'Wholesale', 'Distribution'],
    keyPoints: [
      'Bulk consumer goods sourcing',
      'Wholesale buyer-supplier connections',
      'Retail and commercial distribution channels',
      'Private label and branded product trade',
      'International wholesale partnership support',
    ],
    relatedIndustrySlugs: ['wholesale-distribution', 'consumer-products', 'import-export'],
    faqs: [
      { q: 'What product categories fall under wholesale consumer goods?', a: 'Inquiries may include household goods, personal care, general merchandise, and other consumer products sold through wholesale channels.' },
      { q: 'Do you support new market entry?', a: 'Yes. We help businesses explore import, distribution, and wholesale partnership opportunities in new markets.' },
    ],
  },
  {
    slug: 'construction-infrastructure-materials',
    title: 'Construction & Infrastructure Materials',
    category: 'Infrastructure',
    eyebrow: 'Infrastructure',
    icon: 'Building2',
    shortDescription: 'Building materials, construction supplies, and infrastructure components for large-scale projects.',
    fullDescription: 'Large-scale construction and infrastructure projects require dependable material supply and international sourcing capability. YUVAAN INTERNATIONAL supports contractors, developers, and project partners with trade connections for building materials and infrastructure components.',
    audience: ['Contractors', 'Infrastructure Developers', 'Project Managers', 'EPC Firms'],
    tradeTypes: ['Import', 'Sourcing', 'Project Supply', 'Distribution'],
    keyPoints: [
      'Building and construction material sourcing',
      'Infrastructure project supply coordination',
      'Contractor-supplier trade connections',
      'Bulk material procurement support',
      'Cross-border project sourcing pathways',
    ],
    relatedIndustrySlugs: ['construction-infrastructure', 'industrial-machinery', 'import-export'],
    faqs: [
      { q: 'Do you support large infrastructure projects?', a: 'Yes. We review project-level material and supply requirements and identify relevant trade coordination pathways.' },
      { q: 'Can suppliers of construction materials connect through you?', a: 'Yes. Material suppliers and manufacturers can submit partnership and supply inquiries.' },
    ],
  },
  {
    slug: 'industrial-chemicals-materials',
    title: 'Industrial Chemicals & Materials',
    category: 'Industrial Supplies',
    eyebrow: 'Industrial Supplies',
    icon: 'Boxes',
    shortDescription: 'Industrial-grade chemicals, raw materials, and specialty compounds for manufacturing and processing.',
    fullDescription: 'Industrial processors and manufacturers rely on specialized chemicals and raw materials. YUVAAN INTERNATIONAL facilitates trade inquiries for industrial-grade chemicals, compounds, and specialty materials while supporting compliant international business connections.',
    audience: ['Chemical Manufacturers', 'Industrial Processors', 'Plant Operators', 'Procurement Teams'],
    tradeTypes: ['Import', 'Export', 'Sourcing', 'Bulk Supply'],
    keyPoints: [
      'Industrial chemical and compound sourcing',
      'Specialty material trade coordination',
      'Processor-supplier matching',
      'Bulk industrial supply inquiries',
      'Manufacturing input trade support',
    ],
    relatedIndustrySlugs: ['industrial-materials', 'manufacturing', 'import-export'],
    faqs: [
      { q: 'Do you handle regulated chemical products?', a: 'All inquiries are subject to review, confirmation, and applicable trade regulations. Submit your requirement for assessment.' },
      { q: 'What information should I include in my inquiry?', a: 'Include product type, volume, destination market, and any compliance or specification requirements.' },
    ],
  },
  {
    slug: 'packaging-distribution-products',
    title: 'Packaging & Distribution Products',
    category: 'Industrial Supplies',
    eyebrow: 'Supply Chain',
    icon: 'Package',
    shortDescription: 'Packaging solutions, logistics materials, and distribution supplies for supply chain operations.',
    fullDescription: 'Efficient supply chains depend on reliable packaging and logistics materials. YUVAAN INTERNATIONAL connects distributors, manufacturers, and logistics businesses with packaging products and distribution supply opportunities across international trade channels.',
    audience: ['Distributors', 'Logistics Companies', 'Retailers', 'Manufacturers'],
    tradeTypes: ['Wholesale', 'Import', 'Sourcing', 'Distribution'],
    keyPoints: [
      'Packaging material sourcing',
      'Logistics and distribution supply products',
      'Bulk packaging procurement support',
      'Supply chain product trade connections',
      'Distributor partnership coordination',
    ],
    relatedIndustrySlugs: ['packaging-supplies', 'wholesale-distribution', 'manufacturing'],
    faqs: [
      { q: 'What packaging products can I inquire about?', a: 'Inquiries may include commercial packaging, industrial packaging, logistics materials, and related distribution supplies.' },
      { q: 'Do you work with logistics companies?', a: 'Yes. We support logistics and distribution businesses seeking product supply and trade partnerships.' },
    ],
  },
  {
    slug: 'agricultural-food-trade-products',
    title: 'Agricultural & Food Trade Products',
    category: 'Wholesale Products',
    eyebrow: 'Agri-Food Trade',
    icon: 'Wheat',
    shortDescription: 'Agricultural commodities, food products, and agri-trade goods for international market distribution.',
    fullDescription: 'Agricultural and food trade spans commodities, processed goods, and specialty products across global markets. YUVAAN INTERNATIONAL supports importers, exporters, and distributors with agri-food trade connections, sourcing coordination, and partnership development.',
    audience: ['Importers', 'Exporters', 'Food Distributors', 'Commodity Traders'],
    tradeTypes: ['Import', 'Export', 'Commodity Trade', 'Distribution'],
    keyPoints: [
      'Agricultural commodity trade support',
      'Food product import-export coordination',
      'Agri-food distributor connections',
      'Bulk commodity sourcing inquiries',
      'Cross-border food trade partnerships',
    ],
    relatedIndustrySlugs: ['agriculture-food-trade', 'wholesale-distribution', 'import-export'],
    faqs: [
      { q: 'What agri-food products do you support?', a: 'We review inquiries for agricultural commodities, food products, and related agri-trade goods subject to market and regulatory review.' },
      { q: 'Can exporters find international buyers through you?', a: 'Yes. Exporters and suppliers can submit inquiries to explore buyer and distribution connections.' },
    ],
  },
  {
    slug: 'custom-product-sourcing',
    title: 'Custom Product Sourcing',
    category: 'Custom Sourcing',
    eyebrow: 'Custom Sourcing',
    icon: 'Search',
    shortDescription: 'Tailored product sourcing and supplier-buyer matching for specific trade requirements and needs.',
    fullDescription: 'Not every trade requirement fits a standard category. YUVAAN INTERNATIONAL provides custom product sourcing support for businesses with unique requirements — matching importers, exporters, manufacturers, and project partners with relevant trade pathways.',
    audience: ['All Business Types', 'Project Partners', 'Importers', 'Sourcing Managers'],
    tradeTypes: ['Sourcing', 'Import', 'Export', 'Partnership'],
    keyPoints: [
      'Tailored product sourcing inquiries',
      'Supplier-buyer matching for unique requirements',
      'Project-based trade coordination',
      'Non-standard category trade support',
      'Custom partnership and supply pathways',
    ],
    relatedIndustrySlugs: ['custom-trade', 'import-export', 'manufacturing'],
    faqs: [
      { q: 'When should I use custom product sourcing?', a: 'Use this when your product, machinery, or supply requirement does not clearly fit existing categories or requires a tailored approach.' },
      { q: 'How detailed should my inquiry be?', a: 'Provide as much detail as possible including product description, quantity, target market, timeline, and business type for faster review.' },
    ],
  },
];

export function getProductBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): ProductCategory[] {
  return productCategories.filter(p => p.category === category);
}
