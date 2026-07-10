'use client';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${alignClass} ${className}`}
    >
      {eyebrow && (
        <span className="inline-block font-inter text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-copper mb-3 font-medium">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-sora font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl ${
          align === 'center' ? 'mx-auto' : ''
        } ${light ? 'text-dark-text' : 'text-soft-white'}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            light ? 'text-steel-grey' : 'text-soft-white/60'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
      {align === 'center' && (
        <div className="mt-6 flex gap-2 items-center">
          <div className="h-px w-12 bg-teal opacity-60" />
          <div className="h-1.5 w-1.5 rounded-full bg-copper" />
          <div className="h-px w-12 bg-teal opacity-60" />
        </div>
      )}
    </motion.div>
  );
}
