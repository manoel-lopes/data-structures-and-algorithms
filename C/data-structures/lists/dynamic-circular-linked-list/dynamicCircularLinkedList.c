#include <stdio.h>
#include <stdlib.h>
#include "dynamicCircularLinkedList.h"

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
	node->next = node;

	if (list->head == NULL)
	{
		list->head = node;
		list->tail = node;
	}
	else
	{
		node->next = list->head;
		list->tail->next = node;
		list->head = node;
	}

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
	node->next = node;

	if (!list->head)
	{
		list->head = node;
		list->tail = node;
	}
	else
	{
		list->tail->next = node;
		node->next = list->head;
		list->tail = node;
	}

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
		list->head = node;
		node->next = node;

		list->length++;
		return 1;
	}

	else
	{
		if (list->head->el > el)
		{
			Node *pointer = list->head;
			while (pointer->next != list->head)
				pointer = pointer->next;
			node->next = list->head;
			pointer->next = node;

			list->length++;
			return 1;
		}

		Node *ancestor, *current = list->head->next;
		while (current != list->head && current->el < el)
		{
			ancestor = current;
			current = current->next;
		}

		ancestor->next = node;
		node->next = current;

		list->length++;
		return 1;
	}
}

int removeListFront(List *list)
{
	if (!list || !list->head)
		return 0;

	Node *pointer = list->head;
	list->tail->next = list->head->next;
	list->head = list->head->next;

	free(pointer);
	list->length--;
	return 1;
}

int removeListBack(List *list)
{
	if (!list || !list->head)
		return 0;

	Node *ancestor, *current = list->head;

	while (current->next != list->head)
	{
		ancestor = current;
		current = current->next;
	}

	ancestor->next = list->head;
	list->tail = ancestor;

	free(current);
	list->length--;
	return 1;
}

int removeInList(List *list, int el)
{
	if (!list || !list->head)
		return 0;

	Node *pointer = list->head;
	if (pointer->el == el)
	{
		if (pointer == pointer->next)
		{
			free(pointer);
			list->head = NULL;
			list->tail = NULL;

			list->length--;
			return 1;
		}
		else
		{
			list->tail->next = list->head->next;
			list->head = list->head->next;

			free(pointer);
			list->length--;
			return 1;
		}
	}

	Node *ancestor = pointer, *current = pointer->next;
	while (current != list->head && current->el != el)
	{
		ancestor = current;
		current = current->next;
	}

	if (current == list->head)
		return 0;

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
	while (pointer->next != list->head && pointer)
	{
		printf("%d -> ", pointer->el);
		pointer = pointer->next;
	}

	printf("%d", pointer->el);
	printf(" -> %d", pointer->next->el);

	return 1;
}