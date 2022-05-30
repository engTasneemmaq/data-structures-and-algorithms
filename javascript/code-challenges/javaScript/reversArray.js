'use strict';
function reverse(array){
    var output = [];
    for (let i = array.length - 1; i> -1; i--){
        output.push(array[i]);
    }
    return output;
}
console.log(reverse([1,-23,3,4,54,6,71,'hello']));
