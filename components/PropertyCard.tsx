// import Link from 'next/link'
// import { MapPin, BedDouble, Bath, Maximize2, ArrowRight, Star } from 'lucide-react'
// import type { Property } from '@/lib/data'

// interface PropertyCardProps {
//   property: Property
//   variant?: 'default' | 'compact' | 'featured'
// }

// export default function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
//   const isFeatured = variant === 'featured'

//   return (
//     <Link href={`/properties/${property.id}`} className="group block">
//       <div
//         className={`property-card bg-white rounded-2xl overflow-hidden shadow-card border border-stone-border/50 h-full flex flex-col ${
//           isFeatured ? 'shadow-card-hover' : ''
//         }`}
//       >
//         {/* Image / Gradient Placeholder */}
//         <div
//           className={`relative overflow-hidden ${isFeatured ? 'h-64' : 'h-52'}`}
//           style={{
//             background: `linear-gradient(135deg, ${property.gradientFrom} 0%, ${property.gradientTo} 100%)`,
//           }}
//         >
//           {/* Decorative pattern */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-4 left-4 w-32 h-32 rounded-full border-2 border-white" />
//             <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full border border-white" />
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/40" />
//           </div>

//           {/* Property type label */}
//           <div className="absolute top-4 left-4 flex gap-2 z-10">
//             {property.badge && (
//               <span className="badge-featured text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
//                 {property.badge}
//               </span>
//             )}
//             <span
//               className={`text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${
//                 property.type === 'rent'
//                   ? 'bg-blue-500/90 text-white'
//                   : property.type === 'project'
//                   ? 'bg-emerald-500/90 text-white'
//                   : 'bg-white/20 text-white border border-white/30'
//               }`}
//             >
//               {property.type === 'rent' ? 'For Rent' : property.type === 'project' ? 'New Project' : 'For Sale'}
//             </span>
//           </div>

//           {/* Status */}
//           <div className="absolute top-4 right-4 z-10">
//             <span
//               className={`text-xs font-medium px-2.5 py-1 rounded-full ${
//                 property.status === 'Ready to Move'
//                   ? 'bg-green-500/90 text-white'
//                   : property.status === 'New Launch'
//                   ? 'bg-amber-500/90 text-white'
//                   : 'bg-blue-500/90 text-white'
//               }`}
//             >
//               {property.status}
//             </span>
//           </div>

//           {/* Price overlay */}
//           <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-white/70 text-xs mt-0.5">
//               {property.category} · {property.area}
//             </p>
//           </div>

//           {/* Hover overlay */}
//           <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         </div>

//         {/* Content */}
//         <div className="p-5 flex-1 flex flex-col">
//           <h3 className="font-serif font-semibold text-charcoal text-lg leading-snug mb-2 group-hover:text-gold transition-colors line-clamp-2">
//             {property.title}
//           </h3>

//           <div className="flex items-center gap-1.5 text-charcoal-muted text-sm mb-4">
//             <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
//             <span className="truncate">{property.location}</span>
//           </div>

//           {/* Specs */}
//           {property.category !== 'Commercial' && property.category !== 'Plot' && (
//             <div className="flex items-center gap-4 text-sm text-charcoal-muted mb-4 pb-4 border-b border-stone-border">
//               {property.bedrooms > 0 && (
//                 <div className="flex items-center gap-1.5">
//                   <BedDouble className="w-4 h-4 text-gold" />
//                   <span>{property.bedrooms} Beds</span>
//                 </div>
//               )}
//               <div className="flex items-center gap-1.5">
//                 <Bath className="w-4 h-4 text-gold" />
//                 <span>{property.bathrooms} Baths</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Maximize2 className="w-4 h-4 text-gold" />
//                 <span>{property.area}</span>
//               </div>
//             </div>
//           )}

//           {/* Amenities preview */}
//           <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
//             {property.amenities.slice(0, 3).map((amenity) => (
//               <span
//                 key={amenity}
//                 className="text-xs bg-ivory-dark text-charcoal-muted px-2.5 py-1 rounded-full"
//               >
//                 {amenity}
//               </span>
//             ))}
//             {property.amenities.length > 3 && (
//               <span className="text-xs bg-gold/10 text-gold px-2.5 py-1 rounded-full font-medium">
//                 +{property.amenities.length - 3} more
//               </span>
//             )}
//           </div>

//           {/* CTA */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star key={star} className="w-3 h-3 fill-gold text-gold" />
//               ))}
//               <span className="text-xs text-charcoal-muted ml-1">5.0</span>
//             </div>
//             <div className="flex items-center gap-1.5 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
//               View Details
//               <ArrowRight className="w-4 h-4" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }


// import Link from 'next/link'
// import { MapPin, BedDouble, Bath, Maximize2, ArrowRight } from 'lucide-react'
// import type { Property } from '@/lib/data'

// interface PropertyCardProps {
//   property: Property
//   variant?: 'default' | 'compact' | 'featured'
// }

// export default function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
//   const isFeatured = variant === 'featured'

//   return (
//     <Link href={`/properties/${property.id}`} className="group block">
//       <div
//         className={`property-card bg-white rounded-2xl overflow-hidden shadow-card border border-stone-border/50 h-full flex flex-col ${isFeatured ? 'shadow-card-hover' : ''
//           }`}
//       >
//         {/* Image / Gradient Placeholder */}
//         <div
//           className={`relative overflow-hidden ${isFeatured ? 'h-64' : 'h-52'}`}
//           style={{
//             background: `linear-gradient(135deg, ${property.gradientFrom} 0%, ${property.gradientTo} 100%)`,
//           }}
//         >
//           {/* Decorative pattern */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-4 left-4 w-32 h-32 rounded-full border-2 border-white" />
//             <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full border border-white" />
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/40" />
//           </div>

