import { ComponentChildren } from 'preact'

import { AnyObject }         from './common'

export type WithPreactChildren<T extends AnyObject = AnyObject> = T & {
  children: ComponentChildren
}
