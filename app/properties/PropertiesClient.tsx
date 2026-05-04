
// 'use client'

// import { useState, useMemo, useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Link from 'next/link'
// import {
//   Search, Grid3x3, List, X, SlidersHorizontal,
//   MapPin, BedDouble, Bath, Maximize2, ArrowRight,
//   Home, Building2, Trees, Sparkles, RefreshCw,
//   ChevronDown, CheckCircle2, IndianRupee
// } from 'lucide-react'
// import { properties } from '@/lib/data'
// import type { Property } from '@/lib/data'

// type Category = 'residential' | 'commercial' | 'farmhouse'
// type StatusTab = 'all' | 'under-construction' | 'ready-to-move' | 'recently-launched'
// type ListingType = 'all' | 'fresh' | 'resale'

// const CATEGORIES: {
//   id: Category; label: string; sub: string; icon: React.ElementType
//   gradient: string; accentColor: string; lightBg: string
// }[] = [
//     { id: 'residential', label: 'Residential', sub: 'Apartments, Villas & Homes', icon: Home, gradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)', accentColor: '#E63946', lightBg: '#EBF0F7' },
//     { id: 'commercial', label: 'Commercial', sub: 'Offices, Shops & Spaces', icon: Building2, gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', accentColor: '#E63946', lightBg: '#F0EEFF' },
//     { id: 'farmhouse', label: 'Farm House', sub: 'Farms, Resorts & Land', icon: Trees, gradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 100%)', accentColor: '#E63946', lightBg: '#ECFDF5' },
//   ]

// const STATUS_TABS: { id: StatusTab; label: string; shortLabel: string; dotColor: string; tagBg: string; tagText: string }[] = [
//   { id: 'all', label: 'All Properties', shortLabel: 'All', dotColor: '#6B7280', tagBg: '#F5F7FA', tagText: '#6B7280' },
//   { id: 'under-construction', label: 'Under Construction', shortLabel: 'Under Const.', dotColor: '#2563EB', tagBg: 'rgba(37,99,235,0.10)', tagText: '#2563EB' },
//   { id: 'ready-to-move', label: 'Ready to Move', shortLabel: 'Ready', dotColor: '#059669', tagBg: 'rgba(5,150,105,0.10)', tagText: '#059669' },
//   { id: 'recently-launched', label: 'Recently Launched', shortLabel: 'New Launch', dotColor: '#D97706', tagBg: 'rgba(217,119,6,0.10)', tagText: '#D97706' },
// ]

// const BUDGETS = [
//   { label: 'Any Budget', min: 0, max: 999999999 },
//   { label: 'Under ₹50L', min: 0, max: 5000000 },
//   { label: '₹50L – ₹1Cr', min: 5000000, max: 10000000 },
//   { label: '₹1Cr – ₹2Cr', min: 10000000, max: 20000000 },
//   { label: '₹2Cr – ₹5Cr', min: 20000000, max: 50000000 },
//   { label: 'Above ₹5Cr', min: 50000000, max: 999999999 },
// ]

// const HOME_BUDGET_MAP: Record<string, number> = {
//   'Under ₹50 Lakh': 1, '₹50L–₹1 Cr': 2, '₹1–₂ Cr': 3, '₹2–5 Cr': 4, 'Above ₹5 Cr': 5,
// }

// const LOCATIONS = [
//   'Vrindavan Yojna', 'Shaheed Path', 'Gomti Nagar', 'Hazratganj',
//   'Aliganj', 'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
// ]

// function getCategory(p: Property): Category {
//   if (p.category === 'Commercial') return 'commercial'
//   if (p.category === 'Plot') return 'farmhouse'
//   return 'residential'
// }
// function getStatus(p: Property): StatusTab {
//   if (p.status === 'Under Construction') return 'under-construction'
//   if (p.status === 'Ready to Move') return 'ready-to-move'
//   if (p.status === 'New Launch') return 'recently-launched'
//   return 'ready-to-move'
// }
// function getListingType(p: Property): 'fresh' | 'resale' {
//   return p.subtype === 'resell' ? 'resale' : 'fresh'
// }

// // ─── Property Card ──────────────────────────────────────────────────────────

// function PropertyCard({ property, view }: { property: Property; view: 'grid' | 'list' }) {
//   const ltype = getListingType(property)
//   const pstatus = getStatus(property)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   if (view === 'list') {
//     return (
//       <Link href={`/properties/${property.slug}`} className="group block">
//         <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex transition-all duration-300 group-hover:shadow-lg"
//           style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 8px rgba(11,31,58,0.05)' }}>
//           {/* Thumbnail — compact on mobile */}
//           <div className="relative shrink-0 w-28 h-28 sm:w-48 sm:h-36"
//             style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//             <div className="absolute inset-0 opacity-[0.08]"
//               style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
//             {property.badge && (
//               <span className="absolute top-2 left-2 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded z-10"
//                 style={{ background: '#E63946' }}>
//                 {property.badge}
//               </span>
//             )}
//             <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3"
//               style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
//               <p className="text-white font-serif font-bold text-xs sm:text-base">{property.price}</p>
//             </div>
//           </div>
//           <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between min-w-0">
//             <div>
//               <div className="flex items-start justify-between gap-1 mb-1">
//                 <h3 className="font-serif font-semibold text-xs sm:text-sm leading-tight line-clamp-2"
//                   style={{ color: '#0B1F3A' }}>
//                   {property.title}
//                 </h3>
//                 <div className="flex gap-1 shrink-0">
//                   <span className="text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full"
//                     style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//                     {stCfg.shortLabel}
//                   </span>
//                   <span className="hidden sm:inline text-[10px] font-bold px-2 py-0.5 rounded-full"
//                     style={{ background: ltype === 'fresh' ? '#DCFCE7' : '#EFF6FF', color: ltype === 'fresh' ? '#059669' : '#2563EB' }}>
//                     {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 text-[10px] sm:text-xs mb-1 sm:mb-2" style={{ color: '#6B7280' }}>
//                 <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" style={{ color: '#E63946' }} />
//                 <span className="truncate">{property.location}</span>
//               </div>
//               {property.bedrooms > 0 && (
//                 <div className="hidden sm:flex gap-3 text-xs" style={{ color: '#6B7280' }}>
//                   <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" />{property.area}</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-1.5 pt-1.5 sm:mt-2 sm:pt-2"
//               style={{ borderTop: '1px solid #E8ECF2' }}>
//               <span className="text-[10px] sm:text-xs truncate" style={{ color: '#6B7280' }}>
//                 {property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}
//               </span>
//               <span className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold shrink-0"
//                 style={{ color: '#E63946' }}>
//                 View <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     )
//   }

//   return (
//     <Link href={`/properties/${property.slug}`} className="group block h-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {property.mainImage ? (
//             <img src={property.mainImage} alt={property.title} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
//           <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//             {property.badge && (
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {property.badge}
//               </span>
//             )}
//           </div>
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
//               style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: ltype === 'fresh' ? 'rgba(5,150,105,0.90)' : 'rgba(37,99,235,0.90)' }}>
//               {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//             </span>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {property.category} · {property.area}
//             </p>
//           </div>
//         </div>
//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2" style={{ color: '#0B1F3A' }}>
//             {property.title}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{property.location}</span>
//           </div>
//           {property.bedrooms > 0 && (
//             <div className="flex gap-3 text-xs pb-3 mb-3"
//               style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
//               <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds</span>
//               <span className="flex items-center gap-1"><Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths</span>
//               <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}</span>
//             </div>
//           )}
//           <div className="flex flex-wrap gap-1 flex-1 mb-3">
//             {property.amenities.slice(0, 2).map(a => (
//               <span key={a} className="text-[10px] px-2 py-0.5 rounded-full"
//                 style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>
//             ))}
//             {property.amenities.length > 2 && (
//               <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
//                 style={{ background: '#FEE8EA', color: '#E63946' }}>
//                 +{property.amenities.length - 2}
//               </span>
//             )}
//           </div>
//           <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-[10px]" style={{ color: '#6B7280' }}>
//               {property.developer ? `🏗 ${property.developer}` : property.ownerName ? `👤 Owner` : property.category}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Main Page ───────────────────────────────────────────────────────────────

// export default function PropertiesClient() {
//   const searchParams = useSearchParams()
//   const [category, setCategory] = useState<Category>('residential')
//   const [statusTab, setStatusTab] = useState<StatusTab>('all')
//   const [listingType, setListingType] = useState<ListingType>('all')
//   const [search, setSearch] = useState('')
//   const [budgetIdx, setBudgetIdx] = useState(0)
//   const [location, setLocation] = useState('all')
//   const [sortBy, setSortBy] = useState('featured')
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
//   const [showFilters, setShowFilters] = useState(false)
//   const [openBudget, setOpenBudget] = useState(true)
//   const [openLoc, setOpenLoc] = useState(true)

//   // useEffect(() => {
//   //   const loc = searchParams.get('location')
//   //   const budget = searchParams.get('budget')
//   //   const type = searchParams.get('type')
//   //   const status = searchParams.get('status')
//   //   const search = searchParams.get('search')
//   //   if (loc && LOCATIONS.includes(loc)) setLocation(loc)
//   //   if (budget) { const idx = HOME_BUDGET_MAP[budget]; if (idx !== undefined) setBudgetIdx(idx) }
//   //   if (type) setSearch(type)
//   //   if (search) setSearch(search)
//   //   const validStatuses: StatusTab[] = ['under-construction', 'ready-to-move', 'recently-launched']
//   //   if (status && validStatuses.includes(status as StatusTab)) setStatusTab(status as StatusTab)
//   // }, [searchParams])
//   useEffect(() => {
//     const loc = searchParams.get('location')
//     const budget = searchParams.get('budget')
//     const type = searchParams.get('type')
//     const status = searchParams.get('status')
//     const search = searchParams.get('search')
//     if (loc && LOCATIONS.includes(loc)) setLocation(loc)
//     if (budget) { const idx = HOME_BUDGET_MAP[budget]; if (idx !== undefined) setBudgetIdx(idx) }
//     if (type) setSearch(type)

//     // ── PEHLE: if (search) setSearch(search) ──
//     // ── AB: ye block lagao ──
//     if (search) {
//       setSearch(search)
//       const q = search.toLowerCase()
//       const match = properties.find(p =>
//         p.title.toLowerCase().includes(q) ||
//         (p.developer ?? '').toLowerCase().includes(q)
//       )
//       if (match) {
//         if (match.category === 'Commercial') setCategory('commercial')
//         else if (match.category === 'Plot') setCategory('farmhouse')
//         else setCategory('residential')
//       }
//     }

//     const validStatuses: StatusTab[] = ['under-construction', 'ready-to-move', 'recently-launched']
//     if (status && validStatuses.includes(status as StatusTab)) setStatusTab(status as StatusTab)
//   }, [searchParams])

//   const catCounts = useMemo(() => ({
//     residential: properties.filter(p => getCategory(p) === 'residential').length,
//     commercial: properties.filter(p => getCategory(p) === 'commercial').length,
//     farmhouse: properties.filter(p => getCategory(p) === 'farmhouse').length,
//   }), [])

//   const filtered = useMemo(() => {
//     let r = properties.filter(p => getCategory(p) === category)
//     if (statusTab !== 'all') r = r.filter(p => getStatus(p) === statusTab)
//     if (listingType !== 'all') r = r.filter(p => getListingType(p) === listingType)
//     if (search.trim()) {
//       const q = search.toLowerCase()
//       r = r.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.developer ?? '').toLowerCase().includes(q) || (p.badge ?? '').toLowerCase().includes(q))
//     }
//     if (budgetIdx > 0) { const { min, max } = BUDGETS[budgetIdx]; r = r.filter(p => p.priceValue >= min && p.priceValue <= max) }
//     if (location !== 'all') r = r.filter(p => p.location.includes(location))
//     if (sortBy === 'price-asc') r = [...r].sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') r = [...r].sort((a, b) => b.priceValue - a.priceValue)
//     else r = [...r].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//     return r
//   }, [category, statusTab, listingType, search, budgetIdx, location, sortBy])

//   const baseForCat = properties.filter(p => getCategory(p) === category)
//   const statCount = (s: StatusTab) => s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
//   const typeCount = (t: ListingType) => t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length
//   const activeCat = CATEGORIES.find(c => c.id === category)!

//   return (
//     <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

//       {/* ── SECTION A — CATEGORY ── */}
//       <div style={{ background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)' }} className="pt-20 relative">
//         <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
//           style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-0">
//           <p className="text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2" style={{ color: '#E63946' }}>
//             Browse Properties
//           </p>
//           <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-8">
//             Find Your Property
//           </h1>
//           {/* 3 col always — compact on mobile */}
//           <div className="grid grid-cols-3 gap-2 sm:gap-4">
//             {CATEGORIES.map(cat => {
//               const Icon = cat.icon
//               const isActive = category === cat.id
//               return (
//                 <button key={cat.id}
//                   onClick={() => { setCategory(cat.id); setStatusTab('all'); setListingType('all') }}
//                   className="relative rounded-t-xl sm:rounded-t-2xl overflow-hidden text-left transition-all duration-300"
//                   style={{
//                     background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
//                     border: `2px solid ${isActive ? '#E63946' : 'rgba(255,255,255,0.10)'}`,
//                     borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
//                     transform: isActive ? 'translateY(2px)' : 'translateY(0)',
//                     boxShadow: isActive ? '0 -4px 24px rgba(230,57,70,0.20)' : 'none',
//                     padding: '10px 10px 12px',
//                   }}>
//                   {isActive && <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#E63946' }} />}
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2"
//                     style={{ background: isActive ? '#FEE8EA' : 'rgba(255,255,255,0.12)' }}>
//                     <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isActive ? '#E63946' : '#fff' }} />
//                   </div>
//                   <p className="font-serif font-bold text-xs sm:text-lg leading-none mb-0.5"
//                     style={{ color: isActive ? '#0B1F3A' : '#fff' }}>
//                     {cat.label}
//                   </p>
//                   <p className="hidden sm:block text-xs" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>
//                     {cat.sub}
//                   </p>
//                   <p className="font-serif font-bold text-base sm:text-2xl mt-1"
//                     style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>
//                     {catCounts[cat.id]}
//                   </p>
//                   <p className="text-[9px] sm:text-[10px]"
//                     style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>listings</p>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION B — STATUS TABS ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             {STATUS_TABS.map(s => {
//               const isActive = statusTab === s.id
//               return (
//                 <button key={s.id} onClick={() => setStatusTab(s.id)}
//                   className="flex items-center gap-1.5 py-3 sm:py-4 px-3 sm:px-5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
//                   style={{ color: isActive ? '#E63946' : '#6B7280' }}>
//                   <span className="w-2 h-2 rounded-full shrink-0" style={{ background: isActive ? '#E63946' : s.dotColor }} />
//                   {/* Short label mobile, full label sm+ */}
//                   <span className="sm:hidden">{s.shortLabel}</span>
//                   <span className="hidden sm:inline">{s.label}</span>
//                   <span className="text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold"
//                     style={{ background: isActive ? '#FEE8EA' : '#F5F7FA', color: isActive ? '#E63946' : '#9CA3AF' }}>
//                     {statCount(s.id)}
//                   </span>
//                   {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION C — LISTING TYPE ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//           <div className="flex items-center justify-between gap-2 sm:gap-4">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#9CA3AF' }}>
//                 <span className="hidden sm:inline">Listing </span>Type:
//               </p>
//               <div className="flex rounded-lg sm:rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2' }}>
//                 <button onClick={() => setListingType('all')}
//                   className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'all' ? '#0B1F3A' : '#FFFFFF', color: listingType === 'all' ? '#fff' : '#6B7280' }}>
//                   All ({typeCount('all')})
//                 </button>
//                 <button onClick={() => setListingType('fresh')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'fresh' ? '#059669' : '#FFFFFF', color: listingType === 'fresh' ? '#fff' : '#6B7280', borderLeft: '1px solid #E8ECF2', borderRight: '1px solid #E8ECF2' }}>
//                   <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Fresh
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'fresh' ? 'rgba(255,255,255,0.25)' : '#DCFCE7', color: listingType === 'fresh' ? '#fff' : '#059669' }}>
//                     {typeCount('fresh')}
//                   </span>
//                 </button>
//                 <button onClick={() => setListingType('resale')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'resale' ? '#2563EB' : '#FFFFFF', color: listingType === 'resale' ? '#fff' : '#6B7280' }}>
//                   <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Resale
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'resale' ? 'rgba(255,255,255,0.25)' : '#EFF6FF', color: listingType === 'resale' ? '#fff' : '#2563EB' }}>
//                     {typeCount('resale')}
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold"
//               style={{ background: '#FEE8EA', color: '#E63946' }}>
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//               {activeCat.label} · {filtered.length}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN BODY ── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
//         <div className="flex gap-5 sm:gap-6">

//           {/* Sidebar */}
//           <div className="hidden lg:block w-60 shrink-0">
//             <div className="sticky top-24 space-y-4">
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenBudget(!openBudget)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openBudget ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <IndianRupee className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Budget</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openBudget ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openBudget && (
//                   <div className="p-3 flex flex-col gap-1">
//                     {BUDGETS.map((b, i) => (
//                       <button key={b.label} onClick={() => setBudgetIdx(i)}
//                         className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A', fontWeight: budgetIdx === i ? 600 : 400 }}>
//                         {b.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenLoc(!openLoc)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openLoc ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Location</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openLoc ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openLoc && (
//                   <div className="p-3 flex flex-col gap-1">
//                     <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                       style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A', fontWeight: location === 'all' ? 600 : 400 }}>
//                       All Locations
//                     </button>
//                     {LOCATIONS.map(l => (
//                       <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A', fontWeight: location === l ? 600 : 400 }}>
//                         {l}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               {(budgetIdx > 0 || location !== 'all') && (
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all') }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Grid area */}
//           <div className="flex-1 min-w-0">
//             {/* Search + controls */}
//             <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
//               <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl flex-1 min-w-0"
//                 style={{ background: '#FFFFFF', border: '1px solid #E8ECF2' }}>
//                 <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <input type="text" placeholder="Search..."
//                   value={search} onChange={e => setSearch(e.target.value)}
//                   className="w-full bg-transparent text-xs sm:text-sm focus:outline-none" style={{ color: '#1A1A1A' }} />
//                 {search && <button onClick={() => setSearch('')}><X className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9CA3AF' }} /></button>}
//               </div>
//               <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
//                 <button onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
//                   <SlidersHorizontal className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                   <span className="hidden sm:inline">Filters</span>
//                 </button>
//                 <select value={sortBy} onChange={e => setSortBy(e.target.value)}
//                   className="text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl focus:outline-none"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                   <option value="featured">Featured</option>
//                   <option value="price-asc">Price ↑</option>
//                   <option value="price-desc">Price ↓</option>
//                 </select>
//                 <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                   <button onClick={() => setViewMode('grid')} className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'grid' ? '#0B1F3A' : '#fff', color: viewMode === 'grid' ? '#fff' : '#9CA3AF' }}>
//                     <Grid3x3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')} className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}>
//                     <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 mb-4 sm:mb-5">
//               <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
//               <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
//                 Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span>{' '}
//                 {activeCat.label.toLowerCase()} properties
//                 {statusTab !== 'all' && (
//                   <> · <span style={{ color: STATUS_TABS.find(s => s.id === statusTab)?.dotColor }}>
//                     {STATUS_TABS.find(s => s.id === statusTab)?.shortLabel}
//                   </span></>
//                 )}
//               </p>
//             </div>

//             {filtered.length === 0 ? (
//               <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#F5F7FA' }}>
//                   <Search className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#9CA3AF' }} />
//                 </div>
//                 <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>
//                   No {activeCat.label} properties found
//                 </h3>
//                 <p className="text-xs sm:text-sm mb-4 sm:mb-5" style={{ color: '#6B7280' }}>Try adjusting the filters above.</p>
//                 <button onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all') }}
//                   className="text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white" style={{ background: '#E63946' }}>
//                   Clear Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={viewMode === 'grid'
//                 ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5'
//                 : 'flex flex-col gap-3 sm:gap-4'}>
//                 {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode} />)}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ── Mobile Filter Drawer ── */}
//       {showFilters && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
//           <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto shadow-2xl">
//             <div className="flex items-center justify-between p-4 sm:p-5 sticky top-0 bg-white z-10"
//               style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Filters</span>
//               <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" style={{ color: '#0B1F3A' }} /></button>
//             </div>
//             <div className="p-4 sm:p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Budget</p>
//               <div className="flex flex-col gap-1">
//                 {BUDGETS.map((b, i) => (
//                   <button key={b.label} onClick={() => setBudgetIdx(i)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A' }}>
//                     {b.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="p-4 sm:p-5">
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Location</p>
//               <div className="flex flex-col gap-1">
//                 <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg"
//                   style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A' }}>
//                   All Locations
//                 </button>
//                 {LOCATIONS.map(l => (
//                   <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A' }}>
//                     {l}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {(budgetIdx > 0 || location !== 'all') && (
//               <div className="px-4 pb-4">
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all'); setShowFilters(false) }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


// 'use client'

// import { useState, useMemo, useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Link from 'next/link'
// import {
//   Search, Grid3x3, List, X, SlidersHorizontal,
//   MapPin, BedDouble, Bath, Maximize2, ArrowRight,
//   Home, Building2, Trees, Sparkles, RefreshCw,
//   ChevronDown, CheckCircle2, IndianRupee, LayoutGrid,
//   ArrowLeft
// } from 'lucide-react'
// import { properties } from '@/lib/data'
// import type { Property } from '@/lib/data'

// type Category = 'residential' | 'commercial' | 'farmhouse'
// type StatusTab = 'all' | 'under-construction' | 'ready-to-move' | 'recently-launched'
// type ListingType = 'all' | 'fresh' | 'resale'
// type ViewMode = 'grid' | 'list' | 'projects'

// const CATEGORIES: {
//   id: Category; label: string; sub: string; icon: React.ElementType
//   gradient: string; accentColor: string; lightBg: string
// }[] = [
//     { id: 'residential', label: 'Residential', sub: 'Apartments, Villas & Homes', icon: Home, gradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)', accentColor: '#E63946', lightBg: '#EBF0F7' },
//     { id: 'commercial', label: 'Commercial', sub: 'Offices, Shops & Spaces', icon: Building2, gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', accentColor: '#E63946', lightBg: '#F0EEFF' },
//     { id: 'farmhouse', label: 'Farm House', sub: 'Farms, Resorts & Land', icon: Trees, gradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 100%)', accentColor: '#E63946', lightBg: '#ECFDF5' },
//   ]

// const STATUS_TABS: { id: StatusTab; label: string; shortLabel: string; dotColor: string; tagBg: string; tagText: string }[] = [
//   { id: 'all', label: 'All Properties', shortLabel: 'All', dotColor: '#6B7280', tagBg: '#F5F7FA', tagText: '#6B7280' },
//   { id: 'under-construction', label: 'Under Construction', shortLabel: 'Under Const.', dotColor: '#2563EB', tagBg: 'rgba(37,99,235,0.10)', tagText: '#2563EB' },
//   { id: 'ready-to-move', label: 'Ready to Move', shortLabel: 'Ready', dotColor: '#059669', tagBg: 'rgba(5,150,105,0.10)', tagText: '#059669' },
//   { id: 'recently-launched', label: 'Recently Launched', shortLabel: 'New Launch', dotColor: '#D97706', tagBg: 'rgba(217,119,6,0.10)', tagText: '#D97706' },
// ]

// const BUDGETS = [
//   { label: 'Any Budget', min: 0, max: 999999999 },
//   { label: 'Under ₹50L', min: 0, max: 5000000 },
//   { label: '₹50L – ₹1Cr', min: 5000000, max: 10000000 },
//   { label: '₹1Cr – ₹2Cr', min: 10000000, max: 20000000 },
//   { label: '₹2Cr – ₹5Cr', min: 20000000, max: 50000000 },
//   { label: 'Above ₹5Cr', min: 50000000, max: 999999999 },
// ]

// const HOME_BUDGET_MAP: Record<string, number> = {
//   'Under ₹50 Lakh': 1, '₹50L–₹1 Cr': 2, '₹1–₂ Cr': 3, '₹2–5 Cr': 4, 'Above ₹5 Cr': 5,
// }

// const LOCATIONS = [
//   'Vrindavan Yojna', 'Shaheed Path', 'Gomti Nagar', 'Hazratganj',
//   'Aliganj', 'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
// ]

// function getCategory(p: Property): Category {
//   if (p.category === 'Commercial') return 'commercial'
//   if (p.category === 'Plot') return 'farmhouse'
//   return 'residential'
// }
// function getStatus(p: Property): StatusTab {
//   if (p.status === 'Under Construction') return 'under-construction'
//   if (p.status === 'Ready to Move') return 'ready-to-move'
//   if (p.status === 'New Launch') return 'recently-launched'
//   return 'ready-to-move'
// }
// function getListingType(p: Property): 'fresh' | 'resale' {
//   return p.subtype === 'resell' ? 'resale' : 'fresh'
// }

// // ─── Property Card ──────────────────────────────────────────────────────────

// function PropertyCard({ property, view }: { property: Property; view: 'grid' | 'list' }) {
//   const ltype = getListingType(property)
//   const pstatus = getStatus(property)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   if (view === 'list') {
//     return (
//       <Link href={`/properties/${property.slug}`} className="group block">
//         <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex transition-all duration-300 group-hover:shadow-lg"
//           style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 8px rgba(11,31,58,0.05)' }}>
//           <div className="relative shrink-0 w-28 h-28 sm:w-48 sm:h-36"
//             style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//             <div className="absolute inset-0 opacity-[0.08]"
//               style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
//             {property.badge && (
//               <span className="absolute top-2 left-2 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded z-10"
//                 style={{ background: '#E63946' }}>{property.badge}</span>
//             )}
//             <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3"
//               style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
//               <p className="text-white font-serif font-bold text-xs sm:text-base">{property.price}</p>
//             </div>
//           </div>
//           <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between min-w-0">
//             <div>
//               <div className="flex items-start justify-between gap-1 mb-1">
//                 <h3 className="font-serif font-semibold text-xs sm:text-sm leading-tight line-clamp-2" style={{ color: '#0B1F3A' }}>
//                   {property.title}
//                 </h3>
//                 <div className="flex gap-1 shrink-0">
//                   <span className="text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full"
//                     style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>{stCfg.shortLabel}</span>
//                   <span className="hidden sm:inline text-[10px] font-bold px-2 py-0.5 rounded-full"
//                     style={{ background: ltype === 'fresh' ? '#DCFCE7' : '#EFF6FF', color: ltype === 'fresh' ? '#059669' : '#2563EB' }}>
//                     {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 text-[10px] sm:text-xs mb-1 sm:mb-2" style={{ color: '#6B7280' }}>
//                 <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" style={{ color: '#E63946' }} />
//                 <span className="truncate">{property.location}</span>
//               </div>
//               {property.bedrooms > 0 && (
//                 <div className="hidden sm:flex gap-3 text-xs" style={{ color: '#6B7280' }}>
//                   <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" />{property.area}</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-1.5 pt-1.5 sm:mt-2 sm:pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//               <span className="text-[10px] sm:text-xs truncate" style={{ color: '#6B7280' }}>
//                 {property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}
//               </span>
//               <span className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold shrink-0" style={{ color: '#E63946' }}>
//                 View <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     )
//   }

//   return (
//     <Link href={`/properties/${property.slug}`} className="group block h-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {property.mainImage ? (
//             <img src={property.mainImage} alt={property.title} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
//           <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//             {property.badge && (
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {property.badge}
//               </span>
//             )}
//           </div>
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: ltype === 'fresh' ? 'rgba(5,150,105,0.90)' : 'rgba(37,99,235,0.90)' }}>
//               {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//             </span>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{property.category} · {property.area}</p>
//           </div>
//         </div>
//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2" style={{ color: '#0B1F3A' }}>
//             {property.title}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{property.location}</span>
//           </div>
//           {property.bedrooms > 0 && (
//             <div className="flex gap-3 text-xs pb-3 mb-3" style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
//               <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds</span>
//               <span className="flex items-center gap-1"><Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths</span>
//               <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}</span>
//             </div>
//           )}
//           <div className="flex flex-wrap gap-1 flex-1 mb-3">
//             {property.amenities.slice(0, 2).map(a => (
//               <span key={a} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>
//             ))}
//             {property.amenities.length > 2 && (
//               <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: '#FEE8EA', color: '#E63946' }}>
//                 +{property.amenities.length - 2}
//               </span>
//             )}
//           </div>
//           <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-[10px]" style={{ color: '#6B7280' }}>
//               {property.developer ? `🏗 ${property.developer}` : property.ownerName ? `👤 Owner` : property.category}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Project Card ────────────────────────────────────────────────────────────

// function ProjectCard({ name, count, sample, onClick }: {
//   name: string; count: number; sample: Property; onClick: () => void
// }) {
//   const pstatus = getStatus(sample)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   return (
//     <button onClick={onClick} className="group text-left w-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {sample.mainImage ? (
//             <img src={sample.mainImage} alt={name} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${sample.gradientFrom}, ${sample.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

//           {/* Status badge */}
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>

//           {/* Badge */}
//           {sample.badge && (
//             <div className="absolute top-3 left-3 z-10">
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {sample.badge}
//               </span>
//             </div>
//           )}

//           {/* Units count */}
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: 'rgba(11,31,58,0.80)' }}>
//               {count} {count === 1 ? 'Unit' : 'Units'}
//             </span>
//           </div>

