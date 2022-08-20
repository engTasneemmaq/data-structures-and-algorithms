"use strict"

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    // returning the all the values  from the linkedList
    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}


class HashTable {
    constructor(size){
        this.size= size;
        this.table= new Array(size);
    }


    hash(key) {
        const hashKey = key.split("").reduce((acc, cur) => {
          return acc + cur.charCodeAt(0);
        }, 0);
        const multiPrime = hashKey * 599;
        const hashedKey = multiPrime % this.size;
        // console.log('hashedKey :>>', hashedKey)
        return hashedKey;
      }

    add(key,value){
        let hash= this.getHash(key);
        if(!this.table[hash]){
            this.table[hash]= new LinkedList();
        }
        this.table[hash].append({[key]: value});
    }

    getHash(key){
        let hash = 353;
        for (let i = 0; i < key.length; i++) {
            hash = hash* 599* key.charCodeAt(i) % this.table.length;
            
        }
        return hash;
    }

    set(key, value) {
        let index = this.hash(key);
        if (!this.table[index]) {
          this.table[index] = new LinkedList();
        }
        this.table[index].append({ [key]: value });
      }


    contains(key){
        let hash = this.getHash(key);

        if(this.table[hash]){
            return true;
        }
        else{
            return false;
        }
    }

    keys() {
        let keys = [];
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[i]) {
            keys.push(this.table[i].keys());
          }
        }
        return keys;
      }

    find(key) {
        let hash = this.getHash(key);

        if (this.contains(key)) {

            if (this.table[hash].head) {
                let current = this.table[hash].head;
                if (Object.keys(current.value)[0] === key) {
                    return current.value[key];
                }
                while (current.next) {
                    current = current.next;
                    if (Object.keys(current.value)[0] === key) {
                        return current.value[key];
                    }
                }
            }
        }
        return null;
    }


}
module.exports = HashTable;

