// 'use client'

// import Link from 'next/link'
// import {
//   Award, CheckCircle2, Users, TrendingUp, Shield, Building2,
//   Star, Phone, ArrowRight, Heart, Target, Eye
// } from 'lucide-react'
// import { stats } from '@/lib/data'

// const team = [
//   { name: 'Rakesh Dubey', role: 'Founder & CEO', exp: '20+ Years', initials: 'RD', speciality: 'Luxury Residential' },
//   { name: 'Alind', role: 'Head of Sales', exp: '15+ Years', initials: 'A', speciality: 'New Projects' },
//   { name: 'Rohit Sharma', role: 'Senior Advisor', exp: '12+ Years', initials: 'RS', speciality: 'Commercial' },
//   // { name: 'Priya Nair', role: 'Legal Expert', exp: '10+ Years', initials: 'PN', speciality: 'Property Law' },
//   // { name: 'Vikram Das', role: 'Investment Advisor', exp: '8+ Years', initials: 'VD', speciality: 'Portfolio Management' },
//   // { name: 'Anjali Verma', role: 'Client Relations', exp: '7+ Years', initials: 'AV', speciality: 'Buyer Experience' },
// ]

// const milestones = [
//   { year: '2009', title: 'Founded in Lucknow', desc: 'Fincap sol established with a vision to transform real estate advisory in Uttar Pradesh.' },
//   { year: '2013', title: 'Expanded to Commercial', desc: 'Launched dedicated commercial property division serving IT parks and business districts.' },
//   { year: '2017', title: '₹100 Cr in Deals', desc: 'Crossed a landmark ₹100 crore in total property transactions, cementing market leadership.' },
//   { year: '2020', title: 'Digital Transformation', desc: 'Launched India\'s first AI-powered property matching platform for Lucknow market.' },
//   { year: '2023', title: 'National Recognition', desc: 'Won Best Real Estate Broker Award at India Property Awards, New Delhi.' },
//   { year: '2024', title: '₹500 Cr & Beyond', desc: 'Surpassed ₹500 crore in cumulative transactions with 2,500+ happy families.' },
// ]

// const values = [
//   { icon: Shield, title: 'Integrity', desc: 'Complete transparency in every transaction, no hidden charges, no conflicts of interest.' },
//   { icon: Heart, title: 'Client First', desc: 'Your needs drive every decision. We measure success by your satisfaction, not our commission.' },
//   { icon: Target, title: 'Excellence', desc: 'We raise the bar in every interaction, delivering service that consistently exceeds expectations.' },
//   { icon: Eye, title: 'Transparency', desc: 'Full disclosure on every property: legal status, market value, and honest assessment.' },
// ]

// export default function AboutPage() {
//   return (
//     <div className="pt-20 min-h-screen bg-ivory">
//       {/* Hero */}
//       <section
//         className="relative py-24 md:py-32 overflow-hidden"
//         style={{ background: 'linear-gradient(135deg, #0d0d1a 0%, #1a100d 100%)' }}
//       >
//         <div className="absolute inset-0 opacity-[0.07]"
//           style={{
//             backgroundImage: `linear-gradient(rgba(201,149,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,149,42,0.4) 1px, transparent 1px)`,
//             backgroundSize: '60px 60px',
//           }}
//         />
//         <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gold/10 blur-[100px]" />
//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
//           <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
//             <Building2 className="w-3.5 h-3.5 text-gold" />
//             <span className="text-gold text-sm font-semibold">Est. 2009 — Lucknow</span>
//           </div>
//           <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
//             About Fincap sol
//           </h1>
//           <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
//             For over 15 years, we have been the most trusted name in Lucknow real estate,
//             helping thousands of families and investors find their perfect property.
//           </p>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="py-16 bg-white border-b border-stone-border">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat) => (
//               <div key={stat.label} className="text-center">
//                 <p className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">
//                   {stat.value}
//                 </p>
//                 <p className="text-charcoal-muted font-medium text-sm">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="py-20 md:py-28">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
//                 <span className="w-8 h-px bg-gold" />
//                 Our Story
//               </p>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
//                 Built on Trust,<br />Driven by Excellence
//               </h2>
//               <div className="space-y-5 text-charcoal-muted leading-relaxed">
//                 <p>
//                   Fincap sol was founded in 2009 by Arjun Srivastava with a single, powerful vision:
//                   to bring integrity, transparency, and expertise to Lucknow&apos;s real estate market.
//                   At a time when buyers were navigating a fragmented and often opaque market, we stepped in
//                   as trusted guides.
//                 </p>
//                 <p>
//                   Starting from a small office in Hazratganj, we grew by word of mouth — each happy client
//                   sending three more. Today, Fincap sol is Lucknow&apos;s most recognized real estate
//                   advisory firm, with a team of 40+ experts across residential, commercial, and investment divisions.
//                 </p>
//                 <p>
//                   We have closed over ₹500 crore in transactions, helped 2,500+ families find their dream homes,
//                   and won multiple national awards for service excellence. But our greatest achievement remains
//                   the trust our clients place in us, every single day.
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-4 mt-8">
//                 {[
//                   'RERA Registered',
//                   'ISO 9001:2015',
//                   'Award-Winning Team',
//                   '4.9/5 Rating',
//                 ].map((badge) => (
//                   <div key={badge} className="flex items-center gap-2 bg-ivory-dark px-4 py-2 rounded-full">
//                     <CheckCircle2 className="w-4 h-4 text-gold" />
//                     <span className="text-sm font-semibold text-charcoal">{badge}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Visual */}
//             <div className="relative">
//               <div
//                 className="rounded-3xl h-80 relative overflow-hidden shadow-card-hover"
//                 style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2a1a0d 100%)' }}
//               >
//                 <div className="absolute inset-0 opacity-10"
//                   style={{ backgroundImage: `radial-gradient(circle, rgba(201,149,42,0.4) 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center">
//                     <Building2 className="w-20 h-20 text-gold mx-auto mb-4 opacity-60" />
//                     <p className="font-serif text-4xl font-bold text-white">15+</p>
//                     <p className="text-white/60 font-medium">Years of Excellence</p>
//                   </div>
//                 </div>
//                 <div className="absolute bottom-0 left-0 h-1 w-2/3 bg-gold-gradient" />
//               </div>

