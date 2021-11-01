typedef struct node
{
	void *el;
	struct node *next;
	struct node *prev;
} Node;

Node *createNode();