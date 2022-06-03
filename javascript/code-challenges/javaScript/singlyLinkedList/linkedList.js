'use strict';
const linkedListNode = require('../singlyLinkedList/linkedListNode');

class LinkedList {
  constructor() {
    this.head  = null;
  } 

  insert(data) {
    let newNode = new linkedListNode(data , this.head);
    this.head = newNode;
    if (!this.head) {
      this.head = newNode;
      return this;
  }
  else {
      // if the LL is not empty
      let currentNode = this.head;
      while (currentNode.next) {
          currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      return this;
  }
}
includes(value) {
  let isIncludes = false;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        isIncludes = true;
      }

      currentNode = currentNode.next;
    }
    return isIncludes;
  }

  toString() {
    let currentNode = this.head;
    let str = "";
    while (currentNode) {
      str += `{${currentNode.value}} -> `;
      if (!currentNode.next) str += "NULL";
      currentNode = currentNode.next;
    }
    return str;
  }
}

module.exports = LinkedList;