var Range = function(start, end, step) {
  //Your code here
  this.start = start;
  this.end = end;
  this.step = step;
  if(this.step === undefined){
    this.step =  1;
  } 
 
};

Range.prototype.size = function () {
  //Your code here
  if(this.end === undefined){
    return 1;
  } 
  return Math.ceil((Math.abs(this.start - this.end ) + 1) / this.step)
};

Range.prototype.each = function (callback) {
  //Your code here
  if(this.end === undefined){
    callback(this.start);
  }
  if(this.start > this.end && this.step < 0){
    for(var i = this.start; i >= this.end; i += this.step){
      callback(i);
    }
  }
  
  if(this.start > this.end && this.step > 0){
    for(var i = this.start; i >= this.end; i -= this.step){
      callback(i);
    }
  } 
  
  
  if (this.start < this.end) {
    for(var i = this.start; i <= this.end; i += this.step){
      callback(i);
    }
  }
    
  
};

Range.prototype.includes = function (val) {
  //Your code here
  var result = false;
  this.each(function(item){ 
    if(item === val){
      result = true;
    }
  });
  return result;
};