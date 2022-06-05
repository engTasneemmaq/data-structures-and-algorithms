
let BinarySearch = (arr, num) => {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === num) {
        return i;
      }
    }
    return -1;
  };
  module.exports = BinarySearch;
  console.log(BinarySearch([4, 8, 15, 16, 23, 42], 15));             result =2
  console.log(BinarySearch([-131, -82, 0, 27, 42, 68, 179], 42));    result=4
  console.log(BinarySearch([11, 22, 33, 44, 55, 66, 77], 90));       result=-1
  console.log(BinarySearch([1, 2, 3, 5, 6, 7], 4));                  result=-1
