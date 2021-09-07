import Queue from "../../../src/data-structures/queue/entities/Queue"

test('Must insert a element at the end of the linked list', () => {
    const queue = new Queue()
    queue.enqueue(0)
    expect(queue.front).toBe(0)
  })