import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, Globe, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import InquiryForm from '@/components/forms/InquiryForm';
import { siteContent } from '@/lib/data/site-content';
import { company, targetMarketCountLabel } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Contact | Complete Your Trade Inquiry | YUVAAN INTERNATIONAL',
  description: 'Submit your trade inquiry to YUVAAN INTERNATIONAL. Whether you are a manufacturer, investor, government agency, or business partner — our team will respond promptly.',
};

const { contact } = siteContent;
const inquiryPaths = [
  { label: 'General Business Inquiry', href: '/contact?inquiry=general#inquiry-form' },
  { label: 'Product Inquiry', href: '/contact?inquiry=product#inquiry-form' },
  { label: 'Request a Floor Assessment', href: '/contact?inquiry=floor-assessment&product=safe-solution#inquiry-form' },
  { label: 'Distributor Application', href: '/contact?inquiry=distributor&product=safe-solution#inquiry-form' },
  { label: 'Partnership Inquiry', href: '/contact?inquiry=partnership#inquiry-form' },
  { label: 'Investment or Project Inquiry', href: '/contact?inquiry=investment#inquiry-form' },
];

function InquiryFormShell() {
  return (
    <div className="space-y-5" aria-label="Inquiry form loading">
      <div className="grid sm:grid-cols-2 gap-5">
        {['Full name *', 'Company name *', 'Business email *', 'Phone or WhatsApp *'].map((label) => (
          <div key={label}>
            <label className="block font-inter text-soft-white/70 text-xs font-medium mb-1.5 tracking-wide uppercase">{label}</label>
            <div className="h-12 rounded-xl bg-white/5 border border-white/10" />
          </div>
        ))}
      </div>
      <div>
        <label className="block font-inter text-soft-white/70 text-xs font-medium mb-1.5 tracking-wide uppercase">Message *</label>
        <div className="h-28 rounded-xl bg-white/5 border border-white/10" />
      </div>
    </div>
  );
}

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
                {contact.heading.split(' ').slice(0, 3).join(' ')}{' '}
                <span className="gradient-text">{contact.heading.split(' ').slice(3).join(' ')}</span>
              </h1>
              <p className="font-inter text-soft-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-2">
                {contact.subheading}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <Container>
          <div className="mb-12">
            <ScrollReveal>
              <div className="glass border border-teal/15 rounded-3xl p-6 sm:p-8">
                <h2 className="font-sora font-bold text-2xl text-soft-white mb-4">Choose Your Inquiry Path</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {inquiryPaths.map((path) => (
                    <Link key={path.href} href={path.href} className="group rounded-2xl bg-white/5 border border-white/10 hover:border-teal/30 p-4 flex items-center justify-between transition-all">
                      <span className="font-inter text-soft-white/70 text-sm">{path.label}</span>
                      <ArrowRight className="w-4 h-4 text-teal group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="left">
                <div className="space-y-5 lg:sticky lg:top-28">

                  {/* Contact info */}
                  <div className="glass border border-teal/20 rounded-2xl p-7">
                    <h2 className="font-sora font-bold text-xl text-soft-white mb-6">Contact Information</h2>
                    <div className="space-y-5">
                      <a href={`tel:${company.publicPhoneTel}`} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                          <Phone className="w-4 h-4 text-teal" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-soft-white/40 tracking-widest uppercase mb-1">Phone</p>
                          <p className="font-inter text-soft-white group-hover:text-aqua transition-colors">{company.publicPhoneDisplay}</p>
                        </div>
                      </a>

                      <a href={`mailto:${company.publicEmail}`} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                          <Mail className="w-4 h-4 text-teal" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-soft-white/40 tracking-widest uppercase mb-1">Email</p>
                          <p className="font-inter text-soft-white text-sm group-hover:text-aqua transition-colors break-all">{company.publicEmail}</p>
                        </div>
                      </a>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4 text-teal" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-soft-white/40 tracking-widest uppercase mb-1">Headquarters</p>
                          <p className="font-inter text-soft-white">{company.locationDisplay}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                          <Globe className="w-4 h-4 text-teal" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-soft-white/40 tracking-widest uppercase mb-1">Market Focus</p>
                          <p className="font-inter text-soft-white">{targetMarketCountLabel}</p>
                          <p className="font-inter text-soft-white/50 text-sm">International market development</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What happens next */}
                  <div className="glass border border-white/5 rounded-2xl p-7">
                    <h3 className="font-sora font-semibold text-soft-white text-base mb-4">What Happens Next?</h3>
                    <div className="space-y-4">
                      {[
                        'Your inquiry is reviewed by our team',
                        'We assess trade and project pathway opportunities',
                        'We contact you to discuss next steps',
                        'We coordinate and facilitate the opportunity',
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

                  {/* Partnership types hint */}
                  <div className="glass border border-copper/15 rounded-2xl p-6">
                    <p className="font-inter text-xs text-soft-white/40 uppercase tracking-widest mb-3">We Work With</p>
                    <div className="flex flex-wrap gap-2">
                      {['Manufacturers', 'Investors', 'Importers', 'Exporters', 'Governments', 'Developers'].map(t => (
                        <span key={t} className="text-xs font-inter text-copper/80 bg-copper/5 px-2.5 py-1 rounded-full border border-copper/15">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2" id="inquiry-form">
              <ScrollReveal direction="right">
                <div className="glass border border-teal/15 rounded-3xl p-6 sm:p-8 md:p-10">
                  <h2 className="font-sora font-bold text-2xl text-soft-white mb-2">{contact.meetingCta}</h2>
                  <p className="font-inter text-soft-white/50 text-sm mb-8 leading-relaxed">
                    Fill in your details below. All fields marked with * are required.
                  </p>
                  <Suspense fallback={<InquiryFormShell />}>
                    <InquiryForm source="contact" />
                  </Suspense>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
