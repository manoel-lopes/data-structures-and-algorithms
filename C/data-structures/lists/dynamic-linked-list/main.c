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
      printf("\n1  - Insert element at front");
      printf("\n2  - Insert element at back");
      printf("\n3  - Insert element (any position)");
      printf("\n4  - Remove element at front");
      printf("\n5  - Remove element at back");
      printf("\n6  - Remove element");
      printf("\n7  - Get list length");
      printf("\n8  - Search element by position");
      printf("\n9  - Search position by element");
      printf("\n10 - Print list");
      printf("\n11 - Clear list");
      printf("\n12 - Finish");
      printf("\nOption: ");
      scanf("%d", &option);

      if (option == 1)
      {
        printf("\n");
        createElement(&el);
        ok = insertInList(list, el, 1);

        if (ok)
        {
          printf("\n");
          printList(list);

          ok = getListHead(list, &el);

          if (ok)
          {
            printf("\nHead: %d", el);

            getListTail(list, &el);
            printf("\nTail: %d", el);
          }
        }

        else
          printf("\nError inserting the element!");
      }

      else if (option == 2)
      {
        printf("\n");
        createElement(&el);
        ok = insertListBack(list, el);

        if (ok)
        {
          printf("\n");
          printList(list);

          ok = getListHead(list, &el);

          if (ok)
          {
            printf("\nHead: %d", el);

            getListTail(list, &el);
            printf("\nTail: %d", el);
          }
        }

        else
          printf("\nError inserting the element!");
      }

      else if (option == 3)
      {
        printf("\nType the position: ");
        scanf("%d", &position);

        createElement(&el);
        ok = insertInList(list, el, position);

        if (ok)
        {
          printf("\n");
          printList(list);

          ok = getListHead(list, &el);

          if (ok)
          {
            printf("\nHead: %d", el);

            getListTail(list, &el);
            printf("\nTail: %d", el);
          }
        }

        else
          printf("\nError inserting the element!");
      }

      else if (option == 4)
      {
        ok = removeListFront(list);

        if (ok)
        {
          if (isListEmpty(list) == 1)
            printf("\nThe list is empty!");

          else
          {
            printf("\n");
            printList(list);

            if (isListEmpty(list) != 1)
            {
              ok = getListHead(list, &el);

              if (ok)
              {
                printf("\nHead: %d", el);

                getListTail(list, &el);
                printf("\nTail: %d", el);
              }
            }
          }
        }

        else
          printf("\nError removing the element!");
      }

      else if (option == 5)
      {
        ok = removeListBack(list);

        if (ok)
        {
          if (isListEmpty(list) == 1)
            printf("\nThe list is empty!");

          else
          {
            printf("\n");
            printList(list);

            if (isListEmpty(list) != 1)
            {
              ok = getListHead(list, &el);

              if (ok)
              {
                printf("\nHead: %d", el);

                getListTail(list, &el);
                printf("\nTail: %d", el);
              }
            }
          }
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
          if (isListEmpty(list) == 1)
            printf("\nThe list is empty!");

          else
          {
            printf("\n");
            printList(list);

            if (isListEmpty(list) != 1)
            {
              ok = getListHead(list, &el);

              if (ok)
              {
                printf("\nHead: %d", el);

                getListTail(list, &el);
                printf("\nTail: %d", el);
              }
            }
          }
        }

        else
          printf("\nError removing the element!");
      }

      else if (option == 7)
      {
        if (isListEmpty(list) == 1)
          printf("\nThe list is empty!");

        else
          printf("\nQuantity of elements in the list: %d", getListLength(list));
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
        if (isListEmpty(list) == 1)
          printf("\nThe list is empty!");

        else
        {
          printf("\n");
          printList(list);
        }
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
  printf("Type the element: ");
  scanf("%d", el);
}
