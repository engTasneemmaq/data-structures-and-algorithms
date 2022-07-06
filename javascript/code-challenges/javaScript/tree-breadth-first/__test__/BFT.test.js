'use strict';
const BinaryTree = require('../breadth-first');
const Node = require("../../trees/node")
let tree = null;

describe("Breadth fisrt ", () => {
    test('breadthFirst method', () => {

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

      let result=[ 5,  3,  1, 12, 0,45, 67, 33, 10]
        let res =tree.breadthFirst()
        expect(res).toEqual(result);

    });

  })