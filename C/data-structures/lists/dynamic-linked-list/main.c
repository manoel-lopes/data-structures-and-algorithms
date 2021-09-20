#include <stdio.h>
#include <stdlib.h>
#include "dynamicLinkedList.h"

void createElement(int *el);

int main()
{
  List *list = NULL;
  int option, el, ok, position;

  list = createList();

  if (list)
  {
    do
    {
      printf("\n\nMenu:");
      printf("\n1  - Insert element in front");
      printf("\n2  - Insert element in end");
      printf("\n3  - Insert element in order");
      printf("\n4  - Remove element in front");
      printf("\n5  - Remove element in end");
      printf("\n6  - Remove element");
      printf("\n7  - Get the quantity of elements in the list");
      printf("\n8  - Search element by position");
      printf("\n9  - Search position by element");
      printf("\n10 - Print list");
      printf("\n11 - Clear list");
      printf("\n12 - Finish");
      printf("\nOption: ");
      scanf("%d", &option);

      if (option == 1)
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

      else if (option == 2)
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

      else if (option == 3)
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

      else if (option == 4)
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

      else if (option == 5)
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

      else if (option == 6)
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

      else if (option == 7)
      {
        if (!isListEmpty(list))
          printf("\nQuantity of elements in the list: %d", getListSize(list));

        else
          printf("\nThe list is empty!");
      }

      else if (option == 8)
      {
        printf("\nType the position: ");
        scanf("%d", &position);

        ok = searchListPosition(list, position, &el);

        if (ok)
          printf("\nElement in position %d: %d", position, el);

        else
          printf("\nPosition out of range!");
      }

      else if (option == 9)
      {
        printf("\nType the element: ");
        scanf("%d", &el);

        ok = searchListElement(list, el, &position);

        if (ok)
          printf("\nElement in position %d: %d", position, el);

        else
          printf("\nElement not found!");
      }

      else if (option == 10)
      {
        if (!isListEmpty(list))
        {
          printf("\n");
          printList(list);
        }
        else
          printf("\nThe list is empty!");
      }

      else if (option == 11)
      {

        ok = clearList(list);

        if (ok)
          printf("\nList cleared with success!");

        else
          printf("\nError clearing the list!");
      }

      else if (option == 12)
      {

        ok = freeList(list);

        if (ok)
        {
          printf("\nList freed with success!");
          printf("\nFinishing...\n");
        }

        else
          printf("\nError freeding the list!");
      }

      else
        printf("\nInvalid Option!");

    } while (1);

    return 0;
  }
}

void createElement(int *el)
{
  printf("\nType the element: ");
  scanf("%d", el);
}
