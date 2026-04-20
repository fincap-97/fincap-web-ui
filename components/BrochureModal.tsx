// 'use client'

// import { useState } from 'react'
// import { X, Download, CheckCircle2, FileText, Phone, Mail, User } from 'lucide-react'

// interface BrochureModalProps {
//     isOpen: boolean
//     onClose: () => void
// }

// export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
//     const [form, setForm] = useState({ name: '', phone: '', email: '' })
//     const [submitted, setSubmitted] = useState(false)
//     const [loading, setLoading] = useState(false)

//     if (!isOpen) return null

//     const handleSubmit = async () => {
//         if (!form.name.trim() || !form.phone.trim()) return

//         setLoading(true)

//         // Simulate brief loading
//         await new Promise(r => setTimeout(r, 800))

//         setSubmitted(true)
//         setLoading(false)

//         // Auto-trigger PDF download
//         // 👇 Replace '/brochure.pdf' with your actual PDF path in public folder
//         const link = document.createElement('a')
//         link.href = '/brochure.pdf'
//         link.download = 'Fincap-Advisory-Brochure.pdf'
//         document.body.appendChild(link)
//         link.click()
//         document.body.removeChild(link)
//     }

//     const handleClose = () => {
//         onClose()
//         // Reset after close animation
//         setTimeout(() => {
//             setForm({ name: '', phone: '', email: '' })
//             setSubmitted(false)
//             setLoading(false)
//         }, 300)
//     }

//     return (
//         <>
//             {/* Backdrop */}
//             <div
//                 className="fixed inset-0 z-50 flex items-center justify-center p-4"
//                 style={{ background: 'rgba(11,31,58,0.60)', backdropFilter: 'blur(4px)' }}
//                 onClick={handleClose}
//             >
//                 {/* Modal */}
//                 <div
//                     className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
//                     style={{ boxShadow: '0 24px 64px rgba(11,31,58,0.25)' }}
//                     onClick={e => e.stopPropagation()}
//                 >
//                     {/* Header */}
//                     <div className="relative px-8 pt-8 pb-6" style={{ background: '#0B1F3A' }}>
//                         {/* dot pattern */}
//                         <div className="absolute inset-0 opacity-[0.06]" style={{
//                             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//                             backgroundSize: '24px 24px',
//                         }} />
//                         {/* red top line */}
//                         <div className="absolute top-0 left-0 right-0 h-[3px]" style={{
//                             background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 50%, transparent 100%)',
//                         }} />

//                         <button
//                             onClick={handleClose}
//                             className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10"
//                             style={{ background: 'rgba(255,255,255,0.10)', color: '#fff' }}
//                         >
//                             <X className="w-4 h-4" />
//                         </button>

//                         <div className="relative z-10 flex items-center gap-4">
//                             <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
//                                 style={{ background: 'rgba(230,57,70,0.20)' }}>
//                                 <FileText className="w-6 h-6" style={{ color: '#E63946' }} />
//                             </div>
//                             <div>
//                                 <h2 className="font-serif font-bold text-xl text-white">Download Brochure</h2>
//                                 <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
//                                     Fill in your details to get instant access
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Body */}
//                     <div className="px-8 py-7">
//                         {submitted ? (
//                             /* Success State */
//                             <div className="text-center py-4">
//                                 <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//                                     style={{ background: '#DCFCE7' }}>
//                                     <CheckCircle2 className="w-8 h-8 text-green-600" />
//                                 </div>
//                                 <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>
//                                     Download Started!
//                                 </h3>
//                                 <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                     Your brochure is downloading. If it doesn&apos;t start automatically,{' '}
//                                     <a href="/brochure.pdf" download="Regalia-Estates-Brochure.pdf"
//                                         className="font-semibold underline" style={{ color: '#E63946' }}>
//                                         click here
//                                     </a>.
//                                 </p>
//                                 <button
//                                     onClick={handleClose}
//                                     className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all"
//                                     style={{ background: '#E63946' }}
//                                 >
//                                     Close
//                                 </button>
//                             </div>
//                         ) : (
//                             /* Form */
//                             <>
//                                 <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                     Please share your details. We&apos;ll send you our complete property portfolio brochure.
//                                 </p>

