"use strict";

const Node = require("./node");


class Stack {
    constructor() {
        this.top = null;
        this.length =0;
    }

    push(value) {
        let node = new Node(value);
        if (this.isEmpty()){
            this.top = node; 
            this.length += 1;
        } 
        
        else {
            node.next = this.top;
            this.top= node;
            this.length +=1;
        }
    }
      
    pop() {
        if(this.isEmpty()){
            console.log("No Node are lefts in the stack");
            return false;
        }
        const temp =this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length -= 1;
        return temp.value;
    }
       

    peek() {
        if (this.isEmpty()){
            return "no node in the stack";
        }
        else{
    // throw new Error(" Can not peek() when Stack is empty! ");
    return this.top.value;
        }
    }

    isEmpty(){
        if(!this.top) {
            console.log(true)
             return true;
        }
        else {
            console.log(false);
            return false;}
        }
    
}



module.exports = Stack;