import { act, renderHook } from '@testing-library/react-hooks'
import { default as userEvent } from '@testing-library/user-event'
import { expect, vi } from 'vitest'

import { useAltKeyDown } from '../hooks'
import { renderChecks } from './helpers'

describe('hook.use-alt-keydown', () => {
  it('should render', () => {
    renderChecks(useAltKeyDown, 'object')
  })

  it('should work with keyboard events', async () => {
    const { result } = renderHook(() => useAltKeyDown())
    const keyboard = result.current

    const shouldBePressed = vi.fn()
    const shouldNotBePressed = vi.fn()

    act(() => {
      keyboard.on({
        // eslint-disable-next-line prettier/prettier
        'O': () => shouldBePressed()
      })
    })

    // translates to: Alt(down), O, Alt(up)
    await userEvent.keyboard('{Alt>}o{/Alt}')

    expect(shouldBePressed).toHaveBeenCalledOnce()

    await userEvent.keyboard('{Alt>}a{/Alt}')

    expect(shouldNotBePressed).not.toBeCalled()
  })
})
