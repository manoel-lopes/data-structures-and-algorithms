typedef struct stack Stack;

Stack *createStack();
int freeStack(Stack *stack);

int getStackSize(Stack *stack);
int isStackEmpty(Stack *stack);
int isStackFull(Stack *stack);

int insertInStack(Stack *stack, int el);

int removeInStack(Stack *stack);

int getStackTop(Stack *stack, int *el);

int printStack(Stack *stack);