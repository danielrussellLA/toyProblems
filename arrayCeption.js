function arrayception (array) {
  var deepestLevel = 0;

  function recurse(element, lvl){
    if(!Array.isArray(element)){
      if(lvl > deepestLevel){
        deepestLevel = lvl;
      }
    } else {
      lvl += 1;
      for(var i = 0; i < element.length; i++){
        recurse(element[i], lvl);
      }
    }
  }

  recurse(array, 0);
  return deepestLevel;
}
