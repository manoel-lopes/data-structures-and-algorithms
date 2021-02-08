from modules.node import Node

class Stack:
    def __init__(self):
        self.top = None
        self._length = 0

    def __len__(self):
        return self._length
    
    def push(self, el):
        node = Node(el)
        node.next = self.top
        self.top = node
        self._length += 1

    def pop(self):
        if self._length > 0:
            node = self.top
            self.top =  self.top.next
            self._length -= 1
        else:
            raise IndexError('The stack is empty')

    def peek(self):
        if self._length > 0:
            return self.top.data
        else:
            raise IndexError('The stack is empty')

    def clear(self):
        self.top = None
        self._length = 0

    def __repr__(self):
       pointer = self.top
       if pointer == None:
           raise IndexError('The lis is empty')
       r = ""
       pointer = self.top
       while(pointer):
           r = r + "\n" + str(pointer.data)
           pointer = pointer.next
       return r
    
    def __str__(self):
        return self.__repr__()

stack = Stack()
print(len(stack))

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
print(stack)
print(stack.peek())
print(len(stack))

stack.pop()
stack.pop()
print(stack)

stack.clear()
print(len(stack))
# print(stack)