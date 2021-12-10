import { LinkedList } from '../data-structures/lists/lib/linked-list'

type FindIndexCallback<T> = (el: T) => boolean

type ForeachCallback<T> = (el: T, i?: number, list?: LinkedList<T>) => void

type FilterCallback<T> = (el: T, i?: number, list?: LinkedList<T>) => boolean

type MapCallback<T> = (el: T, i?: number, list?: LinkedList<T>) => T

type ReduceCallback<T> = (acc: T, el: T, i?: number, list?: LinkedList<T>) => T

type CompareFn = (a: number, b: number) => number

export {
  FindIndexCallback,
  ForeachCallback,
  FilterCallback,
  MapCallback,
  ReduceCallback,
  CompareFn,
}
