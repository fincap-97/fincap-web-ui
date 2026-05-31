
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
//     { name: 'Kailasha Awadh', file: '/kailasha awadh brochure.pdf' },
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

//     useEffect(() => {
//         if (resendTimer <= 0) return
//         const t = setTimeout(() => setResendTimer(r => r - 1), 1000)
//         return () => clearTimeout(t)
//     }, [resendTimer])

//     useEffect(() => {
//         return () => {
//             if (window.recaptchaVerifier) {
//                 window.recaptchaVerifier.clear()
//                 window.recaptchaVerifier = undefined
//             }
//         }
//     }, [])

//     if (!isOpen) return null

//     const getRecaptcha = () => {
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
//         setError('')
//         setStep('form')
//     }

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
//             const appVerifier = getRecaptcha()
//             const confirmation = await signInWithPhoneNumber(auth, `+91${cleanPhone}`, appVerifier)
//             confirmationRef.current = confirmation
//             setStep('otp')
//             setOtpDigits(['', '', '', '', '', ''])
//             setResendTimer(30)
//             setTimeout(() => otpRefs.current[0]?.focus(), 100)
//         } catch (err: any) {
//             console.error(err)
//             setError(
//                 err.code === 'auth/too-many-requests' ? 'Too many attempts. Try later.' :
//                     err.code === 'auth/invalid-phone-number' ? 'Invalid phone number' :
//                         'OTP send failed. Try again.'
//             )
//             if (window.recaptchaVerifier) {
//                 window.recaptchaVerifier.clear()
//                 window.recaptchaVerifier = undefined
//             }
//         }
//         setLoading(false)
//     }

//     const handleOtpChange = (index: number, value: string) => {
//         if (!/^\d*$/.test(value)) return
//         const newDigits = [...otpDigits]
//         newDigits[index] = value.slice(-1)
//         setOtpDigits(newDigits)
//         setError('')
//         if (value && index < 5) otpRefs.current[index + 1]?.focus()
//     }

//     const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
//         if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
//             otpRefs.current[index - 1]?.focus()
//         }
//     }

//     const handleVerifyOtp = async () => {
//         const otp = otpDigits.join('')
//         if (otp.length !== 6) { setError('Please enter all 6 digits.'); return }
//         if (!confirmationRef.current) { setError('Session expired. Please resend OTP.'); return }
//         setLoading(true)
//         setError('')
//         try {
//             await confirmationRef.current.confirm(otp)
//             try {
//                 const params = new URLSearchParams()
//                 params.append('name', form.name.trim())
//                 params.append('phone', form.phone.trim())
//                 params.append('email', form.email.trim())
//                 params.append('brochure', selected?.name ?? '')
//                 await fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', body: params })
//             } catch (e) { console.error(e) }
//             setStep('done')
//         } catch (err: any) {
//             setError('Incorrect OTP. Please try again.')
//         }
//         setLoading(false)
//     }

//     const handleResend = async () => {
//         if (resendTimer > 0) return
//         setLoading(true)
//         setError('')
//         try {
//             const cleanPhone = form.phone.replace(/\D/g, '').slice(-10)
//             if (window.recaptchaVerifier) {
//                 window.recaptchaVerifier.clear()
//                 window.recaptchaVerifier = undefined
//             }
//             const appVerifier = getRecaptcha()
//             const confirmation = await signInWithPhoneNumber(auth, `+91${cleanPhone}`, appVerifier)
//             confirmationRef.current = confirmation
//             setOtpDigits(['', '', '', '', '', ''])
//             setResendTimer(30)
//             setTimeout(() => otpRefs.current[0]?.focus(), 100)
//         } catch (err: any) {
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

//     const headerTitle = { select: 'Select Brochure', form: 'Your Details', otp: 'Verify Phone', done: 'Download Ready' }[step]
//     const headerSub = { select: 'Choose a project brochure', form: selected?.name ?? '', otp: `OTP sent to ${form.phone}`, done: 'Click below to download' }[step]

