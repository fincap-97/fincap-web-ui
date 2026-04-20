// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { Menu, X, Phone, ChevronDown, Building2 } from 'lucide-react'

// const navLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/properties', label: 'Properties' },
//   {
//     label: 'Locations',
//     children: [
//       { href: '/location/gomti-nagar', label: 'Gomti Nagar' },
//       { href: '/location/hazratganj', label: 'Hazratganj' },
//       { href: '/location/shaheed-path', label: 'Shaheed Path' },
//       { href: '/location/sultanpur-road', label: 'Sultanpur Road' },
//     ],
//   },
//   { href: '/about', label: 'About Us' },
//   { href: '/contact', label: 'Contact' },
// ]

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [locDropdown, setLocDropdown] = useState(false)
//   const pathname = usePathname()

//   const isHome = pathname === '/'

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navBg = isHome
//     ? scrolled
//       ? 'bg-white/95 backdrop-blur-md shadow-nav'
//       : 'bg-transparent'
//     : 'bg-white/95 backdrop-blur-md shadow-nav'

//   const textColor = isHome && !scrolled ? 'text-white' : 'text-charcoal'
//   const logoColor = isHome && !scrolled ? 'text-white' : 'text-charcoal'

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
//       >
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex items-center justify-between h-16 md:h-20">
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-3 group">
//               <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center shadow-gold/20 shadow-md transition-transform group-hover:scale-105">
//                 <Building2 className="w-5 h-5 text-white" />
//               </div>
//               <div className="leading-none">
//                 <span className={`font-serif font-bold text-xl tracking-tight block transition-colors ${logoColor}`}>
//                   Fincap
//                 </span>
//                 <span className="text-gold text-[10px] font-sans font-semibold tracking-[0.25em] uppercase block -mt-0.5">
//                   Sol
//                 </span>
//               </div>
//             </Link>

//             {/* Desktop Nav */}
//             <div className="hidden lg:flex items-center gap-1">
//               {navLinks.map((link) =>
//                 link.children ? (
//                   <div
//                     key={link.label}
//                     className="relative"
//                     onMouseEnter={() => setLocDropdown(true)}
//                     onMouseLeave={() => setLocDropdown(false)}
//                   >
//                     <button
//                       className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${textColor} hover:text-gold`}
//                     >
//                       {link.label}
//                       <ChevronDown
//                         className={`w-3.5 h-3.5 transition-transform ${locDropdown ? 'rotate-180' : ''}`}
//                       />
//                     </button>
//                     {locDropdown && (
//                       <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-card-hover border border-stone-border overflow-hidden">
//                         {link.children.map((child) => (
//                           <Link
//                             key={child.href}
//                             href={child.href}
//                             className="block px-5 py-3 text-sm text-charcoal hover:bg-ivory hover:text-gold transition-colors font-medium"
//                           >
//                             {child.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     key={link.href}
//                     href={link.href!}
//                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all animated-link ${textColor} hover:text-gold ${pathname === link.href ? 'text-gold' : ''
//                       }`}
//                   >
//                     {link.label}
//                   </Link>
//                 )
//               )}
//             </div>

//             {/* CTA Group */}
//             <div className="hidden lg:flex items-center gap-5">
//               <a
//                 href="tel:+919876543210"
//                 className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold ${textColor}`}
//               >
//                 <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center">
//                   <Phone className="w-3.5 h-3.5 text-gold" />
//                 </div>
//                 +91 98765 43210
//               </a>
//               {/* <Link
//                 href="/sell"
//                 className="bg-gold text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-dark transition-all duration-300 shadow-md hover:shadow-gold"
//               >
//                 List Property
//               </Link> */}
//               <Link
//                 href="/contact"
//                 className="bg-gold text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-dark transition-all duration-300 shadow-md hover:shadow-gold"
//               >
//                 Contact Us
//               </Link>
//             </div>

