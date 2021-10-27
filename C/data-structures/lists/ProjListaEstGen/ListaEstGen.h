#define MAX 100

typedef struct list List;

List* createList(int SIZE_TYPE);

void freeList(List* li);

int searchInList(List* li, int key, void *dados);

int insertInList(List* li, int key, void *dados);

int removeInList(List* li, int key);

void printList(List* li, void (*printfn)(void *));

