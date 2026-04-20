// lib/data.ts

// export interface Property {
//   id: string
//   title: string
//   price: string
//   priceValue: number
//   location: string
//   area: string
//   type: 'buy' | 'rent' | 'project'
//   subtype?: 'new' | 'resell'          // new: builder/first-time sale | resell: owner/secondary sale
//   category: 'Apartment' | 'Villa' | 'Plot' | 'Commercial' | 'Penthouse'
//   bedrooms: number
//   bathrooms: number
//   status: 'Ready to Move' | 'Under Construction' | 'New Launch'
//   badge?: string
//   featured?: boolean
//   gradientFrom: string
//   gradientTo: string
//   amenities: string[]
//   description: string
//   developer?: string
//   possession?: string
//   ownerName?: string                   // for resell: direct owner contact
//   ownerSince?: string                  // how long owner has held
//   ageOfProperty?: string              // for resell listings
//   highlights: { label: string; value: string }[]
//   floorPlans?: { name: string; area: string }[]
//   slug: string
// }

// export const properties: Property[] = [
//   {
//     id: '1',
//     slug: 'sky-residency-gomti-nagar',
//     title: 'Sky Residency — 3BHK Premium',
//     price: '₹1.25 Cr',
//     priceValue: 12500000,
//     location: 'Gomti Nagar, Lucknow',
//     area: '1,850 sq.ft',
//     type: 'buy',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 3,
//     bathrooms: 2,
//     status: 'Ready to Move',
//     badge: 'Featured',
//     featured: true,
//     developer: 'Omaxe Group',
//     gradientFrom: '#1e3a5f',
//     gradientTo: '#2d6a8a',
//     amenities: ['Swimming Pool', 'Gymnasium', 'Power Backup', '24/7 Security', 'Covered Parking', 'Club House', 'Kids Play Area', 'Jogging Track'],
//     description: 'An exquisitely designed 3BHK apartment in the heart of Gomti Nagar. Featuring premium Italian marble flooring, modular kitchen with German fittings, and panoramic views of the city skyline. Located in a prestigious gated community with world-class amenities.',
//     highlights: [
//       { label: 'Area', value: '1,850 sq.ft' },
//       { label: 'Floor', value: '12th Floor' },
//       { label: 'Facing', value: 'East' },
//       { label: 'Age', value: 'New Build' },
//     ],
//     floorPlans: [
//       { name: '3BHK — Type A', area: '1,850 sq.ft' },
//       { name: '3BHK — Type B', area: '2,100 sq.ft' },
//       { name: '4BHK — Premium', area: '2,600 sq.ft' },
//     ],
//   },
//   {
//     id: '2',
//     slug: 'serenity-villas-shaheed-path',
//     title: 'Serenity Villa — Independent 4BHK',
//     price: '₹2.8 Cr',
//     priceValue: 28000000,
//     location: 'Shaheed Path, Lucknow',
//     area: '3,200 sq.ft',
//     type: 'buy',
//     subtype: 'resell',
//     category: 'Villa',
//     bedrooms: 4,
//     bathrooms: 4,
//     status: 'Ready to Move',
//     badge: 'Hot Deal',
//     featured: true,
//     ownerName: 'Mr. Rajiv Sinha',
//     ownerSince: '2018',
//     ageOfProperty: '6 Years',
//     gradientFrom: '#1a3a2a',
//     gradientTo: '#2d5a3d',
//     amenities: ['Private Garden', 'Home Theater', 'Smart Home', 'Generator', 'Modular Kitchen', 'Terrace Garden', 'Private Parking', 'CCTV'],
//     description: 'A magnificent independent villa with lush private gardens and premium interiors crafted by award-winning designers. Experience the pinnacle of luxury living on Shaheed Path with complete privacy and exclusivity.',
//     highlights: [
//       { label: 'Plot Area', value: '3,200 sq.ft' },
//       { label: 'Built-up', value: '2,800 sq.ft' },
//       { label: 'Floors', value: 'G+2' },
//       { label: 'Facing', value: 'North-East' },
//     ],
//     floorPlans: [
//       { name: 'Ground Floor', area: '1,200 sq.ft' },
//       { name: 'First Floor', area: '950 sq.ft' },
//       { name: 'Terrace', area: '650 sq.ft' },
//     ],
//   },
//   {
//     id: '3',
//     slug: 'promenade-hazratganj-2bhk',
//     title: 'The Promenade — 2BHK City Living',
//     price: '₹65,000/mo',
//     priceValue: 65000,
//     location: 'Hazratganj, Lucknow',
//     area: '1,200 sq.ft',
//     type: 'rent',
//     category: 'Apartment',
//     bedrooms: 2,
//     bathrooms: 2,
//     status: 'Ready to Move',
//     featured: true,
//     gradientFrom: '#2a1a4a',
//     gradientTo: '#4a2d6a',
//     amenities: ['Fully Furnished', 'AC Rooms', 'Elevator', '24/7 Security', 'Covered Parking', 'Gym Access', 'Power Backup'],
//     description: 'Fully furnished 2BHK apartment in the iconic Hazratganj area — Lucknow\'s cultural heart. Perfect for professionals and families seeking upscale city living with premium finishes and thoughtful design.',
//     highlights: [
//       { label: 'Area', value: '1,200 sq.ft' },
//       { label: 'Floor', value: '5th Floor' },
//       { label: 'Furnishing', value: 'Fully Furnished' },
//       { label: 'Deposit', value: '2 months' },
//     ],
//   },
//   {
//     id: '4',
//     slug: 'lakeside-residences-sultanpur-road',
//     title: 'Lakeside Residences — New Launch',
//     price: 'Starting ₹85 Lakh',
//     priceValue: 8500000,
//     location: 'Sultanpur Road, Lucknow',
//     area: '1,450 sq.ft onwards',
//     type: 'project',
//     category: 'Apartment',
//     bedrooms: 3,
//     bathrooms: 2,
//     status: 'New Launch',
//     badge: 'New Launch',
//     featured: true,
//     gradientFrom: '#3d1f00',
//     gradientTo: '#6b3a10',
//     amenities: ['Lake View', 'Jogging Track', 'Kids Play Area', 'Yoga Deck', 'Multi-level Parking', 'Shopping Complex', 'EV Charging'],
//     description: 'A landmark new launch project with stunning lake views. Thoughtfully designed residences with modern amenities in a tranquil setting. RERA approved. Book now at pre-launch prices.',
//     developer: 'Omaxe Group',
//     possession: 'Dec 2026',
//     highlights: [
//       { label: 'Units', value: '480 Units' },
//       { label: 'Towers', value: '6 Towers' },
//       { label: 'Possession', value: 'Dec 2026' },
//       { label: 'RERA', value: 'UP/RERA/PRJ/2024' },
//     ],
//     floorPlans: [
//       { name: '2BHK — Compact', area: '1,050 sq.ft' },
//       { name: '3BHK — Standard', area: '1,450 sq.ft' },
//       { name: '3BHK — Premium', area: '1,750 sq.ft' },
//       { name: '4BHK — Luxury', area: '2,200 sq.ft' },
//     ],
//   },
//   {
//     id: '5',
//     slug: 'golden-crest-penthouse',
//     title: 'Golden Crest — Sky Penthouse',
//     price: '₹4.5 Cr',
//     priceValue: 45000000,
//     location: 'Gomti Nagar Extension, Lucknow',
//     area: '4,200 sq.ft',
//     type: 'buy',
//     subtype: 'new',
//     category: 'Penthouse',
//     bedrooms: 5,
//     bathrooms: 5,
//     status: 'Ready to Move',
//     badge: 'Exclusive',
//     developer: 'Prestige Estates',
//     gradientFrom: '#2d1f00',
//     gradientTo: '#5a3d0a',
//     amenities: ['Private Rooftop Pool', 'Sky Terrace', 'Wine Cellar', 'Jacuzzi', 'Smart Home Automation', 'Private Elevator', 'Butler Service'],
//     description: 'An ultra-luxury penthouse offering unparalleled 360° views of Lucknow\'s skyline. A masterpiece of architecture and design crafted for the most discerning buyer. The crown jewel of modern Lucknow real estate.',
//     highlights: [
//       { label: 'Area', value: '4,200 sq.ft' },
//       { label: 'Floor', value: 'Top Floor (26th)' },
//       { label: 'Private Terrace', value: '800 sq.ft' },
//       { label: 'Car Parks', value: '3 Covered' },
//     ],
//     floorPlans: [
//       { name: 'Living + Dining', area: '1,200 sq.ft' },
//       { name: 'Master Suite', area: '650 sq.ft' },
//       { name: 'Sky Terrace', area: '800 sq.ft' },
//     ],
//   },
//   {
//     id: '6',
//     slug: 'prestige-heights-aliganj',
//     title: 'Prestige Heights — 2BHK',
//     price: '₹55 Lakh',
//     priceValue: 5500000,
//     location: 'Aliganj, Lucknow',
//     area: '1,050 sq.ft',
//     type: 'buy',
//     subtype: 'resell',
//     category: 'Apartment',
//     bedrooms: 2,
//     bathrooms: 2,
//     status: 'Ready to Move',
//     ownerName: 'Mrs. Sunita Kapoor',
//     ownerSince: '2022',
//     ageOfProperty: '2 Years',
//     gradientFrom: '#2a1020',
//     gradientTo: '#5a2040',
//     amenities: ['Power Backup', 'Covered Parking', 'Security', 'Elevator', 'Landscaped Garden', 'Water Purifier'],
//     description: 'Affordable luxury in the well-connected Aliganj neighbourhood. A well-designed 2BHK with quality Italian finishes, modular kitchen, and all modern conveniences at an unbeatable price point.',
//     highlights: [
//       { label: 'Area', value: '1,050 sq.ft' },
//       { label: 'Floor', value: '3rd Floor' },
//       { label: 'Age', value: '2 Years' },
//       { label: 'Facing', value: 'West' },
//     ],
//   },
//   {
//     id: '7',
//     slug: 'corporate-suites-vibhuti-khand',
//     title: 'Corporate Suites — Office Space',
//     price: '₹95,000/mo',
//     priceValue: 95000,
//     location: 'Vibhuti Khand, Lucknow',
//     area: '2,500 sq.ft',
//     type: 'rent',
//     category: 'Commercial',
//     bedrooms: 0,
//     bathrooms: 3,
//     status: 'Ready to Move',
//     gradientFrom: '#0a1a2a',
//     gradientTo: '#1a3a5a',
//     amenities: ['Conference Rooms', 'High-speed Fiber', 'Cafeteria', 'Covered Parking', 'Reception Desk', 'Server Room'],
//     description: 'Premium commercial office space in the thriving Vibhuti Khand IT hub. Modern infrastructure with plug-and-play setup for growing businesses and MNCs looking for a prestigious Lucknow address.',
//     highlights: [
//       { label: 'Area', value: '2,500 sq.ft' },
//       { label: 'Floor', value: '4th Floor' },
//       { label: 'Type', value: 'Semi-Furnished' },
//       { label: 'Deposit', value: '3 months' },
//     ],
//   },
//   {
//     id: '8',
//     slug: 'green-valley-township-kanpur-road',
//     title: 'Green Valley — Eco Township',
//     price: 'Starting ₹45 Lakh',
//     priceValue: 4500000,
//     location: 'Kanpur Road, Lucknow',
//     area: '1,100 sq.ft onwards',
//     type: 'project',
//     category: 'Apartment',
//     bedrooms: 2,
//     bathrooms: 2,
//     status: 'Under Construction',
//     badge: 'Trending',
//     gradientFrom: '#0a2a10',
//     gradientTo: '#1a5020',
//     amenities: ['EV Charging', 'Solar Power', 'Rainwater Harvesting', 'School', 'Hospital', 'Mall', 'Amphitheatre'],
//     description: 'A sustainable eco-township with cutting-edge green features. Modern homes in a self-contained community with all social infrastructure. Live the future today with net-zero energy homes.',
//     developer: 'ATS Group',
//     possession: 'Mar 2027',
//     highlights: [
//       { label: 'Units', value: '1,200 Units' },
//       { label: 'Towers', value: '12 Towers' },
//       { label: 'Possession', value: 'Mar 2027' },
//       { label: 'RERA', value: 'UP/RERA/PRJ/2024' },
//     ],
//     floorPlans: [
//       { name: '1BHK — Studio', area: '650 sq.ft' },
//       { name: '2BHK — Standard', area: '1,100 sq.ft' },
//       { name: '3BHK — Premium', area: '1,500 sq.ft' },
//     ],
//   },

//   // ── NEW PROPERTIES (Builder/First Sale) ──────────────────────────────────
//   {
//     id: '9',
//     slug: 'elysian-heights-gomti-nagar-ext',
//     title: 'Elysian Heights — 3BHK New Launch',
//     price: 'Starting ₹92 Lakh',
//     priceValue: 9200000,
//     location: 'Gomti Nagar Extension, Lucknow',
//     area: '1,650 sq.ft onwards',
//     type: 'buy',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 3,
//     bathrooms: 2,
//     status: 'New Launch',
//     badge: 'New Launch',
//     featured: true,
//     developer: 'Godrej Properties',
//     possession: 'Jun 2027',
//     gradientFrom: '#0a2030',
//     gradientTo: '#1a4060',
//     amenities: ['Sky Lounge', 'Infinity Pool', 'Yoga Studio', 'EV Charging', 'Smart Locks', 'Co-working Space', 'Kids Zone'],
//     description: 'Godrej Properties proudly presents Elysian Heights — an iconic new residential tower in the fast-growing Gomti Nagar Extension. Offering smartly designed 3 & 4BHK homes with panoramic city views and curated lifestyle amenities at pre-launch pricing.',
//     highlights: [
//       { label: 'Units', value: '320 Units' },
//       { label: 'Towers', value: '2 Towers (G+28)' },
//       { label: 'Possession', value: 'Jun 2027' },
//       { label: 'RERA', value: 'UP/RERA/PRJ/2025' },
//     ],
//     floorPlans: [
//       { name: '3BHK — Compact', area: '1,650 sq.ft' },
//       { name: '3BHK — Premium', area: '1,950 sq.ft' },
//       { name: '4BHK — Luxury', area: '2,450 sq.ft' },
//     ],
//   },
//   {
//     id: '10',
//     slug: 'signature-park-indira-nagar',
//     title: 'Signature Park — 2BHK Ready',
//     price: '₹68 Lakh',
//     priceValue: 6800000,
//     location: 'Indira Nagar, Lucknow',
//     area: '1,150 sq.ft',
//     type: 'buy',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 2,
//     bathrooms: 2,
//     status: 'Ready to Move',
//     badge: 'Featured',
//     featured: true,
//     developer: 'Eldeco Group',
//     gradientFrom: '#1a2a0a',
//     gradientTo: '#2d4a1a',
//     amenities: ['Clubhouse', 'Badminton Court', 'Power Backup', 'Covered Parking', 'CCTV', 'Lift', 'Park'],
//     description: 'Eldeco Signature Park offers brand-new 2BHK apartments with fresh possession available immediately. Enjoy the benefits of first ownership — clean interiors, builder warranty, and zero wear-and-tear. Located in the vibrant Indira Nagar locality.',
//     highlights: [
//       { label: 'Area', value: '1,150 sq.ft' },
//       { label: 'Floor', value: '7th Floor' },
//       { label: 'Facing', value: 'North' },
//       { label: 'Age', value: 'Brand New' },
//     ],
//     floorPlans: [
//       { name: '2BHK — Type A', area: '1,150 sq.ft' },
//       { name: '2BHK — Type B', area: '1,280 sq.ft' },
//     ],
//   },
//   {
//     id: '11',
//     slug: 'royal-arc-shaheed-path-new',
//     title: 'Royal Arc — 4BHK Builder Floor',
//     price: '₹1.65 Cr',
//     priceValue: 16500000,
//     location: 'Shaheed Path, Lucknow',
//     area: '2,400 sq.ft',
//     type: 'buy',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 4,
//     bathrooms: 4,
//     status: 'Ready to Move',
//     badge: 'New',
//     developer: 'Shalimar Corp',
//     gradientFrom: '#1a0a2a',
//     gradientTo: '#3a1a5a',
//     amenities: ['Italian Marble Floors', 'Modular Kitchen', 'VRV AC', 'Private Terrace', 'Smart Home', '3 Car Parks', 'Intercom'],
//     description: 'Straight from the builder — a premium 4BHK duplex apartment on Shaheed Path with ultra-luxury specifications. First-owner advantage: fresh OC, zero maintenance liability, full builder warranty on structure and fittings.',
//     highlights: [
//       { label: 'Area', value: '2,400 sq.ft' },
//       { label: 'Floor', value: 'G+1 Duplex' },
//       { label: 'Facing', value: 'East' },
//       { label: 'Handover', value: 'Immediate' },
//     ],
//   },

//   // ── RESELL PROPERTIES (Owner / Secondary Market) ──────────────────────────
//   {
//     id: '12',
//     slug: 'heritage-towers-resell-gomti-nagar',
//     title: 'Heritage Towers — Resale 3BHK',
//     price: '₹78 Lakh',
//     priceValue: 7800000,
//     location: 'Gomti Nagar, Lucknow',
//     area: '1,500 sq.ft',
//     type: 'buy',
//     subtype: 'resell',
//     category: 'Apartment',
//     bedrooms: 3,
//     bathrooms: 2,
//     status: 'Ready to Move',
//     badge: 'Owner Direct',
//     ownerName: 'Mr. Anil Verma',
//     ownerSince: '2019',
//     ageOfProperty: '5 Years',
//     gradientFrom: '#2a0a1a',
//     gradientTo: '#5a1a30',
//     amenities: ['Fully Renovated', 'New Modular Kitchen', 'Swimming Pool', 'Club House', 'Power Backup', 'Covered Parking'],
//     description: 'Resale 3BHK in the prestigious Heritage Towers society — directly from owner, no middlemen. The flat has been freshly renovated with new modular kitchen, Italian marble flooring, and modern bathrooms. Move in immediately. Motivated seller — price negotiable.',
//     highlights: [
//       { label: 'Area', value: '1,500 sq.ft' },
//       { label: 'Floor', value: '8th Floor' },
//       { label: 'Age', value: '5 Years' },
//       { label: 'Renovation', value: '2024 (New)' },
//     ],
//   },
//   {
//     id: '13',
//     slug: 'sunrise-apartments-resell-aliganj',
//     title: 'Sunrise Apartments — Resale 2BHK',
//     price: '₹48 Lakh',
//     priceValue: 4800000,
//     location: 'Aliganj, Lucknow',
//     area: '980 sq.ft',
//     type: 'buy',
//     subtype: 'resell',
//     category: 'Apartment',
//     bedrooms: 2,
//     bathrooms: 2,
//     status: 'Ready to Move',
//     badge: 'Best Price',
//     ownerName: 'Mrs. Kavita Sharma',
//     ownerSince: '2016',
//     ageOfProperty: '8 Years',
//     gradientFrom: '#1a1a2a',
//     gradientTo: '#2a2a5a',
//     amenities: ['Well Maintained', 'Lift', 'Security', 'Parking', 'Gated Society', 'Garden', 'Water Supply 24/7'],
//     description: 'Excellent resale deal in Aliganj\'s most established residential society. Owned by a single family for 8 years, well-maintained with regular upkeep. Perfect for first-time home buyers or investors seeking strong rental income. School, hospital, and market all within 500m.',
//     highlights: [
//       { label: 'Area', value: '980 sq.ft' },
//       { label: 'Floor', value: '4th Floor' },
//       { label: 'Age', value: '8 Years' },
//       { label: 'Facing', value: 'South-West' },
//     ],
//   },
//   {
//     id: '14',
//     slug: 'green-meadows-resell-villa',
//     title: 'Green Meadows — Resale 3BHK Villa',
//     price: '₹1.95 Cr',
//     priceValue: 19500000,
//     location: 'Shaheed Path, Lucknow',
//     area: '2,800 sq.ft',
//     type: 'buy',
//     subtype: 'resell',
//     category: 'Villa',
//     bedrooms: 3,
//     bathrooms: 3,
//     status: 'Ready to Move',
//     badge: 'Motivated Seller',
//     ownerName: 'Col. R.K. Tiwari (Retd.)',
//     ownerSince: '2017',
//     ageOfProperty: '7 Years',
//     gradientFrom: '#0a2a0a',
//     gradientTo: '#1a5a1a',
//     amenities: ['Vastu Compliant', 'Mature Garden', 'Solar Panels', 'RO Plant', 'Generator', 'Servant Quarters', 'Open Parking x3'],
//     description: 'A beautifully maintained independent villa owned by a retired Colonel — immaculate condition with zero defects. Vastu-compliant layout, mature fruit-bearing garden, and fully automated security. Selling due to relocation. Open to serious buyers only.',
//     highlights: [
//       { label: 'Plot Area', value: '3,500 sq.ft' },
//       { label: 'Built-up', value: '2,800 sq.ft' },
//       { label: 'Age', value: '7 Years' },
//       { label: 'Condition', value: 'Excellent' },
//     ],
//   },
//   {
//     id: '15',
//     slug: 'pearl-residency-resell-indira-nagar',
//     title: 'Pearl Residency — Resale 2BHK',
//     price: '₹52 Lakh',
//     priceValue: 5200000,
//     location: 'Indira Nagar, Lucknow',
//     area: '1,100 sq.ft',
//     type: 'buy',
//     subtype: 'resell',
//     category: 'Apartment',
//     bedrooms: 2,
//     bathrooms: 2,
//     status: 'Ready to Move',
//     ownerName: 'Mr. Suresh Pandey',
//     ownerSince: '2020',
//     ageOfProperty: '4 Years',
//     gradientFrom: '#2a1a0a',
//     gradientTo: '#5a3a1a',
//     amenities: ['Semi-Furnished', 'Modular Kitchen', 'Power Backup', 'Elevator', 'Intercom', 'CCTV', 'Children Park'],
//     description: 'A lightly used, semi-furnished 2BHK in the popular Pearl Residency society in Indira Nagar. Only 4 years old, well-maintained by owner. Comes with modular kitchen and wardrobes. Immediate possession. Loan pre-approved through HDFC, SBI, and ICICI.',
//     highlights: [
//       { label: 'Area', value: '1,100 sq.ft' },
//       { label: 'Floor', value: '2nd Floor' },
//       { label: 'Age', value: '4 Years' },
//       { label: 'Furnishing', value: 'Semi-Furnished' },
//     ],
//   },
// ]

// export interface Property {
//   id: string
//   title: string
//   price: string
//   priceValue: number
//   location: string
//   area: string
//   type: 'buy' | 'rent' | 'project'
//   subtype?: 'new' | 'resell'
//   category: 'Apartment' | 'Villa' | 'Plot' | 'Commercial' | 'Penthouse'
//   bedrooms: number
//   bathrooms: number
//   status: 'Ready to Move' | 'Under Construction' | 'New Launch'
//   badge?: string
//   featured?: boolean
//   gradientFrom: string
//   gradientTo: string
//   amenities: string[]
//   description: string
//   developer?: string
//   possession?: string
//   ownerName?: string
//   ownerSince?: string
//   ageOfProperty?: string
//   highlights: { label: string; value: string }[]
//   floorPlans?: { name: string; area: string }[]
//   slug: string
// }

// export const properties: Property[] = [

//   // ─────────────────────────────────────────────
//   // IMPERIAL RESIDENCIA — TOWER ASPIRE (Block A)
//   // ─────────────────────────────────────────────

//   {
//     id: 'ir-aspire-ultra',
//     title: 'Imperial Residencia – 4 BHK Ultra',
//     price: '₹3.25 Cr',
//     priceValue: 32537500,
//     location: 'Vrindavan Yojna, Lucknow',
//     area: '3425 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 4,
//     bathrooms: 4,
//     status: 'Under Construction',
//     badge: 'Tower Aspire',
//     featured: true,
//     gradientFrom: '#1a0a00',
//     gradientTo: '#3d1f00',
//     amenities: [
//       'Indoor Swimming Pool',
//       'Gymnasium',
//       'Pickle Ball Court',
//       'Private Theatre',
//       'Café (Velvet Brew)',
//       'Landscaped Garden',
//       'Kids Play Area',
//       'Indoor Play Area',
//       'Multipurpose Hall',
//       'Activity Hall',
//       '2-Level Basement Parking',
//       '5-Tier Security',
//       'Power Backup (5 KVA)',
//       'EV Charging',
//       'Cricket Pitch',
//       'Meeting Room',
//     ],
//     description:
//       'The Ultra is Imperial Residencia\'s flagship residence — a sprawling 3425 sq.ft. 4-bedroom home with 4 full balconies offering 3 distinct views. Inspired by the five elements, every space is designed to blend Indian cultural warmth with contemporary luxury. No shared walls. Absolute privacy.',
//     developer: 'Gandharva Infratech Pvt. Ltd.',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Tower', value: 'Aspire (Block A — Westside)' },
//       { label: 'Carpet Area', value: '1896.40 sq.ft. (176.18 sq.mt.)' },
//       { label: 'Balcony Area', value: '632.60 sq.ft. (58.77 sq.mt.)' },
//       { label: 'Built-Up Area', value: '2676.36 sq.ft. (248.64 sq.mt.)' },
//       { label: 'Total Area (with common)', value: '3425 sq.ft. (318.19 sq.mt.)' },
//       { label: 'Balconies', value: '4 Balconies — 3 Views' },
//       { label: 'Living Room', value: '330+ sq.ft.' },
//       { label: 'Society Charges (IFMS+MRMC)', value: '₹2,74,000' },
//       { label: 'Price List Date', value: '15 January 2026' },
//       { label: 'RERA No.', value: 'UPRERAPRJ486522/09/2024' },
//       { label: 'Total Units', value: '140 (Entire Project)' },
//       { label: 'Project Area', value: '2+ Acres' },
//     ],
//     floorPlans: [
//       { name: 'Bedroom (Guest)', area: '110.27 sq.ft. — 11\'2" × 9\'10.5"' },
//       { name: 'Bedroom', area: '140.56 sq.ft. — 11\'9.5" × 11\'11.5"' },
//       { name: 'Bedroom (Master)', area: '153.42 sq.ft. — 15\'1" × 10\'2"' },
//       { name: 'Bedroom (Master)', area: '173.48 sq.ft. — 15\'1" × 11\'9"' },
//       { name: 'Drawing + Living', area: '330.12 sq.ft. — 11\'9.5" × 28\'0"' },
//       { name: 'Dining', area: '206.33 sq.ft. — 17\'9" × 11\'9.5"' },
//       { name: 'Kitchen', area: '122.9 sq.ft. — 11\'9.5" × 10\'5"' },
//       { name: 'Store / Puja', area: '39.33 sq.ft. — 4\'11" × 8\'0"' },
//       { name: 'Servant Room', area: '58.59 sq.ft. — 6\'8.5" × 8\'11.5"' },
//     ],
//     slug: 'imperial-residencia-aspire-ultra',
//   },

