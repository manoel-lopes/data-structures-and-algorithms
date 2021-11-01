typedef struct list List;

List *createList(int TYPE_SIZE);
int freeList(List *list);

int getHead(List *list, void *el);
int getTail(List *list, void *el);

int len(List *list);

int insert(List *list, void *el, int index);
int push(List *list, void *el);

// int delete(List *list, int el);

int indexOf(List *list, void *el, int *index, int (*comparefn)(void *, void *));
int getElementAt(List *list, int index, void *el);
int setElementAt(List *list, int index, void *el);

void printList(List *list, void (*printfn)(void *));

int clear(List *list);
