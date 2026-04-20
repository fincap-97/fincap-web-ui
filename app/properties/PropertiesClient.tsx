// 'use client'

// import { useState, useMemo } from 'react'
// import Link from 'next/link'
// import {
//   Search, Grid3x3, List, SlidersHorizontal, X,
//   Sparkles, RefreshCw, Building2, Home,
//   MapPin, BedDouble, Bath, Maximize2, ArrowRight, Star
// } from 'lucide-react'
// import FilterSidebar from '@/components/FilterSidebar'
// import { properties } from '@/lib/data'
// import type { Property } from '@/lib/data'

// // ─── Types ────────────────────────────────────────────────────────────────────
// type PrimaryTab = 'all' | 'buy' | 'rent' | 'project'
// type BuySubTab = 'all-buy' | 'new' | 'resell'

// const BUY_SUB_TABS: {
//   id: BuySubTab
//   label: string
//   icon: React.ElementType
//   desc: string
//   activeColor: string
//   pillColor: string
//   bannerBg: string
//   bannerBorder: string
//   bannerText: string
//   bannerBody: string
// }[] = [
//   {
//     id: 'all-buy',
//     label: 'All Sale Listings',
//     icon: Building2,
//     desc: 'New + Resell combined',
//     activeColor: 'bg-charcoal',
//     pillColor: 'bg-charcoal text-white',
//     bannerBg: '', bannerBorder: '', bannerText: '', bannerBody: '',
//   },
//   {
//     id: 'new',
//     label: 'New Properties',
//     icon: Sparkles,
//     desc: 'Fresh from builder / developer',
//     activeColor: 'bg-emerald-600',
//     pillColor: 'bg-emerald-100 text-emerald-700',
//     bannerBg: 'bg-emerald-50',
//     bannerBorder: 'border-emerald-200',
//     bannerText: 'text-emerald-800',
//     bannerBody: 'text-emerald-700',
//   },
//   {
//     id: 'resell',
//     label: 'Resell Properties',
//     icon: RefreshCw,
//     desc: 'Owner / secondary market',
//     activeColor: 'bg-blue-600',
//     pillColor: 'bg-blue-100 text-blue-700',
//     bannerBg: 'bg-blue-50',
//     bannerBorder: 'border-blue-200',
//     bannerText: 'text-blue-800',
//     bannerBody: 'text-blue-700',
//   },
// ]

// const INFO_BANNERS: Record<'new' | 'resell', { icon: React.ElementType; iconColor: string; title: string; body: string; bgColor: string; borderColor: string; textColor: string; bodyColor: string }> = {
//   new: {
//     icon: Sparkles,
//     iconColor: 'text-emerald-600',
//     title: 'New / Builder Properties',
//     body: 'First-time sale directly from the developer. Enjoy builder warranty, fresh completion certificate, and often pre-launch pricing. No prior occupants — move into a brand new home.',
//     bgColor: 'bg-emerald-50',
//     borderColor: 'border-emerald-200',
//     textColor: 'text-emerald-800',
//     bodyColor: 'text-emerald-700',
//   },
//   resell: {
//     icon: RefreshCw,
//     iconColor: 'text-blue-600',
//     title: 'Resell / Secondary Market Properties',
//     body: 'Properties being sold by existing owners. Often better-negotiated prices, immediate possession, and established neighbourhoods. All listings are legally verified by Regalia Estates.',
//     bgColor: 'bg-blue-50',
//     borderColor: 'border-blue-200',
//     textColor: 'text-blue-800',
//     bodyColor: 'text-blue-700',
//   },
// }

// // ─── Enhanced Property Card ────────────────────────────────────────────────────
// function PropertyCard({ property }: { property: Property }) {
//   const isNew = property.subtype === 'new'
//   const isResell = property.subtype === 'resell'

//   return (
//     <Link href={`/properties/${property.id}`} className="group block">
//       <div className="property-card bg-white rounded-2xl overflow-hidden shadow-card border border-stone-border/50 h-full flex flex-col">
//         {/* Image / Gradient */}
//         <div
//           className="relative overflow-hidden h-52"
//           style={{ background: `linear-gradient(135deg, ${property.gradientFrom} 0%, ${property.gradientTo} 100%)` }}
//         >
//           {/* Geometric decoration */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-4 left-4 w-32 h-32 rounded-full border-2 border-white" />
//             <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full border border-white" />
//           </div>

//           {/* Top-left badges */}
//           <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
//             {/* Subtype badge — NEW or RESELL */}
//             {isNew && (
//               <span className="flex items-center gap-1 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
//                 <Sparkles className="w-3 h-3" /> New Property
//               </span>
//             )}
//             {isResell && (
//               <span className="flex items-center gap-1 bg-blue-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
//                 <RefreshCw className="w-3 h-3" /> Resell
//               </span>
//             )}
//             {/* Custom badge (Featured, Hot Deal, etc.) */}
//             {property.badge && (
//               <span className="badge-featured text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
//                 {property.badge}
//               </span>
//             )}
//           </div>

//           {/* Status top-right */}
//           <div className="absolute top-3 right-3 z-10">
//             <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
//               property.status === 'Ready to Move' ? 'bg-green-500/90 text-white' :
//               property.status === 'New Launch' ? 'bg-amber-500/90 text-white' :
//               'bg-blue-500/90 text-white'
//             }`}>
//               {property.status}
//             </span>
//           </div>

//           {/* Price overlay */}
//           <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-white/70 text-xs mt-0.5">{property.category} · {property.area}</p>
//           </div>

//           {/* Hover overlay */}
//           <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         </div>

//         {/* Content */}
//         <div className="p-5 flex-1 flex flex-col">
//           <h3 className="font-serif font-semibold text-charcoal text-base leading-snug mb-2 group-hover:text-gold transition-colors line-clamp-2">
//             {property.title}
//           </h3>

//           <div className="flex items-center gap-1.5 text-charcoal-muted text-sm mb-3">
//             <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
//             <span className="truncate text-xs">{property.location}</span>
//           </div>

//           {/* Specs */}
//           {property.bedrooms > 0 && (
//             <div className="flex items-center gap-4 text-xs text-charcoal-muted mb-3 pb-3 border-b border-stone-border">
//               <div className="flex items-center gap-1.5">
//                 <BedDouble className="w-3.5 h-3.5 text-gold" />
//                 <span>{property.bedrooms} Beds</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Bath className="w-3.5 h-3.5 text-gold" />
//                 <span>{property.bathrooms} Baths</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Maximize2 className="w-3.5 h-3.5 text-gold" />
//                 <span>{property.area}</span>
//               </div>
//             </div>
//           )}

//           {/* Context-specific info */}
//           {isNew && property.developer && (
//             <div className="flex items-center gap-2 mb-3 text-xs">
//               <span className="bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-full">
//                 🏗 {property.developer}
//               </span>
//               {property.possession && (
//                 <span className="text-charcoal-muted">· {property.possession}</span>
//               )}
//             </div>
//           )}
//           {isResell && property.ownerName && (
//             <div className="flex items-center gap-2 mb-3 text-xs">
//               <span className="bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-full">
//                 👤 Owner Direct
//               </span>
//               {property.ageOfProperty && (
//                 <span className="text-charcoal-muted">· {property.ageOfProperty} Old</span>
//               )}
//             </div>
//           )}

//           {/* Amenities */}
//           <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
//             {property.amenities.slice(0, 3).map((a) => (
//               <span key={a} className="text-[10px] bg-ivory-dark text-charcoal-muted px-2 py-0.5 rounded-full">{a}</span>
//             ))}
//             {property.amenities.length > 3 && (
//               <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded-full font-medium">
//                 +{property.amenities.length - 3} more
//               </span>
//             )}
//           </div>

//           {/* CTA */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-0.5">
//               {[1,2,3,4,5].map((s) => <Star key={s} className="w-3 h-3 fill-gold text-gold" />)}
//               <span className="text-[10px] text-charcoal-muted ml-1">5.0</span>
//             </div>
//             <div className="flex items-center gap-1.5 text-gold font-semibold text-xs group-hover:gap-2.5 transition-all">
//               View Details <ArrowRight className="w-3.5 h-3.5" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Main Page ────────────────────────────────────────────────────────────────
// export default function PropertiesPage() {
//   const [activeTab, setActiveTab] = useState<PrimaryTab>('all')
//   const [buySubTab, setBuySubTab] = useState<BuySubTab>('all-buy')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [showFilters, setShowFilters] = useState(false)
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
//   const [sortBy, setSortBy] = useState('featured')
//   const [filters, setFilters] = useState({
//     locations: [] as string[],
//     budgetMin: '',
//     budgetMax: '',
//     propertyTypes: [] as string[],
//     bedrooms: [] as string[],
//     status: [] as string[],
//   })

//   const newCount = properties.filter((p) => p.type === 'buy' && p.subtype === 'new').length
//   const resellCount = properties.filter((p) => p.type === 'buy' && p.subtype === 'resell').length

//   const filtered = useMemo(() => {
//     let result = [...properties]

//     if (activeTab !== 'all') result = result.filter((p) => p.type === activeTab)

//     if (activeTab === 'buy') {
//       if (buySubTab === 'new') result = result.filter((p) => p.subtype === 'new')
//       else if (buySubTab === 'resell') result = result.filter((p) => p.subtype === 'resell')
//     }

//     if (searchQuery.trim()) {
//       const q = searchQuery.toLowerCase()
//       result = result.filter(
//         (p) =>
//           p.title.toLowerCase().includes(q) ||
//           p.location.toLowerCase().includes(q) ||
//           p.category.toLowerCase().includes(q) ||
//           (p.ownerName?.toLowerCase().includes(q)) ||
//           (p.developer?.toLowerCase().includes(q))
//       )
//     }

//     if (filters.locations.length > 0)
//       result = result.filter((p) => filters.locations.some((l) => p.location.includes(l)))
//     if (filters.budgetMin && filters.budgetMax) {
//       const min = parseInt(filters.budgetMin)
//       const max = parseInt(filters.budgetMax)
//       result = result.filter((p) => p.priceValue >= min && p.priceValue <= max)
//     }
//     if (filters.propertyTypes.length > 0)
//       result = result.filter((p) => filters.propertyTypes.includes(p.category))
//     if (filters.status.length > 0)
//       result = result.filter((p) => filters.status.includes(p.status))

//     if (sortBy === 'price-asc') result.sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') result.sort((a, b) => b.priceValue - a.priceValue)
//     else result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

//     return result
//   }, [activeTab, buySubTab, searchQuery, filters, sortBy])

//   const primaryTabs: { id: PrimaryTab; label: string; count: number }[] = [
//     { id: 'all', label: 'All', count: properties.length },
//     { id: 'buy', label: 'For Sale', count: properties.filter((p) => p.type === 'buy').length },
//     { id: 'rent', label: 'For Rent', count: properties.filter((p) => p.type === 'rent').length },
//     { id: 'project', label: 'New Projects', count: properties.filter((p) => p.type === 'project').length },
//   ]

//   const activeBanner = buySubTab !== 'all-buy' ? INFO_BANNERS[buySubTab] : null

//   return (
//     <div className="pt-20 min-h-screen bg-ivory">
//       {/* ── Header ── */}
//       <div
//         className="relative py-16 md:py-20 overflow-hidden"
//         style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #1a100d 100%)' }}
//       >
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `linear-gradient(rgba(201,149,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,149,42,0.4) 1px, transparent 1px)`,
//             backgroundSize: '60px 60px',
//           }}
//         />
//         <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-gold/10 blur-[100px]" />
//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
//           <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">Explore Properties</p>
//           <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
//             Find Your Perfect Property
//           </h1>
//           <p className="text-white/60 max-w-xl mb-6">
//             Browse Lucknow&apos;s finest residential &amp; commercial properties — new builder listings
//             and trusted resale homes, all legally verified by our expert team.
//           </p>
//           {/* Stat pills */}
//           <div className="flex flex-wrap gap-3">
//             <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
//               <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
//               <span className="text-white/80 text-xs font-medium">{newCount} New Properties</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
//               <RefreshCw className="w-3.5 h-3.5 text-blue-400" />
//               <span className="text-white/80 text-xs font-medium">{resellCount} Resell Properties</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
//               <Home className="w-3.5 h-3.5 text-gold" />
//               <span className="text-white/80 text-xs font-medium">{properties.length} Total Listings</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8">
//         {/* ── Primary Tabs + Search ── */}
//         <div className="flex flex-col sm:flex-row gap-4 mb-5">
//           <div className="flex gap-1 bg-white rounded-xl p-1 shadow-card border border-stone-border/30 overflow-x-auto shrink-0">
//             {primaryTabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => { setActiveTab(tab.id); setBuySubTab('all-buy') }}
//                 className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
//                   activeTab === tab.id
//                     ? 'bg-gold text-white shadow-md'
//                     : 'text-charcoal-muted hover:text-charcoal'
//                 }`}
//               >
//                 {tab.label}
//                 <span className={`text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold ${
//                   activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-ivory-dark text-charcoal-muted'
//                 }`}>
//                   {tab.count}
//                 </span>
//               </button>
//             ))}
//           </div>

//           <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-card border border-stone-border/30">
//             <Search className="w-4 h-4 text-gold shrink-0" />
//             <input
//               type="text"
//               placeholder="Search by name, location, builder, owner..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-transparent text-charcoal text-sm placeholder-stone focus:outline-none"
//             />
//             {searchQuery && (
//               <button onClick={() => setSearchQuery('')}>
//                 <X className="w-4 h-4 text-charcoal-muted hover:text-charcoal" />
//               </button>
//             )}
//           </div>
//         </div>

//         {/* ── Buy Sub-tabs: New / Resell ── */}
//         {activeTab === 'buy' && (
//           <div className="mb-7">
//             <p className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-3">
//               Property Listing Type
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
//               {BUY_SUB_TABS.map(({ id, label, icon: Icon, desc, activeColor }) => {
//                 const cnt =
//                   id === 'all-buy'
//                     ? properties.filter((p) => p.type === 'buy').length
//                     : properties.filter((p) => p.type === 'buy' && p.subtype === id).length
//                 const isActive = buySubTab === id
//                 return (
//                   <button
//                     key={id}
//                     onClick={() => setBuySubTab(id)}
//                     className={`group flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
//                       isActive
//                         ? 'border-gold bg-white shadow-card-hover'
//                         : 'border-stone-border/50 bg-white hover:border-gold/40 hover:shadow-card'
//                     }`}
//                   >
//                     <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all ${
//                       isActive ? activeColor : 'bg-ivory-dark'
//                     }`}>
//                       <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-charcoal-muted'}`} />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className={`font-semibold text-sm ${isActive ? 'text-gold' : 'text-charcoal'}`}>
//                         {label}
//                       </p>
//                       <p className="text-xs text-charcoal-muted mt-0.5">{desc}</p>
//                     </div>
//                     <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${
//                       isActive ? 'bg-gold text-white' : 'bg-ivory-dark text-charcoal-muted'
//                     }`}>
//                       {cnt}
//                     </span>
//                   </button>
//                 )
//               })}
//             </div>

//             {/* Info banner */}
//             {activeBanner && (
//               <div className={`flex items-start gap-3 ${activeBanner.bgColor} border ${activeBanner.borderColor} rounded-2xl p-4`}>
//                 <activeBanner.icon className={`w-5 h-5 ${activeBanner.iconColor} shrink-0 mt-0.5`} />
//                 <div>
//                   <p className={`text-sm font-semibold ${activeBanner.textColor}`}>{activeBanner.title}</p>
//                   <p className={`text-xs mt-0.5 leading-relaxed ${activeBanner.bodyColor}`}>{activeBanner.body}</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* ── Layout ── */}
//         <div className="flex gap-8">
//           {/* Sidebar — Desktop */}
//           <div className="hidden lg:block w-72 shrink-0">
//             <div className="sticky top-24">
//               <FilterSidebar onFilterChange={setFilters} />
//             </div>
//           </div>