//           {/* Price */}
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{sample.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {sample.category} · Starting Price
//             </p>
//           </div>
//         </div>

//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-base mb-1.5" style={{ color: '#0B1F3A' }}>
//             {name}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{sample.location}</span>
//           </div>
//           <div className="flex items-center justify-between pt-2 mt-auto" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-xs font-semibold" style={{ color: '#0B1F3A' }}>
//               {sample.developer ?? 'Owner Direct'}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View {count} {count === 1 ? 'Unit' : 'Units'} <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </button>
//   )
// }

// // ─── Main Page ───────────────────────────────────────────────────────────────

// export default function PropertiesClient() {
//   const searchParams = useSearchParams()
//   const [category, setCategory] = useState<Category>('residential')
//   const [statusTab, setStatusTab] = useState<StatusTab>('all')
//   const [listingType, setListingType] = useState<ListingType>('all')
//   const [search, setSearch] = useState('')
//   const [budgetIdx, setBudgetIdx] = useState(0)
//   const [location, setLocation] = useState('all')
//   const [sortBy, setSortBy] = useState('featured')
//   const [viewMode, setViewMode] = useState<ViewMode>('projects')  // default: projects
//   const [selectedProject, setSelectedProject] = useState<string | null>(null)
//   const [showFilters, setShowFilters] = useState(false)
//   const [openBudget, setOpenBudget] = useState(true)
//   const [openLoc, setOpenLoc] = useState(true)

//   useEffect(() => {
//     const loc = searchParams.get('location')
//     const budget = searchParams.get('budget')
//     const type = searchParams.get('type')
//     const status = searchParams.get('status')
//     const search = searchParams.get('search')

//     if (loc && LOCATIONS.includes(loc)) setLocation(loc)
//     if (budget) { const idx = HOME_BUDGET_MAP[budget]; if (idx !== undefined) setBudgetIdx(idx) }
//     if (type) setSearch(type)

//     if (search) {
//       setSearch(search)
//       // Auto-switch category + go to grid view
//       const q = search.toLowerCase()
//       const match = properties.find(p =>
//         p.title.toLowerCase().includes(q) ||
//         (p.developer ?? '').toLowerCase().includes(q)
//       )
//       if (match) {
//         if (match.category === 'Commercial') setCategory('commercial')
//         else if (match.category === 'Plot') setCategory('farmhouse')
//         else setCategory('residential')
//         setSelectedProject(match.developer ?? match.title)
//         setViewMode('grid')
//       }
//     }

//     const validStatuses: StatusTab[] = ['under-construction', 'ready-to-move', 'recently-launched']
//     if (status && validStatuses.includes(status as StatusTab)) setStatusTab(status as StatusTab)
//   }, [searchParams])

//   const catCounts = useMemo(() => ({
//     residential: properties.filter(p => getCategory(p) === 'residential').length,
//     commercial: properties.filter(p => getCategory(p) === 'commercial').length,
//     farmhouse: properties.filter(p => getCategory(p) === 'farmhouse').length,
//   }), [])

//   // ── Projects grouped by developer ──
//   const projects = useMemo(() => {
//     const base = properties.filter(p => getCategory(p) === category)
//     const map = new Map<string, { key: string; count: number; sample: Property }>()
//     base.forEach(p => {
//       const key = p.developer ?? p.title
//       if (!map.has(key)) map.set(key, { key, count: 0, sample: p })
//       map.get(key)!.count++
//     })
//     return Array.from(map.values())
//   }, [category])

//   const filtered = useMemo(() => {
//     let r = properties.filter(p => getCategory(p) === category)
//     // If project selected, filter by that project
//     if (selectedProject) r = r.filter(p => (p.developer ?? p.title) === selectedProject)
//     if (statusTab !== 'all') r = r.filter(p => getStatus(p) === statusTab)
//     if (listingType !== 'all') r = r.filter(p => getListingType(p) === listingType)
//     if (search.trim() && !selectedProject) {
//       const q = search.toLowerCase()
//       r = r.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.developer ?? '').toLowerCase().includes(q) || (p.badge ?? '').toLowerCase().includes(q))
//     }
//     if (budgetIdx > 0) { const { min, max } = BUDGETS[budgetIdx]; r = r.filter(p => p.priceValue >= min && p.priceValue <= max) }
//     if (location !== 'all') r = r.filter(p => p.location.includes(location))
//     if (sortBy === 'price-asc') r = [...r].sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') r = [...r].sort((a, b) => b.priceValue - a.priceValue)
//     else r = [...r].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//     return r
//   }, [category, statusTab, listingType, search, budgetIdx, location, sortBy, selectedProject])

//   const baseForCat = properties.filter(p => getCategory(p) === category)
//   const statCount = (s: StatusTab) => s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
//   const typeCount = (t: ListingType) => t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length
//   const activeCat = CATEGORIES.find(c => c.id === category)!

//   const isProjectView = viewMode === 'projects' && !selectedProject

//   return (
//     <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

//       {/* ── SECTION A — CATEGORY ── */}
//       <div style={{ background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)' }} className="pt-20 relative">
//         <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
//           style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-0">
//           <p className="text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2" style={{ color: '#E63946' }}>
//             Browse Properties
//           </p>
//           <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-8">
//             Find Your Property
//           </h1>
//           <div className="grid grid-cols-3 gap-2 sm:gap-4">
//             {CATEGORIES.map(cat => {
//               const Icon = cat.icon
//               const isActive = category === cat.id
//               return (
//                 <button key={cat.id}
//                   onClick={() => {
//                     setCategory(cat.id)
//                     setStatusTab('all')
//                     setListingType('all')
//                     setSelectedProject(null)
//                     setViewMode('projects')
//                   }}
//                   className="relative rounded-t-xl sm:rounded-t-2xl overflow-hidden text-left transition-all duration-300"
//                   style={{
//                     background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
//                     border: `2px solid ${isActive ? '#E63946' : 'rgba(255,255,255,0.10)'}`,
//                     borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
//                     transform: isActive ? 'translateY(2px)' : 'translateY(0)',
//                     boxShadow: isActive ? '0 -4px 24px rgba(230,57,70,0.20)' : 'none',
//                     padding: '10px 10px 12px',
//                   }}>
//                   {isActive && <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#E63946' }} />}
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2"
//                     style={{ background: isActive ? '#FEE8EA' : 'rgba(255,255,255,0.12)' }}>
//                     <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isActive ? '#E63946' : '#fff' }} />
//                   </div>
//                   <p className="font-serif font-bold text-xs sm:text-lg leading-none mb-0.5"
//                     style={{ color: isActive ? '#0B1F3A' : '#fff' }}>{cat.label}</p>
//                   <p className="hidden sm:block text-xs" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>{cat.sub}</p>
//                   <p className="font-serif font-bold text-base sm:text-2xl mt-1"
//                     style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>{catCounts[cat.id]}</p>
//                   <p className="text-[9px] sm:text-[10px]"
//                     style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>listings</p>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION B — STATUS TABS ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             {STATUS_TABS.map(s => {
//               const isActive = statusTab === s.id
//               return (
//                 <button key={s.id} onClick={() => setStatusTab(s.id)}
//                   className="flex items-center gap-1.5 py-3 sm:py-4 px-3 sm:px-5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
//                   style={{ color: isActive ? '#E63946' : '#6B7280' }}>
//                   <span className="w-2 h-2 rounded-full shrink-0" style={{ background: isActive ? '#E63946' : s.dotColor }} />
//                   <span className="sm:hidden">{s.shortLabel}</span>
//                   <span className="hidden sm:inline">{s.label}</span>
//                   <span className="text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold"
//                     style={{ background: isActive ? '#FEE8EA' : '#F5F7FA', color: isActive ? '#E63946' : '#9CA3AF' }}>
//                     {statCount(s.id)}
//                   </span>
//                   {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION C — LISTING TYPE ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//           <div className="flex items-center justify-between gap-2 sm:gap-4">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#9CA3AF' }}>
//                 <span className="hidden sm:inline">Listing </span>Type:
//               </p>
//               <div className="flex rounded-lg sm:rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2' }}>
//                 <button onClick={() => setListingType('all')}
//                   className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'all' ? '#0B1F3A' : '#FFFFFF', color: listingType === 'all' ? '#fff' : '#6B7280' }}>
//                   All ({typeCount('all')})
//                 </button>
//                 <button onClick={() => setListingType('fresh')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'fresh' ? '#059669' : '#FFFFFF', color: listingType === 'fresh' ? '#fff' : '#6B7280', borderLeft: '1px solid #E8ECF2', borderRight: '1px solid #E8ECF2' }}>
//                   <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Fresh
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'fresh' ? 'rgba(255,255,255,0.25)' : '#DCFCE7', color: listingType === 'fresh' ? '#fff' : '#059669' }}>
//                     {typeCount('fresh')}
//                   </span>
//                 </button>
//                 <button onClick={() => setListingType('resale')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'resale' ? '#2563EB' : '#FFFFFF', color: listingType === 'resale' ? '#fff' : '#6B7280' }}>
//                   <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Resale
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'resale' ? 'rgba(255,255,255,0.25)' : '#EFF6FF', color: listingType === 'resale' ? '#fff' : '#2563EB' }}>
//                     {typeCount('resale')}
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold"
//               style={{ background: '#FEE8EA', color: '#E63946' }}>
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//               {activeCat.label} · {isProjectView ? `${projects.length} Projects` : `${filtered.length} Units`}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN BODY ── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
//         <div className="flex gap-5 sm:gap-6">

//           {/* Sidebar */}
//           <div className="hidden lg:block w-60 shrink-0">
//             <div className="sticky top-24 space-y-4">
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenBudget(!openBudget)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openBudget ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <IndianRupee className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Budget</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openBudget ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openBudget && (
//                   <div className="p-3 flex flex-col gap-1">
//                     {BUDGETS.map((b, i) => (
//                       <button key={b.label} onClick={() => setBudgetIdx(i)}
//                         className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A', fontWeight: budgetIdx === i ? 600 : 400 }}>
//                         {b.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenLoc(!openLoc)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openLoc ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Location</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openLoc ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openLoc && (
//                   <div className="p-3 flex flex-col gap-1">
//                     <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                       style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A', fontWeight: location === 'all' ? 600 : 400 }}>
//                       All Locations
//                     </button>
//                     {LOCATIONS.map(l => (
//                       <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A', fontWeight: location === l ? 600 : 400 }}>
//                         {l}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               {(budgetIdx > 0 || location !== 'all') && (
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all') }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Grid area */}
//           <div className="flex-1 min-w-0">

//             {/* Search + controls */}
//             <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
//               <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl flex-1 min-w-0"
//                 style={{ background: '#FFFFFF', border: '1px solid #E8ECF2' }}>
//                 <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <input type="text" placeholder="Search projects..."
//                   value={search}
//                   onChange={e => {
//                     setSearch(e.target.value)
//                     setSelectedProject(null)
//                     setViewMode('grid')
//                   }}
//                   className="w-full bg-transparent text-xs sm:text-sm focus:outline-none" style={{ color: '#1A1A1A' }} />
//                 {search && <button onClick={() => { setSearch(''); setSelectedProject(null); setViewMode('projects') }}>
//                   <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9CA3AF' }} />
//                 </button>}
//               </div>
//               <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
//                 <button onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
//                   <SlidersHorizontal className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                   <span className="hidden sm:inline">Filters</span>
//                 </button>
//                 {/* Sort — only when not in project view */}
//                 {!isProjectView && (
//                   <select value={sortBy} onChange={e => setSortBy(e.target.value)}
//                     className="text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl focus:outline-none"
//                     style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                     <option value="featured">Featured</option>
//                     <option value="price-asc">Price ↑</option>
//                     <option value="price-desc">Price ↓</option>
//                   </select>
//                 )}
//                 {/* View toggle */}
//                 <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                   <button onClick={() => { setViewMode('projects'); setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: isProjectView ? '#0B1F3A' : '#fff', color: isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Projects View">
//                     <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => { setViewMode('grid'); if (!selectedProject) setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'grid' && !isProjectView ? '#0B1F3A' : '#fff', color: viewMode === 'grid' && !isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Grid View">
//                     <Grid3x3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}
//                     title="List View">
//                     <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Back button when project is selected */}
//             {selectedProject && (
//               <button
//                 onClick={() => { setSelectedProject(null); setViewMode('projects'); setSearch('') }}
//                 className="flex items-center gap-2 text-sm font-semibold mb-4 px-3 py-2 rounded-lg transition-all"
//                 style={{ color: '#E63946', background: '#FEE8EA' }}>
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Projects
//               </button>
//             )}

//             {/* Result count */}
//             <div className="flex items-center gap-2 mb-4 sm:mb-5">
//               <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
//               <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
//                 {isProjectView ? (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{projects.length}</span> projects in {activeCat.label}</>
//                 ) : selectedProject ? (
//                   <><span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> units in <span className="font-bold" style={{ color: '#E63946' }}>{selectedProject}</span></>
//                 ) : (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> {activeCat.label.toLowerCase()} properties</>
//                 )}
//               </p>
//             </div>

//             {/* ── VIEWS ── */}

//             {isProjectView ? (
//               // Projects grid
//               projects.length === 0 ? (
//                 <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                   <Building2 className="w-10 h-10 mx-auto mb-4" style={{ color: '#9CA3AF' }} />
//                   <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: '#0B1F3A' }}>No projects found</h3>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
//                   {projects.map(proj => (
//                     <ProjectCard
//                       key={proj.key}
//                       name={proj.key}
//                       count={proj.count}
//                       sample={proj.sample}
//                       onClick={() => { setSelectedProject(proj.key); setViewMode('grid') }}
//                     />
//                   ))}
//                 </div>
//               )
//             ) : filtered.length === 0 ? (
//               <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#F5F7FA' }}>
//                   <Search className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#9CA3AF' }} />
//                 </div>
//                 <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>No properties found</h3>
//                 <p className="text-xs sm:text-sm mb-4 sm:mb-5" style={{ color: '#6B7280' }}>Try adjusting the filters above.</p>
//                 <button onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all'); setSelectedProject(null); setViewMode('projects') }}
//                   className="text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white" style={{ background: '#E63946' }}>
//                   Clear Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={viewMode === 'grid'
//                 ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5'
//                 : 'flex flex-col gap-3 sm:gap-4'}>
//                 {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode === 'list' ? 'list' : 'grid'} />)}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Filter Drawer */}
//       {showFilters && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
//           <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto shadow-2xl">
//             <div className="flex items-center justify-between p-4 sm:p-5 sticky top-0 bg-white z-10" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Filters</span>
//               <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" style={{ color: '#0B1F3A' }} /></button>
//             </div>
//             <div className="p-4 sm:p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Budget</p>
//               <div className="flex flex-col gap-1">
//                 {BUDGETS.map((b, i) => (
//                   <button key={b.label} onClick={() => setBudgetIdx(i)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A' }}>
//                     {b.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="p-4 sm:p-5">
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Location</p>
//               <div className="flex flex-col gap-1">
//                 <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg"
//                   style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A' }}>
//                   All Locations
//                 </button>
//                 {LOCATIONS.map(l => (
//                   <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A' }}>
//                     {l}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {(budgetIdx > 0 || location !== 'all') && (
//               <div className="px-4 pb-4">
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all'); setShowFilters(false) }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


// 'use client'

// import { useState, useMemo, useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Link from 'next/link'
// import {
//   Search, Grid3x3, List, X, SlidersHorizontal,
//   MapPin, BedDouble, Bath, Maximize2, ArrowRight,
//   Home, Building2, Trees, Sparkles, RefreshCw,
//   ChevronDown, CheckCircle2, IndianRupee, LayoutGrid,
//   ArrowLeft
// } from 'lucide-react'
// import { properties } from '@/lib/data'
// import type { Property } from '@/lib/data'

// type Category = 'residential' | 'commercial' | 'farmhouse'
// type StatusTab = 'all' | 'under-construction' | 'ready-to-move' | 'recently-launched'
// type ListingType = 'all' | 'fresh' | 'resale'
// type ViewMode = 'grid' | 'list' | 'projects'

// const CATEGORIES: {
//   id: Category; label: string; sub: string; icon: React.ElementType
//   gradient: string; accentColor: string; lightBg: string
// }[] = [
//     { id: 'residential', label: 'Residential', sub: 'Apartments, Villas & Homes', icon: Home, gradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)', accentColor: '#E63946', lightBg: '#EBF0F7' },
//     { id: 'commercial', label: 'Commercial', sub: 'Offices, Shops & Spaces', icon: Building2, gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', accentColor: '#E63946', lightBg: '#F0EEFF' },
//     { id: 'farmhouse', label: 'Farm House', sub: 'Farms, Resorts & Land', icon: Trees, gradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 100%)', accentColor: '#E63946', lightBg: '#ECFDF5' },
//   ]

// const STATUS_TABS: { id: StatusTab; label: string; shortLabel: string; dotColor: string; tagBg: string; tagText: string }[] = [
//   { id: 'all', label: 'All Properties', shortLabel: 'All', dotColor: '#6B7280', tagBg: '#F5F7FA', tagText: '#6B7280' },
//   { id: 'under-construction', label: 'Under Construction', shortLabel: 'Under Const.', dotColor: '#2563EB', tagBg: 'rgba(37,99,235,0.10)', tagText: '#2563EB' },
//   { id: 'ready-to-move', label: 'Ready to Move', shortLabel: 'Ready', dotColor: '#059669', tagBg: 'rgba(5,150,105,0.10)', tagText: '#059669' },
//   { id: 'recently-launched', label: 'Recently Launched', shortLabel: 'New Launch', dotColor: '#D97706', tagBg: 'rgba(217,119,6,0.10)', tagText: '#D97706' },
// ]

// const BUDGETS = [
//   { label: 'Any Budget', min: 0, max: 999999999 },
//   { label: 'Under ₹50L', min: 0, max: 5000000 },
//   { label: '₹50L – ₹1Cr', min: 5000000, max: 10000000 },
//   { label: '₹1Cr – ₹2Cr', min: 10000000, max: 20000000 },
//   { label: '₹2Cr – ₹5Cr', min: 20000000, max: 50000000 },
//   { label: 'Above ₹5Cr', min: 50000000, max: 999999999 },
// ]

// const HOME_BUDGET_MAP: Record<string, number> = {
//   'Under ₹50 Lakh': 1, '₹50L–₹1 Cr': 2, '₹1–₂ Cr': 3, '₹2–5 Cr': 4, 'Above ₹5 Cr': 5,
// }

// const LOCATIONS = [
//   'Vrindavan Yojna', 'Shaheed Path', 'Gomti Nagar', 'Hazratganj',
//   'Aliganj', 'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
// ]

// function getCategory(p: Property): Category {
//   if (p.category === 'Commercial') return 'commercial'
//   if (p.category === 'Plot') return 'farmhouse'
//   return 'residential'
// }
// function getStatus(p: Property): StatusTab {
//   if (p.status === 'Under Construction') return 'under-construction'
//   if (p.status === 'Ready to Move') return 'ready-to-move'
//   if (p.status === 'New Launch') return 'recently-launched'
//   return 'ready-to-move'
// }
// function getListingType(p: Property): 'fresh' | 'resale' {
//   return p.subtype === 'resell' ? 'resale' : 'fresh'
// }

// // ─── Property Card ──────────────────────────────────────────────────────────

// function PropertyCard({ property, view }: { property: Property; view: 'grid' | 'list' }) {
//   const ltype = getListingType(property)
//   const pstatus = getStatus(property)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   if (view === 'list') {
//     return (
//       <Link href={`/properties/${property.slug}`} className="group block">
//         <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex transition-all duration-300 group-hover:shadow-lg"
//           style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 8px rgba(11,31,58,0.05)' }}>
//           <div className="relative shrink-0 w-28 h-28 sm:w-48 sm:h-36"
//             style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//             <div className="absolute inset-0 opacity-[0.08]"
//               style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
//             {property.badge && (
//               <span className="absolute top-2 left-2 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded z-10"
//                 style={{ background: '#E63946' }}>{property.badge}</span>
//             )}
//             <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3"
//               style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
//               <p className="text-white font-serif font-bold text-xs sm:text-base">{property.price}</p>
//             </div>
//           </div>
//           <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between min-w-0">
//             <div>
//               <div className="flex items-start justify-between gap-1 mb-1">
//                 <h3 className="font-serif font-semibold text-xs sm:text-sm leading-tight line-clamp-2" style={{ color: '#0B1F3A' }}>
//                   {property.title}
//                 </h3>
//                 <div className="flex gap-1 shrink-0">
//                   <span className="text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full"
//                     style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>{stCfg.shortLabel}</span>
//                   <span className="hidden sm:inline text-[10px] font-bold px-2 py-0.5 rounded-full"
//                     style={{ background: ltype === 'fresh' ? '#DCFCE7' : '#EFF6FF', color: ltype === 'fresh' ? '#059669' : '#2563EB' }}>
//                     {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 text-[10px] sm:text-xs mb-1 sm:mb-2" style={{ color: '#6B7280' }}>
//                 <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" style={{ color: '#E63946' }} />
//                 <span className="truncate">{property.location}</span>
//               </div>
//               {property.bedrooms > 0 && (
//                 <div className="hidden sm:flex gap-3 text-xs" style={{ color: '#6B7280' }}>
//                   <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" />{property.area}</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-1.5 pt-1.5 sm:mt-2 sm:pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//               <span className="text-[10px] sm:text-xs truncate" style={{ color: '#6B7280' }}>
//                 {property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}
//               </span>
//               <span className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold shrink-0" style={{ color: '#E63946' }}>
//                 View <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     )
//   }

//   return (
//     <Link href={`/properties/${property.slug}`} className="group block h-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {property.mainImage ? (
//             <img src={property.mainImage} alt={property.title} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
//           <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//             {property.badge && (
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {property.badge}
//               </span>
//             )}
//           </div>
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: ltype === 'fresh' ? 'rgba(5,150,105,0.90)' : 'rgba(37,99,235,0.90)' }}>
//               {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//             </span>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{property.category} · {property.area}</p>
//           </div>
//         </div>
//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2" style={{ color: '#0B1F3A' }}>
//             {property.title}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{property.location}</span>
//           </div>
//           {property.bedrooms > 0 && (
//             <div className="flex gap-3 text-xs pb-3 mb-3" style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
//               <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds</span>
//               <span className="flex items-center gap-1"><Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths</span>
//               <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}</span>
//             </div>
//           )}
//           <div className="flex flex-wrap gap-1 flex-1 mb-3">
//             {property.amenities.slice(0, 2).map(a => (
//               <span key={a} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>
//             ))}
//             {property.amenities.length > 2 && (
//               <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: '#FEE8EA', color: '#E63946' }}>
//                 +{property.amenities.length - 2}
//               </span>
//             )}
//           </div>
//           <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-[10px]" style={{ color: '#6B7280' }}>
//               {property.developer ? `🏗 ${property.developer}` : property.ownerName ? `👤 Owner` : property.category}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Project Card ────────────────────────────────────────────────────────────

// function ProjectCard({ name, count, sample, onClick }: {
//   name: string; count: number; sample: Property; onClick: () => void
// }) {
//   const pstatus = getStatus(sample)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   return (
//     <button onClick={onClick} className="group text-left w-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {sample.mainImage ? (
//             <img src={sample.mainImage} alt={name} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${sample.gradientFrom}, ${sample.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

//           {/* Status badge */}
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>

//           {/* Badge */}
//           {sample.badge && (
//             <div className="absolute top-3 left-3 z-10">
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {sample.badge}
//               </span>
//             </div>
//           )}

//           {/* Units count */}
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: 'rgba(11,31,58,0.80)' }}>
//               {count} {count === 1 ? 'Unit' : 'Units'}
//             </span>
//           </div>

//           {/* Price */}
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{sample.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {sample.category} · Starting Price
//             </p>
//           </div>
//         </div>

//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-base mb-1.5" style={{ color: '#0B1F3A' }}>
//             {name}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{sample.location}</span>
//           </div>
//           <div className="flex items-center justify-between pt-2 mt-auto" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-xs font-semibold" style={{ color: '#0B1F3A' }}>
//               {sample.developer ?? 'Owner Direct'}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View {count} {count === 1 ? 'Unit' : 'Units'} <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </button>
//   )
// }

// // ─── Main Page ───────────────────────────────────────────────────────────────

// export default function PropertiesClient() {
//   const searchParams = useSearchParams()
//   const [category, setCategory] = useState<Category>('residential')
//   const [statusTab, setStatusTab] = useState<StatusTab>('all')
//   const [listingType, setListingType] = useState<ListingType>('all')
//   const [search, setSearch] = useState('')
//   const [budgetIdx, setBudgetIdx] = useState(0)
//   const [location, setLocation] = useState('all')
//   const [sortBy, setSortBy] = useState('featured')
//   const [viewMode, setViewMode] = useState<ViewMode>('projects')  // default: projects
//   const [selectedProject, setSelectedProject] = useState<string | null>(null)
//   const [showFilters, setShowFilters] = useState(false)
//   const [openBudget, setOpenBudget] = useState(true)
//   const [openLoc, setOpenLoc] = useState(true)

//   useEffect(() => {
//     const loc = searchParams.get('location')
//     const budget = searchParams.get('budget')
//     const type = searchParams.get('type')
//     const status = searchParams.get('status')
//     const search = searchParams.get('search')

//     if (loc && LOCATIONS.includes(loc)) setLocation(loc)
//     if (budget) { const idx = HOME_BUDGET_MAP[budget]; if (idx !== undefined) setBudgetIdx(idx) }
//     if (type) setSearch(type)

//     if (search) {
//       setSearch(search)
//       // Auto-switch category + go to grid view
//       const q = search.toLowerCase()
//       const match = properties.find(p =>
//         p.title.toLowerCase().includes(q) ||
//         (p.developer ?? '').toLowerCase().includes(q)
//       )
//       if (match) {
//         if (match.category === 'Commercial') setCategory('commercial')
//         else if (match.category === 'Plot') setCategory('farmhouse')
//         else setCategory('residential')
//         setSelectedProject(match.developer ?? match.title)
//         setViewMode('grid')
//       }
//     }

//     const validStatuses: StatusTab[] = ['under-construction', 'ready-to-move', 'recently-launched']
//     if (status && validStatuses.includes(status as StatusTab)) setStatusTab(status as StatusTab)
//   }, [searchParams])

//   const catCounts = useMemo(() => ({
//     residential: properties.filter(p => getCategory(p) === 'residential').length,
//     commercial: properties.filter(p => getCategory(p) === 'commercial').length,
//     farmhouse: properties.filter(p => getCategory(p) === 'farmhouse').length,
//   }), [])

//   // ── Projects grouped by developer ──
//   const projects = useMemo(() => {
//     const base = properties.filter(p => getCategory(p) === category)
//     const map = new Map<string, { key: string; count: number; sample: Property }>()
//     base.forEach(p => {
//       const key = p.developer ?? p.title
//       if (!map.has(key)) map.set(key, { key, count: 0, sample: p })
//       map.get(key)!.count++
//     })
//     return Array.from(map.values())
//   }, [category])

//   const filtered = useMemo(() => {
//     let r = properties.filter(p => getCategory(p) === category)
//     // If project selected, filter by that project
//     if (selectedProject) r = r.filter(p => (p.developer ?? p.title) === selectedProject)
//     if (statusTab !== 'all') r = r.filter(p => getStatus(p) === statusTab)
//     if (listingType !== 'all') r = r.filter(p => getListingType(p) === listingType)
//     if (search.trim() && !selectedProject) {
//       const q = search.toLowerCase()
//       r = r.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.developer ?? '').toLowerCase().includes(q) || (p.badge ?? '').toLowerCase().includes(q))
//     }
//     if (budgetIdx > 0) { const { min, max } = BUDGETS[budgetIdx]; r = r.filter(p => p.priceValue >= min && p.priceValue <= max) }
//     if (location !== 'all') r = r.filter(p => p.location.includes(location))
//     if (sortBy === 'price-asc') r = [...r].sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') r = [...r].sort((a, b) => b.priceValue - a.priceValue)
//     else r = [...r].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//     return r
//   }, [category, statusTab, listingType, search, budgetIdx, location, sortBy, selectedProject])

//   const baseForCat = properties.filter(p => getCategory(p) === category)
//   const statCount = (s: StatusTab) => s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
//   const typeCount = (t: ListingType) => t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length
//   const activeCat = CATEGORIES.find(c => c.id === category)!

//   const isProjectView = viewMode === 'projects' && !selectedProject

//   return (
//     <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

//       {/* ── SECTION A — CATEGORY ── */}
//       <div style={{ background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)' }} className="pt-20 relative">
//         <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
//           style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-0">
//           <p className="text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2" style={{ color: '#E63946' }}>
//             Browse Properties
//           </p>
//           <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-8">
//             Find Your Property
//           </h1>
//           <div className="grid grid-cols-3 gap-2 sm:gap-4">
//             {CATEGORIES.map(cat => {
//               const Icon = cat.icon
//               const isActive = category === cat.id
//               return (
//                 <button key={cat.id}
//                   onClick={() => {
//                     setCategory(cat.id)
//                     setStatusTab('all')
//                     setListingType('all')
//                     setSelectedProject(null)
//                     setViewMode('projects')
//                   }}
//                   className="relative rounded-t-xl sm:rounded-t-2xl overflow-hidden text-left transition-all duration-300"
//                   style={{
//                     background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
//                     border: `2px solid ${isActive ? '#E63946' : 'rgba(255,255,255,0.10)'}`,
//                     borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
//                     transform: isActive ? 'translateY(2px)' : 'translateY(0)',
//                     boxShadow: isActive ? '0 -4px 24px rgba(230,57,70,0.20)' : 'none',
//                     padding: '10px 10px 12px',
//                   }}>
//                   {isActive && <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#E63946' }} />}
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2"
//                     style={{ background: isActive ? '#FEE8EA' : 'rgba(255,255,255,0.12)' }}>
//                     <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isActive ? '#E63946' : '#fff' }} />
//                   </div>
//                   <p className="font-serif font-bold text-xs sm:text-lg leading-none mb-0.5"
//                     style={{ color: isActive ? '#0B1F3A' : '#fff' }}>{cat.label}</p>
//                   <p className="hidden sm:block text-xs" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>{cat.sub}</p>
//                   <p className="font-serif font-bold text-base sm:text-2xl mt-1"
//                     style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>{catCounts[cat.id]}</p>
//                   <p className="text-[9px] sm:text-[10px]"
//                     style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>listings</p>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION B — STATUS TABS ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             {STATUS_TABS.map(s => {
//               const isActive = statusTab === s.id
//               return (
//                 <button key={s.id} onClick={() => setStatusTab(s.id)}
//                   className="flex items-center gap-1.5 py-3 sm:py-4 px-3 sm:px-5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
//                   style={{ color: isActive ? '#E63946' : '#6B7280' }}>
//                   <span className="w-2 h-2 rounded-full shrink-0" style={{ background: isActive ? '#E63946' : s.dotColor }} />
//                   <span className="sm:hidden">{s.shortLabel}</span>
//                   <span className="hidden sm:inline">{s.label}</span>
//                   <span className="text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold"
//                     style={{ background: isActive ? '#FEE8EA' : '#F5F7FA', color: isActive ? '#E63946' : '#9CA3AF' }}>
//                     {statCount(s.id)}
//                   </span>
//                   {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION C — LISTING TYPE ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//           <div className="flex items-center justify-between gap-2 sm:gap-4">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#9CA3AF' }}>
//                 <span className="hidden sm:inline">Listing </span>Type:
//               </p>
//               <div className="flex rounded-lg sm:rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2' }}>
//                 <button onClick={() => setListingType('all')}
//                   className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'all' ? '#0B1F3A' : '#FFFFFF', color: listingType === 'all' ? '#fff' : '#6B7280' }}>
//                   All ({typeCount('all')})
//                 </button>
//                 <button onClick={() => setListingType('fresh')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'fresh' ? '#059669' : '#FFFFFF', color: listingType === 'fresh' ? '#fff' : '#6B7280', borderLeft: '1px solid #E8ECF2', borderRight: '1px solid #E8ECF2' }}>
//                   <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Fresh
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'fresh' ? 'rgba(255,255,255,0.25)' : '#DCFCE7', color: listingType === 'fresh' ? '#fff' : '#059669' }}>
//                     {typeCount('fresh')}
//                   </span>
//                 </button>
//                 <button onClick={() => setListingType('resale')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'resale' ? '#2563EB' : '#FFFFFF', color: listingType === 'resale' ? '#fff' : '#6B7280' }}>
//                   <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Resale
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'resale' ? 'rgba(255,255,255,0.25)' : '#EFF6FF', color: listingType === 'resale' ? '#fff' : '#2563EB' }}>
//                     {typeCount('resale')}
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold"
//               style={{ background: '#FEE8EA', color: '#E63946' }}>
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//               {activeCat.label} · {isProjectView ? `${projects.length} Projects` : `${filtered.length} Units`}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN BODY ── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
//         <div className="flex gap-5 sm:gap-6">

