import { storage } from '@/utils/storage'
import { useState, useEffect } from 'react'
export function useDebounce(value: unknown, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(timeId)
  })
  return debouncedValue
}

export function useToggleTheme() {
  const [isDark, setIsDark] = useState<boolean>(
    storage.get('theme') === 'dark' &&
    !('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  )
  const onDarkChange = (checked: boolean): void => {
    setIsDark(prev => !prev)
    checked ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
    storage.set('theme', checked ? 'dark' : 'light')

  }
  useEffect(() => {
    isDark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [])
  return {isDark, onDarkChange}
}