//           {/* Grid */}
//           <div className="flex-1 min-w-0">
//             {/* Toolbar */}
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-3">
//                 <p className="text-charcoal-muted text-sm">
//                   <span className="font-semibold text-charcoal">{filtered.length}</span> properties
//                 </p>
//                 {activeTab === 'buy' && buySubTab !== 'all-buy' && (
//                   <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
//                     buySubTab === 'new' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
//                   }`}>
//                     {buySubTab === 'new' ? '✦ New' : '↻ Resell'}
//                   </span>
//                 )}
//               </div>
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-2 text-sm font-medium text-charcoal bg-white border border-stone-border px-4 py-2 rounded-xl hover:border-gold transition-colors"
//                 >
//                   <SlidersHorizontal className="w-4 h-4 text-gold" />
//                   Filters
//                 </button>
//                 <select
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value)}
//                   className="text-sm bg-white border border-stone-border px-3 py-2 rounded-xl text-charcoal focus:outline-none focus:border-gold"
//                 >
//                   <option value="featured">Featured First</option>
//                   <option value="price-asc">Price: Low to High</option>
//                   <option value="price-desc">Price: High to Low</option>
//                 </select>
//                 <div className="flex items-center bg-white border border-stone-border rounded-xl overflow-hidden">
//                   <button onClick={() => setViewMode('grid')} className={`p-2.5 transition-colors ${viewMode === 'grid' ? 'bg-gold text-white' : 'text-charcoal-muted hover:text-charcoal'}`}>
//                     <Grid3x3 className="w-4 h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')} className={`p-2.5 transition-colors ${viewMode === 'list' ? 'bg-gold text-white' : 'text-charcoal-muted hover:text-charcoal'}`}>
//                     <List className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {filtered.length === 0 ? (
//               <div className="text-center py-24">
//                 <div className="w-20 h-20 bg-ivory-dark rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Search className="w-8 h-8 text-charcoal-muted" />
//                 </div>
//                 <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">No properties found</h3>
//                 <p className="text-charcoal-muted text-sm mb-4">Try adjusting your filters or search query.</p>
//                 <button
//                   onClick={() => {
//                     setSearchQuery('')
//                     setFilters({ locations: [], budgetMin: '', budgetMax: '', propertyTypes: [], bedrooms: [], status: [] })
//                     setBuySubTab('all-buy')
//                   }}
//                   className="text-gold text-sm font-semibold hover:underline"
//                 >
//                   Clear all filters
//                 </button>
//               </div>
//             ) : (
//               <div className={
//                 viewMode === 'grid'
//                   ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
//                   : 'flex flex-col gap-4'
//               }>
//                 {filtered.map((property) => (
//                   <PropertyCard key={property.id} property={property} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Filter Drawer */}
//       {showFilters && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowFilters(false)} />
//           <div className="absolute right-0 top-0 bottom-0 w-80 bg-ivory overflow-y-auto shadow-2xl">
//             <div className="sticky top-0 bg-ivory z-10 flex items-center justify-between p-5 border-b border-stone-border">
//               <span className="font-semibold text-charcoal">Filters</span>
//               <button onClick={() => setShowFilters(false)}>
//                 <X className="w-5 h-5 text-charcoal" />
//               </button>
//             </div>
//             <div className="p-4">
//               <FilterSidebar onFilterChange={setFilters} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


// 'use client'

// import { useState, useMemo } from 'react'
// import Link from 'next/link'
// import {
//   Search, Grid3x3, List, SlidersHorizontal, X,
//   Sparkles, RefreshCw, Building2, Home,
//   MapPin, BedDouble, Bath, Maximize2, ArrowRight
// } from 'lucide-react'
// import FilterSidebar from '@/components/FilterSidebar'
// import { properties } from '@/lib/data'
// import type { Property } from '@/lib/data'

// // ─── Types ────────────────────────────────────────────────────────────────────
// type PrimaryTab = 'all' | 'buy' | 'rent' | 'project'
// type BuySubTab = 'all-buy' | 'new' | 'resell'

// const BUY_SUB_TABS: {
//   id: BuySubTab
//   label: string
//   icon: React.ElementType
//   desc: string
//   activeColor: string
//   pillColor: string
//   bannerBg: string
//   bannerBorder: string
//   bannerText: string
//   bannerBody: string
// }[] = [
//     {
//       id: 'all-buy',
//       label: 'All Sale Listings',
//       icon: Building2,
//       desc: 'New + Resell combined',
//       activeColor: 'bg-charcoal',
//       pillColor: 'bg-charcoal text-white',
//       bannerBg: '', bannerBorder: '', bannerText: '', bannerBody: '',
//     },
//     {
//       id: 'new',
//       label: 'New Properties',
//       icon: Sparkles,
//       desc: 'Fresh from builder / developer',
//       activeColor: 'bg-emerald-600',
//       pillColor: 'bg-emerald-100 text-emerald-700',
//       bannerBg: 'bg-emerald-50',
//       bannerBorder: 'border-emerald-200',
//       bannerText: 'text-emerald-800',
//       bannerBody: 'text-emerald-700',
//     },
//     {
//       id: 'resell',
//       label: 'Resell Properties',
//       icon: RefreshCw,
//       desc: 'Owner / secondary market',
//       activeColor: 'bg-blue-600',
//       pillColor: 'bg-blue-100 text-blue-700',
//       bannerBg: 'bg-blue-50',
//       bannerBorder: 'border-blue-200',
//       bannerText: 'text-blue-800',
//       bannerBody: 'text-blue-700',
//     },
//   ]

// const INFO_BANNERS: Record<'new' | 'resell', { icon: React.ElementType; iconColor: string; title: string; body: string; bgColor: string; borderColor: string; textColor: string; bodyColor: string }> = {
//   new: {
//     icon: Sparkles,
//     iconColor: 'text-emerald-600',
//     title: 'New / Builder Properties',
//     body: 'First-time sale directly from the developer. Enjoy builder warranty, fresh completion certificate, and often pre-launch pricing. No prior occupants — move into a brand new home.',
//     bgColor: 'bg-emerald-50',
//     borderColor: 'border-emerald-200',
//     textColor: 'text-emerald-800',
//     bodyColor: 'text-emerald-700',
//   },
//   resell: {
//     icon: RefreshCw,
//     iconColor: 'text-blue-600',
//     title: 'Resell / Secondary Market Properties',
//     body: 'Properties being sold by existing owners. Often better-negotiated prices, immediate possession, and established neighbourhoods. All listings are legally verified by Fincap sol.',
//     bgColor: 'bg-blue-50',
//     borderColor: 'border-blue-200',
//     textColor: 'text-blue-800',
//     bodyColor: 'text-blue-700',
//   },
// }

// // ─── Enhanced Property Card ────────────────────────────────────────────────────
// function PropertyCard({ property }: { property: Property }) {
//   const isNew = property.subtype === 'new'
//   const isResell = property.subtype === 'resell'

//   return (
//     <Link href={`/properties/${property.id}`} className="group block">
//       <div className="property-card bg-white rounded-2xl overflow-hidden shadow-card border border-stone-border/50 h-full flex flex-col">
//         {/* Image / Gradient */}
//         <div
//           className="relative overflow-hidden h-52"
//           style={{ background: `linear-gradient(135deg, ${property.gradientFrom} 0%, ${property.gradientTo} 100%)` }}
//         >
//           {/* Geometric decoration */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-4 left-4 w-32 h-32 rounded-full border-2 border-white" />
//             <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full border border-white" />
//           </div>

//           {/* Top-left badges */}
//           <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
//             {/* Subtype badge — NEW or RESELL */}
//             {isNew && (
//               <span className="flex items-center gap-1 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
//                 <Sparkles className="w-3 h-3" /> New Property
//               </span>
//             )}
//             {isResell && (
//               <span className="flex items-center gap-1 bg-blue-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
//                 <RefreshCw className="w-3 h-3" /> Resell
//               </span>
//             )}
//             {/* Custom badge (Featured, Hot Deal, etc.) */}
//             {property.badge && (
//               <span className="badge-featured text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
//                 {property.badge}
//               </span>
//             )}
//           </div>

//           {/* Status top-right */}
//           <div className="absolute top-3 right-3 z-10">
//             <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${property.status === 'Ready to Move' ? 'bg-green-500/90 text-white' :
//               property.status === 'New Launch' ? 'bg-amber-500/90 text-white' :
//                 'bg-blue-500/90 text-white'
//               }`}>
//               {property.status}
//             </span>
//           </div>

//           {/* Price overlay */}
//           <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-white/70 text-xs mt-0.5">{property.category} · {property.area}</p>
//           </div>

//           {/* Hover overlay */}
//           <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         </div>

//         {/* Content */}
//         <div className="p-5 flex-1 flex flex-col">
//           <h3 className="font-serif font-semibold text-charcoal text-base leading-snug mb-2 group-hover:text-gold transition-colors line-clamp-2">
//             {property.title}
//           </h3>

//           <div className="flex items-center gap-1.5 text-charcoal-muted text-sm mb-3">
//             <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
//             <span className="truncate text-xs">{property.location}</span>
//           </div>

//           {/* Specs */}
//           {property.bedrooms > 0 && (
//             <div className="flex items-center gap-4 text-xs text-charcoal-muted mb-3 pb-3 border-b border-stone-border">
//               <div className="flex items-center gap-1.5">
//                 <BedDouble className="w-3.5 h-3.5 text-gold" />
//                 <span>{property.bedrooms} Beds</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Bath className="w-3.5 h-3.5 text-gold" />
//                 <span>{property.bathrooms} Baths</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Maximize2 className="w-3.5 h-3.5 text-gold" />
//                 <span>{property.area}</span>
//               </div>
//             </div>
//           )}

//           {/* Context-specific info */}
//           {isNew && property.developer && (
//             <div className="flex items-center gap-2 mb-3 text-xs">
//               <span className="bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-full">
//                 🏗 {property.developer}
//               </span>
//               {property.possession && (
//                 <span className="text-charcoal-muted">· {property.possession}</span>
//               )}
//             </div>
//           )}
//           {isResell && property.ownerName && (
//             <div className="flex items-center gap-2 mb-3 text-xs">
//               <span className="bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-full">
//                 👤 Owner Direct
//               </span>
//               {property.ageOfProperty && (
//                 <span className="text-charcoal-muted">· {property.ageOfProperty} Old</span>
//               )}
//             </div>
//           )}

//           {/* Amenities */}
//           <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
//             {property.amenities.slice(0, 3).map((a) => (
//               <span key={a} className="text-[10px] bg-ivory-dark text-charcoal-muted px-2 py-0.5 rounded-full">{a}</span>
//             ))}
//             {property.amenities.length > 3 && (
//               <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded-full font-medium">
//                 +{property.amenities.length - 3} more
//               </span>
//             )}
//           </div>

//           {/* CTA */}
//           <div className="flex items-center justify-end">
//             <div className="flex items-center gap-1.5 text-gold font-semibold text-xs group-hover:gap-2.5 transition-all">
//               View Details <ArrowRight className="w-3.5 h-3.5" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Main Page ────────────────────────────────────────────────────────────────
// export default function PropertiesPage() {
//   const [activeTab, setActiveTab] = useState<PrimaryTab>('all')
//   const [buySubTab, setBuySubTab] = useState<BuySubTab>('all-buy')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [showFilters, setShowFilters] = useState(false)
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
//   const [sortBy, setSortBy] = useState('featured')
//   const [filters, setFilters] = useState({
//     locations: [] as string[],
//     budgetMin: '',
//     budgetMax: '',
//     propertyTypes: [] as string[],
//     bedrooms: [] as string[],
//     status: [] as string[],
//   })

//   const newCount = properties.filter((p) => p.type === 'buy' && p.subtype === 'new').length
//   const resellCount = properties.filter((p) => p.type === 'buy' && p.subtype === 'resell').length

//   const filtered = useMemo(() => {
//     let result = [...properties]

//     if (activeTab !== 'all') result = result.filter((p) => p.type === activeTab)

//     if (activeTab === 'buy') {
//       if (buySubTab === 'new') result = result.filter((p) => p.subtype === 'new')
//       else if (buySubTab === 'resell') result = result.filter((p) => p.subtype === 'resell')
//     }

//     if (searchQuery.trim()) {
//       const q = searchQuery.toLowerCase()
//       result = result.filter(
//         (p) =>
//           p.title.toLowerCase().includes(q) ||
//           p.location.toLowerCase().includes(q) ||
//           p.category.toLowerCase().includes(q) ||
//           (p.ownerName?.toLowerCase().includes(q)) ||
//           (p.developer?.toLowerCase().includes(q))
//       )
//     }

//     if (filters.locations.length > 0)
//       result = result.filter((p) => filters.locations.some((l) => p.location.includes(l)))
//     if (filters.budgetMin && filters.budgetMax) {
//       const min = parseInt(filters.budgetMin)
//       const max = parseInt(filters.budgetMax)
//       result = result.filter((p) => p.priceValue >= min && p.priceValue <= max)
//     }
//     if (filters.propertyTypes.length > 0)
//       result = result.filter((p) => filters.propertyTypes.includes(p.category))
//     if (filters.status.length > 0)
//       result = result.filter((p) => filters.status.includes(p.status))

//     if (sortBy === 'price-asc') result.sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') result.sort((a, b) => b.priceValue - a.priceValue)
//     else result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

//     return result
//   }, [activeTab, buySubTab, searchQuery, filters, sortBy])

//   const primaryTabs: { id: PrimaryTab; label: string; count: number }[] = [
//     { id: 'all', label: 'All', count: properties.length },
//     { id: 'buy', label: 'For Sale', count: properties.filter((p) => p.type === 'buy').length },
//     { id: 'rent', label: 'For Rent', count: properties.filter((p) => p.type === 'rent').length },
//     { id: 'project', label: 'New Projects', count: properties.filter((p) => p.type === 'project').length },
//   ]

//   const activeBanner = buySubTab !== 'all-buy' ? INFO_BANNERS[buySubTab] : null

//   return (
//     <div className="pt-20 min-h-screen bg-ivory">
//       {/* ── Header ── */}
//       <div
//         className="relative py-16 md:py-20 overflow-hidden"
//         style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #1a100d 100%)' }}
//       >
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `linear-gradient(rgba(201,149,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,149,42,0.4) 1px, transparent 1px)`,
//             backgroundSize: '60px 60px',
//           }}
//         />
//         <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-gold/10 blur-[100px]" />
//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
//           <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">Explore Properties</p>
//           <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
//             Find Your Perfect Property
//           </h1>
//           <p className="text-white/60 max-w-xl mb-6">
//             Browse Lucknow&apos;s finest residential &amp; commercial properties — new builder listings
//             and trusted resale homes, all legally verified by our expert team.
//           </p>
//           {/* Stat pills */}
//           <div className="flex flex-wrap gap-3">
//             <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
//               <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
//               <span className="text-white/80 text-xs font-medium">{newCount} New Properties</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
//               <RefreshCw className="w-3.5 h-3.5 text-blue-400" />
//               <span className="text-white/80 text-xs font-medium">{resellCount} Resell Properties</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
//               <Home className="w-3.5 h-3.5 text-gold" />
//               <span className="text-white/80 text-xs font-medium">{properties.length} Total Listings</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8">
//         {/* ── Primary Tabs + Search ── */}
//         <div className="flex flex-col sm:flex-row gap-4 mb-5">
//           <div className="flex gap-1 bg-white rounded-xl p-1 shadow-card border border-stone-border/30 overflow-x-auto shrink-0">
//             {primaryTabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => { setActiveTab(tab.id); setBuySubTab('all-buy') }}
//                 className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${activeTab === tab.id
//                   ? 'bg-gold text-white shadow-md'
//                   : 'text-charcoal-muted hover:text-charcoal'
//                   }`}
//               >
//                 {tab.label}
//                 <span className={`text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-ivory-dark text-charcoal-muted'
//                   }`}>
//                   {tab.count}
//                 </span>
//               </button>
//             ))}
//           </div>

//           <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-card border border-stone-border/30">
//             <Search className="w-4 h-4 text-gold shrink-0" />
//             <input
//               type="text"
//               placeholder="Search by name, location, builder, owner..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-transparent text-charcoal text-sm placeholder-stone focus:outline-none"
//             />
//             {searchQuery && (
//               <button onClick={() => setSearchQuery('')}>
//                 <X className="w-4 h-4 text-charcoal-muted hover:text-charcoal" />
//               </button>
//             )}
//           </div>
//         </div>

