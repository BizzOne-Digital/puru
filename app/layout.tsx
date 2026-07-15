import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import SiteChrome from '@/components/layout/SiteChrome';
import { company } from '@/lib/data/company';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://yuvaan-international.vercel.app'),
  title: 'YUVAAN INTERNATIONAL | Trade, Products & Partnerships',
  description: 'Yuvaan International supports cross-border product sourcing, commercial partnerships, market development, industrial solutions, and international business inquiries.',
  keywords: 'international trade, import export, industrial machinery, wholesale distribution, business partnerships, product sourcing, Canada trade',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'YUVAAN INTERNATIONAL | Trade, Products & Partnerships',
    description: 'Canada-based international trade, sourcing, products, and partnership development.',
    url: '/',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.displayName,
    url: 'https://yuvaan-international.vercel.app',
    email: company.publicEmail,
    telephone: company.publicPhoneDisplay,
    address: {
      '@type': 'PostalAddress',
      addressRegion: company.province,
      addressCountry: company.country,
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} bg-navy text-soft-white font-inter antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
