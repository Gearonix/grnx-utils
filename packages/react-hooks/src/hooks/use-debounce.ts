import { useRef } from 'react'

type Timeout = ReturnType<typeof setTimeout>

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const debounceRef = useRef<Timeout>()

  return (...args: any[]) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}
