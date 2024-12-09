'use client'

import { useState } from 'react'
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import NavLinks from "./NavLink"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-4 left-4 z-50 p-2 bg-gray-900 rounded-full shadow-2xl"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-all duration-300 ease-in-out
        bg-gray-900 text-white
        ${isCollapsed ? 'w-16' : 'w-64'}
      `}>
        <div className="flex items-center justify-between p-4 h-16 mb-5 ">
          <h1 className={`text-4xl font-bold transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>
            .Pulse
          </h1>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:block p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            {isCollapsed ? 
              <ChevronRight className="w-5 h-5" /> : 
              <ChevronLeft className="w-5 h-5" />
            }
          </button>
        </div>
        <NavLinks isCollapsed={isCollapsed} />
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
