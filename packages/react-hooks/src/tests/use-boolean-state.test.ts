import { act, renderHook } from '@testing-library/react-hooks'
import { renderChecks } from 'packages/react-hooks/src/tests/helpers'
import { expect } from 'vitest'

import { useBooleanState } from '../hooks'

describe('hook.use-boolean-state', () => {
  it('should render', () => {
    renderChecks(() => useBooleanState(false), 'object')
  })
  it('should render successfully', async () => {
    const { result } = renderHook(() => useBooleanState(false))

    act(() => {
      result.current.on()
    })

    expect(result.current.val).toBe(true)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.val).toBe(false)
  })
})
