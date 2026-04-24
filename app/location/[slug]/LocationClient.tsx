// 'use client'

// import Link from 'next/link'
// import {
//   MapPin, TrendingUp, Building2, ArrowRight, ChevronRight,
//   Home, Users, Star, Phone
// } from 'lucide-react'
// import { locations, properties } from '@/lib/data'
// import PropertyCard from '@/components/PropertyCard'

// const gradientMap: Record<string, string> = {
//   'gomti-nagar': 'linear-gradient(135deg, #1e3a5f 0%, #2d6a8a 100%)',
//   'hazratganj': 'linear-gradient(135deg, #2a1a4a 0%, #4a2d6a 100%)',
//   'shaheed-path': 'linear-gradient(135deg, #1a3a2a 0%, #2d5a3d 100%)',
//   'aliganj': 'linear-gradient(135deg, #2a1020 0%, #5a2040 100%)',
//   'sultanpur-road': 'linear-gradient(135deg, #3d1f00 0%, #6b3a10 100%)',
//   'vibhuti-khand': 'linear-gradient(135deg, #0a1a2a 0%, #1a3a5a 100%)',
// }

// const priceData: Record<string, { year: string; price: string; change: number }[]> = {
//   'gomti-nagar': [
//     { year: '2021', price: '₹62L', change: 0 },
//     { year: '2022', price: '₹70L', change: 12.9 },
//     { year: '2023', price: '₹78L', change: 11.4 },
//     { year: '2024', price: '₹85L', change: 8.97 },
//   ],
//   'hazratganj': [
//     { year: '2021', price: '₹88L', change: 0 },
//     { year: '2022', price: '₹95L', change: 7.9 },
//     { year: '2023', price: '₹1.04Cr', change: 9.5 },
//     { year: '2024', price: '₹1.1Cr', change: 5.1 },
//   ],
//   'default': [
//     { year: '2021', price: '₹50L', change: 0 },
//     { year: '2022', price: '₹58L', change: 16 },
//     { year: '2023', price: '₹65L', change: 12 },
//     { year: '2024', price: '₹75L', change: 15.4 },
//   ],
// }

// export default function LocationClient({ slug }: { slug: string }) {
//   const location = locations.find((l) => l.slug === slug)

//   if (!location) {
//     return (
//       <div className="pt-32 min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="font-serif text-3xl font-bold text-charcoal mb-4">Location Not Found</h1>
//           <Link href="/properties" className="text-gold hover:underline">Back to Properties</Link>
//         </div>
//       </div>
//     )
//   }

//   const locationProperties = properties.filter((p) =>
//     p.location.toLowerCase().includes(location.name.toLowerCase())
//   )
//   const priceHistory = priceData[slug] || priceData['default']
//   const bg = gradientMap[slug] || 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'

//   const highlights = [
//     { icon: Home, label: 'Avg. Price', value: location.avgPrice },
//     { icon: TrendingUp, label: 'Price Growth', value: location.priceChange },
//     { icon: Building2, label: 'Properties', value: `${location.properties}+` },
//     { icon: Users, label: 'Segment', value: location.type },
//   ]

