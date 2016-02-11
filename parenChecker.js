// Given a string, return true if it contains balanced parentheses () 

function isBalanced (string) {
  var stack = [];
  for(var i = 0; i < string.length; i++ ){
    if(string[i] === '(') stack.push(string[i]);
    if(string[i] === ')') stack.pop();
  }
  return stack.length === 0 ? true : false 
}