//           {/* Sidebar */}
//           <div className="hidden lg:block w-60 shrink-0">
//             <div className="sticky top-24 space-y-4">
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenBudget(!openBudget)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openBudget ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <IndianRupee className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Budget</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openBudget ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openBudget && (
//                   <div className="p-3 flex flex-col gap-1">
//                     {BUDGETS.map((b, i) => (
//                       <button key={b.label} onClick={() => setBudgetIdx(i)}
//                         className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A', fontWeight: budgetIdx === i ? 600 : 400 }}>
//                         {b.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenLoc(!openLoc)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openLoc ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Location</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openLoc ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openLoc && (
//                   <div className="p-3 flex flex-col gap-1">
//                     <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                       style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A', fontWeight: location === 'all' ? 600 : 400 }}>
//                       All Locations
//                     </button>
//                     {LOCATIONS.map(l => (
//                       <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A', fontWeight: location === l ? 600 : 400 }}>
//                         {l}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               {(budgetIdx > 0 || location !== 'all') && (
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all') }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Grid area */}
//           <div className="flex-1 min-w-0">

//             {/* Search + controls */}
//             <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
//               <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl flex-1 min-w-0"
//                 style={{ background: '#FFFFFF', border: '1px solid #E8ECF2' }}>
//                 <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <input type="text" placeholder="Search projects..."
//                   value={search}
//                   onChange={e => {
//                     setSearch(e.target.value)
//                     setSelectedProject(null)
//                     setViewMode('grid')
//                   }}
//                   className="w-full bg-transparent text-xs sm:text-sm focus:outline-none" style={{ color: '#1A1A1A' }} />
//                 {search && <button onClick={() => { setSearch(''); setSelectedProject(null); setViewMode('projects') }}>
//                   <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9CA3AF' }} />
//                 </button>}
//               </div>
//               <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
//                 <button onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
//                   <SlidersHorizontal className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                   <span className="hidden sm:inline">Filters</span>
//                 </button>
//                 {/* Sort — only when not in project view */}
//                 {!isProjectView && (
//                   <select value={sortBy} onChange={e => setSortBy(e.target.value)}
//                     className="text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl focus:outline-none"
//                     style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                     <option value="featured">Featured</option>
//                     <option value="price-asc">Price ↑</option>
//                     <option value="price-desc">Price ↓</option>
//                   </select>
//                 )}
//                 {/* View toggle */}
//                 <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                   <button onClick={() => { setViewMode('projects'); setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: isProjectView ? '#0B1F3A' : '#fff', color: isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Projects View">
//                     <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => { setViewMode('grid'); if (!selectedProject) setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'grid' && !isProjectView ? '#0B1F3A' : '#fff', color: viewMode === 'grid' && !isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Grid View">
//                     <Grid3x3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}
//                     title="List View">
//                     <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Back button when project is selected */}
//             {selectedProject && (
//               <button
//                 onClick={() => { setSelectedProject(null); setViewMode('projects'); setSearch('') }}
//                 className="flex items-center gap-2 text-sm font-semibold mb-4 px-3 py-2 rounded-lg transition-all"
//                 style={{ color: '#E63946', background: '#FEE8EA' }}>
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Projects
//               </button>
//             )}

//             {/* Result count */}
//             <div className="flex items-center gap-2 mb-4 sm:mb-5">
//               <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
//               <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
//                 {isProjectView ? (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{projects.length}</span> projects in {activeCat.label}</>
//                 ) : selectedProject ? (
//                   <><span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> units in <span className="font-bold" style={{ color: '#E63946' }}>{selectedProject}</span></>
//                 ) : (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> {activeCat.label.toLowerCase()} properties</>
//                 )}
//               </p>
//             </div>

//             {/* ── VIEWS ── */}

//             {isProjectView ? (
//               // Projects grid
//               projects.length === 0 ? (
//                 <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                   <Building2 className="w-10 h-10 mx-auto mb-4" style={{ color: '#9CA3AF' }} />
//                   <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: '#0B1F3A' }}>No projects found</h3>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
//                   {projects.map(proj => (
//                     <ProjectCard
//                       key={proj.key}
//                       name={proj.key}
//                       count={proj.count}
//                       sample={proj.sample}
//                       onClick={() => { setSelectedProject(proj.key); setViewMode('grid') }}
//                     />
//                   ))}
//                 </div>
//               )
//             ) : filtered.length === 0 ? (
//               <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#F5F7FA' }}>
//                   <Search className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#9CA3AF' }} />
//                 </div>
//                 <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>No properties found</h3>
//                 <p className="text-xs sm:text-sm mb-4 sm:mb-5" style={{ color: '#6B7280' }}>Try adjusting the filters above.</p>
//                 <button onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all'); setSelectedProject(null); setViewMode('projects') }}
//                   className="text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white" style={{ background: '#E63946' }}>
//                   Clear Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={viewMode === 'grid'
//                 ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5'
//                 : 'flex flex-col gap-3 sm:gap-4'}>
//                 {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode === 'list' ? 'list' : 'grid'} />)}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Filter Drawer */}
//       {showFilters && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
//           <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto shadow-2xl">
//             <div className="flex items-center justify-between p-4 sm:p-5 sticky top-0 bg-white z-10" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Filters</span>
//               <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" style={{ color: '#0B1F3A' }} /></button>
//             </div>
//             <div className="p-4 sm:p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Budget</p>
//               <div className="flex flex-col gap-1">
//                 {BUDGETS.map((b, i) => (
//                   <button key={b.label} onClick={() => setBudgetIdx(i)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A' }}>
//                     {b.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="p-4 sm:p-5">
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Location</p>
//               <div className="flex flex-col gap-1">
//                 <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg"
//                   style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A' }}>
//                   All Locations
//                 </button>
//                 {LOCATIONS.map(l => (
//                   <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A' }}>
//                     {l}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {(budgetIdx > 0 || location !== 'all') && (
//               <div className="px-4 pb-4">
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all'); setShowFilters(false) }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


// 'use client'

// import { useState, useMemo, useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Link from 'next/link'
// import {
//   Search, Grid3x3, List, X, SlidersHorizontal,
//   MapPin, BedDouble, Bath, Maximize2, ArrowRight,
//   Home, Building2, Trees, Sparkles, RefreshCw,
//   ChevronDown, CheckCircle2, IndianRupee, LayoutGrid,
//   ArrowLeft
// } from 'lucide-react'
// import { properties } from '@/lib/data'
// import type { Property } from '@/lib/data'

// type Category = 'residential' | 'commercial' | 'farmhouse'
// type StatusTab = 'all' | 'under-construction' | 'ready-to-move' | 'recently-launched'
// type ListingType = 'all' | 'fresh' | 'resale'
// type ViewMode = 'grid' | 'list' | 'projects'

// const CATEGORIES: {
//   id: Category; label: string; sub: string; icon: React.ElementType
//   gradient: string; accentColor: string; lightBg: string
// }[] = [
//     { id: 'residential', label: 'Residential', sub: 'Apartments, Villas & Homes', icon: Home, gradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)', accentColor: '#E63946', lightBg: '#EBF0F7' },
//     { id: 'commercial', label: 'Commercial', sub: 'Offices, Shops & Spaces', icon: Building2, gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', accentColor: '#E63946', lightBg: '#F0EEFF' },
//     { id: 'farmhouse', label: 'Farm House', sub: 'Farms, Resorts & Land', icon: Trees, gradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 100%)', accentColor: '#E63946', lightBg: '#ECFDF5' },
//   ]

// const STATUS_TABS: { id: StatusTab; label: string; shortLabel: string; dotColor: string; tagBg: string; tagText: string }[] = [
//   { id: 'all', label: 'All Properties', shortLabel: 'All', dotColor: '#6B7280', tagBg: '#F5F7FA', tagText: '#6B7280' },
//   { id: 'under-construction', label: 'Under Construction', shortLabel: 'Under Const.', dotColor: '#2563EB', tagBg: 'rgba(37,99,235,0.10)', tagText: '#2563EB' },
//   { id: 'ready-to-move', label: 'Ready to Move', shortLabel: 'Ready', dotColor: '#059669', tagBg: 'rgba(5,150,105,0.10)', tagText: '#059669' },
//   { id: 'recently-launched', label: 'Recently Launched', shortLabel: 'New Launch', dotColor: '#D97706', tagBg: 'rgba(217,119,6,0.10)', tagText: '#D97706' },
// ]

// const BUDGETS = [
//   { label: 'Any Budget', min: 0, max: 999999999 },
//   { label: 'Under ₹50L', min: 0, max: 5000000 },
//   { label: '₹50L – ₹1Cr', min: 5000000, max: 10000000 },
//   { label: '₹1Cr – ₹2Cr', min: 10000000, max: 20000000 },
//   { label: '₹2Cr – ₹5Cr', min: 20000000, max: 50000000 },
//   { label: 'Above ₹5Cr', min: 50000000, max: 999999999 },
// ]

// const HOME_BUDGET_MAP: Record<string, number> = {
//   'Under ₹50 Lakh': 1, '₹50L–₹1 Cr': 2, '₹1–₂ Cr': 3, '₹2–5 Cr': 4, 'Above ₹5 Cr': 5,
// }

// const LOCATIONS = [
//   'Vrindavan Yojna', 'Shaheed Path', 'Gomti Nagar', 'Hazratganj',
//   'Aliganj', 'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
// ]

// function getCategory(p: Property): Category {
//   if (p.category === 'Commercial') return 'commercial'
//   if (p.category === 'Plot') return 'farmhouse'
//   return 'residential'
// }
// function getStatus(p: Property): StatusTab {
//   if (p.status === 'Under Construction') return 'under-construction'
//   if (p.status === 'Ready to Move') return 'ready-to-move'
//   if (p.status === 'New Launch') return 'recently-launched'
//   return 'ready-to-move'
// }
// function getListingType(p: Property): 'fresh' | 'resale' {
//   return p.subtype === 'resell' ? 'resale' : 'fresh'
// }

// // ─── Property Card ──────────────────────────────────────────────────────────

// function PropertyCard({ property, view }: { property: Property; view: 'grid' | 'list' }) {
//   const ltype = getListingType(property)
//   const pstatus = getStatus(property)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   if (view === 'list') {
//     return (
//       <Link href={`/properties/${property.slug}`} className="group block">
//         <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex transition-all duration-300 group-hover:shadow-lg"
//           style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 8px rgba(11,31,58,0.05)' }}>
//           <div className="relative shrink-0 w-28 h-28 sm:w-48 sm:h-36"
//             style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//             <div className="absolute inset-0 opacity-[0.08]"
//               style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
//             {property.badge && (
//               <span className="absolute top-2 left-2 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded z-10"
//                 style={{ background: '#E63946' }}>{property.badge}</span>
//             )}
//             <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3"
//               style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
//               <p className="text-white font-serif font-bold text-xs sm:text-base">{property.price}</p>
//             </div>
//           </div>
//           <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between min-w-0">
//             <div>
//               <div className="flex items-start justify-between gap-1 mb-1">
//                 <h3 className="font-serif font-semibold text-xs sm:text-sm leading-tight line-clamp-2" style={{ color: '#0B1F3A' }}>
//                   {property.title}
//                 </h3>
//                 <div className="flex gap-1 shrink-0">
//                   <span className="text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full"
//                     style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>{stCfg.shortLabel}</span>
//                   <span className="hidden sm:inline text-[10px] font-bold px-2 py-0.5 rounded-full"
//                     style={{ background: ltype === 'fresh' ? '#DCFCE7' : '#EFF6FF', color: ltype === 'fresh' ? '#059669' : '#2563EB' }}>
//                     {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 text-[10px] sm:text-xs mb-1 sm:mb-2" style={{ color: '#6B7280' }}>
//                 <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" style={{ color: '#E63946' }} />
//                 <span className="truncate">{property.location}</span>
//               </div>
//               {property.bedrooms > 0 && (
//                 <div className="hidden sm:flex gap-3 text-xs" style={{ color: '#6B7280' }}>
//                   <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" />{property.area}</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-1.5 pt-1.5 sm:mt-2 sm:pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//               <span className="text-[10px] sm:text-xs truncate" style={{ color: '#6B7280' }}>
//                 {property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}
//               </span>
//               <span className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold shrink-0" style={{ color: '#E63946' }}>
//                 View <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     )
//   }

//   return (
//     <Link href={`/properties/${property.slug}`} className="group block h-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {property.mainImage ? (
//             <img src={property.mainImage} alt={property.title} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
//           <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//             {property.badge && (
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {property.badge}
//               </span>
//             )}
//           </div>
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: ltype === 'fresh' ? 'rgba(5,150,105,0.90)' : 'rgba(37,99,235,0.90)' }}>
//               {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//             </span>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{property.category} · {property.area}</p>
//           </div>
//         </div>
//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2" style={{ color: '#0B1F3A' }}>
//             {property.title}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{property.location}</span>
//           </div>
//           {property.bedrooms > 0 && (
//             <div className="flex gap-3 text-xs pb-3 mb-3" style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
//               <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds</span>
//               <span className="flex items-center gap-1"><Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths</span>
//               <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}</span>
//             </div>
//           )}
//           <div className="flex flex-wrap gap-1 flex-1 mb-3">
//             {property.amenities.slice(0, 2).map(a => (
//               <span key={a} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>
//             ))}
//             {property.amenities.length > 2 && (
//               <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: '#FEE8EA', color: '#E63946' }}>
//                 +{property.amenities.length - 2}
//               </span>
//             )}
//           </div>
//           <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-[10px]" style={{ color: '#6B7280' }}>
//               {property.developer ? `🏗 ${property.developer}` : property.ownerName ? `👤 Owner` : property.category}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Project Card ────────────────────────────────────────────────────────────

// function ProjectCard({ name, count, sample, onClick }: {
//   name: string; count: number; sample: Property; onClick: () => void
// }) {
//   const pstatus = getStatus(sample)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   return (
//     <button onClick={onClick} className="group text-left w-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {sample.mainImage ? (
//             <img src={sample.mainImage} alt={name} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${sample.gradientFrom}, ${sample.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

//           {/* Status badge */}
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>

//           {/* Badge */}
//           {sample.badge && (
//             <div className="absolute top-3 left-3 z-10">
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {sample.badge}
//               </span>
//             </div>
//           )}

//           {/* Units count */}
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: 'rgba(11,31,58,0.80)' }}>
//               {count} {count === 1 ? 'Unit' : 'Units'}
//             </span>
//           </div>

//           {/* Price */}
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{sample.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {sample.category} · Starting Price
//             </p>
//           </div>
//         </div>

//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-base mb-1.5" style={{ color: '#0B1F3A' }}>
//             {name}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{sample.location}</span>
//           </div>
//           <div className="flex items-center justify-between pt-2 mt-auto" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-xs font-semibold" style={{ color: '#0B1F3A' }}>
//               {sample.developer ?? 'Owner Direct'}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View {count} {count === 1 ? 'Unit' : 'Units'} <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </button>
//   )
// }

// // ─── Main Page ───────────────────────────────────────────────────────────────

// export default function PropertiesClient() {
//   const searchParams = useSearchParams()
//   const [category, setCategory] = useState<Category>('residential')
//   const [statusTab, setStatusTab] = useState<StatusTab>('all')
//   const [listingType, setListingType] = useState<ListingType>('all')
//   const [search, setSearch] = useState('')
//   const [budgetIdx, setBudgetIdx] = useState(0)
//   const [location, setLocation] = useState('all')
//   const [sortBy, setSortBy] = useState('featured')
//   const [viewMode, setViewMode] = useState<ViewMode>('projects')  // default: projects
//   const [selectedProject, setSelectedProject] = useState<string | null>(null)
//   const [showFilters, setShowFilters] = useState(false)
//   const [openBudget, setOpenBudget] = useState(true)
//   const [openLoc, setOpenLoc] = useState(true)

//   useEffect(() => {
//     const loc = searchParams.get('location')
//     const budget = searchParams.get('budget')
//     const type = searchParams.get('type')
//     const status = searchParams.get('status')
//     const search = searchParams.get('search')

//     if (loc && LOCATIONS.includes(loc)) setLocation(loc)
//     if (budget) { const idx = HOME_BUDGET_MAP[budget]; if (idx !== undefined) setBudgetIdx(idx) }
//     if (type) setSearch(type)

//     if (search) {
//       setSearch(search)
//       const q = search.toLowerCase()
//       const match = properties.find(p =>
//         p.title.toLowerCase().includes(q) ||
//         (p.developer ?? '').toLowerCase().includes(q)
//       )
//       if (match) {
//         if (match.category === 'Commercial') setCategory('commercial')
//         else if (match.category === 'Plot') setCategory('farmhouse')
//         else setCategory('residential')
//       }
//       // Projects view mein le jao — search filter projects ko filter karega
//       setViewMode('projects')
//       setSelectedProject(null)
//     }

//     const validStatuses: StatusTab[] = ['under-construction', 'ready-to-move', 'recently-launched']
//     if (status && validStatuses.includes(status as StatusTab)) setStatusTab(status as StatusTab)
//   }, [searchParams])

//   const catCounts = useMemo(() => ({
//     residential: properties.filter(p => getCategory(p) === 'residential').length,
//     commercial: properties.filter(p => getCategory(p) === 'commercial').length,
//     farmhouse: properties.filter(p => getCategory(p) === 'farmhouse').length,
//   }), [])

//   // ── Projects grouped by developer ──
//   const projects = useMemo(() => {
//     const base = properties.filter(p => getCategory(p) === category)
//     const map = new Map<string, { key: string; count: number; sample: Property }>()
//     base.forEach(p => {
//       const key = p.developer ?? p.title
//       if (!map.has(key)) map.set(key, { key, count: 0, sample: p })
//       map.get(key)!.count++
//     })
//     let result = Array.from(map.values())
//     // ── Search filter on projects — word-based matching ──
//     if (search.trim()) {
//       const words = search.toLowerCase().split(/\s+/).filter(Boolean)
//       result = result.filter(proj => {
//         const haystack = `${proj.key} ${proj.sample.title} ${proj.sample.location}`.toLowerCase()
//         // ALL words must match (e.g. "imperial residencia" → both words must be in haystack)
//         return words.every(word => haystack.includes(word))
//       })
//     }
//     return result
//   }, [category, search])

//   const filtered = useMemo(() => {
//     let r = properties.filter(p => getCategory(p) === category)
//     // If project selected, filter by that project
//     if (selectedProject) r = r.filter(p => (p.developer ?? p.title) === selectedProject)
//     if (statusTab !== 'all') r = r.filter(p => getStatus(p) === statusTab)
//     if (listingType !== 'all') r = r.filter(p => getListingType(p) === listingType)
//     if (search.trim() && !selectedProject) {
//       const q = search.toLowerCase()
//       r = r.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.developer ?? '').toLowerCase().includes(q) || (p.badge ?? '').toLowerCase().includes(q))
//     }
//     if (budgetIdx > 0) { const { min, max } = BUDGETS[budgetIdx]; r = r.filter(p => p.priceValue >= min && p.priceValue <= max) }
//     if (location !== 'all') r = r.filter(p => p.location.includes(location))
//     if (sortBy === 'price-asc') r = [...r].sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') r = [...r].sort((a, b) => b.priceValue - a.priceValue)
//     else r = [...r].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//     return r
//   }, [category, statusTab, listingType, search, budgetIdx, location, sortBy, selectedProject])

//   const baseForCat = properties.filter(p => getCategory(p) === category)
//   const statCount = (s: StatusTab) => s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
//   const typeCount = (t: ListingType) => t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length
//   const activeCat = CATEGORIES.find(c => c.id === category)!

//   const isProjectView = viewMode === 'projects' && !selectedProject

//   return (
//     <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

//       {/* ── SECTION A — CATEGORY ── */}
//       <div style={{ background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)' }} className="pt-20 relative">
//         <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
//           style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-0">
//           <p className="text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2" style={{ color: '#E63946' }}>
//             Browse Properties
//           </p>
//           <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-8">
//             Find Your Property
//           </h1>
//           <div className="grid grid-cols-3 gap-2 sm:gap-4">
//             {CATEGORIES.map(cat => {
//               const Icon = cat.icon
//               const isActive = category === cat.id
//               return (
//                 <button key={cat.id}
//                   onClick={() => {
//                     setCategory(cat.id)
//                     setStatusTab('all')
//                     setListingType('all')
//                     setSelectedProject(null)
//                     setViewMode('projects')
//                   }}
//                   className="relative rounded-t-xl sm:rounded-t-2xl overflow-hidden text-left transition-all duration-300"
//                   style={{
//                     background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
//                     border: `2px solid ${isActive ? '#E63946' : 'rgba(255,255,255,0.10)'}`,
//                     borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
//                     transform: isActive ? 'translateY(2px)' : 'translateY(0)',
//                     boxShadow: isActive ? '0 -4px 24px rgba(230,57,70,0.20)' : 'none',
//                     padding: '10px 10px 12px',
//                   }}>
//                   {isActive && <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#E63946' }} />}
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2"
//                     style={{ background: isActive ? '#FEE8EA' : 'rgba(255,255,255,0.12)' }}>
//                     <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isActive ? '#E63946' : '#fff' }} />
//                   </div>
//                   <p className="font-serif font-bold text-xs sm:text-lg leading-none mb-0.5"
//                     style={{ color: isActive ? '#0B1F3A' : '#fff' }}>{cat.label}</p>
//                   <p className="hidden sm:block text-xs" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>{cat.sub}</p>
//                   <p className="font-serif font-bold text-base sm:text-2xl mt-1"
//                     style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>{catCounts[cat.id]}</p>
//                   <p className="text-[9px] sm:text-[10px]"
//                     style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>listings</p>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION B — STATUS TABS ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             {STATUS_TABS.map(s => {
//               const isActive = statusTab === s.id
//               return (
//                 <button key={s.id} onClick={() => setStatusTab(s.id)}
//                   className="flex items-center gap-1.5 py-3 sm:py-4 px-3 sm:px-5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
//                   style={{ color: isActive ? '#E63946' : '#6B7280' }}>
//                   <span className="w-2 h-2 rounded-full shrink-0" style={{ background: isActive ? '#E63946' : s.dotColor }} />
//                   <span className="sm:hidden">{s.shortLabel}</span>
//                   <span className="hidden sm:inline">{s.label}</span>
//                   <span className="text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold"
//                     style={{ background: isActive ? '#FEE8EA' : '#F5F7FA', color: isActive ? '#E63946' : '#9CA3AF' }}>
//                     {statCount(s.id)}
//                   </span>
//                   {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION C — LISTING TYPE ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//           <div className="flex items-center justify-between gap-2 sm:gap-4">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#9CA3AF' }}>
//                 <span className="hidden sm:inline">Listing </span>Type:
//               </p>
//               <div className="flex rounded-lg sm:rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2' }}>
//                 <button onClick={() => setListingType('all')}
//                   className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'all' ? '#0B1F3A' : '#FFFFFF', color: listingType === 'all' ? '#fff' : '#6B7280' }}>
//                   All ({typeCount('all')})
//                 </button>
//                 <button onClick={() => setListingType('fresh')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'fresh' ? '#059669' : '#FFFFFF', color: listingType === 'fresh' ? '#fff' : '#6B7280', borderLeft: '1px solid #E8ECF2', borderRight: '1px solid #E8ECF2' }}>
//                   <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Fresh
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'fresh' ? 'rgba(255,255,255,0.25)' : '#DCFCE7', color: listingType === 'fresh' ? '#fff' : '#059669' }}>
//                     {typeCount('fresh')}
//                   </span>
//                 </button>
//                 <button onClick={() => setListingType('resale')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'resale' ? '#2563EB' : '#FFFFFF', color: listingType === 'resale' ? '#fff' : '#6B7280' }}>
//                   <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Resale
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'resale' ? 'rgba(255,255,255,0.25)' : '#EFF6FF', color: listingType === 'resale' ? '#fff' : '#2563EB' }}>
//                     {typeCount('resale')}
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold"
//               style={{ background: '#FEE8EA', color: '#E63946' }}>
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//               {activeCat.label} · {isProjectView ? `${projects.length} Projects` : `${filtered.length} Units`}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN BODY ── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
//         <div className="flex gap-5 sm:gap-6">

