import type { Metadata } from 'next'
import JsonLd, { localBusinessSchema, websiteSchema, faqSchema } from '@/components/JsonLd'
import { reviewSchema } from '@/lib/seo'
import { testimonials } from '@/lib/data'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Fincap sol | Your Trusted Real state Advisors in Lucknow',
  description:
    'Lucknow ki No.1 real estate firm. Buy, sell, or rent premium apartments, villas & commercial properties in Gomti Nagar, Hazratganj, Shaheed Path & more. Free consultation. 15+ years. 2500+ families served.',
  keywords: [
    'real estate Lucknow', 'property dealer Lucknow', 'flat for sale Lucknow',
    'house for rent Lucknow', 'new projects Lucknow', '3BHK Gomti Nagar',
    'best real estate broker Lucknow', 'luxury apartments Lucknow UP',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Fincap sol | Trusted Real Estate in Lucknow',
    description: 'Find your dream property in Lucknow. New builder homes & resale properties — all verified. Free consultation today.',
    url: 'https://www.regaliaestates.in',
    type: 'website',
  },
}

const HOME_FAQS = [
  {
    question: 'Fincap sol Lucknow mein kahan located hai?',
    answer: '12, Shahnajaf Road, Hazratganj, Lucknow — 226001. Mon-Sat 9AM-8PM, Sun 10AM-5PM.',
  },
  {
    question: 'Kya Fincap sol buyers se commission leta hai?',
    answer: 'Nahi. Buyers ke liye hamari advisory service bilkul free hai. Zero brokerage from buyers.',
  },
  {
    question: 'Lucknow mein konse areas mein properties available hain?',
    answer: 'Gomti Nagar, Hazratganj, Shaheed Path, Aliganj, Sultanpur Road, Vibhuti Khand, Kanpur Road, Indira Nagar aur aur bhi areas.',
  },
  {
    question: 'Kya aap new builder properties aur resale dono handle karte ho?',
    answer: 'Haan. Hamare paas naye builder projects (Godrej, Omaxe, Eldeco, ATS) aur directly owner se resale properties dono available hain.',
  },
  {
    question: 'Property registration mein kitna time lagta hai?',
    answer: 'Usually 15-30 working days. Haari legal team poora process handle karti hai stamp duty se leke registry tak.',
  },
  {
    question: 'Kya aap home loan mein help karte ho?',
    answer: 'Haan. Hum HDFC, SBI, ICICI, Axis aur 10+ banks ke saath tied up hain. Free loan eligibility check bhi available hai.',
  },
]

export default function HomePage() {
  // Map testimonials into review schema format
  const reviews = testimonials.map((t) => ({
    name: t.name,
    rating: t.rating,
    text: t.text,
  }))

  return (
    <>
      {/* ── Structured Data for Google ── */}
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <JsonLd data={reviewSchema(reviews)} />

      {/* ── Interactive Client Page ── */}
      <HomeClient />
    </>
  )
}
