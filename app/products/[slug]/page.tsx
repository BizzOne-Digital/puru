import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, CheckCircle,
  Users, Tag, ChevronDown, MessageSquare,
} from 'lucide-react';
import Container from '../../../components/ui/Container';
import ScrollReveal from '../../../components/ui/ScrollReveal';
import GlobalGridBackground from '../../../components/ui/GlobalGridBackground';
import TradeRouteLines from '../../../components/ui/TradeRouteLines';

// ─── Inline data so there's zero import ambiguity ───────────────────
interface ProductCategory {
  slug: string;
  title: string;
  category: string;
  eyebrow: string;
  shortDescription: string;
  fullDescription: string;
  audience: string[];
  keyPoints: string[];
  tradeTypes: string[];
  relatedIndustries: string[];
  faqs: Array<{ q: string; a: string }>;
}

const productCategories: ProductCategory[] = [
  { slug: 'industrial-machinery', title: 'Industrial Machinery', category: 'Industrial Machinery', eyebrow: 'Heavy Industry', shortDescription: 'Heavy-duty industrial machinery for manufacturing, processing, and production operations.', fullDescription: 'YUVAAN INTERNATIONAL helps businesses source, connect, and coordinate the import and export of heavy-duty industrial machinery across international markets. From CNC machines and press equipment to conveyors and automated production lines, we work with buyers, suppliers, and distributors to facilitate reliable machinery trade connections.', audience: ['Manufacturers', 'Industrial Buyers', 'Equipment Distributors', 'Engineering Companies', 'Factory Operators'], keyPoints: ['Sourcing connections for heavy production equipment', 'Buyer-supplier matching across international markets', 'Support for both new and refurbished machinery trade', 'Coordination for bulk and single-unit inquiries', 'Connections across Asia, Europe, and North America'], tradeTypes: ['Import', 'Export', 'Wholesale', 'Project Supply'], relatedIndustries: ['Manufacturing', 'Construction & Infrastructure', 'Industrial Materials'], faqs: [{ q: 'Can YUVAAN help source specific machinery models?', a: 'Yes. Submit an inquiry with your exact specifications and we will work to identify suitable supplier connections.' }, { q: 'Do you handle both new and used industrial equipment?', a: 'We can coordinate sourcing inquiries for both new and refurbished industrial machinery depending on your requirements.' }] },
  { slug: 'heavy-equipment-parts', title: 'Heavy Equipment & Parts', category: 'Industrial Machinery', eyebrow: 'Equipment & Spares', shortDescription: 'Construction and industrial heavy equipment, spare parts, and accessories for operational needs.', fullDescription: 'Sourcing heavy construction equipment and genuine spare parts through international channels can be complex. YUVAAN INTERNATIONAL provides connections between buyers needing excavators, loaders, cranes, and their associated components, and the global suppliers who manufacture or distribute them.', audience: ['Construction Companies', 'Equipment Dealers', 'Mining Operations', 'Infrastructure Contractors', 'Maintenance Teams'], keyPoints: ['Connections for excavators, loaders, cranes, and more', 'Spare parts sourcing across major equipment brands', 'Bulk and unit-level procurement support', 'International supplier-buyer matching', 'Support for infrastructure and mining sectors'], tradeTypes: ['Import', 'Export', 'Wholesale Distribution'], relatedIndustries: ['Construction & Infrastructure', 'Industrial Machinery', 'Industrial Materials'], faqs: [{ q: 'Can you help source OEM spare parts for specific brands?', a: 'We can help connect you with suppliers that carry OEM and compatible parts for major equipment brands.' }] },
  { slug: 'manufacturing-supplies', title: 'Manufacturing Supplies', category: 'Manufacturing', eyebrow: 'Production & Raw Materials', shortDescription: 'Raw materials, components, and supplies for manufacturing and production facilities worldwide.', fullDescription: 'Manufacturing businesses require reliable, consistent supply chains for raw materials and production components. YUVAAN INTERNATIONAL helps manufacturers connect with international suppliers of metals, plastics, chemicals, and specialty materials — ensuring production continuity across global trade channels.', audience: ['Manufacturers', 'Production Managers', 'Procurement Teams', 'Supply Chain Managers', 'Factory Operators'], keyPoints: ['Metals, alloys, and industrial raw material sourcing', 'Plastic and polymer supply connections', 'Specialty chemical and compound procurement', 'Production component and sub-assembly sourcing', 'Bulk and continuous supply coordination'], tradeTypes: ['Import', 'Export', 'Wholesale', 'Long-Term Supply Agreements'], relatedIndustries: ['Manufacturing', 'Industrial Materials', 'Industrial Machinery'], faqs: [{ q: 'Can you support ongoing supply chain needs?', a: 'Yes. We can help establish connections for continuous supply arrangements to support ongoing production needs.' }] },
  { slug: 'wholesale-consumer-products', title: 'Wholesale Consumer Products', category: 'Wholesale Products', eyebrow: 'Wholesale & Retail', shortDescription: 'Bulk consumer goods for wholesale distribution across retail and commercial channels.', fullDescription: 'YUVAAN INTERNATIONAL connects wholesalers, distributors, and retailers with bulk consumer product sources from international markets. Whether you need electronics, household goods, apparel, or general merchandise, we help establish supply connections that support your wholesale distribution operations.', audience: ['Wholesalers', 'Distributors', 'Retailers', 'E-commerce Businesses', 'Trading Companies'], keyPoints: ['Consumer electronics and household goods sourcing', 'Apparel and textile wholesale connections', 'General merchandise and variety goods trade', 'Large-volume import coordination', 'Retail and commercial channel supply matching'], tradeTypes: ['Import', 'Wholesale Distribution', 'Retail Supply'], relatedIndustries: ['Wholesale & Distribution', 'Consumer Products', 'Import & Export Businesses'], faqs: [{ q: 'What minimum order volumes do you work with?', a: 'We work with businesses across a range of volumes. Submit your inquiry with your quantity requirements for assessment.' }] },
  { slug: 'construction-infrastructure-materials', title: 'Construction & Infrastructure Materials', category: 'Infrastructure', eyebrow: 'Construction Trade', shortDescription: 'Building materials, construction supplies, and infrastructure components for large-scale projects.', fullDescription: 'Large-scale construction and infrastructure projects require reliable sourcing of steel, cement, aggregates, piping, and specialty construction materials. YUVAAN INTERNATIONAL supports project developers, contractors, and infrastructure companies in connecting with international suppliers for their material requirements.', audience: ['Contractors', 'Infrastructure Developers', 'Project Managers', 'Civil Engineers', 'Government Projects'], keyPoints: ['Steel, rebar, and structural material sourcing', 'Cement, aggregate, and concrete supply connections', 'Piping, fittings, and utility infrastructure materials', 'Project-scale bulk procurement support', 'Coordination for long-term infrastructure supply'], tradeTypes: ['Import', 'Project Supply', 'Bulk Trade'], relatedIndustries: ['Construction & Infrastructure', 'Industrial Machinery', 'Industrial Materials'], faqs: [{ q: 'Can you handle large project supply requirements?', a: 'Yes. We support project-scale inquiries and can help connect you with suppliers capable of meeting large volume requirements.' }] },
  { slug: 'industrial-chemicals-materials', title: 'Industrial Chemicals & Materials', category: 'Industrial Supplies', eyebrow: 'Chemicals & Compounds', shortDescription: 'Industrial-grade chemicals, raw materials, and specialty compounds for manufacturing and processing.', fullDescription: 'YUVAAN INTERNATIONAL facilitates trade connections for industrial chemicals, specialty compounds, and processing materials used across manufacturing, agriculture, construction, and energy sectors.', audience: ['Chemical Manufacturers', 'Industrial Processors', 'Agricultural Businesses', 'Pharmaceutical Suppliers', 'Energy Companies'], keyPoints: ['Industrial solvents and processing chemicals', 'Agricultural chemical and fertilizer trade', 'Specialty compound sourcing', 'Bulk chemical import and export coordination', 'Compliance-aware supplier matching'], tradeTypes: ['Import', 'Export', 'Bulk Trade', 'Specialty Supply'], relatedIndustries: ['Manufacturing', 'Agriculture & Food Trade', 'Industrial Materials'], faqs: [{ q: 'Are there restrictions on chemical trade?', a: 'Yes. Chemical trade is subject to international regulations. We help connect buyers with compliant suppliers, but regulatory adherence is the responsibility of the importer/exporter.' }] },
  { slug: 'packaging-distribution-products', title: 'Packaging & Distribution Products', category: 'Industrial Supplies', eyebrow: 'Packaging & Logistics', shortDescription: 'Packaging solutions, logistics materials, and distribution supplies for supply chain operations.', fullDescription: 'Efficient supply chains depend on reliable packaging and distribution materials. YUVAAN INTERNATIONAL connects businesses with international suppliers of cartons, pallets, stretch film, labels, and specialty packaging for retail, industrial, and food-grade applications.', audience: ['Distributors', 'Logistics Companies', 'Retailers', 'Food Processors', 'E-commerce Fulfillment'], keyPoints: ['Carton, box, and container packaging sourcing', 'Flexible packaging and stretch film trade', 'Food-grade and pharmaceutical packaging', 'Custom print and branded packaging connections', 'Pallet and bulk material packaging supply'], tradeTypes: ['Import', 'Wholesale', 'Continuous Supply'], relatedIndustries: ['Wholesale & Distribution', 'Consumer Products', 'Agriculture & Food Trade'], faqs: [{ q: 'Can you source sustainable packaging materials?', a: 'Yes. We can connect you with suppliers specialising in sustainable, recycled, and eco-certified packaging materials.' }] },
  { slug: 'agricultural-food-trade-products', title: 'Agricultural & Food Trade Products', category: 'Wholesale Products', eyebrow: 'Agri-Trade', shortDescription: 'Agricultural commodities, food products, and agri-trade goods for international market distribution.', fullDescription: 'Agriculture and food trade is one of the largest sectors in international commerce. YUVAAN INTERNATIONAL supports importers, exporters, and distributors in connecting across grains, pulses, spices, processed foods, and fresh produce.', audience: ['Importers', 'Exporters', 'Food Distributors', 'Grocery Chains', 'Agri-Business Companies'], keyPoints: ['Grains, pulses, and commodity trade connections', 'Spice, herb, and specialty food sourcing', 'Processed food and packaged goods trade', 'Fresh produce import and export coordination', 'Canada-focused agri-trade channels'], tradeTypes: ['Import', 'Export', 'Wholesale Distribution'], relatedIndustries: ['Agriculture & Food Trade', 'Wholesale & Distribution', 'Packaging & Supplies'], faqs: [{ q: 'Do you support Canadian food import regulations?', a: 'We can help connect you with suppliers who meet Canadian food safety standards. Formal compliance is managed by the importing party.' }] },
  { slug: 'custom-product-sourcing', title: 'Custom Product Sourcing', category: 'Custom Sourcing', eyebrow: 'Bespoke Sourcing', shortDescription: 'Tailored product sourcing and supplier-buyer matching for specific trade requirements.', fullDescription: 'Not every trade requirement fits a standard category. YUVAAN INTERNATIONAL offers custom product sourcing support — where we work to understand your specific product, quantity, quality, and market requirements, then identify and connect you with relevant international suppliers or buyers.', audience: ['All Business Types', 'Project Partners', 'Entrepreneurs', 'Startups', 'Established Importers'], keyPoints: ['Bespoke sourcing for non-standard products', 'Requirement analysis and supplier identification', 'Cross-category trade coordination', 'One-off and ongoing sourcing support', 'Flexible for any industry or product type'], tradeTypes: ['Import', 'Export', 'Sourcing', 'Supplier Matching'], relatedIndustries: ['Custom Trade Requirements', 'Import & Export Businesses'], faqs: [{ q: 'What information do I need for a custom sourcing inquiry?', a: 'Product name or description, quantity needed, target quality level, destination market, and any certifications required.' }, { q: 'How long does custom sourcing typically take?', a: 'Timelines vary based on product complexity. Our team will provide an estimated timeline after reviewing your inquiry.' }] },
];

function getProductBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((p) => p.slug === slug);
}

export const dynamic = 'force-dynamic';

// ─── Metadata ─────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Not Found' };
  return {
    title: `${product.title} | Products | YUVAAN INTERNATIONAL`,
    description: product.shortDescription,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────
export default async function ProductDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = productCategories
    .filter((p) => p.slug !== slug && p.relatedIndustries.some((r) => product.relatedIndustries.includes(r)))
    .slice(0, 3);

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
                <Link href="/products" className="hover:text-soft-white transition-colors">Products</Link>
                <span>/</span>
                <span className="text-soft-white/70">{product.title}</span>
              </nav>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <ScrollReveal>
                <div>
                  <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">{product.eyebrow}</span>
                  <h1 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl text-soft-white leading-tight mb-6">{product.title}</h1>
                  <p className="font-inter text-soft-white/60 text-lg leading-relaxed mb-8">{product.fullDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tradeTypes.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-full text-xs font-inter font-medium bg-teal/10 border border-teal/20 text-teal">{t}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact#inquiry-form" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold text-sm hover:shadow-glow-teal hover:scale-105 transition-all duration-300">
                      <MessageSquare className="w-4 h-4" /> Submit Inquiry
                    </Link>
                    <Link href="/products" className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-soft-white/15 text-soft-white/70 font-inter text-sm hover:border-teal/40 hover:text-soft-white transition-all">
                      <ArrowLeft className="w-4 h-4" /> All Categories
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right */}
              <ScrollReveal direction="right">
                <div className="space-y-4">
                  <div className="glass border border-teal/15 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-teal" />
                      <p className="font-inter text-xs text-soft-white/40 uppercase tracking-widest">Category</p>
                    </div>
                    <p className="font-sora font-semibold text-soft-white">{product.category}</p>
                  </div>

                  <div className="glass border border-teal/15 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-teal" />
                      <p className="font-inter text-xs text-soft-white/40 uppercase tracking-widest">Who This Is For</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.audience.map((a) => (
                        <span key={a} className="text-xs font-inter text-soft-white/60 bg-white/5 px-2.5 py-1 rounded-full border border-white/8">{a}</span>
                      ))}
                    </div>
                  </div>

                  <div className="glass border border-copper/15 rounded-2xl p-6">
                    <p className="font-inter text-xs text-soft-white/40 uppercase tracking-widest mb-3">Related Industries</p>
                    <div className="flex flex-wrap gap-2">
                      {product.relatedIndustries.map((ind) => (
                        <Link key={ind} href={`/industries/${ind.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                          className="text-xs font-inter text-copper/80 hover:text-copper bg-copper/5 px-2.5 py-1 rounded-full border border-copper/15 transition-colors">
                          {ind}
                        </Link>
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
              <p className="font-inter text-soft-white/55 text-base leading-relaxed">YUVAAN INTERNATIONAL provides trade connection support across the following areas within this category.</p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <ul className="space-y-4">
                {product.keyPoints.map((point, i) => (
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

      {/* FAQ */}
      {product.faqs.length > 0 && (
        <section className="py-16 bg-navy">
          <Container size="md">
            <ScrollReveal>
              <h2 className="font-sora font-bold text-3xl text-soft-white text-center mb-12">Frequently Asked <span className="gradient-text">Questions</span></h2>
            </ScrollReveal>
            <div className="space-y-4">
              {product.faqs.map((faq, i) => (
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

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
          <Container>
            <ScrollReveal>
              <h2 className="font-sora font-bold text-2xl text-soft-white mb-8">Related <span className="gradient-text">Categories</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
              {related.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.1} className="h-full">
                  <Link href={`/products/${p.slug}`} className="group h-full flex flex-col glass border border-teal/10 hover:border-teal/30 rounded-2xl p-6 transition-all card-hover">
                    <span className="text-xs font-inter text-copper/70 uppercase tracking-widest mb-2">{p.eyebrow}</span>
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

      {/* CTA */}
      <section className="py-20 relative overflow-hidden bg-navy">
        <TradeRouteLines />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(42,140,140,0.08) 0%, transparent 70%)' }} />
        <Container size="sm">
          <div className="relative z-10 text-center">
            <ScrollReveal>
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-soft-white mb-4">
                Ready to submit a <span className="gradient-text">{product.title}</span> inquiry?
              </h2>
              <p className="font-inter text-soft-white/55 text-base mb-8 leading-relaxed">Tell us your requirement and our team will review it and identify relevant trade connections.</p>
              <Link href="/contact#inquiry-form" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold hover:shadow-glow-teal hover:scale-105 transition-all duration-300">
                Submit Inquiry <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </section>

    </div>
  );
}