//         {/* ── Buy Sub-tabs: New / Resell ── */}
//         {activeTab === 'buy' && (
//           <div className="mb-7">
//             <p className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-3">
//               Property Listing Type
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
//               {BUY_SUB_TABS.map(({ id, label, icon: Icon, desc, activeColor }) => {
//                 const cnt =
//                   id === 'all-buy'
//                     ? properties.filter((p) => p.type === 'buy').length
//                     : properties.filter((p) => p.type === 'buy' && p.subtype === id).length
//                 const isActive = buySubTab === id
//                 return (
//                   <button
//                     key={id}
//                     onClick={() => setBuySubTab(id)}
//                     className={`group flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 ${isActive
//                       ? 'border-gold bg-white shadow-card-hover'
//                       : 'border-stone-border/50 bg-white hover:border-gold/40 hover:shadow-card'
//                       }`}
//                   >
//                     <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all ${isActive ? activeColor : 'bg-ivory-dark'
//                       }`}>
//                       <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-charcoal-muted'}`} />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className={`font-semibold text-sm ${isActive ? 'text-gold' : 'text-charcoal'}`}>
//                         {label}
//                       </p>
//                       <p className="text-xs text-charcoal-muted mt-0.5">{desc}</p>
//                     </div>
//                     <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${isActive ? 'bg-gold text-white' : 'bg-ivory-dark text-charcoal-muted'
//                       }`}>
//                       {cnt}
//                     </span>
//                   </button>
//                 )
//               })}
//             </div>

//             {/* Info banner */}
//             {activeBanner && (
//               <div className={`flex items-start gap-3 ${activeBanner.bgColor} border ${activeBanner.borderColor} rounded-2xl p-4`}>
//                 <activeBanner.icon className={`w-5 h-5 ${activeBanner.iconColor} shrink-0 mt-0.5`} />
//                 <div>
//                   <p className={`text-sm font-semibold ${activeBanner.textColor}`}>{activeBanner.title}</p>
//                   <p className={`text-xs mt-0.5 leading-relaxed ${activeBanner.bodyColor}`}>{activeBanner.body}</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* ── Layout ── */}
//         <div className="flex gap-8">
//           {/* Sidebar — Desktop */}
//           <div className="hidden lg:block w-72 shrink-0">
//             <div className="sticky top-24">
//               <FilterSidebar onFilterChange={setFilters} />
//             </div>
//           </div>

//           {/* Grid */}
//           <div className="flex-1 min-w-0">
//             {/* Toolbar */}
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-3">
//                 <p className="text-charcoal-muted text-sm">
//                   <span className="font-semibold text-charcoal">{filtered.length}</span> properties
//                 </p>
//                 {activeTab === 'buy' && buySubTab !== 'all-buy' && (
//                   <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${buySubTab === 'new' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
//                     }`}>
//                     {buySubTab === 'new' ? '✦ New' : '↻ Resell'}
//                   </span>
//                 )}
//               </div>
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-2 text-sm font-medium text-charcoal bg-white border border-stone-border px-4 py-2 rounded-xl hover:border-gold transition-colors"
//                 >
//                   <SlidersHorizontal className="w-4 h-4 text-gold" />
//                   Filters
//                 </button>
//                 <select
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value)}
//                   className="text-sm bg-white border border-stone-border px-3 py-2 rounded-xl text-charcoal focus:outline-none focus:border-gold"
//                 >
//                   <option value="featured">Featured First</option>
//                   <option value="price-asc">Price: Low to High</option>
//                   <option value="price-desc">Price: High to Low</option>
//                 </select>
//                 <div className="flex items-center bg-white border border-stone-border rounded-xl overflow-hidden">
//                   <button onClick={() => setViewMode('grid')} className={`p-2.5 transition-colors ${viewMode === 'grid' ? 'bg-gold text-white' : 'text-charcoal-muted hover:text-charcoal'}`}>
//                     <Grid3x3 className="w-4 h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')} className={`p-2.5 transition-colors ${viewMode === 'list' ? 'bg-gold text-white' : 'text-charcoal-muted hover:text-charcoal'}`}>
//                     <List className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {filtered.length === 0 ? (
//               <div className="text-center py-24">
//                 <div className="w-20 h-20 bg-ivory-dark rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Search className="w-8 h-8 text-charcoal-muted" />
//                 </div>
//                 <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">No properties found</h3>
//                 <p className="text-charcoal-muted text-sm mb-4">Try adjusting your filters or search query.</p>
//                 <button
//                   onClick={() => {
//                     setSearchQuery('')
//                     setFilters({ locations: [], budgetMin: '', budgetMax: '', propertyTypes: [], bedrooms: [], status: [] })
//                     setBuySubTab('all-buy')
//                   }}
//                   className="text-gold text-sm font-semibold hover:underline"
//                 >
//                   Clear all filters
//                 </button>
//               </div>
//             ) : (
//               <div className={
//                 viewMode === 'grid'
//                   ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
//                   : 'flex flex-col gap-4'
//               }>
//                 {filtered.map((property) => (
//                   <PropertyCard key={property.id} property={property} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Filter Drawer */}
//       {showFilters && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowFilters(false)} />
//           <div className="absolute right-0 top-0 bottom-0 w-80 bg-ivory overflow-y-auto shadow-2xl">
//             <div className="sticky top-0 bg-ivory z-10 flex items-center justify-between p-5 border-b border-stone-border">
//               <span className="font-semibold text-charcoal">Filters</span>
//               <button onClick={() => setShowFilters(false)}>
//                 <X className="w-5 h-5 text-charcoal" />
//               </button>
//             </div>
//             <div className="p-4">
//               <FilterSidebar onFilterChange={setFilters} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }




// 'use client'

// import { useState, useMemo } from 'react'
// import Link from 'next/link'
// import {
//   Search, Grid3x3, List, SlidersHorizontal, X,
//   MapPin, BedDouble, Bath, Maximize2, ArrowRight,
//   Home, Building2, Trees, ChevronDown, ChevronRight,
//   Sparkles, RefreshCw, CheckCircle, Filter
// } from 'lucide-react'
// import { properties } from '@/lib/data'
// import type { Property } from '@/lib/data'

// // ─── Filter Types ─────────────────────────────────────────────────────────────

// type Category = 'all' | 'residential' | 'commercial' | 'farmhouse'
// type StatusF = 'all' | 'under-construction' | 'ready-to-move' | 'recently-launched'
// type ListingType = 'all' | 'fresh' | 'resale'
// type ViewMode = 'grid' | 'list'

// // ─── Config ───────────────────────────────────────────────────────────────────

// const CATEGORIES: { id: Category; label: string; icon: React.ElementType; desc: string }[] = [
//   { id: 'all', label: 'All Properties', icon: Building2, desc: 'Every listing' },
//   { id: 'residential', label: 'Residential', icon: Home, desc: 'Homes & Apartments' },
//   { id: 'commercial', label: 'Commercial', icon: Building2, desc: 'Offices & Shops' },
//   { id: 'farmhouse', label: 'Farm House', icon: Trees, desc: 'Farm & Resort' },
// ]

// const STATUSES: { id: StatusF; label: string; color: string; dot: string }[] = [
//   { id: 'all', label: 'All Status', color: '#6B7280', dot: '#6B7280' },
//   { id: 'under-construction', label: 'Under Construction', color: '#2563EB', dot: '#2563EB' },
//   { id: 'ready-to-move', label: 'Ready to Move', color: '#059669', dot: '#059669' },
//   { id: 'recently-launched', label: 'Recently Launched', color: '#D97706', dot: '#D97706' },
// ]

// const LISTING_TYPES: { id: ListingType; label: string; icon: React.ElementType; desc: string }[] = [
//   { id: 'all', label: 'All Types', icon: Building2, desc: 'Fresh + Resale' },
//   { id: 'fresh', label: 'Fresh', icon: Sparkles, desc: 'New / Builder Property' },
//   { id: 'resale', label: 'Resale', icon: RefreshCw, desc: 'Owner / Secondary Market' },
// ]

// const BUDGETS = [
//   { label: 'Any Budget', min: 0, max: 999999999 },
//   { label: '< ₹50 Lakh', min: 0, max: 5000000 },
//   { label: '₹50L – ₹1 Cr', min: 5000000, max: 10000000 },
//   { label: '₹1 – ₹2 Cr', min: 10000000, max: 20000000 },
//   { label: '₹2 – ₹5 Cr', min: 20000000, max: 50000000 },
//   { label: '> ₹5 Cr', min: 50000000, max: 999999999 },
// ]

// const LOCATIONS = [
//   'Gomti Nagar', 'Hazratganj', 'Shaheed Path', 'Aliganj',
//   'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
// ]

// const BHK = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK']

// // ─── Helper: map property data to filter model ────────────────────────────────

// function getCategory(p: Property): Category {
//   if (p.category === 'Commercial') return 'commercial'
//   if (p.category === 'Plot') return 'farmhouse' // treat plot as farmhouse for demo
//   return 'residential'
// }

// function getStatus(p: Property): StatusF {
//   if (p.status === 'Under Construction') return 'under-construction'
//   if (p.status === 'Ready to Move') return 'ready-to-move'
//   if (p.status === 'New Launch') return 'recently-launched'
//   return 'ready-to-move'
// }

// function getListingType(p: Property): ListingType {
//   if (p.subtype === 'new') return 'fresh'
//   if (p.subtype === 'resell') return 'resale'
//   return 'fresh'
// }

// // ─── Property Card ────────────────────────────────────────────────────────────

// function PropertyCard({ property, view }: { property: Property; view: ViewMode }) {
//   const listingType = getListingType(property)
//   const status = getStatus(property)

//   const statusConfig: { label: string; bg: string } = {
//     'under-construction': { label: 'Under Construction', bg: 'rgba(37,99,235,0.90)' },
//     'ready-to-move': { label: 'Ready to Move', bg: 'rgba(5,150,105,0.90)' },
//     'recently-launched': { label: 'New Launch', bg: 'rgba(217,119,6,0.90)' },
//   }[status] ?? { label: property.status, bg: 'rgba(107,114,128,0.90)' }

//   if (view === 'list') {
//     return (
//       <Link href={`/properties/${property.id}`} className="group block">
//         <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg flex"
//           style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 8px rgba(11,31,58,0.05)' }}>
//           {/* Image */}
//           <div className="relative shrink-0 w-52 h-40"
//             style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//             <div className="absolute top-3 left-3 flex flex-col gap-1">
//               {property.badge && (
//                 <span className="text-white text-[10px] font-bold px-2 py-0.5 rounded"
//                   style={{ background: '#E63946' }}>{property.badge}</span>
//               )}
//               <span className="text-white text-[10px] font-semibold px-2 py-0.5 rounded"
//                 style={{ background: statusConfig.bg }}>{statusConfig.label}</span>
//             </div>
//             <div className="absolute bottom-0 inset-x-0 p-3"
//               style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.80), transparent)' }}>
//               <p className="text-white font-serif font-bold text-base">{property.price}</p>
//             </div>
//           </div>
//           {/* Content */}
//           <div className="flex-1 p-5 flex flex-col justify-between">
//             <div>
//               <div className="flex items-start justify-between gap-3 mb-1">
//                 <h3 className="font-serif font-semibold text-base leading-tight group-hover:text-red-DEFAULT transition-colors"
//                   style={{ color: '#0B1F3A' }}>{property.title}</h3>
//                 <span className="shrink-0 text-[10px] font-bold px-2 py-1 rounded-full"
//                   style={{
//                     background: listingType === 'fresh' ? '#DCFCE7' : '#EFF6FF',
//                     color: listingType === 'fresh' ? '#059669' : '#2563EB',
//                   }}>
//                   {listingType === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//                 </span>
//               </div>
//               <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//                 <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//                 {property.location}
//               </div>
//               {property.bedrooms > 0 && (
//                 <div className="flex items-center gap-4 text-xs" style={{ color: '#6B7280' }}>
//                   <span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5" />{property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" />{property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5" />{property.area}</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-3 pt-3"
//               style={{ borderTop: '1px solid #E8ECF2' }}>
//               {property.developer
//                 ? <span className="text-xs font-medium" style={{ color: '#0B1F3A' }}>{property.developer}</span>
//                 : property.ownerName
//                   ? <span className="text-xs" style={{ color: '#6B7280' }}>👤 {property.ownerName}</span>
//                   : <span />}
//               <span className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
//                 style={{ color: '#E63946' }}>View Details <ArrowRight className="w-3.5 h-3.5" /></span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     )
//   }

//   // Grid card
//   return (
//     <Link href={`/properties/${property.id}`} className="group block">
//       <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 flex flex-col h-full"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 16px rgba(11,31,58,0.06)' }}>
//         {/* Image */}
//         <div className="relative overflow-hidden" style={{
//           height: '190px',
//           background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})`,
//         }}>
//           {/* Dot pattern */}
//           <div className="absolute inset-0 opacity-[0.08]" style={{
//             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//             backgroundSize: '24px 24px',
//           }} />
//           {/* Badges */}
//           <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
//             {property.badge && (
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded"
//                 style={{ background: '#E63946' }}>{property.badge}</span>
//             )}
//             <span className="text-white text-[10px] font-semibold px-2.5 py-1 rounded"
//               style={{ background: statusConfig.bg }}>{statusConfig.label}</span>
//           </div>
//           {/* Listing type */}
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
//               style={{
//                 background: listingType === 'fresh' ? 'rgba(5,150,105,0.90)' : 'rgba(37,99,235,0.90)',
//                 color: '#fff',
//               }}>
//               {listingType === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//             </span>
//           </div>
//           {/* Price overlay */}
//           <div className="absolute bottom-0 inset-x-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {property.category} · {property.area}
//             </p>
//           </div>
//           {/* Hover overlay */}
//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             style={{ background: 'rgba(230,57,70,0.10)' }} />
//         </div>

//         {/* Content */}
//         <div className="p-4 flex-1 flex flex-col">
//           <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2 transition-colors group-hover:text-red-DEFAULT"
//             style={{ color: '#0B1F3A' }}>{property.title}</h3>
//           <div className="flex items-center gap-1 mb-3 text-xs" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{property.location}</span>
//           </div>
//           {property.bedrooms > 0 && (
//             <div className="flex items-center gap-3 text-xs mb-3 pb-3"
//               style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
//               <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds</span>
//               <span className="flex items-center gap-1"><Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths</span>
//               <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}</span>
//             </div>
//           )}
//           {/* Developer / Owner */}
//           {(property.developer || property.ownerName) && (
//             <div className="mb-3">
//               {property.developer
//                 ? <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: '#EBF0F7', color: '#0B1F3A' }}>🏗 {property.developer}</span>
//                 : <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: '#EFF6FF', color: '#2563EB' }}>👤 Owner Direct</span>
//               }
//             </div>
//           )}
//           {/* Amenities */}
//           <div className="flex flex-wrap gap-1 flex-1 mb-3">
//             {property.amenities.slice(0, 2).map(a => (
//               <span key={a} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>
//             ))}
//             {property.amenities.length > 2 && (
//               <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: '#FEE8EA', color: '#E63946' }}>+{property.amenities.length - 2}</span>
//             )}
//           </div>
//           <div className="flex items-center justify-end">
//             <span className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all" style={{ color: '#E63946' }}>
//               View Details <ArrowRight className="w-3.5 h-3.5" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Sidebar Filter ───────────────────────────────────────────────────────────

// function SidebarFilter({
//   budget, setBudget,
//   location, setLocation,
//   bhk, setBhk,
// }: {
//   budget: number; setBudget: (i: number) => void
//   location: string; setLocation: (l: string) => void
//   bhk: string; setBhk: (b: string) => void
// }) {
//   const [openBudget, setOpenBudget] = useState(true)
//   const [openLocation, setOpenLocation] = useState(true)
//   const [openBhk, setOpenBhk] = useState(false)

//   return (
//     <div className="bg-white rounded-xl overflow-hidden"
//       style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//       {/* Header */}
//       <div className="flex items-center gap-2 px-5 py-4" style={{ borderBottom: '1px solid #E8ECF2', background: '#F5F7FA' }}>
//         <Filter className="w-4 h-4" style={{ color: '#E63946' }} />
//         <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>More Filters</span>
//       </div>