//   {
//     id: 'ir-aspire-premium',
//     title: 'Imperial Residencia – 4 BHK Premium',
//     price: '₹3.08 Cr',
//     priceValue: 30780000,
//     location: 'Vrindavan Yojna, Lucknow',
//     area: '3240 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 4,
//     bathrooms: 4,
//     status: 'Under Construction',
//     badge: 'Tower Aspire',
//     featured: true,
//     gradientFrom: '#1a0a00',
//     gradientTo: '#3d1f00',
//     amenities: [
//       'Indoor Swimming Pool',
//       'Gymnasium',
//       'Pickle Ball Court',
//       'Private Theatre',
//       'Café (Velvet Brew)',
//       'Landscaped Garden',
//       'Kids Play Area',
//       'Indoor Play Area',
//       'Multipurpose Hall',
//       'Activity Hall',
//       '2-Level Basement Parking',
//       '5-Tier Security',
//       'Power Backup (5 KVA)',
//       'EV Charging',
//       'Cricket Pitch',
//     ],
//     description:
//       'The Premium is a generously proportioned 3240 sq.ft. 4-bedroom residence with 3 balconies spanning 3 views. Each bedroom has an attached walk-in wardrobe. The living room stretches over 330 sq.ft. — large enough for a mini stroll.',
//     developer: 'Gandharva Infratech Pvt. Ltd.',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Tower', value: 'Aspire (Block A — Westside)' },
//       { label: 'Carpet Area', value: '1836.55 sq.ft. (170.62 sq.mt.)' },
//       { label: 'Balcony Area', value: '557.04 sq.ft. (51.75 sq.mt.)' },
//       { label: 'Built-Up Area', value: '2537.07 sq.ft. (235.70 sq.mt.)' },
//       { label: 'Total Area (with common)', value: '3240 sq.ft. (301.40 sq.mt.)' },
//       { label: 'Balconies', value: '3 Balconies — 3 Views' },
//       { label: 'Living Room', value: '330+ sq.ft.' },
//       { label: 'Society Charges (IFMS+MRMC)', value: '₹2,59,200' },
//       { label: 'Price List Date', value: '15 January 2026' },
//       { label: 'RERA No.', value: 'UPRERAPRJ486522/09/2024' },
//     ],
//     floorPlans: [
//       { name: 'Drawing + Living', area: '330.12 sq.ft. — 11\'9.5" × 28\'0"' },
//       { name: 'Master Bedroom', area: '173.48 sq.ft. — 15\'1" × 11\'9"' },
//       { name: 'Bedroom', area: '153.42 sq.ft. — 15\'1" × 10\'2"' },
//       { name: 'Bedroom', area: '140.56 sq.ft.' },
//       { name: 'Guest Bedroom', area: '110.27 sq.ft.' },
//       { name: 'Kitchen', area: '118.57 sq.ft. — 11\'4.5" × 10\'5"' },
//       { name: 'Store / Puja', area: '39.33 sq.ft.' },
//       { name: 'Servant Room', area: '58.59 sq.ft.' },
//     ],
//     slug: 'imperial-residencia-aspire-premium',
//   },

//   {
//     id: 'ir-aspire-smart',
//     title: 'Imperial Residencia – 4 BHK Smart',
//     price: '₹2.53 Cr',
//     priceValue: 25270000,
//     location: 'Vrindavan Yojna, Lucknow',
//     area: '2660 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 4,
//     bathrooms: 4,
//     status: 'Under Construction',
//     badge: 'Tower Aspire',
//     featured: false,
//     gradientFrom: '#1a0a00',
//     gradientTo: '#3d1f00',
//     amenities: [
//       'Indoor Swimming Pool',
//       'Gymnasium',
//       'Pickle Ball Court',
//       'Private Theatre',
//       'Café (Velvet Brew)',
//       'Landscaped Garden',
//       'Kids Play Area',
//       'Multipurpose Hall',
//       '2-Level Basement Parking',
//       '5-Tier Security',
//       'Power Backup (5 KVA)',
//     ],
//     description:
//       'The Smart is the most accessible entry into Imperial Residencia — 4 full bedrooms with attached baths and walk-in wardrobes across 2660 sq.ft. Three balconies bring light and air from three sides. Smart by name, substantial by every measure.',
//     developer: 'Gandharva Infratech Pvt. Ltd.',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Tower', value: 'Aspire (Block A — Westside)' },
//       { label: 'Carpet Area', value: '1604.27 sq.ft. (149.04 sq.mt.)' },
//       { label: 'Balcony Area', value: '347.57 sq.ft. (32.29 sq.mt.)' },
//       { label: 'Built-Up Area', value: '2083.48 sq.ft. (193.56 sq.mt.)' },
//       { label: 'Total Area (with common)', value: '2660 sq.ft. (247.12 sq.mt.)' },
//       { label: 'Balconies', value: '3 Balconies — 3 Views' },
//       { label: 'Living Room', value: '290+ sq.ft.' },
//       { label: 'Society Charges (IFMS+MRMC)', value: '₹2,12,800' },
//       { label: 'Price List Date', value: '15 January 2026' },
//       { label: 'RERA No.', value: 'UPRERAPRJ486522/09/2024' },
//     ],
//     floorPlans: [
//       { name: 'Drawing + Living', area: '290.02 sq.ft. — 12\'2" × 23\'10.5"' },
//       { name: 'Master Bedroom', area: '155.26 sq.ft. — 15\'1" × 10\'3.5"' },
//       { name: 'Bedroom', area: '155.26 sq.ft.' },
//       { name: 'Bedroom', area: '140.97 sq.ft. — 11\'8.5" × 11\'11.5"' },
//       { name: 'Guest Bedroom', area: '106.06 sq.ft. — 10\'6.5" × 9\'10"' },
//       { name: 'Kitchen', area: '115.88 sq.ft. — 11\'8.5" × 9\'8-10"' },
//       { name: 'Store / Puja', area: '38.66 sq.ft.' },
//       { name: 'Servant Room', area: '58.02 sq.ft.' },
//     ],
//     slug: 'imperial-residencia-aspire-smart',
//   },

//   // ─────────────────────────────────────────────
//   // IMPERIAL RESIDENCIA — TOWER BLISS (Block B)
//   // ─────────────────────────────────────────────

//   {
//     id: 'ir-bliss-ultra',
//     title: 'Imperial Residencia – 4 BHK Ultra',
//     price: '₹2.91 Cr',
//     priceValue: 29112500,
//     location: 'Vrindavan Yojna, Lucknow',
//     area: '3425 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 4,
//     bathrooms: 4,
//     status: 'Under Construction',
//     badge: 'Tower Bliss',
//     featured: false,
//     gradientFrom: '#0d1a00',
//     gradientTo: '#1f3d00',
//     amenities: [
//       'Indoor Swimming Pool',
//       'Gymnasium',
//       'Pickle Ball Court',
//       'Private Theatre',
//       'Café (Velvet Brew)',
//       'Landscaped Garden',
//       'Kids Play Area',
//       'Indoor Play Area',
//       'Multipurpose Hall',
//       'Activity Hall',
//       '2-Level Basement Parking',
//       '5-Tier Security',
//       'Power Backup (5 KVA)',
//       'EV Charging',
//       'Cricket Pitch',
//     ],
//     description:
//       'Tower Bliss faces east, greeting every morning with the warmth of the rising sun. The Ultra unit spans 3425 sq.ft. with 4 bedrooms, 4 balconies, and a 330+ sq.ft. living room. Slightly lower priced than Aspire, same uncompromising specification.',
//     developer: 'Gandharva Infratech Pvt. Ltd.',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Tower', value: 'Bliss (Block B — Eastside)' },
//       { label: 'Carpet Area', value: '1896.40 sq.ft. (176.18 sq.mt.)' },
//       { label: 'Balcony Area', value: '632.60 sq.ft. (58.77 sq.mt.)' },
//       { label: 'Built-Up Area', value: '2676.36 sq.ft. (248.64 sq.mt.)' },
//       { label: 'Total Area (with common)', value: '3425 sq.ft. (318.19 sq.mt.)' },
//       { label: 'Balconies', value: '4 Balconies — 3 Views' },
//       { label: 'Living Room', value: '330+ sq.ft.' },
//       { label: 'Society Charges (IFMS+MRMC)', value: '₹2,74,000' },
//       { label: 'Price List Date', value: '1 November 2025' },
//       { label: 'RERA No.', value: 'UPRERAPRJ486522/09/2024' },
//     ],
//     floorPlans: [
//       { name: 'Drawing + Living', area: '330.12 sq.ft.' },
//       { name: 'Master Bedroom', area: '173.48 sq.ft.' },
//       { name: 'Bedroom (Master)', area: '153.42 sq.ft.' },
//       { name: 'Bedroom', area: '140.56 sq.ft.' },
//       { name: 'Guest Bedroom', area: '110.27 sq.ft.' },
//       { name: 'Dining', area: '206.33 sq.ft.' },
//       { name: 'Kitchen', area: '122.9 sq.ft.' },
//       { name: 'Store / Puja', area: '39.33 sq.ft.' },
//       { name: 'Servant Room', area: '58.59 sq.ft.' },
//     ],
//     slug: 'imperial-residencia-bliss-ultra',
//   },

//   {
//     id: 'ir-bliss-premium',
//     title: 'Imperial Residencia – 4 BHK Premium',
//     price: '₹2.75 Cr',
//     priceValue: 27540000,
//     location: 'Vrindavan Yojna, Lucknow',
//     area: '3240 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 4,
//     bathrooms: 4,
//     status: 'Under Construction',
//     badge: 'Tower Bliss',
//     featured: false,
//     gradientFrom: '#0d1a00',
//     gradientTo: '#1f3d00',
//     amenities: [
//       'Indoor Swimming Pool',
//       'Gymnasium',
//       'Pickle Ball Court',
//       'Private Theatre',
//       'Café (Velvet Brew)',
//       'Landscaped Garden',
//       'Kids Play Area',
//       'Multipurpose Hall',
//       '2-Level Basement Parking',
//       '5-Tier Security',
//       'Power Backup (5 KVA)',
//     ],
//     description:
//       'Tower Bliss Premium — 3240 sq.ft. of east-facing luxury with 3 balconies and 3 views. All four bedrooms have walk-in wardrobes and attached bathrooms. The morning sun fills every room.',
//     developer: 'Gandharva Infratech Pvt. Ltd.',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Tower', value: 'Bliss (Block B — Eastside)' },
//       { label: 'Carpet Area', value: '1836.55 sq.ft. (170.62 sq.mt.)' },
//       { label: 'Balcony Area', value: '557.04 sq.ft. (51.75 sq.mt.)' },
//       { label: 'Built-Up Area', value: '2537.07 sq.ft. (235.70 sq.mt.)' },
//       { label: 'Total Area (with common)', value: '3240 sq.ft. (301.40 sq.mt.)' },
//       { label: 'Balconies', value: '3 Balconies — 3 Views' },
//       { label: 'Society Charges (IFMS+MRMC)', value: '₹2,59,200' },
//       { label: 'Price List Date', value: '1 November 2025' },
//       { label: 'RERA No.', value: 'UPRERAPRJ486522/09/2024' },
//     ],
//     slug: 'imperial-residencia-bliss-premium',
//   },

//   {
//     id: 'ir-bliss-smart',
//     title: 'Imperial Residencia – 4 BHK Smart',
//     price: '₹2.26 Cr',
//     priceValue: 22610000,
//     location: 'Vrindavan Yojna, Lucknow',
//     area: '2660 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 4,
//     bathrooms: 4,
//     status: 'Under Construction',
//     badge: 'Tower Bliss',
//     featured: false,
//     gradientFrom: '#0d1a00',
//     gradientTo: '#1f3d00',
//     amenities: [
//       'Indoor Swimming Pool',
//       'Gymnasium',
//       'Pickle Ball Court',
//       'Private Theatre',
//       'Landscaped Garden',
//       'Kids Play Area',
//       'Multipurpose Hall',
//       '2-Level Basement Parking',
//       '5-Tier Security',
//       'Power Backup (5 KVA)',
//     ],
//     description:
//       'The most competitively priced home at Imperial Residencia — a full 4-bedroom east-facing residence in Tower Bliss at ₹2.26 Cr. Every inch built to the same premium specification as larger units.',
//     developer: 'Gandharva Infratech Pvt. Ltd.',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Tower', value: 'Bliss (Block B — Eastside)' },
//       { label: 'Carpet Area', value: '1604.27 sq.ft. (149.04 sq.mt.)' },
//       { label: 'Balcony Area', value: '347.57 sq.ft. (32.29 sq.mt.)' },
//       { label: 'Built-Up Area', value: '2083.48 sq.ft. (193.56 sq.mt.)' },
//       { label: 'Total Area (with common)', value: '2660 sq.ft. (247.12 sq.mt.)' },
//       { label: 'Balconies', value: '3 Balconies — 3 Views' },
//       { label: 'Society Charges (IFMS+MRMC)', value: '₹2,12,800' },
//       { label: 'Price List Date', value: '1 November 2025' },
//       { label: 'RERA No.', value: 'UPRERAPRJ486522/09/2024' },
//     ],
//     slug: 'imperial-residencia-bliss-smart',
//   },

//   // ─────────────────────────────────────────────
//   // ORO CONSTELLA — 3 BHK PRIME (Tower Ariel/Vega)
//   // ─────────────────────────────────────────────

//   {
//     id: 'oc-prime-1910',
//     title: 'ORO Constella – 3 BHK Prime',
//     price: '₹1.60 Cr onwards',
//     priceValue: 16044000,
//     location: 'Golf City, Shaheed Path, Lucknow',
//     area: '1910 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 3,
//     bathrooms: 3,
//     status: 'Under Construction',
//     badge: 'ORO Constella',
//     featured: false,
//     gradientFrom: '#0a1a0a',
//     gradientTo: '#1a3d1a',
//     amenities: [
//       'Swimming Pool (Open to Sky)',
//       'Club Galaxia',
//       'Gymnasium',
//       'Tennis Court',
//       'Badminton Court',
//       'Jogging Track',
//       'Steam & Spa',
//       'Restaurant',
//       'Party Hall',
//       'Kids Play Area',
//       'Open Gym',
//       'Zen Garden',
//       'Maze Garden',
//       'EV Charging',
//       'Double Basement Parking',
//       'CCTV Surveillance',
//       'Video Door Phones',
//     ],
//     description:
//       'ORO Constella Prime — a 3-bedroom luxury residence in Tower Ariel or Vega at Golf City. Situated across floors Ground to 17th, price varies by floor. 79%+ open space, tennis court, Club Galaxia, and stunning views of the Golf City green belt.',
//     developer: 'ORO Group',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Towers', value: 'Ariel & Vega (G+20)' },
//       { label: 'Carpet Area', value: '1209.44 sq.ft.' },
//       { label: 'Unit Area', value: '1355.30 sq.ft.' },
//       { label: 'Balcony Area', value: '229.17 sq.ft.' },
//       { label: 'Super Area', value: '1910 sq.ft.' },
//       { label: 'Open Space', value: '79%+' },
//       { label: 'Price Range', value: '₹1.60 Cr – ₹1.72 Cr (floor dependent)' },
//       { label: 'PLC (Lower Floors)', value: '₹234/sqft (Ground–4th)' },
//       { label: 'RERA No.', value: 'UPRERAPRJ629194' },
//     ],
//     floorPlans: [
//       { name: '3 BHK + Kitchen + Dining + 3 Dress + 3 Toilets + 3 Balconies', area: '1910 sq.ft. Super Area' },
//     ],
//     slug: 'oro-constella-prime-3bhk-1910',
//   },

//   {
//     id: 'oc-prime-1940',
//     title: 'ORO Constella – 3 BHK Prime',
//     price: '₹1.60 Cr onwards',
//     priceValue: 16441788,
//     location: 'Golf City, Shaheed Path, Lucknow',
//     area: '1940 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 3,
//     bathrooms: 3,
//     status: 'Under Construction',
//     badge: 'ORO Constella',
//     featured: false,
//     gradientFrom: '#0a1a0a',
//     gradientTo: '#1a3d1a',
//     amenities: [
//       'Swimming Pool (Open to Sky)',
//       'Club Galaxia',
//       'Gymnasium',
//       'Tennis Court',
//       'Badminton Court',
//       'Jogging Track',
//       'Steam & Spa',
//       'Restaurant',
//       'Party Hall',
//       'Kids Play Area',
//       'EV Charging',
//       'Double Basement Parking',
//     ],
//     description:
//       'A slightly larger 3 BHK Prime variant at 1940 sq.ft. super area, with 1235.49 sq.ft. carpet area. Available across multiple floors in Towers Ariel & Vega. Floor-wise pricing applies — upper floors command a slight premium.',
//     developer: 'ORO Group',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Towers', value: 'Ariel & Vega (G+20)' },
//       { label: 'Carpet Area', value: '1235.49 sq.ft.' },
//       { label: 'Unit Area', value: '1378.22 sq.ft.' },
//       { label: 'Balcony Area', value: '231.75 sq.ft.' },
//       { label: 'Super Area', value: '1940 sq.ft.' },
//       { label: 'Price Range', value: '₹1.60 Cr – ₹1.67 Cr (floor dependent)' },
//       { label: 'RERA No.', value: 'UPRERAPRJ629194' },
//     ],
//     slug: 'oro-constella-prime-3bhk-1940',
//   },

//   {
//     id: 'oc-prime-1955',
//     title: 'ORO Constella – 3 BHK Prime',
//     price: '₹1.64 Cr onwards',
//     priceValue: 16422000,
//     location: 'Golf City, Shaheed Path, Lucknow',
//     area: '1955 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 3,
//     bathrooms: 3,
//     status: 'Under Construction',
//     badge: 'ORO Constella',
//     featured: false,
//     gradientFrom: '#0a1a0a',
//     gradientTo: '#1a3d1a',
//     amenities: [
//       'Swimming Pool',
//       'Club Galaxia',
//       'Gymnasium',
//       'Tennis Court',
//       'Jogging Track',
//       'Steam & Spa',
//       'Restaurant',
//       'Party Hall',
//       'Kids Play Area',
//       'Double Basement Parking',
//     ],
//     description:
//       '3 BHK Prime at 1955 sq.ft. super area — the largest Prime variant, available on 18th floor in Ariel/Vega. 1261.43 sq.ft. carpet area with servant room included on select units.',
//     developer: 'ORO Group',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Towers', value: 'Ariel & Vega (G+20)' },
//       { label: 'Carpet Area', value: '1261.43 sq.ft.' },
//       { label: 'Super Area', value: '1955 sq.ft.' },
//       { label: 'Available Floor', value: '18th Floor' },
//       { label: 'RERA No.', value: 'UPRERAPRJ629194' },
//     ],
//     slug: 'oro-constella-prime-3bhk-1955',
//   },

//   // ─────────────────────────────────────────────
//   // ORO CONSTELLA — 3 BHK + SERVANT (SUPREME)
//   // ─────────────────────────────────────────────

//   {
//     id: 'oc-supreme-2105',
//     title: 'ORO Constella – 3 BHK Supreme (with SQ)',
//     price: '₹1.76 Cr onwards',
//     priceValue: 17682000,
//     location: 'Golf City, Shaheed Path, Lucknow',
//     area: '2105 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 3,
//     bathrooms: 4,
//     status: 'Under Construction',
//     badge: 'ORO Constella',
//     featured: false,
//     gradientFrom: '#0a1a0a',
//     gradientTo: '#1a3d1a',
//     amenities: [
//       'Swimming Pool',
//       'Club Galaxia',
//       'Gymnasium',
//       'Tennis Court',
//       'Badminton Court',
//       'Jogging Track',
//       'Steam & Spa',
//       'Restaurant',
//       'Party Hall',
//       'Kids Play Area',
//       'EV Charging',
//       'Double Basement Parking',
//     ],
//     description:
//       'Supreme is the 3 BHK + Servant Quarter variant — perfect for those who need a dedicated space for domestic help or a separate work area. 2105 sq.ft. super area with 1351.74 sq.ft. carpet. Available across multiple floors in Towers Ariel & Vega.',
//     developer: 'ORO Group',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Towers', value: 'Ariel & Vega (G+20)' },
//       { label: 'Carpet Area', value: '1351.74 sq.ft.' },
//       { label: 'Unit Area', value: '1748.39 sq.ft.' },
//       { label: 'Super Area', value: '2105 sq.ft.' },
//       { label: 'Configuration', value: '3 BHK + Kitchen + Dining + 4 Dress + 4 TOI + 4 BAL + Lounge' },
//       { label: 'Price Range', value: '₹1.76 Cr – ₹1.79 Cr (floor dependent)' },
//       { label: 'RERA No.', value: 'UPRERAPRJ629194' },
//     ],
//     slug: 'oro-constella-supreme-3bhk-sq',
//   },

//   {
//     id: 'oc-supreme-ground-2040',
//     title: 'ORO Constella – 3 BHK Supreme (Ground Floor)',
//     price: '₹1.74 Cr',
//     priceValue: 17434902,
//     location: 'Golf City, Shaheed Path, Lucknow',
//     area: '2040 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 3,
//     bathrooms: 4,
//     status: 'Under Construction',
//     badge: 'ORO Constella',
//     featured: false,
//     gradientFrom: '#0a1a0a',
//     gradientTo: '#1a3d1a',
//     amenities: [
//       'Swimming Pool',
//       'Club Galaxia',
//       'Gymnasium',
//       'Tennis Court',
//       'Kids Play Area',
//       'Double Basement Parking',
//     ],
//     description:
//       'Ground floor Supreme variant in Towers Aster & Cosmo. 3 BHK with 4 toilets, 4 balconies, and a lounge. Carpet area 1277.36 sq.ft. on ground floor with direct garden access.',
//     developer: 'ORO Group',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Towers', value: 'Aster & Cosmo (G+21)' },
//       { label: 'Floor', value: 'Ground Floor' },
//       { label: 'Carpet Area', value: '1277.36 sq.ft.' },
//       { label: 'Unit Area', value: '1426.23 sq.ft.' },
//       { label: 'Balcony Area', value: '276.63 sq.ft.' },
//       { label: 'Super Area', value: '2040 sq.ft.' },
//       { label: 'RERA No.', value: 'UPRERAPRJ629194' },
//     ],
//     slug: 'oro-constella-supreme-ground-aster-cosmo',
//   },

//   // ─────────────────────────────────────────────
//   // ORO CONSTELLA — 4 BHK ROYALE
//   // ─────────────────────────────────────────────

//   {
//     id: 'oc-royale-2495',
//     title: 'ORO Constella – 4 BHK Royale',
//     price: '₹2.09 Cr onwards',
//     priceValue: 20958000,
//     location: 'Golf City, Shaheed Path, Lucknow',
//     area: '2495 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 4,
//     bathrooms: 4,
//     status: 'Under Construction',
//     badge: 'ORO Constella',
//     featured: true,
//     gradientFrom: '#0a1a0a',
//     gradientTo: '#1a3d1a',
//     amenities: [
//       'Swimming Pool (Open to Sky)',
//       'Club Galaxia',
//       'Gymnasium',
//       'Tennis Court',
//       'Badminton Court',
//       'Jogging Track',
//       'Steam & Spa',
//       'Restaurant',
//       'Party Hall',
//       'Kids Play Area',
//       'Open Gym',
//       'Zen Garden',
//       'Maze Garden',
//       'EV Charging',
//       'Double Basement Parking',
//       'CCTV & Video Door Phones',
//     ],
//     description:
//       'The Royale is the 4 BHK flagship of ORO Constella in Towers Aster & Cosmo — 4 bedrooms, servant room, dedicated lounge, powder room, and 4 balconies. 2495 sq.ft. of pure luxury at Golf City, one of Lucknow\'s most prestigious addresses.',
//     developer: 'ORO Group',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Towers', value: 'Aster & Cosmo (G+21)' },
//       { label: 'Carpet Area', value: '1609.43 sq.ft.' },
//       { label: 'Unit Area', value: '2083.16 sq.ft.' },
//       { label: 'Super Area', value: '2495 sq.ft.' },
//       { label: 'Configuration', value: '4 BHK + Kitchen + Dining + 2 Dress + 4 TOI + 4 BAL + Lounge + Powder + Servant' },
//       { label: 'Price Range', value: '₹2.09 Cr – ₹2.13 Cr (floor dependent)' },
//       { label: 'Open Space', value: '79%+' },
//       { label: 'RERA No.', value: 'UPRERAPRJ629194' },
//     ],
//     floorPlans: [
//       { name: '4 BHK + Kitchen + Dining + 2 Dress + 4 TOI + 4 BAL + Lounge + Powder + Servant', area: '2495 sq.ft. Super Area' },
//       { name: 'Carpet Area', area: '1609.43 sq.ft.' },
//       { name: 'Balcony Area', area: '307.10 sq.ft.' },
//     ],
//     slug: 'oro-constella-royale-4bhk-2495',
//   },

//   {
//     id: 'oc-royale-2665',
//     title: 'ORO Constella – 4 BHK Royale (Large)',
//     price: '₹2.25 Cr onwards',
//     priceValue: 22588387,
//     location: 'Golf City, Shaheed Path, Lucknow',
//     area: '2665 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Apartment',
//     bedrooms: 4,
//     bathrooms: 5,
//     status: 'Under Construction',
//     badge: 'ORO Constella',
//     featured: false,
//     gradientFrom: '#0a1a0a',
//     gradientTo: '#1a3d1a',
//     amenities: [
//       'Swimming Pool',
//       'Club Galaxia',
//       'Gymnasium',
//       'Tennis Court',
//       'Steam & Spa',
//       'Restaurant',
//       'Party Hall',
//       'Kids Play Area',
//       'Double Basement Parking',
//       'EV Charging',
//     ],
//     description:
//       'The larger Royale variant at 2665 sq.ft. — 1715.14 sq.ft. carpet area with an expansive servant quarter. Available in Aster & Cosmo towers on select floors. One of the most generously sized 4 BHK offerings at Golf City.',
//     developer: 'ORO Group',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Towers', value: 'Aster & Cosmo (G+21)' },
//       { label: 'Carpet Area', value: '1715.14 sq.ft.' },
//       { label: 'Unit Area', value: '2226.53 sq.ft.' },
//       { label: 'Super Area', value: '2665 sq.ft.' },
//       { label: 'Price Range', value: '₹2.28 Cr – ₹2.29 Cr (floor dependent)' },
//       { label: 'RERA No.', value: 'UPRERAPRJ629194' },
//     ],
//     slug: 'oro-constella-royale-4bhk-2665',
//   },