//           {/* Property type label */}
//           <div className="absolute top-4 left-4 flex gap-2 z-10">
//             {property.badge && (
//               <span className="badge-featured text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
//                 {property.badge}
//               </span>
//             )}
//             <span
//               className={`text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${property.type === 'rent'
//                   ? 'bg-blue-500/90 text-white'
//                   : property.type === 'project'
//                     ? 'bg-emerald-500/90 text-white'
//                     : 'bg-white/20 text-white border border-white/30'
//                 }`}
//             >
//               {property.type === 'rent' ? 'For Rent' : property.type === 'project' ? 'New Project' : 'For Sale'}
//             </span>
//           </div>

//           {/* Status */}
//           <div className="absolute top-4 right-4 z-10">
//             <span
//               className={`text-xs font-medium px-2.5 py-1 rounded-full ${property.status === 'Ready to Move'
//                   ? 'bg-green-500/90 text-white'
//                   : property.status === 'New Launch'
//                     ? 'bg-amber-500/90 text-white'
//                     : 'bg-blue-500/90 text-white'
//                 }`}
//             >
//               {property.status}
//             </span>
//           </div>

//           {/* Price overlay */}
//           <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-white/70 text-xs mt-0.5">
//               {property.category} · {property.area}
//             </p>
//           </div>

//           {/* Hover overlay */}
//           <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         </div>

//         {/* Content */}
//         <div className="p-5 flex-1 flex flex-col">
//           <h3 className="font-serif font-semibold text-charcoal text-lg leading-snug mb-2 group-hover:text-gold transition-colors line-clamp-2">
//             {property.title}
//           </h3>

//           <div className="flex items-center gap-1.5 text-charcoal-muted text-sm mb-4">
//             <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
//             <span className="truncate">{property.location}</span>
//           </div>

//           {/* Specs */}
//           {property.category !== 'Commercial' && property.category !== 'Plot' && (
//             <div className="flex items-center gap-4 text-sm text-charcoal-muted mb-4 pb-4 border-b border-stone-border">
//               {property.bedrooms > 0 && (
//                 <div className="flex items-center gap-1.5">
//                   <BedDouble className="w-4 h-4 text-gold" />
//                   <span>{property.bedrooms} Beds</span>
//                 </div>
//               )}
//               <div className="flex items-center gap-1.5">
//                 <Bath className="w-4 h-4 text-gold" />
//                 <span>{property.bathrooms} Baths</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Maximize2 className="w-4 h-4 text-gold" />
//                 <span>{property.area}</span>
//               </div>
//             </div>
//           )}

//           {/* Amenities preview */}
//           <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
//             {property.amenities.slice(0, 3).map((amenity) => (
//               <span
//                 key={amenity}
//                 className="text-xs bg-ivory-dark text-charcoal-muted px-2.5 py-1 rounded-full"
//               >
//                 {amenity}
//               </span>
//             ))}
//             {property.amenities.length > 3 && (
//               <span className="text-xs bg-gold/10 text-gold px-2.5 py-1 rounded-full font-medium">
//                 +{property.amenities.length - 3} more
//               </span>
//             )}
//           </div>

//           {/* CTA */}
//           <div className="flex items-center justify-end">
//             <div className="flex items-center gap-1.5 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
//               View Details
//               <ArrowRight className="w-4 h-4" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }


// import Link from 'next/link'
// import { MapPin, BedDouble, Bath, Maximize2, ArrowRight } from 'lucide-react'
// import type { Property } from '@/lib/data'

// interface PropertyCardProps {
//   property: Property
//   variant?: 'default' | 'compact' | 'featured'
// }

// export default function PropertyCard({ property }: PropertyCardProps) {
//   return (
//     <Link href={`/properties/${property.slug}`} className="group block">
//       <div
//         className="property-card bg-white h-full flex flex-col overflow-hidden"
//         style={{
//           border: '1px solid #E8ECF2',
//           borderRadius: '12px',
//           boxShadow: '0 2px 16px rgba(11,31,58,0.06)',
//         }}
//       >
//         {/* ── Image / Gradient ── */}
//         <div
//           className="relative overflow-hidden"
//           style={{
//             height: '200px',
//             background: `linear-gradient(135deg, ${property.gradientFrom} 0%, ${property.gradientTo} 100%)`,
//           }}
//         >
//           {/* Subtle pattern */}
//           <div
//             className="absolute inset-0 opacity-[0.08]"
//             style={{
//               backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//               backgroundSize: '28px 28px',
//             }}
//           />

//           {/* Badges — top left */}
//           <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
//             {property.badge && (
//               <span
//                 className="text-white text-[10px] font-bold px-2.5 py-1 rounded"
//                 style={{ background: '#E63946' }}
//               >
//                 {property.badge}
//               </span>
//             )}
//             {property.subtype === 'new' && (
//               <span
//                 className="text-white text-[10px] font-bold px-2.5 py-1 rounded flex items-center gap-1"
//                 style={{ background: '#059669' }}
//               >
//                 ✦ New
//               </span>
//             )}
//             {property.subtype === 'resell' && (
//               <span
//                 className="text-white text-[10px] font-bold px-2.5 py-1 rounded"
//                 style={{ background: '#2563EB' }}
//               >
//                 ↻ Resell
//               </span>
//             )}
//           </div>

