package sorting_test

import (
	. "Go/algorithms/sorting/mergeSort"
	. "Go/util"
	. "testing"
)

func TestMergeSort(test *T) {
	n := 10000
	max := n
	array := GenerateArrayWithRandomValues(n, max)
	MergeSort(array, 0, len(array))
	if !IsArraySorted(array) {
		test.Error("must be true")
	}
}
