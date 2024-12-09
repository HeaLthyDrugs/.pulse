import { Home, BarChart, Settings } from 'lucide-react'

export const navigationLinks = [
  {
    label: 'Dashboard',
    href: '/',
    icon: Home,
  },
  {
    label: 'Analytics',
    href: '/analytics',
    icon: BarChart,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings,
  },
] as const 