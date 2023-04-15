import { useState, useEffect } from 'react'

export type ThemeType = 'light' | 'dark'

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem('ne-theme')
    ) {
      return localStorage.getItem('ne-theme') as ThemeType
    }
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  return [theme, setTheme] as const
}
