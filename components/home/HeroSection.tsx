'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, TrendingUp, Headphones } from 'lucide-react';
import Link from 'next/link';

const bottomBadges = [
  { icon: Globe, title: 'Global Network', desc: 'Trusted connections across 50+ countries.' },
  { icon: Shield, title: 'Reliable & Secure', desc: 'Verified partners and transparent processes.' },
  { icon: TrendingUp, title: 'Business Growth', desc: 'Driving scalable partnerships and long-term success.' },
  { icon: Headphones, title: 'Dedicated Support', desc: 'Personalized assistance at every step.' },
];

const brandLogos = [
  'CATERPILLAR', 'BOSCH', 'SIEMENS', 'JOHN DEERE', '3M', 'Schneider',
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#060f18]">
      {/* ── Background image with subtle zoom animation ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-no-repeat bg-cover bg-[center_top] lg:bg-[length:82%] lg:bg-[position:right_40%]"
          style={{ backgroundImage: 'url(/hero-background.png)' }}
          animate={{ scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Left gradient for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(6,15,24,0.92) 0%, rgba(6,15,24,0.72) 38%, rgba(6,15,24,0.25) 62%, rgba(6,15,24,0.1) 100%)',
          }}
        />
        {/* Bottom gradient for cards */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060f18]/95 via-[#060f18]/20 to-[#060f18]/40" />
        {/* Top vignette for navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060f18]/60 via-transparent to-transparent" />
      </div>

      {/* ── Floating ambient particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '20%', left: '55%', delay: 0 },
          { top: '35%', left: '72%', delay: 1.2 },
          { top: '55%', left: '65%', delay: 2.4 },
          { top: '25%', left: '80%', delay: 0.8 },
          { top: '70%', left: '78%', delay: 1.8 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#4DB8D5]"
            style={{ top: p.top, left: p.left, opacity: 0.4 }}
            animate={{ opacity: [0.2, 0.7, 0.2], y: [0, -12, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-10 flex flex-col min-h-[520px] sm:min-h-[580px] lg:min-h-[680px] max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 pb-6">
        {/* Left text block */}
        <div className="flex-1 flex items-center">
          <div className="max-w-[580px]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-[10px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.32em] uppercase text-[#D9683A] font-semibold mb-4 sm:mb-5"
            >
              Canada-Based International Trade
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-sora font-bold text-[30px] min-[375px]:text-[34px] sm:text-5xl lg:text-[56px] xl:text-[60px] leading-[1.1] sm:leading-[1.08] text-white mb-5 sm:mb-6"
            >
              Global Trade
              <br />
              Connections for
              <br />
              <span className="text-[#4DB8D5]">Products, Machinery</span>
              <br />
              <span className="text-[#E8A86A]">&amp; Partnerships</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-inter text-white/65 text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8 max-w-[480px]"
            >
              YUVAAN INTERNATIONAL connects importers, exporters, manufacturers, wholesalers, distributors, and industrial buyers with reliable international trade opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <Link
                href="/contact#inquiry-form"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-inter font-semibold text-sm text-white transition-all hover:brightness-110 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(90deg, #2A8C8C 0%, #3BA8B8 50%, #4DB8D5 100%)',
                  boxShadow: '0 4px 22px rgba(42,140,140,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
                }}
              >
                Complete Inquiry
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-inter font-medium text-sm text-white/80 transition-all hover:text-white hover:border-white/35"
                style={{ border: '1px solid rgba(255,255,255,0.22)', background: 'transparent' }}
              >
                Explore Products
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating info cards — over background image on right */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden lg:block absolute top-[24%] right-[8%] rounded-xl px-4 py-3 w-[168px] z-20"
          style={{
            background: 'rgba(8,22,36,0.82)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(77,184,213,0.28)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          <p className="text-[9px] text-[#4DB8D5]/80 font-inter font-semibold tracking-[0.18em] uppercase">Active Trade</p>
          <p className="text-white text-[13px] font-semibold font-sora mt-0.5">Product Sourcing</p>
          <div className="mt-2.5 h-[3px] rounded-full bg-teal-900/50 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#2A8C8C] to-[#4DB8D5]"
              animate={{ width: ['40%', '78%', '40%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="hidden lg:block absolute top-[42%] right-[6%] rounded-xl px-4 py-3 w-[158px] z-20"
          style={{
            background: 'rgba(8,22,36,0.82)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(217,104,58,0.28)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          <p className="text-[9px] text-[#D9683A] font-inter font-semibold tracking-[0.18em] uppercase">Partnership</p>
          <p className="text-white text-[13px] font-semibold font-sora mt-0.5">B2B Connection</p>
          <div className="mt-2.5 flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="flex-1 h-[3px] rounded-sm bg-[#D9683A]/45"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Feature cards at bottom — over background */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-auto pt-6"
        >
          {bottomBadges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col gap-2.5 p-4 lg:p-5 rounded-xl"
              style={{
                background: 'rgba(8,22,36,0.78)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(42,140,140,0.18)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(42,140,140,0.18)', border: '1px solid rgba(77,184,213,0.15)' }}
              >
                <badge.icon className="w-4 h-4 text-[#4DB8D5]" strokeWidth={1.75} />
              </div>
              <p className="font-sora font-semibold text-white text-[13px] leading-tight">{badge.title}</p>
              <p className="font-inter text-white/45 text-[11px] leading-snug">{badge.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Trusted by strip */}
      <div
        className="relative z-10 border-t border-white/5"
        style={{ background: 'rgba(6,15,24,0.9)', backdropFilter: 'blur(10px)' }}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-7">
          <p className="text-center text-[#4DB8D5]/70 text-[10px] sm:text-[11px] font-inter tracking-[0.22em] sm:tracking-[0.28em] uppercase mb-4 sm:mb-5">
            Trusted by Businesses Worldwide
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 flex-wrap">
            {brandLogos.map((brand) => (
              <span
                key={brand}
                className="font-sora font-bold text-white/18 hover:text-white/35 transition-colors text-xs md:text-sm tracking-wider uppercase cursor-default select-none"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
