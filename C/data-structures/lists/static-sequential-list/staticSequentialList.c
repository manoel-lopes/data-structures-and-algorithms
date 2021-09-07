#include <stdio.h>
#include <stdlib.h>
#include "staticSequentialList.h"

#define MAX 100

struct list
{
  int length;
  int els[MAX];
};

int getPosition(List *list, int el);

List *createList()
{
  List *list = malloc(sizeof(List));

  if (list)
    list->length = 0;

  return list;
}

int freeList(List *list)
{
  if (!list)
    return 0;

  free(list);
  return 1;
}

int getListSize(List *list)
{
  if (!list)
    return -1;

  else
    return list->length;
}

int isListEmpty(List *list)
{
  if (!list)
    return -1;

  if (!list->length)
    return 1;

  return 0;
}

int isListFull(List *list)
{
  if (!list)
    return -1;

  if (list->length == MAX)
    return 1;

  return 0;
}

int insertListFront(List *list, int el)
{
  if (!list && isListFull(list))
    return 0;

  // moves all elements of the list forward one position
  for (int i = list->length - 1; i >= 0; i--)
    list->els[i + 1] = list->els[i];

  list->els[0] = el;
  list->length++;
  return 1;
}

int insertListBack(List *list, int el)
{
  if (!list && isListFull(list))
    return 0;

  list->els[list->length] = el;
  
  list->length++;
  return 1;
}

int insertListInOrder(List *list, int el)
{
  if (!list && isListFull(list))
    return 0;

  int i = 0;
  while (i < list->length && list->els[i] < el)
    i++;

  /* moves a position forward, all elements that are after position i,
   where the new element will be inserted */
  for (int j = list->length - 1; j >= i; j--)
    list->els[j + 1] = list->els[j];

  list->els[i] = el;
  
  list->length++;
  return 1;
}

int removeListFront(List *list)
{
  if (!list || isListEmpty(list))
    return 0;

  // moves all element backward one position overwriting the first element
  for (int j = 0; j < list->length; j++)
    list->els[j] = list->els[j + 1];

  list->length--;
  return 1;
}

int removeListBack(List *list)
{
  if (!list || isListEmpty(list))
    return 0;

  list->length--;
  return 1;
}

int removeInList(List *list, int el)
{
  if (!list || isListEmpty(list))
    return -1;

  int i = getPosition(list, el);

  if (i == -1)
  {
    return 0;
  }

  else
  {
    for (int j = i; j <= list->length - 1; j++)
      list->els[j] = list->els[j + 1];

    list->length--;
    return 1;
  }
}

int searchListPosition(List *list, int position, int *el)
{
  if (!list || position <= 0 || position > list->length)
    return 0;

  *el = list->els[position - 1];
  return 1;
}

int searchListElement(List *list, int el, int *position)
{
  if (!list)
    return -1;

  int i = getPosition(list, el);
  if (i == -1)
  {
    return 0;
  }
  else
  {
    *position = i + 1;
    return 1;
  }
}

int printList(List *list)
{
  if (!list)
    return 0;

  for (int i = 0; i < list->length; i++)
    printf("%d -> ", list->els[i]);

  return 1;
}

int getPosition(List *list, int el)
{
  int i = 0;
  while (i < list->length && list->els[i] != el)
    i++;

  const int elementNotFound = i == list->length ? 1 : 0;
  if (elementNotFound)
    return -1;

  return i;
}