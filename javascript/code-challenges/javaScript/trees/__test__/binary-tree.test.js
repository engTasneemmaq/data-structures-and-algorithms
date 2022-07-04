"use strict";

const BinaryTree = require("../binary-tree");
const Node = require("../node");
const BinarySearchTree = require("../binary-search-tree");

let tree = null;

describe('Binary Tree', () => {
    let tree;
  
    beforeAll(() => {
            let one = new Node(1);
            let two = new Node(2);
            let three = new Node(3);
            let four = new Node(4);
            let five = new Node(5);
            let six = new Node(6);
            let seven = new Node(7);
            let eight = new Node(8);
            let nine = new Node(9);
    
            one.left = two;
            one.right = three;
            two.left = six;
            six.right = seven;
            seven.left = eight;
            seven.right = nine;
            three.left = four;
            three.right = five;
    
            tree = new BinaryTree(one);
    });


it ("Can successfully instantiate an empty tree" , ()=> {
    const tree = new BinaryTree();
    expect(tree.root).toBe(null);

});

it ("Can successfully instantiate a tree with a single root node" , ()=>{
    const one = new Node(1);
    const tree = new BinaryTree(one);
    expect(tree.root.value).toBe(1);

});

it('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    one.left = two;
    one.right = three;
    const tree = new BinaryTree(one);
    expect(tree.root.left.value).toBe(2);
    expect(tree.root.right.value).toBe(3);
  });

  it('constructor', () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
    expect(tree.root.value).toEqual(1);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual([1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5]);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    const inOrder = tree.inOrder();
    expect(inOrder).toEqual([6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    const postOrder = tree.postOrder();
    expect(postOrder).toEqual([8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1]);
  });

  it('Can successfully add a left child and right child to a tree', () => {
    const BTS = new BinarySearchTree();
    BTS.Add(15);
    BTS.Add(17);
    BTS.Add(5);

    expect(BTS.root.value).toEqual(15);
    expect(BTS.root.left.value).toEqual(5);
    expect(BTS.root.right.value).toEqual(17);
  });
   
  it(  "test max node in binary search tree", () => {
    let max_value= tree.max_value();
    expect(max_value).toEqual(9);
  });

});