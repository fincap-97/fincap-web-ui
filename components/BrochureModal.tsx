


// 'use client'

// import { useState } from 'react'
// import { X, Download, CheckCircle2, FileText, Phone, Mail, User } from 'lucide-react'

// interface BrochureModalProps {
//     isOpen: boolean
//     onClose: () => void
// }

// const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxsIYKwYbNbwHMUwdYfOp-JPJgTTBHkiJXUg8achb3KYSEtSle9-Lo4NrZAVOojWBSY6g/exec'

// // ✅ Brochures
// const brochures = [
//     { name: 'Imperial Residencia', file: '/Imperial Residencia brochure.pdf' },
//     { name: 'Kailasha Awadh', file: '/Kailasha Awadh brochure.pdf' },
//     { name: 'ORO Constella', file: '/ORO brochure.pdf' }
// ]

// export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
//     const [form, setForm] = useState({ name: '', phone: '', email: '' })
//     const [submitted, setSubmitted] = useState(false)
//     const [loading, setLoading] = useState(false)

//     if (!isOpen) return null

//     const handleSubmit = async () => {
//         if (!form.name.trim() || !form.phone.trim()) return

//         setLoading(true)

//         try {
//             const params = new URLSearchParams()
//             params.append('name', form.name.trim())
//             params.append('phone', form.phone.trim())
//             params.append('email', form.email.trim())

//             await fetch(SHEET_URL, {
//                 method: 'POST',
//                 mode: 'no-cors',
//                 body: params,
//             })
//         } catch (err) {
//             console.error('Sheet error:', err)
//         }

//         setSubmitted(true)
//         setLoading(false)
//     }

//     const handleClose = () => {
//         onClose()
//         setTimeout(() => {
//             setForm({ name: '', phone: '', email: '' })
//             setSubmitted(false)
//             setLoading(false)
//         }, 300)
//     }

//     return (
//         <div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             style={{ background: 'rgba(11,31,58,0.60)', backdropFilter: 'blur(4px)' }}
//             onClick={handleClose}
//         >
//             <div
//                 className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
//                 style={{ boxShadow: '0 24px 64px rgba(11,31,58,0.25)' }}
//                 onClick={e => e.stopPropagation()}
//             >
//                 {/* Header */}
//                 <div className="relative px-8 pt-8 pb-6" style={{ background: '#0B1F3A' }}>
//                     <button
//                         onClick={handleClose}
//                         className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
//                         style={{ background: 'rgba(255,255,255,0.10)', color: '#fff' }}
//                     >
//                         <X className="w-4 h-4" />
//                     </button>

//                     <div className="flex items-center gap-4">
//                         <div className="w-12 h-12 rounded-xl flex items-center justify-center"
//                             style={{ background: 'rgba(230,57,70,0.20)' }}>
//                             <FileText className="w-6 h-6" style={{ color: '#E63946' }} />
//                         </div>
//                         <div>
//                             <h2 className="font-serif font-bold text-xl text-white">
//                                 Download Brochure
//                             </h2>
//                             <p className="text-xs text-white/60">
//                                 Fill details to continue
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Body */}
//                 <div className="px-8 py-7">
//                     {submitted ? (
//                         /* ✅ SUCCESS */
//                         <div className="text-center py-4">
//                             <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//                                 style={{ background: '#DCFCE7' }}>
//                                 <CheckCircle2 className="w-8 h-8 text-green-600" />
//                             </div>

//                             <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>
//                                 Choose Your Brochure
//                             </h3>

//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Select and download the brochure you're interested in
//                             </p>

//                             <div className="space-y-3">
//                                 {brochures.map((b, i) => (
//                                     <a
//                                         key={i}
//                                         href={b.file}
//                                         download
//                                         className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all"
//                                         style={{
//                                             background: '#E63946',
//                                             boxShadow: '0 4px 16px rgba(230,57,70,0.30)'
//                                         }}
//                                     >
//                                         <Download className="w-4 h-4" />
//                                         {b.name}
//                                     </a>
//                                 ))}
//                             </div>

//                             <button
//                                 onClick={handleClose}
//                                 className="w-full mt-4 py-3 rounded-xl font-semibold text-sm text-white"
//                                 style={{ background: '#0B1F3A' }}
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     ) : (
//                         /* ✅ PREMIUM FORM (RESTORED) */
//                         <>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Please share your details. We'll send you our complete property brochure.
//                             </p>

//                             <div className="space-y-4">

//                                 {/* Name */}
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Full Name <span style={{ color: '#E63946' }}>*</span>
//                                     </label>
//                                     <div className="relative">
//                                         <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="text"
//                                             placeholder="Rajesh Sharma"
//                                             value={form.name}
//                                             onChange={e => setForm({ ...form, name: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Phone */}
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Phone Number <span style={{ color: '#E63946' }}>*</span>
//                                     </label>
//                                     <div className="relative">
//                                         <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="tel"
//                                             placeholder="+91 98765 43210"
//                                             value={form.phone}
//                                             onChange={e => setForm({ ...form, phone: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Email */}
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Email Address <span className="text-gray-400">(optional)</span>
//                                     </label>
//                                     <div className="relative">
//                                         <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="email"
//                                             placeholder="rajesh@email.com"
//                                             value={form.email}
//                                             onChange={e => setForm({ ...form, email: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                         />
//                                     </div>
//                                 </div>

//                             </div>

//                             {/* Button */}
//                             <button
//                                 onClick={handleSubmit}
//                                 disabled={loading || !form.name.trim() || !form.phone.trim()}
//                                 className="w-full mt-6 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
//                                 style={{
//                                     background: loading || !form.name || !form.phone ? '#9CA3AF' : '#E63946',
//                                     boxShadow: '0 4px 16px rgba(230,57,70,0.30)'
//                                 }}
//                             >
//                                 {loading ? (
//                                     <>
//                                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                         Saving...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <Download className="w-4 h-4" />
//                                         Continue
//                                     </>
//                                 )}
//                             </button>

//                             <p className="text-center text-xs mt-3 text-gray-400">
//                                 🔒 Your information is 100% secure
//                             </p>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// 'use client'

// import { useState } from 'react'
// import { X, Download, CheckCircle2, FileText, Phone, Mail, User, ArrowLeft } from 'lucide-react'

// interface BrochureModalProps {
//     isOpen: boolean
//     onClose: () => void
// }

// const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxsIYKwYbNbwHMUwdYfOp-JPJgTTBHkiJXUg8achb3KYSEtSle9-Lo4NrZAVOojWBSY6g/exec'

// const brochures = [
//     { name: 'Imperial Residencia', file: '/Imperial Residencia brochure.pdf' },
//     { name: 'Kailasha Awadh', file: '/Kailasha Awadh brochure.pdf' },
//     { name: 'ORO Constella', file: '/ORO brochure.pdf' }
// ]

// type Step = 'select' | 'form' | 'done'

// export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
//     const [step, setStep] = useState<Step>('select')
//     const [selected, setSelected] = useState<typeof brochures[0] | null>(null)
//     const [form, setForm] = useState({ name: '', phone: '', email: '' })
//     const [loading, setLoading] = useState(false)

//     if (!isOpen) return null

//     const handleSelectBrochure = (b: typeof brochures[0]) => {
//         setSelected(b)
//         setStep('form')
//     }

//     const handleSubmit = async () => {
//         if (!form.name.trim() || !form.phone.trim()) return
//         setLoading(true)
//         try {
//             const params = new URLSearchParams()
//             params.append('name', form.name.trim())
//             params.append('phone', form.phone.trim())
//             params.append('email', form.email.trim())
//             params.append('brochure', selected?.name ?? '')
//             await fetch(SHEET_URL, {
//                 method: 'POST',
//                 mode: 'no-cors',
//                 body: params,
//             })
//         } catch (err) {
//             console.error('Sheet error:', err)
//         }
//         setStep('done')
//         setLoading(false)
//     }

//     const handleClose = () => {
//         onClose()
//         setTimeout(() => {
//             setStep('select')
//             setSelected(null)
//             setForm({ name: '', phone: '', email: '' })
//             setLoading(false)
//         }, 300)
//     }

//     return (
//         <div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             style={{ background: 'rgba(11,31,58,0.60)', backdropFilter: 'blur(4px)' }}
//             onClick={handleClose}
//         >
//             <div
//                 className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
//                 style={{ boxShadow: '0 24px 64px rgba(11,31,58,0.25)' }}
//                 onClick={e => e.stopPropagation()}
//             >
//                 {/* Header */}
//                 <div className="relative px-8 pt-8 pb-6" style={{ background: '#0B1F3A' }}>
//                     <button
//                         onClick={handleClose}
//                         className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
//                         style={{ background: 'rgba(255,255,255,0.10)', color: '#fff' }}
//                     >
//                         <X className="w-4 h-4" />
//                     </button>

//                     <div className="flex items-center gap-4">
//                         <div className="w-12 h-12 rounded-xl flex items-center justify-center"
//                             style={{ background: 'rgba(230,57,70,0.20)' }}>
//                             <FileText className="w-6 h-6" style={{ color: '#E63946' }} />
//                         </div>
//                         <div>
//                             <h2 className="font-serif font-bold text-xl text-white">
//                                 {step === 'select' ? 'Select Brochure' : step === 'form' ? 'Your Details' : 'Download Ready'}
//                             </h2>
//                             <p className="text-xs text-white/60">
//                                 {step === 'select' ? 'Choose a project brochure' : step === 'form' ? `${selected?.name}` : 'Click below to download'}
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Body */}
//                 <div className="px-8 py-7">

