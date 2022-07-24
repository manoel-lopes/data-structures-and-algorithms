package main

import (
	linkedList "Go/data-structures/lists/entities/linked-list"
	"Go/util"
	"fmt"
)

func main() {

	list := linkedList.New()
	var option, el, index, listSize int
	var ok bool
	var getLinkedListTypedElement = util.GetLinkedListIntElement

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

			list.Insert(el, 0)

			fmt.Printf("\n%v\n", list.ToString())

		} else if option == 2 {
			fmt.Print("\nDigite o elemento a ser inserido: ")
			fmt.Scanln(&el)

			list.Append(el)

			fmt.Printf("\n%v\n", list.ToString())

		} else if option == 3 {
			fmt.Print("\nDigite o indice do novo elemento: ")
			fmt.Scanln(&index)

			fmt.Print("Digite o elemento a ser inserido: ")
			fmt.Scanln(&el)

			listSize = list.Insert(el, index)

			if listSize > 0 {
				fmt.Print("\nElemento inserido com sucesso!\n")
				fmt.Printf("\n%v\n", list.ToString())

			} else {
				fmt.Print("\nFalha na insercao!\n\n")

			}

		} else if option == 4 {
		} else if option == 5 {

			if !list.IsEmpty() {
				el, ok = getLinkedListTypedElement(list.Pop())
				if ok {
					if list.IsEmpty() {
						fmt.Printf("\nThe list is empty\n")
					} else {
						fmt.Printf("\n%v\n", list.ToString())
					}
				}
			} else {
				fmt.Printf("\nThe list is empty\n")
			}
		} else if option == 6 {

		} else if option == 7 {
			listSize = list.GetSize()

			if listSize == 0 {
				fmt.Printf("\nThe list is empty\n")
			} else {
				fmt.Printf("\nQuantidade de elementos na lista: %v\n\n", listSize)
			}

		} else if option == 8 {
			fmt.Print("\nDigite o indice: ")
			fmt.Scanln(&index)

			el, ok = getLinkedListTypedElement(list.GetElementAt(index))

			if ok {
				fmt.Printf("\nElemento no indice %v: %v!\n\n", index, el)

			} else {
				fmt.Print("\nElemento nao encontrado!\n\n")
			}

		} else if option == 9 {
			fmt.Print("\nDigite o elemento: ")
			fmt.Scanln(&el)

			list.IndexOf(&index, el)

			if listSize == 1 {
				fmt.Printf("\nElemento no indice %v: %v!\n\n", index, el)
			} else {
				fmt.Print("\nElemento nao encontrado!\n\n")
			}

		} else if option == 10 {
			fmt.Print("\nDigite o indice do elemento a ser alterado: ")
			fmt.Scanln(&index)

			fmt.Print("Digite o novo elemento: ")
			fmt.Scanln(&el)

			ok = list.SetElementAt(el, index)

			if ok {
				fmt.Printf("\n%v\n", list.ToString())

			} else {
				fmt.Println("Falha na alteracao!")
			}

		} else if option == 11 {
			fmt.Printf("\n%v\n", list.ToString())

		} else if option == 12 {
			list.Clear()

			listSize = list.GetSize()

			if listSize == 0 {
				fmt.Printf("\nThe list is empty\n")
			}

		} else {
			fmt.Print("\nOpcao Invalida!\n\n")
		}
	}
}
