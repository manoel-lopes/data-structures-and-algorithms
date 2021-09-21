#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "dynamicLinkedList.h"

typedef struct node
{
	int el;
	struct node *next;
} Node;

struct list
{
	struct node *head;
	struct node *tail;
	int length;
};

List *createList()
{
	List *list = malloc(sizeof(List));

	if (list)
	{
		list->head = NULL;
		list->tail = NULL;
		list->length = 0;
	}

	return list;
}

Node *createNode()
{
	Node *node = malloc(sizeof(Node));

	return node;
}

int freeList(List *list)
{
	if (!list)
		return 0;

	Node *pointer;
	while (list->head)
	{
		pointer = list->head;
		list->head = list->head->next;
		free(pointer);
	}

	free(list);
	return 1;
}

int len(List *list)
{
	if (!list)
		return -1;

	return list->length;
}

int getHead(List *list, int *el)
{
	if (!list || !list->head)
		return 0;

	*el = list->head->el;
	return 1;
}

int getTail(List *list, int *el)
{
	if (!list || !list->head)
		return 0;

	*el = list->tail->el;
	return 1;
}

int isEmpty(List *list)
{
	if (!list)
		return -1;

	if (list->length > 0)
		return 0;

	return 1;
}

int insert(List *list, int el, int index)
{
	if (!list || index <= 0)
		return 0;

	Node *pointer, *node = createNode();

	if (!node)
		return 0;

	node->el = el;
	node->next = NULL;

	if (index == 1)
	{
		node->next = list->head;

		if (!list->head)
			list->tail = node;

		list->head = node;
	}
	else if (index == list->length + 1)
	{
		list->tail->next = node; // * put node at index
		list->tail = node;		 // * set new tail
	}
	else
	{
		Node *pointer = list->head;
		for (int i = 1; i < index - 1; i++)
			pointer = pointer->next;

		node->next = pointer->next;
		pointer->next = node;
	}

	list->length++;

	return 1;
}

int push(List *list, int el)
{
	if (!list)
		return 0;

	Node *node = createNode();

	if (!node)
		return 0;

	node->el = el;
	node->next = NULL;

	if (!list->head)
		list->head = node;

	else
		list->tail->next = node;

	list->tail = node;

	list->length++;
	return 1;
}

int delete (List *list, int el)
{

	if (!list || !list->head)
		return 0;

	Node *ancestor, *current = list->head;
	while (current && current->el != el)
	{
		ancestor = current;
		current = current->next;
	}

	if (!current)
		return 0;

	if (current == list->head)
		list->head = current->next;

	else if (current == list->tail)
	{
		current = ancestor->next;
		ancestor->next = current->next;
		list->tail = ancestor;
	}
	else
		ancestor->next = current->next;

	list->length--;
	free(current);

	return 1;
}

int getElementAt(List *list, int index, int *el)
{
	if (!list || !list->head || index <= 0)
		return 0;

	if (index == list->length)
	{
		*el = list->tail->el;
		return 1;
	}

	Node *pointer = list->head;
	int i = 1;

	while (pointer && i < index)
	{
		pointer = pointer->next;
		i++;
	}

	if (!pointer)
		return 0;

	*el = pointer->el;
	free(pointer);

	return 1;
}

int indexOf(List *list, int el, int *index)
{
	if (!list || !list->head)
		return 0;

	Node *pointer = list->head;
	int i = 1;

	while (pointer && pointer->el != el)
	{
		pointer = pointer->next;
		i++;
	}

	if (!pointer)
		return 0;

	*index = i;
	free(pointer);

	return 1;
}

int printList(List *list)
{
	if (!list || !list->head)
		return 0;

	Node *pointer = list->head;
	while (pointer->next)
	{
		printf("%d -> ", pointer->el);
		pointer = pointer->next;
	}

	printf("%d", pointer->el);
	printf(" -> ");

	return 1;
}

int clear(List *list)
{
	if (!list || !list->head)
		return 0;

	Node *pointer;
	while (list->head)
	{
		pointer = list->head;
		list->head = list->head->next;
		free(pointer);
	}

	list->head = NULL;
	list->tail = NULL;
	list->length = 0;

	return 1;
}
