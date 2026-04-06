// Reusable JSON-LD structured data component
// Usage: <JsonLd data={schemaObject} />

interface JsonLdProps {
  data: Record<string, unknown>
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ── Schema Helpers ─────────────────────────────────────────────────────────────

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://www.regaliaestates.in/#organization',
    name: 'Regalia Estates',
    alternateName: 'Regalia Estates Lucknow',
    url: 'https://www.regaliaestates.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.regaliaestates.in/logo.png',
      width: 200,
      height: 60,
    },
    image: 'https://www.regaliaestates.in/og-image.jpg',
    description:
      'Lucknow\'s most trusted real estate broking firm since 2009. Specialising in premium residential and commercial properties across Gomti Nagar, Hazratganj, Shaheed Path and more.',
    foundingDate: '2009',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 40 },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12, Shahnajaf Road, Near GPO',
      addressLocality: 'Hazratganj',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.8503,
      longitude: 80.9480,
    },
    telephone: '+91-98765-43210',
    email: 'info@regaliaestates.in',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '17:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-98765-43210',
        contactType: 'sales',
        areaServed: 'IN-UP',
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-98765-43211',
        contactType: 'customer service',
        areaServed: 'IN-UP',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    sameAs: [
      'https://www.facebook.com/regaliaestates',
      'https://www.instagram.com/regaliaestates',
      'https://twitter.com/RegaliaEstates',
      'https://www.youtube.com/@RegaliaEstates',
    ],
    hasMap: 'https://maps.google.com/?q=Regalia+Estates+Hazratganj+Lucknow',
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Bank Transfer, Cheque',
    areaServed: {
      '@type': 'City',
      name: 'Lucknow',
      containedInPlace: {
        '@type': 'State',
        name: 'Uttar Pradesh',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '847',
      bestRating: '5',
      worstRating: '1',
    },
    award: 'Best Real Estate Broker — India Property Awards 2023',
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.regaliaestates.in/#website',
    url: 'https://www.regaliaestates.in',
    name: 'Regalia Estates',
    description: 'Premium Real Estate in Lucknow — Buy, Sell, Rent',
    publisher: { '@id': 'https://www.regaliaestates.in/#organization' },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.regaliaestates.in/properties?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-IN',
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function propertySchema(property: {
  title: string
  description: string
  price: string
  location: string
  area: string
  bedrooms: number
  bathrooms: number
  status: string
  id: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: property.title,
    description: property.description,
    url: `https://www.regaliaestates.in/properties/${property.id}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.location.split(',')[0].trim(),
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.area.replace(/[^0-9,]/g, '').replace(',', ''),
      unitCode: 'FTK',
    },
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'INR',
      availability:
        property.status === 'Ready to Move'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/PreOrder',
      seller: { '@id': 'https://www.regaliaestates.in/#organization' },
    },
  }
}
