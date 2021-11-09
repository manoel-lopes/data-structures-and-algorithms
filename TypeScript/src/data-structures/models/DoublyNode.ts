export class DoublyNode<T> {
  public next: DoublyNode<T>
  public prev: DoublyNode<T>
  constructor(public el: T) {
    this.next = null
    this.prev = null
  }
}
