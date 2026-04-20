

// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import {
//     Home, FileText, Calculator, CheckCircle2, Phone,
//     ArrowRight, ChevronDown, IndianRupee, Percent,
//     Clock, Shield, Users, Building2, Star, Send,
//     TrendingUp, BadgeCheck, Landmark, Banknote
// } from 'lucide-react'

// // ─── EMI Calculator ──────────────────────────────────────────────────────────

// function EMICalculator() {
//     const [principal, setPrincipal] = useState(5000000)
//     const [rate, setRate] = useState(8.5)
//     const [tenure, setTenure] = useState(20)

//     // Raw string states for typing
//     const [principalInput, setPrincipalInput] = useState('5000000')
//     const [rateInput, setRateInput] = useState('8.5')
//     const [tenureInput, setTenureInput] = useState('20')

//     const monthlyRate = rate / 12 / 100
//     const months = tenure * 12
//     const emi = months === 0 ? 0 :
//         (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
//         (Math.pow(1 + monthlyRate, months) - 1)

//     const totalPayment = emi * months
//     const totalInterest = totalPayment - principal
//     const interestPct = Math.round((totalInterest / totalPayment) * 100)
//     const principalPct = 100 - interestPct

//     const fmt = (n: number) => {
//         if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`
//         if (n >= 100000) return `₹${(n / 100000).toFixed(2)} Lakh`
//         return `₹${Math.round(n).toLocaleString('en-IN')}`
//     }

//     // Handlers — slider updates both value + input string
//     const handlePrincipalSlider = (v: number) => {
//         setPrincipal(v)
//         setPrincipalInput(String(v))
//     }
//     const handleRateSlider = (v: number) => {
//         setRate(v)
//         setRateInput(String(v))
//     }
//     const handleTenureSlider = (v: number) => {
//         setTenure(v)
//         setTenureInput(String(v))
//     }

//     // Handlers — typing updates string, clamps on blur
//     const handlePrincipalBlur = () => {
//         const val = Math.min(50000000, Math.max(500000, Number(principalInput) || 500000))
//         setPrincipal(val)
//         setPrincipalInput(String(val))
//     }
//     const handleRateBlur = () => {
//         const val = Math.min(15, Math.max(6, Number(rateInput) || 8.5))
//         setRate(val)
//         setRateInput(String(val))
//     }
//     const handleTenureBlur = () => {
//         const val = Math.min(30, Math.max(1, Math.round(Number(tenureInput)) || 20))
//         setTenure(val)
//         setTenureInput(String(val))
//     }

//     const inputStyle = {
//         border: '1.5px solid #E8ECF2',
//         borderRadius: '10px',
//         color: '#0B1F3A',
//         fontWeight: 700,
//         outline: 'none',
//         background: '#FFFFFF',
//         textAlign: 'right' as const,
//     }

//     return (
//         <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
//             {/* Header */}
//             <div className="px-8 py-6" style={{ background: '#1E3A5F' }}>
//                 <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(192,57,43,0.20)' }}>
//                         <Calculator className="w-5 h-5" style={{ color: '#E74C3C' }} />
//                     </div>
//                     <div>
//                         <h3 className="font-serif font-bold text-xl text-white">EMI Calculator</h3>
//                         <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>Type a value or drag the slider</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="p-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//                     {/* ── Sliders + Inputs ── */}
//                     <div className="space-y-8">

//                         {/* Loan Amount */}
//                         <div>
//                             <div className="flex items-center justify-between mb-3">
//                                 <label className="text-sm font-semibold" style={{ color: '#0B1F3A' }}>Loan Amount</label>
//                                 <div className="flex items-center gap-1">
//                                     <span className="text-sm font-bold" style={{ color: '#C0392B' }}>₹</span>
//                                     <input
//                                         type="number"
//                                         value={principalInput}
//                                         onChange={e => setPrincipalInput(e.target.value)}
//                                         onBlur={handlePrincipalBlur}
//                                         className="w-32 px-3 py-1.5 text-sm"
//                                         style={inputStyle}
//                                         placeholder="5000000"
//                                     />
//                                 </div>
//                             </div>
//                             <input
//                                 type="range"
//                                 min={500000} max={50000000} step={100000}
//                                 value={principal}
//                                 onChange={e => handlePrincipalSlider(Number(e.target.value))}
//                                 className="w-full h-2 rounded-full appearance-none cursor-pointer"
//                                 style={{ accentColor: '#C0392B', background: `linear-gradient(to right, #C0392B ${((principal - 500000) / (50000000 - 500000)) * 100}%, #E8ECF2 0%)` }}
//                             />
//                             <div className="flex justify-between text-xs mt-1.5" style={{ color: '#9CA3AF' }}>
//                                 <span>₹5 Lakh</span>
//                                 <span className="font-medium" style={{ color: '#C0392B' }}>{fmt(principal)}</span>
//                                 <span>₹5 Cr</span>
//                             </div>
//                         </div>

//                         {/* Interest Rate */}
//                         <div>
//                             <div className="flex items-center justify-between mb-3">
//                                 <label className="text-sm font-semibold" style={{ color: '#0B1F3A' }}>Interest Rate (p.a.)</label>
//                                 <div className="flex items-center gap-1">
//                                     <input
//                                         type="number"
//                                         value={rateInput}
//                                         onChange={e => setRateInput(e.target.value)}
//                                         onBlur={handleRateBlur}
//                                         step={0.1}
//                                         className="w-20 px-3 py-1.5 text-sm"
//                                         style={inputStyle}
//                                         placeholder="8.5"
//                                     />
//                                     <span className="text-sm font-bold" style={{ color: '#C0392B' }}>%</span>
//                                 </div>
//                             </div>
//                             <input
//                                 type="range"
//                                 min={6} max={15} step={0.1}
//                                 value={rate}
//                                 onChange={e => handleRateSlider(Number(e.target.value))}
//                                 className="w-full h-2 rounded-full appearance-none cursor-pointer"
//                                 style={{ accentColor: '#C0392B', background: `linear-gradient(to right, #C0392B ${((rate - 6) / (15 - 6)) * 100}%, #E8ECF2 0%)` }}
//                             />
//                             <div className="flex justify-between text-xs mt-1.5" style={{ color: '#9CA3AF' }}>
//                                 <span>6%</span>
//                                 <span className="font-medium" style={{ color: '#C0392B' }}>{rate}%</span>
//                                 <span>15%</span>
//                             </div>
//                         </div>