//           {/* Sidebar */}
//           <div className="hidden lg:block w-60 shrink-0">
//             <div className="sticky top-24 space-y-4">
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenBudget(!openBudget)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openBudget ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <IndianRupee className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Budget</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openBudget ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openBudget && (
//                   <div className="p-3 flex flex-col gap-1">
//                     {BUDGETS.map((b, i) => (
//                       <button key={b.label} onClick={() => setBudgetIdx(i)}
//                         className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A', fontWeight: budgetIdx === i ? 600 : 400 }}>
//                         {b.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenLoc(!openLoc)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openLoc ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Location</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openLoc ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openLoc && (
//                   <div className="p-3 flex flex-col gap-1">
//                     <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                       style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A', fontWeight: location === 'all' ? 600 : 400 }}>
//                       All Locations
//                     </button>
//                     {LOCATIONS.map(l => (
//                       <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A', fontWeight: location === l ? 600 : 400 }}>
//                         {l}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               {(budgetIdx > 0 || location !== 'all') && (
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all') }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Grid area */}
//           <div className="flex-1 min-w-0">

//             {/* Search + controls */}
//             <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
//               <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl flex-1 min-w-0"
//                 style={{ background: '#FFFFFF', border: '1px solid #E8ECF2' }}>
//                 <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <input type="text" placeholder="Search projects..."
//                   value={search}
//                   onChange={e => {
//                     setSearch(e.target.value)
//                     setSelectedProject(null)
//                     setViewMode('grid')
//                   }}
//                   className="w-full bg-transparent text-xs sm:text-sm focus:outline-none" style={{ color: '#1A1A1A' }} />
//                 {search && <button onClick={() => { setSearch(''); setSelectedProject(null); setViewMode('projects') }}>
//                   <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9CA3AF' }} />
//                 </button>}
//               </div>
//               <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
//                 <button onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
//                   <SlidersHorizontal className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                   <span className="hidden sm:inline">Filters</span>
//                 </button>
//                 {/* Sort — only when not in project view */}
//                 {!isProjectView && (
//                   <select value={sortBy} onChange={e => setSortBy(e.target.value)}
//                     className="text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl focus:outline-none"
//                     style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                     <option value="featured">Featured</option>
//                     <option value="price-asc">Price ↑</option>
//                     <option value="price-desc">Price ↓</option>
//                   </select>
//                 )}
//                 {/* View toggle */}
//                 <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                   <button onClick={() => { setViewMode('projects'); setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: isProjectView ? '#0B1F3A' : '#fff', color: isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Projects View">
//                     <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => { setViewMode('grid'); if (!selectedProject) setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'grid' && !isProjectView ? '#0B1F3A' : '#fff', color: viewMode === 'grid' && !isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Grid View">
//                     <Grid3x3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}
//                     title="List View">
//                     <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Back button when project is selected */}
//             {selectedProject && (
//               <button
//                 onClick={() => { setSelectedProject(null); setViewMode('projects'); setSearch('') }}
//                 className="flex items-center gap-2 text-sm font-semibold mb-4 px-3 py-2 rounded-lg transition-all"
//                 style={{ color: '#E63946', background: '#FEE8EA' }}>
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Projects
//               </button>
//             )}

//             {/* Result count */}
//             <div className="flex items-center gap-2 mb-4 sm:mb-5">
//               <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
//               <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
//                 {isProjectView ? (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{projects.length}</span> projects in {activeCat.label}</>
//                 ) : selectedProject ? (
//                   <><span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> units in <span className="font-bold" style={{ color: '#E63946' }}>{selectedProject}</span></>
//                 ) : (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> {activeCat.label.toLowerCase()} properties</>
//                 )}
//               </p>
//             </div>

//             {/* ── VIEWS ── */}

//             {isProjectView ? (
//               // Projects grid
//               projects.length === 0 ? (
//                 <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                   <Building2 className="w-10 h-10 mx-auto mb-4" style={{ color: '#9CA3AF' }} />
//                   <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: '#0B1F3A' }}>No projects found</h3>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
//                   {projects.map(proj => (
//                     <ProjectCard
//                       key={proj.key}
//                       name={proj.key}
//                       count={proj.count}
//                       sample={proj.sample}
//                       onClick={() => { setSelectedProject(proj.key); setViewMode('grid') }}
//                     />
//                   ))}
//                 </div>
//               )
//             ) : filtered.length === 0 ? (
//               <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#F5F7FA' }}>
//                   <Search className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#9CA3AF' }} />
//                 </div>
//                 <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>No properties found</h3>
//                 <p className="text-xs sm:text-sm mb-4 sm:mb-5" style={{ color: '#6B7280' }}>Try adjusting the filters above.</p>
//                 <button onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all'); setSelectedProject(null); setViewMode('projects') }}
//                   className="text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white" style={{ background: '#E63946' }}>
//                   Clear Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={viewMode === 'grid'
//                 ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5'
//                 : 'flex flex-col gap-3 sm:gap-4'}>
//                 {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode === 'list' ? 'list' : 'grid'} />)}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Filter Drawer */}
//       {showFilters && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
//           <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto shadow-2xl">
//             <div className="flex items-center justify-between p-4 sm:p-5 sticky top-0 bg-white z-10" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Filters</span>
//               <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" style={{ color: '#0B1F3A' }} /></button>
//             </div>
//             <div className="p-4 sm:p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Budget</p>
//               <div className="flex flex-col gap-1">
//                 {BUDGETS.map((b, i) => (
//                   <button key={b.label} onClick={() => setBudgetIdx(i)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A' }}>
//                     {b.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="p-4 sm:p-5">
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Location</p>
//               <div className="flex flex-col gap-1">
//                 <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg"
//                   style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A' }}>
//                   All Locations
//                 </button>
//                 {LOCATIONS.map(l => (
//                   <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A' }}>
//                     {l}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {(budgetIdx > 0 || location !== 'all') && (
//               <div className="px-4 pb-4">
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all'); setShowFilters(false) }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }



// 'use client'

// import { useState, useMemo, useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Link from 'next/link'
// import {
//   Search, Grid3x3, List, X, SlidersHorizontal,
//   MapPin, BedDouble, Bath, Maximize2, ArrowRight,
//   Home, Building2, Trees, Sparkles, RefreshCw,
//   ChevronDown, CheckCircle2, IndianRupee, LayoutGrid,
//   ArrowLeft
// } from 'lucide-react'
// import { properties } from '@/lib/data'
// import type { Property } from '@/lib/data'

// type Category = 'residential' | 'commercial' | 'farmhouse'
// type StatusTab = 'all' | 'under-construction' | 'ready-to-move' | 'recently-launched'
// type ListingType = 'all' | 'fresh' | 'resale'
// type ViewMode = 'grid' | 'list' | 'projects'

// const CATEGORIES: {
//   id: Category; label: string; sub: string; icon: React.ElementType
//   gradient: string; accentColor: string; lightBg: string
// }[] = [
//     { id: 'residential', label: 'Residential', sub: 'Apartments, Villas & Homes', icon: Home, gradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)', accentColor: '#E63946', lightBg: '#EBF0F7' },
//     { id: 'commercial', label: 'Commercial', sub: 'Offices, Shops & Spaces', icon: Building2, gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', accentColor: '#E63946', lightBg: '#F0EEFF' },
//     { id: 'farmhouse', label: 'Farm House', sub: 'Farms, Resorts & Land', icon: Trees, gradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 100%)', accentColor: '#E63946', lightBg: '#ECFDF5' },
//   ]

// const STATUS_TABS: { id: StatusTab; label: string; shortLabel: string; dotColor: string; tagBg: string; tagText: string }[] = [
//   { id: 'all', label: 'All Properties', shortLabel: 'All', dotColor: '#6B7280', tagBg: '#F5F7FA', tagText: '#6B7280' },
//   { id: 'under-construction', label: 'Under Construction', shortLabel: 'Under Const.', dotColor: '#2563EB', tagBg: 'rgba(37,99,235,0.10)', tagText: '#2563EB' },
//   { id: 'ready-to-move', label: 'Ready to Move', shortLabel: 'Ready', dotColor: '#059669', tagBg: 'rgba(5,150,105,0.10)', tagText: '#059669' },
//   { id: 'recently-launched', label: 'Recently Launched', shortLabel: 'New Launch', dotColor: '#D97706', tagBg: 'rgba(217,119,6,0.10)', tagText: '#D97706' },
// ]

// const BUDGETS = [
//   { label: 'Any Budget', min: 0, max: 999999999 },
//   { label: 'Under ₹50L', min: 0, max: 5000000 },
//   { label: '₹50L – ₹1Cr', min: 5000000, max: 10000000 },
//   { label: '₹1Cr – ₹2Cr', min: 10000000, max: 20000000 },
//   { label: '₹2Cr – ₹5Cr', min: 20000000, max: 50000000 },
//   { label: 'Above ₹5Cr', min: 50000000, max: 999999999 },
// ]

// const HOME_BUDGET_MAP: Record<string, number> = {
//   'Under ₹50 Lakh': 1, '₹50L–₹1 Cr': 2, '₹1–₂ Cr': 3, '₹2–5 Cr': 4, 'Above ₹5 Cr': 5,
// }

// const LOCATIONS = [
//   'Vrindavan Yojna', 'Shaheed Path', 'Gomti Nagar', 'Hazratganj',
//   'Aliganj', 'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
// ]

// function getCategory(p: Property): Category {
//   if (p.category === 'Commercial') return 'commercial'
//   if (p.category === 'Plot') return 'farmhouse'
//   return 'residential'
// }
// function getStatus(p: Property): StatusTab {
//   if (p.status === 'Under Construction') return 'under-construction'
//   if (p.status === 'Ready to Move') return 'ready-to-move'
//   if (p.status === 'New Launch') return 'recently-launched'
//   return 'ready-to-move'
// }
// function getListingType(p: Property): 'fresh' | 'resale' {
//   return p.subtype === 'resell' ? 'resale' : 'fresh'
// }

// // ─── Property Card ──────────────────────────────────────────────────────────

// function PropertyCard({ property, view }: { property: Property; view: 'grid' | 'list' }) {
//   const ltype = getListingType(property)
//   const pstatus = getStatus(property)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   if (view === 'list') {
//     return (
//       <Link href={`/properties/${property.slug}`} className="group block">
//         <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex transition-all duration-300 group-hover:shadow-lg"
//           style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 8px rgba(11,31,58,0.05)' }}>
//           <div className="relative shrink-0 w-28 h-28 sm:w-48 sm:h-36"
//             style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//             <div className="absolute inset-0 opacity-[0.08]"
//               style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
//             {property.badge && (
//               <span className="absolute top-2 left-2 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded z-10"
//                 style={{ background: '#E63946' }}>{property.badge}</span>
//             )}
//             <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3"
//               style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
//               <p className="text-white font-serif font-bold text-xs sm:text-base">{property.price}</p>
//             </div>
//           </div>
//           <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between min-w-0">
//             <div>
//               <div className="flex items-start justify-between gap-1 mb-1">
//                 <h3 className="font-serif font-semibold text-xs sm:text-sm leading-tight line-clamp-2" style={{ color: '#0B1F3A' }}>
//                   {property.title}
//                 </h3>
//                 <div className="flex gap-1 shrink-0">
//                   <span className="text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full"
//                     style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>{stCfg.shortLabel}</span>
//                   <span className="hidden sm:inline text-[10px] font-bold px-2 py-0.5 rounded-full"
//                     style={{ background: ltype === 'fresh' ? '#DCFCE7' : '#EFF6FF', color: ltype === 'fresh' ? '#059669' : '#2563EB' }}>
//                     {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 text-[10px] sm:text-xs mb-1 sm:mb-2" style={{ color: '#6B7280' }}>
//                 <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" style={{ color: '#E63946' }} />
//                 <span className="truncate">{property.location}</span>
//               </div>
//               {property.bedrooms > 0 && (
//                 <div className="hidden sm:flex gap-3 text-xs" style={{ color: '#6B7280' }}>
//                   <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" />{property.area}</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-1.5 pt-1.5 sm:mt-2 sm:pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//               <span className="text-[10px] sm:text-xs truncate" style={{ color: '#6B7280' }}>
//                 {property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}
//               </span>
//               <span className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold shrink-0" style={{ color: '#E63946' }}>
//                 View <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     )
//   }

//   return (
//     <Link href={`/properties/${property.slug}`} className="group block h-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {property.mainImage ? (
//             <img src={property.mainImage} alt={property.title} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
//           <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//             {property.badge && (
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {property.badge}
//               </span>
//             )}
//           </div>
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: ltype === 'fresh' ? 'rgba(5,150,105,0.90)' : 'rgba(37,99,235,0.90)' }}>
//               {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//             </span>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{property.category} · {property.area}</p>
//           </div>
//         </div>
//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2" style={{ color: '#0B1F3A' }}>
//             {property.title}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{property.location}</span>
//           </div>
//           {property.bedrooms > 0 && (
//             <div className="flex gap-3 text-xs pb-3 mb-3" style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
//               <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds</span>
//               <span className="flex items-center gap-1"><Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths</span>
//               <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}</span>
//             </div>
//           )}
//           <div className="flex flex-wrap gap-1 flex-1 mb-3">
//             {property.amenities.slice(0, 2).map(a => (
//               <span key={a} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>
//             ))}
//             {property.amenities.length > 2 && (
//               <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: '#FEE8EA', color: '#E63946' }}>
//                 +{property.amenities.length - 2}
//               </span>
//             )}
//           </div>
//           <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-[10px]" style={{ color: '#6B7280' }}>
//               {property.developer ? `🏗 ${property.developer}` : property.ownerName ? `👤 Owner` : property.category}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Project Card ────────────────────────────────────────────────────────────

// function ProjectCard({ name, count, sample, onClick }: {
//   name: string; count: number; sample: Property; onClick: () => void
// }) {
//   const pstatus = getStatus(sample)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   return (
//     <button onClick={onClick} className="group text-left w-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {sample.mainImage ? (
//             <img src={sample.mainImage} alt={name} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${sample.gradientFrom}, ${sample.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

//           {/* Status badge */}
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>

//           {/* Badge */}
//           {sample.badge && (
//             <div className="absolute top-3 left-3 z-10">
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {sample.badge}
//               </span>
//             </div>
//           )}

//           {/* Units count */}
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: 'rgba(11,31,58,0.80)' }}>
//               {count} {count === 1 ? 'Unit' : 'Units'}
//             </span>
//           </div>

//           {/* Price */}
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{sample.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {sample.category} · Starting Price
//             </p>
//           </div>
//         </div>

//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-base mb-1.5" style={{ color: '#0B1F3A' }}>
//             {name}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{sample.location}</span>
//           </div>
//           <div className="flex items-center justify-between pt-2 mt-auto" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-xs font-semibold" style={{ color: '#0B1F3A' }}>
//               {sample.developer ?? 'Owner Direct'}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View {count} {count === 1 ? 'Unit' : 'Units'} <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </button>
//   )
// }

// // ─── Main Page ───────────────────────────────────────────────────────────────

// export default function PropertiesClient() {
//   const searchParams = useSearchParams()
//   const [category, setCategory] = useState<Category>('residential')
//   const [statusTab, setStatusTab] = useState<StatusTab>('all')
//   const [listingType, setListingType] = useState<ListingType>('all')
//   const [search, setSearch] = useState('')
//   const [budgetIdx, setBudgetIdx] = useState(0)
//   const [location, setLocation] = useState('all')
//   const [sortBy, setSortBy] = useState('featured')
//   const [viewMode, setViewMode] = useState<ViewMode>('projects')  // default: projects
//   const [selectedProject, setSelectedProject] = useState<string | null>(null)
//   const [showFilters, setShowFilters] = useState(false)
//   const [openBudget, setOpenBudget] = useState(true)
//   const [openLoc, setOpenLoc] = useState(true)

//   useEffect(() => {
//     const loc = searchParams.get('location')
//     const budget = searchParams.get('budget')
//     const type = searchParams.get('type')
//     const status = searchParams.get('status')
//     const search = searchParams.get('search')

//     if (loc && LOCATIONS.includes(loc)) setLocation(loc)
//     if (budget) { const idx = HOME_BUDGET_MAP[budget]; if (idx !== undefined) setBudgetIdx(idx) }
//     if (type) setSearch(type)

//     if (search) {
//       setSearch(search)
//       // Word-based matching — same as projects useMemo
//       const words = search.toLowerCase().split(/\s+/).filter(Boolean)
//       const match = properties.find(p => {
//         const haystack = `${p.title} ${p.developer ?? ''} ${p.location} ${p.badge ?? ''}`.toLowerCase()
//         return words.every(word => haystack.includes(word))
//       })
//       if (match) {
//         if (match.category === 'Commercial') setCategory('commercial')
//         else if (match.category === 'Plot') setCategory('farmhouse')
//         else setCategory('residential')
//       }
//       setViewMode('projects')
//       setSelectedProject(null)
//     }

//     const validStatuses: StatusTab[] = ['under-construction', 'ready-to-move', 'recently-launched']
//     if (status && validStatuses.includes(status as StatusTab)) setStatusTab(status as StatusTab)
//   }, [searchParams])

//   const catCounts = useMemo(() => ({
//     residential: properties.filter(p => getCategory(p) === 'residential').length,
//     commercial: properties.filter(p => getCategory(p) === 'commercial').length,
//     farmhouse: properties.filter(p => getCategory(p) === 'farmhouse').length,
//   }), [])

//   // ── Projects grouped by badge (project name) or developer ──
//   const projects = useMemo(() => {
//     const base = properties.filter(p => getCategory(p) === category)
//     const map = new Map<string, { key: string; count: number; sample: Property }>()
//     base.forEach(p => {
//       // Group by badge first (project name like "Imperial Residencia"), then developer, then title
//       const key = p.badge ?? p.developer ?? p.title
//       if (!map.has(key)) map.set(key, { key, count: 0, sample: p })
//       map.get(key)!.count++
//     })
//     let result = Array.from(map.values())
//     // ── Search filter — check ALL units of each project ──
//     if (search.trim()) {
//       const words = search.toLowerCase().split(/\s+/).filter(Boolean)
//       result = result.filter(proj => {
//         const projUnits = base.filter(p => (p.badge ?? p.developer ?? p.title) === proj.key)
//         return projUnits.some(p => {
//           const haystack = `${proj.key} ${p.title} ${p.developer ?? ''} ${p.location} ${p.badge ?? ''}`.toLowerCase()
//           return words.every(word => haystack.includes(word))
//         })
//       })
//     }
//     return result
//   }, [category, search])

//   const filtered = useMemo(() => {
//     let r = properties.filter(p => getCategory(p) === category)
//     // If project selected, filter by that project
//     if (selectedProject) r = r.filter(p => (p.badge ?? p.developer ?? p.title) === selectedProject)
//     if (statusTab !== 'all') r = r.filter(p => getStatus(p) === statusTab)
//     if (listingType !== 'all') r = r.filter(p => getListingType(p) === listingType)
//     if (search.trim() && !selectedProject) {
//       const q = search.toLowerCase()
//       r = r.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.developer ?? '').toLowerCase().includes(q) || (p.badge ?? '').toLowerCase().includes(q))
//     }
//     if (budgetIdx > 0) { const { min, max } = BUDGETS[budgetIdx]; r = r.filter(p => p.priceValue >= min && p.priceValue <= max) }
//     if (location !== 'all') r = r.filter(p => p.location.includes(location))
//     if (sortBy === 'price-asc') r = [...r].sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') r = [...r].sort((a, b) => b.priceValue - a.priceValue)
//     else r = [...r].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//     return r
//   }, [category, statusTab, listingType, search, budgetIdx, location, sortBy, selectedProject])

//   const baseForCat = properties.filter(p => getCategory(p) === category)
//   const statCount = (s: StatusTab) => s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
//   const typeCount = (t: ListingType) => t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length
//   const activeCat = CATEGORIES.find(c => c.id === category)!

//   const isProjectView = viewMode === 'projects' && !selectedProject

//   return (
//     <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

//       {/* ── SECTION A — CATEGORY ── */}
//       <div style={{ background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)' }} className="pt-20 relative">
//         <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
//           style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-0">
//           <p className="text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2" style={{ color: '#E63946' }}>
//             Browse Properties
//           </p>
//           <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-8">
//             Find Your Property
//           </h1>
//           <div className="grid grid-cols-3 gap-2 sm:gap-4">
//             {CATEGORIES.map(cat => {
//               const Icon = cat.icon
//               const isActive = category === cat.id
//               return (
//                 <button key={cat.id}
//                   onClick={() => {
//                     setCategory(cat.id)
//                     setStatusTab('all')
//                     setListingType('all')
//                     setSelectedProject(null)
//                     setViewMode('projects')
//                   }}
//                   className="relative rounded-t-xl sm:rounded-t-2xl overflow-hidden text-left transition-all duration-300"
//                   style={{
//                     background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
//                     border: `2px solid ${isActive ? '#E63946' : 'rgba(255,255,255,0.10)'}`,
//                     borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
//                     transform: isActive ? 'translateY(2px)' : 'translateY(0)',
//                     boxShadow: isActive ? '0 -4px 24px rgba(230,57,70,0.20)' : 'none',
//                     padding: '10px 10px 12px',
//                   }}>
//                   {isActive && <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#E63946' }} />}
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2"
//                     style={{ background: isActive ? '#FEE8EA' : 'rgba(255,255,255,0.12)' }}>
//                     <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isActive ? '#E63946' : '#fff' }} />
//                   </div>
//                   <p className="font-serif font-bold text-xs sm:text-lg leading-none mb-0.5"
//                     style={{ color: isActive ? '#0B1F3A' : '#fff' }}>{cat.label}</p>
//                   <p className="hidden sm:block text-xs" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>{cat.sub}</p>
//                   <p className="font-serif font-bold text-base sm:text-2xl mt-1"
//                     style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>{catCounts[cat.id]}</p>
//                   <p className="text-[9px] sm:text-[10px]"
//                     style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>listings</p>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION B — STATUS TABS ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             {STATUS_TABS.map(s => {
//               const isActive = statusTab === s.id
//               return (
//                 <button key={s.id} onClick={() => setStatusTab(s.id)}
//                   className="flex items-center gap-1.5 py-3 sm:py-4 px-3 sm:px-5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
//                   style={{ color: isActive ? '#E63946' : '#6B7280' }}>
//                   <span className="w-2 h-2 rounded-full shrink-0" style={{ background: isActive ? '#E63946' : s.dotColor }} />
//                   <span className="sm:hidden">{s.shortLabel}</span>
//                   <span className="hidden sm:inline">{s.label}</span>
//                   <span className="text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold"
//                     style={{ background: isActive ? '#FEE8EA' : '#F5F7FA', color: isActive ? '#E63946' : '#9CA3AF' }}>
//                     {statCount(s.id)}
//                   </span>
//                   {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION C — LISTING TYPE ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//           <div className="flex items-center justify-between gap-2 sm:gap-4">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#9CA3AF' }}>
//                 <span className="hidden sm:inline">Listing </span>Type:
//               </p>
//               <div className="flex rounded-lg sm:rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2' }}>
//                 <button onClick={() => setListingType('all')}
//                   className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'all' ? '#0B1F3A' : '#FFFFFF', color: listingType === 'all' ? '#fff' : '#6B7280' }}>
//                   All ({typeCount('all')})
//                 </button>
//                 <button onClick={() => setListingType('fresh')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'fresh' ? '#059669' : '#FFFFFF', color: listingType === 'fresh' ? '#fff' : '#6B7280', borderLeft: '1px solid #E8ECF2', borderRight: '1px solid #E8ECF2' }}>
//                   <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Fresh
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'fresh' ? 'rgba(255,255,255,0.25)' : '#DCFCE7', color: listingType === 'fresh' ? '#fff' : '#059669' }}>
//                     {typeCount('fresh')}
//                   </span>
//                 </button>
//                 <button onClick={() => setListingType('resale')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'resale' ? '#2563EB' : '#FFFFFF', color: listingType === 'resale' ? '#fff' : '#6B7280' }}>
//                   <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Resale
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'resale' ? 'rgba(255,255,255,0.25)' : '#EFF6FF', color: listingType === 'resale' ? '#fff' : '#2563EB' }}>
//                     {typeCount('resale')}
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold"
//               style={{ background: '#FEE8EA', color: '#E63946' }}>
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//               {activeCat.label} · {isProjectView ? `${projects.length} Projects` : `${filtered.length} Units`}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN BODY ── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
//         <div className="flex gap-5 sm:gap-6">

//           {/* Sidebar */}
//           <div className="hidden lg:block w-60 shrink-0">
//             <div className="sticky top-24 space-y-4">
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenBudget(!openBudget)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openBudget ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <IndianRupee className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Budget</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openBudget ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openBudget && (
//                   <div className="p-3 flex flex-col gap-1">
//                     {BUDGETS.map((b, i) => (
//                       <button key={b.label} onClick={() => setBudgetIdx(i)}
//                         className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A', fontWeight: budgetIdx === i ? 600 : 400 }}>
//                         {b.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenLoc(!openLoc)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openLoc ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Location</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openLoc ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openLoc && (
//                   <div className="p-3 flex flex-col gap-1">
//                     <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                       style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A', fontWeight: location === 'all' ? 600 : 400 }}>
//                       All Locations
//                     </button>
//                     {LOCATIONS.map(l => (
//                       <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A', fontWeight: location === l ? 600 : 400 }}>
//                         {l}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               {(budgetIdx > 0 || location !== 'all') && (
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all') }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Grid area */}
//           <div className="flex-1 min-w-0">

//             {/* Search + controls */}
//             <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
//               <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl flex-1 min-w-0"
//                 style={{ background: '#FFFFFF', border: '1px solid #E8ECF2' }}>
//                 <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <input type="text" placeholder="Search projects..."
//                   value={search}
//                   onChange={e => {
//                     setSearch(e.target.value)
//                     setSelectedProject(null)
//                     setViewMode('grid')
//                   }}
//                   className="w-full bg-transparent text-xs sm:text-sm focus:outline-none" style={{ color: '#1A1A1A' }} />
//                 {search && <button onClick={() => { setSearch(''); setSelectedProject(null); setViewMode('projects') }}>
//                   <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9CA3AF' }} />
//                 </button>}
//               </div>
//               <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
//                 <button onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
//                   <SlidersHorizontal className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                   <span className="hidden sm:inline">Filters</span>
//                 </button>
//                 {/* Sort — only when not in project view */}
//                 {!isProjectView && (
//                   <select value={sortBy} onChange={e => setSortBy(e.target.value)}
//                     className="text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl focus:outline-none"
//                     style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                     <option value="featured">Featured</option>
//                     <option value="price-asc">Price ↑</option>
//                     <option value="price-desc">Price ↓</option>
//                   </select>
//                 )}
//                 {/* View toggle */}
//                 <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                   <button onClick={() => { setViewMode('projects'); setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: isProjectView ? '#0B1F3A' : '#fff', color: isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Projects View">
//                     <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => { setViewMode('grid'); if (!selectedProject) setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'grid' && !isProjectView ? '#0B1F3A' : '#fff', color: viewMode === 'grid' && !isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Grid View">
//                     <Grid3x3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}
//                     title="List View">
//                     <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Back button when project is selected */}
//             {selectedProject && (
//               <button
//                 onClick={() => { setSelectedProject(null); setViewMode('projects'); setSearch('') }}
//                 className="flex items-center gap-2 text-sm font-semibold mb-4 px-3 py-2 rounded-lg transition-all"
//                 style={{ color: '#E63946', background: '#FEE8EA' }}>
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Projects
//               </button>
//             )}

//             {/* Result count */}
//             <div className="flex items-center gap-2 mb-4 sm:mb-5">
//               <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
//               <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
//                 {isProjectView ? (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{projects.length}</span> projects in {activeCat.label}</>
//                 ) : selectedProject ? (
//                   <><span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> units in <span className="font-bold" style={{ color: '#E63946' }}>{selectedProject}</span></>
//                 ) : (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> {activeCat.label.toLowerCase()} properties</>
//                 )}
//               </p>
//             </div>

//             {/* ── VIEWS ── */}

//             {isProjectView ? (
//               // Projects grid
//               projects.length === 0 ? (
//                 <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                   <Building2 className="w-10 h-10 mx-auto mb-4" style={{ color: '#9CA3AF' }} />
//                   <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: '#0B1F3A' }}>No projects found</h3>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
//                   {projects.map(proj => (
//                     <ProjectCard
//                       key={proj.key}
//                       name={proj.key}
//                       count={proj.count}
//                       sample={proj.sample}
//                       onClick={() => { setSelectedProject(proj.key); setViewMode('grid') }}
//                     />
//                   ))}
//                 </div>
//               )
//             ) : filtered.length === 0 ? (
//               <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#F5F7FA' }}>
//                   <Search className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#9CA3AF' }} />
//                 </div>
//                 <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>No properties found</h3>
//                 <p className="text-xs sm:text-sm mb-4 sm:mb-5" style={{ color: '#6B7280' }}>Try adjusting the filters above.</p>
//                 <button onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all'); setSelectedProject(null); setViewMode('projects') }}
//                   className="text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white" style={{ background: '#E63946' }}>
//                   Clear Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={viewMode === 'grid'
//                 ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5'
//                 : 'flex flex-col gap-3 sm:gap-4'}>
//                 {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode === 'list' ? 'list' : 'grid'} />)}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Filter Drawer */}
//       {showFilters && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
//           <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto shadow-2xl">
//             <div className="flex items-center justify-between p-4 sm:p-5 sticky top-0 bg-white z-10" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Filters</span>
//               <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" style={{ color: '#0B1F3A' }} /></button>
//             </div>
//             <div className="p-4 sm:p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Budget</p>
//               <div className="flex flex-col gap-1">
//                 {BUDGETS.map((b, i) => (
//                   <button key={b.label} onClick={() => setBudgetIdx(i)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A' }}>
//                     {b.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="p-4 sm:p-5">
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Location</p>
//               <div className="flex flex-col gap-1">
//                 <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg"
//                   style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A' }}>
//                   All Locations
//                 </button>
//                 {LOCATIONS.map(l => (
//                   <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A' }}>
//                     {l}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {(budgetIdx > 0 || location !== 'all') && (
//               <div className="px-4 pb-4">
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all'); setShowFilters(false) }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


// 'use client'

// import { useState, useMemo, useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Link from 'next/link'
// import {
//   Search, Grid3x3, List, X, SlidersHorizontal,
//   MapPin, BedDouble, Bath, Maximize2, ArrowRight,
//   Home, Building2, Trees, Sparkles, RefreshCw,
//   ChevronDown, CheckCircle2, IndianRupee, LayoutGrid,
//   ArrowLeft
// } from 'lucide-react'
// import { properties } from '@/lib/data'
// import type { Property } from '@/lib/data'

// type Category = 'residential' | 'commercial' | 'farmhouse'
// type StatusTab = 'all' | 'under-construction' | 'ready-to-move' | 'recently-launched'
// type ListingType = 'all' | 'fresh' | 'resale'
// type ViewMode = 'grid' | 'list' | 'projects'

// const CATEGORIES: {
//   id: Category; label: string; sub: string; icon: React.ElementType
//   gradient: string; accentColor: string; lightBg: string
// }[] = [
//     { id: 'residential', label: 'Residential', sub: 'Apartments, Villas & Homes', icon: Home, gradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)', accentColor: '#E63946', lightBg: '#EBF0F7' },
//     { id: 'commercial', label: 'Commercial', sub: 'Offices, Shops & Spaces', icon: Building2, gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', accentColor: '#E63946', lightBg: '#F0EEFF' },
//     { id: 'farmhouse', label: 'Farm House', sub: 'Farms, Resorts & Land', icon: Trees, gradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 100%)', accentColor: '#E63946', lightBg: '#ECFDF5' },
//   ]

// const STATUS_TABS: { id: StatusTab; label: string; shortLabel: string; dotColor: string; tagBg: string; tagText: string }[] = [
//   { id: 'all', label: 'All Properties', shortLabel: 'All', dotColor: '#6B7280', tagBg: '#F5F7FA', tagText: '#6B7280' },
//   { id: 'under-construction', label: 'Under Construction', shortLabel: 'Under Const.', dotColor: '#2563EB', tagBg: 'rgba(37,99,235,0.10)', tagText: '#2563EB' },
//   { id: 'ready-to-move', label: 'Ready to Move', shortLabel: 'Ready', dotColor: '#059669', tagBg: 'rgba(5,150,105,0.10)', tagText: '#059669' },
//   { id: 'recently-launched', label: 'Recently Launched', shortLabel: 'New Launch', dotColor: '#D97706', tagBg: 'rgba(217,119,6,0.10)', tagText: '#D97706' },
// ]

// const BUDGETS = [
//   { label: 'Any Budget', min: 0, max: 999999999 },
//   { label: 'Under ₹50L', min: 0, max: 5000000 },
//   { label: '₹50L – ₹1Cr', min: 5000000, max: 10000000 },
//   { label: '₹1Cr – ₹2Cr', min: 10000000, max: 20000000 },
//   { label: '₹2Cr – ₹5Cr', min: 20000000, max: 50000000 },
//   { label: 'Above ₹5Cr', min: 50000000, max: 999999999 },
// ]

// const HOME_BUDGET_MAP: Record<string, number> = {
//   'Under ₹50 Lakh': 1, '₹50L–₹1 Cr': 2, '₹1–₂ Cr': 3, '₹2–5 Cr': 4, 'Above ₹5 Cr': 5,
// }

// const LOCATIONS = [
//   'Vrindavan Yojna', 'Shaheed Path', 'Gomti Nagar', 'Hazratganj',
//   'Aliganj', 'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
// ]

// function getCategory(p: Property): Category {
//   if (p.category === 'Commercial') return 'commercial'
//   if (p.category === 'Plot') return 'farmhouse'
//   return 'residential'
// }
// function getStatus(p: Property): StatusTab {
//   if (p.status === 'Under Construction') return 'under-construction'
//   if (p.status === 'Ready to Move') return 'ready-to-move'
//   if (p.status === 'New Launch') return 'recently-launched'
//   return 'ready-to-move'
// }
// function getListingType(p: Property): 'fresh' | 'resale' {
//   return p.subtype === 'resell' ? 'resale' : 'fresh'
// }

// // ─── Property Card ──────────────────────────────────────────────────────────

// function PropertyCard({ property, view }: { property: Property; view: 'grid' | 'list' }) {
//   const ltype = getListingType(property)
//   const pstatus = getStatus(property)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   if (view === 'list') {
//     return (
//       <Link href={`/properties/${property.slug}`} className="group block">
//         <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex transition-all duration-300 group-hover:shadow-lg"
//           style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 8px rgba(11,31,58,0.05)' }}>
//           <div className="relative shrink-0 w-28 h-28 sm:w-48 sm:h-36"
//             style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//             <div className="absolute inset-0 opacity-[0.08]"
//               style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
//             {property.badge && (
//               <span className="absolute top-2 left-2 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded z-10"
//                 style={{ background: '#E63946' }}>{property.badge}</span>
//             )}
//             <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3"
//               style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
//               <p className="text-white font-serif font-bold text-xs sm:text-base">{property.price}</p>
//             </div>
//           </div>
//           <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between min-w-0">
//             <div>
//               <div className="flex items-start justify-between gap-1 mb-1">
//                 <h3 className="font-serif font-semibold text-xs sm:text-sm leading-tight line-clamp-2" style={{ color: '#0B1F3A' }}>
//                   {property.title}
//                 </h3>
//                 <div className="flex gap-1 shrink-0">
//                   <span className="text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full"
//                     style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>{stCfg.shortLabel}</span>
//                   <span className="hidden sm:inline text-[10px] font-bold px-2 py-0.5 rounded-full"
//                     style={{ background: ltype === 'fresh' ? '#DCFCE7' : '#EFF6FF', color: ltype === 'fresh' ? '#059669' : '#2563EB' }}>
//                     {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 text-[10px] sm:text-xs mb-1 sm:mb-2" style={{ color: '#6B7280' }}>
//                 <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" style={{ color: '#E63946' }} />
//                 <span className="truncate">{property.location}</span>
//               </div>
//               {property.bedrooms > 0 && (
//                 <div className="hidden sm:flex gap-3 text-xs" style={{ color: '#6B7280' }}>
//                   <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" />{property.area}</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-1.5 pt-1.5 sm:mt-2 sm:pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//               <span className="text-[10px] sm:text-xs truncate" style={{ color: '#6B7280' }}>
//                 {property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}
//               </span>
//               <span className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold shrink-0" style={{ color: '#E63946' }}>
//                 View <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     )
//   }

//   return (
//     <Link href={`/properties/${property.slug}`} className="group block h-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {property.mainImage ? (
//             <img src={property.mainImage} alt={property.title} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
//           <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//             {property.badge && (
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {property.badge}
//               </span>
//             )}
//           </div>
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: ltype === 'fresh' ? 'rgba(5,150,105,0.90)' : 'rgba(37,99,235,0.90)' }}>
//               {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//             </span>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{property.category} · {property.area}</p>
//           </div>
//         </div>
//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2" style={{ color: '#0B1F3A' }}>
//             {property.title}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{property.location}</span>
//           </div>
//           {property.bedrooms > 0 && (
//             <div className="flex gap-3 text-xs pb-3 mb-3" style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
//               <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds</span>
//               <span className="flex items-center gap-1"><Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths</span>
//               <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}</span>
//             </div>
//           )}
//           <div className="flex flex-wrap gap-1 flex-1 mb-3">
//             {property.amenities.slice(0, 2).map(a => (
//               <span key={a} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>
//             ))}
//             {property.amenities.length > 2 && (
//               <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: '#FEE8EA', color: '#E63946' }}>
//                 +{property.amenities.length - 2}
//               </span>
//             )}
//           </div>
//           <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-[10px]" style={{ color: '#6B7280' }}>
//               {property.developer ? `🏗 ${property.developer}` : property.ownerName ? `👤 Owner` : property.category}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Project Card ────────────────────────────────────────────────────────────