//   // ─────────────────────────────────────────────
//   // ORO CONSTELLA — PRESIDENTIAL DUPLEX (5 BHK)
//   // ─────────────────────────────────────────────

//   {
//     id: 'oc-presidential-ariel-vega',
//     title: 'ORO Constella – 5 BHK Presidential Duplex',
//     price: '₹3.69 Cr onwards',
//     priceValue: 36918000,
//     location: 'Golf City, Shaheed Path, Lucknow',
//     area: '4395 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Penthouse',
//     bedrooms: 5,
//     bathrooms: 5,
//     status: 'Under Construction',
//     badge: 'Presidential Duplex',
//     featured: true,
//     gradientFrom: '#1a0a0a',
//     gradientTo: '#3d1a00',
//     amenities: [
//       'Swimming Pool',
//       'Club Galaxia',
//       'Gymnasium',
//       'Tennis Court',
//       'Steam & Spa',
//       'Restaurant',
//       'Party Hall',
//       'Double Basement Parking',
//       'EV Charging',
//       'CCTV & Video Door Phones',
//     ],
//     description:
//       'The Presidential Duplex spans floors 19th & 20th in Towers Ariel & Vega — a true exotic bungalow feel in an apartment. 5 BHK with servant quarter, 4 dressing rooms, 5 toilets, 4 balconies, across 4395 sq.ft. super area. An exotic bangalow in the sky.',
//     developer: 'ORO Group',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Towers', value: 'Ariel & Vega (19th & 20th Floor)' },
//       { label: 'Carpet Area', value: '2669.79 sq.ft.' },
//       { label: 'Unit Area', value: '2934.27 sq.ft.' },
//       { label: 'Balcony Area', value: '714.41 sq.ft.' },
//       { label: 'Super Area', value: '4395 sq.ft.' },
//       { label: 'Configuration', value: '5 BHK + Kitchen + Dining + 4 Dress + 5 TOI + 4 BAL + Servant Room with Toilet' },
//       { label: 'Duplex Terrace', value: 'Extra @ ₹3,500/sqft' },
//       { label: 'RERA No.', value: 'UPRERAPRJ629194' },
//     ],
//     floorPlans: [
//       { name: 'Lower Level (19th Floor)', area: 'Living, Dining, 2 Bedrooms, Kitchen' },
//       { name: 'Upper Level (20th Floor)', area: '3 Bedrooms, Servant Room, Terrace Open to Sky' },
//     ],
//     slug: 'oro-constella-presidential-duplex-ariel-vega',
//   },

//   {
//     id: 'oc-presidential-aster-cosmo',
//     title: 'ORO Constella – 5 BHK Presidential Duplex',
//     price: '₹4.16 Cr onwards',
//     priceValue: 41664000,
//     location: 'Golf City, Shaheed Path, Lucknow',
//     area: '4960 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Penthouse',
//     bedrooms: 5,
//     bathrooms: 5,
//     status: 'Under Construction',
//     badge: 'Presidential Duplex',
//     featured: true,
//     gradientFrom: '#1a0a0a',
//     gradientTo: '#3d1a00',
//     amenities: [
//       'Swimming Pool',
//       'Club Galaxia',
//       'Gymnasium',
//       'Tennis Court',
//       'Steam & Spa',
//       'Restaurant',
//       'Party Hall',
//       'Double Basement Parking',
//       'EV Charging',
//     ],
//     description:
//       'The grandest Presidential Duplex in Aster & Cosmo towers — spanning 20th & 21st floors at 4960 sq.ft. super area. Store, lounge, powder room, 8 balconies, and a terrace open to sky. One of the most exclusive residences in Lucknow.',
//     developer: 'ORO Group',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Towers', value: 'Aster & Cosmo (20th & 21st Floor)' },
//       { label: 'Carpet Area', value: '2918.01 sq.ft.' },
//       { label: 'Unit Area', value: '3303.90 sq.ft.' },
//       { label: 'Balcony Area', value: '842.18 sq.ft.' },
//       { label: 'Super Area', value: '4960 sq.ft.' },
//       { label: 'Configuration', value: '5 BHK + Kitchen + Dining + 4 Dress + 5 TOI + 8 BAL + Store + Lounge + Powder + Servant with Toilet' },
//       { label: 'Duplex Terrace', value: 'Terrace Open to Sky' },
//       { label: 'RERA No.', value: 'UPRERAPRJ629194' },
//     ],
//     floorPlans: [
//       { name: 'Lower Level (20th Floor)', area: '3 Bedrooms, Living, Dining, Kitchen, Terrace' },
//       { name: 'Upper Level (21st Floor)', area: '2 Bedrooms, Servant Room, Lounge, Balconies, Terrace Open to Sky' },
//     ],
//     slug: 'oro-constella-presidential-duplex-aster-cosmo',
//   },

//   // ─────────────────────────────────────────────
//   // ORO CONSTELLA — SKY VILLA (5 BHK PENTHOUSE)
//   // ─────────────────────────────────────────────

//   {
//     id: 'oc-skyvilla-3790',
//     title: 'ORO Constella – 5 BHK Sky Villa',
//     price: '₹3.21 Cr',
//     priceValue: 32121429,
//     location: 'Golf City, Shaheed Path, Lucknow',
//     area: '3790 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Penthouse',
//     bedrooms: 5,
//     bathrooms: 5,
//     status: 'Under Construction',
//     badge: 'Sky Villa',
//     featured: true,
//     gradientFrom: '#0a0a1a',
//     gradientTo: '#1a1a3d',
//     amenities: [
//       'Swimming Pool',
//       'Club Galaxia',
//       'Gymnasium',
//       'Tennis Court',
//       'Steam & Spa',
//       'Restaurant',
//       'Party Hall',
//       'Double Basement Parking',
//       'EV Charging',
//       'CCTV & Video Door Phones',
//     ],
//     description:
//       'The Sky Villa is ORO Constella\'s crown jewel — a 5 BHK penthouse duplex across 19th & 20th floors in Tower Ariel/Vega with breathtaking views of the surrounding cityscape. Lobby, servant room, 5 toilets, 6 balconies across 3790 sq.ft. Life redefined.',
//     developer: 'ORO Group',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Towers', value: 'Ariel & Vega (19th & 20th Floor)' },
//       { label: 'Carpet Area', value: '2418.89 sq.ft.' },
//       { label: 'Unit Area', value: '2708.65 sq.ft.' },
//       { label: 'Balcony Area', value: '439.06 sq.ft.' },
//       { label: 'Super Area', value: '3790 sq.ft.' },
//       { label: 'Configuration', value: '5 BHK + Kitchen + Dining + Lobby + Dress + 5 TOI + 6 BAL + Servant Room with Toilet' },
//       { label: 'RERA No.', value: 'UPRERAPRJ629194' },
//     ],
//     floorPlans: [
//       { name: 'Lower Level (19th Floor)', area: 'Living/Dining, 2 Bedrooms, Kitchen, Lobby, Balcony' },
//       { name: 'Upper Level (20th Floor)', area: '3 Bedrooms, Servant Room, Lounge, Multiple Balconies' },
//     ],
//     slug: 'oro-constella-sky-villa-3790',
//   },

//   {
//     id: 'oc-skyvilla-3855',
//     title: 'ORO Constella – 5 BHK Sky Villa',
//     price: '₹3.24 Cr',
//     priceValue: 32382000,
//     location: 'Golf City, Shaheed Path, Lucknow',
//     area: '3855 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Penthouse',
//     bedrooms: 5,
//     bathrooms: 5,
//     status: 'Under Construction',
//     badge: 'Sky Villa',
//     featured: false,
//     gradientFrom: '#0a0a1a',
//     gradientTo: '#1a1a3d',
//     amenities: [
//       'Swimming Pool',
//       'Club Galaxia',
//       'Gymnasium',
//       'Tennis Court',
//       'Steam & Spa',
//       'Restaurant',
//       'Party Hall',
//       'Double Basement Parking',
//       'EV Charging',
//     ],
//     description:
//       'Sky Villa variant 2 in Ariel/Vega towers — 3855 sq.ft. super area, 2470.98 sq.ft. carpet area with 443.69 sq.ft. of balconies. Spanning 19th & 20th floor with unobstructed panoramic views.',
//     developer: 'ORO Group',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Towers', value: 'Ariel & Vega (19th & 20th Floor)' },
//       { label: 'Carpet Area', value: '2470.98 sq.ft.' },
//       { label: 'Unit Area', value: '2755.37 sq.ft.' },
//       { label: 'Balcony Area', value: '443.69 sq.ft.' },
//       { label: 'Super Area', value: '3855 sq.ft.' },
//       { label: 'RERA No.', value: 'UPRERAPRJ629194' },
//     ],
//     slug: 'oro-constella-sky-villa-3855',
//   },

//   {
//     id: 'oc-skyvilla-aster-5165',
//     title: 'ORO Constella – 5 BHK Sky Villa (Mega)',
//     price: '₹4.37 Cr',
//     priceValue: 43741770,
//     location: 'Golf City, Shaheed Path, Lucknow',
//     area: '5165 sq.ft.',
//     type: 'project',
//     subtype: 'new',
//     category: 'Penthouse',
//     bedrooms: 5,
//     bathrooms: 5,
//     status: 'Under Construction',
//     badge: 'Sky Villa — Mega',
//     featured: true,
//     gradientFrom: '#0a0a1a',
//     gradientTo: '#1a1a3d',
//     amenities: [
//       'Swimming Pool',
//       'Club Galaxia',
//       'Gymnasium',
//       'Tennis Court',
//       'Steam & Spa',
//       'Restaurant',
//       'Party Hall',
//       'Double Basement Parking',
//       'EV Charging',
//       'Terrace Open to Sky',
//     ],
//     description:
//       'The largest and most exclusive residence at ORO Constella — 5165 sq.ft. Sky Villa duplex in Aster & Cosmo towers spanning 20th & 21st floors. 3015 sq.ft. carpet area, 825 sq.ft. of balconies, lounge, powder room, terrace open to sky. The pinnacle of Lucknow luxury.',
//     developer: 'ORO Group',
//     possession: 'As per RERA schedule',
//     highlights: [
//       { label: 'Towers', value: 'Aster & Cosmo (20th & 21st Floor)' },
//       { label: 'Carpet Area', value: '3015.00 sq.ft.' },
//       { label: 'Unit Area', value: '3494.53 sq.ft.' },
//       { label: 'Balcony Area', value: '825.28 sq.ft.' },
//       { label: 'Super Area', value: '5165 sq.ft.' },
//       { label: 'Configuration', value: '5 BHK + Kitchen + Dining + 4 Dress + 5 TOI + 8 BAL + Lounge + Powder + Servant with Toilet' },
//       { label: 'Terrace', value: 'Open to Sky Terrace' },
//       { label: 'RERA No.', value: 'UPRERAPRJ629194' },
//     ],
//     floorPlans: [
//       { name: 'Lower Level (20th Floor)', area: '2 Bedrooms, Living/Dining, Kitchen, Servant Room' },
//       { name: 'Upper Level (21st Floor)', area: '3 Bedrooms, Lounge, Multiple Balconies, Terrace Open to Sky' },
//     ],
//     slug: 'oro-constella-sky-villa-mega-5165',
//   },
// ]

// // ─────────────────────────────────────────────────
// // PAYMENT PLANS (reference data — use where needed)
// // ─────────────────────────────────────────────────

// export const paymentPlans = {
//   imperialResidencia: {
//     name: 'Construction Linked Payment Plan (CLP)',
//     note: 'Flat Cost includes BSP and PLC. Other Charges: EDC, EEC, FFC, Club Membership, Single Car Parking, Power Backup (min. 5 KVA). Society: IFMS + MRMC.',
//     installments: [
//       { sl: 1, milestone: 'At the time of Booking', percent: 5 },
//       { sl: 2, milestone: 'On Agreement / Within 30 Days', percent: 5 },
//       { sl: 3, milestone: 'On Commencement of Excavation', percent: 5 },
//       { sl: 4, milestone: 'On Commencement of Basement', percent: 10 },
//       { sl: 5, milestone: 'On/Before Completion of 1st Floor Slab', percent: 5 },
//       { sl: 6, milestone: 'On/Before Completion of 2nd Floor Slab', percent: 5 },
//       { sl: 7, milestone: 'On/Before Completion of 4th Floor Slab', percent: 5 },
//       { sl: 8, milestone: 'On/Before Completion of 6th Floor Slab', percent: 5 },
//       { sl: 9, milestone: 'On/Before Completion of 8th Floor Slab', percent: 5 },
//       { sl: 10, milestone: 'On/Before Completion of 10th Floor Slab', percent: 5 },
//       { sl: 11, milestone: 'On/Before Completion of 12th Floor Slab', percent: 5 },
//       { sl: 12, milestone: 'On/Before Completion of 14th Floor Slab', percent: 5 },
//       { sl: 13, milestone: 'On Completion of Brick Work', percent: 5 },
//       { sl: 14, milestone: 'On Commencement of Plumbing Work', percent: 5 },
//       { sl: 15, milestone: 'On Commencement of Flooring', percent: 5 },
//       { sl: 16, milestone: 'On Commencement of UPVC Work', percent: 5 },
//       { sl: 17, milestone: 'On Commencement of Installation of Doors', percent: 5 },
//       { sl: 18, milestone: 'On Commencement of Installation of Railing', percent: 5 },
//       { sl: 19, milestone: 'On Offer of Possession', percent: 5 },
//     ],
//   },
//   oroConstella: {
//     clp: {
//       name: 'Construction Linked Payment Plan (Plan A)',
//       bookingAmount: '₹5,00,000',
//       installments: [
//         { milestone: 'Booking Amount', amount: '₹5,00,000' },
//         { milestone: '45th Day of Booking', amount: '10% BSP – Booking Amount' },
//         { milestone: '90th Day of Booking', amount: '15% BSP + PLC + CDC' },
//         { milestone: '135th Day of Booking', amount: '15% BSP + Club Membership' },
//         { milestone: '180th Day of Booking', amount: '15% BSP + EEC + FFC' },
//         { milestone: 'On Initiation of Flooring (Particular Floor)', amount: '15% BSP + Power Backup' },
//         { milestone: 'On Initiation of Internal Painting (Particular Floor)', amount: '10% BSP + Parking' },
//         { milestone: 'On Initiation of External Painting (Tower)', amount: '10% BSP' },
//         { milestone: 'On Offer of Possession', amount: '10% BSP + IFMS + MRMC + Reg + SD' },
//       ],
//     },
//     downPayment: {
//       name: 'Down Payment Plan (5% Discount on BSP)',
//       installments: [
//         { milestone: '30th Day of Booking', amount: '10% BSP + 100% PLC' },
//         { milestone: '120th Day of Booking', amount: '75% BSP + 100% Other Charges' },
//         { milestone: 'At Allotment', amount: '10% BSP' },
//         { milestone: 'On Offer of Possession', amount: '5% BSP + IFMS + MRMC + Reg + Stamp Duty' },
//       ],
//     },
//   },
// }

// // ─────────────────────────────────────────────────
// // OTHER CHARGES — ORO CONSTELLA (reference)
// // ─────────────────────────────────────────────────

// export const oroConstellaOtherCharges = {
//   plc: [
//     { floors: 'Ground to 4th', ratePerSqft: 234 },
//     { floors: '5th to 7th', ratePerSqft: 195 },
//     { floors: '8th to 9th', ratePerSqft: 156 },
//     { floors: '10th to 12th (Green/Park Facing)', ratePerSqft: 118 },
//     { floors: '13th and above', ratePerSqft: 94 },
//   ],
//   additionalCharges: [
//     { name: 'City Development Charges (CDC)', basis: 'Carpet Area', rate: '₹94/sqft' },
//     { name: 'External Electrification Charges (EEC)', basis: 'Carpet Area', rate: '₹102/sqft' },
//     { name: 'Fire Fighting Charges (FFC)', basis: 'Carpet Area', rate: '₹118/sqft' },
//     { name: 'IFMS', basis: 'Carpet Area', rate: '₹94/sqft at possession' },
//     { name: 'Power Backup', basis: 'Per KVA', rate: '₹24,000/KVA (5 KVA)' },
//     { name: 'MRMC', basis: 'Carpet Area', rate: '₹5.50/sqft/month — 36 months advance' },
//     { name: 'Club Membership', basis: 'Flat', rate: '₹1,50,000' },
//     { name: 'Reserved Surface Parking', basis: 'Per slot', rate: '₹2,25,000' },
//     { name: 'Basement Parking (Single)', basis: 'Per slot', rate: '₹4,00,000' },
//     { name: 'Basement Parking (Back-to-Back)', basis: 'Per slot', rate: '₹6,00,000' },
//     { name: 'Duplex Terrace Area', basis: 'Per sqft', rate: '₹3,500/sqft extra' },
//   ],
// }



export interface Property {
  id: string
  title: string
  price: string
  priceValue: number
  location: string
  area: string
  type: 'buy' | 'rent' | 'project'
  subtype?: 'new' | 'resell'
  category: 'Apartment' | 'Villa' | 'Plot' | 'Commercial' | 'Penthouse'
  bedrooms: number
  bathrooms: number
  status: 'Ready to Move' | 'Under Construction' | 'New Launch'
  badge?: string
  featured?: boolean
  gradientFrom: string
  gradientTo: string
  amenities: string[]
  description: string
  developer?: string
  possession?: string
  ownerName?: string
  ownerSince?: string
  ageOfProperty?: string
  // ← ADD THESE 2 FIELDS
  mainImage?: string              // required - main image path
  gallery?: string[]             // optional - multiple images array
  highlights: { label: string; value: string }[]
  floorPlans?: { name: string; area: string }[]
  slug: string
}

// Shared amenity lists
const IR_AMENITIES = [
  'Indoor Swimming Pool (Temperature Controlled)',
  'Vitalis — Gymnasium',
  'Aktive — Pickle Ball Court',
  'Private Theatre',
  'Velvet Brew — The Café',
  'Landscaped Garden',
  'Kids Play Area',
  'Indoor Play Area',
  'Multipurpose Hall',
  'Activity Hall',
  '2-Level Basement Parking',
  '5-Tier 24/7 Security',
  'CCTV + Video Door Phones',
  'Power Backup 5 KVA',
  'EV Charging',
  'Cricket Pitch',
  'Meeting Room',
  'Essential Shops',
]

const OC_AMENITIES = [
  'Swimming Pool (Open to Sky)',
  'Club Galaxia',
  'Gymnasium',
  'Tennis Court',
  'Badminton Court',
  'Jogging Track',
  'Steam & Spa',
  'Restaurant',
  'Party Hall',
  'Kids Play Area',
  'Open Gym',
  'Zen Garden',
  'Maze Garden',
  'Toddlers Park',
  'EV Charging',
  'Double Basement Parking',
  'CCTV + Video Door Phones',
  'Pergola Sitout',
  'Oxy Garden',
]


const RMH_AMENITIES = [
  'Indoor All Weather Swimming Pool',
  'Club Rishita (60,000 sq.ft.)',
  'Gymnasium',
  'Indoor Badminton Court',
  'Squash Court',
  'Billiards / Pool Room',
  'Mini Theatre',
  'Golf & Cricket Simulator',
  'Salon & Spa',
  'Banquet Hall',
  'Party Hall',
  'Restaurant & Floating Restaurant',
  'Conference Room',
  'Library',
  'Gaming Area',
  'Creche & Indoor Kids Play Zone',
  'Landscaped Terrace with Sitout',
  'Serviced Guest Rooms (Suites)',
  'Convenience Shopping',
  'CCTV + 24/7 Security',
]

// ═══════════════════════════════════════════════════════════════════
// ELDECO TRINITY — GOMTI NAGAR EXTENSION, LUCKNOW
// Developer: Eldeco Inception Buildtech Pvt. Ltd.
// RERA: UPRERAPRJ787868 | Contact: 8882 593 593
// Status: Under Construction | Dated: 2025
// ───────────────────────────────────────────────────────────────────
// ADD THIS CONSTANT at top of data.ts alongside IR/OC/RMH amenities
// ═══════════════════════════════════════════════════════════════════

const ET_AMENITIES = [
  'Swimming Pool',
  'Lifestyle Club',
  'Gymnasium',
  'Pickleball Court',
  'Indoor Badminton Court',
  'Multipurpose Court',
  'Sauna & Spa',
  'Mini Theatre',
  'Yoga Area',
  'Library',
  'Kids Play Area',
  'Creche',
  'Open Gym Area',
  'Fine Dining Restaurant',
  'VRV AC in All Rooms',
  '11ft Floor-to-Ceiling Height',
  'Digital Door Lock',
  'CCTV + Mobile App Security',
  'Retail Plaza',
  '7.5 KVA Power Backup (Included)',
]

// ═══════════════════════════════════════
// KAILASHA AWADH — COMPLETE DATA FILE
// ═══════════════════════════════════════

// ✅ COMMON AMENITIES (REUSABLE)
export const KA_AMENITIES = [
  'Prime Location on Shaheed Path',
  'Just Minutes from Airport',
  'High-Street Retail Concept',
  'High Footfall Catchment',
  'Double Height Shops (Selected Units)',
  'Wide Frontage Retail Spaces',
  'Modern Architectural Design',
  'Central Atrium Design',
  'Escalators & High-Speed Elevators',
  'Dedicated Service Lifts',
  '24x7 CCTV Surveillance',
  'Advanced Security System',
  'Ample Basement Parking',
  'Separate Entry & Exit Points',
  'Power Backup',
  'Low Maintenance Structure',
  'Food Court & Restaurant Zone',
  'Retail + Dining + Entertainment Mix',
  'Lease Assistance Available',
  'Premium Branding Visibility',
  'Wide Corridors for Customer Flow',
  'Well Ventilated Layout',
  'Fire Fighting System',
  'Earthquake Resistant Structure',
]

// ═══════════════════════════════════════
// MIGSUN LUCKNOW CENTRAL — MASTER FILE
// ═══════════════════════════════════════

// ✅ COMMON AMENITIES
export const MIGSUN_AMENITIES = [
  'Prime Location on Shaheed Path',
  'High-Street Retail + Office Concept',
  'Multiple Towers (A, B, C)',
  'Food Court & Entertainment Zone',
  'Escalators & High-Speed Elevators',
  'Ample Parking Space',
  '24x7 CCTV Surveillance',
  'Power Backup',
  'Modern Architectural Design',
  'Wide Corridors & Central Atrium',
  'Retail + Office Mixed Development',
  'High Footfall Catchment',
  'Premium Commercial Hub',
  'Fire Fighting System',
  'Low Maintenance Structure',
]

// ✅ COMMON HIGHLIGHTS
const MIGSUN_COMMON = [
  { label: 'Project Size', value: '250+ Retail Shops & Office Spaces' },
  { label: 'Investment Type', value: 'Commercial (Retail + Office)' },
  { label: 'RERA', value: 'UPRERAPRJ589752/04/2024' },
]