//                         {/* Tenure */}
//                         <div>
//                             <div className="flex items-center justify-between mb-3">
//                                 <label className="text-sm font-semibold" style={{ color: '#0B1F3A' }}>Loan Tenure</label>
//                                 <div className="flex items-center gap-1">
//                                     <input
//                                         type="number"
//                                         value={tenureInput}
//                                         onChange={e => setTenureInput(e.target.value)}
//                                         onBlur={handleTenureBlur}
//                                         className="w-20 px-3 py-1.5 text-sm"
//                                         style={inputStyle}
//                                         placeholder="20"
//                                     />
//                                     <span className="text-sm font-bold" style={{ color: '#C0392B' }}>Yrs</span>
//                                 </div>
//                             </div>
//                             <input
//                                 type="range"
//                                 min={1} max={30} step={1}
//                                 value={tenure}
//                                 onChange={e => handleTenureSlider(Number(e.target.value))}
//                                 className="w-full h-2 rounded-full appearance-none cursor-pointer"
//                                 style={{ accentColor: '#C0392B', background: `linear-gradient(to right, #C0392B ${((tenure - 1) / (30 - 1)) * 100}%, #E8ECF2 0%)` }}
//                             />
//                             <div className="flex justify-between text-xs mt-1.5" style={{ color: '#9CA3AF' }}>
//                                 <span>1 Yr</span>
//                                 <span className="font-medium" style={{ color: '#C0392B' }}>{tenure} Years</span>
//                                 <span>30 Yrs</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ── Result ── */}
//                     <div className="flex flex-col gap-4">
//                         <div className="rounded-2xl p-6 text-center" style={{ background: '#1E3A5F' }}>
//                             <p className="text-sm font-medium mb-1" style={{ color: 'rgba(255,255,255,0.60)' }}>Monthly EMI</p>
//                             <p className="font-serif font-bold text-4xl text-white mb-1">{fmt(emi)}</p>
//                             <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>per month for {tenure} years</p>
//                         </div>

//                         <div className="rounded-2xl p-5" style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
//                             <div className="w-full h-3 rounded-full overflow-hidden mb-4 flex">
//                                 <div className="h-full transition-all duration-500" style={{ width: `${principalPct}%`, background: '#1E3A5F' }} />
//                                 <div className="h-full transition-all duration-500" style={{ width: `${interestPct}%`, background: '#C0392B' }} />
//                             </div>
//                             <div className="space-y-3">
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-2">
//                                         <div className="w-3 h-3 rounded-full" style={{ background: '#1E3A5F' }} />
//                                         <span className="text-sm" style={{ color: '#6B7280' }}>Principal Amount</span>
//                                     </div>
//                                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>{fmt(principal)}</span>
//                                 </div>
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-2">
//                                         <div className="w-3 h-3 rounded-full" style={{ background: '#C0392B' }} />
//                                         <span className="text-sm" style={{ color: '#6B7280' }}>Total Interest</span>
//                                     </div>
//                                     <span className="font-semibold text-sm" style={{ color: '#C0392B' }}>{fmt(totalInterest)}</span>
//                                 </div>
//                                 <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//                                     <span className="text-sm font-semibold" style={{ color: '#0B1F3A' }}>Total Payment</span>
//                                     <span className="font-bold text-sm" style={{ color: '#0B1F3A' }}>{fmt(totalPayment)}</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <Link href="/contact"
//                             className="btn-red w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2">
//                             <Phone className="w-4 h-4" />
//                             Get Loan Assistance
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// // ─── Home Loan Section ────────────────────────────────────────────────────────

// function HomeLoanSection() {
//     const [form, setForm] = useState({ name: '', phone: '', income: '', amount: '', submitted: false })

//     const banks = [
//         { name: 'HDFC Bank', rate: '8.35%', logo: 'HD' },
//         { name: 'SBI', rate: '8.40%', logo: 'SB' },
//         { name: 'ICICI Bank', rate: '8.45%', logo: 'IC' },
//         { name: 'Axis Bank', rate: '8.50%', logo: 'AX' },
//         { name: 'Kotak Bank', rate: '8.65%', logo: 'KO' },
//         { name: 'PNB', rate: '8.55%', logo: 'PN' },
//     ]

//     const steps = [
//         { num: '01', title: 'Eligibility Check', desc: 'Free check in 5 minutes — no documents needed initially.' },
//         { num: '02', title: 'Bank Comparison', desc: 'We compare 10+ banks and get you the lowest rate.' },
//         { num: '03', title: 'Document Support', desc: 'Our team guides you through every document required.' },
//         { num: '04', title: 'Quick Disbursal', desc: 'Loan approved and disbursed within 7–10 working days.' },
//     ]

//     const benefits = [
//         'Zero processing fee assistance',
//         'Interest rates from 8.35% p.a.',
//         'Loan up to ₹10 Crore',
//         'Tenure up to 30 years',
//         'Balance transfer available',
//         'Top-up loan facility',
//     ]

//     return (
//         <div className="space-y-10">
//             {/* Intro */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//                 <div>
//                     <p className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: '#C0392B' }}>
//                         <span className="w-6 h-px inline-block" style={{ background: '#C0392B' }} />
//                         Hassle-Free Home Loans
//                     </p>
//                     <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0B1F3A' }}>
//                         We Handle Your<br />Home Loan, End-to-End
//                     </h2>
//                     <p className="leading-relaxed mb-6" style={{ color: '#6B7280' }}>
//                         From eligibility check to final disbursal — our dedicated loan desk works with 10+ top banks
//                         to ensure you get the best rate, fastest approval, and zero stress.
//                     </p>
//                     <div className="grid grid-cols-2 gap-3">
//                         {benefits.map(b => (
//                             <div key={b} className="flex items-center gap-2">
//                                 <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#C0392B' }} />
//                                 <span className="text-sm" style={{ color: '#1A1A1A' }}>{b}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Quick Eligibility Form */}
//                 <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
//                     <h3 className="font-serif font-bold text-xl mb-1" style={{ color: '#0B1F3A' }}>Check Eligibility Free</h3>
//                     <p className="text-sm mb-6" style={{ color: '#6B7280' }}>Result in 5 minutes — no credit score impact</p>

