package main

import "fmt"

func main() {
	
	list := createLinkedList()
	// list := createDoublyLinkedList()
	// list := createCircularLinkedList()

	var option, el, index, ok int

	for {
		fmt.Println("\nMenu de opcoess:")
		fmt.Println("1  - Inserir elemento inicio")
		fmt.Println("2  - Inserir elemento final")
		fmt.Println("3  - Inserir elemento (qualquer posicao)")
		fmt.Println("4  - Remover elemento inicio")
		fmt.Println("5  - Remover elemento final")
		fmt.Println("6  - Remover elemento (qualquer)")
		fmt.Println("7  - Obter quantidade de elementos na lista")
		fmt.Println("8  - Obter elemento pelo indice")
		fmt.Println("9  - Obter indice pelo elemento")
		fmt.Println("10 - Alterar elemento")
		fmt.Println("11 - Impirmir lista")
		fmt.Println("12 - Limpar lista")
		fmt.Print("Opcao: ")
		fmt.Scanln(&option)

		if option == 1 {
			fmt.Print("\nDigite o elemento a ser inserido: ")
			fmt.Scanln(&el)

			list.insert(el, 0)

			fmt.Printf("\n%v\n", list.toString())

		} else if option == 2 {
			fmt.Print("\nDigite o elemento a ser inserido: ")
			fmt.Scanln(&el)

			list.append(el)

			fmt.Printf("\n%v\n", list.toString())

		} else if option == 3 {
			fmt.Print("\nDigite o indice do novo elemento: ")
			fmt.Scanln(&index)

			fmt.Print("Digite o elemento a ser inserido: ")
			fmt.Scanln(&el)

			ok = list.insert(el, index)

			if ok > 0 {
				fmt.Print("\nElemento inserido com sucesso!\n")
				fmt.Printf("\n%v\n", list.toString())

			} else {
				fmt.Print("\nFalha na insercao!\n\n")

			}

		} else if option == 4 {
		} else if option == 5 {

			if !list.isEmpty() {
				list.pop(&el)

				if list.isEmpty() {
					fmt.Printf("\nThe list it's empty\n")

				} else {
					fmt.Printf("\n%v\n", list.toString())
				}

			} else {
				fmt.Printf("\nThe list it's empty\n")
			}

		} else if option == 6 {

		} else if option == 7 {
			ok = list.getSize()

			if ok == 0 {
				fmt.Printf("\nThe list it's empty\n")

			} else {
				fmt.Printf("\nQuantidade de elementos na lista: %v\n\n", ok)
			}

		} else if option == 8 {
			fmt.Print("\nDigite o indice: ")
			fmt.Scanln(&index)

			ok = list.getElementAt(&el, index)

			if ok == 1 {
				fmt.Printf("\nElemento no indice %v: %v!\n\n", index, el)

			} else {
				fmt.Print("\nElemento nao encontrado!\n\n")
			}

		} else if option == 9 {
			fmt.Print("\nDigite o elemento: ")
			fmt.Scanln(&el)

			list.indexOf(&index, el)

			if ok == 1 {
				fmt.Printf("\nElemento no indice %v: %v!\n\n", index, el)

			} else {
				fmt.Print("\nElemento nao encontrado!\n\n")
			}

		} else if option == 10 {
			fmt.Print("\nDigite o indice do elemento a ser alterado: ")
			fmt.Scanln(&index)

			fmt.Print("Digite o novo elemento: ")
			fmt.Scanln(&el)

			ok = list.setElementAt(el, index)

			if ok == 1 {
				fmt.Printf("\n%v\n", list.toString())

			} else {
				fmt.Println("Falha na alteracao!")
			}

		} else if option == 11 {
			fmt.Printf("\n%v\n", list.toString())

		} else if option == 12 {
			list.clear()

			ok = list.getSize()

			if ok == 0 {
				fmt.Printf("\nThe list it's empty\n")
			}

		} else {
			fmt.Print("\nOpcao Invalida!\n\n")
		}
	}

	// go run main.go linked-list.go
}