//       {/* Budget */}
//       <div className="p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
//         <button onClick={() => setOpenBudget(!openBudget)}
//           className="flex items-center justify-between w-full mb-3">
//           <span className="text-sm font-semibold" style={{ color: '#0B1F3A' }}>Budget</span>
//           <ChevronDown className={`w-4 h-4 transition-transform ${openBudget ? 'rotate-180' : ''}`} style={{ color: '#6B7280' }} />
//         </button>
//         {openBudget && (
//           <div className="flex flex-col gap-1.5">
//             {BUDGETS.map((b, i) => (
//               <button key={b.label} onClick={() => setBudget(i)}
//                 className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                 style={{
//                   background: budget === i ? '#E63946' : 'transparent',
//                   color: budget === i ? '#fff' : '#1A1A1A',
//                   fontWeight: budget === i ? '600' : '400',
//                 }}>
//                 {b.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Location */}
//       <div className="p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
//         <button onClick={() => setOpenLocation(!openLocation)}
//           className="flex items-center justify-between w-full mb-3">
//           <span className="text-sm font-semibold" style={{ color: '#0B1F3A' }}>Location</span>
//           <ChevronDown className={`w-4 h-4 transition-transform ${openLocation ? 'rotate-180' : ''}`} style={{ color: '#6B7280' }} />
//         </button>
//         {openLocation && (
//           <div className="flex flex-col gap-1.5">
//             <button onClick={() => setLocation('all')}
//               className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//               style={{
//                 background: location === 'all' ? '#E63946' : 'transparent',
//                 color: location === 'all' ? '#fff' : '#1A1A1A',
//                 fontWeight: location === 'all' ? '600' : '400',
//               }}>All Locations</button>
//             {LOCATIONS.map(l => (
//               <button key={l} onClick={() => setLocation(l)}
//                 className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                 style={{
//                   background: location === l ? '#E63946' : 'transparent',
//                   color: location === l ? '#fff' : '#1A1A1A',
//                   fontWeight: location === l ? '600' : '400',
//                 }}>
//                 {l}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* BHK */}
//       <div className="p-5">
//         <button onClick={() => setOpenBhk(!openBhk)}
//           className="flex items-center justify-between w-full mb-3">
//           <span className="text-sm font-semibold" style={{ color: '#0B1F3A' }}>BHK / Size</span>
//           <ChevronDown className={`w-4 h-4 transition-transform ${openBhk ? 'rotate-180' : ''}`} style={{ color: '#6B7280' }} />
//         </button>
//         {openBhk && (
//           <div className="flex flex-wrap gap-2">
//             <button onClick={() => setBhk('all')}
//               className="text-sm px-3 py-1.5 rounded-full border transition-all"
//               style={{
//                 background: bhk === 'all' ? '#0B1F3A' : 'transparent',
//                 borderColor: bhk === 'all' ? '#0B1F3A' : '#E8ECF2',
//                 color: bhk === 'all' ? '#fff' : '#1A1A1A',
//               }}>Any</button>
//             {BHK.map(b => (
//               <button key={b} onClick={() => setBhk(b)}
//                 className="text-sm px-3 py-1.5 rounded-full border transition-all"
//                 style={{
//                   background: bhk === b ? '#0B1F3A' : 'transparent',
//                   borderColor: bhk === b ? '#0B1F3A' : '#E8ECF2',
//                   color: bhk === b ? '#fff' : '#1A1A1A',
//                 }}>{b}</button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// // ─── Main Page ────────────────────────────────────────────────────────────────

// export default function PropertiesClient() {
//   // Level 1 — Category
//   const [category, setCategory] = useState<Category>('all')
//   // Level 2 — Status
//   const [status, setStatus] = useState<StatusF>('all')
//   // Level 3 — Type
//   const [listingType, setListingType] = useState<ListingType>('all')

//   // Other filters
//   const [search, setSearch] = useState('')
//   const [budgetIdx, setBudgetIdx] = useState(0)
//   const [location, setLocation] = useState('all')
//   const [bhk, setBhk] = useState('all')
//   const [sortBy, setSortBy] = useState('featured')
//   const [viewMode, setViewMode] = useState<ViewMode>('grid')
//   const [showMobileFilter, setShowMobileFilter] = useState(false)

//   // Active filter count
//   const activeCount = [
//     category !== 'all',
//     status !== 'all',
//     listingType !== 'all',
//     budgetIdx !== 0,
//     location !== 'all',
//     bhk !== 'all',
//     search.trim() !== '',
//   ].filter(Boolean).length

//   const clearAll = () => {
//     setCategory('all'); setStatus('all'); setListingType('all')
//     setBudgetIdx(0); setLocation('all'); setBhk('all'); setSearch('')
//   }

//   const filtered = useMemo(() => {
//     let r = [...properties]

//     // Level 1
//     if (category !== 'all') r = r.filter(p => getCategory(p) === category)
//     // Level 2
//     if (status !== 'all') r = r.filter(p => getStatus(p) === status)
//     // Level 3
//     if (listingType !== 'all') r = r.filter(p => getListingType(p) === listingType)

//     // Search
//     if (search.trim()) {
//       const q = search.toLowerCase()
//       r = r.filter(p =>
//         p.title.toLowerCase().includes(q) ||
//         p.location.toLowerCase().includes(q) ||
//         p.category.toLowerCase().includes(q) ||
//         (p.developer ?? '').toLowerCase().includes(q)
//       )
//     }

//     // Budget
//     if (budgetIdx !== 0) {
//       const { min, max } = BUDGETS[budgetIdx]
//       r = r.filter(p => p.priceValue >= min && p.priceValue <= max)
//     }

//     // Location
//     if (location !== 'all') r = r.filter(p => p.location.includes(location))

//     // BHK
//     if (bhk !== 'all') {
//       const num = parseInt(bhk)
//       if (!isNaN(num)) {
//         if (bhk.includes('+')) r = r.filter(p => p.bedrooms >= num)
//         else r = r.filter(p => p.bedrooms === num)
//       }
//     }

//     // Sort
//     if (sortBy === 'price-asc') r.sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') r.sort((a, b) => b.priceValue - a.priceValue)
//     else r.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

//     return r
//   }, [category, status, listingType, search, budgetIdx, location, bhk, sortBy])

//   // counts
//   const countCat = (c: Category) => c === 'all' ? properties.length : properties.filter(p => getCategory(p) === c).length
//   const countStat = (s: StatusF) => s === 'all' ? properties.length : properties.filter(p => getStatus(p) === s).length
//   const countType = (t: ListingType) => t === 'all' ? properties.length : properties.filter(p => getListingType(p) === t).length

//   return (
//     <div className="pt-16 md:pt-20 min-h-screen" style={{ background: '#FFFFFF' }}>

