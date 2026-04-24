// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
// import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

// // ─── Banner Data — Client apna data yahan update kare ────────────────────────
// const banners = [
//     {
//         id: 1,
//         badge: '✦ New Launch',
//         badgeColor: '#E63946',
//         title: 'Lakeside Residences',
//         subtitle: '3 & 4 BHK Ultra-Luxury Apartments',
//         location: 'Sultanpur Road, Lucknow',
//         price: 'Starting ₹85 Lakh',
//         tag: 'Limited Units',
//         tagColor: '#D97706',
//         cta: 'Explore Project',
//         href: '/properties',
//         // Gradient background (replace with real image using bgImage field)
//         // bgGradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 60%, #2D5282 100%)',
//         bgImage: '/banners/banner 1.png',
//         accentColor: '#E63946',
//         stats: [
//             { label: 'Units', value: '240' },
//             { label: 'Floors', value: '28' },
//             { label: 'Possession', value: 'Dec 2026' },
//         ],
//     },
//     {
//         id: 2,
//         badge: '✓ Ready to Move',
//         badgeColor: '#059669',
//         title: 'Gomti Greens',
//         subtitle: '2 & 3 BHK Premium Apartments',
//         location: 'Gomti Nagar Extension',
//         price: 'Starting ₹65 Lakh',
//         tag: 'Ready Possession',
//         tagColor: '#059669',
//         cta: 'Book Site Visit',
//         href: '/properties',
//         bgGradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 60%, #2d6a3a 100%)',
//         bgImage: '/banners/banner2.jpg',
//         accentColor: '#34D399',
//         stats: [
//             { label: 'Units', value: '180' },
//             { label: 'Floors', value: '18' },
//             { label: 'Possession', value: 'Immediate' },
//         ],
//     },
//     {
//         id: 3,
//         badge: '🏗 Under Construction',
//         badgeColor: '#D97706',
//         title: 'Royal Boulevard',
//         subtitle: 'Luxury Villas & Penthouses',
//         location: 'Shaheed Path, Lucknow',
//         price: 'Starting ₹1.8 Cr',
//         tag: 'Best Investment',
//         tagColor: '#2563EB',
//         cta: 'View Details',
//         href: '/properties',
//         bgGradient: 'linear-gradient(135deg, #1a0a00 0%, #5a2d00 60%, #8a4500 100%)',
//         bgImage: '/banners/banner3.jpg',
//         accentColor: '#FBBF24',
//         stats: [
//             { label: 'Units', value: '60' },
//             { label: 'Floors', value: '4G+PH' },
//             { label: 'Possession', value: 'Mar 2027' },
//         ],
//     },
// ]

// export default function PropertyBannerSlider() {
//     const [current, setCurrent] = useState(0)
//     const [isPlaying, setIsPlaying] = useState(true)
//     const [progress, setProgress] = useState(0)
//     const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
//     const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
//     const DURATION = 5000 // 5 seconds per slide

//     const startAutoPlay = () => {
//         if (intervalRef.current) clearInterval(intervalRef.current)
//         if (progressRef.current) clearInterval(progressRef.current)

//         setProgress(0)

//         progressRef.current = setInterval(() => {
//             setProgress(p => {
//                 if (p >= 100) return 100
//                 return p + (100 / (DURATION / 50))
//             })
//         }, 50)

//         intervalRef.current = setInterval(() => {
//             setCurrent(c => (c + 1) % banners.length)
//             setProgress(0)
//         }, DURATION)
//     }

//     useEffect(() => {
//         if (isPlaying) startAutoPlay()
//         return () => {
//             if (intervalRef.current) clearInterval(intervalRef.current)
//             if (progressRef.current) clearInterval(progressRef.current)
//         }
//     }, [isPlaying, current])

//     const goTo = (idx: number) => {
//         setCurrent(idx)
//         setProgress(0)
//         if (isPlaying) startAutoPlay()
//     }

//     const prev = () => goTo((current - 1 + banners.length) % banners.length)
//     const next = () => goTo((current + 1) % banners.length)

//     const banner = banners[current]

//     return (
//         <section className="py-16 md:py-20" style={{ background: '#F5F7FA' }}>
//             <div className="max-w-7xl mx-auto px-5 sm:px-8">

//                 {/* Section Label */}
//                 <div className="flex items-center justify-between mb-6">
//                     <div>
//                         <p className="text-sm font-semibold uppercase tracking-wider mb-1 flex items-center gap-2"
//                             style={{ color: '#E63946' }}>
//                             <span className="w-6 h-px inline-block" style={{ background: '#E63946' }} />
//                             Featured Launches
//                         </p>
//                         <h2 className="font-serif text-2xl md:text-3xl font-bold" style={{ color: '#0B1F3A' }}>
//                             New &amp; Trending Projects
//                         </h2>
//                     </div>
//                     {/* Prev / Next */}
//                     <div className="flex items-center gap-2">
//                         <button onClick={prev}
//                             className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
//                             style={{ border: '1.5px solid #E8ECF2', background: '#FFFFFF', color: '#0B1F3A' }}
//                             onMouseEnter={e => { e.currentTarget.style.background = '#0B1F3A'; e.currentTarget.style.color = '#fff' }}
//                             onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0B1F3A' }}
//                         >
//                             <ChevronLeft className="w-5 h-5" />
//                         </button>
//                         <button onClick={next}
//                             className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
//                             style={{ border: '1.5px solid #E8ECF2', background: '#FFFFFF', color: '#0B1F3A' }}
//                             onMouseEnter={e => { e.currentTarget.style.background = '#0B1F3A'; e.currentTarget.style.color = '#fff' }}
//                             onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0B1F3A' }}
//                         >
//                             <ChevronRight className="w-5 h-5" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Banner */}
//                 <div className="relative rounded-2xl overflow-hidden" style={{ height: '420px', boxShadow: '0 8px 40px rgba(11,31,58,0.18)' }}>

//                     {/* Slides */}
//                     {banners.map((b, idx) => (
//                         <div
//                             key={b.id}
//                             className="absolute inset-0 transition-opacity duration-700"
//                             style={{ opacity: idx === current ? 1 : 0, pointerEvents: idx === current ? 'auto' : 'none' }}
//                         >
//                             {/* Background */}
//                             {b.bgImage ? (
//                                 <>
//                                     <div className="absolute inset-0" style={{
//                                         backgroundImage: `url(${b.bgImage})`,
//                                         backgroundSize: 'cover',
//                                         backgroundPosition: 'center',
//                                         transition: 'transform 0.5s ease',
//                                     }} />
//                                     {/* Gradient overlay on top of image for text readability */}
//                                     <div className="absolute inset-0" style={{
//                                         background: 'linear-gradient(105deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.40) 55%, rgba(0,0,0,0.20) 100%)',
//                                     }} />
//                                 </>
//                             ) : (
//                                 <div className="absolute inset-0" style={{ background: b.bgGradient }} />
//                             )}

