// 'use client'

// import { useState } from 'react'
// import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, Instagram, Facebook, Twitter } from 'lucide-react'

// const contactInfo = [
//   {
//     icon: Phone,
//     title: 'Call Us',
//     lines: ['+918400100342 ', '+91 8400889933'],
//     cta: { href: 'tel:+918400100342', label: 'Call Now' },
//   },
//   {
//     icon: Mail,
//     title: 'Email Us',
//     lines: ['info@fincapsol.co.in', 'sales@fincapsol.co.in'],
//     cta: { href: 'mailto:info@fincapsol.co.in', label: 'Send Email' },
//   },
//   {
//     icon: MapPin,
//     title: 'Visit Us',
//     lines: ['12, Shahnajaf Road, Hazratganj', 'Lucknow — 226001, UP'],
//     cta: { href: 'https://maps.google.com', label: 'Get Directions' },
//   },
//   {
//     icon: Clock,
//     title: 'Office Hours',
//     lines: ['Mon–Sat: 9:00 AM – 8:00 PM', 'Sun: 10:00 AM – 5:00 PM'],
//     cta: { href: 'https://wa.me/918400100342', label: 'WhatsApp Chat' },
//   },
// ]

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     name: '', phone: '', email: '', subject: '', message: '', type: 'general',
//   })
//   const [submitted, setSubmitted] = useState(false)

//   // const handleSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault()
//   //   setSubmitted(true)
//   // }
//   const [loading, setLoading] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       })

//       const data = await res.json()

//       if (data.success) {
//         setSubmitted(true)
//         setForm({
//           name: '',
//           phone: '',
//           email: '',
//           subject: '',
//           message: '',
//           type: 'general',
//         })
//       } else {
//         alert("Error sending message")
//       }
//     } catch (err) {
//       alert("Something went wrong")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const inquiryTypes = ['General Inquiry', 'Buy Property', 'Sell Property', 'Rent/Lease', 'Investment Advice', 'Legal Query']

//   return (
//     <div className="pt-20 min-h-screen bg-ivory">
//       {/* Hero */}
//       <section
//         className="relative py-20 overflow-hidden"
//         style={{ background: '#1E3A5F' }}
//       >
//         <div className="absolute inset-0 opacity-[0.06]"
//           style={{
//             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//             backgroundSize: '28px 28px',
//           }}
//         />
//         <div className="absolute top-0 left-0 right-0 h-[3px]" style={{
//           background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 35%, transparent 65%)',
//         }} />
//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
//           <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{
//             background: 'rgba(230,57,70,0.12)',
//             border: '1px solid rgba(230,57,70,0.30)',
//           }}>
//             <MessageCircle className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//             <span className="text-sm font-semibold" style={{ color: '#E63946' }}>We respond within 45 minutes</span>
//           </div>
//           <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
//             Get In Touch
//           </h1>
//           <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.60)' }}>
//             Have a question? Want to schedule a site visit? Our expert team is ready to help you every step of the way.
//           </p>
//         </div>
//       </section>

//       {/* Contact Cards */}
//       <section className="py-12 bg-white border-b border-stone-border">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {contactInfo.map(({ icon: Icon, title, lines, cta }) => (
//               <div key={title} className="group p-6 rounded-2xl bg-ivory hover:bg-white hover:shadow-card transition-all border border-stone-border/30 hover:border-gold/20">
//                 <div className="w-12 h-12 rounded-2xl bg-gold/10 group-hover:bg-gold transition-colors flex items-center justify-center mb-4">
//                   <Icon className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
//                 </div>
//                 <h3 className="font-semibold text-charcoal mb-2">{title}</h3>
//                 {lines.map((line, i) => (
//                   <p key={i} className="text-charcoal-muted text-sm">{line}</p>
//                 ))}
//                 <a
//                   href={cta.href}
//                   target={cta.href.startsWith('http') ? '_blank' : undefined}
//                   rel="noopener noreferrer"
//                   className="mt-4 inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:underline"
//                 >
//                   {cta.label} →
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
//             {/* Contact Form */}
//             <div className="lg:col-span-3">
//               <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card-hover border border-stone-border/30">
//                 <h2 className="font-serif text-3xl font-bold text-charcoal mb-2">Send a Message</h2>
//                 <p className="text-charcoal-muted text-sm mb-8">
//                   Fill in the form and our expert will get back to you within 30 minutes.
//                 </p>

