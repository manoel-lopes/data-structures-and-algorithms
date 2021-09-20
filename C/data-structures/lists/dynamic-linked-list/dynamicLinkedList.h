typedef struct list List;

List *createList();
int freeList(List *list);

int getListSize(List *list);
int isListEmpty(List *list);

int insertListFront(List *list, int el);
int insertListBack(List *list, int el);
int insertListInOrder(List *list, int el);

int removeListFront(List *list);
int removeListBack(List *list);
int removeInList(List *list, int el);

int searchListPosition(List *list, int position, int *el);
int searchListElement(List *list, int el, int *position);

int clearList(List *list);

int printList(List *list);