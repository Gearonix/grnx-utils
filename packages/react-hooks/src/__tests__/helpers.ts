import { AnyFunction } from '@grnx-utils/types'
import { renderHook }  from '@testing-library/react-hooks'
import { Assertion }   from 'vitest'
import { expect }      from 'vitest'

export const renderChecks = <Props, Return>(
  hook: AnyFunction<Return, Props>,
  hookType: Parameters<Assertion['toBeTypeOf']>[0] = 'undefined'
) => {
  const { result } = renderHook<Props, Return>(hook)

  if (hookType === 'undefined') {
    return expect(result.current).toBeUndefined()
  }

  expect(result.current).toBeDefined()
  expect(result.current).toBeTypeOf(hookType)
}
