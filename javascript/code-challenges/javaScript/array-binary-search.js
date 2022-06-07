let binaryFunction = function (arr, x) {

	let start=0, end=arr.length-1;
	while (start<=end){
		let mid=Math.floor((start + end)/2);
		if (arr[mid]===x) return true;

		else if (arr[mid] < x)
			start = mid + 1;
		else
			end = mid - 1;
	}

	return false;
}
  
  console.log(binaryFunction([4, 8, 15, 16, 23, 42], 15));             result =2
  console.log(binaryFunction([-131, -82, 0, 27, 42, 68, 179], 42));    result=4
  console.log(binaryFunction([11, 22, 33, 44, 55, 66, 77], 90));       result=-1
  console.log(binaryFunction([1, 2, 3, 5, 6, 7], 4));                  result=-1