//                     {form.submitted ? (
//                         <div className="text-center py-8">
//                             <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#DCFCE7' }}>
//                                 <CheckCircle2 className="w-8 h-8 text-green-600" />
//                             </div>
//                             <p className="font-serif font-bold text-lg mb-1" style={{ color: '#0B1F3A' }}>Request Submitted!</p>
//                             <p className="text-sm" style={{ color: '#6B7280' }}>Our loan expert will call you within 30 minutes.</p>
//                             <button
//                                 onClick={() => setForm({ name: '', phone: '', income: '', amount: '', submitted: false })}
//                                 className="mt-4 text-xs font-semibold underline"
//                                 style={{ color: '#C0392B' }}
//                             >
//                                 Submit another request
//                             </button>
//                         </div>
//                     ) : (
//                         <div className="space-y-4">
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Full Name *</label>
//                                     <input type="text" placeholder="Rajesh Sharma"
//                                         value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
//                                         className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
//                                         style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }} />
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Phone *</label>
//                                     <input type="tel" placeholder="+91 98765..."
//                                         value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
//                                         className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
//                                         style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }} />
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Monthly Income</label>
//                                 <select value={form.income} onChange={e => setForm({ ...form, income: e.target.value })}
//                                     className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none bg-white"
//                                     style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                                     <option value="">Select range</option>
//                                     <option>Below ₹30,000</option>
//                                     <option>₹30K – ₹60K</option>
//                                     <option>₹60K – ₹1 Lakh</option>
//                                     <option>₹1 Lakh – ₹2 Lakh</option>
//                                     <option>Above ₹2 Lakh</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Loan Amount Required</label>
//                                 <select value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })}
//                                     className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none bg-white"
//                                     style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                                     <option value="">Select amount</option>
//                                     <option>Under ₹30 Lakh</option>
//                                     <option>₹30L – ₹60L</option>
//                                     <option>₹60L – ₹1 Cr</option>
//                                     <option>₹1 Cr – ₹2 Cr</option>
//                                     <option>Above ₹2 Cr</option>
//                                 </select>
//                             </div>
//                             <button
//                                 type="button"
//                                 onClick={() => {
//                                     if (!form.name.trim() || !form.phone.trim()) return
//                                     setForm({ ...form, submitted: true })
//                                 }}
//                                 className="w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all"
//                                 style={{ background: '#C0392B', color: '#ffffff', boxShadow: '0 4px 16px rgba(192,57,43,0.25)' }}
//                             >
//                                 <Send className="w-4 h-4" />
//                                 Check My Eligibility
//                             </button>
//                             <p className="text-center text-xs" style={{ color: '#9CA3AF' }}>
//                                 Free check · No spam · No credit score impact
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Process Steps */}
//             <div className="rounded-2xl p-8" style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
//                 <p className="text-sm font-semibold uppercase tracking-wider mb-6 text-center" style={{ color: '#C0392B' }}>
//                     How It Works
//                 </p>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                     {steps.map((s, i) => (
//                         <div key={s.num} className="relative text-center">
//                             <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 font-bold font-serif text-lg text-white"
//                                 style={{ background: '#C0392B' }}>
//                                 {s.num}
//                             </div>
//                             {i < steps.length - 1 && (
//                                 <div className="hidden md:block absolute top-6 left-[60%] right-0 h-px" style={{ background: '#E8ECF2' }} />
//                             )}
//                             <p className="font-semibold text-sm mb-1" style={{ color: '#0B1F3A' }}>{s.title}</p>
//                             <p className="text-xs" style={{ color: '#6B7280' }}>{s.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Bank Partners */}
//             <div>
//                 <p className="text-sm font-semibold uppercase tracking-wider mb-5 text-center" style={{ color: '#9CA3AF' }}>
//                     Our Banking Partners
//                 </p>
//                 <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
//                     {banks.map(bank => (
//                         <div key={bank.name} className="bg-white rounded-xl p-4 text-center"
//                             style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 6px rgba(11,31,58,0.04)' }}>
//                             <div className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center font-bold text-sm text-white"
//                                 style={{ background: '#1E3A5F' }}>
//                                 {bank.logo}
//                             </div>
//                             <p className="text-xs font-semibold" style={{ color: '#0B1F3A' }}>{bank.name}</p>
//                             <p className="text-xs font-bold mt-0.5" style={{ color: '#C0392B' }}>From {bank.rate}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// // ─── Lease Assistance Section ─────────────────────────────────────────────────

// function LeaseSection() {
//     const [leaseForm, setLeaseForm] = useState({ name: '', phone: '', type: '', submitted: false })

//     const services = [
//         { icon: FileText, title: 'Lease Agreement Drafting', desc: 'Legally sound, court-registered lease agreements tailored to your needs.' },
//         { icon: Shield, title: 'Legal Verification', desc: 'Title check, encumbrance certificate, and tenant verification.' },
//         { icon: BadgeCheck, title: 'Registration Support', desc: 'Complete assistance for Sub-Registrar office lease registration.' },
//         { icon: Users, title: 'Tenant Screening', desc: 'Background check, KYC, and reference verification for landlords.' },
//         { icon: Banknote, title: 'Rent Negotiation', desc: 'Market-based pricing to get you the best deal — buy or rent side.' },
//         { icon: Landmark, title: 'NOC & Documentation', desc: 'Society NOC, utility transfer, and all pre/post-lease paperwork.' },
//     ]

//     const leaseTypes = [
//         { label: 'Residential Lease', sub: 'Apartments & Villas', color: '#1E3A5F' },
//         { label: 'Commercial Lease', sub: 'Offices & Shops', color: '#C0392B' },
//         { label: 'Co-working Lease', sub: 'Shared Spaces', color: '#059669' },
//         { label: 'Leave & License', sub: 'Short-term Rentals', color: '#D97706' },
//     ]

//     return (
//         <div className="space-y-10">
//             {/* Intro */}
//             <div className="text-center max-w-2xl mx-auto">
//                 <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#C0392B' }}>
//                     Complete Lease Support
//                 </p>
//                 <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0B1F3A' }}>
//                     Lease With Confidence
//                 </h2>
//                 <p style={{ color: '#6B7280' }}>
//                     From drafting the agreement to court registration — our legal experts ensure your lease is
//                     airtight, dispute-free, and 100% compliant with UP Rent Control laws.
//                 </p>
//             </div>

//             {/* Lease Types */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {leaseTypes.map(lt => (
//                     <div key={lt.label} className="bg-white rounded-2xl p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg cursor-default"
//                         style={{ border: '1px solid #E8ECF2' }}>
//                         <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
//                             style={{ background: lt.color }}>
//                             <FileText className="w-5 h-5 text-white" />
//                         </div>
//                         <p className="font-semibold text-sm mb-0.5" style={{ color: '#0B1F3A' }}>{lt.label}</p>
//                         <p className="text-xs" style={{ color: '#6B7280' }}>{lt.sub}</p>
//                     </div>
//                 ))}
//             </div>

//             {/* Services grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//                 {services.map(s => {
//                     const Icon = s.icon
//                     return (
//                         <div key={s.title} className="bg-white p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg"
//                             style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.05)' }}>
//                             <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: '#FEE8EA' }}>
//                                 <Icon className="w-5 h-5" style={{ color: '#C0392B' }} />
//                             </div>
//                             <h4 className="font-semibold mb-2" style={{ color: '#0B1F3A' }}>{s.title}</h4>
//                             <p className="text-sm" style={{ color: '#6B7280' }}>{s.desc}</p>
//                         </div>
//                     )
//                 })}
//             </div>

