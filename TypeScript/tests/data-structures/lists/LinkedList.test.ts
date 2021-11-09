import { LinkedList } from '~/data-structures/lists/entities/LinkedList'

describe('LinkedList', () => {
  const list = new LinkedList<number>()
  let min: number
  let max: number

  beforeEach(() => {
    list.clear()
    min = 1
    max = 3
  })

  const pushElements = () => {
    for (let i = min; i <= max; i++) {
      list.push(i)
    }
  }

  it('starts empty', () => {
    expect(list.length).toBe(0)
    expect(list.head).toBeUndefined()
    expect(list.tail).toBeUndefined()
  })

  it('returns element at specific index: invalid position', () => {
    expect(list.getElementAt(3)).toBeUndefined()
  })

  it('inserts element at first position empty list', () => {
    const el = 0
    expect(list.insert(el, 0)).toBe(1)
    expect(list.head).toBe(0)
    expect(list.tail).toBe(0)
  })

  it('inserts element at last position empty list', () => {
    const el = 0
    expect(list.push(el)).toBe(1)
    expect(list.head).toBe(0)
    expect(list.tail).toBe(0)
  })

  it('inserts element at first position not empty list', () => {
    pushElements()
    expect(list.head).toBe(1)
    expect(list.tail).toBe(3)
    expect(list.length).toBe(3)

    expect(list.insert(0, 0)).toBe(4)
    expect(list.head).toBe(0)
    expect(list.tail).toBe(3)
    expect(list.length).toBe(4)
  })

  it('inserts element at last position not empty list', () => {
    pushElements()
    expect(list.head).toBe(1)
    expect(list.tail).toBe(3)
    expect(list.length).toBe(3)

    expect(list.push(4)).toBe(4)
    expect(list.head).toBe(1)
    expect(list.tail).toBe(4)
    expect(list.length).toBe(4)
  })

  it('inserts elements invalid position: empty list', () => {
    expect(list.insert(1, 1)).toBe(0)
  })

  it('inserts elements invalid position not empty list', () => {
    const el = 1
    expect(list.insert(el, 0)).toBe(1)
    expect(list.insert(el, 2)).toBe(1)
  })

  it('inserts elements in the middle of list', () => {
    expect(list.insert(0, 0)).toBe(1)
    expect(list.insert(2, list.length)).toBe(2)
    expect(list.insert(1, 1)).toBe(3)
  })

  it('returns index of elements', () => {
    pushElements()

    for (let i = min; i <= max; i++) {
      expect(list.indexOf(i)).toBe(i - 1)
    }

    expect(list.indexOf(max + 1)).toBe(-1)
  })

  it('removes invalid elements', () => {
    pushElements()

    for (let i = max + 2; i <= max + 4; i++) {
      const el = list.removeAt(list.indexOf(i))
      expect(el).toBeUndefined()
    }
  })

  it('removes valid elements', () => {
    pushElements()

    for (let i = min; i <= max; i++) {
      const el = list.removeAt(list.indexOf(i))
      expect(el).toBe(i)
    }
  })

  it('removes element invalid position empty list', () => {
    for (let i = min; i <= max; i++) {
      const el = list.removeAt(list.indexOf(i - 1))
      expect(el).toBeUndefined()
    }
  })

  it('removes element invalid position not empty list', () => {
    pushElements()

    for (let i = max + 2; i <= max + 4; i++) {
      const el = list.removeAt(list.indexOf(i))
      expect(el).toBeUndefined()
    }
  })

  it('removes first element list single element', () => {
    list.push(1)

    const element = list.removeAt(0)
    expect(element).toBe(1)

    expect(list.head).toBeUndefined()
    expect(list.tail).toBeUndefined()
    expect(list.length).toBe(0)
  })

  it('removes first element list multiple elements', () => {
    pushElements()

    const el = list.removeAt(0)
    expect(el).toBe(min)
  })

  it('returns the head of the list', () => {
    expect(list.head).toBeUndefined()

    const head = 1
    list.push(head)
    expect(list.head).toBe(head)
  })

  it('returns the tail of the list', () => {
    expect(list.tail).toBeUndefined()

    const tail = 1
    list.push(tail)
    expect(list.tail).toBe(tail)
  })

  it('returns the correct length', () => {
    expect(list.length).toBe(0)

    for (let i = min; i <= max; i++) {
      list.push(i)
      expect(list.length).toBe(i)
    }

    const length = max
    for (let i = min; i <= max; i++) {
      list.removeAt(list.indexOf(i))
      expect(list.length).toBe(length - i)
    }

    expect(list.length).toBe(0)
  })

  it('returns if list it is empty', () => {
    expect(list.length).toBe(0)
    for (let i = min; i <= max; i++) {
      list.push(i)
      expect(list.length).toBeGreaterThan(0)
    }

    for (let i = min; i < max; i++) {
      list.removeAt(list.indexOf(i))
      expect(list.length).toBeGreaterThan(0)
    }
    list.removeAt(list.indexOf(max))
    expect(list.length).toBe(0)

    pushElements()
    expect(list.length).toBeGreaterThan(0)

    list.clear()
    expect(list.length).toBe(0)
  })

  it('clears the list', () => {
    expect(list.length).toBe(0)

    list.clear()
    expect(list.length).toBe(0)

    pushElements()
    expect(list.length).toBeGreaterThan(0)

    list.clear()
    expect(list.length).toBe(0)
  })

  it('returns toString primitive types', () => {
    expect(list.toString()).toBe('')

    list.push(1)
    expect(list.toString()).toBe('1 ->')

    list.push(2)
    expect(list.toString()).toBe('1 -> 2 ->')

    list.clear()
    expect(list.toString()).toBe('')
  })

  it('returns toString primitive types: string', () => {
    const list = new LinkedList<string>()
    list.push('el1')
    expect(list.toString()).toBe('el1 ->')

    list.push('el2')
    expect(list.toString()).toBe('el1 -> el2 ->')
  })
})
