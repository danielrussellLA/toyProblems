function translateRomanNumeral (romanNumeral) {
  // Write your code here, and
  // return your final answer.
var digitValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
var currentRomanNumeral;
var result = 0;

for(var i = 0; i < romanNumeral.length; i++){
  currentRomanNumeral = digitValues[romanNumeral[i]];
  console.log(currentRomanNumeral);
  if(currentRomanNumeral === undefined){
    if(romanNumeral === ""){
      return 0;
    }
    return null;
  }
  else if(result > 0 && currentRomanNumeral > digitValues[romanNumeral[i - 1]]){
    result += currentRomanNumeral - digitValues[romanNumeral[i - 1]];
  }
  else{
    result += currentRomanNumeral;
  }
}

  return result;
}


console.log(translateRomanNumeral('IV'));