//           {/* Status — top right */}
//           <div className="absolute top-3 right-3 z-10">
//             <span
//               className="text-[10px] font-semibold px-2.5 py-1 rounded text-white"
//               style={{
//                 background:
//                   property.status === 'Ready to Move' ? 'rgba(5,150,105,0.90)' :
//                     property.status === 'New Launch' ? 'rgba(217,119,6,0.90)' :
//                       'rgba(37,99,235,0.90)',
//               }}
//             >
//               {property.status}
//             </span>
//           </div>

//           {/* Price overlay */}
//           <div
//             className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(11,31,58,0.88) 100%)' }}
//           >
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {property.category} · {property.area}
//             </p>
//           </div>

//           {/* Hover tint */}
//           <div
//             className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             style={{ background: 'rgba(230,57,70,0.12)' }}
//           />
//         </div>

//         {/* ── Content ── */}
//         <div className="p-5 flex-1 flex flex-col">

//           {/* Title */}
//           <h3
//             className="font-serif font-semibold text-base leading-snug mb-2 line-clamp-2 transition-colors group-hover:text-red"
//             style={{ color: '#0B1F3A' }}
//           >
//             {property.title}
//           </h3>

//           {/* Location */}
//           <div className="flex items-center gap-1.5 mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: '#E63946' }} />
//             <span className="text-xs truncate">{property.location}</span>
//           </div>

//           {/* Specs */}
//           {property.bedrooms > 0 && (
//             <div
//               className="flex items-center gap-4 text-xs mb-3 pb-3"
//               style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}
//             >
//               <div className="flex items-center gap-1.5">
//                 <BedDouble className="w-3.5 h-3.5" style={{ color: '#0B1F3A' }} />
//                 <span>{property.bedrooms} Beds</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Bath className="w-3.5 h-3.5" style={{ color: '#0B1F3A' }} />
//                 <span>{property.bathrooms} Baths</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Maximize2 className="w-3.5 h-3.5" style={{ color: '#0B1F3A' }} />
//                 <span>{property.area}</span>
//               </div>
//             </div>
//           )}

//           {/* Context — developer or owner */}
//           {property.subtype === 'new' && property.developer && (
//             <div className="flex items-center gap-2 mb-3 text-xs">
//               <span
//                 className="font-semibold px-2.5 py-1 rounded-full"
//                 style={{ background: '#EBF0F7', color: '#0B1F3A' }}
//               >
//                 🏗 {property.developer}
//               </span>
//               {property.possession && (
//                 <span style={{ color: '#6B7280' }}>· {property.possession}</span>
//               )}
//             </div>
//           )}
//           {property.subtype === 'resell' && property.ownerName && (
//             <div className="flex items-center gap-2 mb-3 text-xs">
//               <span
//                 className="font-semibold px-2.5 py-1 rounded-full"
//                 style={{ background: '#EFF6FF', color: '#1D4ED8' }}
//               >
//                 👤 Owner Direct
//               </span>
//               {property.ageOfProperty && (
//                 <span style={{ color: '#6B7280' }}>· {property.ageOfProperty} Old</span>
//               )}
//             </div>
//           )}

//           {/* Amenities */}
//           <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
//             {property.amenities.slice(0, 3).map((a) => (
//               <span
//                 key={a}
//                 className="text-[10px] px-2 py-0.5 rounded-full"
//                 style={{ background: '#F5F7FA', color: '#6B7280' }}
//               >
//                 {a}
//               </span>
//             ))}
//             {property.amenities.length > 3 && (
//               <span
//                 className="text-[10px] px-2 py-0.5 rounded-full font-medium"
//                 style={{ background: '#FEE8EA', color: '#E63946' }}
//               >
//                 +{property.amenities.length - 3} more
//               </span>
//             )}
//           </div>

//           {/* CTA */}
//           <div className="flex items-center justify-end">
//             <div
//               className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all"
//               style={{ color: '#E63946' }}
//             >
//               View Details <ArrowRight className="w-3.5 h-3.5" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }


// 'use client'

// import { useRef, useState, useEffect, useCallback } from 'react'
// import Link from 'next/link'
// import { MapPin, BedDouble, Bath, Maximize2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
// import type { Property } from '@/lib/data'

// interface PropertyCardProps {
//   property: Property
//   variant?: 'default' | 'compact' | 'featured'
// }

// // ─────────────────────────────────────────────
// // Single Card
// // ─────────────────────────────────────────────
// export default function PropertyCard({ property }: PropertyCardProps) {
//   return (
//     <Link href={`/properties/${property.slug}`} className="group flex flex-col flex-1 h-full">
//       <div
//         className="property-card bg-white flex-1 flex flex-col overflow-hidden"
//         style={{
//           border: '1px solid #E8ECF2',
//           borderRadius: '12px',
//           boxShadow: '0 2px 16px rgba(11,31,58,0.06)',
//         }}
//       >
//         {/* ── Image / Gradient ── */}
//         <div
//           className="relative overflow-hidden"
//           style={{
//             height: '200px',
//             background: `linear-gradient(135deg, ${property.gradientFrom} 0%, ${property.gradientTo} 100%)`,
//           }}
//         >
//           {/* Subtle pattern */}
//           <div
//             className="absolute inset-0 opacity-[0.08]"
//             style={{
//               backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//               backgroundSize: '28px 28px',
//             }}
//           />

//           {/* Badges — top left */}
//           <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
//             {property.badge && (
//               <span
//                 className="text-white text-[10px] font-bold px-2.5 py-1 rounded"
//                 style={{ background: '#E63946' }}
//               >
//                 {property.badge}
//               </span>
//             )}
//             {property.subtype === 'new' && (
//               <span
//                 className="text-white text-[10px] font-bold px-2.5 py-1 rounded flex items-center gap-1"
//                 style={{ background: '#059669' }}
//               >
//                 ✦ New
//               </span>
//             )}
//             {property.subtype === 'resell' && (
//               <span
//                 className="text-white text-[10px] font-bold px-2.5 py-1 rounded"
//                 style={{ background: '#2563EB' }}
//               >
//                 ↻ Resell
//               </span>
//             )}
//           </div>