//             {/* Mobile Toggle */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isOpen ? 'bg-charcoal text-white' : `${textColor} hover:bg-white/10`
//                 }`}
//             >
//               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//             } bg-white border-t border-stone-border`}
//         >
//           <div className="px-5 py-6 space-y-2">
//             {navLinks.map((link) =>
//               link.children ? (
//                 <div key={link.label}>
//                   <p className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider px-2 mb-1">
//                     Locations
//                   </p>
//                   {link.children.map((child) => (
//                     <Link
//                       key={child.href}
//                       href={child.href}
//                       className="block px-2 py-2 text-sm text-charcoal font-medium hover:text-gold"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       — {child.label}
//                     </Link>
//                   ))}
//                 </div>
//               ) : (
//                 <Link
//                   key={link.href}
//                   href={link.href!}
//                   className="block px-2 py-3 text-base font-semibold text-charcoal border-b border-ivory-dark hover:text-gold transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//               )
//             )}
//             <div className="pt-4 flex flex-col gap-3">
//               <a href="tel:+919876543210" className="flex items-center gap-3 text-charcoal font-medium">
//                 <Phone className="w-4 h-4 text-gold" />
//                 +91 98765 43210
//               </a>
//               {/* <Link
//                 href="/sell"
//                 className="bg-gold text-white text-center py-3 rounded-xl font-semibold"
//                 onClick={() => setIsOpen(false)}
//               >
//                 List Your Property
//               </Link> */}
//               <Link
//                 href="/contact"
//                 className="bg-gold text-white text-center py-3 rounded-xl font-semibold"
//                 onClick={() => setIsOpen(false)}
//               >
//                 contact us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }


// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { Menu, X, Phone, ChevronDown, Building2 } from 'lucide-react'

// const navLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/properties', label: 'Properties' },
//   {
//     label: 'Locations',
//     children: [
//       { href: '/location/gomti-nagar', label: 'Gomti Nagar' },
//       { href: '/location/hazratganj', label: 'Hazratganj' },
//       { href: '/location/shaheed-path', label: 'Shaheed Path' },
//       { href: '/location/sultanpur-road', label: 'Sultanpur Road' },
//     ],
//   },
//   { href: '/about', label: 'About Us' },
//   { href: '/contact', label: 'Contact' },
// ]

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [locDropdown, setLocDropdown] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-nav' : 'border-b border-bg-border'
//           }`}
//       >
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex items-center justify-between h-16 md:h-18">

//             {/* ── Logo ── */}
//             <Link href="/" className="flex items-center gap-3 group">
//               <div
//                 className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
//                 style={{ background: '#E63946' }}
//               >
//                 <Building2 className="w-5 h-5 text-white" />
//               </div>
//               <div className="leading-none">
//                 <span className="font-serif font-bold text-xl tracking-tight text-navy block"
//                   style={{ color: '#0B1F3A' }}>
//                   Fincap
//                 </span>
//                 <span className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase block -mt-0.5"
//                   style={{ color: '#E63946' }}>
//                   Estates
//                 </span>
//               </div>
//             </Link>

//             {/* ── Desktop Nav ── */}
//             <div className="hidden lg:flex items-center gap-1">
//               {navLinks.map((link) =>
//                 link.children ? (
//                   <div
//                     key={link.label}
//                     className="relative"
//                     onMouseEnter={() => setLocDropdown(true)}
//                     onMouseLeave={() => setLocDropdown(false)}
//                   >
//                     <button
//                       className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-red"
//                       style={{ color: '#0B1F3A' }}
//                     >
//                       {link.label}
//                       <ChevronDown
//                         className={`w-3.5 h-3.5 transition-transform ${locDropdown ? 'rotate-180' : ''}`}
//                       />
//                     </button>
//                     {locDropdown && (
//                       <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-navy border border-bg-border overflow-hidden">
//                         {link.children.map((child) => (
//                           <Link
//                             key={child.href}
//                             href={child.href}
//                             className="block px-5 py-3 text-sm font-medium transition-colors hover:bg-bg-light hover:text-red-DEFAULT"
//                             style={{ color: '#0B1F3A' }}
//                           >
//                             {child.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     key={link.href}
//                     href={link.href!}
//                     className="px-4 py-2 rounded-lg text-sm font-medium transition-colors animated-link"
//                     style={{
//                       color: pathname === link.href ? '#E63946' : '#0B1F3A',
//                       fontWeight: pathname === link.href ? '600' : '500',
//                     }}
//                   >
//                     {link.label}
//                   </Link>
//                 )
//               )}
//             </div>

//             {/* ── CTA Group ── */}
//             <div className="hidden lg:flex items-center gap-5">
//               <a
//                 href="tel:+919876543210"
//                 className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-red"
//                 style={{ color: '#0B1F3A' }}
//               >
//                 <div
//                   className="w-7 h-7 rounded-full flex items-center justify-center"
//                   style={{ background: '#FEE8EA' }}
//                 >
//                   <Phone className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                 </div>
//                 +91 8400100342
//               </a>
//               <Link
//                 href="/contact"
//                 className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all"
//                 style={{
//                   background: '#E63946',
//                   boxShadow: '0 2px 8px rgba(230,57,70,0.25)',
//                 }}
//               >
//                 Contact Us
//               </Link>
//             </div>

