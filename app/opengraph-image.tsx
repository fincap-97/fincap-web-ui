import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'
export const alt = 'Regalia Estates — Premium Real Estate in Lucknow'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #1a100d 60%, #0d0d1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '60px 72px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(201,149,42,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(201,149,42,0.15) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Gold glow */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '15%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,149,42,0.25) 0%, transparent 70%)',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            position: 'absolute',
            top: 56,
            left: 72,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: 'linear-gradient(135deg, #C9952A, #E0B048)',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>R</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'white', fontSize: 26, fontWeight: 700 }}>Regalia</span>
            <span style={{ color: '#C9952A', fontSize: 11, letterSpacing: '0.3em', fontWeight: 600 }}>
              ESTATES
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span
            style={{
              fontSize: 14,
              color: '#C9952A',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Lucknow&apos;s Most Trusted Real Estate Firm
          </span>
          <h1
            style={{
              fontSize: 62,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              margin: 0,
              maxWidth: 760,
            }}
          >
            Premium Properties
            <br />
            <span style={{ color: '#C9952A' }}>in Lucknow</span>
          </h1>
          <p style={{ fontSize: 22, color: 'rgba(255,255,255,0.55)', margin: 0, marginTop: 8 }}>
            Buy · Sell · Rent · New Projects · Resale
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            marginTop: 44,
            paddingTop: 36,
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {[
            { value: '2,500+', label: 'Properties Sold' },
            { value: '15+', label: 'Years Experience' },
            { value: '₹500 Cr+', label: 'Deals Closed' },
            { value: '4.9★', label: 'Client Rating' },
          ].map((s) => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ color: '#C9952A', fontSize: 26, fontWeight: 700 }}>{s.value}</span>
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
