// 'use client'

// import { useState } from 'react'
// import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'

// interface FilterState {
//   locations: string[]
//   budgetMin: string
//   budgetMax: string
//   propertyTypes: string[]
//   bedrooms: string[]
//   status: string[]
// }

// interface FilterSidebarProps {
//   onFilterChange: (filters: FilterState) => void
// }

// const locationOptions = [
//   'Gomti Nagar', 'Hazratganj', 'Shaheed Path', 'Aliganj', 'Sultanpur Road',
//   'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
// ]

// const propertyTypeOptions = ['Apartment', 'Villa', 'Plot', 'Commercial', 'Penthouse']

// const budgetRanges = [
//   { label: 'Under ₹50 Lakh', min: '0', max: '5000000' },
//   { label: '₹50L – ₹1 Cr', min: '5000000', max: '10000000' },
//   { label: '₹1 Cr – ₹2 Cr', min: '10000000', max: '20000000' },
//   { label: '₹2 Cr – ₹5 Cr', min: '20000000', max: '50000000' },
//   { label: 'Above ₹5 Cr', min: '50000000', max: '999999999' },
// ]

// const bedroomOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK']
// const statusOptions = ['Ready to Move', 'Under Construction', 'New Launch']

// export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
//   const [filters, setFilters] = useState<FilterState>({
//     locations: [],
//     budgetMin: '',
//     budgetMax: '',
//     propertyTypes: [],
//     bedrooms: [],
//     status: [],
//   })

//   const [openSections, setOpenSections] = useState({
//     location: true,
//     budget: true,
//     type: true,
//     bedrooms: false,
//     status: false,
//   })

//   const toggleSection = (section: keyof typeof openSections) => {
//     setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
//   }

//   const toggleArrayFilter = (key: keyof FilterState, value: string) => {
//     setFilters((prev) => {
//       const arr = prev[key] as string[]
//       const updated = arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]
//       const newFilters = { ...prev, [key]: updated }
//       onFilterChange(newFilters)
//       return newFilters
//     })
//   }

//   const setBudgetRange = (min: string, max: string) => {
//     setFilters((prev) => {
//       const newFilters = { ...prev, budgetMin: min, budgetMax: max }
//       onFilterChange(newFilters)
//       return newFilters
//     })
//   }

//   const clearAll = () => {
//     const cleared: FilterState = {
//       locations: [],
//       budgetMin: '',
//       budgetMax: '',
//       propertyTypes: [],
//       bedrooms: [],
//       status: [],
//     }
//     setFilters(cleared)
//     onFilterChange(cleared)
//   }

//   const activeCount =
//     filters.locations.length +
//     filters.propertyTypes.length +
//     filters.bedrooms.length +
//     filters.status.length +
//     (filters.budgetMin ? 1 : 0)

//   return (
//     <div className="bg-white rounded-2xl shadow-card border border-stone-border/50 overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center justify-between p-5 border-b border-stone-border bg-ivory">
//         <div className="flex items-center gap-2.5">
//           <SlidersHorizontal className="w-4 h-4 text-gold" />
//           <span className="font-semibold text-charcoal text-sm">Filters</span>
//           {activeCount > 0 && (
//             <span className="bg-gold text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
//               {activeCount}
//             </span>
//           )}
//         </div>
//         {activeCount > 0 && (
//           <button
//             onClick={clearAll}
//             className="flex items-center gap-1 text-xs text-charcoal-muted hover:text-red-500 transition-colors"
//           >
//             <X className="w-3 h-3" />
//             Clear All
//           </button>
//         )}
//       </div>

//       <div className="divide-y divide-stone-border">
//         {/* Location Filter */}
//         <FilterSection
//           title="Location"
//           isOpen={openSections.location}
//           onToggle={() => toggleSection('location')}
//         >
//           <div className="flex flex-col gap-2">
//             {locationOptions.map((loc) => (
//               <label key={loc} className="flex items-center gap-3 cursor-pointer group">
//                 <div
//                   className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
//                     filters.locations.includes(loc)
//                       ? 'bg-gold border-gold'
//                       : 'border-stone-dark group-hover:border-gold'
//                   }`}
//                   onClick={() => toggleArrayFilter('locations', loc)}
//                 >
//                   {filters.locations.includes(loc) && (
//                     <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
//                       <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                   )}
//                 </div>
//                 <span
//                   className={`text-sm transition-colors ${
//                     filters.locations.includes(loc) ? 'text-gold font-medium' : 'text-charcoal group-hover:text-gold'
//                   }`}
//                   onClick={() => toggleArrayFilter('locations', loc)}
//                 >
//                   {loc}
//                 </span>
//               </label>
//             ))}
//           </div>
//         </FilterSection>

