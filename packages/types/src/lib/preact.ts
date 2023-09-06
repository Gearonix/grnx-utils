import { AnyObject } from './common'
import { ComponentChildren } from 'preact'

export type WithPreactChildren<T extends AnyObject = AnyObject> = T & {
  children: ComponentChildren
}
