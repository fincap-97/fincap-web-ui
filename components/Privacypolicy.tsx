'use client'

import { Shield, Lock, Eye, Database, Phone, Mail, ChevronDown, FileText, AlertCircle, Scale, Home } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const privacySections = [
    {
        icon: Database,
        title: 'Information We Collect',
        content: [
            'Personal details you provide: name, phone number, email address',
            'Property preferences, budget range, and location interests',
            'Brochure download requests and inquiry form submissions',
            'Device information and browsing activity on our website',
            'Communication history between you and our advisors',
        ],
    },
    {
        icon: Eye,
        title: 'How We Use Your Information',
        content: [
            'To respond to your property inquiries and schedule site visits',
            'To send you relevant property listings matching your preferences',
            'To share project brochures and updates you have requested',
            'To improve our website experience and services',
            'To comply with legal and regulatory requirements',
        ],
    },
    {
        icon: Lock,
        title: 'Data Security',
        content: [
            'Your data is stored securely and never sold to third parties',
            'We use industry-standard encryption for all data transmission',
            'Access to your personal information is strictly limited to our team',
            'We do not share your details with builders without your consent',
            'You may request deletion of your data at any time by contacting us',
        ],
    },
    {
        icon: Phone,
        title: 'Communication & Marketing',
        content: [
            'We may contact you via call, SMS, or WhatsApp about your inquiry',
            'You may opt out of marketing communications at any time',
            'We do not send unsolicited bulk messages or spam',
            'All communication is related to your expressed property interest',
        ],
    },
    {
        icon: Shield,
        title: 'Your Rights',
        content: [
            'Right to access the personal data we hold about you',
            'Right to correct any inaccurate or incomplete information',
            'Right to request deletion of your personal data',
            'Right to withdraw consent for marketing communications',
            'Right to lodge a complaint with the relevant authority',
        ],
    },
]

const termsSections = [
    {
        icon: FileText,
        title: 'Use of Website',
        content: [
            'By accessing fincapsol.co.in, you agree to be bound by these terms',
            'You must be at least 18 years of age to use our services',
            'You agree not to misuse the website or its content in any way',
            'Unauthorised use of this website may give rise to a claim for damages',
            'We reserve the right to restrict access to parts of the website at any time',
        ],
    },
    {
        icon: Home,
        title: 'Property Information',
        content: [
            'All property details are provided for informational purposes only',
            'Prices, availability, and specifications are subject to change without notice',
            'Images and renders shown are for representation purposes only',
            'We do not guarantee the accuracy of third-party developer information',
            'Always verify property details directly with the developer before investing',
        ],
    },
    {
        icon: Scale,
        title: 'Limitation of Liability',
        content: [
            'Fincap acts as a real estate advisory intermediary, not a developer or builder',
            'We are not liable for any investment decisions made based on website content',
            'We do not guarantee any returns on property investments',
            'Any disputes between buyer and developer are the responsibility of respective parties',
            'Our liability is limited to the advisory fees paid, if any',
        ],
    },
    {
        icon: AlertCircle,
        title: 'Disclaimer',
        content: [
            'All RERA registration details should be independently verified at up-rera.in',
            'This website does not constitute a legal offer or solicitation to buy/sell property',
            'Past performance of property investments does not guarantee future results',
            'We recommend consulting a legal and financial advisor before making any investment',
            'Content on this website is subject to change without prior notice',
        ],
    },
]

