function flatten (arrays) {
	var result = [];


	function recurse(element) {
			if(!Array.isArray(element)){
				result.push(element);
			} else {
			  for(var i = 0; i < element.length; i++){
				 recurse(element[i]);
			}
		}
		
	}
	recurse(arrays);
	return result;
}

console.log(flatten([ [ 10 ], [ 20, 30 ], [ 40 ] ]));

// [ [ 10 ], [ 20, 30 ], [ 40 ] ]
// [ 10, 20, 30, 40 ]