//                     {/* STEP 1 — Select Brochure */}
//                     {step === 'select' && (
//                         <div>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Select the project brochure you want to download.
//                             </p>
//                             <div className="space-y-3">
//                                 {brochures.map((b, i) => (
//                                     <button
//                                         key={i}
//                                         onClick={() => handleSelectBrochure(b)}
//                                         className="w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all group"
//                                         style={{ border: '1.5px solid #E8ECF2', background: '#F9FAFB' }}
//                                         onMouseEnter={e => {
//                                             e.currentTarget.style.borderColor = '#E63946'
//                                             e.currentTarget.style.background = '#FEE8EA'
//                                         }}
//                                         onMouseLeave={e => {
//                                             e.currentTarget.style.borderColor = '#E8ECF2'
//                                             e.currentTarget.style.background = '#F9FAFB'
//                                         }}
//                                     >
//                                         <div className="flex items-center gap-3">
//                                             <div className="w-9 h-9 rounded-lg flex items-center justify-center"
//                                                 style={{ background: '#FEE8EA' }}>
//                                                 <FileText className="w-4 h-4" style={{ color: '#E63946' }} />
//                                             </div>
//                                             <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>
//                                                 {b.name}
//                                             </span>
//                                         </div>
//                                         <Download className="w-4 h-4" style={{ color: '#E63946' }} />
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {/* STEP 2 — Fill Form */}
//                     {step === 'form' && (
//                         <>
//                             <button
//                                 onClick={() => setStep('select')}
//                                 className="flex items-center gap-1.5 text-xs font-semibold mb-5"
//                                 style={{ color: '#6B7280' }}
//                             >
//                                 <ArrowLeft className="w-3.5 h-3.5" /> Back to brochures
//                             </button>

//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Please fill in your details to download the <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong> brochure.
//                             </p>

//                             <div className="space-y-4">
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Full Name <span style={{ color: '#E63946' }}>*</span>
//                                     </label>
//                                     <div className="relative">
//                                         <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="text"
//                                             placeholder="Rajesh Sharma"
//                                             value={form.name}
//                                             onChange={e => setForm({ ...form, name: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Phone Number <span style={{ color: '#E63946' }}>*</span>
//                                     </label>
//                                     <div className="relative">
//                                         <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="tel"
//                                             placeholder="+91 98765 43210"
//                                             value={form.phone}
//                                             onChange={e => setForm({ ...form, phone: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Email Address <span className="text-gray-400">(optional)</span>
//                                     </label>
//                                     <div className="relative">
//                                         <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="email"
//                                             placeholder="rajesh@email.com"
//                                             value={form.email}
//                                             onChange={e => setForm({ ...form, email: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             <button
//                                 onClick={handleSubmit}
//                                 disabled={loading || !form.name.trim() || !form.phone.trim()}
//                                 className="w-full mt-6 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
//                                 style={{
//                                     background: loading || !form.name || !form.phone ? '#9CA3AF' : '#E63946',
//                                     boxShadow: '0 4px 16px rgba(230,57,70,0.30)'
//                                 }}
//                             >
//                                 {loading ? (
//                                     <>
//                                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                         Saving...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <Download className="w-4 h-4" />
//                                         Continue to Download
//                                     </>
//                                 )}
//                             </button>

//                             <p className="text-center text-xs mt-3 text-gray-400">
//                                 🔒 Your information is 100% secure
//                             </p>
//                         </>
//                     )}

//                     {/* STEP 3 — Download */}
//                     {step === 'done' && (
//                         <div className="text-center py-4">
//                             <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//                                 style={{ background: '#DCFCE7' }}>
//                                 <CheckCircle2 className="w-8 h-8 text-green-600" />
//                             </div>
//                             <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>
//                                 Thank You!
//                             </h3>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Click below to download the <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong> brochure.
//                             </p>
//                             <a
//                                 href={selected?.file}
//                                 download
//                                 className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all"
//                                 style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}
//                             >
//                                 <Download className="w-4 h-4" />
//                                 Download {selected?.name}
//                             </a>
//                             <button
//                                 onClick={() => setStep('select')}
//                                 className="w-full mt-3 py-3 rounded-xl font-semibold text-sm"
//                                 style={{ background: '#F5F7FA', color: '#0B1F3A' }}
//                             >
//                                 Download Another
//                             </button>
//                             <button
//                                 onClick={handleClose}
//                                 className="w-full mt-2 py-3 rounded-xl font-semibold text-sm text-white"
//                                 style={{ background: '#0B1F3A' }}
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }




// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { X, Download, CheckCircle2, FileText, Phone, Mail, User, ArrowLeft, ShieldCheck } from 'lucide-react'

// interface BrochureModalProps {
//     isOpen: boolean
//     onClose: () => void
// }

// const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxsIYKwYbNbwHMUwdYfOp-JPJgTTBHkiJXUg8achb3KYSEtSle9-Lo4NrZAVOojWBSY6g/exec'

// const brochures = [
//     { name: 'Imperial Residencia', file: '/Imperial Residencia brochure.pdf' },
//     { name: 'Kailasha Awadh', file: '/Kailasha Awadh brochure.pdf' },
//     { name: 'ORO Constella', file: '/ORO brochure.pdf' }
// ]

// type Step = 'select' | 'form' | 'otp' | 'done'

// export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
//     const [step, setStep] = useState<Step>('select')
//     const [selected, setSelected] = useState<typeof brochures[0] | null>(null)
//     const [form, setForm] = useState({ name: '', phone: '', email: '' })
//     const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', ''])
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState('')
//     const [resendTimer, setResendTimer] = useState(0)

//     const otpRefs = useRef<(HTMLInputElement | null)[]>([])

//     // Resend countdown timer
//     useEffect(() => {
//         if (resendTimer <= 0) return
//         const t = setTimeout(() => setResendTimer(r => r - 1), 1000)
//         return () => clearTimeout(t)
//     }, [resendTimer])

//     if (!isOpen) return null

//     const handleSelectBrochure = (b: typeof brochures[0]) => {
//         setSelected(b)
//         setStep('form')
//         setError('')
//     }

//     // Step 2: Send OTP
//     const handleSendOtp = async () => {
//         if (!form.name.trim() || !form.phone.trim()) return
//         setLoading(true)
//         setError('')
//         try {
//             const res = await fetch('/api/send-otp', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ phone: form.phone.trim() })
//             })
//             const data = await res.json()
//             if (!res.ok) {
//                 setError(data.error || 'OTP send failed. Try again.')
//                 setLoading(false)
//                 return
//             }
//             setStep('otp')
//             setOtpDigits(['', '', '', '', '', ''])
//             setResendTimer(30)
//             setTimeout(() => otpRefs.current[0]?.focus(), 100)
//         } catch {
//             setError('Network error. Please try again.')
//         }
//         setLoading(false)
//     }

//     // OTP input handling — auto-jump to next box
//     const handleOtpChange = (index: number, value: string) => {
//         if (!/^\d*$/.test(value)) return
//         const newDigits = [...otpDigits]
//         newDigits[index] = value.slice(-1)
//         setOtpDigits(newDigits)
//         setError('')
//         if (value && index < 5) {
//             otpRefs.current[index + 1]?.focus()
//         }
//     }

//     const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
//         if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
//             otpRefs.current[index - 1]?.focus()
//         }
//     }

//     // Step 3: Verify OTP
//     const handleVerifyOtp = async () => {
//         const otp = otpDigits.join('')
//         if (otp.length !== 6) {
//             setError('Please enter all 6 digits.')
//             return
//         }
//         setLoading(true)
//         setError('')
//         try {
//             const res = await fetch('/api/verify-otp', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ phone: form.phone.trim(), otp })
//             })
//             const data = await res.json()
//             if (!res.ok) {
//                 setError(data.error || 'Incorrect OTP.')
//                 setLoading(false)
//                 return
//             }

//             // ✅ OTP verified — save to Google Sheet
//             try {
//                 const params = new URLSearchParams()
//                 params.append('name', form.name.trim())
//                 params.append('phone', form.phone.trim())
//                 params.append('email', form.email.trim())
//                 params.append('brochure', selected?.name ?? '')
//                 await fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', body: params })
//             } catch (err) {
//                 console.error('Sheet error:', err)
//             }

//             setStep('done')
//         } catch {
//             setError('Network error. Please try again.')
//         }
//         setLoading(false)
//     }

//     // Resend OTP
//     const handleResend = async () => {
//         if (resendTimer > 0) return
//         setLoading(true)
//         setError('')
//         try {
//             await fetch('/api/send-otp', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ phone: form.phone.trim() })
//             })
//             setOtpDigits(['', '', '', '', '', ''])
//             setResendTimer(30)
//             setTimeout(() => otpRefs.current[0]?.focus(), 100)
//         } catch {
//             setError('Resend failed. Try again.')
//         }
//         setLoading(false)
//     }

//     const handleClose = () => {
//         onClose()
//         setTimeout(() => {
//             setStep('select')
//             setSelected(null)
//             setForm({ name: '', phone: '', email: '' })
//             setOtpDigits(['', '', '', '', '', ''])
//             setLoading(false)
//             setError('')
//             setResendTimer(0)
//         }, 300)
//     }

