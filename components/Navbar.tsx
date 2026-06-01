
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Download } from 'lucide-react'
import BrochureModal from '@/components/BrochureModal'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  {
    label: 'Locations',
    children: [
      { href: '/location/gomti-nagar', label: 'Gomti Nagar' },
      { href: '/location/vrindavan-yojana', label: 'Vrindavan Yojana' },
      { href: '/location/shaheed-path', label: 'Shaheed Path' },
      { href: '/location/sultanpur-road', label: 'Sultanpur Road' },
      { href: '/location/sushant-golf-city', label: 'Golf City' },
    ],
  },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/career', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [locDropdown, setLocDropdown] = useState(false)
  const [locMobile, setLocMobile] = useState(false)
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

          {/* ── h-16 mobile, h-20 desktop ── */}
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo — w-36 mobile, w-44 desktop */}
            {/* <Link href="/" className="flex items-center group"> */}
            {/* <div className="w-36 h-36 lg:w-44 lg:h-44 flex items-center justify-center ">
              <img src="/fincap logo2.png" alt="Fincap Logo" className="w-full h-full object-contain" />
            </div> */}
            <div className="flex flex-col items-start justify-center shrink-0 leading-none">
              <img
                src="/fincap logo2.png"
                alt="Fincap Logo"
                className="h-12 lg:h-14 w-auto object-contain"
              />
              <span
                className="text-[9px] lg:text-[10px] font-semibold tracking-wide mt-1 whitespace-nowrap"
                style={{ color: '#6B7280' }}
              >
                RERA No: UPRERAAGT10926
              </span>
            </div>
            {/* </Link> */}

            {/* Desktop Nav — text-base (was text-sm) */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative"
                    onMouseEnter={() => setLocDropdown(true)}
                    onMouseLeave={() => setLocDropdown(false)}>
                    <button
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-base font-medium transition-colors"
                      style={{ color: '#0B1F3A' }}>
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    {locDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-navy border border-bg-border overflow-hidden">
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href}
                            className="block px-5 py-3.5 text-sm font-medium transition-colors hover:bg-bg-light"
                            style={{ color: '#0B1F3A' }}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.href} href={link.href!}
                    className="px-4 py-2.5 rounded-lg text-base font-medium transition-colors"
                    style={{
                      color: pathname === link.href ? '#E63946' : '#0B1F3A',
                      fontWeight: pathname === link.href ? '600' : '500',
                    }}>
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA — text-base, bigger padding */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setBrochureOpen(true)}
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-base font-semibold transition-all"
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
                }}>
                <Download className="w-4 h-4" />
                Brochure
              </button>

              <Link href="/contact"
                className="px-6 py-3 rounded-lg text-base font-semibold text-white transition-all"
                style={{ background: '#E63946', boxShadow: '0 2px 8px rgba(230,57,70,0.25)' }}>
                Contact Us
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              style={{ background: isOpen ? '#0B1F3A' : '#F5F7FA', color: isOpen ? '#ffffff' : '#0B1F3A' }}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu — unchanged */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} bg-white border-t border-bg-border`}>
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setLocMobile(!locMobile)}
                    className="w-full flex items-center justify-between px-2 py-3 text-base font-semibold border-b border-bg-border"
                    style={{ color: '#0B1F3A' }}>
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200"
                      style={{ color: '#E63946', transform: locMobile ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>
                  <div className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: locMobile ? `${link.children.length * 52}px` : '0px' }}>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href}
                        className="flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg"
                        style={{ color: pathname === child.href ? '#E63946' : '#4B5563' }}
                        onClick={() => { setIsOpen(false); setLocMobile(false) }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: pathname === child.href ? '#E63946' : '#D1D5DB' }} />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href!}
                  className="block px-2 py-3 text-base font-semibold border-b border-bg-border"
                  style={{ color: pathname === link.href ? '#E63946' : '#0B1F3A' }}
                  onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => { setBrochureOpen(true); setIsOpen(false) }}
                className="flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm"
                style={{ border: '1.5px solid #0B1F3A', color: '#0B1F3A' }}>
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

      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
    </>
  )
}