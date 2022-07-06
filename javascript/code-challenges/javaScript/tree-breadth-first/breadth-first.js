'use strict';
const Node = require("../trees/node")

class BinaryTree {
  constructor(root = null) {
      this.root = root;
  }


  breadthFirst() {
let result = [];
let queue=[];
let current = this.root;
queue.push(current);

while(queue.length){
current=queue.shift();
result.push(current.value);
if(current.left) queue.push(current.left);
if(current.right) queue.push(current.right);
    }
return result;
  }
}

let tree = null;

let one = new Node(5);
let two = new Node(3);
let three = new Node(1);
let four = new Node(0);
let five = new Node(45);
let six = new Node(12);
let seven = new Node(67);
let eight = new Node(33);
let nine = new Node(10);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

tree = new BinaryTree(one);

console.log(tree.breadthFirst())

// result [ 5,  3,  1, 12, 0,45, 67, 33, 10]

module.exports = BinaryTree;