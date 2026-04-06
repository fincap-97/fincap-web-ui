// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         gold: {
//           DEFAULT: '#C9952A',
//           light: '#E0B048',
//           dark: '#A07820',
//         },
//         charcoal: {
//           DEFAULT: '#1A1A1A',
//           light: '#2C2C2E',
//           muted: '#6B6B6B',
//         },
//         ivory: {
//           DEFAULT: '#FAFAF7',
//           dark: '#F2EDE6',
//           card: '#FFFFFF',
//         },
//         stone: {
//           DEFAULT: '#9CA3AF',
//           dark: '#6B7280',
//           border: '#E5E0D8',
//         },
//       },
//       fontFamily: {
//         sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
//         serif: ['var(--font-playfair)', 'Georgia', 'serif'],
//       },
//       backgroundImage: {
//         'gold-gradient': 'linear-gradient(135deg, #C9952A 0%, #E0B048 50%, #C9952A 100%)',
//         'hero-gradient': 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
//         'card-gradient': 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)',
//       },
//       boxShadow: {
//         'card': '0 4px 24px rgba(0,0,0,0.06)',
//         'card-hover': '0 12px 40px rgba(0,0,0,0.12)',
//         'gold': '0 8px 24px rgba(201,149,42,0.3)',
//         'nav': '0 2px 20px rgba(0,0,0,0.08)',
//       },
//       animation: {
//         'fade-up': 'fadeUp 0.6s ease-out forwards',
//         'slide-in': 'slideIn 0.5s ease-out forwards',
//         'shimmer': 'shimmer 2s infinite',
//         'float': 'float 3s ease-in-out infinite',
//       },
//       keyframes: {
//         fadeUp: {
//           '0%': { opacity: '0', transform: 'translateY(30px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         slideIn: {
//           '0%': { opacity: '0', transform: 'translateX(-20px)' },
//           '100%': { opacity: '1', transform: 'translateX(0)' },
//         },
//         shimmer: {
//           '0%': { backgroundPosition: '-200% 0' },
//           '100%': { backgroundPosition: '200% 0' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-8px)' },
//         },
//       },
//       transitionTimingFunction: {
//         'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
//       },
//     },
//   },
//   plugins: [],
// }
// export default config



// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // ── Red — buttons, accents, hover, links, badges ─────────────────────
//         red: {
//           DEFAULT: '#CC1F1F',
//           light: '#E53935',
//           dark: '#A01010',
//           muted: '#FDEAEA',
//         },

//         // ── Navy Blue — hero bg, dark sections, navbar scrolled ──────────────
//         navy: {
//           DEFAULT: '#0A1628',
//           light: '#152340',
//           mid: '#1E3A5F',
//           muted: '#4A6080',
//         },

//         // ── Backward compat aliases (code uses 'gold' and 'charcoal') ────────
//         gold: {
//           DEFAULT: '#CC1F1F',
//           light: '#E53935',
//           dark: '#A01010',
//         },
//         charcoal: {
//           DEFAULT: '#0A1628',
//           light: '#152340',
//           muted: '#4A6080',
//         },
//         ivory: {
//           DEFAULT: '#F8FAFB',
//           dark: '#EEF1F7',
//           card: '#FFFFFF',
//         },
//         stone: {
//           DEFAULT: '#8A9AB0',
//           dark: '#5A6478',
//           border: '#E2E8F0',
//         },
//       },

//       fontFamily: {
//         sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
//         serif: ['var(--font-playfair)', 'Georgia', 'serif'],
//       },

//       backgroundImage: {
//         'red-gradient': 'linear-gradient(135deg, #CC1F1F 0%, #E53935 50%, #CC1F1F 100%)',
//         'gold-gradient': 'linear-gradient(135deg, #CC1F1F 0%, #E53935 50%, #CC1F1F 100%)',
//         'hero-gradient': 'linear-gradient(135deg, #060D18 0%, #0A1628 50%, #0F2040 100%)',
//         'card-gradient': 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)',
//       },

