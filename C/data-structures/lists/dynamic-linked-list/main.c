#include <stdio.h>
#include <stdlib.h>
#include "dynamicLinkedList.h"

void createElement(int *el);
int toInt(void *value);
void print(void *el);

int main()
{

  List *list = createList(sizeof(int));

  int el = 1;
  push(list, &el);
  el = 2;
  push(list, &el);
  el = 0;
  insert(list, &el, 1);

  printList(list, print);

  // printf("\n%d\n", ok);

  // List *list = NULL;
  // int option, el, ok, index;

  // list = createList(sizeof(int));

  // if (list)
  // {
  //   do
  //   {
  //     printf("\n\nMenu:");
  //     printf("\n1  - Insert element at front");
  //     printf("\n2  - Insert element at back");
  //     printf("\n3  - Insert element (any index)");
  //     printf("\n4  - Remove element at front");
  //     printf("\n5  - Remove element at back");
  //     printf("\n6  - Remove element");
  //     printf("\n7  - Get list length");
  //     printf("\n8  - Get element by index");
  //     printf("\n9  - Get index by element");
  //     printf("\n10 - Change element");
  //     printf("\n11 - Print list");
  //     printf("\n12 - Clear list");
  //     printf("\n13 - Finish");
  //     printf("\nOption: ");
  //     scanf("%d", &option);

  //     if (option == 1)
  //     {
  //       printf("\n");
  //       createElement(&el);
  //       ok = insert(list, el, 1);

  //       if (ok)
  //       {
  //         printf("\n");
  //         printList(list);
  //       }

  //       else
  //         printf("\nError inserting the element!");
  //     }

  //     else if (option == 2)
  //     {
  //       printf("\n");
  //       createElement(&el);
  //       ok = push(list, el);

  //       if (ok)
  //       {
  //         printf("\n");
  //         printList(list);
  //       }

  //       else
  //         printf("\nError inserting the element!");
  //     }

  //     else if (option == 3)
  //     {
  //       printf("\nType the index: ");
  //       scanf("%d", &index);

  //       createElement(&el);
  //       ok = insert(list, el, index);

  //       if (ok)
  //       {
  //         printf("\n");
  //         printList(list);
  //       }

  //       else
  //         printf("\nError inserting the element!");
  //     }

  //     else if (option == 4)
  //     {
  //       ok = getHead(list, &el);

  //       if (ok)
  //       {
  //         ok = delete (list, el);

  //         if (ok)
  //         {
  //           if (!len(list))
  //             printf("\nThe list is empty!");

  //           else
  //           {
  //             printf("\n");
  //             printList(list);
  //           }
  //         }
  //       }

  //       else
  //         printf("\nError removing the element!");
  //     }

  //     else if (option == 5)
  //     {
  //       ok = getTail(list, &el);

  //       if (ok)
  //       {

  //         ok = delete (list, el);

  //         if (ok)
  //         {
  //           if (!len(list))
  //             printf("\nThe list is empty!");

  //           else
  //           {
  //             printf("\n");
  //             printList(list);
  //           }
  //         }
  //       }

  //       else
  //         printf("\nError removing the element!");
  //     }

  //     else if (option == 6)
  //     {
  //       printf("\nType the element to be remove: ");
  //       scanf("%d", &el);

  //       ok = delete (list, el);

  //       if (ok)
  //       {
  //         if (!len(list))
  //           printf("\nThe list is empty!");

  //         else
  //         {
  //           printf("\n");
  //           printList(list);
  //         }
  //       }

  //       else
  //         printf("\nError removing the element!");
  //     }

  //     else if (option == 7)
  //     {
  //       if (!len(list))
  //         printf("\nThe list is empty!");

  //       else
  //         printf("\nQuantity of elements in the list: %d", len(list));
  //     }

  //     else if (option == 8)
  //     {
  //       printf("\nType the index: ");
  //       scanf("%d", &index);

  //       ok = getElementAt(list, index, &el);

  //       if (ok)
  //         printf("\nElement at index %d: %d", index, el);

  //       else
  //         printf("\nIndex out of range!");
  //     }

  //     else if (option == 9)
  //     {
  //       printf("\nType the element: ");
  //       scanf("%d", &el);

  //       ok = indexOf(list, el, &index);

  //       if (ok)
  //         printf("\nElement at index %d: %d", index, el);

  //       else
  //         printf("\nElement not found!");
  //     }

  //     else if (option == 10)
  //     {
  //       if (!len(list))
  //         printf("\nThe list is empty!");

  //       else
  //       {
  //         printf("\n");
  //         printList(list);
  //       }
  //     }

  //     else if (option == 11)
  //     {
  //       ok = clear(list);

  //       if (ok)
  //         printf("\nList cleared with success!");

  //       else
  //         printf("\nError clearing the list!");
  //     }

  //     else if (option == 12)
  //     {
  //       ok = freeList(list);

  //       if (ok)
  //       {
  //         printf("\nList freed with success!");
  //         printf("\nFinishing...\n");
  //       }

  //       else
  //         printf("\nError freeding the list!");
  //     }

  //     else
  //       printf("\nInvalid Option!");
  //   } while (1);

  //   return 0;
  // }
}

void createElement(int *el)
{
  printf("Type the element: ");
  scanf("%d", el);
}

int toInt(void *value) { return *((int *)value); }

void print(void *el) { printf("%d -> ", toInt(el)); }