//                             {/* Dot pattern */}
//                             <div className="absolute inset-0 opacity-[0.07]" style={{
//                                 backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//                                 backgroundSize: '32px 32px',
//                             }} />

//                             {/* Geometric accent — right side */}
//                             <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden md:block opacity-10" style={{
//                                 backgroundImage: `
//                   linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
//                   linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
//                 `,
//                                 backgroundSize: '60px 60px',
//                             }} />

//                             {/* Accent line left */}
//                             <div className="absolute left-0 top-0 bottom-0 w-1" style={{
//                                 background: `linear-gradient(180deg, transparent 0%, ${b.accentColor} 30%, ${b.accentColor} 70%, transparent 100%)`,
//                                 opacity: 0.8,
//                             }} />
//                         </div>
//                     ))}

//                     {/* Content — always rendered, data from current banner */}
//                     <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">

//                         {/* Top row */}
//                         <div className="flex items-start justify-between">
//                             <div className="flex items-center gap-3">
//                                 <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
//                                     style={{ background: banner.badgeColor }}>
//                                     {banner.badge}
//                                 </span>
//                                 <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
//                                     style={{ background: banner.tagColor }}>
//                                     {banner.tag}
//                                 </span>
//                             </div>

//                             {/* Slide counter */}
//                             <div className="text-white/60 text-sm font-medium">
//                                 {String(current + 1).padStart(2, '0')} / {String(banners.length).padStart(2, '0')}
//                             </div>
//                         </div>

//                         {/* Middle — Title */}
//                         <div>
//                             <p className="text-sm font-medium mb-3" style={{ color: 'rgba(255,255,255,0.65)' }}>
//                                 {banner.subtitle}
//                             </p>
//                             <h3 className="font-serif font-bold text-white mb-3"
//                                 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
//                                 {banner.title}
//                             </h3>
//                             <div className="flex items-center gap-2 mb-5">
//                                 <MapPin className="w-4 h-4 shrink-0" style={{ color: banner.accentColor }} />
//                                 <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{banner.location}</span>
//                             </div>

//                             {/* Stats strip */}
//                             <div className="flex items-center gap-6 mb-7 flex-wrap">
//                                 {banner.stats.map(s => (
//                                     <div key={s.label}>
//                                         <p className="font-serif font-bold text-xl text-white">{s.value}</p>
//                                         <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</p>
//                                     </div>
//                                 ))}
//                                 <div className="h-8 w-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
//                                 <div>
//                                     <p className="font-serif font-bold text-xl" style={{ color: banner.accentColor }}>{banner.price}</p>
//                                     <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>Starting Price</p>
//                                 </div>
//                             </div>

//                             {/* CTA */}
//                             <Link
//                                 href={banner.href}
//                                 className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all group/btn"
//                                 style={{ background: '#E63946', boxShadow: '0 4px 20px rgba(230,57,70,0.40)' }}
//                             >
//                                 {banner.cta}
//                                 <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                             </Link>
//                         </div>

//                         {/* Bottom — Dots + Progress */}
//                         <div className="flex items-center gap-3">
//                             {banners.map((_, idx) => (
//                                 <button
//                                     key={idx}
//                                     onClick={() => goTo(idx)}
//                                     className="relative overflow-hidden transition-all duration-300"
//                                     style={{
//                                         height: '4px',
//                                         width: idx === current ? '40px' : '16px',
//                                         borderRadius: '100px',
//                                         background: 'rgba(255,255,255,0.30)',
//                                     }}
//                                 >
//                                     {idx === current && (
//                                         <div
//                                             className="absolute left-0 top-0 bottom-0 rounded-full transition-none"
//                                             style={{ width: `${progress}%`, background: '#E63946' }}
//                                         />
//                                     )}
//                                 </button>
//                             ))}

//                             {/* Play/Pause */}
//                             <button
//                                 onClick={() => setIsPlaying(!isPlaying)}
//                                 className="ml-2 text-xs font-medium transition-colors"
//                                 style={{ color: 'rgba(255,255,255,0.50)' }}
//                             >
//                                 {isPlaying ? '⏸ Pause' : '▶ Play'}
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Thumbnail dots — mini preview */}
//                 <div className="flex items-center gap-3 mt-4">
//                     {banners.map((b, idx) => (
//                         <button
//                             key={b.id}
//                             onClick={() => goTo(idx)}
//                             className="flex-1 rounded-xl overflow-hidden transition-all duration-300"
//                             style={{
//                                 height: '60px',
//                                 background: b.bgGradient,
//                                 border: idx === current ? '2px solid #E63946' : '2px solid transparent',
//                                 opacity: idx === current ? 1 : 0.5,
//                                 boxShadow: idx === current ? '0 0 0 2px rgba(230,57,70,0.30)' : 'none',
//                             }}
//                         >
//                             <div className="w-full h-full flex items-end p-2.5" style={{
//                                 background: 'linear-gradient(to top, rgba(0,0,0,0.60), transparent)',
//                             }}>
//                                 <p className="text-white text-xs font-semibold truncate">{b.title}</p>
//                             </div>
//                         </button>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     )
// }


// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
// import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

