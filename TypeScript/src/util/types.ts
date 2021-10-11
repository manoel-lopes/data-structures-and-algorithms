import { LinkedList } from '../data-structures/lists/lib/LinkedList'

type CallbackForeachFn<T> = (
  el: T,
  i?: number,
  linkedList?: LinkedList<T>
) => void

type CallbackReduceFn<T> = (
  acc: T,
  el: T,
  i?: number,
  linkedList?: LinkedList<T>
) => T

type CallbackFilterFn<T> = (
  el: T,
  i?: number,
  linkedList?: LinkedList<T>
) => boolean

type CallbackMapFn<T> = (el: T, i?: number, linkedList?: LinkedList<T>) => T

type CompareFn = (a: number, b: number) => number

export {
  CallbackForeachFn,
  CallbackReduceFn,
  CallbackFilterFn,
  CallbackMapFn,
  CompareFn,
}
