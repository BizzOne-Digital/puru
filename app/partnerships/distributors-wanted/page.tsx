import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import {
  DistributorApplicationForm,
  DistributorProcessTimeline,
} from '@/components/safe-solution/SafetyComponents';
import {
  distributorApplicantTypes,
  distributorBenefits,
  safeSolutionRoutes,
} from '@/lib/data/safe-solution';

export const metadata: Metadata = {
  title: 'Distributors Wanted Worldwide | Yuvaan International',
  description:
    'Apply to represent the Safe Solution® Floor Safety System in an available territory through Yuvaan International.',
  alternates: { canonical: '/partnerships/distributors-wanted' },
  openGraph: {
    title: 'Distributors Wanted Worldwide | Yuvaan International',
    description:
      'Qualified distributors, commercial cleaning companies, safety-product suppliers, and facilities-service providers can apply for Safe Solution® territory opportunities.',
  },
};

export default function DistributorsWantedPage() {
  return (
    <div className="min-h-screen bg-navy">
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <GlobalGridBackground />
        <TradeRouteLines />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/70" />
        <Container size="md">
          <ScrollReveal>
            <div className="relative z-10 text-center">
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">Safe Solution® Territory Opportunity</span>
              <h1 className="font-sora font-bold text-4xl md:text-6xl text-soft-white leading-tight mb-5">
                Distributors Wanted <span className="gradient-text">Worldwide</span>
              </h1>
              <p className="font-inter text-soft-white/60 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                Yuvaan International is seeking qualified distributors, commercial cleaning companies, safety-product suppliers, flooring specialists, facilities-service providers, and established B2B partners to introduce the Safe Solution® Floor Safety System in new markets.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a href="#application" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-copper to-[#E88B4A] text-white font-sora font-bold">
                  Apply for Your Territory <ArrowRight className="w-4 h-4" />
                </a>
                <Link href={safeSolutionRoutes.detail} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-teal/35 text-aqua font-sora font-semibold">
                  Explore Safe Solution® <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16 bg-navy">
        <Container>
          <SectionHeading
            eyebrow="Why Become a Distributor?"
            title="Represent a Complete <span class='gradient-text'>Floor-Safety System</span>"
            subtitle="The opportunity is subject to capability, territory, training, and commercial review. Exclusivity is not promised unless approved in a formal agreement."
            className="mb-10"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {distributorBenefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl glass border border-teal/10 p-5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <p className="font-inter text-soft-white/65 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
        <Container>
          <SectionHeading
            eyebrow="Who Should Apply?"
            title="Qualified Commercial and B2B <span class='gradient-text'>Operators</span>"
            subtitle="Applications are best suited to companies with existing customer access, service capability, technical aptitude, or regional distribution infrastructure."
            className="mb-10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {distributorApplicantTypes.map((type) => (
              <div key={type} className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
                <p className="font-sora font-semibold text-soft-white">{type}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-navy">
        <Container>
          <SectionHeading
            eyebrow="Distributor Process"
            title="From Application to <span class='gradient-text'>Market Launch Review</span>"
            subtitle="The distributor process is designed to confirm company fit, territory requirements, technical capability, and commercial readiness."
            className="mb-10"
          />
          <DistributorProcessTimeline />
        </Container>
      </section>

      <section id="distributor-application" className="scroll-mt-28 py-16" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
        <Container>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">Distributor Application Form</span>
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-soft-white mb-5">Apply for Your Territory</h2>
              <p className="font-inter text-soft-white/60 leading-relaxed mb-5">
                This form automatically identifies your submission as a Distributor Application for the Safe Solution® Floor Safety System.
              </p>
              <p className="font-inter text-soft-white/40 text-sm leading-relaxed">
                Provide a link to your company profile, or our team will request supporting documents after the initial review.
              </p>
            </div>
            <DistributorApplicationForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
