export class DoublyNode<T> {
  constructor(
    public el: T,
    public next: DoublyNode<T> = null,
    public prev: DoublyNode<T> = null
  ) {}
}
