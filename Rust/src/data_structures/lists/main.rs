#![allow(non_snake_case)]

mod entities;

use entities::LinkedList;

fn main() {
    let mut list = LinkedList::<i32>::new();
    // list.push(1);
    // list.push(2);
    // list = list.push(3);
    println!("{}", list.len())
}
