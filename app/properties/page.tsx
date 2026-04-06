import type { Metadata } from 'next'
import JsonLd, { breadcrumbSchema } from '@/components/JsonLd'
import PropertiesClient from './PropertiesClient'

export const metadata: Metadata = {
  title: 'Properties in Lucknow — Buy, Rent & New Projects',
  description:
    'Lucknow mein 200+ verified properties. New builder homes, resale apartments, villas, plots aur commercial spaces. Gomti Nagar se Sultanpur Road tak — har budget mein options. Filter by location, budget, type.',
  keywords: [
    'properties in Lucknow', 'flats for sale Lucknow', 'apartments for rent Lucknow',
    'new projects Lucknow', 'resale property Lucknow', 'buy flat Lucknow',
    '2BHK 3BHK Lucknow', 'villa for sale Lucknow', 'commercial property Lucknow',
    'Gomti Nagar apartment', 'Shaheed Path villa',
  ],
  alternates: { canonical: '/properties' },
  openGraph: {
    title: 'Properties in Lucknow | New Builder & Resale | Fincap sol',
    description: '200+ verified properties in Lucknow. Filter by location, budget, type. New launches & resale both available.',
    url: 'https://www.regaliaestates.in/properties',
  },
}

export default function PropertiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: 'https://www.regaliaestates.in' },
        { name: 'Properties', url: 'https://www.regaliaestates.in/properties' },
      ])} />
      <PropertiesClient />
    </>
  )
}