//     // Header title/subtitle based on step
//     const headerTitle = {
//         select: 'Select Brochure',
//         form: 'Your Details',
//         otp: 'Verify Phone',
//         done: 'Download Ready'
//     }[step]

//     const headerSub = {
//         select: 'Choose a project brochure',
//         form: selected?.name ?? '',
//         otp: `OTP sent to ${form.phone}`,
//         done: 'Click below to download'
//     }[step]

//     return (
//         <div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             style={{ background: 'rgba(11,31,58,0.60)', backdropFilter: 'blur(4px)' }}
//             onClick={handleClose}
//         >
//             <div
//                 className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
//                 style={{ boxShadow: '0 24px 64px rgba(11,31,58,0.25)' }}
//                 onClick={e => e.stopPropagation()}
//             >
//                 {/* Header */}
//                 <div className="relative px-8 pt-8 pb-6" style={{ background: '#0B1F3A' }}>
//                     <button
//                         onClick={handleClose}
//                         className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
//                         style={{ background: 'rgba(255,255,255,0.10)', color: '#fff' }}
//                     >
//                         <X className="w-4 h-4" />
//                     </button>
//                     <div className="flex items-center gap-4">
//                         <div className="w-12 h-12 rounded-xl flex items-center justify-center"
//                             style={{ background: 'rgba(230,57,70,0.20)' }}>
//                             {step === 'otp'
//                                 ? <ShieldCheck className="w-6 h-6" style={{ color: '#E63946' }} />
//                                 : <FileText className="w-6 h-6" style={{ color: '#E63946' }} />
//                             }
//                         </div>
//                         <div>
//                             <h2 className="font-serif font-bold text-xl text-white">{headerTitle}</h2>
//                             <p className="text-xs text-white/60">{headerSub}</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Body */}
//                 <div className="px-8 py-7">

//                     {/* STEP 1 — Select Brochure */}
//                     {step === 'select' && (
//                         <div>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Select the project brochure you want to download.
//                             </p>
//                             <div className="space-y-3">
//                                 {brochures.map((b, i) => (
//                                     <button
//                                         key={i}
//                                         onClick={() => handleSelectBrochure(b)}
//                                         className="w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all"
//                                         style={{ border: '1.5px solid #E8ECF2', background: '#F9FAFB' }}
//                                         onMouseEnter={e => {
//                                             e.currentTarget.style.borderColor = '#E63946'
//                                             e.currentTarget.style.background = '#FEE8EA'
//                                         }}
//                                         onMouseLeave={e => {
//                                             e.currentTarget.style.borderColor = '#E8ECF2'
//                                             e.currentTarget.style.background = '#F9FAFB'
//                                         }}
//                                     >
//                                         <div className="flex items-center gap-3">
//                                             <div className="w-9 h-9 rounded-lg flex items-center justify-center"
//                                                 style={{ background: '#FEE8EA' }}>
//                                                 <FileText className="w-4 h-4" style={{ color: '#E63946' }} />
//                                             </div>
//                                             <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>
//                                                 {b.name}
//                                             </span>
//                                         </div>
//                                         <Download className="w-4 h-4" style={{ color: '#E63946' }} />
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {/* STEP 2 — Fill Form */}
//                     {step === 'form' && (
//                         <>
//                             <button
//                                 onClick={() => setStep('select')}
//                                 className="flex items-center gap-1.5 text-xs font-semibold mb-5"
//                                 style={{ color: '#6B7280' }}
//                             >
//                                 <ArrowLeft className="w-3.5 h-3.5" /> Back to brochures
//                             </button>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Fill in your details to download <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong>.
//                             </p>
//                             <div className="space-y-4">
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Full Name <span style={{ color: '#E63946' }}>*</span>
//                                     </label>
//                                     <div className="relative">
//                                         <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="text"
//                                             placeholder="Rajesh Sharma"
//                                             value={form.name}
//                                             onChange={e => setForm({ ...form, name: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Phone Number <span style={{ color: '#E63946' }}>*</span>
//                                     </label>
//                                     <div className="relative">
//                                         <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="tel"
//                                             placeholder="+91 98765 43210"
//                                             value={form.phone}
//                                             onChange={e => setForm({ ...form, phone: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Email Address <span className="text-gray-400">(optional)</span>
//                                     </label>
//                                     <div className="relative">
//                                         <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="email"
//                                             placeholder="rajesh@email.com"
//                                             value={form.email}
//                                             onChange={e => setForm({ ...form, email: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {error && (
//                                 <p className="text-xs mt-3 text-red-500 text-center">{error}</p>
//                             )}

//                             <button
//                                 onClick={handleSendOtp}
//                                 disabled={loading || !form.name.trim() || !form.phone.trim()}
//                                 className="w-full mt-6 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
//                                 style={{
//                                     background: loading || !form.name || !form.phone ? '#9CA3AF' : '#E63946',
//                                     boxShadow: '0 4px 16px rgba(230,57,70,0.30)'
//                                 }}
//                             >
//                                 {loading ? (
//                                     <>
//                                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                         Sending OTP...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <ShieldCheck className="w-4 h-4" />
//                                         Send OTP to Verify
//                                     </>
//                                 )}
//                             </button>
//                             <p className="text-center text-xs mt-3 text-gray-400">
//                                 🔒 OTP will be sent to your phone number
//                             </p>
//                         </>
//                     )}

//                     {/* STEP 3 — OTP Verification */}
//                     {step === 'otp' && (
//                         <>
//                             <button
//                                 onClick={() => { setStep('form'); setError('') }}
//                                 className="flex items-center gap-1.5 text-xs font-semibold mb-5"
//                                 style={{ color: '#6B7280' }}
//                             >
//                                 <ArrowLeft className="w-3.5 h-3.5" /> Back
//                             </button>

//                             <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
//                                 Enter the 6-digit OTP sent to
//                             </p>
//                             <p className="font-bold text-sm mb-6" style={{ color: '#0B1F3A' }}>
//                                 {form.phone}
//                             </p>

//                             {/* OTP Input Boxes */}
//                             <div className="flex gap-2 justify-center mb-2">
//                                 {otpDigits.map((digit, i) => (
//                                     <input
//                                         key={i}
//                                         ref={el => { otpRefs.current[i] = el }}
//                                         type="text"
//                                         inputMode="numeric"
//                                         maxLength={1}
//                                         value={digit}
//                                         onChange={e => handleOtpChange(i, e.target.value)}
//                                         onKeyDown={e => handleOtpKeyDown(i, e)}
//                                         className="w-11 h-12 text-center text-lg font-bold rounded-xl border-2 focus:outline-none transition-all"
//                                         style={{
//                                             borderColor: digit ? '#E63946' : '#E8ECF2',
//                                             color: '#0B1F3A',
//                                             background: digit ? '#FEE8EA' : '#F9FAFB'
//                                         }}
//                                     />
//                                 ))}
//                             </div>

//                             {error && (
//                                 <p className="text-xs mt-2 mb-2 text-red-500 text-center">{error}</p>
//                             )}

//                             {/* Resend */}
//                             <div className="text-center mb-6 mt-3">
//                                 {resendTimer > 0 ? (
//                                     <p className="text-xs text-gray-400">
//                                         Resend OTP in <span style={{ color: '#E63946' }}>{resendTimer}s</span>
//                                     </p>
//                                 ) : (
//                                     <button
//                                         onClick={handleResend}
//                                         className="text-xs font-semibold"
//                                         style={{ color: '#E63946' }}
//                                     >
//                                         Resend OTP
//                                     </button>
//                                 )}
//                             </div>

//                             <button
//                                 onClick={handleVerifyOtp}
//                                 disabled={loading || otpDigits.join('').length !== 6}
//                                 className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
//                                 style={{
//                                     background: loading || otpDigits.join('').length !== 6 ? '#9CA3AF' : '#E63946',
//                                     boxShadow: '0 4px 16px rgba(230,57,70,0.30)'
//                                 }}
//                             >
//                                 {loading ? (
//                                     <>
//                                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                         Verifying...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <ShieldCheck className="w-4 h-4" />
//                                         Verify & Continue
//                                     </>
//                                 )}
//                             </button>
//                         </>
//                     )}

//                     {/* STEP 4 — Download */}
//                     {step === 'done' && (
//                         <div className="text-center py-4">
//                             <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//                                 style={{ background: '#DCFCE7' }}>
//                                 <CheckCircle2 className="w-8 h-8 text-green-600" />
//                             </div>
//                             <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>
//                                 Thank You!
//                             </h3>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Click below to download the <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong> brochure.
//                             </p>
//                             <a
//                                 href={selected?.file}
//                                 download
//                                 className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all"
//                                 style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}
//                             >
//                                 <Download className="w-4 h-4" />
//                                 Download {selected?.name}
//                             </a>
//                             <button
//                                 onClick={() => setStep('select')}
//                                 className="w-full mt-3 py-3 rounded-xl font-semibold text-sm"
//                                 style={{ background: '#F5F7FA', color: '#0B1F3A' }}
//                             >
//                                 Download Another
//                             </button>
//                             <button
//                                 onClick={handleClose}
//                                 className="w-full mt-2 py-3 rounded-xl font-semibold text-sm text-white"
//                                 style={{ background: '#0B1F3A' }}
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }


// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { X, Download, CheckCircle2, FileText, Phone, Mail, User, ArrowLeft, ShieldCheck } from 'lucide-react'
// import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth'
// import { auth } from '@/lib/firebase'

