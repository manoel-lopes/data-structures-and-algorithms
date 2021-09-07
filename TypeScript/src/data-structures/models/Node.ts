export class Node<T> {
  constructor(
    public el: T,
    public next: Node<T> = null) {
  }
}
