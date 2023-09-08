import { ReactNode } from 'react'

/**
 * Basically ternary operator but in react
 */

export interface TernaryProps<T> {
  children: [ReactNode, ReactNode]
  where: T
}

export const Ternary = <T,>({ where, children }: TernaryProps<T>) => {
  const [first, second] = children
  return where ? first : second
}