// declare global {
//     interface Window {
//         recaptchaVerifier?: RecaptchaVerifier
//     }
// }

// interface BrochureModalProps {
//     isOpen: boolean
//     onClose: () => void
// }

// const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxsIYKwYbNbwHMUwdYfOp-JPJgTTBHkiJXUg8achb3KYSEtSle9-Lo4NrZAVOojWBSY6g/exec'

// const brochures = [
//     { name: 'Imperial Residencia', file: '/Imperial Residencia brochure.pdf' },
//     { name: 'Kailasha Awadh', file: '/Kailasha Awadh brochure.pdf' },
//     { name: 'ORO Constella', file: '/ORO brochure.pdf' }
// ]

// type Step = 'select' | 'form' | 'otp' | 'done'

// export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
//     const [step, setStep] = useState<Step>('select')
//     const [selected, setSelected] = useState<typeof brochures[0] | null>(null)
//     const [form, setForm] = useState({ name: '', phone: '', email: '' })
//     const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', ''])
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState('')
//     const [resendTimer, setResendTimer] = useState(0)

//     const otpRefs = useRef<(HTMLInputElement | null)[]>([])
//     const confirmationRef = useRef<ConfirmationResult | null>(null)

//     // Resend countdown timer
//     useEffect(() => {
//         if (resendTimer <= 0) return
//         const t = setTimeout(() => setResendTimer(r => r - 1), 1000)
//         return () => clearTimeout(t)
//     }, [resendTimer])

//     // Cleanup reCAPTCHA on unmount
//     useEffect(() => {
//         return () => {
//             if (window.recaptchaVerifier) {
//                 window.recaptchaVerifier.clear()
//                 window.recaptchaVerifier = undefined
//             }
//         }
//     }, [])

//     if (!isOpen) return null

//     // Setup invisible reCAPTCHA
//     const setupRecaptcha = () => {
//         if (!window.recaptchaVerifier) {
//             window.recaptchaVerifier = new RecaptchaVerifier(
//                 auth,
//                 'recaptcha-container',
//                 { size: 'invisible' }
//             )
//         }
//         return window.recaptchaVerifier
//     }

//     const handleSelectBrochure = (b: typeof brochures[0]) => {
//         setSelected(b)
//         setStep('form')
//         setError('')
//     }

//     // ✅ Step 2: Send OTP via Firebase
//     const handleSendOtp = async () => {
//         if (!form.name.trim() || !form.phone.trim()) return
//         setLoading(true)
//         setError('')
//         try {
//             const cleanPhone = form.phone.replace(/\D/g, '').slice(-10)
//             if (cleanPhone.length !== 10) {
//                 setError('Enter valid 10 digit phone number')
//                 setLoading(false)
//                 return
//             }

//             const appVerifier = setupRecaptcha()
//             const confirmation = await signInWithPhoneNumber(
//                 auth,
//                 `+91${cleanPhone}`,
//                 appVerifier
//             )
//             confirmationRef.current = confirmation

//             setStep('otp')
//             setOtpDigits(['', '', '', '', '', ''])
//             setResendTimer(30)
//             setTimeout(() => otpRefs.current[0]?.focus(), 100)
//         } catch (err: any) {
//             console.error('Send OTP error:', err)
//             setError(
//                 err.code === 'auth/too-many-requests'
//                     ? 'Too many attempts. Try later.'
//                     : err.code === 'auth/invalid-phone-number'
//                         ? 'Invalid phone number'
//                         : 'OTP send failed. Try again.'
//             )
//             // Reset recaptcha on error
//             if (window.recaptchaVerifier) {
//                 window.recaptchaVerifier.clear()
//                 window.recaptchaVerifier = undefined
//             }
//         }
//         setLoading(false)
//     }

//     // OTP input handling — auto-jump to next box
//     const handleOtpChange = (index: number, value: string) => {
//         if (!/^\d*$/.test(value)) return
//         const newDigits = [...otpDigits]
//         newDigits[index] = value.slice(-1)
//         setOtpDigits(newDigits)
//         setError('')
//         if (value && index < 5) {
//             otpRefs.current[index + 1]?.focus()
//         }
//     }

//     const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
//         if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
//             otpRefs.current[index - 1]?.focus()
//         }
//     }

//     // ✅ Step 3: Verify OTP via Firebase
//     const handleVerifyOtp = async () => {
//         const otp = otpDigits.join('')
//         if (otp.length !== 6) {
//             setError('Please enter all 6 digits.')
//             return
//         }
//         if (!confirmationRef.current) {
//             setError('Session expired. Please resend OTP.')
//             return
//         }

//         setLoading(true)
//         setError('')
//         try {
//             await confirmationRef.current.confirm(otp)

//             // ✅ OTP verified — save to Google Sheet (existing logic, unchanged)
//             try {
//                 const params = new URLSearchParams()
//                 params.append('name', form.name.trim())
//                 params.append('phone', form.phone.trim())
//                 params.append('email', form.email.trim())
//                 params.append('brochure', selected?.name ?? '')
//                 await fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', body: params })
//             } catch (err) {
//                 console.error('Sheet error:', err)
//             }

//             setStep('done')
//         } catch (err: any) {
//             console.error('Verify error:', err)
//             setError('Incorrect OTP.')
//         }
//         setLoading(false)
//     }

//     // ✅ Resend OTP via Firebase
//     const handleResend = async () => {
//         if (resendTimer > 0) return
//         setLoading(true)
//         setError('')
//         try {
//             const cleanPhone = form.phone.replace(/\D/g, '').slice(-10)

//             // Clear old recaptcha for fresh session
//             if (window.recaptchaVerifier) {
//                 window.recaptchaVerifier.clear()
//                 window.recaptchaVerifier = undefined
//             }

//             const appVerifier = setupRecaptcha()
//             const confirmation = await signInWithPhoneNumber(
//                 auth,
//                 `+91${cleanPhone}`,
//                 appVerifier
//             )
//             confirmationRef.current = confirmation

//             setOtpDigits(['', '', '', '', '', ''])
//             setResendTimer(30)
//             setTimeout(() => otpRefs.current[0]?.focus(), 100)
//         } catch (err: any) {
//             console.error('Resend error:', err)
//             setError('Resend failed. Try again.')
//         }
//         setLoading(false)
//     }

//     const handleClose = () => {
//         onClose()
//         setTimeout(() => {
//             setStep('select')
//             setSelected(null)
//             setForm({ name: '', phone: '', email: '' })
//             setOtpDigits(['', '', '', '', '', ''])
//             setLoading(false)
//             setError('')
//             setResendTimer(0)
//             confirmationRef.current = null
//             if (window.recaptchaVerifier) {
//                 window.recaptchaVerifier.clear()
//                 window.recaptchaVerifier = undefined
//             }
//         }, 300)
//     }

//     // Header title/subtitle based on step
//     const headerTitle = {
//         select: 'Select Brochure',
//         form: 'Your Details',
//         otp: 'Verify Phone',
//         done: 'Download Ready'
//     }[step]

//     const headerSub = {
//         select: 'Choose a project brochure',
//         form: selected?.name ?? '',
//         otp: `OTP sent to ${form.phone}`,
//         done: 'Click below to download'
//     }[step]

//     return (
//         <div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             style={{ background: 'rgba(11,31,58,0.60)', backdropFilter: 'blur(4px)' }}
//             onClick={handleClose}
//         >
//             <div
//                 className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
//                 style={{ boxShadow: '0 24px 64px rgba(11,31,58,0.25)' }}
//                 onClick={e => e.stopPropagation()}
//             >
//                 {/* Header */}
//                 <div className="relative px-8 pt-8 pb-6" style={{ background: '#0B1F3A' }}>
//                     <button
//                         onClick={handleClose}
//                         className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
//                         style={{ background: 'rgba(255,255,255,0.10)', color: '#fff' }}
//                     >
//                         <X className="w-4 h-4" />
//                     </button>
//                     <div className="flex items-center gap-4">
//                         <div className="w-12 h-12 rounded-xl flex items-center justify-center"
//                             style={{ background: 'rgba(230,57,70,0.20)' }}>
//                             {step === 'otp'
//                                 ? <ShieldCheck className="w-6 h-6" style={{ color: '#E63946' }} />
//                                 : <FileText className="w-6 h-6" style={{ color: '#E63946' }} />
//                             }
//                         </div>
//                         <div>
//                             <h2 className="font-serif font-bold text-xl text-white">{headerTitle}</h2>
//                             <p className="text-xs text-white/60">{headerSub}</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Body */}
//                 <div className="px-8 py-7">

