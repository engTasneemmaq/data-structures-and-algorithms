'use strict';

const LinkedList = require('../linkedList');

describe("link list", () => {

    test("Can successfully instantiate an empty linked list ", () => {
        let ll = new LinkedList();
        expect(ll.head).toBeNull();
    })
 
    // test("Can properly insert into the linked list",() => {
    //     let ll = new LinkedList();
    //     ll.insert(100);
    //     expect(ll.head.value).toBe(100);

    // });
    // test("The head property will properly point to the first node in the linked list",() => {
    //     let ll = new LinkedList();
    //     ll.insert(100);
    //     ll.insert(200);
    //     expect(ll.head.value).toBe(100);

    // });
    // test("Will return true when finding a value within the linked list that exists",() => {
    //     let ll = new LinkedList();
    //     ll.insert(100);
    //     ll.insert(200);
    //     expect(ll.includes(200)).toBe(true);


    // });
    // test("Will return false when searching for a value in the linked list that does not exist",() => {
    //     let ll = new LinkedList();
    //     ll.insert(100);
    //     ll.insert(200);
    //     expect(ll.includes(600)).toBe(false);
    // });

    // test("Can properly return a collection of all the values that exist in the linked list",() => {

    //     let ll = new LinkedList();
    //     ll.insert(100);
    //     ll.insert(200);
    //     expect(ll.toString()).toBe("{100} -> {200} -> NULL");
    // });

})