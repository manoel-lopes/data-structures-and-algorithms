#include <iostream>
#include <vector>

using namespace std;

void lerVetor(FILE *file, vector<int> &v);
void swap(vector<int> &v, int i, int j);
void combSort(vector<int> &v, int n);

int main()
{
    char filename[50];
    scanf("%s", filename);

    vector<int> v;
    FILE *file;

    file = fopen(filename, "r");

    lerVetor(file, v);

    int n = v.size() - 1;
    combSort(v, n);

    fclose(file);

    return 0;
}

void lerVetor(FILE *file, vector<int> &v)
{
    int i;
    while (!feof(file))
    {
        fscanf(file, "%d", &i);
        v.push_back(i);
    }
}

void swap(vector<int> &v, int i, int j)
{
    int temp;
    temp = v[i];
    v[i] = v[j];
    v[j] = temp;
}

void combSort(vector<int> &v, int n)
{
    int step = n, i, j, k, again = 1, comparasions = 0, swaps = 0;

    while ((step = int(step / 1.3)) > 1)
        for (j = 0; j < n - step; j++)
        {
            k = j + step;
            comparasions++;
            if (v[j] > v[k])
            {
                printf("%d %d\n", j, k);
                swap(v, j, k);
                swaps++;
            }
        }

    for (i = 0; i < n - 1 && again; i++)
        for (j = n -1, again = 0; j > i; j--)
        {
            comparasions++;
            if (v[j] < v[j - 1])
            {
                printf("%d %d\n", j - 1, j);
                swap(v, j, j - 1);
                swaps++;
                again = 1;
            }
        }

    printf("%d %d", comparasions, swaps);
}
