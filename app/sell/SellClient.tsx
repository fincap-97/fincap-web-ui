'use client'

import { useState } from 'react'
import { Upload, CheckCircle2, Home, TrendingUp, Users, Star, ChevronRight, Send, X } from 'lucide-react'
import Link from 'next/link'

const steps = [
  { num: '01', title: 'Submit Details', desc: 'Fill in your property info and upload photos.' },
  { num: '02', title: 'Expert Evaluation', desc: 'Our team conducts a free market valuation.' },
  { num: '03', title: 'Listing & Marketing', desc: 'We market your property to qualified buyers.' },
  { num: '04', title: 'Close the Deal', desc: 'We handle paperwork and close at the best price.' },
]

const benefits = [
  { icon: TrendingUp, title: 'Best Price Guarantee', desc: 'We leverage our extensive network to ensure you get the best market price for your property.' },
  { icon: Users, title: 'Pre-Qualified Buyers', desc: 'Access our database of 5,000+ serious buyers actively looking in Lucknow right now.' },
  { icon: Star, title: 'Zero Hidden Charges', desc: 'Transparent fee structure with no surprises. Know exactly what you pay from day one.' },
  { icon: Home, title: 'Full Legal Support', desc: 'Our dedicated legal team handles all documentation for a smooth, stress-free transaction.' },
]

