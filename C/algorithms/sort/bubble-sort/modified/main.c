#include <stdio.h>
#include <stdlib.h>

void fillArray(int *array, int n);
void printArray(int *array, int n);

void swap(int *array, int i, int j);
void modifiedBubbleSort(int *array, int n);

int main()
{
    int n;

    printf("\nType the array size: ");
    scanf("%d", &n);
    
    int *array = malloc(n * sizeof(int));

    fillArray(array, n);

    modifiedBubbleSort(array, n);

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
    for (int i = n; i >= 0; i--)
        printf("%d ", array[i]);
}

void swap(int *array, int i, int j)
{
    int temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

void modifiedBubbleSort(int *array, int n)
{
    int temp, i, j, again = 1;
    for (i = 0; i < n - 1 && again; i++)
        for (j = n - 1, again = 0; j > i; j--)
            if (array[j] > array[j - 1])
            {
                swap(array, j, j - 1);
                again = 1;
            }
}