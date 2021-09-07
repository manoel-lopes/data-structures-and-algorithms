package main

import (
	linkedList "Go/data-structures/lists/entities/linkedList"
	"fmt"
)

func main() {

	list := linkedList.New()

	var option, el, index, ok int

	for {
		fmt.Println("\nMenu:")
		fmt.Println("1  - Insert element in the front")
		fmt.Println("2  - Insert element in the end")
		fmt.Println("3  - Insert element (any index)")
		fmt.Println("4  - Remove element in the front")
		fmt.Println("5  - Remove element in the end")
		fmt.Println("6  - Remove element (any)")
		fmt.Println("7  - Get quantity of elements in the list")
		fmt.Println("8  - Get element by index")
		fmt.Println("9  - Get index by element")
		fmt.Println("10 - Change element")
		fmt.Println("11 - Print list")
		fmt.Println("12 - Clear list")
		fmt.Print("Option: ")
		fmt.Scanln(&option)

		if option == 1 {

			fmt.Print("\nType the element to be insert: ")
			fmt.Scanln(&el)

			list.Insert(el, 0)

			fmt.Printf("\n%v\n", list.ToString())
			fmt.Printf("\nHead: %v\n", list.Head)
			fmt.Printf("Tail: %v\n", list.Tail)

		} else if option == 2 {

			fmt.Print("\nType the element to be insert: ")
			fmt.Scanln(&el)

			list.Append(el)

			fmt.Printf("\n%v\n", list.ToString())
			fmt.Printf("\nHead: %v\n", list.Head)
			fmt.Printf("Tail: %v\n", list.Tail)

		} else if option == 3 {

			fmt.Print("\nType the index of the new element: ")
			fmt.Scanln(&index)

			fmt.Print("Type the new element: ")
			fmt.Scanln(&el)

			ok = list.Insert(el, index)

			if ok > 0 {
				fmt.Printf("\n%v\n", list.ToString())
				fmt.Printf("\nHead: %v\n", list.Head)
				fmt.Printf("Tail: %v\n", list.Tail)

			} else {
				fmt.Print("\nInsertion failed!\n")
			}

		} else if option == 4 {
		} else if option == 5 {
		} else if option == 6 {

		} else if option == 7 {

			ok = list.Length

			if ok == 0 {
				fmt.Printf("\nThe list is empty\n")

			} else {
				fmt.Printf("\nQuantity of elements in the list: %v\n\n", ok)
			}

		} else if option == 8 {

			fmt.Print("\nType the index: ")
			fmt.Scanln(&index)

			// ok = list.GetElementAt(&el, index)

			if ok == 1 {
				fmt.Printf("\nElement at index %v: %v!\n\n", index, el)

			} else {
				fmt.Printf("\n%v is not in the list!\n\n", el)
			}

		} else if option == 9 {

			fmt.Print("\nType the element: ")
			fmt.Scanln(&el)

			ok = list.IndexOf(&index, el)

			if ok == 1 {
				fmt.Printf("\nElement at index %v: %v!\n\n", index, el)

			} else {
				fmt.Printf("\n%v is not in the list!\n\n", el)
			}

		} else if option == 10 {

			fmt.Print("\nType the index of the element to be change: ")
			fmt.Scanln(&index)

			fmt.Print("Type the new element: ")
			fmt.Scanln(&el)

			// ok = list.SetElementAt(el, index)

			if ok == 1 {
				fmt.Printf("\n%v\n", list.ToString())

			} else {
				fmt.Println("Change failed!")
			}

		} else if option == 11 {

			fmt.Printf("\n%v\n", list.ToString())

		} else if option == 12 {

			// list.Clear()

		// 	if list.Length == 0 {
		// 		fmt.Printf("\nThe list is empty\n")
		// 	}

		// } else {

		// 	fmt.Print("\nInvalid Option!\n\n")

		}
	}
}