//           {/* Status — top right */}
//           <div className="absolute top-3 right-3 z-10">
//             <span
//               className="text-[10px] font-semibold px-2.5 py-1 rounded text-white"
//               style={{
//                 background:
//                   property.status === 'Ready to Move' ? 'rgba(5,150,105,0.90)' :
//                     property.status === 'New Launch' ? 'rgba(217,119,6,0.90)' :
//                       'rgba(37,99,235,0.90)',
//               }}
//             >
//               {property.status}
//             </span>
//           </div>

//           {/* Price overlay */}
//           <div
//             className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(11,31,58,0.88) 100%)' }}
//           >
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {property.category} · {property.area}
//             </p>
//           </div>

//           {/* Hover tint */}
//           <div
//             className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             style={{ background: 'rgba(230,57,70,0.12)' }}
//           />
//         </div>

//         {/* ── Content ── */}
//         <div className="p-5 flex-1 flex flex-col">

//           {/* Title */}
//           <h3
//             className="font-serif font-semibold text-base leading-snug mb-2 line-clamp-2 transition-colors group-hover:text-red"
//             style={{ color: '#0B1F3A' }}
//           >
//             {property.title}
//           </h3>

//           {/* Location */}
//           <div className="flex items-center gap-1.5 mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: '#E63946' }} />
//             <span className="text-xs truncate">{property.location}</span>
//           </div>

//           {/* Specs */}
//           {property.bedrooms > 0 && (
//             <div
//               className="flex items-center gap-4 text-xs mb-3 pb-3"
//               style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}
//             >
//               <div className="flex items-center gap-1.5">
//                 <BedDouble className="w-3.5 h-3.5" style={{ color: '#0B1F3A' }} />
//                 <span>{property.bedrooms} Beds</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Bath className="w-3.5 h-3.5" style={{ color: '#0B1F3A' }} />
//                 <span>{property.bathrooms} Baths</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Maximize2 className="w-3.5 h-3.5" style={{ color: '#0B1F3A' }} />
//                 <span>{property.area}</span>
//               </div>
//             </div>
//           )}

//           {/* Context — developer or owner */}
//           {property.subtype === 'new' && property.developer && (
//             <div className="flex items-center gap-2 mb-3 text-xs">
//               <span
//                 className="font-semibold px-2.5 py-1 rounded-full"
//                 style={{ background: '#EBF0F7', color: '#0B1F3A' }}
//               >
//                 🏗 {property.developer}
//               </span>
//               {property.possession && (
//                 <span style={{ color: '#6B7280' }}>· {property.possession}</span>
//               )}
//             </div>
//           )}
//           {property.subtype === 'resell' && property.ownerName && (
//             <div className="flex items-center gap-2 mb-3 text-xs">
//               <span
//                 className="font-semibold px-2.5 py-1 rounded-full"
//                 style={{ background: '#EFF6FF', color: '#1D4ED8' }}
//               >
//                 👤 Owner Direct
//               </span>
//               {property.ageOfProperty && (
//                 <span style={{ color: '#6B7280' }}>· {property.ageOfProperty} Old</span>
//               )}
//             </div>
//           )}

//           {/* Amenities */}
//           <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
//             {property.amenities.slice(0, 3).map((a) => (
//               <span
//                 key={a}
//                 className="text-[10px] px-2 py-0.5 rounded-full"
//                 style={{ background: '#F5F7FA', color: '#6B7280' }}
//               >
//                 {a}
//               </span>
//             ))}
//             {property.amenities.length > 3 && (
//               <span
//                 className="text-[10px] px-2 py-0.5 rounded-full font-medium"
//                 style={{ background: '#FEE8EA', color: '#E63946' }}
//               >
//                 +{property.amenities.length - 3} more
//               </span>
//             )}
//           </div>

//           {/* CTA */}
//           <div className="flex items-center justify-end">
//             <div
//               className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all"
//               style={{ color: '#E63946' }}
//             >
//               View Details <ArrowRight className="w-3.5 h-3.5" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─────────────────────────────────────────────
// // Slider — wraps multiple PropertyCards
// // Usage: <PropertyCardSlider properties={featuredProperties} />
// // ─────────────────────────────────────────────
// export function PropertyCardSlider({ properties }: { properties: Property[] }) {
//   const trackRef = useRef<HTMLDivElement>(null)
//   const [canPrev, setCanPrev] = useState(false)
//   const [canNext, setCanNext] = useState(true)

//   const updateArrows = useCallback(() => {
//     const el = trackRef.current
//     if (!el) return
//     setCanPrev(el.scrollLeft > 4)
//     setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
//   }, [])

//   useEffect(() => {
//     const el = trackRef.current
//     if (!el) return
//     updateArrows()
//     el.addEventListener('scroll', updateArrows, { passive: true })
//     window.addEventListener('resize', updateArrows)
//     return () => {
//       el.removeEventListener('scroll', updateArrows)
//       window.removeEventListener('resize', updateArrows)
//     }
//   }, [updateArrows, properties])

//   const slide = (dir: 'prev' | 'next') => {
//     const el = trackRef.current
//     if (!el) return
//     const card = el.firstElementChild as HTMLElement | null
//     const step = card ? card.offsetWidth + 24 : 300
//     el.scrollBy({ left: dir === 'next' ? step : -step, behavior: 'smooth' })
//   }

//   if (!properties.length) return null

