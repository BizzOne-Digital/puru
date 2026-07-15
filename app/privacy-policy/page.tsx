import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy | Yuvaan International',
  description: 'Privacy information for Yuvaan International website inquiries and contact forms.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-navy pt-32 pb-20">
      <Container size="md">
        <h1 className="font-sora font-bold text-4xl text-soft-white mb-6">Privacy Policy</h1>
        <div className="space-y-5 font-inter text-soft-white/60 leading-relaxed">
          <p>Yuvaan International collects inquiry information submitted through website forms so the team can review business, product, distributor, partnership, investment, and project requests.</p>
          <p>Submitted information may include contact details, company information, territory interests, product interests, and message details. This information is used to respond to inquiries and evaluate commercial fit.</p>
          <p>Do not submit confidential, regulated, or sensitive information unless requested through an approved business process. If you need information corrected or removed, contact Yuvaan International through the contact page.</p>
        </div>
      </Container>
    </main>
  );
}
