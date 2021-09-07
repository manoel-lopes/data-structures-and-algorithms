#include <stdio.h>
#include <stdlib.h>
#include "queue.h"

#define MAX 100

struct queue
{
  int front, back, length;
  int els[MAX];
};

Queue *createQueue()
{
  Queue *queue = malloc(sizeof(Queue));

  if (queue)
  {
    queue->front = 0;
    queue->back = 0;
    queue->length = 0;
  }

  return queue;
}

int freeQueue(Queue *queue)
{
  if (!queue)
    return 0;

  free(queue);
  return 1;
}

int getQueueSize(Queue *queue)
{
  if (!queue)
    return -1;

  else
    return queue->length;
}

int isQueueEmpty(Queue *queue)
{
  if (!queue)
    return -1;

  if (!queue->length)
    return 1;

  return 0;
}

int isQueueFull(Queue *queue)
{
  if (!queue)
    return -1;

  if (queue->length == MAX)
    return 1;

  return 0;
}

int insertInQueue(Queue *queue, int el)
{
  if (!queue || isQueueFull(queue))
    return 0;

  int i = queue->length - 1;
  while (i >= 0 && queue->els[i] >= el)
  {
    queue->els[i + 1] = queue->els[i];
    i--;
  }

  queue->els[i + 1] = el;
  
  queue->length++;
  return 1;
}

int removeInQueue(Queue *queue)
{
  if (!queue || isQueueEmpty(queue))
    return 0;

  queue->length--;
  return 1;
}

int getQueueFront(Queue *queue, int *el)
{
  if (!queue || isQueueEmpty(queue))
    return 0;

  *el = queue->els[queue->front];
  return 1;
}

int printQueue(Queue *queue)
{
  if (!queue)
    return 0;

  for (int i = 0; i < queue->length; i++)
    printf("%d ", queue->els[i]);
  
  return 1;
}
