'use strict';
const Node = require('./node');

class Linkedlist {
  constructor() {
    this.head = null;
  }
  
  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
     
      return this;
    } else {
      newNode.next = this.head;
      this.head = newNode;
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

module.exports = Linkedlist;