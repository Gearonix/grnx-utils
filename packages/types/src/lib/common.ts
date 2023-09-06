export type AnyObject = Record<string, unknown>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction<T = void, R = any> = (...args: R[]) => T

export type Nullable<T> = T | null

export type Undefinable<T> = T | undefined

export type ValueOf<T> = T[keyof T]

export type Keys<T extends Readonly<AnyObject>> = keyof T

export type Values<T extends Readonly<AnyObject>> = T[Keys<T>]

export interface Entries<T extends Readonly<AnyObject>> {
  keys: Keys<T>
  values: Values<T>
}

export type Hex = `#${string}`

export type Combine<A extends object, B extends object> = [A, B]

export type ReplaceName<
  T extends object,
  Old extends keyof T,
  K extends string
> = Omit<T, Old> & {
  [key in K]: T[Old]
}

export type ObjectNullable<T> = { [K in keyof T]: T[K] | null }

export type DeepNullable<T> = {
  [K in keyof T]: DeepNullable<T[K]> | null
}

export type Required<T> = {
  [P in keyof T]-?: T[P]
}

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}
