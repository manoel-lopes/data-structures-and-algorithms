struct Node<T> {
    _next: Option<Box<Node<T>>>,
    _el: T,
}

pub struct LinkedList<T> {
    _head: Option<Box<Node<T>>>,
    _tail: Option<Box<Node<T>>>,
    len: i64,
}

impl<T> LinkedList<T> {
    pub fn new() -> Self {
        LinkedList {
            _head: None,
            _tail: None,
            len: 0,
        }
    }

    pub fn push(mut self, _el: T) -> Self {
        self.len += 1;
        self
    }

    pub fn len(self) -> i64 { 
        self.len
    }
}