'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    Briefcase, ArrowRight, X, Mail, Phone, Sparkles, CheckCircle2,
    TrendingUp, GraduationCap, Trophy, HeartHandshake, Users, ShieldCheck,
    Handshake, UserPlus,
} from 'lucide-react'

// ─── Config — UPDATE THESE ───────────────────────────────────────────────────
const HR_EMAIL = 'info@fincapsol.coin'   // ⚠️ confirm: likely info@fincapsol.com or info@fincapsol.co.in
const HR_PHONE = ''                      // ⚠️ client left this blank — add the number here

// ─── Content ──────────────────────────────────────────────────────────────────

const EMPLOYEE_ROLES = [
    'Sales & Business Development',
    'Relationship Management',
    'CRM & Customer Support',
    'Digital Marketing',
    'Telecalling & Lead Generation',
    'Operations & Administration',
]

const EMPLOYEE_OFFERS: { icon: React.ElementType; text: string }[] = [
    { icon: TrendingUp, text: 'Competitive compensation' },
    { icon: Trophy, text: 'Performance incentives' },
    { icon: GraduationCap, text: 'Professional training' },
    { icon: ArrowRight, text: 'Career growth opportunities' },
    { icon: HeartHandshake, text: 'Supportive work environment' },
]

const ASSOCIATE_IDEAL = [
    'Property consultants',
    'Home loan consultants',
    'Architects & Interior Designers',
    'Entrepreneurs',
    'Working professionals seeking additional income',
]

const ASSOCIATE_BENEFITS = [
    'Attractive commission structure',
    'Access to premium projects',
    'Marketing and sales support',
    'Training and product knowledge sessions',
    'Transparent and timely payouts',
    'Flexible working model',
]

const WHY_US: { icon: React.ElementType; title: string }[] = [
    { icon: TrendingUp, title: 'Strong market presence' },
    { icon: Handshake, title: 'Trusted developer associations' },
    { icon: ShieldCheck, title: 'Ethical & transparent practices' },
    { icon: GraduationCap, title: 'Continuous learning & development' },
    { icon: Users, title: 'Growth-oriented culture' },
]

type Track = 'employee' | 'associate'

// ─── Apply Modal ────────────────────────────────────────────────────────────