//       {/* ── Page Header ── */}
//       <div className="relative py-14 overflow-hidden" style={{ background: '#0B1F3A' }}>
//         {/* dot pattern */}
//         <div className="absolute inset-0 opacity-[0.07]" style={{
//           backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//           backgroundSize: '28px 28px',
//         }} />
//         {/* red top line */}
//         <div className="absolute top-0 left-0 right-0 h-[3px]" style={{
//           background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 40%, transparent 70%)',
//         }} />
//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
//             <div>
//               <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#E63946' }}>
//                 Browse Listings
//               </p>
//               <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
//                 Find Your Property
//               </h1>
//               <p style={{ color: 'rgba(255,255,255,0.55)' }} className="max-w-xl text-sm">
//                 Residential, Commercial & Farm Properties across Lucknow — verified &amp; ready.
//               </p>
//             </div>
//             <div className="flex items-center gap-3 flex-wrap">
//               <div className="text-center px-5 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
//                 <p className="font-serif font-bold text-2xl text-white">{properties.length}+</p>
//                 <p className="text-xs" style={{ color: 'rgba(255,255,255,0.50)' }}>Listings</p>
//               </div>
//               <div className="text-center px-5 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
//                 <p className="font-serif font-bold text-2xl" style={{ color: '#E63946' }}>6</p>
//                 <p className="text-xs" style={{ color: 'rgba(255,255,255,0.50)' }}>Locations</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ══════════════════════════════════════════════════════════════
//           LEVEL 1 — CATEGORY (Residential / Commercial / Farm House)
//       ══════════════════════════════════════════════════════════════ */}
//       <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5">
//           <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#9CA3AF' }}>
//             Step 1 — Property Category
//           </p>
//           <div className="flex flex-wrap gap-3">
//             {CATEGORIES.map(c => {
//               const Icon = c.icon
//               const active = category === c.id
//               return (
//                 <button
//                   key={c.id}
//                   onClick={() => { setCategory(c.id); setStatus('all'); setListingType('all') }}
//                   className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all"
//                   style={{
//                     background: active ? '#0B1F3A' : '#F5F7FA',
//                     border: `2px solid ${active ? '#0B1F3A' : '#E8ECF2'}`,
//                     color: active ? '#fff' : '#1A1A1A',
//                     boxShadow: active ? '0 4px 16px rgba(11,31,58,0.20)' : 'none',
//                   }}
//                 >
//                   <div className="w-8 h-8 rounded-lg flex items-center justify-center"
//                     style={{ background: active ? 'rgba(255,255,255,0.15)' : '#EBF0F7' }}>
//                     <Icon className="w-4 h-4" style={{ color: active ? '#fff' : '#0B1F3A' }} />
//                   </div>
//                   <div className="text-left">
//                     <p className="font-semibold text-sm leading-none">{c.label}</p>
//                     <p className="text-xs mt-0.5 opacity-70">{countCat(c.id)} listings</p>
//                   </div>
//                   {active && <CheckCircle className="w-4 h-4 ml-1 opacity-80" />}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ══════════════════════════════════════════════════════════════
//           LEVEL 2 — STATUS (Under Const / Ready / Launched)
//       ══════════════════════════════════════════════════════════════ */}
//       <div style={{ background: '#F5F7FA', borderBottom: '1px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
//           <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#9CA3AF' }}>
//             Step 2 — Property Status
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {STATUSES.map(s => {
//               const active = status === s.id
//               return (
//                 <button
//                   key={s.id}
//                   onClick={() => setStatus(s.id)}
//                   className="flex items-center gap-2 px-4 py-2.5 rounded-full transition-all text-sm font-semibold"
//                   style={{
//                     background: active ? s.dot : '#FFFFFF',
//                     border: `1.5px solid ${active ? s.dot : '#E8ECF2'}`,
//                     color: active ? '#fff' : '#1A1A1A',
//                     boxShadow: active ? `0 2px 10px ${s.dot}40` : 'none',
//                   }}
//                 >
//                   <div className="w-2 h-2 rounded-full" style={{ background: active ? 'rgba(255,255,255,0.80)' : s.dot }} />
//                   {s.label}
//                   <span className="text-xs px-2 py-0.5 rounded-full ml-1"
//                     style={{
//                       background: active ? 'rgba(255,255,255,0.20)' : '#F5F7FA',
//                       color: active ? '#fff' : '#6B7280',
//                     }}>
//                     {countStat(s.id)}
//                   </span>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ══════════════════════════════════════════════════════════════
//           LEVEL 3 — LISTING TYPE (Fresh / Resale)
//       ══════════════════════════════════════════════════════════════ */}
//       <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
//           <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#9CA3AF' }}>
//             Step 3 — Listing Type
//           </p>
//           <div className="flex flex-wrap gap-3">
//             {LISTING_TYPES.map(t => {
//               const Icon = t.icon
//               const active = listingType === t.id
//               return (
//                 <button
//                   key={t.id}
//                   onClick={() => setListingType(t.id)}
//                   className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all"
//                   style={{
//                     background: active ? '#E63946' : '#F5F7FA',
//                     border: `2px solid ${active ? '#E63946' : '#E8ECF2'}`,
//                     color: active ? '#fff' : '#1A1A1A',
//                     boxShadow: active ? '0 4px 16px rgba(230,57,70,0.25)' : 'none',
//                   }}
//                 >
//                   <div className="w-8 h-8 rounded-lg flex items-center justify-center"
//                     style={{ background: active ? 'rgba(255,255,255,0.20)' : '#EBF0F7' }}>
//                     <Icon className="w-4 h-4" style={{ color: active ? '#fff' : '#E63946' }} />
//                   </div>
//                   <div className="text-left">
//                     <p className="font-semibold text-sm leading-none">{t.label}</p>
//                     <p className="text-xs mt-0.5 opacity-75">{t.desc}</p>
//                   </div>
//                   <span className="ml-1 text-xs px-2 py-0.5 rounded-full font-bold"
//                     style={{
//                       background: active ? 'rgba(255,255,255,0.25)' : '#FEE8EA',
//                       color: active ? '#fff' : '#E63946',
//                     }}>
//                     {countType(t.id)}
//                   </span>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ─── Active Filter Breadcrumb ─── */}
//       {activeCount > 0 && (
//         <div style={{ background: '#FEE8EA', borderBottom: '1px solid rgba(230,57,70,0.15)' }}>
//           <div className="max-w-7xl mx-auto px-5 sm:px-8 py-2.5 flex items-center gap-3 flex-wrap">
//             <span className="text-xs font-semibold" style={{ color: '#E63946' }}>Active Filters:</span>
//             {category !== 'all' && (
//               <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium"
//                 style={{ background: '#E63946', color: '#fff' }}>
//                 {CATEGORIES.find(c => c.id === category)?.label}
//                 <button onClick={() => setCategory('all')}><X className="w-3 h-3 ml-0.5" /></button>
//               </span>
//             )}
//             {status !== 'all' && (
//               <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium"
//                 style={{ background: '#0B1F3A', color: '#fff' }}>
//                 {STATUSES.find(s => s.id === status)?.label}
//                 <button onClick={() => setStatus('all')}><X className="w-3 h-3 ml-0.5" /></button>
//               </span>
//             )}
//             {listingType !== 'all' && (
//               <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium"
//                 style={{ background: '#0B1F3A', color: '#fff' }}>
//                 {LISTING_TYPES.find(t => t.id === listingType)?.label}
//                 <button onClick={() => setListingType('all')}><X className="w-3 h-3 ml-0.5" /></button>
//               </span>
//             )}
//             {location !== 'all' && (
//               <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium"
//                 style={{ background: '#0B1F3A', color: '#fff' }}>
//                 📍 {location}
//                 <button onClick={() => setLocation('all')}><X className="w-3 h-3 ml-0.5" /></button>
//               </span>
//             )}
//             {budgetIdx !== 0 && (
//               <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium"
//                 style={{ background: '#0B1F3A', color: '#fff' }}>
//                 💰 {BUDGETS[budgetIdx].label}
//                 <button onClick={() => setBudgetIdx(0)}><X className="w-3 h-3 ml-0.5" /></button>
//               </span>
//             )}
//             <button onClick={clearAll} className="text-xs font-semibold ml-auto flex items-center gap-1"
//               style={{ color: '#E63946' }}>
//               <X className="w-3 h-3" /> Clear All
//             </button>
//           </div>
//         </div>
//       )}

//       {/* ─── Main Content ─── */}
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8">

//         {/* Toolbar */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
//           {/* Search */}
//           <div className="flex items-center gap-3 rounded-xl px-4 py-2.5 w-full sm:w-80"
//             style={{ background: '#F5F7FA', border: '1px solid #E8ECF2' }}>
//             <Search className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
//             <input
//               type="text"
//               placeholder="Search by name, location, developer..."
//               value={search}
//               onChange={e => setSearch(e.target.value)}
//               className="w-full bg-transparent text-sm focus:outline-none"
//               style={{ color: '#1A1A1A' }}
//             />
//             {search && <button onClick={() => setSearch('')}><X className="w-3.5 h-3.5" style={{ color: '#6B7280' }} /></button>}
//           </div>

//           <div className="flex items-center gap-3">
//             {/* Mobile filter */}
//             <button
//               onClick={() => setShowMobileFilter(true)}
//               className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
//               style={{ background: '#F5F7FA', border: '1px solid #E8ECF2', color: '#0B1F3A' }}
//             >
//               <SlidersHorizontal className="w-4 h-4" style={{ color: '#E63946' }} />
//               Filters {activeCount > 0 && <span className="w-4 h-4 rounded-full text-white text-xs flex items-center justify-center" style={{ background: '#E63946' }}>{activeCount}</span>}
//             </button>

//             {/* Result count */}
//             <p className="text-sm" style={{ color: '#6B7280' }}>
//               <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> properties
//             </p>

//             {/* Sort */}
//             <select
//               value={sortBy}
//               onChange={e => setSortBy(e.target.value)}
//               className="text-sm px-3 py-2.5 rounded-xl focus:outline-none"
//               style={{ background: '#F5F7FA', border: '1px solid #E8ECF2', color: '#1A1A1A' }}
//             >
//               <option value="featured">Featured First</option>
//               <option value="price-asc">Price ↑</option>
//               <option value="price-desc">Price ↓</option>
//             </select>

//             {/* View toggle */}
//             <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//               <button onClick={() => setViewMode('grid')}
//                 className="p-2.5 transition-colors"
//                 style={{ background: viewMode === 'grid' ? '#E63946' : '#fff', color: viewMode === 'grid' ? '#fff' : '#6B7280' }}>
//                 <Grid3x3 className="w-4 h-4" />
//               </button>
//               <button onClick={() => setViewMode('list')}
//                 className="p-2.5 transition-colors"
//                 style={{ background: viewMode === 'list' ? '#E63946' : '#fff', color: viewMode === 'list' ? '#fff' : '#6B7280' }}>
//                 <List className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Layout */}
//         <div className="flex gap-6">
//           {/* Sidebar — desktop */}
//           <div className="hidden lg:block w-64 shrink-0">
//             <div className="sticky top-24">
//               <SidebarFilter
//                 budget={budgetIdx} setBudget={setBudgetIdx}
//                 location={location} setLocation={setLocation}
//                 bhk={bhk} setBhk={setBhk}
//               />
//             </div>
//           </div>

//           {/* Grid */}
//           <div className="flex-1 min-w-0">
//             {filtered.length === 0 ? (
//               <div className="text-center py-20">
//                 <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//                   style={{ background: '#F5F7FA' }}>
//                   <Search className="w-7 h-7" style={{ color: '#9CA3AF' }} />
//                 </div>
//                 <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>No properties found</h3>
//                 <p className="text-sm mb-4" style={{ color: '#6B7280' }}>Try adjusting your filters.</p>
//                 <button onClick={clearAll}
//                   className="text-sm font-semibold px-5 py-2.5 rounded-lg text-white"
//                   style={{ background: '#E63946' }}>
//                   Clear All Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={
//                 viewMode === 'grid'
//                   ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'
//                   : 'flex flex-col gap-4'
//               }>
//                 {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode} />)}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Filter Drawer */}
//       {showMobileFilter && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileFilter(false)} />
//           <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto shadow-2xl">
//             <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-5"
//               style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <span className="font-semibold" style={{ color: '#0B1F3A' }}>More Filters</span>
//               <button onClick={() => setShowMobileFilter(false)}>
//                 <X className="w-5 h-5" style={{ color: '#0B1F3A' }} />
//               </button>
//             </div>
//             <div className="p-4">
//               <SidebarFilter
//                 budget={budgetIdx} setBudget={setBudgetIdx}
//                 location={location} setLocation={setLocation}
//                 bhk={bhk} setBhk={setBhk}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }



// 'use client'

// import { useState, useMemo } from 'react'
// import Link from 'next/link'
// import {
//   Search, Grid3x3, List, X, SlidersHorizontal,
//   MapPin, BedDouble, Bath, Maximize2, ArrowRight,
//   Home, Building2, Trees, Sparkles, RefreshCw,
//   ChevronDown, CheckCircle2, IndianRupee
// } from 'lucide-react'
// import { properties } from '@/lib/data'
// import type { Property } from '@/lib/data'

// // ─── Types ─────────────────────────────────────────────────────────────────

// type Category = 'residential' | 'commercial' | 'farmhouse'
// type StatusTab = 'all' | 'under-construction' | 'ready-to-move' | 'recently-launched'
// type ListingType = 'all' | 'fresh' | 'resale'

// // ─── Category Config ───────────────────────────────────────────────────────

// const CATEGORIES: {
//   id: Category
//   label: string
//   sub: string
//   icon: React.ElementType
//   gradient: string
//   accentColor: string
//   lightBg: string
// }[] = [
//     {
//       id: 'residential',
//       label: 'Residential',
//       sub: 'Apartments, Villas & Homes',
//       icon: Home,
//       gradient: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 100%)',
//       accentColor: '#E63946',
//       lightBg: '#EBF0F7',
//     },
//     {
//       id: 'commercial',
//       label: 'Commercial',
//       sub: 'Offices, Shops & Spaces',
//       icon: Building2,
//       gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
//       accentColor: '#E63946',
//       lightBg: '#F0EEFF',
//     },
//     {
//       id: 'farmhouse',
//       label: 'Farm House',
//       sub: 'Farms, Resorts & Land',
//       icon: Trees,
//       gradient: 'linear-gradient(135deg, #0d2818 0%, #1a4a2a 100%)',
//       accentColor: '#E63946',
//       lightBg: '#ECFDF5',
//     },
//   ]

// const STATUS_TABS: {
//   id: StatusTab
//   label: string
//   shortLabel: string
//   dotColor: string
//   tagBg: string
//   tagText: string
// }[] = [
//     { id: 'all', label: 'All Properties', shortLabel: 'All', dotColor: '#6B7280', tagBg: '#F5F7FA', tagText: '#6B7280' },
//     { id: 'under-construction', label: 'Under Construction', shortLabel: 'Under Const.', dotColor: '#2563EB', tagBg: 'rgba(37,99,235,0.10)', tagText: '#2563EB' },
//     { id: 'ready-to-move', label: 'Ready to Move', shortLabel: 'Ready', dotColor: '#059669', tagBg: 'rgba(5,150,105,0.10)', tagText: '#059669' },
//     { id: 'recently-launched', label: 'Recently Launched', shortLabel: 'New Launch', dotColor: '#D97706', tagBg: 'rgba(217,119,6,0.10)', tagText: '#D97706' },
//   ]

// const BUDGETS = [
//   { label: 'Any Budget', min: 0, max: 999999999 },
//   { label: 'Under ₹50L', min: 0, max: 5000000 },
//   { label: '₹50L – ₹1Cr', min: 5000000, max: 10000000 },
//   { label: '₹1Cr – ₹2Cr', min: 10000000, max: 20000000 },
//   { label: '₹2Cr – ₹5Cr', min: 20000000, max: 50000000 },
//   { label: 'Above ₹5Cr', min: 50000000, max: 999999999 },
// ]

// const LOCATIONS = [
//   'Gomti Nagar', 'Hazratganj', 'Shaheed Path', 'Aliganj',
//   'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
// ]

// // ─── Helpers ────────────────────────────────────────────────────────────────

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
//       <Link href={`/properties/${property.id}`} className="group block">
//         <div className="bg-white rounded-2xl overflow-hidden flex transition-all duration-300 group-hover:shadow-lg"
//           style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 8px rgba(11,31,58,0.05)' }}>
//           {/* Thumb */}
//           <div className="relative shrink-0 w-48 h-36"
//             style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//             <div className="absolute inset-0 opacity-[0.08]" style={{
//               backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//               backgroundSize: '20px 20px',
//             }} />
//             {property.badge && (
//               <span className="absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10"
//                 style={{ background: '#E63946' }}>{property.badge}</span>
//             )}
//             <div className="absolute bottom-0 inset-x-0 p-3"
//               style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
//               <p className="text-white font-serif font-bold">{property.price}</p>
//             </div>
//           </div>
//           {/* Info */}
//           <div className="flex-1 p-4 flex flex-col justify-between">
//             <div>
//               <div className="flex items-start justify-between gap-2 mb-1">
//                 <h3 className="font-serif font-semibold text-sm leading-tight group-hover:text-red-DEFAULT transition-colors"
//                   style={{ color: '#0B1F3A' }}>{property.title}</h3>
//                 <div className="flex gap-1 shrink-0">
//                   <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
//                     style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//                     {stCfg.shortLabel}
//                   </span>
//                   <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
//                     style={{ background: ltype === 'fresh' ? '#DCFCE7' : '#EFF6FF', color: ltype === 'fresh' ? '#059669' : '#2563EB' }}>
//                     {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 text-xs mb-2" style={{ color: '#6B7280' }}>
//                 <MapPin className="w-3 h-3" style={{ color: '#E63946' }} />{property.location}
//               </div>
//               {property.bedrooms > 0 && (
//                 <div className="flex gap-3 text-xs" style={{ color: '#6B7280' }}>
//                   <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" />{property.area}</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-2 pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//               <span className="text-xs" style={{ color: '#6B7280' }}>
//                 {property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}
//               </span>
//               <span className="flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2"
//                 style={{ color: '#E63946' }}>View Details <ArrowRight className="w-3.5 h-3.5" /></span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     )
//   }

//   return (
//     <Link href={`/properties/${property.id}`} className="group block h-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         {/* Image */}
//         <div className="relative overflow-hidden shrink-0" style={{
//           height: '195px',
//           background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})`,
//         }}>
//           <div className="absolute inset-0 opacity-[0.08]" style={{
//             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//             backgroundSize: '24px 24px',
//           }} />
//           {/* Listing type badge */}
//           <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//             {property.badge && (
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded"
//                 style={{ background: '#E63946' }}>{property.badge}</span>
//             )}
//           </div>
//           {/* Status top right */}
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
//               style={{ background: stCfg.tagBg, color: stCfg.dotColor, backdropFilter: 'blur(8px)' }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />
//               {stCfg.shortLabel}
//             </span>
//           </div>
//           {/* Fresh/Resale bottom right */}
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{ background: ltype === 'fresh' ? 'rgba(5,150,105,0.90)' : 'rgba(37,99,235,0.90)' }}>
//               {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//             </span>
//           </div>
//           {/* Price overlay */}
//           <div className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {property.category} · {property.area}
//             </p>
//           </div>
//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
//             style={{ background: 'rgba(230,57,70,0.08)' }} />
//         </div>
//         {/* Content */}
//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2 group-hover:text-red-DEFAULT transition-colors"
//             style={{ color: '#0B1F3A' }}>{property.title}</h3>
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
//               <span key={a} className="text-[10px] px-2 py-0.5 rounded-full"
//                 style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>
//             ))}
//             {property.amenities.length > 2 && (
//               <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
//                 style={{ background: '#FEE8EA', color: '#E63946' }}>+{property.amenities.length - 2}</span>
//             )}
//           </div>
//           <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-[10px]" style={{ color: '#6B7280' }}>
//               {property.developer ? `🏗 ${property.developer}` : property.ownerName ? `👤 Owner` : property.category}
//             </span>
//             <span className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
//               style={{ color: '#E63946' }}>View <ArrowRight className="w-3.5 h-3.5" /></span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Main Page ───────────────────────────────────────────────────────────────

// export default function PropertiesClient() {
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

//   // per-category counts
//   const catCounts = useMemo(() => ({
//     residential: properties.filter(p => getCategory(p) === 'residential').length,
//     commercial: properties.filter(p => getCategory(p) === 'commercial').length,
//     farmhouse: properties.filter(p => getCategory(p) === 'farmhouse').length,
//   }), [])

//   // filtered list
//   const filtered = useMemo(() => {
//     let r = properties.filter(p => getCategory(p) === category)
//     if (statusTab !== 'all') r = r.filter(p => getStatus(p) === statusTab)
//     if (listingType !== 'all') r = r.filter(p => getListingType(p) === listingType)
//     if (search.trim()) {
//       const q = search.toLowerCase()
//       r = r.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.developer ?? '').toLowerCase().includes(q))
//     }
//     if (budgetIdx > 0) {
//       const { min, max } = BUDGETS[budgetIdx]
//       r = r.filter(p => p.priceValue >= min && p.priceValue <= max)
//     }
//     if (location !== 'all') r = r.filter(p => p.location.includes(location))
//     if (sortBy === 'price-asc') r.sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') r.sort((a, b) => b.priceValue - a.priceValue)
//     else r.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//     return r
//   }, [category, statusTab, listingType, search, budgetIdx, location, sortBy])

//   // tab counts (within selected category)
//   const baseForCat = properties.filter(p => getCategory(p) === category)
//   const statCount = (s: StatusTab) => s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
//   const typeCount = (t: ListingType) => t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length

//   const activeCat = CATEGORIES.find(c => c.id === category)!

//   return (
//     <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

//       {/* ═══════════════════════════════════════════════════════
//           SECTION A — CATEGORY SELECTOR (3 large cards)
//       ═══════════════════════════════════════════════════════ */}
//       {/* <div style={{ background: '#0B1F3A' }} className="pt-20"> */}
//       <div
//         style={{
//           background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)'
//         }}
//         className="pt-20"
//       >
//         {/* dot pattern */}
//         <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
//           backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//           backgroundSize: '28px 28px',
//         }} />
//         {/* red top bar */}
//         {/* <div className="h-[3px] w-full" style={{
//           background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 35%, transparent 65%)',
//         }} /> */}

//         <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-0">
//           <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#E63946' }}>
//             Browse Properties
//           </p>
//           <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">
//             Find Your Property
//           </h1>

//           {/* Category Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-0">
//             {CATEGORIES.map(cat => {
//               const Icon = cat.icon
//               const isActive = category === cat.id
//               const count = catCounts[cat.id]
//               return (
//                 <button
//                   key={cat.id}
//                   onClick={() => { setCategory(cat.id); setStatusTab('all'); setListingType('all') }}
//                   className="relative rounded-t-2xl overflow-hidden text-left transition-all duration-300 group"
//                   style={{
//                     background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
//                     border: `2px solid ${isActive ? '#E63946' : 'rgba(255,255,255,0.10)'}`,
//                     borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
//                     transform: isActive ? 'translateY(2px)' : 'translateY(0)',
//                     boxShadow: isActive ? '0 -4px 24px rgba(230,57,70,0.20)' : 'none',
//                     padding: '20px 24px 22px',
//                   }}
//                 >
//                   {/* Active indicator */}
//                   {isActive && (
//                     <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#E63946' }} />
//                   )}
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <div
//                         className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
//                         style={{ background: isActive ? '#FEE8EA' : 'rgba(255,255,255,0.12)' }}
//                       >
//                         <Icon className="w-5 h-5" style={{ color: isActive ? '#E63946' : '#fff' }} />
//                       </div>
//                       <p className="font-serif font-bold text-lg leading-none mb-1"
//                         style={{ color: isActive ? '#0B1F3A' : '#fff' }}>
//                         {cat.label}
//                       </p>
//                       <p className="text-xs" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>
//                         {cat.sub}
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-serif font-bold text-2xl" style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>
//                         {count}
//                       </p>
//                       <p className="text-[10px]" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>listings</p>
//                       {isActive && (
//                         <div className="mt-2 flex items-center justify-end gap-1">
//                           <CheckCircle2 className="w-4 h-4" style={{ color: '#E63946' }} />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ═══════════════════════════════════════════════════════
//           SECTION B — STATUS TABS (Under Const / Ready / New)
//       ═══════════════════════════════════════════════════════ */}
//       <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex items-center gap-1 overflow-x-auto">
//             {STATUS_TABS.map(s => {
//               const isActive = statusTab === s.id
//               const cnt = statCount(s.id)
//               return (
//                 <button
//                   key={s.id}
//                   onClick={() => setStatusTab(s.id)}
//                   className="flex items-center gap-2 py-4 px-5 text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
//                   style={{ color: isActive ? '#E63946' : '#6B7280' }}
//                 >
//                   <span
//                     className="w-2 h-2 rounded-full shrink-0"
//                     style={{ background: isActive ? '#E63946' : s.dotColor }}
//                   />
//                   {s.label}
//                   <span
//                     className="text-xs px-2 py-0.5 rounded-full font-bold"
//                     style={{
//                       background: isActive ? '#FEE8EA' : '#F5F7FA',
//                       color: isActive ? '#E63946' : '#9CA3AF',
//                     }}
//                   >
//                     {cnt}
//                   </span>
//                   {/* Active underline */}
//                   {isActive && (
//                     <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />
//                   )}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ═══════════════════════════════════════════════════════
//           SECTION C — LISTING TYPE TOGGLE (Fresh / Resale)
//       ═══════════════════════════════════════════════════════ */}
//       <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
//           <div className="flex items-center justify-between gap-4 flex-wrap">

//             {/* Left — Fresh / Resale toggle */}
//             <div className="flex items-center gap-3">
//               <p className="text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#9CA3AF' }}>
//                 Listing Type:
//               </p>
//               <div className="flex rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2' }}>
//                 {/* All */}
//                 <button
//                   onClick={() => setListingType('all')}
//                   className="px-4 py-2 text-sm font-semibold transition-all"
//                   style={{
//                     background: listingType === 'all' ? '#0B1F3A' : '#FFFFFF',
//                     color: listingType === 'all' ? '#fff' : '#6B7280',
//                   }}
//                 >
//                   All ({typeCount('all')})
//                 </button>
//                 {/* Fresh */}
//                 <button
//                   onClick={() => setListingType('fresh')}
//                   className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all"
//                   style={{
//                     background: listingType === 'fresh' ? '#059669' : '#FFFFFF',
//                     color: listingType === 'fresh' ? '#fff' : '#6B7280',
//                     borderLeft: '1px solid #E8ECF2',
//                     borderRight: '1px solid #E8ECF2',
//                   }}
//                 >
//                   <Sparkles className="w-3.5 h-3.5" />
//                   Fresh
//                   <span
//                     className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
//                     style={{
//                       background: listingType === 'fresh' ? 'rgba(255,255,255,0.25)' : '#DCFCE7',
//                       color: listingType === 'fresh' ? '#fff' : '#059669',
//                     }}
//                   >
//                     {typeCount('fresh')}
//                   </span>
//                 </button>
//                 {/* Resale */}
//                 <button
//                   onClick={() => setListingType('resale')}
//                   className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all"
//                   style={{
//                     background: listingType === 'resale' ? '#2563EB' : '#FFFFFF',
//                     color: listingType === 'resale' ? '#fff' : '#6B7280',
//                   }}
//                 >
//                   <RefreshCw className="w-3.5 h-3.5" />
//                   Resale
//                   <span
//                     className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
//                     style={{
//                       background: listingType === 'resale' ? 'rgba(255,255,255,0.25)' : '#EFF6FF',
//                       color: listingType === 'resale' ? '#fff' : '#2563EB',
//                     }}
//                   >
//                     {typeCount('resale')}
//                   </span>
//                 </button>
//               </div>
//             </div>

//             {/* Right — Info chip */}
//             <div className="flex items-center gap-2">
//               <div
//                 className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
//                 style={{ background: '#FEE8EA', color: '#E63946' }}
//               >
//                 <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//                 {activeCat.label} · {filtered.length} results
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ─── Main Body ─────────────────────────────────────── */}
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8">
//         <div className="flex gap-6">

//           {/* Sidebar — desktop */}
//           <div className="hidden lg:block w-60 shrink-0">
//             <div className="sticky top-24 space-y-4">
//               {/* Budget */}
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button
//                   onClick={() => setOpenBudget(!openBudget)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openBudget ? '1px solid #E8ECF2' : 'none' }}
//                 >
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
//                         style={{
//                           background: budgetIdx === i ? '#E63946' : 'transparent',
//                           color: budgetIdx === i ? '#fff' : '#1A1A1A',
//                           fontWeight: budgetIdx === i ? 600 : 400,
//                         }}>
//                         {b.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Location */}
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button
//                   onClick={() => setOpenLoc(!openLoc)}
//                   className="w-full flex items-center justify-between px-5 py-4"
//                   style={{ borderBottom: openLoc ? '1px solid #E8ECF2' : 'none' }}
//                 >
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4" style={{ color: '#E63946' }} />
//                     <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Location</span>
//                   </div>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openLoc ? 'rotate-180' : ''}`} style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openLoc && (
//                   <div className="p-3 flex flex-col gap-1">
//                     <button onClick={() => setLocation('all')}
//                       className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                       style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A', fontWeight: location === 'all' ? 600 : 400 }}>
//                       All Locations
//                     </button>
//                     {LOCATIONS.map(l => (
//                       <button key={l} onClick={() => setLocation(l)}
//                         className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A', fontWeight: location === l ? 600 : 400 }}>
//                         {l}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Quick Reset */}
//               {(budgetIdx > 0 || location !== 'all') && (
//                 <button
//                   onClick={() => { setBudgetIdx(0); setLocation('all') }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
//                   style={{ background: '#E63946' }}
//                 >
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Grid */}
//           <div className="flex-1 min-w-0">
//             {/* Top bar */}
//             <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
//               {/* Search */}
//               <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl flex-1 min-w-0 max-w-sm"
//                 style={{ background: '#FFFFFF', border: '1px solid #E8ECF2' }}>
//                 <Search className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <input
//                   type="text"
//                   placeholder={`Search ${activeCat.label}...`}
//                   value={search}
//                   onChange={e => setSearch(e.target.value)}
//                   className="w-full bg-transparent text-sm focus:outline-none"
//                   style={{ color: '#1A1A1A' }}
//                 />
//                 {search && <button onClick={() => setSearch('')}><X className="w-3.5 h-3.5" style={{ color: '#9CA3AF' }} /></button>}
//               </div>

