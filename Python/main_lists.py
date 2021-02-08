from lists.linked_list import LinkedList
from lists.doubly_linked_list import DoublyLinkedList
from lists.circular_linked_list import CircularLinkedList

# list = LinkedList[int]()
# list = DoublyLinkedList[int]()
list = CircularLinkedList[int]()

if __name__ == '__main__':
    while True:
        print('\nMenu:')
        print('1  - Insert element in the beginning')
        print('2  - Insert element in the end')
        print('3  - Insert element (any position)')
        print('4  - Remove element in the beginning')
        print('5  - Remove element in the end')
        print('6  - Remove element (any)')
        print('7  - Get quantity de elements in the list')
        print('8  - Get element by index')
        print('9  - Get index by element')
        print('10 - Alterate element')
        print('11 - Print list')
        print('12 - Clear list')
        option = int(input('Option: '))

        if option == 1:
            el = int(input("\nType it the element to be insert: "))
            list.insert(0, el)

            print(f'\n{list}')

        elif option == 2:
            el = int(input("\nType it the element to be insert: "))
            list.append(el)

            print(f'\n{list}')

        elif option == 3:
            el = int(input("\nType it the element to be insert: "))
            index = int(input("Type it the new element's index: "))

            list.insert(index, el)

            print(f'\n{list}')

        elif option == 4:
            list.remove(list[0])

            if len(list):
                print(f'\n{list}')
            else:
                print("\nThe list it's empty!")

        elif option == 5:
            list.pop()

            if len(list):
                print(f'\n{list}')
            else:
                print("\nThe list it's empty!")

        elif option == 6:

            el = int(input('\nType it th element to be remove: '))
            list.remove(el)

            if len(list):
                print(f'\n{list}')
            else:
                print("\nThe list it's empty!")

        elif option == 7:
            if len(list):
                print(f"\nQuantity of elements in the list: {len(list)}")

            else:
                print("\nThe list it's empty!\n")

        elif option == 8:
            index = int(input("\nType it the element's index: "))
            el = list[index]

            print(f'\nElement in position {index}: {el}')

        elif option == 9:
            el = int(input("\nType it the element: "))
            index = list.index(el)

            print(f'\nElement in position {index}: {el}')

        elif option == 10:
            index = int(
                input("\nType it the index of the element to be alterate: "))
            el = int(input("Type it the new element: "))

            list[index] = el

            if list[index] == el:
                print("\nSuccessful alteration!\n")
                print(f"{list}")

            else:
                print("\nThere was an error in the alteration!")

        elif option == 11:
            if len(list):
                print(f'\n{list}')

            else:
                print("\nThe list it's empty!")

        elif option == 12:
            list.clear()

            if not len(list):
                print("\nThe list it's empty!")

        else:
            print("\nInvalid Option!")
