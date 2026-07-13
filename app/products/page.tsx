'use client';
import { useState, useMemo } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import ProductInquiryModal from '@/components/products/ProductInquiryModal';
import ProductCategoryCard from '@/components/products/ProductCategoryCard';
import { productCategories } from '@/lib/data/products';
import { getIcon } from '@/lib/data/icons';

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
                Explore YUVAAN INTERNATIONAL&apos;s energy solutions, trade categories, and sourcing capabilities across 11+ global markets.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Filter + Search */}
      <section className="py-6 sm:py-8 sticky top-[72px] sm:top-[88px] z-20 bg-navy/80 backdrop-blur-xl border-b border-white/5">
        <Container>
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
                Submit a custom sourcing or project development inquiry. Our team will review your requirements and identify relevant trade pathways across our 11+ market network.
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