export const properties: Property[] = [

  // ═══════════════════════════════════════
  // IMPERIAL RESIDENCIA — TOWER ASPIRE (A)
  // w.e.f. 15 January 2026
  // ═══════════════════════════════════════

  {
    id: 'ir-aspire-ultra',
    title: '4 BHK Ultra — Tower Aspire',
    price: '₹3.25 Cr',
    priceValue: 32537500,
    location: 'Vrindavan Yojna, Sector 12, Lucknow',
    area: '3425 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 4, bathrooms: 4,
    status: 'Under Construction', badge: 'Imperial Residencia', featured: true,
    gradientFrom: '#1a0800', gradientTo: '#3d1c00',
    amenities: IR_AMENITIES,
    description: 'The flagship Ultra — 3425 sq.ft. with 4 bedrooms, 4 full balconies offering 3 distinct views, 330+ sq.ft. living room. No shared walls. West-facing Block A.',
    developer: 'Gandharva Infratech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Aspire — Block A (Westside)' },
      { label: 'Carpet Area', value: '1896.40 sq.ft. / 176.18 sq.mt.' },
      { label: 'Balcony Area', value: '632.60 sq.ft. / 58.77 sq.mt.' },
      { label: 'Built-Up Area', value: '2676.36 sq.ft. / 248.64 sq.mt.' },
      { label: 'Total Area', value: '3425 sq.ft. / 318.19 sq.mt.' },
      { label: 'Balconies', value: '4 Balconies — 3 Views' },
      { label: 'Living Room', value: '330+ sq.ft.' },
      { label: 'Society Charges', value: '₹2,74,000 (IFMS + MRMC)' },
      { label: 'Price Date', value: '15 Jan 2026' },
      { label: 'RERA', value: 'UPRERAPRJ486522/09/2024' },
    ],
    floorPlans: [
      { name: 'Bedroom (Guest)', area: '110.27 sq.ft. — 11\'2" × 9\'10.5"' },
      { name: 'Bedroom', area: '140.56 sq.ft. — 11\'9.5" × 11\'11.5"' },
      { name: 'Bedroom (Master)', area: '153.42 sq.ft. — 15\'1" × 10\'2"' },
      { name: 'Bedroom (Master)', area: '173.48 sq.ft. — 15\'1" × 11\'9"' },
      { name: 'Drawing + Living', area: '330.12 sq.ft. — 11\'9.5" × 28\'0"' },
      { name: 'Dining', area: '206.33 sq.ft. — 17\'9" × 11\'9.5"' },
      { name: 'Kitchen', area: '122.9 sq.ft. — 11\'9.5" × 10\'5"' },
      { name: 'Store / Puja', area: '39.33 sq.ft. — 4\'11" × 8\'0"' },
      { name: 'Servant Room', area: '58.59 sq.ft. — 6\'8.5" × 8\'11.5"' },
    ],
    slug: 'imperial-residencia-aspire-ultra',
  },

  {
    id: 'ir-aspire-premium',
    title: '4 BHK Premium — Tower Aspire',
    price: '₹3.08 Cr',
    priceValue: 30780000,
    location: 'Vrindavan Yojna, Sector 12, Lucknow',
    area: '3240 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 4, bathrooms: 4,
    status: 'Under Construction', badge: 'Imperial Residencia', featured: true,
    gradientFrom: '#1a0800', gradientTo: '#3d1c00',
    amenities: IR_AMENITIES,
    description: '4 BHK Premium in west-facing Aspire tower — 3240 sq.ft., 3 balconies spanning 3 views, 330+ sq.ft. living room. Walk-in wardrobe in every bedroom.',
    developer: 'Gandharva Infratech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Aspire — Block A (Westside)' },
      { label: 'Carpet Area', value: '1836.55 sq.ft. / 170.62 sq.mt.' },
      { label: 'Balcony Area', value: '557.04 sq.ft. / 51.75 sq.mt.' },
      { label: 'Built-Up Area', value: '2537.07 sq.ft. / 235.70 sq.mt.' },
      { label: 'Total Area', value: '3240 sq.ft. / 301.40 sq.mt.' },
      { label: 'Balconies', value: '3 Balconies — 3 Views' },
      { label: 'Living Room', value: '330+ sq.ft.' },
      { label: 'Society Charges', value: '₹2,59,200 (IFMS + MRMC)' },
      { label: 'Price Date', value: '15 Jan 2026' },
      { label: 'RERA', value: 'UPRERAPRJ486522/09/2024' },
    ],
    floorPlans: [
      { name: 'Drawing + Living', area: '330.12 sq.ft. — 11\'9.5" × 28\'0"' },
      { name: 'Master Bedroom', area: '173.48 sq.ft. — 15\'1" × 11\'9"' },
      { name: 'Bedroom', area: '153.42 sq.ft. — 15\'1" × 10\'2"' },
      { name: 'Bedroom', area: '140.56 sq.ft.' },
      { name: 'Guest Bedroom', area: '110.27 sq.ft.' },
      { name: 'Kitchen', area: '118.57 sq.ft. — 11\'4.5" × 10\'5"' },
      { name: 'Store / Puja', area: '39.33 sq.ft.' },
      { name: 'Servant Room', area: '58.59 sq.ft.' },
    ],
    slug: 'imperial-residencia-aspire-premium',
  },

  {
    id: 'ir-aspire-smart',
    title: '4 BHK Smart — Tower Aspire',
    price: '₹2.53 Cr',
    priceValue: 25270000,
    location: 'Vrindavan Yojna, Sector 12, Lucknow',
    area: '2660 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 4, bathrooms: 4,
    status: 'Under Construction', badge: 'Imperial Residencia', featured: false,
    gradientFrom: '#1a0800', gradientTo: '#3d1c00',
    amenities: IR_AMENITIES,
    description: 'The Smart — most accessible entry into Imperial Residencia at ₹2.53 Cr. Full 4 BHK with walk-in wardrobes, 3 balconies, 290+ sq.ft. living room.',
    developer: 'Gandharva Infratech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Aspire — Block A (Westside)' },
      { label: 'Carpet Area', value: '1604.27 sq.ft. / 149.04 sq.mt.' },
      { label: 'Balcony Area', value: '347.57 sq.ft. / 32.29 sq.mt.' },
      { label: 'Built-Up Area', value: '2083.48 sq.ft. / 193.56 sq.mt.' },
      { label: 'Total Area', value: '2660 sq.ft. / 247.12 sq.mt.' },
      { label: 'Balconies', value: '3 Balconies — 3 Views' },
      { label: 'Living Room', value: '290+ sq.ft.' },
      { label: 'Society Charges', value: '₹2,12,800 (IFMS + MRMC)' },
      { label: 'Price Date', value: '15 Jan 2026' },
      { label: 'RERA', value: 'UPRERAPRJ486522/09/2024' },
    ],
    floorPlans: [
      { name: 'Drawing + Living', area: '290.02 sq.ft. — 12\'2" × 23\'10.5"' },
      { name: 'Master Bedroom', area: '155.26 sq.ft. — 15\'1" × 10\'3.5"' },
      { name: 'Bedroom', area: '155.26 sq.ft.' },
      { name: 'Bedroom', area: '140.97 sq.ft.' },
      { name: 'Guest Bedroom', area: '106.06 sq.ft.' },
      { name: 'Kitchen', area: '115.88 sq.ft.' },
      { name: 'Store / Puja', area: '38.66 sq.ft.' },
      { name: 'Servant Room', area: '58.02 sq.ft.' },
    ],
    slug: 'imperial-residencia-aspire-smart',
  },

  // ═══════════════════════════════════════
  // IMPERIAL RESIDENCIA — TOWER BLISS (B)
  // w.e.f. 1 November 2025
  // ═══════════════════════════════════════

  {
    id: 'ir-bliss-ultra',
    title: '4 BHK Ultra — Tower Bliss',
    price: '₹2.91 Cr',
    priceValue: 29112500,
    location: 'Vrindavan Yojna, Sector 12, Lucknow',
    area: '3425 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 4, bathrooms: 4,
    status: 'Under Construction', badge: 'Imperial Residencia', featured: true,
    gradientFrom: '#0d1a00', gradientTo: '#1f3d00',
    amenities: IR_AMENITIES,
    description: 'East-facing Tower Bliss Ultra — 3425 sq.ft., 4 bedrooms, 4 balconies, 330+ sq.ft. living room. Morning sun fills every space. Same specs as Aspire, better price.',
    developer: 'Gandharva Infratech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Bliss — Block B (Eastside)' },
      { label: 'Carpet Area', value: '1896.40 sq.ft. / 176.18 sq.mt.' },
      { label: 'Balcony Area', value: '632.60 sq.ft. / 58.77 sq.mt.' },
      { label: 'Built-Up Area', value: '2676.36 sq.ft. / 248.64 sq.mt.' },
      { label: 'Total Area', value: '3425 sq.ft. / 318.19 sq.mt.' },
      { label: 'Balconies', value: '4 Balconies — 3 Views' },
      { label: 'Living Room', value: '330+ sq.ft.' },
      { label: 'Society Charges', value: '₹2,74,000 (IFMS + MRMC)' },
      { label: 'Price Date', value: '1 Nov 2025' },
      { label: 'RERA', value: 'UPRERAPRJ486522/09/2024' },
    ],
    floorPlans: [
      { name: 'Drawing + Living', area: '330.12 sq.ft.' },
      { name: 'Master Bedroom', area: '173.48 sq.ft.' },
      { name: 'Bedroom (Master)', area: '153.42 sq.ft.' },
      { name: 'Bedroom', area: '140.56 sq.ft.' },
      { name: 'Guest Bedroom', area: '110.27 sq.ft.' },
      { name: 'Dining', area: '206.33 sq.ft.' },
      { name: 'Kitchen', area: '122.9 sq.ft.' },
      { name: 'Store / Puja', area: '39.33 sq.ft.' },
      { name: 'Servant Room', area: '58.59 sq.ft.' },
    ],
    slug: 'imperial-residencia-bliss-ultra',
  },

  {
    id: 'ir-bliss-premium',
    title: '4 BHK Premium — Tower Bliss',
    price: '₹2.75 Cr',
    priceValue: 27540000,
    location: 'Vrindavan Yojna, Sector 12, Lucknow',
    area: '3240 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 4, bathrooms: 4,
    status: 'Under Construction', badge: 'Imperial Residencia', featured: false,
    gradientFrom: '#0d1a00', gradientTo: '#1f3d00',
    amenities: IR_AMENITIES,
    description: 'Tower Bliss Premium — 3240 sq.ft. east-facing 4 BHK with 3 balconies. Walk-in wardrobes in all bedrooms. Great value at ₹2.75 Cr.',
    developer: 'Gandharva Infratech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Bliss — Block B (Eastside)' },
      { label: 'Carpet Area', value: '1836.55 sq.ft. / 170.62 sq.mt.' },
      { label: 'Balcony Area', value: '557.04 sq.ft. / 51.75 sq.mt.' },
      { label: 'Built-Up Area', value: '2537.07 sq.ft. / 235.70 sq.mt.' },
      { label: 'Total Area', value: '3240 sq.ft. / 301.40 sq.mt.' },
      { label: 'Balconies', value: '3 Balconies — 3 Views' },
      { label: 'Society Charges', value: '₹2,59,200 (IFMS + MRMC)' },
      { label: 'Price Date', value: '1 Nov 2025' },
      { label: 'RERA', value: 'UPRERAPRJ486522/09/2024' },
    ],
    slug: 'imperial-residencia-bliss-premium',
  },

  {
    id: 'ir-bliss-smart',
    title: '4 BHK Smart — Tower Bliss',
    price: '₹2.26 Cr',
    priceValue: 22610000,
    location: 'Vrindavan Yojna, Sector 12, Lucknow',
    area: '2660 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 4, bathrooms: 4,
    status: 'Under Construction', badge: 'Imperial Residencia', featured: false,
    gradientFrom: '#0d1a00', gradientTo: '#1f3d00',
    amenities: IR_AMENITIES,
    description: 'Most competitively priced home at Imperial Residencia — 4 BHK east-facing in Tower Bliss at ₹2.26 Cr. Same build quality throughout.',
    developer: 'Gandharva Infratech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Bliss — Block B (Eastside)' },
      { label: 'Carpet Area', value: '1604.27 sq.ft. / 149.04 sq.mt.' },
      { label: 'Balcony Area', value: '347.57 sq.ft. / 32.29 sq.mt.' },
      { label: 'Built-Up Area', value: '2083.48 sq.ft. / 193.56 sq.mt.' },
      { label: 'Total Area', value: '2660 sq.ft. / 247.12 sq.mt.' },
      { label: 'Balconies', value: '3 Balconies — 3 Views' },
      { label: 'Society Charges', value: '₹2,12,800 (IFMS + MRMC)' },
      { label: 'Price Date', value: '1 Nov 2025' },
      { label: 'RERA', value: 'UPRERAPRJ486522/09/2024' },
    ],
    slug: 'imperial-residencia-bliss-smart',
  },


  // ═══════════════════════════════════════════════════
  // ORO CONSTELLA — TOWER A & D (Ariel & Vega)
  // Rate: ₹8400 psf — w.e.f. 01 Feb 2026
  // ═══════════════════════════════════════════════════

  { id: 'oc-ad-gf-3bhk-1955-u12', title: '3 BHK — Ground Floor, Unit 1&2 (Ariel/Vega)', price: '₹1.67 Cr', priceValue: 16717175, location: 'Golf City, Shaheed Path, Lucknow', area: '1955 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on Ground Floor, Tower Ariel/Vega. 1955 sq.ft. super area. Units 1 & 2.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/gf-3bhk-main.jpg', '/properties/oro-constella/ariel-vega/gf-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/gf-3bhk-bedroom.jpg', '/properties/oro-constella/ariel-vega/gf-3bhk-kitchen.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: 'Ground Floor' }, { label: 'Units', value: '1 & 2' }, { label: 'Carpet Area', value: '1261.43 sq.ft.' }, { label: 'Super Area', value: '1955 sq.ft.' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-gf-3bhk-1955-u12' },

  { id: 'oc-ad-gf-3bhk-1940-u3', title: '3 BHK — Ground Floor, Unit 3 (Ariel/Vega)', price: '₹1.67 Cr', priceValue: 16730892, location: 'Golf City, Shaheed Path, Lucknow', area: '1940 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on Ground Floor, Tower Ariel/Vega. 1940 sq.ft. super area. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/gf-3bhk-main.jpg', '/properties/oro-constella/ariel-vega/gf-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/gf-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: 'Ground Floor' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '1235.49 sq.ft.' }, { label: 'Super Area', value: '1940 sq.ft.' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-gf-3bhk-1940-u3' },

  { id: 'oc-ad-gf-3bhk-1910-u6', title: '3 BHK — Ground Floor, Unit 6 (Ariel/Vega)', price: '₹1.63 Cr', priceValue: 16327009, location: 'Golf City, Shaheed Path, Lucknow', area: '1910 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on Ground Floor, Tower Ariel/Vega. 1910 sq.ft. super area. Unit 6.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/gf-3bhk-main.jpg', '/properties/oro-constella/ariel-vega/gf-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/gf-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: 'Ground Floor' }, { label: 'Unit', value: '6' }, { label: 'Carpet Area', value: '1209.44 sq.ft.' }, { label: 'Super Area', value: '1910 sq.ft.' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-gf-3bhk-1910-u6' },

  { id: 'oc-ad-1to4-3bhk-1940-u3', title: '3 BHK — 1st–4th Floor, Unit 3 (Ariel/Vega)', price: '₹1.67 Cr', priceValue: 16730892, location: 'Golf City, Shaheed Path, Lucknow', area: '1940 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on 1st–4th floors, Tower Ariel/Vega. 1940 sq.ft. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/mid-3bhk-main.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '1st to 4th' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '1235.49 sq.ft.' }, { label: 'Super Area', value: '1940 sq.ft.' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-1to4-3bhk-1940-u3' },

  { id: 'oc-ad-1to4-3bhksq-2105-u12', title: '3 BHK+SQ — 1st–4th Floor, Unit 1&2 (Ariel/Vega)', price: '₹1.80 Cr', priceValue: 17998307, location: 'Golf City, Shaheed Path, Lucknow', area: '2105 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK + Servant Quarter on 1st–4th floors, Tower Ariel/Vega. 2105 sq.ft. Units 1 & 2.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/3bhksq-main.jpg', '/properties/oro-constella/ariel-vega/3bhksq-living.jpg', '/properties/oro-constella/ariel-vega/3bhksq-bedroom.jpg', '/properties/oro-constella/ariel-vega/3bhksq-servant.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '1st to 4th' }, { label: 'Units', value: '1 & 2' }, { label: 'Carpet Area', value: '1351.74 sq.ft.' }, { label: 'Config', value: '3 BHK + Servant Quarter' }, { label: 'Super Area', value: '2105 sq.ft.' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-1to4-3bhksq-2105-u12' },

  { id: 'oc-ad-1to4-3bhk-1910-u6', title: '3 BHK — 1st–4th Floor, Unit 6 (Ariel/Vega)', price: '₹1.63 Cr', priceValue: 16327009, location: 'Golf City, Shaheed Path, Lucknow', area: '1910 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on 1st–4th floors, Tower Ariel/Vega. 1910 sq.ft. Unit 6.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/mid-3bhk-main.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '1st to 4th' }, { label: 'Unit', value: '6' }, { label: 'Carpet Area', value: '1209.44 sq.ft.' }, { label: 'Super Area', value: '1910 sq.ft.' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-1to4-3bhk-1910-u6' },

  { id: 'oc-ad-5to7-3bhksq-2105-u12', title: '3 BHK+SQ — 5th–7th Floor (Ariel/Vega)', price: '₹1.79 Cr', priceValue: 17945589, location: 'Golf City, Shaheed Path, Lucknow', area: '2105 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK + Servant Quarter on 5th–7th floors. 2105 sq.ft. Units 1 & 2.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/3bhksq-main.jpg', '/properties/oro-constella/ariel-vega/3bhksq-living.jpg', '/properties/oro-constella/ariel-vega/3bhksq-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '5th to 7th' }, { label: 'Units', value: '1 & 2' }, { label: 'Carpet Area', value: '1351.74 sq.ft.' }, { label: 'Super Area', value: '2105 sq.ft.' }, { label: 'PLC', value: '₹195/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-5to7-3bhksq-2105' },

  { id: 'oc-ad-5to7-3bhk-1910-u6', title: '3 BHK — 5th–7th Floor, Unit 6 (Ariel/Vega)', price: '₹1.63 Cr', priceValue: 16279841, location: 'Golf City, Shaheed Path, Lucknow', area: '1910 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on 5th–7th floors, Tower Ariel/Vega. 1910 sq.ft. Unit 6.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/mid-3bhk-main.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '5th to 7th' }, { label: 'Unit', value: '6' }, { label: 'Carpet Area', value: '1209.44 sq.ft.' }, { label: 'Super Area', value: '1910 sq.ft.' }, { label: 'PLC', value: '₹195/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-5to7-3bhk-1910-u6' },

  { id: 'oc-ad-8to9-3bhksq-2105-u12', title: '3 BHK+SQ — 8th–9th Floor (Ariel/Vega)', price: '₹1.79 Cr', priceValue: 17892871, location: 'Golf City, Shaheed Path, Lucknow', area: '2105 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK + Servant Quarter on 8th–9th floors. 2105 sq.ft. Units 1 & 2.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/3bhksq-main.jpg', '/properties/oro-constella/ariel-vega/3bhksq-living.jpg', '/properties/oro-constella/ariel-vega/3bhksq-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '8th to 9th' }, { label: 'Units', value: '1 & 2' }, { label: 'Carpet Area', value: '1351.74 sq.ft.' }, { label: 'Super Area', value: '2105 sq.ft.' }, { label: 'PLC', value: '₹156/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-8to9-3bhksq-2105' },

  { id: 'oc-ad-8to9-3bhk-1940-u3', title: '3 BHK — 8th–9th Floor, Unit 3 (Ariel/Vega)', price: '₹1.66 Cr', priceValue: 16634524, location: 'Golf City, Shaheed Path, Lucknow', area: '1940 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on 8th–9th floors, Tower Ariel/Vega. 1940 sq.ft. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/mid-3bhk-main.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '8th to 9th' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '1235.49 sq.ft.' }, { label: 'Super Area', value: '1940 sq.ft.' }, { label: 'PLC', value: '₹156/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-8to9-3bhk-1940-u3' },

  { id: 'oc-ad-8to9-3bhk-1910-u6', title: '3 BHK — 8th–9th Floor, Unit 6 (Ariel/Vega)', price: '₹1.62 Cr', priceValue: 16232673, location: 'Golf City, Shaheed Path, Lucknow', area: '1910 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on 8th–9th floors, Tower Ariel/Vega. 1910 sq.ft. Unit 6.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/mid-3bhk-main.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '8th to 9th' }, { label: 'Unit', value: '6' }, { label: 'Carpet Area', value: '1209.44 sq.ft.' }, { label: 'Super Area', value: '1910 sq.ft.' }, { label: 'PLC', value: '₹156/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-8to9-3bhk-1910-u6' },

  { id: 'oc-ad-10to12-3bhksq-2105-u1', title: '3 BHK+SQ — 10th–12th Floor, Unit 1 (Ariel/Vega)', price: '₹1.78 Cr', priceValue: 17841505, location: 'Golf City, Shaheed Path, Lucknow', area: '2105 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK+SQ on 10th–12th floors. Park/Green facing. 2105 sq.ft. Unit 1.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/3bhksq-main.jpg', '/properties/oro-constella/ariel-vega/3bhksq-living.jpg', '/properties/oro-constella/ariel-vega/3bhksq-bedroom.jpg', '/properties/oro-constella/ariel-vega/3bhksq-balcony.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '10th to 12th' }, { label: 'Unit', value: '1' }, { label: 'View', value: 'Green / Park Facing' }, { label: 'Carpet Area', value: '1351.74 sq.ft.' }, { label: 'Super Area', value: '2105 sq.ft.' }, { label: 'PLC', value: '₹118/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-10to12-3bhksq-2105-u1' },

  { id: 'oc-ad-10to12-3bhk-1910-u6', title: '3 BHK — 10th–12th Floor, Unit 6 (Ariel/Vega)', price: '₹1.62 Cr', priceValue: 16186714, location: 'Golf City, Shaheed Path, Lucknow', area: '1910 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on 10th–12th floors. 1910 sq.ft. Unit 6.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/mid-3bhk-main.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '10th to 12th' }, { label: 'Unit', value: '6' }, { label: 'Carpet Area', value: '1209.44 sq.ft.' }, { label: 'Super Area', value: '1910 sq.ft.' }, { label: 'PLC', value: '₹118/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-10to12-3bhk-1910-u6' },

  { id: 'oc-ad-13to17-3bhksq-2105-u2', title: '3 BHK+SQ — 13th–17th Floor, Unit 2 (Ariel/Vega)', price: '₹1.77 Cr', priceValue: 17682000, location: 'Golf City, Shaheed Path, Lucknow', area: '2105 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK+SQ on 13th–17th/19th floors. Upper-floor views. 2105 sq.ft. Unit 2.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/3bhksq-main.jpg', '/properties/oro-constella/ariel-vega/3bhksq-living.jpg', '/properties/oro-constella/ariel-vega/3bhksq-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '13th to 17th & 19th' }, { label: 'Unit', value: '2' }, { label: 'Carpet Area', value: '1351.74 sq.ft.' }, { label: 'Super Area', value: '2105 sq.ft.' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-13to17-3bhksq-u2' },

  { id: 'oc-ad-13to17-3bhk-1940-u3', title: '3 BHK — 13th–17th Floor, Unit 3 (Ariel/Vega)', price: '₹1.64 Cr', priceValue: 16441788, location: 'Golf City, Shaheed Path, Lucknow', area: '1940 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on 13th–17th/19th floors. 1940 sq.ft. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/mid-3bhk-main.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '13th to 17th & 19th' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '1235.49 sq.ft.' }, { label: 'Super Area', value: '1940 sq.ft.' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-13to17-3bhk-1940-u3' },

  { id: 'oc-ad-13to17-3bhk-1910-u6', title: '3 BHK — 13th–17th Floor, Unit 6 (Ariel/Vega)', price: '₹1.60 Cr', priceValue: 16044000, location: 'Golf City, Shaheed Path, Lucknow', area: '1910 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on 13th–17th/19th floors. 1910 sq.ft. Unit 6.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro-constella/ariel-vega/mid-3bhk-main.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/mid-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '13th to 17th & 19th' }, { label: 'Unit', value: '6' }, { label: 'Carpet Area', value: '1209.44 sq.ft.' }, { label: 'Super Area', value: '1910 sq.ft.' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-13to17-3bhk-1910-u6' },

  { id: 'oc-ad-18-3bhk-1955-u12', title: '3 BHK — 18th Floor, Unit 1&2 (Ariel/Vega)', price: '₹1.64 Cr', priceValue: 16422000, location: 'Golf City, Shaheed Path, Lucknow', area: '1955 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on 18th floor. 1955 sq.ft. Panoramic views. Units 1 & 2.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/ariel-vega/high-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/high-3bhk-bedroom.jpg', '/properties/oro-constella/ariel-vega/high-3bhk-balcony.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '18th' }, { label: 'Units', value: '1 & 2' }, { label: 'Carpet Area', value: '1261.43 sq.ft.' }, { label: 'Super Area', value: '1955 sq.ft.' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-18-3bhk-1955-u12' },

  { id: 'oc-ad-18-3bhk-1955-u4', title: '3 BHK — 18th Floor, Unit 4 (Ariel/Vega)', price: '₹1.66 Cr', priceValue: 16570849, location: 'Golf City, Shaheed Path, Lucknow', area: '1955 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on 18th floor. 1955 sq.ft. Unit 4.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/ariel-vega/high-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/high-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '18th' }, { label: 'Unit', value: '4' }, { label: 'Carpet Area', value: '1261.43 sq.ft.' }, { label: 'Super Area', value: '1955 sq.ft.' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-18-3bhk-1955-u4' },

  { id: 'oc-ad-19to20-3bhk-1940-u3', title: '3 BHK — 19th–20th Floor, Unit 3 (Ariel/Vega)', price: '₹1.64 Cr', priceValue: 16441788, location: 'Golf City, Shaheed Path, Lucknow', area: '1940 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on 19th–20th floors. 1940 sq.ft. Top-floor unit. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/ariel-vega/high-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/high-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '19th to 20th' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '1235.49 sq.ft.' }, { label: 'Super Area', value: '1940 sq.ft.' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-19to20-3bhk-1940-u3' },

  { id: 'oc-ad-19to20-3bhk-1910-u6', title: '3 BHK — 19th–20th Floor, Unit 6 (Ariel/Vega)', price: '₹1.60 Cr', priceValue: 16044000, location: 'Golf City, Shaheed Path, Lucknow', area: '1910 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK on 19th–20th floors. 1910 sq.ft. Unit 6.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/ariel-vega/high-3bhk-living.jpg', '/properties/oro-constella/ariel-vega/high-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floor', value: '19th to 20th' }, { label: 'Unit', value: '6' }, { label: 'Carpet Area', value: '1209.44 sq.ft.' }, { label: 'Super Area', value: '1910 sq.ft.' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-ad-19to20-3bhk-1910-u6' },

  { id: 'oc-ad-ph-4395-u1', title: '5 BHK Presidential Penthouse — Unit 1 (Ariel/Vega)', price: '₹3.69 Cr', priceValue: 36918000, location: 'Golf City, Shaheed Path, Lucknow', area: '4395 sq.ft.', type: 'project', subtype: 'new', category: 'Penthouse', bedrooms: 5, bathrooms: 5, status: 'Under Construction', badge: 'ORO Constella — Penthouse', featured: true, gradientFrom: '#1a0a00', gradientTo: '#3d2000', amenities: OC_AMENITIES, description: '5 BHK Presidential Penthouse Duplex — 19th & 20th floors. 4395 sq.ft. super area, 2669.79 sq.ft. carpet, 714.41 sq.ft. balcony. Unit 1.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/ariel-vega/penthouse-living.jpg', '/properties/oro-constella/ariel-vega/penthouse-bedroom.jpg', '/properties/oro-constella/ariel-vega/penthouse-balcony.jpg', '/properties/oro-constella/ariel-vega/penthouse-terrace.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floors', value: '19th & 20th (Duplex)' }, { label: 'Unit', value: '1' }, { label: 'Carpet Area', value: '2669.79 sq.ft.' }, { label: 'Balcony', value: '714.41 sq.ft.' }, { label: 'Super Area', value: '4395 sq.ft.' }, { label: 'Config', value: '5 BHK + 4 Dress + 5 TOI + 4 BAL + Servant' }, { label: 'Terrace Extra', value: '@₹3,500/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], floorPlans: [{ name: 'Lower — 19th Floor', area: 'Living, Dining, 2 Bedrooms, Kitchen' }, { name: 'Upper — 20th Floor', area: '3 Bedrooms, Servant Room, Terrace Open to Sky' }], slug: 'oc-ad-ph-4395-u1' },

  { id: 'oc-ad-ph-4395-u3', title: '5 BHK Presidential Penthouse — Unit 3 (Ariel/Vega)', price: '₹3.72 Cr', priceValue: 37233035, location: 'Golf City, Shaheed Path, Lucknow', area: '4395 sq.ft.', type: 'project', subtype: 'new', category: 'Penthouse', bedrooms: 5, bathrooms: 5, status: 'Under Construction', badge: 'ORO Constella — Penthouse', featured: true, gradientFrom: '#1a0a00', gradientTo: '#3d2000', amenities: OC_AMENITIES, description: '5 BHK Presidential Penthouse Duplex — 19th & 20th floors. 4395 sq.ft. super area. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/ariel-vega/penthouse-living.jpg', '/properties/oro-constella/ariel-vega/penthouse-bedroom.jpg', '/properties/oro-constella/ariel-vega/penthouse-balcony.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floors', value: '19th & 20th (Duplex)' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '2669.79 sq.ft.' }, { label: 'Balcony', value: '714.41 sq.ft.' }, { label: 'Super Area', value: '4395 sq.ft.' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], floorPlans: [{ name: 'Lower — 19th Floor', area: 'Living, Dining, 2 Bedrooms, Kitchen' }, { name: 'Upper — 20th Floor', area: '3 Bedrooms, Servant Room, Terrace Open to Sky' }], slug: 'oc-ad-ph-4395-u3' },

  { id: 'oc-ad-sv-3855-u2', title: '5 BHK Sky Villa — Unit 2 (Ariel/Vega)', price: '₹3.24 Cr', priceValue: 32382000, location: 'Golf City, Shaheed Path, Lucknow', area: '3855 sq.ft.', type: 'project', subtype: 'new', category: 'Penthouse', bedrooms: 5, bathrooms: 5, status: 'Under Construction', badge: 'ORO Constella — Sky Villa', featured: true, gradientFrom: '#0a0a1a', gradientTo: '#1a1a3d', amenities: OC_AMENITIES, description: '5 BHK Sky Villa Duplex — 19th & 20th floors. 3855 sq.ft. super area, 2470.98 sq.ft. carpet, 443.69 sq.ft. balcony. Unit 2.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/ariel-vega/skyvilla-living.jpg', '/properties/oro-constella/ariel-vega/skyvilla-bedroom.jpg', '/properties/oro-constella/ariel-vega/skyvilla-balcony.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floors', value: '19th & 20th (Duplex)' }, { label: 'Unit', value: '2' }, { label: 'Carpet Area', value: '2470.98 sq.ft.' }, { label: 'Balcony', value: '443.69 sq.ft.' }, { label: 'Super Area', value: '3855 sq.ft.' }, { label: 'Config', value: '5 BHK + Lobby + 5 TOI + 6 BAL + Servant' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], floorPlans: [{ name: 'Lower — 19th Floor', area: 'Living/Dining, 2 Bedrooms, Kitchen, Lobby' }, { name: 'Upper — 20th Floor', area: '3 Bedrooms, Servant Room, Balconies' }], slug: 'oc-ad-sv-3855-u2' },

  { id: 'oc-ad-sv-3790-u4', title: '5 BHK Sky Villa — Unit 4 (Ariel/Vega)', price: '₹3.21 Cr', priceValue: 32121429, location: 'Golf City, Shaheed Path, Lucknow', area: '3790 sq.ft.', type: 'project', subtype: 'new', category: 'Penthouse', bedrooms: 5, bathrooms: 5, status: 'Under Construction', badge: 'ORO Constella — Sky Villa', featured: true, gradientFrom: '#0a0a1a', gradientTo: '#1a1a3d', amenities: OC_AMENITIES, description: '5 BHK Sky Villa Duplex — 19th & 20th floors. 3790 sq.ft. super area, 2418.89 sq.ft. carpet. Unit 4.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/ariel-vega/skyvilla-living.jpg', '/properties/oro-constella/ariel-vega/skyvilla-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Ariel / Vega (A & D)' }, { label: 'Floors', value: '19th & 20th (Duplex)' }, { label: 'Unit', value: '4' }, { label: 'Carpet Area', value: '2418.89 sq.ft.' }, { label: 'Balcony', value: '439.06 sq.ft.' }, { label: 'Super Area', value: '3790 sq.ft.' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], floorPlans: [{ name: 'Lower — 19th Floor', area: 'Living/Dining, 2 Bedrooms, Kitchen, Lobby' }, { name: 'Upper — 20th Floor', area: '3 Bedrooms, Servant Room, Balconies' }], slug: 'oc-ad-sv-3790-u4' },

  // ═══════════════════════════════════════════════════
  // ORO CONSTELLA — TOWER B & C (Aster & Cosmo)
  // Rate: ₹8400 psf — w.e.f. 01 Feb 2026
  // ═══════════════════════════════════════════════════

  { id: 'oc-bc-gf-supreme-2040-u23', title: '3 BHK Supreme — Ground Floor, Unit 2&3 (Aster/Cosmo)', price: '₹1.74 Cr', priceValue: 17434902, location: 'Golf City, Shaheed Path, Lucknow', area: '2040 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK Supreme Ground Floor, Tower Aster/Cosmo. 2040 sq.ft. super, 4 TOI, 4 BAL, lounge. Direct garden access. Units 2 & 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/aster-cosmo/gf-supreme-living.jpg', '/properties/oro-constella/aster-cosmo/gf-supreme-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Aster / Cosmo (B & C)' }, { label: 'Floor', value: 'Ground Floor' }, { label: 'Units', value: '2 & 3' }, { label: 'Carpet Area', value: '1277.36 sq.ft.' }, { label: 'Balcony', value: '276.63 sq.ft.' }, { label: 'Super Area', value: '2040 sq.ft.' }, { label: 'Config', value: '3 BHK + 4 Dress + 4 TOI + 4 BAL + Lounge' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-bc-gf-supreme-2040-u23' },

  { id: 'oc-bc-gf-royale-2665-u4', title: '4 BHK Royale — Ground Floor, Unit 4 (Aster/Cosmo)', price: '₹2.30 Cr', priceValue: 22989729, location: 'Golf City, Shaheed Path, Lucknow', area: '2665 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 5, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK Royale Ground Floor, Aster/Cosmo. 2665 sq.ft. super, servant room, lounge, powder, 4 balconies. Unit 4.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/aster-cosmo/gf-royale-living.jpg', '/properties/oro-constella/aster-cosmo/gf-royale-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Aster / Cosmo (B & C)' }, { label: 'Floor', value: 'Ground Floor' }, { label: 'Unit', value: '4' }, { label: 'Carpet Area', value: '1715.14 sq.ft.' }, { label: 'Super Area', value: '2665 sq.ft.' }, { label: 'Config', value: '4 BHK + Servant + Lounge + Powder' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-bc-gf-royale-2665-u4' },

  { id: 'oc-bc-1to4-royale-2495-u23', title: '4 BHK Royale — 1st–4th Floor, Unit 2&3 (Aster/Cosmo)', price: '₹2.13 Cr', priceValue: 21334607, location: 'Golf City, Shaheed Path, Lucknow', area: '2495 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK Royale on 1st–4th floors, Aster/Cosmo. 2495 sq.ft. Units 2 & 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/aster-cosmo/mid-royale-living.jpg', '/properties/oro-constella/aster-cosmo/mid-royale-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Aster / Cosmo (B & C)' }, { label: 'Floor', value: '1st to 4th' }, { label: 'Units', value: '2 & 3' }, { label: 'Carpet Area', value: '1609.43 sq.ft.' }, { label: 'Super Area', value: '2495 sq.ft.' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-bc-1to4-royale-2495-u23' },

  { id: 'oc-bc-5to7-royale-2495-u23', title: '4 BHK Royale — 5th–7th Floor (Aster/Cosmo)', price: '₹2.13 Cr', priceValue: 21271839, location: 'Golf City, Shaheed Path, Lucknow', area: '2495 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK Royale on 5th–7th floors, Aster/Cosmo. 2495 sq.ft. Units 2 & 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/aster-cosmo/mid-royale-living.jpg', '/properties/oro-constella/aster-cosmo/mid-royale-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Aster / Cosmo (B & C)' }, { label: 'Floor', value: '5th to 7th' }, { label: 'Units', value: '2 & 3' }, { label: 'Carpet Area', value: '1609.43 sq.ft.' }, { label: 'Super Area', value: '2495 sq.ft.' }, { label: 'PLC', value: '₹195/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-bc-5to7-royale-2495' },

  { id: 'oc-bc-8to9-royale-2495-u23', title: '4 BHK Royale — 8th–9th Floor (Aster/Cosmo)', price: '₹2.12 Cr', priceValue: 21209071, location: 'Golf City, Shaheed Path, Lucknow', area: '2495 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK Royale on 8th–9th floors, Aster/Cosmo. 2495 sq.ft. Units 2 & 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/aster-cosmo/mid-royale-living.jpg', '/properties/oro-constella/aster-cosmo/mid-royale-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Aster / Cosmo (B & C)' }, { label: 'Floor', value: '8th to 9th' }, { label: 'Units', value: '2 & 3' }, { label: 'Carpet Area', value: '1609.43 sq.ft.' }, { label: 'Super Area', value: '2495 sq.ft.' }, { label: 'PLC', value: '₹156/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-bc-8to9-royale-2495' },

  { id: 'oc-bc-10to12-royale-2665-u4', title: '4 BHK Royale (Large) — 10th–12th Floor, Unit 4 (Aster/Cosmo)', price: '₹2.28 Cr', priceValue: 22790773, location: 'Golf City, Shaheed Path, Lucknow', area: '2665 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 5, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK Royale large on 10th–12th floors. Park/Green facing. 2665 sq.ft. Unit 4.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/aster-cosmo/mid-royale-living.jpg', '/properties/oro-constella/aster-cosmo/mid-royale-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Aster / Cosmo (B & C)' }, { label: 'Floor', value: '10th to 12th' }, { label: 'Unit', value: '4' }, { label: 'View', value: 'Green / Park Facing' }, { label: 'Carpet Area', value: '1715.14 sq.ft.' }, { label: 'Super Area', value: '2665 sq.ft.' }, { label: 'PLC', value: '₹118/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-bc-10to12-royale-2665-u4' },

  { id: 'oc-bc-10to12-royale-2495-u23', title: '4 BHK Royale — 10th–12th Floor, Unit 2&3 (Aster/Cosmo)', price: '₹2.11 Cr', priceValue: 21147913, location: 'Golf City, Shaheed Path, Lucknow', area: '2495 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK Royale on 10th–12th floors, Aster/Cosmo. 2495 sq.ft. Units 2 & 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/aster-cosmo/mid-royale-living.jpg', '/properties/oro-constella/aster-cosmo/mid-royale-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Aster / Cosmo (B & C)' }, { label: 'Floor', value: '10th to 12th' }, { label: 'Units', value: '2 & 3' }, { label: 'Carpet Area', value: '1609.43 sq.ft.' }, { label: 'Super Area', value: '2495 sq.ft.' }, { label: 'PLC', value: '₹118/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-bc-10to12-royale-2495-u23' },

  { id: 'oc-bc-13to17-royale-2665-u14', title: '4 BHK Royale (Large) — 13th–17th Floor, Unit 1&4 (Aster/Cosmo)', price: '₹2.26 Cr', priceValue: 22588387, location: 'Golf City, Shaheed Path, Lucknow', area: '2665 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 5, status: 'Under Construction', badge: 'ORO Constella', featured: true, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK Royale large on 13th–17th floors. Panoramic Golf City views. 2665 sq.ft. Units 1 & 4.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/aster-cosmo/high-royale-living.jpg', '/properties/oro-constella/aster-cosmo/high-royale-bedroom.jpg', '/properties/oro-constella/aster-cosmo/high-royale-balcony.jpg'], highlights: [{ label: 'Tower', value: 'Aster / Cosmo (B & C)' }, { label: 'Floor', value: '13th to 17th' }, { label: 'Units', value: '1 & 4' }, { label: 'Carpet Area', value: '1715.14 sq.ft.' }, { label: 'Super Area', value: '2665 sq.ft.' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-bc-13to17-royale-2665-u14' },

  { id: 'oc-bc-13to17-royale-2495-u23', title: '4 BHK Royale — 13th–17th Floor, Unit 2&3 (Aster/Cosmo)', price: '₹2.10 Cr', priceValue: 20958000, location: 'Golf City, Shaheed Path, Lucknow', area: '2495 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK Royale on 13th–17th floors, Aster/Cosmo. 2495 sq.ft. Units 2 & 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/aster-cosmo/mid-royale-living.jpg', '/properties/oro-constella/aster-cosmo/mid-royale-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Aster / Cosmo (B & C)' }, { label: 'Floor', value: '13th to 17th' }, { label: 'Units', value: '2 & 3' }, { label: 'Carpet Area', value: '1609.43 sq.ft.' }, { label: 'Super Area', value: '2495 sq.ft.' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-bc-13to17-royale-2495-u23' },

  { id: 'oc-bc-18-royale-2485-u14', title: '4 BHK Royale — 18th Floor, Unit 1&4 (Aster/Cosmo)', price: '₹2.11 Cr', priceValue: 21062605, location: 'Golf City, Shaheed Path, Lucknow', area: '2485 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK Royale 18th floor. 2485 sq.ft., 1598.35 carpet. No servant room on this variant. Units 1 & 4.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/aster-cosmo/high-royale-living.jpg', '/properties/oro-constella/aster-cosmo/high-royale-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Aster / Cosmo (B & C)' }, { label: 'Floor', value: '18th' }, { label: 'Units', value: '1 & 4' }, { label: 'Carpet Area', value: '1598.35 sq.ft.' }, { label: 'Balcony', value: '317.97 sq.ft.' }, { label: 'Super Area', value: '2485 sq.ft.' }, { label: 'Config', value: '4 BHK + 2 Dress + 4 TOI + 4 BAL + Lounge + Powder' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-bc-18-royale-2485-u14' },

  { id: 'oc-bc-18-royale-2495-u23', title: '4 BHK Royale — 18th Floor, Unit 2&3 (Aster/Cosmo)', price: '₹2.10 Cr', priceValue: 20958000, location: 'Golf City, Shaheed Path, Lucknow', area: '2495 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK Royale 18th floor with servant room. 2495 sq.ft. Units 2 & 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/aster-cosmo/mid-royale-living.jpg', '/properties/oro-constella/aster-cosmo/mid-royale-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Aster / Cosmo (B & C)' }, { label: 'Floor', value: '18th' }, { label: 'Units', value: '2 & 3' }, { label: 'Carpet Area', value: '1609.43 sq.ft.' }, { label: 'Super Area', value: '2495 sq.ft.' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-bc-18-royale-2495-u23' },

  { id: 'oc-bc-sv-5165-u14', title: '5 BHK Sky Villa Mega — 20th–21st Floor, Unit 1&4 (Aster/Cosmo)', price: '₹4.37 Cr', priceValue: 43741770, location: 'Golf City, Shaheed Path, Lucknow', area: '5165 sq.ft.', type: 'project', subtype: 'new', category: 'Penthouse', bedrooms: 5, bathrooms: 5, status: 'Under Construction', badge: 'ORO Constella — Sky Villa', featured: true, gradientFrom: '#0a0a1a', gradientTo: '#1a1a3d', amenities: OC_AMENITIES, description: 'Largest residence at ORO Constella — 5165 sq.ft. Sky Villa Duplex, 20th & 21st floors. 3015 sq.ft. carpet, 825 sq.ft. balconies, terrace open to sky. Units 1 & 4.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/aster-cosmo/skyvilla-mega-living.jpg', '/properties/oro-constella/aster-cosmo/skyvilla-mega-bedroom.jpg', '/properties/oro-constella/aster-cosmo/skyvilla-mega-terrace.jpg'], highlights: [{ label: 'Tower', value: 'Aster / Cosmo (B & C)' }, { label: 'Floors', value: '20th & 21st (Duplex)' }, { label: 'Units', value: '1 & 4' }, { label: 'Carpet Area', value: '3015.00 sq.ft.' }, { label: 'Unit Area', value: '3494.53 sq.ft.' }, { label: 'Balcony Area', value: '825.28 sq.ft.' }, { label: 'Super Area', value: '5165 sq.ft.' }, { label: 'Config', value: '5 BHK + 4 Dress + 5 TOI + 8 BAL + Store + Lounge + Powder + Servant' }, { label: 'Terrace', value: 'Open to Sky' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], floorPlans: [{ name: 'Lower — 20th Floor', area: '2 Bedrooms, Living, Dining, Kitchen, Servant Room' }, { name: 'Upper — 21st Floor', area: '3 Bedrooms, Lounge, 5 Balconies, Terrace Open to Sky' }], slug: 'oc-bc-sv-5165-u14' },

  { id: 'oc-bc-sv-4960-u23', title: '5 BHK Sky Villa — 20th–21st Floor, Unit 2&3 (Aster/Cosmo)', price: '₹4.17 Cr', priceValue: 41664000, location: 'Golf City, Shaheed Path, Lucknow', area: '4960 sq.ft.', type: 'project', subtype: 'new', category: 'Penthouse', bedrooms: 5, bathrooms: 5, status: 'Under Construction', badge: 'ORO Constella — Sky Villa', featured: true, gradientFrom: '#0a0a1a', gradientTo: '#1a1a3d', amenities: OC_AMENITIES, description: '5 BHK Sky Villa Duplex, 20th & 21st floors. 4960 sq.ft. super area, 2918.01 sq.ft. carpet, 842 sq.ft. balconies. Units 2 & 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/aster-cosmo/skyvilla-living.jpg', '/properties/oro-constella/aster-cosmo/skyvilla-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Aster / Cosmo (B & C)' }, { label: 'Floors', value: '20th & 21st (Duplex)' }, { label: 'Units', value: '2 & 3' }, { label: 'Carpet Area', value: '2918.01 sq.ft.' }, { label: 'Unit Area', value: '3303.90 sq.ft.' }, { label: 'Balcony Area', value: '842.18 sq.ft.' }, { label: 'Super Area', value: '4960 sq.ft.' }, { label: 'Terrace', value: 'Open to Sky' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], floorPlans: [{ name: 'Lower — 20th Floor', area: '2 Bedrooms, Living, Dining, Kitchen' }, { name: 'Upper — 21st Floor', area: '3 Bedrooms, Lounge, Balconies, Terrace Open to Sky' }], slug: 'oc-bc-sv-4960-u23' },

  // ═══════════════════════════════════════════════════
  // ORO CONSTELLA — TOWER A (₹8700 psf rate card)
  // w.e.f. 01 Feb 2026
  // ═══════════════════════════════════════════════════

  { id: 'oc-8700a-gf-3bhk-1955-u1', title: '3 BHK — Ground Floor, Tower A (₹8700 psf)', price: '₹1.73 Cr', priceValue: 17303675, location: 'Golf City, Shaheed Path, Lucknow', area: '1955 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK Ground Floor, Tower A. ₹8700 psf rate. 1955 sq.ft. Unit 1.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-a/gf-3bhk-living.jpg', '/properties/oro-constella/tower-a/gf-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower A' }, { label: 'Floor', value: 'Ground Floor' }, { label: 'Unit', value: '1' }, { label: 'Carpet Area', value: '1261.43 sq.ft.' }, { label: 'Super Area', value: '1955 sq.ft.' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700a-gf-3bhk-1955-u1' },

  { id: 'oc-8700a-gf-3bhksq-2105-u1', title: '3 BHK+SQ — Ground Floor, Tower A (₹8700 psf)', price: '₹1.86 Cr', priceValue: 18629807, location: 'Golf City, Shaheed Path, Lucknow', area: '2105 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK+SQ Ground Floor, Tower A. ₹8700 psf. 2105 sq.ft. Unit 1.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-a/3bhksq-living.jpg', '/properties/oro-constella/tower-a/3bhksq-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower A' }, { label: 'Floor', value: 'Ground Floor' }, { label: 'Unit', value: '1' }, { label: 'Carpet Area', value: '1351.74 sq.ft.' }, { label: 'Super Area', value: '2105 sq.ft.' }, { label: 'Config', value: '3 BHK + Servant Quarter' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700a-gf-3bhksq-2105-u1' },

  { id: 'oc-8700a-gf-3bhk-1940-u3', title: '3 BHK — Ground Floor, Tower A, Unit 3 (₹8700 psf)', price: '₹1.73 Cr', priceValue: 17312892, location: 'Golf City, Shaheed Path, Lucknow', area: '1940 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK Ground Floor, Tower A. ₹8700 psf. 1940 sq.ft. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-a/gf-3bhk-living.jpg', '/properties/oro-constella/tower-a/gf-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower A' }, { label: 'Floor', value: 'Ground Floor' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '1235.49 sq.ft.' }, { label: 'Super Area', value: '1940 sq.ft.' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700a-gf-3bhk-1940-u3' },

  { id: 'oc-8700a-5th-3bhk-1940-u3', title: '3 BHK — 5th Floor, Tower A (₹8700 psf)', price: '₹1.73 Cr', priceValue: 17264708, location: 'Golf City, Shaheed Path, Lucknow', area: '1940 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK 5th Floor, Tower A. ₹8700 psf. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-a/mid-3bhk-living.jpg', '/properties/oro-constella/tower-a/mid-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower A' }, { label: 'Floor', value: '5th' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '1235.49 sq.ft.' }, { label: 'Super Area', value: '1940 sq.ft.' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹195/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700a-5th-3bhk-u3' },

  { id: 'oc-8700a-8th-3bhk-1940-u3', title: '3 BHK — 8th Floor, Tower A (₹8700 psf)', price: '₹1.72 Cr', priceValue: 17216524, location: 'Golf City, Shaheed Path, Lucknow', area: '1940 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK 8th Floor, Tower A. ₹8700 psf. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-a/mid-3bhk-living.jpg', '/properties/oro-constella/tower-a/mid-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower A' }, { label: 'Floor', value: '8th' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '1235.49 sq.ft.' }, { label: 'Super Area', value: '1940 sq.ft.' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹156/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700a-8th-3bhk-u3' },

  { id: 'oc-8700a-13th-3bhk-1940-u3', title: '3 BHK — 13th Floor, Tower A (₹8700 psf)', price: '₹1.70 Cr', priceValue: 17023788, location: 'Golf City, Shaheed Path, Lucknow', area: '1940 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK 13th Floor, Tower A. ₹8700 psf. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-a/high-3bhk-living.jpg', '/properties/oro-constella/tower-a/high-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower A' }, { label: 'Floor', value: '13th' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '1235.49 sq.ft.' }, { label: 'Super Area', value: '1940 sq.ft.' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700a-13th-3bhk-u3' },

  { id: 'oc-8700a-17th-3bhk-1940-u3', title: '3 BHK — 17th Floor, Tower A (₹8700 psf)', price: '₹1.70 Cr', priceValue: 17023788, location: 'Golf City, Shaheed Path, Lucknow', area: '1940 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK 17th Floor, Tower A. ₹8700 psf. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-a/high-3bhk-living.jpg', '/properties/oro-constella/tower-a/high-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower A' }, { label: 'Floor', value: '17th' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '1235.49 sq.ft.' }, { label: 'Super Area', value: '1940 sq.ft.' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700a-17th-3bhk-u3' },

  { id: 'oc-8700a-18th-3bhk-1940-u3', title: '3 BHK — 18th Floor, Tower A (₹8700 psf)', price: '₹1.70 Cr', priceValue: 17023788, location: 'Golf City, Shaheed Path, Lucknow', area: '1940 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK 18th Floor, Tower A. ₹8700 psf. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-a/high-3bhk-living.jpg', '/properties/oro-constella/tower-a/high-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower A' }, { label: 'Floor', value: '18th' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '1235.49 sq.ft.' }, { label: 'Super Area', value: '1940 sq.ft.' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700a-18th-3bhk-u3' },

  { id: 'oc-8700a-1st-4bhksr-2665-u4', title: '4 BHK+SR — 1st Floor, Tower A (₹8700 psf)', price: '₹2.34 Cr', priceValue: 23387887, location: 'Golf City, Shaheed Path, Lucknow', area: '2665 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 5, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK+Servant 1st Floor, Tower A. ₹8700 psf. 2665 sq.ft. Unit 4.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-a/4bhk-living.jpg', '/properties/oro-constella/tower-a/4bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower A' }, { label: 'Floor', value: '1st' }, { label: 'Unit', value: '4' }, { label: 'Carpet Area', value: '1715.14 sq.ft.' }, { label: 'Super Area', value: '2665 sq.ft.' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700a-1st-4bhksr-u4' },

  { id: 'oc-8700a-1st-4bhk-2485-u1', title: '4 BHK — 1st Floor, Tower A (₹8700 psf)', price: '₹2.18 Cr', priceValue: 21808105, location: 'Golf City, Shaheed Path, Lucknow', area: '2485 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK 1st Floor, Tower A. ₹8700 psf. 2485 sq.ft. Unit 1.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-a/4bhk-living.jpg', '/properties/oro-constella/tower-a/4bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower A' }, { label: 'Floor', value: '1st' }, { label: 'Unit', value: '1' }, { label: 'Carpet Area', value: '1598.35 sq.ft.' }, { label: 'Super Area', value: '2485 sq.ft.' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700a-1st-4bhk-u1' },

  { id: 'oc-8700a-18th-4bhk-2485-u4', title: '4 BHK — 18th Floor, Tower A (₹8700 psf)', price: '₹2.18 Cr', priceValue: 21808105, location: 'Golf City, Shaheed Path, Lucknow', area: '2485 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 4, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK 18th Floor, Tower A. ₹8700 psf. 2485 sq.ft. Unit 4.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-a/4bhk-living.jpg', '/properties/oro-constella/tower-a/4bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower A' }, { label: 'Floor', value: '18th' }, { label: 'Unit', value: '4' }, { label: 'Carpet Area', value: '1598.35 sq.ft.' }, { label: 'Super Area', value: '2485 sq.ft.' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700a-18th-4bhk-u4' },

  // ═══════════════════════════════════════════════════
  // ORO CONSTELLA — TOWER B (₹8700 psf rate card)
  // ═══════════════════════════════════════════════════

  { id: 'oc-8700b-3rd-4bhksr-2665-u4', title: '4 BHK+SR — 3rd Floor, Tower B (₹8700 psf)', price: '₹2.38 Cr', priceValue: 23789229, location: 'Golf City, Shaheed Path, Lucknow', area: '2665 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 4, bathrooms: 5, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '4 BHK+Servant 3rd Floor, Tower B. ₹8700 psf. 2665 sq.ft. Unit 4.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-b/4bhk-living.jpg', '/properties/oro-constella/tower-b/4bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower B' }, { label: 'Floor', value: '3rd' }, { label: 'Unit', value: '4' }, { label: 'Carpet Area', value: '1715.14 sq.ft.' }, { label: 'Super Area', value: '2665 sq.ft.' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700b-3rd-4bhksr-u4' },

  { id: 'oc-8700b-gf-3bhk-1940-u3', title: '3 BHK — Ground Floor, Tower B (₹8700 psf)', price: '₹1.73 Cr', priceValue: 17312892, location: 'Golf City, Shaheed Path, Lucknow', area: '1940 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK Ground Floor, Tower B. ₹8700 psf. 1940 sq.ft. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-b/gf-3bhk-living.jpg', '/properties/oro-constella/tower-b/gf-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower B' }, { label: 'Floor', value: 'Ground Floor' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '1235.49 sq.ft.' }, { label: 'Super Area', value: '1940 sq.ft.' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹234/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700b-gf-3bhk-u3' },

  { id: 'oc-8700b-17th-3bhk-1940-u3', title: '3 BHK — 17th Floor, Tower B (₹8700 psf)', price: '₹1.70 Cr', priceValue: 17023788, location: 'Golf City, Shaheed Path, Lucknow', area: '1940 sq.ft.', type: 'project', subtype: 'new', category: 'Apartment', bedrooms: 3, bathrooms: 3, status: 'Under Construction', badge: 'ORO Constella', featured: false, gradientFrom: '#0a1a0a', gradientTo: '#1a3d1a', amenities: OC_AMENITIES, description: '3 BHK 17th Floor, Tower B. ₹8700 psf. 1940 sq.ft. Unit 3.', developer: 'ORO Group', possession: 'As per RERA schedule', mainImage: '/properties/oro/Oro.jpeg', gallery: ['/properties/oro/Oro.jpeg', '/properties/oro-constella/tower-b/high-3bhk-living.jpg', '/properties/oro-constella/tower-b/high-3bhk-bedroom.jpg'], highlights: [{ label: 'Tower', value: 'Tower B' }, { label: 'Floor', value: '17th' }, { label: 'Unit', value: '3' }, { label: 'Carpet Area', value: '1235.49 sq.ft.' }, { label: 'Super Area', value: '1940 sq.ft.' }, { label: 'Rate Card', value: '₹8700 psf' }, { label: 'PLC', value: '₹94/sqft' }, { label: 'RERA', value: 'UPRERAPRJ629194' }], slug: 'oc-8700b-17th-3bhk-u3' },



  {
    id: 'rmh-p4-d1-2bhk',
    title: '2 BHK — Tower D1, Phase 4',
    price: '₹1.14 Cr',
    priceValue: 11354400,
    location: 'Sushant Golf City, Lucknow',
    area: '1328 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 2, bathrooms: 2,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#2d0030', gradientTo: '#6b0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 2 BHK in Tower D1, Phase 4 of Rishita Mulberry Heights. 1328 sq.ft. super area, 803 sq.ft. carpet. Located in premium Sushant Golf City with access to 60,000+ sq.ft. Club Rishita.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'D1 — Phase 4' },
      { label: 'Super Area', value: '1328 sq.ft.' },
      { label: 'Builtup Area', value: '1051 sq.ft.' },
      { label: 'Carpet Area', value: '803 sq.ft. / 74.62 sq.mt.' },
      { label: 'Balcony Area', value: '168 sq.ft. / 15.65 sq.mt.' },
      { label: 'Unit Cost', value: '₹1,12,88,000' },
      { label: 'IFMS', value: '₹66,400' },
      { label: 'BSP', value: '₹8,500/sq.ft.' },
      { label: 'Status', value: 'Ready to Move' },
      { label: 'RERA', value: 'UPRERAPRJ192087' },
    ],
    floorPlans: [
      { name: 'Living & Dining', area: '10\'7" × 14\'0" / 10\'7" × 20\'0"' },
      { name: 'Master Bedroom', area: '11\'0" × 14\'0"' },
      { name: 'Bedroom 2', area: '11\'0" × 11\'0"' },
      { name: 'Kitchen', area: '7\'2" × 10\'1"' },
      { name: 'Balcony 1', area: '5\'0" wide' },
      { name: 'Balcony 2', area: '3\'9" wide' },
    ],
    slug: 'rmh-p4-d1-2bhk',
  },

  // ── PHASE 3 — TOWER D2 ──────────────────────────────────
  {
    id: 'rmh-p3-d2-2bhk',
    title: '2 BHK — Tower D2, Phase 3',
    price: '₹1.14 Cr',
    priceValue: 11354400,
    location: 'Sushant Golf City, Lucknow',
    area: '1328 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 2, bathrooms: 2,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#2d0030', gradientTo: '#6b0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 2 BHK in Tower D2, Phase 3 of Rishita Mulberry Heights. 1328 sq.ft. super area, 803 sq.ft. carpet. All-in price with parking ~₹1.18 Cr + registration.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'D2 — Phase 3' },
      { label: 'Super Area', value: '1328 sq.ft.' },
      { label: 'Builtup Area', value: '1051 sq.ft.' },
      { label: 'Carpet Area', value: '803 sq.ft. / 74.62 sq.mt.' },
      { label: 'Unit Cost', value: '₹1,12,88,000' },
      { label: 'IFMS', value: '₹66,400' },
      { label: 'BSP', value: '₹8,300/sq.ft.' },
      { label: 'With Parking', value: '~₹1.18 Cr + Reg.' },
      { label: 'Without Parking', value: '~₹1.20 Cr + Reg.' },
      { label: 'RERA', value: 'UPRERAPRJ308470' },
    ],
    floorPlans: [
      { name: 'Living & Dining', area: '10\'7" × 14\'0" / 10\'7" × 20\'0"' },
      { name: 'Master Bedroom', area: '11\'0" × 14\'0"' },
      { name: 'Bedroom 2', area: '11\'0" × 11\'0"' },
      { name: 'Balcony 1', area: '5\'0" wide' },
      { name: 'Balcony 2', area: '3\'9" wide' },
    ],
    slug: 'rmh-p3-d2-2bhk',
  },

  // ── PHASE 5 — TOWER E2 — 2BHK ───────────────────────────
  {
    id: 'rmh-p5-e2-2bhk',
    title: '2 BHK — Tower E2, Phase 5',
    price: '₹1.10 Cr',
    priceValue: 11047050,
    location: 'Sushant Golf City, Lucknow',
    area: '1323 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 2, bathrooms: 2,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#2d0030', gradientTo: '#6b0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 2 BHK in Tower E2, Phase 5. 1323 sq.ft. super area, 833 sq.ft. carpet. All-in price with parking ~₹1.20 Cr + registration.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'E2 — Phase 5' },
      { label: 'Super Area', value: '1323 sq.ft.' },
      { label: 'Builtup Area', value: '1040 sq.ft.' },
      { label: 'Carpet Area', value: '833 sq.ft.' },
      { label: 'Unit Cost', value: '₹1,09,80,900' },
      { label: 'IFMS', value: '₹66,150' },
      { label: 'BSP', value: '₹8,300/sq.ft.' },
      { label: 'With Parking', value: '~₹1.20 Cr + Reg.' },
      { label: 'RERA', value: 'UPRERAPRJ626431' },
    ],
    slug: 'rmh-p5-e2-2bhk',
  },

  // ── PHASE 5 — TOWER E3 — 2BHK ───────────────────────────
  {
    id: 'rmh-p5-e3-2bhk',
    title: '2 BHK — Tower E3, Phase 5',
    price: '₹1.12 Cr',
    priceValue: 11155600,
    location: 'Sushant Golf City, Lucknow',
    area: '1336 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 2, bathrooms: 2,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#2d0030', gradientTo: '#6b0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 2 BHK in Tower E3, Phase 5. 1336 sq.ft. super area, 841 sq.ft. carpet. All-in price with parking ~₹1.20 Cr + registration.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'E3 — Phase 5' },
      { label: 'Super Area', value: '1336 sq.ft.' },
      { label: 'Builtup Area', value: '1049 sq.ft.' },
      { label: 'Carpet Area', value: '841 sq.ft.' },
      { label: 'Unit Cost', value: '₹1,10,88,800' },
      { label: 'IFMS', value: '₹66,800' },
      { label: 'BSP', value: '₹8,300/sq.ft.' },
      { label: 'With Parking', value: '~₹1.20 Cr + Reg.' },
      { label: 'Without Parking', value: '~₹1.12 Cr + Reg.' },
      { label: 'RERA', value: 'UPRERAPRJ626431' },
    ],
    slug: 'rmh-p5-e3-2bhk',
  },

  // ── PHASE 5 — TOWER E2&E3 — 2BHK+STORE ─────────────────
  {
    id: 'rmh-p5-e2e3-2bhk-store',
    title: '2 BHK + Store — Tower E2&E3, Phase 5',
    price: '₹1.25 Cr',
    priceValue: 12525200,
    location: 'Sushant Golf City, Lucknow',
    area: '1384 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 2, bathrooms: 2,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#2d0030', gradientTo: '#6b0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 2 BHK + Store Room in Tower E2&E3, Phase 5. 1384 sq.ft. super area, 874 sq.ft. carpet. Exclusive store room for extra storage.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'E2 & E3 — Phase 5' },
      { label: 'Config', value: '2 BHK + Store Room' },
      { label: 'Super Area', value: '1384 sq.ft.' },
      { label: 'Builtup Area', value: '1089 sq.ft.' },
      { label: 'Carpet Area', value: '874 sq.ft.' },
      { label: 'Unit Cost', value: '₹1,24,56,000' },
      { label: 'IFMS', value: '₹69,200' },
      { label: 'BSP', value: '₹9,000/sq.ft.' },
      { label: 'RERA', value: 'UPRERAPRJ626431' },
    ],
    slug: 'rmh-p5-e2e3-2bhk-store',
  },

  // ── PHASE 5 — TOWER E2&E3 — 3BHK ───────────────────────
  {
    id: 'rmh-p5-e2e3-3bhk',
    title: '3 BHK — Tower E2&E3, Phase 5',
    price: '₹1.71 Cr',
    priceValue: 17131650,
    location: 'Sushant Golf City, Lucknow',
    area: '1893 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 3,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: true,
    gradientFrom: '#1a0020', gradientTo: '#4a0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 3 BHK in Tower E2&E3, Phase 5. 1893 sq.ft. super area, 1200 sq.ft. carpet. With parking ~₹1.86 Cr + registration.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'E2 & E3 — Phase 5' },
      { label: 'Super Area', value: '1893 sq.ft.' },
      { label: 'Builtup Area', value: '1508 sq.ft.' },
      { label: 'Carpet Area', value: '1200 sq.ft.' },
      { label: 'Unit Cost', value: '₹1,70,37,000' },
      { label: 'IFMS', value: '₹94,650' },
      { label: 'BSP', value: '₹9,000/sq.ft.' },
      { label: 'With Parking', value: '~₹1.86 Cr + Reg.' },
      { label: 'Without Parking', value: '~₹1.74 Cr + Reg.' },
      { label: 'RERA', value: 'UPRERAPRJ626431' },
    ],
    slug: 'rmh-p5-e2e3-3bhk',
  },

  // ── PHASE 4 — TOWER C1&C2 — 3BHK ────────────────────────
  {
    id: 'rmh-p4-c1c2-3bhk',
    title: '3 BHK — Tower C1&C2, Phase 4',
    price: '₹1.67 Cr',
    priceValue: 16669368,
    location: 'Sushant Golf City, Lucknow',
    area: '1832 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 3,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#1a0020', gradientTo: '#4a0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 3 BHK in Tower C1&C2, Phase 4. 1832 sq.ft. super area, 1235 sq.ft. carpet.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'C1 & C2 — Phase 4' },
      { label: 'Super Area', value: '1832 sq.ft.' },
      { label: 'Builtup Area', value: '1550 sq.ft.' },
      { label: 'Carpet Area', value: '1235 sq.ft.' },
      { label: 'Unit Cost', value: '₹1,65,77,768' },
      { label: 'IFMS', value: '₹91,600' },
      { label: 'BSP', value: '₹9,049/sq.ft.' },
      { label: 'RERA', value: 'UPRERAPRJ192087' },
    ],
    slug: 'rmh-p4-c1c2-3bhk',
  },

  // ── PHASE 4 — TOWER C1&C2 — 3BHK+SERVANT T1 (U1,4,6,7) ─
  {
    id: 'rmh-p4-c1c2-3bhk-srv-t1-u1467',
    title: '3 BHK + Servant — Tower C1&C2, Phase 4 (Unit 1,4,6,7)',
    price: '₹1.86 Cr',
    priceValue: 18559800,
    location: 'Sushant Golf City, Lucknow',
    area: '1964 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: true,
    gradientFrom: '#1a0020', gradientTo: '#4a0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 3 BHK + Servant Room (Type 1) in Tower C1&C2, Phase 4. 1964 sq.ft. super area, 1325 sq.ft. carpet. Units 1, 4, 6 & 7.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'C1 & C2 — Phase 4' },
      { label: 'Units', value: '1, 4, 6 & 7' },
      { label: 'Config', value: '3 BHK + Servant Room (Type 1)' },
      { label: 'Super Area', value: '1964 sq.ft.' },
      { label: 'Builtup Area', value: '1662 sq.ft.' },
      { label: 'Carpet Area', value: '1325 sq.ft.' },
      { label: 'Unit Cost', value: '₹1,84,61,600' },
      { label: 'IFMS', value: '₹98,200' },
      { label: 'BSP', value: '₹9,400/sq.ft.' },
      { label: 'RERA', value: 'UPRERAPRJ192087' },
    ],
    slug: 'rmh-p4-c1c2-3bhk-srv-t1-u1467',
  },

  // ── PHASE 4 — TOWER C1&C2 — 3BHK+SERVANT T1 (U2&3) ─────
  {
    id: 'rmh-p4-c1c2-3bhk-srv-t1-u23',
    title: '3 BHK + Servant — Tower C1&C2, Phase 4 (Unit 2&3)',
    price: '₹1.91 Cr',
    priceValue: 19149000,
    location: 'Sushant Golf City, Lucknow',
    area: '1964 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#1a0020', gradientTo: '#4a0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 3 BHK + Servant Room (Type 1) in Tower C1&C2, Phase 4. 1964 sq.ft. super area, 1325 sq.ft. carpet. Units 2 & 3.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'C1 & C2 — Phase 4' },
      { label: 'Units', value: '2 & 3' },
      { label: 'Config', value: '3 BHK + Servant Room (Type 1)' },
      { label: 'Super Area', value: '1964 sq.ft.' },
      { label: 'Builtup Area', value: '1662 sq.ft.' },
      { label: 'Carpet Area', value: '1325 sq.ft.' },
      { label: 'Unit Cost', value: '₹1,90,50,800' },
      { label: 'IFMS', value: '₹98,200' },
      { label: 'BSP', value: '₹9,700/sq.ft.' },
      { label: 'RERA', value: 'UPRERAPRJ192087' },
    ],
    slug: 'rmh-p4-c1c2-3bhk-srv-t1-u23',
  },

  // ── PHASE 4 — TOWER C1&C2 — 3BHK+SERVANT T2 (U8) ───────
  {
    id: 'rmh-p4-c1c2-3bhk-srv-t2-u8',
    title: '3 BHK + Servant (Type 2) — Tower C1&C2, Phase 4 (Unit 8)',
    price: '₹2.06 Cr',
    priceValue: 20552250,
    location: 'Sushant Golf City, Lucknow',
    area: '2045 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#1a0020', gradientTo: '#4a0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 3 BHK + Servant Room (Type 2) in Tower C1&C2, Phase 4. Largest 3BHK variant — 2045 sq.ft. super area, 1387 sq.ft. carpet. Unit 8.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'C1 & C2 — Phase 4' },
      { label: 'Unit', value: '8' },
      { label: 'Config', value: '3 BHK + Servant Room (Type 2)' },
      { label: 'Super Area', value: '2045 sq.ft.' },
      { label: 'Builtup Area', value: '1731 sq.ft.' },
      { label: 'Carpet Area', value: '1387 sq.ft.' },
      { label: 'Unit Cost', value: '₹2,04,50,000' },
      { label: 'IFMS', value: '₹1,02,250' },
      { label: 'BSP', value: '₹10,000/sq.ft.' },
      { label: 'RERA', value: 'UPRERAPRJ192087' },
    ],
    slug: 'rmh-p4-c1c2-3bhk-srv-t2-u8',
  },

  // ── PHASE 3 — TOWER C3 — 3BHK ───────────────────────────
  {
    id: 'rmh-p3-c3-3bhk',
    title: '3 BHK — Tower C3, Phase 3',
    price: '₹1.67 Cr',
    priceValue: 16669368,
    location: 'Sushant Golf City, Lucknow',
    area: '1832 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 3,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#1a0020', gradientTo: '#4a0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 3 BHK in Tower C3, Phase 3. 1832 sq.ft. super area, 1235 sq.ft. carpet.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'C3 — Phase 3' },
      { label: 'Super Area', value: '1832 sq.ft.' },
      { label: 'Builtup Area', value: '1550 sq.ft.' },
      { label: 'Carpet Area', value: '1235 sq.ft.' },
      { label: 'Unit Cost', value: '₹1,65,77,768' },
      { label: 'IFMS', value: '₹91,600' },
      { label: 'BSP', value: '₹9,049/sq.ft.' },
      { label: 'RERA', value: 'UPRERAPRJ308470' },
    ],
    slug: 'rmh-p3-c3-3bhk',
  },

  // ── PHASE 3 — TOWER C3 — 3BHK+SERVANT T1 (U1,4,6,7) ────
  {
    id: 'rmh-p3-c3-3bhk-srv-t1-u1467',
    title: '3 BHK + Servant — Tower C3, Phase 3 (Unit 1,4,6,7)',
    price: '₹1.86 Cr',
    priceValue: 18559800,
    location: 'Sushant Golf City, Lucknow',
    area: '1964 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#1a0020', gradientTo: '#4a0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 3 BHK + Servant Room (Type 1) in Tower C3, Phase 3. 1964 sq.ft. super area, 1325 sq.ft. carpet. Units 1, 4, 6 & 7.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'C3 — Phase 3' },
      { label: 'Units', value: '1, 4, 6 & 7' },
      { label: 'Config', value: '3 BHK + Servant Room (Type 1)' },
      { label: 'Super Area', value: '1964 sq.ft.' },
      { label: 'Builtup Area', value: '1662 sq.ft.' },
      { label: 'Carpet Area', value: '1325 sq.ft.' },
      { label: 'Unit Cost', value: '₹1,84,61,600' },
      { label: 'IFMS', value: '₹98,200' },
      { label: 'BSP', value: '₹9,400/sq.ft.' },
      { label: 'RERA', value: 'UPRERAPRJ308470' },
    ],
    slug: 'rmh-p3-c3-3bhk-srv-t1-u1467',
  },

  // ── PHASE 3 — TOWER C3 — 3BHK+SERVANT T1 (U2&3) ────────
  {
    id: 'rmh-p3-c3-3bhk-srv-t1-u23',
    title: '3 BHK + Servant — Tower C3, Phase 3 (Unit 2&3)',
    price: '₹1.91 Cr',
    priceValue: 19149000,
    location: 'Sushant Golf City, Lucknow',
    area: '1964 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#1a0020', gradientTo: '#4a0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 3 BHK + Servant Room (Type 1) in Tower C3, Phase 3. 1964 sq.ft. super area, 1325 sq.ft. carpet. Units 2 & 3. With parking ~₹2.27 Cr + registration.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'C3 — Phase 3' },
      { label: 'Units', value: '2 & 3' },
      { label: 'Config', value: '3 BHK + Servant Room (Type 1)' },
      { label: 'Super Area', value: '1964 sq.ft.' },
      { label: 'Builtup Area', value: '1662 sq.ft.' },
      { label: 'Carpet Area', value: '1325 sq.ft.' },
      { label: 'Unit Cost', value: '₹1,90,50,800' },
      { label: 'IFMS', value: '₹98,200' },
      { label: 'BSP', value: '₹9,700/sq.ft.' },
      { label: 'With Parking', value: '~₹2.27 Cr + Reg.' },
      { label: 'Without Parking', value: '~₹1.94 Cr + Reg.' },
      { label: 'RERA', value: 'UPRERAPRJ308470' },
    ],
    slug: 'rmh-p3-c3-3bhk-srv-t1-u23',
  },

  // ── PHASE 3 — TOWER C3 — 3BHK+SERVANT T2 (U8) ──────────
  {
    id: 'rmh-p3-c3-3bhk-srv-t2-u8',
    title: '3 BHK + Servant (Type 2) — Tower C3, Phase 3 (Unit 8)',
    price: '₹2.06 Cr',
    priceValue: 20552250,
    location: 'Sushant Golf City, Lucknow',
    area: '2045 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#1a0020', gradientTo: '#4a0f6b',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 3 BHK + Servant Room (Type 2) in Tower C3, Phase 3. Largest 3BHK variant — 2045 sq.ft. super area, 1387 sq.ft. carpet. Unit 8.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'C3 — Phase 3' },
      { label: 'Unit', value: '8' },
      { label: 'Config', value: '3 BHK + Servant Room (Type 2)' },
      { label: 'Super Area', value: '2045 sq.ft.' },
      { label: 'Builtup Area', value: '1731 sq.ft.' },
      { label: 'Carpet Area', value: '1387 sq.ft.' },
      { label: 'Unit Cost', value: '₹2,04,50,000' },
      { label: 'IFMS', value: '₹1,02,250' },
      { label: 'BSP', value: '₹10,000/sq.ft.' },
      { label: 'RERA', value: 'UPRERAPRJ308470' },
    ],
    slug: 'rmh-p3-c3-3bhk-srv-t2-u8',
  },

  // ── TOWER B3 — UNIT 1 (2230 sq.ft.) ─────────────────────
  {
    id: 'rmh-b3-u1',
    title: '3 BHK + Servant — Tower B3, Unit 1',
    price: '₹2.50 Cr',
    priceValue: 25000000,
    location: 'Sushant Golf City, Lucknow',
    area: '2230 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: true,
    gradientFrom: '#0d001a', gradientTo: '#3d1060',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 3 BHK + Servant in Tower B3. 2230 sq.ft. super area. Unit 1. All-in price ~₹2.50 Cr + registration.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'B3' },
      { label: 'Unit', value: '1' },
      { label: 'Super Area', value: '2230 sq.ft.' },
      { label: 'All-in Price', value: '~₹2.50 Cr + Reg.' },
      { label: 'Status', value: 'Ready to Move' },
    ],
    slug: 'rmh-b3-u1',
  },

  // ── TOWER B3 — UNIT 2 ────────────────────────────────────
  {
    id: 'rmh-b3-u2',
    title: '3 BHK + Servant — Tower B3, Unit 2',
    price: '₹2.56 Cr',
    priceValue: 25600000,
    location: 'Sushant Golf City, Lucknow',
    area: '2230 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#0d001a', gradientTo: '#3d1060',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 3 BHK + Servant in Tower B3. 2230 sq.ft. super area. Unit 2. All-in price ~₹2.56 Cr + registration.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'B3' },
      { label: 'Unit', value: '2' },
      { label: 'Super Area', value: '2230 sq.ft.' },
      { label: 'All-in Price', value: '~₹2.56 Cr + Reg.' },
    ],
    slug: 'rmh-b3-u2',
  },

  // ── TOWER B3 — UNIT 3 ────────────────────────────────────
  {
    id: 'rmh-b3-u3',
    title: '3 BHK + Servant — Tower B3, Unit 3',
    price: '₹2.39 Cr',
    priceValue: 23900000,
    location: 'Sushant Golf City, Lucknow',
    area: '2230 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#0d001a', gradientTo: '#3d1060',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 3 BHK + Servant in Tower B3. 2230 sq.ft. super area. Unit 3 — most affordable in B3 tower. All-in price ~₹2.39 Cr + registration.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'B3' },
      { label: 'Unit', value: '3' },
      { label: 'Super Area', value: '2230 sq.ft.' },
      { label: 'All-in Price', value: '~₹2.39 Cr + Reg.' },
    ],
    slug: 'rmh-b3-u3',
  },

  // ── TOWER B3 — UNIT 4 ────────────────────────────────────
  {
    id: 'rmh-b3-u4',
    title: '3 BHK + Servant — Tower B3, Unit 4',
    price: '₹2.68 Cr',
    priceValue: 26800000,
    location: 'Sushant Golf City, Lucknow',
    area: '2230 sq.ft.',
    type: 'buy', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Ready to Move',
    badge: 'Rishita Mulberry Heights', featured: false,
    gradientFrom: '#0d001a', gradientTo: '#3d1060',
    amenities: RMH_AMENITIES,
    description: 'Ready-to-move 3 BHK + Servant in Tower B3. 2230 sq.ft. super area. Unit 4 — premium corner unit. All-in price ~₹2.68 Cr + registration.',
    developer: 'Rishita Developers Pvt. Ltd.',
    possession: 'Ready to Move',
    highlights: [
      { label: 'Tower', value: 'B3' },
      { label: 'Unit', value: '4 (Corner)' },
      { label: 'Super Area', value: '2230 sq.ft.' },
      { label: 'All-in Price', value: '~₹2.68 Cr + Reg.' },
    ],
    slug: 'rmh-b3-u4',
  },
  // ═══════════════════════════════════════════
  // TOWER FAITH — 4 BHK + 5T + Servant
  // Total Area: 3461 sq.ft. | Carpet: 1954 sq.ft.
  // ═══════════════════════════════════════════

  {
    id: 'et-faith-4bhk-2to5',
    title: '4 BHK + Servant — Tower Faith, 2nd–5th Floor',
    price: '₹4.50 Cr',
    priceValue: 44993000,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '3461 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 4, bathrooms: 5,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: false,
    gradientFrom: '#0a1a00', gradientTo: '#1a3d0a',
    amenities: ET_AMENITIES,
    description: '4 BHK + 5T + Servant in Tower Faith — 2nd to 5th floor. 3461 sq.ft. super area, 1954 sq.ft. carpet. 11ft ceiling, VRV AC, digital door lock. Includes open parking, club membership, 7.5 KVA power backup.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Faith — F' },
      { label: 'Floors', value: '2nd to 5th' },
      { label: 'Config', value: '4 BHK + 5T + Servant' },
      { label: 'Carpet Area', value: '1954 sq.ft.' },
      { label: 'Balcony Area', value: '573 sq.ft.' },
      { label: 'Total Area', value: '3461 sq.ft.' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'MRMC', value: '₹2.50/sq.ft./month (18 months)' },
      { label: 'Parking', value: '1 Open Parking Included' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    floorPlans: [
      { name: 'Drawing Room', area: '13\'5" × 18\'8"' },
      { name: 'Bedroom 01 (Master)', area: '12\'0" × 14\'3"' },
      { name: 'Bedroom 02', area: '11\'9" × 12\'0"' },
      { name: 'Study', area: '11\'4" × 8\'2"' },
      { name: 'Dining', area: '10\'1" × 12\'10"' },
      { name: 'Kitchen', area: '8\'6" × 12\'0"' },
      { name: 'Servant Room', area: '7\'3" × 8\'0"' },
      { name: 'Store', area: '5\'3" × 4\'8"' },
    ],
    slug: 'eldeco-trinity-faith-4bhk-2to5',
  },

  {
    id: 'et-faith-4bhk-6to11',
    title: '4 BHK + Servant — Tower Faith, 6th–11th Floor',
    price: '₹4.60 Cr',
    priceValue: 46031300,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '3461 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 4, bathrooms: 5,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: false,
    gradientFrom: '#0a1a00', gradientTo: '#1a3d0a',
    amenities: ET_AMENITIES,
    description: '4 BHK + 5T + Servant in Tower Faith — 6th to 11th floor. 3461 sq.ft. super area. Mid-rise with open views. Includes open parking, club membership, 7.5 KVA power backup.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Faith — F' },
      { label: 'Floors', value: '6th to 11th' },
      { label: 'Config', value: '4 BHK + 5T + Servant' },
      { label: 'Carpet Area', value: '1954 sq.ft.' },
      { label: 'Balcony Area', value: '573 sq.ft.' },
      { label: 'Total Area', value: '3461 sq.ft.' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'Parking', value: '1 Open Parking Included' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-faith-4bhk-6to11',
  },

  {
    id: 'et-faith-4bhk-12to15',
    title: '4 BHK + Servant — Tower Faith, 12th–15th Floor',
    price: '₹4.66 Cr',
    priceValue: 46550450,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '3461 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 4, bathrooms: 5,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: true,
    gradientFrom: '#0a1a00', gradientTo: '#1a3d0a',
    amenities: ET_AMENITIES,
    description: '4 BHK + 5T + Servant in Tower Faith — 12th to 15th floor. 3461 sq.ft. super area. High-rise with Gomti river views. Includes open parking, club membership, 7.5 KVA power backup.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Faith — F' },
      { label: 'Floors', value: '12th to 15th' },
      { label: 'Config', value: '4 BHK + 5T + Servant' },
      { label: 'Carpet Area', value: '1954 sq.ft.' },
      { label: 'Balcony Area', value: '573 sq.ft.' },
      { label: 'Total Area', value: '3461 sq.ft.' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'Parking', value: '1 Open Parking Included' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-faith-4bhk-12to15',
  },

  {
    id: 'et-faith-4bhk-16to23',
    title: '4 BHK + Servant — Tower Faith, 16th–23rd Floor',
    price: '₹4.67 Cr',
    priceValue: 46723500,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '3461 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 4, bathrooms: 5,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: true,
    gradientFrom: '#0a1a00', gradientTo: '#1a3d0a',
    amenities: ET_AMENITIES,
    description: '4 BHK + 5T + Servant in Tower Faith — top floors 16th to 23rd. 3461 sq.ft. super area. Panoramic views of Gomti river and city skyline. Best floors in Faith tower.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Faith — F' },
      { label: 'Floors', value: '16th to 23rd' },
      { label: 'Config', value: '4 BHK + 5T + Servant' },
      { label: 'Carpet Area', value: '1954 sq.ft.' },
      { label: 'Balcony Area', value: '573 sq.ft.' },
      { label: 'Total Area', value: '3461 sq.ft.' },
      { label: 'View', value: 'Gomti River + City Panorama' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-faith-4bhk-16to23',
  },

  // ─── Tower Faith — 3 BHK ────────────────────────────────

  {
    id: 'et-faith-3bhk-2to5',
    title: '3 BHK + Study + Servant — Tower Faith, 2nd–5th Floor',
    price: '₹3.61 Cr',
    priceValue: 36088000,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '2776 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: false,
    gradientFrom: '#0a1a00', gradientTo: '#1a3d0a',
    amenities: ET_AMENITIES,
    description: '3 BHK + Study + 4T + Servant in Tower Faith — 2nd to 5th floor. 2776 sq.ft. super area, 1615 sq.ft. carpet. 11ft ceiling, sit-out balconies, VRV AC. Includes open parking + club membership.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Faith — F' },
      { label: 'Floors', value: '2nd to 5th' },
      { label: 'Config', value: '3 BHK + Study + 4T + Servant' },
      { label: 'Carpet Area', value: '1615 sq.ft.' },
      { label: 'Balcony Area', value: '394 sq.ft.' },
      { label: 'Total Area', value: '2776 sq.ft.' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'Parking', value: '1 Open Parking Included' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    floorPlans: [
      { name: 'Drawing Room', area: '13\'5" × 18\'8"' },
      { name: 'Bedroom 01 (Master)', area: '12\'0" × 14\'3"' },
      { name: 'Bedroom 02', area: '11\'9" × 12\'0"' },
      { name: 'Bedroom 03', area: '11\'2" × 12\'0"' },
      { name: 'Study', area: '11\'4" × 8\'2"' },
      { name: 'Dining', area: '10\'1" × 12\'10"' },
      { name: 'Kitchen', area: '8\'6" × 12\'0"' },
      { name: 'Servant Room', area: '7\'3" × 8\'0"' },
    ],
    slug: 'eldeco-trinity-faith-3bhk-2to5',
  },

  {
    id: 'et-faith-3bhk-6to11',
    title: '3 BHK + Study + Servant — Tower Faith, 6th–11th Floor',
    price: '₹3.69 Cr',
    priceValue: 36920800,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '2776 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: false,
    gradientFrom: '#0a1a00', gradientTo: '#1a3d0a',
    amenities: ET_AMENITIES,
    description: '3 BHK + Study + 4T + Servant in Tower Faith — 6th to 11th floor. 2776 sq.ft. super area, 1615 sq.ft. carpet.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Faith — F' },
      { label: 'Floors', value: '6th to 11th' },
      { label: 'Config', value: '3 BHK + Study + 4T + Servant' },
      { label: 'Carpet Area', value: '1615 sq.ft.' },
      { label: 'Balcony Area', value: '394 sq.ft.' },
      { label: 'Total Area', value: '2776 sq.ft.' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-faith-3bhk-6to11',
  },

  {
    id: 'et-faith-3bhk-12to23',
    title: '3 BHK + Study + Servant — Tower Faith, 12th–23rd Floor',
    price: '₹3.73 Cr',
    priceValue: 37337200,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '2776 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: true,
    gradientFrom: '#0a1a00', gradientTo: '#1a3d0a',
    amenities: ET_AMENITIES,
    description: '3 BHK + Study + 4T + Servant in Tower Faith — upper floors 12th to 23rd. 2776 sq.ft. super area. High-rise views, excellent natural light.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Faith — F' },
      { label: 'Floors', value: '12th to 23rd' },
      { label: 'Config', value: '3 BHK + Study + 4T + Servant' },
      { label: 'Carpet Area', value: '1615 sq.ft.' },
      { label: 'Balcony Area', value: '394 sq.ft.' },
      { label: 'Total Area', value: '2776 sq.ft.' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-faith-3bhk-12to23',
  },

  // ─── Tower Faith — Penthouses ───────────────────────────

  {
    id: 'et-faith-ph-5bhk',
    title: '5 BHK Penthouse — Tower Faith (24th Floor)',
    price: '₹7.40 Cr',
    priceValue: 73956800,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '5438 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Penthouse', bedrooms: 5, bathrooms: 6,
    status: 'Under Construction',
    badge: 'Eldeco Trinity — Penthouse', featured: true,
    gradientFrom: '#1a0a00', gradientTo: '#3d200a',
    amenities: ET_AMENITIES,
    description: 'Crowning jewel of Tower Faith — 5 BHK + 6T + Lounge + Servant Penthouse on 24th floor. 5438 sq.ft. super area, 3071 sq.ft. carpet, 1369 sq.ft. balconies. Sky-high luxury.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Faith — F' },
      { label: 'Floor', value: '24th (Penthouse)' },
      { label: 'Config', value: '5 BHK + 6T + Lounge + Servant' },
      { label: 'Carpet Area', value: '3071 sq.ft.' },
      { label: 'Balcony Area', value: '1369 sq.ft.' },
      { label: 'Total Area', value: '5438 sq.ft.' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-faith-penthouse-5bhk',
  },

  {
    id: 'et-faith-ph-4bhk',
    title: '4 BHK Penthouse — Tower Faith (24th Floor)',
    price: '₹5.85 Cr',
    priceValue: 58520800,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '4303 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Penthouse', bedrooms: 4, bathrooms: 5,
    status: 'Under Construction',
    badge: 'Eldeco Trinity — Penthouse', featured: true,
    gradientFrom: '#1a0a00', gradientTo: '#3d200a',
    amenities: ET_AMENITIES,
    description: '4 BHK + 5T + Lounge + Servant Penthouse on 24th floor, Tower Faith. 4303 sq.ft. super area, 2500 sq.ft. carpet, 1040 sq.ft. balconies. Panoramic Lucknow views.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Faith — F' },
      { label: 'Floor', value: '24th (Penthouse)' },
      { label: 'Config', value: '4 BHK + 5T + Lounge + Servant' },
      { label: 'Carpet Area', value: '2500 sq.ft.' },
      { label: 'Balcony Area', value: '1040 sq.ft.' },
      { label: 'Total Area', value: '4303 sq.ft.' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-faith-penthouse-4bhk',
  },

  // ═══════════════════════════════════════════
  // TOWER WISDOM — 4 BHK + 5T + Servant
  // Total Area: 3461 sq.ft. | Carpet: 1954 sq.ft.
  // ═══════════════════════════════════════════

  {
    id: 'et-wisdom-4bhk-2to12',
    title: '4 BHK + Servant — Tower Wisdom, 2nd–12th Floor',
    price: '₹4.15 Cr',
    priceValue: 41532000,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '3461 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 4, bathrooms: 5,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: false,
    gradientFrom: '#001a0a', gradientTo: '#0a3d1a',
    amenities: ET_AMENITIES,
    description: '4 BHK + 5T + Servant in Tower Wisdom — 2nd to 12th floor. 3461 sq.ft. super area, 1954 sq.ft. carpet. Wisdom tower is the most competitively priced 4BHK in Eldeco Trinity.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Wisdom — W' },
      { label: 'Floors', value: '2nd to 12th' },
      { label: 'Config', value: '4 BHK + 5T + Servant' },
      { label: 'Carpet Area', value: '1954 sq.ft.' },
      { label: 'Balcony Area', value: '573 sq.ft.' },
      { label: 'Total Area', value: '3461 sq.ft.' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'Parking', value: '1 Open Parking Included' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-wisdom-4bhk-2to12',
  },

  {
    id: 'et-wisdom-4bhk-12a-to-23',
    title: '4 BHK + Servant — Tower Wisdom, 12A–23rd Floor',
    price: '₹3.98 Cr',
    priceValue: 39801500,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '3461 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 4, bathrooms: 5,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: true,
    gradientFrom: '#001a0a', gradientTo: '#0a3d1a',
    amenities: ET_AMENITIES,
    description: '4 BHK + 5T + Servant in Tower Wisdom — upper floors 12A to 23rd. 3461 sq.ft. super area. Higher floors, better views, lower price — best value 4BHK in the project.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Wisdom — W' },
      { label: 'Floors', value: '12A to 23rd' },
      { label: 'Config', value: '4 BHK + 5T + Servant' },
      { label: 'Carpet Area', value: '1954 sq.ft.' },
      { label: 'Balcony Area', value: '573 sq.ft.' },
      { label: 'Total Area', value: '3461 sq.ft.' },
      { label: 'Best Value', value: 'Higher Floor, Lower Price' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-wisdom-4bhk-12a-to-23',
  },

  // ─── Tower Wisdom — 3 BHK ────────────────────────────────

  {
    id: 'et-wisdom-3bhk-2to12',
    title: '3 BHK + Study + Servant — Tower Wisdom, 2nd–12th Floor',
    price: '₹3.33 Cr',
    priceValue: 33312000,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '2776 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: false,
    gradientFrom: '#001a0a', gradientTo: '#0a3d1a',
    amenities: ET_AMENITIES,
    description: '3 BHK + Study + 4T + Servant in Tower Wisdom — 2nd to 12th floor. 2776 sq.ft. super area, 1615 sq.ft. carpet. Most affordable 3BHK option in Eldeco Trinity.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Wisdom — W' },
      { label: 'Floors', value: '2nd to 12th' },
      { label: 'Config', value: '3 BHK + Study + 4T + Servant' },
      { label: 'Carpet Area', value: '1615 sq.ft.' },
      { label: 'Balcony Area', value: '394 sq.ft.' },
      { label: 'Total Area', value: '2776 sq.ft.' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'Parking', value: '1 Open Parking Included' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-wisdom-3bhk-2to12',
  },

  {
    id: 'et-wisdom-3bhk-12a-to-23',
    title: '3 BHK + Study + Servant — Tower Wisdom, 12A–23rd Floor',
    price: '₹3.19 Cr',
    priceValue: 31924000,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '2776 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 4,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: false,
    gradientFrom: '#001a0a', gradientTo: '#0a3d1a',
    amenities: ET_AMENITIES,
    description: '3 BHK + Study + 4T + Servant in Tower Wisdom — upper floors 12A to 23rd. 2776 sq.ft. super area. Higher floor, lower price — unique pricing advantage.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Wisdom — W' },
      { label: 'Floors', value: '12A to 23rd' },
      { label: 'Config', value: '3 BHK + Study + 4T + Servant' },
      { label: 'Carpet Area', value: '1615 sq.ft.' },
      { label: 'Balcony Area', value: '394 sq.ft.' },
      { label: 'Total Area', value: '2776 sq.ft.' },
      { label: 'Best Value', value: 'Higher Floor, Lower Price' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-wisdom-3bhk-12a-to-23',
  },

  // ─── Tower Wisdom — Penthouses ──────────────────────────

  {
    id: 'et-wisdom-ph-5bhk',
    title: '5 BHK Penthouse — Tower Wisdom (24th Floor)',
    price: '₹6.39 Cr',
    priceValue: 63896500,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '5438 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Penthouse', bedrooms: 5, bathrooms: 6,
    status: 'Under Construction',
    badge: 'Eldeco Trinity — Penthouse', featured: true,
    gradientFrom: '#1a0a00', gradientTo: '#3d200a',
    amenities: ET_AMENITIES,
    description: '5 BHK + 6T + Lounge + Servant Penthouse on 24th floor, Tower Wisdom. 5438 sq.ft. super area, 3071 sq.ft. carpet, 1369 sq.ft. balconies.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Wisdom — W' },
      { label: 'Floor', value: '24th (Penthouse)' },
      { label: 'Config', value: '5 BHK + 6T + Lounge + Servant' },
      { label: 'Carpet Area', value: '3071 sq.ft.' },
      { label: 'Balcony Area', value: '1369 sq.ft.' },
      { label: 'Total Area', value: '5438 sq.ft.' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-wisdom-penthouse-5bhk',
  },

  {
    id: 'et-wisdom-ph-4bhk',
    title: '4 BHK Penthouse — Tower Wisdom (24th Floor)',
    price: '₹5.06 Cr',
    priceValue: 50560250,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '4303 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Penthouse', bedrooms: 4, bathrooms: 5,
    status: 'Under Construction',
    badge: 'Eldeco Trinity — Penthouse', featured: true,
    gradientFrom: '#1a0a00', gradientTo: '#3d200a',
    amenities: ET_AMENITIES,
    description: '4 BHK + 5T + Lounge + Servant Penthouse on 24th floor, Tower Wisdom. 4303 sq.ft. super area, 2500 sq.ft. carpet.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Wisdom — W' },
      { label: 'Floor', value: '24th (Penthouse)' },
      { label: 'Config', value: '4 BHK + 5T + Lounge + Servant' },
      { label: 'Carpet Area', value: '2500 sq.ft.' },
      { label: 'Balcony Area', value: '1040 sq.ft.' },
      { label: 'Total Area', value: '4303 sq.ft.' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-wisdom-penthouse-4bhk',
  },

  // ═══════════════════════════════════════════
  // TOWER HARMONY — 3 BHK + 3T + Servant
  // Total Area: 2442 sq.ft. | Carpet: 1348 sq.ft.
  // ═══════════════════════════════════════════

  {
    id: 'et-harmony-3bhks-2to10',
    title: '3 BHK + Servant — Tower Harmony, 2nd–10th Floor',
    price: '₹2.81 Cr',
    priceValue: 28083000,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '2442 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 3,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: false,
    gradientFrom: '#00101a', gradientTo: '#0a253d',
    amenities: ET_AMENITIES,
    description: '3 BHK + 3T + Servant in Tower Harmony — 2nd to 10th floor. 2442 sq.ft. super area, 1348 sq.ft. carpet. Entry-level luxury in Eldeco Trinity.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Harmony — H' },
      { label: 'Floors', value: '2nd to 10th' },
      { label: 'Config', value: '3 BHK + 3T + Servant' },
      { label: 'Carpet Area', value: '1348 sq.ft.' },
      { label: 'Balcony Area', value: '423 sq.ft.' },
      { label: 'Total Area', value: '2442 sq.ft.' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'Parking', value: '1 Open Parking Included' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-harmony-3bhks-2to10',
  },

  {
    id: 'et-harmony-3bhks-11to23',
    title: '3 BHK + Servant — Tower Harmony, 11th–23rd Floor',
    price: '₹2.69 Cr',
    priceValue: 26862000,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '2442 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 3,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: false,
    gradientFrom: '#00101a', gradientTo: '#0a253d',
    amenities: ET_AMENITIES,
    description: '3 BHK + 3T + Servant in Tower Harmony — upper floors 11th to 23rd. 2442 sq.ft. super area. Higher floors with better views at lower price.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Harmony — H' },
      { label: 'Floors', value: '11th to 23rd' },
      { label: 'Config', value: '3 BHK + 3T + Servant' },
      { label: 'Carpet Area', value: '1348 sq.ft.' },
      { label: 'Balcony Area', value: '423 sq.ft.' },
      { label: 'Total Area', value: '2442 sq.ft.' },
      { label: 'Best Value', value: 'Higher Floor, Lower Price' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-harmony-3bhks-11to23',
  },

  // ─── Tower Harmony — 3 BHK (No Servant) ────────────────

  {
    id: 'et-harmony-3bhk-2to10',
    title: '3 BHK — Tower Harmony, 2nd–10th Floor',
    price: '₹2.58 Cr',
    priceValue: 25817500,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '2245 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 3,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: false,
    gradientFrom: '#00101a', gradientTo: '#0a253d',
    amenities: ET_AMENITIES,
    description: '3 BHK + 3T in Tower Harmony — 2nd to 10th floor. 2245 sq.ft. super area, 1293 sq.ft. carpet. Most compact and affordable unit in Eldeco Trinity.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Harmony — H' },
      { label: 'Floors', value: '2nd to 10th' },
      { label: 'Config', value: '3 BHK + 3T' },
      { label: 'Carpet Area', value: '1293 sq.ft.' },
      { label: 'Balcony Area', value: '359 sq.ft.' },
      { label: 'Total Area', value: '2245 sq.ft.' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'Parking', value: '1 Open Parking Included' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-harmony-3bhk-2to10',
  },

  {
    id: 'et-harmony-3bhk-11to23',
    title: '3 BHK — Tower Harmony, 11th–23rd Floor',
    price: '₹2.47 Cr',
    priceValue: 24695000,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '2245 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 3, bathrooms: 3,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: false,
    gradientFrom: '#00101a', gradientTo: '#0a253d',
    amenities: ET_AMENITIES,
    description: '3 BHK + 3T in Tower Harmony — upper floors 11th to 23rd. 2245 sq.ft. super area. Best entry price in Eldeco Trinity at ₹2.47 Cr.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Harmony — H' },
      { label: 'Floors', value: '11th to 23rd' },
      { label: 'Config', value: '3 BHK + 3T' },
      { label: 'Carpet Area', value: '1293 sq.ft.' },
      { label: 'Balcony Area', value: '359 sq.ft.' },
      { label: 'Total Area', value: '2245 sq.ft.' },
      { label: 'Best Value', value: 'Higher Floor, Lower Price' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-harmony-3bhk-11to23',
  },

  // ─── Tower Harmony — 2 BHK (17th Floor only) ────────────

  {
    id: 'et-harmony-2bhk-17',
    title: '2 BHK — Tower Harmony, 17th Floor',
    price: '₹2.03 Cr',
    priceValue: 20346300,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '1833 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Apartment', bedrooms: 2, bathrooms: 2,
    status: 'Under Construction',
    badge: 'Eldeco Trinity', featured: false,
    gradientFrom: '#00101a', gradientTo: '#0a253d',
    amenities: ET_AMENITIES,
    description: 'Rare 2 BHK in Eldeco Trinity — available only on 17th floor of Tower Harmony. 1833 sq.ft. super area, 1050 sq.ft. carpet. Limited availability.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Harmony — H' },
      { label: 'Floor', value: '17th Floor only' },
      { label: 'Config', value: '2 BHK + 2T' },
      { label: 'Carpet Area', value: '1050 sq.ft.' },
      { label: 'Balcony Area', value: '294 sq.ft.' },
      { label: 'Total Area', value: '1833 sq.ft.' },
      { label: 'Availability', value: 'Very Limited — Only 2 Units' },
      { label: 'IFMS', value: '₹25,000' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-harmony-2bhk-17',
  },

  // ─── Tower Harmony — Penthouses ─────────────────────────

  {
    id: 'et-harmony-ph-4bhk-u2402',
    title: '4 BHK Penthouse — Tower Harmony (24th Floor)',
    price: '₹4.15 Cr',
    priceValue: 41490000,
    location: 'Gomti Nagar Extension, Lucknow',
    area: '3688 sq.ft.',
    type: 'project', subtype: 'new',
    category: 'Penthouse', bedrooms: 4, bathrooms: 5,
    status: 'Under Construction',
    badge: 'Eldeco Trinity — Penthouse', featured: true,
    gradientFrom: '#1a0a00', gradientTo: '#3d200a',
    amenities: ET_AMENITIES,
    description: '4 BHK + 5T + Servant Penthouse on 24th floor, Tower Harmony. 3688 sq.ft. super area, 2100 sq.ft. carpet, 952 sq.ft. balcony. Two units available.',
    developer: 'Eldeco Inception Buildtech Pvt. Ltd.',
    possession: 'As per RERA schedule',
    highlights: [
      { label: 'Tower', value: 'Harmony — H' },
      { label: 'Floor', value: '24th (Penthouse)' },
      { label: 'Config', value: '4 BHK + 5T + Servant' },
      { label: 'Carpet Area', value: '2100 sq.ft.' },
      { label: 'Balcony Area', value: '952 sq.ft.' },
      { label: 'Total Area', value: '3688 sq.ft.' },
      { label: 'Units', value: 'H-2401 & H-2402' },
      { label: 'RERA', value: 'UPRERAPRJ787868' },
    ],
    slug: 'eldeco-trinity-harmony-penthouse-4bhk',
  },

  // kailasha Awadh Commercial
  // 🔴 LOWER GROUND FLOOR

  {
    id: 'ka-lgf',
    title: 'Retail Shop — Lower Ground Floor',
    price: '₹13,000 / sq.ft.',
    priceValue: 13000,
    location: 'Shaheed Path, Near Airport, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Kailasha Awadh',
    featured: true,

    gradientFrom: '#3b0a0a',
    gradientTo: '#7a1f1f',

    amenities: KA_AMENITIES,

    description:
      'Lower Ground Floor retail shops offering strong value pricing and steady customer flow. Ideal for service-based businesses and daily footfall stores.',

    developer: 'Kailasha Awadh Developers',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Floor', value: 'Lower Ground Floor' },
      { label: 'Price', value: '₹13,000 / sq.ft.' },
      { label: 'PLC', value: '₹1,000 – ₹2,000 / sq.ft.' },
      { label: 'Maintenance', value: '₹6.5 / sq.ft./month' },
      { label: 'Car Parking', value: '₹2,50,000' },
      { label: 'Total Units', value: '180+ Shops & Commercial Spaces' },
      { label: 'Investment Type', value: 'High-Street Retail' },
      { label: 'Rental Potential', value: 'High Footfall Zone' },
      { label: 'RERA', value: 'UPRERAPRJ850664' },
    ],

    floorPlans: [
      { name: 'Retail Units', area: 'Multiple Sizes Available' },
    ],

    slug: 'kailasha-awadh-lgf',
  },

  // 🟢 UPPER GROUND FLOOR (BEST SELLER)
  {
    id: 'ka-ugf',
    title: 'Retail Shop — Upper Ground Floor',
    price: '₹15,500 / sq.ft.',
    priceValue: 15500,
    location: 'Shaheed Path, Near Airport, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Kailasha Awadh',
    featured: true,

    gradientFrom: '#5a0f0f',
    gradientTo: '#a52a2a',

    amenities: KA_AMENITIES,

    description:
      'Upper Ground Floor is the most premium retail zone with maximum visibility and highest footfall. Perfect for branded outlets and anchor stores.',

    developer: 'Kailasha Awadh Developers',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Floor', value: 'Upper Ground Floor' },
      { label: 'Price', value: '₹15,500 / sq.ft.' },
      { label: 'PLC', value: '₹500 – ₹2,000 / sq.ft.' },
      { label: 'Demand Level', value: 'Highest Demand Floor' },
      { label: 'Best For', value: 'Premium Brands / Anchor Stores' },
      { label: 'Total Units', value: '180+ Shops & Commercial Spaces' },
      { label: 'Investment Type', value: 'High-Street Retail' },
      { label: 'Rental Potential', value: 'Maximum Footfall Zone' },
      { label: 'RERA', value: 'UPRERAPRJ850664' },
    ],

    floorPlans: [
      { name: 'Prime Retail Units', area: 'High Visibility Shops' },
    ],

    slug: 'kailasha-awadh-ugf',
  },

  // 🔵 FIRST FLOOR
  {
    id: 'ka-first',
    title: 'Retail Shop — First Floor',
    price: '₹11,000 / sq.ft.',
    priceValue: 11000,
    location: 'Shaheed Path, Near Airport, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Kailasha Awadh',

    gradientFrom: '#3b0a0a',
    gradientTo: '#6b1c1c',

    amenities: KA_AMENITIES,

    description:
      'First floor retail spaces ideal for growing brands with balanced pricing and steady customer movement.',

    developer: 'Kailasha Awadh Developers',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Floor', value: 'First Floor' },
      { label: 'Price', value: '₹11,000 / sq.ft.' },
      { label: 'Best For', value: 'Retail Brands / Showrooms' },
      { label: 'Total Units', value: '180+ Shops & Commercial Spaces' },
      { label: 'Investment Type', value: 'High-Street Retail' },
      { label: 'Rental Potential', value: 'Strong Footfall' },
      { label: 'RERA', value: 'UPRERAPRJ850664' },
    ],

    floorPlans: [
      { name: 'Retail Units', area: 'Multiple Sizes Available' },
    ],

    slug: 'kailasha-awadh-first-floor',
  },

  // 🟡 SECOND FLOOR
  {
    id: 'ka-second',
    title: 'Retail Shop — Second Floor',
    price: '₹8,500 / sq.ft.',
    priceValue: 8500,
    location: 'Shaheed Path, Near Airport, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Kailasha Awadh',

    gradientFrom: '#2b0a0a',
    gradientTo: '#4a1515',

    amenities: KA_AMENITIES,

    description:
      'Affordable retail investment option with strong rental yield potential and growing footfall.',

    developer: 'Kailasha Awadh Developers',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Floor', value: 'Second Floor' },
      { label: 'Price', value: '₹8,500 / sq.ft.' },
      { label: 'Best For', value: 'Budget Investors' },
      { label: 'Total Units', value: '180+ Shops & Commercial Spaces' },
      { label: 'Investment Type', value: 'High-Street Retail' },
      { label: 'Rental Potential', value: 'Growing Demand' },
      { label: 'RERA', value: 'UPRERAPRJ850664' },
    ],

    floorPlans: [
      { name: 'Retail Units', area: 'Flexible Layouts' },
    ],

    slug: 'kailasha-awadh-second-floor',
  },

  // 🟣 THIRD FLOOR (FOOD COURT)
  {
    id: 'ka-third',
    title: 'Food Court / Restaurant — Third Floor',
    price: '₹6,500 / sq.ft.',
    priceValue: 6500,
    location: 'Shaheed Path, Near Airport, Lucknow',
    area: '300 – 1000+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Kailasha Awadh',

    gradientFrom: '#3b0a0a',
    gradientTo: '#8b0000',

    amenities: KA_AMENITIES,

    description:
      'Dedicated food court and restaurant zone designed for cafes, QSRs, and dining outlets with high engagement potential.',

    developer: 'Kailasha Awadh Developers',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Floor', value: 'Third Floor' },
      { label: 'Price', value: '₹6,500 / sq.ft.' },
      { label: 'Best For', value: 'Restaurants / Cafes / Food Chains' },
      { label: 'Total Units', value: '180+ Shops & Commercial Spaces' },
      { label: 'Investment Type', value: 'Food & Beverage Retail' },
      { label: 'Rental Potential', value: 'High Engagement Zone' },
      { label: 'RERA', value: 'UPRERAPRJ850664' },
    ],

    floorPlans: [
      { name: 'Food Court Spaces', area: 'Flexible Dining Layouts' },
    ],

    slug: 'kailasha-awadh-third-floor',
  },

  //  MIGSUN LUCKNOW CENTRAL 
  // 🔻 LOWER GROUND FLOOR
  {
    id: 'mlc-lgf',
    title: 'Retail Shop — Lower Ground Floor',
    price: '₹24,190 / sq.ft.',
    priceValue: 24190,
    location: 'Shaheed Path, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Migsun Lucknow Central',
    featured: true,

    gradientFrom: '#0f172a',
    gradientTo: '#1e293b',

    amenities: MIGSUN_AMENITIES,

    description: 'High footfall retail spaces with strong customer flow.',

    developer: 'Migsun Group',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Floor', value: 'Lower Ground Floor' },
      { label: 'Price', value: '₹24,190 / sq.ft.' },
      { label: 'Rental Potential', value: 'High Footfall Zone' },
      ...MIGSUN_COMMON,
    ],

    floorPlans: [{ name: 'Retail Units', area: 'Multiple Sizes Available' }],
    slug: 'migsun-lgf',
  },

  // 🟢 GROUND FLOOR
  {
    id: 'mlc-ground',
    title: 'Retail Shop — Ground Floor',
    price: '₹24,190 / sq.ft.',
    priceValue: 24190,
    location: 'Shaheed Path, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Migsun Lucknow Central',
    featured: true,

    gradientFrom: '#1e293b',
    gradientTo: '#334155',

    amenities: MIGSUN_AMENITIES,

    description: 'Premium retail spaces with maximum visibility.',

    developer: 'Migsun Group',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Floor', value: 'Ground Floor' },
      { label: 'Demand Level', value: 'Highest Demand Floor' },
      { label: 'Rental Potential', value: 'Maximum Footfall Zone' },
      ...MIGSUN_COMMON,
    ],

    floorPlans: [{ name: 'Prime Shops', area: 'High Visibility Units' }],
    slug: 'migsun-ground',
  },

  // 🔵 FIRST FLOOR
  {
    id: 'mlc-first',
    title: 'Retail Shop — First Floor',
    price: '₹16,190 / sq.ft.',
    priceValue: 16190,
    location: 'Shaheed Path, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',

    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Migsun Lucknow Central',

    gradientFrom: '#0f172a',
    gradientTo: '#334155',

    amenities: MIGSUN_AMENITIES,

    description: 'Balanced retail investment with steady demand.',

    developer: 'Migsun Group',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Floor', value: 'First Floor' },
      { label: 'Rental Potential', value: 'Strong Footfall' },
      ...MIGSUN_COMMON,
    ],

    floorPlans: [{ name: 'Retail Units', area: 'Flexible Layouts' }],
    slug: 'migsun-first',
  },

  // 🟡 SECOND FLOOR
  {
    id: 'mlc-second',
    title: 'Retail Shop — Second Floor',
    price: '₹19,190 / sq.ft.',
    priceValue: 19190,
    location: 'Shaheed Path, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',

    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Migsun Lucknow Central',

    gradientFrom: '#020617',
    gradientTo: '#1e293b',

    amenities: MIGSUN_AMENITIES,

    description: 'Retail spaces with growing demand and investment value.',

    developer: 'Migsun Group',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Floor', value: 'Second Floor' },
      { label: 'Rental Potential', value: 'Growing Demand' },
      ...MIGSUN_COMMON,
    ],

    floorPlans: [{ name: 'Retail Units', area: 'Flexible Sizes' }],
    slug: 'migsun-second',
  },

  // 🟣 FOOD COURT
  {
    id: 'mlc-food',
    title: 'Food Court — 3rd Floor',
    price: '₹20,190 / sq.ft.',
    priceValue: 20190,
    location: 'Shaheed Path, Lucknow',
    area: '300 – 1000+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',

    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Migsun Lucknow Central',

    gradientFrom: '#1e293b',
    gradientTo: '#475569',

    amenities: MIGSUN_AMENITIES,

    description: 'Dining and entertainment zone with high engagement.',

    developer: 'Migsun Group',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Floor', value: 'Food Court (3rd Floor)' },
      { label: 'Best For', value: 'Restaurants / Cafes' },
      { label: 'Rental Potential', value: 'High Engagement' },
      ...MIGSUN_COMMON,
    ],

    floorPlans: [{ name: 'Food Units', area: 'Flexible Layouts' }],
    slug: 'migsun-food',
  },

  // 🏢 OFFICE FLOORS (5th–12th)
  // ...[5,6,7,8,9,10,11,12].map((floor) => ({
  //   id: `mlc-office-${floor}`,
  //   title: `Office Space — ${floor}th Floor (Tower C)`,
  //   price: '₹6,999 – ₹9,999 / sq.ft.',
  //   priceValue: 6999,
  //   location: 'Shaheed Path, Lucknow',
  //   area: '200 – 800+ sq.ft.',
  //   type: 'project',
  //   subtype: 'new',
  //   category: 'Commercial',

  //   bedrooms: 0,
  //   bathrooms: 0,
  //   status: 'Under Construction',
  //   badge: 'Migsun Lucknow Central',

  //   gradientFrom: '#020617',
  //   gradientTo: '#1e293b',

  //   amenities: MIGSUN_AMENITIES,

  //   description: `Office spaces on ${floor}th floor ideal for startups, SMEs and investors.`,

  //   developer: 'Migsun Group',
  //   possession: 'As per Construction Linked Plan',

  //   highlights: [
  //     { label: 'Tower', value: 'Tower C' },
  //     { label: 'Floor', value: `${floor}th Floor` },
  //     { label: 'Investment Type', value: 'Office Space' },
  //     { label: 'Rental Potential', value: 'Growing Demand' },
  //     ...MIGSUN_COMMON,
  //   ],

  //   floorPlans: [{ name: 'Office Units', area: 'Flexible Sizes Available' }],
  //   slug: `migsun-office-${floor}th-floor`,
  // })),

  {
    id: 'mlc-office-5',
    title: 'Office Space — 5th Floor (Tower C)',
    price: '₹6,999 – ₹9,999 / sq.ft.',
    priceValue: 6999,
    location: 'Shaheed Path, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Migsun Lucknow Central',

    gradientFrom: '#020617',
    gradientTo: '#1e293b',

    amenities: MIGSUN_AMENITIES,

    description:
      'Entry-level office spaces ideal for startups and small businesses with affordable pricing and strong growth potential.',

    developer: 'Migsun Group',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Tower', value: 'Tower C' },
      { label: 'Floor', value: '5th Floor' },
      { label: 'Price', value: '₹6,999 – ₹9,999 / sq.ft.' },
      { label: 'Project Size', value: '250+ Retail & Office Units' },
      { label: 'Investment Type', value: 'Commercial Office Space' },
      { label: 'Rental Potential', value: 'Growing Demand' },
      { label: 'RERA', value: 'UPRERAPRJ589752/04/2024' },
    ],

    floorPlans: [
      { name: 'Office Units', area: 'Flexible Sizes Available' },
    ],

    slug: 'migsun-office-5th-floor',
  },

  // 🟣 6th FLOOR
  {
    id: 'mlc-office-6',
    title: 'Office Space — 6th Floor (Tower C)',
    price: '₹6,999 – ₹9,999 / sq.ft.',
    priceValue: 6999,
    location: 'Shaheed Path, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Migsun Lucknow Central',

    gradientFrom: '#020617',
    gradientTo: '#1e293b',

    amenities: MIGSUN_AMENITIES,

    description:
      'Well-positioned office spaces with balanced pricing and strong rental potential for investors and businesses.',

    developer: 'Migsun Group',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Tower', value: 'Tower C' },
      { label: 'Floor', value: '6th Floor' },
      { label: 'Price', value: '₹6,999 – ₹9,999 / sq.ft.' },
      { label: 'Project Size', value: '250+ Retail & Office Units' },
      { label: 'Investment Type', value: 'Commercial Office Space' },
      { label: 'Rental Potential', value: 'Stable Demand' },
      { label: 'RERA', value: 'UPRERAPRJ589752/04/2024' },
    ],

    floorPlans: [
      { name: 'Office Units', area: 'Flexible Sizes Available' },
    ],

    slug: 'migsun-office-6th-floor',
  },

  // 🟣 7th FLOOR
  {
    id: 'mlc-office-7',
    title: 'Office Space — 7th Floor (Tower C)',
    price: '₹6,999 – ₹9,999 / sq.ft.',
    priceValue: 6999,
    location: 'Shaheed Path, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Migsun Lucknow Central',

    gradientFrom: '#020617',
    gradientTo: '#1e293b',

    amenities: MIGSUN_AMENITIES,

    description:
      'Office spaces suitable for startups and SMEs with consistent demand and good rental yield opportunities.',

    developer: 'Migsun Group',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Tower', value: 'Tower C' },
      { label: 'Floor', value: '7th Floor' },
      { label: 'Price', value: '₹6,999 – ₹9,999 / sq.ft.' },
      { label: 'Project Size', value: '250+ Retail & Office Units' },
      { label: 'Investment Type', value: 'Commercial Office Space' },
      { label: 'Rental Potential', value: 'Strong Demand' },
      { label: 'RERA', value: 'UPRERAPRJ589752/04/2024' },
    ],

    floorPlans: [
      { name: 'Office Units', area: 'Flexible Sizes Available' },
    ],

    slug: 'migsun-office-7th-floor',
  },

  // 🟣 8th FLOOR
  {
    id: 'mlc-office-8',
    title: 'Office Space — 8th Floor (Tower C)',
    price: '₹6,999 – ₹9,999 / sq.ft.',
    priceValue: 6999,
    location: 'Shaheed Path, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Migsun Lucknow Central',

    gradientFrom: '#020617',
    gradientTo: '#1e293b',

    amenities: MIGSUN_AMENITIES,

    description:
      'Mid-level office spaces offering balanced investment with strong rental stability.',

    developer: 'Migsun Group',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Tower', value: 'Tower C' },
      { label: 'Floor', value: '8th Floor' },
      { label: 'Price', value: '₹6,999 – ₹9,999 / sq.ft.' },
      { label: 'Project Size', value: '250+ Retail & Office Units' },
      { label: 'Investment Type', value: 'Commercial Office Space' },
      { label: 'Rental Potential', value: 'Balanced Demand' },
      { label: 'RERA', value: 'UPRERAPRJ589752/04/2024' },
    ],

    floorPlans: [
      { name: 'Office Units', area: 'Flexible Sizes Available' },
    ],

    slug: 'migsun-office-8th-floor',
  },

  // 🟣 9th FLOOR
  {
    id: 'mlc-office-9',
    title: 'Office Space — 9th Floor (Tower C)',
    price: '₹6,999 – ₹9,999 / sq.ft.',
    priceValue: 6999,
    location: 'Shaheed Path, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Migsun Lucknow Central',

    gradientFrom: '#020617',
    gradientTo: '#1e293b',

    amenities: MIGSUN_AMENITIES,

    description:
      'Office spaces with steady appreciation potential and suitable for long-term investors.',

    developer: 'Migsun Group',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Tower', value: 'Tower C' },
      { label: 'Floor', value: '9th Floor' },
      { label: 'Price', value: '₹6,999 – ₹9,999 / sq.ft.' },
      { label: 'Project Size', value: '250+ Retail & Office Units' },
      { label: 'Investment Type', value: 'Commercial Office Space' },
      { label: 'Rental Potential', value: 'Stable Demand' },
      { label: 'RERA', value: 'UPRERAPRJ589752/04/2024' },
    ],

    floorPlans: [
      { name: 'Office Units', area: 'Flexible Sizes Available' },
    ],

    slug: 'migsun-office-9th-floor',
  },

  // 🟣 10th FLOOR
  {
    id: 'mlc-office-10',
    title: 'Office Space — 10th Floor (Tower C)',
    price: '₹6,999 – ₹9,999 / sq.ft.',
    priceValue: 6999,
    location: 'Shaheed Path, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Migsun Lucknow Central',

    gradientFrom: '#020617',
    gradientTo: '#1e293b',

    amenities: MIGSUN_AMENITIES,

    description:
      'High-floor office spaces offering premium positioning and better long-term returns.',

    developer: 'Migsun Group',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Tower', value: 'Tower C' },
      { label: 'Floor', value: '10th Floor' },
      { label: 'Price', value: '₹6,999 – ₹9,999 / sq.ft.' },
      { label: 'Project Size', value: '250+ Retail & Office Units' },
      { label: 'Investment Type', value: 'Commercial Office Space' },
      { label: 'Rental Potential', value: 'Premium Demand' },
      { label: 'RERA', value: 'UPRERAPRJ589752/04/2024' },
    ],

    floorPlans: [
      { name: 'Office Units', area: 'Flexible Sizes Available' },
    ],

    slug: 'migsun-office-10th-floor',
  },

  // 🟣 11th FLOOR
  {
    id: 'mlc-office-11',
    title: 'Office Space — 11th Floor (Tower C)',
    price: '₹6,999 – ₹9,999 / sq.ft.',
    priceValue: 6999,
    location: 'Shaheed Path, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Migsun Lucknow Central',

    gradientFrom: '#020617',
    gradientTo: '#1e293b',

    amenities: MIGSUN_AMENITIES,

    description:
      'Premium office spaces suitable for corporates and high-value businesses.',

    developer: 'Migsun Group',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Tower', value: 'Tower C' },
      { label: 'Floor', value: '11th Floor' },
      { label: 'Price', value: '₹6,999 – ₹9,999 / sq.ft.' },
      { label: 'Project Size', value: '250+ Retail & Office Units' },
      { label: 'Investment Type', value: 'Commercial Office Space' },
      { label: 'Rental Potential', value: 'High Demand' },
      { label: 'RERA', value: 'UPRERAPRJ589752/04/2024' },
    ],

    floorPlans: [
      { name: 'Office Units', area: 'Flexible Sizes Available' },
    ],

    slug: 'migsun-office-11th-floor',
  },

  // 🟣 12th FLOOR (PREMIUM)
  {
    id: 'mlc-office-12',
    title: 'Office Space — 12th Floor (Tower C)',
    price: '₹6,999 – ₹9,999 / sq.ft.',
    priceValue: 6999,
    location: 'Shaheed Path, Lucknow',
    area: '200 – 800+ sq.ft.',
    type: 'project',
    subtype: 'new',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    status: 'Under Construction',
    badge: 'Migsun Lucknow Central',

    gradientFrom: '#020617',
    gradientTo: '#020617',

    amenities: MIGSUN_AMENITIES,

    description:
      'Top floor premium office spaces with best positioning, ideal for corporate offices and long-term investors.',

    developer: 'Migsun Group',
    possession: 'As per Construction Linked Plan',

    highlights: [
      { label: 'Tower', value: 'Tower C' },
      { label: 'Floor', value: '12th Floor' },
      { label: 'Price', value: '₹6,999 – ₹9,999 / sq.ft.' },
      { label: 'Project Size', value: '250+ Retail & Office Units' },
      { label: 'Investment Type', value: 'Commercial Office Space' },
      { label: 'Rental Potential', value: 'Premium Segment Demand' },
      { label: 'RERA', value: 'UPRERAPRJ589752/04/2024' },
    ],

    floorPlans: [
      { name: 'Office Units', area: 'Flexible Sizes Available' },
    ],

    slug: 'migsun-office-12th-floor',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Software Engineer, TCS Lucknow',
    text: 'Fincap sol made our home-buying journey incredibly smooth. Their team understood exactly what we needed and found our dream apartment in Gomti Nagar within two weeks. The paperwork was handled flawlessly. Outstanding service!',
    rating: 5,
    location: 'Purchased 3BHK in Gomti Nagar',
    initials: 'RS',
  },
  {
    id: 2,
    name: 'Priya Verma',
    role: 'Business Owner, Lucknow',
    text: 'I was skeptical at first, but the team at Regalia exceeded all expectations. They guided me through every step of buying my first investment property and ensured the best deal. Truly professional, truly trustworthy advisors.',
    rating: 5,
    location: 'Invested in Sultanpur Road Project',
    initials: 'PV',
  },
  {
    id: 3,
    name: 'Dr. Arun & Deepti Mishra',
    role: 'Doctor Couple, KGMU',
    text: 'We found our perfect villa through Fincap sol. The entire process was completely transparent with zero hidden charges. Their legal team ensured everything was in perfect order. We couldn\'t be happier with our new home!',
    rating: 5,
    location: 'Purchased Villa on Shaheed Path',
    initials: 'AM',
  },
  {
    id: 4,
    name: 'Vikram Srivastava',
    role: 'Senior IAS Officer',
    text: 'Exceptional attention to detail and deep market knowledge that I haven\'t seen elsewhere. Fincap sol helped me identify the right property at the right price. Their negotiation skills alone saved me over 15 lakhs on my purchase.',
    rating: 5,
    location: 'Purchased Penthouse, Gomti Nagar Ext.',
    initials: 'VS',
  },
]