//             {/* ── Mobile Toggle ── */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
//               style={{
//                 background: isOpen ? '#0B1F3A' : '#F5F7FA',
//                 color: isOpen ? '#ffffff' : '#0B1F3A',
//               }}
//             >
//               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>
//           </div>
//         </div>

//         {/* ── Mobile Menu ── */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//             } bg-white border-t border-bg-border`}
//         >
//           <div className="px-5 py-6 space-y-1">
//             {navLinks.map((link) =>
//               link.children ? (
//                 <div key={link.label}>
//                   <p className="text-xs font-semibold uppercase tracking-wider px-2 mb-2 mt-3"
//                     style={{ color: '#9CA3AF' }}>
//                     Locations
//                   </p>
//                   {link.children.map((child) => (
//                     <Link
//                       key={child.href}
//                       href={child.href}
//                       className="block px-2 py-2.5 text-sm font-medium transition-colors rounded-lg hover:bg-bg-light"
//                       style={{ color: '#0B1F3A' }}
//                       onClick={() => setIsOpen(false)}
//                     >
//                       — {child.label}
//                     </Link>
//                   ))}
//                 </div>
//               ) : (
//                 <Link
//                   key={link.href}
//                   href={link.href!}
//                   className="block px-2 py-3 text-base font-semibold border-b border-bg-border transition-colors"
//                   style={{
//                     color: pathname === link.href ? '#E63946' : '#0B1F3A',
//                   }}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//               )
//             )}
//             <div className="pt-4 flex flex-col gap-3">
//               <a
//                 href="tel:+919876543210"
//                 className="flex items-center gap-3 text-sm font-medium"
//                 style={{ color: '#0B1F3A' }}
//               >
//                 <Phone className="w-4 h-4" style={{ color: '#E63946' }} />
//                 +91 8400100342
//               </a>
//               <Link
//                 href="/contact"
//                 className="text-center py-3 rounded-lg font-semibold text-white text-sm"
//                 style={{ background: '#E63946' }}
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }


// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { Menu, X, Phone, ChevronDown, Building2, Download } from 'lucide-react'
// import BrochureModal from '@/components/BrochureModal'

// const navLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/properties', label: 'Properties' },
//   {
//     label: 'Locations',
//     children: [
//       { href: '/location/gomti-nagar', label: 'Gomti Nagar' },
//       { href: '/location/hazratganj', label: 'Hazratganj' },
//       { href: '/location/shaheed-path', label: 'Shaheed Path' },
//       { href: '/location/sultanpur-road', label: 'Sultanpur Road' },
//     ],
//   },
//   { href: '/services', label: 'Services' },
//   { href: '/about', label: 'About Us' },
//   { href: '/contact', label: 'Contact' },
// ]

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [locDropdown, setLocDropdown] = useState(false)
//   const [brochureOpen, setBrochureOpen] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-nav' : 'border-b border-bg-border'}`}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8">
//           <div className="flex items-center justify-between h-16 md:h-18">

//             {/* ── Logo ── */}
//             {/* <Link href="/" className="flex items-center gap-3 group">
//               <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105" style={{ background: '#E63946' }}>
//                 <Building2 className="w-5 h-5 text-white" />
//               </div>
//               <div className="leading-none">
//                 <span className="font-serif font-bold text-xl tracking-tight block" style={{ color: '#0B1F3A' }}>Fincap</span>
//                 <span className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase block -mt-0.5" style={{ color: '#E63946' }}>Estates</span>
//               </div>
//             </Link> */}

//             <Link href="/" className="flex items-center group">
//               <div className="w-32 h-32 flex items-center justify-center transition-transform group-hover:scale-105">
//                 <img
//                   src="/fincap logo2.png"
//                   alt="Fincap Logo"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </Link>

