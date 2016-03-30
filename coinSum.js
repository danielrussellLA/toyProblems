function coinSums (total) {
  // Write your code here, and
  // return your final answer.
  var coins = [1,2,5,10,20,50,100,200];
  var possibilities = 0;

  if (total === 0 || total < 0){
    return 0;
  }
  
  function recurse(sum, index) {
    if(sum > total){
      return;
    }

    if(sum === total){
      possibilities += 1;
      return;
    }
    
    for(var i = index; i < coins.length; i++){
      var currentCoin = coins[i];
      recurse(sum + currentCoin, i);
    }
    
  }
  
  recurse(0, 0);
  return possibilities;
}
