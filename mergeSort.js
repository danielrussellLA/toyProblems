function mergeSort(arr){
  if(arr.length === 1){
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  
  return sort(mergeSort(left), mergeSort(right));
}


function sort(left, right){
  var result = [];
  var il = 0;
  var ir = 0;
  
  while(il < left.length && ir < right.length){
    if(left[il] < right[ir]){
      result.push(left[il]);
      il++; 
    } else {
      result.push(right[ir]);
      ir++
    }
  }
  return result.concat(left.slice(il)).concat(right.slice(ir));
}


