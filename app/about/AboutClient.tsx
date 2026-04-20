



// 'use client'

// import Link from 'next/link'
// import {
//   Award, CheckCircle2, TrendingUp, Shield, Building2,
//   Star, Phone, ArrowRight, Heart, Target, Eye
// } from 'lucide-react'
// import { stats } from '@/lib/data'

// const team = [
//   {
//     name: 'Adhaar Bansal',
//     role: 'Founder & Mentor',
//     exp: '15+ Years',
//     initials: 'AB',
//     speciality: 'Strategic Planning & Execution',
//   },
//   {
//     name: 'Rakesh Dubey',
//     role: 'Partner',
//     exp: '12+ Years',
//     initials: 'RD',
//     speciality: 'Sales & Marketing',
//   },
//   {
//     name: 'Shahnawaz Khan',
//     role: 'Partner',
//     exp: '17+ Years',
//     initials: 'SK',
//     speciality: 'Finance & Banking',
//   },
// ]

// const milestones = [
//   {
//     year: '2011',
//     title: 'Capitavés Founded',
//     desc: 'Started as a real estate consultancy and financial advisory firm focused on investment solutions.',
//   },
//   {
//     year: '2013',
//     title: 'Expansion to NCR & UP',
//     desc: 'Expanded operations to Delhi NCR and across Uttar Pradesh with enhanced service offerings.',
//   },
//   {
//     year: '2017',
//     title: 'Fincap Transformation',
//     desc: 'Evolved into a composite real estate services company driven by people, processes, and technology.',
//   },
//   {
//     year: 'Present',
//     title: 'Global Presence',
//     desc: 'Serving clients across Pan India, Middle East, and South East Asia with strong network and expertise.',
//   },
// ]

// const values = [
//   {
//     icon: Target,
//     title: 'Practical Approach',
//     desc: 'We focus on realistic, result-oriented solutions aligned with market conditions.',
//   },
//   {
//     icon: Shield,
//     title: 'Ethics & Professionalism',
//     desc: 'Maintaining highest standards of integrity and professional conduct in every deal.',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Focus on Asset Value',
//     desc: 'Helping clients maximize returns and build strong long-term investment portfolios.',
//   },
//   {
//     icon: Star,
//     title: 'Opportunity & Innovation',
//     desc: 'Exploring new opportunities with innovative strategies in real estate advisory.',
//   },
// ]

// export default function AboutClient() {
//   return (
//     <div className="pt-20 min-h-screen" style={{ background: '#FFFFFF' }}>

//       {/* ── Hero — Light Navy (same as properties page header) ── */}
//       <section className="relative py-24 overflow-hidden" style={{ background: '#1E3A5F' }}>
//         {/* dot pattern */}
//         <div className="absolute inset-0 opacity-[0.06]" style={{
//           backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//           backgroundSize: '28px 28px',
//         }} />
//         {/* red top line */}
//         <div className="absolute top-0 left-0 right-0 h-[3px]" style={{
//           background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 35%, transparent 65%)',
//         }} />
//         {/* subtle red glow */}
//         <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{
//           background: 'radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 70%)',
//           filter: 'blur(60px)',
//         }} />

//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
//           <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{
//             background: 'rgba(230,57,70,0.12)',
//             border: '1px solid rgba(230,57,70,0.30)',
//           }}>
//             <Building2 className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//             <span className="text-sm font-semibold" style={{ color: '#E63946' }}>Est. 2011 — Lucknow</span>
//           </div>
//           <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
//             About Fincap
//           </h1>
//           <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.60)' }}>
//             A composite Real Estate Services Company comprising of people and processes
//             towards enhancing prosperity through industry best practices and innovative technology.
//           </p>
//         </div>
//       </section>

//       {/* ── Stats ──
//       <section className="py-16 bg-white" style={{ borderBottom: '1px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat) => (
//               <div key={stat.label} className="text-center">
//                 <p className="font-serif text-4xl md:text-5xl font-bold mb-2" style={{ color: '#E63946' }}>
//                   {stat.value}
//                 </p>
//                 <p className="text-sm font-medium" style={{ color: '#6B7280' }}>{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}
//       <section className="py-16 bg-white" style={{ borderBottom: '1px solid #E8ECF2' }}>
//         <div className="max-w-6xl mx-auto px-5 sm:px-8">
//           {/* ✅ Heading */}
//           <div className="text-center mb-12">
//             <p
//               className="text-sm font-semibold uppercase tracking-wider mb-3"
//               style={{ color: '#E63946' }}
//             >
//               Our Impact
//             </p>