//               <div className="flex items-center gap-2">
//                 {/* Mobile filter btn */}
//                 <button onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
//                   <SlidersHorizontal className="w-4 h-4" style={{ color: '#E63946' }} /> Filters
//                 </button>

//                 {/* Sort */}
//                 <select value={sortBy} onChange={e => setSortBy(e.target.value)}
//                   className="text-sm px-3 py-2.5 rounded-xl focus:outline-none"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                   <option value="featured">Featured</option>
//                   <option value="price-asc">Price ↑</option>
//                   <option value="price-desc">Price ↓</option>
//                 </select>

//                 {/* View toggle */}
//                 <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                   <button onClick={() => setViewMode('grid')} className="p-2.5 transition-colors"
//                     style={{ background: viewMode === 'grid' ? '#0B1F3A' : '#fff', color: viewMode === 'grid' ? '#fff' : '#9CA3AF' }}>
//                     <Grid3x3 className="w-4 h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')} className="p-2.5 transition-colors"
//                     style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}>
//                     <List className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Result count chip */}
//             <div className="flex items-center gap-2 mb-5">
//               <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
//               <p className="text-sm" style={{ color: '#6B7280' }}>
//                 Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> {activeCat.label.toLowerCase()} properties
//                 {statusTab !== 'all' && <> · <span style={{ color: STATUS_TABS.find(s => s.id === statusTab)?.dotColor }}>{STATUS_TABS.find(s => s.id === statusTab)?.label}</span></>}
//                 {listingType !== 'all' && <> · <span style={{ color: listingType === 'fresh' ? '#059669' : '#2563EB' }}>{listingType === 'fresh' ? 'Fresh' : 'Resale'}</span></>}
//               </p>
//             </div>

//             {/* Cards */}
//             {filtered.length === 0 ? (
//               <div className="text-center py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                 <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//                   style={{ background: '#F5F7FA' }}>
//                   <Search className="w-7 h-7" style={{ color: '#9CA3AF' }} />
//                 </div>
//                 <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>
//                   No {activeCat.label} properties found
//                 </h3>
//                 <p className="text-sm mb-5" style={{ color: '#6B7280' }}>
//                   Try adjusting the filters above.
//                 </p>
//                 <button
//                   onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all') }}
//                   className="text-sm font-semibold px-6 py-3 rounded-xl text-white"
//                   style={{ background: '#E63946' }}>
//                   Clear Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={
//                 viewMode === 'grid'
//                   ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'
//                   : 'flex flex-col gap-4'
//               }>
//                 {filtered.map(p => (
//                   <PropertyCard key={p.id} property={p} view={viewMode} />
//                 ))}
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
//             <div className="flex items-center justify-between p-5 sticky top-0 bg-white z-10"
//               style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <span className="font-semibold" style={{ color: '#0B1F3A' }}>Filters</span>
//               <button onClick={() => setShowFilters(false)}>
//                 <X className="w-5 h-5" style={{ color: '#0B1F3A' }} />
//               </button>
//             </div>
//             {/* Budget */}
//             <div className="p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Budget</p>
//               <div className="flex flex-col gap-1">
//                 {BUDGETS.map((b, i) => (
//                   <button key={b.label} onClick={() => setBudgetIdx(i)}
//                     className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: budgetIdx === i ? '#E63946' : 'transparent', color: budgetIdx === i ? '#fff' : '#1A1A1A' }}>
//                     {b.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {/* Location */}
//             <div className="p-5">
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Location</p>
//               <div className="flex flex-col gap-1">
//                 <button onClick={() => setLocation('all')}
//                   className="text-left text-sm px-3 py-2 rounded-lg"
//                   style={{ background: location === 'all' ? '#E63946' : 'transparent', color: location === 'all' ? '#fff' : '#1A1A1A' }}>
//                   All Locations
//                 </button>
//                 {LOCATIONS.map(l => (
//                   <button key={l} onClick={() => setLocation(l)}
//                     className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{ background: location === l ? '#E63946' : 'transparent', color: location === l ? '#fff' : '#1A1A1A' }}>
//                     {l}
//                   </button>
//                 ))}
//               </div>
//             </div>
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

// // Home page budget labels → BUDGETS index mapping
// const HOME_BUDGET_MAP: Record<string, number> = {
//   'Under ₹50 Lakh': 1,
//   '₹50L–₹1 Cr': 2,
//   '₹1–₂ Cr': 3,
//   '₹2–5 Cr': 4,
//   'Above ₹5 Cr': 5,
// }

// const LOCATIONS = [
//   'Gomti Nagar', 'Hazratganj', 'Shaheed Path', 'Aliganj',
//   'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
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
//       <Link href={`/properties/${property.id}`} className="group block">
//         <div className="bg-white rounded-2xl overflow-hidden flex transition-all duration-300 group-hover:shadow-lg"
//           style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 8px rgba(11,31,58,0.05)' }}>
//           <div className="relative shrink-0 w-48 h-36"
//             style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//             <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
//             {property.badge && <span className="absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10" style={{ background: '#E63946' }}>{property.badge}</span>}
//             <div className="absolute bottom-0 inset-x-0 p-3" style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
//               <p className="text-white font-serif font-bold">{property.price}</p>
//             </div>
//           </div>
//           <div className="flex-1 p-4 flex flex-col justify-between">
//             <div>
//               <div className="flex items-start justify-between gap-2 mb-1">
//                 <h3 className="font-serif font-semibold text-sm leading-tight" style={{ color: '#0B1F3A' }}>{property.title}</h3>
//                 <div className="flex gap-1 shrink-0">
//                   <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>{stCfg.shortLabel}</span>
//                   <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: ltype === 'fresh' ? '#DCFCE7' : '#EFF6FF', color: ltype === 'fresh' ? '#059669' : '#2563EB' }}>
//                     {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 text-xs mb-2" style={{ color: '#6B7280' }}>
//                 <MapPin className="w-3 h-3" style={{ color: '#E63946' }} />{property.location}
//               </div>
//               {property.bedrooms > 0 && (
//                 <div className="flex gap-3 text-xs" style={{ color: '#6B7280' }}>
//                   <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" />{property.area}</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-2 pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//               <span className="text-xs" style={{ color: '#6B7280' }}>{property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}</span>
//               <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>View Details <ArrowRight className="w-3.5 h-3.5" /></span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     )
//   }

//   return (
//     <Link href={`/properties/${property.id}`} className="group block h-full">
//       <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
//         style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="relative overflow-hidden shrink-0" style={{ height: '195px', background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//           <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
//           <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//             {property.badge && <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#E63946' }}>{property.badge}</span>}
//           </div>
//           <div className="absolute top-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//               <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: stCfg.dotColor }} />{stCfg.shortLabel}
//             </span>
//           </div>
//           <div className="absolute bottom-3 right-3 z-10">
//             <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white" style={{ background: ltype === 'fresh' ? 'rgba(5,150,105,0.90)' : 'rgba(37,99,235,0.90)' }}>
//               {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//             </span>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)' }}>
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{property.category} · {property.area}</p>
//           </div>
//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'rgba(230,57,70,0.08)' }} />
//         </div>
//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2" style={{ color: '#0B1F3A' }}>{property.title}</h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} /><span className="truncate">{property.location}</span>
//           </div>
//           {property.bedrooms > 0 && (
//             <div className="flex gap-3 text-xs pb-3 mb-3" style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
//               <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds</span>
//               <span className="flex items-center gap-1"><Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths</span>
//               <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}</span>
//             </div>
//           )}
//           <div className="flex flex-wrap gap-1 flex-1 mb-3">
//             {property.amenities.slice(0, 2).map(a => <span key={a} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>)}
//             {property.amenities.length > 2 && <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: '#FEE8EA', color: '#E63946' }}>+{property.amenities.length - 2}</span>}
//           </div>
//           <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//             <span className="text-[10px]" style={{ color: '#6B7280' }}>{property.developer ? `🏗 ${property.developer}` : property.ownerName ? `👤 Owner` : property.category}</span>
//             <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>View <ArrowRight className="w-3.5 h-3.5" /></span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─── Main Page ───────────────────────────────────────────────────────────────

// export default function PropertiesClient() {
//   const searchParams = useSearchParams()   // ← READ URL PARAMS

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

//   // ── Apply URL params from hero search on page load ──
//   useEffect(() => {
//     const loc = searchParams.get('location')
//     const budget = searchParams.get('budget')
//     const type = searchParams.get('type')

//     if (loc && LOCATIONS.includes(loc)) setLocation(loc)

//     if (budget) {
//       const idx = HOME_BUDGET_MAP[budget]
//       if (idx !== undefined) setBudgetIdx(idx)
//     }

//     if (type) setSearch(type)
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
//       r = r.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.developer ?? '').toLowerCase().includes(q))
//     }
//     if (budgetIdx > 0) {
//       const { min, max } = BUDGETS[budgetIdx]
//       r = r.filter(p => p.priceValue >= min && p.priceValue <= max)
//     }
//     if (location !== 'all') r = r.filter(p => p.location.includes(location))
//     if (sortBy === 'price-asc') r.sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') r.sort((a, b) => b.priceValue - a.priceValue)
//     else r.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//     return r
//   }, [category, statusTab, listingType, search, budgetIdx, location, sortBy])

//   const baseForCat = properties.filter(p => getCategory(p) === category)
//   const statCount = (s: StatusTab) => s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
//   const typeCount = (t: ListingType) => t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length
//   const activeCat = CATEGORIES.find(c => c.id === category)!

//   return (
//     <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

//       {/* SECTION A — CATEGORY */}
//       <div style={{ background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)' }} className="pt-20">
//         <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-0">
//           <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#E63946' }}>Browse Properties</p>
//           <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">Find Your Property</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-0">
//             {CATEGORIES.map(cat => {
//               const Icon = cat.icon
//               const isActive = category === cat.id
//               const count = catCounts[cat.id]
//               return (
//                 <button key={cat.id}
//                   onClick={() => { setCategory(cat.id); setStatusTab('all'); setListingType('all') }}
//                   className="relative rounded-t-2xl overflow-hidden text-left transition-all duration-300"
//                   style={{
//                     background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
//                     border: `2px solid ${isActive ? '#E63946' : 'rgba(255,255,255,0.10)'}`,
//                     borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
//                     transform: isActive ? 'translateY(2px)' : 'translateY(0)',
//                     boxShadow: isActive ? '0 -4px 24px rgba(230,57,70,0.20)' : 'none',
//                     padding: '20px 24px 22px',
//                   }}>
//                   {isActive && <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#E63946' }} />}
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: isActive ? '#FEE8EA' : 'rgba(255,255,255,0.12)' }}>
//                         <Icon className="w-5 h-5" style={{ color: isActive ? '#E63946' : '#fff' }} />
//                       </div>
//                       <p className="font-serif font-bold text-lg leading-none mb-1" style={{ color: isActive ? '#0B1F3A' : '#fff' }}>{cat.label}</p>
//                       <p className="text-xs" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>{cat.sub}</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-serif font-bold text-2xl" style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>{count}</p>
//                       <p className="text-[10px]" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>listings</p>
//                       {isActive && <div className="mt-2 flex items-center justify-end"><CheckCircle2 className="w-4 h-4" style={{ color: '#E63946' }} /></div>}
//                     </div>
//                   </div>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* SECTION B — STATUS TABS */}
//       <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex items-center gap-1 overflow-x-auto">
//             {STATUS_TABS.map(s => {
//               const isActive = statusTab === s.id
//               return (
//                 <button key={s.id} onClick={() => setStatusTab(s.id)}
//                   className="flex items-center gap-2 py-4 px-5 text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
//                   style={{ color: isActive ? '#E63946' : '#6B7280' }}>
//                   <span className="w-2 h-2 rounded-full shrink-0" style={{ background: isActive ? '#E63946' : s.dotColor }} />
//                   {s.label}
//                   <span className="text-xs px-2 py-0.5 rounded-full font-bold"
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

//       {/* SECTION C — LISTING TYPE */}
//       <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
//           <div className="flex items-center justify-between gap-4 flex-wrap">
//             <div className="flex items-center gap-3">
//               <p className="text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#9CA3AF' }}>Listing Type:</p>
//               <div className="flex rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2' }}>
//                 <button onClick={() => setListingType('all')} className="px-4 py-2 text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'all' ? '#0B1F3A' : '#FFFFFF', color: listingType === 'all' ? '#fff' : '#6B7280' }}>
//                   All ({typeCount('all')})
//                 </button>
//                 <button onClick={() => setListingType('fresh')} className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'fresh' ? '#059669' : '#FFFFFF', color: listingType === 'fresh' ? '#fff' : '#6B7280', borderLeft: '1px solid #E8ECF2', borderRight: '1px solid #E8ECF2' }}>
//                   <Sparkles className="w-3.5 h-3.5" />Fresh
//                   <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'fresh' ? 'rgba(255,255,255,0.25)' : '#DCFCE7', color: listingType === 'fresh' ? '#fff' : '#059669' }}>
//                     {typeCount('fresh')}
//                   </span>
//                 </button>
//                 <button onClick={() => setListingType('resale')} className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'resale' ? '#2563EB' : '#FFFFFF', color: listingType === 'resale' ? '#fff' : '#6B7280' }}>
//                   <RefreshCw className="w-3.5 h-3.5" />Resale
//                   <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
//                     style={{ background: listingType === 'resale' ? 'rgba(255,255,255,0.25)' : '#EFF6FF', color: listingType === 'resale' ? '#fff' : '#2563EB' }}>
//                     {typeCount('resale')}
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
//               style={{ background: '#FEE8EA', color: '#E63946' }}>
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//               {activeCat.label} · {filtered.length} results
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN BODY */}
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8">
//         <div className="flex gap-6">