//             {/* Contact form */}
//             <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto" style={{ border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
//                 <h3 className="font-serif font-bold text-xl mb-1 text-center" style={{ color: '#0B1F3A' }}>
//                     Book a Free Consultation
//                 </h3>
//                 <p className="text-sm text-center mb-6" style={{ color: '#6B7280' }}>
//                     Our lease expert will contact you within 2 hours
//                 </p>

//                 {leaseForm.submitted ? (
//                     <div className="text-center py-6">
//                         <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#DCFCE7' }}>
//                             <CheckCircle2 className="w-8 h-8 text-green-600" />
//                         </div>
//                         <p className="font-serif font-bold text-lg mb-1" style={{ color: '#0B1F3A' }}>Request Received!</p>
//                         <p className="text-sm" style={{ color: '#6B7280' }}>Our lease expert will contact you shortly.</p>
//                         <button
//                             onClick={() => setLeaseForm({ name: '', phone: '', type: '', submitted: false })}
//                             className="mt-4 text-xs font-semibold underline"
//                             style={{ color: '#C0392B' }}
//                         >
//                             Submit another request
//                         </button>
//                     </div>
//                 ) : (
//                     <div className="space-y-4">
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Your Name *</label>
//                                 <input type="text" placeholder="Full name"
//                                     value={leaseForm.name} onChange={e => setLeaseForm({ ...leaseForm, name: e.target.value })}
//                                     className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
//                                     style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }} />
//                             </div>
//                             <div>
//                                 <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Phone *</label>
//                                 <input type="tel" placeholder="+91 98765..."
//                                     value={leaseForm.phone} onChange={e => setLeaseForm({ ...leaseForm, phone: e.target.value })}
//                                     className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
//                                     style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }} />
//                             </div>
//                         </div>
//                         <div>
//                             <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Lease Type</label>
//                             <select value={leaseForm.type} onChange={e => setLeaseForm({ ...leaseForm, type: e.target.value })}
//                                 className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none bg-white"
//                                 style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                                 <option value="">Select lease type</option>
//                                 <option>Residential Lease</option>
//                                 <option>Commercial Lease</option>
//                                 <option>Co-working Lease</option>
//                                 <option>Leave & License</option>
//                             </select>
//                         </div>
//                         <button
//                             type="button"
//                             onClick={() => {
//                                 if (!leaseForm.name.trim() || !leaseForm.phone.trim()) return
//                                 setLeaseForm({ ...leaseForm, submitted: true })
//                             }}
//                             className="w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all"
//                             style={{ background: '#C0392B', color: '#ffffff', boxShadow: '0 4px 16px rgba(192,57,43,0.25)' }}
//                         >
//                             <Send className="w-4 h-4" />
//                             Book Free Consultation
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// // ─── Main Page ────────────────────────────────────────────────────────────────

// const TABS = [
//     { id: 'loan', label: 'Home Loan', icon: Home, sub: 'Best rates guaranteed' },
//     { id: 'lease', label: 'Lease Assistance', icon: FileText, sub: 'Legal & documentation' },
//     { id: 'emi', label: 'EMI Calculator', icon: Calculator, sub: 'Plan your payments' },
// ]

// export default function ServicesClient() {
//     const [activeTab, setActiveTab] = useState('loan')

//     const serviceHighlights = [
//         { icon: TrendingUp, value: '10+', label: 'Bank Partners' },
//         { icon: Star, value: '4.9★', label: 'Client Rating' },
//         { icon: Clock, value: '24 Hrs', label: 'Avg. Approval' },
//         { icon: Users, value: '2500+', label: 'Loans Assisted' },
//     ]

//     return (
//         <div className="pt-20 min-h-screen" style={{ background: '#FFFFFF' }}>

//             {/* ── Hero ── */}
//             <section className="relative py-20 overflow-hidden" style={{ background: '#1E3A5F' }}>
//                 <div className="absolute inset-0 opacity-[0.06]" style={{
//                     backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//                     backgroundSize: '28px 28px',
//                 }} />
//                 <div className="absolute top-0 left-0 right-0 h-[3px]" style={{
//                     background: 'linear-gradient(90deg, #C0392B 0%, #E74C3C 35%, transparent 65%)',
//                 }} />
//                 <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{
//                     background: 'radial-gradient(circle, rgba(192,57,43,0.12) 0%, transparent 70%)',
//                     filter: 'blur(60px)',
//                 }} />

//                 <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
//                     <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
//                         <div>
//                             <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{
//                                 background: 'rgba(192,57,43,0.15)',
//                                 border: '1px solid rgba(192,57,43,0.30)',
//                             }}>
//                                 <Building2 className="w-3.5 h-3.5" style={{ color: '#E74C3C' }} />
//                                 <span className="text-sm font-semibold" style={{ color: '#E74C3C' }}>Auxiliary Services</span>
//                             </div>
//                             <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
//                                 Complete Financial<br />Support for Your<br />
//                                 <span style={{ color: '#E74C3C' }}>Property Journey</span>
//                             </h1>
//                             <p className="text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.60)' }}>
//                                 Home loans, lease documentation, and financial planning — everything you need under one roof.
//                             </p>
//                         </div>

//                         {/* Stats */}
//                         <div className="grid grid-cols-2 gap-3 shrink-0">
//                             {serviceHighlights.map(h => {
//                                 const Icon = h.icon
//                                 return (
//                                     <div key={h.label} className="text-center px-6 py-4 rounded-xl" style={{
//                                         background: 'rgba(255,255,255,0.08)',
//                                         border: '1px solid rgba(255,255,255,0.12)',
//                                     }}>
//                                         <Icon className="w-5 h-5 mx-auto mb-1" style={{ color: '#E74C3C' }} />
//                                         <p className="font-serif font-bold text-xl text-white">{h.value}</p>
//                                         <p className="text-xs" style={{ color: 'rgba(255,255,255,0.50)' }}>{h.label}</p>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ── Tab Navigation ── */}
//             <div className="bg-white" style={{ borderBottom: '2px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//                 <div className="max-w-7xl mx-auto px-5 sm:px-8">
//                     <div className="flex gap-1">
//                         {TABS.map(tab => {
//                             const Icon = tab.icon
//                             const isActive = activeTab === tab.id
//                             return (
//                                 <button
//                                     key={tab.id}
//                                     onClick={() => setActiveTab(tab.id)}
//                                     className="flex items-center gap-3 py-4 px-6 text-sm font-semibold transition-all relative"
//                                     style={{ color: isActive ? '#C0392B' : '#6B7280' }}
//                                 >
//                                     <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
//                                         style={{ background: isActive ? '#FEE8EA' : '#F5F7FA' }}>
//                                         <Icon className="w-4 h-4" style={{ color: isActive ? '#C0392B' : '#9CA3AF' }} />
//                                     </div>
//                                     <div className="hidden sm:block text-left">
//                                         <p className="leading-none">{tab.label}</p>
//                                         <p className="text-[10px] mt-0.5 font-normal" style={{ color: '#9CA3AF' }}>{tab.sub}</p>
//                                     </div>
//                                     {isActive && (
//                                         <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#C0392B' }} />
//                                     )}
//                                 </button>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* ── Tab Content ── */}
//             <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
//                 {activeTab === 'loan' && <HomeLoanSection />}
//                 {activeTab === 'lease' && <LeaseSection />}
//                 {activeTab === 'emi' && <EMICalculator />}
//             </div>