// export const locations = [
//   {
//     name: 'Gomti Nagar',
//     slug: 'gomti-nagar',
//     properties: 142,
//     avgPrice: '₹85 Lakh',
//     priceChange: '+8.2%',
//     type: 'Premium',
//     description: 'The most prestigious residential area in Lucknow, known for wide roads, greenery, and upscale living.',
//     gradient: 'from-blue-900 to-slate-700',
//   },
//   {
//     name: 'Hazratganj',
//     slug: 'hazratganj',
//     properties: 67,
//     avgPrice: '₹1.1 Cr',
//     priceChange: '+5.1%',
//     type: 'Prime',
//     description: 'The cultural and commercial heart of Lucknow. Iconic address with unmatched connectivity.',
//     gradient: 'from-purple-900 to-indigo-700',
//   },
//   {
//     name: 'Shaheed Path',
//     slug: 'shaheed-path',
//     properties: 89,
//     avgPrice: '₹1.5 Cr',
//     priceChange: '+12.3%',
//     type: 'Luxury',
//     description: 'The fastest-growing luxury corridor. Home to Lucknow\'s most prestigious villas and gated communities.',
//     gradient: 'from-emerald-900 to-teal-700',
//   },
//   {
//     name: 'Aliganj',
//     slug: 'aliganj',
//     properties: 115,
//     avgPrice: '₹55 Lakh',
//     priceChange: '+6.4%',
//     type: 'Mid-range',
//     description: 'A well-established neighbourhood perfect for families, with excellent schools and social infrastructure.',
//     gradient: 'from-rose-900 to-pink-700',
//   },
//   {
//     name: 'Sultanpur Road',
//     slug: 'sultanpur-road',
//     properties: 203,
//     avgPrice: '₹75 Lakh',
//     priceChange: '+15.7%',
//     type: 'Emerging',
//     description: 'The most exciting growth corridor. New projects, modern townships, and huge investment potential.',
//     gradient: 'from-orange-900 to-amber-700',
//   },
//   {
//     name: 'Vibhuti Khand',
//     slug: 'vibhuti-khand',
//     properties: 88,
//     avgPrice: '₹90 Lakh',
//     priceChange: '+9.1%',
//     type: 'Commercial',
//     description: 'Lucknow\'s IT and business hub. Premium commercial spaces and residential apartments for professionals.',
//     gradient: 'from-cyan-900 to-blue-700',
//   },
// ]

