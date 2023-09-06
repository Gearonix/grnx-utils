import { useState } from 'react'

export const useBooleanState = (initialValue = false) => {
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
