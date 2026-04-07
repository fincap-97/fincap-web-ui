import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
    title: 'Auxiliary Services — Home Loan, Lease & EMI Calculator',
    description: 'Home loan assistance, lease documentation, and EMI calculator. Regalia Estates provides complete financial support for your property journey in Lucknow.',
    alternates: { canonical: '/services' },
}

export default function ServicesPage() {
    return <ServicesClient />
}