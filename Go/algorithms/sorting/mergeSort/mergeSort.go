package sorting

func merge(arr []int, start, middle, end int){
	i, j, k := start, middle, 0
	slice := make([]int, end-start)
	for i < middle && j < end {
		if arr[i] <= arr[j] {
			slice[k] = arr[i]
			k++
			i++
		} else {
			slice[k] = arr[j]
			k++
			j++
		}
	}
	for i < middle {
		slice[k] = arr[i]
		k++
		i++
	}
	for j < end {
		slice[k] = arr[j]
		k++
		j++
	}
	for i := start; i < end; i++ {
        arr[i] = slice[i - start]
    }
}

func MergeSort(arr []int, start, end int) {
    if start < end - 1 {
        middle := (start + end) / 2;
        MergeSort(arr, start, middle)
        MergeSort(arr, middle, end)
        merge(arr, start, middle, end)
    }
}