//                                 <div className="space-y-4">
//                                     {/* Name */}
//                                     <div>
//                                         <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                             Full Name <span style={{ color: '#E63946' }}>*</span>
//                                         </label>
//                                         <div className="relative">
//                                             <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
//                                             <input
//                                                 type="text"
//                                                 placeholder="Rajesh Sharma"
//                                                 value={form.name}
//                                                 onChange={e => setForm({ ...form, name: e.target.value })}
//                                                 className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none"
//                                                 style={{ border: '1.5px solid #E8ECF2', color: '#1A1A1A' }}
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Phone */}
//                                     <div>
//                                         <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                             Phone Number <span style={{ color: '#E63946' }}>*</span>
//                                         </label>
//                                         <div className="relative">
//                                             <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
//                                             <input
//                                                 type="tel"
//                                                 placeholder="+91 98765 43210"
//                                                 value={form.phone}
//                                                 onChange={e => setForm({ ...form, phone: e.target.value })}
//                                                 className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none"
//                                                 style={{ border: '1.5px solid #E8ECF2', color: '#1A1A1A' }}
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Email */}
//                                     <div>
//                                         <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                             Email Address <span className="font-normal" style={{ color: '#9CA3AF' }}>(optional)</span>
//                                         </label>
//                                         <div className="relative">
//                                             <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
//                                             <input
//                                                 type="email"
//                                                 placeholder="rajesh@email.com"
//                                                 value={form.email}
//                                                 onChange={e => setForm({ ...form, email: e.target.value })}
//                                                 className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none"
//                                                 style={{ border: '1.5px solid #E8ECF2', color: '#1A1A1A' }}
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Submit */}
//                                 <button
//                                     type="button"
//                                     onClick={handleSubmit}
//                                     disabled={loading || !form.name.trim() || !form.phone.trim()}
//                                     className="w-full mt-6 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all"
//                                     style={{
//                                         background: loading || !form.name.trim() || !form.phone.trim() ? '#9CA3AF' : '#E63946',
//                                         cursor: loading || !form.name.trim() || !form.phone.trim() ? 'not-allowed' : 'pointer',
//                                         boxShadow: loading || !form.name.trim() || !form.phone.trim() ? 'none' : '0 4px 16px rgba(230,57,70,0.30)',
//                                     }}
//                                 >
//                                     {loading ? (
//                                         <>
//                                             <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                             Preparing...
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Download className="w-4 h-4" />
//                                             Download Brochure
//                                         </>
//                                     )}
//                                 </button>

//                                 <p className="text-center text-xs mt-3" style={{ color: '#9CA3AF' }}>
//                                     🔒 Your information is 100% secure. No spam.
//                                 </p>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// 'use client'

// import { useState } from 'react'
// import { X, Download, CheckCircle2, FileText, Phone, Mail, User } from 'lucide-react'

// interface BrochureModalProps {
//     isOpen: boolean
//     onClose: () => void
// }

// // ── Step 2 ka Google Apps Script URL yahan paste karo ──────────────────────
// const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzkXnzNUz4hDQWCWVln_ZFr1YwGkpdcQkBABT_tHGWT6HWCOETRPsmaPRBctvwdZOV6Gw/exec'
// // ──────────────────────────────────────────────────────────────────────────

// export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
//     const [form, setForm] = useState({ name: '', phone: '', email: '' })
//     const [submitted, setSubmitted] = useState(false)
//     const [loading, setLoading] = useState(false)

//     if (!isOpen) return null

//     const handleSubmit = async () => {
//         if (!form.name.trim() || !form.phone.trim()) return

//         setLoading(true)

//         try {
//             // Google Sheet mein data bhejo
//             await fetch(SHEET_URL, {
//                 method: 'POST',
//                 mode: 'no-cors', // Google Apps Script ke liye zaroori
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     name: form.name.trim(),
//                     phone: form.phone.trim(),
//                     email: form.email.trim(),
//                 }),
//             })
//         } catch (err) {
//             // Network error aaye toh bhi PDF download hogi
//             console.error('Sheet error:', err)
//         }

