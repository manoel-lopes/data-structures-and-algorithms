#include <stdio.h>
#include <stdlib.h>
#include "stack.h"

void createElement(int *el);

int main()
{
  Stack *stack = NULL;
  int option, el, ok, position;

  do
  {
    printf("\n\nMenu:");
    printf("\n1 - Create stack");
    printf("\n2 - Free stack");
    printf("\n3 - Insert element in stack");
    printf("\n4 - Remove element in stack");
    printf("\n5 - Get quantity of elements in the stack");
    printf("\n6 - Get element at the top of the stack");
    printf("\n7 - Print stack");
    printf("\n8 - Finish");
    printf("\nOption: ");
    scanf("%d", &option);

    if (option == 1)
    {

      stack = createStack();

      if (stack != NULL)
      {
        printf("\nStack created with success!");
      }
      else
      {
        printf("\nError on create the stack!");
      }
    }

    else if (option == 2)
    {

      ok = freeStack(stack);

      if (ok)
      {
        printf("\nStack freed with success!");
      }
      else
      {
        printf("\nError on free the stack!");
      }
    }

    else if (option == 3)
    {

      createElement(&el);
      ok = insertInStack(stack, el);

      if (ok)
      {
        printf("\n");
        printStack(stack);
      }
      else
      {
        printf("\nError inserting the element!");
      }
    }
    else if (option == 4)
    {
      ok = removeInStack(stack);

      if (ok)
      {
        if (!isStackEmpty(stack))
        {
          printf("\n");
          printStack(stack);
        }
        else
        {
          printf("\nThe stack is empty!");
        }
      }
      else
      {
        printf("\nError removing the element!");
      }
    }

    else if (option == 5)
    {
      if (!isStackEmpty(stack))
      {
        printf("\nQuantity of elements in the stack: %d", getStackSize(stack));
      }
      else
      {
        printf("\nThe stack is empty!");
      }
    }

    else if (option == 6)
    {
      if (!isStackEmpty(stack))
      {
        printf("\n");
        getStackTop(stack, &el);
        printf("Element at the top of the stack: %d", el);
      }
      else
      {
        printf("\nThe stack is empty!");
      }
    }

    else if (option == 7)
    {
      if (!isStackEmpty(stack))
      {
        printf("\n");
        printStack(stack);
      }
      else
      {
        printf("\nThe stack is empty!");
      }
    }

    else if (option == 8)
    {
      freeStack(stack);
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
