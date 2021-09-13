package util

import (
	"math/rand"
	"time"
)

func generateRandomValue(max int) int {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	return r.Intn(max)
}

func isValuePresentInArray(arr []int, el int) bool {
	isPresent := false

	for _, value := range arr {
		if value == el {
			isPresent = true
			break
		}
	}

	return isPresent
}

func GenerateArrayWithRandomValues(n, max int) []int {
	var arr []int

	for len(arr) < n {
		el := generateRandomValue(max)

		if !isValuePresentInArray(arr, el) {
			arr = append(arr, el)
		}
	}

	return arr
}

func isArraySortedInAscendingOrder(arr []int) bool {
	isArraySorted := true

	for i := 0; i < len(arr)-1; i++ {
		if arr[i] > arr[i+1] {
			isArraySorted = false
			break
		}
	}

	return isArraySorted
}

func isArraySortedInDescendingOrder(arr []int) bool {
	isArraySorted := true

	for i := 0; i < len(arr)-1; i++ {
		if arr[i] < arr[i+1] {
			isArraySorted = false
			break
		}
	}

	return isArraySorted
}

func IsArraySorted(arr []int) bool {

	if !isArraySortedInAscendingOrder(arr) && !isArraySortedInDescendingOrder(arr) {
		return false
	}

	return true
}
