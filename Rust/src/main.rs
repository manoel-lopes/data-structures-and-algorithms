#![allow(non_snake_case)]

struct Node<T> {
    next: Option<Box<Node<T>>>,
    el: T,
}

struct LinkedList<T> {
    head: Option<Box<Node<T>>>,
    tail: Option<Box<Node<T>>>,
    len: i64,
}

impl<T> LinkedList<T> {
    pub fn new() -> LinkedList<T> {
        LinkedList {
            head: None,
            tail: None,
            len: 0
        }
    }

    // fn push(self, el: T) -> i64{

    //     match self{
    //         Some (self.head) => self.len,
    //         None => 0
    //     }
    // }
}

fn main() {
    let list = LinkedList::<i32>::new();
    println!("Hello, world!");
}