// // ─── Banner Data — Client apna data yahan update kare ────────────────────────
// const banners = [
//     {
//         id: 1,
//         badge: '✦ New Launch',
//         badgeColor: '#E63946',
//         title: 'Lakeside Residences',
//         subtitle: '3 & 4 BHK Ultra-Luxury Apartments',
//         location: 'Sultanpur Road, Lucknow',
//         price: 'Starting ₹85 Lakh',
//         tag: 'Limited Units',
//         tagColor: '#D97706',
//         cta: 'Explore Project',
//         href: '/properties',
//         // Gradient background (replace with real image using bgImage field)
//         bgGradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 60%, #2D5282 100%)',
//         bgImage: '/banners/banner 1.png',
//         accentColor: '#E63946',
//         stats: [
//             { label: 'Units', value: '240' },
//             { label: 'Floors', value: '28' },
//             { label: 'Possession', value: 'Dec 2026' },
//         ],
//     },
//     {
//         id: 2,
//         badge: '✓ Ready to Move',
//         badgeColor: '#059669',
//         title: 'Gomti Greens',
//         subtitle: '2 & 3 BHK Premium Apartments',
//         location: 'Gomti Nagar Extension',
//         price: 'Starting ₹65 Lakh',
//         tag: 'Ready Possession',
//         tagColor: '#059669',
//         cta: 'Book Site Visit',
//         href: '/properties',
//         bgGradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 60%, #2d6a3a 100%)',
//         bgImage: '/banners/banner 1.png',
//         accentColor: '#34D399',
//         stats: [
//             { label: 'Units', value: '180' },
//             { label: 'Floors', value: '18' },
//             { label: 'Possession', value: 'Immediate' },
//         ],
//     },
//     {
//         id: 3,
//         badge: '🏗 Under Construction',
//         badgeColor: '#D97706',
//         title: 'Royal Boulevard',
//         subtitle: 'Luxury Villas & Penthouses',
//         location: 'Shaheed Path, Lucknow',
//         price: 'Starting ₹1.8 Cr',
//         tag: 'Best Investment',
//         tagColor: '#2563EB',
//         cta: 'View Details',
//         href: '/properties',
//         bgGradient: 'linear-gradient(135deg, #1a0a00 0%, #5a2d00 60%, #8a4500 100%)',
//         bgImage: '/banners/banner 2.png',
//         accentColor: '#FBBF24',
//         stats: [
//             { label: 'Units', value: '60' },
//             { label: 'Floors', value: '4G+PH' },
//             { label: 'Possession', value: 'Mar 2027' },
//         ],
//     },
// ]

// export default function PropertyBannerSlider() {
//     const [current, setCurrent] = useState(0)
//     const [isPlaying, setIsPlaying] = useState(true)
//     const [progress, setProgress] = useState(0)
//     const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
//     const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
//     const DURATION = 5000 // 5 seconds per slide

//     const startAutoPlay = () => {
//         if (intervalRef.current) clearInterval(intervalRef.current)
//         if (progressRef.current) clearInterval(progressRef.current)

//         setProgress(0)

//         progressRef.current = setInterval(() => {
//             setProgress(p => {
//                 if (p >= 100) return 100
//                 return p + (100 / (DURATION / 50))
//             })
//         }, 50)

//         intervalRef.current = setInterval(() => {
//             setCurrent(c => (c + 1) % banners.length)
//             setProgress(0)
//         }, DURATION)
//     }

//     useEffect(() => {
//         if (isPlaying) startAutoPlay()
//         return () => {
//             if (intervalRef.current) clearInterval(intervalRef.current)
//             if (progressRef.current) clearInterval(progressRef.current)
//         }
//     }, [isPlaying, current])

//     const goTo = (idx: number) => {
//         setCurrent(idx)
//         setProgress(0)
//         if (isPlaying) startAutoPlay()
//     }

//     const prev = () => goTo((current - 1 + banners.length) % banners.length)
//     const next = () => goTo((current + 1) % banners.length)

//     const banner = banners[current]

//     return (
//         <section className="py-16 md:py-20" style={{ background: '#F5F7FA' }}>
//             <div className="max-w-7xl mx-auto px-5 sm:px-8">

//                 {/* Section Label */}
//                 <div className="flex items-center justify-between mb-6">
//                     <div>
//                         <p className="text-sm font-semibold uppercase tracking-wider mb-1 flex items-center gap-2"
//                             style={{ color: '#E63946' }}>
//                             <span className="w-6 h-px inline-block" style={{ background: '#E63946' }} />
//                             Featured Launches
//                         </p>
//                         <h2 className="font-serif text-2xl md:text-3xl font-bold" style={{ color: '#0B1F3A' }}>
//                             New & Trending Projects
//                         </h2>
//                     </div>
//                     {/* Prev / Next */}
//                     <div className="flex items-center gap-2">
//                         <button onClick={prev}
//                             className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
//                             style={{ border: '1.5px solid #E8ECF2', background: '#FFFFFF', color: '#0B1F3A' }}
//                             onMouseEnter={e => { e.currentTarget.style.background = '#0B1F3A'; e.currentTarget.style.color = '#fff' }}
//                             onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0B1F3A' }}
//                         >
//                             <ChevronLeft className="w-5 h-5" />
//                         </button>
//                         <button onClick={next}
//                             className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
//                             style={{ border: '1.5px solid #E8ECF2', background: '#FFFFFF', color: '#0B1F3A' }}
//                             onMouseEnter={e => { e.currentTarget.style.background = '#0B1F3A'; e.currentTarget.style.color = '#fff' }}
//                             onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0B1F3A' }}
//                         >
//                             <ChevronRight className="w-5 h-5" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Banner */}
//                 <div className="relative rounded-2xl overflow-hidden" style={{ height: '420px', boxShadow: '0 8px 40px rgba(11,31,58,0.18)' }}>

//                     {/* Slides */}
//                     {banners.map((b, idx) => (
//                         <div
//                             key={b.id}
//                             className="absolute inset-0 transition-opacity duration-700"
//                             style={{ opacity: idx === current ? 1 : 0, pointerEvents: idx === current ? 'auto' : 'none' }}
//                         >
//                             {/* Background */}
//                             {b.bgImage ? (
//                                 <>
//                                     {/* ✅ img tag — reliable in Next.js for public folder images */}
//                                     <img
//                                         src={b.bgImage}
//                                         alt={b.title}
//                                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
//                                         style={{ transform: idx === current ? 'scale(1.03)' : 'scale(1)' }}
//                                     />
//                                     {/* Dark overlay for text readability */}
//                                     <div className="absolute inset-0" style={{
//                                         background: 'linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.20) 100%)',
//                                     }} />
//                                 </>
//                             ) : (
//                                 <>
//                                     <div className="absolute inset-0" style={{ background: b.bgGradient }} />
//                                     <div className="absolute inset-0" style={{
//                                         background: 'linear-gradient(105deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.10) 100%)',
//                                     }} />
//                                 </>
//                             )}

//                             {/* Dot pattern */}
//                             <div className="absolute inset-0 opacity-[0.07]" style={{
//                                 backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//                                 backgroundSize: '32px 32px',
//                             }} />

//                             {/* Geometric accent — right side */}
//                             <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden md:block opacity-10" style={{
//                                 backgroundImage: `
//                   linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
//                   linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
//                 `,
//                                 backgroundSize: '60px 60px',
//                             }} />

//                             {/* Accent line left */}
//                             <div className="absolute left-0 top-0 bottom-0 w-1" style={{
//                                 background: `linear-gradient(180deg, transparent 0%, ${b.accentColor} 30%, ${b.accentColor} 70%, transparent 100%)`,
//                                 opacity: 0.8,
//                             }} />
//                         </div>
//                     ))}

