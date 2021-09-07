typedef struct queue Queue;

Queue *createQueue();
int freeQueue(Queue *queue);

int getQueueSize(Queue *queue);
int isQueueEmpty(Queue *queue);

int insertInQueue(Queue *queue, int el);

int removeInQueue(Queue *queue);

int getQueueFront(Queue *queue, int *el);

int printQueue(Queue *queue);