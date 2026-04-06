import { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: ReactNode
}

export function Input({ label, error, icon, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-charcoal">
          {label}
          {props.required && <span className="text-gold ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-muted pointer-events-none">
            {icon}
          </div>
        )}
        <input
          className={`w-full px-4 py-3 ${icon ? 'pl-11' : ''} rounded-xl border border-stone-border bg-white text-charcoal text-sm placeholder-stone transition-all
            focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10
            ${error ? 'border-red-400' : ''}
            ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

interface SelectProps {
  label?: string
  error?: string
  options: { value: string; label: string }[]
  placeholder?: string
  className?: string
  required?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Select({ label, error, options, placeholder, className = '', required, value, onChange }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-charcoal">
          {label}
          {required && <span className="text-gold ml-1">*</span>}
        </label>
      )}
      <select
        className={`w-full px-4 py-3 rounded-xl border border-stone-border bg-white text-charcoal text-sm
          focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10
          ${error ? 'border-red-400' : ''}
          ${className}`}
        required={required}
        value={value}
        onChange={onChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

interface TextareaProps {
  label?: string
  error?: string
  rows?: number
  placeholder?: string
  required?: boolean
  className?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export function Textarea({ label, error, rows = 4, className = '', required, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-charcoal">
          {label}
          {required && <span className="text-gold ml-1">*</span>}
        </label>
      )}
      <textarea
        rows={rows}
        className={`w-full px-4 py-3 rounded-xl border border-stone-border bg-white text-charcoal text-sm placeholder-stone resize-none
          focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10
          ${error ? 'border-red-400' : ''}
          ${className}`}
        required={required}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
