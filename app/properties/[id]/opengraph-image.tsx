import { ImageResponse } from 'next/og'
import { properties } from '@/lib/data'

export const runtime = 'edge'
export const alt = 'Property Details'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id) || properties[0]

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, ${property.gradientFrom} 0%, ${property.gradientTo} 100%)`,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Dark gradient at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '70%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
          }}
        />

        {/* Logo */}
        <div style={{ position: 'absolute', top: 44, left: 60, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              background: 'linear-gradient(135deg, #C9952A, #E0B048)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>R</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 22, fontWeight: 700 }}>
            Fincap sol
          </span>
        </div>

        {/* Badges */}
        <div style={{ position: 'absolute', top: 44, right: 60, display: 'flex', gap: 10 }}>
          {property.badge && (
            <span
              style={{
                background: 'linear-gradient(135deg, #C9952A, #E0B048)',
                color: 'white',
                fontSize: 13,
                fontWeight: 700,
                padding: '6px 16px',
                borderRadius: 100,
              }}
            >
              {property.badge}
            </span>
          )}
          <span
            style={{
              background:
                property.status === 'Ready to Move'
                  ? 'rgba(34,197,94,0.85)'
                  : property.status === 'New Launch'
                    ? 'rgba(245,158,11,0.85)'
                    : 'rgba(59,130,246,0.85)',
              color: 'white',
              fontSize: 13,
              fontWeight: 600,
              padding: '6px 16px',
              borderRadius: 100,
            }}
          >
            {property.status}
          </span>
        </div>

        {/* Content */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '0 60px 52px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <p style={{ color: '#C9952A', fontSize: 15, fontWeight: 600, letterSpacing: '0.1em', margin: 0 }}>
            {property.location}
          </p>
          <h1
            style={{
              color: 'white',
              fontSize: 52,
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.15,
              maxWidth: 840,
            }}
          >
            {property.title}
          </h1>
          {/* Specs row */}
          <div style={{ display: 'flex', gap: 28, marginTop: 12 }}>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18, fontWeight: 600 }}>
              💰 {property.price}
            </span>
            {property.bedrooms > 0 && (
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18 }}>
                🛏 {property.bedrooms} BHK
              </span>
            )}
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18 }}>📐 {property.area}</span>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18 }}>
              {property.subtype === 'new' ? '✦ New Property' : property.subtype === 'resell' ? '↻ Resale' : '🏠 ' + property.category}
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
