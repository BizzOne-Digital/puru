import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, CheckCircle,
  Users, ChevronDown, MessageSquare, Package,
} from 'lucide-react';
import Container from '../../../components/ui/Container';
import ScrollReveal from '../../../components/ui/ScrollReveal';
import GlobalGridBackground from '../../../components/ui/GlobalGridBackground';
import TradeRouteLines from '../../../components/ui/TradeRouteLines';

// ─── Inline types ──────────────────────────────────────────────────────
interface Industry {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  fullDescription: string;
  whatWeSupport: string[];
  whoWeServe: string[];
  tradeTypes: string[];
  relatedProducts: string[];
  faqs: Array<{ q: string; a: string }>;
}

interface RelatedProduct {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
}

// ─── Inline data ───────────────────────────────────────────────────────
const industries: Industry[] = [
  { slug: 'industrial-machinery', title: 'Industrial Machinery', eyebrow: 'Heavy Industry', description: 'Connecting industrial machinery buyers, suppliers, and distributors across international markets.', fullDescription: 'The industrial machinery sector spans everything from CNC equipment and hydraulic presses to conveyors, compressors, and automated production systems. YUVAAN INTERNATIONAL connects buyers, sellers, and distributors operating in this sector with international trade opportunities — whether you are sourcing machinery for your facility or looking to export equipment to new markets.', whatWeSupport: ['Import and export of production and processing machinery', 'Supplier-buyer matching for specific equipment types', 'Connections for both new and refurbished equipment', 'Trade coordination for spare parts and accessories', 'Support for single units and bulk equipment orders'], whoWeServe: ['Machinery Manufacturers', 'Industrial Buyers', 'Equipment Distributors', 'Factory Operators', 'Engineering Firms'], tradeTypes: ['Import', 'Export', 'Distribution', 'Project Supply'], relatedProducts: ['Industrial Machinery', 'Heavy Equipment & Parts', 'Manufacturing Supplies'], faqs: [{ q: 'Can YUVAAN help me find buyers for surplus industrial equipment?', a: 'Yes. If you have machinery to sell, submit an inquiry describing the equipment and we will work to identify potential buyers.' }, { q: 'Do you support export of Canadian-manufactured equipment?', a: 'Absolutely. We support both import sourcing for Canadian businesses and export of Canadian products to international markets.' }] },
  { slug: 'manufacturing', title: 'Manufacturing', eyebrow: 'Production & Supply Chain', description: 'Supporting manufacturers seeking supply chain connections, raw materials, and distribution partners.', fullDescription: 'Manufacturing businesses depend on reliable global supply chains to stay competitive. YUVAAN INTERNATIONAL supports manufacturers by connecting them with international suppliers of raw materials, production components, and equipment — and by helping them find buyers and distribution partners for finished goods in global markets.', whatWeSupport: ['Raw material sourcing for production facilities', 'Component and sub-assembly supplier connections', 'Finished goods export and distribution matching', 'Supply chain diversification support', 'Connections across key global manufacturing hubs'], whoWeServe: ['Manufacturers', 'Production Managers', 'Supply Chain Teams', 'Contract Manufacturers', 'OEM Suppliers'], tradeTypes: ['Import', 'Export', 'Supply Chain', 'Wholesale Distribution'], relatedProducts: ['Manufacturing Supplies', 'Industrial Machinery', 'Industrial Chemicals & Materials'], faqs: [{ q: 'Can you help a manufacturer expand into export markets?', a: 'Yes. We can help identify buyer connections and distribution channels in international markets for manufactured goods.' }] },
  { slug: 'construction-infrastructure', title: 'Construction & Infrastructure', eyebrow: 'Built Environment', description: 'Bridging construction firms with material suppliers and equipment sources for large-scale projects.', fullDescription: 'Construction and infrastructure development requires bulk sourcing of steel, cement, aggregates, piping, and construction equipment across long project timelines. YUVAAN INTERNATIONAL supports contractors, developers, and project managers in establishing reliable international supply connections for materials and equipment needed at scale.', whatWeSupport: ['Structural steel and rebar sourcing', 'Cement, aggregate, and concrete material trade', 'Heavy construction equipment connections', 'Specialty building materials and systems', 'Long-term project material supply coordination'], whoWeServe: ['Contractors', 'Developers', 'Civil Engineers', 'Project Managers', 'Government Project Teams'], tradeTypes: ['Import', 'Project Supply', 'Bulk Trade'], relatedProducts: ['Construction & Infrastructure Materials', 'Heavy Equipment & Parts', 'Industrial Chemicals & Materials'], faqs: [{ q: 'Can you support multi-phase infrastructure project supply?', a: 'Yes. We can help connect you with suppliers capable of ongoing supply throughout multi-phase construction projects.' }] },
  { slug: 'wholesale-distribution', title: 'Wholesale & Distribution', eyebrow: 'Wholesale Trade', description: 'Facilitating wholesale trade and distribution network development for diverse product categories.', fullDescription: 'Wholesale distribution is a critical link between manufacturers and retail or commercial end users. YUVAAN INTERNATIONAL helps wholesalers and distributors source products internationally, connect with manufacturers for bulk purchase agreements, and develop distribution network relationships across borders.', whatWeSupport: ['Bulk product sourcing from international manufacturers', 'Wholesale buyer-supplier network development', 'Distribution agreement facilitation', 'Multi-category wholesale trade coordination', 'Cross-border wholesale channel connections'], whoWeServe: ['Wholesalers', 'Distributors', 'Trading Companies', 'Buying Agents', 'Retail Chains'], tradeTypes: ['Import', 'Wholesale', 'Distribution Partnership'], relatedProducts: ['Wholesale Consumer Products', 'Packaging & Distribution Products', 'Agricultural & Food Trade Products'], faqs: [{ q: 'What product categories do you support for wholesale trade?', a: 'We support wholesale across consumer goods, industrial supplies, food products, packaging, and specialty categories.' }] },
  { slug: 'consumer-products', title: 'Consumer Products', eyebrow: 'Retail & Consumer Goods', description: 'Connecting consumer goods importers and exporters with reliable product sources across global markets.', fullDescription: 'Consumer products span electronics, apparel, household goods, personal care, and general merchandise. YUVAAN INTERNATIONAL connects importers looking to bring quality consumer goods into Canadian or other markets with international manufacturers and wholesale suppliers who can deliver at scale.', whatWeSupport: ['Electronics and technology product sourcing', 'Apparel, textiles, and fashion trade', 'Household goods and home products', 'Personal care and beauty product trade', 'General merchandise wholesale connections'], whoWeServe: ['Importers', 'Retailers', 'E-commerce Businesses', 'Brand Distributors', 'Buying Agencies'], tradeTypes: ['Import', 'Wholesale Distribution', 'Retail Supply'], relatedProducts: ['Wholesale Consumer Products', 'Packaging & Distribution Products'], faqs: [{ q: 'Can you connect me with manufacturers for private label consumer products?', a: 'Yes. We can help connect you with manufacturers that support private label and OEM production for consumer products.' }] },
  { slug: 'agriculture-food-trade', title: 'Agriculture & Food Trade', eyebrow: 'Agri-Trade', description: 'Supporting agri-trade businesses with international sourcing, commodity trade, and distribution channels.', fullDescription: 'Agriculture and food trade connects farms, processors, importers, and distributors across global supply chains. YUVAAN INTERNATIONAL supports businesses in this sector by helping establish trade connections for grains, pulses, spices, processed foods, and agricultural commodities.', whatWeSupport: ['Grain, pulse, and commodity export connections', 'Spice and specialty food import sourcing', 'Processed food and packaged goods trade', 'Agricultural chemical and input sourcing', 'Canada-focused agri-trade development'], whoWeServe: ['Farmers', 'Agri-Exporters', 'Food Importers', 'Grocery Distributors', 'Food Processors'], tradeTypes: ['Import', 'Export', 'Commodity Trade', 'Wholesale Distribution'], relatedProducts: ['Agricultural & Food Trade Products', 'Packaging & Distribution Products', 'Industrial Chemicals & Materials'], faqs: [{ q: 'Do you work with certified organic food exporters?', a: 'Yes. We can connect certified organic producers with importers and distributors in target markets.' }] },
  { slug: 'packaging-supplies', title: 'Packaging & Supplies', eyebrow: 'Packaging Industry', description: 'Packaging material sourcing and supply chain solutions for commercial manufacturing and distribution.', fullDescription: 'Packaging is essential to every product that moves through global supply chains. YUVAAN INTERNATIONAL helps businesses source cartons, shrink film, pallets, labels, and specialty packaging materials from international suppliers.', whatWeSupport: ['Corrugated carton and box sourcing', 'Flexible packaging and stretch film trade', 'Food-grade and pharmaceutical packaging', 'Custom print and branded packaging connections', 'Pallet and bulk material packaging supply'], whoWeServe: ['Packaging Manufacturers', 'Food Processors', 'Retailers', 'Logistics Companies', 'E-commerce Businesses'], tradeTypes: ['Import', 'Wholesale', 'Continuous Supply'], relatedProducts: ['Packaging & Distribution Products', 'Wholesale Consumer Products', 'Agricultural & Food Trade Products'], faqs: [{ q: 'Can you source sustainable or eco-friendly packaging materials?', a: 'Yes. We can connect you with suppliers specialising in sustainable, recycled, and eco-certified packaging materials.' }] },
  { slug: 'industrial-materials', title: 'Industrial Materials', eyebrow: 'Materials & Compounds', description: 'Raw material and industrial compound trade for manufacturers and processors across global supply chains.', fullDescription: 'Industrial materials form the foundation of manufacturing, construction, energy, and processing operations. YUVAAN INTERNATIONAL supports the trade of metals, polymers, composites, industrial chemicals, and specialty materials across international markets.', whatWeSupport: ['Metal and alloy sourcing and trade', 'Polymer, rubber, and composite materials', 'Specialty industrial compound connections', 'Energy sector material supply coordination', 'Bulk and specialty material procurement'], whoWeServe: ['Manufacturers', 'Construction Companies', 'Chemical Processors', 'Energy Companies', 'Research Institutions'], tradeTypes: ['Import', 'Export', 'Bulk Trade', 'Specialty Supply'], relatedProducts: ['Industrial Chemicals & Materials', 'Manufacturing Supplies', 'Construction & Infrastructure Materials'], faqs: [{ q: 'Do you source certified or standards-compliant industrial materials?', a: "We help connect you with suppliers who can provide documentation and certifications. Verification remains the buyer's responsibility." }] },
  { slug: 'import-export', title: 'Import & Export Businesses', eyebrow: 'Trade & Commerce', description: 'Full-scope trade support for import-export businesses operating across global markets.', fullDescription: 'Import and export businesses are at the heart of global commerce. YUVAAN INTERNATIONAL provides trade connection support across sourcing, supplier identification, buyer matching, and partnership development — helping import-export businesses build and expand their international trade operations.', whatWeSupport: ['Supplier sourcing for import operations', 'Buyer identification for export businesses', 'Multi-category trade coordination', 'New market entry connection support', 'Long-term trade relationship development'], whoWeServe: ['Import-Export Companies', 'Trading Houses', 'Buying Agents', 'Freight Forwarders', 'Trade Brokers'], tradeTypes: ['Import', 'Export', 'Re-export', 'Trading'], relatedProducts: ['Custom Product Sourcing', 'Wholesale Consumer Products', 'Agricultural & Food Trade Products'], faqs: [{ q: 'Can YUVAAN support a business entering international trade for the first time?', a: 'Yes. We work with businesses at all stages — from first-time exporters to established trading houses.' }] },
  { slug: 'custom-trade', title: 'Custom Trade Requirements', eyebrow: 'Bespoke Trade', description: 'Bespoke trade coordination for unique product, sourcing, or partnership requirements.', fullDescription: "Not every trade requirement fits a predefined category. YUVAAN INTERNATIONAL's custom trade service is designed for businesses with specific, niche, or complex requirements that need tailored sourcing, supplier matching, or trade coordination. Submit your inquiry with as much detail as possible and our team will work to identify the best path forward.", whatWeSupport: ['Non-standard product sourcing', 'Niche market supplier identification', 'Complex multi-product trade coordination', 'Cross-industry sourcing requirements', 'Exploratory trade and market entry support'], whoWeServe: ['All Business Types', 'Entrepreneurs', 'Startups', 'Established Businesses', 'Project Developers'], tradeTypes: ['Import', 'Export', 'Sourcing', 'Custom'], relatedProducts: ['Custom Product Sourcing'], faqs: [{ q: 'Is there a minimum size for a custom trade inquiry?', a: 'No. We review all custom inquiries regardless of scale. Include as much detail as possible for the best assessment.' }] },
];

