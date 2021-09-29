import 'package:dart/util/interfaces/linked_list.dart';

import 'entities/singly_linked_list.dart';

void main() {
  final LinkedList<int> linkedList = new SinglyLinkedList<int>();
  linkedList.push(el: 1);
  print(linkedList.length);

  // linkedList.insert(el: 1);
  linkedList.insert(el: 0);
  print(linkedList.length);
  // linkedList.insert(el: 2, index: 2);
  // linkedList.insert(el: 4, index: 3);

  // linkedList.insert(el: 3, index: 3);
  print(linkedList);
}
