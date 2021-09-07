package dataStructures.lists;

import java.util.Scanner;

import dataStructures.lists.lib.List;
import dataStructures.lists.entities.LinkedList;

public class Program {
    public static void main(String[] args) throws Exception {

        Scanner sc = new Scanner(System.in);
        int option;

        final List<Integer> list = new LinkedList<Integer>();
        System.out.println(list.push(1));
        System.out.println(list.push(2));

        do {
            System.out.println("\nMenu:");
            System.out.println("1  - Insert element in the front");
            System.out.println("2  - Insert element in the end");
            System.out.println("3  - Insert element (any position)");
            System.out.println("4  - Remove element in the front");
            System.out.println("5  - Remove element in the end");
            System.out.println("6  - Remove element (any)");
            System.out.println("7  - Get quantity of elements in the list");
            System.out.println("8  - Get element by index");
            System.out.println("9  - Get index by element");
            System.out.println("10 - Change element");
            System.out.println("11 - Print list");
            System.out.println("12 - Clear list");
            System.out.println("13 - Finish");
            System.out.print("Option: ");
            option = sc.nextInt();

            if (option == 1) {
                System.out.println(option);

            } else if (option == 13)
                System.out.println("\nFinishing...");

            else
                System.out.println("\nInvalid Option!");

        } while (option != 13);
        sc.close();
    }
}
