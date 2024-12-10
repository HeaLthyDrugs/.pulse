'use client'

import { LineChart, Activity, GitPullRequest } from 'lucide-react'

const metrics = [
  {
    label: 'Productivity score ',
    value: '85%',
    change: '+5%',
    icon: LineChart,
  },
  {
    label: 'Active Tasks',
    value: '12',
    change: '-2',
    icon: Activity,
  },
  {
    label: 'Open PRs',
    value: '5',
    change: '+2',
    icon: GitPullRequest,
  },
]

export function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric) => (
        <div 
          key={metric.label}
          className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{metric.label}</p>
              <p className="text-2xl font-semibold mt-1">{metric.value}</p>
              <p className={`text-sm mt-1 ${
                metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </p>
            </div>
            <metric.icon className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      ))}
    </div>
  )
}