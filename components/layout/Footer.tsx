'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight, Globe, Handshake } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import TradeRouteLines from '@/components/ui/TradeRouteLines';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Partnership', href: '/partnership' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
];

const productLinks = [
  { label: 'Industrial Machinery', href: '/products' },
  { label: 'Manufacturing Supplies', href: '/products' },
  { label: 'Wholesale Products', href: '/products' },
  { label: 'Custom Sourcing', href: '/products' },
  { label: 'Infrastructure Materials', href: '/products' },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy overflow-hidden" role="contentinfo">
      <TradeRouteLines />

      {/* Top copper accent line */}
      <div className="copper-line" />

      {/* Large faint background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-sora font-bold text-[8vw] text-white/[0.025] select-none whitespace-nowrap uppercase tracking-widest"
        >
          YUVAAN INTERNATIONAL
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo variant="dark" size="md" className="mb-6" />
            <p className="text-soft-white/50 text-sm font-inter leading-relaxed mb-6">
              A Canadian gateway for international trade — connecting importers, exporters, manufacturers, wholesalers, and industrial buyers with global opportunities.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+17788283610" className="flex items-center gap-2 text-soft-white/60 hover:text-aqua transition-colors text-sm font-inter group">
                <Phone className="w-4 h-4 text-teal group-hover:text-aqua transition-colors" />
                (778) 828-3610
              </a>
              <a href="mailto:pacifictrade2010@gmail.com" className="flex items-center gap-2 text-soft-white/60 hover:text-aqua transition-colors text-sm font-inter group">
                <Mail className="w-4 h-4 text-teal group-hover:text-aqua transition-colors" />
                pacifictrade2010@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sora font-semibold text-soft-white text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-copper" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-soft-white/50 hover:text-aqua transition-colors text-sm font-inter flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-teal" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-sora font-semibold text-soft-white text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-copper" />
              Trade Categories
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-soft-white/50 hover:text-aqua transition-colors text-sm font-inter flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-teal" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiry CTA */}
          <div>
            <h3 className="font-sora font-semibold text-soft-white text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-copper" />
              Start Your Inquiry
            </h3>
            <p className="text-soft-white/50 text-sm font-inter leading-relaxed mb-6">
              Have a product, machinery, or trade requirement? Submit your inquiry and our team will review your details.
            </p>
            <Link
              href="/contact#inquiry-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal to-aqua text-navy text-sm font-semibold font-inter transition-all hover:shadow-glow-teal hover:scale-105"
            >
              Complete Inquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Teal divider */}
        <div className="teal-line mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-soft-white/30 text-xs font-inter text-center md:text-left">
            © {new Date().getFullYear()} YUVAAN INTERNATIONAL. All rights reserved.
          </p>
          <p className="text-soft-white/25 text-xs font-inter text-center leading-relaxed max-w-xl">
            Information on this website is for general business inquiry purposes only. Availability of products, partnerships, sourcing, or trade opportunities is subject to review, confirmation, and applicable regulations.
          </p>
        </div>
      </div>
    </footer>
  );
}
