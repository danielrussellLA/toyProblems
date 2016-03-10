function evenOccurrence (arr) {
 var elements = {};
 // iterate through arr
 var evenOccurrence = null;
 for(var i = 0; i < arr.length; i++){
   // push items into an object with a count of how many times they appear AND the index where they first appeared.
   if(elements[arr[i]]){
     elements[arr[i]][0] += 1;
   } else {
     elements[arr[i]] = [1, i]
   }
 }
 for(var key in elements){
   if(elements[key][0] %2 === 0){
     if(evenOccurrence === null){
       evenOccurrence = key;
     } else if (elements[key][1] < evenOccurrence[1]){
       evenOccurrence = key;
     }
   }
 }
  return parseInt(evenOccurrence) || evenOccurrence;
}