//             {/* ── Desktop Nav ── */}
//             <div className="hidden lg:flex items-center gap-1">
//               {navLinks.map((link) =>
//                 link.children ? (
//                   <div key={link.label} className="relative"
//                     onMouseEnter={() => setLocDropdown(true)}
//                     onMouseLeave={() => setLocDropdown(false)}>
//                     <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-red"
//                       style={{ color: '#0B1F3A' }}>
//                       {link.label}
//                       <ChevronDown className={`w-3.5 h-3.5 transition-transform ${locDropdown ? 'rotate-180' : ''}`} />
//                     </button>
//                     {locDropdown && (
//                       <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-navy border border-bg-border overflow-hidden">
//                         {link.children.map((child) => (
//                           <Link key={child.href} href={child.href}
//                             className="block px-5 py-3 text-sm font-medium transition-colors hover:bg-bg-light hover:text-red-DEFAULT"
//                             style={{ color: '#0B1F3A' }}>
//                             {child.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link key={link.href} href={link.href!}
//                     className="px-4 py-2 rounded-lg text-sm font-medium transition-colors animated-link"
//                     style={{ color: pathname === link.href ? '#E63946' : '#0B1F3A', fontWeight: pathname === link.href ? '600' : '500' }}>
//                     {link.label}
//                   </Link>
//                 )
//               )}
//             </div>

//             {/* ── CTA Group ── */}
//             <div className="hidden lg:flex items-center gap-3">
//               {/* <a href="tel:+918400100342"
//                 className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-red"
//                 style={{ color: '#0B1F3A' }}>
//                 <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#FEE8EA' }}>
//                   <Phone className="w-3.5 h-3.5" style={{ color: '#E63946' }} />
//                 </div>
//                 +91 8400100342
//               </a> */}

//               {/* ── Download Brochure ── */}
//               <button
//                 onClick={() => setBrochureOpen(true)}
//                 className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all hover-bg-red"
//                 style={{ border: '1.5px solid #0B1F3A', color: '#0B1F3A', background: 'transparent' }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.background = '#E63946'
//                   e.currentTarget.style.borderColor = '#E63946'
//                   e.currentTarget.style.color = '#ffffff'
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.background = 'transparent'
//                   e.currentTarget.style.borderColor = '#0B1F3A'
//                   e.currentTarget.style.color = '#0B1F3A'
//                 }}
//               >
//                 <Download className="w-3.5 h-3.5" />
//                 Brochure
//               </button>

//               <Link href="/contact"
//                 className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all"
//                 style={{ background: '#E63946', boxShadow: '0 2px 8px rgba(230,57,70,0.25)' }}>
//                 Contact Us
//               </Link>
//             </div>

//             {/* ── Mobile Toggle ── */}
//             <button onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
//               style={{ background: isOpen ? '#0B1F3A' : '#F5F7FA', color: isOpen ? '#ffffff' : '#0B1F3A' }}>
//               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>
//           </div>
//         </div>

//         {/* ── Mobile Menu ── */}
//         <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} bg-white border-t border-bg-border`}>
//           <div className="px-5 py-6 space-y-1">
//             {navLinks.map((link) =>
//               link.children ? (
//                 <div key={link.label}>
//                   <p className="text-xs font-semibold uppercase tracking-wider px-2 mb-2 mt-3" style={{ color: '#9CA3AF' }}>Locations</p>
//                   {link.children.map((child) => (
//                     <Link key={child.href} href={child.href}
//                       className="block px-2 py-2.5 text-sm font-medium transition-colors rounded-lg hover:bg-bg-light"
//                       style={{ color: '#0B1F3A' }}
//                       onClick={() => setIsOpen(false)}>
//                       — {child.label}
//                     </Link>
//                   ))}
//                 </div>
//               ) : (
//                 <Link key={link.href} href={link.href!}
//                   className="block px-2 py-3 text-base font-semibold border-b border-bg-border transition-colors"
//                   style={{ color: pathname === link.href ? '#E63946' : '#0B1F3A' }}
//                   onClick={() => setIsOpen(false)}>
//                   {link.label}
//                 </Link>
//               )
//             )}
//             <div className="pt-4 flex flex-col gap-3">
//               {/* <a href="tel:+918400100342" className="flex items-center gap-3 text-sm font-medium" style={{ color: '#0B1F3A' }}>
//                 <Phone className="w-4 h-4" style={{ color: '#E63946' }} />
//                 +91 8400100342
//               </a> */}

//               {/* ── Download Brochure Mobile ── */}
//               <button
//                 onClick={() => { setBrochureOpen(true); setIsOpen(false) }}
//                 className="flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm"
//                 style={{ border: '1.5px solid #0B1F3A', color: '#0B1F3A' }}
//               >
//                 <Download className="w-4 h-4" />
//                 Download Brochure
//               </button>

