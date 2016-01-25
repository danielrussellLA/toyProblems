// Given an arbitrary input string, return the first non-repeating character. 
// For strings with all repeats, return 'sorry'.

// input: "ABCDBIRDUP"
// output: "A"

// input: "XXXXXXX"
// output: "sorry"

// input: "ALAMABA"
// output: "L"

function firstNonRepeatedCharacter (string) {
  // Write your code here, and
  // return your final answer.
  var letters = {};
  var stringArray = string.split('');
  var nonRepeatingCharacters = [];
  
  for(var i = 0; i < string.length; i++){
    if(letters[string[i]] === undefined){
      letters[string[i]] = 1;
    } else {
      letters[string[i]] += 1;
    }
  }
  
  for (var key in letters){
    if(letters[key] === 1){
      nonRepeatingCharacters.push(key)
    }  
  }
  
  var firstLetter = null;
  for(var j = 0; j < nonRepeatingCharacters.length; j++){
    var currentLetter = nonRepeatingCharacters[j];
    if(firstLetter === null){
      firstLetter = currentLetter;
    }
    if(stringArray.indexOf(currentLetter) <= stringArray.indexOf(firstLetter)){
      firstLetter = currentLetter;
    }
  }
  
  if(firstLetter){
    return firstLetter;
  } else {
    return 'sorry'
  }
  
}