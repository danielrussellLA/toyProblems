function rotateMatrix (matrix) {
  var result = [];

  var counter = matrix.length;
  var colIdx = 0;

  var temp = [];
  while(counter > 0){
    for(var i = matrix.length - 1; i >= 0; i--){
      temp.push(matrix[i][colIdx]);
    }
    result.push(temp);
    temp = [];
    colIdx++;
    counter--;
  }

  return result;

}
