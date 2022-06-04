"use strict"

const LinkedList = require ('./linkedList')

const ll = new LinkedList();
    ll.insert(100);
    ll.insert(200);
    ll.insert(300);
    ll.insert(400);
    ll.print();      result:100,200,300,400
    ll.removeHead();    result:200,300,400
    ll.includes(500);

    console.log(ll);
    console.log(ll.includes(500));
    console.log(ll.includes(300));
    console.log(ll.toString());