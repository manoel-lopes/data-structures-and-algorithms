#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ListaEstGen.h"

struct item
{
    int key;
    void *info;
};

struct list
{
    int length, TYPE_SIZE;
    struct item els[MAX];
};

List *createList(int TYPE_SIZE)
{
    List *list = (List *)malloc(sizeof(List));
    if (list != NULL)
    {
        list->length = 0;
        list->TYPE_SIZE = TYPE_SIZE;
    }

    return list;
}

void freeList(List *list)
{
    for (int i = 0; i < list->length; i++)
        free(list->els[i].info);

    free(list);
}

int searchInList(List *list, int key, void *els)
{
    if (!list)
        return 0;

    int i = 0;
    while (i < list->length && list->els[i].key != key)
        i++;

    if (i == list->length) // element not found
        return 0;

    memcpy(els, list->els[i].info, list->TYPE_SIZE);

    return 1;
}

int insertInList(List *list, int key, void *els)
{
    if (!list || list->length == MAX)
        return 0;

    void *el = malloc(list->TYPE_SIZE);
    if (!el)
        return 0;

    memcpy(el, els, list->TYPE_SIZE);

    int i = 0;
    while (i < list->length && list->els[i].key < key)
        i++;

    for (int k = list->length - 1; k >= i; k--)
        list->els[k + 1] = list->els[k];

    list->els[i].key = key;
    list->els[i].info = el;

    list->length++;
    return 1;
}

int removeInList(List *list, int key)
{
    if (!list || !list->length)
        return 0;

    int k, i = 0;
    while (i < list->length && list->els[i].key != key)
        i++;

    if (i == list->length) // element not found
        return 0;

    free(list->els[i].info);

    for (k = i; k < list->length - 1; k++)
        list->els[k] = list->els[k + 1];

    list->length--;
    return 1;
}

void printList(List *list, void (*printfn)(void *))
{
    if (!list)
        return;

    for (int i = 0; i < list->length; i++)
    {
        printf("Key: %d\n", list->els[i].key);
        printfn(list->els[i].info);
    }
}
