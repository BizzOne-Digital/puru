import type { Metadata } from 'next';
import { Phone, Mail, Globe, Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import InquiryForm from '@/components/forms/InquiryForm';

export const metadata: Metadata = {
  title: 'Contact | Complete Your Trade Inquiry | YUVAAN INTERNATIONAL',
  description: 'Submit your trade inquiry to YUVAAN INTERNATIONAL. Tell us what you are looking to import, export, source, distribute, or develop.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <GlobalGridBackground />
        <TradeRouteLines />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/60" />
        <Container size="md">
          <div className="relative z-10 text-center">
            <ScrollReveal>
              <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-4">Contact</span>
              <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-white leading-tight mb-5 sm:mb-6">
                Complete Your <span className="gradient-text">Trade Inquiry</span>
              </h1>
              <p className="font-inter text-soft-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-2">
                Tell us what you are looking to import, export, source, distribute, or develop. Our team will review your inquiry and get back to you.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="left">
                <div className="space-y-6 lg:sticky lg:top-28">
                  {/* Info card */}
                  <div className="glass border border-teal/20 rounded-2xl p-5 sm:p-8">
                    <h2 className="font-sora font-bold text-xl text-soft-white mb-6">Contact Information</h2>
                    <div className="space-y-5">
                      <a href="tel:+17788283610" className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                          <Phone className="w-4 h-4 text-teal" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-soft-white/40 tracking-widest uppercase mb-1">Phone</p>
                          <p className="font-inter text-soft-white group-hover:text-aqua transition-colors">(778) 828-3610</p>
                        </div>
                      </a>

                      <a href="mailto:pacifictrade2010@gmail.com" className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                          <Mail className="w-4 h-4 text-teal" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-soft-white/40 tracking-widest uppercase mb-1">Email</p>
                          <p className="font-inter text-soft-white text-sm group-hover:text-aqua transition-colors break-all">pacifictrade2010@gmail.com</p>
                        </div>
                      </a>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                          <Globe className="w-4 h-4 text-teal" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-soft-white/40 tracking-widest uppercase mb-1">Based In</p>
                          <p className="font-inter text-soft-white">Canada</p>
                          <p className="font-inter text-soft-white/50 text-sm">International Operations</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What happens card */}
                  <div className="glass border border-white/5 rounded-2xl p-7">
                    <h3 className="font-sora font-semibold text-soft-white text-base mb-4">What Happens Next?</h3>
                    <div className="space-y-4">
                      {[
                        'Your inquiry is reviewed by our team',
                        'We assess trade pathway opportunities',
                        'We contact you to discuss next steps',
                        'We coordinate the trade opportunity',
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-teal/20 border border-teal/30 flex items-center justify-center text-teal text-xs font-bold flex-shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <p className="font-inter text-soft-white/60 text-sm leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2" id="inquiry-form">
              <ScrollReveal direction="right">
                <div className="glass border border-teal/15 rounded-3xl p-5 sm:p-8 md:p-10">
                  <h2 className="font-sora font-bold text-2xl text-soft-white mb-2">Inquiry Form</h2>
                  <p className="font-inter text-soft-white/50 text-sm mb-8 leading-relaxed">
                    Fill in your details below. All fields marked with * are required.
                  </p>
                  <InquiryForm source="contact" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
