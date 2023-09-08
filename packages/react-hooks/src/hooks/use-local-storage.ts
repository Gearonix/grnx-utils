import { VoidFunction } from '@grnx-utils/types'
import { useEffect, useState } from 'react'

export interface UseLocalStoragePayload<T> {
  value: T
  save: VoidFunction<T>
}

/**
 * provides an API for working with localStorage
 * @param key - localStorage key
 * @param defaultValue
 * @returns UseLocalStoragePayload<T>
 */

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): UseLocalStoragePayload<T> => {
  const [value, setValue] = useState<T>(null as T)
  useEffect(() => {
    const stored = localStorage.getItem(key)
    setValue((stored as T) ?? defaultValue)
  }, [])

  useEffect(() => {
    if (value === null) return
    localStorage.setItem(key, value as string)
  }, [value])

  return { value: value ?? defaultValue, save: setValue } as const
}