//                 {submitted ? (
//                   <div className="text-center py-12">
//                     <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
//                       <CheckCircle2 className="w-10 h-10 text-green-500" />
//                     </div>
//                     <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">Message Sent!</h3>
//                     <p className="text-charcoal-muted">
//                       Thank you for reaching out. We&apos;ll get back to you within 30 minutes.
//                     </p>
//                     <button
//                       onClick={() => setSubmitted(false)}
//                       className="mt-6 text-gold font-semibold hover:underline text-sm"
//                     >
//                       Send another message
//                     </button>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     {/* Inquiry Type */}
//                     <div>
//                       <label className="block text-sm font-medium text-charcoal mb-3">
//                         Inquiry Type
//                       </label>
//                       <div className="flex flex-wrap gap-2">
//                         {inquiryTypes.map((t) => (
//                           <button
//                             key={t}
//                             type="button"
//                             onClick={() => setForm({ ...form, type: t })}
//                             className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all ${form.type === t
//                               ? 'bg-gold border-gold text-white'
//                               : 'border-stone-border text-charcoal hover:border-gold hover:text-gold'
//                               }`}
//                           >
//                             {t}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                       <div>
//                         <label className="block text-sm font-medium text-charcoal mb-2">
//                           Full Name <span className="text-gold">*</span>
//                         </label>
//                         <input
//                           required
//                           type="text"
//                           placeholder="Your full name"
//                           value={form.name}
//                           onChange={(e) => setForm({ ...form, name: e.target.value })}
//                           className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-charcoal mb-2">
//                           Phone Number <span className="text-gold">*</span>
//                         </label>
//                         <input
//                           required
//                           type="tel"
//                           placeholder="+91 98765 43210"
//                           value={form.phone}
//                           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                           className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-charcoal mb-2">Email Address</label>
//                       <input
//                         type="email"
//                         placeholder="your@email.com"
//                         value={form.email}
//                         onChange={(e) => setForm({ ...form, email: e.target.value })}
//                         className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-charcoal mb-2">Subject</label>
//                       <input
//                         type="text"
//                         placeholder="What can we help you with?"
//                         value={form.subject}
//                         onChange={(e) => setForm({ ...form, subject: e.target.value })}
//                         className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-charcoal mb-2">
//                         Message <span className="text-gold">*</span>
//                       </label>
//                       <textarea
//                         required
//                         rows={5}
//                         placeholder="Tell us about your requirements, budget, preferred location, or any specific questions..."
//                         value={form.message}
//                         onChange={(e) => setForm({ ...form, message: e.target.value })}
//                         className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 resize-none"
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="w-full bg-gold text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2"
//                     >
//                       {loading ? "Sending..." : (
//                         <>
//                           <Send className="w-5 h-5" />
//                           Send Message
//                         </>
//                       )}
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="lg:col-span-2 space-y-6">
//               {/* Map Placeholder */}
//               <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-stone-border/30">
//                 <div className="h-56 bg-ivory-dark relative flex items-center justify-center border-b border-stone-border"
//                   style={{ backgroundImage: 'linear-gradient(#C9952A15 1px, transparent 1px), linear-gradient(90deg, #C9952A15 1px, transparent 1px)', backgroundSize: '25px 25px' }}
//                 >
//                   <div className="text-center">
//                     <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center mx-auto mb-3 shadow-gold/30 shadow-md">
//                       <MapPin className="w-7 h-7 text-white" />
//                     </div>
//                     <p className="font-semibold text-charcoal">Fincap sol</p>
//                     <p className="text-charcoal-muted text-sm">Hazratganj, Lucknow</p>
//                     <a
//                       href="https://maps.google.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="mt-2 inline-flex items-center gap-1 text-gold text-xs font-medium hover:underline"
//                     >
//                       View on Google Maps →
//                     </a>
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <p className="font-semibold text-charcoal text-sm mb-1">Office Address</p>
//                   <p className="text-charcoal-muted text-sm">
//                     12, Shahnajaf Road, Near GPO,<br />
//                     Hazratganj, Lucknow — 226001<br />
//                     Uttar Pradesh, India
//                   </p>
//                 </div>
//               </div>

