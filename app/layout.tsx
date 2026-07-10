import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import SiteChrome from '@/components/layout/SiteChrome';

export const metadata: Metadata = {
  title: 'YUVAAN INTERNATIONAL | Global Trade, Products & Partnerships',
  description: 'YUVAAN INTERNATIONAL connects importers, exporters, manufacturers, wholesalers, distributors, and industrial buyers with reliable international trade opportunities.',
  keywords: 'international trade, import export, industrial machinery, wholesale distribution, business partnerships, product sourcing, Canada trade',
  openGraph: {
    title: 'YUVAAN INTERNATIONAL | Global Trade, Products & Partnerships',
    description: 'A Canadian gateway for international trade — connecting businesses with product, supply, machinery, and partnership opportunities.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy text-soft-white font-inter antialiased">
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
