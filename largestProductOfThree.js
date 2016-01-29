// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

// input: [ 2, 1, 3, 7 ]
// output: 42

 // input: [ 0, 2, 3 ]
// output: 0

var largestProductOfThree = function(array) {
  var sorted = array.slice().sort(function(a,b) { return b-a}); 
  var product1 = sorted[0] * sorted[1] * sorted[2];
  var product2 = sorted[0] * sorted[sorted.length-1] * sorted[sorted.length-2];

  return product1 > product2 ? product1 : product2; 
}

