export class Node<T> {
  constructor(
    public el: T,
    public next: Node<T> = null,
    public prev: Node<T> = null) {
  }
}
