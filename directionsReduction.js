function dirReduc(arr){
  var notReduced = true;
  var counter = 0;
    for(var i = 0; i < arr.length; i++){
      if((arr[i] === "NORTH" && arr[i - 1] === 'SOUTH') || 
         (arr[i] === "SOUTH" && arr[i - 1] === 'NORTH') || 
         (arr[i] === "WEST" && arr[i - 1] === 'EAST') || 
         (arr[i] === "EAST" && arr[i - 1] === 'WEST')){
        arr.splice(i - 1, 2);
        i = -1;
      } 
    }
  return arr;
}

console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"])); // ["WEST", "WEST"]