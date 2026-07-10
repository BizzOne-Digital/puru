import type { Metadata } from 'next';
import { Target, Eye, Globe, Search, Factory, Truck, Settings, Handshake, Shield, Star, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';

export const metadata: Metadata = {
  title: 'About YUVAAN INTERNATIONAL | International Trade Company',
  description: 'Learn about YUVAAN INTERNATIONAL — a professional international trade platform connecting businesses with product, supply, machinery, and partnership opportunities.',
};

const whatWeDo = [
  { icon: Globe, title: 'Global Trade Support', desc: 'Supporting businesses in navigating international trade channels and market connections.' },
  { icon: Search, title: 'Product Sourcing', desc: 'Identifying and coordinating product sourcing across global supply chains.' },
  { icon: Users, title: 'Supplier & Buyer Connections', desc: 'Facilitating meaningful connections between suppliers, buyers, and trade partners.' },
  { icon: Settings, title: 'Industrial Product Inquiries', desc: 'Specialized support for industrial machinery and equipment inquiries.' },
  { icon: Truck, title: 'Wholesale Distribution Support', desc: 'Helping businesses develop and expand wholesale distribution channels.' },
  { icon: Handshake, title: 'Business Partnership Development', desc: 'Building sustainable long-term business partnerships across global markets.' },
];

const values = [
  { icon: Shield, title: 'Trust', desc: 'Building reliable relationships through consistent, transparent operations.' },
  { icon: Eye, title: 'Transparency', desc: 'Open communication at every stage of the trade process.' },
  { icon: Star, title: 'Professionalism', desc: 'Conducting business with the highest standards of professional integrity.' },
  { icon: Globe, title: 'Global Reach', desc: 'Connecting businesses across international markets and trade corridors.' },
  { icon: Handshake, title: 'Long-Term Partnerships', desc: 'Prioritizing sustainable, long-term business relationships over short-term gain.' },
  { icon: TrendingUp, title: 'Strategic Growth', desc: 'Supporting business growth through strategic trade opportunities and market access.' },
];

export default function AboutPage() {
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
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">About Us</span>
              <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-white leading-tight mb-5 sm:mb-6">
                About <span className="gradient-text">YUVAAN INTERNATIONAL</span>
              </h1>
              <p className="font-inter text-soft-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-2">
                A professional international trade platform connecting businesses with product, supply, machinery, and partnership opportunities.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">Company Overview</span>
                <h2 className="font-sora font-bold text-2xl sm:text-4xl text-soft-white leading-tight mb-6">
                  A Canadian Gateway for <span className="gradient-text">Global Trade</span>
                </h2>
                <p className="font-inter text-soft-white/60 text-lg leading-relaxed mb-6">
                  YUVAAN INTERNATIONAL supports importers, exporters, manufacturers, wholesalers, distributors, and industrial buyers by helping create reliable trade connections and business opportunities across markets.
                </p>
                <p className="font-inter text-soft-white/50 text-base leading-relaxed mb-8">
                  Operating from Canada, we serve businesses seeking to expand their international trade reach — whether it&apos;s sourcing products, finding buyers, building supply partnerships, or exploring distribution channels across borders.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {['Import & Export', 'Product Sourcing', 'Industrial Machinery', 'Wholesale Trade', 'Manufacturer Links', 'Partnerships'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-soft-white/60 text-sm font-inter">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 gap-5">
                {/* Mission */}
                <div className="glass border border-teal/20 rounded-2xl p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                      <Target className="w-5 h-5 text-teal" />
                    </div>
                    <h3 className="font-sora font-semibold text-soft-white text-lg">Mission</h3>
                  </div>
                  <p className="font-inter text-soft-white/60 text-sm leading-relaxed">
                    To create trusted international trade pathways for businesses seeking product sourcing, supply connections, distribution, and partnership opportunities.
                  </p>
                </div>

                {/* Vision */}
                <div className="glass border border-copper/20 rounded-2xl p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-copper/10 border border-copper/20 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-copper" />
                    </div>
                    <h3 className="font-sora font-semibold text-soft-white text-lg">Vision</h3>
                  </div>
                  <p className="font-inter text-soft-white/60 text-sm leading-relaxed">
                    To become a reliable global trade gateway for businesses looking to connect, source, distribute, and grow across international markets.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="What <span class='gradient-text'>We Do</span>"
            subtitle="A comprehensive approach to international trade support — from sourcing to partnerships."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {whatWeDo.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                <div className="group h-full flex flex-col glass border border-teal/10 hover:border-teal/30 rounded-2xl p-7 card-hover transition-all">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors">
                    <item.icon className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="font-sora font-semibold text-soft-white text-lg mb-3 flex-shrink-0">{item.title}</h3>
                  <p className="font-inter text-soft-white/50 text-sm leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="What <span class='gradient-text'>Drives Us</span>"
            subtitle="The principles that guide our approach to international trade and business relationships."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group text-center glass border border-white/5 hover:border-teal/20 rounded-2xl p-7 card-hover transition-all">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-teal/10 border border-teal/15 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                    <v.icon className="w-6 h-6 text-teal group-hover:text-aqua transition-colors" />
                  </div>
                  <h3 className="font-sora font-semibold text-soft-white text-base mb-2">{v.title}</h3>
                  <p className="font-inter text-soft-white/40 text-xs leading-relaxed">{v.desc}</p>
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
              <h2 className="font-sora font-bold text-2xl sm:text-4xl text-soft-white mb-4">
                Ready to <span className="gradient-text">Start a Conversation?</span>
              </h2>
              <p className="font-inter text-soft-white/60 text-lg mb-8">
                Submit your business inquiry and our team will review your requirements.
              </p>
              <Link
                href="/contact#inquiry-form"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold hover:shadow-glow-teal hover:scale-105 transition-all duration-300"
              >
                Submit Your Business Inquiry
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
