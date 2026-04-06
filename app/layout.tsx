// import type { Metadata } from 'next'
// import './globals.css'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import WhatsAppButton from '@/components/WhatsAppButton'

// const SITE_URL = 'https://www.regaliaestates.in'
// const SITE_NAME = 'Fincap sol'

// export const metadata: Metadata = {
//   // ── Title Template ────────────────────────────────────────────────────────
//   title: {
//     default: 'Fincap sol | Premium Real Estate in Lucknow',
//     template: '%s | Fincap sol — Lucknow',
//   },

//   // ── Core Meta ─────────────────────────────────────────────────────────────
//   description:
//     'Lucknow ke sabse trusted real estate advisors. Buy, sell, or rent premium properties in Gomti Nagar, Hazratganj, Shaheed Path, Sultanpur Road & more. 15+ years experience. 2500+ happy families.',
//   keywords: [
//     'real estate Lucknow', 'property in Lucknow', 'apartments Lucknow',
//     'villas Lucknow', 'Gomti Nagar property', 'property dealer Lucknow',
//     'flat for sale Lucknow', 'house for rent Lucknow', 'new projects Lucknow',
//     'resale property Lucknow', 'buy property Lucknow', '3BHK Lucknow',
//     'luxury apartments Lucknow', 'Shaheed Path property', 'Hazratganj property',
//     'Sultanpur Road new projects', 'Lucknow real estate broker',
//   ],
//   authors: [{ name: 'Fincap sol', url: SITE_URL }],
//   creator: 'Fincap sol',
//   publisher: 'Fincap sol',
//   category: 'Real Estate',
//   classification: 'Real Estate Agency',

//   // ── Canonical & Alternates ────────────────────────────────────────────────
//   metadataBase: new URL(SITE_URL),
//   alternates: {
//     canonical: '/',
//   },

//   // ── Open Graph ────────────────────────────────────────────────────────────
//   openGraph: {
//     type: 'website',
//     locale: 'en_IN',
//     url: SITE_URL,
//     siteName: SITE_NAME,
//     title: 'Fincap sol | Premium Real Estate in Lucknow',
//     description:
//       'Find your dream property in Lucknow with Fincap sol. New builder homes, resale apartments, villas, commercial spaces — all verified. 15+ years. 2500+ deals.',
//     images: [
//       {
//         url: '/og-image.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Fincap sol — Premium Real Estate Lucknow',
//         type: 'image/jpeg',
//       },
//     ],
//   },

//   // ── Twitter Card ─────────────────────────────────────────────────────────
//   twitter: {
//     card: 'summary_large_image',
//     site: '@FincapSol',
//     creator: '@FincapSol',
//     title: 'Fincap sol | Premium Real Estate in Lucknow',
//     description:
//       'New builder homes & resale properties in Lucknow. Gomti Nagar, Hazratganj, Shaheed Path & more. Free consultation.',
//     images: ['/og-image.jpg'],
//   },

//   // ── Robots ────────────────────────────────────────────────────────────────
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: false,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },

//   // ── Icons ─────────────────────────────────────────────────────────────────
//   icons: {
//     icon: [
//       { url: '/favicon.ico', sizes: 'any' },
//       { url: '/icon.svg', type: 'image/svg+xml' },
//     ],
//     apple: '/apple-touch-icon.png',
//   },
//   manifest: '/site.webmanifest',

//   // ── Verification ──────────────────────────────────────────────────────────
//   verification: {
//     google: 'REPLACE_WITH_YOUR_GOOGLE_VERIFICATION_CODE',
//     // bing: 'REPLACE_WITH_BING_CODE',
//   },

//   // ── App-specific ──────────────────────────────────────────────────────────
//   applicationName: SITE_NAME,
//   appleWebApp: {
//     title: SITE_NAME,
//     statusBarStyle: 'default',
//     capable: true,
//   },
//   formatDetection: {
//     telephone: true,
//     address: true,
//     email: true,
//   },
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
//           rel="stylesheet"
//         />
//         {/* Geo meta tags for local SEO */}
//         <meta name="geo.region" content="IN-UP" />
//         <meta name="geo.placename" content="Lucknow, Uttar Pradesh" />
//         <meta name="geo.position" content="26.8467;80.9462" />
//         <meta name="ICBM" content="26.8467, 80.9462" />
//         <meta name="language" content="English" />
//         <meta name="revisit-after" content="7 days" />
//         <meta name="rating" content="general" />
//       </head>
//       <body className="font-sans bg-ivory text-charcoal antialiased">
//         <Navbar />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//         <WhatsAppButton />
//       </body>
//     </html>
//   )
// }


import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const SITE_URL = 'https://www.regaliaestates.in'
const SITE_NAME = 'Regalia Estates'

export const metadata: Metadata = {
  // ── Title Template ────────────────────────────────────────────────────────
  title: {
    default: 'Regalia Estates | Premium Real Estate in Lucknow',
    template: '%s | Regalia Estates — Lucknow',
  },

  // ── Core Meta ─────────────────────────────────────────────────────────────
  description:
    'Lucknow ke sabse trusted real estate advisors. Buy, sell, or rent premium properties in Gomti Nagar, Hazratganj, Shaheed Path, Sultanpur Road & more. 15+ years experience. 2500+ happy families.',
  keywords: [
    'real estate Lucknow', 'property in Lucknow', 'apartments Lucknow',
    'villas Lucknow', 'Gomti Nagar property', 'property dealer Lucknow',
    'flat for sale Lucknow', 'house for rent Lucknow', 'new projects Lucknow',
    'resale property Lucknow', 'buy property Lucknow', '3BHK Lucknow',
    'luxury apartments Lucknow', 'Shaheed Path property', 'Hazratganj property',
    'Sultanpur Road new projects', 'Lucknow real estate broker',
  ],
  authors: [{ name: 'Regalia Estates', url: SITE_URL }],
  creator: 'Regalia Estates',
  publisher: 'Regalia Estates',
  category: 'Real Estate',
  classification: 'Real Estate Agency',

  // ── Canonical & Alternates ────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Regalia Estates | Premium Real Estate in Lucknow',
    description:
      'Find your dream property in Lucknow with Regalia Estates. New builder homes, resale apartments, villas, commercial spaces — all verified. 15+ years. 2500+ deals.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Regalia Estates — Premium Real Estate Lucknow',
        type: 'image/jpeg',
      },
    ],
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@RegaliaEstates',
    creator: '@RegaliaEstates',
    title: 'Regalia Estates | Premium Real Estate in Lucknow',
    description:
      'New builder homes & resale properties in Lucknow. Gomti Nagar, Hazratganj, Shaheed Path & more. Free consultation.',
    images: ['/og-image.jpg'],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',

  // ── Verification ──────────────────────────────────────────────────────────
  verification: {
    google: 'REPLACE_WITH_YOUR_GOOGLE_VERIFICATION_CODE',
    // bing: 'REPLACE_WITH_BING_CODE',
  },

  // ── App-specific ──────────────────────────────────────────────────────────
  applicationName: SITE_NAME,
  appleWebApp: {
    title: SITE_NAME,
    statusBarStyle: 'default',
    capable: true,
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Lucknow, Uttar Pradesh" />
        <meta name="geo.position" content="26.8467;80.9462" />
        <meta name="ICBM" content="26.8467, 80.9462" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
      </head>
      <body className="font-sans bg-white text-ink antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}