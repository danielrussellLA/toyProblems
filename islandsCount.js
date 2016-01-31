// Given a string representation of a 2d map, return the number of islands 
// in the map. Land spaces are denoted by a zero, while water is denoted by a dot. 
// Two land spaces are considered connected if they are adjacent (but not diagonal).

// (!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags 
// to make the value easier to read. In other words, when you see a break, it's actually a
// \n
// character.

// input:  .0...
//         .00.. 
//         ....0

// output: 2


// input: ..000.
//        ..000.
//        ..000.
//        .0....
//        ..000.

// output: 3

// input: ..000.
//        ..0...
//        ..0.0.
//        ..0...
//        ..000.

// output: 2

function countIslands (mapStr) {
  // Write your code here, and
  // return your final answer.
  var islandCount = 0;
  var matrix = [];
  var row = [];
  //make your mapStr into a 2d array to help you simplify the problem.
  for(var i = 0; i <= mapStr.length; i++){
    if(mapStr[i] === '\n' || mapStr[i] === undefined){
      matrix.push(row);
      row = [];
    } else{
      row.push(mapStr[i])
    }  
  }

  function recurse(i, j){
          //up
          
          if( matrix[i - 1] && matrix[i - 1][j] === '0'){
              matrix[i - 1][j] = '.';
              recurse(i - 1, j);
            }
       
          //left
          if(matrix[i][j - 1] && matrix[i][j - 1] === '0'){
            matrix[i][j - 1] = '.';
            recurse(i, j - 1);
          }
          //down
           if(matrix[i + 1] && matrix[i + 1][j] === '0'){
            matrix[i + 1][j] = '.';
            recurse(i + 1, j);
          }
          //right
          if(matrix[i][j + 1] && matrix[i][j + 1] === '0'){
            matrix[i][j + 1] = '.';
            recurse(i, j + 1);
          }   
        }


  for(var i = 0; i < matrix.length; i++ ){
    for(var j = 0; j < matrix[i].length; j++){
      //if you find a 0, turn that 0 into a dot so that you won't search that space again.
      if(matrix[i][j] === '0'){
        islandCount += 1;
        matrix[i][j] = '.';
        recurse(i, j);       
      }
    }
  }

  return islandCount;
}


