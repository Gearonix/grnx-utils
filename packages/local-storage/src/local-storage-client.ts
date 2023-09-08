import { AnyObject, isString, Undefinable } from '@grnx-utils/types'

import { isJson } from './helpers/is-json'
import { LocalStorageClientOpts } from './types'

export class LocalStorageClient<Storage extends AnyObject> {
  isDisabled: boolean
  layer: Undefinable<string>

  constructor(opts: LocalStorageClientOpts) {
    this.isDisabled = opts.isDisabled || false
    this.layer = opts.layer
  }

  public get<T>(key: keyof Storage, defaultVal: T): T {
    if (this.isDisabled || typeof window === 'undefined') {
      return defaultVal
    }

    const value = localStorage.getItem(this.withPrefix(key)) as string

    if (!value) {
      return defaultVal
    }

    return isJson(value) ? JSON.parse(value) : value
  }

  public set<T extends keyof Storage>(key: T, value: unknown) {
    if (typeof window === 'undefined') {
      return
    }

    if (this.isDisabled || !(key in Storage)) {
      return
    }

    if (isString(value)) {
      return localStorage.setItem(this.withPrefix(key), value)
    }
    localStorage.setItem(this.withPrefix(key), JSON.stringify(value))
  }

  public clear(key?: keyof Storage): void {
    if (typeof window === 'undefined') {
      return
    }

    if (key) {
      return localStorage.removeItem(this.withPrefix(key))
    }

    localStorage.clear()
  }

  public disable() {
    this.isDisabled = true
  }

  public enable() {
    this.isDisabled = false
  }

  private withPrefix(key: keyof Storage): string {
    return this.layer ? `${this.layer}__${String(key)}` : (key as string)
  }
}