//   return (
//     <div className="relative">

//       {/* ── Prev Arrow ── */}
//       <button
//         onClick={() => slide('prev')}
//         aria-label="Previous"
//         className="
//           absolute left-0 top-1/2 -translate-y-1/2 z-20
//           -translate-x-3 sm:-translate-x-5
//           w-9 h-9 sm:w-11 sm:h-11 rounded-full
//           flex items-center justify-center
//           shadow-md transition-all duration-200 focus:outline-none
//         "
//         style={{
//           background: canPrev ? '#0B1F3A' : '#F3F4F6',
//           color: canPrev ? '#FFFFFF' : '#D1D5DB',
//           border: '1.5px solid #E8ECF2',
//           opacity: canPrev ? 1 : 0.45,
//           pointerEvents: canPrev ? 'auto' : 'none',
//         }}
//       >
//         <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//       </button>

//       {/* ── Track ── */}
//       <div
//         ref={trackRef}
//         className="
//           flex items-stretch overflow-x-auto snap-x snap-mandatory scroll-smooth
//           [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
//         "
//         style={{ gap: '24px' }}
//       >
//         {properties.map((property) => (
//           <div
//             key={property.id}
//             className="
//               shrink-0 snap-start flex flex-col
//               w-[78vw]
//               sm:w-[calc(50%-12px)]
//               lg:w-[calc(25%-18px)]
//             "
//           >
//             <PropertyCard property={property} />
//           </div>
//         ))}
//       </div>

//       {/* ── Next Arrow ── */}
//       <button
//         onClick={() => slide('next')}
//         aria-label="Next"
//         className="
//           absolute right-0 top-1/2 -translate-y-1/2 z-20
//           translate-x-3 sm:translate-x-5
//           w-9 h-9 sm:w-11 sm:h-11 rounded-full
//           flex items-center justify-center
//           shadow-md transition-all duration-200 focus:outline-none
//         "
//         style={{
//           background: canNext ? '#E63946' : '#F3F4F6',
//           color: canNext ? '#FFFFFF' : '#D1D5DB',
//           border: '1.5px solid transparent',
//           opacity: canNext ? 1 : 0.45,
//           pointerEvents: canNext ? 'auto' : 'none',
//           boxShadow: canNext ? '0 4px 14px rgba(230,57,70,0.35)' : 'none',
//         }}
//       >
//         <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//       </button>

//     </div>
//   )
// }


// 'use client'

// import { useRef, useState, useEffect, useCallback } from 'react'
// import Link from 'next/link'
// import { MapPin, BedDouble, Bath, Maximize2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
// import type { Property } from '@/lib/data'

// interface PropertyCardProps {
//   property: Property
//   variant?: 'default' | 'compact' | 'featured'
// }

// // ─────────────────────────────────────────────
// // Single Card
// // ─────────────────────────────────────────────
// export default function PropertyCard({ property }: PropertyCardProps) {
//   return (
//     <Link href={`/properties/${property.slug}`} className="group flex flex-col flex-1 h-full">
//       <div
//         className="property-card bg-white flex-1 flex flex-col overflow-hidden"
//         style={{
//           border: '1px solid #E8ECF2',
//           borderRadius: '12px',
//           boxShadow: '0 2px 16px rgba(11,31,58,0.06)',
//         }}
//       >
//         {/* ── Image / Gradient ── */}
//         <div
//           className="relative overflow-hidden"
//           style={{
//             height: '200px',
//             background: `linear-gradient(135deg, ${property.gradientFrom} 0%, ${property.gradientTo} 100%)`,
//           }}
//         >
//           {/* Subtle pattern */}
//           <div
//             className="absolute inset-0 opacity-[0.08]"
//             style={{
//               backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
//               backgroundSize: '28px 28px',
//             }}
//           />

//           {/* Badges — top left */}
//           <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
//             {property.badge && (
//               <span
//                 className="text-white text-[10px] font-bold px-2.5 py-1 rounded"
//                 style={{ background: '#E63946' }}
//               >
//                 {property.badge}
//               </span>
//             )}
//             {property.subtype === 'new' && (
//               <span
//                 className="text-white text-[10px] font-bold px-2.5 py-1 rounded flex items-center gap-1"
//                 style={{ background: '#059669' }}
//               >
//                 ✦ New
//               </span>
//             )}
//             {property.subtype === 'resell' && (
//               <span
//                 className="text-white text-[10px] font-bold px-2.5 py-1 rounded"
//                 style={{ background: '#2563EB' }}
//               >
//                 ↻ Resell
//               </span>
//             )}
//           </div>

//           {/* Status — top right */}
//           <div className="absolute top-3 right-3 z-10">
//             <span
//               className="text-[10px] font-semibold px-2.5 py-1 rounded text-white"
//               style={{
//                 background:
//                   property.status === 'Ready to Move' ? 'rgba(5,150,105,0.90)' :
//                     property.status === 'New Launch' ? 'rgba(217,119,6,0.90)' :
//                       'rgba(37,99,235,0.90)',
//               }}
//             >
//               {property.status}
//             </span>
//           </div>

//           {/* Price overlay */}
//           <div
//             className="absolute bottom-0 left-0 right-0 p-4"
//             style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(11,31,58,0.88) 100%)' }}
//           >
//             <p className="text-white font-serif text-xl font-bold">{property.price}</p>
//             <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
//               {property.category} · {property.area}
//             </p>
//           </div>

//           {/* Hover tint */}
//           <div
//             className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             style={{ background: 'rgba(230,57,70,0.12)' }}
//           />
//         </div>

//         {/* ── Content ── */}
//         <div className="p-5 flex-1 flex flex-col">

