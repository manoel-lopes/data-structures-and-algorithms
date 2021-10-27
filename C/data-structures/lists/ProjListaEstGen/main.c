#include <stdio.h>
#include <stdlib.h>
#include "ListaEstGen.h"

typedef struct
{
    int matriculation;
    char name[30];
    float grade1, grade2, grade3;
} Student;

void printStudent(void *info)
{
    Student *student = info;
    printf("Matriculation: %d\n", student->matriculation);
    printf("Name: %s\n", student->name);
    printf("Grades: %.2f %.2f %.2f\n", student->grade1, student->grade2, student->grade3);
    printf("-------------------------------\n");
}

int main()
{
    Student students[4] = {{2, "Andre", 9.5, 7.8, 8.5},
                           {4, "Ricardo", 7.5, 8.7, 6.8},
                           {1, "Zuleide", 9.7, 6.7, 8.4},
                           {3, "Ana", 5.7, 6.1, 7.4}};

    List *list = createList(sizeof(Student));

    for (int i = 0; i < 4; i++)
        insertInList(list, students[i].matriculation, &students[i]);

    printList(list, printStudent);
    printf("\n\n");

    Student student;
    searchInList(list, 2, &student);
    printf("Search:\n");
    printf("-------------------------------\n");
    printStudent(&student);
    printf("\n\n");

    printf("Remove Key 2:\n");
    printf("-------------------------------\n");
    removeInList(list, 2);
    printList(list, printStudent);
    printf("\n\n");

    freeList(list);

    return 0;
}