//             <h2
//               className="font-serif text-3xl md:text-4xl font-bold"
//               style={{ color: '#0B1F3A' }}
//             >
//               Fincap in Numbers
//             </h2>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4">

//             {stats.map((stat, i) => (
//               <div
//                 key={stat.label}
//                 className="text-center px-6 py-4 relative"
//               >

//                 {/* Number */}
//                 <p
//                   className="font-serif text-4xl md:text-5xl font-bold mb-2"
//                   style={{ color: '#E63946' }}
//                 >
//                   {stat.value}
//                 </p>

//                 {/* Label */}
//                 <p
//                   className="text-sm font-medium"
//                   style={{ color: '#6B7280' }}
//                 >
//                   {stat.label}
//                 </p>

//                 {/* Divider (only for desktop & not last item) */}
//                 {i !== stats.length - 1 && (
//                   <div
//                     className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 h-10 w-px"
//                     style={{ background: '#E8ECF2' }}
//                   />
//                 )}

//               </div>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* ── Our Story ── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2"
//                 style={{ color: '#E63946' }}>
//                 <span className="w-8 h-px inline-block" style={{ background: '#E63946' }} />
//                 Our Story
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0B1F3A' }}>
//                 Built on Trust,<br />Driven by Excellence
//               </h2>
//               <div className="space-y-5 leading-relaxed" style={{ color: '#6B7280' }}>
//                 <p>
//                   We present ourselves as a composite Real Estate Services Company comprising of people and processes
//                   towards enhancing prosperity. Our approach connects clients through industry best practices and structured workflows.
//                 </p>

//                 <p>
//                   By leveraging innovative technology platforms, we simplify property discovery, evaluation, and execution
//                   while ensuring transparency and efficiency in every transaction.
//                 </p>

//                 <p>
//                   Our core objective is to deliver consistency in service with impeccable quality standards,
//                   building a strong and satisfied pool of clients and partners over the years.
//                 </p>
//               </div>
//               {/* <div className="flex flex-wrap gap-3 mt-8">
//                 {['RERA Registered', 'ISO 9001:2015', 'Award-Winning Team', '4.9/5 Rating'].map((badge) => (
//                   <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-full"
//                     style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
//                     <CheckCircle2 className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="text-sm font-semibold" style={{ color: '#0B1F3A' }}>{badge}</span>
//                   </div>
//                 ))}
//               </div> */}
//             </div>

//             {/* Visual card */}
//             <div className="relative">
//               <div className="rounded-2xl h-80 relative overflow-hidden"
//                 style={{
//                   background: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)',
//                   boxShadow: '0 8px 40px rgba(11,31,58,0.20)',
//                 }}>
//                 {/* dot pattern */}
//                 <div className="absolute inset-0 opacity-[0.08]" style={{
//                   backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//                   backgroundSize: '28px 28px',
//                 }} />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center">
//                     <Building2 className="w-16 h-16 mx-auto mb-4" style={{ color: '#E63946', opacity: 0.8 }} />
//                     <p className="font-serif text-4xl font-bold text-white">15+</p>
//                     <p className="font-medium mt-1" style={{ color: 'rgba(255,255,255,0.60)' }}>Years of Excellence</p>
//                   </div>
//                 </div>
//                 {/* red bottom accent */}
//                 <div className="absolute bottom-0 left-0 right-0 h-1" style={{
//                   background: 'linear-gradient(90deg, #E63946, #EF5A65, transparent)',
//                 }} />
//               </div>

