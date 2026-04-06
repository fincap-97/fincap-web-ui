import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Search, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist. Browse our properties in Lucknow.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  const suggestions = [
    { href: '/properties', icon: Search, label: 'Browse All Properties' },
    { href: '/location/gomti-nagar', icon: Home, label: 'Gomti Nagar Listings' },
    { href: '/contact', icon: Phone, label: 'Talk to an Advisor' },
  ]

  return (
    <div className="pt-20 min-h-screen bg-ivory flex items-center justify-center px-5">
      <div className="max-w-lg w-full text-center py-24">
        {/* Big 404 */}
        <div className="relative mb-8">
          <p
            className="font-serif font-bold select-none"
            style={{
              fontSize: 'clamp(6rem, 20vw, 10rem)',
              lineHeight: 1,
              background: 'linear-gradient(135deg, #C9952A 0%, #E0B048 50%, #C9952A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            404
          </p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-px w-32 bg-gold/30" />
        </div>

        <h1 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-3">
          Page Not Found
        </h1>
        <p className="text-charcoal-muted mb-10 leading-relaxed">
          Yeh page available nahi hai. Neeche diye links se aap apni zaroorat ki jagah ja sakte hain.
        </p>

        {/* Suggestions */}
        <div className="flex flex-col gap-3 mb-10">
          {suggestions.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-stone-border hover:border-gold hover:shadow-card transition-all text-left"
            >
              <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold transition-colors shrink-0">
                <Icon className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
              </div>
              <span className="font-medium text-charcoal group-hover:text-gold transition-colors flex-1">
                {label}
              </span>
              <ArrowRight className="w-4 h-4 text-charcoal-muted group-hover:text-gold group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-8 py-4 rounded-full hover:bg-gold-dark transition-colors shadow-md hover:shadow-gold"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
