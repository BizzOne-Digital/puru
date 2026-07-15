import type { Metadata } from 'next';
import { Target, Eye, Globe, Search, Handshake, Truck, Settings, Building2, Shield, Star, TrendingUp, MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import { siteContent } from '@/lib/data/site-content';
import { company, markets, targetMarketCountLabel } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'About YUVAAN INTERNATIONAL | International Trade Company',
  description: 'Yuvaan International supports cross-border product sourcing, commercial partnerships, market development, industrial solutions, and international business inquiries.',
};

const { about, globalPresence, whyYuvaan } = siteContent;

const whatWeDoIcons = [Globe, Search, Handshake, Building2, Truck, Settings];
const valueIcons = [Shield, Eye, Star, Globe, Handshake, TrendingUp];

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
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">{about.eyebrow}</span>
              <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-white leading-tight mb-5 sm:mb-6">
                About <span className="gradient-text">YUVAAN INTERNATIONAL</span>
              </h1>
              <p className="font-inter text-soft-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-2">
                {about.subheading}
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
                  A Canadian Gateway for <span className="gradient-text">Global Markets</span>
                </h2>
                <p className="font-inter text-soft-white/60 text-lg leading-relaxed mb-6">{about.overview}</p>
                <div className="flex items-center gap-3 mb-6 p-4 rounded-xl glass border border-teal/20">
                  <MapPin className="w-5 h-5 text-teal flex-shrink-0" />
                  <div>
                    <p className="font-inter text-xs text-soft-white/40 uppercase tracking-widest">Headquarters</p>
                    <p className="font-sora font-semibold text-soft-white">{company.locationDisplay}</p>
                  </div>
                  <div className="ml-6 pl-6 border-l border-teal/20">
                    <p className="font-inter text-xs text-soft-white/40 uppercase tracking-widest">Market Focus</p>
                    <p className="font-sora font-bold text-teal text-xl">{targetMarketCountLabel}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {['Global Trading', 'Technology Commercialization', 'Infrastructure Projects', 'Wholesale Distribution', 'Business Matchmaking', 'Investment Facilitation'].map((item, i) => (
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
                <div className="glass border border-teal/20 rounded-2xl p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                      <Target className="w-5 h-5 text-teal" />
                    </div>
                    <h3 className="font-sora font-semibold text-soft-white text-lg">Mission</h3>
                  </div>
                  <p className="font-inter text-soft-white/60 text-sm leading-relaxed">{about.mission}</p>
                </div>
                <div className="glass border border-copper/20 rounded-2xl p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-copper/10 border border-copper/20 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-copper" />
                    </div>
                    <h3 className="font-sora font-semibold text-soft-white text-lg">Vision</h3>
                  </div>
                  <p className="font-inter text-soft-white/60 text-sm leading-relaxed">{about.vision}</p>
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
            subtitle="A comprehensive approach to international trade, technology commercialization, and project development."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {about.whatWeDo.map((item, i) => {
              const Icon = whatWeDoIcons[i];
              return (
                <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                  <div className="group h-full flex flex-col glass border border-teal/10 hover:border-teal/30 rounded-2xl p-7 card-hover transition-all">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                    <h3 className="font-sora font-semibold text-soft-white text-lg mb-3 flex-shrink-0">{item.title}</h3>
                    <p className="font-inter text-soft-white/50 text-sm leading-relaxed flex-grow">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Market Focus */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={globalPresence.eyebrow}
            title={`International <span class='gradient-text'>Market Development</span>`}
            subtitle="Yuvaan International distinguishes its Canada base from target markets and opportunities currently under evaluation."
            className="mb-14"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {markets.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.05} className="h-full">
                <div className={`group h-full flex flex-col glass border rounded-2xl p-5 text-center card-hover transition-all ${i === 0 ? 'border-teal/30 bg-teal/5' : 'border-white/5 hover:border-teal/20'}`}>
                  <p className={`font-sora font-bold text-base mb-1 ${i === 0 ? 'text-teal' : 'text-soft-white'}`}>{m.name}</p>
                  <p className="font-inter text-soft-white/40 text-xs leading-snug">{m.note}</p>
                  {i === 0 && <span className="mt-2 text-[10px] font-inter text-copper/80 uppercase tracking-widest">HQ</span>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why YUVAAN */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
        <Container>
          <SectionHeading
            eyebrow={whyYuvaan.eyebrow}
            title={`Your Trusted Canadian Gateway to <span class='gradient-text'>Global Markets</span>`}
            subtitle={whyYuvaan.subheading}
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-stretch">
            {whyYuvaan.reasons.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.06} className="h-full">
                <div className="group h-full flex flex-col glass border border-white/5 hover:border-teal/20 rounded-2xl p-6 card-hover transition-all">
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-teal/10 border border-teal/15 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                    <CheckCircle className="w-5 h-5 text-teal group-hover:text-aqua transition-colors" />
                  </div>
                  <h3 className="font-sora font-semibold text-soft-white text-sm mb-2 flex-shrink-0">{v.title}</h3>
                  <p className="font-inter text-soft-white/40 text-xs leading-relaxed flex-grow">{v.desc}</p>
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
            subtitle="The principles that guide our approach to international trade, project development, and business relationships."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {about.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <ScrollReveal key={i} delay={i * 0.08} className="h-full">
                  <div className="group h-full flex flex-col items-center text-center glass border border-white/5 hover:border-teal/20 rounded-2xl p-7 card-hover transition-all">
                    <div className="w-12 h-12 flex-shrink-0 mx-auto mb-4 rounded-xl bg-teal/10 border border-teal/15 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                      <Icon className="w-6 h-6 text-teal group-hover:text-aqua transition-colors" />
                    </div>
                    <h3 className="font-sora font-semibold text-soft-white text-base mb-2 flex-shrink-0">{v.title}</h3>
                    <p className="font-inter text-soft-white/40 text-xs leading-relaxed flex-grow">{v.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
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
                Ready to <span className="gradient-text">Build Something Extraordinary?</span>
              </h2>
              <p className="font-inter text-soft-white/60 text-lg mb-8 max-w-xl mx-auto">
                Whether you&apos;re a manufacturer, investor, government agency, or business partner — submit your inquiry and our team will respond promptly.
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
