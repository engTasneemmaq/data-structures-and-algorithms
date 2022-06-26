"use strict";

const Node = require("./node");

class Queue {
    constructor() {
        // front >>> first node of the que
        // rear  >>> last node of the que
        this.front = null;     
        this.rear = null; 
        this.length =0;    
    }


    // enqueue insert que  adding to the rear
    enqueue(value) { 
        // i do care only about the rear
        const node = new Node(value);
        if(this.isEmpty()){
            this.front = node;
            this.rear = node;
            this.length +=1; 
        }
       else  {
         this.rear.next = node;
            this.rear = node;
            this.length +=1;
        }
         }
            
            // dequeue remove que from the front 
     dequeue() {   
        // i do care only about the front
        if(this.isEmpty()){
            return "the queue is empty";
        }
        else {    
            const temp = this.front ;
            this.front =this.front.next;
            temp.next=null;
            this.length -=1;
            return temp.value;

        }
    }

    peek() {
         // i do care only about the front
        if(this.isEmpty()){
            return "the queue is empty";
        }
        return this.front.value;
    }

    isEmpty() {
        if (this.front=== null || !this.rear===0) return true;
        else{
       return false; 
    }      
    }



}


module.exports = Queue;