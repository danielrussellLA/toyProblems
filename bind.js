// Implement the function ‘bind’, which accepts a function and a context as arguments. 
// The context argument should override an existing context that the function is defined in. 
// Your bind function should return the passed in function.

// Once you have finished that, implement the function ‘bind’ as a method of the Function.prototype object. 

var bind = function(func, context){
  
  var args = Array.prototype.slice.call(arguments, 2);
  
  return function(){
    var anonArgs = Array.prototype.slice.call(arguments);
    var allArgs = args.concat(anonArgs);
    return func.apply(context, allArgs);
    
  }
};  

Function.prototype.bind = function(context) {
  
  var args = Array.prototype.slice.call(arguments, 1)
  var that = this;
  
  return function(){
    
    var anonArgs = Array.prototype.slice.call(arguments);
    var allArgs = args.concat(anonArgs);
    return that.apply(context, allArgs)
    
  }
};