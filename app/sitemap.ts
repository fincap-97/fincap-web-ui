import type { MetadataRoute } from 'next'
import { properties, locations } from '@/lib/data'

const BASE = 'https://www.regaliaestates.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // ── Static pages ──────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE}/properties`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${BASE}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/sell`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // ── Property detail pages ──────────────────────────────────────────────────
  const propertyPages: MetadataRoute.Sitemap = properties.map((p) => ({
    url: `${BASE}/properties/${p.id}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p.featured ? 0.9 : 0.8,
  }))

  // ── Location pages ─────────────────────────────────────────────────────────
  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${BASE}/location/${l.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...propertyPages, ...locationPages]
}
