#include <iostream>

#include "../lib/list.cpp"

using namespace std;

template <class T>
class LinkedList : public List<T>
{

public:
    int push(T el)
    {
        Node<T> *node = new Node<T>;
        node->el = el;

        if (!this->head)
            this->head = node;
        else
            this->tail->next = node;

        this->tail = node;
        this->length++;
        
        return this->length;
    }

    string toString()
    {
        Node<T> *pointer = this->head;
        string str;

        if (this->size())
        {
            str = to_string(pointer->el);
            while (pointer->next)
            {
                pointer = pointer->next;
                str.append(" -> ");
                str.append(to_string(pointer->el));
            }

            str.append(" -> ");
        }
        return str;
    }
};
