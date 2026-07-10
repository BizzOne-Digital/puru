'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import TradeRouteLines from '@/components/ui/TradeRouteLines';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Partnership', href: '/partnership' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMobileOpen(false); setSearchOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = mobileOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [mobileOpen]);

  return (
    <>
      {/* ── Desktop/Tablet Pill Navbar ── */}
      <div className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-5 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full max-w-[1320px] pointer-events-auto"
      >
        <div
          className={`relative flex items-center rounded-full px-3 py-2 sm:px-5 sm:py-2.5 transition-all duration-500 ${
            scrolled
              ? 'bg-[#0a1520]/88 backdrop-blur-2xl border border-white/12'
              : 'bg-[#0a1520]/72 backdrop-blur-xl border border-white/10'
          }`}
          style={{
            boxShadow: scrolled
              ? '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)'
              : '0 4px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 z-10" aria-label="YUVAAN INTERNATIONAL">
            {/* Real logo PNG — dark version for dark navbar */}
            <div className="w-10 h-10 flex-shrink-0">
              <Image
                src="/logo-dark.png"
                alt="YUVAAN INTERNATIONAL"
                width={40}
                height={40}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-sora font-bold text-white text-[15px] tracking-[0.12em] sm:tracking-[0.18em] uppercase">YUVAAN</span>
              <span className="font-inter text-[#4DB8D5] text-[9px] tracking-[0.28em] sm:tracking-[0.38em] uppercase mt-1">INTERNATIONAL</span>
            </div>
          </Link>

          {/* Desktop nav links — absolutely centered */}
          <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-0.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-inter text-[13px] font-medium transition-colors duration-200 group whitespace-nowrap ${
                    isActive ? 'text-[#4DB8D5]' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-[calc(100%-8px)] bg-[#4DB8D5] shadow-[0_0_10px_rgba(77,184,213,0.85)]'
                        : 'w-0 bg-[#4DB8D5]/50 group-hover:w-4'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-1.5 ml-auto z-10">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden sm:flex w-9 h-9 rounded-full bg-white/4 hover:bg-white/10 border border-white/12 items-center justify-center text-white/70 hover:text-white transition-all"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5" strokeWidth={1.75} />
            </button>

            <a
              href="tel:+17788283610"
              className="w-9 h-9 rounded-full bg-white/4 hover:bg-white/10 border border-white/12 flex items-center justify-center text-white/70 hover:text-white transition-all"
              aria-label="Call us"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={1.75} />
            </a>

            <Link
              href="/contact#inquiry-form"
              className="hidden sm:inline-flex items-center gap-2 ml-1.5 px-5 py-2.5 rounded-full text-white text-[13px] font-semibold font-inter transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(90deg, #B8562D 0%, #D9683A 45%, #E88B4A 100%)',
                boxShadow: '0 4px 18px rgba(217,104,58,0.45), inset 0 1px 0 rgba(255,255,255,0.18)',
              }}
            >
              Complete Inquiry
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-white/4 hover:bg-white/10 border border-white/12 flex items-center justify-center text-white/70 hover:text-white transition-all ml-0.5"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Search dropdown */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-3 rounded-2xl bg-[#0b1f2e]/95 backdrop-blur-2xl border border-white/8 p-4"
              style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.6)' }}
            >
              <input
                type="text"
                autoFocus
                placeholder="Search products, industries, partnerships..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-500/50"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      </div>

      {/* ── Mobile Full-Screen Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#060f18] lg:hidden"
          >
            <TradeRouteLines />
            <div className="absolute inset-0 bg-gradient-to-b from-[#060f18]/90 to-[#06293A]/95" />

            <div className="relative z-10 flex flex-col h-full pt-24 sm:pt-28 px-5 sm:px-8 pb-10 sm:pb-16">
              <nav className="flex flex-col gap-0" aria-label="Mobile Navigation">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between py-4 sm:py-5 border-b font-sora font-semibold text-xl sm:text-2xl transition-colors group ${
                          isActive ? 'text-teal-400 border-teal-500/25' : 'text-white/65 border-white/6 hover:text-white hover:border-teal-500/15'
                        }`}
                      >
                        {link.label}
                        <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-2 ${isActive ? 'text-teal-400' : 'text-white/15'}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <Link
                  href="/contact#inquiry-form"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-white text-base font-semibold font-inter"
                  style={{ background: 'linear-gradient(135deg, #D9683A 0%, #C85A2A 100%)' }}
                >
                  Complete Inquiry
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="mt-8 text-center space-y-2">
                  <a href="tel:+17788283610" className="block text-white/30 text-sm font-inter hover:text-white/60 transition-colors">(778) 828-3610</a>
                  <a href="mailto:pacifictrade2010@gmail.com" className="block text-white/30 text-sm font-inter hover:text-white/60 transition-colors">pacifictrade2010@gmail.com</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
