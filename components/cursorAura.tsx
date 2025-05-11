'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function CursorAura() {
  const { theme } = useTheme()
  const [colorClass, setColorClass] = useState('bg-cyan-400/20')

  useEffect(() => {
    if (theme === 'dark') {
      setColorClass('bg-cyan-400/20')
    } else if (theme === 'light') {
      setColorClass('bg-zinc-600/20')
 
    }
  }, [theme])

  useEffect(() => {
    const cursor = document.getElementById('cursor-blur')
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - 72}px, ${e.clientY - 72}px)`
      }
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div
      id="cursor-blur"
      className={`fixed top-0 left-0 w-36 h-36 rounded-full pointer-events-none z-[9999] mix-blend-lighten blur-2xl transition-transform duration-75 ease-linear ${colorClass} z-2000`}
    ></div>
  )
}
