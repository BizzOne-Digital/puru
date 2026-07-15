import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, Users, ChevronDown, MessageSquare, Package } from 'lucide-react';
import { industries, getIndustryBySlug } from '@/lib/data/industries';
import { productCategories } from '@/lib/data/products';
import { getIcon } from '@/lib/data/icons';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import { safeSolutionRoutes } from '@/lib/data/safe-solution';
import { relatedIndustryMap } from '@/lib/data/related-industries';

export const dynamic = 'force-dynamic';

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

export default async function IndustryDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const Icon = getIcon(industry.icon);

  const relatedProducts = productCategories.filter((p) =>
    industry.relatedProducts.includes(p.title)
  );
  const relatedProductIcons = relatedProducts.map((p) => getIcon(p.icon));

  const mappedIndustrySlugs = relatedIndustryMap[slug] ?? [];
  const moreIndustries = mappedIndustrySlugs.length > 0
    ? (mappedIndustrySlugs.map((industrySlug) => industries.find((i) => i.slug === industrySlug)).filter(Boolean) as typeof industries)
    : industries.filter((i) => i.slug !== slug).slice(0, 3);
  const floorSafetyRelevant = [
    'healthcare',
    'education',
    'manufacturing',
    'commercial',
    'government',
    'transportation',
    'real-estate',
    'infrastructure',
    'hospitality-food-service',
    'warehousing-logistics',
    'facilities-management',
  ].includes(slug);

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
                  {/* Icon + title card */}
                  <div className="glass border border-teal/15 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-teal" />
                      </div>
                      <div>
                        <p className="font-inter text-xs text-soft-white/40 uppercase tracking-widest mb-0.5">Sector</p>
                        <p className="font-sora font-semibold text-soft-white">{industry.eyebrow}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Users className="w-4 h-4 text-teal" />
                      <p className="font-inter text-xs text-soft-white/40 uppercase tracking-widest">Who We Serve</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {industry.whoWeServe.map((w) => (
                        <span key={w} className="text-xs font-inter text-soft-white/60 bg-white/5 px-2.5 py-1 rounded-full border border-white/8">{w}</span>
                      ))}
                    </div>
                  </div>

                  {/* Related Products */}
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

                  {/* Trade types */}
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

      {floorSafetyRelevant && (
        <section className="py-16 bg-navy">
          <Container>
            <div className="rounded-3xl border border-copper/25 bg-gradient-to-br from-copper/12 via-teal/8 to-white/[0.03] p-6 sm:p-8">
              <div className="grid lg:grid-cols-[1fr_0.8fr] gap-6 items-center">
                <div>
                  <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">Floor Safety Solutions</span>
                  <h2 className="font-sora font-bold text-2xl sm:text-3xl text-soft-white mb-4">
                    Safe Solution® for {industry.title} Facilities
                  </h2>
                  <p className="font-inter text-soft-white/60 leading-relaxed">
                    Facilities in this sector may benefit from a structured floor-safety program that combines suitable-surface assessment, test-area application, invisible anti-slip treatment, Clean Step™ low-residue maintenance, scheduled inspection, and CRS™ rejuvenation where required.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Link href={safeSolutionRoutes.detail} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold text-sm">
                    Explore Safe Solution® <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href={safeSolutionRoutes.floorAssessment} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-copper/35 text-copper font-sora font-semibold text-sm">
                    Request Assessment <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

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
              {relatedProducts.map((p, i) => {
                const ProdIcon = relatedProductIcons[i];
                return (
                  <ScrollReveal key={p.slug} delay={i * 0.08} className="h-full">
                    <Link href={`/products/${p.slug}`} className="group h-full flex flex-col glass border border-teal/10 hover:border-teal/30 rounded-2xl p-6 transition-all card-hover">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                          <ProdIcon className="w-4 h-4 text-teal" />
                        </div>
                        <span className="text-xs font-inter text-copper/70 uppercase tracking-widest">{p.category}</span>
                      </div>
                      <h3 className="font-sora font-semibold text-soft-white text-lg mb-2 group-hover:text-aqua transition-colors flex-shrink-0">{p.title}</h3>
                      <p className="font-inter text-soft-white/45 text-sm leading-relaxed flex-grow mb-4">{p.shortDescription}</p>
                      <span className="inline-flex items-center gap-1.5 text-teal text-xs font-inter font-semibold mt-auto">
                        View Category <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </ScrollReveal>
                );
              })}
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

      {/* Explore More Industries */}
      <section className="py-16 bg-navy">
        <Container>
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl text-soft-white mb-8">Explore More <span className="gradient-text">Industries</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {moreIndustries.map((ind, i) => {
              const IndIcon = getIcon(ind.icon);
              return (
                <ScrollReveal key={ind.slug} delay={i * 0.08} className="h-full">
                  <Link href={`/industries/${ind.slug}`} className="group h-full flex flex-col glass border border-white/5 hover:border-teal/25 rounded-2xl p-6 transition-all card-hover">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-teal/10 border border-teal/15 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                        <IndIcon className="w-4 h-4 text-teal group-hover:text-aqua transition-colors" />
                      </div>
                      <span className="text-xs font-inter text-copper/70 uppercase tracking-widest">{ind.eyebrow}</span>
                    </div>
                    <h3 className="font-sora font-semibold text-soft-white text-lg mb-2 group-hover:text-aqua transition-colors flex-shrink-0">{ind.title}</h3>
                    <p className="font-inter text-soft-white/45 text-sm leading-relaxed flex-grow mb-4">{ind.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-teal text-xs font-inter font-semibold mt-auto">
                      Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
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