//               {/* Floating cards */}
//               <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-card-hover border border-stone-border/30">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
//                     <Award className="w-5 h-5 text-gold" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-charcoal text-sm">Best Broker</p>
//                     <p className="text-charcoal-muted text-xs">India Property Awards 2023</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-card-hover border border-stone-border/30">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
//                     <TrendingUp className="w-5 h-5 text-green-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-charcoal text-sm">₹500 Cr+</p>
//                     <p className="text-charcoal-muted text-xs">Transactions Closed</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Values */}
//       <section className="py-20 md:py-28"
//         style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0d1a0d 100%)' }}
//       >
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-14">
//             <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">Our Foundation</p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">What We Stand For</h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((val, i) => {
//               const Icon = val.icon
//               return (
//                 <div key={i} className="group p-8 rounded-2xl border border-white/10 hover:border-gold/40 bg-white/5 hover:bg-white/10 transition-all duration-300">
//                   <div className="w-14 h-14 rounded-2xl bg-gold/20 group-hover:bg-gold transition-colors duration-300 flex items-center justify-center mb-6">
//                     <Icon className="w-7 h-7 text-gold group-hover:text-white transition-colors" />
//                   </div>
//                   <h3 className="font-serif font-semibold text-xl text-white mb-3">{val.title}</h3>
//                   <p className="text-white/50 text-sm leading-relaxed">{val.desc}</p>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="py-20 md:py-28 bg-ivory">
//         <div className="max-w-4xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-14">
//             <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">Our Journey</p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">Key Milestones</h2>
//           </div>
//           <div className="relative">
//             {/* Vertical line */}
//             <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-stone-border" />

//             <div className="space-y-10">
//               {milestones.map((m, i) => (
//                 <div
//                   key={m.year}
//                   className={`flex flex-col sm:flex-row gap-6 sm:gap-0 items-start ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
//                     }`}
//                 >
//                   <div className={`sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-16 sm:text-right' : 'sm:pl-16'} pl-16 sm:pl-0`}>
//                     <div className="bg-white rounded-2xl p-6 shadow-card border border-stone-border/30 hover:shadow-card-hover transition-shadow">
//                       <span className="badge-featured text-white text-xs font-bold px-3 py-1 rounded-full">
//                         {m.year}
//                       </span>
//                       <h3 className="font-serif font-semibold text-lg text-charcoal mt-3 mb-2">{m.title}</h3>
//                       <p className="text-charcoal-muted text-sm">{m.desc}</p>
//                     </div>
//                   </div>

//                   {/* Dot */}
//                   <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-ivory shadow-gold/30 shadow-md" style={{ marginTop: '22px' }} />