// function ProjectCard({ name, count, sample, onClick }: {
//   name: string; count: number; sample: Property; onClick: () => void
// }) {
//   const pstatus = getStatus(sample)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   return (
//     <button onClick={onClick} className="group text-left w-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {sample.mainImage ? (
//             <img src={sample.mainImage} alt={name} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${sample.gradientFrom}, ${sample.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

//           {/* Status badge */}
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>

//           {/* Badge */}
//           {sample.badge && (
//             <div className="absolute top-3 left-3 z-10">
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {sample.badge}
//               </span>
//             </div>
//           )}

//           {/* Units count */}
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: 'rgba(11,31,58,0.80)' }}>
//               {count} {count === 1 ? 'Unit' : 'Units'}
//             </span>
//           </div>

//           {/* Price */}
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{sample.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {sample.category} · Starting Price
//             </p>
//           </div>
//         </div>

//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-base mb-1.5" style={{ color: '#0B1F3A' }}>
//             {name}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{sample.location}</span>
//           </div>
//           <div className="flex items-center justify-between pt-2 mt-auto" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-xs font-semibold" style={{ color: '#0B1F3A' }}>
//               {sample.developer ?? 'Owner Direct'}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View {count} {count === 1 ? 'Unit' : 'Units'} <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </button>
//   )
// }

// // ─── Main Page ───────────────────────────────────────────────────────────────

// export default function PropertiesClient() {
//   const searchParams = useSearchParams()
//   const [category, setCategory] = useState<Category>('residential')
//   const [statusTab, setStatusTab] = useState<StatusTab>('all')
//   const [listingType, setListingType] = useState<ListingType>('all')
//   const [search, setSearch] = useState('')
//   const [budgetIdx, setBudgetIdx] = useState(0)
//   const [location, setLocation] = useState('all')
//   const [sortBy, setSortBy] = useState('featured')
//   const [viewMode, setViewMode] = useState<ViewMode>('projects')  // default: projects
//   const [selectedProject, setSelectedProject] = useState<string | null>(null)
//   const [showFilters, setShowFilters] = useState(false)
//   const [openBudget, setOpenBudget] = useState(true)
//   const [openLoc, setOpenLoc] = useState(true)

//   useEffect(() => {
//     const loc = searchParams.get('location')
//     const budget = searchParams.get('budget')
//     const type = searchParams.get('type')
//     const status = searchParams.get('status')
//     const search = searchParams.get('search')

//     if (loc && LOCATIONS.includes(loc)) setLocation(loc)
//     if (budget) { const idx = HOME_BUDGET_MAP[budget]; if (idx !== undefined) setBudgetIdx(idx) }
//     if (type) setSearch(type)

//     if (search) {
//       setSearch(search)
//       // Word-based matching — same as projects useMemo
//       const words = search.toLowerCase().split(/\s+/).filter(Boolean)
//       const match = properties.find(p => {
//         const haystack = `${p.title} ${p.developer ?? ''} ${p.location} ${p.badge ?? ''}`.toLowerCase()
//         return words.every(word => haystack.includes(word))
//       })
//       if (match) {
//         if (match.category === 'Commercial') setCategory('commercial')
//         else if (match.category === 'Plot') setCategory('farmhouse')
//         else setCategory('residential')
//       }
//       setViewMode('projects')
//       setSelectedProject(null)
//     }

//     const validStatuses: StatusTab[] = ['under-construction', 'ready-to-move', 'recently-launched']
//     if (status && validStatuses.includes(status as StatusTab)) setStatusTab(status as StatusTab)
//   }, [searchParams])

//   const catCounts = useMemo(() => ({
//     residential: properties.filter(p => getCategory(p) === 'residential').length,
//     commercial: properties.filter(p => getCategory(p) === 'commercial').length,
//     farmhouse: properties.filter(p => getCategory(p) === 'farmhouse').length,
//   }), [])

//   // ── Projects grouped by developer — display name from badge ──
//   const projects = useMemo(() => {
//     const base = properties.filter(p => getCategory(p) === category)
//     const map = new Map<string, { key: string; displayName: string; count: number; sample: Property }>()
//     base.forEach(p => {
//       // Group by developer (so all ORO units = 1 card, all Imperial units = 1 card)
//       const key = p.developer ?? p.title
//       if (!map.has(key)) {
//         map.set(key, {
//           key,
//           displayName: p.badge ?? p.developer ?? p.title, // show badge as project name
//           count: 0,
//           sample: p,
//         })
//       }
//       map.get(key)!.count++
//     })
//     let result = Array.from(map.values())
//     // ── Search filter — check ALL units of each project ──
//     if (search.trim()) {
//       const words = search.toLowerCase().split(/\s+/).filter(Boolean)
//       result = result.filter(proj => {
//         const projUnits = base.filter(p => (p.developer ?? p.title) === proj.key)
//         return projUnits.some(p => {
//           const haystack = `${proj.key} ${proj.displayName} ${p.title} ${p.developer ?? ''} ${p.badge ?? ''} ${p.location}`.toLowerCase()
//           return words.every(word => haystack.includes(word))
//         })
//       })
//     }
//     return result
//   }, [category, search])

//   const filtered = useMemo(() => {
//     let r = properties.filter(p => getCategory(p) === category)
//     // If project selected, filter by that project
//     if (selectedProject) r = r.filter(p => (p.developer ?? p.title) === selectedProject)
//     if (statusTab !== 'all') r = r.filter(p => getStatus(p) === statusTab)
//     if (listingType !== 'all') r = r.filter(p => getListingType(p) === listingType)
//     if (search.trim() && !selectedProject) {
//       const q = search.toLowerCase()
//       r = r.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.developer ?? '').toLowerCase().includes(q) || (p.badge ?? '').toLowerCase().includes(q))
//     }
//     if (budgetIdx > 0) { const { min, max } = BUDGETS[budgetIdx]; r = r.filter(p => p.priceValue >= min && p.priceValue <= max) }
//     if (location !== 'all') r = r.filter(p => p.location.includes(location))
//     if (sortBy === 'price-asc') r = [...r].sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') r = [...r].sort((a, b) => b.priceValue - a.priceValue)
//     else r = [...r].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//     return r
//   }, [category, statusTab, listingType, search, budgetIdx, location, sortBy, selectedProject])

//   const baseForCat = properties.filter(p => getCategory(p) === category)
//   const statCount = (s: StatusTab) => s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
//   const typeCount = (t: ListingType) => t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length
//   const activeCat = CATEGORIES.find(c => c.id === category)!

//   const isProjectView = viewMode === 'projects' && !selectedProject

//   return (
//     <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

//       {/* ── SECTION A — CATEGORY ── */}
//       <div style={{ background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)' }} className="pt-20 relative">
//         <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
//           style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-0">
//           <p className="text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2" style={{ color: '#E63946' }}>
//             Browse Properties
//           </p>
//           <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-8">
//             Find Your Property
//           </h1>
//           <div className="grid grid-cols-3 gap-2 sm:gap-4">
//             {CATEGORIES.map(cat => {
//               const Icon = cat.icon
//               const isActive = category === cat.id
//               return (
//                 <button key={cat.id}
//                   onClick={() => {
//                     setCategory(cat.id)
//                     setStatusTab('all')
//                     setListingType('all')
//                     setSelectedProject(null)
//                     setViewMode('projects')
//                   }}
//                   className="relative rounded-t-xl sm:rounded-t-2xl overflow-hidden text-left transition-all duration-300"
//                   style={{
//                     background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
//                     border: `2px solid ${isActive ? '#E63946' : 'rgba(255,255,255,0.10)'}`,
//                     borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
//                     transform: isActive ? 'translateY(2px)' : 'translateY(0)',
//                     boxShadow: isActive ? '0 -4px 24px rgba(230,57,70,0.20)' : 'none',
//                     padding: '10px 10px 12px',
//                   }}>
//                   {isActive && <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#E63946' }} />}
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2"
//                     style={{ background: isActive ? '#FEE8EA' : 'rgba(255,255,255,0.12)' }}>
//                     <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isActive ? '#E63946' : '#fff' }} />
//                   </div>
//                   <p className="font-serif font-bold text-xs sm:text-lg leading-none mb-0.5"
//                     style={{ color: isActive ? '#0B1F3A' : '#fff' }}>{cat.label}</p>
//                   <p className="hidden sm:block text-xs" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>{cat.sub}</p>
//                   <p className="font-serif font-bold text-base sm:text-2xl mt-1"
//                     style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>{catCounts[cat.id]}</p>
//                   <p className="text-[9px] sm:text-[10px]"
//                     style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>listings</p>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION B — STATUS TABS ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             {STATUS_TABS.map(s => {
//               const isActive = statusTab === s.id
//               return (
//                 <button key={s.id} onClick={() => setStatusTab(s.id)}
//                   className="flex items-center gap-1.5 py-3 sm:py-4 px-3 sm:px-5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
//                   style={{ color: isActive ? '#E63946' : '#6B7280' }}>
//                   <span className="w-2 h-2 rounded-full shrink-0" style={{ background: isActive ? '#E63946' : s.dotColor }} />
//                   <span className="sm:hidden">{s.shortLabel}</span>
//                   <span className="hidden sm:inline">{s.label}</span>
//                   <span className="text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold"
//                     style={{ background: isActive ? '#FEE8EA' : '#F5F7FA', color: isActive ? '#E63946' : '#9CA3AF' }}>
//                     {statCount(s.id)}
//                   </span>
//                   {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION C — LISTING TYPE ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//           <div className="flex items-center justify-between gap-2 sm:gap-4">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#9CA3AF' }}>
//                 <span className="hidden sm:inline">Listing </span>Type:
//               </p>
//               <div className="flex rounded-lg sm:rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2' }}>
//                 <button onClick={() => setListingType('all')}
//                   className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'all' ? '#0B1F3A' : '#FFFFFF', color: listingType === 'all' ? '#fff' : '#6B7280' }}>
//                   All ({typeCount('all')})
//                 </button>
//                 <button onClick={() => setListingType('fresh')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'fresh' ? '#059669' : '#FFFFFF', color: listingType === 'fresh' ? '#fff' : '#6B7280', borderLeft: '1px solid #E8ECF2', borderRight: '1px solid #E8ECF2' }}>
//                   <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Fresh
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'fresh' ? 'rgba(255,255,255,0.25)' : '#DCFCE7', color: listingType === 'fresh' ? '#fff' : '#059669' }}>
//                     {typeCount('fresh')}
//                   </span>
//                 </button>
//                 <button onClick={() => setListingType('resale')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'resale' ? '#2563EB' : '#FFFFFF', color: listingType === 'resale' ? '#fff' : '#6B7280' }}>
//                   <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Resale
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'resale' ? 'rgba(255,255,255,0.25)' : '#EFF6FF', color: listingType === 'resale' ? '#fff' : '#2563EB' }}>
//                     {typeCount('resale')}
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold"
//               style={{ background: '#FEE8EA', color: '#E63946' }}>
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//               {activeCat.label} · {isProjectView ? `${projects.length} Projects` : `${filtered.length} Units`}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN BODY ── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
//         <div className="flex gap-5 sm:gap-6">

//           {/* Sidebar */}
//           <div className="hidden lg:block w-60 shrink-0">
//             <div className="sticky top-24 space-y-4">
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenBudget(!openBudget)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openBudget ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <IndianRupee className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Budget</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openBudget ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openBudget && (
//                   <div className="p-3 flex flex-col gap-1">
//                     {BUDGETS.map((b, i) => (
//                       <button key={b.label} onClick={() => setBudgetIdx(i)}
//                         className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A', fontWeight: budgetIdx === i ? 600 : 400 }}>
//                         {b.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenLoc(!openLoc)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openLoc ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Location</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openLoc ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openLoc && (
//                   <div className="p-3 flex flex-col gap-1">
//                     <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                       style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A', fontWeight: location === 'all' ? 600 : 400 }}>
//                       All Locations
//                     </button>
//                     {LOCATIONS.map(l => (
//                       <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A', fontWeight: location === l ? 600 : 400 }}>
//                         {l}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               {(budgetIdx > 0 || location !== 'all') && (
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all') }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Grid area */}
//           <div className="flex-1 min-w-0">

//             {/* Search + controls */}
//             <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
//               <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl flex-1 min-w-0"
//                 style={{ background: '#FFFFFF', border: '1px solid #E8ECF2' }}>
//                 <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <input type="text" placeholder="Search projects..."
//                   value={search}
//                   onChange={e => {
//                     setSearch(e.target.value)
//                     setSelectedProject(null)
//                     setViewMode('grid')
//                   }}
//                   className="w-full bg-transparent text-xs sm:text-sm focus:outline-none" style={{ color: '#1A1A1A' }} />
//                 {search && <button onClick={() => { setSearch(''); setSelectedProject(null); setViewMode('projects') }}>
//                   <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9CA3AF' }} />
//                 </button>}
//               </div>
//               <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
//                 <button onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
//                   <SlidersHorizontal className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                   <span className="hidden sm:inline">Filters</span>
//                 </button>
//                 {/* Sort — only when not in project view */}
//                 {!isProjectView && (
//                   <select value={sortBy} onChange={e => setSortBy(e.target.value)}
//                     className="text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl focus:outline-none"
//                     style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                     <option value="featured">Featured</option>
//                     <option value="price-asc">Price ↑</option>
//                     <option value="price-desc">Price ↓</option>
//                   </select>
//                 )}
//                 {/* View toggle */}
//                 <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                   <button onClick={() => { setViewMode('projects'); setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: isProjectView ? '#0B1F3A' : '#fff', color: isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Projects View">
//                     <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => { setViewMode('grid'); if (!selectedProject) setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'grid' && !isProjectView ? '#0B1F3A' : '#fff', color: viewMode === 'grid' && !isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Grid View">
//                     <Grid3x3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}
//                     title="List View">
//                     <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {selectedProject && (
//               <button
//                 onClick={() => { setSelectedProject(null); setViewMode('projects'); setSearch('') }}
//                 className="flex items-center gap-2 text-sm font-semibold mb-4 px-3 py-2 rounded-lg transition-all"
//                 style={{ color: '#E63946', background: '#FEE8EA' }}>
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Projects
//               </button>
//             )}

//             {/* Result count */}
//             <div className="flex items-center gap-2 mb-4 sm:mb-5">
//               <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
//               <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
//                 {isProjectView ? (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{projects.length}</span> projects in {activeCat.label}</>
//                 ) : selectedProject ? (
//                   <><span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> units in <span className="font-bold" style={{ color: '#E63946' }}>{selectedProject}</span></>
//                 ) : (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> {activeCat.label.toLowerCase()} properties</>
//                 )}
//               </p>
//             </div>

//             {/* ── VIEWS ── */}

//             {isProjectView ? (
//               // Projects grid
//               projects.length === 0 ? (
//                 <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                   <Building2 className="w-10 h-10 mx-auto mb-4" style={{ color: '#9CA3AF' }} />
//                   <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: '#0B1F3A' }}>No projects found</h3>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
//                   {projects.map(proj => (
//                     <ProjectCard
//                       key={proj.key}
//                       name={proj.displayName}
//                       count={proj.count}
//                       sample={proj.sample}
//                       onClick={() => { setSelectedProject(proj.key); setViewMode('grid') }}
//                     />
//                   ))}
//                 </div>
//               )
//             ) : filtered.length === 0 ? (
//               <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#F5F7FA' }}>
//                   <Search className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#9CA3AF' }} />
//                 </div>
//                 <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>No properties found</h3>
//                 <p className="text-xs sm:text-sm mb-4 sm:mb-5" style={{ color: '#6B7280' }}>Try adjusting the filters above.</p>
//                 <button onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all'); setSelectedProject(null); setViewMode('projects') }}
//                   className="text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white" style={{ background: '#E63946' }}>
//                   Clear Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={viewMode === 'grid'
//                 ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5'
//                 : 'flex flex-col gap-3 sm:gap-4'}>
//                 {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode === 'list' ? 'list' : 'grid'} />)}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Filter Drawer */}
//       {showFilters && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
//           <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto shadow-2xl">
//             <div className="flex items-center justify-between p-4 sm:p-5 sticky top-0 bg-white z-10" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Filters</span>
//               <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" style={{ color: '#0B1F3A' }} /></button>
//             </div>
//             <div className="p-4 sm:p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Budget</p>
//               <div className="flex flex-col gap-1">
//                 {BUDGETS.map((b, i) => (
//                   <button key={b.label} onClick={() => setBudgetIdx(i)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A' }}>
//                     {b.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="p-4 sm:p-5">
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Location</p>
//               <div className="flex flex-col gap-1">
//                 <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg"
//                   style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A' }}>
//                   All Locations
//                 </button>
//                 {LOCATIONS.map(l => (
//                   <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A' }}>
//                     {l}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {(budgetIdx > 0 || location !== 'all') && (
//               <div className="px-4 pb-4">
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all'); setShowFilters(false) }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


// 'use client'

// import { useState, useMemo, useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Link from 'next/link'
// import {
//   Search, Grid3x3, List, X, SlidersHorizontal,
//   MapPin, BedDouble, Bath, Maximize2, ArrowRight,
//   Home, Building2, Trees, Sparkles, RefreshCw,
//   ChevronDown, CheckCircle2, IndianRupee, LayoutGrid,
//   ArrowLeft
// } from 'lucide-react'
// import { properties } from '@/lib/data'
// import type { Property } from '@/lib/data'

// type Category = 'residential' | 'commercial' | 'farmhouse'
// type StatusTab = 'all' | 'under-construction' | 'ready-to-move' | 'recently-launched'
// type ListingType = 'all' | 'fresh' | 'resale'
// type ViewMode = 'grid' | 'list' | 'projects'

// const CATEGORIES: {
//   id: Category; label: string; sub: string; icon: React.ElementType
//   gradient: string; accentColor: string; lightBg: string
// }[] = [
//     { id: 'residential', label: 'Residential', sub: 'Apartments, Villas & Homes', icon: Home, gradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)', accentColor: '#E63946', lightBg: '#EBF0F7' },
//     { id: 'commercial', label: 'Commercial', sub: 'Offices, Shops & Spaces', icon: Building2, gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', accentColor: '#E63946', lightBg: '#F0EEFF' },
//     { id: 'farmhouse', label: 'Farm House', sub: 'Farms, Resorts & Land', icon: Trees, gradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 100%)', accentColor: '#E63946', lightBg: '#ECFDF5' },
//   ]

// const STATUS_TABS: { id: StatusTab; label: string; shortLabel: string; dotColor: string; tagBg: string; tagText: string }[] = [
//   { id: 'all', label: 'All Properties', shortLabel: 'All', dotColor: '#6B7280', tagBg: '#F5F7FA', tagText: '#6B7280' },
//   { id: 'under-construction', label: 'Under Construction', shortLabel: 'Under Const.', dotColor: '#2563EB', tagBg: 'rgba(37,99,235,0.10)', tagText: '#2563EB' },
//   { id: 'ready-to-move', label: 'Ready to Move', shortLabel: 'Ready', dotColor: '#059669', tagBg: 'rgba(5,150,105,0.10)', tagText: '#059669' },
//   { id: 'recently-launched', label: 'Recently Launched', shortLabel: 'New Launch', dotColor: '#D97706', tagBg: 'rgba(217,119,6,0.10)', tagText: '#D97706' },
// ]

// const BUDGETS = [
//   { label: 'Any Budget', min: 0, max: 999999999 },
//   { label: 'Under ₹50L', min: 0, max: 5000000 },
//   { label: '₹50L – ₹1Cr', min: 5000000, max: 10000000 },
//   { label: '₹1Cr – ₹2Cr', min: 10000000, max: 20000000 },
//   { label: '₹2Cr – ₹5Cr', min: 20000000, max: 50000000 },
//   { label: 'Above ₹5Cr', min: 50000000, max: 999999999 },
// ]

// const HOME_BUDGET_MAP: Record<string, number> = {
//   'Under ₹50 Lakh': 1, '₹50L–₹1 Cr': 2, '₹1–₂ Cr': 3, '₹2–5 Cr': 4, 'Above ₹5 Cr': 5,
// }

// const LOCATIONS = [
//   'Vrindavan Yojna', 'Shaheed Path', 'Gomti Nagar', 'Hazratganj',
//   'Aliganj', 'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
// ]

// function getCategory(p: Property): Category {
//   if (p.category === 'Commercial') return 'commercial'
//   if (p.category === 'Plot') return 'farmhouse'
//   return 'residential'
// }
// function getStatus(p: Property): StatusTab {
//   if (p.status === 'Under Construction') return 'under-construction'
//   if (p.status === 'Ready to Move') return 'ready-to-move'
//   if (p.status === 'New Launch') return 'recently-launched'
//   return 'ready-to-move'
// }
// function getListingType(p: Property): 'fresh' | 'resale' {
//   return p.subtype === 'resell' ? 'resale' : 'fresh'
// }

// // ─── Property Card ──────────────────────────────────────────────────────────

// function PropertyCard({ property, view }: { property: Property; view: 'grid' | 'list' }) {
//   const ltype = getListingType(property)
//   const pstatus = getStatus(property)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   if (view === 'list') {
//     return (
//       <Link href={`/properties/${property.slug}`} className="group block">
//         <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex transition-all duration-300 group-hover:shadow-lg"
//           style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 8px rgba(11,31,58,0.05)' }}>
//           <div className="relative shrink-0 w-28 h-28 sm:w-48 sm:h-36"
//             style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//             <div className="absolute inset-0 opacity-[0.08]"
//               style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
//             {property.badge && (
//               <span className="absolute top-2 left-2 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded z-10"
//                 style={{ background: '#E63946' }}>{property.badge}</span>
//             )}
//             <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3"
//               style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
//               <p className="text-white font-serif font-bold text-xs sm:text-base">{property.price}</p>
//             </div>
//           </div>
//           <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between min-w-0">
//             <div>
//               <div className="flex items-start justify-between gap-1 mb-1">
//                 <h3 className="font-serif font-semibold text-xs sm:text-sm leading-tight line-clamp-2" style={{ color: '#0B1F3A' }}>
//                   {property.title}
//                 </h3>
//                 <div className="flex gap-1 shrink-0">
//                   <span className="text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full"
//                     style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>{stCfg.shortLabel}</span>
//                   <span className="hidden sm:inline text-[10px] font-bold px-2 py-0.5 rounded-full"
//                     style={{ background: ltype === 'fresh' ? '#DCFCE7' : '#EFF6FF', color: ltype === 'fresh' ? '#059669' : '#2563EB' }}>
//                     {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 text-[10px] sm:text-xs mb-1 sm:mb-2" style={{ color: '#6B7280' }}>
//                 <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" style={{ color: '#E63946' }} />
//                 <span className="truncate">{property.location}</span>
//               </div>
//               {property.bedrooms > 0 && (
//                 <div className="hidden sm:flex gap-3 text-xs" style={{ color: '#6B7280' }}>
//                   <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" />{property.area}</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-1.5 pt-1.5 sm:mt-2 sm:pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//               <span className="text-[10px] sm:text-xs truncate" style={{ color: '#6B7280' }}>
//                 {property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}
//               </span>
//               <span className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold shrink-0" style={{ color: '#E63946' }}>
//                 View <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     )
//   }

//   return (
//     <Link href={`/properties/${property.slug}`} className="group block h-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {property.mainImage ? (
//             <img src={property.mainImage} alt={property.title} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
//           <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//             {property.badge && (
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {property.badge}
//               </span>
//             )}
//           </div>
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: ltype === 'fresh' ? 'rgba(5,150,105,0.90)' : 'rgba(37,99,235,0.90)' }}>
//               {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//             </span>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{property.category} · {property.area}</p>
//           </div>
//         </div>
//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2" style={{ color: '#0B1F3A' }}>
//             {property.title}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{property.location}</span>
//           </div>
//           {property.bedrooms > 0 && (
//             <div className="flex gap-3 text-xs pb-3 mb-3" style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
//               <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds</span>
//               <span className="flex items-center gap-1"><Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths</span>
//               <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}</span>
//             </div>
//           )}
//           <div className="flex flex-wrap gap-1 flex-1 mb-3">
//             {property.amenities.slice(0, 2).map(a => (
//               <span key={a} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>
//             ))}
//             {property.amenities.length > 2 && (
//               <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: '#FEE8EA', color: '#E63946' }}>
//                 +{property.amenities.length - 2}
//               </span>
//             )}
//           </div>
//           <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-[10px]" style={{ color: '#6B7280' }}>
//               {property.developer ? `🏗 ${property.developer}` : property.ownerName ? `👤 Owner` : property.category}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Project Card ────────────────────────────────────────────────────────────

// function ProjectCard({ name, count, sample, onClick }: {
//   name: string; count: number; sample: Property; onClick: () => void
// }) {
//   const pstatus = getStatus(sample)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   return (
//     <button onClick={onClick} className="group text-left w-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {sample.mainImage ? (
//             <img src={sample.mainImage} alt={name} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${sample.gradientFrom}, ${sample.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

//           {/* Status badge */}
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>

//           {/* Badge */}
//           {sample.badge && (
//             <div className="absolute top-3 left-3 z-10">
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {sample.badge}
//               </span>
//             </div>
//           )}

//           {/* Units count */}
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: 'rgba(11,31,58,0.80)' }}>
//               {count} {count === 1 ? 'Unit' : 'Units'}
//             </span>
//           </div>