//         setSubmitted(true)
//         setLoading(false)

//         // PDF auto-download
//         const link = document.createElement('a')
//         link.href = '/brochure.pdf'
//         link.download = 'Fincap-Advisory-Brochure.pdf'
//         document.body.appendChild(link)
//         link.click()
//         document.body.removeChild(link)
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
//         <>
//             {/* Backdrop */}
//             <div
//                 className="fixed inset-0 z-50 flex items-center justify-center p-4"
//                 style={{ background: 'rgba(11,31,58,0.60)', backdropFilter: 'blur(4px)' }}
//                 onClick={handleClose}
//             >
//                 {/* Modal */}
//                 <div
//                     className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
//                     style={{ boxShadow: '0 24px 64px rgba(11,31,58,0.25)' }}
//                     onClick={e => e.stopPropagation()}
//                 >
//                     {/* Header */}
//                     <div className="relative px-8 pt-8 pb-6" style={{ background: '#0B1F3A' }}>
//                         <div className="absolute inset-0 opacity-[0.06]" style={{
//                             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//                             backgroundSize: '24px 24px',
//                         }} />
//                         <div className="absolute top-0 left-0 right-0 h-[3px]" style={{
//                             background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 50%, transparent 100%)',
//                         }} />
//                         <button
//                             onClick={handleClose}
//                             className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10"
//                             style={{ background: 'rgba(255,255,255,0.10)', color: '#fff' }}
//                         >
//                             <X className="w-4 h-4" />
//                         </button>
//                         <div className="relative z-10 flex items-center gap-4">
//                             <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
//                                 style={{ background: 'rgba(230,57,70,0.20)' }}>
//                                 <FileText className="w-6 h-6" style={{ color: '#E63946' }} />
//                             </div>
//                             <div>
//                                 <h2 className="font-serif font-bold text-xl text-white">Download Brochure</h2>
//                                 <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
//                                     Fill in your details to get instant access
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Body */}
//                     <div className="px-8 py-7">
//                         {submitted ? (
//                             /* Success State */
//                             <div className="text-center py-4">
//                                 <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//                                     style={{ background: '#DCFCE7' }}>
//                                     <CheckCircle2 className="w-8 h-8 text-green-600" />
//                                 </div>
//                                 <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>
//                                     Download Started!
//                                 </h3>
//                                 <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                     Your brochure is downloading. If it doesn&apos;t start automatically,{' '}
//                                     <a href="/brochure.pdf" download="Fincap-Advisory-Brochure.pdf"
//                                         className="font-semibold underline" style={{ color: '#E63946' }}>
//                                         click here
//                                     </a>.
//                                 </p>
//                                 <button
//                                     onClick={handleClose}
//                                     className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all"
//                                     style={{ background: '#E63946' }}
//                                 >
//                                     Close
//                                 </button>
//                             </div>
//                         ) : (
//                             /* Form */
//                             <>
//                                 <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                     Please share your details. We&apos;ll send you our complete property portfolio brochure.
//                                 </p>