//                     {/* STEP 1 — Select Brochure */}
//                     {step === 'select' && (
//                         <div>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Select the project brochure you want to download.
//                             </p>
//                             <div className="space-y-3">
//                                 {brochures.map((b, i) => (
//                                     <button
//                                         key={i}
//                                         onClick={() => handleSelectBrochure(b)}
//                                         className="w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all"
//                                         style={{ border: '1.5px solid #E8ECF2', background: '#F9FAFB' }}
//                                         onMouseEnter={e => {
//                                             e.currentTarget.style.borderColor = '#E63946'
//                                             e.currentTarget.style.background = '#FEE8EA'
//                                         }}
//                                         onMouseLeave={e => {
//                                             e.currentTarget.style.borderColor = '#E8ECF2'
//                                             e.currentTarget.style.background = '#F9FAFB'
//                                         }}
//                                     >
//                                         <div className="flex items-center gap-3">
//                                             <div className="w-9 h-9 rounded-lg flex items-center justify-center"
//                                                 style={{ background: '#FEE8EA' }}>
//                                                 <FileText className="w-4 h-4" style={{ color: '#E63946' }} />
//                                             </div>
//                                             <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>
//                                                 {b.name}
//                                             </span>
//                                         </div>
//                                         <Download className="w-4 h-4" style={{ color: '#E63946' }} />
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {/* STEP 2 — Fill Form */}
//                     {step === 'form' && (
//                         <>
//                             <button
//                                 onClick={() => setStep('select')}
//                                 className="flex items-center gap-1.5 text-xs font-semibold mb-5"
//                                 style={{ color: '#6B7280' }}
//                             >
//                                 <ArrowLeft className="w-3.5 h-3.5" /> Back to brochures
//                             </button>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Fill in your details to download <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong>.
//                             </p>
//                             <div className="space-y-4">
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Full Name <span style={{ color: '#E63946' }}>*</span>
//                                     </label>
//                                     <div className="relative">
//                                         <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="text"
//                                             placeholder="Rajesh Sharma"
//                                             value={form.name}
//                                             onChange={e => setForm({ ...form, name: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Phone Number <span style={{ color: '#E63946' }}>*</span>
//                                     </label>
//                                     <div className="relative">
//                                         <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="tel"
//                                             placeholder="+91 98765 43210"
//                                             value={form.phone}
//                                             onChange={e => setForm({ ...form, phone: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Email Address <span className="text-gray-400">(optional)</span>
//                                     </label>
//                                     <div className="relative">
//                                         <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="email"
//                                             placeholder="rajesh@email.com"
//                                             value={form.email}
//                                             onChange={e => setForm({ ...form, email: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {error && (
//                                 <p className="text-xs mt-3 text-red-500 text-center">{error}</p>
//                             )}

//                             <button
//                                 onClick={handleSendOtp}
//                                 disabled={loading || !form.name.trim() || !form.phone.trim()}
//                                 className="w-full mt-6 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
//                                 style={{
//                                     background: loading || !form.name || !form.phone ? '#9CA3AF' : '#E63946',
//                                     boxShadow: '0 4px 16px rgba(230,57,70,0.30)'
//                                 }}
//                             >
//                                 {loading ? (
//                                     <>
//                                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                         Sending OTP...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <ShieldCheck className="w-4 h-4" />
//                                         Send OTP to Verify
//                                     </>
//                                 )}
//                             </button>
//                             <p className="text-center text-xs mt-3 text-gray-400">
//                                 🔒 OTP will be sent to your phone number
//                             </p>
//                         </>
//                     )}

//                     {/* STEP 3 — OTP Verification */}
//                     {step === 'otp' && (
//                         <>
//                             <button
//                                 onClick={() => { setStep('form'); setError('') }}
//                                 className="flex items-center gap-1.5 text-xs font-semibold mb-5"
//                                 style={{ color: '#6B7280' }}
//                             >
//                                 <ArrowLeft className="w-3.5 h-3.5" /> Back
//                             </button>

//                             <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
//                                 Enter the 6-digit OTP sent to
//                             </p>
//                             <p className="font-bold text-sm mb-6" style={{ color: '#0B1F3A' }}>
//                                 {form.phone}
//                             </p>

//                             {/* OTP Input Boxes */}
//                             <div className="flex gap-2 justify-center mb-2">
//                                 {otpDigits.map((digit, i) => (
//                                     <input
//                                         key={i}
//                                         ref={el => { otpRefs.current[i] = el }}
//                                         type="text"
//                                         inputMode="numeric"
//                                         maxLength={1}
//                                         value={digit}
//                                         onChange={e => handleOtpChange(i, e.target.value)}
//                                         onKeyDown={e => handleOtpKeyDown(i, e)}
//                                         className="w-11 h-12 text-center text-lg font-bold rounded-xl border-2 focus:outline-none transition-all"
//                                         style={{
//                                             borderColor: digit ? '#E63946' : '#E8ECF2',
//                                             color: '#0B1F3A',
//                                             background: digit ? '#FEE8EA' : '#F9FAFB'
//                                         }}
//                                     />
//                                 ))}
//                             </div>

//                             {error && (
//                                 <p className="text-xs mt-2 mb-2 text-red-500 text-center">{error}</p>
//                             )}

//                             {/* Resend */}
//                             <div className="text-center mb-6 mt-3">
//                                 {resendTimer > 0 ? (
//                                     <p className="text-xs text-gray-400">
//                                         Resend OTP in <span style={{ color: '#E63946' }}>{resendTimer}s</span>
//                                     </p>
//                                 ) : (
//                                     <button
//                                         onClick={handleResend}
//                                         className="text-xs font-semibold"
//                                         style={{ color: '#E63946' }}
//                                     >
//                                         Resend OTP
//                                     </button>
//                                 )}
//                             </div>

//                             <button
//                                 onClick={handleVerifyOtp}
//                                 disabled={loading || otpDigits.join('').length !== 6}
//                                 className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
//                                 style={{
//                                     background: loading || otpDigits.join('').length !== 6 ? '#9CA3AF' : '#E63946',
//                                     boxShadow: '0 4px 16px rgba(230,57,70,0.30)'
//                                 }}
//                             >
//                                 {loading ? (
//                                     <>
//                                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                         Verifying...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <ShieldCheck className="w-4 h-4" />
//                                         Verify & Continue
//                                     </>
//                                 )}
//                             </button>
//                         </>
//                     )}

//                     {/* STEP 4 — Download */}
//                     {step === 'done' && (
//                         <div className="text-center py-4">
//                             <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//                                 style={{ background: '#DCFCE7' }}>
//                                 <CheckCircle2 className="w-8 h-8 text-green-600" />
//                             </div>
//                             <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>
//                                 Thank You!
//                             </h3>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Click below to download the <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong> brochure.
//                             </p>
//                             <a
//                                 href={selected?.file}
//                                 download
//                                 className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all"
//                                 style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}
//                             >
//                                 <Download className="w-4 h-4" />
//                                 Download {selected?.name}
//                             </a>
//                             <button
//                                 onClick={() => setStep('select')}
//                                 className="w-full mt-3 py-3 rounded-xl font-semibold text-sm"
//                                 style={{ background: '#F5F7FA', color: '#0B1F3A' }}
//                             >
//                                 Download Another
//                             </button>
//                             <button
//                                 onClick={handleClose}
//                                 className="w-full mt-2 py-3 rounded-xl font-semibold text-sm text-white"
//                                 style={{ background: '#0B1F3A' }}
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Hidden reCAPTCHA container — required for Firebase */}
//                 <div id="recaptcha-container"></div>
//             </div>
//         </div>
//     )
// }


// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { X, Download, CheckCircle2, FileText, Phone, Mail, User, ArrowLeft, ShieldCheck } from 'lucide-react'
// import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth'
// import { auth } from '@/lib/firebase'

// declare global {
//     interface Window {
//         recaptchaVerifier?: RecaptchaVerifier
//     }
// }

// interface BrochureModalProps {
//     isOpen: boolean
//     onClose: () => void
// }

// const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxsIYKwYbNbwHMUwdYfOp-JPJgTTBHkiJXUg8achb3KYSEtSle9-Lo4NrZAVOojWBSY6g/exec'

// const brochures = [
//     { name: 'Imperial Residencia', file: '/Imperial Residencia brochure.pdf' },
//     { name: 'Kailasha Awadh', file: '/Kailasha Awadh brochure.pdf' },
//     { name: 'ORO Constella', file: '/ORO brochure.pdf' }
// ]

// type Step = 'select' | 'form' | 'otp' | 'done'

// export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
//     const [step, setStep] = useState<Step>('select')
//     const [selected, setSelected] = useState<typeof brochures[0] | null>(null)
//     const [form, setForm] = useState({ name: '', phone: '', email: '' })
//     const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', ''])
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState('')
//     const [resendTimer, setResendTimer] = useState(0)
//     const [recaptchaReady, setRecaptchaReady] = useState(false)

//     const otpRefs = useRef<(HTMLInputElement | null)[]>([])
//     const confirmationRef = useRef<ConfirmationResult | null>(null)

//     // Resend countdown timer
//     useEffect(() => {
//         if (resendTimer <= 0) return
//         const t = setTimeout(() => setResendTimer(r => r - 1), 1000)
//         return () => clearTimeout(t)
//     }, [resendTimer])

//     // Setup reCAPTCHA when step becomes 'form'
//     useEffect(() => {
//         if (step !== 'form') return

//         // Small delay to ensure DOM is ready
//         const timer = setTimeout(() => {
//             try {
//                 if (window.recaptchaVerifier) {
//                     window.recaptchaVerifier.clear()
//                     window.recaptchaVerifier = undefined
//                 }
//                 window.recaptchaVerifier = new RecaptchaVerifier(
//                     auth,
//                     'recaptcha-container',
//                     {
//                         size: 'normal',
//                         callback: () => {
//                             setRecaptchaReady(true)
//                             setError('')
//                         },
//                         'expired-callback': () => {
//                             setRecaptchaReady(false)
//                             setError('reCAPTCHA expired. Please solve it again.')
//                         }
//                     }
//                 )
//                 window.recaptchaVerifier.render()
//                     .then(() => console.log('reCAPTCHA rendered'))
//                     .catch((e: any) => console.error('reCAPTCHA render error:', e))
//             } catch (e) {
//                 console.error('reCAPTCHA setup error:', e)
//             }
//         }, 300)

