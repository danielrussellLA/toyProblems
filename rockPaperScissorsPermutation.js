// Given a number of rounds n, return all the possible rock-paper-scissors play
// possibilities for that number of rounds.

// Examples: 
// roundCount: 1
// output: [ "r", "p", "s" ]

// roundCount: 2
// output: [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]

// roundCount: 0
// ouput: []


function rockPaperScissorsResults (rounds){
  var results = [];
  var rpsArray = ['r', 'p', 's'];
  
  function recurse(currentStr){
    if(currentStr.length === rounds){
	    results.push(currentStr);
	      return;
    }

    for(var i = 0; i < rpsArray.length; i++){
    	var currentPlay = rpsArray[i];
    	recurse(currentStr.concat(currentPlay));
    }
  }

  recurse('');
  return results;
}
