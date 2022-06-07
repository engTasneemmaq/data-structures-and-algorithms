## ***Documentation:*** 📋📋

⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩
## 1.Reverse an Array 📄

** we made a function called reverseArray which takes an array as an argument, return an array with elements in reversed order. 🎇

![reversArray](./assest/reversArray.png)


## Whiteboard Process: 🗒
![whiteBoard](./assest/whiteboard.png)




## Approach & Efficiency:⏱
1.used for loop to revers the array with push method.<br>
2.The Big O time is O(n) and / Space is O(1)


----------------------------------------------------
<br>
⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩<br>

## 2.Shift Array 📄
** we made a function called ShiftArray takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
<br>
<br>

![shiftArray](./assest/shiftArray.png)

![output](./assest/result.png)
<br>

## Whiteboard Process: 🗒
![whiteboard](./assest/whiteboard1.png)
<br>

## Approach & Efficiency:⏱
used for loop to shift the array
<br><br>
----------------------------------------------------
[Back to Code Challenge Folder](../../code-challenges/)

----------------------------------------------------
⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩
##  Singly Linked Lists:
Linked List, like arrays, is a linear data structure. It contains head, tail and length properties. As shown below, each element in linked list is a node, which has a value and a reference to next node, or if it’s tail, points to null.

![Singly Linked List](./assest/singlelinkedlist.png)

## Challenge: 💪 💪
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

* Create a Linked List class

* Create a Linked List Test

## Approach & Efficiency: ⏱⏱
* insert(value)

O(1) space efficency

O(1) time efficency

* includes(value)

O(1) space efficency

O(n) time efficency

* toString()

O(1) space efficency

O(n) time efficency

## API: ⏩
* insert>>><br>
Arguments: value<br>
Returns: nothing<br>
Adds a new node with that value to the head of the list with an O(1) Time performance.<br>
<br>
* includes>>><br>
Arguments: value<br>
Returns: Boolean<br>
Indicates whether that value exists as a Node’s value somewhere within the list.
<br>
<br>
* to string>>
Arguments: none<br>
Returns: a string representing all the values in the Linked List, formatted as:<br>
"{ a } -> { b } -> { c } -> NULL"

![linked list test](./singlyLinkedList/testpass-linked-list.png)
![node index.js](./singlyLinkedList/test.png)

---------------------------------------------------------
⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩
##  array-binary-search :
built the BinarySearch function to take in the desired inputs. we go through each element in a for loop checking to see if the element currently iterated on equals the second parameter value. if it does, pass the index of that value, if it never finds a match, return -1<br>


## Challenge: 💪 💪
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.


## Approach & Efficiency: ⏱⏱
1.used for loop to revers the array with return result<br>
2.The Big O time is O(log n) and / Space is O(1)<br>

![binarry array](./assest/binary.png)

![binary-array](./assest/binaryyy.png)


## Whiteboard Process: 🗒

![binary array search](./assest/whiteboard-binary.png).