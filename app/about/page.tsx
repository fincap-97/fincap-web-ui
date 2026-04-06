import type { Metadata } from 'next'
import JsonLd, { breadcrumbSchema } from '@/components/JsonLd'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us — 15 Years of Real Estate Excellence in Lucknow',
  description:
    'Fincap sol ke baare mein jaanein. 2009 mein founded, 2500+ families served, ₹500 Cr+ deals closed. Meet our expert team of property advisors in Lucknow.',
  keywords: [
    'about Fincap sol', 'real estate company Lucknow', 'property broker Lucknow',
    'best property dealer Lucknow', 'Lucknow real estate experts',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Fincap sol | 15 Years of Real Estate Excellence in Lucknow',
    description: 'Founded in 2009, Fincap sol is Lucknow\'s most trusted real estate advisory. 2500+ families served. Award-winning team.',
    url: 'https://www.regaliaestates.in/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: 'https://www.regaliaestates.in' },
        { name: 'About Us', url: 'https://www.regaliaestates.in/about' },
      ])} />
      <AboutClient />
    </>
  )
}
