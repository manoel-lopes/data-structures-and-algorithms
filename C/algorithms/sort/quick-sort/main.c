#include <stdio.h>
#include <stdlib.h>

void fillArray(int *array, int n);
void printArray(int *array, int n);

void swap(int *array, int i, int j);
int partition(int *array, int start, int end);
void quickSort(int *array, int start, int end);

int main()
{
    int n;

    printf("\nType the array size: ");
    scanf("%d", &n);

    int *array = malloc(n * sizeof(int));

    fillArray(array, n);

    quickSort(array, 0, n - 1);

    printf("\nSorted array: ");
    printArray(array, n);

    printf("\n");

    return 0;
}

void fillArray(int *array, int n)
{
    printf("\nType the elements: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &array[i]);
}

void printArray(int *array, int n)
{
    for (int i = 0; i < n; i++)
        printf("%d ", array[i]);
}

void swap(int *array, int i, int j)
{
    int temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

int partition(int *array, int start, int end)
{
    int i = start, j = end + 1, pivot = array[start];

    while (1)
    {
        while (array[++i] < pivot)
            if (i == end)
                break;

        while (pivot < array[--j])
            if (j == start)
                break;

        if (i >= j)
            break;

        swap(array, i, j);
    }

    swap(array, start, j);
    return j;
}

void quickSort(int *array, int start, int end)
{
    if (end > start)
    {
        int pivot = partition(array, start, end);
        quickSort(array, start, pivot - 1);
        quickSort(array, pivot + 1, end);
    }
}