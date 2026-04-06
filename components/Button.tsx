import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  fullWidth?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-gold text-white hover:bg-gold-dark shadow-md hover:shadow-gold active:scale-[0.98]',
    secondary: 'bg-charcoal text-white hover:bg-charcoal-light active:scale-[0.98]',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-white active:scale-[0.98]',
    ghost: 'text-charcoal hover:text-gold hover:bg-ivory-dark active:scale-[0.98]',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
