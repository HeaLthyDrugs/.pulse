'use client'

import { Progress } from "./progress"



export function TaskProgress() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <h3 className="font-semibold mb-4">Task Progress</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Frontend Tasks</span>
            <span className="text-sm font-medium">75%</span>
          </div>
          <Progress value={75} />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Backend Tasks</span>
            <span className="text-sm font-medium">60%</span>
          </div>
          <Progress value={60} />
        </div>
      </div>
    </div>
  )
}