//           {/* Price */}
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{sample.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {sample.category} · Starting Price
//             </p>
//           </div>
//         </div>

//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-base mb-1.5" style={{ color: '#0B1F3A' }}>
//             {name}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{sample.location}</span>
//           </div>
//           <div className="flex items-center justify-between pt-2 mt-auto" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-xs font-semibold" style={{ color: '#0B1F3A' }}>
//               {sample.developer ?? 'Owner Direct'}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View {count} {count === 1 ? 'Unit' : 'Units'} <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </button>
//   )
// }

// // ─── Main Page ───────────────────────────────────────────────────────────────

// export default function PropertiesClient() {
//   const searchParams = useSearchParams()
//   const [category, setCategory] = useState<Category>('residential')
//   const [statusTab, setStatusTab] = useState<StatusTab>('all')
//   const [listingType, setListingType] = useState<ListingType>('all')
//   const [search, setSearch] = useState('')
//   const [budgetIdx, setBudgetIdx] = useState(0)
//   const [location, setLocation] = useState('all')
//   const [sortBy, setSortBy] = useState('featured')
//   const [viewMode, setViewMode] = useState<ViewMode>('projects')  // default: projects
//   const [selectedProject, setSelectedProject] = useState<string | null>(null)
//   const [showFilters, setShowFilters] = useState(false)
//   const [openBudget, setOpenBudget] = useState(true)
//   const [openLoc, setOpenLoc] = useState(true)

//   useEffect(() => {
//     const loc = searchParams.get('location')
//     const budget = searchParams.get('budget')
//     const type = searchParams.get('type')
//     const status = searchParams.get('status')
//     const search = searchParams.get('search')

//     if (loc && LOCATIONS.includes(loc)) setLocation(loc)
//     if (budget) { const idx = HOME_BUDGET_MAP[budget]; if (idx !== undefined) setBudgetIdx(idx) }
//     if (type) setSearch(type)

//     if (search) {
//       setSearch(search)
//       // Word-based matching — same as projects useMemo
//       const words = search.toLowerCase().split(/\s+/).filter(Boolean)
//       const match = properties.find(p => {
//         const haystack = `${p.title} ${p.developer ?? ''} ${p.location} ${p.badge ?? ''}`.toLowerCase()
//         return words.every(word => haystack.includes(word))
//       })
//       if (match) {
//         if (match.category === 'Commercial') setCategory('commercial')
//         else if (match.category === 'Plot') setCategory('farmhouse')
//         else setCategory('residential')
//       }
//       setViewMode('projects')
//       setSelectedProject(null)
//     }

//     const validStatuses: StatusTab[] = ['under-construction', 'ready-to-move', 'recently-launched']
//     if (status && validStatuses.includes(status as StatusTab)) setStatusTab(status as StatusTab)
//   }, [searchParams])

//   const catCounts = useMemo(() => {
//     const countProjects = (cat: Category) => {
//       const base = properties.filter(p => getCategory(p) === cat)
//       const keys = new Set(base.map(p => p.developer ?? p.title))
//       return keys.size
//     }
//     return {
//       residential: countProjects('residential'),
//       commercial: countProjects('commercial'),
//       farmhouse: countProjects('farmhouse'),
//     }
//   }, [])

//   // ── Projects grouped by developer — display name from badge ──
//   const projects = useMemo(() => {
//     const base = properties.filter(p => getCategory(p) === category)
//     const map = new Map<string, { key: string; displayName: string; count: number; sample: Property }>()
//     base.forEach(p => {
//       // Group by developer (so all ORO units = 1 card, all Imperial units = 1 card)
//       const key = p.developer ?? p.title
//       if (!map.has(key)) {
//         map.set(key, {
//           key,
//           displayName: p.badge ?? p.developer ?? p.title, // show badge as project name
//           count: 0,
//           sample: p,
//         })
//       }
//       map.get(key)!.count++
//     })
//     let result = Array.from(map.values())
//     // ── Search filter — check ALL units of each project ──
//     if (search.trim()) {
//       const words = search.toLowerCase().split(/\s+/).filter(Boolean)
//       result = result.filter(proj => {
//         const projUnits = base.filter(p => (p.developer ?? p.title) === proj.key)
//         return projUnits.some(p => {
//           const haystack = `${proj.key} ${proj.displayName} ${p.title} ${p.developer ?? ''} ${p.badge ?? ''} ${p.location}`.toLowerCase()
//           return words.every(word => haystack.includes(word))
//         })
//       })
//     }
//     return result
//   }, [category, search])

//   const filtered = useMemo(() => {
//     let r = properties.filter(p => getCategory(p) === category)
//     // If project selected, filter by that project
//     if (selectedProject) r = r.filter(p => (p.developer ?? p.title) === selectedProject)
//     if (statusTab !== 'all') r = r.filter(p => getStatus(p) === statusTab)
//     if (listingType !== 'all') r = r.filter(p => getListingType(p) === listingType)
//     if (search.trim() && !selectedProject) {
//       const q = search.toLowerCase()
//       r = r.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.developer ?? '').toLowerCase().includes(q) || (p.badge ?? '').toLowerCase().includes(q))
//     }
//     if (budgetIdx > 0) { const { min, max } = BUDGETS[budgetIdx]; r = r.filter(p => p.priceValue >= min && p.priceValue <= max) }
//     if (location !== 'all') r = r.filter(p => p.location.includes(location))
//     if (sortBy === 'price-asc') r = [...r].sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') r = [...r].sort((a, b) => b.priceValue - a.priceValue)
//     else r = [...r].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//     return r
//   }, [category, statusTab, listingType, search, budgetIdx, location, sortBy, selectedProject])

//   const baseForCat = properties.filter(p => getCategory(p) === category)
//   const statCount = (s: StatusTab) => s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
//   const typeCount = (t: ListingType) => t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length
//   const activeCat = CATEGORIES.find(c => c.id === category)!

//   const isProjectView = viewMode === 'projects' && !selectedProject

//   return (
//     <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

//       {/* ── SECTION A — CATEGORY ── */}
//       <div style={{ background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)' }} className="pt-20 relative">
//         <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
//           style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-0">
//           <p className="text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2" style={{ color: '#E63946' }}>
//             Browse Properties
//           </p>
//           <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-8">
//             Find Your Property
//           </h1>
//           <div className="grid grid-cols-3 gap-2 sm:gap-4">
//             {CATEGORIES.map(cat => {
//               const Icon = cat.icon
//               const isActive = category === cat.id
//               return (
//                 <button key={cat.id}
//                   onClick={() => {
//                     setCategory(cat.id)
//                     setStatusTab('all')
//                     setListingType('all')
//                     setSelectedProject(null)
//                     setViewMode('projects')
//                   }}
//                   className="relative rounded-t-xl sm:rounded-t-2xl overflow-hidden text-left transition-all duration-300"
//                   style={{
//                     background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
//                     border: `2px solid ${isActive ? '#E63946' : 'rgba(255,255,255,0.10)'}`,
//                     borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
//                     transform: isActive ? 'translateY(2px)' : 'translateY(0)',
//                     boxShadow: isActive ? '0 -4px 24px rgba(230,57,70,0.20)' : 'none',
//                     padding: '10px 10px 12px',
//                   }}>
//                   {isActive && <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#E63946' }} />}
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2"
//                     style={{ background: isActive ? '#FEE8EA' : 'rgba(255,255,255,0.12)' }}>
//                     <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isActive ? '#E63946' : '#fff' }} />
//                   </div>
//                   <p className="font-serif font-bold text-xs sm:text-lg leading-none mb-0.5"
//                     style={{ color: isActive ? '#0B1F3A' : '#fff' }}>{cat.label}</p>
//                   <p className="hidden sm:block text-xs" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>{cat.sub}</p>
//                   <p className="font-serif font-bold text-base sm:text-2xl mt-1"
//                     style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>{catCounts[cat.id]}</p>
//                   <p className="text-[9px] sm:text-[10px]"
//                     style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>projects</p>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION B — STATUS TABS ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             {STATUS_TABS.map(s => {
//               const isActive = statusTab === s.id
//               return (
//                 <button key={s.id} onClick={() => setStatusTab(s.id)}
//                   className="flex items-center gap-1.5 py-3 sm:py-4 px-3 sm:px-5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
//                   style={{ color: isActive ? '#E63946' : '#6B7280' }}>
//                   <span className="w-2 h-2 rounded-full shrink-0" style={{ background: isActive ? '#E63946' : s.dotColor }} />
//                   <span className="sm:hidden">{s.shortLabel}</span>
//                   <span className="hidden sm:inline">{s.label}</span>
//                   <span className="text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold"
//                     style={{ background: isActive ? '#FEE8EA' : '#F5F7FA', color: isActive ? '#E63946' : '#9CA3AF' }}>
//                     {statCount(s.id)}
//                   </span>
//                   {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION C — LISTING TYPE ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//           <div className="flex items-center justify-between gap-2 sm:gap-4">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#9CA3AF' }}>
//                 <span className="hidden sm:inline">Listing </span>Type:
//               </p>
//               <div className="flex rounded-lg sm:rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2' }}>
//                 <button onClick={() => setListingType('all')}
//                   className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'all' ? '#0B1F3A' : '#FFFFFF', color: listingType === 'all' ? '#fff' : '#6B7280' }}>
//                   All ({typeCount('all')})
//                 </button>
//                 <button onClick={() => setListingType('fresh')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'fresh' ? '#059669' : '#FFFFFF', color: listingType === 'fresh' ? '#fff' : '#6B7280', borderLeft: '1px solid #E8ECF2', borderRight: '1px solid #E8ECF2' }}>
//                   <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Fresh
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'fresh' ? 'rgba(255,255,255,0.25)' : '#DCFCE7', color: listingType === 'fresh' ? '#fff' : '#059669' }}>
//                     {typeCount('fresh')}
//                   </span>
//                 </button>
//                 <button onClick={() => setListingType('resale')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'resale' ? '#2563EB' : '#FFFFFF', color: listingType === 'resale' ? '#fff' : '#6B7280' }}>
//                   <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Resale
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'resale' ? 'rgba(255,255,255,0.25)' : '#EFF6FF', color: listingType === 'resale' ? '#fff' : '#2563EB' }}>
//                     {typeCount('resale')}
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold"
//               style={{ background: '#FEE8EA', color: '#E63946' }}>
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//               {activeCat.label} · {isProjectView ? `${projects.length} Projects` : `${filtered.length} Units`}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN BODY ── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
//         <div className="flex gap-5 sm:gap-6">

//           {/* Sidebar */}
//           <div className="hidden lg:block w-60 shrink-0">
//             <div className="sticky top-24 space-y-4">
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenBudget(!openBudget)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openBudget ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <IndianRupee className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Budget</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openBudget ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openBudget && (
//                   <div className="p-3 flex flex-col gap-1">
//                     {BUDGETS.map((b, i) => (
//                       <button key={b.label} onClick={() => setBudgetIdx(i)}
//                         className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A', fontWeight: budgetIdx === i ? 600 : 400 }}>
//                         {b.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenLoc(!openLoc)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openLoc ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Location</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openLoc ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openLoc && (
//                   <div className="p-3 flex flex-col gap-1">
//                     <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                       style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A', fontWeight: location === 'all' ? 600 : 400 }}>
//                       All Locations
//                     </button>
//                     {LOCATIONS.map(l => (
//                       <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A', fontWeight: location === l ? 600 : 400 }}>
//                         {l}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               {(budgetIdx > 0 || location !== 'all') && (
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all') }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Grid area */}
//           <div className="flex-1 min-w-0">

//             {/* Search + controls */}
//             <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
//               <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl flex-1 min-w-0"
//                 style={{ background: '#FFFFFF', border: '1px solid #E8ECF2' }}>
//                 <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <input type="text" placeholder="Search projects..."
//                   value={search}
//                   onChange={e => {
//                     setSearch(e.target.value)
//                     setSelectedProject(null)
//                     setViewMode('grid')
//                   }}
//                   className="w-full bg-transparent text-xs sm:text-sm focus:outline-none" style={{ color: '#1A1A1A' }} />
//                 {search && <button onClick={() => { setSearch(''); setSelectedProject(null); setViewMode('projects') }}>
//                   <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9CA3AF' }} />
//                 </button>}
//               </div>
//               <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
//                 <button onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
//                   <SlidersHorizontal className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                   <span className="hidden sm:inline">Filters</span>
//                 </button>
//                 {/* Sort — only when not in project view */}
//                 {!isProjectView && (
//                   <select value={sortBy} onChange={e => setSortBy(e.target.value)}
//                     className="text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl focus:outline-none"
//                     style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                     <option value="featured">Featured</option>
//                     <option value="price-asc">Price ↑</option>
//                     <option value="price-desc">Price ↓</option>
//                   </select>
//                 )}
//                 {/* View toggle */}
//                 <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                   <button onClick={() => { setViewMode('projects'); setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: isProjectView ? '#0B1F3A' : '#fff', color: isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Projects View">
//                     <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => { setViewMode('grid'); if (!selectedProject) setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'grid' && !isProjectView ? '#0B1F3A' : '#fff', color: viewMode === 'grid' && !isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Grid View">
//                     <Grid3x3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}
//                     title="List View">
//                     <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {selectedProject && (
//               <button
//                 onClick={() => { setSelectedProject(null); setViewMode('projects'); setSearch('') }}
//                 className="flex items-center gap-2 text-sm font-semibold mb-4 px-3 py-2 rounded-lg transition-all"
//                 style={{ color: '#E63946', background: '#FEE8EA' }}>
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Projects
//               </button>
//             )}

//             {/* Result count */}
//             <div className="flex items-center gap-2 mb-4 sm:mb-5">
//               <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
//               <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
//                 {isProjectView ? (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{projects.length}</span> projects in {activeCat.label}</>
//                 ) : selectedProject ? (
//                   <><span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> units in <span className="font-bold" style={{ color: '#E63946' }}>{selectedProject}</span></>
//                 ) : (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> {activeCat.label.toLowerCase()} properties</>
//                 )}
//               </p>
//             </div>

//             {/* ── VIEWS ── */}

//             {isProjectView ? (
//               // Projects grid
//               projects.length === 0 ? (
//                 <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                   <Building2 className="w-10 h-10 mx-auto mb-4" style={{ color: '#9CA3AF' }} />
//                   <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: '#0B1F3A' }}>No projects found</h3>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
//                   {projects.map(proj => (
//                     <ProjectCard
//                       key={proj.key}
//                       name={proj.displayName}
//                       count={proj.count}
//                       sample={proj.sample}
//                       onClick={() => { setSelectedProject(proj.key); setViewMode('grid') }}
//                     />
//                   ))}
//                 </div>
//               )
//             ) : filtered.length === 0 ? (
//               <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#F5F7FA' }}>
//                   <Search className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#9CA3AF' }} />
//                 </div>
//                 <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>No properties found</h3>
//                 <p className="text-xs sm:text-sm mb-4 sm:mb-5" style={{ color: '#6B7280' }}>Try adjusting the filters above.</p>
//                 <button onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all'); setSelectedProject(null); setViewMode('projects') }}
//                   className="text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white" style={{ background: '#E63946' }}>
//                   Clear Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={viewMode === 'grid'
//                 ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5'
//                 : 'flex flex-col gap-3 sm:gap-4'}>
//                 {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode === 'list' ? 'list' : 'grid'} />)}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Filter Drawer */}
//       {showFilters && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
//           <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto shadow-2xl">
//             <div className="flex items-center justify-between p-4 sm:p-5 sticky top-0 bg-white z-10" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Filters</span>
//               <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" style={{ color: '#0B1F3A' }} /></button>
//             </div>
//             <div className="p-4 sm:p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Budget</p>
//               <div className="flex flex-col gap-1">
//                 {BUDGETS.map((b, i) => (
//                   <button key={b.label} onClick={() => setBudgetIdx(i)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A' }}>
//                     {b.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="p-4 sm:p-5">
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Location</p>
//               <div className="flex flex-col gap-1">
//                 <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg"
//                   style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A' }}>
//                   All Locations
//                 </button>
//                 {LOCATIONS.map(l => (
//                   <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A' }}>
//                     {l}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {(budgetIdx > 0 || location !== 'all') && (
//               <div className="px-4 pb-4">
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all'); setShowFilters(false) }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }



// 'use client'

// import { useState, useMemo, useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Link from 'next/link'
// import {
//   Search, Grid3x3, List, X, SlidersHorizontal,
//   MapPin, BedDouble, Bath, Maximize2, ArrowRight,
//   Home, Building2, Trees, Sparkles, RefreshCw,
//   ChevronDown, CheckCircle2, IndianRupee, LayoutGrid,
//   ArrowLeft
// } from 'lucide-react'
// import { properties } from '@/lib/data'
// import type { Property } from '@/lib/data'

// type Category = 'residential' | 'commercial' | 'farmhouse'
// type StatusTab = 'all' | 'under-construction' | 'ready-to-move' | 'recently-launched'
// type ListingType = 'all' | 'fresh' | 'resale'
// type ViewMode = 'grid' | 'list' | 'projects'

// const CATEGORIES: {
//   id: Category; label: string; sub: string; icon: React.ElementType
//   gradient: string; accentColor: string; lightBg: string
// }[] = [
//     { id: 'residential', label: 'Residential', sub: 'Apartments, Villas & Homes', icon: Home, gradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)', accentColor: '#E63946', lightBg: '#EBF0F7' },
//     { id: 'commercial', label: 'Commercial', sub: 'Offices, Shops & Spaces', icon: Building2, gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', accentColor: '#E63946', lightBg: '#F0EEFF' },
//     { id: 'farmhouse', label: 'Farm House', sub: 'Farms, Resorts & Land', icon: Trees, gradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 100%)', accentColor: '#E63946', lightBg: '#ECFDF5' },
//   ]

// const STATUS_TABS: { id: StatusTab; label: string; shortLabel: string; dotColor: string; tagBg: string; tagText: string }[] = [
//   { id: 'all', label: 'All Properties', shortLabel: 'All', dotColor: '#6B7280', tagBg: '#F5F7FA', tagText: '#6B7280' },
//   { id: 'under-construction', label: 'Under Construction', shortLabel: 'Under Const.', dotColor: '#2563EB', tagBg: 'rgba(37,99,235,0.10)', tagText: '#2563EB' },
//   { id: 'ready-to-move', label: 'Ready to Move', shortLabel: 'Ready', dotColor: '#059669', tagBg: 'rgba(5,150,105,0.10)', tagText: '#059669' },
//   { id: 'recently-launched', label: 'Recently Launched', shortLabel: 'New Launch', dotColor: '#D97706', tagBg: 'rgba(217,119,6,0.10)', tagText: '#D97706' },
// ]

// const BUDGETS = [
//   { label: 'Any Budget', min: 0, max: 999999999 },
//   { label: 'Under ₹50L', min: 0, max: 5000000 },
//   { label: '₹50L – ₹1Cr', min: 5000000, max: 10000000 },
//   { label: '₹1Cr – ₹2Cr', min: 10000000, max: 20000000 },
//   { label: '₹2Cr – ₹5Cr', min: 20000000, max: 50000000 },
//   { label: 'Above ₹5Cr', min: 50000000, max: 999999999 },
// ]

// const HOME_BUDGET_MAP: Record<string, number> = {
//   'Under ₹50 Lakh': 1, '₹50L–₹1 Cr': 2, '₹1–₂ Cr': 3, '₹2–5 Cr': 4, 'Above ₹5 Cr': 5,
// }

// const LOCATIONS = [
//   'Vrindavan Yojna', 'Shaheed Path', 'Gomti Nagar', 'Hazratganj',
//   'Aliganj', 'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
// ]

// function getCategory(p: Property): Category {
//   if (p.category === 'Commercial') return 'commercial'
//   if (p.category === 'Plot') return 'farmhouse'
//   return 'residential'
// }
// function getStatus(p: Property): StatusTab {
//   if (p.status === 'Under Construction') return 'under-construction'
//   if (p.status === 'Ready to Move') return 'ready-to-move'
//   if (p.status === 'New Launch') return 'recently-launched'
//   return 'ready-to-move'
// }
// function getListingType(p: Property): 'fresh' | 'resale' {
//   return p.subtype === 'resell' ? 'resale' : 'fresh'
// }

// // ─── Property Card ──────────────────────────────────────────────────────────

// function PropertyCard({ property, view }: { property: Property; view: 'grid' | 'list' }) {
//   const ltype = getListingType(property)
//   const pstatus = getStatus(property)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   if (view === 'list') {
//     return (
//       <Link href={`/properties/${property.slug}`} className="group block">
//         <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex transition-all duration-300 group-hover:shadow-lg"
//           style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 8px rgba(11,31,58,0.05)' }}>
//           <div className="relative shrink-0 w-28 h-28 sm:w-48 sm:h-36"
//             style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//             <div className="absolute inset-0 opacity-[0.08]"
//               style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
//             {property.badge && (
//               <span className="absolute top-2 left-2 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded z-10"
//                 style={{ background: '#E63946' }}>{property.badge}</span>
//             )}
//             <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3"
//               style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
//               <p className="text-white font-serif font-bold text-xs sm:text-base">{property.price}</p>
//             </div>
//           </div>
//           <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between min-w-0">
//             <div>
//               <div className="flex items-start justify-between gap-1 mb-1">
//                 <h3 className="font-serif font-semibold text-xs sm:text-sm leading-tight line-clamp-2" style={{ color: '#0B1F3A' }}>
//                   {property.title}
//                 </h3>
//                 <div className="flex gap-1 shrink-0">
//                   <span className="text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full"
//                     style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>{stCfg.shortLabel}</span>
//                   <span className="hidden sm:inline text-[10px] font-bold px-2 py-0.5 rounded-full"
//                     style={{ background: ltype === 'fresh' ? '#DCFCE7' : '#EFF6FF', color: ltype === 'fresh' ? '#059669' : '#2563EB' }}>
//                     {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 text-[10px] sm:text-xs mb-1 sm:mb-2" style={{ color: '#6B7280' }}>
//                 <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" style={{ color: '#E63946' }} />
//                 <span className="truncate">{property.location}</span>
//               </div>
//               {property.bedrooms > 0 && (
//                 <div className="hidden sm:flex gap-3 text-xs" style={{ color: '#6B7280' }}>
//                   <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" />{property.area}</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-1.5 pt-1.5 sm:mt-2 sm:pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//               <span className="text-[10px] sm:text-xs truncate" style={{ color: '#6B7280' }}>
//                 {property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}
//               </span>
//               <span className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold shrink-0" style={{ color: '#E63946' }}>
//                 View <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     )
//   }

//   return (
//     <Link href={`/properties/${property.slug}`} className="group block h-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {property.mainImage ? (
//             <img src={property.mainImage} alt={property.title} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
//           <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//             {property.badge && (
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {property.badge}
//               </span>
//             )}
//           </div>
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: ltype === 'fresh' ? 'rgba(5,150,105,0.90)' : 'rgba(37,99,235,0.90)' }}>
//               {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//             </span>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{property.category} · {property.area}</p>
//           </div>
//         </div>
//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2" style={{ color: '#0B1F3A' }}>
//             {property.title}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{property.location}</span>
//           </div>
//           {property.bedrooms > 0 && (
//             <div className="flex gap-3 text-xs pb-3 mb-3" style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
//               <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds</span>
//               <span className="flex items-center gap-1"><Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths</span>
//               <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}</span>
//             </div>
//           )}
//           <div className="flex flex-wrap gap-1 flex-1 mb-3">
//             {property.amenities.slice(0, 2).map(a => (
//               <span key={a} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>
//             ))}
//             {property.amenities.length > 2 && (
//               <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: '#FEE8EA', color: '#E63946' }}>
//                 +{property.amenities.length - 2}
//               </span>
//             )}
//           </div>
//           <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-[10px]" style={{ color: '#6B7280' }}>
//               {property.developer ? `🏗 ${property.developer}` : property.ownerName ? `👤 Owner` : property.category}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Project Card ────────────────────────────────────────────────────────────

// function ProjectCard({ name, count, sample, onClick }: {
//   name: string; count: number; sample: Property; onClick: () => void
// }) {
//   const pstatus = getStatus(sample)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   return (
//     <button onClick={onClick} className="group text-left w-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {sample.mainImage ? (
//             <img src={sample.mainImage} alt={name} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${sample.gradientFrom}, ${sample.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

//           {/* Status badge */}
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>

//           {/* Badge */}
//           {sample.badge && (
//             <div className="absolute top-3 left-3 z-10">
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {sample.badge}
//               </span>
//             </div>
//           )}

//           {/* Units count */}
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: 'rgba(11,31,58,0.80)' }}>
//               {count} {count === 1 ? 'Unit' : 'Units'}
//             </span>
//           </div>

//           {/* Price */}
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{sample.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {sample.category} · Starting Price
//             </p>
//           </div>
//         </div>

//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-base mb-1.5" style={{ color: '#0B1F3A' }}>
//             {name}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{sample.location}</span>
//           </div>
//           <div className="flex items-center justify-between pt-2 mt-auto" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-xs font-semibold" style={{ color: '#0B1F3A' }}>
//               {sample.developer ?? 'Owner Direct'}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View {count} {count === 1 ? 'Unit' : 'Units'} <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </button>
//   )
// }

// // ─── Main Page ───────────────────────────────────────────────────────────────

// export default function PropertiesClient() {
//   const searchParams = useSearchParams()
//   const [category, setCategory] = useState<Category>('residential')
//   const [statusTab, setStatusTab] = useState<StatusTab>('all')
//   const [listingType, setListingType] = useState<ListingType>('all')
//   const [search, setSearch] = useState('')
//   const [budgetIdx, setBudgetIdx] = useState(0)
//   const [location, setLocation] = useState('all')
//   const [sortBy, setSortBy] = useState('featured')
//   const [viewMode, setViewMode] = useState<ViewMode>('projects')  // default: projects
//   const [selectedProject, setSelectedProject] = useState<string | null>(null)
//   const [showFilters, setShowFilters] = useState(false)
//   const [openBudget, setOpenBudget] = useState(true)
//   const [openLoc, setOpenLoc] = useState(true)

//   useEffect(() => {
//     const loc = searchParams.get('location')
//     const budget = searchParams.get('budget')
//     const type = searchParams.get('type')
//     const status = searchParams.get('status')
//     const search = searchParams.get('search')

//     if (loc && LOCATIONS.includes(loc)) setLocation(loc)
//     if (budget) { const idx = HOME_BUDGET_MAP[budget]; if (idx !== undefined) setBudgetIdx(idx) }
//     if (type) setSearch(type)

//     if (search) {
//       setSearch(search)
//       // Word-based matching — same as projects useMemo
//       const words = search.toLowerCase().split(/\s+/).filter(Boolean)
//       const match = properties.find(p => {
//         const haystack = `${p.title} ${p.developer ?? ''} ${p.location} ${p.badge ?? ''}`.toLowerCase()
//         return words.every(word => haystack.includes(word))
//       })
//       if (match) {
//         if (match.category === 'Commercial') setCategory('commercial')
//         else if (match.category === 'Plot') setCategory('farmhouse')
//         else setCategory('residential')
//       }
//       setViewMode('projects')
//       setSelectedProject(null)
//     }

//     const validStatuses: StatusTab[] = ['under-construction', 'ready-to-move', 'recently-launched']
//     if (status && validStatuses.includes(status as StatusTab)) setStatusTab(status as StatusTab)
//   }, [searchParams])

//   const catCounts = useMemo(() => {
//     const countProjects = (cat: Category) => {
//       const base = properties.filter(p => getCategory(p) === cat)
//       const keys = new Set(base.map(p => p.developer ?? p.title))
//       return keys.size
//     }
//     return {
//       residential: countProjects('residential'),
//       commercial: countProjects('commercial'),
//       farmhouse: countProjects('farmhouse'),
//     }
//   }, [])

//   // ── Projects grouped by developer — display name from badge ──
//   const projects = useMemo(() => {
//     let base = properties.filter(p => getCategory(p) === category)

//     // Apply same sidebar filters as grid view
//     if (budgetIdx > 0) {
//       const { min, max } = BUDGETS[budgetIdx]
//       base = base.filter(p => p.priceValue >= min && p.priceValue <= max)
//     }
//     if (location !== 'all') base = base.filter(p => p.location.includes(location))
//     if (statusTab !== 'all') base = base.filter(p => getStatus(p) === statusTab)
//     if (listingType !== 'all') base = base.filter(p => getListingType(p) === listingType)

//     const map = new Map<string, { key: string; displayName: string; count: number; sample: Property }>()
//     base.forEach(p => {
//       const key = p.developer ?? p.title
//       if (!map.has(key)) {
//         map.set(key, {
//           key,
//           displayName: p.badge ?? p.developer ?? p.title,
//           count: 0,
//           sample: p,
//         })
//       }
//       map.get(key)!.count++
//     })
//     let result = Array.from(map.values())

//     // ── Search filter — check ALL units of each project ──
//     if (search.trim()) {
//       const words = search.toLowerCase().split(/\s+/).filter(Boolean)
//       result = result.filter(proj => {
//         const projUnits = base.filter(p => (p.developer ?? p.title) === proj.key)
//         return projUnits.some(p => {
//           const haystack = `${proj.key} ${proj.displayName} ${p.title} ${p.developer ?? ''} ${p.badge ?? ''} ${p.location}`.toLowerCase()
//           return words.every(word => haystack.includes(word))
//         })
//       })
//     }
//     return result
//   }, [category, search, budgetIdx, location, statusTab, listingType])

//   const filtered = useMemo(() => {
//     let r = properties.filter(p => getCategory(p) === category)
//     // If project selected, filter by that project
//     if (selectedProject) r = r.filter(p => (p.developer ?? p.title) === selectedProject)
//     if (statusTab !== 'all') r = r.filter(p => getStatus(p) === statusTab)
//     if (listingType !== 'all') r = r.filter(p => getListingType(p) === listingType)
//     if (search.trim() && !selectedProject) {
//       const q = search.toLowerCase()
//       r = r.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.developer ?? '').toLowerCase().includes(q) || (p.badge ?? '').toLowerCase().includes(q))
//     }
//     if (budgetIdx > 0) { const { min, max } = BUDGETS[budgetIdx]; r = r.filter(p => p.priceValue >= min && p.priceValue <= max) }
//     if (location !== 'all') r = r.filter(p => p.location.includes(location))
//     if (sortBy === 'price-asc') r = [...r].sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') r = [...r].sort((a, b) => b.priceValue - a.priceValue)
//     else r = [...r].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//     return r
//   }, [category, statusTab, listingType, search, budgetIdx, location, sortBy, selectedProject])

//   const baseForCat = properties.filter(p => getCategory(p) === category)
//   const statCount = (s: StatusTab) => s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
//   const typeCount = (t: ListingType) => t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length
//   const activeCat = CATEGORIES.find(c => c.id === category)!

//   const isProjectView = viewMode === 'projects' && !selectedProject

//   return (
//     <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

//       {/* ── SECTION A — CATEGORY ── */}
//       <div style={{ background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)' }} className="pt-20 relative">
//         <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
//           style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-0">
//           <p className="text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2" style={{ color: '#E63946' }}>
//             Browse Properties
//           </p>
//           <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-8">
//             Find Your Property
//           </h1>
//           <div className="grid grid-cols-3 gap-2 sm:gap-4">
//             {CATEGORIES.map(cat => {
//               const Icon = cat.icon
//               const isActive = category === cat.id
//               return (
//                 <button key={cat.id}
//                   onClick={() => {
//                     setCategory(cat.id)
//                     setStatusTab('all')
//                     setListingType('all')
//                     setSelectedProject(null)
//                     setViewMode('projects')
//                   }}
//                   className="relative rounded-t-xl sm:rounded-t-2xl overflow-hidden text-left transition-all duration-300"
//                   style={{
//                     background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
//                     border: `2px solid ${isActive ? '#E63946' : 'rgba(255,255,255,0.10)'}`,
//                     borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
//                     transform: isActive ? 'translateY(2px)' : 'translateY(0)',
//                     boxShadow: isActive ? '0 -4px 24px rgba(230,57,70,0.20)' : 'none',
//                     padding: '10px 10px 12px',
//                   }}>
//                   {isActive && <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#E63946' }} />}
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2"
//                     style={{ background: isActive ? '#FEE8EA' : 'rgba(255,255,255,0.12)' }}>
//                     <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isActive ? '#E63946' : '#fff' }} />
//                   </div>
//                   <p className="font-serif font-bold text-xs sm:text-lg leading-none mb-0.5"
//                     style={{ color: isActive ? '#0B1F3A' : '#fff' }}>{cat.label}</p>
//                   <p className="hidden sm:block text-xs" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>{cat.sub}</p>
//                   <p className="font-serif font-bold text-base sm:text-2xl mt-1"
//                     style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>{catCounts[cat.id]}</p>
//                   <p className="text-[9px] sm:text-[10px]"
//                     style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>projects</p>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION B — STATUS TABS ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             {STATUS_TABS.map(s => {
//               const isActive = statusTab === s.id
//               return (
//                 <button key={s.id} onClick={() => setStatusTab(s.id)}
//                   className="flex items-center gap-1.5 py-3 sm:py-4 px-3 sm:px-5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
//                   style={{ color: isActive ? '#E63946' : '#6B7280' }}>
//                   <span className="w-2 h-2 rounded-full shrink-0" style={{ background: isActive ? '#E63946' : s.dotColor }} />
//                   <span className="sm:hidden">{s.shortLabel}</span>
//                   <span className="hidden sm:inline">{s.label}</span>
//                   <span className="text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold"
//                     style={{ background: isActive ? '#FEE8EA' : '#F5F7FA', color: isActive ? '#E63946' : '#9CA3AF' }}>
//                     {statCount(s.id)}
//                   </span>
//                   {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION C — LISTING TYPE ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//           <div className="flex items-center justify-between gap-2 sm:gap-4">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#9CA3AF' }}>
//                 <span className="hidden sm:inline">Listing </span>Type:
//               </p>
//               <div className="flex rounded-lg sm:rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2' }}>
//                 <button onClick={() => setListingType('all')}
//                   className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'all' ? '#0B1F3A' : '#FFFFFF', color: listingType === 'all' ? '#fff' : '#6B7280' }}>
//                   All ({typeCount('all')})
//                 </button>
//                 <button onClick={() => setListingType('fresh')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'fresh' ? '#059669' : '#FFFFFF', color: listingType === 'fresh' ? '#fff' : '#6B7280', borderLeft: '1px solid #E8ECF2', borderRight: '1px solid #E8ECF2' }}>
//                   <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Fresh
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'fresh' ? 'rgba(255,255,255,0.25)' : '#DCFCE7', color: listingType === 'fresh' ? '#fff' : '#059669' }}>
//                     {typeCount('fresh')}
//                   </span>
//                 </button>
//                 <button onClick={() => setListingType('resale')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'resale' ? '#2563EB' : '#FFFFFF', color: listingType === 'resale' ? '#fff' : '#6B7280' }}>
//                   <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Resale
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'resale' ? 'rgba(255,255,255,0.25)' : '#EFF6FF', color: listingType === 'resale' ? '#fff' : '#2563EB' }}>
//                     {typeCount('resale')}
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold"
//               style={{ background: '#FEE8EA', color: '#E63946' }}>
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//               {activeCat.label} · {isProjectView ? `${projects.length} Projects` : `${filtered.length} Units`}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN BODY ── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
//         <div className="flex gap-5 sm:gap-6">

