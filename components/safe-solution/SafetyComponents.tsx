'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  FileText,
  Gauge,
  Loader2,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  distributorProcess,
  floorCareProcess,
  performanceMetrics,
  productClaimFootnote,
  productSystem,
  safeSolutionRoutes,
  safeSolutionSummary,
  safetyBenefits,
  technicalDocuments,
} from '@/lib/data/safe-solution';

const cardIcons = [ShieldCheck, Gauge, Sparkles];

export function ProductSystemCard({
  item,
  index,
  detailed = false,
}: {
  item: (typeof productSystem)[number];
  index: number;
  detailed?: boolean;
}) {
  const Icon = cardIcons[index] ?? ShieldCheck;

  return (
    <div className="group h-full rounded-2xl glass border border-teal/15 p-5 sm:p-7 hover:border-teal/35 transition-all card-hover">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-teal group-hover:text-aqua transition-colors" />
        </div>
        <div>
          <h3 className="font-sora font-bold text-soft-white text-xl">{item.name}</h3>
          <p className="font-inter text-copper text-sm mt-1">{item.subtitle}</p>
        </div>
      </div>

      {detailed ? (
        <ul className="space-y-3">
          {item.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
              <span className="font-inter text-soft-white/60 text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-inter text-soft-white/55 text-sm leading-relaxed">{item.shortLabel}</p>
      )}
    </div>
  );
}

export function NewProductSpotlight() {
  return (
    <section className="relative py-14 sm:py-20 bg-navy overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(217,104,58,0.12), transparent 60%)' }} />
      <Container>
        <ScrollReveal>
          <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center rounded-3xl border border-copper/25 bg-gradient-to-br from-copper/14 via-teal/8 to-white/[0.03] p-6 sm:p-8 lg:p-10 overflow-hidden">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/15 border border-copper/30 text-copper text-xs font-inter font-bold uppercase tracking-[0.25em] mb-5">
                {safeSolutionSummary.eyebrow}
              </span>
              <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-soft-white leading-tight mb-5">
                Safe Solution® <span className="gradient-text">Floor Safety System</span>
              </h2>
              <p className="font-inter text-soft-white/65 text-base sm:text-lg leading-relaxed max-w-2xl mb-7">
                {safeSolutionSummary.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={safeSolutionRoutes.detail} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold text-sm hover:shadow-glow-teal transition-all">
                  Explore the Complete System <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={safeSolutionRoutes.distributor} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-copper/35 text-copper font-sora font-semibold text-sm hover:bg-copper/10 transition-all">
                  Become a Distributor <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[280px] rounded-3xl border border-white/10 bg-navy/55 p-5 overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="relative h-full flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-teal/15 border border-teal/25 flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-aqua" />
                  </div>
                  <span className="text-xs font-inter text-soft-white/40 uppercase tracking-widest">Commercial Floor Care</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {productSystem.map((item, index) => (
                    <div key={item.name} className="rounded-2xl bg-white/5 border border-white/10 p-3 min-h-32">
                      <p className="font-sora font-bold text-soft-white text-sm">{item.name}</p>
                      <p className="font-inter text-soft-white/45 text-xs mt-2 leading-relaxed">{item.shortLabel}</p>
                      <div className={`mt-4 h-1 rounded-full ${index === 0 ? 'bg-copper' : index === 1 ? 'bg-teal' : 'bg-aqua'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export function ProductSystemSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`relative ${compact ? 'py-12' : 'py-16 sm:py-20'} bg-navy`}>
      <Container>
        <SectionHeading
          eyebrow="Three-Part Product System"
          title="Safe Solution®, CRS™ and <span class='gradient-text'>Clean Step™</span>"
          subtitle="The system combines initial treatment, residue control, scheduled inspection, and rejuvenation instead of presenting floor safety as a one-time application."
          className="mb-10 sm:mb-14"
        />
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {productSystem.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.08} className="h-full">
              <ProductSystemCard item={item} index={index} detailed={!compact} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function MetricsAndBenefitsSection() {
  return (
    <section className="py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
      <Container>
        <SectionHeading
          eyebrow="Commercial Floor-Safety Benefits"
          title="Carefully Qualified <span class='gradient-text'>Safety and Maintenance Value</span>"
          subtitle="The program is presented with appropriate qualifiers because performance, maintenance, insurance, and financial outcomes depend on the surface, site conditions, documentation, and insurer."
          className="mb-10"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {safetyBenefits.map((benefit) => (
            <div key={benefit} className="glass border border-teal/10 rounded-2xl p-5 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
              <p className="font-inter text-soft-white/65 text-sm leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {performanceMetrics.map((metric) => (
            <MetricCard key={metric.value} value={metric.value} label={metric.label} />
          ))}
        </div>
        <p className="font-inter text-soft-white/35 text-xs leading-relaxed mt-6">{productClaimFootnote}</p>
      </Container>
    </section>
  );
}

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
      <p className="font-sora font-bold text-2xl text-aqua mb-2">{value}</p>
      <p className="font-inter text-soft-white/55 text-xs leading-relaxed">{label}</p>
    </div>
  );
}

export function SafetyNotice({ children, tone = 'teal' }: { children: React.ReactNode; tone?: 'teal' | 'copper' }) {
  const color = tone === 'copper' ? 'border-copper/25 bg-copper/8 text-copper' : 'border-teal/25 bg-teal/8 text-aqua';
  return (
    <div className={`rounded-2xl border p-5 ${color}`}>
      <p className="font-inter text-sm leading-relaxed text-soft-white/70">{children}</p>
    </div>
  );
}

export function ProcessTimeline({ items = floorCareProcess }: { items?: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={item} className="relative rounded-2xl glass border border-teal/10 p-5">
          <span className="font-sora font-bold text-4xl text-teal/20">{String(index + 1).padStart(2, '0')}</span>
          <p className="font-sora font-semibold text-soft-white mt-3">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function DocumentCard({ title, status }: { title: string; status: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex items-start gap-3">
      <FileText className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-sora font-semibold text-soft-white text-sm">{title}</p>
        <p className="font-inter text-soft-white/45 text-xs mt-1">{status}</p>
      </div>
    </div>
  );
}

export function DocumentsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {technicalDocuments.map((doc) => (
        <DocumentCard key={doc.title} title={doc.title} status={doc.status} />
      ))}
    </div>
  );
}

export function DistributorCTA({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`${compact ? 'py-10' : 'py-16 sm:py-20'} bg-navy`}>
      <Container>
        <div className="rounded-3xl border border-copper/30 bg-gradient-to-br from-copper/15 via-teal/10 to-white/[0.03] p-6 sm:p-8 lg:p-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/15 border border-copper/30 text-copper text-xs font-inter font-bold uppercase tracking-[0.25em] mb-4">
            Territory Opportunity
          </span>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-soft-white mb-4">
            Distributors Wanted Worldwide
          </h2>
          <p className="font-inter text-soft-white/65 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-7">
            We are seeking qualified commercial cleaning companies, safety-product suppliers, flooring specialists, facilities-service providers, and established B2B distributors to represent the Safe Solution® Floor Safety System in new markets.
          </p>
          <Link href={safeSolutionRoutes.distributor} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-copper to-[#E88B4A] text-white font-sora font-bold hover:brightness-110 transition-all">
            Apply for Your Territory <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function FinalConversionPanels() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <Link href={safeSolutionRoutes.floorAssessment} className="group rounded-3xl glass border border-teal/20 p-7 hover:border-teal/40 transition-all">
        <ClipboardCheck className="w-9 h-9 text-teal mb-5" />
        <h3 className="font-sora font-bold text-soft-white text-2xl mb-3">Request a Commercial Floor Assessment</h3>
        <p className="font-inter text-soft-white/55 text-sm leading-relaxed mb-5">Tell us about your facility, surface type, and current floor-safety concern.</p>
        <span className="inline-flex items-center gap-2 text-aqua font-inter font-semibold text-sm">Request Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
      </Link>
      <Link href={safeSolutionRoutes.distributor} className="group rounded-3xl glass border border-copper/25 p-7 hover:border-copper/45 transition-all">
        <Users className="w-9 h-9 text-copper mb-5" />
        <h3 className="font-sora font-bold text-soft-white text-2xl mb-3">Become a Safe Solution® Distributor</h3>
        <p className="font-inter text-soft-white/55 text-sm leading-relaxed mb-5">Apply to represent Safe Solution®, CRS™, Clean Step™, and the Floor Care Safety Program in your market.</p>
        <span className="inline-flex items-center gap-2 text-copper font-inter font-semibold text-sm">Start Distributor Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
      </Link>
    </div>
  );
}

type DistributorFormState = Record<string, string | boolean | string[]>;

const interestOptions = ['Safe Solution®', 'CRS™', 'Clean Step™', 'Complete Floor Care Safety Program'];

export function DistributorApplicationForm() {
  const [form, setForm] = useState<DistributorFormState>({
    interests: [],
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const update = (key: string, value: string | boolean | string[]) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleInterest = (interest: string) => {
    const current = Array.isArray(form.interests) ? form.interests : [];
    update('interests', current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest]);
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    const details = [
      `Inquiry type: Distributor Application`,
      `Product: Safe Solution® Floor Safety System`,
      `Applicant job title: ${form.jobTitle || ''}`,
      `Company website: ${form.website || ''}`,
      `City: ${form.city || ''}`,
      `Requested territory: ${form.territory || ''}`,
      `Years in operation: ${form.years || ''}`,
      `Industries served: ${form.industries || ''}`,
      `Current product lines: ${form.productLines || ''}`,
      `Sales-team size: ${form.salesTeamSize || ''}`,
      `Existing reseller/dealer network: ${form.network || ''}`,
      `Warehousing capability: ${form.warehousing || ''}`,
      `Technical/service capability: ${form.technicalCapability || ''}`,
      `Main customer types: ${form.customerTypes || ''}`,
      `Markets currently served: ${form.markets || ''}`,
      `Product interest: ${Array.isArray(form.interests) ? form.interests.join(', ') : ''}`,
      `Expected annual opportunity: ${form.annualOpportunity || ''}`,
      `Company-profile link or note: ${form.profileLink || ''}`,
      `Additional message: ${form.message || ''}`,
    ].join('\n');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          companyName: form.companyName,
          email: form.email,
          phone: form.phone,
          country: form.country,
          website: form.website || undefined,
          businessType: 'Distributor',
          inquiryCategory: 'Partnership',
          productOrServiceNeeded: 'Safe Solution® Floor Safety System - Distributor Application',
          targetMarket: form.territory,
          quantityOrVolume: form.annualOpportunity,
          message: details,
          consent: form.consent === true,
          source: 'partnership',
        }),
      });
      const data = await response.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const fieldClass = 'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-soft-white text-sm font-inter placeholder:text-soft-white/30 focus:outline-none focus:border-teal/50';
  const labelClass = 'block font-inter text-soft-white/70 text-xs font-medium mb-1.5 tracking-wide uppercase';

  if (status === 'success') {
    return (
      <div className="rounded-3xl glass border border-teal/20 p-8 text-center">
        <CheckCircle className="w-12 h-12 text-teal mx-auto mb-4" />
        <h3 className="font-sora font-bold text-2xl text-soft-white mb-2">Distributor Application Received</h3>
        <p className="font-inter text-soft-white/60">Thank you. Yuvaan International will review your territory and capability details.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl glass border border-teal/15 p-5 sm:p-8 space-y-5">
      {status === 'error' && <p className="rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm p-4">Please review the required fields and try again.</p>}
      <div className="grid md:grid-cols-2 gap-5">
        {[
          ['fullName', 'Applicant full name *'],
          ['jobTitle', 'Job title'],
          ['companyName', 'Company name *'],
          ['email', 'Business email *'],
          ['phone', 'Telephone or WhatsApp *'],
          ['website', 'Company website'],
          ['country', 'Country *'],
          ['city', 'City'],
          ['territory', 'Requested territory *'],
          ['years', 'Years in operation'],
          ['industries', 'Industries served'],
          ['productLines', 'Current product lines'],
          ['salesTeamSize', 'Sales-team size'],
          ['network', 'Existing reseller or dealer network'],
          ['warehousing', 'Warehousing capability'],
          ['technicalCapability', 'Technical or service capability'],
          ['customerTypes', 'Main customer types'],
          ['markets', 'Markets currently served'],
          ['annualOpportunity', 'Expected annual opportunity'],
          ['profileLink', 'Company-profile link or note'],
        ].map(([key, label]) => (
          <div key={key}>
            <label className={labelClass}>{label}</label>
            <input
              required={label.includes('*')}
              value={String(form[key] || '')}
              onChange={(event) => update(key, event.target.value)}
              className={fieldClass}
            />
          </div>
        ))}
      </div>

      <div>
        <p className={labelClass}>Product interest</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {interestOptions.map((interest) => (
            <label key={interest} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3 cursor-pointer">
              <input type="checkbox" checked={Array.isArray(form.interests) && form.interests.includes(interest)} onChange={() => toggleInterest(interest)} className="accent-teal" />
              <span className="font-inter text-soft-white/70 text-sm">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>Additional message *</label>
        <textarea
          required
          rows={5}
          value={String(form.message || '')}
          onChange={(event) => update('message', event.target.value)}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us about your company, territory, customer base, and why you are interested in Safe Solution®."
        />
      </div>

      <p className="font-inter text-soft-white/45 text-xs leading-relaxed">
        Uploads are not supported by the current backend. Please provide a company-profile link above or mention that a profile can be sent after initial contact.
      </p>

      <label className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4 cursor-pointer">
        <input required type="checkbox" checked={form.consent === true} onChange={(event) => update('consent', event.target.checked)} className="mt-1 accent-teal" />
        <span className="font-inter text-soft-white/60 text-sm leading-relaxed">I agree to be contacted about this distributor application and understand territory opportunities are subject to review.</span>
      </label>

      <button disabled={status === 'loading'} className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold disabled:opacity-60">
        {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        Apply for Your Territory
      </button>
    </form>
  );
}

export function DistributorProcessTimeline() {
  return <ProcessTimeline items={distributorProcess} />;
}
