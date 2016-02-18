var shuffleDeck = function(deck) {
  //Your code here
  var unShuffled = deck.slice();
  var shuffled = [];
  
  while(unShuffled.length){
    var randomIdx = Math.floor(Math.random() * unShuffled.length);
    shuffled.push(unShuffled[randomIdx]);
    unShuffled.splice(randomIdx, 1);
  }
  
  return shuffled;
}