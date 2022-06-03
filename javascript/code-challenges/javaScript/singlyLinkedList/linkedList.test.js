'use strict';

const LinkedList = require('../singlyLinkedList/linkedList');

describe("link list", () => {
    test("create a linklist", () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    })
    test("insert to the linklist ", () => {
        let ll = new LinkedList();
        ll.insert(10);
        expect(ll.head.value).toBe(10);
        ll.insert(20);
        expect(list.head.value).toBe(20);
       
    })
    test("The head point to the first node in the linked list",() => {
        let ll = new LinkedList();
        ll.insert(10);
        ll.insert(20);
        expect(ll.head.value).toBe(20);

    });
    test("Can properly insert multiple nodes into the linked list",() => {
        let ll = new LinkedList();
        ll.insert(10);
       
        expect(ll.head.value).toBe(10);
        ll.insert(20);
        expect(ll.head.value).toBe(20);

    });
    test("return true when finding a value within the linked list that exists",() => {
        let ll = new LinkedList();
        ll.insert(10);
        ll.insert(20);
        expect(ll.includes(20)).toBe(true);


    });
    test("return false when searching for a value in the linked list that does not exist",() => {
        let ll = new LinkedList();
        ll.insert(10);
        ll.insert(20);
        expect(ll.includes(50)).toBe(false);
    });

    test("Can properly return a collection of all the values that exist in the linked list",() => {

        let ll = new LinkedList();
        ll.insert(10);
        ll.insert(20);
        expect(ll.toString()).toBe("{20} -> {10} -> NULL");
    });

})