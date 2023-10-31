import { AnyFunction }    from '@grnx-utils/types'
import { renderHook }     from '@testing-library/react-hooks'
import { beforeEach }     from 'vitest'
import { expect }         from 'vitest'

import { useAsyncEffect } from '../hooks'
import { renderChecks }   from './helpers'

describe('hook.use-async-effect', () => {
  let hook: AnyFunction
  let callback: AnyFunction<Promise<unknown>>

  beforeEach(() => {
    callback = vi.fn(async () => null)
    hook = () =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useAsyncEffect(callback)
  })

  it('render checks', () => {
    renderChecks(hook, 'undefined')
  })

  it('should work with async call', async () => {
    renderHook(hook)

    expect(callback).toBeCalled()
  })
})