function ApplyModal({ track, onClose }: { track: Track; onClose: () => void }) {
    const isEmp = track === 'employee'
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [extra, setExtra] = useState('') // role applied for / area of operation
    const [message, setMessage] = useState('')

    const send = () => {
        const subject = encodeURIComponent(
            isEmp ? 'Employment Application — FincaP' : 'Business Associate Registration — FincaP'
        )
        const body = encodeURIComponent(
            (isEmp
                ? `Hello FincaP Team,\n\nI'd like to apply for an employment opportunity.\n\n`
                : `Hello FincaP Team,\n\nI'd like to register as a Business Associate / Channel Partner.\n\n`) +
            `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n` +
            (isEmp ? `Role of interest: ${extra}\n` : `Profile / Area of operation: ${extra}\n`) +
            `\n${message}\n\n` +
            (isEmp
                ? '(Please attach your resume and a brief cover letter before sending.)'
                : '(Please attach your profile / experience details before sending.)')
        )
        window.location.href = `mailto:${HR_EMAIL}?subject=${subject}&body=${body}`
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: '1px solid #E8ECF2' }}>
                <div className="flex items-start justify-between p-5 sm:p-6" style={{ borderBottom: '1px solid #E8ECF2' }}>
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#E63946' }}>
                            {isEmp ? 'Employment Application' : 'Business Associate Registration'}
                        </p>
                        <h3 className="font-serif text-lg sm:text-xl font-bold mt-0.5" style={{ color: '#0B1F3A' }}>
                            {isEmp ? 'Apply for a Role' : 'Become a Partner'}
                        </h3>
                    </div>
                    <button onClick={onClose} className="shrink-0 p-1.5 rounded-lg hover:bg-gray-100">
                        <X className="w-5 h-5" style={{ color: '#0B1F3A' }} />
                    </button>
                </div>

                <div className="p-5 sm:p-6 flex flex-col gap-3">
                    <input type="text" value={name} placeholder="Full name" onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                        style={{ background: '#F5F7FA', border: '1px solid #E8ECF2', color: '#1A1A1A' }} />
                    <input type="tel" value={phone} placeholder="Phone number" onChange={e => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                        style={{ background: '#F5F7FA', border: '1px solid #E8ECF2', color: '#1A1A1A' }} />
                    <input type="email" value={email} placeholder="Email address" onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                        style={{ background: '#F5F7FA', border: '1px solid #E8ECF2', color: '#1A1A1A' }} />
                    <input type="text" value={extra}
                        placeholder={isEmp ? 'Role you’re applying for' : 'Your profile & area of operation'}
                        onChange={e => setExtra(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                        style={{ background: '#F5F7FA', border: '1px solid #E8ECF2', color: '#1A1A1A' }} />
                    <textarea value={message} rows={3}
                        placeholder={isEmp ? 'Brief cover letter / about you (optional)' : 'Experience & a short note (optional)'}
                        onChange={e => setMessage(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none resize-none"
                        style={{ background: '#F5F7FA', border: '1px solid #E8ECF2', color: '#1A1A1A' }} />

                    <button onClick={send} disabled={!name || !phone}
                        className="w-full py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                        style={{ background: '#E63946' }}>
                        <Mail className="w-4 h-4" /> {isEmp ? 'Submit Resume' : 'Register Now'}
                    </button>
                    <p className="text-[11px] text-center" style={{ color: '#9CA3AF' }}>
                        This opens your email app.{' '}
                        {isEmp ? 'Please attach your resume and cover letter.' : 'Please attach your profile / experience.'}
                    </p>
                </div>
            </div>
        </div>
    )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function CareersClient() {
    const [track, setTrack] = useState<Track>('employee')
    const [applyTrack, setApplyTrack] = useState<Track | null>(null)

    return (
        <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

            {/* ── HERO ── */}
            <div style={{ background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)' }} className="pt-20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                        style={{ background: 'rgba(230,57,70,0.15)', border: '1px solid rgba(230,57,70,0.3)' }}>
                        <Sparkles className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#FCA5AD' }}>We’re Hiring</span>
                    </div>
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
                        Build Your Future with Us
                    </h1>
                    <p className="mt-4 text-sm sm:text-base max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
                        Join our growing real estate team as a full-time professional or an independent business associate.
                        Whether you’re an experienced real estate expert, a sales professional, or an entrepreneur looking
                        for a rewarding opportunity, we offer a platform for growth, learning, and success.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-7">
                        <a href="#opportunities"
                            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all"
                            style={{ background: '#E63946' }}>
                            Explore Opportunities <ArrowRight className="w-4 h-4" />
                        </a>
                        <Link href="/contact"
                            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all"
                            style={{ background: 'rgba(255,255,255,0.10)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                            Talk to Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── CAREER OPPORTUNITIES ── */}
            <div id="opportunities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#E63946' }}>Career Opportunities</p>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold" style={{ color: '#0B1F3A' }}>
                        Two ways to grow with us
                    </h2>
                </div>

                {/* Track toggle */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-2xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2', background: '#fff' }}>
                        <button onClick={() => setTrack('employee')}
                            className="flex items-center gap-2 px-4 sm:px-6 py-3 text-sm font-semibold transition-all"
                            style={{ background: track === 'employee' ? '#0B1F3A' : '#fff', color: track === 'employee' ? '#fff' : '#6B7280' }}>
                            <Briefcase className="w-4 h-4" /> Employee Positions
                        </button>
                        <button onClick={() => setTrack('associate')}
                            className="flex items-center gap-2 px-4 sm:px-6 py-3 text-sm font-semibold transition-all"
                            style={{ background: track === 'associate' ? '#0B1F3A' : '#fff', color: track === 'associate' ? '#fff' : '#6B7280', borderLeft: '1px solid #E8ECF2' }}>
                            <Handshake className="w-4 h-4" /> Business Associate
                        </button>
                    </div>
                </div>

                {/* ── EMPLOYEE TRACK ── */}
                {track === 'employee' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="bg-white rounded-2xl p-6 sm:p-8" style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-serif text-lg font-bold" style={{ color: '#E63946' }}>1.</span>
                                <h3 className="font-serif text-xl font-bold" style={{ color: '#0B1F3A' }}>Employee Positions</h3>
                            </div>
                            <p className="text-sm mb-5" style={{ color: '#6B7280' }}>
                                We are continuously looking for talented professionals in:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {EMPLOYEE_ROLES.map(r => (
                                    <div key={r} className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm"
                                        style={{ background: '#F5F7FA', color: '#0B1F3A' }}>
                                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#E63946' }} />
                                        {r}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col" style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                            <h3 className="font-serif text-lg font-bold mb-4" style={{ color: '#0B1F3A' }}>What We Offer</h3>
                            <div className="flex flex-col gap-3 flex-1">
                                {EMPLOYEE_OFFERS.map(o => {
                                    const Icon = o.icon
                                    return (
                                        <div key={o.text} className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#FEE8EA' }}>
                                                <Icon className="w-4 h-4" style={{ color: '#E63946' }} />
                                            </div>
                                            <span className="text-sm" style={{ color: '#0B1F3A' }}>{o.text}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <button onClick={() => setApplyTrack('employee')}
                                className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all"
                                style={{ background: '#E63946' }}>
                                Apply for Employment <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}

                {/* ── ASSOCIATE TRACK ── */}
                {track === 'associate' && (
                    <div>
                        <div className="bg-white rounded-2xl p-6 sm:p-8 mb-5" style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-serif text-lg font-bold" style={{ color: '#E63946' }}>2.</span>
                                <h3 className="font-serif text-xl font-bold" style={{ color: '#0B1F3A' }}>Business Associates / Channel Partners</h3>
                            </div>
                            <p className="text-sm" style={{ color: '#6B7280' }}>
                                Become our Business Associate and build your own successful real estate business with our support.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="bg-white rounded-2xl p-6 sm:p-8" style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                                <h3 className="font-serif text-lg font-bold mb-4" style={{ color: '#0B1F3A' }}>Ideal For</h3>
                                <div className="flex flex-col gap-2.5">
                                    {ASSOCIATE_IDEAL.map(i => (
                                        <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm"
                                            style={{ background: '#F5F7FA', color: '#0B1F3A' }}>
                                            <UserPlus className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
                                            {i}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col" style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                                <h3 className="font-serif text-lg font-bold mb-4" style={{ color: '#0B1F3A' }}>Benefits</h3>
                                <div className="flex flex-col gap-2.5 flex-1">
                                    {ASSOCIATE_BENEFITS.map(b => (
                                        <div key={b} className="flex items-start gap-2 text-sm" style={{ color: '#0B1F3A' }}>
                                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#059669' }} />
                                            {b}
                                        </div>
                                    ))}
                                </div>
                                <button onClick={() => setApplyTrack('associate')}
                                    className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all"
                                    style={{ background: '#E63946' }}>
                                    Register as Associate <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* ── WHY JOIN US ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
                <div className="rounded-2xl p-6 sm:p-10" style={{ background: 'linear-gradient(135deg, #0B1F3A, #1E3A5F)' }}>
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#FCA5AD' }}>Why Join Us</p>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">A team you can trust</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {WHY_US.map(w => {
                            const Icon = w.icon
                            return (
                                <div key={w.title} className="flex items-center gap-3 rounded-xl p-4"
                                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(230,57,70,0.20)' }}>
                                        <Icon className="w-5 h-5" style={{ color: '#FCA5AD' }} />
                                    </div>
                                    <span className="text-sm font-medium text-white">{w.title}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* ── APPLY NOW ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#E63946' }}>Apply Now</p>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold" style={{ color: '#0B1F3A' }}>Ready to get started?</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
                    <div className="bg-white rounded-2xl p-6 sm:p-8" style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: '#FEE8EA' }}>
                            <Briefcase className="w-5 h-5" style={{ color: '#E63946' }} />
                        </div>
                        <h3 className="font-serif text-lg font-bold mb-1.5" style={{ color: '#0B1F3A' }}>For Employment Opportunities</h3>
                        <p className="text-sm mb-5" style={{ color: '#6B7280' }}>
                            Please submit your resume along with a brief cover letter.
                        </p>
                        <button onClick={() => setApplyTrack('employee')}
                            className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl text-white"
                            style={{ background: '#E63946' }}>
                            Submit Resume <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl p-6 sm:p-8" style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: '#FEE8EA' }}>
                            <Handshake className="w-5 h-5" style={{ color: '#E63946' }} />
                        </div>
                        <h3 className="font-serif text-lg font-bold mb-1.5" style={{ color: '#0B1F3A' }}>For Business Associate Registration</h3>
                        <p className="text-sm mb-5" style={{ color: '#6B7280' }}>
                            Share your profile, experience, and area of operation.
                        </p>
                        <button onClick={() => setApplyTrack('associate')}
                            className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl text-white"
                            style={{ background: '#E63946' }}>
                            Register Now <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Contact strip */}
                <div className="rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8"
                    style={{ background: '#fff', border: '1px solid #E8ECF2' }}>
                    <a href={`mailto:${HR_EMAIL}`} className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#0B1F3A' }}>
                        <span className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#FEE8EA' }}>
                            <Mail className="w-4 h-4" style={{ color: '#E63946' }} />
                        </span>
                        {HR_EMAIL}
                    </a>
                    {HR_PHONE && (
                        <a href={`tel:${HR_PHONE}`} className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#0B1F3A' }}>
                            <span className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#FEE8EA' }}>
                                <Phone className="w-4 h-4" style={{ color: '#E63946' }} />
                            </span>
                            {HR_PHONE}
                        </a>
                    )}
                </div>
            </div>

            {applyTrack && <ApplyModal track={applyTrack} onClose={() => setApplyTrack(null)} />}
        </div>
    )
}