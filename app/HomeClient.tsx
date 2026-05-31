
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
  const [inquiryLoading, setInquiryLoading] = useState(false)
  const [inquirySubmitted, setInquirySubmitted] = useState(false)
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
          <img src="/Home page.jpeg" alt="Premium Properties in Lucknow" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(105deg, rgba(11,31,58,0.55) 0%, rgba(11,31,58,0.20) 40%, transparent 70%)',
          }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{
            background: 'linear-gradient(to top, rgba(11,31,58,0.60) 0%, transparent 100%)',
          }} />

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


        {/* <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 pb-14 sm:pb-16">
          <div className="max-w-xl lg:max-w-2xl">

           
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

      
          <div className="rounded-xl p-2 w-full max-w-4xl"
            style={{ background: '#FFFFFF', border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.10)' }}>

        
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
             
              <button onClick={handleSearch}
                className="flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg text-white transition-all w-full sm:w-auto whitespace-nowrap"
                style={{ background: '#E63946', boxShadow: '0 2px 12px rgba(230,57,70,0.35)' }}>
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>
        </div> */}

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

            {/* Heading */}
            <h1 className="font-serif font-bold leading-[1.08] mb-5 sm:mb-6">
              <span className="block text-[1.8rem] sm:text-4xl md:text-5xl lg:text-6xl" style={{ color: '#0B1F3A' }}>
                Your Trusted
              </span>
              <span className="block text-[1.5rem] sm:text-3xl md:text-4xl lg:text-5xl" style={{
                background: 'linear-gradient(90deg, #E63946 0%, #EF5A65 50%, #E63946 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s linear infinite',
              }}>
                Real Estate Advisors
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1" style={{ color: '#0B1F3A' }}>
                in Lucknow
              </span>
            </h1>

            <p className="text-sm sm:text-base max-w-lg mb-8 sm:mb-10 leading-relaxed" style={{ color: '#6B7280' }}>
              From premium apartments to luxury villas — we help you find the perfect property with
              complete transparency, trusted expertise, and end-to-end support.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-y-5 sm:gap-y-0 mb-10 sm:mb-12">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="sm:pr-6 sm:mr-6 md:pr-8 md:mr-8"
                  style={{ borderRight: i < stats.length - 1 ? '1px solid #E8ECF2' : 'none' }}
                >
                  <p className="font-serif font-bold text-lg sm:text-xl" style={{ color: '#E63946' }}>{stat.value}</p>
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
      {/* <section className="py-14 sm:py-20 md:py-28" style={{ background: '#FFFFFF' }}>
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
            <Link href="/properties?tab=New Launch"
              className="flex items-center gap-2 font-semibold text-sm sm:text-base hover:gap-4 transition-all group shrink-0"
              style={{ color: '#E63946' }}>
              All New Projects <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {hotDeals.map((p) => (
              <Link key={p.id} href={`/properties/${p.slug}`} className="group">
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
      </section> */}

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
            <Link href="/properties?tab=New Launch"
              className="flex items-center gap-2 font-semibold text-sm sm:text-base hover:gap-4 transition-all group shrink-0"
              style={{ color: '#E63946' }}>
              All New Projects <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {hotDeals.map((p) => (
              <Link key={p.id} href={`/properties/${p.slug}`} className="group">
                <div className="rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
                  style={{ border: '1px solid #E8ECF2', boxShadow: '0 2px 16px rgba(11,31,58,0.06)' }}>

                  {/* ── Image / Gradient ── */}
                  <div className="h-48 sm:h-52 relative overflow-hidden">
                    {p.mainImage ? (
                      <>
                        <img
                          src={p.mainImage}
                          alt={p.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0"
                          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 40%, rgba(0,0,0,0.35) 100%)' }} />
                      </>
                    ) : (
                      <div className="absolute inset-0"
                        style={{ background: `linear-gradient(135deg, ${p.gradientFrom} 0%, ${p.gradientTo} 100%)` }} />
                    )}

                    {/* Badge */}
                    {p.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-white text-xs font-bold px-3 py-1.5 rounded"
                          style={{ background: '#E63946' }}>{p.badge}</span>
                      </div>
                    )}

                    {/* Bottom overlay — category · area (no price) */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10"
                      style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.85), transparent)' }}>
                      <p className="text-white/70 text-xs">{p.category} · {p.area}</p>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="bg-white p-4 sm:p-5">
                    <h3 className="font-serif font-semibold text-base mb-2 transition-colors" style={{ color: '#0B1F3A' }}>
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm mb-3 sm:mb-4" style={{ color: '#6B7280' }}>
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" style={{ color: '#E63946' }} />
                      {p.location}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex gap-2 sm:gap-3 items-center flex-wrap">
                        {p.developer && (
                          <span className="font-semibold text-xs sm:text-sm" style={{ color: '#0B1F3A' }}>
                            {p.developer}
                          </span>
                        )}
                        {p.possession && (
                          <span className="text-xs" style={{ color: '#6B7280' }}>· {p.possession}</span>
                        )}
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
                  {/* <p className="text-xs" style={{ color: '#6B7280' }}>{loc.properties} properties</p>
                  <p className="text-xs font-semibold mt-1 text-green-600">{loc.priceChange}</p> */}
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
      {/* <section className="py-10 sm:py-14"
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
      </section> */}
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
                {dev.logo ? (
                  <img
                    src={dev.logo}
                    alt={`${dev.name} logo`}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-contain shrink-0 bg-white"
                  />
                ) : (
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold font-serif shrink-0"
                    style={{ background: '#0B1F3A' }}>
                    {dev.initials}
                  </div>
                )}
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
            <a href="tel:+918400100342"
              className="font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all"
              style={{ border: '2px solid #0B1F3A', color: '#0B1F3A', background: 'transparent' }}>
              <Phone className="w-4 h-4" />Call +91 96966 61530
            </a>
          </div>
        </div>
      </section>

      {/* ─── QUICK INQUIRY FORM ─── */}
      {/* <section className="py-14 sm:py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
           
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
      </section> */}

      {/* ─── QUICK INQUIRY FORM ─── */}
      {/* 
  State additions needed at top of HomePage component:
  const [inquiryLoading, setInquiryLoading] = useState(false)
  const [inquirySubmitted, setInquirySubmitted] = useState(false)
*/}

      <section className="py-14 sm:py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">

            {/* Left info */}
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2"
                style={{ color: '#E63946' }}>
                <span className="w-6 sm:w-8 h-px" style={{ background: '#E63946' }} />Get in Touch
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                style={{ color: '#0B1F3A' }}>
                Quick Property<br />Inquiry
              </h2>
              <p className="mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base" style={{ color: '#6B7280' }}>
                Share your requirements and our expert advisors will contact you within 30 minutes.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {['Free property matching service', 'Expert legal & financial guidance', 'Zero brokerage for buyers', 'Site visit assistance'].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: '#FEE8EA' }}>
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
              <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-5 sm:mb-6"
                style={{ color: '#0B1F3A' }}>
                Send an Enquiry
              </h3>

              {/* ── Success state ── */}
              {inquirySubmitted ? (
                <div className="text-center py-10 sm:py-12">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                  </div>
                  <h4 className="font-serif text-xl font-bold mb-2" style={{ color: '#0B1F3A' }}>
                    Enquiry Sent!
                  </h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Thank you! Our expert will contact you within 30 minutes.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySubmitted(false)
                      setInquiryForm({ name: '', phone: '', location: '', message: '' })
                    }}
                    className="mt-5 text-sm font-semibold hover:underline"
                    style={{ color: '#E63946' }}>
                    Send another enquiry
                  </button>
                </div>
              ) : (
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
                    <label className="block text-sm font-medium mb-1.5 sm:mb-2" style={{ color: '#1A1A1A' }}>
                      Preferred Location
                    </label>
                    <select
                      value={inquiryForm.location}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm bg-white"
                      style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }}>
                      <option value="">Select Area</option>
                      {locationOptions.map((l) => <option key={l}>{l}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 sm:mb-2" style={{ color: '#1A1A1A' }}>
                      Budget
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg text-sm bg-white"
                      style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }}>
                      <option value="">Select Budget</option>
                      {budgetOptions.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 sm:mb-2" style={{ color: '#1A1A1A' }}>
                      Message
                    </label>
                    <textarea rows={3} placeholder="Tell us about your requirements..."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm resize-none"
                      style={{ border: '1px solid #E8ECF2', color: '#1A1A1A', outline: 'none' }} />
                  </div>
                  <button
                    type="button"
                    disabled={inquiryLoading}
                    onClick={async () => {
                      if (!inquiryForm.name.trim() || !inquiryForm.phone.trim()) return
                      setInquiryLoading(true)
                      try {
                        const res = await fetch('/api/contact', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            name: inquiryForm.name,
                            phone: inquiryForm.phone,
                            email: '',
                            subject: `Property Enquiry — ${inquiryForm.location || 'General'}`,
                            message: inquiryForm.message,
                            type: 'Buy Property',
                          }),
                        })
                        const data = await res.json()
                        if (data.success) {
                          setInquirySubmitted(true)
                        } else {
                          alert('Something went wrong. Please try again.')
                        }
                      } catch {
                        alert('Something went wrong. Please try again.')
                      } finally {
                        setInquiryLoading(false)
                      }
                    }}
                    className="w-full text-white font-semibold py-3.5 sm:py-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm disabled:opacity-70"
                    style={{ background: '#E63946', boxShadow: '0 4px 16px rgba(230,57,70,0.30)' }}>
                    {inquiryLoading ? (
                      'Sending...'
                    ) : (
                      <><Send className="w-4 h-4" />Send Enquiry</>
                    )}
                  </button>
                  <p className="text-center text-xs" style={{ color: '#9CA3AF' }}>
                    By submitting, you agree to our{' '}
                    <Link href="#" className="hover:underline" style={{ color: '#E63946' }}>Privacy Policy</Link>.
                    We never share your data.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}