//               {/* WhatsApp CTA */}
//               <a
//                 href="https://wa.me/918400100342"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-4 p-5 bg-green-500 rounded-2xl text-white hover:bg-green-600 transition-colors group"
//               >
//                 <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
//                   <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-semibold">Chat on WhatsApp</p>
//                   <p className="text-white/80 text-sm">Instant responses, all day</p>
//                 </div>
//               </a>

//               {/* Social Links */}
//               <div className="bg-white rounded-2xl p-6 shadow-card border border-stone-border/30">
//                 <h3 className="font-semibold text-charcoal mb-4">Follow Us</h3>
//                 <div className="flex gap-3">
//                   {[
//                     { icon: Instagram, label: 'Instagram', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
//                     { icon: Facebook, label: 'Facebook', color: 'bg-blue-600' },
//                     { icon: Twitter, label: 'Twitter', color: 'bg-sky-500' },
//                   ].map(({ icon: Icon, label, color }) => (
//                     <a
//                       key={label}
//                       href="#"
//                       className={`flex items-center gap-2 flex-1 justify-center py-3 rounded-xl text-white text-sm font-medium hover:opacity-90 transition-opacity ${color}`}
//                     >
//                       <Icon className="w-4 h-4" />
//                       {label}
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* FAQ hint */}
//               <div className="bg-ivory-dark rounded-2xl p-5 border border-stone-border/30">
//                 <p className="font-semibold text-charcoal text-sm mb-2">
//                   Common Questions
//                 </p>
//                 <div className="space-y-2">
//                   {[
//                     'Is your service free for buyers?',
//                     'How long does property registration take?',
//                     'Do you help with home loans?',
//                   ].map((q) => (
//                     <p key={q} className="text-xs text-gold hover:underline cursor-pointer">{q}</p>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


// 'use client'

// import { useState } from 'react'
// import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, Instagram, Facebook, Twitter } from 'lucide-react'

// const contactInfo = [
//   {
//     icon: Phone,
//     title: 'Call Us',
//     lines: ['+91 8400100342', '+91 8400889933'],
//     cta: { href: 'tel:+918400100342', label: 'Call Now' },
//   },
//   {
//     icon: Mail,
//     title: 'Email Us',
//     lines: ['info@fincapsol.co.in', 'sales@fincapsol.co.in'],
//     cta: { href: 'mailto:info@fincapsol.co.in', label: 'Send Email' },
//   },
//   {
//     icon: MapPin,
//     title: 'Visit Us',
//     lines: ['12, Shahnajaf Road, Hazratganj', 'Lucknow — 226001, UP'],
//     cta: { href: 'https://maps.google.com', label: 'Get Directions' },
//   },
//   {
//     icon: Clock,
//     title: 'Office Hours',
//     lines: ['Mon–Sat: 9:00 AM – 8:00 PM', 'Sun: 10:00 AM – 5:00 PM'],
//     cta: { href: 'https://wa.me/918400100342', label: 'WhatsApp Chat' },
//   },
// ]

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     name: '', phone: '', email: '', subject: '', message: '', type: 'general',
//   })
//   const [submitted, setSubmitted] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       })
//       const data = await res.json()
//       if (data.success) {
//         setSubmitted(true)
//         setForm({ name: '', phone: '', email: '', subject: '', message: '', type: 'general' })
//       } else {
//         alert('Error sending message')
//       }
//     } catch {
//       alert('Something went wrong')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const inquiryTypes = ['General Inquiry', 'Buy Property', 'Sell Property', 'Rent/Lease', 'Investment Advice', 'Legal Query']

//   return (
//     <div className="pt-20 min-h-screen bg-ivory">

