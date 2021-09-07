#include <stdio.h>
#include <stdlib.h>
#include "stack.h"

typedef struct node
{
  int el;
  struct node *next;
  struct node *prev;
} Node;

struct stack
{
  struct node *bottom;
  struct node *top;
  int length;
};

Stack *createStack()
{
  Stack *stack = malloc(sizeof(Stack));

  if (stack)
  {
    stack->bottom = NULL;
    stack->top = NULL;
    stack->length = 0;
  }

  return stack;
}

Node *createNode()
{
  Node *node = malloc(sizeof(Node));

  return node;
}

int freeStack(Stack *stack)
{
  if (!stack)
    return 0;

  Node *pointer;
  while ((stack->bottom))
  {
    pointer = stack->bottom;
    stack->bottom = stack->bottom->next;
    free(pointer);
  }

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

  if (stack->length)
    return 0;

  return 1;
}

int insertInStack(Stack *stack, int el)
{
  if (!stack)
    return 0;

  Node *node = createNode();

  if (!node)
    return 0;

  node->el = el;
  node->next = NULL;

  if (!stack->top)
  {
    node->prev = NULL;
    stack->bottom = node;
  }
  else
  {
    node->prev = stack->top;
    stack->top->next = node;
  }

  stack->top = node;
  
  stack->length++;
  return 1;
}

int removeInStack(Stack *stack)
{
  if (!stack || !stack->bottom)
    return 0;

  Node *node = stack->top;
  if (node == stack->bottom)
  {
    stack->bottom = NULL;
    stack->top = NULL;
  }
  else
  {
    node->prev->next = NULL;
    stack->top = node->prev;
  }

  free(node);
  stack->length--;
  return 1;
}

int getStackTop(Stack *stack, int *el)
{
  if (!stack || !stack->bottom)
    return 0;

  *el = stack->top->el;
  return 1;
}

int printStack(Stack *stack)
{
	if (!stack || !stack->bottom)
		return 0;

	Node *pointer = stack->top;

	while (pointer->prev)
	{
		printf("%d\n", pointer->el);
		pointer = pointer->prev;
	}

	printf("%d", pointer->el);

	return 1;
}
