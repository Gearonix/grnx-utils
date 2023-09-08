import { AnyFunction } from '@grnx-utils/types'
import { act, renderHook } from '@testing-library/react-hooks'
import { afterEach, beforeEach, expect } from 'vitest'

import { useInterval } from '../hooks'
import { renderChecks } from './helpers'

describe('hook.use-interval', () => {
  let callback: AnyFunction

  beforeEach(() => {
    callback = vi.fn()
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('render', () => {
    renderChecks(() => useInterval(callback, 1), 'undefined')
  })

  it('should work after delay', async () => {
    renderHook(() => useInterval(callback, 1))

    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(999)
    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(1)
    expect(callback).toHaveBeenCalled()

    vi.advanceTimersToNextTimer()
    expect(callback).toHaveBeenCalledTimes(2)

    expect(callback).toBeCalled()
  })

  it('should not work after unmount', async () => {
    const hook = renderHook(() => useInterval(callback, 1))

    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersToNextTimer()
    expect(callback).toHaveBeenCalledTimes(1)

    vi.advanceTimersToNextTimer()
    expect(callback).toHaveBeenCalledTimes(2)

    act(() => {
      hook.unmount()
    })

    vi.advanceTimersToNextTimer()
    expect(callback).not.toHaveBeenCalledTimes(3)

    vi.advanceTimersToNextTimer()
    expect(callback).not.toHaveBeenCalledTimes(3)
    expect(callback).not.toHaveBeenCalledTimes(4)
  })
})