// Product categories for cross-linking
const allProducts: RelatedProduct[] = [
  { slug: 'industrial-machinery',             title: 'Industrial Machinery',                   category: 'Industrial Machinery', shortDescription: 'Heavy-duty industrial machinery for manufacturing, processing, and production operations.' },
  { slug: 'heavy-equipment-parts',            title: 'Heavy Equipment & Parts',                category: 'Industrial Machinery', shortDescription: 'Construction and industrial heavy equipment components, spare parts, and accessories.' },
  { slug: 'manufacturing-supplies',           title: 'Manufacturing Supplies',                 category: 'Manufacturing',        shortDescription: 'Raw materials, components, and supplies for manufacturing and production facilities.' },
  { slug: 'wholesale-consumer-products',      title: 'Wholesale Consumer Products',            category: 'Wholesale Products',   shortDescription: 'Bulk consumer goods for wholesale distribution across retail and commercial channels.' },
  { slug: 'construction-infrastructure-materials', title: 'Construction & Infrastructure Materials', category: 'Infrastructure', shortDescription: 'Building materials, construction supplies, and infrastructure components for large-scale projects.' },
  { slug: 'industrial-chemicals-materials',   title: 'Industrial Chemicals & Materials',       category: 'Industrial Supplies',  shortDescription: 'Industrial-grade chemicals, raw materials, and specialty compounds for manufacturing.' },
  { slug: 'packaging-distribution-products',  title: 'Packaging & Distribution Products',      category: 'Industrial Supplies',  shortDescription: 'Packaging solutions, logistics materials, and distribution supplies for supply chain operations.' },
  { slug: 'agricultural-food-trade-products', title: 'Agricultural & Food Trade Products',     category: 'Wholesale Products',   shortDescription: 'Agricultural commodities, food products, and agri-trade goods for international markets.' },
  { slug: 'custom-product-sourcing',          title: 'Custom Product Sourcing',                category: 'Custom Sourcing',      shortDescription: 'Tailored product sourcing and supplier-buyer matching for specific trade requirements.' },
];

