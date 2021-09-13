package sorting_test

import (
	sorting "Go/algorithms/sorting/mergeSort"
	"Go/util"
	"testing"
)

func TestMergeSort(t *testing.T) {

	n := 10000
	max := n

	arr := util.GenerateArrayWithRandomValues(n, max)

	sorting.MergeSort(arr, 0, len(arr))

	if !util.IsArraySorted(arr) {
		t.Error("must be true")
	}
}