//             {/* ── CTA ── */}
//             <section className="py-20" style={{ background: '#F5F7FA', borderTop: '1px solid #E8ECF2' }}>
//                 <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
//                     <h2 className="font-serif text-4xl font-bold mb-4" style={{ color: '#0B1F3A' }}>
//                         Need Personal Guidance?
//                     </h2>
//                     <p className="mb-8" style={{ color: '#6B7280' }}>
//                         Talk to our financial advisors — free consultation, no obligations.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <Link
//                             href="/contact"
//                             className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm transition-all"
//                             style={{ background: '#C0392B', color: '#ffffff', boxShadow: '0 4px 16px rgba(192,57,43,0.30)' }}
//                         >
//                             Schedule Free Call <ArrowRight className="w-4 h-4" />
//                         </Link>
//                         <a
//                             href="tel:+919876543210"
//                             className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm transition-all"
//                             style={{ border: '2px solid #0B1F3A', color: '#0B1F3A', background: 'transparent' }}
//                         >
//                             <Phone className="w-4 h-4" />
//                             +91 98765 43210
//                         </a>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }


'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    Home, FileText, Calculator, CheckCircle2, Phone,
    ArrowRight, ChevronDown, IndianRupee, Percent,
    Clock, Shield, Users, Building2, Star, Send,
    TrendingUp, BadgeCheck, Landmark, Banknote
} from 'lucide-react'

// ─── EMI Calculator ──────────────────────────────────────────────────────────

