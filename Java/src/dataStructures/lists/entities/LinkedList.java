package dataStructures.lists.entities;

import dataStructures.lists.lib.List;

public class LinkedList<T> extends List<T> {

    public int push(T el) {
        count++;
        return size();
    }
}