//       {/* ── Hero ── */}
//       <section className="relative py-14 sm:py-20 overflow-hidden" style={{ background: '#1E3A5F' }}>
//         <div className="absolute inset-0 opacity-[0.06]"
//           style={{
//             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//             backgroundSize: '28px 28px',
//           }} />
//         <div className="absolute top-0 left-0 right-0 h-[3px]"
//           style={{ background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 35%, transparent 65%)' }} />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 mb-5 sm:mb-6"
//             style={{ background: 'rgba(230,57,70,0.12)', border: '1px solid rgba(230,57,70,0.30)' }}>
//             <MessageCircle className="w-3.5 h-3.5 shrink-0" style={{ color: '#E63946' }} />
//             <span className="text-xs sm:text-sm font-semibold" style={{ color: '#E63946' }}>
//               We respond within 45 minutes
//             </span>
//           </div>
//           <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
//             Get In Touch
//           </h1>
//           <p className="text-sm sm:text-lg max-w-xl mx-auto px-2 sm:px-0"
//             style={{ color: 'rgba(255,255,255,0.60)' }}>
//             Have a question? Want to schedule a site visit? Our expert team is ready to help you every step of the way.
//           </p>
//         </div>
//       </section>

//       {/* ── Contact Cards ── */}
//       <section className="py-8 sm:py-12 bg-white border-b border-stone-border">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* 2 col mobile, 4 col desktop */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
//             {contactInfo.map(({ icon: Icon, title, lines, cta }) => (
//               <div key={title}
//                 className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-ivory hover:bg-white hover:shadow-card transition-all border border-stone-border/30 hover:border-gold/20">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gold/10 group-hover:bg-gold transition-colors flex items-center justify-center mb-3 sm:mb-4">
//                   <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold group-hover:text-white transition-colors" />
//                 </div>
//                 <h3 className="font-semibold text-charcoal text-sm sm:text-base mb-1.5 sm:mb-2">{title}</h3>
//                 {lines.map((line, i) => (
//                   <p key={i} className="text-charcoal-muted text-xs sm:text-sm leading-relaxed">{line}</p>
//                 ))}
//                 <a href={cta.href}
//                   target={cta.href.startsWith('http') ? '_blank' : undefined}
//                   rel="noopener noreferrer"
//                   className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-gold text-xs sm:text-sm font-semibold hover:underline">
//                   {cta.label} →
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Main Content ── */}
//       <section className="py-10 sm:py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">

//             {/* ── Contact Form ── */}
//             <div className="lg:col-span-3">
//               <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-card-hover border border-stone-border/30">
//                 <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-1.5 sm:mb-2">
//                   Send a Message
//                 </h2>
//                 <p className="text-charcoal-muted text-xs sm:text-sm mb-6 sm:mb-8">
//                   Fill in the form and our expert will get back to you within 30 minutes.
//                 </p>

//                 {submitted ? (
//                   <div className="text-center py-10 sm:py-12">
//                     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
//                       <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
//                     </div>
//                     <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2">Message Sent!</h3>
//                     <p className="text-charcoal-muted text-sm">
//                       Thank you for reaching out. We&apos;ll get back to you within 30 minutes.
//                     </p>
//                     <button onClick={() => setSubmitted(false)}
//                       className="mt-5 sm:mt-6 text-gold font-semibold hover:underline text-sm">
//                       Send another message
//                     </button>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

