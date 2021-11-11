<?php

require_once(dirname(__FILE__, 3) . '/models/node.php');

class LinkedList
{
    protected $length = 0;
    protected ?Node $head = null;
    protected ?Node $tail = null;

    public function __get($head)
    {
        return $this->$head?->el;
    }

    public function push(mixed $el)
    {
        $node = new Node($el);

        if (!$this->head)
            $this->head = $node;
        else
            $this->tail->next = $node;

        $this->tail = $node;

        $this->length++;
        return $this->length;
    }

    // get length() {
    //   return this._length
    // }

    // get head() {
    //   if (this._head) {
    //     return this._head.el
    //   }
    // }

    // get tail() {
    //   if (this._tail) {
    //     return this._tail.el
    //   }
    // }
}

$list = new LinkedList();
$head = $list->head === null ? 'null' : $list->head;
echo "Head: {$head}\n";
$list->push(1);
$head = $list->head === null ? 'null' : $list->head;
echo "Head: {$head}\n";
// echo $list->head;