//                   <div className="sm:w-1/2" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-20 md:py-28 bg-white">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="text-center mb-14">
//             <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">The People Behind Fincap sol</p>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">Our Expert Team</h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {team.map((member) => (
//               <div
//                 key={member.name}
//                 className="group bg-ivory rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 border border-stone-border/30 hover:border-gold/20"
//               >
//                 <div className="flex items-center gap-4 mb-5">
//                   <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center text-white font-bold text-xl font-serif shadow-gold/20 shadow-md group-hover:shadow-gold/40 transition-shadow">
//                     {member.initials}
//                   </div>
//                   <div>
//                     <p className="font-serif font-semibold text-lg text-charcoal group-hover:text-gold transition-colors">
//                       {member.name}
//                     </p>
//                     <p className="text-charcoal-muted text-sm">{member.role}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs bg-white text-charcoal font-medium px-3 py-1.5 rounded-full border border-stone-border">
//                     {member.speciality}
//                   </span>
//                   <span className="text-xs text-gold font-semibold">{member.exp} Exp.</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-ivory-dark">
//         <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
//           <h2 className="font-serif text-4xl font-bold text-charcoal mb-4">
//             Ready to Work With Us?
//           </h2>
//           <p className="text-charcoal-muted mb-8">
//             Join thousands of satisfied clients who found their dream property with Fincap sol.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/properties" className="bg-gold text-white font-semibold px-8 py-4 rounded-full hover:bg-gold-dark transition-colors shadow-md hover:shadow-gold flex items-center justify-center gap-2">
//               Explore Properties <ArrowRight className="w-4 h-4" />
//             </Link>
//             <Link href="/contact" className="border-2 border-charcoal text-charcoal font-semibold px-8 py-4 rounded-full hover:bg-charcoal hover:text-white transition-all flex items-center justify-center gap-2">
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
  { name: 'Rakesh Dubey', role: 'Founder & CEO', exp: '20+ Years', initials: 'RD', speciality: 'Luxury Residential' },
  { name: 'Alind', role: 'Head of Sales', exp: '15+ Years', initials: 'A', speciality: 'New Projects' },
  { name: 'Rohit Sharma', role: 'Senior Advisor', exp: '12+ Years', initials: 'RS', speciality: 'Commercial' },
]

const milestones = [
  { year: '2009', title: 'Founded in Lucknow', desc: 'Fincap sol established with a vision to transform real estate advisory in Uttar Pradesh.' },
  { year: '2013', title: 'Expanded to Commercial', desc: 'Launched dedicated commercial property division serving IT parks and business districts.' },
  { year: '2017', title: '₹100 Cr in Deals', desc: 'Crossed a landmark ₹100 crore in total property transactions, cementing market leadership.' },
  { year: '2020', title: 'Digital Transformation', desc: 'Launched India\'s first AI-powered property matching platform for Lucknow market.' },
  { year: '2023', title: 'National Recognition', desc: 'Won Best Real Estate Broker Award at India Property Awards, New Delhi.' },
  { year: '2024', title: '₹500 Cr & Beyond', desc: 'Surpassed ₹500 crore in cumulative transactions with 2,500+ happy families.' },
]

const values = [
  { icon: Shield, title: 'Integrity', desc: 'Complete transparency in every transaction, no hidden charges, no conflicts of interest.' },
  { icon: Heart, title: 'Client First', desc: 'Your needs drive every decision. We measure success by your satisfaction, not our commission.' },
  { icon: Target, title: 'Excellence', desc: 'We raise the bar in every interaction, delivering service that consistently exceeds expectations.' },
  { icon: Eye, title: 'Transparency', desc: 'Full disclosure on every property: legal status, market value, and honest assessment.' },
]

