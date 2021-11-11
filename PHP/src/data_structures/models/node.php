<?php

class Node
{
    public $next;
    public function __construct(
        public mixed $el
    ) {
        $this->next = null;
    }
}
