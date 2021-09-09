use std::ptr;

// pub struct Node<T> {
//     el: T,
//     next: *mut Node<T>,
// }

// impl<T> Node<T> {
//     pub fn new(el: T) -> Self {
//         Node { el, next: ptr::null_mut() }
//     }
// }

// pub struct LinkedList<T> {
//     head: *mut Node<T>,
//     tail: *mut Node<T>,
//     len: u32,
// }

// impl<T> LinkedList<T> {
//     pub fn new() -> Self {
//         LinkedList {
//             head: ptr::null_mut(),
//             tail: ptr::null_mut(),
//             len: 0,
//         }
//     }

//     pub fn push(&mut self, el: T) {
//         let mut node = Node::<T>::new(el);
//         let ptr_node = ptr::addr_of_mut!(node);

//         if !self.head.is_null() {
//                 self.head = ptr_node;
//         } else {
//             unsafe {
//                 (*self.tail).next = ptr_node;
//             }
//         }

//         self.tail = ptr_node;
//         self.len += 1;
//     }

    // pub fn _pop(&mut self) -> Option<T> {
    //     self.head.take().map(|head| {
    //         let head = *head;
    //         self.head = head.next;

    //         if self.head.is_none() {
    //             self.tail = ptr::null_mut();
    //         }

    //         self.len -= 1;
    //         head.el
    //     })
    // }

    // pub fn len(self) -> u32 {
    //     self.len
    // }

    // pub fn _front_mut(&mut self) -> Option<&mut T> {
    //     self.head.as_mut().map(|node| &mut node.el)
    // }
}

// #[derive(Debug, Copy, Clone)]
// struct Node<T> {
//     el: T,
//     next: Option<Box<Node<T>>>,
// }

// impl<T> Node<T> {
//     pub fn new(el: T) -> Self {
//         Node { el, next: None }
//     }
// }

// pub struct LinkedList<T> {
//     head: Option<Node<T>>,
//     tail: Option<Node<T>>,
//     len: u64,
// }

// impl<T> LinkedList<T> {
//     pub fn new() -> Self {
//         LinkedList { head: None, tail: None, len: 0 }
//     }

//     pub fn len(&mut self) -> u64 {
//         self.len
//     }

//     pub fn push(&mut self, el: T) {
//         let node = Node::<T>::new(el);

//         match &mut self.head {
//             Some(head) => *head = node,
//             None => match &mut self.tail {
//                 Some(tail) => tail.next = Some(Box::new(node)),
//                 None => ()
//             }
//         }

//         match &mut self.tail {
//             Some(tail) => *tail = node,
//             None => ()
//         }

//     }
// }
