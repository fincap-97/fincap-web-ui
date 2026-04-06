import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JsonLd, { breadcrumbSchema, propertySchema } from '@/components/JsonLd'
import PropertyDetailClient from './PropertyDetailClient'
import { properties } from '@/lib/data'

// ── Dynamic Metadata ───────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const property = properties.find((p) => p.id === params.id)

  if (!property) {
    return {
      title: 'Property Not Found',
      description: 'This property listing does not exist.',
    }
  }

  const title = `${property.title} in ${property.location} — ${property.price}`
  const description = `${property.bedrooms > 0 ? `${property.bedrooms}BHK ` : ''}${property.category} for ${property.type === 'rent' ? 'rent' : 'sale'} in ${property.location}. ${property.area} | ${property.status} | ${property.price}. ${property.description.slice(0, 100)}...`

  return {
    title,
    description,
    keywords: [
      `${property.category} in ${property.location.split(',')[0]}`,
      `${property.bedrooms > 0 ? `${property.bedrooms}BHK` : property.category} Lucknow`,
      `${property.location.split(',')[0]} property`,
      `${property.type === 'rent' ? 'flat for rent' : 'flat for sale'} ${property.location.split(',')[0]}`,
      `${property.status} property Lucknow`,
      property.developer ? `${property.developer} Lucknow` : '',
    ].filter(Boolean),
    alternates: {
      canonical: `/properties/${property.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.regaliaestates.in/properties/${property.id}`,
      type: 'website',
      siteName: 'Regalia Estates',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

// ── Static Params for SSG ──────────────────────────────────────────────────────
export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }))
}

// ── Page Component ─────────────────────────────────────────────────────────────
export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id)
  if (!property) notFound()

  return (
    <>
      {/* Property structured data */}
      <JsonLd data={propertySchema(property)} />

      {/* Breadcrumb schema */}
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: 'https://www.regaliaestates.in' },
        { name: 'Properties', url: 'https://www.regaliaestates.in/properties' },
        { name: property.title, url: `https://www.regaliaestates.in/properties/${property.id}` },
      ])} />

      {/* Client-side interactive detail page */}
      <PropertyDetailClient propertyId={params.id} />
    </>
  )
}
