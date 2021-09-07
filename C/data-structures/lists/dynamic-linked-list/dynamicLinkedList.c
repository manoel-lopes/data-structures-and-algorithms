#include <stdio.h>
#include <stdlib.h>
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
	while ((list->head))
	{
		pointer = list->head;
		list->head = list->head->next;
		free(pointer);
	}

	free(list);
	return 1;
}

int getListSize(List *list)
{
	if (!list)
		return -1;

	return list->length;
}

int isListEmpty(List *list)
{
	if (!list)
		return -1;

	if (list->length > 0)
		return 0;

	return 1;
}

int insertListFront(List *list, int el)
{
	if (!list)
		return 0;

	Node *node = createNode();

	if (!node)
		return 0;

	node->el = el;
	node->next = list->head;

	if (!list->head)
		list->tail = node;

	list->head = node;

	list->length++;
	return 1;
}

int insertListBack(List *list, int el)
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

int insertListInOrder(List *list, int el)
{
	if (!list)
		return 0;

	Node *node = createNode();

	if (!node)
		return 0;

	node->el = el;

	if (!list->head)
	{
		node->next = NULL;
		list->head = node;
	}
	else
	{
		Node *ancestor, *current = list->head;
		while (current && current->el < el)
		{
			ancestor = current;
			current = current->next;
		}

		// insert att first position
		if (current == list->head)
		{
			node->next = list->head;
			list->head = node;
		}
		else
		{
			node->next = current;
			ancestor->next = node;
		}
	}

	list->length++;
	return 1;
}

int removeListFront(List *list)
{
	if (!list || !list->head)
		return 0;

	Node *node = list->head;
	list->head = node->next;

	free(node);

	if (!list->head)
		list->tail = NULL;

	list->length--;
	return 1;
}

int removeListBack(List *list)
{
	if (!list || !list->head)
		return 0;

	Node *ancestor, *current = list->head;

	while (current->next)
	{
		ancestor = current;
		current = current->next;
	}

	// the list has only one element
	if (current == list->head)
	{
		list->head = NULL;
		list->tail = NULL;
	}
	else
	{
		ancestor->next = current->next;
		list->tail = ancestor;
	}

	free(current);
	list->length--;
	return 1;
}

int removeInList(List *list, int el)
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

	// remove the first element
	if (current == list->head)
		list->head = current->next;

	else
		ancestor->next = current->next;

	free(current);
	list->length--;
	return 1;
}

int searchListPosition(List *list, int position, int *el)
{
	if (!list || !list->head || position <= 0)
		return 0;

	Node *pointer = list->head;
	int i = 1;

	while (pointer && i < position)
	{
		pointer = pointer->next;
		i++;
	}

	if (!pointer)
		return 0;

	*el = pointer->el;
	return 1;
}

int searchListElement(List *list, int el, int *position)
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

	*position = i;
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