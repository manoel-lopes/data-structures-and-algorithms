from modules.node import Node

class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self._length = 0

    def __len__(self):
        return self._length
    
    def enqueue(self, el):
       node = Node(el)
       if self.last is None:
           self.last = node
       else:
           self.last.next = node
           self.last = node
       
       if self.first is None:
           self.first = node
       
       self._length += 1

    def dequeue(self):
        if self._length:
            el = self.first.data
            self.first = self.first.next 
            self._length -= 1
            return  el
        else:
            raise IndexError('The queue is empty')
        
    def peek(self):
        if self._length:
            return  self.first.data
        else:
            raise IndexError('The queue is empty')

    def clear(self):
        self.first = None
        self.last = None
        self._length = 0

    def __repr__(self):
       if self._length:
           r = ""
           pointer = self.first
           while(pointer):
               r = r + str(pointer.data) + ' '
               pointer = pointer.next
           return r
       else:
           raise IndexError('The queue is empty')

    def __str__(self):
        return self.__repr__()

queue = Queue()
print(len(queue))

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
print(queue)
print(queue.peek())
print(len(queue))

queue.dequeue()
queue.dequeue()
print(queue)

queue.clear()
print(len(queue))
# print(queue)  