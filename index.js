"use strict"

const LinkedList = require ('./javascript/code-challenges/javaScript/linked-list-insertions/linked-list-insertions')

const ll = new LinkedList();
ll.insert(1);
ll.insert(3);
ll.insert(2);
ll.append(100);   
ll.insertBefore(3,101);
ll.insertAfter(2,99);
ll.insertLastNode(500);

    ll.toString();

   



    