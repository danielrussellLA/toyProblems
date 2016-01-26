// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

function bubbleSort (input) {

  var isSorted = false;
  var copyArray = input.slice(0, input.length);
  var counter = 0;
  
  var idx = 0;
  while(!isSorted){
    // if the algorithm has run n^2, create an exit condition.
    if(counter === copyArray.length * copyArray.length){
     isSorted = true;
    }
    
    if(copyArray[idx] > copyArray[idx + 1] && copyArray !== undefined){
      var before = copyArray[idx];
      var after = copyArray[idx + 1];
      copyArray[idx] = after;
      copyArray[idx + 1] = before;
    }
    
 
    // if we reach the end of the array, set idx to 0 so we can loop back again
    if(idx === (copyArray.length - 1)){
      idx = 0;
    } 
    // else increase idx + 1.
    else {
      idx++  
    }
    counter++;
  }
  
  return copyArray;
}
