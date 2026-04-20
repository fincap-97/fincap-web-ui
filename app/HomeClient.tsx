// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import {
//   Search,
//   MapPin,
//   IndianRupee,
//   Home,
//   ShieldCheck,
//   TrendingUp,
//   Star,
//   ArrowRight,
//   Phone,
//   Send,
//   Award,
//   CheckCircle2,
//   ChevronRight,
//   Handshake,
//   Building,
// } from 'lucide-react'
// import PropertyCard from '@/components/PropertyCard'
// import TestimonialSlider from '@/components/TestimonialSlider'
// import { properties, locations, developers, stats, whyChooseUs } from '@/lib/data'

// const locationOptions = [
//   'Gomti Nagar', 'Hazratganj', 'Shaheed Path', 'Aliganj', 'Sultanpur Road', 'Vibhuti Khand',
// ]

// const budgetOptions = [
//   'Under ₹50 Lakh', '₹50L–₹1 Cr', '₹1–₂ Cr', '₹2–5 Cr', 'Above ₹5 Cr',
// ]

// const typeOptions = ['Apartment', 'Villa', 'Plot', 'Commercial', 'Penthouse']

// const whyIcons: Record<string, typeof ShieldCheck> = {
//   ShieldCheck,
//   TrendingUp,
//   HandshakeIcon: Handshake,
//   Star,
// }

// export default function HomePage() {
//   const [searchTab, setSearchTab] = useState<'buy' | 'rent' | 'project'>('buy')
//   const [inquiryForm, setInquiryForm] = useState({ name: '', phone: '', location: '', message: '' })

//   const featuredProperties = properties.filter((p) => p.featured)
//   const hotDeals = properties.filter((p) => p.type === 'project').slice(0, 3)

//   return (
//     <div>
//       {/* ─── HERO ─── */}
//       {/* <section className="relative min-h-screen flex items-center overflow-hidden">

//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: 'linear-gradient(135deg, #0d0d1a 0%, #1a1028 30%, #0d1a0d 70%, #1a0d0d 100%)',
//           }}
//         >

//           <div
//             className="absolute inset-0 opacity-10"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(201,149,42,0.3) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(201,149,42,0.3) 1px, transparent 1px)
//               `,
//               backgroundSize: '80px 80px',
//             }}
//           />

//           <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-gold/10 blur-[100px]" />
//           <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-900/30 blur-[80px]" />


//           <div className="absolute top-1/2 left-10 w-4 h-4 rounded-full bg-gold/60 animate-float" style={{ animationDelay: '0s' }} />
//           <div className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-white/30 animate-float" style={{ animationDelay: '1s' }} />
//           <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-gold/40 animate-float" style={{ animationDelay: '2s' }} />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-16">
//           <div className="max-w-4xl">

//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
//               <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
//               <span className="text-white/90 text-sm font-medium">Lucknow&apos;s Most Trusted Real Estate Firm</span>
//             </div>


//             <h1 className="font-serif font-bold leading-[1.1] mb-6">
//               <span
//                 className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
//                 style={{
//                   background: 'linear-gradient(180deg, #FFFFFF 50%, rgba(255,255,255,0.65) 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}
//               >
//                 Your Trusted
//               </span>
//               <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl gold-text">
//                 Real Estate Advisors
//               </span>
//               <span
//                 className="block text-3xl sm:text-4xl md:text-5xl mt-2"
//                 style={{
//                   background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.55) 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}
//               >
//                 in Lucknow
//               </span>
//             </h1>

//             <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
//               From premium apartments to luxury villas — we help you find the perfect property with
//               complete transparency, trusted expertise, and end-to-end support.
//             </p>


//             <div className="flex flex-wrap gap-8 mb-12">
//               {stats.map((stat) => (
//                 <div key={stat.label}>
//                   <p className="text-gold font-serif font-bold text-2xl">{stat.value}</p>
//                   <p className="text-white/50 text-xs font-medium">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>


//           <div className="glass rounded-2xl p-2 max-w-5xl">

//             <div className="flex gap-1 p-1 bg-black/20 rounded-xl mb-3">
//               {(['buy', 'rent', 'project'] as const).map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setSearchTab(tab)}
//                   className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all capitalize ${searchTab === tab
//                     ? 'bg-gold text-white shadow-md'
//                     : 'text-white/70 hover:text-white'
//                     }`}
//                 >
//                   {tab === 'project' ? 'New Projects' : `For ${tab === 'buy' ? 'Sale' : 'Rent'}`}
//                 </button>
//               ))}
//             </div>


//             <div className="flex flex-col sm:flex-row gap-2">
//               <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
//                 <MapPin className="w-4 h-4 text-gold shrink-0" />
//                 <select className="w-full bg-transparent text-charcoal text-sm focus:outline-none">
//                   <option value="">Select Location</option>
//                   {locationOptions.map((l) => <option key={l}>{l}</option>)}
//                 </select>
//               </div>
//               <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
//                 <IndianRupee className="w-4 h-4 text-gold shrink-0" />
//                 <select className="w-full bg-transparent text-charcoal text-sm focus:outline-none">
//                   <option value="">Budget Range</option>
//                   {budgetOptions.map((b) => <option key={b}>{b}</option>)}
//                 </select>
//               </div>
//               <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
//                 <Home className="w-4 h-4 text-gold shrink-0" />
//                 <select className="w-full bg-transparent text-charcoal text-sm focus:outline-none">
//                   <option value="">Property Type</option>
//                   {typeOptions.map((t) => <option key={t}>{t}</option>)}
//                 </select>
//               </div>
//               <Link
//                 href="/properties"
//                 className="bg-gold text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-gold-dark transition-colors whitespace-nowrap text-sm"
//               >
//                 <Search className="w-4 h-4" />
//                 Search
//               </Link>
//             </div>
//           </div>
//         </div>


//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
//           <div className="w-5 h-9 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5">
//             <div className="w-1 h-2 bg-white/60 rounded-full" />
//           </div>
//         </div>
//       </section> */}
//       {/* ─── HERO ─── */}
//       <section className="relative min-h-screen flex items-center overflow-hidden">

//         {/* ── Deep Navy Base ── */}
//         <div className="absolute inset-0 z-0" style={{ background: '#060C18' }} />

//         {/* ── Large diagonal red slash — right side ── */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: 'linear-gradient(118deg, transparent 52%, rgba(204,31,31,0.18) 52%, rgba(204,31,31,0.06) 100%)',
//           }}
//         />

//         {/* ── Layered navy gradient for depth ── */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: 'radial-gradient(ellipse 80% 70% at 15% 50%, #0A1628 0%, transparent 70%)',
//           }}
//         />

//         {/* ── Red glow — top right ── */}
//         <div
//           className="absolute z-0"
//           style={{
//             top: '-10%', right: '-5%',
//             width: '55%', height: '70%',
//             borderRadius: '50%',
//             background: 'radial-gradient(circle, rgba(204,31,31,0.22) 0%, rgba(204,31,31,0.08) 40%, transparent 70%)',
//             filter: 'blur(40px)',
//           }}
//         />

//         {/* ── Navy glow — bottom left ── */}
//         <div
//           className="absolute z-0"
//           style={{
//             bottom: '-15%', left: '-10%',
//             width: '60%', height: '65%',
//             borderRadius: '50%',
//             background: 'radial-gradient(circle, rgba(30,58,95,0.70) 0%, transparent 65%)',
//             filter: 'blur(50px)',
//           }}
//         />

//         {/* ── Small red accent glow — center right ── */}
//         <div
//           className="absolute z-0"
//           style={{
//             top: '35%', right: '18%',
//             width: '280px', height: '280px',
//             borderRadius: '50%',
//             background: 'radial-gradient(circle, rgba(204,31,31,0.28) 0%, transparent 65%)',
//             filter: 'blur(30px)',
//           }}
//         />

//         {/* ── Fine dot grid ── */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
//             backgroundSize: '36px 36px',
//           }}
//         />

//         {/* ── Diagonal line grid overlay ── */}
//         <div
//           className="absolute inset-0 z-0 opacity-[0.04]"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
//             `,
//             backgroundSize: '100px 100px',
//           }}
//         />

//         {/* ── Red thin accent line — top ── */}
//         <div
//           className="absolute top-0 left-0 right-0 z-0 h-[2px]"
//           style={{ background: 'linear-gradient(90deg, transparent 0%, #CC1F1F 40%, #E53935 60%, transparent 100%)' }}
//         />

//         {/* ── Floating orbs ── */}
//         <div className="absolute top-[20%] left-[8%]  w-3 h-3 rounded-full z-0 animate-float" style={{ background: '#CC1F1F', opacity: 0.7, animationDelay: '0s' }} />
//         <div className="absolute top-[55%] left-[5%]  w-2 h-2 rounded-full z-0 animate-float" style={{ background: '#ffffff', opacity: 0.25, animationDelay: '1.5s' }} />
//         <div className="absolute top-[30%] right-[12%] w-4 h-4 rounded-full z-0 animate-float" style={{ background: '#CC1F1F', opacity: 0.45, animationDelay: '0.8s' }} />
//         <div className="absolute bottom-[25%] right-[25%] w-2 h-2 rounded-full z-0 animate-float" style={{ background: '#ffffff', opacity: 0.20, animationDelay: '2s' }} />
//         <div className="absolute top-[70%] left-[30%] w-1.5 h-1.5 rounded-full z-0 animate-float" style={{ background: '#E53935', opacity: 0.50, animationDelay: '1s' }} />

//         {/* ── Right side vertical red stripe accent ── */}
//         <div
//           className="absolute right-0 top-0 bottom-0 z-0 w-1"
//           style={{ background: 'linear-gradient(180deg, transparent 0%, #CC1F1F 30%, #E53935 60%, transparent 100%)', opacity: 0.4 }}
//         />

//         {/* ════════════════ CONTENT ════════════════ */}
//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-16">
//           <div className="max-w-4xl">

//             {/* Eyebrow pill */}
//             <div className="inline-flex items-center gap-2.5 mb-8"
//               style={{
//                 background: 'rgba(204,31,31,0.12)',
//                 border: '1px solid rgba(204,31,31,0.35)',
//                 borderRadius: '100px',
//                 padding: '8px 20px',
//                 backdropFilter: 'blur(10px)',
//               }}
//             >
//               <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#CC1F1F' }} />
//               <span className="text-white/90 text-sm font-medium tracking-wide">
//                 Lucknow&apos;s Most Trusted Real Estate Firm
//               </span>
//             </div>

//             {/* Headline */}
//             <h1 className="font-serif font-bold leading-[1.08] mb-6">
//               <span
//                 className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
//                 style={{
//                   background: 'linear-gradient(180deg, #FFFFFF 40%, rgba(255,255,255,0.60) 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}
//               >
//                 Your Trusted
//               </span>
//               {/* Red shimmer line */}
//               <span
//                 className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
//                 style={{
//                   background: 'linear-gradient(90deg, #CC1F1F 0%, #E53935 40%, #FF6B6B 70%, #CC1F1F 100%)',
//                   backgroundSize: '200% auto',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                   animation: 'shimmer 3s linear infinite',
//                 }}
//               >
//                 Real Estate Advisors
//               </span>
//               <span
//                 className="block text-3xl sm:text-4xl md:text-5xl mt-2"
//                 style={{
//                   background: 'linear-gradient(180deg, rgba(255,255,255,0.80) 0%, rgba(255,255,255,0.45) 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}
//               >
//                 in Lucknow
//               </span>
//             </h1>

//             <p className="text-white/55 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
//               From premium apartments to luxury villas — we help you find the perfect property with
//               complete transparency, trusted expertise, and end-to-end support.
//             </p>

//             {/* Stats strip — with red dividers */}
//             <div className="flex flex-wrap gap-0 mb-12">
//               {stats.map((stat, i) => (
//                 <div
//                   key={stat.label}
//                   className="pr-8 mr-8"
//                   style={{
//                     borderRight: i < stats.length - 1 ? '1px solid rgba(204,31,31,0.30)' : 'none',
//                   }}
//                 >
//                   <p className="font-serif font-bold text-2xl" style={{ color: '#E53935' }}>{stat.value}</p>
//                   <p className="text-white/45 text-xs font-medium mt-0.5">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ─── SEARCH BAR ─── */}
//           <div
//             className="rounded-2xl p-2 max-w-5xl"
//             style={{
//               background: 'rgba(255,255,255,0.06)',
//               backdropFilter: 'blur(20px)',
//               border: '1px solid rgba(255,255,255,0.12)',
//               boxShadow: '0 8px 32px rgba(0,0,0,0.30)',
//             }}
//           >
//             {/* Tabs */}
//             <div className="flex gap-1 p-1 rounded-xl mb-3" style={{ background: 'rgba(0,0,0,0.30)' }}>
//               {(['buy', 'rent', 'project'] as const).map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setSearchTab(tab)}
//                   className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all capitalize"
//                   style={
//                     searchTab === tab
//                       ? { background: '#CC1F1F', color: '#fff', boxShadow: '0 4px 12px rgba(204,31,31,0.40)' }
//                       : { color: 'rgba(255,255,255,0.65)' }
//                   }
//                 >
//                   {tab === 'project' ? 'New Projects' : `For ${tab === 'buy' ? 'Sale' : 'Rent'}`}
//                 </button>
//               ))}
//             </div>

//             {/* Search Fields */}
//             <div className="flex flex-col sm:flex-row gap-2">
//               <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
//                 <MapPin className="w-4 h-4 shrink-0" style={{ color: '#CC1F1F' }} />
//                 <select className="w-full bg-transparent text-charcoal text-sm focus:outline-none">
//                   <option value="">Select Location</option>
//                   {locationOptions.map((l) => <option key={l}>{l}</option>)}
//                 </select>
//               </div>
//               <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
//                 <IndianRupee className="w-4 h-4 shrink-0" style={{ color: '#CC1F1F' }} />
//                 <select className="w-full bg-transparent text-charcoal text-sm focus:outline-none">
//                   <option value="">Budget Range</option>
//                   {budgetOptions.map((b) => <option key={b}>{b}</option>)}
//                 </select>
//               </div>
//               <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
//                 <Home className="w-4 h-4 shrink-0" style={{ color: '#CC1F1F' }} />
//                 <select className="w-full bg-transparent text-charcoal text-sm focus:outline-none">
//                   <option value="">Property Type</option>
//                   {typeOptions.map((t) => <option key={t}>{t}</option>)}
//                 </select>
//               </div>
//               <Link
//                 href="/properties"
//                 className="flex items-center gap-2 font-semibold whitespace-nowrap text-sm px-6 py-3 rounded-xl transition-all"
//                 style={{
//                   background: 'linear-gradient(135deg, #CC1F1F 0%, #E53935 100%)',
//                   color: '#fff',
//                   boxShadow: '0 4px 16px rgba(204,31,31,0.45)',
//                 }}
//               >
//                 <Search className="w-4 h-4" />
//                 Search
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
//           <div className="w-5 h-9 border-2 border-white/25 rounded-full flex items-start justify-center pt-1.5">
//             <div className="w-1 h-2 bg-white/50 rounded-full" />
//           </div>
//         </div>
//       </section>

