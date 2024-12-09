'use client'

import Link from 'next/link'
import { GitCommit, AlertCircle, Timer } from 'lucide-react'

const links = [
  {
    title: 'Latest Commit',
    description: 'Update dashboard components',
    icon: GitCommit,
    href: '#',
    timestamp: '2h ago',
  },
  {
    title: 'Build Failed',
    description: 'main branch #1234',
    icon: AlertCircle,
    href: '#',
    timestamp: '3h ago',
  },
  {
    title: 'PR Review Pending',
    description: 'Feature: Add new metrics',
    icon: Timer,
    href: '#',
    timestamp: '5h ago',
  },
]

export function QuickLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="flex items-start p-4 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
        >
          <link.icon className="w-5 h-5 text-gray-500 mt-0.5" />
          <div className="ml-3">
            <p className="font-medium">{link.title}</p>
            <p className="text-sm text-gray-600">{link.description}</p>
            <p className="text-xs text-gray-400 mt-1">{link.timestamp}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}