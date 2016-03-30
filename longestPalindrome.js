function longestPalindrome (string) {
  var longest = '';
  var results = [];

  for(var i = 0; i < string.length; i++){
    for (var j = i + 1; j < string.length; j++){
      var substring = string.slice(i, j + 1);
      if(substring.split('').reverse().join('') === substring){
        results.push(substring);
      }
    }
  }

  results.forEach(function(val){
    if(val.length > longest.length){
      longest = val;
    }
  });

  return longest;
}