export default function SellPropertyPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', propertyType: '', location: '', area: '',
    bedrooms: '', price: '', possession: '', description: '',
  })
  const [images, setImages] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const propertyTypes = ['Apartment', 'Villa', 'Plot/Land', 'Commercial Space', 'Penthouse', 'Duplex']
  const locationOptions = ['Gomti Nagar', 'Hazratganj', 'Shaheed Path', 'Aliganj', 'Sultanpur Road', 'Vibhuti Khand', 'Kanpur Road', 'Other']
  const bedroomOptions = ['Studio', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-ivory flex items-center justify-center">
        <div className="max-w-lg mx-auto px-5 sm:px-8 text-center py-24">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-charcoal mb-4">
            Listing Submitted!
          </h2>
          <p className="text-charcoal-muted mb-8">
            Thank you for choosing Regalia Estates. Our team will review your property details and
            contact you within 24 hours for a free valuation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-gold text-white font-semibold px-8 py-4 rounded-full hover:bg-gold-dark transition-colors">
              Back to Home
            </Link>
            <Link href="/properties" className="border-2 border-stone-border text-charcoal font-semibold px-8 py-4 rounded-full hover:border-gold transition-colors">
              Browse Properties
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-ivory">
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #1a1a0d 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,149,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,149,42,0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-gold/10 blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Home className="w-3.5 h-3.5 text-gold" />
            <span className="text-gold text-sm font-semibold">Sell with India&apos;s Best</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
            Sell Your Property
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Get the best price for your property with Lucknow&apos;s most trusted real estate team.
            Free valuation, zero hassle, maximum returns.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white border-b border-stone-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center text-center gap-3 relative">
                <div className="w-14 h-14 rounded-2xl bg-gold flex items-center justify-center font-serif font-bold text-xl text-white shadow-gold/30 shadow-md">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute left-full top-7 -translate-y-1/2 w-5 h-5 text-stone" />
                )}
                <h3 className="font-semibold text-charcoal">{step.title}</h3>
                <p className="text-charcoal-muted text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card-hover border border-stone-border/30">
                <h2 className="font-serif text-3xl font-bold text-charcoal mb-2">Property Details</h2>
                <p className="text-charcoal-muted text-sm mb-8">Fill in your property information for a free evaluation.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-4">
                      Personal Information
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div className="sm:col-span-1">
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Full Name <span className="text-gold">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Your name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Phone <span className="text-gold">*</span>
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+91 98765..."
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
                        <input
                          type="email"
                          placeholder="you@email.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Property Info */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-4">
                      Property Information
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Property Type <span className="text-gold">*</span>
                        </label>
                        <select
                          required
                          value={form.propertyType}
                          onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                        >
                          <option value="">Select type</option>
                          {propertyTypes.map((t) => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Location <span className="text-gold">*</span>
                        </label>
                        <select
                          required
                          value={form.location}
                          onChange={(e) => setForm({ ...form, location: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                        >
                          <option value="">Select location</option>
                          {locationOptions.map((l) => <option key={l}>{l}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Built-up Area
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., 1200 sq.ft"
                          value={form.area}
                          onChange={(e) => setForm({ ...form, area: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Bedrooms</label>
                        <select
                          value={form.bedrooms}
                          onChange={(e) => setForm({ ...form, bedrooms: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                        >
                          <option value="">Select</option>
                          {bedroomOptions.map((b) => <option key={b}>{b}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Expected Price</label>
                        <input
                          type="text"
                          placeholder="e.g., ₹80 Lakh"
                          value={form.price}
                          onChange={(e) => setForm({ ...form, price: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Possession Status</label>
                        <select
                          value={form.possession}
                          onChange={(e) => setForm({ ...form, possession: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                        >
                          <option value="">Select status</option>
                          <option>Ready to Move</option>
                          <option>Under Construction</option>
                          <option>Immediate Possession</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Additional Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your property, unique features, reason for selling, etc."
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-border text-charcoal text-sm placeholder-stone focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 resize-none"
                    />
                  </div>

                  {/* Upload Images */}
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Upload Property Photos
                    </label>
                    <div className="border-2 border-dashed border-stone-border hover:border-gold rounded-2xl p-8 text-center transition-colors cursor-pointer group">
                      <Upload className="w-10 h-10 text-stone mx-auto mb-3 group-hover:text-gold transition-colors" />
                      <p className="text-sm font-medium text-charcoal mb-1">Click to upload photos</p>
                      <p className="text-xs text-charcoal-muted">PNG, JPG, WEBP up to 10MB each (max 10 photos)</p>
                      <div className="mt-4 inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium">
                        <Upload className="w-3.5 h-3.5" />
                        Choose Files
                      </div>
                    </div>

                    {/* Mock uploaded images */}
                    <div className="flex gap-3 mt-3 flex-wrap">
                      {['Living Room', 'Bedroom', 'Kitchen'].map((room, i) => (
                        <div
                          key={i}
                          className="relative w-20 h-20 rounded-xl overflow-hidden border border-stone-border group cursor-pointer"
                          style={{ background: `linear-gradient(135deg, hsl(${i * 50}, 40%, 30%), hsl(${i * 50 + 30}, 50%, 40%))` }}
                        >
                          <div className="absolute inset-0 flex items-end justify-center pb-1">
                            <span className="text-white text-[9px] font-medium">{room}</span>
                          </div>
                          <button className="absolute top-1 right-1 w-5 h-5 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <X className="w-3 h-3 text-white" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold text-white font-bold py-4 rounded-xl hover:bg-gold-dark transition-all shadow-lg hover:shadow-gold flex items-center justify-center gap-2 text-base"
                  >
                    <Send className="w-5 h-5" />
                    Submit My Property
                  </button>

                  <p className="text-center text-xs text-charcoal-muted">
                    Our team will contact you within 24 hours for a free property evaluation.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar Benefits */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-card border border-stone-border/30">
                <h3 className="font-serif text-xl font-bold text-charcoal mb-6">
                  Why Sell with Regalia?
                </h3>
                <div className="space-y-5">
                  {benefits.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal text-sm mb-1">{title}</p>
                        <p className="text-charcoal-muted text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust metrics */}
              <div className="bg-gold rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
                <p className="font-semibold text-sm opacity-80 mb-1">Average days to sell</p>
                <p className="font-serif text-5xl font-bold mb-3">28</p>
                <p className="text-sm opacity-70">vs. industry average of 90+ days</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-card border border-stone-border/30">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <blockquote className="font-serif text-base italic text-charcoal mb-3">
                  &ldquo;Regalia sold my flat in 3 weeks, 8 lakhs above asking price!&rdquo;
                </blockquote>
                <p className="text-charcoal-muted text-xs">— Priya Verma, Gomti Nagar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
