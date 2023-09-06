import { act, renderHook } from '@testing-library/react-hooks'
import { afterEach, beforeEach, expect, vi } from 'vitest'

import { useDebounce } from '../hooks'

describe.skip('ReactHooks', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  it('should render successfully', async () => {
    let debounceCount = 0

    const debounceCallback = (debounceCount) => {
      console.log('process!')
      debounceCount += 1
    }

    const { result } = renderHook(() => useDebounce(debounceCallback, 1000))

    expect(result.current).toBeTruthy()
    expect(result.current).toBeTypeOf('function')

    act(() => {
      setInterval(() => result.current(debounceCount), 1000)
    })

    vi.advanceTimersByTime(4000)
    console.log(debounceCount)

    expect(debounceCount).toBeLessThan(3)

    setTimeout(() => {
      console.log(debounceCount)
      expect(debounceCount).toBeLessThan(3)
    }, 4000)
  })
})
