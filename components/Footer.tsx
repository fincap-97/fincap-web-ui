// import Link from 'next/link'
// import {
//   Building2,
//   Phone,
//   Mail,
//   MapPin,
//   Instagram,
//   Facebook,
//   Twitter,
//   Youtube,
//   ArrowRight,
// } from 'lucide-react'

// const quickLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/properties', label: 'Buy Property' },
//   { href: '/properties?type=rent', label: 'Rent Property' },
//   { href: '/properties?type=project', label: 'New Projects' },
//   { href: '/contact', label: 'Contact Us' },
//   { href: '/about', label: 'About Us' },
// ]

// const locationLinks = [
//   { href: '/location/gomti-nagar', label: 'Gomti Nagar' },
//   { href: '/location/hazratganj', label: 'Hazratganj' },
//   { href: '/location/shaheed-path', label: 'Shaheed Path' },
//   { href: '/location/aliganj', label: 'Aliganj' },
//   { href: '/location/sultanpur-road', label: 'Sultanpur Road' },
//   { href: '/location/vibhuti-khand', label: 'Vibhuti Khand' },
// ]

// const propertyTypes = [
//   '2 BHK Apartments',
//   '3 BHK Apartments',
//   'Luxury Villas',
//   'Penthouses',
//   'Commercial Spaces',
//   'Plots & Land',
// ]

// export default function Footer() {
//   return (
//     <footer className="bg-charcoal text-white">
//       {/* Newsletter Bar */}
//       <div className="border-b border-white/10">
//         {/* <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <div>
//               <h3 className="font-serif text-2xl font-semibold mb-1">Stay Ahead of the Market</h3>
//               <p className="text-white/60 text-sm">Get exclusive property alerts and market insights directly to your inbox.</p>
//             </div>
//             <div className="flex w-full md:w-auto gap-3">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors"
//               />
//               <button className="bg-gold text-white px-6 py-3 rounded-xl font-semibold hover:bg-gold-dark transition-colors whitespace-nowrap text-sm">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div> */}
//       </div>

//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
//           {/* Brand Column */}
//           <div className="lg:col-span-2">
//             <Link href="/" className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
//                 <Building2 className="w-5 h-5 text-white" />
//               </div>
//               <div className="leading-none">
//                 <span className="font-serif font-bold text-2xl block">Fincap</span>
//                 <span className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase block">Sol</span>
//               </div>
//             </Link>
//             <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
//               Lucknow&apos;s most trusted real state advisory firm. We specialize in premium residential and commercial properties across the city&apos;s most sought-after locations.
//             </p>
//             {/* Contact Info */}
//             <div className="space-y-3">
//               <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors">
//                 <Phone className="w-4 h-4 text-gold shrink-0" />
//                 +91 8400100342
//               </a>
//               <a href="mailto:info@fincapsol.co.in" className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors">
//                 <Mail className="w-4 h-4 text-gold shrink-0" />
//                 info@fincapsol.co.in
//               </a>
//               <div className="flex items-start gap-3 text-sm text-white/70">
//                 <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
//                 <span>12, Shahnajaf Road, Hazratganj,<br />Lucknow — 226001, Uttar Pradesh</span>
//               </div>
//             </div>
//             {/* Social */}
//             <div className="flex items-center gap-3 mt-6">
//               {[
//                 { icon: Instagram, href: '#', label: 'Instagram' },
//                 { icon: Facebook, href: '#', label: 'Facebook' },
//                 { icon: Twitter, href: '#', label: 'Twitter' },
//                 { icon: Youtube, href: '#', label: 'YouTube' },
//               ].map(({ icon: Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold flex items-center justify-center transition-colors"
//                   aria-label={label}
//                 >
//                   <Icon className="w-4 h-4" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white/90">
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
//                   >
//                     <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all text-gold" />
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Locations */}
//           <div>
//             <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white/90">
//               By Location
//             </h4>
//             <ul className="space-y-3">
//               {locationLinks.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
//                   >
//                     <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all text-gold" />
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Property Types */}
//           <div>
//             <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white/90">
//               Property Types
//             </h4>
//             <ul className="space-y-3">
//               {propertyTypes.map((type) => (
//                 <li key={type}>
//                   <Link
//                     href="/properties"
//                     className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
//                   >
//                     <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all text-gold" />
//                     {type}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-white/40 text-sm">
//             © {new Date().getFullYear()} Fincap sol. All rights reserved.
//           </p>
//           <div className="flex items-center gap-6 text-sm text-white/40">
//             <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
//             <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
//             <Link href="#" className="hover:text-gold transition-colors">Disclaimer</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }


'use client'

import Link from 'next/link'
import {
  Building2, Phone, Mail, MapPin,
  Instagram, Facebook, Twitter, Youtube, ArrowRight,
} from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Buy Property' },
  { href: '/properties', label: 'Under Construction' },
  { href: '/properties', label: 'Ready to Move' },
  { href: '/properties', label: 'New Launch' },

  // { href: '/sell', label: 'Sell Property' },
  { href: '/about', label: 'About Us' },
]

const locationLinks = [
  { href: '/location/gomti-nagar', label: 'Gomti Nagar' },
  { href: '/location/vrindavan-yojana', label: 'Vrindavan Yojana' },
  { href: '/location/shaheed-path', label: 'Shaheed Path' },
  { href: '/location/sultanpur-road', label: 'Sultanpur Road' },
  { href: '/location/sushant-golf-city', label: 'Golf City' },
]

const propertyTypes = [
  '2 BHK Apartments', '3 BHK Apartments', 'Luxury Villas',
  'Penthouses', 'Commercial Spaces', 'Plots & Land',
]

export default function Footer() {
  return (
    <footer style={{ background: '#0B1F3A' }}>

      {/* Newsletter Bar */}
      {/* <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-white mb-1">
                Stay Ahead of the Market
              </h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.50)' }}>
                Get exclusive property alerts and market insights to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              />
              <button
                className="px-6 py-3 rounded-lg font-semibold text-sm text-white whitespace-nowrap transition-colors"
                style={{ background: '#E63946' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* <Link href="/" className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: '#E63946' }}
              >
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="leading-none">
                <span className="font-serif font-bold text-2xl text-white block">Fincap</span>
                <span
                  className="text-[10px] font-semibold tracking-[0.25em] uppercase block"
                  style={{ color: '#E63946' }}
                >
                  Estates
                </span>
              </div>
            </Link> */}

            <Link href="/" className="flex items-center gap-3 mb-6">

              {/* Logo */}
              <div
                className="w-32 h-16 rounded-lg flex items-center justify-center bg-white overflow-hidden"
              >
                <img
                  src="/fincap logo2.png"   // 👈 yaha apna logo daalo (public folder me)
                  alt="Fincap Logo"
                  className="w-28 h-16 object-contain"
                />
              </div>

              {/* Text */}
              {/* <div className="leading-none">
                <span className="font-serif font-bold text-2xl text-white block">
                  Fincap
                </span>
                <span
                  className="text-[10px] font-semibold tracking-[0.25em] uppercase block"
                  style={{ color: '#E63946' }}
                >
                  Estates
                </span>
              </div> */}

            </Link>

            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'rgba(255,255,255,0.50)' }}>
              Lucknow&apos;s most trusted real estate advisory firm. We specialise in premium residential and commercial properties across the city&apos;s finest locations.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm transition-colors group"
                style={{ color: 'rgba(255,255,255,0.60)' }}
              >
                <Phone className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
                +91 8400100342
              </a>
              <a
                href="mailto:info@fincapestates.in"
                className="flex items-center gap-3 text-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.60)' }}
              >
                <Mail className="w-4 h-4 shrink-0" style={{ color: '#E63946' }} />
                info@fincapestates.in
              </a>
              <div className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#E63946' }} />
                <span>402, Eldeco Corporate Chamber-2, Vibhuti Khand, Gomti Nagar,<br /> Lucknow - 226010, Uttar Pradesh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                // { icon: Twitter, label: 'Twitter' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-red-DEFAULT"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm flex items-center gap-2 group hover-red transition-colors"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" style={{ color: '#E63946' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white">
              By Location
            </h4>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm flex items-center gap-2 group hover-red transition-colors"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" style={{ color: '#E63946' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white">
              Property Types
            </h4>
            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type}>
                  <Link
                    href="/properties"
                    className="text-sm flex items-center gap-2 group hover-red transition-colors"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" style={{ color: '#E63946' }} />
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} Fincap Estates. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map((item) => (
              <Link
                key={item}
                href="#"
                className="transition-colors hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}