//   return (
//     <div className="pt-20 bg-ivory min-h-screen">
//       {/* Hero */}
//       <div className="relative py-20 md:py-28 overflow-hidden" style={{ background: bg }}>
//         <div className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
//             backgroundSize: '60px 60px',
//           }}
//         />
//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
//           {/* <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
//             <Link href="/" className="hover:text-white transition-colors">Home</Link>
//             <ChevronRight className="w-3.5 h-3.5" />
//             <span className="text-white/60">Location</span>
//             <ChevronRight className="w-3.5 h-3.5" />
//             <span className="text-white font-medium">{location.name}</span>
//           </div> */}
//           <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
//             <div>
//               <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
//                 <MapPin className="w-4 h-4 text-gold" />
//                 <span className="text-white/90 text-sm font-medium">Lucknow, Uttar Pradesh</span>
//               </div>
//               <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">{location.name}</h1>
//               <p className="text-white/65 text-lg max-w-xl leading-relaxed">{location.description}</p>
//             </div>
//             <div className="flex items-center gap-4 shrink-0">
//               <div className="bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-4 text-center">
//                 <p className="text-white font-serif text-3xl font-bold">{location.avgPrice}</p>
//                 <p className="text-white/60 text-xs mt-1">Average Price</p>
//               </div>
//               <div className="bg-green-500/80 backdrop-blur-sm rounded-2xl px-6 py-4 text-center">
//                 <p className="text-white font-serif text-3xl font-bold">{location.priceChange}</p>
//                 <p className="text-white/80 text-xs mt-1">YoY Growth</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
//         {/* Highlights */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
//           {highlights.map(({ icon: Icon, label, value }) => (
//             <div key={label} className="bg-white rounded-2xl p-6 shadow-card border border-stone-border/30 flex items-center gap-4">
//               <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
//                 <Icon className="w-6 h-6 text-gold" />
//               </div>
//               <div>
//                 <p className="text-xl font-bold font-serif text-charcoal">{value}</p>
//                 <p className="text-xs text-charcoal-muted mt-0.5">{label}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//           <div className="lg:col-span-2 space-y-10">
//             {/* Overview */}
//             <div className="bg-white rounded-2xl p-8 shadow-card border border-stone-border/30">
//               <h2 className="font-serif text-2xl font-semibold text-charcoal mb-5">Area Overview</h2>
//               <p className="text-charcoal-muted leading-relaxed mb-4">
//                 <strong className="text-charcoal">{location.name}</strong> is one of Lucknow&apos;s most desirable residential
//                 destinations. Known for excellent connectivity, green surroundings, and premium infrastructure,
//                 this area attracts homebuyers and investors alike.
//               </p>
//               <p className="text-charcoal-muted leading-relaxed mb-4">
//                 The area offers a perfect blend of modern amenities and comfortable living. With well-planned roads,
//                 proximity to commercial centers, reputed schools and hospitals, {location.name} continues to see
//                 strong demand across all property segments.
//               </p>
//               <p className="text-charcoal-muted leading-relaxed">
//                 Real estate prices here have shown consistent appreciation over the past 5 years, driven by
//                 infrastructure development, rising employment opportunities, and limited land availability.
//               </p>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
//                 {['🏫 Top-rated Schools', '🏥 Hospitals Nearby', '🛒 Shopping Malls', '🚇 Metro Access', '🌳 Green Parks', '🏢 Business Hubs'].map((item) => (
//                   <div key={item} className="bg-ivory p-3 rounded-xl text-sm text-charcoal font-medium">{item}</div>
//                 ))}
//               </div>
//             </div>

