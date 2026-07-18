'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const industryCards = [
  { title: 'Commercial Buildings', href: '/industries/commercial', image: '/images/industries/commercial.jpg' },
  { title: 'Hospitality & Food Service', href: '/industries/hospitality-food-service', image: '/images/industries/hospitality.jpg' },
  { title: 'Healthcare', href: '/industries/healthcare', image: '/images/industries/healthcare.jpg' },
  { title: 'Education', href: '/industries/education', image: '/images/industries/education.jpg' },
  { title: 'Manufacturing', href: '/industries/manufacturing', image: '/images/industries/manufacturing.jpg' },
  { title: 'Warehousing & Logistics', href: '/industries/warehousing-logistics', image: '/images/industries/warehouse.jpg' },
  { title: 'Facilities Management', href: '/industries/facilities-management', image: '/images/industries/facilities-management.jpg' },
  { title: 'Government', href: '/industries/government', image: '/images/industries/government.jpg' },
];

export default function IndustriesGrid() {
  return (
    <section className="section-pad gradient-footer relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-28 top-0 h-80 w-80 animate-aurora rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-96 w-96 animate-float-slow rounded-full bg-teal-300/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 animate-pulse-glow rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute inset-0 grid-bg-animated opacity-15" />
      </div>
      <Container className="relative">
        <SectionHeading
          eyebrow="Industries Served"
          title="Solutions Across Commercial Environments"
          subtitle="Select an industry to review relevant challenges, solutions, and inquiry pathways."
          className="mb-10"
          light
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industryCards.map((industry, index) => (
            <ScrollReveal key={industry.href} delay={index * 0.04} className="h-full">
              <Link href={industry.href} className="group relative block h-full min-h-[190px] overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-card-dark card-hover sm:min-h-[170px]">
                <Image src={industry.image} alt={industry.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 639px) 100vw, (max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/0 to-accent/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-0 p-4">
                  <p className="font-sora text-sm font-semibold text-white transition-transform duration-300 group-hover:-translate-y-1 sm:text-base">{industry.title}</p>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent-bright opacity-100 transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                    View industry <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/industries" className="btn-secondary">
            Explore All Industries <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
