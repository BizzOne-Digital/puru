import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import { safeSolutionRoutes } from '@/lib/data/safe-solution';

export const metadata: Metadata = {
  title: 'Global Markets | Yuvaan International',
  description:
    'Review Yuvaan International market focus, target regions, distributor territories, and regional partnership opportunities.',
  alternates: { canonical: '/global-markets' },
};

const existingMarkets = ['Canada'];
const targetMarkets = ['United States', 'Europe', 'Middle East', 'India', 'China', 'Japan', 'Southeast Asia', 'Australia', 'Nepal'];
const openTerritories = ['North America', 'Europe', 'Middle East', 'South Asia', 'Southeast Asia', 'Australia and New Zealand'];

export default function GlobalMarketsPage() {
  return (
    <div className="min-h-screen bg-navy">
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <GlobalGridBackground />
        <TradeRouteLines />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/70" />
        <Container size="md">
          <ScrollReveal>
            <div className="relative z-10 text-center">
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">Global Markets</span>
              <h1 className="font-sora font-bold text-4xl md:text-6xl text-soft-white leading-tight mb-5">
                Market Focus and <span className="gradient-text">Territory Opportunities</span>
              </h1>
              <p className="font-inter text-soft-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
                Yuvaan International is based in Canada and evaluates international trade, product distribution, sourcing, project collaboration, and distributor opportunities across target markets.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16 bg-navy">
        <Container>
          <div className="grid lg:grid-cols-3 gap-5">
            {[
              ['Existing markets', existingMarkets, 'Confirmed company base and current operational market reference.'],
              ['Target markets', targetMarkets, 'Markets relevant to product sourcing, trade development, and partnership evaluation.'],
              ['Distributor territories open for application', openTerritories, 'Territories where Safe Solution® distributor applications may be reviewed.'],
            ].map(([title, list, desc]) => (
              <div key={String(title)} className="rounded-3xl glass border border-teal/10 p-6">
                <Globe2 className="w-8 h-8 text-teal mb-5" />
                <h2 className="font-sora font-bold text-soft-white text-xl mb-3">{title}</h2>
                <p className="font-inter text-soft-white/50 text-sm leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {(list as string[]).map((market) => (
                    <span key={market} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-soft-white/60 text-xs font-inter">
                      {market}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
        <Container>
          <SectionHeading
            eyebrow="Regional Opportunities"
            title="Product Categories Available <span class='gradient-text'>by Review</span>"
            subtitle="Availability varies by jurisdiction, compliance requirements, supplier confirmation, documentation, and partner capability."
            className="mb-10"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Safe Solution® Floor Safety System', 'Energy Solutions', 'Industrial Machinery', 'Wholesale Products', 'Agricultural & Food Trade', 'Custom Product Sourcing', 'Manufacturing Partnerships', 'Project Collaboration'].map((item) => (
              <div key={item} className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
                <p className="font-sora font-semibold text-soft-white">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link href={safeSolutionRoutes.distributor} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-copper to-[#E88B4A] text-white font-sora font-bold">
              Apply for Distributor Territory <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact?inquiry=regional#inquiry-form" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold">
              Regional Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
