#include <iostream>
#include <cstdio>

#include "lists/entities/linkedList.cpp"

using namespace std;

int main()
{
    LinkedList<int> linkedList;
    linkedList.push(0);
    cout << linkedList[0] << endl;
    linkedList.push(1);
    cout << linkedList.toString() << endl;
    cout << linkedList[1] << endl;
    linkedList[1] = 2;
    cout << linkedList[1] << endl;
    // cout << linkedList[2] << endl;

    return 0;
}