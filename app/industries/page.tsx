'use client';
import { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import IndustryCard from '@/components/industries/IndustryCard';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import ProductInquiryModal from '@/components/products/ProductInquiryModal';
import { industries } from '@/lib/data/industries';
import { getIcon } from '@/lib/data/icons';

export default function IndustriesPage() {
  const [modalIndustry, setModalIndustry] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const industryCards = useMemo(
    () =>
      industries.map(ind => ({
        slug: ind.slug,
        title: ind.title,
        description: ind.description,
        icon: getIcon(ind.icon),
      })),
    []
  );

  const openModal = (title: string) => {
    setModalIndustry(title);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
        <GlobalGridBackground />
        <TradeRouteLines />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/60" />
        <Container size="md">
          <div className="relative z-10 text-center">
            <ScrollReveal>
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">Industries</span>
              <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-white leading-tight mb-5 sm:mb-6">
                Industries <span className="gradient-text">We Serve</span>
              </h1>
              <p className="font-inter text-soft-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-2">
                Connecting businesses across key sectors through product sourcing, trade coordination, and partnership opportunities.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Industry Cards */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryCards.map((ind, i) => (
              <IndustryCard
                key={i}
                {...ind}
                delay={i * 0.06}
                onInquire={() => openModal(ind.title)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Custom requirement CTA */}
      <section className="py-20 relative" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
        <GlobalGridBackground />
        <Container size="md">
          <div className="relative z-10">
            <div className="glass border border-teal/20 rounded-3xl p-6 sm:p-8 md:p-12 text-center">
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">Not Sure?</span>
              <h2 className="font-sora font-bold text-2xl sm:text-4xl text-soft-white mb-4">
                Not sure where your requirement fits?
              </h2>
              <p className="font-inter text-soft-white/60 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Submit your inquiry and our team will review your product, machinery, supply, or partnership requirement and identify the best path forward.
              </p>
              <Link
                href="/contact#inquiry-form"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold hover:shadow-glow-teal hover:scale-105 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <ProductInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productTitle={modalIndustry ? `Industry: ${modalIndustry}` : ''}
      />
    </div>
  );
}
