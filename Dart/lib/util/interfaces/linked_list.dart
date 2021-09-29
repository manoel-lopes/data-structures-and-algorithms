abstract class LinkedList<T> {
  int get length;

  T? get head;

  T? get tail;

  int push({required T el});

  int? insert({required T el, int index = 0});
}
