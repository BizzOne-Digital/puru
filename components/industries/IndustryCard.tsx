'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface IndustryCardProps {
  title: string;
  slug: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
  onInquire?: () => void;
}

export default function IndustryCard({ title, slug, description, icon: Icon, delay = 0, onInquire }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="group relative h-full flex flex-col p-7 rounded-2xl glass border border-white/5 hover:border-teal/20 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shimmer rounded-2xl" />

      {/* Icon */}
      <div className="relative z-10 w-12 h-12 rounded-xl bg-teal/10 border border-teal/15 flex items-center justify-center mb-5 flex-shrink-0">
        <Icon className="w-6 h-6 text-teal group-hover:text-aqua transition-colors" />
      </div>

      {/* Title */}
      <Link href={`/industries/${slug}`} className="block flex-shrink-0 mb-2">
        <h3 className="relative z-10 font-sora font-semibold text-soft-white text-lg group-hover:text-aqua transition-colors">
          {title}
        </h3>
      </Link>

      {/* Description */}
      <p className="relative z-10 font-inter text-soft-white/50 text-sm leading-relaxed mb-5 flex-grow">
        {description}
      </p>

      {/* Actions */}
      <div className="relative z-10 mt-auto flex items-center gap-2 flex-wrap">
        <Link
          href={`/industries/${slug}`}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-teal/20 text-teal text-xs font-inter font-semibold hover:bg-teal/10 transition-all"
        >
          Learn More
          <ExternalLink className="w-3 h-3" />
        </Link>
        <button
          onClick={onInquire}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-teal/10 border border-teal/15 text-aqua/80 text-xs font-inter font-semibold hover:bg-teal/20 transition-all"
        >
          Inquire
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  );
}
