import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, Users, Tag, ChevronDown, MessageSquare } from 'lucide-react';
import { productCategories, getProductBySlug } from '@/lib/data/products';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import { getIcon } from '@/lib/data/icons';

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return productCategories.map((p) => ({ slug: p.slug }));
}

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

export default async function ProductDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const Icon = getIcon(product.icon);

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
                  {product.tag && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-inter font-bold bg-copper/15 border border-copper/30 text-copper mb-4">
                      {product.tag}
                    </span>
                  )}
                  <span className="block font-inter text-xs tracking-[0.3em] uppercase text-soft-white/40 font-medium mb-3">{product.eyebrow}</span>
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
                  {/* Icon + Category */}
                  <div className="glass border border-teal/15 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-teal" />
                      </div>
                      <div>
                        <p className="font-inter text-xs text-soft-white/40 uppercase tracking-widest mb-0.5">Category</p>
                        <p className="font-sora font-semibold text-soft-white">{product.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* Audience */}
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

                  {/* Related Industries */}
                  <div className="glass border border-copper/15 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-copper" />
                      <p className="font-inter text-xs text-soft-white/40 uppercase tracking-widest">Related Industries</p>
                    </div>
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

      {/* Key Points */}
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
              {related.map((p, i) => {
                const RelIcon = getIcon(p.icon);
                return (
                  <ScrollReveal key={p.slug} delay={i * 0.1} className="h-full">
                    <Link href={`/products/${p.slug}`} className="group h-full flex flex-col glass border border-teal/10 hover:border-teal/30 rounded-2xl p-6 transition-all card-hover">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                          <RelIcon className="w-4 h-4 text-teal" />
                        </div>
                        <span className="text-xs font-inter text-copper/70 uppercase tracking-widest">{p.eyebrow}</span>
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
