'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MapPin, BedDouble, Bath, Maximize2, CheckCircle2, Phone,
  MessageCircle, ArrowLeft, Share2, Heart, Calendar, Building,
  ChevronRight, Star, Shield
} from 'lucide-react'
import { properties } from '@/lib/data'

export default function PropertyDetailClient({ propertyId }: { propertyId: string }) {
  const property = properties.find((p) => p.id === propertyId)

  const [activeImg, setActiveImg] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  if (!property) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-charcoal mb-4">Property Not Found</h1>
          <Link href="/properties" className="text-gold hover:underline">← Back to Properties</Link>
        </div>
      </div>
    )
  }

  const gradients = [
    { from: property.gradientFrom, to: property.gradientTo },
    { from: property.gradientTo, to: property.gradientFrom },
    { from: '#1a2a3a', to: property.gradientFrom },
    { from: property.gradientTo, to: '#2a1a2a' },
  ]

  const related = properties.filter((p) => p.id !== property.id && p.type === property.type).slice(0, 3)

  return (
    <div className="pt-20 bg-ivory min-h-screen">
      {/* Breadcrumb */}
      {/* <div className="bg-white border-b border-stone-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center gap-2 text-sm text-charcoal-muted">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/properties" className="hover:text-gold transition-colors">Properties</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-charcoal font-medium truncate">{property.title}</span>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-sm text-charcoal-muted hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div>
              <div
                className="w-full h-80 md:h-[460px] rounded-3xl overflow-hidden relative transition-all duration-500"
                style={{ background: `linear-gradient(135deg, ${gradients[activeImg].from} 0%, ${gradients[activeImg].to} 100%)` }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 left-8 w-48 h-48 rounded-full border-2 border-white" />
                  <div className="absolute bottom-8 right-8 w-36 h-36 rounded-full border border-white" />
                </div>
                <div className="absolute top-5 left-5 flex gap-2 z-10">
                  {property.badge && (
                    <span className="badge-featured text-white text-xs font-bold px-3 py-1.5 rounded-full">{property.badge}</span>
                  )}
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${property.status === 'Ready to Move' ? 'bg-green-500/90 text-white' :
                    property.status === 'New Launch' ? 'bg-amber-500/90 text-white' : 'bg-blue-500/90 text-white'
                    }`}>{property.status}</span>
                </div>
                <div className="absolute top-5 right-5 flex gap-2 z-10">
                  <button onClick={() => setIsWishlisted(!isWishlisted)}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                  </button>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                    <Share2 className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="text-white font-serif text-3xl font-bold">{property.price}</p>
                  <p className="text-white/70 text-sm">{property.area}</p>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                {gradients.map((g, i) => (
                  <button key={i} onClick={() => setActiveImg(i)}
                    className={`h-20 flex-1 rounded-xl overflow-hidden transition-all ${activeImg === i ? 'ring-2 ring-gold ring-offset-2' : 'opacity-60 hover:opacity-80'}`}
                    style={{ background: `linear-gradient(135deg, ${g.from} 0%, ${g.to} 100%)` }}
                  />
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">{property.title}</h1>
                  <div className="flex items-center gap-2 mt-3 text-charcoal-muted">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-gold/10 px-4 py-2 rounded-full">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                  <span className="text-sm font-semibold text-charcoal ml-1">5.0</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mt-6 py-6 border-y border-stone-border">
                {property.bedrooms > 0 && (
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-ivory-dark rounded-xl flex items-center justify-center"><BedDouble className="w-5 h-5 text-gold" /></div>
                    <div><p className="font-semibold text-charcoal">{property.bedrooms}</p><p className="text-xs text-charcoal-muted">Bedrooms</p></div>
                  </div>
                )}
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-ivory-dark rounded-xl flex items-center justify-center"><Bath className="w-5 h-5 text-gold" /></div>
                  <div><p className="font-semibold text-charcoal">{property.bathrooms}</p><p className="text-xs text-charcoal-muted">Bathrooms</p></div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-ivory-dark rounded-xl flex items-center justify-center"><Maximize2 className="w-5 h-5 text-gold" /></div>
                  <div><p className="font-semibold text-charcoal">{property.area}</p><p className="text-xs text-charcoal-muted">Area</p></div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-ivory-dark rounded-xl flex items-center justify-center"><Building className="w-5 h-5 text-gold" /></div>
                  <div><p className="font-semibold text-charcoal">{property.category}</p><p className="text-xs text-charcoal-muted">Type</p></div>
                </div>
                {property.possession && (
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-ivory-dark rounded-xl flex items-center justify-center"><Calendar className="w-5 h-5 text-gold" /></div>
                    <div><p className="font-semibold text-charcoal">{property.possession}</p><p className="text-xs text-charcoal-muted">Possession</p></div>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-stone-border/30">
              <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">About This Property</h2>
              <p className="text-charcoal-muted leading-relaxed">{property.description}</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {property.highlights.map((h) => (
                  <div key={h.label} className="flex items-center gap-3 p-3 bg-ivory rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    <div>
                      <p className="text-xs text-charcoal-muted">{h.label}</p>
                      <p className="font-semibold text-charcoal text-sm">{h.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-stone-border/30">
              <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">Amenities & Features</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-charcoal text-sm font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plans */}
            {property.floorPlans && (
              <div className="bg-white rounded-2xl p-8 shadow-card border border-stone-border/30">
                <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">Floor Plans</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.floorPlans.map((plan) => (
                    <div key={plan.name} className="flex items-center justify-between p-5 rounded-xl border-2 border-stone-border hover:border-gold transition-colors group cursor-pointer">
                      <div>
                        <p className="font-semibold text-charcoal group-hover:text-gold transition-colors">{plan.name}</p>
                        <p className="text-sm text-charcoal-muted mt-0.5">{plan.area}</p>
                      </div>
                      <div className="w-10 h-10 bg-ivory-dark rounded-xl flex items-center justify-center group-hover:bg-gold transition-colors">
                        <Maximize2 className="w-5 h-5 text-charcoal-muted group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location Map */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-stone-border/30">
              <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">Location</h2>
              <div className="w-full h-56 rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #e8f4f8 0%, #d1e8f0 100%)' }}>
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
                <div className="relative text-center z-10">
                  <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center mx-auto mb-3 shadow-gold">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <p className="font-semibold text-charcoal">{property.location}</p>
                  <p className="text-sm text-charcoal-muted mt-1">Interactive map coming soon</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {['Near Metro Station', 'Close to Schools', 'Hospital Nearby', 'Shopping Mall'].map((tag) => (
                  <span key={tag} className="text-xs bg-ivory-dark text-charcoal-muted px-3 py-1.5 rounded-full">📍 {tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              <div className="bg-white rounded-2xl p-7 shadow-card-hover border border-stone-border/30">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-serif text-3xl font-bold text-charcoal">{property.price}</p>
                    <p className="text-charcoal-muted text-sm mt-1">{property.area}</p>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${property.type === 'rent' ? 'bg-blue-100 text-blue-700' :
                    property.type === 'project' ? 'bg-emerald-100 text-emerald-700' : 'bg-gold/10 text-gold'
                    }`}>
                    {property.type === 'rent' ? 'For Rent' : property.type === 'project' ? 'New Project' : 'For Sale'}
                  </span>
                </div>
                <div className="flex items-center gap-2 my-4 py-4 border-y border-stone-border">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-charcoal-muted">RERA Verified & Legally Clear</span>
                </div>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                  {submitted ? (
                    <div className="text-center py-6">
                      <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                      <p className="font-semibold text-charcoal">Enquiry Sent!</p>
                      <p className="text-sm text-charcoal-muted mt-1">We&apos;ll call you in 30 minutes.</p>
                    </div>
                  ) : (
                    <>
                      <input type="text" placeholder="Your Name" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10" />
                      <input type="tel" placeholder="Phone Number" value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10" />
                      <textarea rows={3} placeholder="Your message..." value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 resize-none" />
                      <button type="submit"
                        className="w-full bg-gold text-white font-semibold py-3.5 rounded-xl hover:bg-gold-dark transition-colors shadow-md text-sm">
                        Send Enquiry
                      </button>
                    </>
                  )}
                </form>
              </div>
              <div className="flex gap-3">
                <a href="tel:+919876543210"
                  className="flex-1 flex items-center justify-center gap-2 bg-charcoal text-white py-4 rounded-xl font-semibold hover:bg-charcoal-light transition-colors text-sm">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={`https://wa.me/919876543210?text=Hi, I'm interested in ${encodeURIComponent(property.title)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card border border-stone-border/30">
                <p className="text-xs text-charcoal-muted uppercase tracking-wider mb-4">Listed By</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center text-white font-bold text-xl font-serif shadow-gold">R</div>
                  <div>
                    <p className="font-semibold text-charcoal">Fincap sol</p>
                    <p className="text-sm text-charcoal-muted">Verified Property Advisor</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold text-gold" />)}
                      <span className="text-xs text-charcoal-muted ml-1">5.0 (142)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-8">Similar Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/properties/${p.id}`} className="group block">
                  <div className="property-card bg-white rounded-2xl overflow-hidden shadow-card border border-stone-border/50">
                    <div className="h-44 relative" style={{ background: `linear-gradient(135deg, ${p.gradientFrom} 0%, ${p.gradientTo} 100%)` }}>
                      <div className="absolute bottom-4 left-4">
                        <p className="text-white font-serif text-xl font-bold">{p.price}</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif font-semibold text-charcoal group-hover:text-gold transition-colors">{p.title}</h3>
                      <div className="flex items-center gap-1.5 text-charcoal-muted text-sm mt-2">
                        <MapPin className="w-3.5 h-3.5 text-gold" />{p.location}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