//                     {/* Content — always rendered, data from current banner */}
//                     <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">

//                         {/* Top row */}
//                         <div className="flex items-start justify-between">
//                             <div className="flex items-center gap-3">
//                                 <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
//                                     style={{ background: banner.badgeColor }}>
//                                     {banner.badge}
//                                 </span>
//                                 <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
//                                     style={{ background: banner.tagColor }}>
//                                     {banner.tag}
//                                 </span>
//                             </div>

//                             {/* Slide counter */}
//                             <div className="text-white/60 text-sm font-medium">
//                                 {String(current + 1).padStart(2, '0')} / {String(banners.length).padStart(2, '0')}
//                             </div>
//                         </div>

//                         {/* Middle — Title */}
//                         <div>
//                             <p className="text-sm font-medium mb-3" style={{ color: 'rgba(255,255,255,0.65)' }}>
//                                 {banner.subtitle}
//                             </p>
//                             <h3 className="font-serif font-bold text-white mb-3"
//                                 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
//                                 {banner.title}
//                             </h3>
//                             <div className="flex items-center gap-2 mb-5">
//                                 <MapPin className="w-4 h-4 shrink-0" style={{ color: banner.accentColor }} />
//                                 <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{banner.location}</span>
//                             </div>

//                             {/* Stats strip */}
//                             <div className="flex items-center gap-6 mb-7 flex-wrap">
//                                 {banner.stats.map(s => (
//                                     <div key={s.label}>
//                                         <p className="font-serif font-bold text-xl text-white">{s.value}</p>
//                                         <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</p>
//                                     </div>
//                                 ))}
//                                 <div className="h-8 w-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
//                                 <div>
//                                     <p className="font-serif font-bold text-xl" style={{ color: banner.accentColor }}>{banner.price}</p>
//                                     <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>Starting Price</p>
//                                 </div>
//                             </div>

//                             {/* CTA */}
//                             <Link
//                                 href={banner.href}
//                                 className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all group/btn"
//                                 style={{ background: '#E63946', boxShadow: '0 4px 20px rgba(230,57,70,0.40)' }}
//                             >
//                                 {banner.cta}
//                                 <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                             </Link>
//                         </div>

//                         {/* Bottom — Dots + Progress */}
//                         <div className="flex items-center gap-3">
//                             {banners.map((_, idx) => (
//                                 <button
//                                     key={idx}
//                                     onClick={() => goTo(idx)}
//                                     className="relative overflow-hidden transition-all duration-300"
//                                     style={{
//                                         height: '4px',
//                                         width: idx === current ? '40px' : '16px',
//                                         borderRadius: '100px',
//                                         background: 'rgba(255,255,255,0.30)',
//                                     }}
//                                 >
//                                     {idx === current && (
//                                         <div
//                                             className="absolute left-0 top-0 bottom-0 rounded-full transition-none"
//                                             style={{ width: `${progress}%`, background: '#E63946' }}
//                                         />
//                                     )}
//                                 </button>
//                             ))}

//                             {/* Play/Pause */}
//                             <button
//                                 onClick={() => setIsPlaying(!isPlaying)}
//                                 className="ml-2 text-xs font-medium transition-colors"
//                                 style={{ color: 'rgba(255,255,255,0.50)' }}
//                             >
//                                 {isPlaying ? '⏸ Pause' : '▶ Play'}
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Thumbnail dots — mini preview */}
//                 <div className="flex items-center gap-3 mt-4">
//                     {banners.map((b, idx) => (
//                         <button
//                             key={b.id}
//                             onClick={() => goTo(idx)}
//                             className="flex-1 rounded-xl overflow-hidden transition-all duration-300"
//                             style={{
//                                 height: '60px',
//                                 background: b.bgGradient,
//                                 border: idx === current ? '2px solid #E63946' : '2px solid transparent',
//                                 opacity: idx === current ? 1 : 0.5,
//                                 boxShadow: idx === current ? '0 0 0 2px rgba(230,57,70,0.30)' : 'none',
//                             }}
//                         >
//                             <div className="w-full h-full flex items-end p-2.5" style={{
//                                 background: 'linear-gradient(to top, rgba(0,0,0,0.60), transparent)',
//                             }}>
//                                 <p className="text-white text-xs font-semibold truncate">{b.title}</p>
//                             </div>
//                         </button>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     )
// }



// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
// import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

// const banners = [
//     {
//         id: 1,
//         badge: '✦ New Launch',
//         badgeColor: '#E63946',
//         title: 'Lakeside Residences',
//         subtitle: '3 & 4 BHK Ultra-Luxury Apartments',
//         location: 'Sultanpur Road, Lucknow',
//         price: 'Starting ₹85 Lakh',
//         tag: 'Limited Units',
//         tagColor: '#D97706',
//         cta: 'Explore Project',
//         href: '/properties',
//         bgGradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 60%, #2D5282 100%)',
//         bgImage: '/banners/banner 1.png',
//         accentColor: '#E63946',
//         stats: [
//             { label: 'Units', value: '240' },
//             { label: 'Floors', value: '28' },
//             { label: 'Possession', value: 'Dec 2026' },
//         ],
//     },
//     {
//         id: 2,
//         badge: '✓ Ready to Move',
//         badgeColor: '#059669',
//         title: 'Gomti Greens',
//         subtitle: '2 & 3 BHK Premium Apartments',
//         location: 'Gomti Nagar Extension',
//         price: 'Starting ₹65 Lakh',
//         tag: 'Ready Possession',
//         tagColor: '#059669',
//         cta: 'Book Site Visit',
//         href: '/properties',
//         bgGradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 60%, #2d6a3a 100%)',
//         bgImage: '/banners/banner 1.png',
//         accentColor: '#34D399',
//         stats: [
//             { label: 'Units', value: '180' },
//             { label: 'Floors', value: '18' },
//             { label: 'Possession', value: 'Immediate' },
//         ],
//     },
//     {
//         id: 3,
//         badge: '🏗 Under Construction',
//         badgeColor: '#D97706',
//         title: 'Royal Boulevard',
//         subtitle: 'Luxury Villas & Penthouses',
//         location: 'Shaheed Path, Lucknow',
//         price: 'Starting ₹1.8 Cr',
//         tag: 'Best Investment',
//         tagColor: '#2563EB',
//         cta: 'View Details',
//         href: '/properties',
//         bgGradient: 'linear-gradient(135deg, #1a0a00 0%, #5a2d00 60%, #8a4500 100%)',
//         bgImage: '/banners/banner 2.png',
//         accentColor: '#FBBF24',
//         stats: [
//             { label: 'Units', value: '60' },
//             { label: 'Floors', value: '4G+PH' },
//             { label: 'Possession', value: 'Mar 2027' },
//         ],
//     },
// ]

