import { DependencyList } from 'react'
import { EffectCallback } from 'react'
import { useEffect }      from 'react'

interface UseFilteredEffect {
  (callback: EffectCallback, deps: DependencyList): void
}

/**
 * Calls callback only if all dependencies are not null or undefined
 * @param callback {React.EffectCallback}
 * @param deps {React.DependencyList}
 * @example
 * useFilteredEffect(() => {
 *   console.log('won't work')
 * }, [null])
 */

export const useFilteredEffect: UseFilteredEffect = (
  callback: () => void,
  deps
) => {
  useEffect(() => {
    for (const dependency of deps) {
      if (!dependency) {
        return
      }
    }
    return callback()
  }, deps)
}
