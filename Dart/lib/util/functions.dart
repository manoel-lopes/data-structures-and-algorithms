import '../data_structures/models/node.dart';

Node<T>? getNode<T>({
  required Node<T>? listHead,
  required int listLength,
  required int index}) {
  
  if (index >= 0 && index < listLength) {
    Node<T>? pointer = listHead;

    for (var i = 0; i < index && pointer != null; i++) {
      pointer = pointer.next;
    }

    return pointer;
  }
}
