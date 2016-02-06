var compose = function(){
  //Your code here
  var args = Array.prototype.slice.call(arguments);

  return function(a){
     return args.reduceRight(function(accumulatedVal, currentVal){
       return currentVal(accumulatedVal);
     }, a);
  };
};

var pipe = function(){
  //Your code here
  var args = Array.prototype.slice.call(arguments);

  return function(a){
     return args.reduce(function(accumulatedVal, currentVal){
       return currentVal(accumulatedVal);
     }, a);
  };
};
