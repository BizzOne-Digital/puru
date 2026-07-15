'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, TrendingUp, Headphones } from 'lucide-react';
import Link from 'next/link';
import { siteContent } from '@/lib/data/site-content';

const { hero } = siteContent;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060f18]">

      {/* ── Background image — zoomed out, globe centered-right ── */}
      <div className="absolute inset-0">
        {/* Use div with background-image for precise zoom control */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/hero-background.png)',
            backgroundSize: '75%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '72% 25%',
            opacity: 0.55,
          }}
          animate={{ backgroundSize: ['75%', '78%', '75%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Strong left gradient — text area stays dark */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(6,15,24,0.99) 0%, rgba(6,15,24,0.97) 35%, rgba(6,15,24,0.55) 58%, rgba(6,15,24,0.05) 100%)' }} />
        {/* Top/bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060f18]/55 via-transparent to-[#060f18]/90" />
      </div>

      {/* ── Subtle animated teal glow orbs ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: 600, height: 600, borderRadius: '50%', top: '10%', right: '5%', background: 'radial-gradient(circle, rgba(42,140,140,0.07) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: 400, height: 400, borderRadius: '50%', bottom: '15%', right: '20%', background: 'radial-gradient(circle, rgba(217,104,58,0.05) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* ── Floating cards ── */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block">
        {/* Trade inquiry card */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-8 rounded-xl px-4 py-3 w-44"
          style={{ background: 'rgba(10,25,40,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(42,140,140,0.3)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
        >
          <p className="text-[10px] text-teal-400/80 font-inter font-medium tracking-[0.15em] uppercase">Trade Inquiry</p>
          <p className="text-white text-sm font-semibold font-sora mt-0.5">Market Sourcing</p>
          <div className="mt-2 h-1 rounded-full bg-teal-900/60">
            <motion.div
              animate={{ width: ['20%', '78%', '20%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
            />
          </div>
        </motion.div>

        {/* Partnership card */}
        <motion.div
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/3 right-6 rounded-xl px-4 py-3 w-44"
          style={{ background: 'rgba(10,25,40,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(217,104,58,0.3)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
        >
          <p className="text-[10px] text-copper font-inter font-medium tracking-[0.15em] uppercase">11+ Target Markets</p>
          <p className="text-white text-sm font-semibold font-sora mt-0.5">Market Focus</p>
          <div className="mt-2 flex gap-1">
            {[1,2,3,4,5].map((s, i) => (
              <motion.div
                key={s}
                className="flex-1 h-1 rounded"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                style={{ background: '#D9683A' }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Left text content ── */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-32">
          <div className="max-w-[580px]">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-6"
            >
              {hero.eyebrow}
            </motion.p>

            {/* Headline — each line staggers in */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-sora font-bold text-5xl md:text-6xl lg:text-[64px] leading-[1.07] text-white mb-7"
            >
              Global Trade<br />
              Connections for<br />
              <span className="text-teal-400">Products,</span><br />
              <span style={{ color: '#D9683A' }}>Machinery</span> &amp;<br />
              Partnerships
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-inter text-white/55 text-base leading-relaxed mb-10 max-w-md"
            >
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <Link
                href="/contact#inquiry-form"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-inter font-semibold text-sm text-white transition-all hover:opacity-90 hover:scale-105"
                style={{ background: 'rgba(42,140,140,0.85)', backdropFilter: 'blur(8px)', border: '1px solid rgba(42,140,140,0.6)', boxShadow: '0 4px 20px rgba(42,140,140,0.25)' }}
              >
                Complete Inquiry <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-inter font-medium text-sm text-white/70 transition-all hover:text-white"
                style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)' }}
              >
                Explore Solutions
              </Link>
            </motion.div>

            {/* 4 stat badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {hero.badges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ y: -3, borderColor: 'rgba(42,140,140,0.35)' }}
                  className="flex flex-col gap-2 p-4 rounded-xl transition-all"
                  style={{ background: 'rgba(10,25,40,0.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(42,140,140,0.12)' }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(42,140,140,0.15)' }}>
                    {i === 0 && <Globe className="w-4 h-4 text-teal-400" />}
                    {i === 1 && <Shield className="w-4 h-4 text-teal-400" />}
                    {i === 2 && <TrendingUp className="w-4 h-4 text-teal-400" />}
                    {i === 3 && <Headphones className="w-4 h-4 text-teal-400" />}
                  </div>
                  <p className="font-sora font-semibold text-white text-xs leading-tight">{badge.title}</p>
                  <p className="font-inter text-white/35 text-[11px] leading-snug">{badge.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Brand logos strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 border-t border-white/5"
        style={{ background: 'rgba(6,15,24,0.82)', backdropFilter: 'blur(8px)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <p className="text-center text-white/25 text-xs font-inter tracking-widest uppercase mb-5">
            Industries We Support
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap">
            {hero.brandLogos.map((b, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
                className="font-sora font-bold tracking-wider uppercase cursor-default select-none text-sm md:text-base"
                style={{ color: 'rgba(255,255,255,0.22)' }}
              >
                {b}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
