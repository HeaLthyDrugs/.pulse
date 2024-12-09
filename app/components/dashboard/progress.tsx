'use client'

interface ProgressProps {
  value: number
  className?: string
}

export function Progress({ value, className = '' }: ProgressProps) {
  return (
    <div className={`h-2 w-full bg-gray-100 rounded-full ${className}`}>
      <div 
        className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${value}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  )
}