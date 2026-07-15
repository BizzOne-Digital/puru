import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import { partnershipTypes } from '@/lib/data/partnerships';
import { getIcon } from '@/lib/data/icons';
import { distributorBenefits, safeSolutionRoutes } from '@/lib/data/safe-solution';

export const metadata: Metadata = {
  title: 'Partnerships | Yuvaan International',
  description:
    'Explore distributor, manufacturer, country representative, importer/exporter, joint venture, institutional, investment, and technology-transfer partnerships with Yuvaan International.',
  alternates: { canonical: '/partnerships' },
  openGraph: {
    title: 'Partnerships | Yuvaan International',
    description:
      'Distributors Wanted Worldwide and other strategic partnership opportunities through Yuvaan International.',
  },
};

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-navy">
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <GlobalGridBackground />
        <TradeRouteLines />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/65" />
        <Container size="md">
          <ScrollReveal>
            <div className="relative z-10 text-center">
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">Partnerships</span>
              <h1 className="font-sora font-bold text-4xl md:text-6xl text-soft-white leading-tight mb-5">
                Strategic Partnerships for <span className="gradient-text">Global Trade Growth</span>
              </h1>
              <p className="font-inter text-soft-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
                Yuvaan International works with manufacturers, distributors, country representatives, importers, exporters, institutions, and project partners seeking reliable international trade pathways.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16 bg-navy">
        <Container>
          <div className="rounded-3xl border border-copper/25 bg-gradient-to-br from-copper/14 via-teal/8 to-white/[0.03] p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-[1fr_0.85fr] gap-8 items-center">
              <ScrollReveal>
                <span className="inline-flex px-3 py-1 rounded-full bg-copper/15 border border-copper/30 text-copper text-xs font-inter font-bold uppercase tracking-[0.25em] mb-5">
                  Featured Opportunity
                </span>
                <h2 className="font-sora font-bold text-3xl sm:text-4xl text-soft-white mb-4">
                  Distributors Wanted Worldwide
                </h2>
                <p className="font-inter text-soft-white/65 text-base leading-relaxed mb-6">
                  We are seeking qualified commercial cleaning companies, safety-product suppliers, flooring specialists, facilities-service providers, and established B2B distributors to introduce the Safe Solution® Floor Safety System in new markets.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={safeSolutionRoutes.distributor} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-copper to-[#E88B4A] text-white font-sora font-bold text-sm">
                    Apply for Your Territory <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href={safeSolutionRoutes.detail} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-teal/35 text-aqua font-sora font-semibold text-sm">
                    Explore Safe Solution® <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="grid sm:grid-cols-2 gap-3">
                  {distributorBenefits.slice(0, 6).map((benefit) => (
                    <div key={benefit} className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                      <p className="font-inter text-soft-white/60 text-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
        <Container>
          <SectionHeading
            eyebrow="Partnership Types"
            title="Types of <span class='gradient-text'>Partnerships</span>"
            subtitle="Distributors Wanted is the priority opportunity, alongside manufacturer, representative, importer/exporter, joint venture, institutional, investment, and technology-transfer pathways."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnershipTypes.map((p) => {
              const Icon = p.slug === 'distributors-wanted-worldwide' ? ShieldCheck : getIcon(p.icon);
              return (
                <div id={p.slug} key={p.slug} className="scroll-mt-32">
                  <div className="group relative p-5 sm:p-8 rounded-2xl glass border border-teal/10 hover:border-teal/30 transition-all duration-300 overflow-hidden h-full">
                    <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-teal/20 to-aqua/10 border border-teal/20 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-teal group-hover:text-aqua transition-colors" />
                    </div>
                    <h3 className="relative z-10 font-sora font-bold text-soft-white text-lg sm:text-xl mb-3 group-hover:text-aqua transition-colors">
                      {p.title}
                    </h3>
                    <p className="relative z-10 font-inter text-soft-white/50 text-sm leading-relaxed mb-6">
                      {p.description}
                    </p>
                    <Link href={p.slug === 'distributors-wanted-worldwide' ? safeSolutionRoutes.distributor : '/contact?inquiry=partnership#inquiry-form'} className="relative z-10 inline-flex items-center gap-2 text-sm font-inter text-soft-white/40 group-hover:text-aqua transition-colors">
                      {p.slug === 'distributors-wanted-worldwide' ? 'Apply Now' : 'Submit Inquiry'}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-navy">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="How Partnership <span class='gradient-text'>Review Works</span>"
            subtitle="Each opportunity is reviewed against territory, capability, due diligence, commercial terms, and market-fit requirements."
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {['Submit your profile', 'Capability and territory review', 'Commercial discussion', 'Launch planning or next steps'].map((step, i) => (
              <div key={step} className="rounded-2xl glass border border-teal/10 p-6">
                <p className="font-sora font-bold text-4xl text-teal/20 mb-4">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-sora font-semibold text-soft-white">{step}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 50%, #083048 100%)' }}>
        <TradeRouteLines />
        <Container size="md">
          <div className="relative z-10 text-center">
            <h2 className="font-sora font-bold text-3xl md:text-5xl text-soft-white mb-4">
              Interested in <span className="gradient-text">Working Together?</span>
            </h2>
            <p className="font-inter text-soft-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Choose the distributor application for Safe Solution® or submit a general partnership inquiry for other product, manufacturing, investment, or institutional opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href={safeSolutionRoutes.distributor} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-copper to-[#E88B4A] text-white font-sora font-bold">
                Distributor Application <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact?inquiry=partnership#inquiry-form" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold">
                General Partnership Inquiry <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
