import { AnyFunction }  from '@grnx-utils/types'
import { act }          from '@testing-library/react-hooks'
import { renderHook }   from '@testing-library/react-hooks'
import { afterEach }    from 'vitest'
import { beforeEach }   from 'vitest'
import { expect }       from 'vitest'
import { vi }           from 'vitest'

import { useDebounce }  from '../hooks'
import { renderChecks } from './helpers'

describe('hook.use-debounce', () => {
  let callback: AnyFunction
  let hook: AnyFunction<AnyFunction>

  beforeEach(() => {
    callback = vi.fn()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    hook = () => useDebounce(callback, 1000)
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('render checks', () => {
    renderChecks(hook, 'function')
  })

  it('should debounce with single call', () => {
    const { result } = renderHook(hook)

    act(() => {
      result.current()
    })

    vi.advanceTimersByTime(999)
    expect(callback).not.toHaveBeenCalled()
    vi.advanceTimersByTime(1)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should debounce once with multiple calls', () => {
    const { result } = renderHook(hook)

    const inverval = setInterval(result.current, 400)

    vi.advanceTimersByTime(999)
    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(1)
    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(1000)
    expect(callback).not.toHaveBeenCalled()

    clearInterval(inverval)
    expect(callback).not.toHaveBeenCalled()
    vi.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
