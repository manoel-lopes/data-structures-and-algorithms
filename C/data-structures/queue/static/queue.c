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

  queue->els[queue->back] = el;
  queue->back = (queue->back + 1) % MAX;
  
  queue->length++;
  return 1;
}

int removeInQueue(Queue *queue)
{
  if (!queue || isQueueEmpty(queue))
    return 0;

  queue->front = (queue->front + 1) % MAX;
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

  else
  {
    for (int i = queue->front; i != queue->back; i = (i + 1) % MAX)
      printf("%d ", queue->els[i]);

    return 1;
  }
}
