'use client';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import TradeRouteLines from '@/components/ui/TradeRouteLines';

export default function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 50%, #083048 100%)' }}>
      <TradeRouteLines />

      {/* Glow effects */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(42,140,140,0.12) 0%, transparent 70%)' }}
      />

      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-6">
            Start Today
          </span>

          <h2 className="font-sora font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-white leading-tight mb-5 sm:mb-6">
            Have a product, machinery,{' '}
            <br className="hidden md:block" />
            or <span className="gradient-text">trade requirement?</span>
          </h2>

          <p className="font-inter text-soft-white/60 text-base sm:text-lg mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed">
            Submit your inquiry and our team will review your requirements and reach out to discuss opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact#inquiry-form"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold text-base hover:shadow-glow-teal hover:scale-105 transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              Complete Inquiry Form
            </Link>
            <a
              href="tel:+17788283610"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 rounded-full border border-soft-white/20 text-soft-white font-inter font-medium hover:border-teal/50 hover:bg-white/5 transition-all duration-300"
            >
              (778) 828-3610
            </a>
          </div>

          {/* Decorative line */}
          <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
            <div className="hidden sm:block h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-teal/30" />
            <span className="text-soft-white/20 font-inter text-[10px] sm:text-xs tracking-widest uppercase text-center">YUVAAN INTERNATIONAL</span>
            <div className="hidden sm:block h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-teal/30" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
