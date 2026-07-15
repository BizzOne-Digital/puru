import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import {
  DistributorCTA,
  MetricsAndBenefitsSection,
  ProductSystemSection,
} from '@/components/safe-solution/SafetyComponents';
import {
  productSystem,
  safeSolutionRoutes,
  safeSolutionSummary,
  safetyBenefits,
  targetIndustries,
} from '@/lib/data/safe-solution';

export const metadata: Metadata = {
  title: 'New Products | Yuvaan International',
  description:
    'Discover newly introduced products and commercial solutions available through Yuvaan International for international distribution, institutional supply, facilities management, and industrial markets.',
  alternates: { canonical: '/products/new-products' },
  openGraph: {
    title: 'New Products | Yuvaan International',
    description:
      'Safe Solution® Floor Safety System and other newly introduced commercial solutions available through Yuvaan International.',
  },
};

export default function NewProductsPage() {
  return (
    <div className="min-h-screen bg-navy">
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <GlobalGridBackground />
        <TradeRouteLines />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/70" />
        <Container size="md">
          <ScrollReveal>
            <div className="relative z-10 text-center">
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">New Products</span>
              <h1 className="font-sora font-bold text-4xl md:text-6xl text-soft-white leading-tight mb-5">
                New <span className="gradient-text">Products</span>
              </h1>
              <p className="font-inter text-soft-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
                Discover newly introduced products and commercial solutions available through Yuvaan International for international distribution, institutional supply, facilities management, and industrial markets.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16 bg-navy">
        <Container>
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-8 items-center rounded-3xl border border-copper/25 bg-gradient-to-br from-copper/14 via-teal/8 to-white/[0.03] p-6 sm:p-8 lg:p-10">
            <ScrollReveal>
              <span className="inline-flex px-3 py-1 rounded-full bg-copper/15 border border-copper/30 text-copper text-xs font-inter font-bold uppercase tracking-[0.25em] mb-5">
                Main Featured Product
              </span>
              <h2 className="font-sora font-bold text-3xl sm:text-5xl text-soft-white mb-5">
                {safeSolutionSummary.title}
              </h2>
              <p className="font-inter text-soft-white/65 text-base sm:text-lg leading-relaxed mb-7">
                {safeSolutionSummary.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={safeSolutionRoutes.detail} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold text-sm">
                  Explore Safe Solution® <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={safeSolutionRoutes.distributor} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-copper/35 text-copper font-sora font-semibold text-sm">
                  Apply to Become a Distributor <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-3xl bg-navy/65 border border-white/10 p-6">
                <ShieldCheck className="w-12 h-12 text-aqua mb-6" />
                <p className="font-inter text-soft-white/45 text-xs uppercase tracking-widest mb-4">Complete System Overview</p>
                <div className="space-y-3">
                  {productSystem.map((item) => (
                    <div key={item.name} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                      <p className="font-sora font-bold text-soft-white">{item.name}</p>
                      <p className="font-inter text-soft-white/50 text-sm mt-1">{item.shortLabel}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <ProductSystemSection compact />

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
        <Container>
          <SectionHeading
            eyebrow="Target Markets"
            title="Commercial and Institutional <span class='gradient-text'>Applications</span>"
            subtitle="Safe Solution® is positioned for commercial and industrial markets where floor condition, maintenance, documentation, and distributor support matter."
            className="mb-10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetIndustries.slice(0, 8).map((industry) => (
              <Link key={industry.title} href={industry.href} className="rounded-2xl glass border border-teal/10 hover:border-teal/30 p-5 transition-all">
                <p className="font-sora font-semibold text-soft-white">{industry.title}</p>
                <span className="inline-flex items-center gap-1 text-teal text-xs font-inter font-semibold mt-4">
                  View fit <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-navy">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyBenefits.map((benefit) => (
              <div key={benefit} className="glass border border-teal/10 rounded-2xl p-5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                <p className="font-inter text-soft-white/65 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <MetricsAndBenefitsSection />
      <DistributorCTA />
    </div>
  );
}