//         return () => clearTimeout(timer)
//     }, [step])

//     // Cleanup on unmount
//     useEffect(() => {
//         return () => {
//             if (window.recaptchaVerifier) {
//                 window.recaptchaVerifier.clear()
//                 window.recaptchaVerifier = undefined
//             }
//         }
//     }, [])

//     if (!isOpen) return null

//     const handleSelectBrochure = (b: typeof brochures[0]) => {
//         setSelected(b)
//         setRecaptchaReady(false)
//         setError('')
//         setStep('form')
//     }

//     // Send OTP
//     const handleSendOtp = async () => {
//         if (!form.name.trim() || !form.phone.trim()) return
//         if (!recaptchaReady) {
//             setError('Please complete the reCAPTCHA first.')
//             return
//         }

//         setLoading(true)
//         setError('')
//         try {
//             const cleanPhone = form.phone.replace(/\D/g, '').slice(-10)
//             if (cleanPhone.length !== 10) {
//                 setError('Enter valid 10 digit phone number')
//                 setLoading(false)
//                 return
//             }

//             const appVerifier = window.recaptchaVerifier!
//             const confirmation = await signInWithPhoneNumber(
//                 auth,
//                 `+91${cleanPhone}`,
//                 appVerifier
//             )
//             confirmationRef.current = confirmation

//             setStep('otp')
//             setOtpDigits(['', '', '', '', '', ''])
//             setResendTimer(30)
//             setTimeout(() => otpRefs.current[0]?.focus(), 100)
//         } catch (err: any) {
//             console.error('Send OTP error:', err)
//             setError(
//                 err.code === 'auth/too-many-requests'
//                     ? 'Too many attempts. Try later.'
//                     : err.code === 'auth/invalid-phone-number'
//                         ? 'Invalid phone number'
//                         : 'OTP send failed. Try again.'
//             )
//             // Reset recaptcha on error
//             setRecaptchaReady(false)
//             if (window.recaptchaVerifier) {
//                 window.recaptchaVerifier.clear()
//                 window.recaptchaVerifier = undefined
//             }
//         }
//         setLoading(false)
//     }

//     // OTP input handling
//     const handleOtpChange = (index: number, value: string) => {
//         if (!/^\d*$/.test(value)) return
//         const newDigits = [...otpDigits]
//         newDigits[index] = value.slice(-1)
//         setOtpDigits(newDigits)
//         setError('')
//         if (value && index < 5) {
//             otpRefs.current[index + 1]?.focus()
//         }
//     }

//     const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
//         if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
//             otpRefs.current[index - 1]?.focus()
//         }
//     }

//     // Verify OTP
//     const handleVerifyOtp = async () => {
//         const otp = otpDigits.join('')
//         if (otp.length !== 6) {
//             setError('Please enter all 6 digits.')
//             return
//         }
//         if (!confirmationRef.current) {
//             setError('Session expired. Please resend OTP.')
//             return
//         }

//         setLoading(true)
//         setError('')
//         try {
//             await confirmationRef.current.confirm(otp)

//             // Save to Google Sheet
//             try {
//                 const params = new URLSearchParams()
//                 params.append('name', form.name.trim())
//                 params.append('phone', form.phone.trim())
//                 params.append('email', form.email.trim())
//                 params.append('brochure', selected?.name ?? '')
//                 await fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', body: params })
//             } catch (err) {
//                 console.error('Sheet error:', err)
//             }

//             setStep('done')
//         } catch (err: any) {
//             console.error('Verify error:', err)
//             setError('Incorrect OTP. Please try again.')
//         }
//         setLoading(false)
//     }

//     // Resend OTP
//     const handleResend = async () => {
//         if (resendTimer > 0) return
//         setLoading(true)
//         setError('')
//         setRecaptchaReady(false)

//         try {
//             const cleanPhone = form.phone.replace(/\D/g, '').slice(-10)

//             if (window.recaptchaVerifier) {
//                 window.recaptchaVerifier.clear()
//                 window.recaptchaVerifier = undefined
//             }

//             window.recaptchaVerifier = new RecaptchaVerifier(
//                 auth,
//                 'recaptcha-resend-container',
//                 {
//                     size: 'normal',
//                     callback: async () => {
//                         try {
//                             const confirmation = await signInWithPhoneNumber(
//                                 auth,
//                                 `+91${cleanPhone}`,
//                                 window.recaptchaVerifier!
//                             )
//                             confirmationRef.current = confirmation
//                             setOtpDigits(['', '', '', '', '', ''])
//                             setResendTimer(30)
//                             setLoading(false)
//                             setTimeout(() => otpRefs.current[0]?.focus(), 100)
//                         } catch (e: any) {
//                             setError('Resend failed. Try again.')
//                             setLoading(false)
//                         }
//                     }
//                 }
//             )
//             await window.recaptchaVerifier.render()
//         } catch (err: any) {
//             console.error('Resend error:', err)
//             setError('Resend failed. Try again.')
//             setLoading(false)
//         }
//     }

//     const handleClose = () => {
//         onClose()
//         setTimeout(() => {
//             setStep('select')
//             setSelected(null)
//             setForm({ name: '', phone: '', email: '' })
//             setOtpDigits(['', '', '', '', '', ''])
//             setLoading(false)
//             setError('')
//             setResendTimer(0)
//             setRecaptchaReady(false)
//             confirmationRef.current = null
//             if (window.recaptchaVerifier) {
//                 window.recaptchaVerifier.clear()
//                 window.recaptchaVerifier = undefined
//             }
//         }, 300)
//     }

//     const headerTitle = {
//         select: 'Select Brochure',
//         form: 'Your Details',
//         otp: 'Verify Phone',
//         done: 'Download Ready'
//     }[step]

//     const headerSub = {
//         select: 'Choose a project brochure',
//         form: selected?.name ?? '',
//         otp: `OTP sent to ${form.phone}`,
//         done: 'Click below to download'
//     }[step]

//     return (
//         <div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             style={{ background: 'rgba(11,31,58,0.60)', backdropFilter: 'blur(4px)' }}
//             onClick={handleClose}
//         >
//             <div
//                 className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
//                 style={{ boxShadow: '0 24px 64px rgba(11,31,58,0.25)' }}
//                 onClick={e => e.stopPropagation()}
//             >
//                 {/* Header */}
//                 <div className="relative px-8 pt-8 pb-6" style={{ background: '#0B1F3A' }}>
//                     <button
//                         onClick={handleClose}
//                         className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
//                         style={{ background: 'rgba(255,255,255,0.10)', color: '#fff' }}
//                     >
//                         <X className="w-4 h-4" />
//                     </button>
//                     <div className="flex items-center gap-4">
//                         <div className="w-12 h-12 rounded-xl flex items-center justify-center"
//                             style={{ background: 'rgba(230,57,70,0.20)' }}>
//                             {step === 'otp'
//                                 ? <ShieldCheck className="w-6 h-6" style={{ color: '#E63946' }} />
//                                 : <FileText className="w-6 h-6" style={{ color: '#E63946' }} />
//                             }
//                         </div>
//                         <div>
//                             <h2 className="font-serif font-bold text-xl text-white">{headerTitle}</h2>
//                             <p className="text-xs text-white/60">{headerSub}</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Body */}
//                 <div className="px-8 py-7">

//                     {/* STEP 1 — Select Brochure */}
//                     {step === 'select' && (
//                         <div>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Select the project brochure you want to download.
//                             </p>
//                             <div className="space-y-3">
//                                 {brochures.map((b, i) => (
//                                     <button
//                                         key={i}
//                                         onClick={() => handleSelectBrochure(b)}
//                                         className="w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all"
//                                         style={{ border: '1.5px solid #E8ECF2', background: '#F9FAFB' }}
//                                         onMouseEnter={e => {
//                                             e.currentTarget.style.borderColor = '#E63946'
//                                             e.currentTarget.style.background = '#FEE8EA'
//                                         }}
//                                         onMouseLeave={e => {
//                                             e.currentTarget.style.borderColor = '#E8ECF2'
//                                             e.currentTarget.style.background = '#F9FAFB'
//                                         }}
//                                     >
//                                         <div className="flex items-center gap-3">
//                                             <div className="w-9 h-9 rounded-lg flex items-center justify-center"
//                                                 style={{ background: '#FEE8EA' }}>
//                                                 <FileText className="w-4 h-4" style={{ color: '#E63946' }} />
//                                             </div>
//                                             <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>
//                                                 {b.name}
//                                             </span>
//                                         </div>
//                                         <Download className="w-4 h-4" style={{ color: '#E63946' }} />
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {/* STEP 2 — Fill Form */}
//                     {step === 'form' && (
//                         <>
//                             <button
//                                 onClick={() => { setStep('select'); setRecaptchaReady(false) }}
//                                 className="flex items-center gap-1.5 text-xs font-semibold mb-5"
//                                 style={{ color: '#6B7280' }}
//                             >
//                                 <ArrowLeft className="w-3.5 h-3.5" /> Back to brochures
//                             </button>
//                             <p className="text-sm mb-5" style={{ color: '#6B7280' }}>
//                                 Fill in your details to download <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong>.
//                             </p>
//                             <div className="space-y-4">
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Full Name <span style={{ color: '#E63946' }}>*</span>
//                                     </label>
//                                     <div className="relative">
//                                         <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="text"
//                                             placeholder="Rajesh Sharma"
//                                             value={form.name}
//                                             onChange={e => setForm({ ...form, name: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                             style={{ borderColor: '#E8ECF2' }}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Phone Number <span style={{ color: '#E63946' }}>*</span>
//                                     </label>
//                                     <div className="relative">
//                                         <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="tel"
//                                             placeholder="98765 43210"
//                                             value={form.phone}
//                                             onChange={e => setForm({ ...form, phone: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                             style={{ borderColor: '#E8ECF2' }}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                         Email Address <span className="text-gray-400">(optional)</span>
//                                     </label>
//                                     <div className="relative">
//                                         <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input
//                                             type="email"
//                                             placeholder="rajesh@email.com"
//                                             value={form.email}
//                                             onChange={e => setForm({ ...form, email: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
//                                             style={{ borderColor: '#E8ECF2' }}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* reCAPTCHA — renders here */}
//                             <div className="flex justify-center mt-5">
//                                 <div id="recaptcha-container" />
//                             </div>

