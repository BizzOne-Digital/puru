import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import CorporateSnapshot from '@/components/home/CorporateSnapshot';
import AboutPreview from '@/components/home/AboutPreview';
import ProductPreview from '@/components/home/ProductPreview';
import PartnershipPreview from '@/components/home/PartnershipPreview';
import IndustriesPreview from '@/components/home/IndustriesPreview';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'YUVAAN INTERNATIONAL | Global Trade, Products & Partnerships',
  description: 'YUVAAN INTERNATIONAL connects importers, exporters, manufacturers, wholesalers, distributors, and industrial buyers with reliable international trade opportunities.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CorporateSnapshot />
      <AboutPreview />
      <ProductPreview />
      <PartnershipPreview />
      <IndustriesPreview />
      <FinalCTA />
    </>
  );
}
