'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import ProductInquiryModal from '@/components/products/ProductInquiryModal';
import ProductCategoryCard from '@/components/products/ProductCategoryCard';
import { productCategories } from '@/lib/data/products';
import { getIcon } from '@/lib/data/icons';
import { productSystem, safeSolutionRoutes, safeSolutionSummary } from '@/lib/data/safe-solution';

const filters = ['All', 'Energy Solutions', 'Trade & Sourcing', 'Business Development', 'Infrastructure', 'Industrial Machinery', 'Wholesale Products', 'Agriculture', 'Custom Sourcing'];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = useMemo(
    () =>
      productCategories.map(p => ({
        slug: p.slug,
        title: p.title,
        tag: p.tag,
        category: p.category,
        shortDescription: p.shortDescription,
        audience: p.audience.join(', '),
        icon: getIcon(p.icon),
      })),
    []
  );

  const filtered = categories.filter(c => {
    const matchesFilter = activeFilter === 'All' || c.category === activeFilter;
    const matchesSearch = !searchQuery || c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openModal = (title: string) => {
    setModalProduct(title);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <GlobalGridBackground />
        <TradeRouteLines />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/60" />
        <Container size="md">
          <div className="relative z-10 text-center">
            <ScrollReveal>
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">Solutions & Trade Categories</span>
              <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-white leading-tight mb-5 sm:mb-6">
                Products, Machinery &amp;{' '}
                <span className="gradient-text">Trade Solutions</span>
              </h1>
              <p className="font-inter text-soft-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-2">
                Explore YUVAAN INTERNATIONAL&apos;s energy solutions, trade categories, and sourcing capabilities across configured target markets.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* New Products Spotlight */}
      <section className="py-12 sm:py-16 bg-navy">
        <Container>
          <ScrollReveal>
            <div className="rounded-3xl border border-copper/25 bg-gradient-to-br from-copper/14 via-teal/8 to-white/[0.03] p-6 sm:p-8 lg:p-10">
              <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-center">
                <div>
                  <span className="inline-flex px-3 py-1 rounded-full bg-copper/15 border border-copper/30 text-copper text-xs font-inter font-bold uppercase tracking-[0.25em] mb-5">
                    New Product
                  </span>
                  <h2 className="font-sora font-bold text-3xl sm:text-4xl text-soft-white mb-4">
                    {safeSolutionSummary.title}
                  </h2>
                  <p className="font-inter text-soft-white/65 text-base leading-relaxed mb-6">
                    {safeSolutionSummary.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {productSystem.map((item) => (
                      <span key={item.name} className="px-3 py-1.5 rounded-full bg-white/6 border border-white/10 text-soft-white/70 text-xs font-inter">
                        {item.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={safeSolutionRoutes.detail} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold text-sm hover:shadow-glow-teal transition-all">
                      View Complete System <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href={safeSolutionRoutes.distributor} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-copper/35 text-copper font-sora font-semibold text-sm hover:bg-copper/10 transition-all">
                      Become a Distributor <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-navy/60 p-6 min-h-[260px] flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <ShieldCheck className="w-12 h-12 text-aqua" />
                    <span className="font-inter text-soft-white/35 text-xs uppercase tracking-widest">Commercial floor-safety system</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-10">
                    {productSystem.map((item) => (
                      <div key={item.name} className="rounded-2xl bg-white/5 border border-white/10 p-3">
                        <p className="font-sora font-bold text-soft-white text-sm">{item.name}</p>
                        <p className="font-inter text-soft-white/45 text-xs mt-2 leading-relaxed">{item.shortLabel}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Filter + Search */}
      <section className="py-6 sm:py-8 sticky top-[72px] sm:top-[88px] z-20 bg-navy/80 backdrop-blur-xl border-b border-white/5">
        <Container>
          <h2 className="font-sora font-bold text-soft-white text-2xl text-center mb-4">
            Other Products and Global Trade Solutions
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-soft-white/30" />
              <input
                type="text"
                placeholder="Search solutions and categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-soft-white text-sm font-inter placeholder:text-soft-white/30 focus:outline-none focus:border-teal/40"
              />
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs font-inter font-medium transition-all duration-200 whitespace-nowrap ${
                    activeFilter === f
                      ? 'bg-teal text-navy'
                      : 'bg-white/5 text-soft-white/60 hover:bg-white/10 hover:text-soft-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <Container>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {filtered.map((cat, i) => (
                <ScrollReveal key={i} delay={i * 0.07} className="h-full">
                  <ProductCategoryCard
                    {...cat}
                    onInquire={() => openModal(cat.title)}
                  />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-inter text-soft-white/40 text-lg">No results found. Try a different search or filter.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 relative" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
        <TradeRouteLines />
        <Container size="md">
          <div className="relative z-10 text-center">
            <ScrollReveal>
              <h2 className="font-sora font-bold text-2xl sm:text-4xl text-soft-white mb-4">
                Don&apos;t See What You Need?
              </h2>
              <p className="font-inter text-soft-white/60 text-lg mb-8 max-w-xl mx-auto">
                Submit a custom sourcing or project development inquiry. Our team will review your requirements and identify relevant trade pathways across target markets.
              </p>
              <button
                onClick={() => openModal('Custom Product Sourcing')}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold hover:shadow-glow-teal hover:scale-105 transition-all duration-300"
              >
                Submit Custom Inquiry
                <ArrowRight className="w-4 h-4" />
              </button>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <ProductInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productTitle={modalProduct || ''}
      />
    </div>
  );
}
