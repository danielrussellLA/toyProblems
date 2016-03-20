function insertionSort (array) {
  // Write your code here, and
  // return your final answer.
 
 for(var i = 1; i < array.length; i++){
  for(var j = 0; j < i; j++){
    if(array[j] > array[i]){
      var currentValue = array[i];
      array.splice(i, 1);
      array.splice(j, 0, currentValue);
    } 
  }
 }

 return array;
}

console.log(insertionSort([4, 2, 0, 1])); // [0, 1, 2]