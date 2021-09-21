from src.data_structures.lists.entities.linked_list import LinkedList
# from entities.doubly_linked_list import LinkedList
# from entities.circular_linked_list import LinkedList

list = LinkedList[int]()

if __name__ == '__main__':
    while True:
        print('\nMenu:')
        print('1  - Insert element at front')
        print('2  - Insert element at back')
        print('3  - Insert element (any position)')
        print('4  - Remove element at front')
        print('5  - Remove element at back')
        print('6  - Remove element')
        print('7  - Get list length')
        print('8  - Get element by index')
        print('9  - Get index by element')
        print('10 - Change element')
        print('11 - Print list')
        print('12 - Clear list')
        option = int(input('Option: '))

        if option == 1:
            el = int(input('\nType the element to be insert: '))
            list.insert(0, el)

            print(f'\n{list}')

        elif option == 2:
            el = int(input('\nType the element to be insert: '))
            list.append(el)

            print(f'\n{list}')

        elif option == 3:
            el = int(input('\nType the element to be insert: '))
            index = int(input("Type the new element's index: "))

            list.insert(index, el)

            print(f'\n{list}')

        elif option == 4:
            list.remove(list.head)

            if len(list):
                print(f'\n{list}')
            else:
                print('\nThe list is empty!')

        elif option == 5:
            list.remove(list.tail)

            if len(list):
                print(f'\n{list}')
            else:
                print('\nThe list is empty!')

        elif option == 6:

            el = int(input('\nType th element to be remove: '))
            list.remove(el)

            if len(list):
                print(f'\n{list}')
            else:
                print('\nThe list is empty!')

        elif option == 7:
            if len(list):
                print(f'\nQuantity of elements in the list: {len(list)}')
            else:
                print('\nThe list is empty!\n')

        elif option == 8:
            index = int(input("\nType the element's index: "))
            el = list[index]

            print(f'\nElement in position {index}: {el}')

        elif option == 9:
            el = int(input('\nType the element: '))
            index = list.index(el)

            print(f'\nElement in position {index}: {el}')

        elif option == 10:
            index = int(
                input('\nType the index of the element to be alterate: '))
            el = int(input('Type the new element: '))

            list[index] = el

            if list[index] == el:
                print('\nSuccessful alteration!\n')
                print(f'{list}')
            else:
                print('\nThere was an error in the alteration!')

        elif option == 11:
            if len(list):
                print(f'\n{list}')
            else:
                print('\nThe list is empty!')

        elif option == 12:
            list.clear()

            if not len(list):
                print('\nThe list is empty!')

        else:
            print('\nInvalid Option!')