function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export const dynamic = 'force-dynamic';

// ─── Metadata ──────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: 'Not Found' };
  return {
    title: `${industry.title} | Industries | YUVAAN INTERNATIONAL`,
    description: industry.description,
  };
}

// ─── Page ──────────────────────────────────────────────────────────────
export default async function IndustryDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relatedProducts = allProducts.filter((p) => industry.relatedProducts.includes(p.title));
  const moreIndustries = industries.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-navy">

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 overflow-hidden">
        <GlobalGridBackground />
        <TradeRouteLines />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/70" />
        <Container>
          <div className="relative z-10">
            <ScrollReveal>
              <nav className="flex items-center gap-2 text-xs font-inter text-soft-white/40 mb-8">
                <Link href="/" className="hover:text-soft-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/industries" className="hover:text-soft-white transition-colors">Industries</Link>
                <span>/</span>
                <span className="text-soft-white/70">{industry.title}</span>
              </nav>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <ScrollReveal>
                <div>
                  <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">{industry.eyebrow}</span>
                  <h1 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl text-soft-white leading-tight mb-6">{industry.title}</h1>
                  <p className="font-inter text-soft-white/60 text-lg leading-relaxed mb-8">{industry.fullDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {industry.tradeTypes.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-full text-xs font-inter font-medium bg-teal/10 border border-teal/20 text-teal">{t}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact#inquiry-form" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold text-sm hover:shadow-glow-teal hover:scale-105 transition-all duration-300">
                      <MessageSquare className="w-4 h-4" /> Send Inquiry
                    </Link>
                    <Link href="/industries" className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-soft-white/15 text-soft-white/70 font-inter text-sm hover:border-teal/40 hover:text-soft-white transition-all">
                      <ArrowLeft className="w-4 h-4" /> All Industries
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right */}
              <ScrollReveal direction="right">
                <div className="space-y-4">
                  <div className="glass border border-teal/15 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-teal" />
                      <p className="font-inter text-xs text-soft-white/40 uppercase tracking-widest">Who We Serve</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {industry.whoWeServe.map((w) => (
                        <span key={w} className="text-xs font-inter text-soft-white/60 bg-white/5 px-2.5 py-1 rounded-full border border-white/8">{w}</span>
                      ))}
                    </div>
                  </div>

                  {relatedProducts.length > 0 && (
                    <div className="glass border border-copper/15 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Package className="w-4 h-4 text-copper" />
                        <p className="font-inter text-xs text-soft-white/40 uppercase tracking-widest">Related Product Categories</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {relatedProducts.map((p) => (
                          <Link key={p.slug} href={`/products/${p.slug}`}
                            className="text-xs font-inter text-copper/80 hover:text-copper bg-copper/5 px-2.5 py-1 rounded-full border border-copper/15 transition-colors">
                            {p.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="glass border border-white/5 rounded-2xl p-6">
                    <p className="font-inter text-xs text-soft-white/40 uppercase tracking-widest mb-3">Trade Types Supported</p>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.tradeTypes.map((t) => (
                        <div key={t} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                          <span className="font-inter text-soft-white/60 text-xs">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Support */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-soft-white mb-4">What We <span className="gradient-text">Support</span></h2>
              <p className="font-inter text-soft-white/55 text-base leading-relaxed">Here is how YUVAAN INTERNATIONAL supports businesses in the {industry.title} sector.</p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <ul className="space-y-4">
                {industry.whatWeSupport.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal/15 border border-teal/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-teal" />
                    </div>
                    <p className="font-inter text-soft-white/70 text-sm leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-navy">
          <Container>
            <ScrollReveal>
              <h2 className="font-sora font-bold text-2xl text-soft-white mb-8">Relevant <span className="gradient-text">Product Categories</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
              {relatedProducts.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.08} className="h-full">
                  <Link href={`/products/${p.slug}`} className="group h-full flex flex-col glass border border-teal/10 hover:border-teal/30 rounded-2xl p-6 transition-all card-hover">
                    <span className="text-xs font-inter text-copper/70 uppercase tracking-widest mb-2">{p.category}</span>
                    <h3 className="font-sora font-semibold text-soft-white text-lg mb-2 group-hover:text-aqua transition-colors flex-shrink-0">{p.title}</h3>
                    <p className="font-inter text-soft-white/45 text-sm leading-relaxed flex-grow mb-4">{p.shortDescription}</p>
                    <span className="inline-flex items-center gap-1.5 text-teal text-xs font-inter font-semibold mt-auto">
                      View Category <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      {industry.faqs.length > 0 && (
        <section className="py-16" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
          <Container size="md">
            <ScrollReveal>
              <h2 className="font-sora font-bold text-3xl text-soft-white text-center mb-12">Frequently Asked <span className="gradient-text">Questions</span></h2>
            </ScrollReveal>
            <div className="space-y-4">
              {industry.faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <details className="group glass border border-teal/10 hover:border-teal/25 rounded-2xl overflow-hidden transition-all">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="font-sora font-semibold text-soft-white text-base pr-4">{faq.q}</span>
                      <ChevronDown className="w-4 h-4 text-teal flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="font-inter text-soft-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">{faq.a}</p>
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Explore More */}
      <section className="py-16 bg-navy">
        <Container>
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl text-soft-white mb-8">Explore More <span className="gradient-text">Industries</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {moreIndustries.map((ind, i) => (
              <ScrollReveal key={ind.slug} delay={i * 0.08} className="h-full">
                <Link href={`/industries/${ind.slug}`} className="group h-full flex flex-col glass border border-white/5 hover:border-teal/25 rounded-2xl p-6 transition-all card-hover">
                  <span className="text-xs font-inter text-copper/70 uppercase tracking-widest mb-2">{ind.eyebrow}</span>
                  <h3 className="font-sora font-semibold text-soft-white text-lg mb-2 group-hover:text-aqua transition-colors flex-shrink-0">{ind.title}</h3>
                  <p className="font-inter text-soft-white/45 text-sm leading-relaxed flex-grow mb-4">{ind.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-teal text-xs font-inter font-semibold mt-auto">
                    Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 50%, #083048 100%)' }}>
        <TradeRouteLines />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(42,140,140,0.08) 0%, transparent 70%)' }} />
        <Container size="sm">
          <div className="relative z-10 text-center">
            <ScrollReveal>
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-soft-white mb-4">
                Operating in the <span className="gradient-text">{industry.title}</span> sector?
              </h2>
              <p className="font-inter text-soft-white/55 text-base mb-8 leading-relaxed">Submit an inquiry and our team will identify relevant trade connections, sourcing opportunities, and partnerships.</p>
              <Link href="/contact#inquiry-form" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold hover:shadow-glow-teal hover:scale-105 transition-all duration-300">
                Send Industry Inquiry <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </section>

    </div>
  );
}
