'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Factory, Package, Wheat, Building2, Search, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import ProductInquiryModal from '@/components/products/ProductInquiryModal';

const products = [
  { icon: Settings, title: 'Industrial Machinery', desc: 'Heavy-duty industrial machinery for manufacturing, processing, and production operations.', category: 'Industrial Machinery', color: 'teal' },
  { icon: Factory, title: 'Manufacturing Supplies', desc: 'Raw materials, components, and supplies for manufacturing and production facilities.', category: 'Manufacturing', color: 'aqua' },
  { icon: Package, title: 'Wholesale Consumer Products', desc: 'Bulk consumer goods for wholesale distribution across retail and commercial channels.', category: 'Wholesale Products', color: 'copper' },
  { icon: Building2, title: 'Construction & Infrastructure', desc: 'Building materials and infrastructure components for large-scale projects.', category: 'Infrastructure', color: 'teal' },
  { icon: Wheat, title: 'Agricultural & Food Trade', desc: 'Agricultural commodities and food products for international trade markets.', category: 'Agriculture', color: 'green' },
  { icon: Search, title: 'Custom Product Sourcing', desc: 'Tailored product sourcing and supplier matching for specific requirements.', category: 'Custom Sourcing', color: 'copper' },
];

const colorMap: Record<string, string> = {
  teal: 'from-teal/20 to-teal/5 border-teal/25 group-hover:border-teal/50',
  aqua: 'from-aqua/20 to-aqua/5 border-aqua/25 group-hover:border-aqua/50',
  copper: 'from-copper/20 to-copper/5 border-copper/25 group-hover:border-copper/50',
  green: 'from-green-trade/20 to-green-trade/5 border-green-trade/25 group-hover:border-green-trade/50',
};

const iconColorMap: Record<string, string> = {
  teal: 'text-teal bg-teal/10',
  aqua: 'text-aqua bg-aqua/10',
  copper: 'text-copper bg-copper/10',
  green: 'text-green-trade bg-green-trade/10',
};

export default function ProductPreview() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (title: string) => {
    setSelectedProduct(title);
    setModalOpen(true);
  };

  return (
    <section className="relative py-12 sm:py-20 lg:py-24 bg-navy overflow-hidden">
      <GlobalGridBackground />

      <Container>
        <SectionHeading
          eyebrow="Trade Categories"
          title="Products, Machinery &amp; <span class='gradient-text'>Trade Categories</span>"
          subtitle="Explore the product and machinery categories YUVAAN INTERNATIONAL can help source, connect, or coordinate."
          className="mb-10 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {products.map((product, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                className={`group relative h-full flex flex-col p-5 sm:p-8 rounded-2xl bg-gradient-to-b ${colorMap[product.color]} border transition-all duration-300 cursor-pointer overflow-hidden`}
                onClick={() => openModal(product.title)}
              >
                {/* Tilt effect shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer rounded-2xl" />

                {/* Icon */}
                <div className={`relative z-10 w-12 h-12 flex-shrink-0 rounded-xl ${iconColorMap[product.color]} flex items-center justify-center mb-5`}>
                  <product.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 font-sora font-bold text-soft-white text-xl mb-3">{product.title}</h3>

                {/* Description — grows to fill space */}
                <p className="relative z-10 font-inter text-soft-white/50 text-sm leading-relaxed mb-6 flex-grow">{product.desc}</p>

                {/* Footer row — always pinned to bottom */}
                <div className="relative z-10 flex items-center justify-between mt-auto">
                  <span className="text-xs font-inter text-soft-white/30 uppercase tracking-widest">{product.category}</span>
                  <button
                    className="flex items-center gap-1.5 text-xs font-inter font-semibold text-soft-white/60 group-hover:text-aqua transition-colors"
                    aria-label={`Submit inquiry for ${product.title}`}
                  >
                    Inquire
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="text-center mt-12">
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-teal/30 text-soft-white font-inter font-medium hover:border-teal hover:bg-teal/10 transition-all duration-300"
          >
            View All Categories
            <ArrowRight className="w-4 h-4" />
          </a>
        </ScrollReveal>
      </Container>

      {/* Inquiry Modal */}
      <ProductInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productTitle={selectedProduct || ''}
      />
    </section>
  );
}