//       <section className="py-20 md:py-28 bg-ivory">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
//             <div>
//               <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
//                 <span className="w-8 h-px bg-gold" />
//                 Hand-picked for You
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
//                 Featured Properties
//               </h2>
//               <p className="text-charcoal-muted mt-3 max-w-lg">
//                 Explore our curated selection of premium properties across Lucknow&apos;s finest neighbourhoods.
//               </p>
//             </div>
//             <Link
//               href="/properties"
//               className="flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all group shrink-0"
//             >
//               View All Properties
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {featuredProperties.map((property) => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── WHY CHOOSE US ─── */}
//       <section className="py-20 md:py-28 relative overflow-hidden">
//         <div
//           className="absolute inset-0"
//           style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0d1a0d 50%, #1a100d 100%)' }}
//         />
//         <div className="absolute inset-0 opacity-5">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `radial-gradient(circle, rgba(201,149,42,0.4) 1px, transparent 1px)`,
//               backgroundSize: '40px 40px',
//             }}
//           />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-16">
//             <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
//               The Fincap sol Difference
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
//               Why Choose Us
//             </h2>
//             <p className="text-white/50 max-w-xl mx-auto">
//               15 years of excellence in Lucknow real estate has built us a reputation that speaks for itself.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {whyChooseUs.map((item, i) => {
//               const IconComp = whyIcons[item.icon] || ShieldCheck
//               return (
//                 <div
//                   key={i}
//                   className="group p-8 rounded-2xl border border-white/10 hover:border-gold/40 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default"
//                 >
//                   <div className="w-14 h-14 rounded-2xl bg-gold/20 group-hover:bg-gold transition-colors duration-300 flex items-center justify-center mb-6">
//                     <IconComp className="w-7 h-7 text-gold group-hover:text-white transition-colors duration-300" />
//                   </div>
//                   <h3 className="font-serif font-semibold text-xl text-white mb-3">{item.title}</h3>
//                   <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
//                     {item.desc}
//                   </p>
//                 </div>
//               )
//             })}
//           </div>

//           {/* Trust badges */}
//           {/* <div className="mt-16 flex flex-wrap justify-center gap-8">
//             {[
//               { icon: Award, text: 'Best Broker Award 2023' },
//               { icon: CheckCircle2, text: 'RERA Certified' },
//               { icon: ShieldCheck, text: 'ISO 9001:2015' },
//               { icon: Star, text: '4.9/5 Client Rating' },
//             ].map(({ icon: Icon, text }) => (
//               <div key={text} className="flex items-center gap-3 text-white/60">
//                 <Icon className="w-5 h-5 text-gold" />
//                 <span className="text-sm font-medium">{text}</span>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </section>

//       {/* ─── HOT DEALS / NEW PROJECTS ─── */}
//       <section className="py-20 md:py-28 mesh-bg">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
//             <div>
//               <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
//                 <span className="w-8 h-px bg-gold" />
//                 New &amp; Trending
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
//                 Hot Projects &amp; Deals
//               </h2>
//             </div>
//             <Link
//               href="/properties?type=project"
//               className="flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all group shrink-0"
//             >
//               All New Projects
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {hotDeals.map((p, i) => (
//               <Link key={p.id} href={`/properties/${p.id}`} className="group">
//                 <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-1">
//                   {/* Visual */}
//                   <div
//                     className="h-56 relative"
//                     style={{ background: `linear-gradient(135deg, ${p.gradientFrom} 0%, ${p.gradientTo} 100%)` }}
//                   >
//                     <div className="absolute inset-0 opacity-10">
//                       <div className="absolute top-6 left-6 w-28 h-28 rounded-full border-2 border-white" />
//                       <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full border border-white" />
//                     </div>
//                     {p.badge && (
//                       <div className="absolute top-4 left-4">
//                         <span className="badge-featured text-white text-xs font-bold px-3 py-1.5 rounded-full">
//                           {p.badge}
//                         </span>
//                       </div>
//                     )}
//                     <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
//                       <p className="text-white font-serif text-xl font-bold">{p.price}</p>
//                     </div>
//                   </div>
//                   {/* Content */}
//                   <div className="bg-white p-5">
//                     <h3 className="font-serif font-semibold text-lg text-charcoal mb-2 group-hover:text-gold transition-colors">
//                       {p.title}
//                     </h3>
//                     <div className="flex items-center gap-1.5 text-charcoal-muted text-sm mb-4">
//                       <MapPin className="w-3.5 h-3.5 text-gold" />
//                       {p.location}
//                     </div>
//                     <div className="flex items-center justify-between text-sm">
//                       <div className="flex gap-4 text-charcoal-muted">
//                         {p.developer && <span className="text-gold font-medium">{p.developer}</span>}
//                         {p.possession && <span>Possession: {p.possession}</span>}
//                       </div>
//                       <ChevronRight className="w-5 h-5 text-gold" />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── LOCATIONS ─── */}
//       <section className="py-20 md:py-28 bg-ivory-dark">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-12">
//             <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
//               Explore by Area
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
//               Top Locations in Lucknow
//             </h2>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//             {locations.map((loc) => (
//               <Link
//                 key={loc.slug}
//                 href={`/location/${loc.slug}`}
//                 className="group"
//               >
//                 <div className="bg-white rounded-2xl p-5 text-center shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-1 border border-stone-border/30">
//                   <div
//                     className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
//                     style={{ background: `linear-gradient(135deg, ${loc.gradient.includes('blue') ? '#1e3a5f' : loc.gradient.includes('purple') ? '#2a1a4a' : loc.gradient.includes('emerald') ? '#1a3a2a' : '#2a1a1a'}, ${loc.gradient.includes('blue') ? '#2d6a8a' : loc.gradient.includes('purple') ? '#4a2d6a' : loc.gradient.includes('emerald') ? '#2d5a3d' : '#5a2a2a'})` }}
//                   >
//                     <MapPin className="w-5 h-5 text-white" />
//                   </div>
//                   <p className="font-semibold text-charcoal text-sm mb-1 group-hover:text-gold transition-colors">
//                     {loc.name}
//                   </p>
//                   <p className="text-xs text-charcoal-muted">{loc.properties} properties</p>
//                   <p className="text-xs font-semibold text-green-600 mt-1">{loc.priceChange}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── TESTIMONIALS ─── */}
//       <section className="py-20 md:py-28 bg-ivory">
//         <div className="max-w-5xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-14">
//             <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
//               <span className="w-6 h-px bg-gold" />
//               Client Stories
//               <span className="w-6 h-px bg-gold" />
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
//               What Our Clients Say
//             </h2>
//           </div>
//           <TestimonialSlider />
//         </div>
//       </section>

//       {/* ─── DEVELOPER PARTNERS ─── */}
//       <section className="py-16 border-y border-stone-border bg-white">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <p className="text-center text-sm font-semibold text-charcoal-muted uppercase tracking-wider mb-10">
//             Our Trusted Developer Partners
//           </p>
//           <div className="flex flex-wrap items-center justify-center gap-8">
//             {developers.map((dev) => (
//               <div
//                 key={dev.name}
//                 className="flex items-center gap-3 px-6 py-3 rounded-xl border border-stone-border/50 hover:border-gold/30 hover:shadow-card transition-all cursor-default group"
//               >
//                 <div className="w-9 h-9 rounded-lg bg-charcoal group-hover:bg-gold transition-colors flex items-center justify-center text-white text-xs font-bold font-serif">
//                   {dev.initials}
//                 </div>
//                 <span className="text-charcoal font-semibold text-sm group-hover:text-gold transition-colors">
//                   {dev.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── CTA BANNER ─── */}
//       {/* <section className="py-24 relative overflow-hidden">
//         <div
//           className="absolute inset-0"
//           style={{ background: 'linear-gradient(135deg, #C9952A 0%, #E0B048 50%, #A07820 100%)' }}
//         />
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-full h-full"
//             style={{
//               backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
//               backgroundSize: '60px 60px',
//             }}
//           />
//         </div>
//         <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
//         <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-black/10 translate-y-1/2 -translate-x-1/2" />

//         <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
//           <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-4">
//             Ready to Find Your Dream Property?
//           </p>
//           <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//             Let&apos;s Make Your Real<br />Estate Dream a Reality
//           </h2>
//           <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
//             Connect with our expert advisors today. Free consultation, zero commission from buyers,
//             and complete guidance from search to possession.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/contact"
//               className="bg-white text-gold font-bold px-8 py-4 rounded-full hover:bg-ivory transition-colors shadow-lg text-sm"
//             >
//               Schedule Free Consultation
//             </Link>
//             <a
//               href="tel:+919876543210"
//               className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm"
//             >
//               <Phone className="w-4 h-4" />
//               Call +91 98765 43210
//             </a>
//           </div>
//         </div>
//       </section> */}

//       {/* ─── CTA BANNER ─── */}
//       {/* <section className="py-28 relative overflow-hidden">


//         <div className="absolute inset-0" style={{ background: '#060C18' }} />


//         <div
//           className="absolute inset-0"
//           style={{
//             background: 'linear-gradient(105deg, rgba(204,31,31,0.95) 0%, rgba(180,15,15,0.85) 38%, transparent 62%)',
//           }}
//         />

//         <div
//           className="absolute inset-0"
//           style={{
//             background: 'radial-gradient(ellipse 70% 100% at 85% 50%, #0A1628 0%, transparent 70%)',
//           }}
//         />


//         <div
//           className="absolute z-0"
//           style={{
//             top: '-20%', left: '-8%',
//             width: '50%', height: '80%',
//             borderRadius: '50%',
//             background: 'radial-gradient(circle, rgba(204,31,31,0.35) 0%, transparent 65%)',
//             filter: 'blur(50px)',
//           }}
//         />


//         <div
//           className="absolute z-0"
//           style={{
//             bottom: '-20%', right: '-5%',
//             width: '45%', height: '70%',
//             borderRadius: '50%',
//             background: 'radial-gradient(circle, rgba(10,22,40,0.90) 0%, transparent 65%)',
//             filter: 'blur(40px)',
//           }}
//         />


//         <div
//           className="absolute inset-0 opacity-[0.08]"
//           style={{
//             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//             backgroundSize: '32px 32px',
//           }}
//         />


//         <div
//           className="absolute top-0 left-0 right-0 h-[2px]"
//           style={{ background: 'linear-gradient(90deg, #CC1F1F 0%, #E53935 40%, rgba(204,31,31,0.2) 100%)' }}
//         />


//         <div
//           className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/5"
//           style={{ background: 'rgba(255,255,255,0.02)' }}
//         />

//         <div
//           className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-white/5"
//           style={{ background: 'rgba(255,255,255,0.02)' }}
//         />

//         <div className="absolute top-[25%] right-[15%] w-3 h-3 rounded-full animate-float" style={{ background: '#CC1F1F', opacity: 0.6, animationDelay: '0s' }} />
//         <div className="absolute bottom-[30%] left-[12%] w-2 h-2 rounded-full animate-float" style={{ background: '#ffffff', opacity: 0.20, animationDelay: '1.2s' }} />
//         <div className="absolute top-[60%] right-[30%] w-1.5 h-1.5 rounded-full animate-float" style={{ background: '#E53935', opacity: 0.45, animationDelay: '0.6s' }} />
//         <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">


//           <div
//             className="inline-flex items-center gap-2 mb-6"
//             style={{
//               background: 'rgba(255,255,255,0.08)',
//               border: '1px solid rgba(255,255,255,0.15)',
//               borderRadius: '100px',
//               padding: '6px 18px',
//               backdropFilter: 'blur(8px)',
//             }}
//           >
//             <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#E53935' }} />
//             <p className="text-white/80 text-xs font-semibold uppercase tracking-widest">
//               Ready to Find Your Dream Property?
//             </p>
//           </div>


//           <h2 className="font-serif font-bold leading-[1.1] mb-6">
//             <span
//               className="block text-4xl md:text-5xl lg:text-6xl"
//               style={{
//                 background: 'linear-gradient(180deg, #FFFFFF 40%, rgba(255,255,255,0.65) 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//               }}
//             >
//               Let&apos;s Make Your Real
//             </span>
//             <span
//               className="block text-4xl md:text-5xl lg:text-6xl mt-1"
//               style={{
//                 background: 'linear-gradient(90deg, #ffffff 0%, #ffcccc 50%, #ffffff 100%)',
//                 backgroundSize: '200% auto',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//                 animation: 'shimmer 4s linear infinite',
//               }}
//             >
//               Estate Dream a Reality
//             </span>
//           </h2>

//           <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
//             Connect with our expert advisors today. Free consultation, zero commission from buyers,
//             and complete guidance from search to possession.
//           </p>


//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/contact"
//               className="font-bold px-8 py-4 rounded-full text-sm transition-all"
//               style={{
//                 background: '#ffffff',
//                 color: '#CC1F1F',
//                 boxShadow: '0 8px 28px rgba(0,0,0,0.25)',
//               }}
//             >
//               Schedule Free Consultation
//             </Link>
//             <a
//               href="tel:+919876543210"
//               className="font-bold px-8 py-4 rounded-full text-sm transition-all flex items-center justify-center gap-2"
//               style={{
//                 border: '2px solid rgba(255,255,255,0.30)',
//                 color: '#ffffff',
//                 background: 'rgba(255,255,255,0.06)',
//                 backdropFilter: 'blur(8px)',
//               }}
//             >
//               <Phone className="w-4 h-4" />
//               Call +91 98765 43210
//             </a>
//           </div>


//         </div>
//       </section> */}
//       {/* ─── CTA BANNER ─── */}
//       {/* ─── CTA BANNER ─── */}
//       <section className="py-28 relative overflow-hidden">

//         {/* Deep Navy Base */}
//         <div className="absolute inset-0 z-0" style={{ background: '#060C18' }} />

//         {/* Red diagonal slash — left side */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: 'linear-gradient(118deg, rgba(204,31,31,0.06) 0%, rgba(204,31,31,0.18) 48%, transparent 48%)',
//           }}
//         />

//         {/* Navy depth — right side */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: 'radial-gradient(ellipse 80% 70% at 85% 50%, #0A1628 0%, transparent 70%)',
//           }}
//         />

//         {/* Red glow — bottom left */}
//         <div
//           className="absolute z-0"
//           style={{
//             bottom: '-10%', left: '-5%',
//             width: '55%', height: '70%',
//             borderRadius: '50%',
//             background: 'radial-gradient(circle, rgba(204,31,31,0.22) 0%, rgba(204,31,31,0.08) 40%, transparent 70%)',
//             filter: 'blur(40px)',
//           }}
//         />

//         {/* Navy glow — top right */}
//         <div
//           className="absolute z-0"
//           style={{
//             top: '-15%', right: '-10%',
//             width: '60%', height: '65%',
//             borderRadius: '50%',
//             background: 'radial-gradient(circle, rgba(30,58,95,0.70) 0%, transparent 65%)',
//             filter: 'blur(50px)',
//           }}
//         />

//         {/* Small red accent glow — center left */}
//         <div
//           className="absolute z-0"
//           style={{
//             top: '35%', left: '18%',
//             width: '280px', height: '280px',
//             borderRadius: '50%',
//             background: 'radial-gradient(circle, rgba(204,31,31,0.28) 0%, transparent 65%)',
//             filter: 'blur(30px)',
//           }}
//         />

//         {/* Red top border line */}
//         <div
//           className="absolute top-0 left-0 right-0 z-0 h-[2px]"
//           style={{ background: 'linear-gradient(90deg, transparent 0%, #CC1F1F 40%, #E53935 60%, transparent 100%)' }}
//         />

//         {/* Left vertical red stripe */}
//         <div
//           className="absolute left-0 top-0 bottom-0 z-0 w-1"
//           style={{ background: 'linear-gradient(180deg, transparent 0%, #CC1F1F 30%, #E53935 60%, transparent 100%)', opacity: 0.4 }}
//         />

//         {/* ════════════════ CONTENT ════════════════ */}
//         <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">

//           {/* Eyebrow pill */}
//           <div
//             className="inline-flex items-center gap-2.5 mb-6"
//             style={{
//               background: 'rgba(204,31,31,0.12)',
//               border: '1px solid rgba(204,31,31,0.35)',
//               borderRadius: '100px',
//               padding: '8px 20px',
//               backdropFilter: 'blur(10px)',
//             }}
//           >
//             <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#CC1F1F' }} />
//             <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">
//               Ready to Find Your Dream Property?
//             </span>
//           </div>

//           {/* Headline */}
//           <h2 className="font-serif font-bold leading-[1.08] mb-6">
//             <span
//               className="block text-4xl md:text-5xl lg:text-6xl"
//               style={{
//                 background: 'linear-gradient(180deg, #FFFFFF 40%, rgba(255,255,255,0.60) 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//               }}
//             >
//               Let&apos;s Make Your Real
//             </span>
//             <span
//               className="block text-4xl md:text-5xl lg:text-6xl mt-1"
//               style={{
//                 background: 'linear-gradient(90deg, #CC1F1F 0%, #E53935 40%, #FF6B6B 70%, #CC1F1F 100%)',
//                 backgroundSize: '200% auto',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//                 animation: 'shimmer 3s linear infinite',
//               }}
//             >
//               Estate Dream a Reality
//             </span>
//           </h2>

//           <p className="text-white/55 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
//             Connect with our expert advisors today. Free consultation, zero commission from buyers,
//             and complete guidance from search to possession.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/contact"
//               className="font-bold px-8 py-4 rounded-full text-sm transition-all"
//               style={{
//                 background: '#ffffff',
//                 color: '#CC1F1F',
//                 boxShadow: '0 8px 28px rgba(0,0,0,0.30)',
//               }}
//             >
//               Schedule Free Consultation
//             </Link>
//             <a
//               href="tel:+919876543210"
//               className="font-bold px-8 py-4 rounded-full text-sm flex items-center justify-center gap-2 transition-all"
//               style={{
//                 border: '2px solid rgba(255,255,255,0.25)',
//                 color: '#ffffff',
//                 background: 'rgba(255,255,255,0.06)',
//                 backdropFilter: 'blur(8px)',
//               }}
//             >
//               <Phone className="w-4 h-4" />
//               Call +91 98765 43210
//             </a>
//           </div>


//         </div>
//       </section>

//       {/* ─── QUICK INQUIRY FORM ─── */}
//       <section className="py-20 md:py-28 mesh-bg">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left */}
//             <div>
//               <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
//                 <span className="w-8 h-px bg-gold" />
//                 Get in Touch
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
//                 Quick Property<br />Inquiry
//               </h2>
//               <p className="text-charcoal-muted mb-8 leading-relaxed">
//                 Share your requirements and our expert advisors will contact you within 30 minutes with the best matching properties.
//               </p>

//               <div className="space-y-5">
//                 {[
//                   { icon: CheckCircle2, text: 'Free property matching service' },
//                   { icon: CheckCircle2, text: 'Expert legal & financial guidance' },
//                   { icon: CheckCircle2, text: 'Zero brokerage for buyers' },
//                   { icon: CheckCircle2, text: 'Site visit assistance' },
//                 ].map(({ icon: Icon, text }) => (
//                   <div key={text} className="flex items-center gap-3">
//                     <Icon className="w-5 h-5 text-gold shrink-0" />
//                     <span className="text-charcoal font-medium">{text}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-10 p-6 bg-white rounded-2xl shadow-card border border-stone-border/30">
//                 <p className="font-serif font-semibold text-charcoal mb-4">Office Hours</p>
//                 <div className="space-y-2 text-sm text-charcoal-muted">
//                   <div className="flex justify-between">
//                     <span>Monday – Saturday</span>
//                     <span className="font-medium text-charcoal">9:00 AM – 8:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Sunday</span>
//                     <span className="font-medium text-charcoal">10:00 AM – 5:00 PM</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Form */}
//             <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card-hover border border-stone-border/30">
//               <h3 className="font-serif text-2xl font-semibold text-charcoal mb-6">Send an Enquiry</h3>
//               <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-sm font-medium text-charcoal mb-2">
//                       Full Name <span className="text-gold">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Rajesh Sharma"
//                       value={inquiryForm.name}
//                       onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
//                       className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-charcoal mb-2">
//                       Phone Number <span className="text-gold">*</span>
//                     </label>
//                     <input
//                       type="tel"
//                       placeholder="+91 98765 43210"
//                       value={inquiryForm.phone}
//                       onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
//                       className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-charcoal mb-2">
//                     Preferred Location
//                   </label>
//                   <select className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white">
//                     <option value="">Select Area</option>
//                     {locationOptions.map((l) => <option key={l}>{l}</option>)}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-charcoal mb-2">Budget</label>
//                   <select className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white">
//                     <option value="">Select Budget</option>
//                     {budgetOptions.map((b) => <option key={b}>{b}</option>)}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-charcoal mb-2">Message</label>
//                   <textarea
//                     rows={3}
//                     placeholder="Tell us about your requirements..."
//                     value={inquiryForm.message}
//                     onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
//                     className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 resize-none"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-gold text-white font-semibold py-4 rounded-xl hover:bg-gold-dark transition-all shadow-md hover:shadow-gold flex items-center justify-center gap-2"
//                 >
//                   <Send className="w-4 h-4" />
//                   Send Enquiry
//                 </button>

//                 <p className="text-center text-xs text-charcoal-muted">
//                   By submitting, you agree to our{' '}
//                   <Link href="#" className="text-gold hover:underline">Privacy Policy</Link>.
//                   We never share your data.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import {
//   Search,
//   MapPin,
//   IndianRupee,
//   Home,
//   ShieldCheck,
//   TrendingUp,
//   Star,
//   ArrowRight,
//   Phone,
//   Send,
//   Award,
//   CheckCircle2,
//   ChevronRight,
//   Handshake,
//   Building,
// } from 'lucide-react'
// import PropertyCard from '@/components/PropertyCard'
// import TestimonialSlider from '@/components/TestimonialSlider'
// import { properties, locations, developers, stats, whyChooseUs } from '@/lib/data'

// const locationOptions = [
//   'Gomti Nagar', 'Hazratganj', 'Shaheed Path', 'Aliganj', 'Sultanpur Road', 'Vibhuti Khand',
// ]

// const budgetOptions = [
//   'Under ₹50 Lakh', '₹50L–₹1 Cr', '₹1–₂ Cr', '₹2–5 Cr', 'Above ₹5 Cr',
// ]

// const typeOptions = ['Apartment', 'Villa', 'Plot', 'Commercial', 'Penthouse']

// const whyIcons: Record<string, typeof ShieldCheck> = {
//   ShieldCheck,
//   TrendingUp,
//   HandshakeIcon: Handshake,
//   Star,
// }

// export default function HomePage() {
//   const [searchTab, setSearchTab] = useState<'buy' | 'rent' | 'project'>('buy')
//   const [inquiryForm, setInquiryForm] = useState({ name: '', phone: '', location: '', message: '' })

//   const featuredProperties = properties.filter((p) => p.featured)
//   const hotDeals = properties.filter((p) => p.type === 'project').slice(0, 3)

//   return (
//     <div>
//       {/* ─── HERO ─── */}
//       <section className="relative min-h-screen flex items-center overflow-hidden">

//         {/* ── Deep Navy Base ── */}
//         <div className="absolute inset-0 z-0" style={{ background: '#060C18' }} />

//         {/* ── Large diagonal red slash — right side ── */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: 'linear-gradient(118deg, transparent 52%, rgba(204,31,31,0.18) 52%, rgba(204,31,31,0.06) 100%)',
//           }}
//         />

//         {/* ── Layered navy gradient for depth ── */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: 'radial-gradient(ellipse 80% 70% at 15% 50%, #0A1628 0%, transparent 70%)',
//           }}
//         />

//         {/* ── Red glow — top right ── */}
//         <div
//           className="absolute z-0"
//           style={{
//             top: '-10%', right: '-5%',
//             width: '55%', height: '70%',
//             borderRadius: '50%',
//             background: 'radial-gradient(circle, rgba(204,31,31,0.22) 0%, rgba(204,31,31,0.08) 40%, transparent 70%)',
//             filter: 'blur(40px)',
//           }}
//         />

//         {/* ── Navy glow — bottom left ── */}
//         <div
//           className="absolute z-0"
//           style={{
//             bottom: '-15%', left: '-10%',
//             width: '60%', height: '65%',
//             borderRadius: '50%',
//             background: 'radial-gradient(circle, rgba(30,58,95,0.70) 0%, transparent 65%)',
//             filter: 'blur(50px)',
//           }}
//         />

//         {/* ── Small red accent glow — center right ── */}
//         <div
//           className="absolute z-0"
//           style={{
//             top: '35%', right: '18%',
//             width: '280px', height: '280px',
//             borderRadius: '50%',
//             background: 'radial-gradient(circle, rgba(204,31,31,0.28) 0%, transparent 65%)',
//             filter: 'blur(30px)',
//           }}
//         />

//         {/* ── Fine dot grid ── */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
//             backgroundSize: '36px 36px',
//           }}
//         />

//         {/* ── Diagonal line grid overlay ── */}
//         <div
//           className="absolute inset-0 z-0 opacity-[0.04]"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
//             `,
//             backgroundSize: '100px 100px',
//           }}
//         />

//         {/* ── Red thin accent line — top ── */}
//         <div
//           className="absolute top-0 left-0 right-0 z-0 h-[2px]"
//           style={{ background: 'linear-gradient(90deg, transparent 0%, #CC1F1F 40%, #E53935 60%, transparent 100%)' }}
//         />

//         {/* ── Floating orbs ── */}
//         <div className="absolute top-[20%] left-[8%]  w-3 h-3 rounded-full z-0 animate-float" style={{ background: '#CC1F1F', opacity: 0.7, animationDelay: '0s' }} />
//         <div className="absolute top-[55%] left-[5%]  w-2 h-2 rounded-full z-0 animate-float" style={{ background: '#ffffff', opacity: 0.25, animationDelay: '1.5s' }} />
//         <div className="absolute top-[30%] right-[12%] w-4 h-4 rounded-full z-0 animate-float" style={{ background: '#CC1F1F', opacity: 0.45, animationDelay: '0.8s' }} />
//         <div className="absolute bottom-[25%] right-[25%] w-2 h-2 rounded-full z-0 animate-float" style={{ background: '#ffffff', opacity: 0.20, animationDelay: '2s' }} />
//         <div className="absolute top-[70%] left-[30%] w-1.5 h-1.5 rounded-full z-0 animate-float" style={{ background: '#E53935', opacity: 0.50, animationDelay: '1s' }} />

//         {/* ── Right side vertical red stripe accent ── */}
//         <div
//           className="absolute right-0 top-0 bottom-0 z-0 w-1"
//           style={{ background: 'linear-gradient(180deg, transparent 0%, #CC1F1F 30%, #E53935 60%, transparent 100%)', opacity: 0.4 }}
//         />

//         {/* ════════════════ CONTENT ════════════════ */}
//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-16">
//           <div className="max-w-4xl">

//             {/* Eyebrow pill */}
//             <div className="inline-flex items-center gap-2.5 mb-8"
//               style={{
//                 background: 'rgba(204,31,31,0.12)',
//                 border: '1px solid rgba(204,31,31,0.35)',
//                 borderRadius: '100px',
//                 padding: '8px 20px',
//                 backdropFilter: 'blur(10px)',
//               }}
//             >
//               <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#CC1F1F' }} />
//               <span className="text-white/90 text-sm font-medium tracking-wide">
//                 Lucknow&apos;s Most Trusted Real Estate Firm
//               </span>
//             </div>

//             {/* Headline */}
//             <h1 className="font-serif font-bold leading-[1.08] mb-6">
//               <span
//                 className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
//                 style={{
//                   background: 'linear-gradient(180deg, #FFFFFF 40%, rgba(255,255,255,0.60) 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}
//               >
//                 Your Trusted
//               </span>
//               {/* Red shimmer line */}
//               <span
//                 className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
//                 style={{
//                   background: 'linear-gradient(90deg, #CC1F1F 0%, #E53935 40%, #FF6B6B 70%, #CC1F1F 100%)',
//                   backgroundSize: '200% auto',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                   animation: 'shimmer 3s linear infinite',
//                 }}
//               >
//                 Real Estate Advisors
//               </span>
//               <span
//                 className="block text-3xl sm:text-4xl md:text-5xl mt-2"
//                 style={{
//                   background: 'linear-gradient(180deg, rgba(255,255,255,0.80) 0%, rgba(255,255,255,0.45) 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}
//               >
//                 in Lucknow
//               </span>
//             </h1>

//             <p className="text-white/55 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
//               From premium apartments to luxury villas — we help you find the perfect property with
//               complete transparency, trusted expertise, and end-to-end support.
//             </p>

//             {/* Stats strip — with red dividers */}
//             <div className="flex flex-wrap gap-0 mb-12">
//               {stats.map((stat, i) => (
//                 <div
//                   key={stat.label}
//                   className="pr-8 mr-8"
//                   style={{
//                     borderRight: i < stats.length - 1 ? '1px solid rgba(204,31,31,0.30)' : 'none',
//                   }}
//                 >
//                   <p className="font-serif font-bold text-2xl" style={{ color: '#E53935' }}>{stat.value}</p>
//                   <p className="text-white/45 text-xs font-medium mt-0.5">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ─── SEARCH BAR ─── */}
//           <div
//             className="rounded-2xl p-2 max-w-5xl"
//             style={{
//               background: 'rgba(255,255,255,0.06)',
//               backdropFilter: 'blur(20px)',
//               border: '1px solid rgba(255,255,255,0.12)',
//               boxShadow: '0 8px 32px rgba(0,0,0,0.30)',
//             }}
//           >
//             {/* Tabs */}
//             <div className="flex gap-1 p-1 rounded-xl mb-3" style={{ background: 'rgba(0,0,0,0.30)' }}>
//               {(['buy', 'rent', 'project'] as const).map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setSearchTab(tab)}
//                   className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all capitalize"
//                   style={
//                     searchTab === tab
//                       ? { background: '#CC1F1F', color: '#fff', boxShadow: '0 4px 12px rgba(204,31,31,0.40)' }
//                       : { color: 'rgba(255,255,255,0.65)' }
//                   }
//                 >
//                   {tab === 'project' ? 'New Projects' : `For ${tab === 'buy' ? 'Sale' : 'Rent'}`}
//                 </button>
//               ))}
//             </div>

//             {/* Search Fields */}
//             <div className="flex flex-col sm:flex-row gap-2">
//               <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
//                 <MapPin className="w-4 h-4 shrink-0" style={{ color: '#CC1F1F' }} />
//                 <select className="w-full bg-transparent text-charcoal text-sm focus:outline-none">
//                   <option value="">Select Location</option>
//                   {locationOptions.map((l) => <option key={l}>{l}</option>)}
//                 </select>
//               </div>
//               <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
//                 <IndianRupee className="w-4 h-4 shrink-0" style={{ color: '#CC1F1F' }} />
//                 <select className="w-full bg-transparent text-charcoal text-sm focus:outline-none">
//                   <option value="">Budget Range</option>
//                   {budgetOptions.map((b) => <option key={b}>{b}</option>)}
//                 </select>
//               </div>
//               <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
//                 <Home className="w-4 h-4 shrink-0" style={{ color: '#CC1F1F' }} />
//                 <select className="w-full bg-transparent text-charcoal text-sm focus:outline-none">
//                   <option value="">Property Type</option>
//                   {typeOptions.map((t) => <option key={t}>{t}</option>)}
//                 </select>
//               </div>
//               <Link
//                 href="/properties"
//                 className="flex items-center gap-2 font-semibold whitespace-nowrap text-sm px-6 py-3 rounded-xl transition-all"
//                 style={{
//                   background: 'linear-gradient(135deg, #CC1F1F 0%, #E53935 100%)',
//                   color: '#fff',
//                   boxShadow: '0 4px 16px rgba(204,31,31,0.45)',
//                 }}
//               >
//                 <Search className="w-4 h-4" />
//                 Search
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
//           <div className="w-5 h-9 border-2 border-white/25 rounded-full flex items-start justify-center pt-1.5">
//             <div className="w-1 h-2 bg-white/50 rounded-full" />
//           </div>
//         </div>
//       </section>

//       {/* ─── FEATURED PROPERTIES ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#F5F7FA' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2"
//                 style={{ color: '#E63946' }}>
//                 <span className="w-8 h-px" style={{ background: '#E63946' }} />
//                 Hand-picked for You
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
//                 Featured Properties
//               </h2>
//               <p className="mt-3 max-w-lg" style={{ color: '#6B7280' }}>
//                 Explore our curated selection of premium properties across Lucknow&apos;s finest neighbourhoods.
//               </p>
//             </div>
//             <Link
//               href="/properties"
//               className="flex items-center gap-2 font-semibold hover:gap-4 transition-all group shrink-0"
//               style={{ color: '#E63946' }}
//             >
//               View All Properties
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {featuredProperties.map((property) => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── WHY CHOOSE US ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#0B1F3A' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-16">
//             <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#E63946' }}>
//               The Regalia Difference
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
//               Why Choose Us
//             </h2>
//             <p className="max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.50)' }}>
//               15 years of excellence in Lucknow real estate has built us a reputation that speaks for itself.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {whyChooseUs.map((item, i) => {
//               const IconComp = whyIcons[item.icon] || ShieldCheck
//               return (
//                 <div
//                   key={i}
//                   className="group p-8 rounded-xl cursor-default transition-all duration-300"
//                   style={{
//                     background: 'rgba(255,255,255,0.05)',
//                     border: '1px solid rgba(255,255,255,0.08)',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
//                     e.currentTarget.style.borderColor = 'rgba(230,57,70,0.35)'
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
//                     e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
//                   }}
//                 >
//                   <div
//                     className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
//                     style={{ background: 'rgba(230,57,70,0.15)' }}
//                   >
//                     <IconComp className="w-7 h-7" style={{ color: '#E63946' }} />
//                   </div>
//                   <h3 className="font-serif font-semibold text-xl text-white mb-3">{item.title}</h3>
//                   <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)' }}>
//                     {item.desc}
//                   </p>
//                 </div>
//               )
//             })}
//           </div>

//           {/* Trust badges */}
//           <div
//             className="mt-14 pt-10 flex flex-wrap justify-center gap-8"
//             style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
//           >
//             {[
//               { icon: Award, text: 'Best Broker Award 2023' },
//               { icon: CheckCircle2, text: 'RERA Certified' },
//               { icon: ShieldCheck, text: 'ISO 9001:2015' },
//               { icon: Star, text: '4.9/5 Client Rating' },
//             ].map(({ icon: Icon, text }) => (
//               <div key={text} className="flex items-center gap-2.5" style={{ color: 'rgba(255,255,255,0.50)' }}>
//                 <Icon className="w-4 h-4" style={{ color: '#E63946' }} />
//                 <span className="text-sm font-medium">{text}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── HOT DEALS / NEW PROJECTS ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2"
//                 style={{ color: '#E63946' }}>
//                 <span className="w-8 h-px" style={{ background: '#E63946' }} />
//                 New &amp; Trending
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
//                 Hot Projects &amp; Deals
//               </h2>
//             </div>
//             <Link
//               href="/properties?type=project"
//               className="flex items-center gap-2 font-semibold hover:gap-4 transition-all group shrink-0"
//               style={{ color: '#E63946' }}
//             >
//               All New Projects
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {hotDeals.map((p) => (
//               <Link key={p.id} href={`/properties/${p.id}`} className="group">
//                 <div
//                   className="rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
//                   style={{
//                     border: '1px solid #E8ECF2',
//                     boxShadow: '0 2px 16px rgba(11,31,58,0.06)',
//                   }}
//                 >
//                   <div className="h-52 relative"
//                     style={{ background: `linear-gradient(135deg, ${p.gradientFrom} 0%, ${p.gradientTo} 100%)` }}>
//                     {p.badge && (
//                       <div className="absolute top-4 left-4">
//                         <span className="text-white text-xs font-bold px-3 py-1.5 rounded"
//                           style={{ background: '#E63946' }}>
//                           {p.badge}
//                         </span>
//                       </div>
//                     )}
//                     <div className="absolute bottom-0 inset-x-0 p-5"
//                       style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.90), transparent)' }}>
//                       <p className="text-white font-serif text-xl font-bold">{p.price}</p>
//                     </div>
//                   </div>
//                   <div className="bg-white p-5">
//                     <h3 className="font-serif font-semibold text-base mb-2 transition-colors"
//                       style={{ color: '#0B1F3A' }}>
//                       {p.title}
//                     </h3>
//                     <div className="flex items-center gap-1.5 text-sm mb-4" style={{ color: '#6B7280' }}>
//                       <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: '#E63946' }} />
//                       {p.location}
//                     </div>
//                     <div className="flex items-center justify-between text-sm">
//                       <div className="flex gap-3">
//                         {p.developer && (
//                           <span className="font-semibold" style={{ color: '#0B1F3A' }}>{p.developer}</span>
//                         )}
//                         {p.possession && (
//                           <span style={{ color: '#6B7280' }}>· {p.possession}</span>
//                         )}
//                       </div>
//                       <ChevronRight className="w-4 h-4" style={{ color: '#E63946' }} />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── LOCATIONS ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#F5F7FA' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-12">
//             <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#E63946' }}>
//               Explore by Area
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
//               Top Locations in Lucknow
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//             {locations.map((loc) => (
//               <Link key={loc.slug} href={`/location/${loc.slug}`} className="group">
//                 <div
//                   className="bg-white p-5 text-center transition-all duration-300 group-hover:-translate-y-1 rounded-xl"
//                   style={{
//                     border: '1px solid #E8ECF2',
//                     boxShadow: '0 2px 16px rgba(11,31,58,0.05)',
//                   }}
//                 >
//                   <div
//                     className="w-11 h-11 rounded-lg mx-auto mb-3 flex items-center justify-center"
//                     style={{ background: '#EBF0F7' }}
//                   >
//                     <MapPin className="w-5 h-5" style={{ color: '#0B1F3A' }} />
//                   </div>
//                   <p className="font-semibold text-sm mb-1 transition-colors"
//                     style={{ color: '#0B1F3A' }}>
//                     {loc.name}
//                   </p>
//                   <p className="text-xs" style={{ color: '#6B7280' }}>{loc.properties} properties</p>
//                   <p className="text-xs font-semibold mt-1 text-green-600">{loc.priceChange}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── TESTIMONIALS ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-5xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-14">
//             <p className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center justify-center gap-2"
//               style={{ color: '#E63946' }}>
//               <span className="w-6 h-px" style={{ background: '#E63946' }} />
//               Client Stories
//               <span className="w-6 h-px" style={{ background: '#E63946' }} />
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
//               What Our Clients Say
//             </h2>
//           </div>
//           <TestimonialSlider />
//         </div>
//       </section>

//       {/* ─── DEVELOPER PARTNERS ─── */}
//       <section className="py-14" style={{ background: '#F5F7FA', borderTop: '1px solid #E8ECF2', borderBottom: '1px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <p className="text-center text-xs font-semibold uppercase tracking-widest mb-10" style={{ color: '#6B7280' }}>
//             Our Trusted Developer Partners
//           </p>
//           <div className="flex flex-wrap items-center justify-center gap-6">
//             {developers.map((dev) => (
//               <div
//                 key={dev.name}
//                 className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white cursor-default transition-all group"
//                 style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 4px rgba(11,31,58,0.05)' }}
//               >
//                 <div
//                   className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold font-serif transition-colors"
//                   style={{ background: '#0B1F3A' }}
//                 >
//                   {dev.initials}
//                 </div>
//                 <span className="font-semibold text-sm transition-colors" style={{ color: '#0B1F3A' }}>
//                   {dev.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── CTA BANNER ─── */}
//       <section className="py-28 relative overflow-hidden">
//         {/* Navy base */}
//         <div className="absolute inset-0 z-0" style={{ background: '#060C18' }} />
//         {/* Red diagonal */}
//         <div className="absolute inset-0 z-0" style={{
//           background: 'linear-gradient(118deg, rgba(230,57,70,0.06) 0%, rgba(230,57,70,0.18) 48%, transparent 48%)',
//         }} />
//         {/* Navy depth right */}
//         <div className="absolute inset-0 z-0" style={{
//           background: 'radial-gradient(ellipse 80% 70% at 85% 50%, #0B1F3A 0%, transparent 70%)',
//         }} />
//         {/* Red glow bottom-left */}
//         <div className="absolute z-0" style={{
//           bottom: '-10%', left: '-5%', width: '55%', height: '70%',
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(230,57,70,0.22) 0%, rgba(230,57,70,0.08) 40%, transparent 70%)',
//           filter: 'blur(40px)',
//         }} />
//         {/* Navy glow top-right */}
//         <div className="absolute z-0" style={{
//           top: '-15%', right: '-10%', width: '60%', height: '65%',
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(11,31,58,0.80) 0%, transparent 65%)',
//           filter: 'blur(50px)',
//         }} />
//         {/* Red top line */}
//         <div className="absolute top-0 left-0 right-0 z-0 h-[2px]" style={{
//           background: 'linear-gradient(90deg, transparent 0%, #E63946 40%, #EF5A65 60%, transparent 100%)',
//         }} />
//         {/* Left red stripe */}
//         <div className="absolute left-0 top-0 bottom-0 z-0 w-1" style={{
//           background: 'linear-gradient(180deg, transparent 0%, #E63946 30%, #EF5A65 60%, transparent 100%)', opacity: 0.4,
//         }} />

//         <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
//           {/* Eyebrow */}
//           <div className="inline-flex items-center gap-2.5 mb-6" style={{
//             background: 'rgba(230,57,70,0.12)', border: '1px solid rgba(230,57,70,0.35)',
//             borderRadius: '100px', padding: '8px 20px', backdropFilter: 'blur(10px)',
//           }}>
//             <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//             <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">
//               Ready to Find Your Dream Property?
//             </span>
//           </div>

//           <h2 className="font-serif font-bold leading-[1.08] mb-6">
//             <span className="block text-4xl md:text-5xl lg:text-6xl" style={{
//               background: 'linear-gradient(180deg, #FFFFFF 40%, rgba(255,255,255,0.60) 100%)',
//               WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
//             }}>
//               Let&apos;s Make Your Real
//             </span>
//             <span className="block text-4xl md:text-5xl lg:text-6xl mt-1" style={{
//               background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 40%, #FF8080 70%, #E63946 100%)',
//               backgroundSize: '200% auto', WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent', backgroundClip: 'text',
//               animation: 'shimmer 3s linear infinite',
//             }}>
//               Estate Dream a Reality
//             </span>
//           </h2>

//           <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
//             Connect with our expert advisors today. Free consultation, zero commission from buyers,
//             and complete guidance from search to possession.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact" className="font-bold px-8 py-4 rounded-lg text-sm transition-all"
//               style={{ background: '#E63946', color: '#fff', boxShadow: '0 4px 16px rgba(230,57,70,0.40)' }}>
//               Schedule Free Consultation
//             </Link>
//             <a href="tel:+919876543210"
//               className="font-bold px-8 py-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all"
//               style={{ border: '2px solid rgba(255,255,255,0.25)', color: '#fff', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}>
//               <Phone className="w-4 h-4" />
//               Call +91 98765 43210
//             </a>
//           </div>

//           {/* Trust strip */}
//           <div className="flex flex-wrap items-center justify-center gap-0 mt-12 pt-8"
//             style={{ borderTop: '1px solid rgba(230,57,70,0.20)' }}>
//             {['Free Consultation', 'Zero Buyer Commission', 'RERA Verified', '2500+ Happy Families'].map((item, i) => (
//               <div key={item} className="px-6"
//                 style={{ borderRight: i < 3 ? '1px solid rgba(230,57,70,0.25)' : 'none' }}>
//                 <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>✓ {item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── QUICK INQUIRY FORM ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#F5F7FA' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left */}
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2"
//                 style={{ color: '#E63946' }}>
//                 <span className="w-8 h-px" style={{ background: '#E63946' }} />
//                 Get in Touch
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0B1F3A' }}>
//                 Quick Property<br />Inquiry
//               </h2>
//               <p className="mb-8 leading-relaxed" style={{ color: '#6B7280' }}>
//                 Share your requirements and our expert advisors will contact you within 30 minutes.
//               </p>

//               <div className="space-y-4">
//                 {[
//                   'Free property matching service',
//                   'Expert legal & financial guidance',
//                   'Zero brokerage for buyers',
//                   'Site visit assistance',
//                 ].map((text) => (
//                   <div key={text} className="flex items-center gap-3">
//                     <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
//                       style={{ background: '#FEE8EA' }}>
//                       <CheckCircle2 className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                     </div>
//                     <span className="font-medium" style={{ color: '#1A1A1A' }}>{text}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-10 p-6 bg-white rounded-xl"
//                 style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.05)' }}>
//                 <p className="font-serif font-semibold mb-4" style={{ color: '#0B1F3A' }}>Office Hours</p>
//                 <div className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
//                   <div className="flex justify-between">
//                     <span>Monday – Saturday</span>
//                     <span className="font-semibold" style={{ color: '#1A1A1A' }}>9:00 AM – 8:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Sunday</span>
//                     <span className="font-semibold" style={{ color: '#1A1A1A' }}>10:00 AM – 5:00 PM</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Form */}
//             <div className="bg-white rounded-2xl p-8 md:p-10"
//               style={{ border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
//               <h3 className="font-serif text-2xl font-semibold mb-6" style={{ color: '#0B1F3A' }}>
//                 Send an Enquiry
//               </h3>
//               <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>
//                       Full Name <span style={{ color: '#E63946' }}>*</span>
//                     </label>
//                     <input type="text" placeholder="Rajesh Sharma"
//                       value={inquiryForm.name}
//                       onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
//                       className="w-full px-4 py-3 rounded-lg text-sm"
//                       style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }} />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>
//                       Phone Number <span style={{ color: '#E63946' }}>*</span>
//                     </label>
//                     <input type="tel" placeholder="+91 98765 43210"
//                       value={inquiryForm.phone}
//                       onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
//                       className="w-full px-4 py-3 rounded-lg text-sm"
//                       style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }} />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>
//                     Preferred Location
//                   </label>
//                   <select className="w-full px-4 py-3 rounded-lg text-sm bg-white"
//                     style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }}>
//                     <option value="">Select Area</option>
//                     {locationOptions.map((l) => <option key={l}>{l}</option>)}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>
//                     Budget
//                   </label>
//                   <select className="w-full px-4 py-3 rounded-lg text-sm bg-white"
//                     style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }}>
//                     <option value="">Select Budget</option>
//                     {budgetOptions.map((b) => <option key={b}>{b}</option>)}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>
//                     Message
//                   </label>
//                   <textarea rows={3} placeholder="Tell us about your requirements..."
//                     value={inquiryForm.message}
//                     onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
//                     className="w-full px-4 py-3 rounded-lg text-sm resize-none"
//                     style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }} />
//                 </div>

//                 <button type="submit"
//                   className="w-full text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm"
//                   style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
//                   <Send className="w-4 h-4" />
//                   Send Enquiry
//                 </button>

//                 <p className="text-center text-xs" style={{ color: '#9CA3AF' }}>
//                   By submitting, you agree to our{' '}
//                   <Link href="#" className="hover:underline" style={{ color: '#E63946' }}>Privacy Policy</Link>.
//                   We never share your data.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }



// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import {
//   Search,
//   MapPin,
//   IndianRupee,
//   Home,
//   ShieldCheck,
//   TrendingUp,
//   Star,
//   ArrowRight,
//   Phone,
//   Send,
//   Award,
//   CheckCircle2,
//   ChevronRight,
//   Handshake,
//   Building,
// } from 'lucide-react'
// import PropertyCard from '@/components/PropertyCard'
// import TestimonialSlider from '@/components/TestimonialSlider'
// import { properties, locations, developers, stats, whyChooseUs } from '@/lib/data'

// const locationOptions = [
//   'Gomti Nagar', 'Hazratganj', 'Shaheed Path', 'Aliganj', 'Sultanpur Road', 'Vibhuti Khand',
// ]

// const budgetOptions = [
//   'Under ₹50 Lakh', '₹50L–₹1 Cr', '₹1–₂ Cr', '₹2–5 Cr', 'Above ₹5 Cr',
// ]

// const typeOptions = ['Apartment', 'Villa', 'Plot', 'Commercial', 'Penthouse']

// const whyIcons: Record<string, typeof ShieldCheck> = {
//   ShieldCheck,
//   TrendingUp,
//   HandshakeIcon: Handshake,
//   Star,
// }

// export default function HomePage() {
//   const [searchTab, setSearchTab] = useState<'buy' | 'rent' | 'project'>('buy')
//   const [inquiryForm, setInquiryForm] = useState({ name: '', phone: '', location: '', message: '' })

//   const featuredProperties = properties.filter((p) => p.featured)
//   const hotDeals = properties.filter((p) => p.type === 'project').slice(0, 3)

//   return (
//     <div>
//       {/* ─── HERO ─── */}
//       {/* ─── HERO ─── */}
//       <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#FFFFFF' }}>


//         <div className="absolute inset-0 z-0" style={{
//           background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(11,31,58,0.04) 0%, transparent 70%)',
//         }} />


//         <div className="absolute top-0 left-0 right-0 z-10 h-[3px]" style={{
//           background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 40%, transparent 70%)',
//         }} />


//         <div className="absolute right-0 top-0 bottom-0 z-0 hidden lg:block" style={{
//           width: '48%',
//           clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
//         }}>

//           <img
//             src="/realstate.png"
//             alt="Premium Properties in Lucknow"
//             className="w-full h-full object-cover"
//           />


//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(105deg, rgba(11,31,58,0.55) 0%, rgba(11,31,58,0.20) 40%, transparent 70%)',
//           }} />

//           <div className="absolute bottom-0 left-0 right-0 h-32" style={{
//             background: 'linear-gradient(to top, rgba(11,31,58,0.60) 0%, transparent 100%)',
//           }} />


//           <div
//             className="absolute bottom-12 right-8 z-10 px-5 py-4 rounded-xl"
//             style={{
//               background: 'rgba(255,255,255,0.95)',
//               backdropFilter: 'blur(12px)',
//               boxShadow: '0 8px 32px rgba(11,31,58,0.20)',
//               minWidth: '200px',
//             }}
//           >
//             <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#E63946' }}>
//               ✦ New Launch
//             </p>
//             <p className="font-serif font-bold text-base" style={{ color: '#0B1F3A' }}>
//               Lakeside Residences
//             </p>
//             <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>
//               Sultanpur Road · Starting ₹85 Lakh
//             </p>
//           </div>


//           <div
//             className="absolute top-10 right-8 z-10 px-4 py-2 rounded-full"
//             style={{
//               background: '#E63946',
//               boxShadow: '0 4px 16px rgba(230,57,70,0.35)',
//             }}
//           >
//             <p className="text-white text-xs font-bold">2500+ Happy Families</p>
//           </div>
//         </div>


//         <svg
//           className="absolute z-10 hidden lg:block"
//           style={{ top: 0, left: '52%', width: '4%', height: '100%', overflow: 'visible' }}
//           preserveAspectRatio="none"
//           viewBox="0 0 100 100"
//         >
//           <defs>
//             <linearGradient id="redLineGrad" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#E63946" stopOpacity="0" />
//               <stop offset="15%" stopColor="#E63946" stopOpacity="1" />
//               <stop offset="85%" stopColor="#E63946" stopOpacity="1" />
//               <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
//             </linearGradient>
//           </defs>

//           <line x1="100" y1="0" x2="0" y2="100" stroke="url(#redLineGrad)" strokeWidth="3" />
//         </svg>


//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-16">
//           <div className="max-w-xl lg:max-w-2xl">


//             <div className="inline-flex items-center gap-2.5 mb-8" style={{
//               background: '#FEE8EA',
//               border: '1px solid rgba(230,57,70,0.20)',
//               borderRadius: '100px',
//               padding: '8px 20px',
//             }}>
//               <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//               <span className="text-sm font-semibold tracking-wide" style={{ color: '#E63946' }}>
//                 Lucknow&apos;s Most Trusted Real Estate Firm
//               </span>
//             </div>


//             <h1 className="font-serif font-bold leading-[1.08] mb-6">
//               <span className="block text-5xl sm:text-6xl md:text-7xl" style={{ color: '#0B1F3A' }}>
//                 Your Trusted
//               </span>
//               <span
//                 className="block text-4xl sm:text-5xl md:text-6xl"
//                 style={{
//                   background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 50%, #E63946 100%)',
//                   backgroundSize: '200% auto',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                   animation: 'shimmer 3s linear infinite',
//                 }}
//               >
//                 Real Estate Advisors
//               </span>
//               <span className="block text-3xl sm:text-4xl md:text-5xl mt-1" style={{ color: '#0B1F3A' }}>
//                 in Lucknow
//               </span>
//             </h1>

//             <p className="text-lg max-w-lg mb-10 leading-relaxed" style={{ color: '#6B7280' }}>
//               From premium apartments to luxury villas — we help you find the perfect property with
//               complete transparency, trusted expertise, and end-to-end support.
//             </p>


//             <div className="flex flex-wrap gap-0 mb-12">
//               {stats.map((stat, i) => (
//                 <div
//                   key={stat.label}
//                   className="pr-8 mr-8"
//                   style={{ borderRight: i < stats.length - 1 ? '1px solid #E8ECF2' : 'none' }}
//                 >
//                   <p className="font-serif font-bold text-2xl" style={{ color: '#E63946' }}>{stat.value}</p>
//                   <p className="text-xs font-medium mt-0.5" style={{ color: '#6B7280' }}>{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>


//           <div
//             className="rounded-xl p-2 max-w-4xl"
//             style={{
//               background: '#FFFFFF',
//               border: '1px solid #E8ECF2',
//               boxShadow: '0 4px 24px rgba(11,31,58,0.10)',
//             }}
//           >

//             <div className="flex gap-1 p-1 rounded-lg mb-2" style={{ background: '#F5F7FA' }}>
//               {(['buy', 'rent', 'project'] as const).map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setSearchTab(tab)}
//                   className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all capitalize"
//                   style={
//                     searchTab === tab
//                       ? { background: '#E63946', color: '#fff', boxShadow: '0 2px 8px rgba(230,57,70,0.30)' }
//                       : { color: '#6B7280' }
//                   }
//                 >
//                   {tab === 'project' ? 'New Projects' : `For ${tab === 'buy' ? 'Sale' : 'Rent'}`}
//                 </button>
//               ))}
//             </div>


//             <div className="flex flex-col sm:flex-row gap-2">
//               <div className="flex-1 flex items-center gap-3 rounded-lg px-4 py-3"
//                 style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
//                 <MapPin className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <select className="w-full bg-transparent text-sm focus:outline-none" style={{ color: '#1A1A1A' }}>
//                   <option value="">Select Location</option>
//                   {locationOptions.map((l) => <option key={l}>{l}</option>)}
//                 </select>
//               </div>
//               <div className="flex-1 flex items-center gap-3 rounded-lg px-4 py-3"
//                 style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
//                 <IndianRupee className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <select className="w-full bg-transparent text-sm focus:outline-none" style={{ color: '#1A1A1A' }}>
//                   <option value="">Budget Range</option>
//                   {budgetOptions.map((b) => <option key={b}>{b}</option>)}
//                 </select>
//               </div>
//               <div className="flex-1 flex items-center gap-3 rounded-lg px-4 py-3"
//                 style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
//                 <Home className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <select className="w-full bg-transparent text-sm focus:outline-none" style={{ color: '#1A1A1A' }}>
//                   <option value="">Property Type</option>
//                   {typeOptions.map((t) => <option key={t}>{t}</option>)}
//                 </select>
//               </div>
//               <Link
//                 href="/properties"
//                 className="flex items-center gap-2 font-semibold whitespace-nowrap text-sm px-6 py-3 rounded-lg text-white transition-all"
//                 style={{ background: '#E63946', boxShadow: '0 2px 12px rgba(230,57,70,0.35)' }}
//               >
//                 <Search className="w-4 h-4" />
//                 Search
//               </Link>
//             </div>
//           </div>
//         </div>


//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
//           <div className="w-5 h-9 rounded-full flex items-start justify-center pt-1.5"
//             style={{ border: '2px solid rgba(11,31,58,0.15)' }}>
//             <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(11,31,58,0.25)' }} />
//           </div>
//         </div>
//       </section>

//       {/* ─── FEATURED PROPERTIES ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2"
//                 style={{ color: '#E63946' }}>
//                 <span className="w-8 h-px" style={{ background: '#E63946' }} />
//                 Hand-picked for You
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
//                 Featured Properties
//               </h2>
//               <p className="mt-3 max-w-lg" style={{ color: '#6B7280' }}>
//                 Explore our curated selection of premium properties across Lucknow&apos;s finest neighbourhoods.
//               </p>
//             </div>
//             <Link
//               href="/properties"
//               className="flex items-center gap-2 font-semibold hover:gap-4 transition-all group shrink-0"
//               style={{ color: '#E63946' }}
//             >
//               View All Properties
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {featuredProperties.map((property) => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── WHY CHOOSE US ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-16">
//             <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#E63946' }}>
//               The Fincap Difference
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0B1F3A' }}>
//               Why Choose Us
//             </h2>
//             <p className="max-w-xl mx-auto" style={{ color: '#6B7280' }}>
//               15 years of excellence in Lucknow real estate has built us a reputation that speaks for itself.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {whyChooseUs.map((item, i) => {
//               const IconComp = whyIcons[item.icon] || ShieldCheck
//               return (
//                 <div
//                   key={i}
//                   className="group p-8 rounded-xl cursor-default transition-all duration-300"
//                   style={{
//                     background: '#FFFFFF',
//                     border: '1px solid #E8ECF2',
//                     boxShadow: '0 2px 16px rgba(11,31,58,0.06)',
//                   }}
//                 >
//                   <div
//                     className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
//                     style={{ background: '#FEE8EA' }}
//                   >
//                     <IconComp className="w-7 h-7" style={{ color: '#E63946' }} />
//                   </div>
//                   <h3 className="font-serif font-semibold text-xl mb-3" style={{ color: '#0B1F3A' }}>
//                     {item.title}
//                   </h3>
//                   <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
//                     {item.desc}
//                   </p>
//                 </div>
//               )
//             })}
//           </div>

//           {/* Trust badges */}
//           {/* <div
//             className="mt-14 pt-10 flex flex-wrap justify-center gap-8"
//             style={{ borderTop: '1px solid #E8ECF2' }}
//           >
//             {[
//               { icon: Award, text: 'Best Broker Award 2023' },
//               { icon: CheckCircle2, text: 'RERA Certified' },
//               { icon: ShieldCheck, text: 'ISO 9001:2015' },
//               { icon: Star, text: '4.9/5 Client Rating' },
//             ].map(({ icon: Icon, text }) => (
//               <div key={text} className="flex items-center gap-2.5" style={{ color: '#6B7280' }}>
//                 <Icon className="w-4 h-4" style={{ color: '#E63946' }} />
//                 <span className="text-sm font-medium">{text}</span>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </section>

//       {/* ─── HOT DEALS / NEW PROJECTS ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2"
//                 style={{ color: '#E63946' }}>
//                 <span className="w-8 h-px" style={{ background: '#E63946' }} />
//                 New &amp; Trending
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
//                 Hot Projects &amp; Deals
//               </h2>
//             </div>
//             <Link
//               href="/properties?type=project"
//               className="flex items-center gap-2 font-semibold hover:gap-4 transition-all group shrink-0"
//               style={{ color: '#E63946' }}
//             >
//               All New Projects
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {hotDeals.map((p) => (
//               <Link key={p.id} href={`/properties/${p.id}`} className="group">
//                 <div
//                   className="rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
//                   style={{
//                     border: '1px solid #E8ECF2',
//                     boxShadow: '0 2px 16px rgba(11,31,58,0.06)',
//                   }}
//                 >
//                   <div className="h-52 relative"
//                     style={{ background: `linear-gradient(135deg, ${p.gradientFrom} 0%, ${p.gradientTo} 100%)` }}>
//                     {p.badge && (
//                       <div className="absolute top-4 left-4">
//                         <span className="text-white text-xs font-bold px-3 py-1.5 rounded"
//                           style={{ background: '#E63946' }}>
//                           {p.badge}
//                         </span>
//                       </div>
//                     )}
//                     <div className="absolute bottom-0 inset-x-0 p-5"
//                       style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.90), transparent)' }}>
//                       <p className="text-white font-serif text-xl font-bold">{p.price}</p>
//                     </div>
//                   </div>
//                   <div className="bg-white p-5">
//                     <h3 className="font-serif font-semibold text-base mb-2 transition-colors"
//                       style={{ color: '#0B1F3A' }}>
//                       {p.title}
//                     </h3>
//                     <div className="flex items-center gap-1.5 text-sm mb-4" style={{ color: '#6B7280' }}>
//                       <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: '#E63946' }} />
//                       {p.location}
//                     </div>
//                     <div className="flex items-center justify-between text-sm">
//                       <div className="flex gap-3">
//                         {p.developer && (
//                           <span className="font-semibold" style={{ color: '#0B1F3A' }}>{p.developer}</span>
//                         )}
//                         {p.possession && (
//                           <span style={{ color: '#6B7280' }}>· {p.possession}</span>
//                         )}
//                       </div>
//                       <ChevronRight className="w-4 h-4" style={{ color: '#E63946' }} />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── LOCATIONS ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-12">
//             <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#E63946' }}>
//               Explore by Area
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
//               Top Locations in Lucknow
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//             {locations.map((loc) => (
//               <Link key={loc.slug} href={`/location/${loc.slug}`} className="group">
//                 <div
//                   className="bg-white p-5 text-center transition-all duration-300 group-hover:-translate-y-1 rounded-xl"
//                   style={{
//                     border: '1px solid #E8ECF2',
//                     boxShadow: '0 2px 16px rgba(11,31,58,0.05)',
//                   }}
//                 >
//                   <div
//                     className="w-11 h-11 rounded-lg mx-auto mb-3 flex items-center justify-center"
//                     style={{ background: '#EBF0F7' }}
//                   >
//                     <MapPin className="w-5 h-5" style={{ color: '#0B1F3A' }} />
//                   </div>
//                   <p className="font-semibold text-sm mb-1 transition-colors"
//                     style={{ color: '#0B1F3A' }}>
//                     {loc.name}
//                   </p>
//                   <p className="text-xs" style={{ color: '#6B7280' }}>{loc.properties} properties</p>
//                   <p className="text-xs font-semibold mt-1 text-green-600">{loc.priceChange}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── TESTIMONIALS ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-5xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-14">
//             <p className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center justify-center gap-2"
//               style={{ color: '#E63946' }}>
//               <span className="w-6 h-px" style={{ background: '#E63946' }} />
//               Client Stories
//               <span className="w-6 h-px" style={{ background: '#E63946' }} />
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
//               What Our Clients Say
//             </h2>
//           </div>
//           <TestimonialSlider />
//         </div>
//       </section>

//       {/* ─── DEVELOPER PARTNERS ─── */}
//       <section className="py-14" style={{ background: '#FFFFFF', borderTop: '1px solid #E8ECF2', borderBottom: '1px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <p className="text-center text-xs font-semibold uppercase tracking-widest mb-10" style={{ color: '#6B7280' }}>
//             Our Trusted Developer Partners
//           </p>
//           <div className="flex flex-wrap items-center justify-center gap-6">
//             {developers.map((dev) => (
//               <div
//                 key={dev.name}
//                 className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white cursor-default transition-all group"
//                 style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 4px rgba(11,31,58,0.05)' }}
//               >
//                 <div
//                   className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold font-serif transition-colors"
//                   style={{ background: '#0B1F3A' }}
//                 >
//                   {dev.initials}
//                 </div>
//                 <span className="font-semibold text-sm transition-colors" style={{ color: '#0B1F3A' }}>
//                   {dev.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── CTA BANNER ─── */}
//       <section className="py-24 relative overflow-hidden" style={{ background: '#FFFFFF', borderTop: '1px solid #E8ECF2', borderBottom: '1px solid #E8ECF2' }}>

//         {/* Subtle red glow — top left */}
//         <div className="absolute z-0" style={{
//           top: '-20%', left: '-5%', width: '40%', height: '80%',
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(230,57,70,0.06) 0%, transparent 70%)',
//           filter: 'blur(40px)',
//         }} />
//         {/* Subtle navy glow — bottom right */}
//         <div className="absolute z-0" style={{
//           bottom: '-20%', right: '-5%', width: '40%', height: '80%',
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(11,31,58,0.05) 0%, transparent 70%)',
//           filter: 'blur(40px)',
//         }} />

//         {/* Red top border line */}
//         <div className="absolute top-0 left-0 right-0 z-0 h-[3px]" style={{
//           background: 'linear-gradient(90deg, transparent 0%, #E63946 30%, #EF5A65 60%, transparent 100%)',
//         }} />

//         <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">

//           {/* Eyebrow */}
//           <div className="inline-flex items-center gap-2.5 mb-6" style={{
//             background: '#FEE8EA',
//             border: '1px solid rgba(230,57,70,0.20)',
//             borderRadius: '100px',
//             padding: '8px 20px',
//           }}>
//             <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//             <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E63946' }}>
//               Ready to Find Your Dream Property?
//             </span>
//           </div>

//           {/* Headline */}
//           <h2 className="font-serif font-bold leading-[1.08] mb-6">
//             <span className="block text-4xl md:text-5xl lg:text-6xl" style={{ color: '#0B1F3A' }}>
//               Let&apos;s Make Your Real
//             </span>
//             <span className="block text-4xl md:text-5xl lg:text-6xl mt-1" style={{
//               background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 50%, #E63946 100%)',
//               backgroundSize: '200% auto',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               animation: 'shimmer 3s linear infinite',
//             }}>
//               Estate Dream a Reality
//             </span>
//           </h2>

//           <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
//             Connect with our expert advisors today. Free consultation, zero commission from buyers,
//             and complete guidance from search to possession.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact" className="font-bold px-8 py-4 rounded-lg text-sm text-white transition-all"
//               style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
//               Schedule Free Consultation
//             </Link>
//             <a href="tel:+919876543210"
//               className="font-bold px-8 py-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all"
//               style={{ border: '2px solid #0B1F3A', color: '#0B1F3A', background: 'transparent' }}>
//               <Phone className="w-4 h-4" />
//               Call +91 98765 43210
//             </a>
//           </div>

//           {/* Trust strip */}
//           {/* <div className="flex flex-wrap items-center justify-center gap-0 mt-12 pt-8"
//             style={{ borderTop: '1px solid #E8ECF2' }}>
//             {['Free Consultation', 'Zero Buyer Commission', 'RERA Verified', '2500+ Happy Families'].map((item, i) => (
//               <div key={item} className="px-6"
//                 style={{ borderRight: i < 3 ? '1px solid #E8ECF2' : 'none' }}>
//                 <span className="text-xs font-medium" style={{ color: '#6B7280' }}>✓ {item}</span>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </section>

//       {/* ─── QUICK INQUIRY FORM ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left */}
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2"
//                 style={{ color: '#E63946' }}>
//                 <span className="w-8 h-px" style={{ background: '#E63946' }} />
//                 Get in Touch
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0B1F3A' }}>
//                 Quick Property<br />Inquiry
//               </h2>
//               <p className="mb-8 leading-relaxed" style={{ color: '#6B7280' }}>
//                 Share your requirements and our expert advisors will contact you within 30 minutes.
//               </p>

//               <div className="space-y-4">
//                 {[
//                   'Free property matching service',
//                   'Expert legal & financial guidance',
//                   'Zero brokerage for buyers',
//                   'Site visit assistance',
//                 ].map((text) => (
//                   <div key={text} className="flex items-center gap-3">
//                     <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
//                       style={{ background: '#FEE8EA' }}>
//                       <CheckCircle2 className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                     </div>
//                     <span className="font-medium" style={{ color: '#1A1A1A' }}>{text}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-10 p-6 bg-white rounded-xl"
//                 style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.05)' }}>
//                 <p className="font-serif font-semibold mb-4" style={{ color: '#0B1F3A' }}>Office Hours</p>
//                 <div className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
//                   <div className="flex justify-between">
//                     <span>Monday – Saturday</span>
//                     <span className="font-semibold" style={{ color: '#1A1A1A' }}>9:00 AM – 8:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Sunday</span>
//                     <span className="font-semibold" style={{ color: '#1A1A1A' }}>10:00 AM – 5:00 PM</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Form */}
//             <div className="bg-white rounded-2xl p-8 md:p-10"
//               style={{ border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
//               <h3 className="font-serif text-2xl font-semibold mb-6" style={{ color: '#0B1F3A' }}>
//                 Send an Enquiry
//               </h3>
//               <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>
//                       Full Name <span style={{ color: '#E63946' }}>*</span>
//                     </label>
//                     <input type="text" placeholder="Rajesh Sharma"
//                       value={inquiryForm.name}
//                       onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
//                       className="w-full px-4 py-3 rounded-lg text-sm"
//                       style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }} />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>
//                       Phone Number <span style={{ color: '#E63946' }}>*</span>
//                     </label>
//                     <input type="tel" placeholder="+91 98765 43210"
//                       value={inquiryForm.phone}
//                       onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
//                       className="w-full px-4 py-3 rounded-lg text-sm"
//                       style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }} />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>
//                     Preferred Location
//                   </label>
//                   <select className="w-full px-4 py-3 rounded-lg text-sm bg-white"
//                     style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }}>
//                     <option value="">Select Area</option>
//                     {locationOptions.map((l) => <option key={l}>{l}</option>)}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>
//                     Budget
//                   </label>
//                   <select className="w-full px-4 py-3 rounded-lg text-sm bg-white"
//                     style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }}>
//                     <option value="">Select Budget</option>
//                     {budgetOptions.map((b) => <option key={b}>{b}</option>)}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>
//                     Message
//                   </label>
//                   <textarea rows={3} placeholder="Tell us about your requirements..."
//                     value={inquiryForm.message}
//                     onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
//                     className="w-full px-4 py-3 rounded-lg text-sm resize-none"
//                     style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }} />
//                 </div>

//                 <button type="submit"
//                   className="w-full text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm"
//                   style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
//                   <Send className="w-4 h-4" />
//                   Send Enquiry
//                 </button>

//                 <p className="text-center text-xs" style={{ color: '#9CA3AF' }}>
//                   By submitting, you agree to our{' '}
//                   <Link href="#" className="hover:underline" style={{ color: '#E63946' }}>Privacy Policy</Link>.
//                   We never share your data.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// import {
//   Search,
//   MapPin,
//   IndianRupee,
//   Home,
//   ShieldCheck,
//   TrendingUp,
//   Star,
//   ArrowRight,
//   Phone,
//   Send,
//   Award,
//   CheckCircle2,
//   ChevronRight,
//   Handshake,
//   Building,
//   Users,
//   Settings,
//   Smartphone,
//   BarChart3
// } from 'lucide-react'
// import PropertyCard from '@/components/PropertyCard'
// import TestimonialSlider from '@/components/TestimonialSlider'
// import { properties, locations, developers, stats, whyChooseUs } from '@/lib/data'
// import CuratedCollections from '@/components/CuratedCollections'
// import PropertyBannerSlider from '@/components/PropertyBannerSlider'

// const locationOptions = [
//   'Gomti Nagar', 'Hazratganj', 'Shaheed Path', 'Aliganj', 'Sultanpur Road', 'Vibhuti Khand',
// ]

// const budgetOptions = [
//   'Under ₹50 Lakh', '₹50L–₹1 Cr', '₹1–₂ Cr', '₹2–5 Cr', 'Above ₹5 Cr',
// ]

// const typeOptions = ['Apartment', 'Villa', 'Plot', 'Commercial', 'Penthouse']

// const whyIcons: Record<string, typeof ShieldCheck> = {
//   // ShieldCheck,
//   // TrendingUp,
//   // HandshakeIcon: Handshake,
//   // Star,
//   Users,
//   Settings,
//   Smartphone,
//   BarChart3,

// }
// // export const whyIcons = {
// // Users,
// // Settings,
// // Smartphone,
// // BarChart3,
// // }

// export default function HomePage() {
//   const router = useRouter()
//   const [searchTab, setSearchTab] = useState<'buy' | 'rent' | 'project'>('buy')
//   const [searchLocation, setSearchLocation] = useState('')
//   const [searchBudget, setSearchBudget] = useState('')
//   const [searchType, setSearchType] = useState('')
//   const [inquiryForm, setInquiryForm] = useState({ name: '', phone: '', location: '', message: '' })

//   const featuredProperties = properties.filter((p) => p.featured)
//   const hotDeals = properties.filter((p) => p.type === 'project').slice(0, 3)

//   // ── Search handler — builds URL params and navigates to /properties ──
//   const handleSearch = () => {
//     const params = new URLSearchParams()
//     if (searchTab) params.set('tab', searchTab)
//     if (searchLocation) params.set('location', searchLocation)
//     if (searchBudget) params.set('budget', searchBudget)
//     if (searchType) params.set('type', searchType)
//     router.push(`/properties?${params.toString()}`)
//   }

//   return (
//     <div>
//       {/* ─── HERO ─── */}
//       <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#FFFFFF' }}>

//         <div className="absolute inset-0 z-0" style={{
//           background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(11,31,58,0.04) 0%, transparent 70%)',
//         }} />

//         <div className="absolute top-0 left-0 right-0 z-10 h-[3px]" style={{
//           background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 40%, transparent 70%)',
//         }} />

//         <div className="absolute right-0 top-0 bottom-0 z-0 hidden lg:block" style={{
//           width: '48%',
//           clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
//         }}>
//           <img src="/realstate.png" alt="Premium Properties in Lucknow" className="w-full h-full object-cover" />
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(105deg, rgba(11,31,58,0.55) 0%, rgba(11,31,58,0.20) 40%, transparent 70%)',
//           }} />
//           <div className="absolute bottom-0 left-0 right-0 h-32" style={{
//             background: 'linear-gradient(to top, rgba(11,31,58,0.60) 0%, transparent 100%)',
//           }} />
//           <div className="absolute bottom-12 right-8 z-10 px-5 py-4 rounded-xl"
//             style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', boxShadow: '0 8px 32px rgba(11,31,58,0.20)', minWidth: '200px' }}>
//             <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#E63946' }}>✦ New Launch</p>
//             <p className="font-serif font-bold text-base" style={{ color: '#0B1F3A' }}>Lakeside Residences</p>
//             <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>Sultanpur Road · Starting ₹85 Lakh</p>
//           </div>
//           <div className="absolute top-10 right-8 z-10 px-4 py-2 rounded-full"
//             style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.35)' }}>
//             <p className="text-white text-xs font-bold">2500+ Happy Families</p>
//           </div>
//         </div>

//         <svg className="absolute z-10 hidden lg:block"
//           style={{ top: 0, left: '52%', width: '4%', height: '100%', overflow: 'visible' }}
//           preserveAspectRatio="none" viewBox="0 0 100 100">
//           <defs>
//             <linearGradient id="redLineGrad" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#E63946" stopOpacity="0" />
//               <stop offset="15%" stopColor="#E63946" stopOpacity="1" />
//               <stop offset="85%" stopColor="#E63946" stopOpacity="1" />
//               <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
//             </linearGradient>
//           </defs>
//           <line x1="100" y1="0" x2="0" y2="100" stroke="url(#redLineGrad)" strokeWidth="3" />
//         </svg>

//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-16">
//           <div className="max-w-xl lg:max-w-2xl">
//             <div className="inline-flex items-center gap-2.5 mb-8" style={{
//               background: '#FEE8EA', border: '1px solid rgba(230,57,70,0.20)',
//               borderRadius: '100px', padding: '8px 20px',
//             }}>
//               <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//               <span className="text-sm font-semibold tracking-wide" style={{ color: '#E63946' }}>
//                 Lucknow&apos;s Most Trusted Real Estate Firm
//               </span>
//             </div>

//             <h1 className="font-serif font-bold leading-[1.08] mb-6">
//               <span className="block text-5xl sm:text-6xl md:text-7xl" style={{ color: '#0B1F3A' }}>
//                 Your Trusted
//               </span>
//               <span className="block text-4xl sm:text-5xl md:text-6xl" style={{
//                 background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 50%, #E63946 100%)',
//                 backgroundSize: '200% auto',
//                 WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
//                 animation: 'shimmer 3s linear infinite',
//               }}>
//                 Real Estate Advisors
//               </span>
//               <span className="block text-3xl sm:text-4xl md:text-5xl mt-1" style={{ color: '#0B1F3A' }}>
//                 in Lucknow
//               </span>
//             </h1>

//             <p className="text-lg max-w-lg mb-10 leading-relaxed" style={{ color: '#6B7280' }}>
//               From premium apartments to luxury villas — we help you find the perfect property with
//               complete transparency, trusted expertise, and end-to-end support.
//             </p>

//             <div className="flex flex-wrap gap-0 mb-12">
//               {stats.map((stat, i) => (
//                 <div key={stat.label} className="pr-8 mr-8"
//                   style={{ borderRight: i < stats.length - 1 ? '1px solid #E8ECF2' : 'none' }}>
//                   <p className="font-serif font-bold text-2xl" style={{ color: '#E63946' }}>{stat.value}</p>
//                   <p className="text-xs font-medium mt-0.5" style={{ color: '#6B7280' }}>{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ─── SEARCH BAR ─── */}
//           <div className="rounded-xl p-2 max-w-4xl"
//             style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.10)' }}>

//             {/* Tabs */}
//             <div className="flex gap-1 p-1 rounded-lg mb-2" style={{ background: '#F5F7FA' }}>
//               {(['buy', 'rent', 'project'] as const).map((tab) => (
//                 <button key={tab} onClick={() => setSearchTab(tab)}
//                   className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all capitalize"
//                   style={searchTab === tab
//                     ? { background: '#E63946', color: '#fff', boxShadow: '0 2px 8px rgba(230,57,70,0.30)' }
//                     : { color: '#6B7280' }}>
//                   {tab === 'project' ? 'New Projects' : `For ${tab === 'buy' ? 'Sale' : 'Rent'}`}
//                 </button>
//               ))}
//             </div>

//             {/* Fields */}
//             <div className="flex flex-col sm:flex-row gap-2">
//               <div className="flex-1 flex items-center gap-3 rounded-lg px-4 py-3"
//                 style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
//                 <MapPin className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <select
//                   value={searchLocation}
//                   onChange={(e) => setSearchLocation(e.target.value)}
//                   className="w-full bg-transparent text-sm focus:outline-none"
//                   style={{ color: searchLocation ? '#1A1A1A' : '#9CA3AF' }}
//                 >
//                   <option value="">Select Location</option>
//                   {locationOptions.map((l) => <option key={l} value={l}>{l}</option>)}
//                 </select>
//               </div>
//               <div className="flex-1 flex items-center gap-3 rounded-lg px-4 py-3"
//                 style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
//                 <IndianRupee className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <select
//                   value={searchBudget}
//                   onChange={(e) => setSearchBudget(e.target.value)}
//                   className="w-full bg-transparent text-sm focus:outline-none"
//                   style={{ color: searchBudget ? '#1A1A1A' : '#9CA3AF' }}
//                 >
//                   <option value="">Budget Range</option>
//                   {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
//                 </select>
//               </div>
//               <div className="flex-1 flex items-center gap-3 rounded-lg px-4 py-3"
//                 style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
//                 <Home className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <select
//                   value={searchType}
//                   onChange={(e) => setSearchType(e.target.value)}
//                   className="w-full bg-transparent text-sm focus:outline-none"
//                   style={{ color: searchType ? '#1A1A1A' : '#9CA3AF' }}
//                 >
//                   <option value="">Property Type</option>
//                   {typeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
//                 </select>
//               </div>
//               <button
//                 onClick={handleSearch}
//                 className="flex items-center gap-2 font-semibold whitespace-nowrap text-sm px-6 py-3 rounded-lg text-white transition-all"
//                 style={{ background: '#E63946', boxShadow: '0 2px 12px rgba(230,57,70,0.35)' }}
//               >
//                 <Search className="w-4 h-4" />
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
//           <div className="w-5 h-9 rounded-full flex items-start justify-center pt-1.5"
//             style={{ border: '2px solid rgba(11,31,58,0.15)' }}>
//             <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(11,31,58,0.25)' }} />
//           </div>
//         </div>
//       </section>
//       <PropertyBannerSlider />

//       {/* ─── FEATURED PROPERTIES ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: '#E63946' }}>
//                 <span className="w-8 h-px" style={{ background: '#E63946' }} />Hand-picked for You
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>Featured Properties</h2>
//               <p className="mt-3 max-w-lg" style={{ color: '#6B7280' }}>
//                 Explore our curated selection of premium properties across Lucknow&apos;s finest neighbourhoods.
//               </p>
//             </div>
//             <Link href="/properties" className="flex items-center gap-2 font-semibold hover:gap-4 transition-all group shrink-0" style={{ color: '#E63946' }}>
//               View All Properties <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {featuredProperties.map((property) => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>
//         </div>
//       </section>
//       <CuratedCollections />



//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">

//           {/* Header */}
//           <div className="text-center mb-16">
//             <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#E63946' }}>
//               The Fincap Difference
//             </p>

//             {/* ✅ COLOR SAME AS BEFORE */}
//             <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0B1F3A' }}>
//               Why Choose Us
//             </h2>

//             {/* ✅ Brochure-style content */}
//             <p className="max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
//               We present ourselves as a composite <span style={{ color: '#E63946', fontWeight: 600 }}>
//                 Real Estate Services Company</span> comprising of People and Processes towards Enchanting Prosperity.
//               Our approach combines industry best practices, innovative technology, and a commitment to consistency
//               and quality — building a satisfied pool of clients and partners.
//             </p>
//           </div>

//           {/* Grid (unchanged UI) */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {whyChooseUs.map((item, i) => {
//               const IconComp = whyIcons[item.icon] || ShieldCheck
//               return (
//                 <div key={i} className="group p-8 rounded-xl cursor-default transition-all duration-300"
//                   style={{
//                     background: '#FFFFFF',
//                     border: '1px solid #E8ECF2',
//                     boxShadow: '0 2px 16px rgba(11,31,58,0.06)'
//                   }}>

//                   <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
//                     style={{ background: '#FEE8EA' }}>
//                     <IconComp className="w-7 h-7" style={{ color: '#E63946' }} />
//                   </div>

//                   <h3 className="font-serif font-semibold text-xl mb-3" style={{ color: '#0B1F3A' }}>
//                     {item.title}
//                   </h3>

//                   <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
//                     {item.desc}
//                   </p>

//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ─── HOT DEALS / NEW PROJECTS ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: '#E63946' }}>
//                 <span className="w-8 h-px" style={{ background: '#E63946' }} />New &amp; Trending
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>Hot Projects &amp; Deals</h2>
//             </div>
//             <Link href="/properties?type=project" className="flex items-center gap-2 font-semibold hover:gap-4 transition-all group shrink-0" style={{ color: '#E63946' }}>
//               All New Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {hotDeals.map((p) => (
//               <Link key={p.id} href={`/properties/${p.id}`} className="group">
//                 <div className="rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
//                   style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 16px rgba(11,31,58,0.06)' }}>
//                   <div className="h-52 relative"
//                     style={{ background: `linear-gradient(135deg, ${p.gradientFrom} 0%, ${p.gradientTo} 100%)` }}>
//                     {p.badge && (
//                       <div className="absolute top-4 left-4">
//                         <span className="text-white text-xs font-bold px-3 py-1.5 rounded" style={{ background: '#E63946' }}>{p.badge}</span>
//                       </div>
//                     )}
//                     <div className="absolute bottom-0 inset-x-0 p-5"
//                       style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.90), transparent)' }}>
//                       <p className="text-white font-serif text-xl font-bold">{p.price}</p>
//                     </div>
//                   </div>
//                   <div className="bg-white p-5">
//                     <h3 className="font-serif font-semibold text-base mb-2 transition-colors" style={{ color: '#0B1F3A' }}>{p.title}</h3>
//                     <div className="flex items-center gap-1.5 text-sm mb-4" style={{ color: '#6B7280' }}>
//                       <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: '#E63946' }} />{p.location}
//                     </div>
//                     <div className="flex items-center justify-between text-sm">
//                       <div className="flex gap-3">
//                         {p.developer && <span className="font-semibold" style={{ color: '#0B1F3A' }}>{p.developer}</span>}
//                         {p.possession && <span style={{ color: '#6B7280' }}>· {p.possession}</span>}
//                       </div>
//                       <ChevronRight className="w-4 h-4" style={{ color: '#E63946' }} />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── LOCATIONS ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-12">
//             <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#E63946' }}>Explore by Area</p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>Top Locations in Lucknow</h2>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//             {locations.map((loc) => (
//               <Link key={loc.slug} href={`/location/${loc.slug}`} className="group">
//                 <div className="bg-white p-5 text-center transition-all duration-300 group-hover:-translate-y-1 rounded-xl"
//                   style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 16px rgba(11,31,58,0.05)' }}>
//                   <div className="w-11 h-11 rounded-lg mx-auto mb-3 flex items-center justify-center" style={{ background: '#EBF0F7' }}>
//                     <MapPin className="w-5 h-5" style={{ color: '#0B1F3A' }} />
//                   </div>
//                   <p className="font-semibold text-sm mb-1 transition-colors" style={{ color: '#0B1F3A' }}>{loc.name}</p>
//                   <p className="text-xs" style={{ color: '#6B7280' }}>{loc.properties} properties</p>
//                   <p className="text-xs font-semibold mt-1 text-green-600">{loc.priceChange}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── TESTIMONIALS ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-5xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-14">
//             <p className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center justify-center gap-2" style={{ color: '#E63946' }}>
//               <span className="w-6 h-px" style={{ background: '#E63946' }} />Client Stories<span className="w-6 h-px" style={{ background: '#E63946' }} />
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>What Our Clients Say</h2>
//           </div>
//           <TestimonialSlider />
//         </div>
//       </section>

//       {/* ─── DEVELOPER PARTNERS ─── */}
//       <section className="py-14" style={{ background: '#FFFFFF', borderTop: '1px solid #E8ECF2', borderBottom: '1px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <p className="text-center text-xs font-semibold uppercase tracking-widest mb-10" style={{ color: '#6B7280' }}>
//             Our Trusted Developer Partners
//           </p>
//           <div className="flex flex-wrap items-center justify-center gap-6">
//             {developers.map((dev) => (
//               <div key={dev.name} className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white cursor-default transition-all group"
//                 style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 4px rgba(11,31,58,0.05)' }}>
//                 <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold font-serif" style={{ background: '#0B1F3A' }}>
//                   {dev.initials}
//                 </div>
//                 <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>{dev.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── CTA BANNER ─── */}
//       <section className="py-24 relative overflow-hidden" style={{ background: '#FFFFFF', borderTop: '1px solid #E8ECF2', borderBottom: '1px solid #E8ECF2' }}>
//         <div className="absolute z-0" style={{ top: '-20%', left: '-5%', width: '40%', height: '80%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(230,57,70,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
//         <div className="absolute z-0" style={{ bottom: '-20%', right: '-5%', width: '40%', height: '80%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(11,31,58,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />
//         <div className="absolute top-0 left-0 right-0 z-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent 0%, #E63946 30%, #EF5A65 60%, transparent 100%)' }} />
//         <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
//           <div className="inline-flex items-center gap-2.5 mb-6" style={{ background: '#FEE8EA', border: '1px solid rgba(230,57,70,0.20)', borderRadius: '100px', padding: '8px 20px' }}>
//             <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//             <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E63946' }}>Ready to Find Your Dream Property?</span>
//           </div>
//           <h2 className="font-serif font-bold leading-[1.08] mb-6">
//             <span className="block text-4xl md:text-5xl lg:text-6xl" style={{ color: '#0B1F3A' }}>Let&apos;s Make Your Real</span>
//             <span className="block text-4xl md:text-5xl lg:text-6xl mt-1" style={{
//               background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 50%, #E63946 100%)',
//               backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 3s linear infinite',
//             }}>Estate Dream a Reality</span>
//           </h2>
//           <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
//             Connect with our expert advisors today. Free consultation, zero commission from buyers, and complete guidance from search to possession.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact" className="font-bold px-8 py-4 rounded-lg text-sm text-white transition-all"
//               style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
//               Schedule Free Consultation
//             </Link>
//             <a href="tel:+919876543210" className="font-bold px-8 py-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all"
//               style={{ border: '2px solid #0B1F3A', color: '#0B1F3A', background: 'transparent' }}>
//               <Phone className="w-4 h-4" />Call +91 98765 43210
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ─── QUICK INQUIRY FORM ─── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: '#E63946' }}>
//                 <span className="w-8 h-px" style={{ background: '#E63946' }} />Get in Touch
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0B1F3A' }}>Quick Property<br />Inquiry</h2>
//               <p className="mb-8 leading-relaxed" style={{ color: '#6B7280' }}>
//                 Share your requirements and our expert advisors will contact you within 30 minutes.
//               </p>
//               <div className="space-y-4">
//                 {['Free property matching service', 'Expert legal & financial guidance', 'Zero brokerage for buyers', 'Site visit assistance'].map((text) => (
//                   <div key={text} className="flex items-center gap-3">
//                     <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: '#FEE8EA' }}>
//                       <CheckCircle2 className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                     </div>
//                     <span className="font-medium" style={{ color: '#1A1A1A' }}>{text}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-10 p-6 bg-white rounded-xl" style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.05)' }}>
//                 <p className="font-serif font-semibold mb-4" style={{ color: '#0B1F3A' }}>Office Hours</p>
//                 <div className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
//                   <div className="flex justify-between">
//                     <span>Monday – Saturday</span>
//                     <span className="font-semibold" style={{ color: '#1A1A1A' }}>9:00 AM – 8:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Sunday</span>
//                     <span className="font-semibold" style={{ color: '#1A1A1A' }}>10:00 AM – 5:00 PM</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Form */}
//             <div className="bg-white rounded-2xl p-8 md:p-10" style={{ border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
//               <h3 className="font-serif text-2xl font-semibold mb-6" style={{ color: '#0B1F3A' }}>Send an Enquiry</h3>
//               <div className="space-y-5">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>
//                       Full Name <span style={{ color: '#E63946' }}>*</span>
//                     </label>
//                     <input type="text" placeholder="Rajesh Sharma"
//                       value={inquiryForm.name}
//                       onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
//                       className="w-full px-4 py-3 rounded-lg text-sm"
//                       style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }} />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>
//                       Phone Number <span style={{ color: '#E63946' }}>*</span>
//                     </label>
//                     <input type="tel" placeholder="+91 98765 43210"
//                       value={inquiryForm.phone}
//                       onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
//                       className="w-full px-4 py-3 rounded-lg text-sm"
//                       style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }} />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>Preferred Location</label>
//                   <select className="w-full px-4 py-3 rounded-lg text-sm bg-white"
//                     style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }}>
//                     <option value="">Select Area</option>
//                     {locationOptions.map((l) => <option key={l}>{l}</option>)}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>Budget</label>
//                   <select className="w-full px-4 py-3 rounded-lg text-sm bg-white"
//                     style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }}>
//                     <option value="">Select Budget</option>
//                     {budgetOptions.map((b) => <option key={b}>{b}</option>)}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>Message</label>
//                   <textarea rows={3} placeholder="Tell us about your requirements..."
//                     value={inquiryForm.message}
//                     onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
//                     className="w-full px-4 py-3 rounded-lg text-sm resize-none"
//                     style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }} />
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     if (!inquiryForm.name.trim() || !inquiryForm.phone.trim()) return
//                     setInquiryForm({ name: '', phone: '', location: '', message: '' })
//                   }}
//                   className="w-full text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm"
//                   style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
//                   <Send className="w-4 h-4" />
//                   Send Enquiry
//                 </button>
//                 <p className="text-center text-xs" style={{ color: '#9CA3AF' }}>
//                   By submitting, you agree to our{' '}
//                   <Link href="#" className="hover:underline" style={{ color: '#E63946' }}>Privacy Policy</Link>.
//                   We never share your data.
//                 </p>
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
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Search,
  MapPin,
  IndianRupee,
  Home,
  ShieldCheck,
  ArrowRight,
  Phone,
  Send,
  CheckCircle2,
  ChevronRight,
  Users,
  Settings,
  Smartphone,
  BarChart3
} from 'lucide-react'
// import PropertyCard from '@/components/PropertyCard'
import TestimonialSlider from '@/components/TestimonialSlider'
import { properties, locations, developers, stats, whyChooseUs } from '@/lib/data'
import CuratedCollections from '@/components/CuratedCollections'
import PropertyBannerSlider from '@/components/PropertyBannerSlider'
import PropertyCard, { PropertyCardSlider } from '@/components/PropertyCard'

const locationOptions = [
  'Gomti Nagar', 'Hazratganj', 'Shaheed Path', 'Aliganj', 'Sultanpur Road', 'Vibhuti Khand',
]

const budgetOptions = [
  'Under ₹50 Lakh', '₹50L–₹1 Cr', '₹1–₂ Cr', '₹2–5 Cr', 'Above ₹5 Cr',
]

const typeOptions = ['Apartment', 'Villa', 'Plot', 'Commercial', 'Penthouse']

const whyIcons: Record<string, typeof ShieldCheck> = {
  Users,
  Settings,
  Smartphone,
  BarChart3,
}

export default function HomePage() {
  const router = useRouter()
  const [searchTab, setSearchTab] = useState<'buy' | 'rent' | 'project'>('buy')
  const [searchLocation, setSearchLocation] = useState('')
  const [searchBudget, setSearchBudget] = useState('')
  const [searchType, setSearchType] = useState('')
  const [inquiryForm, setInquiryForm] = useState({ name: '', phone: '', location: '', message: '' })

  const featuredProperties = properties.filter((p) => p.featured)
  const hotDeals = properties.filter((p) => p.type === 'project').slice(0, 3)

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchTab) params.set('tab', searchTab)
    if (searchLocation) params.set('location', searchLocation)
    if (searchBudget) params.set('budget', searchBudget)
    if (searchType) params.set('type', searchType)
    router.push(`/properties?${params.toString()}`)
  }

  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden"
        style={{ background: '#FFFFFF' }}
      >
        <div className="absolute inset-0 z-0" style={{
          background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(11,31,58,0.04) 0%, transparent 70%)',
        }} />

        <div className="absolute top-0 left-0 right-0 z-10 h-[3px]" style={{
          background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 40%, transparent 70%)',
        }} />

        {/* Right hero image — desktop only */}
        <div className="absolute right-0 top-0 bottom-0 z-0 hidden lg:block" style={{
          width: '48%',
          clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}>
          <img src="/realstate.png" alt="Premium Properties in Lucknow" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(105deg, rgba(11,31,58,0.55) 0%, rgba(11,31,58,0.20) 40%, transparent 70%)',
          }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{
            background: 'linear-gradient(to top, rgba(11,31,58,0.60) 0%, transparent 100%)',
          }} />
          <div className="absolute bottom-12 right-8 z-10 px-5 py-4 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', boxShadow: '0 8px 32px rgba(11,31,58,0.20)', minWidth: '200px' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#E63946' }}>✦ New Launch</p>
            <p className="font-serif font-bold text-base" style={{ color: '#0B1F3A' }}>Lakeside Residences</p>
            <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>Sultanpur Road · Starting ₹85 Lakh</p>
          </div>
          <div className="absolute top-10 right-8 z-10 px-4 py-2 rounded-full"
            style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.35)' }}>
            <p className="text-white text-xs font-bold">2500+ Happy Families</p>
          </div>
        </div>

        <svg className="absolute z-10 hidden lg:block"
          style={{ top: 0, left: '52%', width: '4%', height: '100%', overflow: 'visible' }}
          preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="redLineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E63946" stopOpacity="0" />
              <stop offset="15%" stopColor="#E63946" stopOpacity="1" />
              <stop offset="85%" stopColor="#E63946" stopOpacity="1" />
              <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="100" y1="0" x2="0" y2="100" stroke="url(#redLineGrad)" strokeWidth="3" />
        </svg>

        {/* ── Hero content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 pb-14 sm:pb-16">
          <div className="max-w-xl lg:max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-8" style={{
              background: '#FEE8EA',
              border: '1px solid rgba(230,57,70,0.20)',
              borderRadius: '100px',
              padding: '6px 14px',
            }}>
              <div className="w-2 h-2 rounded-full animate-pulse shrink-0" style={{ background: '#E63946' }} />
              <span className="text-xs sm:text-sm font-semibold tracking-wide" style={{ color: '#E63946' }}>
                Lucknow&apos;s Most Trusted Real Estate Firm
              </span>
            </div>

            {/* Heading — smaller on mobile */}
            <h1 className="font-serif font-bold leading-[1.08] mb-5 sm:mb-6">
              <span className="block text-[2.35rem] sm:text-5xl md:text-6xl lg:text-7xl" style={{ color: '#0B1F3A' }}>
                Your Trusted
              </span>
              <span className="block text-[1.9rem] sm:text-4xl md:text-5xl lg:text-6xl" style={{
                background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 50%, #E63946 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s linear infinite',
              }}>
                Real Estate Advisors
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1" style={{ color: '#0B1F3A' }}>
                in Lucknow
              </span>
            </h1>

            <p className="text-base sm:text-lg max-w-lg mb-8 sm:mb-10 leading-relaxed" style={{ color: '#6B7280' }}>
              From premium apartments to luxury villas — we help you find the perfect property with
              complete transparency, trusted expertise, and end-to-end support.
            </p>

            {/* Stats — 2-col grid on mobile, inline row on sm+ */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-y-5 sm:gap-y-0 mb-10 sm:mb-12">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="sm:pr-6 sm:mr-6 md:pr-8 md:mr-8"
                  style={{ borderRight: i < stats.length - 1 ? '1px solid #E8ECF2' : 'none' }}
                >
                  <p className="font-serif font-bold text-xl sm:text-2xl" style={{ color: '#E63946' }}>{stat.value}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: '#6B7280' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── SEARCH BAR ─── */}
          <div className="rounded-xl p-2 w-full max-w-4xl"
            style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.10)' }}>

            {/* Tabs */}
            <div className="flex gap-1 p-1 rounded-lg mb-2" style={{ background: '#F5F7FA' }}>
              {(['buy', 'rent', 'project'] as const).map((tab) => (
                <button key={tab} onClick={() => setSearchTab(tab)}
                  className="flex-1 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all"
                  style={searchTab === tab
                    ? { background: '#E63946', color: '#fff', boxShadow: '0 2px 8px rgba(230,57,70,0.30)' }
                    : { color: '#6B7280' }}>
                  {tab === 'project' ? 'New Projects' : `For ${tab === 'buy' ? 'Sale' : 'Rent'}`}
                </button>
              ))}
            </div>

            {/* Fields */}
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 rounded-lg px-4 py-3"
                style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
                <MapPin className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
                <select value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full bg-transparent text-sm focus:outline-none"
                  style={{ color: searchLocation ? '#1A1A1A' : '#9CA3AF' }}>
                  <option value="">Select Location</option>
                  {locationOptions.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div className="flex-1 flex items-center gap-3 rounded-lg px-4 py-3"
                style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
                <IndianRupee className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
                <select value={searchBudget} onChange={(e) => setSearchBudget(e.target.value)}
                  className="w-full bg-transparent text-sm focus:outline-none"
                  style={{ color: searchBudget ? '#1A1A1A' : '#9CA3AF' }}>
                  <option value="">Budget Range</option>
                  {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="flex-1 flex items-center gap-3 rounded-lg px-4 py-3"
                style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
                <Home className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
                <select value={searchType} onChange={(e) => setSearchType(e.target.value)}
                  className="w-full bg-transparent text-sm focus:outline-none"
                  style={{ color: searchType ? '#1A1A1A' : '#9CA3AF' }}>
                  <option value="">Property Type</option>
                  {typeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              {/* Full width on mobile, auto on sm+ */}
              <button onClick={handleSearch}
                className="flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg text-white transition-all w-full sm:w-auto whitespace-nowrap"
                style={{ background: '#E63946', boxShadow: '0 2px 12px rgba(230,57,70,0.35)' }}>
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
          <div className="w-5 h-9 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: '2px solid rgba(11,31,58,0.15)' }}>
            <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(11,31,58,0.25)' }} />
          </div>
        </div>
      </section>

      <PropertyBannerSlider />

      {/* ─── FEATURED PROPERTIES ─── */}
      <section className="py-14 sm:py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-9 sm:mb-12">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3 flex items-center gap-2" style={{ color: '#E63946' }}>
                <span className="w-6 sm:w-8 h-px" style={{ background: '#E63946' }} />Hand-picked for You
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
                Featured Properties
              </h2>
              <p className="mt-2 sm:mt-3 max-w-lg text-sm sm:text-base" style={{ color: '#6B7280' }}>
                Explore our curated selection of premium properties across Lucknow&apos;s finest neighbourhoods.
              </p>
            </div>
            <Link href="/properties"
              className="flex items-center gap-2 font-semibold text-sm sm:text-base hover:gap-4 transition-all group shrink-0"
              style={{ color: '#E63946' }}>
              View All Properties <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          {/* 1 col mobile → 2 col tablet → 4 col desktop */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div> */}
          <PropertyCardSlider properties={featuredProperties} />
        </div>
      </section>

      <CuratedCollections />

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-14 sm:py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4" style={{ color: '#E63946' }}>
              The Fincap Difference
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#0B1F3A' }}>
              Why Choose Us
            </h2>
            <p className="max-w-3xl mx-auto leading-relaxed text-sm sm:text-base px-1 sm:px-0" style={{ color: '#6B7280' }}>
              We present ourselves as a composite{' '}
              <span style={{ color: '#E63946', fontWeight: 600 }}>Real Estate Services Company</span>{' '}
              comprising of People and Processes towards Enchanting Prosperity.
              Our approach combines industry best practices, innovative technology, and a commitment to consistency
              and quality — building a satisfied pool of clients and partners.
            </p>
          </div>
          {/* 1 col mobile → 2 col tablet → 4 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {whyChooseUs.map((item, i) => {
              const IconComp = whyIcons[item.icon] || ShieldCheck
              return (
                <div key={i} className="group p-6 sm:p-8 rounded-xl cursor-default transition-all duration-300"
                  style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', boxShadow: '0 2px 16px rgba(11,31,58,0.06)' }}>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                    style={{ background: '#FEE8EA' }}>
                    <IconComp className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#E63946' }} />
                  </div>
                  <h3 className="font-serif font-semibold text-lg sm:text-xl mb-2 sm:mb-3" style={{ color: '#0B1F3A' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── HOT DEALS / NEW PROJECTS ─── */}
      <section className="py-14 sm:py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-9 sm:mb-12">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3 flex items-center gap-2" style={{ color: '#E63946' }}>
                <span className="w-6 sm:w-8 h-px" style={{ background: '#E63946' }} />New &amp; Trending
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
                Hot Projects &amp; Deals
              </h2>
            </div>
            <Link href="/properties?type=project"
              className="flex items-center gap-2 font-semibold text-sm sm:text-base hover:gap-4 transition-all group shrink-0"
              style={{ color: '#E63946' }}>
              All New Projects <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          {/* 1 col mobile → 2 col tablet → 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {hotDeals.map((p) => (
              <Link key={p.id} href={`/properties/${p.id}`} className="group">
                <div className="rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
                  style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 16px rgba(11,31,58,0.06)' }}>
                  <div className="h-48 sm:h-52 relative"
                    style={{ background: `linear-gradient(135deg, ${p.gradientFrom} 0%, ${p.gradientTo} 100%)` }}>
                    {p.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="text-white text-xs font-bold px-3 py-1.5 rounded" style={{ background: '#E63946' }}>{p.badge}</span>
                      </div>
                    )}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5"
                      style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.90), transparent)' }}>
                      <p className="text-white font-serif text-lg sm:text-xl font-bold">{p.price}</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 sm:p-5">
                    <h3 className="font-serif font-semibold text-base mb-2 transition-colors" style={{ color: '#0B1F3A' }}>{p.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm mb-3 sm:mb-4" style={{ color: '#6B7280' }}>
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" style={{ color: '#E63946' }} />{p.location}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex gap-2 sm:gap-3 items-center flex-wrap">
                        {p.developer && <span className="font-semibold text-xs sm:text-sm" style={{ color: '#0B1F3A' }}>{p.developer}</span>}
                        {p.possession && <span className="text-xs" style={{ color: '#6B7280' }}>· {p.possession}</span>}
                      </div>
                      <ChevronRight className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATIONS ─── */}
      <section className="py-14 sm:py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3" style={{ color: '#E63946' }}>
              Explore by Area
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
              Top Locations in Lucknow
            </h2>
          </div>
          {/* 2 col mobile → 3 col tablet → 6 col desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {locations.map((loc) => (
              <Link key={loc.slug} href={`/location/${loc.slug}`} className="group">
                <div className="bg-white p-4 sm:p-5 text-center transition-all duration-300 group-hover:-translate-y-1 rounded-xl"
                  style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 16px rgba(11,31,58,0.05)' }}>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center"
                    style={{ background: '#EBF0F7' }}>
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#0B1F3A' }} />
                  </div>
                  <p className="font-semibold text-xs sm:text-sm mb-1 transition-colors" style={{ color: '#0B1F3A' }}>{loc.name}</p>
                  <p className="text-xs" style={{ color: '#6B7280' }}>{loc.properties} properties</p>
                  <p className="text-xs font-semibold mt-1 text-green-600">{loc.priceChange}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-14 sm:py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3 flex items-center justify-center gap-2" style={{ color: '#E63946' }}>
              <span className="w-5 sm:w-6 h-px" style={{ background: '#E63946' }} />Client Stories
              <span className="w-5 sm:w-6 h-px" style={{ background: '#E63946' }} />
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
              What Our Clients Say
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* ─── DEVELOPER PARTNERS ─── */}
      <section className="py-10 sm:py-14"
        style={{ background: '#FFFFFF', borderTop: '1px solid #E8ECF2', borderBottom: '1px solid #E8ECF2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-7 sm:mb-10" style={{ color: '#6B7280' }}>
            Our Trusted Developer Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            {developers.map((dev) => (
              <div key={dev.name}
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-lg bg-white cursor-default transition-all"
                style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 4px rgba(11,31,58,0.05)' }}>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold font-serif shrink-0"
                  style={{ background: '#0B1F3A' }}>
                  {dev.initials}
                </div>
                <span className="font-semibold text-xs sm:text-sm" style={{ color: '#0B1F3A' }}>{dev.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
        style={{ background: '#FFFFFF', borderTop: '1px solid #E8ECF2', borderBottom: '1px solid #E8ECF2' }}>
        <div className="absolute z-0" style={{ top: '-20%', left: '-5%', width: '40%', height: '80%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(230,57,70,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute z-0" style={{ bottom: '-20%', right: '-5%', width: '40%', height: '80%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(11,31,58,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute top-0 left-0 right-0 z-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent 0%, #E63946 30%, #EF5A65 60%, transparent 100%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-5 sm:mb-6"
            style={{ background: '#FEE8EA', border: '1px solid rgba(230,57,70,0.20)', borderRadius: '100px', padding: '6px 14px' }}>
            <div className="w-2 h-2 rounded-full animate-pulse shrink-0" style={{ background: '#E63946' }} />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest" style={{ color: '#E63946' }}>
              Ready to Find Your Dream Property?
            </span>
          </div>
          <h2 className="font-serif font-bold leading-[1.08] mb-5 sm:mb-6">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ color: '#0B1F3A' }}>
              Let&apos;s Make Your Real
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1" style={{
              background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 50%, #E63946 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s linear infinite',
            }}>
              Estate Dream a Reality
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto px-2 sm:px-0" style={{ color: '#6B7280' }}>
            Connect with our expert advisors today. Free consultation, zero commission from buyers,
            and complete guidance from search to possession.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact"
              className="font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-sm text-white transition-all text-center"
              style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
              Schedule Free Consultation
            </Link>
            <a href="tel:+919876543210"
              className="font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all"
              style={{ border: '2px solid #0B1F3A', color: '#0B1F3A', background: 'transparent' }}>
              <Phone className="w-4 h-4" />Call +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* ─── QUICK INQUIRY FORM ─── */}
      <section className="py-14 sm:py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
            {/* Left info */}
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2" style={{ color: '#E63946' }}>
                <span className="w-6 sm:w-8 h-px" style={{ background: '#E63946' }} />Get in Touch
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#0B1F3A' }}>
                Quick Property<br />Inquiry
              </h2>
              <p className="mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base" style={{ color: '#6B7280' }}>
                Share your requirements and our expert advisors will contact you within 30 minutes.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {['Free property matching service', 'Expert legal & financial guidance', 'Zero brokerage for buyers', 'Site visit assistance'].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: '#FEE8EA' }}>
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
                    </div>
                    <span className="font-medium text-sm sm:text-base" style={{ color: '#1A1A1A' }}>{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-white rounded-xl"
                style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.05)' }}>
                <p className="font-serif font-semibold mb-3 sm:mb-4" style={{ color: '#0B1F3A' }}>Office Hours</p>
                <div className="space-y-2 text-xs sm:text-sm" style={{ color: '#6B7280' }}>
                  <div className="flex justify-between">
                    <span>Monday – Saturday</span>
                    <span className="font-semibold" style={{ color: '#1A1A1A' }}>9:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold" style={{ color: '#1A1A1A' }}>10:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10"
              style={{ border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-5 sm:mb-6" style={{ color: '#0B1F3A' }}>
                Send an Enquiry
              </h3>
              <div className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5 sm:mb-2" style={{ color: '#1A1A1A' }}>
                      Full Name <span style={{ color: '#E63946' }}>*</span>
                    </label>
                    <input type="text" placeholder="Rajesh Sharma"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm"
                      style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 sm:mb-2" style={{ color: '#1A1A1A' }}>
                      Phone Number <span style={{ color: '#E63946' }}>*</span>
                    </label>
                    <input type="tel" placeholder="+91 98765 43210"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm"
                      style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 sm:mb-2" style={{ color: '#1A1A1A' }}>Preferred Location</label>
                  <select className="w-full px-4 py-3 rounded-lg text-sm bg-white"
                    style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }}>
                    <option value="">Select Area</option>
                    {locationOptions.map((l) => <option key={l}>{l}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 sm:mb-2" style={{ color: '#1A1A1A' }}>Budget</label>
                  <select className="w-full px-4 py-3 rounded-lg text-sm bg-white"
                    style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }}>
                    <option value="">Select Budget</option>
                    {budgetOptions.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 sm:mb-2" style={{ color: '#1A1A1A' }}>Message</label>
                  <textarea rows={3} placeholder="Tell us about your requirements..."
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm resize-none"
                    style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }} />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (!inquiryForm.name.trim() || !inquiryForm.phone.trim()) return
                    setInquiryForm({ name: '', phone: '', location: '', message: '' })
                  }}
                  className="w-full text-white font-semibold py-3.5 sm:py-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm"
                  style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
                  <Send className="w-4 h-4" />
                  Send Enquiry
                </button>
                <p className="text-center text-xs" style={{ color: '#9CA3AF' }}>
                  By submitting, you agree to our{' '}
                  <Link href="#" className="hover:underline" style={{ color: '#E63946' }}>Privacy Policy</Link>.
                  We never share your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}