//                             {error && (
//                                 <p className="text-xs mt-3 text-red-500 text-center">{error}</p>
//                             )}

//                             <button
//                                 onClick={handleSendOtp}
//                                 disabled={loading || !form.name.trim() || !form.phone.trim() || !recaptchaReady}
//                                 className="w-full mt-4 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
//                                 style={{
//                                     background: (loading || !form.name || !form.phone || !recaptchaReady)
//                                         ? '#9CA3AF'
//                                         : '#E63946',
//                                     boxShadow: '0 4px 16px rgba(230,57,70,0.30)'
//                                 }}
//                             >
//                                 {loading ? (
//                                     <>
//                                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                         Sending OTP...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <ShieldCheck className="w-4 h-4" />
//                                         {recaptchaReady ? 'Send OTP to Verify' : 'Complete reCAPTCHA first'}
//                                     </>
//                                 )}
//                             </button>
//                             <p className="text-center text-xs mt-3 text-gray-400">
//                                 🔒 OTP will be sent to your phone number
//                             </p>
//                         </>
//                     )}

//                     {/* STEP 3 — OTP Verification */}
//                     {step === 'otp' && (
//                         <>
//                             <button
//                                 onClick={() => { setStep('form'); setError(''); setRecaptchaReady(false) }}
//                                 className="flex items-center gap-1.5 text-xs font-semibold mb-5"
//                                 style={{ color: '#6B7280' }}
//                             >
//                                 <ArrowLeft className="w-3.5 h-3.5" /> Back
//                             </button>

//                             <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
//                                 Enter the 6-digit OTP sent to
//                             </p>
//                             <p className="font-bold text-sm mb-6" style={{ color: '#0B1F3A' }}>
//                                 +91 {form.phone}
//                             </p>

//                             {/* OTP Boxes */}
//                             <div className="flex gap-2 justify-center mb-2">
//                                 {otpDigits.map((digit, i) => (
//                                     <input
//                                         key={i}
//                                         ref={el => { otpRefs.current[i] = el }}
//                                         type="text"
//                                         inputMode="numeric"
//                                         maxLength={1}
//                                         value={digit}
//                                         onChange={e => handleOtpChange(i, e.target.value)}
//                                         onKeyDown={e => handleOtpKeyDown(i, e)}
//                                         className="w-11 h-12 text-center text-lg font-bold rounded-xl border-2 focus:outline-none transition-all"
//                                         style={{
//                                             borderColor: digit ? '#E63946' : '#E8ECF2',
//                                             color: '#0B1F3A',
//                                             background: digit ? '#FEE8EA' : '#F9FAFB'
//                                         }}
//                                     />
//                                 ))}
//                             </div>

//                             {error && (
//                                 <p className="text-xs mt-2 mb-2 text-red-500 text-center">{error}</p>
//                             )}

//                             {/* Resend */}
//                             <div className="text-center mb-4 mt-3">
//                                 {resendTimer > 0 ? (
//                                     <p className="text-xs text-gray-400">
//                                         Resend OTP in <span style={{ color: '#E63946' }}>{resendTimer}s</span>
//                                     </p>
//                                 ) : (
//                                     <>
//                                         <button
//                                             onClick={handleResend}
//                                             disabled={loading}
//                                             className="text-xs font-semibold"
//                                             style={{ color: '#E63946' }}
//                                         >
//                                             Resend OTP
//                                         </button>
//                                         {/* reCAPTCHA for resend */}
//                                         <div className="flex justify-center mt-3">
//                                             <div id="recaptcha-resend-container" />
//                                         </div>
//                                     </>
//                                 )}
//                             </div>

//                             <button
//                                 onClick={handleVerifyOtp}
//                                 disabled={loading || otpDigits.join('').length !== 6}
//                                 className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
//                                 style={{
//                                     background: (loading || otpDigits.join('').length !== 6)
//                                         ? '#9CA3AF'
//                                         : '#E63946',
//                                     boxShadow: '0 4px 16px rgba(230,57,70,0.30)'
//                                 }}
//                             >
//                                 {loading ? (
//                                     <>
//                                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                         Verifying...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <ShieldCheck className="w-4 h-4" />
//                                         Verify & Continue
//                                     </>
//                                 )}
//                             </button>
//                         </>
//                     )}

//                     {/* STEP 4 — Download */}
//                     {step === 'done' && (
//                         <div className="text-center py-4">
//                             <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//                                 style={{ background: '#DCFCE7' }}>
//                                 <CheckCircle2 className="w-8 h-8 text-green-600" />
//                             </div>
//                             <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>
//                                 Thank You!
//                             </h3>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Click below to download the <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong> brochure.
//                             </p>
//                             <a
//                                 href={selected?.file}
//                                 download
//                                 className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all"
//                                 style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}
//                             >
//                                 <Download className="w-4 h-4" />
//                                 Download {selected?.name}
//                             </a>
//                             <button
//                                 onClick={() => { setStep('select'); setRecaptchaReady(false) }}
//                                 className="w-full mt-3 py-3 rounded-xl font-semibold text-sm"
//                                 style={{ background: '#F5F7FA', color: '#0B1F3A' }}
//                             >
//                                 Download Another
//                             </button>
//                             <button
//                                 onClick={handleClose}
//                                 className="w-full mt-2 py-3 rounded-xl font-semibold text-sm text-white"
//                                 style={{ background: '#0B1F3A' }}
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }


'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Download, CheckCircle2, FileText, Phone, Mail, User, ArrowLeft, ShieldCheck } from 'lucide-react'
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth'
import { auth } from '@/lib/firebase'

declare global {
    interface Window {
        recaptchaVerifier?: RecaptchaVerifier
    }
}

interface BrochureModalProps {
    isOpen: boolean
    onClose: () => void
}

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxsIYKwYbNbwHMUwdYfOp-JPJgTTBHkiJXUg8achb3KYSEtSle9-Lo4NrZAVOojWBSY6g/exec'

const brochures = [
    { name: 'Imperial Residencia', file: '/Imperial Residencia brochure.pdf' },
    { name: 'Kailasha Awadh', file: '/Kailasha Awadh brochure.pdf' },
    { name: 'ORO Constella', file: '/ORO brochure.pdf' }
]