export const locations = [
  {
    name: 'Gomti Nagar',
    slug: 'gomti-nagar',
    properties: 142,
    avgPrice: '₹85 Lakh',
    priceChange: '+8.2%',
    type: 'Premium',
    description: 'The most prestigious residential area in Lucknow, known for wide roads, greenery, and upscale living.',
    gradient: 'from-blue-900 to-slate-700',
  },
  {
    name: 'Shaheed Path',
    slug: 'shaheed-path',
    properties: 89,
    avgPrice: '₹1.5 Cr',
    priceChange: '+12.3%',
    type: 'Luxury',
    description: 'The fastest-growing luxury corridor. Home to Lucknow\'s most prestigious villas and gated communities.',
    gradient: 'from-emerald-900 to-teal-700',
  },
  {
    name: 'Vrindavan Yojana',
    slug: 'vrindavan-yojana',
    properties: 130,
    avgPrice: '₹70 Lakh',
    priceChange: '+10.5%',
    type: 'Premium',
    description: 'A well-planned residential area with modern infrastructure, parks, and excellent connectivity to major highways.',
    gradient: 'from-purple-900 to-indigo-700',
  },
  {
    name: 'Sushant Golf City',
    slug: 'sushant-golf-city',
    properties: 180,
    avgPrice: '₹95 Lakh',
    priceChange: '+14.2%',
    type: 'Luxury',
    description: 'A premium township known for golf course living, high-end apartments, villas, and world-class amenities.',
    gradient: 'from-rose-900 to-pink-700',
  },
  {
    name: 'Sultanpur Road',
    slug: 'sultanpur-road',
    properties: 203,
    avgPrice: '₹75 Lakh',
    priceChange: '+15.7%',
    type: 'Emerging',
    description: 'The most exciting growth corridor. New projects, modern townships, and huge investment potential.',
    gradient: 'from-orange-900 to-amber-700',
  },
  {
    name: 'Vibhuti Khand',
    slug: 'vibhuti-khand',
    properties: 88,
    avgPrice: '₹90 Lakh',
    priceChange: '+9.1%',
    type: 'Commercial',
    description: 'Lucknow\'s IT and business hub. Premium commercial spaces and residential apartments for professionals.',
    gradient: 'from-cyan-900 to-blue-700',
  },
]

