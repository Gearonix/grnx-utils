import { AnyFunction, Nullable } from '@grnx-utils/types'
import { EventHandler, KeyboardEvent, useState } from 'react'

type Handlers = Record<string, Nullable<() => void>>

export interface UseAltKeyDownPayload {
  on: (handlers: Handlers) => void
  clear: AnyFunction<void, void>
}

/**
 * Provides an API for managing the Alt keys
 * @returns {UseAltKeyDownPayload}
 * @example
 * const keyboard = useAltKeyDown()
 * keyboard.on({
 *   'O': () => console.log('works')
 * })
 *
 */

export const useAltKeyDown = (): UseAltKeyDownPayload => {
  const [subscribers, setSubscribers] = useState<EventHandler<KeyboardEvent>[]>(
    []
  )
  return {
    on: (handlers: Handlers) => {
      Object.entries(handlers).forEach(([key, handler]) => {
        const subscriber = (e: KeyboardEvent) => {
          if (e.altKey && e.key === key.toLowerCase()) {
            e.preventDefault()
            handler()
            return false
          }
        }
        setSubscribers([...subscribers, subscriber])
        document.addEventListener('keydown', subscriber as EventHandler<any>)
      })
    },
    clear: () => {
      subscribers.forEach((sub) => {
        document.removeEventListener('keydown', sub)
      })
    }
  }
}
