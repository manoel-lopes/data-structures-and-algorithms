export class Node<T> {
  public next: Node<T>
  constructor(public el: T) {
    this.next = null
  }
}