//     return (
//         <div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             style={{ background: 'rgba(11,31,58,0.60)', backdropFilter: 'blur(4px)' }}
//             onClick={handleClose}
//         >
//             {/* Hidden invisible recaptcha container */}
//             <div id="recaptcha-container" />

//             <div
//                 className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
//                 style={{ boxShadow: '0 24px 64px rgba(11,31,58,0.25)' }}
//                 onClick={e => e.stopPropagation()}
//             >
//                 {/* Header */}
//                 <div className="relative px-8 pt-8 pb-6" style={{ background: '#0B1F3A' }}>
//                     <button onClick={handleClose}
//                         className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
//                         style={{ background: 'rgba(255,255,255,0.10)', color: '#fff' }}>
//                         <X className="w-4 h-4" />
//                     </button>
//                     <div className="flex items-center gap-4">
//                         <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(230,57,70,0.20)' }}>
//                             {step === 'otp' ? <ShieldCheck className="w-6 h-6" style={{ color: '#E63946' }} /> : <FileText className="w-6 h-6" style={{ color: '#E63946' }} />}
//                         </div>
//                         <div>
//                             <h2 className="font-serif font-bold text-xl text-white">{headerTitle}</h2>
//                             <p className="text-xs text-white/60">{headerSub}</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Body */}
//                 <div className="px-8 py-7">

//                     {/* STEP 1 */}
//                     {step === 'select' && (
//                         <div>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>Select the project brochure you want to download.</p>
//                             <div className="space-y-3">
//                                 {brochures.map((b, i) => (
//                                     <button key={i} onClick={() => handleSelectBrochure(b)}
//                                         className="w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all"
//                                         style={{ border: '1.5px solid #E8ECF2', background: '#F9FAFB' }}
//                                         onMouseEnter={e => { e.currentTarget.style.borderColor = '#E63946'; e.currentTarget.style.background = '#FEE8EA' }}
//                                         onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8ECF2'; e.currentTarget.style.background = '#F9FAFB' }}>
//                                         <div className="flex items-center gap-3">
//                                             <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#FEE8EA' }}>
//                                                 <FileText className="w-4 h-4" style={{ color: '#E63946' }} />
//                                             </div>
//                                             <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>{b.name}</span>
//                                         </div>
//                                         <Download className="w-4 h-4" style={{ color: '#E63946' }} />
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {/* STEP 2 */}
//                     {step === 'form' && (
//                         <>
//                             <button onClick={() => setStep('select')} className="flex items-center gap-1.5 text-xs font-semibold mb-5" style={{ color: '#6B7280' }}>
//                                 <ArrowLeft className="w-3.5 h-3.5" /> Back to brochures
//                             </button>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Fill in your details to download <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong>.
//                             </p>
//                             <div className="space-y-4">
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Full Name <span style={{ color: '#E63946' }}>*</span></label>
//                                     <div className="relative">
//                                         <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input type="text" placeholder="Rajesh Sharma" value={form.name}
//                                             onChange={e => setForm({ ...form, name: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border" style={{ borderColor: '#E8ECF2' }} />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Phone Number <span style={{ color: '#E63946' }}>*</span></label>
//                                     <div className="relative">
//                                         <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input type="tel" placeholder="98765 43210" value={form.phone}
//                                             onChange={e => setForm({ ...form, phone: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border" style={{ borderColor: '#E8ECF2' }} />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>Email Address <span className="text-gray-400">(optional)</span></label>
//                                     <div className="relative">
//                                         <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                         <input type="email" placeholder="rajesh@email.com" value={form.email}
//                                             onChange={e => setForm({ ...form, email: e.target.value })}
//                                             className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border" style={{ borderColor: '#E8ECF2' }} />
//                                     </div>
//                                 </div>
//                             </div>
//                             {error && <p className="text-xs mt-3 text-red-500 text-center">{error}</p>}
//                             <button onClick={handleSendOtp} disabled={loading || !form.name.trim() || !form.phone.trim()}
//                                 className="w-full mt-6 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
//                                 style={{ background: (loading || !form.name || !form.phone) ? '#9CA3AF' : '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
//                                 {loading ? (
//                                     <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending OTP...</>
//                                 ) : (
//                                     <><ShieldCheck className="w-4 h-4" />Send OTP to Verify</>
//                                 )}
//                             </button>
//                             <p className="text-center text-xs mt-3 text-gray-400">🔒 OTP will be sent to your phone number</p>
//                         </>
//                     )}

