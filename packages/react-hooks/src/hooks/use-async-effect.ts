import { DependencyList, useEffect } from 'react'

export const useAsyncEffect = <T>(
  cb: () => Promise<T>,
  deps: DependencyList = []
) => {
  useEffect(() => {
    cb()
  }, deps)
}
