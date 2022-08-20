## Hashtables
Hash Table: (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.



## Challenge
Implement a Hashtable with the following methods:

- set: Arguments: key, value, Returns: nothing,This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.
- get: takes in the key and returns the value from the table.
- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
- keys: Returns: Collection of keys
- hash: takes in an arbitrary key and returns an index in the collection.



## Approach & Efficiency
set: space O(1)/time O(1)

hash: space O(1)/time O(1)

contains: space O(1)/time O(1) - time O(n) if there is a collision

get: space O(1)/time O(1) - time O(n) if there is a collision



## hashTable Code >>>
[hashTable.js](./hashtable.js)




## test >>>
![hash table test](../assest/hash-test.png)