//                     {/* STEP 3 */}
//                     {step === 'otp' && (
//                         <>
//                             <button onClick={() => { setStep('form'); setError('') }} className="flex items-center gap-1.5 text-xs font-semibold mb-5" style={{ color: '#6B7280' }}>
//                                 <ArrowLeft className="w-3.5 h-3.5" /> Back
//                             </button>
//                             <p className="text-sm mb-2" style={{ color: '#6B7280' }}>Enter the 6-digit OTP sent to</p>
//                             <p className="font-bold text-sm mb-6" style={{ color: '#0B1F3A' }}>+91 {form.phone}</p>
//                             <div className="flex gap-2 justify-center mb-2">
//                                 {otpDigits.map((digit, i) => (
//                                     <input key={i} ref={el => { otpRefs.current[i] = el }}
//                                         type="text" inputMode="numeric" maxLength={1} value={digit}
//                                         onChange={e => handleOtpChange(i, e.target.value)}
//                                         onKeyDown={e => handleOtpKeyDown(i, e)}
//                                         className="w-11 h-12 text-center text-lg font-bold rounded-xl border-2 focus:outline-none transition-all"
//                                         style={{ borderColor: digit ? '#E63946' : '#E8ECF2', color: '#0B1F3A', background: digit ? '#FEE8EA' : '#F9FAFB' }} />
//                                 ))}
//                             </div>
//                             {error && <p className="text-xs mt-2 mb-2 text-red-500 text-center">{error}</p>}
//                             <div className="text-center mb-6 mt-3">
//                                 {resendTimer > 0 ? (
//                                     <p className="text-xs text-gray-400">Resend OTP in <span style={{ color: '#E63946' }}>{resendTimer}s</span></p>
//                                 ) : (
//                                     <button onClick={handleResend} disabled={loading} className="text-xs font-semibold" style={{ color: '#E63946' }}>Resend OTP</button>
//                                 )}
//                             </div>
//                             <button onClick={handleVerifyOtp} disabled={loading || otpDigits.join('').length !== 6}
//                                 className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
//                                 style={{ background: (loading || otpDigits.join('').length !== 6) ? '#9CA3AF' : '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
//                                 {loading ? (
//                                     <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Verifying...</>
//                                 ) : (
//                                     <><ShieldCheck className="w-4 h-4" />Verify & Continue</>
//                                 )}
//                             </button>
//                         </>
//                     )}

//                     {/* STEP 4 */}
//                     {step === 'done' && (
//                         <div className="text-center py-4">
//                             <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#DCFCE7' }}>
//                                 <CheckCircle2 className="w-8 h-8 text-green-600" />
//                             </div>
//                             <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>Thank You!</h3>
//                             <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                 Click below to download the <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong> brochure.
//                             </p>
//                             <a href={selected?.file} download
//                                 className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
//                                 style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
//                                 <Download className="w-4 h-4" />Download {selected?.name}
//                             </a>
//                             <button onClick={() => setStep('select')}
//                                 className="w-full mt-3 py-3 rounded-xl font-semibold text-sm" style={{ background: '#F5F7FA', color: '#0B1F3A' }}>
//                                 Download Another
//                             </button>
//                             <button onClick={handleClose}
//                                 className="w-full mt-2 py-3 rounded-xl font-semibold text-sm text-white" style={{ background: '#0B1F3A' }}>
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
import { X, Download, CheckCircle2, FileText, Phone, Mail, User, ArrowLeft, ShieldCheck, Send } from 'lucide-react'
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

