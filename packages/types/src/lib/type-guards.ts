import { AnyFunction } from './common'

export const isObject = (value: unknown): value is object => {
  return typeof value === 'object' && value !== null
}

export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !isNaN(value)
}

export const isFunction = <T>(value: unknown): value is AnyFunction<T> => {
  return typeof value === 'function'
}
