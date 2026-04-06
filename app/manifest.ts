import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Regalia Estates — Real Estate Lucknow',
    short_name: 'Regalia Estates',
    description: 'Lucknow ki No.1 real estate firm. Buy, sell & rent premium properties.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAF7',
    theme_color: '#C9952A',
    orientation: 'portrait',
    categories: ['business', 'real estate', 'property'],
    lang: 'en-IN',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
    screenshots: [
      { src: '/screenshots/home.jpg', sizes: '1280x720', type: 'image/jpeg', label: 'Home page' },
    ],
    shortcuts: [
      {
        name: 'Browse Properties',
        short_name: 'Properties',
        description: 'View all properties in Lucknow',
        url: '/properties',
        icons: [{ src: '/icons/shortcut-properties.png', sizes: '96x96' }],
      },
      {
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get in touch with our advisors',
        url: '/contact',
        icons: [{ src: '/icons/shortcut-contact.png', sizes: '96x96' }],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  }
}
