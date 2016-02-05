function powerSet (str){
  str = str || '';
  var letters = {};
  var solutions = {};

  for(var i = 0; i < str.length; i++) {
    letters[str[i]] = true;
  }

  str = Object.keys(letters).sort().join('');

  var recurse = function (strSet) {
    for(var i = 0; i <= strSet.length; i++){
      var subSet = strSet.substr(0, i) + strSet.substr(i + 1, strSet.length);
      if(!solutions[subSet]){
        solutions[subSet] = true;
        recurse(subSet);
      }
    }
  };
  recurse(str);
  return Object.keys(solutions).sort();
}


