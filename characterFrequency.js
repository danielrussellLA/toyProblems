function characterFrequency (string) {
  // Write your code here, and
  // return your final answer.
  var letters = {};
  var sortedString = string.split('').sort('').join('');
  var tuples = [];
  // var sortedTuples = [];

  for(var i = 0; i < sortedString.length; i++){
    if(letters[sortedString[i]]){
      letters[sortedString[i]] += 1;
    } else {
      letters[sortedString[i]] = 1;
    }
  }

  for(var key in letters){
  	tuples.push([key, letters[key]])
  }


  //insertion sort tuples to get a final result
  for(var i = 1; i < tuples.length; i++){
	  for(var j = 0; j < i; j++){
	    if(tuples[j][1] < tuples[i][1]){
	      var currentValue = tuples[i];
	      tuples.splice(i, 1);
	      tuples.splice(j, 0, currentValue);
	    }
	  }
 	}

  return tuples;
}

console.log(characterFrequency('supercalifragilisticexpialidocious'));
