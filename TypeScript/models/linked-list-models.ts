export class Node<T> {
  constructor(
    public el: T,
    public next: Node<T> = null) {
  }
}

export class DoublyNode<T> {
  constructor(
    public el: T,
    public prev: DoublyNode<T> = null,
    public next: DoublyNode<T> = null) {
  }
}
