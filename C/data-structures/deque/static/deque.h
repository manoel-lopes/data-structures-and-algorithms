typedef struct deque Deque;

Deque *createDeque();
int freeDeque(Deque *deque);

int getDequeSize(Deque *deque);
int isDequeEmpty(Deque *deque);
int isDequeFull(Deque *li);

int insertDequeFront(Deque *deque, int el);
int insertDequeBack(Deque *deque, int el);

int removeDequeFront(Deque *deque);
int removeDequeBack(Deque *deque);

int getDequeFront(Deque *deque, int *el);
int getDequeBack(Deque *deque, int *el);

int printDeque(Deque *deque);