export default function AboutClient() {
  return (
    <div className="pt-20 min-h-screen" style={{ background: '#FFFFFF' }}>

      {/* ── Hero — Light Navy (same as properties page header) ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#1E3A5F' }}>
        {/* dot pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        {/* red top line */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{
          background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 35%, transparent 65%)',
        }} />
        {/* subtle red glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{
            background: 'rgba(230,57,70,0.12)',
            border: '1px solid rgba(230,57,70,0.30)',
          }}>
            <Building2 className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
            <span className="text-sm font-semibold" style={{ color: '#E63946' }}>Est. 2009 — Lucknow</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
            About Fincap Sol
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.60)' }}>
            For over 15 years, we have been the most trusted name in Lucknow real estate,
            helping thousands of families and investors find their perfect property.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-white" style={{ borderBottom: '1px solid #E8ECF2' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-bold mb-2" style={{ color: '#E63946' }}>
                  {stat.value}
                </p>
                <p className="text-sm font-medium" style={{ color: '#6B7280' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2"
                style={{ color: '#E63946' }}>
                <span className="w-8 h-px inline-block" style={{ background: '#E63946' }} />
                Our Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0B1F3A' }}>
                Built on Trust,<br />Driven by Excellence
              </h2>
              <div className="space-y-5 leading-relaxed" style={{ color: '#6B7280' }}>
                <p>
                  Fincap Sol was founded in 2009 with a single, powerful vision: to bring integrity,
                  transparency, and expertise to Lucknow&apos;s real estate market. At a time when buyers
                  were navigating a fragmented and often opaque market, we stepped in as trusted guides.
                </p>
                <p>
                  Starting from a small office in Hazratganj, we grew by word of mouth — each happy client
                  sending three more. Today, Fincap Sol is Lucknow&apos;s most recognized real estate
                  advisory firm, with a team of 40+ experts across residential, commercial, and investment divisions.
                </p>
                <p>
                  We have closed over ₹500 crore in transactions, helped 2,500+ families find their dream homes,
                  and won multiple national awards for service excellence.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {['RERA Registered', 'ISO 9001:2015', 'Award-Winning Team', '4.9/5 Rating'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
                    <CheckCircle2 className="w-4 h-4" style={{ color: '#E63946' }} />
                    <span className="text-sm font-semibold" style={{ color: '#0B1F3A' }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="rounded-2xl h-80 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)',
                  boxShadow: '0 8px 40px rgba(11,31,58,0.20)',
                }}>
                {/* dot pattern */}
                <div className="absolute inset-0 opacity-[0.08]" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Building2 className="w-16 h-16 mx-auto mb-4" style={{ color: '#E63946', opacity: 0.8 }} />
                    <p className="font-serif text-4xl font-bold text-white">15+</p>
                    <p className="font-medium mt-1" style={{ color: 'rgba(255,255,255,0.60)' }}>Years of Excellence</p>
                  </div>
                </div>
                {/* red bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{
                  background: 'linear-gradient(90deg, #E63946, #EF5A65, transparent)',
                }} />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4"
                style={{ border: '1px solid #E8ECF2', boxShadow: '0 8px 24px rgba(11,31,58,0.12)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#FEE8EA' }}>
                    <Award className="w-5 h-5" style={{ color: '#E63946' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Best Broker</p>
                    <p className="text-xs" style={{ color: '#6B7280' }}>India Property Awards 2023</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-4"
                style={{ border: '1px solid #E8ECF2', boxShadow: '0 8px 24px rgba(11,31,58,0.12)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#DCFCE7' }}>
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>₹500 Cr+</p>
                    <p className="text-xs" style={{ color: '#6B7280' }}>Transactions Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values — White with navy cards ── */}
      <section className="py-20 md:py-28" style={{ background: '#F5F7FA', borderTop: '1px solid #E8ECF2', borderBottom: '1px solid #E8ECF2' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#E63946' }}>
              Our Foundation
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon
              return (
                <div key={i} className="bg-white p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    border: '1px solid #E8ECF2',
                    boxShadow: '0 2px 16px rgba(11,31,58,0.06)',
                  }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: '#FEE8EA' }}>
                    <Icon className="w-7 h-7" style={{ color: '#E63946' }} />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-3" style={{ color: '#0B1F3A' }}>
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
      <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#E63946' }}>
              Our Journey
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
              Key Milestones
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px" style={{ background: '#E8ECF2' }} />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex flex-col sm:flex-row gap-6 sm:gap-0 items-start ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                >
                  <div className={`sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-16 sm:text-right' : 'sm:pl-16'} pl-16 sm:pl-0`}>
                    <div className="bg-white rounded-2xl p-6 transition-shadow hover:shadow-lg"
                      style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                      <span className="text-white text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: '#E63946' }}>
                        {m.year}
                      </span>
                      <h3 className="font-serif font-semibold text-lg mt-3 mb-2" style={{ color: '#0B1F3A' }}>
                        {m.title}
                      </h3>
                      <p className="text-sm" style={{ color: '#6B7280' }}>{m.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4"
                    style={{ background: '#E63946', borderColor: '#FFFFFF', marginTop: '22px', boxShadow: '0 0 0 2px #E63946' }} />
                  <div className="sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 md:py-28" style={{ background: '#F5F7FA', borderTop: '1px solid #E8ECF2' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#E63946' }}>
              The People Behind Fincap Sol
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#0B1F3A' }}>
              Our Expert Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name}
                className="bg-white p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg font-serif"
                    style={{ background: 'linear-gradient(135deg, #0B1F3A, #1E3A5F)' }}>
                    {member.initials}
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-base" style={{ color: '#0B1F3A' }}>
                      {member.name}
                    </p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{member.role}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ background: '#EBF0F7', color: '#0B1F3A', border: '1px solid #E8ECF2' }}>
                    {member.speciality}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: '#E63946' }}>{member.exp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: '#FFFFFF', borderTop: '1px solid #E8ECF2' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-4" style={{ color: '#0B1F3A' }}>
            Ready to Work With Us?
          </h2>
          <p className="mb-8" style={{ color: '#6B7280' }}>
            Join thousands of satisfied clients who found their dream property with Fincap Sol.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties"
              className="font-semibold px-8 py-4 rounded-lg text-white flex items-center justify-center gap-2 transition-all"
              style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
              Explore Properties <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact"
              className="font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all"
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