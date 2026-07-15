import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ClipboardList } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';

export const metadata: Metadata = {
  title: 'Investments and Project Collaboration | Yuvaan International',
  description:
    'Explore project collaboration, strategic opportunities, sectors of interest, due diligence, and information required from applicants.',
  alternates: { canonical: '/investments' },
};

const sectors = ['Renewable energy', 'Battery energy storage', 'EV charging infrastructure', 'Industrial machinery', 'Commercial products', 'Infrastructure projects', 'Real estate-linked opportunities', 'Technology transfer'];
const opportunityTypes = ['Strategic distribution', 'Project collaboration', 'Joint venture review', 'Supplier or manufacturer partnership', 'Institutional procurement support', 'Technology commercialization'];
const requiredInfo = ['Company profile', 'Project summary', 'Country and location', 'Commercial model', 'Required support', 'Available documentation', 'Regulatory status', 'Timeline and decision makers'];

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-navy">
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <GlobalGridBackground />
        <TradeRouteLines />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/70" />
        <Container size="md">
          <ScrollReveal>
            <div className="relative z-10 text-center">
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">Investments and Project Collaboration</span>
              <h1 className="font-sora font-bold text-4xl md:text-6xl text-soft-white leading-tight mb-5">
                Strategic Opportunities <span className="gradient-text">Under Review</span>
              </h1>
              <p className="font-inter text-soft-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
                Yuvaan International reviews investment, distribution, project, and strategic collaboration opportunities where there is a clear commercial fit, verifiable documentation, and appropriate due diligence.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16 bg-navy">
        <Container>
          <div className="grid lg:grid-cols-3 gap-5">
            <InfoPanel title="Sectors of Interest" items={sectors} />
            <InfoPanel title="Types of Opportunities Considered" items={opportunityTypes} />
            <InfoPanel title="Information Required From Applicants" items={requiredInfo} />
          </div>
        </Container>
      </section>

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
        <Container>
          <SectionHeading
            eyebrow="Due Diligence"
            title="No Promises Without <span class='gradient-text'>Review and Documentation</span>"
            subtitle="Yuvaan International does not promise returns, approvals, financing, funding, exclusivity, or project acceptance. Each opportunity is evaluated case by case."
            className="mb-10"
          />
          <div className="grid md:grid-cols-4 gap-4">
            {['Initial inquiry', 'Documentation review', 'Commercial and territory fit', 'Partner discussion'].map((step, index) => (
              <div key={step} className="rounded-2xl glass border border-teal/10 p-6">
                <p className="font-sora font-bold text-4xl text-teal/20 mb-4">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="font-sora font-semibold text-soft-white">{step}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact?inquiry=investment#inquiry-form" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold">
              Submit Investment or Project Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl glass border border-teal/10 p-6 h-full">
      <ClipboardList className="w-8 h-8 text-teal mb-5" />
      <h2 className="font-sora font-bold text-soft-white text-xl mb-5">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
            <span className="font-inter text-soft-white/60 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
