# Regalia Estates — Premium Real Estate Website

A modern, high-conversion real estate website for **Regalia Estates**, a premium real estate broking firm based in **Lucknow, India**.
 
Built with **Next.js 14 (App Router)** + **Tailwind CSS** — fully responsive, production-ready, and client-friendly.

---  
   
## ✨ Features

- **7 full pages**: Home, Properties, Property Detail, Location, Sell, About, Contact
- **Premium Design System**: Playfair Display + DM Sans, gold accent palette
- **Fully responsive** — mobile-first design
- **Interactive Components**: Filter sidebar, testimonial slider, search bar, image gallery
- **Static dummy data** — no backend required
- **Smooth animations** and micro-interactions
- **Sticky WhatsApp** button
- **Sticky CTA bar** on mobile property pages
- Clean folder structure, reusable components

---

## 🗂 Folder Structure

```
regalia-estates/
├── app/
│   ├── layout.tsx           # Root layout with Navbar, Footer, WhatsApp button
│   ├── globals.css          # Global styles + custom CSS
│   ├── page.tsx             # Home page (all sections)
│   ├── about/page.tsx       # About page
│   ├── properties/
│   │   ├── page.tsx         # Properties listing with filter
│   │   └── [id]/page.tsx    # Property detail page
│   ├── location/
│   │   └── [slug]/page.tsx  # Dynamic location page
│   ├── sell/page.tsx        # Sell property form page
│   └── contact/page.tsx     # Contact page
├── components/
│   ├── Navbar.tsx           # Sticky navbar with dropdown
│   ├── Footer.tsx           # Multi-column footer
│   ├── PropertyCard.tsx     # Reusable property card
│   ├── FilterSidebar.tsx    # Filter sidebar component
│   ├── TestimonialSlider.tsx # Auto-playing testimonial slider
│   ├── WhatsAppButton.tsx   # Sticky WhatsApp button
│   ├── Button.tsx           # Reusable button component
│   └── Input.tsx            # Reusable form inputs
├── lib/
│   └── data.ts              # All dummy data (properties, testimonials, etc.)
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Open in browser

```
http://localhost:3000
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Gold | `#C9952A` |
| Charcoal | `#1A1A1A` |
| Ivory | `#FAFAF7` |
| Display Font | Playfair Display |
| Body Font | DM Sans |
| Border Radius | 12–24px (rounded-xl/2xl/3xl) |
| Card Shadow | `0 4px 24px rgba(0,0,0,0.06)` |

---

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Full landing page with all sections |
| Properties | `/properties` | Filterable property grid |
| Property Detail | `/properties/[id]` | Gallery, specs, enquiry form |
| Location | `/location/[slug]` | Area guide + price trends |
| Sell Property | `/sell` | Multi-step listing form |
| About | `/about` | Team, story, timeline |
| Contact | `/contact` | Form, map, WhatsApp CTA |

---

## 🔧 Customisation

To update business details, edit:
- **`lib/data.ts`** — properties, testimonials, team, stats
- **`components/Navbar.tsx`** — phone number
- **`components/Footer.tsx`** — address, email, social links
- **`components/WhatsAppButton.tsx`** — WhatsApp number

---

## 📦 Production Build

```bash
npm run build
npm start
```

---

*Built by Regalia Estates Development Team*
