'use client';
import { Download, Upload, Factory, Boxes, Truck, Package, Settings, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PartnershipCard from '@/components/partnership/PartnershipCard';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';

const partnershipTypes = [
  { icon: Download, title: 'Importer Partnerships', desc: 'Connect with reliable product sources and suppliers to support your import operations across multiple categories.' },
  { icon: Upload, title: 'Exporter Partnerships', desc: 'Expand your export reach with international buyer connections and established distribution channels.' },
  { icon: Factory, title: 'Manufacturer Partnerships', desc: 'Build sourcing and distribution relationships with manufacturers looking to reach new markets.' },
  { icon: Boxes, title: 'Supplier Partnerships', desc: 'Register as a supplier and connect with buyers actively seeking your product categories.' },
  { icon: Truck, title: 'Distributor Partnerships', desc: 'Explore distribution agreements and wholesale channel development for your territory.' },
  { icon: Package, title: 'Wholesale Partnerships', desc: 'Access bulk trade opportunities and wholesale buyer networks across international markets.' },
  { icon: Settings, title: 'Industrial Machinery Partnerships', desc: 'Source, supply, or distribute industrial machinery and heavy equipment through trade channels.' },
  { icon: Building2, title: 'Project & Infrastructure Partnerships', desc: 'Collaborate on large-scale project sourcing, supply, and trade requirements for infrastructure development.' },
];

const howItWorks = [
  { step: '01', title: 'Submit Your Business Requirement', desc: 'Tell us about your business, what you are looking for, and what you have to offer.' },
  { step: '02', title: 'Our Team Reviews the Opportunity', desc: 'We review your inquiry and assess the potential for meaningful trade connections.' },
  { step: '03', title: 'We Identify Relevant Trade Pathways', desc: 'Our team identifies relevant connections, sourcing options, or partnership opportunities.' },
  { step: '04', title: 'Follow-Up & Coordination', desc: 'We follow up to discuss next steps, trade terms, and coordinating the opportunity.' },
];

const whoCanPartner = ['Importers', 'Exporters', 'Manufacturers', 'Suppliers', 'Wholesalers', 'Distributors', 'Industrial Buyers', 'Project Partners'];

export default function PartnershipPage() {
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
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">Partnership</span>
              <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-white leading-tight mb-5 sm:mb-6">
                Strategic Partnerships for <span className="gradient-text">Global Trade Growth</span>
              </h1>
              <p className="font-inter text-soft-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-2">
                YUVAAN INTERNATIONAL works with businesses seeking reliable trade, sourcing, distribution, and partnership opportunities across international markets.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Partnership Types"
            title="Types of <span class='gradient-text'>Partnerships</span>"
            subtitle="We connect businesses across every stage of the international trade lifecycle."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnershipTypes.map((p, i) => (
              <PartnershipCard key={i} {...p} delay={i * 0.06} />
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 relative" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
        <GlobalGridBackground />
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="How Partnership <span class='gradient-text'>Works</span>"
            subtitle="A straightforward process to connect you with the right trade opportunities."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative p-8 glass border border-teal/10 hover:border-teal/30 rounded-2xl card-hover transition-all">
                  <div className="font-sora font-bold text-5xl text-teal/15 mb-6 group-hover:text-teal/25 transition-colors">
                    {step.step}
                  </div>
                  <h3 className="font-sora font-semibold text-soft-white text-lg mb-3">{step.title}</h3>
                  <p className="font-inter text-soft-white/50 text-sm leading-relaxed">{step.desc}</p>
                  {i < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-teal/30" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Who Can Partner */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Eligibility"
            title="Who Can <span class='gradient-text'>Partner With Us</span>"
            subtitle="YUVAAN INTERNATIONAL welcomes businesses from across the international trade spectrum."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {whoCanPartner.map((type, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="flex items-center gap-3 p-4 sm:p-5 glass border border-teal/10 hover:border-teal/25 rounded-xl transition-all group">
                  <CheckCircle className="w-5 h-5 text-teal group-hover:text-aqua transition-colors flex-shrink-0" />
                  <span className="font-inter text-soft-white/70 text-sm font-medium group-hover:text-soft-white transition-colors">{type}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 50%, #083048 100%)' }}>
        <TradeRouteLines />
        <Container size="md">
          <div className="relative z-10 text-center">
            <ScrollReveal>
              <h2 className="font-sora font-bold text-2xl sm:text-4xl md:text-5xl text-soft-white mb-4">
                Interested in <span className="gradient-text">Working Together?</span>
              </h2>
              <p className="font-inter text-soft-white/60 text-lg mb-8 max-w-xl mx-auto">
                Submit a partnership inquiry and our team will review your business profile and identify relevant opportunities.
              </p>
              <Link
                href="/contact#inquiry-form"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold hover:shadow-glow-teal hover:scale-105 transition-all duration-300"
              >
                Submit Partnership Inquiry
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
