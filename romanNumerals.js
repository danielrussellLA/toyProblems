function translateRomanNumeral (romanNumeral) {
  // Write your code here, and
  // return your final answer.
var DIGITVALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
var total = 0;

for(var i = 0; i < romanNumeral.length; i++){
  var currentValue = DIGITVALUES[romanNumeral[i]];
  var nextValue = DIGITVALUES[romanNumeral[i + 1]];
  
  if(currentValue === undefined){
    return "null";
  }
  
  else if(nextValue && (currentValue < nextValue)){
    total -= currentValue;
  } 
  else {
    total += currentValue;
  }
}
return total;

}