//         {/* Budget Filter */}
//         <FilterSection
//           title="Budget Range"
//           isOpen={openSections.budget}
//           onToggle={() => toggleSection('budget')}
//         >
//           <div className="flex flex-col gap-2">
//             {budgetRanges.map((range) => (
//               <button
//                 key={range.label}
//                 onClick={() => setBudgetRange(range.min, range.max)}
//                 className={`text-left text-sm px-3 py-2 rounded-lg transition-all ${
//                   filters.budgetMin === range.min && filters.budgetMax === range.max
//                     ? 'bg-gold text-white font-medium'
//                     : 'text-charcoal hover:bg-ivory-dark hover:text-gold'
//                 }`}
//               >
//                 {range.label}
//               </button>
//             ))}
//           </div>
//         </FilterSection>

//         {/* Property Type */}
//         <FilterSection
//           title="Property Type"
//           isOpen={openSections.type}
//           onToggle={() => toggleSection('type')}
//         >
//           <div className="flex flex-wrap gap-2">
//             {propertyTypeOptions.map((type) => (
//               <button
//                 key={type}
//                 onClick={() => toggleArrayFilter('propertyTypes', type)}
//                 className={`text-sm px-3 py-1.5 rounded-full border transition-all ${
//                   filters.propertyTypes.includes(type)
//                     ? 'bg-gold border-gold text-white font-medium'
//                     : 'border-stone-border text-charcoal hover:border-gold hover:text-gold'
//                 }`}
//               >
//                 {type}
//               </button>
//             ))}
//           </div>
//         </FilterSection>

//         {/* Bedrooms */}
//         <FilterSection
//           title="Bedrooms"
//           isOpen={openSections.bedrooms}
//           onToggle={() => toggleSection('bedrooms')}
//         >
//           <div className="flex flex-wrap gap-2">
//             {bedroomOptions.map((bed) => (
//               <button
//                 key={bed}
//                 onClick={() => toggleArrayFilter('bedrooms', bed)}
//                 className={`text-sm px-3 py-1.5 rounded-full border transition-all ${
//                   filters.bedrooms.includes(bed)
//                     ? 'bg-gold border-gold text-white font-medium'
//                     : 'border-stone-border text-charcoal hover:border-gold hover:text-gold'
//                 }`}
//               >
//                 {bed}
//               </button>
//             ))}
//           </div>
//         </FilterSection>

//         {/* Status */}
//         <FilterSection
//           title="Status"
//           isOpen={openSections.status}
//           onToggle={() => toggleSection('status')}
//         >
//           <div className="flex flex-col gap-2">
//             {statusOptions.map((s) => (
//               <label key={s} className="flex items-center gap-3 cursor-pointer group">
//                 <div
//                   className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
//                     filters.status.includes(s) ? 'bg-gold border-gold' : 'border-stone-dark group-hover:border-gold'
//                   }`}
//                   onClick={() => toggleArrayFilter('status', s)}
//                 >
//                   {filters.status.includes(s) && (
//                     <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
//                       <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                   )}
//                 </div>
//                 <span
//                   className={`text-sm transition-colors ${
//                     filters.status.includes(s) ? 'text-gold font-medium' : 'text-charcoal group-hover:text-gold'
//                   }`}
//                   onClick={() => toggleArrayFilter('status', s)}
//                 >
//                   {s}
//                 </span>
//               </label>
//             ))}
//           </div>
//         </FilterSection>
//       </div>
//     </div>
//   )
// }

// function FilterSection({
//   title,
//   isOpen,
//   onToggle,
//   children,
// }: {
//   title: string
//   isOpen: boolean
//   onToggle: () => void
//   children: React.ReactNode
// }) {
//   return (
//     <div className="p-5">
//       <button
//         onClick={onToggle}
//         className="flex items-center justify-between w-full mb-3"
//       >
//         <span className="font-semibold text-sm text-charcoal">{title}</span>
//         <ChevronDown
//           className={`w-4 h-4 text-charcoal-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
//         />
//       </button>
//       <div
//         className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
//       >
//         {children}
//       </div>
//     </div>
//   )
// }



