'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, Phone, Search, X } from 'lucide-react';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import { company } from '@/lib/data/company';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'All Products', href: '/products' },
      { label: 'New Products', href: '/products/new-products' },
      { label: 'Safe Solution® Floor Safety System', href: '/products/new-products/safe-solution-floor-safety-system' },
      { label: 'Energy Solutions', href: '/products?category=Energy%20Solutions' },
      { label: 'Industrial Machinery', href: '/products/industrial-machinery' },
      { label: 'Wholesale Products', href: '/products/wholesale-consumer-products' },
      { label: 'Agricultural & Food Trade', href: '/products/agricultural-food-trade-products' },
      { label: 'Custom Product Sourcing', href: '/products/custom-product-sourcing' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Global Markets', href: '/global-markets' },
  {
    label: 'Partnerships',
    href: '/partnerships',
    children: [
      { label: 'Distributors Wanted Worldwide', href: '/partnerships/distributors-wanted' },
      { label: 'Manufacturer Partnerships', href: '/partnerships#manufacturer-partnerships' },
      { label: 'Country Representatives', href: '/partnerships#country-representatives' },
      { label: 'Importer & Exporter Partnerships', href: '/partnerships#importers-exporters' },
      { label: 'Joint Ventures', href: '/partnerships#joint-ventures' },
      { label: 'Government & Institutional Partnerships', href: '/partnerships#government-institutions' },
    ],
  },
  { label: 'Investments', href: '/investments' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setSearchOpen(false);
        setOpenGroup(null);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href.split('?')[0].split('#')[0]));

  return (
    <>
      <div className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-5 pointer-events-none">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-[1440px] pointer-events-auto"
        >
          <div
            className={`relative flex items-center rounded-full px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-500 ${
              scrolled ? 'bg-[#0a1520]/90 backdrop-blur-2xl border border-white/12' : 'bg-[#0a1520]/76 backdrop-blur-xl border border-white/10'
            }`}
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.06)' }}
          >
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 z-10" aria-label="YUVAAN INTERNATIONAL">
              <div className="w-10 h-10 flex-shrink-0">
                <Image src="/logo-dark.png" alt="YUVAAN INTERNATIONAL logo" width={40} height={40} className="object-contain w-full h-full" priority />
              </div>
              <div className="hidden xl:flex flex-col leading-none">
                <span className="font-sora font-bold text-white text-[14px] tracking-[0.16em] uppercase">YUVAAN</span>
                <span className="font-inter text-[#4DB8D5] text-[9px] tracking-[0.34em] uppercase mt-1">INTERNATIONAL</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-0.5" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <div key={link.label} className="relative group">
                    <Link
                      href={link.href}
                      className={`relative flex items-center gap-1 px-2.5 xl:px-3 py-2 font-inter text-[12px] xl:text-[13px] font-medium transition-colors duration-200 whitespace-nowrap ${
                        active ? 'text-[#4DB8D5]' : 'text-white/88 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {link.children && <ChevronDown className="w-3 h-3" />}
                    </Link>
                    {link.children && (
                      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-[70] transition-all">
                        <div
                          className="w-72 rounded-2xl bg-[#020b12] border border-[#244150] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.92)] ring-1 ring-white/5"
                          style={{ backgroundColor: '#020b12' }}
                        >
                          {link.children.map((child) => (
                            <Link key={child.href} href={child.href} className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm text-white/82 hover:text-white hover:bg-[#0b2734] transition-all">
                              {child.label}
                              <ArrowRight className="w-3 h-3 text-teal" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-1.5 ml-auto z-10">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden sm:flex w-9 h-9 rounded-full bg-white/4 hover:bg-white/10 border border-white/12 items-center justify-center text-white/70 hover:text-white transition-all"
                aria-label="Search"
              >
                <Search className="w-3.5 h-3.5" strokeWidth={1.75} />
              </button>
              <a href={`tel:${company.publicPhoneTel}`} className="hidden sm:flex w-9 h-9 rounded-full bg-white/4 hover:bg-white/10 border border-white/12 items-center justify-center text-white/70 hover:text-white transition-all" aria-label="Call us">
                <Phone className="w-3.5 h-3.5" strokeWidth={1.75} />
              </a>
              <Link
                href="/partnerships/distributors-wanted"
                className="hidden sm:inline-flex items-center gap-2 ml-1.5 px-4 xl:px-5 py-2.5 rounded-full text-white text-[12px] xl:text-[13px] font-semibold font-inter transition-all duration-300 hover:brightness-110"
                style={{ background: 'linear-gradient(90deg, #B8562D 0%, #D9683A 45%, #E88B4A 100%)', boxShadow: '0 4px 18px rgba(217,104,58,0.45)' }}
              >
                Distributors Wanted
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-9 h-9 rounded-full bg-white/4 hover:bg-white/10 border border-white/12 flex items-center justify-center text-white/70 hover:text-white transition-all ml-0.5" aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {searchOpen && (
              <motion.div initial={{ opacity: 0, y: -10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.98 }} transition={{ duration: 0.2 }} className="mt-3 rounded-2xl bg-[#0b1f2e]/95 backdrop-blur-2xl border border-white/8 p-4 shadow-2xl">
                <input type="text" autoFocus placeholder="Search products, industries, partnerships..." className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-500/50" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 bg-[#060f18] lg:hidden overflow-y-auto">
            <TradeRouteLines />
            <div className="absolute inset-0 bg-gradient-to-b from-[#060f18]/90 to-[#06293A]/95" />
            <div className="relative z-10 min-h-full pt-24 sm:pt-28 px-5 sm:px-8 pb-10 sm:pb-16">
              <nav className="flex flex-col gap-0" aria-label="Mobile Navigation">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  const expanded = openGroup === link.label;
                  return (
                    <motion.div key={link.href} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.04 }}>
                      <div className={`border-b ${active ? 'border-teal-500/25' : 'border-white/6'}`}>
                        <div className="flex items-center">
                          <Link href={link.href} className={`flex-1 py-4 sm:py-5 font-sora font-semibold text-xl sm:text-2xl transition-colors ${active ? 'text-teal-400' : 'text-white/65 hover:text-white'}`}>
                            {link.label}
                          </Link>
                          {link.children && (
                            <button type="button" onClick={() => setOpenGroup(expanded ? null : link.label)} className="p-3 text-white/50" aria-label={`Toggle ${link.label} menu`}>
                              <ChevronDown className={`w-5 h-5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>
                        {link.children && expanded && (
                          <div className="pb-4 space-y-1">
                            {link.children.map((child) => (
                              <Link key={child.href} href={child.href} className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/5 text-white/65 text-sm font-inter">
                                {child.label}
                                <ArrowRight className="w-4 h-4 text-teal" />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-8">
                <Link href="/partnerships/distributors-wanted" className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-white text-base font-semibold font-inter" style={{ background: 'linear-gradient(135deg, #D9683A 0%, #C85A2A 100%)' }}>
                  Distributors Wanted
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="mt-8 text-center space-y-2">
                  <a href="tel:+17788283610" className="block text-white/30 text-sm font-inter hover:text-white/60 transition-colors">(778) 828-3610</a>
                  <a href="mailto:pacifictrade2010@gmail.com" className="block text-white/30 text-sm font-inter hover:text-white/60 transition-colors">pacifictrade2010@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
