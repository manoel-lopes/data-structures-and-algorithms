#include <stdio.h>
#include <stdlib.h>
#include "queue.h"

typedef struct node
{
  int el;
  struct node *next;
  struct node *prev;
} Node;

struct queue
{
  struct node *front;
  struct node *back;
  int length;
};

Queue *createQueue()
{
  Queue *queue = malloc(sizeof(Queue));

  if (queue)
  {
    queue->front = NULL;
    queue->back = NULL;
    queue->length = 0;
  }

  return queue;
}

Node *createNode()
{
  Node *node = malloc(sizeof(Node));

  return node;
}

int freeQueue(Queue *queue)
{
  if (!queue)
    return 0;

  Node *pointer;
  while ((queue->front))
  {
    pointer = queue->front;
    queue->front = queue->front->next;
    free(pointer);
  }

  free(queue);
  return 1;
}

int getQueueSize(Queue *queue)
{
  if (!queue)
    return -1;

  return queue->length;
}

int isQueueEmpty(Queue *queue)
{
  if (!queue)
    return -1;

  if (queue->length)
    return 0;

  return 1;
}

int insertInQueue(Queue *queue, int el)
{
  if (!queue)
    return 0;

  Node *node = createNode();

  if (!node)
    return 0;

  node->el = el;

  if (!queue->front)
  {
    node->next = NULL;
    node->prev = NULL;
    queue->front = node;
  }
  else
  {
    Node *ancestor, *current = queue->front;
    while (current && current->el < el)
    {
      ancestor = current;
      current = current->next;
    }

    if (current == queue->front)
    {
      node->prev = NULL;
      queue->front->prev = node;
      node->next = queue->front;
      queue->front = node;
    }
    else
    {
      node->next = ancestor->next;
      node->prev = ancestor;
      ancestor->next = node;

      if (current)
        current->prev = node;
    }
  }

  queue->length++;
  return 1;
}

int removeInQueue(Queue *queue)
{
  if (!queue || !queue->front)
    return 0;

  Node *node = queue->front;
  queue->front = queue->front->next;

  if (!queue->front)
    queue->back = NULL;

  else
    queue->front->prev = NULL;

  free(node);
  queue->length--;
  return 1;
}

int getQueueFront(Queue *queue, int *el)
{
  if (!queue || !queue->front)
    return 0;

  *el = queue->front->el;
  return 1;
}

int printQueue(Queue *queue)
{
  if (!queue || !queue->front)
    return 0;

  Node *pointer = queue->front;
  while (pointer->next)
  {
    printf("%d ", pointer->el);
    pointer = pointer->next;
  }

  printf("%d", pointer->el);

  return 1;
}
