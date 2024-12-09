'use client'

import { navigationLinks } from '@/app/lib/constants/navigation'
import NavItem from './nav-item'

interface NavLinksProps {
  isCollapsed: boolean
}

export default function NavLinks({ isCollapsed }: NavLinksProps) {
  return (
    <nav className="space-y-2 px-3">
      {navigationLinks.map((link) => (
        <NavItem
          key={link.href}
          {...link}
          isCollapsed={isCollapsed}
        />
      ))}
    </nav>
  )
} 