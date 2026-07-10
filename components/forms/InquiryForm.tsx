'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, AlertCircle, Send, Loader2 } from 'lucide-react';

const schema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  companyName: z.string().min(1, 'Company name is required'),
  email: z.string().email('Valid email address is required'),
  phone: z.string().min(7, 'Phone number is required'),
  country: z.string().min(1, 'Country is required'),
  website: z.string().optional(),
  businessType: z.string().min(1, 'Please select a business type'),
  inquiryCategory: z.string().min(1, 'Please select an inquiry category'),
  productOrServiceNeeded: z.string().min(2, 'Please describe what you need'),
  quantityOrVolume: z.string().optional(),
  targetMarket: z.string().optional(),
  message: z.string().min(10, 'Please provide at least 10 characters'),
  consent: z.boolean().refine((v) => v === true, 'You must agree to be contacted'),
});

type FormData = z.infer<typeof schema>;

interface InquiryFormProps {
  source?: 'contact' | 'product-modal' | 'homepage' | 'partnership' | 'industries';
  prefilledProduct?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

const businessTypes = ['Importer', 'Exporter', 'Manufacturer', 'Wholesaler', 'Distributor', 'Industrial Machinery Buyer', 'Product Supplier', 'Project Partner', 'Other'];
const inquiryCategories = ['Import', 'Export', 'Product Sourcing', 'Industrial Machinery', 'Wholesale / Distribution', 'Manufacturing', 'Partnership', 'Infrastructure / Project Opportunity', 'Other'];

export default function InquiryForm({ source = 'contact', prefilledProduct = '', onSuccess, compact = false }: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      productOrServiceNeeded: prefilledProduct,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source }),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitStatus('success');
        reset();
        onSuccess?.();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-teal/20 border border-teal/30 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-teal" />
        </div>
        <h3 className="font-sora font-bold text-2xl text-soft-white mb-3">Inquiry Received</h3>
        <p className="font-inter text-soft-white/60 text-base leading-relaxed max-w-sm">
          Thank you. Your inquiry has been received. Our team will review your details and contact you shortly.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="mt-8 text-sm text-aqua font-inter hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const fieldClass = `w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-soft-white text-sm font-inter placeholder:text-soft-white/30 focus:outline-none focus:border-teal/50 focus:bg-white/8 transition-all`;
  const errorClass = `mt-1.5 text-xs text-red-400 font-inter flex items-center gap-1`;
  const labelClass = `block font-inter text-soft-white/70 text-xs font-medium mb-1.5 tracking-wide uppercase`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {submitStatus === 'error' && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <p className="text-red-400 text-sm font-inter">Something went wrong. Please try again.</p>
        </div>
      )}

      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-5`}>
        {/* Full Name */}
        <div>
          <label className={labelClass}>Full Name *</label>
          <input {...register('fullName')} placeholder="Your full name" className={fieldClass} />
          {errors.fullName && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.fullName.message}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label className={labelClass}>Company Name *</label>
          <input {...register('companyName')} placeholder="Your company name" className={fieldClass} />
          {errors.companyName && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.companyName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Email Address *</label>
          <input {...register('email')} type="email" placeholder="you@company.com" className={fieldClass} />
          {errors.email && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input {...register('phone')} type="tel" placeholder="+1 (555) 000-0000" className={fieldClass} />
          {errors.phone && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.phone.message}</p>}
        </div>

        {/* Country */}
        <div>
          <label className={labelClass}>Country *</label>
          <input {...register('country')} placeholder="Your country" className={fieldClass} />
          {errors.country && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.country.message}</p>}
        </div>

        {/* Website */}
        <div>
          <label className={labelClass}>Website <span className="text-soft-white/30 normal-case">(optional)</span></label>
          <input {...register('website')} type="url" placeholder="https://yourcompany.com" className={fieldClass} />
        </div>

        {/* Business Type */}
        <div>
          <label className={labelClass}>Business Type *</label>
          <select {...register('businessType')} className={`${fieldClass} [&>option]:bg-navy`}>
            <option value="">Select business type</option>
            {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.businessType && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.businessType.message}</p>}
        </div>

        {/* Inquiry Category */}
        <div>
          <label className={labelClass}>Inquiry Category *</label>
          <select {...register('inquiryCategory')} className={`${fieldClass} [&>option]:bg-navy`}>
            <option value="">Select category</option>
            {inquiryCategories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.inquiryCategory && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.inquiryCategory.message}</p>}
        </div>
      </div>

      {/* Product / Service Needed */}
      <div>
        <label className={labelClass}>Product / Service Needed *</label>
        <input {...register('productOrServiceNeeded')} placeholder="Describe the product, machinery, or service you need" className={fieldClass} />
        {errors.productOrServiceNeeded && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.productOrServiceNeeded.message}</p>}
      </div>

      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-5`}>
        {/* Quantity / Volume */}
        <div>
          <label className={labelClass}>Quantity / Volume <span className="text-soft-white/30 normal-case">(optional)</span></label>
          <input {...register('quantityOrVolume')} placeholder="e.g. 500 units, 10 tonnes" className={fieldClass} />
        </div>

        {/* Target Market */}
        <div>
          <label className={labelClass}>Target Market <span className="text-soft-white/30 normal-case">(optional)</span></label>
          <input {...register('targetMarket')} placeholder="e.g. Canada, USA, India" className={fieldClass} />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          {...register('message')}
          rows={compact ? 4 : 5}
          placeholder="Describe your trade requirement, what you are looking for, and any relevant details..."
          className={`${fieldClass} resize-none`}
        />
        {errors.message && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.message.message}</p>}
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
        <input
          {...register('consent')}
          type="checkbox"
          id="consent"
          className="mt-0.5 w-4 h-4 rounded border-white/20 bg-transparent accent-teal cursor-pointer"
        />
        <label htmlFor="consent" className="font-inter text-soft-white/60 text-sm leading-relaxed cursor-pointer">
          I agree to be contacted regarding this inquiry.
        </label>
      </div>
      {errors.consent && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.consent.message}</p>}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold text-base hover:shadow-glow-teal hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit Inquiry
          </>
        )}
      </button>
    </form>
  );
}
