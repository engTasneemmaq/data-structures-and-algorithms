"use strict"
const Node = require ("./node")

class LinkedList {
    constructor(){
        this.head= null;
        this.tail = null;
        this.length=0;
    }
    
    // insert node
    insert(value){
        this.length++;
        const newNode = new Node(value);
        // test if LL is empty or not
        if(!this.head){
            this.head=newNode;
            return this;
        }
        else{
            // if the LL not empty 
            let currentNode =this.head;
            while (currentNode.next) {
                // moving my nodes i'm changing the current node . next with the new one until i reach .next is null 
                currentNode = currentNode.next; 
            }
            currentNode.next= newNode;
            return this;
        }
    }
    //  print node
    print() {
        let currentNode = this.head;
        while (currentNode) {
          console.log(currentNode.value);
          currentNode = currentNode.next;
        }
      }
    
    // remove node
    removeHead() {
        if (this.head) {
          this.length--;
          const removedNode = this.head;
          this.head = this.head.next;
          return removedNode;
        }
        return undefined;
      }
    //   includes node {if node exist or not}
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

    //  toString 
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

module.exports= LinkedList;