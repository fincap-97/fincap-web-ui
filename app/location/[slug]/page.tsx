import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JsonLd, { breadcrumbSchema } from '@/components/JsonLd'
import LocationClient from './LocationClient'
import { locations } from '@/lib/data'

// ── Dynamic Metadata ───────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const location = locations.find((l) => l.slug === params.slug)

  if (!location) {
    return { title: 'Location Not Found' }
  }

  const title = `Properties in ${location.name}, Lucknow — ${location.properties}+ Listings`
  const description = `${location.properties}+ verified properties in ${location.name}, Lucknow. Avg price ${location.avgPrice}. ${location.priceChange} YoY growth. ${location.description} Find apartments, villas & plots.`

  return {
    title,
    description,
    keywords: [
      `${location.name} property`, `flat in ${location.name}`,
      `${location.name} apartments`, `${location.name} real estate`,
      `buy property ${location.name}`, `${location.name} Lucknow property price`,
      `${location.name} new projects`, `${location.name} resale property`,
    ],
    alternates: {
      canonical: `/location/${location.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.regaliaestates.in/location/${location.slug}`,
      type: 'website',
    },
  }
}

// ── Static Params for SSG ──────────────────────────────────────────────────────
export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }))
}

// ── Place Schema ──────────────────────────────────────────────────────────────
function placeSchema(location: typeof locations[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${location.name}, Lucknow`,
    description: location.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    containedInPlace: {
      '@type': 'City',
      name: 'Lucknow',
      containedInPlace: {
        '@type': 'State',
        name: 'Uttar Pradesh',
      },
    },
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = locations.find((l) => l.slug === params.slug)
  if (!location) notFound()

  return (
    <>
      <JsonLd data={placeSchema(location)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: 'https://www.regaliaestates.in' },
        { name: 'Locations', url: 'https://www.regaliaestates.in/properties' },
        { name: location.name, url: `https://www.regaliaestates.in/location/${location.slug}` },
      ])} />
      <LocationClient slug={params.slug} />
    </>
  )
}
