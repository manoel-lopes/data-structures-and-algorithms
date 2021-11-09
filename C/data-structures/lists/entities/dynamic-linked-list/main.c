#include <stdio.h>
#include <stdlib.h>

#include "../../lib/list.h"

void createElement(int *el);
int parseInt(void *value);
void print(void *el);
int compare(void *el, void *listEl);

int main()
{
  List *list = NULL;
  int option, el, ok, index;

  do
  {
    printf("\n\nMenu:");
    printf("\n1  - Create list");
    printf("\n2  - Insert element at front");
    printf("\n3  - Insert element at back");
    printf("\n4  - Insert element (any position)");
    printf("\n5  - Remove element at front");
    printf("\n6  - Remove element at back");
    printf("\n7  - Remove element");
    printf("\n8  - Get list length");
    printf("\n9  - Get element by index");
    printf("\n10 - Get index by element");
    printf("\n11 - Change element");
    printf("\n12 - Print list");
    printf("\n13 - Free list");
    printf("\n14 - Finish");
    printf("\nOption: ");
    scanf("%d", &option);

    if (option == 1)
    {

      list = createList(sizeof(int));

      if (list)
        printf("\nList created with success!");

      else
        printf("\nError on create the list!");
    }

    else if (option == 2)
    {
      printf("\n");
      createElement(&el);
      ok = insert(list, &el, 1);

      if (ok)
      {
        printf("\n");
        printList(list, print);
      }

      else
        printf("\nError inserting the element!");
    }

    else if (option == 3)
    {
      printf("\n");
      createElement(&el);
      ok = push(list, &el);

      if (ok)
      {
        printf("\n");
        printList(list, print);
      }

      else
        printf("\nError inserting the element!");
    }

    else if (option == 4)
    {
      printf("\nType the index: ");
      scanf("%d", &index);

      createElement(&el);
      ok = insert(list, &el, index);

      if (ok)
      {
        printf("\n");
        printList(list, print);
      }

      else
        printf("\nError inserting the element!");
    }

    // else if (option == 5)
    // {
    //   ok = getHead(list, &el);

    //   if (ok)
    //   {
    //     ok = delete (list, el);

    //     if (ok)
    //     {
    //       if (!len(list))
    //         printf("\nThe list is empty!");

    //       else
    //       {
    //         printf("\n");
    //         printList(list);
    //       }
    //     }
    //   }

    //   else
    //     printf("\nError removing the element!");
    // }

    // else if (option == 6)
    // {
    //   ok = getTail(list, &el);

    //   if (ok)
    //   {

    //     ok = delete (list, el);

    //     if (ok)
    //     {
    //       if (!len(list))
    //         printf("\nThe list is empty!");

    //       else
    //       {
    //         printf("\n");
    //         printList(list);
    //       }
    //     }
    //   }

    //   else
    //     printf("\nError removing the element!");
    // }

    // else if (option == 7)
    // {
    //   printf("\nType the element to be remove: ");
    //   scanf("%d", &el);

    //   ok = delete (list, el);

    //   if (ok)
    //   {
    //     if (!len(list))
    //       printf("\nThe list is empty!");

    //     else
    //     {
    //       printf("\n");
    //       printList(list);
    //     }
    //   }

    //   else
    //     printf("\nError removing the element!");
    // }

    else if (option == 8)
    {
      if (!len(list))
        printf("\nThe list is empty!");

      else
        printf("\nQuantity of elements in the list: %d", len(list));
    }

    else if (option == 9)
    {
      printf("\nType the index: ");
      scanf("%d", &index);

      ok = getElementAt(list, index, &el);

      if (ok)
        printf("\nElement at index %d: %d", index, el);

      else
        printf("\nIndex out of range!");
    }

    else if (option == 10)
    {
      printf("\nType the element: ");
      scanf("%d", &el);

      ok = indexOf(list, &el, &index, compare);

      if (ok)
        printf("\nElement at index %d: %d", index, el);

      else
        printf("\nElement not found!");
    }

    else if (option == 11)
    {

      printf("\nType the index: ");
      scanf("%d", &index);

      createElement(&el);

      ok = setElementAt(list, index, &el);

      if (ok)
      {
        printf("\n");
        printList(list, print);
      }
      else
        printf("\nError changing the element!");
    }

    else if (option == 12)
    {
      if (!len(list))
        printf("\nThe list is empty!");

      else
      {
        printf("\n");
        printList(list, print);
      }
    }

    else if (option == 13)
    {

      ok = freeList(list);

      if (ok)
        printf("\nList freed with success!");

      else
        printf("\nError on free the list!");
    }

    else if (option == 14)
    {
      freeList(list);
      printf("\nFinishing...\n");
    }

    else
      printf("\nInvalid Option!");

  } while (option != 14);

  return 0;
}

void createElement(int *el)
{
  printf("Type the element: ");
  scanf("%d", el);
}

int parseInt(void *value) { return *((int *)value); }

void print(void *el) { printf("%d -> ", parseInt(el)); }

int compare(void *el, void *listEl)
{
  if (parseInt(el) != parseInt(listEl))
    return 0;

  return 1;
}