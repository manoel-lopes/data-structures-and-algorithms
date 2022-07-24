package node

type Node struct {
	El   any
	Next *Node
}

func New[T any](el T) *Node {
	return &Node{El: el}
}
