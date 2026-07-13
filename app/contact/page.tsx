import type { Metadata } from 'next';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import InquiryForm from '@/components/forms/InquiryForm';
import { siteContent } from '@/lib/data/site-content';

export const metadata: Metadata = {
  title: 'Contact | Complete Your Trade Inquiry | YUVAAN INTERNATIONAL',
  description: 'Submit your trade inquiry to YUVAAN INTERNATIONAL. Whether you are a manufacturer, investor, government agency, or business partner — our team will respond promptly.',
};

const { contact } = siteContent;

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
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="left">
                <div className="space-y-5 lg:sticky lg:top-28">

                  {/* Contact info */}
                  <div className="glass border border-teal/20 rounded-2xl p-7">
                    <h2 className="font-sora font-bold text-xl text-soft-white mb-6">Contact Information</h2>
                    <div className="space-y-5">
                      <a href={`tel:${contact.phone.replace(/\D/g,'')}`} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                          <Phone className="w-4 h-4 text-teal" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-soft-white/40 tracking-widest uppercase mb-1">Phone</p>
                          <p className="font-inter text-soft-white group-hover:text-aqua transition-colors">{contact.phone}</p>
                        </div>
                      </a>

                      <a href={`mailto:${contact.email}`} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                          <Mail className="w-4 h-4 text-teal" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-soft-white/40 tracking-widest uppercase mb-1">Email</p>
                          <p className="font-inter text-soft-white text-sm group-hover:text-aqua transition-colors break-all">{contact.email}</p>
                        </div>
                      </a>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4 text-teal" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-soft-white/40 tracking-widest uppercase mb-1">Headquarters</p>
                          <p className="font-inter text-soft-white">{contact.location}</p>
                          <p className="font-inter text-soft-white/50 text-sm">Canada</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                          <Globe className="w-4 h-4 text-teal" />
                        </div>
                        <div>
                          <p className="font-inter text-xs text-soft-white/40 tracking-widest uppercase mb-1">Global Presence</p>
                          <p className="font-inter text-soft-white">11+ Markets</p>
                          <p className="font-inter text-soft-white/50 text-sm">Worldwide Operations</p>
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
