#include <stdio.h>
#include <stdlib.h>
#include "deque.h"

typedef struct node
{
  int el;
  struct node *next;
  struct node *prev;
} Node;

struct deque
{
  struct node *front;
  struct node *back;
  int length;
};

Deque *createDeque()
{
  Deque *deque = malloc(sizeof(Deque));

  if (deque)
  {
    deque->front = NULL;
    deque->back = NULL;
    deque->length = 0;
  }

  return deque;
}

Node *createNode()
{
  Node *node = malloc(sizeof(Node));

  return node;
}

int freeDeque(Deque *deque)
{
  if (!deque)
    return 0;

  Node *pointer;
  while ((deque->front))
  {
    pointer = deque->front;
    deque->front = deque->front->next;
    free(pointer);
  }

  free(deque);
  return 1;
}

int getDequeSize(Deque *deque)
{
  if (!deque)
    return -1;

  return deque->length;
}

int isDequeEmpty(Deque *deque)
{
  if (!deque)
    return -1;

  if (deque->length)
    return 0;

  return 1;
}

int insertDequeFront(Deque *deque, int el)
{
  if (!deque)
    return 0;

  Node *node = createNode();

  if (!node)
    return 0;

  node->el = el;
  node->next = deque->front;
  node->prev = NULL;

  if (!deque->front)
    deque->back = node;

  else
    deque->front->prev = node;

  deque->front = node;
  
  deque->length++;
  return 1;
}

int insertDequeBack(Deque *deque, int el)
{
  if (!deque)
    return 0;

  Node *node = createNode();

  if (!node)
    return 0;

  node->el = el;
  node->next = NULL;

  if (!deque->back)
  {
    node->prev = NULL;
    deque->front = node;
  }
  else
  {
    node->prev = deque->back;
    deque->back->next = node;
  }

  deque->back = node;

  deque->length++;
  return 1;
}

int removeDequeFront(Deque *deque)
{
  if (!deque || !deque->front)
    return 0;

  Node *node = deque->front;
  deque->front = deque->front->next;

  if (!deque->front)
    deque->back = NULL;

  else
    deque->front->prev = NULL;

  free(node);
  deque->length--;
  return 1;
}

int removeDequeBack(Deque *deque)
{
  if (!deque || !deque->front)
    return 0;

  Node *node = deque->back;
  if (node == deque->front)
  {
    deque->front = NULL;
    deque->back = NULL;
  }
  else
  {
    node->prev->next = NULL;
    deque->back = node->prev;
  }

  free(node);
  deque->length--;
  return 1;
}

int getDequeFront(Deque *deque, int *el)
{
  if (!deque || !deque->front)
    return 0;

  *el = deque->front->el;
  return 1;
}

int getDequeBack(Deque *deque, int *el)
{
  if (!deque || !deque->front)
    return 0;

  *el = deque->back->el;
  return 1;
}

int printDeque(Deque *deque)
{
  if (!deque || !deque->front)
    return 0;

  Node *pointer = deque->front;
  while (pointer->next)
  {
    printf("%d ", pointer->el);
    pointer = pointer->next;
  }

  printf("%d", pointer->el);

  return 1;
}