//               <Link href="/contact"
//                 className="text-center py-3 rounded-lg font-semibold text-white text-sm"
//                 style={{ background: '#E63946' }}
//                 onClick={() => setIsOpen(false)}>
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Brochure Modal */}
//       <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
//     </>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown, Building2, Download } from 'lucide-react'
import BrochureModal from '@/components/BrochureModal'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  {
    label: 'Locations',
    children: [
      { href: '/location/gomti-nagar', label: 'Gomti Nagar' },
      { href: '/location/hazratganj', label: 'Hazratganj' },
      { href: '/location/shaheed-path', label: 'Shaheed Path' },
      { href: '/location/sultanpur-road', label: 'Sultanpur Road' },
    ],
  },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [locDropdown, setLocDropdown] = useState(false)   // desktop hover
  const [locMobile, setLocMobile] = useState(false)        // mobile toggle
  const [brochureOpen, setBrochureOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-nav' : 'border-b border-bg-border'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center group">
              <div className="w-32 h-32 flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src="/fincap logo2.png"
                  alt="Fincap Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative"
                    onMouseEnter={() => setLocDropdown(true)}
                    onMouseLeave={() => setLocDropdown(false)}>
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-red"
                      style={{ color: '#0B1F3A' }}>
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${locDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    {locDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-navy border border-bg-border overflow-hidden">
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href}
                            className="block px-5 py-3 text-sm font-medium transition-colors hover:bg-bg-light hover:text-red-DEFAULT"
                            style={{ color: '#0B1F3A' }}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.href} href={link.href!}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-colors animated-link"
                    style={{ color: pathname === link.href ? '#E63946' : '#0B1F3A', fontWeight: pathname === link.href ? '600' : '500' }}>
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* ── CTA Group ── */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setBrochureOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all"
                style={{ border: '1.5px solid #0B1F3A', color: '#0B1F3A', background: 'transparent' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#E63946'
                  e.currentTarget.style.borderColor = '#E63946'
                  e.currentTarget.style.color = '#ffffff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = '#0B1F3A'
                  e.currentTarget.style.color = '#0B1F3A'
                }}
              >
                <Download className="w-3.5 h-3.5" />
                Brochure
              </button>

              <Link href="/contact"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all"
                style={{ background: '#E63946', boxShadow: '0 2px 8px rgba(230,57,70,0.25)' }}>
                Contact Us
              </Link>
            </div>

            {/* ── Mobile Toggle ── */}
            <button onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              style={{ background: isOpen ? '#0B1F3A' : '#F5F7FA', color: isOpen ? '#ffffff' : '#0B1F3A' }}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} bg-white border-t border-bg-border`}>
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                // ── Locations — collapsible ──
                <div key={link.label}>
                  <button
                    onClick={() => setLocMobile(!locMobile)}
                    className="w-full flex items-center justify-between px-2 py-3 text-base font-semibold border-b border-bg-border transition-colors"
                    style={{ color: '#0B1F3A' }}
                  >
                    {link.label}
                    <ChevronDown
                      className="w-4 h-4 transition-transform duration-200"
                      style={{
                        color: '#E63946',
                        transform: locMobile ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>

                  {/* Collapsible location list */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: locMobile ? `${link.children.length * 52}px` : '0px' }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-colors"
                        style={{ color: pathname === child.href ? '#E63946' : '#4B5563' }}
                        onClick={() => { setIsOpen(false); setLocMobile(false) }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: pathname === child.href ? '#E63946' : '#D1D5DB' }}
                        />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href!}
                  className="block px-2 py-3 text-base font-semibold border-b border-bg-border transition-colors"
                  style={{ color: pathname === link.href ? '#E63946' : '#0B1F3A' }}
                  onClick={() => setIsOpen(false)}>
                  {link.href === pathname
                    ? <span style={{ color: '#E63946' }}>{link.label}</span>
                    : link.label}
                </Link>
              )
            )}

            {/* Bottom CTAs */}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => { setBrochureOpen(true); setIsOpen(false) }}
                className="flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all"
                style={{ border: '1.5px solid #0B1F3A', color: '#0B1F3A' }}
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </button>

              <Link href="/contact"
                className="text-center py-3 rounded-lg font-semibold text-white text-sm"
                style={{ background: '#E63946' }}
                onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Brochure Modal */}
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
    </>
  )
}