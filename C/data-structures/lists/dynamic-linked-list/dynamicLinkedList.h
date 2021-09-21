typedef struct list List;

List *createList();
int freeList(List *list);

int getHead(List *list, int *el);
int getTail(List *list, int *el);

int len(List *list);
int isEmpty(List *list);

int insert(List *list, int el, int index);
int push(List *list, int el);

int delete(List *list, int el);

int indexOf(List *list, int el, int *index);
int getElementAt(List *list, int index, int *el);
int setElementAt(List *list, int index, int *el);

int printList(List *list);

int clear(List *list);