'use client'

import { useState } from 'react'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'

interface FilterState {
  locations: string[]
  budgetMin: string
  budgetMax: string
  propertyTypes: string[]
  bedrooms: string[]
  status: string[]
}

interface FilterSidebarProps {
  onFilterChange: (filters: FilterState) => void
}

const locationOptions = [
  'Gomti Nagar', 'Hazratganj', 'Shaheed Path', 'Aliganj', 'Sultanpur Road',
  'Vibhuti Khand', 'Kanpur Road', 'Indira Nagar',
]

const propertyTypeOptions = ['Apartment', 'Villa', 'Plot', 'Commercial', 'Penthouse']

const budgetRanges = [
  { label: 'Under ₹50 Lakh', min: '0', max: '5000000' },
  { label: '₹50L – ₹1 Cr', min: '5000000', max: '10000000' },
  { label: '₹1 Cr – ₹2 Cr', min: '10000000', max: '20000000' },
  { label: '₹2 Cr – ₹5 Cr', min: '20000000', max: '50000000' },
  { label: 'Above ₹5 Cr', min: '50000000', max: '999999999' },
]

const bedroomOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK']
const statusOptions = ['Ready to Move', 'Under Construction', 'New Launch']

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterState>({
    locations: [],
    budgetMin: '',
    budgetMax: '',
    propertyTypes: [],
    bedrooms: [],
    status: [],
  })

  const [openSections, setOpenSections] = useState({
    location: true,
    budget: true,
    type: true,
    bedrooms: false,
    status: false,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const toggleArrayFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const arr = prev[key] as string[]
      const updated = arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]
      const newFilters = { ...prev, [key]: updated }
      onFilterChange(newFilters)
      return newFilters
    })
  }

  const setBudgetRange = (min: string, max: string) => {
    setFilters((prev) => {
      const newFilters = { ...prev, budgetMin: min, budgetMax: max }
      onFilterChange(newFilters)
      return newFilters
    })
  }

  const clearAll = () => {
    const cleared: FilterState = {
      locations: [],
      budgetMin: '',
      budgetMax: '',
      propertyTypes: [],
      bedrooms: [],
      status: [],
    }
    setFilters(cleared)
    onFilterChange(cleared)
  }

  const activeCount =
    filters.locations.length +
    filters.propertyTypes.length +
    filters.bedrooms.length +
    filters.status.length +
    (filters.budgetMin ? 1 : 0)

  return (
    <div
      className="bg-white overflow-hidden"
      style={{ border: '1px solid #E8ECF2', borderRadius: '12px', boxShadow: '0 2px 16px rgba(11,31,58,0.06)' }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between p-5"
        style={{ borderBottom: '1px solid #E8ECF2', background: '#F5F7FA' }}
      >
        <div className="flex items-center gap-2.5">
          <SlidersHorizontal className="w-4 h-4" style={{ color: '#E63946' }} />
          <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>Filters</span>
          {activeCount > 0 && (
            <span
              className="text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: '#E63946' }}
            >
              {activeCount}
            </span>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-xs transition-colors"
            style={{ color: '#6B7280' }}
          >
            <X className="w-3 h-3" />
            Clear All
          </button>
        )}
      </div>

      <div style={{ borderTop: 'none' }}>
        {/* Location Filter */}
        <FilterSection
          title="Location"
          isOpen={openSections.location}
          onToggle={() => toggleSection('location')}
        >
          <div className="flex flex-col gap-2">
            {locationOptions.map((loc) => (
              <label key={loc} className="flex items-center gap-3 cursor-pointer group">
                <div
                  className="w-4 h-4 rounded border-2 flex items-center justify-center transition-all"
                  style={{
                    background: filters.locations.includes(loc) ? '#E63946' : 'transparent',
                    borderColor: filters.locations.includes(loc) ? '#E63946' : '#D1D5DB',
                  }}
                  onClick={() => toggleArrayFilter('locations', loc)}
                >
                  {filters.locations.includes(loc) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span
                  className="text-sm transition-colors"
                  style={{ color: filters.locations.includes(loc) ? '#E63946' : '#1A1A1A', fontWeight: filters.locations.includes(loc) ? '600' : '400' }}
                  onClick={() => toggleArrayFilter('locations', loc)}
                >
                  {loc}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Budget Filter */}
        <FilterSection
          title="Budget Range"
          isOpen={openSections.budget}
          onToggle={() => toggleSection('budget')}
        >
          <div className="flex flex-col gap-2">
            {budgetRanges.map((range) => (
              <button
                key={range.label}
                onClick={() => setBudgetRange(range.min, range.max)}
                className="text-left text-sm px-3 py-2 rounded-lg transition-all"
                style={{
                  background: filters.budgetMin === range.min && filters.budgetMax === range.max ? '#E63946' : 'transparent',
                  color: filters.budgetMin === range.min && filters.budgetMax === range.max ? '#ffffff' : '#1A1A1A',
                  fontWeight: filters.budgetMin === range.min && filters.budgetMax === range.max ? '600' : '400',
                }}
              >
                {range.label}
              </button>
            ))}
          </div>
        </FilterSection>

        {/* Property Type */}
        <FilterSection
          title="Property Type"
          isOpen={openSections.type}
          onToggle={() => toggleSection('type')}
        >
          <div className="flex flex-wrap gap-2">
            {propertyTypeOptions.map((type) => (
              <button
                key={type}
                onClick={() => toggleArrayFilter('propertyTypes', type)}
                className="text-sm px-3 py-1.5 rounded-full border transition-all"
                style={{
                  background: filters.propertyTypes.includes(type) ? '#E63946' : 'transparent',
                  borderColor: filters.propertyTypes.includes(type) ? '#E63946' : '#E8ECF2',
                  color: filters.propertyTypes.includes(type) ? '#ffffff' : '#1A1A1A',
                  fontWeight: filters.propertyTypes.includes(type) ? '600' : '400',
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </FilterSection>

        {/* Bedrooms */}
        <FilterSection
          title="Bedrooms"
          isOpen={openSections.bedrooms}
          onToggle={() => toggleSection('bedrooms')}
        >
          <div className="flex flex-wrap gap-2">
            {bedroomOptions.map((bed) => (
              <button
                key={bed}
                onClick={() => toggleArrayFilter('bedrooms', bed)}
                className="text-sm px-3 py-1.5 rounded-full border transition-all"
                style={{
                  background: filters.bedrooms.includes(bed) ? '#0B1F3A' : 'transparent',
                  borderColor: filters.bedrooms.includes(bed) ? '#0B1F3A' : '#E8ECF2',
                  color: filters.bedrooms.includes(bed) ? '#ffffff' : '#1A1A1A',
                  fontWeight: filters.bedrooms.includes(bed) ? '600' : '400',
                }}
              >
                {bed}
              </button>
            ))}
          </div>
        </FilterSection>

        {/* Status */}
        <FilterSection
          title="Status"
          isOpen={openSections.status}
          onToggle={() => toggleSection('status')}
        >
          <div className="flex flex-col gap-2">
            {statusOptions.map((s) => (
              <label key={s} className="flex items-center gap-3 cursor-pointer group">
                <div
                  className="w-4 h-4 rounded border-2 flex items-center justify-center transition-all"
                  style={{
                    background: filters.status.includes(s) ? '#E63946' : 'transparent',
                    borderColor: filters.status.includes(s) ? '#E63946' : '#D1D5DB',
                  }}
                  onClick={() => toggleArrayFilter('status', s)}
                >
                  {filters.status.includes(s) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span
                  className="text-sm transition-colors"
                  style={{ color: filters.status.includes(s) ? '#E63946' : '#1A1A1A', fontWeight: filters.status.includes(s) ? '600' : '400' }}
                  onClick={() => toggleArrayFilter('status', s)}
                >
                  {s}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>
      </div>
    </div>
  )
}

function FilterSection({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="p-5" style={{ borderTop: '1px solid #E8ECF2' }}>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full mb-3"
      >
        <span className="font-semibold text-sm" style={{ color: '#0B1F3A' }}>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: '#6B7280' }}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {children}
      </div>
    </div>
  )
}