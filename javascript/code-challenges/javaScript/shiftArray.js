
let insertShiftArray = (arr, num) => {

    let newArr = []
    let middle = Math.ceil(arr.length/2);
  
    for(let i = 0; i < arr.length+1; i++) {
      if(i < middle) {
        newArr[i] = arr[i];
      }
      if(i == middle) {
        newArr[i] = num; }
      else if(i > middle) {
        newArr[i] = arr[i -1];
      }}
    return newArr;
  };
  module.exports = insertShiftArray;
  console.log(insertShiftArray([2,4,6,-8],5));