export const developers = [
  { name: 'Rishita', initials: 'RI' },
  { name: 'Eldeco', initials: 'EL' },
  { name: 'Shalimar', initials: 'SH' },
  { name: 'ORO', initials: 'OR' },
  { name: 'Azeagaia Development Pvt Ltd', initials: 'AZ' },
  { name: 'Gandharv', initials: 'GA' },
  { name: 'KSMB', initials: 'KS' },
  { name: 'Omaxe', initials: 'OM' },
]

// export const stats = [
//   { value: '2,500+', label: 'Properties Sold' },
//   { value: '10+', label: 'Years Experience' },
//   { value: '98%', label: 'Client Satisfaction' },
//   { value: '₹500 Cr+', label: 'Deals Closed' },
// ]
export const stats = [
  { value: '2011', label: 'Founded' },
  { value: '400+', label: 'Business Associates' },
  { value: '80%+', label: 'Revenue Growth' },
  { value: '5000+', label: 'Satisfied Customers' },
]

// export const whyChooseUs = [
//   {
//     icon: 'ShieldCheck',
//     title: '100% Verified Listings',
//     desc: 'Every property we list is rigorously verified by our expert team. Zero fraud, complete transparency — your trust is our foundation.',
//   },
//   {
//     icon: 'TrendingUp',
//     title: 'Market Intelligence',
//     desc: 'With 15+ years in Lucknow real estate, we provide data-driven insights that help you make the smartest investment decisions.',
//   },
//   {
//     icon: 'HandshakeIcon',
//     title: 'End-to-End Support',
//     desc: 'From property search to registration and beyond, our dedicated relationship managers guide you through every single step.',
//   },
//   {
//     icon: 'Star',
//     title: 'Premium Developer Network',
//     desc: 'Access exclusive off-market deals and pre-launch prices through our unmatched network of top developers and builders.',
//   },
// ]


export const whyChooseUs = [
  {
    icon: 'Users',
    title: 'People Driven',
    desc: 'Our team is focused on understanding client needs and delivering personalized solutions.',
  },
  {
    icon: 'Settings',
    title: 'Industry Best Practices & Processes',
    desc: 'We follow structured workflows ensuring transparency, efficiency, and trust.',
  },
  {
    icon: 'Smartphone',
    title: 'Innovative Technology Platform',
    desc: 'Leveraging modern tech to simplify property discovery and transactions.',
  },
  {
    icon: 'BarChart3',
    title: 'Consistency & Quality',
    desc: 'Delivering reliable service with high standards across every interaction.',
  },
]