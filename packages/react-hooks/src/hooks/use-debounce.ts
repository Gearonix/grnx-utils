import { AnyFunction } from '@grnx-utils/types'
import { useRef }      from 'react'

type Timeout = ReturnType<typeof setTimeout>

/**
 * @reference https://usehooks.com/usedebounce
 * @returns {(...args: any[]) => void}
 */

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number
): AnyFunction<void> => {
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