// export default function PropertyBannerSlider() {
//     const [current, setCurrent] = useState(0)
//     const [isPlaying, setIsPlaying] = useState(true)
//     const [progress, setProgress] = useState(0)
//     const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
//     const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
//     const DURATION = 5000

//     const startAutoPlay = () => {
//         if (intervalRef.current) clearInterval(intervalRef.current)
//         if (progressRef.current) clearInterval(progressRef.current)
//         setProgress(0)
//         progressRef.current = setInterval(() => {
//             setProgress(p => p >= 100 ? 100 : p + (100 / (DURATION / 50)))
//         }, 50)
//         intervalRef.current = setInterval(() => {
//             setCurrent(c => (c + 1) % banners.length)
//             setProgress(0)
//         }, DURATION)
//     }

//     useEffect(() => {
//         if (isPlaying) startAutoPlay()
//         return () => {
//             if (intervalRef.current) clearInterval(intervalRef.current)
//             if (progressRef.current) clearInterval(progressRef.current)
//         }
//     }, [isPlaying, current])

//     const goTo = (idx: number) => {
//         setCurrent(idx)
//         setProgress(0)
//         if (isPlaying) startAutoPlay()
//     }

//     const banner = banners[current]

//     return (
//         <section className="py-16 md:py-20" style={{ background: '#F5F7FA' }}>
//             <div className="max-w-7xl mx-auto px-5 sm:px-8">

//                 {/* Heading */}
//                 <div className="flex items-center justify-between mb-6">
//                     <div>
//                         <p className="text-sm font-semibold uppercase tracking-wider mb-1 flex items-center gap-2"
//                             style={{ color: '#E63946' }}>
//                             <span className="w-6 h-px inline-block" style={{ background: '#E63946' }} />
//                             Featured Launches
//                         </p>
//                         <h2 className="font-serif text-2xl md:text-3xl font-bold" style={{ color: '#0B1F3A' }}>
//                             New &amp; Trending Projects
//                         </h2>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <button onClick={() => goTo((current - 1 + banners.length) % banners.length)}
//                             className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
//                             style={{ border: '1.5px solid #E8ECF2', background: '#FFFFFF', color: '#0B1F3A' }}
//                             onMouseEnter={e => { e.currentTarget.style.background = '#0B1F3A'; e.currentTarget.style.color = '#fff' }}
//                             onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0B1F3A' }}>
//                             <ChevronLeft className="w-5 h-5" />
//                         </button>
//                         <button onClick={() => goTo((current + 1) % banners.length)}
//                             className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
//                             style={{ border: '1.5px solid #E8ECF2', background: '#FFFFFF', color: '#0B1F3A' }}
//                             onMouseEnter={e => { e.currentTarget.style.background = '#0B1F3A'; e.currentTarget.style.color = '#fff' }}
//                             onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0B1F3A' }}>
//                             <ChevronRight className="w-5 h-5" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Banner */}
//                 <div className="relative rounded-2xl overflow-hidden" style={{ height: '420px', boxShadow: '0 8px 40px rgba(11,31,58,0.18)' }}>

//                     {banners.map((b, idx) => (
//                         <div key={b.id} className="absolute inset-0 transition-opacity duration-700"
//                             style={{ opacity: idx === current ? 1 : 0, pointerEvents: idx === current ? 'auto' : 'none' }}>
//                             {/* Background */}
//                             {b.bgImage ? (
//                                 <>
//                                     <img src={b.bgImage} alt={b.title}
//                                         className="absolute inset-0 w-full h-full object-cover"
//                                         style={{ transform: idx === current ? 'scale(1.03)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
//                                     <div className="absolute inset-0" style={{
//                                         background: 'linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.20) 100%)',
//                                     }} />
//                                 </>
//                             ) : (
//                                 <>
//                                     <div className="absolute inset-0" style={{ background: b.bgGradient }} />
//                                     <div className="absolute inset-0" style={{
//                                         background: 'linear-gradient(105deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.10) 100%)',
//                                     }} />
//                                 </>
//                             )}
//                             {/* Overlays */}
//                             <div className="absolute inset-0 opacity-[0.07]" style={{
//                                 backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//                                 backgroundSize: '32px 32px',
//                             }} />
//                             <div className="absolute left-0 top-0 bottom-0 w-1" style={{
//                                 background: `linear-gradient(180deg, transparent 0%, ${b.accentColor} 30%, ${b.accentColor} 70%, transparent 100%)`,
//                                 opacity: 0.8,
//                             }} />
//                         </div>
//                     ))}

//                     {/* Content */}
//                     <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
//                         {/* Top */}
//                         <div className="flex items-start justify-between">
//                             <div className="flex items-center gap-3">
//                                 <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
//                                     style={{ background: banner.badgeColor }}>{banner.badge}</span>
//                                 <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
//                                     style={{ background: banner.tagColor }}>{banner.tag}</span>
//                             </div>
//                             <div className="text-white/60 text-sm font-medium">
//                                 {String(current + 1).padStart(2, '0')} / {String(banners.length).padStart(2, '0')}
//                             </div>
//                         </div>

//                         {/* Middle */}
//                         <div>
//                             <p className="text-sm font-medium mb-3" style={{ color: 'rgba(255,255,255,0.65)' }}>
//                                 {banner.subtitle}
//                             </p>
//                             <h3 className="font-serif font-bold text-white mb-3"
//                                 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
//                                 {banner.title}
//                             </h3>
//                             <div className="flex items-center gap-2 mb-5">
//                                 <MapPin className="w-4 h-4 shrink-0" style={{ color: banner.accentColor }} />
//                                 <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{banner.location}</span>
//                             </div>
//                             <div className="flex items-center gap-6 mb-7 flex-wrap">
//                                 {banner.stats.map(s => (
//                                     <div key={s.label}>
//                                         <p className="font-serif font-bold text-xl text-white">{s.value}</p>
//                                         <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</p>
//                                     </div>
//                                 ))}
//                                 <div className="h-8 w-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
//                                 <div>
//                                     <p className="font-serif font-bold text-xl" style={{ color: banner.accentColor }}>{banner.price}</p>
//                                     <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>Starting Price</p>
//                                 </div>
//                             </div>
//                             <Link href={banner.href}
//                                 className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all group/btn"
//                                 style={{ background: '#E63946', boxShadow: '0 4px 20px rgba(230,57,70,0.40)' }}>
//                                 {banner.cta}
//                                 <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                             </Link>
//                         </div>

