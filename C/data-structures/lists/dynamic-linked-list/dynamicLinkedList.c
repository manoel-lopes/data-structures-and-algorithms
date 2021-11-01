#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "../../models/node.h"
#include "../lib/list.h"

struct list
{
	struct node *head;
	struct node *tail;
	int length, TYPE_SIZE;
};

List *createList(int TYPE_SIZE)
{
	List *list = malloc(sizeof(List));

	if (list)
	{
		list->head = NULL;
		list->tail = NULL;
		list->length = 0;
		list->TYPE_SIZE = TYPE_SIZE;
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

int getHead(List *list, void *el)
{
	if (!list || !list->head)
		return 0;

	memcpy(el, list->head->el, list->TYPE_SIZE);
	return 1;
}

int getTail(List *list, void *el)
{
	if (!list || !list->head)
		return 0;

	memcpy(el, list->tail->el, list->TYPE_SIZE);
	return 1;
}

int insert(List *list, void *el, int index)
{
	if (!list || index <= 0)
		return 0;

	Node *pointer, *node = createNode();
	if (!node)
		return 0;

	node->el = malloc(list->TYPE_SIZE);
	if (!node->el)
		return 0;

	memcpy(node->el, el, list->TYPE_SIZE);

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

int push(List *list, void *el)
{
	if (!list)
		return 0;

	Node *node = createNode();
	if (!node)
		return 0;

	node->el = malloc(list->TYPE_SIZE);
	if (!node->el)
		return 0;

	memcpy(node->el, el, list->TYPE_SIZE);
	node->next = NULL;

	if (!list->head)
		list->head = node;

	else
		list->tail->next = node;

	list->tail = node;

	list->length++;
	return 1;
}

// int delete (List *list, int el)
// {

// 	if (!list || !list->head)
// 		return 0;

// 	Node *ancestor, *current = list->head;
// 	while (current && current->el != el)
// 	{
// 		ancestor = current;
// 		current = current->next;
// 	}

// 	if (!current)
// 		return 0;

// 	if (current == list->head)
// 		list->head = current->next;

// 	else if (current == list->tail)
// 	{
// 		current = ancestor->next;
// 		ancestor->next = current->next;
// 		list->tail = ancestor;
// 	}
// 	else
// 		ancestor->next = current->next;

// 	list->length--;
// 	free(current);

// 	return 1;
// }

int getElementAt(List *list, int index, void *el)
{
	if (!list || !list->head || index <= 0 || index > list->length)
		return 0;

	if (index == list->length)
	{
		memcpy(el, list->tail->el, list->TYPE_SIZE);
		return 1;
	}


	int i = 1;
	Node *pointer = list->head;
	while (pointer && i < index)
	{
		pointer = pointer->next;
		i++;
	}

	if (!pointer)
		return 0;

	memcpy(el, pointer->el, list->TYPE_SIZE);

	return 1;
}

int setElementAt(List *list, int index, void *el)
{
	if (!list || !list->head || index <= 0 || index > list->length)
		return 0;

	if (index == list->length)
	{
		memcpy(list->tail->el, el, list->TYPE_SIZE);
		return 1;
	}

	int i = 1;
	Node *pointer = list->head;
	while (pointer && i < index)
	{
		pointer = pointer->next;
		i++;
	}

	if (!pointer)
		return 0;

	memcpy(pointer->el, el, list->TYPE_SIZE);

	return 1;
}

int indexOf(List *list, void *el, int *index, int (*comparefn)(void *, void *))
{
	if (!list || !list->head)
		return 0;

	int i = 1;
	Node *pointer = list->head;
	while (pointer && !comparefn(el, pointer->el))
	{
		pointer = pointer->next;
		i++;
	}

	if (!pointer)
		return 0;

	*index = i;

	return 1;
}

void printList(List *list, void (*printfn)(void *))
{
	if (!list || !list->head)
		return;

	Node *pointer = list->head;
	while (pointer->next)
	{
		printfn(pointer->el);
		pointer = pointer->next;
	}
	printfn(pointer->el);

	printf("\n");
}
