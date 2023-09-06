import { Component } from 'preact'
import { ReactNode } from 'react'

import { AnyObject } from './common'

export type WithFeatures<
  T extends AnyObject,
  B extends Record<string, Component | ReactNode>
> = T & {
  features: B
}
