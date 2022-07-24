package sorting_test

import (
	"Go/algorithms/sorting/mergeSort"
	"Go/util"
	"testing"
)

func TestMergeSort(test *testing.T) {
	array := util.GenerateArrayWithRandomValues(10000)
	sorting.MergeSort(array, 0, len(array))
	if !util.IsArraySorted(array) {
		test.Error("Must sort array with merge sort")
	}
}
