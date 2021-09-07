#include <stdio.h>
#include <stdlib.h>
#include "dynamicDoublyLinkedList.h"

void createElement(int *el);

int main()
{
  List *list = NULL;
  int option, el, ok, position;

  do
  {
    printf("\n\nMenu:");
    printf("\n1  - Create list");
    printf("\n2  - Free list");
    printf("\n3  - Insert element in the front");
    printf("\n4  - Insert element in the end");
    printf("\n5  - Insert element in order");
    printf("\n6  - Remove element in the front");
    printf("\n7  - Remove element in the end");
    printf("\n8  - Remove element");
    printf("\n9  - Get the quantity of elements in the list");
    printf("\n10 - Search element by position");
    printf("\n11 - Search position by element");
    printf("\n12 - Print list");
    printf("\n13 - Finish");
    printf("\nOption: ");
    scanf("%d", &option);

    if (option == 1)
    {

      list = createList();

      if (list)
        printf("\nList created with success!");

      else
        printf("\nError on create the list!");
    }

    else if (option == 2)
    {

      ok = freeList(list);

      if (ok)
        printf("\nList freed with success!");

      else
        printf("\nError on free the list!");
    }

    else if (option == 3)
    {

      createElement(&el);
      ok = insertListFront(list, el);

      if (ok)
      {
        printf("\n");
        printList(list);
      }
      else
        printf("\nError inserting the element!");
    }

    else if (option == 4)
    {

      createElement(&el);
      ok = insertListBack(list, el);

      if (ok)
      {
        printf("\n");
        printList(list);
      }
      else
        printf("\nError inserting the element!");
    }

    else if (option == 5)
    {

      createElement(&el);
      ok = insertListInOrder(list, el);

      if (ok)
      {
        printf("\n");
        printList(list);
      }
      else
        printf("\nError inserting the element!");
    }

    else if (option == 6)
    {

      ok = removeListFront(list);

      if (ok)
      {
        if (!isListEmpty(list))
        {
          printf("\n");
          printList(list);
        }
        else
          printf("\nThe list is empty!");
      }
      else
        printf("\nError removing the element!");
    }

    else if (option == 7)
    {

      ok = removeListBack(list);

      if (ok)
      {
        if (!isListEmpty(list))
        {
          printf("\n");
          printList(list);
        }
        else
          printf("\nThe list is empty!");
      }
      else
        printf("\nError removing the element!");
    }

    else if (option == 8)
    {
      printf("\nType the element to be remove: ");
      scanf("%d", &el);
      ok = removeInList(list, el);

      if (ok)
      {
        if (!isListEmpty(list))
        {
          printf("\n");
          printList(list);
        }
        else
          printf("\nThe list is empty!");
      }
      else
        printf("\nError removing the element!");
    }

    else if (option == 9)
    {
      if (!isListEmpty(list))
        printf("\nQuantity of elements in the list: %d", getListSize(list));

      else
        printf("\nThe list is empty!");
    }

    else if (option == 10)
    {
      printf("\nType the position: ");
      scanf("%d", &position);

      ok = searchListPosition(list, position, &el);

      if (ok)
        printf("\nElement in position %d: %d", position, el);
      
      else
        printf("\nPosition out of range!");
      
    }

    else if (option == 11)
    {
      printf("\nType the element: ");
      scanf("%d", &el);

      ok = searchListElement(list, el, &position);
      
      if (ok)
        printf("\nElement in position %d: %d", position, el);
      
      else
        printf("\nElement not found!");
    }

    else if (option == 12)
    {
      if (!isListEmpty(list))
      {
        printf("\n");
        printList(list);
      }
      else
        printf("\nThe list is empty!");
    }

    else if (option == 13)
    {
      freeList(list);
      printf("\nFinishing...\n");
    }

    else
      printf("\nInvalid Option!");

  } while (option != 13);

  return 0;
}

void createElement(int *el)
{
  printf("\nType the element: ");
  scanf("%d", el);
}
