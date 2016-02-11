var asyncMap = function(tasks, callback){
  var results = [];
  var count = 0;
  for(var i = 0; i < tasks.length; i++){
    (function(i){
      tasks[i](function(val){
        results[i] = val;
        count += 1;
        if(count === tasks.length){
          callback(results);
        }
      });
    })(i);
  }

};
