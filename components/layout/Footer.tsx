'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, ArrowRight, MapPin } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { siteContent } from '@/lib/data/site-content';
import { company } from '@/lib/data/company';

const { brand } = siteContent;

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Industries', href: '/industries' },
  { label: 'Global Markets', href: '/global-markets' },
  { label: 'Investments', href: '/investments' },
  { label: 'Contact', href: '/contact' },
];

const solutionLinks = [
  { label: 'New Products', href: '/products/new-products' },
  { label: 'Safe Solution®', href: '/products/new-products/safe-solution-floor-safety-system' },
  { label: 'Distributors Wanted Worldwide', href: '/partnerships/distributors-wanted' },
  { label: 'Battery Energy Storage', href: '/products/battery-energy-storage' },
  { label: 'EV Charging Infrastructure', href: '/products/ev-charging-infrastructure' },
  { label: 'Industrial Machinery', href: '/products/industrial-machinery' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy overflow-hidden" role="contentinfo">

      {/* Animated trade route SVG lines */}
      <TradeRouteLines />

      {/* Top copper accent line — animated width */}
      <motion.div
        className="h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D9683A, transparent)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Slow pulsing glow orb — bottom left */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: 500, height: 500, borderRadius: '50%', bottom: -100, left: -100, background: 'radial-gradient(circle, rgba(42,140,140,0.06) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Slow pulsing glow orb — top right */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: 400, height: 400, borderRadius: '50%', top: -80, right: -80, background: 'radial-gradient(circle, rgba(217,104,58,0.04) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Large faint background text — slow drift */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
        animate={{ x: [-8, 8, -8] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-sora font-bold text-[8vw] text-white/[0.025] select-none whitespace-nowrap uppercase tracking-widest">
          YUVAAN INTERNATIONAL
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">

          {/* Brand column */}
          <ScrollReveal direction="up" delay={0}>
            <div className="lg:col-span-1">
              <Logo variant="dark" size="md" className="mb-6" />
              <p className="text-soft-white/50 text-sm font-inter leading-relaxed mb-2">
                {brand.subTagline}
              </p>
              <p className="text-soft-white/40 text-xs font-inter leading-relaxed mb-6">
                {brand.tagline}
              </p>
              <div className="flex flex-col gap-3">
                <a href={`tel:${company.publicPhoneTel}`} className="flex items-center gap-2 text-soft-white/60 hover:text-aqua transition-colors text-sm font-inter group">
                  <Phone className="w-4 h-4 text-teal group-hover:text-aqua transition-colors flex-shrink-0" />
                  {company.publicPhoneDisplay}
                </a>
                <a href={`mailto:${company.publicEmail}`} className="flex items-center gap-2 text-soft-white/60 hover:text-aqua transition-colors text-sm font-inter group">
                  <Mail className="w-4 h-4 text-teal group-hover:text-aqua transition-colors flex-shrink-0" />
                  <span className="truncate text-xs">{company.publicEmail}</span>
                </a>
                <div className="flex items-center gap-2 text-soft-white/40 text-sm font-inter">
                  <MapPin className="w-4 h-4 text-teal flex-shrink-0" />
                  {company.locationDisplay}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <h3 className="font-sora font-semibold text-soft-white text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                <motion.span
                  className="h-px bg-copper"
                  initial={{ width: 0 }}
                  whileInView={{ width: 16 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link href={link.href} className="text-soft-white/50 hover:text-aqua transition-colors text-sm font-inter flex items-center gap-2 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-teal" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Solutions */}
          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <h3 className="font-sora font-semibold text-soft-white text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                <motion.span
                  className="h-px bg-copper"
                  initial={{ width: 0 }}
                  whileInView={{ width: 16 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                Products
              </h3>
              <ul className="space-y-3">
                {solutionLinks.map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                  >
                    <Link href={link.href} className="text-soft-white/50 hover:text-aqua transition-colors text-sm font-inter flex items-center gap-2 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-teal" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Inquiry CTA */}
          <ScrollReveal direction="up" delay={0.3}>
            <div>
              <h3 className="font-sora font-semibold text-soft-white text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                <motion.span
                  className="h-px bg-copper"
                  initial={{ width: 0 }}
                  whileInView={{ width: 16 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
                Start Your Inquiry
              </h3>
              <p className="text-soft-white/50 text-sm font-inter leading-relaxed mb-4">
                Whether you&apos;re a manufacturer, distributor, investor, government agency, or business partner — submit your inquiry today.
              </p>
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              <span className="text-soft-white/40 text-xs font-inter">International market development</span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <span className="text-soft-white/40 text-xs font-inter">British Columbia, Canada HQ</span>
              </div>
              <div className="flex flex-col gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/partnerships/distributors-wanted"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-copper to-[#E88B4A] text-white text-sm font-semibold font-inter transition-all"
                  >
                    Distributors Wanted
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <Link href="/contact#inquiry-form" className="text-aqua text-sm font-inter hover:underline">
                  Complete Inquiry
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl bg-white/[0.03] border border-white/8 p-5">
            <p className="font-sora font-semibold text-soft-white text-sm mb-3">Legal</p>
            <div className="flex flex-wrap gap-3">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-soft-white/45 hover:text-aqua text-xs font-inter transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white/[0.03] border border-white/8 p-5">
            <p className="font-sora font-semibold text-soft-white text-sm mb-3">Trademark Notice</p>
            <p className="text-soft-white/40 text-xs font-inter leading-relaxed">
              {company.trademarkNotice}
            </p>
          </div>
        </div>

        {/* Teal divider — animated */}
        <motion.div
          className="mb-8"
          style={{ height: 1, background: 'linear-gradient(90deg, transparent, #4DB8D5, transparent)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-soft-white/30 text-xs font-inter text-center md:text-left">
            © {new Date().getFullYear()} {brand.fullName}. All rights reserved.
          </p>
          <p className="text-soft-white/25 text-xs font-inter text-center leading-relaxed max-w-3xl">
            Information on this website is for general business inquiry purposes only. Product suitability, surface compatibility, test-area results, performance, maintenance intervals, insurance or financial outcomes, territory availability, and program availability vary by use case and require review, confirmation, and applicable documentation.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