//                         {/* Bottom — dots only */}
//                         <div className="flex items-center gap-2">
//                             {banners.map((_, idx) => (
//                                 <button key={idx} onClick={() => goTo(idx)}
//                                     className="relative overflow-hidden transition-all duration-300"
//                                     style={{
//                                         height: '4px',
//                                         width: idx === current ? '40px' : '12px',
//                                         borderRadius: '100px',
//                                         background: 'rgba(255,255,255,0.30)',
//                                     }}>
//                                     {idx === current && (
//                                         <div className="absolute left-0 top-0 bottom-0 rounded-full"
//                                             style={{ width: `${progress}%`, background: '#E63946' }} />
//                                     )}
//                                 </button>
//                             ))}
//                             <button onClick={() => setIsPlaying(!isPlaying)}
//                                 className="ml-1 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
//                                 {isPlaying ? '⏸' : '▶'}
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     )
// }
// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
// import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

// const banners = [
//     {
//         id: 1,
//         badge: '✦ New Launch',
//         badgeColor: '#E63946',
//         title: 'Lakeside Residences',
//         subtitle: '3 & 4 BHK Ultra-Luxury Apartments',
//         location: 'Sultanpur Road, Lucknow',
//         price: 'Starting ₹85 Lakh',
//         tag: 'Limited Units',
//         tagColor: '#D97706',
//         cta: 'Explore Project',
//         href: '/properties',
//         bgGradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 60%, #2D5282 100%)',
//         bgImage: '/banners/banner 1.png',
//         accentColor: '#E63946',
//         stats: [
//             { label: 'Units', value: '240' },
//             { label: 'Floors', value: '28' },
//             { label: 'Possession', value: 'Dec 2026' },
//         ],
//     },
//     {
//         id: 2,
//         badge: '✓ Ready to Move',
//         badgeColor: '#059669',
//         title: 'Gomti Greens',
//         subtitle: '2 & 3 BHK Premium Apartments',
//         location: 'Gomti Nagar Extension',
//         price: 'Starting ₹65 Lakh',
//         tag: 'Ready Possession',
//         tagColor: '#059669',
//         cta: 'Book Site Visit',
//         href: '/properties',
//         bgGradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 60%, #2d6a3a 100%)',
//         bgImage: '/banners/banner 2.png',
//         accentColor: '#34D399',
//         stats: [
//             { label: 'Units', value: '180' },
//             { label: 'Floors', value: '18' },
//             { label: 'Possession', value: 'Immediate' },
//         ],
//     },
//     {
//         id: 3,
//         badge: '🏗 Under Construction',
//         badgeColor: '#D97706',
//         title: 'Royal Boulevard',
//         subtitle: 'Luxury Villas & Penthouses',
//         location: 'Shaheed Path, Lucknow',
//         price: 'Starting ₹1.8 Cr',
//         tag: 'Best Investment',
//         tagColor: '#2563EB',
//         cta: 'View Details',
//         href: '/properties',
//         bgGradient: 'linear-gradient(135deg, #1a0a00 0%, #5a2d00 60%, #8a4500 100%)',
//         bgImage: '/banners/banner 3.png',
//         accentColor: '#FBBF24',
//         stats: [
//             { label: 'Units', value: '60' },
//             { label: 'Floors', value: '4G+PH' },
//             { label: 'Possession', value: 'Mar 2027' },
//         ],
//     },
// ]

// export default function PropertyBannerSlider() {
//     const [current, setCurrent] = useState(0)
//     const [isPlaying, setIsPlaying] = useState(true)
//     const [progress, setProgress] = useState(0)
//     const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
//     const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
//     const DURATION = 5000

//     const startAutoPlay = () => {
//         if (intervalRef.current) clearInterval(intervalRef.current)
//         if (progressRef.current) clearInterval(progressRef.current)
//         setProgress(0)
//         progressRef.current = setInterval(() => {
//             setProgress(p => p >= 100 ? 100 : p + (100 / (DURATION / 50)))
//         }, 50)
//         intervalRef.current = setInterval(() => {
//             setCurrent(c => (c + 1) % banners.length)
//             setProgress(0)
//         }, DURATION)
//     }

//     useEffect(() => {
//         if (isPlaying) startAutoPlay()
//         return () => {
//             if (intervalRef.current) clearInterval(intervalRef.current)
//             if (progressRef.current) clearInterval(progressRef.current)
//         }
//     }, [isPlaying, current])

//     const goTo = (idx: number) => {
//         setCurrent(idx)
//         setProgress(0)
//         if (isPlaying) startAutoPlay()
//     }

//     const banner = banners[current]

//     return (
//         <section className="py-16 md:py-20" style={{ background: '#F5F7FA' }}>
//             <div className="max-w-7xl mx-auto px-5 sm:px-8">

//                 {/* Heading */}
//                 <div className="flex items-center justify-between mb-6">
//                     <div>
//                         <p className="text-sm font-semibold uppercase tracking-wider mb-1 flex items-center gap-2"
//                             style={{ color: '#E63946' }}>
//                             <span className="w-6 h-px inline-block" style={{ background: '#E63946' }} />
//                             Featured Launches
//                         </p>
//                         <h2 className="font-serif text-2xl md:text-3xl font-bold" style={{ color: '#0B1F3A' }}>
//                             New &amp; Trending Projects
//                         </h2>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <button onClick={() => goTo((current - 1 + banners.length) % banners.length)}
//                             className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
//                             style={{ border: '1.5px solid #E8ECF2', background: '#FFFFFF', color: '#0B1F3A' }}
//                             onMouseEnter={e => { e.currentTarget.style.background = '#0B1F3A'; e.currentTarget.style.color = '#fff' }}
//                             onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0B1F3A' }}>
//                             <ChevronLeft className="w-5 h-5" />
//                         </button>
//                         <button onClick={() => goTo((current + 1) % banners.length)}
//                             className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
//                             style={{ border: '1.5px solid #E8ECF2', background: '#FFFFFF', color: '#0B1F3A' }}
//                             onMouseEnter={e => { e.currentTarget.style.background = '#0B1F3A'; e.currentTarget.style.color = '#fff' }}
//                             onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0B1F3A' }}>
//                             <ChevronRight className="w-5 h-5" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Banner */}
//                 <div className="relative rounded-2xl overflow-hidden" style={{ height: '420px', boxShadow: '0 8px 40px rgba(11,31,58,0.18)' }}>

