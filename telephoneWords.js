function telephoneWords (digitString) {
  // Write your code here, and
  // return your final answer.
  var phoneLetters = {
    0: ['0'],
    1: ['1'],
    2: ['A', 'B', "C"],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'O'],
    7: ['P', 'Q', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y', 'Z']
  }
  // 2345
  var results = [];
  
  var recurse = function (str, index) {
    if(str.length === digitString.length) {
      results.push(str);
      return;
    }  
    for(var i = 0; i < phoneLetters[digitString[index]].length; i++){
      recurse(str + phoneLetters[digitString[index]][i], index + 1)
    } 
  }
  
  recurse('', 0);
  return results;
  
}
console.log(telephoneWords('0002'));