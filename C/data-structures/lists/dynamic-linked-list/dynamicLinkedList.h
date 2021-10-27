typedef struct list List;

List *createList(int TYPE_SIZE);
// int freeList(List *list);

// int getHead(List *list, int *el);
// int getTail(List *list, int *el);

int len(List *list);
// int isEmpty(List *list);

int insert(List *list, void *el, int index);
int push(List *list, void *el);

// int delete(List *list, int el);

// int indexOf(List *list, int el, int *index);
// int getElementAt(List *list, int index, int *el);
// int setElementAt(List *list, int index, int *el);

void printList(List *list, void (*printfn)(void *));

// int clear(List *list);
