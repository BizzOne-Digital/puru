'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Users, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  audience: string;
  icon: React.ComponentType<{ className?: string }>;
  onInquire: () => void;
}

export default function ProductCategoryCard({ title, slug, category, shortDescription, audience, icon: Icon, onInquire }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative h-full flex flex-col p-5 sm:p-7 rounded-2xl glass border border-teal/10 hover:border-teal/30 card-hover transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer rounded-2xl" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header row: icon + category label */}
        <div className="flex items-start justify-between mb-5 flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center">
            <Icon className="w-6 h-6 text-teal" />
          </div>
          <span className="text-xs font-inter text-soft-white/30 uppercase tracking-widest">{category}</span>
        </div>

        {/* Title — links to detail page */}
        <Link href={`/products/${slug}`} className="block mb-3 flex-shrink-0">
          <h3 className="font-sora font-bold text-soft-white text-lg sm:text-xl group-hover:text-aqua transition-colors">
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p className="font-inter text-soft-white/50 text-sm leading-relaxed mb-5 flex-grow">{shortDescription}</p>

        {/* Audience */}
        <div className="flex items-center gap-2 mb-5 flex-shrink-0">
          <Users className="w-3.5 h-3.5 text-soft-white/30 flex-shrink-0" />
          <span className="font-inter text-soft-white/40 text-xs">{audience}</span>
        </div>

        {/* Actions — always pinned to bottom */}
        <div className="mt-auto flex items-center gap-2 flex-wrap">
          <Link
            href={`/products/${slug}`}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-teal/25 text-teal text-xs font-inter font-semibold hover:bg-teal/10 transition-all"
          >
            View Details
            <ExternalLink className="w-3 h-3" />
          </Link>
          <button
            onClick={(e) => { e.stopPropagation(); onInquire(); }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-teal/20 to-aqua/20 border border-teal/20 text-aqua text-xs font-inter font-semibold hover:from-teal/30 hover:to-aqua/30 transition-all"
          >
            Inquire
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
