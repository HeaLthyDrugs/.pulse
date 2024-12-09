'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LucideIcon } from 'lucide-react'
import { createElement } from 'react'

interface NavItemProps {
  href: string
  icon: LucideIcon
  label: string
  isCollapsed: boolean
}

export default function NavItem({ href, icon, label, isCollapsed }: NavItemProps) {
    const pathname = usePathname()
    const isActive = pathname === href
  
    return (
      <Link 
        href={href}
        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors
          ${isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}
          ${isCollapsed ? 'justify-center' : ''}
        `}
      >
        {createElement(icon, { size: 20 })}
        {!isCollapsed && <span>{label}</span>}
      </Link>
    )
} 