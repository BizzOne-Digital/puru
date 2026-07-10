'use client';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Target, Eye } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Container from '@/components/ui/Container';

export default function AboutPreview() {
  return (
    <section className="relative py-12 sm:py-20 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 60%, #083048 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%232A8C8C\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Visual side */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main card */}
              <div className="relative glass border border-teal/20 rounded-3xl p-6 sm:p-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                  style={{ background: 'radial-gradient(circle, #D9683A, transparent)' }}
                />

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/30 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-soft-white/40 tracking-widest uppercase">Based In</p>
                    <p className="font-sora font-semibold text-soft-white">Canada</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <Target className="w-5 h-5 text-aqua flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sora font-semibold text-soft-white text-sm mb-1">Mission</p>
                      <p className="font-inter text-soft-white/50 text-sm leading-relaxed">
                        To create trusted international trade pathways for businesses seeking product sourcing, supply connections, distribution, and partnership opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <Eye className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sora font-semibold text-soft-white text-sm mb-1">Vision</p>
                      <p className="font-inter text-soft-white/50 text-sm leading-relaxed">
                        To become a reliable global trade gateway for businesses looking to connect, source, distribute, and grow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="relative sm:absolute sm:-right-6 sm:top-1/3 mt-4 sm:mt-0 glass border border-copper/20 rounded-2xl px-5 py-4"
              >
                <p className="text-copper font-sora font-bold text-2xl">Global</p>
                <p className="text-soft-white/50 font-inter text-xs">Trade Network</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal direction="right">
            <div>
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">
                Who We Are
              </span>
              <h2 className="font-sora font-bold text-2xl sm:text-4xl md:text-5xl text-soft-white leading-tight mb-6">
                A Canadian Gateway for{' '}
                <span className="gradient-text">International Trade</span>
              </h2>
              <p className="font-inter text-soft-white/60 text-base sm:text-lg leading-relaxed mb-8">
                YUVAAN INTERNATIONAL supports importers, exporters, manufacturers, wholesalers, distributors, and industrial buyers by helping create reliable trade connections and business opportunities across markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10">
                {[
                  'Import & Export Support',
                  'Product Sourcing',
                  'Manufacturer Connections',
                  'Wholesale Distribution',
                  'Industrial Machinery',
                  'Partnership Development',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-soft-white/60 text-sm font-inter">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-aqua font-inter font-semibold group"
              >
                About YUVAAN
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
