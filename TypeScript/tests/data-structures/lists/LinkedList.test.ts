import { LinkedList } from '~/data-structures/lists/entities/SinglyLinkedList'

test('Must insert a element at the end of the linked list', () => {
  const linkedList = new LinkedList()
  linkedList.push(0)
  linkedList.push(1)
  linkedList.push(2)
  expect(linkedList.getElementAt(2)).toBe(linkedList.length - 1)
})

test('Must insert a element at the font of the linked list', () => {
  const linkedList = new LinkedList()
  linkedList.push(1)
  linkedList.push(2)
  linkedList.insert(0)
  expect(linkedList.getElementAt(0)).toBe(0)
})
