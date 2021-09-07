package dataStructures.lists.entities;

import dataStructures.lists.lib.List;
import dataStructures.models.DoublyNode;

public class DoublyLinkedList<T> extends List<T> {

    protected DoublyNode<T> head;
    protected DoublyNode<T> tail;
    
    public int push(T el) {
        return size();
    }
}
