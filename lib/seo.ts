// lib/seo.ts — Centralised SEO helpers

export const SITE = {
  name: 'Regalia Estates',
  url: 'https://www.regaliaestates.in',
  phone: '+91-98765-43210',
  email: 'info@regaliaestates.in',
  address: '12, Shahnajaf Road, Hazratganj, Lucknow — 226001',
  city: 'Lucknow',
  state: 'Uttar Pradesh',
  country: 'India',
  lat: 26.8503,
  lng: 80.9480,
  twitter: '@RegaliaEstates',
  founded: '2009',
}

/**
 * Builds a canonical URL for a given path
 */
export function canonical(path: string): string {
  return `${SITE.url}${path.startsWith('/') ? path : '/' + path}`
}

/**
 * Builds a page title using brand suffix
 */
export function pageTitle(title: string): string {
  return `${title} | ${SITE.name} — Lucknow`
}

/**
 * Truncates a string for use in meta description (max 155 chars)
 */
export function metaDesc(text: string, max = 155): string {
  if (text.length <= max) return text
  return text.slice(0, max - 3).trimEnd() + '...'
}

/**
 * Generates an array of keywords for a property listing
 */
export function propertyKeywords(
  title: string,
  location: string,
  category: string,
  bedrooms: number,
  type: string
): string[] {
  const city = location.split(',')[0].trim()
  const bhk = bedrooms > 0 ? `${bedrooms}BHK ` : ''
  return [
    `${bhk}${category} in ${city}`,
    `${type === 'rent' ? 'flat for rent' : 'flat for sale'} ${city}`,
    `${category} ${city} Lucknow`,
    `${title}`,
    `property in ${city}`,
    `${city} real estate`,
    `Lucknow property`,
  ]
}

/**
 * Generates keywords for a location page
 */
export function locationKeywords(name: string): string[] {
  return [
    `${name} property`,
    `${name} apartments`,
    `${name} real estate`,
    `buy property ${name}`,
    `flat for sale ${name}`,
    `${name} Lucknow property price`,
    `new projects ${name}`,
    `resale property ${name}`,
    `${name} locality Lucknow`,
  ]
}

/**
 * Article/blog structured data schema helper
 */
export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/logo.png`,
      },
    },
    image: image || `${SITE.url}/og-image.jpg`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}

/**
 * Review schema for testimonials
 */
export function reviewSchema(reviews: { name: string; rating: number; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: r.text,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue:
        (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
      reviewCount: reviews.length,
      bestRating: 5,
    },
  }
}

/**
 * Generates next/image default sizes attribute for responsive images
 */
export const IMG_SIZES = {
  hero: '100vw',
  card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  thumbnail: '(max-width: 640px) 25vw, 10vw',
  full: '(max-width: 1280px) 100vw, 1280px',
}
