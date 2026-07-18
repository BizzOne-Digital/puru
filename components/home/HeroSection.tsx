'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Globe2, Handshake, PackageSearch, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import Counter from '@/components/ui/Counter';
import Particles from '@/components/ui/Particles';

const stats = [
  { value: 11, suffix: '+', label: 'Target markets' },
  { value: 14, suffix: '+', label: 'Industries served' },
  { value: 3, suffix: '-Part', label: 'Floor safety system' },
];

const words = ['Connecting', 'Global', 'Opportunities', 'Through', 'Innovation'];

const chips = [
  { icon: Globe2, label: 'Global Sourcing', className: 'left-[4%] top-[24%]', delay: 0, duration: 6 },
  { icon: PackageSearch, label: 'Distribution', className: 'right-[5%] top-[30%]', delay: 1.2, duration: 7 },
  { icon: Handshake, label: 'Partnerships', className: 'left-[9%] bottom-[26%]', delay: 0.6, duration: 6.5 },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '-10%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, prefersReducedMotion ? 1 : 0.15]);

  return (
    <section ref={ref} className="relative flex min-h-[92svh] items-center overflow-hidden pb-20 pt-28 sm:pt-32">
      {/* Background image with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src="/hero-background.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Lighter blue -> teal/green brand gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/90 via-[#12667A]/78 to-[#059669]/62" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/55 via-transparent to-[#0B1F3A]/25" />

      {/* Animated glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-24 top-1/4 h-80 w-80 animate-aurora rounded-full bg-accent-bright/25 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-96 w-96 animate-float-slow rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-pulse-glow rounded-full bg-sky-400/15 blur-3xl" />
      </div>

      <Particles count={30} />

      {/* Floating capability chips (desktop) */}
      {chips.map((chip) => {
        const Icon = chip.icon;
        return (
          <motion.div
            key={chip.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.1 + chip.delay * 0.3 }}
            className={`absolute z-10 hidden lg:block ${chip.className}`}
          >
            <motion.div
              animate={prefersReducedMotion ? undefined : { y: [0, -14, 0] }}
              transition={{ duration: chip.duration, repeat: Infinity, ease: 'easeInOut', delay: chip.delay }}
              className="flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-glass backdrop-blur-md"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-bright to-emerald-400 text-ink">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <span className="text-sm font-semibold text-white">{chip.label}</span>
            </motion.div>
          </motion.div>
        );
      })}

      <Container className="relative z-20 w-full">
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:mb-6 sm:text-[11px] sm:tracking-[0.22em]"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse-glow text-accent-bright" />
            Canada-Based Commercial Solutions
          </motion.span>

          <h1 className="mb-5 font-sora text-[2.1rem] font-bold leading-[1.08] text-white min-[390px]:text-[2.4rem] sm:mb-6 sm:text-6xl lg:text-[4.2rem]">
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30, rotateX: prefersReducedMotion ? 0 : 45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className={`mr-[0.26em] inline-block ${
                  word === 'Global' || word === 'Opportunities' ? 'gradient-text-animated' : ''
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mx-auto mb-8 max-w-2xl text-[15px] leading-relaxed text-white/80 sm:mb-10 sm:text-lg"
          >
            YUVAAN INTERNATIONAL connects manufacturers, governments, investors, and project developers across global markets — delivering innovative technologies, sustainable infrastructure, and long-term business partnerships that create lasting value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-10 flex flex-col items-center justify-center gap-3 sm:mb-12 sm:flex-row"
          >
            <Link href="/contact#inquiry-form" className="btn-primary w-full !px-8 !py-4 !text-base sm:w-auto">
              Request a Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/products"
              className="shine inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
            >
              Browse Products
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mx-auto grid max-w-xl grid-cols-3 gap-3 sm:gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:p-4"
              >
                <p className="font-sora text-xl font-bold text-white sm:text-3xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-[11px] leading-tight text-white/65 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 sm:block"
        aria-hidden="true"
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-white/60"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-surface-soft" />
    </section>
  );
}
