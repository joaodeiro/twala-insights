'use client'

import { useState, useEffect } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)
    
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 768px)')
}

export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 769px)')
} 