//           {/* Title */}
//           <h3
//             className="font-serif font-semibold text-base leading-snug mb-2 line-clamp-2 transition-colors group-hover:text-red"
//             style={{ color: '#0B1F3A' }}
//           >
//             {property.title}
//           </h3>

//           {/* Location */}
//           <div className="flex items-center gap-1.5 mb-3" style={{ color: '#6B7280' }}>
//             <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: '#E63946' }} />
//             <span className="text-xs truncate">{property.location}</span>
//           </div>

//           {/* Specs */}
//           {property.bedrooms > 0 && (
//             <div
//               className="flex items-center gap-4 text-xs mb-3 pb-3"
//               style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}
//             >
//               <div className="flex items-center gap-1.5">
//                 <BedDouble className="w-3.5 h-3.5" style={{ color: '#0B1F3A' }} />
//                 <span>{property.bedrooms} Beds</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Bath className="w-3.5 h-3.5" style={{ color: '#0B1F3A' }} />
//                 <span>{property.bathrooms} Baths</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Maximize2 className="w-3.5 h-3.5" style={{ color: '#0B1F3A' }} />
//                 <span>{property.area}</span>
//               </div>
//             </div>
//           )}

//           {/* Context — developer or owner */}
//           {property.subtype === 'new' && property.developer && (
//             <div className="flex items-center gap-2 mb-3 text-xs">
//               <span
//                 className="font-semibold px-2.5 py-1 rounded-full"
//                 style={{ background: '#EBF0F7', color: '#0B1F3A' }}
//               >
//                 🏗 {property.developer}
//               </span>
//               {property.possession && (
//                 <span style={{ color: '#6B7280' }}>· {property.possession}</span>
//               )}
//             </div>
//           )}
//           {property.subtype === 'resell' && property.ownerName && (
//             <div className="flex items-center gap-2 mb-3 text-xs">
//               <span
//                 className="font-semibold px-2.5 py-1 rounded-full"
//                 style={{ background: '#EFF6FF', color: '#1D4ED8' }}
//               >
//                 👤 Owner Direct
//               </span>
//               {property.ageOfProperty && (
//                 <span style={{ color: '#6B7280' }}>· {property.ageOfProperty} Old</span>
//               )}
//             </div>
//           )}

//           {/* Amenities */}
//           <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
//             {property.amenities.slice(0, 3).map((a) => (
//               <span
//                 key={a}
//                 className="text-[10px] px-2 py-0.5 rounded-full"
//                 style={{ background: '#F5F7FA', color: '#6B7280' }}
//               >
//                 {a}
//               </span>
//             ))}
//             {property.amenities.length > 3 && (
//               <span
//                 className="text-[10px] px-2 py-0.5 rounded-full font-medium"
//                 style={{ background: '#FEE8EA', color: '#E63946' }}
//               >
//                 +{property.amenities.length - 3} more
//               </span>
//             )}
//           </div>

//           {/* CTA */}
//           <div className="flex items-center justify-end">
//             <div
//               className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all"
//               style={{ color: '#E63946' }}
//             >
//               View Details <ArrowRight className="w-3.5 h-3.5" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// // ─────────────────────────────────────────────
// // Slider — wraps multiple PropertyCards
// // Usage: <PropertyCardSlider properties={featuredProperties} />
// // ─────────────────────────────────────────────
// export function PropertyCardSlider({ properties }: { properties: Property[] }) {
//   const trackRef = useRef<HTMLDivElement>(null)
//   const [canPrev, setCanPrev] = useState(false)
//   const [canNext, setCanNext] = useState(true)

//   const updateArrows = useCallback(() => {
//     const el = trackRef.current
//     if (!el) return
//     setCanPrev(el.scrollLeft > 4)
//     setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
//   }, [])

//   useEffect(() => {
//     const el = trackRef.current
//     if (!el) return
//     updateArrows()
//     el.addEventListener('scroll', updateArrows, { passive: true })
//     window.addEventListener('resize', updateArrows)
//     return () => {
//       el.removeEventListener('scroll', updateArrows)
//       window.removeEventListener('resize', updateArrows)
//     }
//   }, [updateArrows, properties])

//   const slide = (dir: 'prev' | 'next') => {
//     const el = trackRef.current
//     if (!el) return
//     const card = el.firstElementChild as HTMLElement | null
//     const step = card ? card.offsetWidth + 24 : 300
//     el.scrollBy({ left: dir === 'next' ? step : -step, behavior: 'smooth' })
//   }

//   if (!properties.length) return null

//   return (
//     <div className="relative">

//       {/* ── Prev Arrow ── */}
//       <button
//         onClick={() => slide('prev')}
//         aria-label="Previous"
//         className="
//           absolute left-0 top-1/2 -translate-y-1/2 z-20
//           -translate-x-3 sm:-translate-x-5
//           w-9 h-9 sm:w-11 sm:h-11 rounded-full
//           flex items-center justify-center
//           shadow-md transition-all duration-200 focus:outline-none
//         "
//         style={{
//           background: canPrev ? '#0B1F3A' : '#F3F4F6',
//           color: canPrev ? '#FFFFFF' : '#D1D5DB',
//           border: '1.5px solid #E8ECF2',
//           opacity: canPrev ? 1 : 0.45,
//           pointerEvents: canPrev ? 'auto' : 'none',
//           transition: 'background 0.2s, box-shadow 0.2s, border-color 0.2s',
//         }}
//         onMouseEnter={e => {
//           if (!canPrev) return
//           e.currentTarget.style.background = '#E63946'
//           e.currentTarget.style.borderColor = 'transparent'
//           e.currentTarget.style.boxShadow = '0 4px 14px rgba(230,57,70,0.35)'
//         }}
//         onMouseLeave={e => {
//           if (!canPrev) return
//           e.currentTarget.style.background = '#0B1F3A'
//           e.currentTarget.style.borderColor = '#E8ECF2'
//           e.currentTarget.style.boxShadow = ''
//         }}
//       >
//         <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//       </button>

