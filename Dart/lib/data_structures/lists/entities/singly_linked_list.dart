import 'package:dart/util/interfaces/linked_list.dart';

import 'package:dart/data_structures/models/node.dart';

import 'package:dart/util/functions/get_node.dart';

class SinglyLinkedList<T> implements LinkedList<T> {
  Node<T>? _head;
  Node<T>? _tail;
  int _counter = 0;

  T? get head => _head?.el;

  T? get tail => _tail?.el;

  int get length => _counter;

  int push({required T el}) {
    final node = new Node(el: el);

    if (_head == null) {
      _head = node;
    } else {
      _tail?.next = node;
    }

    _tail = node;

    _counter++;
    return length;
  }

  Node<T>? _getNode({required int index}) {
    final node = getNode<T>(listHead: _head, listLength: _counter, index: index);
    return node;
  }

  int? insert({required T el, int index = 0}) {
    if (index >= 0 && index <= _counter) {
      final node = new Node(el: el);

      if (index == 0) {
        if (_head == null) {
          _head = node;
          _tail = node;
        } else {
          node.next = _head;
          _head = node;
        }
      } else if (index == length) {
        _tail!.next = node; //* new node
        _tail = node; //* update new node pointer

      } else {
        final ancestor = _getNode(index: index - 1)!;
        final current = ancestor.next;
        node.next = current;
        ancestor.next = node;
      }

      _counter++;
      return length;
    }
  }

  @override
  String toString() {
    var pointer = _head;

    if (pointer == null) {
      return '';
    }

    String str = pointer.el.toString();
    pointer = pointer.next;

    for (var i = 0; i <= length && pointer != null; i++) {
      str = str + ' -> ' + pointer.el.toString();
      pointer = pointer.next;
    }
    return str;
  }
}
