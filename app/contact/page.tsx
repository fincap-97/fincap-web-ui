import type { Metadata } from 'next'
import JsonLd, { breadcrumbSchema } from '@/components/JsonLd'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us — Real Estate Consultation in Lucknow',
  description:
    'Fincap Adviser se contact karein. Office: 12, Shahnajaf Road, Hazratganj, Lucknow. Call +91 98765 43210 ya WhatsApp karein. Free property consultation available.',
  keywords: [
    'contact Fincap Adviser', 'real estate office Lucknow', 'property consultation Lucknow',
    'Hazratganj property office', 'Lucknow property helpline',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Fincap Adviser | Free Property Consultation Lucknow',
    description: 'Visit us at Hazratganj, Lucknow. Call +91 98765 43210 or WhatsApp. Free consultation, zero commission from buyers.',
    url: 'https://fincapsol.co.in//contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: 'https://fincapsol.co.in' },
        { name: 'Contact Us', url: 'https://fincapsol.co.in//contact' },
      ])} />
      <ContactClient />
    </>
  )
}
