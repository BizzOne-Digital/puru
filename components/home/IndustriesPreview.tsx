'use client';
import { Factory, Settings, Building2, Package, ShoppingBag, Wheat, Boxes, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';

const industries = [
  { icon: Settings, title: 'Manufacturing' },
  { icon: Factory, title: 'Industrial Machinery' },
  { icon: Building2, title: 'Construction & Infrastructure' },
  { icon: Package, title: 'Wholesale Distribution' },
  { icon: ShoppingBag, title: 'Consumer Goods' },
  { icon: Wheat, title: 'Agriculture & Food Trade' },
  { icon: Boxes, title: 'Packaging & Supplies' },
  { icon: Layers, title: 'Custom Sourcing' },
];

export default function IndustriesPreview() {
  return (
    <section className="relative py-12 sm:py-20 lg:py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(42,140,140,0.08) 0%, transparent 60%)' }}
      />

      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Industries <span class='gradient-text'>We Connect</span>"
          subtitle="Connecting businesses across key sectors through product sourcing, trade coordination, and partnership opportunities."
          className="mb-10 sm:mb-16"
        />

        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {industries.map((ind, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="group glass border border-white/5 hover:border-teal/20 rounded-xl p-4 sm:p-5 flex flex-col items-center text-center card-hover transition-all">
                <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/15 flex items-center justify-center mb-3 group-hover:bg-teal/20 transition-colors">
                  <ind.icon className="w-5 h-5 text-teal group-hover:text-aqua transition-colors" />
                </div>
                <p className="font-inter text-soft-white/60 text-sm sm:text-xs font-medium group-hover:text-soft-white/80 transition-colors leading-snug">
                  {ind.title}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-teal/30 text-soft-white font-inter font-medium hover:border-teal hover:bg-teal/10 transition-all duration-300"
          >
            View All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}