//                     {banners.map((b, idx) => (
//                         <div key={b.id} className="absolute inset-0 transition-opacity duration-700"
//                             style={{ opacity: idx === current ? 1 : 0, pointerEvents: idx === current ? 'auto' : 'none' }}>
//                             {/* Background */}
//                             {b.bgImage ? (
//                                 <>
//                                     <img src={b.bgImage} alt={b.title}
//                                         className="absolute inset-0 w-full h-full object-cover"
//                                         style={{ transform: idx === current ? 'scale(1.03)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
//                                     <div className="absolute inset-0" style={{
//                                         background: 'linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.20) 100%)',
//                                     }} />
//                                 </>
//                             ) : (
//                                 <>
//                                     <div className="absolute inset-0" style={{ background: b.bgGradient }} />
//                                     <div className="absolute inset-0" style={{
//                                         background: 'linear-gradient(105deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.10) 100%)',
//                                     }} />
//                                 </>
//                             )}
//                             {/* Overlays */}
//                             <div className="absolute inset-0 opacity-[0.07]" style={{
//                                 backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//                                 backgroundSize: '32px 32px',
//                             }} />
//                             <div className="absolute left-0 top-0 bottom-0 w-1" style={{
//                                 background: `linear-gradient(180deg, transparent 0%, ${b.accentColor} 30%, ${b.accentColor} 70%, transparent 100%)`,
//                                 opacity: 0.8,
//                             }} />
//                         </div>
//                     ))}

//                     {/* Content */}
//                     <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
//                         {/* Top */}
//                         <div className="flex items-start justify-between">
//                             <div className="flex items-center gap-3">
//                                 <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
//                                     style={{ background: banner.badgeColor }}>{banner.badge}</span>
//                                 <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
//                                     style={{ background: banner.tagColor }}>{banner.tag}</span>
//                             </div>
//                             <div className="text-white/60 text-sm font-medium">
//                                 {String(current + 1).padStart(2, '0')} / {String(banners.length).padStart(2, '0')}
//                             </div>
//                         </div>

//                         {/* Middle */}
//                         <div>
//                             <p className="text-sm font-medium mb-3" style={{ color: 'rgba(255,255,255,0.65)' }}>
//                                 {banner.subtitle}
//                             </p>
//                             <h3 className="font-serif font-bold text-white mb-3"
//                                 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
//                                 {banner.title}
//                             </h3>
//                             <div className="flex items-center gap-2 mb-5">
//                                 <MapPin className="w-4 h-4 shrink-0" style={{ color: banner.accentColor }} />
//                                 <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{banner.location}</span>
//                             </div>
//                             <div className="flex items-center gap-6 mb-7 flex-wrap">
//                                 {banner.stats.map(s => (
//                                     <div key={s.label}>
//                                         <p className="font-serif font-bold text-xl text-white">{s.value}</p>
//                                         <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</p>
//                                     </div>
//                                 ))}
//                                 <div className="h-8 w-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
//                                 <div>
//                                     <p className="font-serif font-bold text-xl" style={{ color: banner.accentColor }}>{banner.price}</p>
//                                     <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>Starting Price</p>
//                                 </div>
//                             </div>
//                             <Link href={banner.href}
//                                 className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all group/btn"
//                                 style={{ background: '#E63946', boxShadow: '0 4px 20px rgba(230,57,70,0.40)' }}>
//                                 {banner.cta}
//                                 <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                             </Link>
//                         </div>

//                         {/* Bottom — remove dots from inside */}
//                         <div />
//                     </div>
//                 </div>

//                 {/* Dots — below banner */}
//                 <div className="flex items-center justify-center gap-2.5 mt-4">
//                     {banners.map((_, idx) => (
//                         <button key={idx} onClick={() => goTo(idx)}
//                             className="rounded-full transition-all duration-300"
//                             style={{
//                                 width: idx === current ? '10px' : '8px',
//                                 height: idx === current ? '10px' : '8px',
//                                 background: idx === current ? '#E63946' : '#D1D5DB',
//                             }} />
//                     ))}
//                 </div>

//             </div>
//         </section>
//     )
// }

'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

const banners = [
    {
        id: 1,
        badge: '✦ New Launch',
        badgeColor: '#7B1C5E',
        title: 'Rishita Mulberry Heights',
        subtitle: '2 & 3 BHK Luxury Apartments — Golf View Facing',
        location: 'Sushant Golf City, Lucknow',
        price: 'Starting ₹65 Lakh',
        tag: '80% Open Space',
        tagColor: '#7B1C5E',
        cta: 'Book Site Visit',
        href: '/properties',
        bgGradient: 'linear-gradient(135deg, #2d0a2e 0%, #5c1a5a 60%, #7b1c6e 100%)',
        bgImage: '/banners/Rishita.png',
        accentColor: '#E879C8',
        stats: [
            { label: 'Acres', value: '21.45' },
            { label: 'Phases', value: '6' },
            { label: 'Open Space', value: '80%' },
        ],
    },

    {
        id: 2,
        badge: '✦ New Launch',
        badgeColor: '#E63946',
        title: 'Imperisal Residencia',
        subtitle: '2, 3 & 4 BHK Premium Apartments',
        location: 'Gomti Nagar, Lucknow',
        price: 'Starting ₹95 Lakh',
        tag: 'Limited Units',
        tagColor: '#D97706',
        cta: 'Explore Project',
        href: '/properties',
        bgGradient: 'linear-gradient(135deg, #1a0a2e 0%, #3b1f6b 60%, #5c2d8a 100%)',
        bgImage: '/banners/IR.png',
        accentColor: '#A78BFA',
        stats: [
            { label: 'Units', value: '320' },
            { label: 'Floors', value: '24' },
            { label: 'Possession', value: 'Jun 2027' },
        ],
    },
    {
        id: 3,
        badge: '🏢 Commercial',
        badgeColor: '#7C1C1C',
        title: 'Kailasha Awadh',
        subtitle: "Lucknow's Own Marketplace — Retail, Offices & Studios",
        location: 'Kanpur Road, Near International Airport, Lucknow',
        price: 'Starting ₹45 Lakh',
        tag: 'High ROI',
        tagColor: '#059669',
        cta: 'Enquire Now',
        href: '/properties',
        bgGradient: 'linear-gradient(135deg, #1a0a00 0%, #3d1a00 60%, #5c2800 100%)',
        bgImage: '/banners/kailasha.png',
        accentColor: '#D4A96A',
        stats: [
            { label: 'RERA No.', value: 'J850664' },
            { label: 'Floors', value: 'LGF–2nd' },
            { label: 'Airport', value: '9 Min' },
        ],
    },
]