//                                 <div className="space-y-4">
//                                     {/* Name */}
//                                     <div>
//                                         <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                             Full Name <span style={{ color: '#E63946' }}>*</span>
//                                         </label>
//                                         <div className="relative">
//                                             <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
//                                             <input
//                                                 type="text"
//                                                 placeholder="Rajesh Sharma"
//                                                 value={form.name}
//                                                 onChange={e => setForm({ ...form, name: e.target.value })}
//                                                 className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none"
//                                                 style={{ border: '1.5px solid #E8ECF2', color: '#1A1A1A' }}
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Phone */}
//                                     <div>
//                                         <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                             Phone Number <span style={{ color: '#E63946' }}>*</span>
//                                         </label>
//                                         <div className="relative">
//                                             <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
//                                             <input
//                                                 type="tel"
//                                                 placeholder="+91 98765 43210"
//                                                 value={form.phone}
//                                                 onChange={e => setForm({ ...form, phone: e.target.value })}
//                                                 className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none"
//                                                 style={{ border: '1.5px solid #E8ECF2', color: '#1A1A1A' }}
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Email */}
//                                     <div>
//                                         <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                             Email Address <span className="font-normal" style={{ color: '#9CA3AF' }}>(optional)</span>
//                                         </label>
//                                         <div className="relative">
//                                             <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
//                                             <input
//                                                 type="email"
//                                                 placeholder="rajesh@email.com"
//                                                 value={form.email}
//                                                 onChange={e => setForm({ ...form, email: e.target.value })}
//                                                 className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none"
//                                                 style={{ border: '1.5px solid #E8ECF2', color: '#1A1A1A' }}
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Submit */}
//                                 <button
//                                     type="button"
//                                     onClick={handleSubmit}
//                                     disabled={loading || !form.name.trim() || !form.phone.trim()}
//                                     className="w-full mt-6 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all"
//                                     style={{
//                                         background: loading || !form.name.trim() || !form.phone.trim() ? '#9CA3AF' : '#E63946',
//                                         cursor: loading || !form.name.trim() || !form.phone.trim() ? 'not-allowed' : 'pointer',
//                                         boxShadow: loading || !form.name.trim() || !form.phone.trim() ? 'none' : '0 4px 16px rgba(230,57,70,0.30)',
//                                     }}
//                                 >
//                                     {loading ? (
//                                         <>
//                                             <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                             Saving & Preparing...
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Download className="w-4 h-4" />
//                                             Download Brochure
//                                         </>
//                                     )}
//                                 </button>

//                                 <p className="text-center text-xs mt-3" style={{ color: '#9CA3AF' }}>
//                                     🔒 Your information is 100% secure. No spam.
//                                 </p>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


// 'use client'

// import { useState } from 'react'
// import { X, Download, CheckCircle2, FileText, Phone, Mail, User } from 'lucide-react'

// interface BrochureModalProps {
//     isOpen: boolean
//     onClose: () => void
// }

// // ── Step 2 ka Google Apps Script URL yahan paste karo ──────────────────────
// const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxsIYKwYbNbwHMUwdYfOp-JPJgTTBHkiJXUg8achb3KYSEtSle9-Lo4NrZAVOojWBSY6g/exec'
// // ──────────────────────────────────────────────────────────────────────────

// export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
//     const [form, setForm] = useState({ name: '', phone: '', email: '' })
//     const [submitted, setSubmitted] = useState(false)
//     const [loading, setLoading] = useState(false)

//     if (!isOpen) return null

//     const handleSubmit = async () => {
//         if (!form.name.trim() || !form.phone.trim()) return

//         setLoading(true)

//         try {
//             // URLSearchParams use karo — no-cors ke saath yeh sahi kaam karta hai
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

