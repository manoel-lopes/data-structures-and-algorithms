import { List } from '../data-structures/lists/lib/List'

type FindIndexCallback<T> = (el: T) => boolean

type ForeachCallback<T> = (el: T, i?: number, linkedList?: List<T>) => void

type FilterCallback<T> = (el: T, i?: number, linkedList?: List<T>) => boolean

type MapCallback<T> = (el: T, i?: number, linkedList?: List<T>) => T

type ReduceCallback<T> = (acc: T, el: T, i?: number, linkedList?: List<T>) => T

type CompareFn = (a: number, b: number) => number

export {
  FindIndexCallback,
  ForeachCallback,
  FilterCallback,
  MapCallback,
  ReduceCallback,
  CompareFn,
}
