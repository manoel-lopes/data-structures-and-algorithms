package dataStructures.lists.lib;

import dataStructures.models.Node;

public abstract class List<T> {

    protected int count = 0;
    protected Node<T> head = null;
    protected Node<T> tail = null;

    public int size() {
        return count;
    }

    public T getHead() {
        return head.el;
    }

    public T getTail() {
        return tail.el;
    }

    abstract public int push(T el);

    abstract public int add(int index, T el);

    abstract public T remove(int index);

    public int indexOf(T el) {
        int i = 0;
        return i;
    }

    public T get(int index) {
    }

    public void set(int index, T el) {
    }

    void clear() {
        head = null;
        tail = null;
        count = 0;
    }

    public String toString() {
    }
}
