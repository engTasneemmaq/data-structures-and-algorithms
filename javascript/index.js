
"use strict"

const LinkedList = require ('./code-challenges/javaScript/linked-list-zip/linkedList')

const llOne =new LinkedList();
const llTwo =new LinkedList();
llOne.insert(1)
llOne.insert(3)
llOne.insert(2)
llTwo.insert(5);
llTwo.insert(9);
llTwo.insert(4);
llOne.toString();
llTwo.toString();


function zipLists(llOne, llTwo){

    let current_1 = llOne.head;
    let current_2 = llTwo.head;
    let newList = new LinkedList();
    if (current_1) newList.head = current_1;
    else if (current_2) newList.head = current_2;
    else throw new Error(`Can NOT zip two empty linked list`);
  
    while (current_1 && current_2){
      let temp_1 = current_1.next;
      let temp_2 = current_2.next;
      current_1.next = current_2;
      if (temp_1) current_2.next = temp_1;
  
      current_1 = temp_1;
      current_2 = temp_2;
  
    }
    console.log("after linked list merge>>");
    newList.toString()
    return newList;
  }
  zipLists(llOne, llTwo);






  
    