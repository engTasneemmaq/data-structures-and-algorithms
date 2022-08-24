"use strict";
const Node = require('./node');


class BinaryTree {
    constructor (root =null){
        this.root= root;
    }

    // root - left - right
preOrder (){
let result = [];
let traverse = (node) =>{
     result.push (node.value);

    //  if left go left
    if(node.left) traverse (node.left)

    //  if right go right
    if(node.right) traverse (node.right)
}
traverse(this.root);

return result;
}
// left - root - right 
inOrder (){
    let result = [];
    let traverse = (node) =>{
        
        //  if left go left
        if(node.left) traverse (node.left)
        
        result.push (node.value);

        //  if right go right
        if(node.right) traverse (node.right)
    }
    traverse(this.root);
    
    return result;

}
// left - right - root
postOrder (){
let result = [];
let traverse = (node) =>{
    
    //  if left go left
    if(node.left) traverse (node.left)
    
    //  if right go right
    if(node.right) traverse (node.right)
    result.push (node.value);
}
traverse(this.root);

return result;
}


max_value(){
    let max = 0 ;
    let traverse = (node) =>{
        
        //  if left go left
        if(node.left) traverse (node.left);
        //  if right go right
        if(node.right) traverse (node.right)
       
        if (node.value > max ) max= node.value;

    }
    traverse(this.root);
    
    return max;
}


}


    // function sumOdd(node, sum = 0) {
    //     if (node === null) {
    //         return 0;
    //     } else {
    //         if (node.value % 2 != 0) {
    //             sum += node.value;
    //         }
    //     }
    //     return sum + sumOdd(node.left) + sumOdd(node.right);
    // }
    // return sumOdd(BinaryTree.root);


module.exports = BinaryTree;



let tree = null;

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


let preOrder = tree.preOrder();
console.log('pre order: ', preOrder);
//pre order > 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5

let inOrder = tree.inOrder();
console.log('in order: ', inOrder);
//in order > 6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5


let postOrder = tree.postOrder();
console.log('post order: ', postOrder);
//post order > 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1


let max_value= tree.max_value();
console.log("max value", max_value);









