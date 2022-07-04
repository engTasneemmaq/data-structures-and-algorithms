'use strict';

const Node = require('./node');

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  Add(value) {
    let current = this.root;
    if (!current) {
      this.root = new Node(value);
    }
    else {
      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = new Node(value);
            break;
          }
          current = current.left;
        }
        else {
          if (!current.right) {
            current.right = new Node(value);
            break;
          }
          current = current.right;
        }
      }
    }
  }

  Contains(value) {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  
}

module.exports = BinarySearchTree;




// let bst = new BST(1);
// // let add = bst.add();

// bst.add(2);
// bst.add(3);
// bst.add(4);
// bst.add(5);
// bst.add(6);
// bst.add(7);
// bst.add(8);
// bst.add(9);


// bst.contains(7);
// bst.contains(66);


let BTS = new BinarySearchTree();

BTS.Add(9);
BTS.Add(11);
BTS.Add(6);
BTS.Add(15);
BTS.Add(12);
BTS.Add(4);
BTS.Add(20);

console.log(BTS.Contains(6));
console.log(BTS.Contains(15));
console.log(BTS.Contains(50));