//                     {/* Inquiry Type */}
//                     <div>
//                       <label className="block text-sm font-medium text-charcoal mb-2 sm:mb-3">
//                         Inquiry Type
//                       </label>
//                       <div className="flex flex-wrap gap-1.5 sm:gap-2">
//                         {inquiryTypes.map((t) => (
//                           <button key={t} type="button"
//                             onClick={() => setForm({ ...form, type: t })}
//                             className={`text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border font-medium transition-all ${form.type === t
//                                 ? 'bg-gold border-gold text-white'
//                                 : 'border-stone-border text-charcoal hover:border-gold hover:text-gold'
//                               }`}>
//                             {t}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Name + Phone */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
//                       <div>
//                         <label className="block text-sm font-medium text-charcoal mb-1.5 sm:mb-2">
//                           Full Name <span className="text-gold">*</span>
//                         </label>
//                         <input required type="text" placeholder="Your full name"
//                           value={form.name}
//                           onChange={(e) => setForm({ ...form, name: e.target.value })}
//                           className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10" />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-charcoal mb-1.5 sm:mb-2">
//                           Phone Number <span className="text-gold">*</span>
//                         </label>
//                         <input required type="tel" placeholder="+91 98765 43210"
//                           value={form.phone}
//                           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                           className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-charcoal mb-1.5 sm:mb-2">Email Address</label>
//                       <input type="email" placeholder="your@email.com"
//                         value={form.email}
//                         onChange={(e) => setForm({ ...form, email: e.target.value })}
//                         className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10" />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-charcoal mb-1.5 sm:mb-2">Subject</label>
//                       <input type="text" placeholder="What can we help you with?"
//                         value={form.subject}
//                         onChange={(e) => setForm({ ...form, subject: e.target.value })}
//                         className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10" />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-charcoal mb-1.5 sm:mb-2">
//                         Message <span className="text-gold">*</span>
//                       </label>
//                       <textarea required rows={4}
//                         placeholder="Tell us about your requirements, budget, preferred location..."
//                         value={form.message}
//                         onChange={(e) => setForm({ ...form, message: e.target.value })}
//                         className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 resize-none" />
//                     </div>

//                     <button type="submit" disabled={loading}
//                       className="w-full bg-gold text-white font-bold py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base transition-opacity disabled:opacity-70">
//                       {loading ? 'Sending...' : (
//                         <><Send className="w-4 h-4 sm:w-5 sm:h-5" />Send Message</>
//                       )}
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </div>

//             {/* ── Right Sidebar ── */}
//             <div className="lg:col-span-2 space-y-4 sm:space-y-6">

//               {/* Map Placeholder */}
//               <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-card border border-stone-border/30">
//                 <div className="h-44 sm:h-56 bg-ivory-dark relative flex items-center justify-center border-b border-stone-border"
//                   style={{
//                     backgroundImage: 'linear-gradient(#C9952A15 1px, transparent 1px), linear-gradient(90deg, #C9952A15 1px, transparent 1px)',
//                     backgroundSize: '25px 25px',
//                   }}>
//                   <div className="text-center">
//                     <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md">
//                       <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
//                     </div>
//                     <p className="font-semibold text-charcoal text-sm sm:text-base">Fincap Sol</p>
//                     <p className="text-charcoal-muted text-xs sm:text-sm">Hazratganj, Lucknow</p>
//                     <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
//                       className="mt-1.5 inline-flex items-center gap-1 text-gold text-xs font-medium hover:underline">
//                       View on Google Maps →
//                     </a>
//                   </div>
//                 </div>
//                 <div className="p-4 sm:p-5">
//                   <p className="font-semibold text-charcoal text-sm mb-1">Office Address</p>
//                   <p className="text-charcoal-muted text-xs sm:text-sm leading-relaxed">
//                     12, Shahnajaf Road, Near GPO,<br />
//                     Hazratganj, Lucknow — 226001<br />
//                     Uttar Pradesh, India
//                   </p>
//                 </div>
//               </div>

//               {/* WhatsApp CTA */}
//               <a href="https://wa.me/918400100342" target="_blank" rel="noopener noreferrer"
//                 className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-green-500 rounded-xl sm:rounded-2xl text-white hover:bg-green-600 transition-colors group">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
//                   <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-sm sm:text-base">Chat on WhatsApp</p>
//                   <p className="text-white/80 text-xs sm:text-sm">Instant responses, all day</p>
//                 </div>
//               </a>

