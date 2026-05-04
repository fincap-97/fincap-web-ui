


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

'use client'

import { useState } from 'react'
import { X, Download, CheckCircle2, FileText, Phone, Mail, User, ArrowLeft } from 'lucide-react'

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

type Step = 'select' | 'form' | 'done'

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
    const [step, setStep] = useState<Step>('select')
    const [selected, setSelected] = useState<typeof brochures[0] | null>(null)
    const [form, setForm] = useState({ name: '', phone: '', email: '' })
    const [loading, setLoading] = useState(false)

    if (!isOpen) return null

    const handleSelectBrochure = (b: typeof brochures[0]) => {
        setSelected(b)
        setStep('form')
    }

    const handleSubmit = async () => {
        if (!form.name.trim() || !form.phone.trim()) return
        setLoading(true)
        try {
            const params = new URLSearchParams()
            params.append('name', form.name.trim())
            params.append('phone', form.phone.trim())
            params.append('email', form.email.trim())
            params.append('brochure', selected?.name ?? '')
            await fetch(SHEET_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: params,
            })
        } catch (err) {
            console.error('Sheet error:', err)
        }
        setStep('done')
        setLoading(false)
    }

    const handleClose = () => {
        onClose()
        setTimeout(() => {
            setStep('select')
            setSelected(null)
            setForm({ name: '', phone: '', email: '' })
            setLoading(false)
        }, 300)
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(11,31,58,0.60)', backdropFilter: 'blur(4px)' }}
            onClick={handleClose}
        >
            <div
                className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 24px 64px rgba(11,31,58,0.25)' }}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="relative px-8 pt-8 pb-6" style={{ background: '#0B1F3A' }}>
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.10)', color: '#fff' }}
                    >
                        <X className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ background: 'rgba(230,57,70,0.20)' }}>
                            <FileText className="w-6 h-6" style={{ color: '#E63946' }} />
                        </div>
                        <div>
                            <h2 className="font-serif font-bold text-xl text-white">
                                {step === 'select' ? 'Select Brochure' : step === 'form' ? 'Your Details' : 'Download Ready'}
                            </h2>
                            <p className="text-xs text-white/60">
                                {step === 'select' ? 'Choose a project brochure' : step === 'form' ? `${selected?.name}` : 'Click below to download'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="px-8 py-7">

                    {/* STEP 1 — Select Brochure */}
                    {step === 'select' && (
                        <div>
                            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
                                Select the project brochure you want to download.
                            </p>
                            <div className="space-y-3">
                                {brochures.map((b, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSelectBrochure(b)}
                                        className="w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all group"
                                        style={{ border: '1.5px solid #E8ECF2', background: '#F9FAFB' }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = '#E63946'
                                            e.currentTarget.style.background = '#FEE8EA'
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = '#E8ECF2'
                                            e.currentTarget.style.background = '#F9FAFB'
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                                                style={{ background: '#FEE8EA' }}>
                                                <FileText className="w-4 h-4" style={{ color: '#E63946' }} />
                                            </div>
                                            <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>
                                                {b.name}
                                            </span>
                                        </div>
                                        <Download className="w-4 h-4" style={{ color: '#E63946' }} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 2 — Fill Form */}
                    {step === 'form' && (
                        <>
                            <button
                                onClick={() => setStep('select')}
                                className="flex items-center gap-1.5 text-xs font-semibold mb-5"
                                style={{ color: '#6B7280' }}
                            >
                                <ArrowLeft className="w-3.5 h-3.5" /> Back to brochures
                            </button>

                            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
                                Please fill in your details to download the <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong> brochure.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
                                        Full Name <span style={{ color: '#E63946' }}>*</span>
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Rajesh Sharma"
                                            value={form.name}
                                            onChange={e => setForm({ ...form, name: e.target.value })}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
                                        Phone Number <span style={{ color: '#E63946' }}>*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            value={form.phone}
                                            onChange={e => setForm({ ...form, phone: e.target.value })}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
                                        Email Address <span className="text-gray-400">(optional)</span>
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="rajesh@email.com"
                                            value={form.email}
                                            onChange={e => setForm({ ...form, email: e.target.value })}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={loading || !form.name.trim() || !form.phone.trim()}
                                className="w-full mt-6 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
                                style={{
                                    background: loading || !form.name || !form.phone ? '#9CA3AF' : '#E63946',
                                    boxShadow: '0 4px 16px rgba(230,57,70,0.30)'
                                }}
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Download className="w-4 h-4" />
                                        Continue to Download
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs mt-3 text-gray-400">
                                🔒 Your information is 100% secure
                            </p>
                        </>
                    )}

                    {/* STEP 3 — Download */}
                    {step === 'done' && (
                        <div className="text-center py-4">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                style={{ background: '#DCFCE7' }}>
                                <CheckCircle2 className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>
                                Thank You!
                            </h3>
                            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
                                Click below to download the <strong style={{ color: '#0B1F3A' }}>{selected?.name}</strong> brochure.
                            </p>
                            <a
                                href={selected?.file}
                                download
                                className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all"
                                style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}
                            >
                                <Download className="w-4 h-4" />
                                Download {selected?.name}
                            </a>
                            <button
                                onClick={() => setStep('select')}
                                className="w-full mt-3 py-3 rounded-xl font-semibold text-sm"
                                style={{ background: '#F5F7FA', color: '#0B1F3A' }}
                            >
                                Download Another
                            </button>
                            <button
                                onClick={handleClose}
                                className="w-full mt-2 py-3 rounded-xl font-semibold text-sm text-white"
                                style={{ background: '#0B1F3A' }}
                            >
                                Close
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}