#include <stdio.h>
#include <stdlib.h>

void fillArray(int *array, int n);
void printArray(int *array, int n);

void insertionSort(int *array, int n);

int main()
{
    int n;

    printf("\nType the array size: ");
    scanf("%d", &n);
    
    int *array = malloc(n * sizeof(int));

    fillArray(array, n);

    insertionSort(array, n);

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

void insertionSort(int *array, int n)
{
    int temp;
    for (int i = 1; i < n; i++)
    {
        temp = array[i];
        int j = i;
        while (j > 0 && temp < array[j - 1])
        {
            array[j] = array[j - 1];
            j--;
        }

        array[j] = temp;
    }
}
