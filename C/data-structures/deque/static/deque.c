#include <stdio.h>
#include <stdlib.h>
#include "deque.h"

#define MAX 100

struct deque
{
  int front, back, length;
  int els[MAX];
};

Deque *createDeque()
{
  Deque *deque = malloc(sizeof(Deque));

  if (deque)
  {
    deque->front = 0;
    deque->back = 0;
    deque->length = 0;
  }

  return deque;
}

int freeDeque(Deque *deque)
{
  if (!deque)
    return 0;

  free(deque);
  return 1;
}

int getDequeSize(Deque *deque)
{
  if (!deque)
    return -1;

  else
    return deque->length;
}

int isDequeEmpty(Deque *deque)
{
  if (!deque)
    return -1;

  if (!deque->length)
    return 1;

  return 0;
}

int isDequeFull(Deque *deque)
{
  if (!deque)
    return -1;

  if (deque->length == MAX)
    return 1;

  return 0;
}

int insertDequeFront(Deque *deque, int el)
{
  if (!deque || isDequeFull(deque))
    return 0;

  deque->front--;

  if (deque->front < 0)
    deque->front = MAX - 1;

  deque->els[deque->front] = el;

  deque->length++;
  return 1;
}

int insertDequeBack(Deque *deque, int el)
{
  if (!deque || isDequeFull(deque))
    return 0;

  deque->els[deque->back] = el;
  deque->back = (deque->back + 1) % MAX;

  deque->length++;
  return 1;
}

int removeDequeFront(Deque *deque)
{
  if (!deque || isDequeEmpty(deque))
    return 0;

  deque->front = (deque->front + 1) % MAX;
  
  deque->length--;
  return 1;
}

int removeDequeBack(Deque *deque)
{
  if (!deque || isDequeEmpty(deque))
    return 0;

  deque->length--;
  deque->back = deque->back - 1;
  return 1;
}

int getDequeFront(Deque *deque, int *el)
{
  if (!deque || isDequeEmpty(deque))
    return 0;

  *el = deque->els[deque->front];
  return 1;
}

int getDequeBack(Deque *deque, int *el)
{
  if (!deque || isDequeEmpty(deque))
    return 0;

  int position = deque->back - 1;

  if (position < 0)
    position = MAX - 1;

  *el = deque->els[position];
  return 1;
}

int printDeque(Deque *deque)
{
  if (!deque)
    return 0;

  for (int i = deque->front; i != deque->back && i < MAX; i = (i + 1) % MAX)
    printf("%d ", deque->els[i]);

  return 1;
}
