#include <iostream>
#include <vector>
#include <cstdio>

using namespace std;

void fillArray(vector<int> &v);
void printArray(vector<int> &v);

void swap(vector<int> &v, int i, int j);
void combSort(vector<int> &v);

int main()
{
    int n;

    printf("\nType the array size: ");
    scanf("%d", &n);

    vector<int> v(n);

    fillArray(v);

    combSort(v);

    printf("\nSorted array: ");
    printArray(v);

    printf("\n");

    return 0;
}

void fillArray(vector<int> &v)
{
    printf("\nType the elements: ");
    for (int i = 0; i < v.size(); i++)
        scanf("%d", &v[i]);
}

void printArray(vector<int> &v)
{
    for (int i = 0; i < v.size(); i++)
        printf("%d ", v[i]);
}

void swap(vector<int> &v, int i, int j)
{
    int temp = v[i];
    v[i] = v[j];
    v[j] = temp;
}

void combSort(vector<int> &v)
{
    int step = v.size(), i, j, k, again = 1;

    while ((step = int(step / 1.3)) > 1)
        for (j = 0; j < v.size() - step; j++)
        {
            k = j + step;
            if (v[j] > v[k])
                swap(v, j, k);
        }

    for (i = 0; i < v.size() - 1 && again; i++)
        for (j = v.size() - 1, again = 0; j > i; j--)
            if (v[j] < v[j - 1])
            {
                swap(v, j, j - 1);
                again = 1;
            }
}