//       boxShadow: {
//         'card': '0 4px 24px rgba(10,22,40,0.07)',
//         'card-hover': '0 12px 40px rgba(10,22,40,0.15)',
//         'gold': '0 8px 24px rgba(204,31,31,0.30)',
//         'red': '0 8px 24px rgba(204,31,31,0.30)',
//         'nav': '0 2px 20px rgba(10,22,40,0.10)',
//       },

//       animation: {
//         'fade-up': 'fadeUp 0.6s ease-out forwards',
//         'slide-in': 'slideIn 0.5s ease-out forwards',
//         'shimmer': 'shimmer 2.5s infinite',
//         'float': 'float 3s ease-in-out infinite',
//       },

//       keyframes: {
//         fadeUp: {
//           '0%': { opacity: '0', transform: 'translateY(30px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         slideIn: {
//           '0%': { opacity: '0', transform: 'translateX(-20px)' },
//           '100%': { opacity: '1', transform: 'translateX(0)' },
//         },
//         shimmer: {
//           '0%': { backgroundPosition: '0% center' },
//           '100%': { backgroundPosition: '200% center' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-8px)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }
// export default config


import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand Navy (Primary 30%) ─────────────────────────────────────────
        navy: {
          DEFAULT: '#0B1F3A',
          light: '#152E52',
          mid: '#1E3A5F',
          muted: '#2D5282',
          faint: '#EBF0F7',
        },

        // ── Accent Red (10% — CTA / Highlights only) ─────────────────────────
        red: {
          DEFAULT: '#E63946',
          light: '#EF5A65',
          dark: '#C02633',
          muted: '#FEE8EA',
        },

        // ── Backgrounds (60% — White / Light Grey) ────────────────────────────
        bg: {
          white: '#FFFFFF',
          light: '#F5F7FA',
          card: '#FFFFFF',
          border: '#E8ECF2',
        },

        // ── Text ──────────────────────────────────────────────────────────────
        ink: {
          DEFAULT: '#1A1A1A',
          secondary: '#6B7280',
          muted: '#9CA3AF',
          light: '#D1D5DB',
        },

        // ── Backward compat aliases ────────────────────────────────────────────
        gold: {
          DEFAULT: '#E63946',
          light: '#EF5A65',
          dark: '#C02633',
        },
        charcoal: {
          DEFAULT: '#0B1F3A',
          light: '#152E52',
          muted: '#6B7280',
        },
        ivory: {
          DEFAULT: '#F5F7FA',
          dark: '#E8ECF2',
          card: '#FFFFFF',
        },
        stone: {
          DEFAULT: '#9CA3AF',
          dark: '#6B7280',
          border: '#E8ECF2',
        },
      },

      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },

      backgroundImage: {
        // Navy hero gradient
        'hero-gradient': 'linear-gradient(135deg, #060C18 0%, #0B1F3A 50%, #0F2A4A 100%)',
        // Red CTA gradient
        'red-gradient': 'linear-gradient(135deg, #E63946 0%, #EF5A65 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E63946 0%, #EF5A65 100%)',
        // Card overlay
        'card-gradient': 'linear-gradient(180deg, transparent 30%, rgba(11,31,58,0.90) 100%)',
      },

      boxShadow: {
        // Soft investment-grade shadows
        'card': '0 2px 16px rgba(11,31,58,0.06)',
        'card-hover': '0 8px 32px rgba(11,31,58,0.12)',
        'red': '0 4px 16px rgba(230,57,70,0.30)',
        'gold': '0 4px 16px rgba(230,57,70,0.30)',
        'nav': '0 1px 0 0 #E8ECF2',
        'navy': '0 4px 24px rgba(11,31,58,0.20)',
        'btn': '0 2px 8px rgba(11,31,58,0.10)',
      },

      borderRadius: {
        'btn': '8px',
        'card': '12px',
        'pill': '100px',
      },

      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },

      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config