type Step = 'select' | 'form' | 'otp' | 'done'

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
    const [step, setStep] = useState<Step>('select')
    const [selected, setSelected] = useState<typeof brochures[0] | null>(null)
    const [form, setForm] = useState({ name: '', phone: '', email: '' })
    const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', ''])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [resendTimer, setResendTimer] = useState(0)

    const otpRefs = useRef<(HTMLInputElement | null)[]>([])
    const confirmationRef = useRef<ConfirmationResult | null>(null)

    useEffect(() => {
        if (resendTimer <= 0) return
        const t = setTimeout(() => setResendTimer(r => r - 1), 1000)
        return () => clearTimeout(t)
    }, [resendTimer])

    useEffect(() => {
        return () => {
            if (window.recaptchaVerifier) {
                window.recaptchaVerifier.clear()
                window.recaptchaVerifier = undefined
            }
        }
    }, [])

    if (!isOpen) return null

    const getRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                auth,
                'recaptcha-container',
                { size: 'invisible' }
            )
        }
        return window.recaptchaVerifier
    }

    const handleSelectBrochure = (b: typeof brochures[0]) => {
        setSelected(b)
        setError('')
        setStep('form')
    }

    const handleSendOtp = async () => {
        if (!form.name.trim() || !form.phone.trim()) return
        setLoading(true)
        setError('')
        try {
            const cleanPhone = form.phone.replace(/\D/g, '').slice(-10)
            if (cleanPhone.length !== 10) {
                setError('Enter valid 10 digit phone number')
                setLoading(false)
                return
            }
            const appVerifier = getRecaptcha()
            const confirmation = await signInWithPhoneNumber(auth, `+91${cleanPhone}`, appVerifier)
            confirmationRef.current = confirmation
            setStep('otp')
            setOtpDigits(['', '', '', '', '', ''])
            setResendTimer(30)
            setTimeout(() => otpRefs.current[0]?.focus(), 100)
        } catch (err: any) {
            console.error(err)
            setError(
                err.code === 'auth/too-many-requests' ? 'Too many attempts. Try later.' :
                    err.code === 'auth/invalid-phone-number' ? 'Invalid phone number' :
                        'OTP send failed. Try again.'
            )
            if (window.recaptchaVerifier) {
                window.recaptchaVerifier.clear()
                window.recaptchaVerifier = undefined
            }
        }
        setLoading(false)
    }

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return
        const newDigits = [...otpDigits]
        newDigits[index] = value.slice(-1)
        setOtpDigits(newDigits)
        setError('')
        if (value && index < 5) otpRefs.current[index + 1]?.focus()
    }

    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
            otpRefs.current[index - 1]?.focus()
        }
    }

    const handleVerifyOtp = async () => {
        const otp = otpDigits.join('')
        if (otp.length !== 6) { setError('Please enter all 6 digits.'); return }
        if (!confirmationRef.current) { setError('Session expired. Please resend OTP.'); return }
        setLoading(true)
        setError('')
        try {
            await confirmationRef.current.confirm(otp)
            try {
                const params = new URLSearchParams()
                params.append('name', form.name.trim())
                params.append('phone', form.phone.trim())
                params.append('email', form.email.trim())
                params.append('brochure', selected?.name ?? '')
                await fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', body: params })
            } catch (e) { console.error(e) }
            setStep('done')
        } catch (err: any) {
            setError('Incorrect OTP. Please try again.')
        }
        setLoading(false)
    }

    const handleResend = async () => {
        if (resendTimer > 0) return
        setLoading(true)
        setError('')
        try {
            const cleanPhone = form.phone.replace(/\D/g, '').slice(-10)
            if (window.recaptchaVerifier) {
                window.recaptchaVerifier.clear()
                window.recaptchaVerifier = undefined
            }
            const appVerifier = getRecaptcha()
            const confirmation = await signInWithPhoneNumber(auth, `+91${cleanPhone}`, appVerifier)
            confirmationRef.current = confirmation
            setOtpDigits(['', '', '', '', '', ''])
            setResendTimer(30)
            setTimeout(() => otpRefs.current[0]?.focus(), 100)
        } catch (err: any) {
            setError('Resend failed. Try again.')
        }
        setLoading(false)
    }

    const handleClose = () => {
        onClose()
        setTimeout(() => {
            setStep('select')
            setSelected(null)
            setForm({ name: '', phone: '', email: '' })
            setOtpDigits(['', '', '', '', '', ''])
            setLoading(false)
            setError('')
            setResendTimer(0)
            confirmationRef.current = null
            if (window.recaptchaVerifier) {
                window.recaptchaVerifier.clear()
                window.recaptchaVerifier = undefined
            }
        }, 300)
    }

    const headerTitle = { select: 'Select Brochure', form: 'Your Details', otp: 'Verify Phone', done: 'Download Ready' }[step]
    const headerSub = { select: 'Choose a project brochure', form: selected?.name ?? '', otp: `OTP sent to ${form.phone}`, done: 'Click below to download' }[step]

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(11,31,58,0.60)', backdropFilter: 'blur(4px)' }}
            onClick={handleClose}
        >
            {/* Hidden invisible recaptcha container */}
            <div id="recaptcha-container" />

            <div
                className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 24px 64px rgba(11,31,58,0.25)' }}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="relative px-8 pt-8 pb-6" style={{ background: '#0B1F3A' }}>
                    <button onClick={handleClose}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.10)', color: '#fff' }}>
                        <X className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(230,57,70,0.20)' }}>
                            {step === 'otp' ? <ShieldCheck className="w-6 h-6" style={{ color: '#E63946' }} /> : <FileText className="w-6 h-6" style={{ color: '#E63946' }} />}
                        </div>
                        <div>
                            <h2 className="font-serif font-bold text-xl text-white">{headerTitle}</h2>
                            <p className="text-xs text-white/60">{headerSub}</p>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="px-8 py-7">

                    {/* STEP 1 */}
                    {step === 'select' && (
                        <div>
                            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>Select the project brochure you want to download.</p>
                            <div className="space-y-3">
                                {brochures.map((b, i) => (
                                    <button key={i} onClick={() => handleSelectBrochure(b)}
                                        className="w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all"
                                        style={{ border: '1.5px solid #E8ECF2', background: '#F9FAFB' }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#E63946'; e.currentTarget.style.background = '#FEE8EA' }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8ECF2'; e.currentTarget.style.background = '#F9FAFB' }}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#FEE8EA' }}>
                                                <FileText className="w-4 h-4" style={{ color: '#E63946' }} />
                                            </div>
                                            <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>{b.name}</span>
                                        </div>
                                        <Download className="w-4 h-4" style={{ color: '#E63946' }} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 2 */}
                    {step === 'form' && (
                        <>
                            <button onClick={() => setStep('select')} className="flex items-center gap-1.5 text-xs font-semibold mb-5" style={{ color: '#6B7280' }}>
                                <ArrowLeft className="w-3.5 h-3.5" /> Back to brochures
                            </button>
                            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
                                Fill in your details to download <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong>.
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Full Name <span style={{ color: '#E63946' }}>*</span></label>
                                    <div className="relative">
                                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input type="text" placeholder="Rajesh Sharma" value={form.name}
                                            onChange={e => setForm({ ...form, name: e.target.value })}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border" style={{ borderColor: '#E8ECF2' }} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Phone Number <span style={{ color: '#E63946' }}>*</span></label>
                                    <div className="relative">
                                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input type="tel" placeholder="98765 43210" value={form.phone}
                                            onChange={e => setForm({ ...form, phone: e.target.value })}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border" style={{ borderColor: '#E8ECF2' }} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Email Address <span className="text-gray-400">(optional)</span></label>
                                    <div className="relative">
                                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input type="email" placeholder="rajesh@email.com" value={form.email}
                                            onChange={e => setForm({ ...form, email: e.target.value })}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border" style={{ borderColor: '#E8ECF2' }} />
                                    </div>
                                </div>
                            </div>
                            {error && <p className="text-xs mt-3 text-red-500 text-center">{error}</p>}
                            <button onClick={handleSendOtp} disabled={loading || !form.name.trim() || !form.phone.trim()}
                                className="w-full mt-6 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
                                style={{ background: (loading || !form.name || !form.phone) ? '#9CA3AF' : '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
                                {loading ? (
                                    <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending OTP...</>
                                ) : (
                                    <><ShieldCheck className="w-4 h-4" />Send OTP to Verify</>
                                )}
                            </button>
                            <p className="text-center text-xs mt-3 text-gray-400">🔒 OTP will be sent to your phone number</p>
                        </>
                    )}

                    {/* STEP 3 */}
                    {step === 'otp' && (
                        <>
                            <button onClick={() => { setStep('form'); setError('') }} className="flex items-center gap-1.5 text-xs font-semibold mb-5" style={{ color: '#6B7280' }}>
                                <ArrowLeft className="w-3.5 h-3.5" /> Back
                            </button>
                            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>Enter the 6-digit OTP sent to</p>
                            <p className="font-bold text-sm mb-6" style={{ color: '#0B1F3A' }}>+91 {form.phone}</p>
                            <div className="flex gap-2 justify-center mb-2">
                                {otpDigits.map((digit, i) => (
                                    <input key={i} ref={el => { otpRefs.current[i] = el }}
                                        type="text" inputMode="numeric" maxLength={1} value={digit}
                                        onChange={e => handleOtpChange(i, e.target.value)}
                                        onKeyDown={e => handleOtpKeyDown(i, e)}
                                        className="w-11 h-12 text-center text-lg font-bold rounded-xl border-2 focus:outline-none transition-all"
                                        style={{ borderColor: digit ? '#E63946' : '#E8ECF2', color: '#0B1F3A', background: digit ? '#FEE8EA' : '#F9FAFB' }} />
                                ))}
                            </div>
                            {error && <p className="text-xs mt-2 mb-2 text-red-500 text-center">{error}</p>}
                            <div className="text-center mb-6 mt-3">
                                {resendTimer > 0 ? (
                                    <p className="text-xs text-gray-400">Resend OTP in <span style={{ color: '#E63946' }}>{resendTimer}s</span></p>
                                ) : (
                                    <button onClick={handleResend} disabled={loading} className="text-xs font-semibold" style={{ color: '#E63946' }}>Resend OTP</button>
                                )}
                            </div>
                            <button onClick={handleVerifyOtp} disabled={loading || otpDigits.join('').length !== 6}
                                className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
                                style={{ background: (loading || otpDigits.join('').length !== 6) ? '#9CA3AF' : '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
                                {loading ? (
                                    <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Verifying...</>
                                ) : (
                                    <><ShieldCheck className="w-4 h-4" />Verify & Continue</>
                                )}
                            </button>
                        </>
                    )}

                    {/* STEP 4 */}
                    {step === 'done' && (
                        <div className="text-center py-4">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#DCFCE7' }}>
                                <CheckCircle2 className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>Thank You!</h3>
                            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
                                Click below to download the <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong> brochure.
                            </p>
                            <a href={selected?.file} download
                                className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
                                style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
                                <Download className="w-4 h-4" />Download {selected?.name}
                            </a>
                            <button onClick={() => setStep('select')}
                                className="w-full mt-3 py-3 rounded-xl font-semibold text-sm" style={{ background: '#F5F7FA', color: '#0B1F3A' }}>
                                Download Another
                            </button>
                            <button onClick={handleClose}
                                className="w-full mt-2 py-3 rounded-xl font-semibold text-sm text-white" style={{ background: '#0B1F3A' }}>
                                Close
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}