function EMICalculator() {
    const [principal, setPrincipal] = useState(5000000)
    const [rate, setRate] = useState(8.5)
    const [tenure, setTenure] = useState(20)
    const [principalInput, setPrincipalInput] = useState('5000000')
    const [rateInput, setRateInput] = useState('8.5')
    const [tenureInput, setTenureInput] = useState('20')

    const monthlyRate = rate / 12 / 100
    const months = tenure * 12
    const emi = months === 0 ? 0 :
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)
    const totalPayment = emi * months
    const totalInterest = totalPayment - principal
    const interestPct = Math.round((totalInterest / totalPayment) * 100)
    const principalPct = 100 - interestPct

    const fmt = (n: number) => {
        if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`
        if (n >= 100000) return `₹${(n / 100000).toFixed(2)} Lakh`
        return `₹${Math.round(n).toLocaleString('en-IN')}`
    }

    const handlePrincipalSlider = (v: number) => { setPrincipal(v); setPrincipalInput(String(v)) }
    const handleRateSlider = (v: number) => { setRate(v); setRateInput(String(v)) }
    const handleTenureSlider = (v: number) => { setTenure(v); setTenureInput(String(v)) }
    const handlePrincipalBlur = () => { const val = Math.min(50000000, Math.max(500000, Number(principalInput) || 500000)); setPrincipal(val); setPrincipalInput(String(val)) }
    const handleRateBlur = () => { const val = Math.min(15, Math.max(6, Number(rateInput) || 8.5)); setRate(val); setRateInput(String(val)) }
    const handleTenureBlur = () => { const val = Math.min(30, Math.max(1, Math.round(Number(tenureInput)) || 20)); setTenure(val); setTenureInput(String(val)) }

    const inputStyle = {
        border: '1.5px solid #E8ECF2', borderRadius: '10px', color: '#0B1F3A',
        fontWeight: 700, outline: 'none', background: '#FFFFFF', textAlign: 'right' as const,
    }

    return (
        <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
            {/* Header */}
            <div className="px-5 sm:px-8 py-5 sm:py-6" style={{ background: '#1E3A5F' }}>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(192,57,43,0.20)' }}>
                        <Calculator className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#E74C3C' }} />
                    </div>
                    <div>
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-white">EMI Calculator</h3>
                        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>Type a value or drag the slider</p>
                    </div>
                </div>
            </div>

            <div className="p-5 sm:p-8">
                {/* Stack on mobile, 2-col on lg */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">

                    {/* Sliders */}
                    <div className="space-y-7 sm:space-y-8">
                        {/* Loan Amount */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <label className="text-sm font-semibold" style={{ color: '#0B1F3A' }}>Loan Amount</label>
                                <div className="flex items-center gap-1">
                                    <span className="text-sm font-bold" style={{ color: '#C0392B' }}>₹</span>
                                    <input type="number" value={principalInput}
                                        onChange={e => setPrincipalInput(e.target.value)} onBlur={handlePrincipalBlur}
                                        className="w-28 sm:w-32 px-3 py-1.5 text-sm" style={inputStyle} />
                                </div>
                            </div>
                            <input type="range" min={500000} max={50000000} step={100000} value={principal}
                                onChange={e => handlePrincipalSlider(Number(e.target.value))}
                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                style={{ accentColor: '#C0392B', background: `linear-gradient(to right, #C0392B ${((principal - 500000) / (50000000 - 500000)) * 100}%, #E8ECF2 0%)` }} />
                            <div className="flex justify-between text-xs mt-1.5" style={{ color: '#9CA3AF' }}>
                                <span>₹5L</span>
                                <span className="font-medium" style={{ color: '#C0392B' }}>{fmt(principal)}</span>
                                <span>₹5 Cr</span>
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <label className="text-sm font-semibold" style={{ color: '#0B1F3A' }}>Interest Rate (p.a.)</label>
                                <div className="flex items-center gap-1">
                                    <input type="number" value={rateInput}
                                        onChange={e => setRateInput(e.target.value)} onBlur={handleRateBlur} step={0.1}
                                        className="w-16 sm:w-20 px-3 py-1.5 text-sm" style={inputStyle} />
                                    <span className="text-sm font-bold" style={{ color: '#C0392B' }}>%</span>
                                </div>
                            </div>
                            <input type="range" min={6} max={15} step={0.1} value={rate}
                                onChange={e => handleRateSlider(Number(e.target.value))}
                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                style={{ accentColor: '#C0392B', background: `linear-gradient(to right, #C0392B ${((rate - 6) / (15 - 6)) * 100}%, #E8ECF2 0%)` }} />
                            <div className="flex justify-between text-xs mt-1.5" style={{ color: '#9CA3AF' }}>
                                <span>6%</span>
                                <span className="font-medium" style={{ color: '#C0392B' }}>{rate}%</span>
                                <span>15%</span>
                            </div>
                        </div>

                        {/* Tenure */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <label className="text-sm font-semibold" style={{ color: '#0B1F3A' }}>Loan Tenure</label>
                                <div className="flex items-center gap-1">
                                    <input type="number" value={tenureInput}
                                        onChange={e => setTenureInput(e.target.value)} onBlur={handleTenureBlur}
                                        className="w-16 sm:w-20 px-3 py-1.5 text-sm" style={inputStyle} />
                                    <span className="text-sm font-bold" style={{ color: '#C0392B' }}>Yrs</span>
                                </div>
                            </div>
                            <input type="range" min={1} max={30} step={1} value={tenure}
                                onChange={e => handleTenureSlider(Number(e.target.value))}
                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                style={{ accentColor: '#C0392B', background: `linear-gradient(to right, #C0392B ${((tenure - 1) / (30 - 1)) * 100}%, #E8ECF2 0%)` }} />
                            <div className="flex justify-between text-xs mt-1.5" style={{ color: '#9CA3AF' }}>
                                <span>1 Yr</span>
                                <span className="font-medium" style={{ color: '#C0392B' }}>{tenure} Years</span>
                                <span>30 Yrs</span>
                            </div>
                        </div>
                    </div>

                    {/* Result */}
                    <div className="flex flex-col gap-4">
                        <div className="rounded-2xl p-5 sm:p-6 text-center" style={{ background: '#1E3A5F' }}>
                            <p className="text-sm font-medium mb-1" style={{ color: 'rgba(255,255,255,0.60)' }}>Monthly EMI</p>
                            <p className="font-serif font-bold text-3xl sm:text-4xl text-white mb-1">{fmt(emi)}</p>
                            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>per month for {tenure} years</p>
                        </div>

                        <div className="rounded-2xl p-4 sm:p-5" style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
                            <div className="w-full h-3 rounded-full overflow-hidden mb-4 flex">
                                <div className="h-full transition-all duration-500" style={{ width: `${principalPct}%`, background: '#1E3A5F' }} />
                                <div className="h-full transition-all duration-500" style={{ width: `${interestPct}%`, background: '#C0392B' }} />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full shrink-0" style={{ background: '#1E3A5F' }} />
                                        <span className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>Principal Amount</span>
                                    </div>
                                    <span className="font-semibold text-xs sm:text-sm" style={{ color: '#0B1F3A' }}>{fmt(principal)}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full shrink-0" style={{ background: '#C0392B' }} />
                                        <span className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>Total Interest</span>
                                    </div>
                                    <span className="font-semibold text-xs sm:text-sm" style={{ color: '#C0392B' }}>{fmt(totalInterest)}</span>
                                </div>
                                <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
                                    <span className="text-xs sm:text-sm font-semibold" style={{ color: '#0B1F3A' }}>Total Payment</span>
                                    <span className="font-bold text-xs sm:text-sm" style={{ color: '#0B1F3A' }}>{fmt(totalPayment)}</span>
                                </div>
                            </div>
                        </div>

                        <Link href="/contact"
                            className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
                            style={{ background: '#C0392B', boxShadow: '0 4px 16px rgba(192,57,43,0.25)' }}>
                            <Phone className="w-4 h-4" />
                            Get Loan Assistance
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ─── Home Loan Section ────────────────────────────────────────────────────────

function HomeLoanSection() {
    const [form, setForm] = useState({ name: '', phone: '', income: '', amount: '', submitted: false })

    const banks = [
        { name: 'HDFC Bank', rate: '8.35%', logo: 'HD' },
        { name: 'SBI', rate: '8.40%', logo: 'SB' },
        { name: 'ICICI Bank', rate: '8.45%', logo: 'IC' },
        { name: 'Axis Bank', rate: '8.50%', logo: 'AX' },
        { name: 'Kotak Bank', rate: '8.65%', logo: 'KO' },
        { name: 'PNB', rate: '8.55%', logo: 'PN' },
    ]

    const steps = [
        { num: '01', title: 'Eligibility Check', desc: 'Free check in 5 minutes — no documents needed initially.' },
        { num: '02', title: 'Bank Comparison', desc: 'We compare 10+ banks and get you the lowest rate.' },
        { num: '03', title: 'Document Support', desc: 'Our team guides you through every document required.' },
        { num: '04', title: 'Quick Disbursal', desc: 'Loan approved and disbursed within 7–10 working days.' },
    ]

    const benefits = [
        'Zero processing fee assistance',
        'Interest rates from 8.35% p.a.',
        'Loan up to ₹10 Crore',
        'Tenure up to 30 years',
        'Balance transfer available',
        'Top-up loan facility',
    ]

    return (
        <div className="space-y-8 sm:space-y-10">
            {/* Intro */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
                <div>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2"
                        style={{ color: '#C0392B' }}>
                        <span className="w-5 sm:w-6 h-px inline-block" style={{ background: '#C0392B' }} />
                        Hassle-Free Home Loans
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
                        style={{ color: '#0B1F3A' }}>
                        We Handle Your<br />Home Loan, End-to-End
                    </h2>
                    <p className="leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base" style={{ color: '#6B7280' }}>
                        From eligibility check to final disbursal — our dedicated loan desk works with 10+ top banks
                        to ensure you get the best rate, fastest approval, and zero stress.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {benefits.map(b => (
                            <div key={b} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#C0392B' }} />
                                <span className="text-xs sm:text-sm" style={{ color: '#1A1A1A' }}>{b}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Eligibility Form */}
                <div className="bg-white rounded-2xl p-5 sm:p-8"
                    style={{ border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
                    <h3 className="font-serif font-bold text-lg sm:text-xl mb-1" style={{ color: '#0B1F3A' }}>
                        Check Eligibility Free
                    </h3>
                    <p className="text-xs sm:text-sm mb-5 sm:mb-6" style={{ color: '#6B7280' }}>
                        Result in 5 minutes — no credit score impact
                    </p>

                    {form.submitted ? (
                        <div className="text-center py-6 sm:py-8">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                style={{ background: '#DCFCE7' }}>
                                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                            </div>
                            <p className="font-serif font-bold text-base sm:text-lg mb-1" style={{ color: '#0B1F3A' }}>
                                Request Submitted!
                            </p>
                            <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
                                Our loan expert will call you within 30 minutes.
                            </p>
                            <button onClick={() => setForm({ name: '', phone: '', income: '', amount: '', submitted: false })}
                                className="mt-4 text-xs font-semibold underline" style={{ color: '#C0392B' }}>
                                Submit another request
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-3 sm:space-y-4">
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Full Name *</label>
                                    <input type="text" placeholder="Rajesh Sharma"
                                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm focus:outline-none"
                                        style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }} />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Phone *</label>
                                    <input type="tel" placeholder="+91 98765..."
                                        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm focus:outline-none"
                                        style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }} />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Monthly Income</label>
                                <select value={form.income} onChange={e => setForm({ ...form, income: e.target.value })}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm focus:outline-none bg-white"
                                    style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
                                    <option value="">Select range</option>
                                    <option>Below ₹30,000</option>
                                    <option>₹30K – ₹60K</option>
                                    <option>₹60K – ₹1 Lakh</option>
                                    <option>₹1 Lakh – ₹2 Lakh</option>
                                    <option>Above ₹2 Lakh</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Loan Amount Required</label>
                                <select value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm focus:outline-none bg-white"
                                    style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
                                    <option value="">Select amount</option>
                                    <option>Under ₹30 Lakh</option>
                                    <option>₹30L – ₹60L</option>
                                    <option>₹60L – ₹1 Cr</option>
                                    <option>₹1 Cr – ₹2 Cr</option>
                                    <option>Above ₹2 Cr</option>
                                </select>
                            </div>
                            <button type="button"
                                onClick={() => { if (!form.name.trim() || !form.phone.trim()) return; setForm({ ...form, submitted: true }) }}
                                className="w-full py-3 sm:py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                                style={{ background: '#C0392B', color: '#ffffff', boxShadow: '0 4px 16px rgba(192,57,43,0.25)' }}>
                                <Send className="w-4 h-4" />
                                Check My Eligibility
                            </button>
                            <p className="text-center text-[10px] sm:text-xs" style={{ color: '#9CA3AF' }}>
                                Free check · No spam · No credit score impact
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Process Steps — 2 col mobile, 4 col md */}
            <div className="rounded-xl sm:rounded-2xl p-5 sm:p-8"
                style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-5 sm:mb-6 text-center"
                    style={{ color: '#C0392B' }}>
                    How It Works
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {steps.map((s, i) => (
                        <div key={s.num} className="relative text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 font-bold font-serif text-base sm:text-lg text-white"
                                style={{ background: '#C0392B' }}>
                                {s.num}
                            </div>
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-5 sm:top-6 left-[60%] right-0 h-px"
                                    style={{ background: '#E8ECF2' }} />
                            )}
                            <p className="font-semibold text-xs sm:text-sm mb-1" style={{ color: '#0B1F3A' }}>{s.title}</p>
                            <p className="text-[10px] sm:text-xs" style={{ color: '#6B7280' }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bank Partners — 3 col mobile, 6 col md */}
            <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-5 text-center"
                    style={{ color: '#9CA3AF' }}>
                    Our Banking Partners
                </p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
                    {banks.map(bank => (
                        <div key={bank.name} className="bg-white rounded-xl p-3 sm:p-4 text-center"
                            style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 6px rgba(11,31,58,0.04)' }}>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg mx-auto mb-1.5 sm:mb-2 flex items-center justify-center font-bold text-xs sm:text-sm text-white"
                                style={{ background: '#1E3A5F' }}>
                                {bank.logo}
                            </div>
                            <p className="text-[10px] sm:text-xs font-semibold" style={{ color: '#0B1F3A' }}>{bank.name}</p>
                            <p className="text-[10px] sm:text-xs font-bold mt-0.5" style={{ color: '#C0392B' }}>
                                From {bank.rate}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ─── Lease Section ────────────────────────────────────────────────────────────

function LeaseSection() {
    const [leaseForm, setLeaseForm] = useState({ name: '', phone: '', type: '', submitted: false })

    const services = [
        { icon: FileText, title: 'Lease Agreement Drafting', desc: 'Legally sound, court-registered lease agreements tailored to your needs.' },
        { icon: Shield, title: 'Legal Verification', desc: 'Title check, encumbrance certificate, and tenant verification.' },
        { icon: BadgeCheck, title: 'Registration Support', desc: 'Complete assistance for Sub-Registrar office lease registration.' },
        { icon: Users, title: 'Tenant Screening', desc: 'Background check, KYC, and reference verification for landlords.' },
        { icon: Banknote, title: 'Rent Negotiation', desc: 'Market-based pricing to get you the best deal — buy or rent side.' },
        { icon: Landmark, title: 'NOC & Documentation', desc: 'Society NOC, utility transfer, and all pre/post-lease paperwork.' },
    ]

    const leaseTypes = [
        { label: 'Residential Lease', sub: 'Apartments & Villas', color: '#1E3A5F' },
        { label: 'Commercial Lease', sub: 'Offices & Shops', color: '#C0392B' },
        { label: 'Co-working Lease', sub: 'Shared Spaces', color: '#059669' },
        { label: 'Leave & License', sub: 'Short-term Rentals', color: '#D97706' },
    ]

    return (
        <div className="space-y-8 sm:space-y-10">
            {/* Intro */}
            <div className="text-center max-w-2xl mx-auto px-2 sm:px-0">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3"
                    style={{ color: '#C0392B' }}>
                    Complete Lease Support
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
                    style={{ color: '#0B1F3A' }}>
                    Lease With Confidence
                </h2>
                <p className="text-sm sm:text-base" style={{ color: '#6B7280' }}>
                    From drafting the agreement to court registration — our legal experts ensure your lease is
                    airtight, dispute-free, and 100% compliant with UP Rent Control laws.
                </p>
            </div>

            {/* Lease Types — 2 col mobile, 4 col md */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {leaseTypes.map(lt => (
                    <div key={lt.label}
                        className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg cursor-default"
                        style={{ border: '1px solid #E8ECF2' }}>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center"
                            style={{ background: lt.color }}>
                            <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <p className="font-semibold text-xs sm:text-sm mb-0.5" style={{ color: '#0B1F3A' }}>{lt.label}</p>
                        <p className="text-[10px] sm:text-xs" style={{ color: '#6B7280' }}>{lt.sub}</p>
                    </div>
                ))}
            </div>

            {/* Services — 1 col mobile, 2 col sm, 3 col lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {services.map(s => {
                    const Icon = s.icon
                    return (
                        <div key={s.title} className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg"
                            style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.05)' }}>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                                style={{ background: '#FEE8EA' }}>
                                <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#C0392B' }} />
                            </div>
                            <h4 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2" style={{ color: '#0B1F3A' }}>{s.title}</h4>
                            <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>{s.desc}</p>
                        </div>
                    )
                })}
            </div>

            {/* Consultation Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 max-w-2xl mx-auto"
                style={{ border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
                <h3 className="font-serif font-bold text-lg sm:text-xl mb-1 text-center" style={{ color: '#0B1F3A' }}>
                    Book a Free Consultation
                </h3>
                <p className="text-xs sm:text-sm text-center mb-5 sm:mb-6" style={{ color: '#6B7280' }}>
                    Our lease expert will contact you within 2 hours
                </p>
                {leaseForm.submitted ? (
                    <div className="text-center py-5 sm:py-6">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                            style={{ background: '#DCFCE7' }}>
                            <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                        </div>
                        <p className="font-serif font-bold text-base sm:text-lg mb-1" style={{ color: '#0B1F3A' }}>Request Received!</p>
                        <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>Our lease expert will contact you shortly.</p>
                        <button onClick={() => setLeaseForm({ name: '', phone: '', type: '', submitted: false })}
                            className="mt-4 text-xs font-semibold underline" style={{ color: '#C0392B' }}>
                            Submit another request
                        </button>
                    </div>
                ) : (
                    <div className="space-y-3 sm:space-y-4">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div>
                                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Your Name *</label>
                                <input type="text" placeholder="Full name"
                                    value={leaseForm.name} onChange={e => setLeaseForm({ ...leaseForm, name: e.target.value })}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm focus:outline-none"
                                    style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }} />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Phone *</label>
                                <input type="tel" placeholder="+91 98765..."
                                    value={leaseForm.phone} onChange={e => setLeaseForm({ ...leaseForm, phone: e.target.value })}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm focus:outline-none"
                                    style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }} />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Lease Type</label>
                            <select value={leaseForm.type} onChange={e => setLeaseForm({ ...leaseForm, type: e.target.value })}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm focus:outline-none bg-white"
                                style={{ border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
                                <option value="">Select lease type</option>
                                <option>Residential Lease</option>
                                <option>Commercial Lease</option>
                                <option>Co-working Lease</option>
                                <option>Leave & License</option>
                            </select>
                        </div>
                        <button type="button"
                            onClick={() => { if (!leaseForm.name.trim() || !leaseForm.phone.trim()) return; setLeaseForm({ ...leaseForm, submitted: true }) }}
                            className="w-full py-3 sm:py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                            style={{ background: '#C0392B', color: '#ffffff', boxShadow: '0 4px 16px rgba(192,57,43,0.25)' }}>
                            <Send className="w-4 h-4" />
                            Book Free Consultation
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const TABS = [
    { id: 'loan', label: 'Home Loan', icon: Home, sub: 'Best rates guaranteed' },
    { id: 'lease', label: 'Lease Assistance', icon: FileText, sub: 'Legal & documentation' },
    { id: 'emi', label: 'EMI Calculator', icon: Calculator, sub: 'Plan your payments' },
]

export default function ServicesClient() {
    const [activeTab, setActiveTab] = useState('loan')

    const serviceHighlights = [
        { icon: TrendingUp, value: '10+', label: 'Bank Partners' },
        { icon: Star, value: '4.9★', label: 'Client Rating' },
        { icon: Clock, value: '24 Hrs', label: 'Avg. Approval' },
        { icon: Users, value: '2500+', label: 'Loans Assisted' },
    ]

    return (
        <div className="pt-20 min-h-screen" style={{ background: '#FFFFFF' }}>

            {/* ── Hero ── */}
            <section className="relative py-14 sm:py-20 overflow-hidden" style={{ background: '#1E3A5F' }}>
                <div className="absolute inset-0 opacity-[0.06]" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }} />
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{
                    background: 'linear-gradient(90deg, #C0392B 0%, #E74C3C 35%, transparent 65%)',
                }} />
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{
                    background: 'radial-gradient(circle, rgba(192,57,43,0.12) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Stack on mobile, row on lg */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 mb-5 sm:mb-6"
                                style={{ background: 'rgba(192,57,43,0.15)', border: '1px solid rgba(192,57,43,0.30)' }}>
                                <Building2 className="w-3.5 h-3.5 shrink-0" style={{ color: '#E74C3C' }} />
                                <span className="text-xs sm:text-sm font-semibold" style={{ color: '#E74C3C' }}>
                                    Auxiliary Services
                                </span>
                            </div>
                            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
                                Complete Financial<br />Support for Your<br />
                                <span style={{ color: '#E74C3C' }}>Property Journey</span>
                            </h1>
                            <p className="text-sm sm:text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.60)' }}>
                                Home loans, lease documentation, and financial planning — everything under one roof.
                            </p>
                        </div>

                        {/* Stats — 2x2 grid, same on mobile and desktop */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 shrink-0 w-full lg:w-auto">
                            {serviceHighlights.map(h => {
                                const Icon = h.icon
                                return (
                                    <div key={h.label} className="text-center px-4 sm:px-6 py-3 sm:py-4 rounded-xl"
                                        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1" style={{ color: '#E74C3C' }} />
                                        <p className="font-serif font-bold text-lg sm:text-xl text-white">{h.value}</p>
                                        <p className="text-[10px] sm:text-xs" style={{ color: 'rgba(255,255,255,0.50)' }}>{h.label}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Tab Navigation ── */}
            <div className="bg-white" style={{ borderBottom: '2px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-0 sm:gap-1 overflow-x-auto">
                        {TABS.map(tab => {
                            const Icon = tab.icon
                            const isActive = activeTab === tab.id
                            return (
                                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                    className="flex items-center gap-2 sm:gap-3 py-3.5 sm:py-4 px-3 sm:px-6 text-xs sm:text-sm font-semibold transition-all relative whitespace-nowrap shrink-0"
                                    style={{ color: isActive ? '#C0392B' : '#6B7280' }}>
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0"
                                        style={{ background: isActive ? '#FEE8EA' : '#F5F7FA' }}>
                                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                                            style={{ color: isActive ? '#C0392B' : '#9CA3AF' }} />
                                    </div>
                                    <div className="text-left">
                                        <p className="leading-none">{tab.label}</p>
                                        <p className="text-[9px] sm:text-[10px] mt-0.5 font-normal hidden sm:block"
                                            style={{ color: '#9CA3AF' }}>{tab.sub}</p>
                                    </div>
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 right-0 h-[2px]"
                                            style={{ background: '#C0392B' }} />
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* ── Tab Content ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {activeTab === 'loan' && <HomeLoanSection />}
                {activeTab === 'lease' && <LeaseSection />}
                {activeTab === 'emi' && <EMICalculator />}
            </div>

            {/* ── CTA ── */}
            <section className="py-14 sm:py-20" style={{ background: '#F5F7FA', borderTop: '1px solid #E8ECF2' }}>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#0B1F3A' }}>
                        Need Personal Guidance?
                    </h2>
                    <p className="mb-6 sm:mb-8 text-sm sm:text-base" style={{ color: '#6B7280' }}>
                        Talk to our financial advisors — free consultation, no obligations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <Link href="/contact"
                            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold text-sm transition-all"
                            style={{ background: '#C0392B', color: '#ffffff', boxShadow: '0 4px 16px rgba(192,57,43,0.30)' }}>
                            Schedule Free Call <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href="tel:+919876543210"
                            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold text-sm transition-all"
                            style={{ border: '2px solid #0B1F3A', color: '#0B1F3A', background: 'transparent' }}>
                            <Phone className="w-4 h-4" />
                            +91 98765 43210
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}