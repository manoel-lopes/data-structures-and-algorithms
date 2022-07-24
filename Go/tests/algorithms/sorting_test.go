package sorting_test

import (
	"Go/algorithms/sorting/mergeSort"
	"Go/util"
	"testing"
)

func TestMergeSort(test *testing.T) {
	n := 10000
	max := n
	array := util.GenerateArrayWithRandomValues(n, max)
	sorting.MergeSort(array, 0, len(array))
	if !util.IsArraySorted(array) {
		test.Error("must be true")
	}
}
