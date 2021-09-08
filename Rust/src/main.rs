#![allow(non_snake_case)]

mod lists;

use lists::LinkedList;

fn main() {
    let mut list = LinkedList::<i32>::new();
    list = list.push(1);
    list = list.push(2);
    list = list.push(3);
    println!("{}", list.len())
}
