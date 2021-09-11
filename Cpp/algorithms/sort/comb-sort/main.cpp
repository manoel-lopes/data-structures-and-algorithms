#include <iostream>
#include <vector>

using namespace std;

void fillArray(vector<int> &v);
void printArray(vector<int> &v);

void swap(vector<int> &v, int i, int j);
void combSort(vector<int> &v);

int main()
{
    int n;

    cout << "\nType the array size: ";
    scanf("%d", &n);

    vector<int> v(n);

    fillArray(v);

    combSort(v);

    cout << "\nSorted array: ";
    printArray(v);

    cout << "\n";

    return 0;
}

void fillArray(vector<int> &v)
{
    cout << "\nType the elements: ";
    for (int i = 0; i < v.size(); i++)
         cin >> v[i];
}

void printArray(vector<int> &v)
{
    for (int i = 0; i < v.size(); i++)
        cout << v[i] << " ";
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
