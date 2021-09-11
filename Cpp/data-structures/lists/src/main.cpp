#include <iostream>

#include "lists/entities/linkedList.cpp"

using namespace std;

int main()
{
    LinkedList<int> linkedList;
    linkedList.push(0);
    printf("%d", linkedList[0]);
    linkedList.push(1);
    printf("%s", linkedList.toString());
    printf("%d", linkedList[1]);
    linkedList[1] = 2;
    printf("%d", linkedList[1]);
    // printf("%d", linkedList[2]);

    return 0;
}