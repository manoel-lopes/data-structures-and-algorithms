#include <stdio.h>
#include <stdlib.h>

void fillArray(int *array, int n);
void printArray(int *array, int n);

void merge(int *arrayA, int start, int middle, int end);
void mergeSort(int *array, int start, int end);

int main()
{
    int n;

    printf("\nType the array size: ");
    scanf("%d", &n);
    
    int *array = malloc(n * sizeof(int));

    fillArray(array, n);

    mergeSort(array, 0, n);

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

void merge(int *arrayA, int start, int middle, int end)
{
    int i = start, j = middle, k = 0;
    int *arrayB = (int *)malloc((end - start) * sizeof(int));

    while (i < middle && j < end)
    {
        if (arrayA[i] <= arrayA[j])
            arrayB[k++] = arrayA[i++];
        else
            arrayB[k++] = arrayA[j++];
    }

    while (i < middle)
        arrayB[k++] = arrayA[i++];

    while (j < end)
        arrayB[k++] = arrayA[j++];

    for (i = start; i < end; i++)
        arrayA[i] = arrayB[i - start];

    free(arrayB);
}

void mergeSort(int *array, int start, int end)
{
    if (start < end - 1)
    {
        int middle = (start + end) / 2;

        mergeSort(array, start, middle);
        mergeSort(array, middle, end);
        merge(array, start, middle, end);
    }
}