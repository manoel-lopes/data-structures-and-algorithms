typedef struct list List;

List *createList();
int freeList(List *list);

int getListHead(List *list, int *el);
int getListTail(List *list, int *el);
int getListLength(List *list);
int isListEmpty(List *list);

int insertInList(List *list, int el, int position);
int insertListBack(List *list, int el);

int removeListFront(List *list);
int removeListBack(List *list);
int removeInList(List *list, int el);

int searchListPosition(List *list, int position, int *el);
int searchListElement(List *list, int el, int *position);

int clearList(List *list);

int printList(List *list);