//       {/* ── Track ── */}
//       <div
//         ref={trackRef}
//         className="
//           flex items-stretch overflow-x-auto snap-x snap-mandatory scroll-smooth
//           [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
//         "
//         style={{ gap: '24px' }}
//       >
//         {properties.map((property) => (
//           <div
//             key={property.id}
//             className="
//               shrink-0 snap-start flex flex-col
//               w-[78vw]
//               sm:w-[calc(50%-12px)]
//               lg:w-[calc(25%-18px)]
//             "
//           >
//             <PropertyCard property={property} />
//           </div>
//         ))}
//       </div>

//       {/* ── Next Arrow ── */}
//       <button
//         onClick={() => slide('next')}
//         aria-label="Next"
//         className="
//           absolute right-0 top-1/2 -translate-y-1/2 z-20
//           translate-x-3 sm:translate-x-5
//           w-9 h-9 sm:w-11 sm:h-11 rounded-full
//           flex items-center justify-center
//           shadow-md transition-all duration-200 focus:outline-none
//         "
//         style={{
//           background: canNext ? '#0B1F3A' : '#F3F4F6',
//           color: canNext ? '#FFFFFF' : '#D1D5DB',
//           border: '1.5px solid #E8ECF2',
//           opacity: canNext ? 1 : 0.45,
//           pointerEvents: canNext ? 'auto' : 'none',
//           transition: 'background 0.2s, box-shadow 0.2s, border-color 0.2s',
//         }}
//         onMouseEnter={e => {
//           if (!canNext) return
//           e.currentTarget.style.background = '#E63946'
//           e.currentTarget.style.borderColor = 'transparent'
//           e.currentTarget.style.boxShadow = '0 4px 14px rgba(230,57,70,0.35)'
//         }}
//         onMouseLeave={e => {
//           if (!canNext) return
//           e.currentTarget.style.background = '#0B1F3A'
//           e.currentTarget.style.borderColor = '#E8ECF2'
//           e.currentTarget.style.boxShadow = ''
//         }}
//       >
//         <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//       </button>

//     </div>
//   )
// }


'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { MapPin, BedDouble, Bath, Maximize2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Property } from '@/lib/data'

interface PropertyCardProps {
  property: Property
  variant?: 'default' | 'compact' | 'featured'
}