//         // PDF auto-download
//         const link = document.createElement('a')
//         link.href = '/brochure.pdf'
//         link.download = 'Fincap-Advisory-Brochure.pdf'
//         document.body.appendChild(link)
//         link.click()
//         document.body.removeChild(link)
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
//         <>
//             {/* Backdrop */}
//             <div
//                 className="fixed inset-0 z-50 flex items-center justify-center p-4"
//                 style={{ background: 'rgba(11,31,58,0.60)', backdropFilter: 'blur(4px)' }}
//                 onClick={handleClose}
//             >
//                 {/* Modal */}
//                 <div
//                     className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
//                     style={{ boxShadow: '0 24px 64px rgba(11,31,58,0.25)' }}
//                     onClick={e => e.stopPropagation()}
//                 >
//                     {/* Header */}
//                     <div className="relative px-8 pt-8 pb-6" style={{ background: '#0B1F3A' }}>
//                         <div className="absolute inset-0 opacity-[0.06]" style={{
//                             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//                             backgroundSize: '24px 24px',
//                         }} />
//                         <div className="absolute top-0 left-0 right-0 h-[3px]" style={{
//                             background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 50%, transparent 100%)',
//                         }} />
//                         <button
//                             onClick={handleClose}
//                             className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10"
//                             style={{ background: 'rgba(255,255,255,0.10)', color: '#fff' }}
//                         >
//                             <X className="w-4 h-4" />
//                         </button>
//                         <div className="relative z-10 flex items-center gap-4">
//                             <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
//                                 style={{ background: 'rgba(230,57,70,0.20)' }}>
//                                 <FileText className="w-6 h-6" style={{ color: '#E63946' }} />
//                             </div>
//                             <div>
//                                 <h2 className="font-serif font-bold text-xl text-white">Download Brochure</h2>
//                                 <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
//                                     Fill in your details to get instant access
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Body */}
//                     <div className="px-8 py-7">
//                         {submitted ? (
//                             /* Success State */
//                             <div className="text-center py-4">
//                                 <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//                                     style={{ background: '#DCFCE7' }}>
//                                     <CheckCircle2 className="w-8 h-8 text-green-600" />
//                                 </div>
//                                 <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>
//                                     Download Started!
//                                 </h3>
//                                 <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                     Your brochure is downloading. If it doesn&apos;t start automatically,{' '}
//                                     <a href="/brochure.pdf" download="Fincap-Advisory-Brochure.pdf"
//                                         className="font-semibold underline" style={{ color: '#E63946' }}>
//                                         click here
//                                     </a>.
//                                 </p>
//                                 <button
//                                     onClick={handleClose}
//                                     className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all"
//                                     style={{ background: '#E63946' }}
//                                 >
//                                     Close
//                                 </button>
//                             </div>
//                         ) : (
//                             /* Form */
//                             <>
//                                 <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
//                                     Please share your details. We&apos;ll send you our complete property portfolio brochure.
//                                 </p>

//                                 <div className="space-y-4">
//                                     {/* Name */}
//                                     <div>
//                                         <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                             Full Name <span style={{ color: '#E63946' }}>*</span>
//                                         </label>
//                                         <div className="relative">
//                                             <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
//                                             <input
//                                                 type="text"
//                                                 placeholder="Rajesh Sharma"
//                                                 value={form.name}
//                                                 onChange={e => setForm({ ...form, name: e.target.value })}
//                                                 className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none"
//                                                 style={{ border: '1.5px solid #E8ECF2', color: '#1A1A1A' }}
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Phone */}
//                                     <div>
//                                         <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                             Phone Number <span style={{ color: '#E63946' }}>*</span>
//                                         </label>
//                                         <div className="relative">
//                                             <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
//                                             <input
//                                                 type="tel"
//                                                 placeholder="+91 98765 43210"
//                                                 value={form.phone}
//                                                 onChange={e => setForm({ ...form, phone: e.target.value })}
//                                                 className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none"
//                                                 style={{ border: '1.5px solid #E8ECF2', color: '#1A1A1A' }}
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Email */}
//                                     <div>
//                                         <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1F3A' }}>
//                                             Email Address <span className="font-normal" style={{ color: '#9CA3AF' }}>(optional)</span>
//                                         </label>
//                                         <div className="relative">
//                                             <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
//                                             <input
//                                                 type="email"
//                                                 placeholder="rajesh@email.com"
//                                                 value={form.email}
//                                                 onChange={e => setForm({ ...form, email: e.target.value })}
//                                                 className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none"
//                                                 style={{ border: '1.5px solid #E8ECF2', color: '#1A1A1A' }}
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Submit */}
//                                 <button
//                                     type="button"
//                                     onClick={handleSubmit}
//                                     disabled={loading || !form.name.trim() || !form.phone.trim()}
//                                     className="w-full mt-6 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all"
//                                     style={{
//                                         background: loading || !form.name.trim() || !form.phone.trim() ? '#9CA3AF' : '#E63946',
//                                         cursor: loading || !form.name.trim() || !form.phone.trim() ? 'not-allowed' : 'pointer',
//                                         boxShadow: loading || !form.name.trim() || !form.phone.trim() ? 'none' : '0 4px 16px rgba(230,57,70,0.30)',
//                                     }}
//                                 >
//                                     {loading ? (
//                                         <>
//                                             <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                             Saving & Preparing...
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Download className="w-4 h-4" />
//                                             Download Brochure
//                                         </>
//                                     )}
//                                 </button>