// file: PDF path agar available hai → download milega.
// file: null  → "We will send you the brochure on your number" message dikhega.
type Brochure = { name: string; file: string | null }

const brochures: Brochure[] = [
    { name: 'Imperial Residencia', file: '/Imperial Residencia brochure.pdf' },
    { name: 'Kailasha Awadh', file: '/kailasha awadh brochure.pdf' },
    { name: 'ORO Constella', file: '/ORO brochure.pdf' },
    { name: 'The Royal Retreat', file: '/Royal Retreat Brochure .pdf' },
    { name: 'Rishita Mulberry Heights', file: '/Rishita Mulberry.pdf' },
    // ↓ baaki projects — jiska PDF aa jaye uska path daal dena, abhi null hai
    { name: 'Eldeco Solano Gardens', file: null },
    { name: 'Eldeco Trinity', file: null },
    { name: 'Eldeco Hanging Gardens', file: null },
    // { name: 'Rishita Mulberry Heights', file: null },
    { name: 'Shalimar TwentyOne', file: null },
    { name: 'Shalimar OneWorld Pinnacle', file: null },

    { name: 'Dream Galaxy', file: null },
    { name: 'Migsun Lucknow Central', file: null },
]

type Step = 'select' | 'form' | 'otp' | 'done'

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
    const [step, setStep] = useState<Step>('select')
    const [selected, setSelected] = useState<Brochure | null>(null)
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

    const handleSelectBrochure = (b: Brochure) => {
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
                // Sheet mein pata chal jaye ki PDF turant mila ya manually bhejni hai
                params.append('delivery', selected?.file ? 'instant-download' : 'send-manually')
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

    const headerTitle = { select: 'Select Brochure', form: 'Your Details', otp: 'Verify Phone', done: selected?.file ? 'Download Ready' : 'Request Received' }[step]
    const headerSub = { select: 'Choose a project brochure', form: selected?.name ?? '', otp: `OTP sent to ${form.phone}`, done: selected?.file ? 'Click below to download' : 'We will reach out shortly' }[step]

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(11,31,58,0.60)', backdropFilter: 'blur(4px)' }}
            onClick={handleClose}
        >
            {/* Hidden invisible recaptcha container */}
            <div id="recaptcha-container" />

            <div
                className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
                style={{ boxShadow: '0 24px 64px rgba(11,31,58,0.25)' }}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="relative px-8 pt-8 pb-6 shrink-0" style={{ background: '#0B1F3A' }}>
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
                <div className="px-8 py-7 overflow-y-auto">

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
                                            <span className="font-semibold text-sm text-left" style={{ color: '#0B1F3A' }}>{b.name}</span>
                                        </div>
                                        <Download className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
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
                                {selected?.file
                                    ? <>Fill in your details to download <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong>.</>
                                    : <>Fill in your details and we’ll send you the <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong> brochure on your number.</>}
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
                            {selected?.file ? (
                                <>
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#DCFCE7' }}>
                                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>Thank You!</h3>
                                    <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
                                        Click below to download the <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong> brochure.
                                    </p>
                                    <a href={selected.file} download
                                        className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
                                        style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
                                        <Download className="w-4 h-4" />Download {selected?.name}
                                    </a>
                                </>
                            ) : (
                                <>
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#FEE8EA' }}>
                                        <Send className="w-7 h-7" style={{ color: '#E63946' }} />
                                    </div>
                                    <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>Thank You!</h3>
                                    <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
                                        We will send you the brochure of <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong> on your number <strong style={{ color: '#0B1F3A' }}>+91 {form.phone}</strong> shortly.
                                    </p>
                                </>
                            )}
                            <button onClick={() => setStep('select')}
                                className="w-full mt-3 py-3 rounded-xl font-semibold text-sm" style={{ background: '#F5F7FA', color: '#0B1F3A' }}>
                                Request Another
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