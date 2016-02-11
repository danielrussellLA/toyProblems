// Given a string, return true if it contains balanced parentheses ()t 

var isBalanced = (string) => {
  var stack = [];
  for( i in string ){
    if(string[i] === '(') stack.push(string[i]);
    if(string[i] === ')') stack.pop();
  }
  return stack.length === 0 ? true : false;
}