const HashTable = require("./hashtable");

const myhashTable = new HashTable(10);
myhashTable.add('Tasneem', '401d15 student');
myhashTable.add('Ahmad', '401d15 student');
myhashTable.add('Nidal', '401d15 student');
myhashTable.add('Masa', '401d15 student');
myhashTable.add('Shahem', '401d15 student');
myhashTable.add('Ali', '401d15 student');


// console.log(myhashTable);
// myhashTable.map.forEach((ll) => {
//     console.log(ll.values());
// })

console.log('get :::', myhashTable.getHash('Tasneem'));
console.log('get :::', myhashTable.getHash('Ahmad'));
console.log('get :::', myhashTable.getHash('Nidal'));
console.log('get :::', myhashTable.getHash('Masa'));
console.log('get :::', myhashTable.getHash('Shahem'));
console.log('get :::', myhashTable.getHash('Ali'));

console.log(' ----------------------- ');

console.log('contains :::', myhashTable.getHash('Tasneem'));
console.log('contains :::', myhashTable.getHash('Ahmad'));
console.log('contains :::', myhashTable.getHash('Nidal'));
console.log('contains :::', myhashTable.getHash('Masa'));
console.log('contains :::', myhashTable.getHash('Shahem'));
console.log('contains :::', myhashTable.getHash('Ali'));


