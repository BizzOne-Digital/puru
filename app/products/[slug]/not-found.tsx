import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <Container size="sm">
        <div className="text-center">
          <p className="font-inter text-copper text-xs tracking-[0.3em] uppercase mb-4">404</p>
          <h1 className="font-sora font-bold text-3xl sm:text-4xl text-soft-white mb-4">Product Not Found</h1>
          <p className="font-inter text-soft-white/55 text-base mb-8">
            This product category doesn&apos;t exist or may have been moved.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-semibold font-inter"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </Container>
    </div>
  );
}
