import { ReactElement } from 'react'
import { ReactNode }    from 'react'

export type WithChildren<T> = T & {
  children: ReactElement | ReactNode
}

export type CustomArguments<F> = F extends (...args: infer A) => unknown
  ? A
  : never

export type TargetKey = MouseEvent | KeyboardEvent | string