export default function PropertyBannerSlider() {
    const [current, setCurrent] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [progress, setProgress] = useState(0)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const DURATION = 5000

    const startAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        if (progressRef.current) clearInterval(progressRef.current)
        setProgress(0)
        progressRef.current = setInterval(() => {
            setProgress(p => p >= 100 ? 100 : p + (100 / (DURATION / 50)))
        }, 50)
        intervalRef.current = setInterval(() => {
            setCurrent(c => (c + 1) % banners.length)
            setProgress(0)
        }, DURATION)
    }

    useEffect(() => {
        if (isPlaying) startAutoPlay()
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
            if (progressRef.current) clearInterval(progressRef.current)
        }
    }, [isPlaying, current])

    const goTo = (idx: number) => {
        setCurrent(idx)
        setProgress(0)
        if (isPlaying) startAutoPlay()
    }

    const banner = banners[current]

    return (
        <section className="py-12 sm:py-16 md:py-20" style={{ background: '#F5F7FA' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Heading row ── */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div>
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1 flex items-center gap-2"
                            style={{ color: '#E63946' }}>
                            <span className="w-5 sm:w-6 h-px inline-block" style={{ background: '#E63946' }} />
                            Featured Launches
                        </p>
                        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: '#0B1F3A' }}>
                            New &amp; Trending Projects
                        </h2>
                    </div>

                    {/* Nav buttons */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <button
                            onClick={() => goTo((current - 1 + banners.length) % banners.length)}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all"
                            style={{ border: '1.5px solid #E8ECF2', background: '#FFFFFF', color: '#0B1F3A' }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#0B1F3A'; e.currentTarget.style.color = '#fff' }}
                            onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0B1F3A' }}>
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button
                            onClick={() => goTo((current + 1) % banners.length)}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all"
                            style={{ border: '1.5px solid #E8ECF2', background: '#FFFFFF', color: '#0B1F3A' }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#0B1F3A'; e.currentTarget.style.color = '#fff' }}
                            onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0B1F3A' }}>
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>

                {/* ── Banner ── */}
                <div
                    className="relative rounded-xl sm:rounded-2xl overflow-hidden"
                    style={{
                        height: 'clamp(300px, 55vw, 420px)',
                        boxShadow: '0 8px 40px rgba(11,31,58,0.18)',
                    }}
                >
                    {banners.map((b, idx) => (
                        <div key={b.id} className="absolute inset-0 transition-opacity duration-700"
                            style={{ opacity: idx === current ? 1 : 0, pointerEvents: idx === current ? 'auto' : 'none' }}>
                            {b.bgImage ? (
                                <>
                                    <img src={b.bgImage} alt={b.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        style={{ transform: idx === current ? 'scale(1.03)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
                                    <div className="absolute inset-0" style={{
                                        background: 'linear-gradient(105deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0.25) 100%)',
                                    }} />
                                </>
                            ) : (
                                <>
                                    <div className="absolute inset-0" style={{ background: b.bgGradient }} />
                                    <div className="absolute inset-0" style={{
                                        background: 'linear-gradient(105deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.10) 100%)',
                                    }} />
                                </>
                            )}
                            <div className="absolute inset-0 opacity-[0.07]" style={{
                                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
                                backgroundSize: '32px 32px',
                            }} />
                            <div className="absolute left-0 top-0 bottom-0 w-1" style={{
                                background: `linear-gradient(180deg, transparent 0%, ${b.accentColor} 30%, ${b.accentColor} 70%, transparent 100%)`,
                                opacity: 0.8,
                            }} />
                        </div>
                    ))}

                    {/* ── Content ── */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-8 md:p-12">

                        {/* Top row — badges + counter */}
                        <div className="flex items-start justify-between gap-2">
                            {/* Badges — wrap on very small screens */}
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-white"
                                    style={{ background: banner.badgeColor }}>
                                    {banner.badge}
                                </span>
                                <span className="text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-white"
                                    style={{ background: banner.tagColor }}>
                                    {banner.tag}
                                </span>
                            </div>
                            {/* Counter — hidden on very small, shown sm+ */}
                            <div className="text-white/60 text-xs sm:text-sm font-medium shrink-0">
                                {String(current + 1).padStart(2, '0')} / {String(banners.length).padStart(2, '0')}
                            </div>
                        </div>

                        {/* Middle — title, location, stats, CTA */}
                        <div>
                            <p className="text-xs sm:text-sm font-medium mb-2 sm:mb-3"
                                style={{ color: 'rgba(255,255,255,0.65)' }}>
                                {banner.subtitle}
                            </p>

                            {/* Title — clamp adjusted for mobile */}
                            <h3
                                className="font-serif font-bold text-white mb-2 sm:mb-3"
                                style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
                            >
                                {banner.title}
                            </h3>

                            <div className="flex items-center gap-2 mb-4 sm:mb-5">
                                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" style={{ color: banner.accentColor }} />
                                <span className="text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                                    {banner.location}
                                </span>
                            </div>

                            {/* Stats row */}
                            <div className="flex items-center gap-3 sm:gap-6 mb-5 sm:mb-7 flex-wrap">
                                {banner.stats.map(s => (
                                    <div key={s.label}>
                                        <p className="font-serif font-bold text-base sm:text-xl text-white">{s.value}</p>
                                        <p className="text-[10px] sm:text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</p>
                                    </div>
                                ))}
                                {/* Divider — hidden on mobile to save space */}
                                <div className="h-7 w-px hidden sm:block" style={{ background: 'rgba(255,255,255,0.15)' }} />
                                <div>
                                    <p className="font-serif font-bold text-base sm:text-xl" style={{ color: banner.accentColor }}>
                                        {banner.price}
                                    </p>
                                    <p className="text-[10px] sm:text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>Starting Price</p>
                                </div>
                            </div>

                            {/* CTA button */}
                            <Link href={banner.href}
                                className="inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm text-white transition-all group/btn"
                                style={{ background: '#E63946', boxShadow: '0 4px 20px rgba(230,57,70,0.40)' }}>
                                {banner.cta}
                                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div />
                    </div>
                </div>

                {/* ── Dots ── */}
                <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-3 sm:mt-4">
                    {banners.map((_, idx) => (
                        <button key={idx} onClick={() => goTo(idx)}
                            className="rounded-full transition-all duration-300"
                            style={{
                                width: idx === current ? '10px' : '8px',
                                height: idx === current ? '10px' : '8px',
                                background: idx === current ? '#E63946' : '#D1D5DB',
                            }} />
                    ))}
                </div>

            </div>
        </section>
    )
}