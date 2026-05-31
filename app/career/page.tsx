import type { Metadata } from 'next'
import CareersClient from './Careersclient'

// ─── SEO METADATA (server component) ──────────────────────────────────────────
const SITE_URL = 'https://www.fincapsol.com'   // ⚠️ apni live domain daalo

export const metadata: Metadata = {
    title: 'Careers at FincaP — Real Estate Jobs & Business Associate Opportunities in Lucknow',
    description:
        'Build your future with FincaP (Wings of Trust). Explore full-time real estate jobs in sales, marketing, CRM & operations, or join as a Business Associate / Channel Partner in Lucknow. Competitive pay, training, incentives and flexible partnership models.',
    keywords: [
        'real estate jobs Lucknow',
        'FincaP careers',
        'real estate sales jobs',
        'business associate real estate',
        'channel partner real estate Lucknow',
        'property consultant jobs',
        'real estate marketing jobs',
        'telecalling jobs Lucknow',
        'CRM jobs real estate',
        'Wings of Trust careers',
    ],
    alternates: {
        canonical: `${SITE_URL}/careers`,
    },
    openGraph: {
        title: 'Careers at FincaP — Build Your Future in Real Estate',
        description:
            'Join FincaP as a full-time professional or an independent Business Associate. Growth, training, incentives and premium projects in Lucknow.',
        url: `${SITE_URL}/careers`,
        siteName: 'FincaP — Wings of Trust',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: `${SITE_URL}/og/careers.jpg`,   // ⚠️ ek OG image (1200x630) daal do, ya hata do
                width: 1200,
                height: 630,
                alt: 'Careers at FincaP — Wings of Trust',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Careers at FincaP — Build Your Future in Real Estate',
        description:
            'Full-time roles and Business Associate opportunities in Lucknow real estate. Apply now.',
        images: [`${SITE_URL}/og/careers.jpg`],
    },
    robots: {
        index: true,
        follow: true,
    },
}

// ─── JSON-LD structured data (helps Google show rich results) ─────────────────
const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FincaP — Wings of Trust',
    url: SITE_URL,
    description:
        'Real estate consultancy in Lucknow offering full-time careers and Business Associate / Channel Partner opportunities.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lucknow',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
    },
}

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
            />
            <CareersClient />
        </>
    )
}