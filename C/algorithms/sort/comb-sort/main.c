#include <stdio.h>
#include <stdlib.h>

void fillArray(int *array, int n);
void printArray(int *array, int n);

void swap(int *array, int i, int j);
void combSort(int *array, int n);

int main()
{
    int n;

    printf("\nType the array size: ");
    scanf("%d", &n);
 
    int *array = malloc(n * sizeof(int));

    fillArray(array, n);

    combSort(array, n);

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

void combSort(int *array, int n)
{
    int step = n, i, j, k, again = 1;
    while ((step = (int)step / 1.3) > 1)
        for (j = 0; j < n - step; j++)
        {
            k = j + step;
            if (array[j] > array[k])
                swap(array, j, k);
        }

    for (i = 0; i < n && again; i++)
        for (i = 0; i < n - 1 && again; i++)
            for (j = n - 1, again = 0; j > i; j--)
                if (array[j] < array[j - 1])
                {
                    swap(array, j, j - 1);
                    again = 1;
                }
}