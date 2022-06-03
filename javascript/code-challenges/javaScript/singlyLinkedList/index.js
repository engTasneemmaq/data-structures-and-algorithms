'use strict';
const linkedList = require ("../singlyLinkedList/linkedList")

const ll = new linkedList()
ll.insert(10)
ll.insert(20)

console.log(ll);
console.log(ll.includes(10));
console.log(ll.includes(50));
console.log(ll.toString());