// ─────────────────────────────────────────────
// Single Card
// ─────────────────────────────────────────────
export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.slug}`} className="group flex flex-col flex-1 h-full">
      <div
        className="property-card bg-white flex-1 flex flex-col overflow-hidden"
        style={{
          border: '1px solid #E8ECF2',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(11,31,58,0.06)',
        }}
      >
        {/* ── Image / Gradient ── */}
        <div
          className="relative overflow-hidden"
          style={{
            height: '200px',
            background: `linear-gradient(135deg, ${property.gradientFrom} 0%, ${property.gradientTo} 100%)`,
          }}
        >
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Badges — top left */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {property.badge && (
              <span
                className="text-white text-[10px] font-bold px-2.5 py-1 rounded"
                style={{ background: '#E63946' }}
              >
                {property.badge}
              </span>
            )}
            {property.subtype === 'new' && (
              <span
                className="text-white text-[10px] font-bold px-2.5 py-1 rounded flex items-center gap-1"
                style={{ background: '#059669' }}
              >
                ✦ New
              </span>
            )}
            {property.subtype === 'resell' && (
              <span
                className="text-white text-[10px] font-bold px-2.5 py-1 rounded"
                style={{ background: '#2563EB' }}
              >
                ↻ Resell
              </span>
            )}
          </div>

          {/* Status — top right */}
          <div className="absolute top-3 right-3 z-10">
            <span
              className="text-[10px] font-semibold px-2.5 py-1 rounded text-white"
              style={{
                background:
                  property.status === 'Ready to Move' ? 'rgba(5,150,105,0.90)' :
                    property.status === 'New Launch' ? 'rgba(217,119,6,0.90)' :
                      'rgba(37,99,235,0.90)',
              }}
            >
              {property.status}
            </span>
          </div>

          {/* Price overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 p-4"
            style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(11,31,58,0.88) 100%)' }}
          >
            <p className="text-white font-serif text-xl font-bold">{property.price}</p>
            <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {property.category} · {property.area}
            </p>
          </div>

          {/* Hover tint */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'rgba(230,57,70,0.12)' }}
          />
        </div>

        {/* ── Content ── */}
        <div className="p-5 flex-1 flex flex-col">

          {/* Title */}
          <h3
            className="font-serif font-semibold text-base leading-snug mb-2 line-clamp-2 transition-colors group-hover:text-red"
            style={{ color: '#0B1F3A' }}
          >
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 mb-3" style={{ color: '#6B7280' }}>
            <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: '#E63946' }} />
            <span className="text-xs truncate">{property.location}</span>
          </div>

          {/* Specs */}
          {property.bedrooms > 0 && (
            <div
              className="flex items-center gap-4 text-xs mb-3 pb-3"
              style={{ borderBottom: '1px solid #E8ECF2', color: '#6B7280' }}
            >
              <div className="flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5" style={{ color: '#0B1F3A' }} />
                <span>{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bath className="w-3.5 h-3.5" style={{ color: '#0B1F3A' }} />
                <span>{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" style={{ color: '#0B1F3A' }} />
                <span>{property.area}</span>
              </div>
            </div>
          )}

          {/* Context — developer or owner */}
          {property.subtype === 'new' && property.developer && (
            <div className="flex items-center gap-2 mb-3 text-xs">
              <span
                className="font-semibold px-2.5 py-1 rounded-full"
                style={{ background: '#EBF0F7', color: '#0B1F3A' }}
              >
                🏗 {property.developer}
              </span>
              {property.possession && (
                <span style={{ color: '#6B7280' }}>· {property.possession}</span>
              )}
            </div>
          )}
          {property.subtype === 'resell' && property.ownerName && (
            <div className="flex items-center gap-2 mb-3 text-xs">
              <span
                className="font-semibold px-2.5 py-1 rounded-full"
                style={{ background: '#EFF6FF', color: '#1D4ED8' }}
              >
                👤 Owner Direct
              </span>
              {property.ageOfProperty && (
                <span style={{ color: '#6B7280' }}>· {property.ageOfProperty} Old</span>
              )}
            </div>
          )}

          {/* Amenities */}
          <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
            {property.amenities.slice(0, 3).map((a) => (
              <span
                key={a}
                className="text-[10px] px-2 py-0.5 rounded-full"
                style={{ background: '#F5F7FA', color: '#6B7280' }}
              >
                {a}
              </span>
            ))}
            {property.amenities.length > 3 && (
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{ background: '#FEE8EA', color: '#E63946' }}
              >
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-end">
            <div
              className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all"
              style={{ color: '#E63946' }}
            >
              View Details <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

// ─────────────────────────────────────────────
// Slider — wraps multiple PropertyCards
// Usage: <PropertyCardSlider properties={featuredProperties} />
// ─────────────────────────────────────────────
export function PropertyCardSlider({ properties }: { properties: Property[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  // ── Deduplicate: one card per developer/project ──
  const unique = properties.reduce<Property[]>((acc, p) => {
    const key = p.developer ?? p.title  // group by developer name; fallback to title
    const already = acc.some(x => (x.developer ?? x.title) === key)
    if (!already) acc.push(p)
    return acc
  }, [])

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [updateArrows, unique])

  const slide = (dir: 'prev' | 'next') => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const step = card ? card.offsetWidth + 24 : 300
    el.scrollBy({ left: dir === 'next' ? step : -step, behavior: 'smooth' })
  }

  if (!unique.length) return null

  return (
    <div className="relative">

      {/* ── Prev Arrow ── */}
      <button
        onClick={() => slide('prev')}
        aria-label="Previous"
        className="
          absolute left-0 top-1/2 -translate-y-1/2 z-20
          -translate-x-3 sm:-translate-x-5
          w-9 h-9 sm:w-11 sm:h-11 rounded-full
          flex items-center justify-center
          shadow-md transition-all duration-200 focus:outline-none
        "
        style={{
          background: canPrev ? '#0B1F3A' : '#F3F4F6',
          color: canPrev ? '#FFFFFF' : '#D1D5DB',
          border: '1.5px solid #E8ECF2',
          opacity: canPrev ? 1 : 0.45,
          pointerEvents: canPrev ? 'auto' : 'none',
          transition: 'background 0.2s, box-shadow 0.2s, border-color 0.2s',
        }}
        onMouseEnter={e => {
          if (!canPrev) return
          e.currentTarget.style.background = '#E63946'
          e.currentTarget.style.borderColor = 'transparent'
          e.currentTarget.style.boxShadow = '0 4px 14px rgba(230,57,70,0.35)'
        }}
        onMouseLeave={e => {
          if (!canPrev) return
          e.currentTarget.style.background = '#0B1F3A'
          e.currentTarget.style.borderColor = '#E8ECF2'
          e.currentTarget.style.boxShadow = ''
        }}
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* ── Track ── */}
      <div
        ref={trackRef}
        className="
          flex items-stretch overflow-x-auto snap-x snap-mandatory scroll-smooth
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
        "
        style={{ gap: '24px' }}
      >
        {unique.map((property) => (
          <div
            key={property.id}
            className="
              shrink-0 snap-start flex flex-col
              w-[78vw]
              sm:w-[calc(50%-12px)]
              lg:w-[calc(25%-18px)]
            "
          >
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      {/* ── Next Arrow ── */}
      <button
        onClick={() => slide('next')}
        aria-label="Next"
        className="
          absolute right-0 top-1/2 -translate-y-1/2 z-20
          translate-x-3 sm:translate-x-5
          w-9 h-9 sm:w-11 sm:h-11 rounded-full
          flex items-center justify-center
          shadow-md transition-all duration-200 focus:outline-none
        "
        style={{
          background: canNext ? '#0B1F3A' : '#F3F4F6',
          color: canNext ? '#FFFFFF' : '#D1D5DB',
          border: '1.5px solid #E8ECF2',
          opacity: canNext ? 1 : 0.45,
          pointerEvents: canNext ? 'auto' : 'none',
          transition: 'background 0.2s, box-shadow 0.2s, border-color 0.2s',
        }}
        onMouseEnter={e => {
          if (!canNext) return
          e.currentTarget.style.background = '#E63946'
          e.currentTarget.style.borderColor = 'transparent'
          e.currentTarget.style.boxShadow = '0 4px 14px rgba(230,57,70,0.35)'
        }}
        onMouseLeave={e => {
          if (!canNext) return
          e.currentTarget.style.background = '#0B1F3A'
          e.currentTarget.style.borderColor = '#E8ECF2'
          e.currentTarget.style.boxShadow = ''
        }}
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

    </div>
  )
}