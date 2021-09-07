#include <stdio.h>
#include <stdlib.h>

void fillArray(int *array, int n);
void printArray(int *array, int n);

void swap(int *array, int i, int j);
void selectionSort(int *array, int n);

int main()
{
    int n;

    printf("\nType the array size: ");
    scanf("%d", &n);

    int *array = malloc(n * sizeof(int));

    fillArray(array, n);

    selectionSort(array, n);

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

void selectionSort(int *array, int n)
{
    int indexMin, temp;
    for (int i = 0; i < n - 1; i++)
    {
        indexMin = i;
        for (int j = i + 1; j < n; j++)
            if (array[indexMin] > array[j])
                indexMin = j;

        if (i != indexMin)
            swap(array, i, indexMin);
    }
}
