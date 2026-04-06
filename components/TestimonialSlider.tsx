// 'use client'

// import { useState, useEffect, useCallback } from 'react'
// import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
// import { testimonials } from '@/lib/data'

// export default function TestimonialSlider() {
//   const [current, setCurrent] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

//   const next = useCallback(() => {
//     setCurrent((prev) => (prev + 1) % testimonials.length)
//   }, [])

//   const prev = () => {
//     setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   useEffect(() => {
//     if (!isAutoPlaying) return
//     const interval = setInterval(next, 5000)
//     return () => clearInterval(interval)
//   }, [isAutoPlaying, next])

//   return (
//     <div className="relative">
//       <div className="overflow-hidden rounded-3xl">
//         <div
//           className="flex transition-transform duration-500 ease-out"
//           style={{ transform: `translateX(-${current * 100}%)` }}
//         >
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="w-full shrink-0 px-2">
//               <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card border border-stone-border/50 relative overflow-hidden">
//                 {/* Decorative quote mark */}
//                 <div className="absolute top-6 right-8 opacity-5">
//                   <Quote className="w-24 h-24 text-gold fill-gold" />
//                 </div>

//                 {/* Stars */}
//                 <div className="flex gap-1 mb-6">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 fill-gold text-gold" />
//                   ))}
//                 </div>

//                 {/* Quote */}
//                 <blockquote className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed mb-8 relative z-10 italic">
//                   &ldquo;{testimonial.text}&rdquo;
//                 </blockquote>

//                 {/* Author */}
//                 <div className="flex items-center gap-4">
//                   <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center text-white font-bold text-lg font-serif shadow-gold">
//                     {testimonial.initials}
//                   </div>
//                   <div>
//                     <p className="font-semibold text-charcoal">{testimonial.name}</p>
//                     <p className="text-charcoal-muted text-sm">{testimonial.role}</p>
//                     <p className="text-gold text-xs font-medium mt-0.5">✓ {testimonial.location}</p>
//                   </div>
//                 </div>

//                 {/* Gold accent bar */}
//                 <div className="absolute bottom-0 left-0 h-1 w-full">
//                   <div className="h-full bg-gold-gradient w-1/3" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="flex items-center justify-center gap-4 mt-8">
//         <button
//           onClick={() => { prev(); setIsAutoPlaying(false) }}
//           className="w-11 h-11 rounded-full border-2 border-stone-border flex items-center justify-center hover:border-gold hover:bg-gold hover:text-white transition-all text-charcoal"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>

//         {/* Dots */}
//         <div className="flex gap-2">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => { setCurrent(i); setIsAutoPlaying(false) }}
//               className={`rounded-full transition-all duration-300 ${
//                 i === current ? 'w-8 h-2.5 bg-gold' : 'w-2.5 h-2.5 bg-stone border border-stone-border'
//               }`}
//             />
//           ))}
//         </div>

//         <button
//           onClick={() => { next(); setIsAutoPlaying(false) }}
//           className="w-11 h-11 rounded-full border-2 border-stone-border flex items-center justify-center hover:border-gold hover:bg-gold hover:text-white transition-all text-charcoal"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   )
// }



'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, next])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full shrink-0 px-2">
              <div className="bg-white p-8 md:p-12 relative overflow-hidden rounded-2xl"
                style={{ border: '1px solid #E8ECF2', boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
                {/* Quote mark */}
                <div className="absolute top-6 right-8 opacity-[0.04]">
                  <Quote className="w-24 h-24" style={{ color: '#0B1F3A', fill: '#0B1F3A' }} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ fill: '#E63946', color: '#E63946' }} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-xl md:text-2xl leading-relaxed mb-8 relative z-10 italic"
                  style={{ color: '#0B1F3A' }}>
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg font-serif"
                    style={{ background: 'linear-gradient(135deg, #0B1F3A, #1E3A5F)' }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#0B1F3A' }}>{testimonial.name}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{testimonial.role}</p>
                    <p className="text-xs font-medium mt-0.5" style={{ color: '#E63946' }}>✓ {testimonial.location}</p>
                  </div>
                </div>

                {/* Bottom accent bar — navy + red */}
                <div className="absolute bottom-0 left-0 h-1 w-full">
                  <div className="h-full w-1/3" style={{ background: 'linear-gradient(90deg, #0B1F3A, #E63946)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => { prev(); setIsAutoPlaying(false) }}
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
          style={{ border: '2px solid #E8ECF2', color: '#0B1F3A' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#0B1F3A'; e.currentTarget.style.borderColor = '#0B1F3A'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#E8ECF2'; e.currentTarget.style.color = '#0B1F3A' }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setIsAutoPlaying(false) }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? '28px' : '10px',
                height: '10px',
                background: i === current ? '#E63946' : '#E8ECF2',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => { next(); setIsAutoPlaying(false) }}
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
          style={{ border: '2px solid #E8ECF2', color: '#0B1F3A' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#0B1F3A'; e.currentTarget.style.borderColor = '#0B1F3A'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#E8ECF2'; e.currentTarget.style.color = '#0B1F3A' }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}