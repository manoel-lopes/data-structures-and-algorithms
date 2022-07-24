package util

import (
	"Go/data-structures/models/node"
	"math/rand"
	"time"
)

func generateRandomValue(max int) int {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	return r.Intn(max)
}

func isValuePresentInArray(array []int, el int) bool {
	isPresent := false
	for _, value := range array {
		if value == el {
			isPresent = true
			break
		}
	}
	return isPresent
}

func GenerateArrayWithRandomValues(n int) []int {
	var array []int
	for len(array) < n {
		el := generateRandomValue(n)
		if !isValuePresentInArray(array, el) {
			array = append(array, el)
		}
	}
	return array
}

func isArraySortedInAscendingOrder(array []int) bool {
	isArraySorted := true
	for i := 0; i < len(array)-1; i++ {
		if array[i] > array[i+1] {
			isArraySorted = false
			break
		}
	}
	return isArraySorted
}

func isArraySortedInDescendingOrder(array []int) bool {
	isArraySorted := true
	for i := 0; i < len(array)-1; i++ {
		if array[i] < array[i+1] {
			isArraySorted = false
			break
		}
	}
	return isArraySorted
}

func IsArraySorted(array []int) bool {
	if !isArraySortedInAscendingOrder(array) && !isArraySortedInDescendingOrder(array) {
		return false
	}
	return true
}

func GetLinkedListIntElement(el any, result bool) (int, bool) {
	return el.(int), result
}

func GetNode(listHeadNode *node.Node, listSize int, index int) *node.Node {
	if index >= 0 && index < listSize {
		pointer := listHeadNode
		for i := 0; i < index && pointer != nil; i++ {
			pointer = pointer.Next
		}
		return pointer
	}
	return nil
}