function Section({ icon: Icon, title, content }: { icon: React.ElementType; title: string; content: string[] }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="rounded-xl overflow-hidden transition-all" style={{ border: '1px solid #E8ECF2', background: '#FFFFFF' }}>
            <button onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left">
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: '#FEE8EA' }}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#E63946' }} />
                    </div>
                    <span className="font-serif font-semibold text-sm sm:text-base" style={{ color: '#0B1F3A' }}>
                        {title}
                    </span>
                </div>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300"
                    style={{ color: '#9CA3AF', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>
            <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? '400px' : '0px' }}>
                <div className="px-5 sm:px-6 pb-5">
                    <div className="w-full h-px mb-4" style={{ background: '#E8ECF2' }} />
                    <ul className="space-y-2.5">
                        {content.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: '#E63946' }} />
                                <span className="text-xs sm:text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default function PrivacyPolicy() {
    const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy')

    return (
        <div className="pt-20 min-h-screen" style={{ background: '#F5F7FA' }}>

            {/* Hero */}
            <section className="relative py-14 sm:py-20 overflow-hidden" style={{ background: '#0B1F3A' }}>
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                <div className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 35%, transparent 65%)' }} />
                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
                        style={{ background: 'rgba(230,57,70,0.12)', border: '1px solid rgba(230,57,70,0.30)' }}>
                        <Shield className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
                        <span className="text-xs font-semibold" style={{ color: '#E63946' }}>Legal & Privacy</span>
                    </div>
                    <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
                        Legal Information
                    </h1>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.60)' }}>
                        At Fincap, we are committed to transparency in how we handle your data and deliver our services.
                    </p>
                    <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.35)' }}>Last updated: May 2025</p>
                </div>
            </section>

            {/* Tab Toggle */}
            <div className="sticky top-16 z-30 bg-white border-b" style={{ borderColor: '#E8ECF2' }}>
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <div className="flex">
                        <button
                            onClick={() => setActiveTab('privacy')}
                            className="flex items-center gap-2 px-5 sm:px-8 py-4 text-sm font-semibold relative transition-colors"
                            style={{ color: activeTab === 'privacy' ? '#E63946' : '#6B7280' }}>
                            <Shield className="w-4 h-4" />
                            Privacy Policy
                            {activeTab === 'privacy' && (
                                <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('terms')}
                            className="flex items-center gap-2 px-5 sm:px-8 py-4 text-sm font-semibold relative transition-colors"
                            style={{ color: activeTab === 'terms' ? '#E63946' : '#6B7280' }}>
                            <Scale className="w-4 h-4" />
                            Terms & Conditions
                            {activeTab === 'terms' && (
                                <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <section className="py-10 sm:py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">

                    {activeTab === 'privacy' && (
                        <>
                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-5"
                                style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                                <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#6B7280' }}>
                                    This Privacy Policy explains how <strong style={{ color: '#0B1F3A' }}>Fincap Advisors</strong> ("we", "our", "us") collects, uses, and protects the personal information you provide when using{' '}
                                    <strong style={{ color: '#E63946' }}>fincapsol.co.in</strong> or interacting with our services.
                                    By using our website, you agree to the terms of this policy.
                                </p>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                {privacySections.map((s) => <Section key={s.title} {...s} />)}
                            </div>
                            <div className="mt-5 bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8" style={{ border: '1px solid #E8ECF2' }}>
                                <h3 className="font-serif font-semibold text-base sm:text-lg mb-3" style={{ color: '#0B1F3A' }}>Cookies</h3>
                                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                                    Our website uses cookies to enhance your browsing experience, analyse site traffic, and personalise content.
                                    You can control cookie settings through your browser. Disabling cookies may affect certain features of the website.
                                </p>
                            </div>
                        </>
                    )}

                    {activeTab === 'terms' && (
                        <>
                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-5"
                                style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                                <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#6B7280' }}>
                                    These Terms & Conditions govern your use of <strong style={{ color: '#E63946' }}>fincapsol.co.in</strong> and the services provided by{' '}
                                    <strong style={{ color: '#0B1F3A' }}>Fincap Advisors</strong>. By accessing our website, you accept these terms in full.
                                    If you disagree with any part, please do not use our website.
                                </p>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                {termsSections.map((s) => <Section key={s.title} {...s} />)}
                            </div>
                            <div className="mt-5 bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8" style={{ border: '1px solid #E8ECF2' }}>
                                <h3 className="font-serif font-semibold text-base sm:text-lg mb-3" style={{ color: '#0B1F3A' }}>Governing Law</h3>
                                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                                    These terms are governed by the laws of India. Any disputes arising from use of this website shall be subject to the exclusive jurisdiction of courts in Lucknow, Uttar Pradesh.
                                </p>
                            </div>
                        </>
                    )}

                    {/* Contact */}
                    <div className="mt-5 rounded-xl sm:rounded-2xl p-5 sm:p-8" style={{ background: '#0B1F3A' }}>
                        <h3 className="font-serif font-semibold text-base sm:text-lg text-white mb-2">Questions?</h3>
                        <p className="text-xs sm:text-sm mb-5" style={{ color: 'rgba(255,255,255,0.60)' }}>
                            If you have any questions about our Privacy Policy or Terms, please contact us.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="mailto:info@fincapsol.co.in"
                                className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold"
                                style={{ background: 'rgba(255,255,255,0.10)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}>
                                <Mail className="w-4 h-4" style={{ color: '#E63946' }} />
                                info@fincapsol.co.in
                            </a>
                            <a href="tel:+919696661530"
                                className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold"
                                style={{ background: 'rgba(255,255,255,0.10)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}>
                                <Phone className="w-4 h-4" style={{ color: '#E63946' }} />
                                +91 96966 61530
                            </a>
                        </div>
                    </div>

                    <p className="text-center text-xs mt-6" style={{ color: '#9CA3AF' }}>
                        © 2025 Fincap Advisors. All rights reserved. · fincapsol.co.in
                    </p>
                </div>
            </section>
        </div>
    )
}