//           {/* Sidebar */}
//           <div className="hidden lg:block w-60 shrink-0">
//             <div className="sticky top-24 space-y-4">
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenBudget(!openBudget)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openBudget ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <IndianRupee className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Budget</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openBudget ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openBudget && (
//                   <div className="p-3 flex flex-col gap-1">
//                     {BUDGETS.map((b, i) => (
//                       <button key={b.label} onClick={() => setBudgetIdx(i)}
//                         className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A', fontWeight: budgetIdx === i ? 600 : 400 }}>
//                         {b.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenLoc(!openLoc)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openLoc ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Location</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openLoc ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openLoc && (
//                   <div className="p-3 flex flex-col gap-1">
//                     <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                       style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A', fontWeight: location === 'all' ? 600 : 400 }}>
//                       All Locations
//                     </button>
//                     {LOCATIONS.map(l => (
//                       <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A', fontWeight: location === l ? 600 : 400 }}>
//                         {l}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               {(budgetIdx > 0 || location !== 'all') && (
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all') }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Grid area */}
//           <div className="flex-1 min-w-0">

//             {/* Search + controls */}
//             <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
//               <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl flex-1 min-w-0"
//                 style={{ background: '#FFFFFF', border: '1px solid #E8ECF2' }}>
//                 <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <input type="text" placeholder="Search projects..."
//                   value={search}
//                   onChange={e => {
//                     setSearch(e.target.value)
//                     setSelectedProject(null)
//                     setViewMode('grid')
//                   }}
//                   className="w-full bg-transparent text-xs sm:text-sm focus:outline-none" style={{ color: '#1A1A1A' }} />
//                 {search && <button onClick={() => { setSearch(''); setSelectedProject(null); setViewMode('projects') }}>
//                   <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9CA3AF' }} />
//                 </button>}
//               </div>
//               <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
//                 <button onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
//                   <SlidersHorizontal className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                   <span className="hidden sm:inline">Filters</span>
//                 </button>
//                 {/* Sort — only when not in project view */}
//                 {!isProjectView && (
//                   <select value={sortBy} onChange={e => setSortBy(e.target.value)}
//                     className="text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl focus:outline-none"
//                     style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                     <option value="featured">Featured</option>
//                     <option value="price-asc">Price ↑</option>
//                     <option value="price-desc">Price ↓</option>
//                   </select>
//                 )}
//                 {/* View toggle */}
//                 <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                   <button onClick={() => { setViewMode('projects'); setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: isProjectView ? '#0B1F3A' : '#fff', color: isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Projects View">
//                     <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => { setViewMode('grid'); if (!selectedProject) setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'grid' && !isProjectView ? '#0B1F3A' : '#fff', color: viewMode === 'grid' && !isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Grid View">
//                     <Grid3x3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}
//                     title="List View">
//                     <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {selectedProject && (
//               <button
//                 onClick={() => { setSelectedProject(null); setViewMode('projects'); setSearch('') }}
//                 className="flex items-center gap-2 text-sm font-semibold mb-4 px-3 py-2 rounded-lg transition-all"
//                 style={{ color: '#E63946', background: '#FEE8EA' }}>
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Projects
//               </button>
//             )}

//             {/* Result count */}
//             <div className="flex items-center gap-2 mb-4 sm:mb-5">
//               <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
//               <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
//                 {isProjectView ? (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{projects.length}</span> projects in {activeCat.label}</>
//                 ) : selectedProject ? (
//                   <><span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> units in <span className="font-bold" style={{ color: '#E63946' }}>{selectedProject}</span></>
//                 ) : (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> {activeCat.label.toLowerCase()} properties</>
//                 )}
//               </p>
//             </div>

//             {/* ── VIEWS ── */}

//             {isProjectView ? (
//               // Projects grid
//               projects.length === 0 ? (
//                 <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                   <Building2 className="w-10 h-10 mx-auto mb-4" style={{ color: '#9CA3AF' }} />
//                   <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: '#0B1F3A' }}>No projects found</h3>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
//                   {projects.map(proj => (
//                     <ProjectCard
//                       key={proj.key}
//                       name={proj.displayName}
//                       count={proj.count}
//                       sample={proj.sample}
//                       onClick={() => { setSelectedProject(proj.key); setViewMode('grid') }}
//                     />
//                   ))}
//                 </div>
//               )
//             ) : filtered.length === 0 ? (
//               <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#F5F7FA' }}>
//                   <Search className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#9CA3AF' }} />
//                 </div>
//                 <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>No properties found</h3>
//                 <p className="text-xs sm:text-sm mb-4 sm:mb-5" style={{ color: '#6B7280' }}>Try adjusting the filters above.</p>
//                 <button onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all'); setSelectedProject(null); setViewMode('projects') }}
//                   className="text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white" style={{ background: '#E63946' }}>
//                   Clear Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={viewMode === 'grid'
//                 ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5'
//                 : 'flex flex-col gap-3 sm:gap-4'}>
//                 {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode === 'list' ? 'list' : 'grid'} />)}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Filter Drawer */}
//       {showFilters && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
//           <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto shadow-2xl">
//             <div className="flex items-center justify-between p-4 sm:p-5 sticky top-0 bg-white z-10" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Filters</span>
//               <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" style={{ color: '#0B1F3A' }} /></button>
//             </div>
//             <div className="p-4 sm:p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Budget</p>
//               <div className="flex flex-col gap-1">
//                 {BUDGETS.map((b, i) => (
//                   <button key={b.label} onClick={() => setBudgetIdx(i)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A' }}>
//                     {b.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="p-4 sm:p-5">
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Location</p>
//               <div className="flex flex-col gap-1">
//                 <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg"
//                   style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A' }}>
//                   All Locations
//                 </button>
//                 {LOCATIONS.map(l => (
//                   <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A' }}>
//                     {l}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {(budgetIdx > 0 || location !== 'all') && (
//               <div className="px-4 pb-4">
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all'); setShowFilters(false) }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


// 'use client'

// import { useState, useMemo, useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Link from 'next/link'
// import {
//   Search, Grid3x3, List, X, SlidersHorizontal,
//   MapPin, BedDouble, Bath, Maximize2, ArrowRight,
//   Home, Building2, Trees, Sparkles, RefreshCw,
//   ChevronDown, CheckCircle2, IndianRupee, LayoutGrid,
//   ArrowLeft
// } from 'lucide-react'
// import { properties } from '@/lib/data'
// import type { Property } from '@/lib/data'

// type Category = 'residential' | 'commercial' | 'farmhouse'
// type StatusTab = 'all' | 'under-construction' | 'ready-to-move' | 'recently-launched'
// type ListingType = 'all' | 'fresh' | 'resale'
// type ViewMode = 'grid' | 'list' | 'projects'

// const CATEGORIES: {
//   id: Category; label: string; sub: string; icon: React.ElementType
//   gradient: string; accentColor: string; lightBg: string
// }[] = [
//     { id: 'residential', label: 'Residential', sub: 'Apartments, Villas & Homes', icon: Home, gradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)', accentColor: '#E63946', lightBg: '#EBF0F7' },
//     { id: 'commercial', label: 'Commercial', sub: 'Offices, Shops & Spaces', icon: Building2, gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', accentColor: '#E63946', lightBg: '#F0EEFF' },
//     { id: 'farmhouse', label: 'Farm House', sub: 'Farms, Resorts & Land', icon: Trees, gradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 100%)', accentColor: '#E63946', lightBg: '#ECFDF5' },
//   ]

// const STATUS_TABS: { id: StatusTab; label: string; shortLabel: string; dotColor: string; tagBg: string; tagText: string }[] = [
//   { id: 'all', label: 'All Properties', shortLabel: 'All', dotColor: '#6B7280', tagBg: '#F5F7FA', tagText: '#6B7280' },
//   { id: 'under-construction', label: 'Under Construction', shortLabel: 'Under Const.', dotColor: '#2563EB', tagBg: 'rgba(37,99,235,0.10)', tagText: '#2563EB' },
//   { id: 'ready-to-move', label: 'Ready to Move', shortLabel: 'Ready', dotColor: '#059669', tagBg: 'rgba(5,150,105,0.10)', tagText: '#059669' },
//   { id: 'recently-launched', label: 'Recently Launched', shortLabel: 'New Launch', dotColor: '#D97706', tagBg: 'rgba(217,119,6,0.10)', tagText: '#D97706' },
// ]

// const BUDGETS = [
//   { label: 'Any Budget', min: 0, max: 999999999 },
//   { label: 'Under ₹50L', min: 0, max: 5000000 },
//   { label: '₹50L – ₹1Cr', min: 5000000, max: 10000000 },
//   { label: '₹1Cr – ₹2Cr', min: 10000000, max: 20000000 },
//   { label: '₹2Cr – ₹5Cr', min: 20000000, max: 50000000 },
//   { label: 'Above ₹5Cr', min: 50000000, max: 999999999 },
// ]

// const HOME_BUDGET_MAP: Record<string, number> = {
//   'Under ₹50 Lakh': 1, '₹50L–₹1 Cr': 2, '₹1–₂ Cr': 3, '₹2–5 Cr': 4, 'Above ₹5 Cr': 5,
// }

// const LOCATIONS = [
//   'Vrindavan Yojna', 'Shaheed Path', 'Gomti Nagar', 'Hazratganj',
//   'Aliganj', 'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
// ]

// function getCategory(p: Property): Category {
//   if (p.category === 'Commercial') return 'commercial'
//   if (p.category === 'Plot') return 'farmhouse'
//   return 'residential'
// }
// function getStatus(p: Property): StatusTab {
//   if (p.status === 'Under Construction') return 'under-construction'
//   if (p.status === 'Ready to Move') return 'ready-to-move'
//   if (p.status === 'New Launch') return 'recently-launched'
//   return 'ready-to-move'
// }
// function getListingType(p: Property): 'fresh' | 'resale' {
//   return p.subtype === 'resell' ? 'resale' : 'fresh'
// }

// // ─── Property Card ──────────────────────────────────────────────────────────

// function PropertyCard({ property, view }: { property: Property; view: 'grid' | 'list' }) {
//   const ltype = getListingType(property)
//   const pstatus = getStatus(property)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   if (view === 'list') {
//     return (
//       <Link href={`/properties/${property.slug}`} className="group block">
//         <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex transition-all duration-300 group-hover:shadow-lg"
//           style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 8px rgba(11,31,58,0.05)' }}>
//           <div className="relative shrink-0 w-28 h-28 sm:w-48 sm:h-36"
//             style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//             <div className="absolute inset-0 opacity-[0.08]"
//               style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
//             {property.badge && (
//               <span className="absolute top-2 left-2 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded z-10"
//                 style={{ background: '#E63946' }}>{property.badge}</span>
//             )}
//             <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3"
//               style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
//               <p className="text-white font-serif font-bold text-xs sm:text-base">{property.price}</p>
//             </div>
//           </div>
//           <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between min-w-0">
//             <div>
//               <div className="flex items-start justify-between gap-1 mb-1">
//                 <h3 className="font-serif font-semibold text-xs sm:text-sm leading-tight line-clamp-2" style={{ color: '#0B1F3A' }}>
//                   {property.title}
//                 </h3>
//                 <div className="flex gap-1 shrink-0">
//                   <span className="text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full"
//                     style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>{stCfg.shortLabel}</span>
//                   <span className="hidden sm:inline text-[10px] font-bold px-2 py-0.5 rounded-full"
//                     style={{ background: ltype === 'fresh' ? '#DCFCE7' : '#EFF6FF', color: ltype === 'fresh' ? '#059669' : '#2563EB' }}>
//                     {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 text-[10px] sm:text-xs mb-1 sm:mb-2" style={{ color: '#6B7280' }}>
//                 <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" style={{ color: '#E63946' }} />
//                 <span className="truncate">{property.location}</span>
//               </div>
//               {property.bedrooms > 0 && (
//                 <div className="hidden sm:flex gap-3 text-xs" style={{ color: '#6B7280' }}>
//                   <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" />{property.area}</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-1.5 pt-1.5 sm:mt-2 sm:pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//               <span className="text-[10px] sm:text-xs truncate" style={{ color: '#6B7280' }}>
//                 {property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}
//               </span>
//               <span className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold shrink-0" style={{ color: '#E63946' }}>
//                 View <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     )
//   }

//   return (
//     <Link href={`/properties/${property.slug}`} className="group block h-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {property.mainImage ? (
//             <img src={property.mainImage} alt={property.title} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
//           <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//             {property.badge && (
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {property.badge}
//               </span>
//             )}
//           </div>
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: ltype === 'fresh' ? 'rgba(5,150,105,0.90)' : 'rgba(37,99,235,0.90)' }}>
//               {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//             </span>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{property.category} · {property.area}</p>
//           </div>
//         </div>
//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2" style={{ color: '#0B1F3A' }}>
//             {property.title}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{property.location}</span>
//           </div>
//           {property.bedrooms > 0 && (
//             <div className="flex gap-3 text-xs pb-3 mb-3" style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
//               <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds</span>
//               <span className="flex items-center gap-1"><Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths</span>
//               <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}</span>
//             </div>
//           )}
//           <div className="flex flex-wrap gap-1 flex-1 mb-3">
//             {property.amenities.slice(0, 2).map(a => (
//               <span key={a} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>
//             ))}
//             {property.amenities.length > 2 && (
//               <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: '#FEE8EA', color: '#E63946' }}>
//                 +{property.amenities.length - 2}
//               </span>
//             )}
//           </div>
//           <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-[10px]" style={{ color: '#6B7280' }}>
//               {property.developer ? `🏗 ${property.developer}` : property.ownerName ? `👤 Owner` : property.category}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Project Card ────────────────────────────────────────────────────────────

// function ProjectCard({ name, count, sample, onClick }: {
//   name: string; count: number; sample: Property; onClick: () => void
// }) {
//   const pstatus = getStatus(sample)
//   const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

//   return (
//     <button onClick={onClick} className="group text-left w-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
//           {sample.mainImage ? (
//             <img src={sample.mainImage} alt={name} className="w-full h-full object-cover object-top" />
//           ) : (
//             <div className="w-full h-full"
//               style={{ background: `linear-gradient(135deg, ${sample.gradientFrom}, ${sample.gradientTo})` }} />
//           )}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

//           {/* Status badge */}
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>

//           {/* Badge */}
//           {sample.badge && (
//             <div className="absolute top-3 left-3 z-10">
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
//                 {sample.badge}
//               </span>
//             </div>
//           )}

//           {/* Units count */}
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: 'rgba(11,31,58,0.80)' }}>
//               {count} {count === 1 ? 'Unit' : 'Units'}
//             </span>
//           </div>

//           {/* Price */}
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{sample.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {sample.category} · Starting Price
//             </p>
//           </div>
//         </div>

//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-base mb-1.5" style={{ color: '#0B1F3A' }}>
//             {name}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{sample.location}</span>
//           </div>
//           <div className="flex items-center justify-between pt-2 mt-auto" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-xs font-semibold" style={{ color: '#0B1F3A' }}>
//               {sample.developer ?? 'Owner Direct'}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//               View {count} {count === 1 ? 'Unit' : 'Units'} <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </button>
//   )
// }

// // ─── Main Page ───────────────────────────────────────────────────────────────

// export default function PropertiesClient() {
//   const searchParams = useSearchParams()
//   const [category, setCategory] = useState<Category>('residential')
//   const [statusTab, setStatusTab] = useState<StatusTab>('all')
//   const [listingType, setListingType] = useState<ListingType>('all')
//   const [search, setSearch] = useState('')
//   const [budgetIdx, setBudgetIdx] = useState(0)
//   const [location, setLocation] = useState('all')
//   const [sortBy, setSortBy] = useState('featured')
//   const [viewMode, setViewMode] = useState<ViewMode>('projects')  // default: projects
//   const [selectedProject, setSelectedProject] = useState<string | null>(null)
//   const [showFilters, setShowFilters] = useState(false)
//   const [openBudget, setOpenBudget] = useState(true)
//   const [openLoc, setOpenLoc] = useState(true)

//   useEffect(() => {
//     const loc = searchParams.get('location')
//     const budget = searchParams.get('budget')
//     const type = searchParams.get('type')
//     const status = searchParams.get('status')
//     const search = searchParams.get('search')
//     const project = searchParams.get('project')  // ← detail page se aata hai

//     if (loc && LOCATIONS.includes(loc)) setLocation(loc)
//     if (budget) { const idx = HOME_BUDGET_MAP[budget]; if (idx !== undefined) setBudgetIdx(idx) }
//     if (type) setSearch(type)

//     if (search) {
//       setSearch(search)
//       const words = search.toLowerCase().split(/\s+/).filter(Boolean)
//       const match = properties.find(p => {
//         const haystack = `${p.title} ${p.developer ?? ''} ${p.location} ${p.badge ?? ''}`.toLowerCase()
//         return words.every(word => haystack.includes(word))
//       })
//       if (match) {
//         if (match.category === 'Commercial') setCategory('commercial')
//         else if (match.category === 'Plot') setCategory('farmhouse')
//         else setCategory('residential')
//       }
//       setViewMode('projects')
//       setSelectedProject(null)
//     }

//     // ← Property detail "Back to Properties" se aata hai
//     if (project) {
//       const match = properties.find(p => (p.developer ?? p.title) === project)
//       if (match) {
//         if (match.category === 'Commercial') setCategory('commercial')
//         else if (match.category === 'Plot') setCategory('farmhouse')
//         else setCategory('residential')
//       }
//       setSelectedProject(project)
//       setViewMode('grid')
//       setSearch('')
//     }

//     const validStatuses: StatusTab[] = ['under-construction', 'ready-to-move', 'recently-launched']
//     if (status && validStatuses.includes(status as StatusTab)) setStatusTab(status as StatusTab)
//   }, [searchParams])

//   const catCounts = useMemo(() => {
//     const countProjects = (cat: Category) => {
//       const base = properties.filter(p => getCategory(p) === cat)
//       const keys = new Set(base.map(p => p.developer ?? p.title))
//       return keys.size
//     }
//     return {
//       residential: countProjects('residential'),
//       commercial: countProjects('commercial'),
//       farmhouse: countProjects('farmhouse'),
//     }
//   }, [])

//   // ── Projects grouped by developer — display name from badge ──
//   const projects = useMemo(() => {
//     let base = properties.filter(p => getCategory(p) === category)

//     // Apply same sidebar filters as grid view
//     if (budgetIdx > 0) {
//       const { min, max } = BUDGETS[budgetIdx]
//       base = base.filter(p => p.priceValue >= min && p.priceValue <= max)
//     }
//     if (location !== 'all') base = base.filter(p => p.location.includes(location))
//     if (statusTab !== 'all') base = base.filter(p => getStatus(p) === statusTab)
//     if (listingType !== 'all') base = base.filter(p => getListingType(p) === listingType)

//     const map = new Map<string, { key: string; displayName: string; count: number; sample: Property }>()
//     base.forEach(p => {
//       const key = p.developer ?? p.title
//       if (!map.has(key)) {
//         map.set(key, {
//           key,
//           displayName: p.badge ?? p.developer ?? p.title,
//           count: 0,
//           sample: p,
//         })
//       }
//       map.get(key)!.count++
//     })
//     let result = Array.from(map.values())

//     // ── Search filter — check ALL units of each project ──
//     if (search.trim()) {
//       const words = search.toLowerCase().split(/\s+/).filter(Boolean)
//       result = result.filter(proj => {
//         const projUnits = base.filter(p => (p.developer ?? p.title) === proj.key)
//         return projUnits.some(p => {
//           const haystack = `${proj.key} ${proj.displayName} ${p.title} ${p.developer ?? ''} ${p.badge ?? ''} ${p.location}`.toLowerCase()
//           return words.every(word => haystack.includes(word))
//         })
//       })
//     }
//     return result
//   }, [category, search, budgetIdx, location, statusTab, listingType])

//   const filtered = useMemo(() => {
//     let r = properties.filter(p => getCategory(p) === category)
//     // If project selected, filter by that project
//     if (selectedProject) r = r.filter(p => (p.developer ?? p.title) === selectedProject)
//     if (statusTab !== 'all') r = r.filter(p => getStatus(p) === statusTab)
//     if (listingType !== 'all') r = r.filter(p => getListingType(p) === listingType)
//     if (search.trim() && !selectedProject) {
//       const q = search.toLowerCase()
//       r = r.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.developer ?? '').toLowerCase().includes(q) || (p.badge ?? '').toLowerCase().includes(q))
//     }
//     if (budgetIdx > 0) { const { min, max } = BUDGETS[budgetIdx]; r = r.filter(p => p.priceValue >= min && p.priceValue <= max) }
//     if (location !== 'all') r = r.filter(p => p.location.includes(location))
//     if (sortBy === 'price-asc') r = [...r].sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') r = [...r].sort((a, b) => b.priceValue - a.priceValue)
//     else r = [...r].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//     return r
//   }, [category, statusTab, listingType, search, budgetIdx, location, sortBy, selectedProject])

//   const baseForCat = properties.filter(p => getCategory(p) === category)
//   const statCount = (s: StatusTab) => s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
//   const typeCount = (t: ListingType) => t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length
//   const activeCat = CATEGORIES.find(c => c.id === category)!

//   const isProjectView = viewMode === 'projects' && !selectedProject

//   return (
//     <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

//       {/* ── SECTION A — CATEGORY ── */}
//       <div style={{ background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)' }} className="pt-20 relative">
//         <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
//           style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-0">
//           <p className="text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2" style={{ color: '#E63946' }}>
//             Browse Properties
//           </p>
//           <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-8">
//             Find Your Property
//           </h1>
//           <div className="grid grid-cols-3 gap-2 sm:gap-4">
//             {CATEGORIES.map(cat => {
//               const Icon = cat.icon
//               const isActive = category === cat.id
//               return (
//                 <button key={cat.id}
//                   onClick={() => {
//                     setCategory(cat.id)
//                     setStatusTab('all')
//                     setListingType('all')
//                     setSelectedProject(null)
//                     setViewMode('projects')
//                   }}
//                   className="relative rounded-t-xl sm:rounded-t-2xl overflow-hidden text-left transition-all duration-300"
//                   style={{
//                     background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
//                     border: `2px solid ${isActive ? '#E63946' : 'rgba(255,255,255,0.10)'}`,
//                     borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
//                     transform: isActive ? 'translateY(2px)' : 'translateY(0)',
//                     boxShadow: isActive ? '0 -4px 24px rgba(230,57,70,0.20)' : 'none',
//                     padding: '10px 10px 12px',
//                   }}>
//                   {isActive && <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#E63946' }} />}
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2"
//                     style={{ background: isActive ? '#FEE8EA' : 'rgba(255,255,255,0.12)' }}>
//                     <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isActive ? '#E63946' : '#fff' }} />
//                   </div>
//                   <p className="font-serif font-bold text-xs sm:text-lg leading-none mb-0.5"
//                     style={{ color: isActive ? '#0B1F3A' : '#fff' }}>{cat.label}</p>
//                   <p className="hidden sm:block text-xs" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>{cat.sub}</p>
//                   <p className="font-serif font-bold text-base sm:text-2xl mt-1"
//                     style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>{catCounts[cat.id]}</p>
//                   <p className="text-[9px] sm:text-[10px]"
//                     style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>projects</p>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION B — STATUS TABS ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             {STATUS_TABS.map(s => {
//               const isActive = statusTab === s.id
//               return (
//                 <button key={s.id} onClick={() => setStatusTab(s.id)}
//                   className="flex items-center gap-1.5 py-3 sm:py-4 px-3 sm:px-5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
//                   style={{ color: isActive ? '#E63946' : '#6B7280' }}>
//                   <span className="w-2 h-2 rounded-full shrink-0" style={{ background: isActive ? '#E63946' : s.dotColor }} />
//                   <span className="sm:hidden">{s.shortLabel}</span>
//                   <span className="hidden sm:inline">{s.label}</span>
//                   <span className="text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold"
//                     style={{ background: isActive ? '#FEE8EA' : '#F5F7FA', color: isActive ? '#E63946' : '#9CA3AF' }}>
//                     {statCount(s.id)}
//                   </span>
//                   {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION C — LISTING TYPE ── */}
//       <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//           <div className="flex items-center justify-between gap-2 sm:gap-4">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#9CA3AF' }}>
//                 <span className="hidden sm:inline">Listing </span>Type:
//               </p>
//               <div className="flex rounded-lg sm:rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2' }}>
//                 <button onClick={() => setListingType('all')}
//                   className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'all' ? '#0B1F3A' : '#FFFFFF', color: listingType === 'all' ? '#fff' : '#6B7280' }}>
//                   All ({typeCount('all')})
//                 </button>
//                 <button onClick={() => setListingType('fresh')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'fresh' ? '#059669' : '#FFFFFF', color: listingType === 'fresh' ? '#fff' : '#6B7280', borderLeft: '1px solid #E8ECF2', borderRight: '1px solid #E8ECF2' }}>
//                   <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Fresh
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'fresh' ? 'rgba(255,255,255,0.25)' : '#DCFCE7', color: listingType === 'fresh' ? '#fff' : '#059669' }}>
//                     {typeCount('fresh')}
//                   </span>
//                 </button>
//                 <button onClick={() => setListingType('resale')}
//                   className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'resale' ? '#2563EB' : '#FFFFFF', color: listingType === 'resale' ? '#fff' : '#6B7280' }}>
//                   <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Resale
//                   <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'resale' ? 'rgba(255,255,255,0.25)' : '#EFF6FF', color: listingType === 'resale' ? '#fff' : '#2563EB' }}>
//                     {typeCount('resale')}
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold"
//               style={{ background: '#FEE8EA', color: '#E63946' }}>
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//               {activeCat.label} · {isProjectView ? `${projects.length} Projects` : `${filtered.length} Units`}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN BODY ── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
//         <div className="flex gap-5 sm:gap-6">