//           {/* Sidebar */}
//           <div className="hidden lg:block w-60 shrink-0">
//             <div className="sticky top-24 space-y-4">
//               <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                 <button onClick={() => setOpenBudget(!openBudget)} className="w-full flex items-center justify-between px-5 py-4"
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
//                 <button onClick={() => setOpenLoc(!openLoc)} className="w-full flex items-center justify-between px-5 py-4"
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
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white"
//                   style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Grid */}
//           <div className="flex-1 min-w-0">
//             <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
//               <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl flex-1 min-w-0 max-w-sm"
//                 style={{ background: '#FFFFFF', border: '1px solid #E8ECF2' }}>
//                 <Search className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <input type="text" placeholder={`Search ${activeCat.label}...`}
//                   value={search} onChange={e => setSearch(e.target.value)}
//                   className="w-full bg-transparent text-sm focus:outline-none" style={{ color: '#1A1A1A' }} />
//                 {search && <button onClick={() => setSearch('')}><X className="w-3.5 h-3.5" style={{ color: '#9CA3AF' }} /></button>}
//               </div>
//               <div className="flex items-center gap-2">
//                 <button onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
//                   <SlidersHorizontal className="w-4 h-4" style={{ color: '#E63946' }} /> Filters
//                 </button>
//                 <select value={sortBy} onChange={e => setSortBy(e.target.value)}
//                   className="text-sm px-3 py-2.5 rounded-xl focus:outline-none"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                   <option value="featured">Featured</option>
//                   <option value="price-asc">Price ↑</option>
//                   <option value="price-desc">Price ↓</option>
//                 </select>
//                 <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                   <button onClick={() => setViewMode('grid')} className="p-2.5 transition-colors"
//                     style={{ background: viewMode === 'grid' ? '#0B1F3A' : '#fff', color: viewMode === 'grid' ? '#fff' : '#9CA3AF' }}>
//                     <Grid3x3 className="w-4 h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')} className="p-2.5 transition-colors"
//                     style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}>
//                     <List className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 mb-5">
//               <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
//               <p className="text-sm" style={{ color: '#6B7280' }}>
//                 Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span> {activeCat.label.toLowerCase()} properties
//                 {statusTab !== 'all' && <> · <span style={{ color: STATUS_TABS.find(s => s.id === statusTab)?.dotColor }}>{STATUS_TABS.find(s => s.id === statusTab)?.label}</span></>}
//                 {listingType !== 'all' && <> · <span style={{ color: listingType === 'fresh' ? '#059669' : '#2563EB' }}>{listingType === 'fresh' ? 'Fresh' : 'Resale'}</span></>}
//               </p>
//             </div>

//             {filtered.length === 0 ? (
//               <div className="text-center py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                 <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#F5F7FA' }}>
//                   <Search className="w-7 h-7" style={{ color: '#9CA3AF' }} />
//                 </div>
//                 <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>No {activeCat.label} properties found</h3>
//                 <p className="text-sm mb-5" style={{ color: '#6B7280' }}>Try adjusting the filters above.</p>
//                 <button onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all') }}
//                   className="text-sm font-semibold px-6 py-3 rounded-xl text-white" style={{ background: '#E63946' }}>
//                   Clear Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5' : 'flex flex-col gap-4'}>
//                 {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode} />)}
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
//             <div className="flex items-center justify-between p-5 sticky top-0 bg-white z-10" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <span className="font-semibold" style={{ color: '#0B1F3A' }}>Filters</span>
//               <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" style={{ color: '#0B1F3A' }} /></button>
//             </div>
//             <div className="p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
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
//             <div className="p-5">
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

// // Home page budget labels → BUDGETS index mapping
// const HOME_BUDGET_MAP: Record<string, number> = {
//   'Under ₹50 Lakh': 1,
//   '₹50L–₹1 Cr': 2,
//   '₹1–₂ Cr': 3,
//   '₹2–5 Cr': 4,
//   'Above ₹5 Cr': 5,
// }

// // ── Add your locations here ──
// const LOCATIONS = [
//   'Vrindavan Yojna',
//   'Shaheed Path',
//   'Gomti Nagar',
//   'Hazratganj',
//   'Aliganj',
//   'Sultanpur Road',
//   'Vibhuti Khand',
//   'Kanpur Road',
//   'Indira Nagar',
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
//         <div className="bg-white rounded-2xl overflow-hidden flex transition-all duration-300 group-hover:shadow-lg"
//           style={{ border: '1px solid #E8ECF2', boxShadow: '0 1px 8px rgba(11,31,58,0.05)' }}>
//           <div className="relative shrink-0 w-48 h-36"
//             style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//             <div className="absolute inset-0 opacity-[0.08]"
//               style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
//             {property.badge && (
//               <span className="absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10"
//                 style={{ background: '#E63946' }}>
//                 {property.badge}
//               </span>
//             )}
//             <div className="absolute bottom-0 inset-x-0 p-3"
//               style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
//               <p className="text-white font-serif font-bold">{property.price}</p>
//             </div>
//           </div>
//           <div className="flex-1 p-4 flex flex-col justify-between">
//             <div>
//               <div className="flex items-start justify-between gap-2 mb-1">
//                 <h3 className="font-serif font-semibold text-sm leading-tight" style={{ color: '#0B1F3A' }}>
//                   {property.title}
//                 </h3>
//                 <div className="flex gap-1 shrink-0">
//                   <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
//                     style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
//                     {stCfg.shortLabel}
//                   </span>
//                   <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
//                     style={{ background: ltype === 'fresh' ? '#DCFCE7' : '#EFF6FF', color: ltype === 'fresh' ? '#059669' : '#2563EB' }}>
//                     {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 text-xs mb-2" style={{ color: '#6B7280' }}>
//                 <MapPin className="w-3 h-3" style={{ color: '#E63946' }} />
//                 {property.location}
//               </div>
//               {property.bedrooms > 0 && (
//                 <div className="flex gap-3 text-xs" style={{ color: '#6B7280' }}>
//                   <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" />{property.area}</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-2 pt-2" style={{ borderTop: '1px solid #E8ECF2' }}>
//               <span className="text-xs" style={{ color: '#6B7280' }}>
//                 {property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}
//               </span>
//               <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E63946' }}>
//                 View Details <ArrowRight className="w-3.5 h-3.5" />
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
//         {/* <div className="relative overflow-hidden shrink-0"
//           style={{ height: '195px', background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
//           <div className="absolute inset-0 opacity-[0.08]"
//             style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
//           <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//             {property.badge && (
//               <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded"
//                 style={{ background: '#E63946' }}>
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
//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
//             style={{ background: 'rgba(230,57,70,0.08)' }} />
//         </div> */}

//         <div className="relative overflow-hidden shrink-0 h-[195px]">

//           {/* ✅ CONDITION */}
//           {property.mainImage ? (
//             <img
//               src={property.mainImage}
//               alt={property.title}
//               className="w-full h-full object-cover object-top"
//             />
//           ) : (
//             <div
//               className="w-full h-full"
//               style={{
//                 background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})`,
//               }}
//             />
//           )}

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

//           {/* Badge */}
//           <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//             {property.badge && (
//               <span
//                 className="text-white text-[10px] font-bold px-2.5 py-1 rounded"
//                 style={{ background: '#E63946' }}
//               >
//                 {property.badge}
//               </span>
//             )}
//           </div>

//           {/* Status */}
//           <div className="absolute top-3 right-3 z-10">
//             <span
//               className="text-[10px] font-bold px-2.5 py-1 rounded-full"
//               style={{ background: stCfg.tagBg, color: stCfg.dotColor }}
//             >
//               <span
//                 className="inline-block w-1.5 h-1.5 rounded-full mr-1"
//                 style={{ background: stCfg.dotColor }}
//               />
//               {stCfg.shortLabel}
//             </span>
//           </div>

//           {/* Fresh / Resale */}
//           <div className="absolute bottom-3 right-3 z-10">
//             <span
//               className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
//               style={{
//                 background:
//                   ltype === 'fresh'
//                     ? 'rgba(5,150,105,0.90)'
//                     : 'rgba(37,99,235,0.90)',
//               }}
//             >
//               {ltype === 'fresh' ? '✦ Fresh' : '↻ Resale'}
//             </span>
//           </div>

//           {/* Price */}
//           <div
//             className="absolute bottom-0 left-0 right-0 p-4"
//             style={{
//               background: 'linear-gradient(to top, rgba(11,31,58,0.88), transparent)',
//             }}
//           >
//             <p className="text-white font-serif text-xl font-bold">
//               {property.price}
//             </p>
//             <p
//               className="text-xs mt-0.5"
//               style={{ color: 'rgba(255,255,255,0.65)' }}
//             >
//               {property.category} · {property.area}
//             </p>
//           </div>

//         </div>
//         <div className="p-4 flex flex-col flex-1">
//           <h3 className="font-serif font-semibold text-sm leading-snug mb-1.5 line-clamp-2"
//             style={{ color: '#0B1F3A' }}>
//             {property.title}
//           </h3>
//           <div className="flex items-center gap-1 text-xs mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3 h-3 shrink-0" style={{ color: '#E63946' }} />
//             <span className="truncate">{property.location}</span>
//           </div>
//           {property.bedrooms > 0 && (
//             <div className="flex gap-3 text-xs pb-3 mb-3"
//               style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
//               <span className="flex items-center gap-1">
//                 <BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds
//               </span>
//               <span className="flex items-center gap-1">
//                 <Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths
//               </span>
//               <span className="flex items-center gap-1">
//                 <Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}
//               </span>
//             </div>
//           )}
//           <div className="flex flex-wrap gap-1 flex-1 mb-3">
//             {property.amenities.slice(0, 2).map(a => (
//               <span key={a} className="text-[10px] px-2 py-0.5 rounded-full"
//                 style={{ background: '#F5F7FA', color: '#6B7280' }}>
//                 {a}
//               </span>
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
//               {property.developer
//                 ? `🏗 ${property.developer}`
//                 : property.ownerName
//                   ? `👤 Owner`
//                   : property.category}
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

//   // ── Apply URL params from hero search on page load ──
//   useEffect(() => {
//     const loc = searchParams.get('location')
//     const budget = searchParams.get('budget')
//     const type = searchParams.get('type')

//     const status = searchParams.get('status')


//     if (loc && LOCATIONS.includes(loc)) setLocation(loc)
//     if (budget) {
//       const idx = HOME_BUDGET_MAP[budget]
//       if (idx !== undefined) setBudgetIdx(idx)
//     }
//     if (type) setSearch(type)
//     const validStatuses: StatusTab[] = ['under-construction', 'ready-to-move', 'recently-launched']
//     if (status && validStatuses.includes(status as StatusTab)) {
//       setStatusTab(status as StatusTab)
//     }
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
//       r = r.filter(p =>
//         p.title.toLowerCase().includes(q) ||
//         p.location.toLowerCase().includes(q) ||
//         (p.developer ?? '').toLowerCase().includes(q) ||
//         (p.badge ?? '').toLowerCase().includes(q)
//       )
//     }
//     if (budgetIdx > 0) {
//       const { min, max } = BUDGETS[budgetIdx]
//       r = r.filter(p => p.priceValue >= min && p.priceValue <= max)
//     }
//     if (location !== 'all') r = r.filter(p => p.location.includes(location))
//     if (sortBy === 'price-asc') r = [...r].sort((a, b) => a.priceValue - b.priceValue)
//     else if (sortBy === 'price-desc') r = [...r].sort((a, b) => b.priceValue - a.priceValue)
//     else r = [...r].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//     return r
//   }, [category, statusTab, listingType, search, budgetIdx, location, sortBy])

//   const baseForCat = properties.filter(p => getCategory(p) === category)
//   const statCount = (s: StatusTab) =>
//     s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
//   const typeCount = (t: ListingType) =>
//     t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length
//   const activeCat = CATEGORIES.find(c => c.id === category)!

//   return (
//     <div className="min-h-screen" style={{ background: '#F5F7FA' }}>

