"use strict"

const PseudoQueue =require("./code-challenges/javaScript/stack-queue-pseudo/pseudo-queue");
const Stack = require("./code-challenges/javaScript/stack-queue-pseudo/stack");

let newStack = new Stack();
newStack.push(5);
newStack.push(10)
newStack.push(15)
newStack.push(20)
newStack.push(30)

newStack.pop();


console.log(newStack.peek())

let que = new PseudoQueue();
que.enqueue(15);
que.enqueue(20);
que.dequeue();
que.dequeue();
let result = que.stack1
console.log("result", result);






// "use strict"

// const Stack = require ('./code-challenges/javaScript/stack-queue/stack')

// const stack = new Stack();
// stack.push(4);
// stack.print(4);
// stack.push(8);
// // console.log(stack.peek());
// stack.print(8);
// stack.push(16);
// stack.print(16);
// stack.push(32);


// const Queue = require("./code-challenges/javaScript/stack-queue/queue/queue")

// const que = new Queue();
// que.enqueue(1);
// que.enqueue(2);
// que.enqueue(3);
// console.log("front is",que.peek());  
// // result 1
// que.dequeue();
// console.log("front is" ,que.peek());  
// // result 2









// const llOne =new LinkedList();
// const llTwo =new LinkedList();
// llOne.insert(1)
// llOne.insert(3)
// llOne.insert(2)
// llTwo.insert(5);
// llTwo.insert(9);
// llTwo.insert(4);
// llOne.toString();
// llTwo.toString();


// function zipLists(llOne, llTwo){

//     let current_1 = llOne.head;
//     let current_2 = llTwo.head;
//     let newList = new LinkedList();
//     if (current_1) newList.head = current_1;
//     else if (current_2) newList.head = current_2;
//     else throw new Error(`Can NOT zip two empty linked list`);
  
//     while (current_1 && current_2){
//       let temp_1 = current_1.next;
//       let temp_2 = current_2.next;
//       current_1.next = current_2;
//       if (temp_1) current_2.next = temp_1;
  
//       current_1 = temp_1;
//       current_2 = temp_2;
  
//     }
//     console.log("after linked list merge>>");
//     newList.toString()
//     return newList;
//   }
//   zipLists(llOne, llTwo);






  
    