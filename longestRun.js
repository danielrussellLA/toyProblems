var longestRun = function(string){
  var max = [0,0];
  var current = [0,0];

  for(var i = 1; i < string.length; i++){
    if(string[i - 1] === string[i]){
      current[1] = i;
      if(current[1] - current[0] > max[1] - max[0]){
        max = current;
      }
    } else {
      current = [i, i];
    }
  }
  return max;
};
