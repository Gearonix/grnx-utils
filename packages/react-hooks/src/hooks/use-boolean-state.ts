import { VoidFunction } from '@grnx-utils/types'
import { useState } from 'react'

export interface UseBooleanStatePayload {
  on: VoidFunction
  off: VoidFunction
  toggle: VoidFunction
  val: boolean
}

export const useBooleanState = (
  initialValue = false
): UseBooleanStatePayload => {
  const [val, setValue] = useState<boolean>(initialValue)

  const off = () => setValue(false)
  const on = () => setValue(true)
  const toggle = () => setValue(!val)

  return {
    off,
    on,
    toggle,
    val
  }
}
