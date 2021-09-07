#include <stdio.h>
#include <stdlib.h>
#include "queue.h"

void createElement(int *el);

int main()
{
  Queue *queue = NULL;
  int option, el, ok, position;

  do
  {
    printf("\n\nMenu:");
    printf("\n1 - Create queue");
    printf("\n2 - Free queue");
    printf("\n3 - Insert element in queue");
    printf("\n4 - Remove element in queue");
    printf("\n5 - Get the quantity of elements in the queue");
    printf("\n6 - Get element at the front of the queue");
    printf("\n7 - Print queue");
    printf("\n8 - Finish");
    printf("\nOption: ");
    scanf("%d", &option);

    if (option == 1)
    {

      queue = createQueue();

      if (queue != NULL)
      {
        printf("\nQueue created with success!");
      }
      else
      {
        printf("\nError on create the queue!");
      }
    }

    else if (option == 2)
    {

      ok = freeQueue(queue);

      if (ok)
      {
        printf("\nQueue freed with success!");
      }
      else
      {
        printf("\nError on free the queue!");
      }
    }

    else if (option == 3)
    {

      createElement(&el);
      ok = insertInQueue(queue, el);

      if (ok)
      {
        printf("\n");
        printQueue(queue);
      }
      else
      {
        printf("\nError inserting the element!");
      }
    }

    else if (option == 4)
    {
      ok = removeInQueue(queue);

      if (ok)
      {
        if (!isQueueEmpty(queue))
        {
          printf("\n");
          printQueue(queue);
        }
        else
        {
          printf("\nThe queue is empty!");
        }
      }
      else
      {
        printf("\nError removing the element!");
      }
    }

    else if (option == 5)
    {
      if (!isQueueEmpty(queue))
      {
        printf("\nQuantity of elements in the queue: %d", getQueueSize(queue));
      }
      else
      {
        printf("\nThe queue is empty!");
      }
    }

    else if (option == 6)
    {
      if (!isQueueEmpty(queue))
      {
        printf("\n");
        getQueueFront(queue, &el);
        printf("Element at the front of the queue: %d", el);
      }
      else
      {
        printf("\nThe queue is empty!");
      }
    }

    else if (option == 7)
    {
      if (!isQueueEmpty(queue))
      {
        printf("\n");
        printQueue(queue);
      }
      else
      {
        printf("\nThe queue is empty!");
      }
    }

    else if (option == 8)
    {
      freeQueue(queue);
      printf("\nFinishing...\n");
    }

    else
    {
      printf("\nInvalid Option!");
    }

  } while (option != 8);

  return 0;
}

void createElement(int *el)
{
  printf("\nType the element: ");
  scanf("%d", el);
}