//               {/* Social Links */}
//               <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-card border border-stone-border/30">
//                 <h3 className="font-semibold text-charcoal text-sm sm:text-base mb-3 sm:mb-4">Follow Us</h3>
//                 <div className="flex gap-2 sm:gap-3">
//                   {[
//                     { icon: Instagram, label: 'Instagram', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
//                     { icon: Facebook, label: 'Facebook', color: 'bg-blue-600' },
//                     { icon: Twitter, label: 'Twitter', color: 'bg-sky-500' },
//                   ].map(({ icon: Icon, label, color }) => (
//                     <a key={label} href="#"
//                       className={`flex items-center gap-1.5 sm:gap-2 flex-1 justify-center py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-white text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity ${color}`}>
//                       <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                       <span className="hidden xs:inline sm:inline">{label}</span>
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* FAQ hint */}
//               <div className="bg-ivory-dark rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-stone-border/30">
//                 <p className="font-semibold text-charcoal text-xs sm:text-sm mb-2">Common Questions</p>
//                 <div className="space-y-1.5 sm:space-y-2">
//                   {[
//                     'Is your service free for buyers?',
//                     'How long does property registration take?',
//                     'Do you help with home loans?',
//                   ].map((q) => (
//                     <p key={q} className="text-[11px] sm:text-xs text-gold hover:underline cursor-pointer leading-relaxed">
//                       {q}
//                     </p>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, Instagram, Facebook } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 8400100342'],
    cta: { href: 'tel:+918400100342', label: 'Call Now' },
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['fincap97@gmail.com'],
    cta: { href: 'mailto:fincap97@gmail.com', label: 'Send Email' },
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['402, Eldeco Corporate Chamber-2', 'Vibhuti Khand, Gomti Nagar, Lucknow — 226010'],
    cta: { href: 'https://maps.google.com/?q=Eldeco+Corporate+Chamber+Vibhuti+Khand+Lucknow', label: 'Get Directions' },
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon–Sat: 9:00 AM – 8:00 PM', 'Sun: 10:00 AM – 5:00 PM'],
    cta: { href: 'https://wa.me/918400100342', label: 'WhatsApp Chat' },
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', subject: '', message: '', type: 'general',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        setForm({ name: '', phone: '', email: '', subject: '', message: '', type: 'general' })
      } else {
        alert('Error sending message')
      }
    } catch {
      alert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const inquiryTypes = ['General Inquiry', 'Buy Property', 'Sell Property', 'Rent/Lease', 'Investment Advice', 'Legal Query']

  return (
    <div className="pt-20 min-h-screen bg-ivory">

      {/* ── Hero ── */}
      <section className="relative py-14 sm:py-20 overflow-hidden" style={{ background: '#1E3A5F' }}>
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }} />
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 35%, transparent 65%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 mb-5 sm:mb-6"
            style={{ background: 'rgba(230,57,70,0.12)', border: '1px solid rgba(230,57,70,0.30)' }}>
            <MessageCircle className="w-3.5 h-3.5 shrink-0" style={{ color: '#E63946' }} />
            <span className="text-xs sm:text-sm font-semibold" style={{ color: '#E63946' }}>
              We respond within 45 minutes
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-lg max-w-xl mx-auto px-2 sm:px-0"
            style={{ color: 'rgba(255,255,255,0.60)' }}>
            Have a question? Want to schedule a site visit? Our expert team is ready to help you every step of the way.
          </p>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="py-8 sm:py-12 bg-white border-b border-stone-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 2 col mobile, 4 col desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {contactInfo.map(({ icon: Icon, title, lines, cta }) => (
              <div key={title}
                className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-ivory hover:bg-white hover:shadow-card transition-all border border-stone-border/30 hover:border-gold/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gold/10 group-hover:bg-gold transition-colors flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-charcoal text-sm sm:text-base mb-1.5 sm:mb-2">{title}</h3>
                {lines.map((line, i) => (
                  <p key={i} className="text-charcoal-muted text-xs sm:text-sm leading-relaxed">{line}</p>
                ))}
                <a href={cta.href}
                  target={cta.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-gold text-xs sm:text-sm font-semibold hover:underline">
                  {cta.label} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-10 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">

            {/* ── Contact Form ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-card-hover border border-stone-border/30">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-1.5 sm:mb-2">
                  Send a Message
                </h2>
                <p className="text-charcoal-muted text-xs sm:text-sm mb-6 sm:mb-8">
                  Fill in the form and our expert will get back to you within 30 minutes.
                </p>

                {submitted ? (
                  <div className="text-center py-10 sm:py-12">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                      <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2">Message Sent!</h3>
                    <p className="text-charcoal-muted text-sm">
                      Thank you for reaching out. We&apos;ll get back to you within 30 minutes.
                    </p>
                    <button onClick={() => setSubmitted(false)}
                      className="mt-5 sm:mt-6 text-gold font-semibold hover:underline text-sm">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2 sm:mb-3">
                        Inquiry Type
                      </label>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {inquiryTypes.map((t) => (
                          <button key={t} type="button"
                            onClick={() => setForm({ ...form, type: t })}
                            className={`text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border font-medium transition-all ${form.type === t
                              ? 'bg-gold border-gold text-white'
                              : 'border-stone-border text-charcoal hover:border-gold hover:text-gold'
                              }`}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5 sm:mb-2">
                          Full Name <span className="text-gold">*</span>
                        </label>
                        <input required type="text" placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5 sm:mb-2">
                          Phone Number <span className="text-gold">*</span>
                        </label>
                        <input required type="tel" placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5 sm:mb-2">Email Address</label>
                      <input type="email" placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5 sm:mb-2">Subject</label>
                      <input type="text" placeholder="What can we help you with?"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5 sm:mb-2">
                        Message <span className="text-gold">*</span>
                      </label>
                      <textarea required rows={4}
                        placeholder="Tell us about your requirements, budget, preferred location..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 resize-none" />
                    </div>

                    <button type="submit" disabled={loading}
                      className="w-full bg-gold text-white font-bold py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base transition-opacity disabled:opacity-70">
                      {loading ? 'Sending...' : (
                        <><Send className="w-4 h-4 sm:w-5 sm:h-5" />Send Message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ── Right Sidebar ── */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">

              {/* Map Placeholder */}
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-card border border-stone-border/30">
                <div className="h-44 sm:h-56 bg-ivory-dark relative flex items-center justify-center border-b border-stone-border"
                  style={{
                    backgroundImage: 'linear-gradient(#C9952A15 1px, transparent 1px), linear-gradient(90deg, #C9952A15 1px, transparent 1px)',
                    backgroundSize: '25px 25px',
                  }}>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <p className="font-semibold text-charcoal text-sm sm:text-base">Fincap Sol</p>
                    <p className="text-charcoal-muted text-xs sm:text-sm">Hazratganj, Lucknow</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-gold text-xs font-medium hover:underline">
                      View on Google Maps →
                    </a>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="font-semibold text-charcoal text-sm mb-1">Corporate Office</p>
                  <p className="text-charcoal-muted text-xs sm:text-sm leading-relaxed">
                    402, Eldeco Corporate Chamber-2,<br />
                    Vibhuti Khand, Gomti Nagar,<br />
                    Lucknow — 226010, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/918400100342" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-green-500 rounded-xl sm:rounded-2xl text-white hover:bg-green-600 transition-colors group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Chat on WhatsApp</p>
                  <p className="text-white/80 text-xs sm:text-sm">Instant responses, all day</p>
                </div>
              </a>

              {/* Social Links */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-card border border-stone-border/30">
                <h3 className="font-semibold text-charcoal text-sm sm:text-base mb-3 sm:mb-4">Follow Us</h3>
                <div className="flex gap-2 sm:gap-3">
                  {[
                    { icon: Instagram, label: 'Instagram', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
                    { icon: Facebook, label: 'Facebook', color: 'bg-blue-600' },
                  ].map(({ icon: Icon, label, color }) => (
                    <a key={label} href="#"
                      className={`flex items-center gap-1.5 sm:gap-2 flex-1 justify-center py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-white text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity ${color}`}>
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden xs:inline sm:inline">{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ hint */}
              <div className="bg-ivory-dark rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-stone-border/30">
                <p className="font-semibold text-charcoal text-xs sm:text-sm mb-2">Common Questions</p>
                <div className="space-y-1.5 sm:space-y-2">
                  {[
                    'Is your service free for buyers?',
                    'How long does property registration take?',
                    'Do you help with home loans?',
                  ].map((q) => (
                    <p key={q} className="text-[11px] sm:text-xs text-gold hover:underline cursor-pointer leading-relaxed">
                      {q}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}