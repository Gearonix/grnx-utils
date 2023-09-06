import { AnyFunction } from '@grnx-utils/types'
import { renderHook } from '@testing-library/react-hooks'
import { Assertion, expect } from 'vitest'

export const renderChecks = <Props, Return>(
  hook: AnyFunction<Return, Props>,
  hookType: Parameters<Assertion['toBeTypeOf']>[0]
) => {
  const { result } = renderHook<Props, Return>(hook)

  expect(result.current).toBeDefined()
  expect(result.current).toBeTypeOf(hookType)
}
