import type { Metadata } from 'next'
import JsonLd, { breadcrumbSchema } from '@/components/JsonLd'
import SellClient from './SellClient'

export const metadata: Metadata = {
  title: 'Sell Your Property in Lucknow — Free Valuation & Maximum Price',
  description:
    'Lucknow mein apni property bechna chahte hain? Regalia Estates ke saath best price guaranteed. Free property valuation, 5000+ qualified buyers ka network, fast closure in 28 days.',
  keywords: [
    'sell property Lucknow', 'property for sale Lucknow', 'list property Lucknow',
    'sell flat Lucknow', 'sell house Lucknow', 'property valuation Lucknow',
    'sell apartment Lucknow', 'Gomti Nagar property for sale',
  ],
  alternates: { canonical: '/sell' },
  openGraph: {
    title: 'Sell Your Property in Lucknow | Free Valuation | Regalia Estates',
    description: 'Get the best price for your Lucknow property. Free valuation, pre-qualified buyers, legal support. Average sale in 28 days.',
    url: 'https://www.regaliaestates.in/sell',
  },
}

export default function SellPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: 'https://www.regaliaestates.in' },
        { name: 'Sell Property', url: 'https://www.regaliaestates.in/sell' },
      ])} />
      <SellClient />
    </>
  )
}
