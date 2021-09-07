#include <iostream>
#include <cstdio>
#include "../../models/node.h"

using namespace std;

template <class T>
class List
{
protected:
    Node<T> *head;
    Node<T> *tail;
    int length;

public:
    List<T>()
    {
        head = NULL;
        tail = NULL;
        length = 0;
    }

    ~List()
    {
        printf("\nFinishing...\n");
    }

    bool size()
    {
        return length;
    }

    bool isEmpty()
    {
        return length == 0;
    }

    T &operator[](unsigned int index)
    {
        Node<T> *pointer;
        int i = 0;
        pointer = head;
        while (pointer->next && i < index)
        {
            pointer = head;
            for (int i = 0; i < index; ++i)
                pointer = pointer->next;
            i++;
        }
        return pointer->el;
    }

    virtual int push(T el) = 0;

    virtual string toString() = 0;
};
