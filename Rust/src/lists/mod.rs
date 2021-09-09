struct Node<T> {
    next: Option<Box<Node<T>>>,
    el: T,
}

impl<T> Node<T> {
    pub fn new(el: T) -> Self {
        Node { next: None, el: el }
    }
}

pub struct LinkedList<T> {
    head: Option<Box<Node<T>>>,
    tail: Option<Box<Node<T>>>,
    len: i64,
}


impl<T> LinkedList<T> {
    pub fn new() -> Self {
        LinkedList {
            head: None,
            tail: None,
            len: 0,
        }
    }


    pub fn push(mut self, el: T) -> Self {
        let mut node = Node::<T>::new(el);

        self.len += 1;
        self
        
    }

    pub fn len(self) -> i64 {
        self.len
    }
}
