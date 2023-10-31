import { renderHook }   from '@testing-library/react-hooks'
import { expect }       from 'vitest'

import { useOverflow }  from '../hooks'
import { renderChecks } from './helpers'

describe('hook.use-overflow', () => {
  it('should render', () => {
    renderChecks(useOverflow, 'undefined')
  })

  it('should work with keyboard events', async () => {
    const { unmount } = renderHook(() => useOverflow())

    expect(document.body.style.overflow).toBe('hidden')
    unmount()
    expect(document.body.style.overflow).toBe('auto')
  })
})
