function maxProduct(arr){
	var largest = 0;
	var secondLargest = 0;
	
	for(var i = 0; i < arr.length; i++){
		var currentNum = arr[i]
		if(currentNum > largest){
			largest = currentNum;
		}
	}

	var largestNumIndex = arr.indexOf(largest);
	arr.splice(largestNumIndex, 1);

	for(var i = 0; i < arr.length; i++){
		var currentNum = arr[i]
		if(currentNum > secondLargest){
			secondLargest = currentNum;
		}
	}

	return largest * secondLargest;
}



console.log(maxProduct([1,2,3,4,5,6,7,8,9,10, 11]))
console.log(maxProduct([1,2,3,10,4,5,6,7,8,9, 12]))