//           {/* Sidebar */}
//           <div className="hidden lg:block w-60 shrink-0">
//             <div className="sticky top-24 space-y-4">
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenBudget(!openBudget)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openBudget ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <IndianRupee className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Budget</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openBudget ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openBudget && (
//                   <div className="p-3 flex flex-col gap-1">
//                     {BUDGETS.map((b, i) => (
//                       <button key={b.label} onClick={() => setBudgetIdx(i)}
//                         className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A', fontWeight: budgetIdx === i ? 600 : 400 }}>
//                         {b.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenLoc(!openLoc)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openLoc ? '1px solid #E8ECF2' : 'none' }}>
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Location</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openLoc ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openLoc && (
//                   <div className="p-3 flex flex-col gap-1">
//                     <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                       style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A', fontWeight: location === 'all' ? 600 : 400 }}>
//                       All Locations
//                     </button>
//                     {LOCATIONS.map(l => (
//                       <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A', fontWeight: location === l ? 600 : 400 }}>
//                         {l}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               {(budgetIdx > 0 || location !== 'all') && (
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all') }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Grid area */}
//           <div className="flex-1 min-w-0">

//             {/* Search + controls */}
//             <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
//               <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl flex-1 min-w-0"
//                 style={{ background: '#FFFFFF', border: '1px solid #E8ECF2' }}>
//                 <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <input type="text" placeholder="Search projects..."
//                   value={search}
//                   onChange={e => {
//                     setSearch(e.target.value)
//                     setSelectedProject(null)
//                     setViewMode('projects')
//                   }}
//                   className="w-full bg-transparent text-xs sm:text-sm focus:outline-none" style={{ color: '#1A1A1A' }} />
//                 {search && <button onClick={() => { setSearch(''); setSelectedProject(null); setViewMode('projects') }}>
//                   <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9CA3AF' }} />
//                 </button>}
//               </div>
//               <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
//                 <button onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
//                   <SlidersHorizontal className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                   <span className="hidden sm:inline">Filters</span>
//                 </button>
//                 {/* Sort — only when not in project view */}
//                 {!isProjectView && (
//                   <select value={sortBy} onChange={e => setSortBy(e.target.value)}
//                     className="text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl focus:outline-none"
//                     style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                     <option value="featured">Featured</option>
//                     <option value="price-asc">Price ↑</option>
//                     <option value="price-desc">Price ↓</option>
//                   </select>
//                 )}
//                 {/* View toggle */}
//                 <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                   <button onClick={() => { setViewMode('projects'); setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: isProjectView ? '#0B1F3A' : '#fff', color: isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Projects View">
//                     <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => { setViewMode('grid'); if (!selectedProject) setSelectedProject(null) }}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'grid' && !isProjectView ? '#0B1F3A' : '#fff', color: viewMode === 'grid' && !isProjectView ? '#fff' : '#9CA3AF' }}
//                     title="Grid View">
//                     <Grid3x3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')}
//                     className="p-2 sm:p-2.5 transition-colors"
//                     style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}
//                     title="List View">
//                     <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {selectedProject && (
//               <button
//                 onClick={() => { setSelectedProject(null); setViewMode('projects'); setSearch('') }}
//                 className="flex items-center gap-2 text-sm font-semibold mb-4 px-3 py-2 rounded-lg transition-all"
//                 style={{ color: '#E63946', background: '#FEE8EA' }}>
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Projects
//               </button>
//             )}

//             {/* Result count */}
//             <div className="flex items-center gap-2 mb-4 sm:mb-5">
//               <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
//               <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
//                 {isProjectView ? (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{projects.length}</span> projects in {activeCat.label}</>
//                 ) : selectedProject ? (
//                   <><span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> units in <span className="font-bold" style={{ color: '#E63946' }}>{selectedProject}</span></>
//                 ) : (
//                   <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> {activeCat.label.toLowerCase()} properties</>
//                 )}
//               </p>
//             </div>

//             {/* ── VIEWS ── */}

//             {isProjectView ? (
//               // Projects grid
//               projects.length === 0 ? (
//                 <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                   <Building2 className="w-10 h-10 mx-auto mb-4" style={{ color: '#9CA3AF' }} />
//                   <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: '#0B1F3A' }}>No projects found</h3>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
//                   {projects.map(proj => (
//                     <ProjectCard
//                       key={proj.key}
//                       name={proj.displayName}
//                       count={proj.count}
//                       sample={proj.sample}
//                       onClick={() => { setSelectedProject(proj.key); setViewMode('grid') }}
//                     />
//                   ))}
//                 </div>
//               )
//             ) : filtered.length === 0 ? (
//               <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#F5F7FA' }}>
//                   <Search className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#9CA3AF' }} />
//                 </div>
//                 <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>No properties found</h3>
//                 <p className="text-xs sm:text-sm mb-4 sm:mb-5" style={{ color: '#6B7280' }}>Try adjusting the filters above.</p>
//                 <button onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all'); setSelectedProject(null); setViewMode('projects') }}
//                   className="text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white" style={{ background: '#E63946' }}>
//                   Clear Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={viewMode === 'grid'
//                 ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5'
//                 : 'flex flex-col gap-3 sm:gap-4'}>
//                 {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode === 'list' ? 'list' : 'grid'} />)}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Filter Drawer */}
//       {showFilters && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
//           <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto shadow-2xl">
//             <div className="flex items-center justify-between p-4 sm:p-5 sticky top-0 bg-white z-10" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Filters</span>
//               <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" style={{ color: '#0B1F3A' }} /></button>
//             </div>
//             <div className="p-4 sm:p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Budget</p>
//               <div className="flex flex-col gap-1">
//                 {BUDGETS.map((b, i) => (
//                   <button key={b.label} onClick={() => setBudgetIdx(i)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A' }}>
//                     {b.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="p-4 sm:p-5">
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Location</p>
//               <div className="flex flex-col gap-1">
//                 <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg"
//                   style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A' }}>
//                   All Locations
//                 </button>
//                 {LOCATIONS.map(l => (
//                   <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A' }}>
//                     {l}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {(budgetIdx > 0 || location !== 'all') && (
//               <div className="px-4 pb-4">
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all'); setShowFilters(false) }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  Search, Grid3x3, List, X, SlidersHorizontal,
  MapPin, BedDouble, Bath, Maximize2, ArrowRight,
  Home, Building2, Trees, Sparkles, RefreshCw,
  ChevronDown, CheckCircle2, IndianRupee, LayoutGrid,
  ArrowLeft
} from 'lucide-react'
import { properties } from '@/lib/data'
import type { Property } from '@/lib/data'

type Category = 'residential' | 'commercial' | 'farmhouse'
type StatusTab = 'all' | 'under-construction' | 'ready-to-move' | 'recently-launched'
type ListingType = 'all' | 'fresh' | 'resale'
type ViewMode = 'grid' | 'list' | 'projects'

const CATEGORIES: {
  id: Category; label: string; sub: string; icon: React.ElementType
  gradient: string; accentColor: string; lightBg: string
}[] = [
    { id: 'residential', label: 'Residential', sub: 'Apartments, Villas & Homes', icon: Home, gradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)', accentColor: '#E63946', lightBg: '#EBF0F7' },
    { id: 'commercial', label: 'Commercial', sub: 'Offices, Shops & Spaces', icon: Building2, gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', accentColor: '#E63946', lightBg: '#F0EEFF' },
    { id: 'farmhouse', label: 'Farm House', sub: 'Farms, Resorts & Land', icon: Trees, gradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 100%)', accentColor: '#E63946', lightBg: '#ECFDF5' },
  ]

const STATUS_TABS: { id: StatusTab; label: string; shortLabel: string; dotColor: string; tagBg: string; tagText: string }[] = [
  { id: 'all', label: 'All Properties', shortLabel: 'All', dotColor: '#6B7280', tagBg: '#F5F7FA', tagText: '#6B7280' },
  { id: 'under-construction', label: 'Under Construction', shortLabel: 'Under Const.', dotColor: '#2563EB', tagBg: 'rgba(37,99,235,0.10)', tagText: '#2563EB' },
  { id: 'ready-to-move', label: 'Ready to Move', shortLabel: 'Ready', dotColor: '#059669', tagBg: 'rgba(5,150,105,0.10)', tagText: '#059669' },
  { id: 'recently-launched', label: 'Recently Launched', shortLabel: 'New Launch', dotColor: '#D97706', tagBg: 'rgba(217,119,6,0.10)', tagText: '#D97706' },
]

const BUDGETS = [
  { label: 'Any Budget', min: 0, max: 999999999 },
  { label: 'Under ₹50L', min: 0, max: 5000000 },
  { label: '₹50L – ₹1Cr', min: 5000000, max: 10000000 },
  { label: '₹1Cr – ₹2Cr', min: 10000000, max: 20000000 },
  { label: '₹2Cr – ₹5Cr', min: 20000000, max: 50000000 },
  { label: 'Above ₹5Cr', min: 50000000, max: 999999999 },
]

const HOME_BUDGET_MAP: Record<string, number> = {
  'Under ₹50 Lakh': 1, '₹50L–₹1 Cr': 2, '₹1–₂ Cr': 3, '₹2–5 Cr': 4, 'Above ₹5 Cr': 5,
}

const LOCATIONS = [
  'Vrindavan Yojna', 'Shaheed Path', 'Gomti Nagar', 'Hazratganj',
  'Aliganj', 'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
]

function getCategory(p: Property): Category {
  if (p.category === 'Commercial') return 'commercial'
  if (p.category === 'Plot') return 'farmhouse'
  return 'residential'
}
function getStatus(p: Property): StatusTab {
  if (p.status === 'Under Construction') return 'under-construction'
  if (p.status === 'Ready to Move') return 'ready-to-move'
  if (p.status === 'New Launch') return 'recently-launched'
  return 'ready-to-move'
}
function getListingType(p: Property): 'fresh' | 'resale' {
  return p.subtype === 'resell' ? 'resale' : 'fresh'
}

// ─── Property Card ──────────────────────────────────────────────────────────

function PropertyCard({ property, view }: { property: Property; view: 'grid' | 'list' }) {
  const ltype = getListingType(property)
  const pstatus = getStatus(property)
  const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

  if (view === 'list') {
    return (
      <Link href={`/properties/${property.slug}`} className="group block">
        <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex transition-all duration-300 group-hover:shadow-lg"
          style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 8px rgba(11,31,58,0.05)' }}>
          <div className="relative shrink-0 w-28 h-28 sm:w-48 sm:h-36"
            style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
            <div className="absolute inset-0 opacity-[0.08]"
              style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            {property.badge && (
              <span className="absolute top-2 left-2 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded z-10"
                style={{ background: '#E63946' }}>{property.badge}</span>
            )}
            <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3"
              style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
              <p className="text-white font-serif font-bold text-xs sm:text-base">{property.price}</p>
            </div>
          </div>
          <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between min-w-0">
            <div>
              <div className="flex items-start justify-between gap-1 mb-1">
                <h3 className="font-serif font-semibold text-xs sm:text-sm leading-tight line-clamp-2" style={{ color: '#0B1F3A' }}>
                  {property.title}
                </h3>
                <div className="flex gap-1 shrink-0">
                  <span className="text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full"
                    style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>{stCfg.shortLabel}</span>
                  <span className="hidden sm:inline text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: ltype === 'fresh' ? '#DCFCE7' : '#EFF6FF', color: ltype === 'fresh' ? '#059669' : '#2563EB' }}>
                    {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] sm:text-xs mb-1 sm:mb-2" style={{ color: '#6B7280' }}>
                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" style={{ color: '#E63946' }} />
                <span className="truncate">{property.location}</span>
              </div>
              {property.bedrooms > 0 && (
                <div className="hidden sm:flex gap-3 text-xs" style={{ color: '#6B7280' }}>
                  <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{property.bedrooms} Beds</span>
                  <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.bathrooms} Baths</span>
                  <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" />{property.area}</span>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between mt-1.5 pt-1.5 sm:mt-2 sm:pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
              <span className="text-[10px] sm:text-xs truncate" style={{ color: '#6B7280' }}>
                {property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}
              </span>
              <span className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold shrink-0" style={{ color: '#E63946' }}>
                View <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/properties/${property.slug}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
        style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
        <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
          {property.mainImage ? (
            <img src={property.mainImage} alt={property.title} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-full h-full"
              style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }} />
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
            {property.badge && (
              <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
                {property.badge}
              </span>
            )}
          </div>
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
              {stCfg.shortLabel}
            </span>
          </div>
          <div className="absolute bottom-3 right-3 z-10">
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
              style={{ background: ltype === 'fresh' ? 'rgba(5,150,105,0.90)' : 'rgba(37,99,235,0.90)' }}>
              {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4"
            style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
            <p className="text-white font-serif text-xl font-bold">{property.price}</p>
            <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{property.category} · {property.area}</p>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2" style={{ color: '#0B1F3A' }}>
            {property.title}
          </h3>
          <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
            <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
            <span className="truncate">{property.location}</span>
          </div>
          {property.bedrooms > 0 && (
            <div className="flex gap-3 text-xs pb-3 mb-3" style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
              <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds</span>
              <span className="flex items-center gap-1"><Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths</span>
              <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}</span>
            </div>
          )}
          <div className="flex flex-wrap gap-1 flex-1 mb-3">
            {property.amenities.slice(0, 2).map(a => (
              <span key={a} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>
            ))}
            {property.amenities.length > 2 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: '#FEE8EA', color: '#E63946' }}>
                +{property.amenities.length - 2}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
            <span className="text-[10px]" style={{ color: '#6B7280' }}>
              {property.developer ? `🏗 ${property.developer}` : property.ownerName ? `👤 Owner` : property.category}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
              View <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

// ─── Project Card ────────────────────────────────────────────────────────────

function ProjectCard({ name, count, sample, onClick }: {
  name: string; count: number; sample: Property; onClick: () => void
}) {
  const pstatus = getStatus(sample)
  const stCfg = STATUS_TABS.find(s => s.id === pstatus) ?? STATUS_TABS[0]

  return (
    <button onClick={onClick} className="group text-left w-full">
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
        style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
        <div className="relative overflow-hidden shrink-0 h-[185px] sm:h-[195px]">
          {sample.mainImage ? (
            <img src={sample.mainImage} alt={name} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-full h-full"
              style={{ background: `linear-gradient(135deg, ${sample.gradientFrom}, ${sample.gradientTo})` }} />
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

          {/* Status badge */}
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
              {stCfg.shortLabel}
            </span>
          </div>

          {/* Badge */}
          {sample.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>
                {sample.badge}
              </span>
            </div>
          )}

          {/* Units count */}
          <div className="absolute bottom-3 right-3 z-10">
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
              style={{ background: 'rgba(11,31,58,0.80)' }}>
              {count} {count === 1 ? 'Unit' : 'Units'}
            </span>
          </div>

          {/* Price */}
          <div className="absolute bottom-0 left-0 right-0 p-4"
            style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
            <p className="text-white font-serif text-xl font-bold">{sample.price}</p>
            <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {sample.category} · Starting Price
            </p>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-serif font-semibold text-base mb-1.5" style={{ color: '#0B1F3A' }}>
            {name}
          </h3>
          <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
            <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
            <span className="truncate">{sample.location}</span>
          </div>
          <div className="flex items-center justify-between pt-2 mt-auto" style={{ borderTop: '1px solid #E8ECF2' }}>
            <span className="text-xs font-semibold" style={{ color: '#0B1F3A' }}>
              {sample.developer ?? 'Owner Direct'}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
              View {count} {count === 1 ? 'Unit' : 'Units'} <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function PropertiesClient() {
  const searchParams = useSearchParams()
  const [category, setCategory] = useState<Category>('residential')
  const [statusTab, setStatusTab] = useState<StatusTab>('all')
  const [listingType, setListingType] = useState<ListingType>('all')
  const [search, setSearch] = useState('')
  const [budgetIdx, setBudgetIdx] = useState(0)
  const [location, setLocation] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<ViewMode>('projects')  // default: projects
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [openBudget, setOpenBudget] = useState(true)
  const [openLoc, setOpenLoc] = useState(true)

  useEffect(() => {
    const loc = searchParams.get('location')
    const budget = searchParams.get('budget')
    const type = searchParams.get('type')
    const status = searchParams.get('status')
    const search = searchParams.get('search')
    const project = searchParams.get('project')  // ← detail page se aata hai

    if (loc && LOCATIONS.includes(loc)) setLocation(loc)
    if (budget) { const idx = HOME_BUDGET_MAP[budget]; if (idx !== undefined) setBudgetIdx(idx) }
    if (type) setSearch(type)

    if (search) {
      setSearch(search)
      const words = search.toLowerCase().split(/\s+/).filter(Boolean)
      const match = properties.find(p => {
        const haystack = `${p.title} ${p.developer ?? ''} ${p.location} ${p.badge ?? ''}`.toLowerCase()
        return words.every(word => haystack.includes(word))
      })
      if (match) {
        if (match.category === 'Commercial') setCategory('commercial')
        else if (match.category === 'Plot') setCategory('farmhouse')
        else setCategory('residential')
      }
      setViewMode('projects')
      setSelectedProject(null)
    }

    // ← Property detail "Back to Properties" se aata hai
    if (project) {
      const match = properties.find(p => (p.developer ?? p.title) === project)
      if (match) {
        if (match.category === 'Commercial') setCategory('commercial')
        else if (match.category === 'Plot') setCategory('farmhouse')
        else setCategory('residential')
      }
      setSelectedProject(project)
      setViewMode('grid')
      setSearch('')
    }

    const validStatuses: StatusTab[] = ['under-construction', 'ready-to-move', 'recently-launched']
    if (status && validStatuses.includes(status as StatusTab)) setStatusTab(status as StatusTab)
  }, [searchParams])

  const catCounts = useMemo(() => {
    const countProjects = (cat: Category) => {
      const base = properties.filter(p => getCategory(p) === cat)
      const keys = new Set(base.map(p => p.developer ?? p.title))
      return keys.size
    }
    return {
      residential: countProjects('residential'),
      commercial: countProjects('commercial'),
      farmhouse: countProjects('farmhouse'),
    }
  }, [])

  // ── Projects grouped by developer — display name from badge ──
  const projects = useMemo(() => {
    let base = properties.filter(p => getCategory(p) === category)

    // Apply same sidebar filters as grid view
    if (budgetIdx > 0) {
      const { min, max } = BUDGETS[budgetIdx]
      base = base.filter(p => p.priceValue >= min && p.priceValue <= max)
    }
    if (location !== 'all') base = base.filter(p => p.location.includes(location))
    if (statusTab !== 'all') base = base.filter(p => getStatus(p) === statusTab)
    if (listingType !== 'all') base = base.filter(p => getListingType(p) === listingType)

    const map = new Map<string, { key: string; displayName: string; count: number; sample: Property }>()
    base.forEach(p => {
      const key = p.developer ?? p.title
      if (!map.has(key)) {
        map.set(key, {
          key,
          displayName: p.badge ?? p.developer ?? p.title,
          count: 0,
          sample: p,
        })
      }
      map.get(key)!.count++
    })
    let result = Array.from(map.values())

    // ── Search filter — check ALL units of each project ──
    if (search.trim()) {
      const words = search.toLowerCase().split(/\s+/).filter(Boolean)
      result = result.filter(proj => {
        const projUnits = base.filter(p => (p.developer ?? p.title) === proj.key)
        return projUnits.some(p => {
          const haystack = `${proj.key} ${proj.displayName} ${p.title} ${p.developer ?? ''} ${p.badge ?? ''} ${p.location}`.toLowerCase()
          return words.every(word => haystack.includes(word))
        })
      })
    }
    return result
  }, [category, search, budgetIdx, location, statusTab, listingType])

  const filtered = useMemo(() => {
    let r = properties.filter(p => getCategory(p) === category)
    // If project selected, filter by that project
    if (selectedProject) r = r.filter(p => (p.developer ?? p.title) === selectedProject)
    if (statusTab !== 'all') r = r.filter(p => getStatus(p) === statusTab)
    if (listingType !== 'all') r = r.filter(p => getListingType(p) === listingType)
    if (search.trim() && !selectedProject) {
      const q = search.toLowerCase()
      r = r.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.developer ?? '').toLowerCase().includes(q) || (p.badge ?? '').toLowerCase().includes(q))
    }
    if (budgetIdx > 0) { const { min, max } = BUDGETS[budgetIdx]; r = r.filter(p => p.priceValue >= min && p.priceValue <= max) }
    if (location !== 'all') r = r.filter(p => p.location.includes(location))
    if (sortBy === 'price-asc') r = [...r].sort((a, b) => a.priceValue - b.priceValue)
    else if (sortBy === 'price-desc') r = [...r].sort((a, b) => b.priceValue - a.priceValue)
    else r = [...r].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    return r
  }, [category, statusTab, listingType, search, budgetIdx, location, sortBy, selectedProject])

  const baseForCat = properties.filter(p => getCategory(p) === category)
  const statCount = (s: StatusTab) => s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
  const typeCount = (t: ListingType) => t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length
  const activeCat = CATEGORIES.find(c => c.id === category)!

  const isProjectView = viewMode === 'projects' && !selectedProject

  return (
    <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

      {/* ── SECTION A — CATEGORY ── */}
      <div style={{ background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)' }} className="pt-20 relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-0">
          <p className="text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2" style={{ color: '#E63946' }}>
            Browse Properties
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-8">
            Find Your Property
          </h1>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {CATEGORIES.map(cat => {
              const Icon = cat.icon
              const isActive = category === cat.id
              return (
                <button key={cat.id}
                  onClick={() => {
                    setCategory(cat.id)
                    setStatusTab('all')
                    setListingType('all')
                    setSelectedProject(null)
                    setViewMode('projects')
                  }}
                  className="relative rounded-t-xl sm:rounded-t-2xl overflow-hidden text-left transition-all duration-300"
                  style={{
                    background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
                    border: `2px solid ${isActive ? '#E63946' : 'rgba(255,255,255,0.10)'}`,
                    borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
                    transform: isActive ? 'translateY(2px)' : 'translateY(0)',
                    boxShadow: isActive ? '0 -4px 24px rgba(230,57,70,0.20)' : 'none',
                    padding: '10px 10px 12px',
                  }}>
                  {isActive && <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#E63946' }} />}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2"
                    style={{ background: isActive ? '#FEE8EA' : 'rgba(255,255,255,0.12)' }}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isActive ? '#E63946' : '#fff' }} />
                  </div>
                  <p className="font-serif font-bold text-xs sm:text-lg leading-none mb-0.5"
                    style={{ color: isActive ? '#0B1F3A' : '#fff' }}>{cat.label}</p>
                  <p className="hidden sm:block text-xs" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>{cat.sub}</p>
                  <p className="font-serif font-bold text-base sm:text-2xl mt-1"
                    style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>{catCounts[cat.id]}</p>
                  <p className="text-[9px] sm:text-[10px]"
                    style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>projects</p>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── SECTION B — STATUS TABS ── */}
      <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {STATUS_TABS.map(s => {
              const isActive = statusTab === s.id
              return (
                <button key={s.id} onClick={() => setStatusTab(s.id)}
                  className="flex items-center gap-1.5 py-3 sm:py-4 px-3 sm:px-5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
                  style={{ color: isActive ? '#E63946' : '#6B7280' }}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: isActive ? '#E63946' : s.dotColor }} />
                  <span className="sm:hidden">{s.shortLabel}</span>
                  <span className="hidden sm:inline">{s.label}</span>
                  <span className="text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold"
                    style={{ background: isActive ? '#FEE8EA' : '#F5F7FA', color: isActive ? '#E63946' : '#9CA3AF' }}>
                    {statCount(s.id)}
                  </span>
                  {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── SECTION C — LISTING TYPE ── */}
      <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#9CA3AF' }}>
                <span className="hidden sm:inline">Listing </span>Type:
              </p>
              <div className="flex rounded-lg sm:rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2' }}>
                <button onClick={() => setListingType('all')}
                  className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
                  style={{ background: listingType === 'all' ? '#0B1F3A' : '#FFFFFF', color: listingType === 'all' ? '#fff' : '#6B7280' }}>
                  All ({typeCount('all')})
                </button>
                <button onClick={() => setListingType('fresh')}
                  className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
                  style={{ background: listingType === 'fresh' ? '#059669' : '#FFFFFF', color: listingType === 'fresh' ? '#fff' : '#6B7280', borderLeft: '1px solid #E8ECF2', borderRight: '1px solid #E8ECF2' }}>
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Fresh
                  <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
                    style={{ background: listingType === 'fresh' ? 'rgba(255,255,255,0.25)' : '#DCFCE7', color: listingType === 'fresh' ? '#fff' : '#059669' }}>
                    {typeCount('fresh')}
                  </span>
                </button>
                <button onClick={() => setListingType('resale')}
                  className="flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
                  style={{ background: listingType === 'resale' ? '#2563EB' : '#FFFFFF', color: listingType === 'resale' ? '#fff' : '#6B7280' }}>
                  <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Resale
                  <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold"
                    style={{ background: listingType === 'resale' ? 'rgba(255,255,255,0.25)' : '#EFF6FF', color: listingType === 'resale' ? '#fff' : '#2563EB' }}>
                    {typeCount('resale')}
                  </span>
                </button>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold"
              style={{ background: '#FEE8EA', color: '#E63946' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
              {activeCat.label} · {isProjectView ? `${projects.length} Projects` : `${filtered.length} Units`}
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
        <div className="flex gap-5 sm:gap-6">

          {/* Sidebar */}
          <div className="hidden lg:block w-60 shrink-0">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
                <button onClick={() => setOpenBudget(!openBudget)}
                  className="w-full flex items-center justify-between px-5 py-4"
                  style={{ borderBottom: openBudget ? '1px solid #E8ECF2' : 'none' }}>
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" style={{ color: '#E63946' }} />
                    <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Budget</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openBudget ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
                </button>
                {openBudget && (
                  <div className="p-3 flex flex-col gap-1">
                    {BUDGETS.map((b, i) => (
                      <button key={b.label} onClick={() => setBudgetIdx(i)}
                        className="text-left text-sm px-3 py-2 rounded-lg transition-all"
                        style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A', fontWeight: budgetIdx === i ? 600 : 400 }}>
                        {b.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
                <button onClick={() => setOpenLoc(!openLoc)}
                  className="w-full flex items-center justify-between px-5 py-4"
                  style={{ borderBottom: openLoc ? '1px solid #E8ECF2' : 'none' }}>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{ color: '#E63946' }} />
                    <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Location</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openLoc ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
                </button>
                {openLoc && (
                  <div className="p-3 flex flex-col gap-1">
                    <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
                      style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A', fontWeight: location === 'all' ? 600 : 400 }}>
                      All Locations
                    </button>
                    {LOCATIONS.map(l => (
                      <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg transition-all"
                        style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A', fontWeight: location === l ? 600 : 400 }}>
                        {l}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {(budgetIdx > 0 || location !== 'all') && (
                <button onClick={() => { setBudgetIdx(0); setLocation('all') }}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Grid area */}
          <div className="flex-1 min-w-0">

            {/* Search + controls */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl flex-1 min-w-0"
                style={{ background: '#FFFFFF', border: '1px solid #E8ECF2' }}>
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" style={{ color: '#E63946' }} />
                <input type="text" placeholder="Search projects..."
                  value={search}
                  onChange={e => {
                    setSearch(e.target.value)
                    setSelectedProject(null)
                    setViewMode('projects')
                  }}
                  className="w-full bg-transparent text-xs sm:text-sm focus:outline-none" style={{ color: '#1A1A1A' }} />
                {search && <button onClick={() => { setSearch(''); setSelectedProject(null); setViewMode('projects') }}>
                  <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9CA3AF' }} />
                </button>}
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium"
                  style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
                  <SlidersHorizontal className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
                  <span className="hidden sm:inline">Filters</span>
                </button>
                {/* Sort — only when not in project view */}
                {!isProjectView && (
                  <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                    className="text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl focus:outline-none"
                    style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price ↑</option>
                    <option value="price-desc">Price ↓</option>
                  </select>
                )}
                {/* View toggle */}
                <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
                  <button onClick={() => { setViewMode('projects'); setSelectedProject(null) }}
                    className="p-2 sm:p-2.5 transition-colors"
                    style={{ background: isProjectView ? '#0B1F3A' : '#fff', color: isProjectView ? '#fff' : '#9CA3AF' }}
                    title="Projects View">
                    <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button onClick={() => { setViewMode('grid'); if (!selectedProject) setSelectedProject(null) }}
                    className="p-2 sm:p-2.5 transition-colors"
                    style={{ background: viewMode === 'grid' && !isProjectView ? '#0B1F3A' : '#fff', color: viewMode === 'grid' && !isProjectView ? '#fff' : '#9CA3AF' }}
                    title="Grid View">
                    <Grid3x3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button onClick={() => setViewMode('list')}
                    className="p-2 sm:p-2.5 transition-colors"
                    style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}
                    title="List View">
                    <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>

            {selectedProject && (
              <button
                onClick={() => { setSelectedProject(null); setViewMode('projects'); setSearch('') }}
                className="flex items-center gap-2 text-sm font-semibold mb-4 px-3 py-2 rounded-lg transition-all"
                style={{ color: '#E63946', background: '#FEE8EA' }}>
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </button>
            )}

            {/* Result count */}
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
              <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
                {isProjectView ? (
                  <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{projects.length}</span> projects in {activeCat.label}</>
                ) : selectedProject ? (
                  <><span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> units in <span className="font-bold" style={{ color: '#E63946' }}>{selectedProject}</span></>
                ) : (
                  <>Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> {activeCat.label.toLowerCase()} properties</>
                )}
              </p>
            </div>

            {/* ── VIEWS ── */}

            {isProjectView ? (
              // Projects grid
              projects.length === 0 ? (
                <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
                  <Building2 className="w-10 h-10 mx-auto mb-4" style={{ color: '#9CA3AF' }} />
                  <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: '#0B1F3A' }}>No projects found</h3>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                  {projects.map(proj => (
                    <ProjectCard
                      key={proj.key}
                      name={proj.displayName}
                      count={proj.count}
                      sample={proj.sample}
                      onClick={() => { setSelectedProject(proj.key); setViewMode('grid') }}
                    />
                  ))}
                </div>
              )
            ) : filtered.length === 0 ? (
              <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#F5F7FA' }}>
                  <Search className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#9CA3AF' }} />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>No properties found</h3>
                <p className="text-xs sm:text-sm mb-4 sm:mb-5" style={{ color: '#6B7280' }}>Try adjusting the filters above.</p>
                <button onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all'); setSelectedProject(null); setViewMode('projects') }}
                  className="text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white" style={{ background: '#E63946' }}>
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5'
                : 'flex flex-col gap-3 sm:gap-4'}>
                {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode === 'list' ? 'list' : 'grid'} />)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-4 sm:p-5 sticky top-0 bg-white z-10" style={{ borderBottom: '1px solid #E8ECF2' }}>
              <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Filters</span>
              <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" style={{ color: '#0B1F3A' }} /></button>
            </div>
            <div className="p-4 sm:p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
              <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Budget</p>
              <div className="flex flex-col gap-1">
                {BUDGETS.map((b, i) => (
                  <button key={b.label} onClick={() => setBudgetIdx(i)} className="text-left text-sm px-3 py-2 rounded-lg"
                    style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A' }}>
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Location</p>
              <div className="flex flex-col gap-1">
                <button onClick={() => setLocation('all')} className="text-left text-sm px-3 py-2 rounded-lg"
                  style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A' }}>
                  All Locations
                </button>
                {LOCATIONS.map(l => (
                  <button key={l} onClick={() => setLocation(l)} className="text-left text-sm px-3 py-2 rounded-lg"
                    style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A' }}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
            {(budgetIdx > 0 || location !== 'all') && (
              <div className="px-4 pb-4">
                <button onClick={() => { setBudgetIdx(0); setLocation('all'); setShowFilters(false) }}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#E63946' }}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}