//               {/* Floating badges */}
//               <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4"
//                 style={{ border: '1px solid #E8ECF2', boxShadow: '0 8px 24px rgba(11,31,58,0.12)' }}>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#FEE8EA' }}>
//                     <Award className="w-5 h-5" style={{ color: '#E63946' }} />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Best Broker</p>
//                     <p className="text-xs" style={{ color: '#6B7280' }}>India Property Awards 2023</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-4"
//                 style={{ border: '1px solid #E8ECF2', boxShadow: '0 8px 24px rgba(11,31,58,0.12)' }}>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#DCFCE7' }}>
//                     <TrendingUp className="w-5 h-5 text-green-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>₹500 Cr+</p>
//                     <p className="text-xs" style={{ color: '#6B7280' }}>Transactions Closed</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Our Values — White with navy cards ── */}
//       <section className="py-20 md:py-28" style={{ background: '#F5F7FA', borderTop: '1px solid #E8ECF2', borderBottom: '1px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-14">
//             <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#E63946' }}>
//               Our Foundation
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
//               What We Stand For
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((val, i) => {
//               const Icon = val.icon
//               return (
//                 <div key={i} className="bg-white p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
//                   style={{
//                     border: '1px solid #E8ECF2',
//                     boxShadow: '0 2px 16px rgba(11,31,58,0.06)',
//                   }}>
//                   <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
//                     style={{ background: '#FEE8EA' }}>
//                     <Icon className="w-7 h-7" style={{ color: '#E63946' }} />
//                   </div>
//                   <h3 className="font-serif font-semibold text-xl mb-3" style={{ color: '#0B1F3A' }}>
//                     {val.title}
//                   </h3>
//                   <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
//                     {val.desc}
//                   </p>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ── Timeline ── */}
//       <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
//         <div className="max-w-4xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-14">
//             <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#E63946' }}>
//               Our Journey
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
//               Key Milestones
//             </h2>
//           </div>
//           <div className="relative">
//             {/* Vertical line */}
//             <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px" style={{ background: '#E8ECF2' }} />

//             <div className="space-y-10">
//               {milestones.map((m, i) => (
//                 <div
//                   key={m.year}
//                   className={`flex flex-col sm:flex-row gap-6 sm:gap-0 items-start ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
//                     }`}
//                 >
//                   <div className={`sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-16 sm:text-right' : 'sm:pl-16'} pl-16 sm:pl-0`}>
//                     <div className="bg-white rounded-2xl p-6 transition-shadow hover:shadow-lg"
//                       style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//                       <span className="text-white text-xs font-bold px-3 py-1 rounded-full"
//                         style={{ background: '#E63946' }}>
//                         {m.year}
//                       </span>
//                       <h3 className="font-serif font-semibold text-lg mt-3 mb-2" style={{ color: '#0B1F3A' }}>
//                         {m.title}
//                       </h3>
//                       <p className="text-sm" style={{ color: '#6B7280' }}>{m.desc}</p>
//                     </div>
//                   </div>
//                   {/* Dot */}
//                   <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4"
//                     style={{ background: '#E63946', borderColor: '#FFFFFF', marginTop: '22px', boxShadow: '0 0 0 2px #E63946' }} />
//                   <div className="sm:w-1/2" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Team ── */}
//       {/* <section className="py-20 md:py-28" style={{ background: '#F5F7FA', borderTop: '1px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-14">
//             <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#E63946' }}>
//               The People Behind Fincap Sol
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
//               Our Expert Team
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
//             {team.map((member) => (
//               <div key={member.name}
//                 className="bg-white p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                 style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//                 <div className="flex items-center gap-4 mb-5">
//                   <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg font-serif"
//                     style={{ background: 'linear-gradient(135deg, #0B1F3A, #1E3A5F)' }}>
//                     {member.initials}
//                   </div>
//                   <div>
//                     <p className="font-serif font-semibold text-base" style={{ color: '#0B1F3A' }}>
//                       {member.name}
//                     </p>
//                     <p className="text-sm" style={{ color: '#6B7280' }}>{member.role}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs font-medium px-3 py-1.5 rounded-full"
//                     style={{ background: '#EBF0F7', color: '#0B1F3A', border: '1px solid #E8ECF2' }}>
//                     {member.speciality}
//                   </span>
//                   <span className="text-xs font-semibold" style={{ color: '#E63946' }}>{member.exp}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       <section className="py-20 md:py-28" style={{ background: '#F5F7FA', borderTop: '1px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">

//           <div className="text-center mb-14">
//             <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#E63946' }}>
//               The People Behind Fincap Sol
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
//               Our Expert Team
//             </h2>
//           </div>

//           {/* ✅ FIXED GRID */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {team.map((member) => (
//               <div
//                 key={member.name}
//                 className="bg-white p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                 style={{
//                   border: '1px solid #E8ECF2',
//                   boxShadow: '0 2px 12px rgba(11,31,58,0.06)'
//                 }}
//               >
//                 <div className="flex items-center gap-4 mb-4">

//                   {/* Avatar */}
//                   <div
//                     className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg font-serif shrink-0"
//                     style={{ background: 'linear-gradient(135deg, #0B1F3A, #1E3A5F)' }}
//                   >
//                     {member.initials}
//                   </div>

//                   {/* Name + Role */}
//                   <div className="leading-tight">
//                     <p className="font-serif font-semibold text-[17px]" style={{ color: '#0B1F3A' }}>
//                       {member.name}
//                     </p>
//                     <p className="text-sm mt-0.5" style={{ color: '#6B7280' }}>
//                       {member.role}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Divider */}
//                 <div className="w-full h-px mb-4" style={{ background: '#E8ECF2' }} />

//                 {/* Bottom row */}
//                 <div className="flex items-center justify-between">

//                   {/* Speciality */}
//                   <span
//                     className="text-xs font-medium px-3 py-1 rounded-full"
//                     style={{
//                       background: '#F1F5F9',
//                       color: '#0B1F3A',
//                       border: '1px solid #E8ECF2'
//                     }}
//                   >
//                     {member.speciality}
//                   </span>

//                   {/* Experience */}
//                   <span
//                     className="text-xs font-semibold"
//                     style={{ color: '#E63946' }}
//                   >
//                     {member.exp}
//                   </span>

//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section className="py-20" style={{ background: '#FFFFFF', borderTop: '1px solid #E8ECF2' }}>
//         <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
//           <h2 className="font-serif text-4xl font-bold mb-4" style={{ color: '#0B1F3A' }}>
//             Ready to Work With Us?
//           </h2>
//           <p className="mb-8" style={{ color: '#6B7280' }}>
//             Join thousands of satisfied clients who found their dream property with Fincap.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/properties"
//               className="font-semibold px-8 py-4 rounded-lg text-white flex items-center justify-center gap-2 transition-all"
//               style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
//               Explore Properties <ArrowRight className="w-4 h-4" />
//             </Link>
//             <Link href="/contact"
//               className="font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all"
//               style={{ border: '2px solid #0B1F3A', color: '#0B1F3A' }}>
//               <Phone className="w-4 h-4" />
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }




'use client'

import Link from 'next/link'
import {
  Award, CheckCircle2, TrendingUp, Shield, Building2,
  Star, Phone, ArrowRight, Heart, Target, Eye
} from 'lucide-react'
import { stats } from '@/lib/data'

const team = [
  {
    name: 'Adhaar Bansal',
    role: 'Founder & Mentor',
    exp: '15+ Years',
    initials: 'AB',
    speciality: 'Strategic Planning & Execution',
  },
  {
    name: 'Rakesh Dubey',
    role: 'Partner',
    exp: '12+ Years',
    initials: 'RD',
    speciality: 'Sales & Marketing',
  },
  {
    name: 'Shahnawaz Khan',
    role: 'Partner',
    exp: '17+ Years',
    initials: 'SK',
    speciality: 'Finance & Banking',
  },
]

const milestones = [
  {
    year: '2011',
    title: 'Capitavés Founded',
    desc: 'Started as a real estate consultancy and financial advisory firm focused on investment solutions.',
  },
  {
    year: '2013',
    title: 'Expansion to NCR & UP',
    desc: 'Expanded operations to Delhi NCR and across Uttar Pradesh with enhanced service offerings.',
  },
  {
    year: '2017',
    title: 'Fincap Transformation',
    desc: 'Evolved into a composite real estate services company driven by people, processes, and technology.',
  },
  {
    year: 'Present',
    title: 'Global Presence',
    desc: 'Serving clients across Pan India, Middle East, and South East Asia with strong network and expertise.',
  },
]

const values = [
  {
    icon: Target,
    title: 'Practical Approach',
    desc: 'We focus on realistic, result-oriented solutions aligned with market conditions.',
  },
  {
    icon: Shield,
    title: 'Ethics & Professionalism',
    desc: 'Maintaining highest standards of integrity and professional conduct in every deal.',
  },
  {
    icon: TrendingUp,
    title: 'Focus on Asset Value',
    desc: 'Helping clients maximize returns and build strong long-term investment portfolios.',
  },
  {
    icon: Star,
    title: 'Opportunity & Innovation',
    desc: 'Exploring new opportunities with innovative strategies in real estate advisory.',
  },
]

export default function AboutClient() {
  return (
    <div className="pt-20 min-h-screen" style={{ background: '#FFFFFF' }}>

      {/* ── Hero ── */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden" style={{ background: '#1E3A5F' }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{
          background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 35%, transparent 65%)',
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-5 sm:mb-6 px-3 sm:px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(230,57,70,0.12)', border: '1px solid rgba(230,57,70,0.30)' }}>
            <Building2 className="w-3.5 h-3.5 shrink-0" style={{ color: '#E63946' }} />
            <span className="text-xs sm:text-sm font-semibold" style={{ color: '#E63946' }}>Est. 2011 — Lucknow</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            About Fincap
          </h1>
          <p className="text-base sm:text-xl max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
            style={{ color: 'rgba(255,255,255,0.60)' }}>
            A composite Real Estate Services Company comprising of people and processes
            towards enhancing prosperity through industry best practices and innovative technology.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 sm:py-16 bg-white" style={{ borderBottom: '1px solid #E8ECF2' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3"
              style={{ color: '#E63946' }}>
              Our Impact
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#0B1F3A' }}>
              Fincap in Numbers
            </h2>
          </div>
          {/* 2 col mobile, 4 col md+ */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center px-4 sm:px-6 py-4 relative">
                <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-1.5 sm:mb-2"
                  style={{ color: '#E63946' }}>
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-medium" style={{ color: '#6B7280' }}>
                  {stat.label}
                </p>
                {i !== stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 h-10 w-px"
                    style={{ background: '#E8ECF2' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-14 sm:py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2"
                style={{ color: '#E63946' }}>
                <span className="w-6 sm:w-8 h-px inline-block" style={{ background: '#E63946' }} />
                Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                style={{ color: '#0B1F3A' }}>
                Built on Trust,<br />Driven by Excellence
              </h2>
              <div className="space-y-4 sm:space-y-5 leading-relaxed text-sm sm:text-base"
                style={{ color: '#6B7280' }}>
                <p>
                  We present ourselves as a composite Real Estate Services Company comprising of people and processes
                  towards enhancing prosperity. Our approach connects clients through industry best practices and structured workflows.
                </p>
                <p>
                  By leveraging innovative technology platforms, we simplify property discovery, evaluation, and execution
                  while ensuring transparency and efficiency in every transaction.
                </p>
                <p>
                  Our core objective is to deliver consistency in service with impeccable quality standards,
                  building a strong and satisfied pool of clients and partners over the years.
                </p>
              </div>
            </div>

            {/* Visual card — floating badges hidden on mobile */}
            <div className="relative mt-8 lg:mt-0">
              <div className="rounded-2xl h-64 sm:h-80 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)',
                  boxShadow: '0 8px 40px rgba(11,31,58,0.20)',
                }}>
                <div className="absolute inset-0 opacity-[0.08]" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Building2 className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4"
                      style={{ color: '#E63946', opacity: 0.8 }} />
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-white">15+</p>
                    <p className="font-medium mt-1 text-sm sm:text-base"
                      style={{ color: 'rgba(255,255,255,0.60)' }}>Years of Excellence</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: 'linear-gradient(90deg, #E63946, #EF5A65, transparent)' }} />
              </div>

              {/* Floating badges — hidden on small screens to avoid overflow */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 bg-white rounded-2xl p-4"
                style={{ border: '1px solid #E8ECF2', boxShadow: '0 8px 24px rgba(11,31,58,0.12)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: '#FEE8EA' }}>
                    <Award className="w-5 h-5" style={{ color: '#E63946' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Best Broker</p>
                    <p className="text-xs" style={{ color: '#6B7280' }}>India Property Awards 2023</p>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block absolute -top-5 -right-5 bg-white rounded-2xl p-4"
                style={{ border: '1px solid #E8ECF2', boxShadow: '0 8px 24px rgba(11,31,58,0.12)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: '#DCFCE7' }}>
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>₹500 Cr+</p>
                    <p className="text-xs" style={{ color: '#6B7280' }}>Transactions Closed</p>
                  </div>
                </div>
              </div>

              {/* Mobile-only inline badges */}
              <div className="sm:hidden flex gap-3 mt-4">
                <div className="flex-1 bg-white rounded-xl p-3 flex items-center gap-2"
                  style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 8px rgba(11,31,58,0.08)' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: '#FEE8EA' }}>
                    <Award className="w-4 h-4" style={{ color: '#E63946' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-xs" style={{ color: '#0B1F3A' }}>Best Broker 2023</p>
                    <p className="text-[10px]" style={{ color: '#6B7280' }}>India Property Awards</p>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-3 flex items-center gap-2"
                  style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 8px rgba(11,31,58,0.08)' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: '#DCFCE7' }}>
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs" style={{ color: '#0B1F3A' }}>₹500 Cr+</p>
                    <p className="text-[10px]" style={{ color: '#6B7280' }}>Transactions Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-14 sm:py-20 md:py-28"
        style={{ background: '#F5F7FA', borderTop: '1px solid #E8ECF2', borderBottom: '1px solid #E8ECF2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3"
              style={{ color: '#E63946' }}>
              Our Foundation
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
              What We Stand For
            </h2>
          </div>
          {/* 1 col mobile → 2 col sm → 4 col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {values.map((val, i) => {
              const Icon = val.icon
              return (
                <div key={i} className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 16px rgba(11,31,58,0.06)' }}>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                    style={{ background: '#FEE8EA' }}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#E63946' }} />
                  </div>
                  <h3 className="font-serif font-semibold text-lg sm:text-xl mb-2 sm:mb-3" style={{ color: '#0B1F3A' }}>
                    {val.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {val.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-14 sm:py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3"
              style={{ color: '#E63946' }}>
              Our Journey
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
              Key Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line — left on mobile, center on sm+ */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px"
              style={{ background: '#E8ECF2' }} />

            <div className="space-y-8 sm:space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year}
                  className={`relative flex gap-0 items-start
                    sm:flex-row sm:gap-0
                    ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}
                  `}>
                  {/* Card — full width on mobile with left padding for line */}
                  <div className={`
                    pl-10 sm:pl-0 w-full
                    sm:w-1/2
                    ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}
                  `}>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-shadow hover:shadow-lg"
                      style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                      <span className="text-white text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: '#E63946' }}>
                        {m.year}
                      </span>
                      <h3 className="font-serif font-semibold text-base sm:text-lg mt-3 mb-1.5 sm:mb-2"
                        style={{ color: '#0B1F3A' }}>
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>{m.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10"
                    style={{
                      background: '#E63946',
                      borderColor: '#FFFFFF',
                      marginTop: '20px',
                      boxShadow: '0 0 0 2px #E63946',
                    }} />

                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-14 sm:py-20 md:py-28"
        style={{ background: '#F5F7FA', borderTop: '1px solid #E8ECF2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3"
              style={{ color: '#E63946' }}>
              The People Behind Fincap Sol
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
              Our Expert Team
            </h2>
          </div>

          {/* 1 col mobile → 2 col sm → 3 col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name}
                className="bg-white p-5 sm:p-7 rounded-xl sm:rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg font-serif shrink-0"
                    style={{ background: 'linear-gradient(135deg, #0B1F3A, #1E3A5F)' }}>
                    {member.initials}
                  </div>
                  <div className="leading-tight">
                    <p className="font-serif font-semibold text-base sm:text-[17px]" style={{ color: '#0B1F3A' }}>
                      {member.name}
                    </p>
                    <p className="text-xs sm:text-sm mt-0.5" style={{ color: '#6B7280' }}>
                      {member.role}
                    </p>
                  </div>
                </div>
                <div className="w-full h-px mb-3 sm:mb-4" style={{ background: '#E8ECF2' }} />
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 rounded-full truncate"
                    style={{ background: '#F1F5F9', color: '#0B1F3A', border: '1px solid #E8ECF2' }}>
                    {member.speciality}
                  </span>
                  <span className="text-xs font-semibold shrink-0" style={{ color: '#E63946' }}>
                    {member.exp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 sm:py-20" style={{ background: '#FFFFFF', borderTop: '1px solid #E8ECF2' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#0B1F3A' }}>
            Ready to Work With Us?
          </h2>
          <p className="mb-6 sm:mb-8 text-sm sm:text-base" style={{ color: '#6B7280' }}>
            Join thousands of satisfied clients who found their dream property with Fincap.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/properties"
              className="font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-white flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
              style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
              Explore Properties <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact"
              className="font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
              style={{ border: '2px solid #0B1F3A', color: '#0B1F3A' }}>
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}