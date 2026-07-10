import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import connectDB from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';
import { sendInquiryEmail } from '@/lib/mailer';

const inquirySchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  companyName: z.string().min(1, 'Company name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(7, 'Phone number is required'),
  country: z.string().min(1, 'Country is required'),
  website: z.string().optional(),
  businessType: z.string().min(1, 'Business type is required'),
  inquiryCategory: z.string().min(1, 'Inquiry category is required'),
  productOrServiceNeeded: z.string().min(2, 'Product/service details are required'),
  quantityOrVolume: z.string().optional(),
  targetMarket: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine((v) => v === true, 'You must agree to be contacted'),
  source: z.enum(['contact', 'product-modal', 'homepage', 'partnership', 'industries']).default('contact'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    await connectDB();

    const inquiry = await Inquiry.create(parsed.data);

    // Send email notification
    try {
      await sendInquiryEmail(parsed.data);
    } catch (emailErr) {
      console.error('Email send failed:', emailErr);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully', id: inquiry._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Inquiry API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