//             {/* Price Trends */}
//             <div className="bg-white rounded-2xl p-8 shadow-card border border-stone-border/30">
//               <div className="flex items-center justify-between mb-8">
//                 <h2 className="font-serif text-2xl font-semibold text-charcoal">Price Trends</h2>
//                 <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
//                   <TrendingUp className="w-4 h-4" />Consistent Growth
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 {priceHistory.map((item, i) => (
//                   <div key={item.year} className="flex items-center gap-4">
//                     <div className="w-12 text-sm font-semibold text-charcoal-muted">{item.year}</div>
//                     <div className="flex-1 relative h-10 bg-ivory-dark rounded-xl overflow-hidden">
//                       <div className="h-full rounded-xl flex items-center px-4 transition-all duration-700"
//                         style={{
//                           width: `${Math.max(30, (i + 1) * 22 + 20)}%`,
//                           background: 'linear-gradient(135deg, #C9952A 0%, #E0B048 100%)',
//                         }}>
//                         <span className="text-white text-xs font-bold">{item.price}</span>
//                       </div>
//                     </div>
//                     {i > 0 && <div className="w-16 text-right text-xs font-semibold text-green-600">+{item.change.toFixed(1)}%</div>}
//                   </div>
//                 ))}
//               </div>
//               <p className="text-xs text-charcoal-muted mt-6">* Indicative averages. Actual prices may vary.</p>
//             </div>

//             {/* Properties */}
//             <div>
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="font-serif text-2xl font-semibold text-charcoal">Properties in {location.name}</h2>
//                 <Link href="/properties" className="text-gold text-sm font-semibold flex items-center gap-1 hover:gap-3 transition-all">
//                   View All <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </div>
//               {locationProperties.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {locationProperties.map((p) => <PropertyCard key={p.id} property={p} />)}
//                 </div>
//               ) : (
//                 <div className="bg-white rounded-2xl p-12 text-center shadow-card border border-stone-border/30">
//                   <Building2 className="w-12 h-12 text-charcoal-muted mx-auto mb-4" />
//                   <p className="font-semibold text-charcoal mb-2">More properties coming soon</p>
//                   <Link href="/properties" className="text-gold font-semibold text-sm hover:underline">Browse all properties →</Link>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl p-6 shadow-card border border-stone-border/30">
//               <h3 className="font-serif text-lg font-semibold text-charcoal mb-5">Market Snapshot</h3>
//               <div className="space-y-4">
//                 {[
//                   { label: 'Avg. Price (2BHK)', value: '₹65–85 Lakh' },
//                   { label: 'Avg. Price (3BHK)', value: '₹90L–1.3 Cr' },
//                   { label: 'Avg. Rent (2BHK)', value: '₹18K–28K/mo' },
//                   { label: 'Price/sq.ft', value: '₹4,500–7,500' },
//                   { label: 'Rental Yield', value: '3.2–4.5% p.a.' },
//                 ].map((stat) => (
//                   <div key={stat.label} className="flex items-center justify-between py-3 border-b border-stone-border last:border-0">
//                     <span className="text-sm text-charcoal-muted">{stat.label}</span>
//                     <span className="text-sm font-semibold text-charcoal">{stat.value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-card border border-stone-border/30">
//               <h3 className="font-serif text-lg font-semibold text-charcoal mb-5">Nearby Locations</h3>
//               <div className="space-y-2">
//                 {locations.filter((l) => l.slug !== slug).slice(0, 4).map((l) => (
//                   <Link key={l.slug} href={`/location/${l.slug}`}
//                     className="flex items-center justify-between p-3 rounded-xl hover:bg-ivory transition-colors group">
//                     <div className="flex items-center gap-3">
//                       <MapPin className="w-4 h-4 text-gold" />
//                       <span className="text-sm font-medium text-charcoal group-hover:text-gold transition-colors">{l.name}</span>
//                     </div>
//                     <span className="text-xs text-green-600 font-semibold">{l.priceChange}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             <div className="rounded-2xl p-6 text-white overflow-hidden relative" style={{ background: bg }}>
//               <div className="absolute inset-0 opacity-10"
//                 style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
//               <div className="relative z-10">
//                 <Star className="w-8 h-8 text-gold mb-4" />
//                 <h3 className="font-serif text-xl font-semibold mb-2">Looking for a property in {location.name}?</h3>
//                 <p className="text-white/70 text-sm mb-5">Our experts know this area inside out. Get free consultation.</p>
//                 <Link href="/contact" className="block bg-white text-charcoal font-semibold text-sm py-3 rounded-xl text-center hover:bg-ivory transition-colors mb-3">
//                   Get Free Consultation
//                 </Link>
//                 <a href="tel:+919876543210"
//                   className="flex items-center justify-center gap-2 bg-white/15 text-white font-semibold text-sm py-3 rounded-xl hover:bg-white/25 transition-colors">
//                   <Phone className="w-4 h-4" /> +91 98765 43210
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom CTA */}
//       <section className="py-16 bg-charcoal">
//         <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
//           <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Ready to Invest in {location.name}?</h2>
//           <p className="text-white/60 mb-8 max-w-lg mx-auto">Talk to our area specialist today. Best prices, zero stress.</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact" className="bg-gold text-white font-semibold px-8 py-4 rounded-full hover:bg-gold-dark transition-colors">
//               Schedule Site Visit
//             </Link>
//             <Link href="/properties" className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
//               Browse Properties
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
  MapPin, TrendingUp, Building2, ArrowRight, ChevronRight,
  Home, Users, Star, Phone
} from 'lucide-react'
import { locations, properties } from '@/lib/data'
import PropertyCard from '@/components/PropertyCard'

const gradientMap: Record<string, string> = {
  'gomti-nagar': 'linear-gradient(135deg, #1e3a5f 0%, #2d6a8a 100%)',
  'golf-city': 'linear-gradient(135deg, #2a1a4a 0%, #4a2d6a 100%)',
  'shaheed-path': 'linear-gradient(135deg, #1a3a2a 0%, #2d5a3d 100%)',
  'aliganj': 'linear-gradient(135deg, #2a1020 0%, #5a2040 100%)',
  'sultanpur-road': 'linear-gradient(135deg, #3d1f00 0%, #6b3a10 100%)',
  'vibhuti-khand': 'linear-gradient(135deg, #0a1a2a 0%, #1a3a5a 100%)',
}

const priceData: Record<string, { year: string; price: string; change: number }[]> = {
  'gomti-nagar': [
    { year: '2021', price: '₹62L', change: 0 },
    { year: '2022', price: '₹70L', change: 12.9 },
    { year: '2023', price: '₹78L', change: 11.4 },
    { year: '2024', price: '₹85L', change: 8.97 },
  ],
  'hazratganj': [
    { year: '2021', price: '₹88L', change: 0 },
    { year: '2022', price: '₹95L', change: 7.9 },
    { year: '2023', price: '₹1.04Cr', change: 9.5 },
    { year: '2024', price: '₹1.1Cr', change: 5.1 },
  ],
  'default': [
    { year: '2021', price: '₹50L', change: 0 },
    { year: '2022', price: '₹58L', change: 16 },
    { year: '2023', price: '₹65L', change: 12 },
    { year: '2024', price: '₹75L', change: 15.4 },
  ],
}

export default function LocationClient({ slug }: { slug: string }) {
  const location = locations.find((l) => l.slug === slug)

  if (!location) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-4">Location Not Found</h1>
          <Link href="/properties" className="text-gold hover:underline">Back to Properties</Link>
        </div>
      </div>
    )
  }

  const locationProperties = properties.filter((p) =>
    p.location.toLowerCase().includes(location.name.toLowerCase())
  )
  const priceHistory = priceData[slug] || priceData['default']
  const bg = gradientMap[slug] || 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'

  const highlights = [
    { icon: Home, label: 'Avg. Price', value: location.avgPrice },
    { icon: TrendingUp, label: 'Price Growth', value: location.priceChange },
    { icon: Building2, label: 'Properties', value: `${location.properties}+` },
    { icon: Users, label: 'Segment', value: location.type },
  ]

  return (
    <div className="pt-20 bg-ivory min-h-screen">

      {/* ── Hero ── */}
      <div className="relative py-14 sm:py-20 md:py-28 overflow-hidden" style={{ background: bg }}>
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold shrink-0" />
                <span className="text-white/90 text-xs sm:text-sm font-medium">Lucknow, Uttar Pradesh</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
                {location.name}
              </h1>
              <p className="text-white/65 text-base sm:text-lg max-w-xl leading-relaxed">
                {location.description}
              </p>
            </div>

            {/* Stats — row on mobile, column stack on lg */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-center">
                <p className="text-white font-serif text-2xl sm:text-3xl font-bold">{location.avgPrice}</p>
                <p className="text-white/60 text-[10px] sm:text-xs mt-1">Average Price</p>
              </div>
              <div className="bg-green-500/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-center">
                <p className="text-white font-serif text-2xl sm:text-3xl font-bold">{location.priceChange}</p>
                <p className="text-white/80 text-[10px] sm:text-xs mt-1">YoY Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Highlights — 2 col mobile, 4 col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-10 sm:mb-16">
          {highlights.map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-card border border-stone-border/30 flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div className="min-w-0">
                <p className="text-base sm:text-xl font-bold font-serif text-charcoal truncate">{value}</p>
                <p className="text-[10px] sm:text-xs text-charcoal-muted mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grid — single col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">

          {/* ── Left column ── */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-10">

            {/* Overview */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-card border border-stone-border/30">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal mb-4 sm:mb-5">
                Area Overview
              </h2>
              <p className="text-charcoal-muted leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                <strong className="text-charcoal">{location.name}</strong> is one of Lucknow&apos;s most desirable
                residential destinations. Known for excellent connectivity, green surroundings, and premium
                infrastructure, this area attracts homebuyers and investors alike.
              </p>
              <p className="text-charcoal-muted leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                The area offers a perfect blend of modern amenities and comfortable living. With well-planned roads,
                proximity to commercial centers, reputed schools and hospitals, {location.name} continues to see
                strong demand across all property segments.
              </p>
              <p className="text-charcoal-muted leading-relaxed text-sm sm:text-base">
                Real estate prices here have shown consistent appreciation over the past 5 years, driven by
                infrastructure development, rising employment opportunities, and limited land availability.
              </p>
              {/* Amenity chips — 2 col mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-5 sm:mt-6">
                {['🏫 Top-rated Schools', '🏥 Hospitals Nearby', '🛒 Shopping Malls', '🚇 Metro Access', '🌳 Green Parks', '🏢 Business Hubs'].map((item) => (
                  <div key={item} className="bg-ivory p-2.5 sm:p-3 rounded-lg sm:rounded-xl text-xs sm:text-sm text-charcoal font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Price Trends */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-card border border-stone-border/30">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal">Price Trends</h2>
                <div className="flex items-center gap-1.5 text-green-600 text-xs sm:text-sm font-semibold">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />Consistent Growth
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {priceHistory.map((item, i) => (
                  <div key={item.year} className="flex items-center gap-2 sm:gap-4">
                    <div className="w-10 sm:w-12 text-xs sm:text-sm font-semibold text-charcoal-muted shrink-0">
                      {item.year}
                    </div>
                    <div className="flex-1 relative h-8 sm:h-10 bg-ivory-dark rounded-lg sm:rounded-xl overflow-hidden">
                      <div className="h-full rounded-lg sm:rounded-xl flex items-center px-3 sm:px-4 transition-all duration-700"
                        style={{
                          width: `${Math.max(30, (i + 1) * 22 + 20)}%`,
                          background: 'linear-gradient(135deg, #C9952A 0%, #E0B048 100%)',
                        }}>
                        <span className="text-white text-[10px] sm:text-xs font-bold">{item.price}</span>
                      </div>
                    </div>
                    {i > 0 && (
                      <div className="w-12 sm:w-16 text-right text-[10px] sm:text-xs font-semibold text-green-600 shrink-0">
                        +{item.change.toFixed(1)}%
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-[10px] sm:text-xs text-charcoal-muted mt-4 sm:mt-6">
                * Indicative averages. Actual prices may vary.
              </p>
            </div>

            {/* Properties */}
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal">
                  Properties in {location.name}
                </h2>
                <Link href="/properties"
                  className="text-gold text-xs sm:text-sm font-semibold flex items-center gap-1 hover:gap-3 transition-all shrink-0">
                  View All <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
              {locationProperties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {locationProperties.map((p) => <PropertyCard key={p.id} property={p} />)}
                </div>
              ) : (
                <div className="bg-white rounded-xl sm:rounded-2xl p-8 sm:p-12 text-center shadow-card border border-stone-border/30">
                  <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-charcoal-muted mx-auto mb-4" />
                  <p className="font-semibold text-charcoal mb-2 text-sm sm:text-base">More properties coming soon</p>
                  <Link href="/properties" className="text-gold font-semibold text-sm hover:underline">
                    Browse all properties →
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* ── Sidebar — below content on mobile ── */}
          <div className="space-y-5 sm:space-y-6">

            {/* Market Snapshot */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-card border border-stone-border/30">
              <h3 className="font-serif text-base sm:text-lg font-semibold text-charcoal mb-4 sm:mb-5">
                Market Snapshot
              </h3>
              <div className="space-y-0">
                {[
                  { label: 'Avg. Price (2BHK)', value: '₹65–85 Lakh' },
                  { label: 'Avg. Price (3BHK)', value: '₹90L–1.3 Cr' },
                  { label: 'Avg. Rent (2BHK)', value: '₹18K–28K/mo' },
                  { label: 'Price/sq.ft', value: '₹4,500–7,500' },
                  { label: 'Rental Yield', value: '3.2–4.5% p.a.' },
                ].map((stat) => (
                  <div key={stat.label}
                    className="flex items-center justify-between py-3 border-b border-stone-border last:border-0">
                    <span className="text-xs sm:text-sm text-charcoal-muted">{stat.label}</span>
                    <span className="text-xs sm:text-sm font-semibold text-charcoal">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Locations */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-card border border-stone-border/30">
              <h3 className="font-serif text-base sm:text-lg font-semibold text-charcoal mb-4 sm:mb-5">
                Nearby Locations
              </h3>
              <div className="space-y-1.5 sm:space-y-2">
                {locations.filter((l) => l.slug !== slug).slice(0, 4).map((l) => (
                  <Link key={l.slug} href={`/location/${l.slug}`}
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg sm:rounded-xl hover:bg-ivory transition-colors group">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-charcoal group-hover:text-gold transition-colors">
                        {l.name}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-green-600 font-semibold shrink-0">
                      {l.priceChange}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 text-white overflow-hidden relative"
              style={{ background: bg }}>
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
              <div className="relative z-10">
                <Star className="w-7 h-7 sm:w-8 sm:h-8 text-gold mb-3 sm:mb-4" />
                <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2">
                  Looking for a property in {location.name}?
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mb-4 sm:mb-5">
                  Our experts know this area inside out. Get free consultation.
                </p>
                <Link href="/contact"
                  className="block bg-white text-charcoal font-semibold text-xs sm:text-sm py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-center hover:bg-ivory transition-colors mb-2.5 sm:mb-3">
                  Get Free Consultation
                </Link>
                <a href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 bg-white/15 text-white font-semibold text-xs sm:text-sm py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-white/25 transition-colors">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> +91 98765 43210
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <section className="py-12 sm:py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Invest in {location.name}?
          </h2>
          <p className="text-white/60 mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">
            Talk to our area specialist today. Best prices, zero stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact"
              className="bg-gold text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-gold-dark transition-colors text-sm sm:text-base">
              Schedule Site Visit
            </Link>
            <Link href="/properties"
              className="border-2 border-white/30 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base">
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
