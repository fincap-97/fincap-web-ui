import PrivacyPolicy from '@/components/Privacypolicy'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | Fincap',
    description: 'Learn how Fincap collects, uses, and protects your personal information. Your privacy is our priority.',
    alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
    return <PrivacyPolicy />
}