//                                 <p className="text-center text-xs mt-3" style={{ color: '#9CA3AF' }}>
//                                     🔒 Your information is 100% secure. No spam.
//                                 </p>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


// 'use client'

// import { useState } from 'react'
// import { X, Download, CheckCircle2, FileText, Phone, Mail, User } from 'lucide-react'

// interface BrochureModalProps {
//     isOpen: boolean
//     onClose: () => void
// }

// const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxsIYKwYbNbwHMUwdYfOp-JPJgTTBHkiJXUg8achb3KYSEtSle9-Lo4NrZAVOojWBSY6g/exec'

// // ✅ 3 Brochures
// const brochures = [
//     {
//         name: 'Imperial Residencia',
//         file: '/Imperial Residencia brochure.pdf'
//     },
//     {
//         name: 'Kailasha Awadh',
//         file: '/Kailasha Awadh brochure.pdf'
//     },
//     {
//         name: 'ORO Constella',
//         file: '/ORO brochure.pdf'
//     }
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
//         <>
//             <div
//                 className="fixed inset-0 z-50 flex items-center justify-center p-4"
//                 style={{ background: 'rgba(11,31,58,0.60)', backdropFilter: 'blur(4px)' }}
//                 onClick={handleClose}
//             >
//                 <div
//                     className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
//                     style={{ boxShadow: '0 24px 64px rgba(11,31,58,0.25)' }}
//                     onClick={e => e.stopPropagation()}
//                 >
//                     {/* Header */}
//                     <div className="relative px-8 pt-8 pb-6" style={{ background: '#0B1F3A' }}>
//                         <button
//                             onClick={handleClose}
//                             className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
//                             style={{ background: 'rgba(255,255,255,0.10)', color: '#fff' }}
//                         >
//                             <X className="w-4 h-4" />
//                         </button>

//                         <div className="flex items-center gap-4">
//                             <div className="w-12 h-12 rounded-xl flex items-center justify-center"
//                                 style={{ background: 'rgba(230,57,70,0.20)' }}>
//                                 <FileText className="w-6 h-6" style={{ color: '#E63946' }} />
//                             </div>
//                             <div>
//                                 <h2 className="font-serif font-bold text-xl text-white">
//                                     Download Brochure
//                                 </h2>
//                                 <p className="text-xs text-white/60">
//                                     Fill details to continue
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Body */}
//                     <div className="px-8 py-7">
//                         {submitted ? (
//                             /* ✅ SUCCESS + MULTIPLE DOWNLOAD */
//                             <div className="text-center py-4">
//                                 <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-green-100">
//                                     <CheckCircle2 className="w-8 h-8 text-green-600" />
//                                 </div>

//                                 <h3 className="font-serif font-bold text-xl mb-2 text-[#0B1F3A]">
//                                     Choose Your Brochure
//                                 </h3>

//                                 <p className="text-sm mb-6 text-gray-500">
//                                     Select and download the brochure you're interested in
//                                 </p>

//                                 <div className="space-y-3">
//                                     {brochures.map((b, i) => (
//                                         <a
//                                             key={i}
//                                             href={b.file}
//                                             download
//                                             className="w-full block py-3 rounded-xl font-semibold text-sm text-white text-center"
//                                             style={{ background: '#E63946' }}
//                                         >
//                                             <Download className="inline w-4 h-4 mr-2" />
//                                             {b.name}
//                                         </a>
//                                     ))}
//                                 </div>

//                                 <button
//                                     onClick={handleClose}
//                                     className="w-full mt-4 py-3 rounded-xl font-semibold text-sm border"
//                                 >
//                                     Close
//                                 </button>
//                             </div>
//                         ) : (
//                             /* FORM */
//                             <>
//                                 <div className="space-y-4">
//                                     <input
//                                         type="text"
//                                         placeholder="Full Name"
//                                         value={form.name}
//                                         onChange={e => setForm({ ...form, name: e.target.value })}
//                                         className="w-full p-3 border rounded-xl"
//                                     />

