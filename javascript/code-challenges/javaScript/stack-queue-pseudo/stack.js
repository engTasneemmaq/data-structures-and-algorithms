"use strict";

const Node = require("./node");


class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let node = new Node(value);
        if (!this.top) {
            this.top = node;
            node.next = null;
        }
        else {
            node.next = this.top;
            this.top = node;
            console.log(this.top.value);
        }
    }
    pop() {
        if(!this.top) throw new Error(" Can not pop() when Stack is empty! ")
        let top2 = this.top;
        this.top = this.top.next;
        return top2.value;
    }
    peek() {
        if (!this.top) throw new Error(" Can not peek() when Stack is empty! ")
        return this.top;
    }
  
}

module.exports = Stack;


// let newStack = new Stack();
// newStack.push(5);
// newStack.push(10)
// newStack.push(15)
// newStack.push(20)
// newStack.push(30)

// newStack.pop();


// console.log(newStack.peek())