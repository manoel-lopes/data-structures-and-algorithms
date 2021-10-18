import { List } from '../data-structures/lists/lib/List'

export type CallbackForeachFn<T> = (
  el: T,
  i?: number,
  linkedList?: List<T>
) => void

export type CallbackFilterFn<T> = (
  el: T,
  i?: number,
  linkedList?: List<T>
) => boolean

export type CallbackMapFn<T> = (
  el: T,
  i?: number,
  linkedList?: List<T>
) => T

export type CallbackReduceFn<T> = (
  acc: T,
  el: T,
  i?: number,
  linkedList?: List<T>
) => T

export type CompareFn = (a: number, b: number) => number