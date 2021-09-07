package node

type Node struct {
	El   int
	Next *Node
}

func New(el int) *Node {
	return &Node{El: el}
}
