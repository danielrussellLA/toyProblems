deepEquals = function(a, b){
  if(Array.isArray(a) && Array.isArray(b)){
    if(a.length !== b.length){
      return false;
    } 
    for(var i = 0; i < a.length; i++){
      if(!deepEquals(a[i], b[i])){
        return false;
      } 
    }
    return true;
  }
  if((typeof a === 'object') && (typeof b === 'object')){
    if(Object.keys(a).length !== Object.keys(b).length){
      return false;
    } 
    for(var key in a){
      if(!deepEquals(a[key], b[key])){
        return false;
      }
    }
    return true;
  }
  return a === b;
}; 
  


console.log(deepEquals({key: 1, key2: {key3: 3}}, {key: 1, key2: {key3: 3}}));