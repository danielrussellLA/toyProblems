function spiralTraversal (matrix) {
	var spiraled = [];

	while(matrix.length !== 0){
		for(var i = 0; i < matrix[0].length; i++){
			spiraled.push(matrix[0][i]);
		}
	
		matrix.shift();

		if(matrix.length > 0){
			matrix = rotateMatrix(matrix);
		} 
		else {
			break;
		}
	}
	console.log('spiraled = ', spiraled);
	return spiraled;
}


function rotateMatrix (matrix) {
  var result = [];
  var counter = matrix[0].length;
  var colIdx = matrix[0].length - 1;
  
  var temp = [];
  while(counter > 0){
    for(var i = 0; i < matrix.length; i++){
      temp.push(matrix[i][colIdx]);
    }
    result.push(temp);
    temp = [];
    colIdx--;
    counter--;
  }

  
  return result;
}

spiralTraversal([[1,2,3], [4,5,6], [7,8,9]]);

// console.log(spiralTraversal([ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ]))