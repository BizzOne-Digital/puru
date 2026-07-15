import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Terms of Use | Yuvaan International',
  description: 'Website terms and product disclaimer for Yuvaan International.',
  alternates: { canonical: '/terms-of-use' },
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-navy pt-32 pb-20">
      <Container size="md">
        <h1 className="font-sora font-bold text-4xl text-soft-white mb-6">Terms of Use</h1>
        <div className="space-y-5 font-inter text-soft-white/60 leading-relaxed">
          <p>Information on this website is provided for general business inquiry purposes and does not create a binding supply, distribution, investment, warranty, insurance, or partnership commitment.</p>
          <p>Product availability, territory availability, program eligibility, surface suitability, test-area results, performance, maintenance intervals, pricing, and documentation requirements vary by use case and must be reviewed before any commercial commitment.</p>
          <p>Safe Solution®, CRS™, and Clean Step™ are trademarks of their respective owner. No technical certification, laboratory result, insurer outcome, or financial result is guaranteed by website content alone.</p>
        </div>
      </Container>
    </main>
  );
}
