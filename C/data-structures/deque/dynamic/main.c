#include <stdio.h>
#include <stdlib.h>
#include "deque.h"

void createElement(int *el);

int main()
{
  Deque *deque = NULL;
  int option, el, ok, position;

  do
  {
    printf("\n\nMenu:");
    printf("\n1  - Create deque");
    printf("\n2  - Free deque");
    printf("\n3  - Insert element in deque front");
    printf("\n4  - Insert element in deque back");
    printf("\n5  - Remove element in deque front");
    printf("\n6  - Remove element in deque back");
    printf("\n7  - Get the quantity of elements in the deque");
    printf("\n8  - Get element at the front of the deque");
    printf("\n9  - Get element at the back of the deque");
    printf("\n10 - Print deque");
    printf("\n11 - Finish");
    printf("\nOption: ");
    scanf("%d", &option);

    if (option == 1)
    {

      deque = createDeque();

      if (deque != NULL)
        printf("\nDeque created with success!");

      else
        printf("\nError on create the deque!");
    }

    else if (option == 2)
    {

      ok = freeDeque(deque);

      if (ok)
        printf("\nDeque freed with success!");

      else
        printf("\nError on free the deque!");
    }

    else if (option == 3)
    {

      createElement(&el);
      ok = insertDequeFront(deque, el);

      if (ok)
      {
        printf("\n");
        printDeque(deque);
      }
      else
      {
        printf("\nError inserting the element!");
      }
    }

    else if (option == 4)
    {

      createElement(&el);
      ok = insertDequeBack(deque, el);

      if (ok)
      {
        printf("\n");
        printDeque(deque);
      }
      else
      {
        printf("\nError inserting the element!");
      }
    }

    else if (option == 5)
    {
      ok = removeDequeFront(deque);

      if (ok)
      {
        if (!isDequeEmpty(deque))
        {
          printf("\n");
          printDeque(deque);
        }
        else
        {
          printf("\nThe deque is empty!");
        }
      }
      else
      {
        printf("\nError removing the element!");
      }
    }

    else if (option == 6)
    {
      ok = removeDequeBack(deque);

      if (ok)
      {
        if (!isDequeEmpty(deque))
        {
          printf("\n");
          printDeque(deque);
        }
        else
        {
          printf("\nThe deque is empty!");
        }
      }
      else
      {
        printf("\nError removing the element!");
      }
    }

    else if (option == 7)
    {
      if (!isDequeEmpty(deque))
        printf("\nQuantity of elements in the deque: %d", getDequeSize(deque));

      else
        printf("\nThe deque is empty!");
    }

    else if (option == 8)
    {
      if (!isDequeEmpty(deque))
      {
        printf("\n");
        getDequeFront(deque, &el);
        printf("Element at the front of the deque: %d", el);
      }
      else
      {
        printf("\nThe deque is empty!");
      }
    }

    else if (option == 9)
    {
      if (!isDequeEmpty(deque))
      {
        printf("\n");
        getDequeBack(deque, &el);
        printf("Element at the back of the deque: %d", el);
      }
      else
      {
        printf("\nThe deque is empty!");
      }
    }

    else if (option == 10)
    {
      if (!isDequeEmpty(deque))
      {
        printf("\n");
        printDeque(deque);
      }
      else
      {
        printf("\nThe deque is empty!");
      }
    }

    else if (option == 11)
    {
      freeDeque(deque);
      printf("\nFinishing...\n");
    }

    else
    {
      printf("\nInvalid Option!");
    }

  } while (option != 11);

  return 0;
}

void createElement(int *el)
{
  printf("\nType the element: ");
  scanf("%d", el);
}
