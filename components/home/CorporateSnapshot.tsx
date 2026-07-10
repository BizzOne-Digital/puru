'use client';
import { motion } from 'framer-motion';
import { Globe, Search, Factory, Truck, Settings, Handshake } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';

const snapshots = [
  {
    icon: Globe,
    title: 'Global Trade Support',
    description: 'Connecting businesses across international markets for import, export, and trade development.',
    color: 'teal',
  },
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'Identifying and coordinating product sourcing connections across global supply chains.',
    color: 'aqua',
  },
  {
    icon: Factory,
    title: 'Manufacturer Connections',
    description: 'Building direct relationships between manufacturers, suppliers, and buyers worldwide.',
    color: 'green',
  },
  {
    icon: Truck,
    title: 'Wholesale & Distribution',
    description: 'Supporting wholesale trade and distribution channel development for various product categories.',
    color: 'teal',
  },
  {
    icon: Settings,
    title: 'Industrial Machinery',
    description: 'Specialized support for industrial machinery buyers, sellers, and equipment sourcing.',
    color: 'copper',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    description: 'Developing long-term business partnerships for sustained international trade growth.',
    color: 'aqua',
  },
];

const colorMap = {
  teal: { icon: 'text-teal', bg: 'bg-teal/10', border: 'border-teal/20', glow: 'hover:shadow-glow-teal' },
  aqua: { icon: 'text-aqua', bg: 'bg-aqua/10', border: 'border-aqua/20', glow: 'hover:shadow-glow-aqua' },
  green: { icon: 'text-green-trade', bg: 'bg-green-trade/10', border: 'border-green-trade/20', glow: '' },
  copper: { icon: 'text-copper', bg: 'bg-copper/10', border: 'border-copper/20', glow: 'hover:shadow-glow-copper' },
};

export default function CorporateSnapshot() {
  return (
    <section className="relative py-12 sm:py-20 lg:py-24 bg-navy overflow-hidden">
      <GlobalGridBackground />

      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="International Trade <span class='gradient-text'>Solutions</span>"
          subtitle="YUVAAN INTERNATIONAL supports every stage of the global trade process — from sourcing to partnerships."
          className="mb-10 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {snapshots.map((item, i) => {
            const colors = colorMap[item.color as keyof typeof colorMap];
            return (
              <ScrollReveal key={i} delay={i * 0.1} direction="up" className="h-full">
                <div
                  className={`group relative h-full flex flex-col p-5 sm:p-8 rounded-2xl glass border ${colors.border} card-hover ${colors.glow} transition-all duration-300`}
                >
                  {/* Background shimmer */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                  </div>

                  {/* Icon */}
                  <div className={`relative z-10 w-12 h-12 flex-shrink-0 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-6`}>
                    <item.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 font-sora font-semibold text-xl text-soft-white mb-3 group-hover:text-soft-white transition-colors">
                    {item.title}
                  </h3>

                  {/* Description — flex-grow so it fills remaining space */}
                  <p className="relative z-10 font-inter text-soft-white/50 text-sm leading-relaxed group-hover:text-soft-white/70 transition-colors flex-grow">
                    {item.description}
                  </p>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-8 right-8 h-px ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