//                                     <input
//                                         type="tel"
//                                         placeholder="Phone Number"
//                                         value={form.phone}
//                                         onChange={e => setForm({ ...form, phone: e.target.value })}
//                                         className="w-full p-3 border rounded-xl"
//                                     />

//                                     <input
//                                         type="email"
//                                         placeholder="Email (optional)"
//                                         value={form.email}
//                                         onChange={e => setForm({ ...form, email: e.target.value })}
//                                         className="w-full p-3 border rounded-xl"
//                                     />
//                                 </div>

//                                 <button
//                                     onClick={handleSubmit}
//                                     disabled={loading || !form.name || !form.phone}
//                                     className="w-full mt-6 py-3 rounded-xl text-white font-semibold"
//                                     style={{
//                                         background: loading ? '#9CA3AF' : '#E63946'
//                                     }}
//                                 >
//                                     {loading ? 'Saving...' : 'Continue'}
//                                 </button>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }



'use client'

import { useState } from 'react'
import { X, Download, CheckCircle2, FileText, Phone, Mail, User } from 'lucide-react'

interface BrochureModalProps {
    isOpen: boolean
    onClose: () => void
}

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxsIYKwYbNbwHMUwdYfOp-JPJgTTBHkiJXUg8achb3KYSEtSle9-Lo4NrZAVOojWBSY6g/exec'

// ✅ Brochures
const brochures = [
    { name: 'Imperial Residencia', file: '/Imperial Residencia brochure.pdf' },
    { name: 'Kailasha Awadh', file: '/Kailasha Awadh brochure.pdf' },
    { name: 'ORO Constella', file: '/ORO brochure.pdf' }
]

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
    const [form, setForm] = useState({ name: '', phone: '', email: '' })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    if (!isOpen) return null

    const handleSubmit = async () => {
        if (!form.name.trim() || !form.phone.trim()) return

        setLoading(true)

        try {
            const params = new URLSearchParams()
            params.append('name', form.name.trim())
            params.append('phone', form.phone.trim())
            params.append('email', form.email.trim())

            await fetch(SHEET_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: params,
            })
        } catch (err) {
            console.error('Sheet error:', err)
        }

        setSubmitted(true)
        setLoading(false)
    }

    const handleClose = () => {
        onClose()
        setTimeout(() => {
            setForm({ name: '', phone: '', email: '' })
            setSubmitted(false)
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
                                Download Brochure
                            </h2>
                            <p className="text-xs text-white/60">
                                Fill details to continue
                            </p>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="px-8 py-7">
                    {submitted ? (
                        /* ✅ SUCCESS */
                        <div className="text-center py-4">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                style={{ background: '#DCFCE7' }}>
                                <CheckCircle2 className="w-8 h-8 text-green-600" />
                            </div>

                            <h3 className="font-serif font-bold text-xl mb-2" style={{ color: '#0B1F3A' }}>
                                Choose Your Brochure
                            </h3>

                            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
                                Select and download the brochure you're interested in
                            </p>

                            <div className="space-y-3">
                                {brochures.map((b, i) => (
                                    <a
                                        key={i}
                                        href={b.file}
                                        download
                                        className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all"
                                        style={{
                                            background: '#E63946',
                                            boxShadow: '0 4px 16px rgba(230,57,70,0.30)'
                                        }}
                                    >
                                        <Download className="w-4 h-4" />
                                        {b.name}
                                    </a>
                                ))}
                            </div>

                            <button
                                onClick={handleClose}
                                className="w-full mt-4 py-3 rounded-xl font-semibold text-sm text-white"
                                style={{ background: '#0B1F3A' }}
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        /* ✅ PREMIUM FORM (RESTORED) */
                        <>
                            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
                                Please share your details. We'll send you our complete property brochure.
                            </p>

                            <div className="space-y-4">

                                {/* Name */}
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

                                {/* Phone */}
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

                                {/* Email */}
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

                            {/* Button */}
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
                                        Continue
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs mt-3 text-gray-400">
                                🔒 Your information is 100% secure
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}