#include <stdio.h>
#include <stdlib.h>
#include "stack.h"

#define MAX 100

struct stack
{
  int length;
  int els[MAX];
};

Stack *createStack()
{
  Stack *stack = malloc(sizeof(Stack));

  if (stack)
    stack->length = 0;

  return stack;
}

int freeStack(Stack *stack)
{
  if (!stack)
    return 0;

  free(stack);
  return 1;
}

int getStackSize(Stack *stack)
{
  if (!stack)
    return -1;

  return stack->length;
}

int isStackEmpty(Stack *stack)
{
  if (!stack)
    return -1;

  if (!stack->length)
    return 1;

  return 0;
}

int isStackFull(Stack *stack)
{
  if (!stack)
    return -1;

  if (stack->length == MAX)
    return 1;

  return 0;
}

int insertInStack(Stack *stack, int el)
{
  if (!stack && isStackFull(stack))
    return 0;

  stack->els[stack->length] = el;
  stack->length++;
  return 1;
}

int removeInStack(Stack *stack)
{
  if (!stack || isStackEmpty(stack))
    return 0;

  stack->length--;
  return 1;
}

int getStackTop(Stack *stack, int *el)
{
  if (!stack || isStackEmpty(stack))
    return 0;

  *el = stack->els[stack->length - 1];
  return 1;
}

int printStack(Stack *stack)
{
  if (!stack)
    return 0;

  else
  {
    for (int i = stack->length - 1; i >= 0; i--)
      printf("%d\n", stack->els[i]);

    return 1;
  }
}