//       {/* SECTION A — CATEGORY */}
//       <div style={{ background: 'linear-gradient(135deg, #1E3A5F, #2C4A73)' }} className="pt-20 relative">
//         <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
//           style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-0">
//           <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#E63946' }}>
//             Browse Properties
//           </p>
//           <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">Find Your Property</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-0">
//             {CATEGORIES.map(cat => {
//               const Icon = cat.icon
//               const isActive = category === cat.id
//               const count = catCounts[cat.id]
//               return (
//                 <button key={cat.id}
//                   onClick={() => { setCategory(cat.id); setStatusTab('all'); setListingType('all') }}
//                   className="relative rounded-t-2xl overflow-hidden text-left transition-all duration-300"
//                   style={{
//                     background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
//                     border: `2px solid ${isActive ? '#E63946' : 'rgba(255,255,255,0.10)'}`,
//                     borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
//                     transform: isActive ? 'translateY(2px)' : 'translateY(0)',
//                     boxShadow: isActive ? '0 -4px 24px rgba(230,57,70,0.20)' : 'none',
//                     padding: '20px 24px 22px',
//                   }}>
//                   {isActive && (
//                     <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#E63946' }} />
//                   )}
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
//                         style={{ background: isActive ? '#FEE8EA' : 'rgba(255,255,255,0.12)' }}>
//                         <Icon className="w-5 h-5" style={{ color: isActive ? '#E63946' : '#fff' }} />
//                       </div>
//                       <p className="font-serif font-bold text-lg leading-none mb-1"
//                         style={{ color: isActive ? '#0B1F3A' : '#fff' }}>
//                         {cat.label}
//                       </p>
//                       <p className="text-xs"
//                         style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>
//                         {cat.sub}
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-serif font-bold text-2xl"
//                         style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>
//                         {count}
//                       </p>
//                       <p className="text-[10px]"
//                         style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>
//                         listings
//                       </p>
//                       {isActive && (
//                         <div className="mt-2 flex items-center justify-end">
//                           <CheckCircle2 className="w-4 h-4" style={{ color: '#E63946' }} />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* SECTION B — STATUS TABS */}
//       <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8ECF2', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex items-center gap-1 overflow-x-auto">
//             {STATUS_TABS.map(s => {
//               const isActive = statusTab === s.id
//               return (
//                 <button key={s.id} onClick={() => setStatusTab(s.id)}
//                   className="flex items-center gap-2 py-4 px-5 text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
//                   style={{ color: isActive ? '#E63946' : '#6B7280' }}>
//                   <span className="w-2 h-2 rounded-full shrink-0"
//                     style={{ background: isActive ? '#E63946' : s.dotColor }} />
//                   {s.label}
//                   <span className="text-xs px-2 py-0.5 rounded-full font-bold"
//                     style={{ background: isActive ? '#FEE8EA' : '#F5F7FA', color: isActive ? '#E63946' : '#9CA3AF' }}>
//                     {statCount(s.id)}
//                   </span>
//                   {isActive && (
//                     <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#E63946' }} />
//                   )}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* SECTION C — LISTING TYPE */}
//       <div style={{ background: '#FFFFFF', borderBottom: '2px solid #E8ECF2' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
//           <div className="flex items-center justify-between gap-4 flex-wrap">
//             <div className="flex items-center gap-3">
//               <p className="text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#9CA3AF' }}>
//                 Listing Type:
//               </p>
//               <div className="flex rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8ECF2' }}>
//                 <button onClick={() => setListingType('all')}
//                   className="px-4 py-2 text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'all' ? '#0B1F3A' : '#FFFFFF', color: listingType === 'all' ? '#fff' : '#6B7280' }}>
//                   All ({typeCount('all')})
//                 </button>
//                 <button onClick={() => setListingType('fresh')}
//                   className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all"
//                   style={{
//                     background: listingType === 'fresh' ? '#059669' : '#FFFFFF',
//                     color: listingType === 'fresh' ? '#fff' : '#6B7280',
//                     borderLeft: '1px solid #E8ECF2', borderRight: '1px solid #E8ECF2',
//                   }}>
//                   <Sparkles className="w-3.5 h-3.5" />Fresh
//                   <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
//                     style={{
//                       background: listingType === 'fresh' ? 'rgba(255,255,255,0.25)' : '#DCFCE7',
//                       color: listingType === 'fresh' ? '#fff' : '#059669',
//                     }}>
//                     {typeCount('fresh')}
//                   </span>
//                 </button>
//                 <button onClick={() => setListingType('resale')}
//                   className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all"
//                   style={{ background: listingType === 'resale' ? '#2563EB' : '#FFFFFF', color: listingType === 'resale' ? '#fff' : '#6B7280' }}>
//                   <RefreshCw className="w-3.5 h-3.5" />Resale
//                   <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
//                     style={{
//                       background: listingType === 'resale' ? 'rgba(255,255,255,0.25)' : '#EFF6FF',
//                       color: listingType === 'resale' ? '#fff' : '#2563EB',
//                     }}>
//                     {typeCount('resale')}
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
//               style={{ background: '#FEE8EA', color: '#E63946' }}>
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E63946' }} />
//               {activeCat.label} · {filtered.length} results
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN BODY */}
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8">
//         <div className="flex gap-6">

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
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openBudget ? 'rotate-180' : ''}`}
//                     style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openBudget && (
//                   <div className="p-3 flex flex-col gap-1">
//                     {BUDGETS.map((b, i) => (
//                       <button key={b.label} onClick={() => setBudgetIdx(i)}
//                         className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{
//                           background: budgetIdx === i ? '#E63946' : 'transparent',
//                           color: budgetIdx === i ? '#fff' : '#1A1A1A',
//                           fontWeight: budgetIdx === i ? 600 : 400,
//                         }}>
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
//                   <ChevronDown className={`w-4 h-4 transition-transform ${openLoc ? 'rotate-180' : ''}`}
//                     style={{ color: '#9CA3AF' }} />
//                 </button>
//                 {openLoc && (
//                   <div className="p-3 flex flex-col gap-1">
//                     <button onClick={() => setLocation('all')}
//                       className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                       style={{
//                         background: location === 'all' ? '#E63946' : 'transparent',
//                         color: location === 'all' ? '#fff' : '#1A1A1A',
//                         fontWeight: location === 'all' ? 600 : 400,
//                       }}>
//                       All Locations
//                     </button>
//                     {LOCATIONS.map(l => (
//                       <button key={l} onClick={() => setLocation(l)}
//                         className="text-left text-sm px-3 py-2 rounded-lg transition-all"
//                         style={{
//                           background: location === l ? '#E63946' : 'transparent',
//                           color: location === l ? '#fff' : '#1A1A1A',
//                           fontWeight: location === l ? 600 : 400,
//                         }}>
//                         {l}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {(budgetIdx > 0 || location !== 'all') && (
//                 <button onClick={() => { setBudgetIdx(0); setLocation('all') }}
//                   className="w-full py-2.5 rounded-xl text-sm font-semibold text-white"
//                   style={{ background: '#E63946' }}>
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Grid */}
//           <div className="flex-1 min-w-0">
//             <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
//               <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl flex-1 min-w-0 max-w-sm"
//                 style={{ background: '#FFFFFF', border: '1px solid #E8ECF2' }}>
//                 <Search className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
//                 <input
//                   type="text"
//                   placeholder={`Search ${activeCat.label}...`}
//                   value={search}
//                   onChange={e => setSearch(e.target.value)}
//                   className="w-full bg-transparent text-sm focus:outline-none"
//                   style={{ color: '#1A1A1A' }}
//                 />
//                 {search && (
//                   <button onClick={() => setSearch('')}>
//                     <X className="w-3.5 h-3.5" style={{ color: '#9CA3AF' }} />
//                   </button>
//                 )}
//               </div>
//               <div className="flex items-center gap-2">
//                 <button onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
//                   <SlidersHorizontal className="w-4 h-4" style={{ color: '#E63946' }} /> Filters
//                 </button>
//                 <select value={sortBy} onChange={e => setSortBy(e.target.value)}
//                   className="text-sm px-3 py-2.5 rounded-xl focus:outline-none"
//                   style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
//                   <option value="featured">Featured</option>
//                   <option value="price-asc">Price ↑</option>
//                   <option value="price-desc">Price ↓</option>
//                 </select>
//                 <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
//                   <button onClick={() => setViewMode('grid')} className="p-2.5 transition-colors"
//                     style={{ background: viewMode === 'grid' ? '#0B1F3A' : '#fff', color: viewMode === 'grid' ? '#fff' : '#9CA3AF' }}>
//                     <Grid3x3 className="w-4 h-4" />
//                   </button>
//                   <button onClick={() => setViewMode('list')} className="p-2.5 transition-colors"
//                     style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}>
//                     <List className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 mb-5">
//               <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
//               <p className="text-sm" style={{ color: '#6B7280' }}>
//                 Showing{' '}
//                 <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span>{' '}
//                 {activeCat.label.toLowerCase()} properties
//                 {statusTab !== 'all' && (
//                   <> · <span style={{ color: STATUS_TABS.find(s => s.id === statusTab)?.dotColor }}>
//                     {STATUS_TABS.find(s => s.id === statusTab)?.label}
//                   </span></>
//                 )}
//                 {listingType !== 'all' && (
//                   <> · <span style={{ color: listingType === 'fresh' ? '#059669' : '#2563EB' }}>
//                     {listingType === 'fresh' ? 'Fresh' : 'Resale'}
//                   </span></>
//                 )}
//               </p>
//             </div>

//             {filtered.length === 0 ? (
//               <div className="text-center py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
//                 <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//                   style={{ background: '#F5F7FA' }}>
//                   <Search className="w-7 h-7" style={{ color: '#9CA3AF' }} />
//                 </div>
//                 <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>
//                   No {activeCat.label} properties found
//                 </h3>
//                 <p className="text-sm mb-5" style={{ color: '#6B7280' }}>Try adjusting the filters above.</p>
//                 <button
//                   onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all') }}
//                   className="text-sm font-semibold px-6 py-3 rounded-xl text-white"
//                   style={{ background: '#E63946' }}>
//                   Clear Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={viewMode === 'grid'
//                 ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'
//                 : 'flex flex-col gap-4'}>
//                 {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode} />)}
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
//             <div className="flex items-center justify-between p-5 sticky top-0 bg-white z-10"
//               style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <span className="font-semibold" style={{ color: '#0B1F3A' }}>Filters</span>
//               <button onClick={() => setShowFilters(false)}>
//                 <X className="w-5 h-5" style={{ color: '#0B1F3A' }} />
//               </button>
//             </div>
//             <div className="p-5" style={{ borderBottom: '1px solid #E8ECF2' }}>
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Budget</p>
//               <div className="flex flex-col gap-1">
//                 {BUDGETS.map((b, i) => (
//                   <button key={b.label} onClick={() => setBudgetIdx(i)}
//                     className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{
//                       background: budgetIdx === i ? '#E63946' : 'transparent',
//                       color: budgetIdx === i ? '#fff' : '#1A1A1A',
//                     }}>
//                     {b.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="p-5">
//               <p className="font-semibold text-sm mb-3" style={{ color: '#0B1F3A' }}>Location</p>
//               <div className="flex flex-col gap-1">
//                 <button onClick={() => setLocation('all')}
//                   className="text-left text-sm px-3 py-2 rounded-lg"
//                   style={{
//                     background: location === 'all' ? '#E63946' : 'transparent',
//                     color: location === 'all' ? '#fff' : '#1A1A1A',
//                   }}>
//                   All Locations
//                 </button>
//                 {LOCATIONS.map(l => (
//                   <button key={l} onClick={() => setLocation(l)}
//                     className="text-left text-sm px-3 py-2 rounded-lg"
//                     style={{
//                       background: location === l ? '#E63946' : 'transparent',
//                       color: location === l ? '#fff' : '#1A1A1A',
//                     }}>
//                     {l}
//                   </button>
//                 ))}
//               </div>
//             </div>
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
  ChevronDown, CheckCircle2, IndianRupee
} from 'lucide-react'
import { properties } from '@/lib/data'
import type { Property } from '@/lib/data'

type Category = 'residential' | 'commercial' | 'farmhouse'
type StatusTab = 'all' | 'under-construction' | 'ready-to-move' | 'recently-launched'
type ListingType = 'all' | 'fresh' | 'resale'

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
          {/* Thumbnail — compact on mobile */}
          <div className="relative shrink-0 w-28 h-28 sm:w-48 sm:h-36"
            style={{ background: `linear-gradient(135deg, ${property.gradientFrom}, ${property.gradientTo})` }}>
            <div className="absolute inset-0 opacity-[0.08]"
              style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            {property.badge && (
              <span className="absolute top-2 left-2 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded z-10"
                style={{ background: '#E63946' }}>
                {property.badge}
              </span>
            )}
            <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3"
              style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
              <p className="text-white font-serif font-bold text-xs sm:text-base">{property.price}</p>
            </div>
          </div>
          <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between min-w-0">
            <div>
              <div className="flex items-start justify-between gap-1 mb-1">
                <h3 className="font-serif font-semibold text-xs sm:text-sm leading-tight line-clamp-2"
                  style={{ color: '#0B1F3A' }}>
                  {property.title}
                </h3>
                <div className="flex gap-1 shrink-0">
                  <span className="text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full"
                    style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
                    {stCfg.shortLabel}
                  </span>
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
            <div className="flex items-center justify-between mt-1.5 pt-1.5 sm:mt-2 sm:pt-2"
              style={{ borderTop: '1px solid #E8ECF2' }}>
              <span className="text-[10px] sm:text-xs truncate" style={{ color: '#6B7280' }}>
                {property.developer ?? (property.ownerName ? `👤 ${property.ownerName}` : property.category)}
              </span>
              <span className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold shrink-0"
                style={{ color: '#E63946' }}>
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
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
              style={{ background: stCfg.tagBg, color: stCfg.dotColor }}>
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
            <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {property.category} · {property.area}
            </p>
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
            <div className="flex gap-3 text-xs pb-3 mb-3"
              style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}>
              <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bedrooms} Beds</span>
              <span className="flex items-center gap-1"><Bath className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.bathrooms} Baths</span>
              <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" style={{ color: '#0B1F3A' }} />{property.area}</span>
            </div>
          )}
          <div className="flex flex-wrap gap-1 flex-1 mb-3">
            {property.amenities.slice(0, 2).map(a => (
              <span key={a} className="text-[10px] px-2 py-0.5 rounded-full"
                style={{ background: '#F5F7FA', color: '#6B7280' }}>{a}</span>
            ))}
            {property.amenities.length > 2 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                style={{ background: '#FEE8EA', color: '#E63946' }}>
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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [openBudget, setOpenBudget] = useState(true)
  const [openLoc, setOpenLoc] = useState(true)

  useEffect(() => {
    const loc = searchParams.get('location')
    const budget = searchParams.get('budget')
    const type = searchParams.get('type')
    const status = searchParams.get('status')
    if (loc && LOCATIONS.includes(loc)) setLocation(loc)
    if (budget) { const idx = HOME_BUDGET_MAP[budget]; if (idx !== undefined) setBudgetIdx(idx) }
    if (type) setSearch(type)
    const validStatuses: StatusTab[] = ['under-construction', 'ready-to-move', 'recently-launched']
    if (status && validStatuses.includes(status as StatusTab)) setStatusTab(status as StatusTab)
  }, [searchParams])

  const catCounts = useMemo(() => ({
    residential: properties.filter(p => getCategory(p) === 'residential').length,
    commercial: properties.filter(p => getCategory(p) === 'commercial').length,
    farmhouse: properties.filter(p => getCategory(p) === 'farmhouse').length,
  }), [])

  const filtered = useMemo(() => {
    let r = properties.filter(p => getCategory(p) === category)
    if (statusTab !== 'all') r = r.filter(p => getStatus(p) === statusTab)
    if (listingType !== 'all') r = r.filter(p => getListingType(p) === listingType)
    if (search.trim()) {
      const q = search.toLowerCase()
      r = r.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || (p.developer ?? '').toLowerCase().includes(q) || (p.badge ?? '').toLowerCase().includes(q))
    }
    if (budgetIdx > 0) { const { min, max } = BUDGETS[budgetIdx]; r = r.filter(p => p.priceValue >= min && p.priceValue <= max) }
    if (location !== 'all') r = r.filter(p => p.location.includes(location))
    if (sortBy === 'price-asc') r = [...r].sort((a, b) => a.priceValue - b.priceValue)
    else if (sortBy === 'price-desc') r = [...r].sort((a, b) => b.priceValue - a.priceValue)
    else r = [...r].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    return r
  }, [category, statusTab, listingType, search, budgetIdx, location, sortBy])

  const baseForCat = properties.filter(p => getCategory(p) === category)
  const statCount = (s: StatusTab) => s === 'all' ? baseForCat.length : baseForCat.filter(p => getStatus(p) === s).length
  const typeCount = (t: ListingType) => t === 'all' ? baseForCat.length : baseForCat.filter(p => getListingType(p) === t).length
  const activeCat = CATEGORIES.find(c => c.id === category)!

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
          {/* 3 col always — compact on mobile */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {CATEGORIES.map(cat => {
              const Icon = cat.icon
              const isActive = category === cat.id
              return (
                <button key={cat.id}
                  onClick={() => { setCategory(cat.id); setStatusTab('all'); setListingType('all') }}
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
                    style={{ color: isActive ? '#0B1F3A' : '#fff' }}>
                    {cat.label}
                  </p>
                  <p className="hidden sm:block text-xs" style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>
                    {cat.sub}
                  </p>
                  <p className="font-serif font-bold text-base sm:text-2xl mt-1"
                    style={{ color: isActive ? '#E63946' : 'rgba(255,255,255,0.80)' }}>
                    {catCounts[cat.id]}
                  </p>
                  <p className="text-[9px] sm:text-[10px]"
                    style={{ color: isActive ? '#6B7280' : 'rgba(255,255,255,0.45)' }}>listings</p>
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
                  {/* Short label mobile, full label sm+ */}
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
              {activeCat.label} · {filtered.length}
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
                <input type="text" placeholder="Search..."
                  value={search} onChange={e => setSearch(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm focus:outline-none" style={{ color: '#1A1A1A' }} />
                {search && <button onClick={() => setSearch('')}><X className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9CA3AF' }} /></button>}
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium"
                  style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#0B1F3A' }}>
                  <SlidersHorizontal className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
                  <span className="hidden sm:inline">Filters</span>
                </button>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                  className="text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl focus:outline-none"
                  style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', color: '#1A1A1A' }}>
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price ↑</option>
                  <option value="price-desc">Price ↓</option>
                </select>
                <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid #E8ECF2' }}>
                  <button onClick={() => setViewMode('grid')} className="p-2 sm:p-2.5 transition-colors"
                    style={{ background: viewMode === 'grid' ? '#0B1F3A' : '#fff', color: viewMode === 'grid' ? '#fff' : '#9CA3AF' }}>
                    <Grid3x3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button onClick={() => setViewMode('list')} className="p-2 sm:p-2.5 transition-colors"
                    style={{ background: viewMode === 'list' ? '#0B1F3A' : '#fff', color: viewMode === 'list' ? '#fff' : '#9CA3AF' }}>
                    <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <div className="h-4 w-[3px] rounded-full" style={{ background: '#E63946' }} />
              <p className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>
                Showing <span className="font-bold" style={{ color: '#0B1F3A' }}>{filtered.length}</span>{' '}
                {activeCat.label.toLowerCase()} properties
                {statusTab !== 'all' && (
                  <> · <span style={{ color: STATUS_TABS.find(s => s.id === statusTab)?.dotColor }}>
                    {STATUS_TABS.find(s => s.id === statusTab)?.shortLabel}
                  </span></>
                )}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 sm:py-24 bg-white rounded-2xl" style={{ border: '1px solid #E8ECF2' }}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#F5F7FA' }}>
                  <Search className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#9CA3AF' }} />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2" style={{ color: '#0B1F3A' }}>
                  No {activeCat.label} properties found
                </h3>
                <p className="text-xs sm:text-sm mb-4 sm:mb-5" style={{ color: '#6B7280' }}>Try adjusting the filters above.</p>
                <button onClick={() => { setStatusTab('all'); setListingType('all'); setSearch(''); setBudgetIdx(0); setLocation('all') }}
                  className="text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white" style={{ background: '#E63946' }}>
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5'
                : 'flex flex-col gap-3 sm:gap-4'}>
                {filtered.map(p => <PropertyCard key={p.id} property={p} view={viewMode} />)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Mobile Filter Drawer ── */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-4 sm:p-5 sticky top-0 bg-white z-10"
              style={{ borderBottom: '1px solid #E8ECF2' }}>
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