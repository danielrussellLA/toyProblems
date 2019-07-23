function multStr(A, B) {
  if (A === '0' || B === '0') {
    return '0'
  }
  var result = []
  var matrix = [];
  var matrixIdx = 0;
  for (var i = A.length - 1; i >= 0; i--) {
      var carry = 0;
      var newRow = [];
      for (var d = 0; d < matrixIdx; d++) {
          newRow.push(0);
      }
      matrix.push(newRow)
      for (var j = B.length - 1; j >= 0; j--) {
          var numA = parseInt(A[i]);
          var numB = parseInt(B[j]);
          var prod = (numA * numB) + carry;
          var prodStr = String(prod);
          matrix[matrixIdx].push(Number(prodStr[prodStr.length - 1]));
          if (prodStr.length > 1) {
            carry = Number(prodStr.substr(0, prodStr.length - 1));
          } else {
            carry = 0
          }
          if (j === 0) {
            matrix[matrixIdx].push(carry);
          }
      }
      matrixIdx++;
  }
  return addUpResult(matrix);
}

function addUpResult(matrix) {
  var result = [];
  for (var i = 0; i < matrix.length; i++) {
    var carry = 0;
    for (var j = 0; j < matrix[i].length; j++) {
        var num = matrix[i][j];
        if (result[j] === undefined) {
          var sum = String(num + carry);
          if (sum.length > 1) {
            result[j] = Number(sum[1]);
            carry = Number(sum[0]);
          } else {
            result[j] = Number(sum);
            carry = 0;
          }
        } else {
          var sum = String(result[j] + num + carry);
          if (sum.length > 1) {
            result[j] = Number(sum[1]);
            carry = Number(sum[0]);
          } else {
            result[j] = Number(sum);
            carry = 0;
          }
        }
    }
    carry = 0;
  }
  var answer = result.reverse();
  while(answer[0] === 0) {
    answer.shift()
  }
  return answer.join('');
}

console.log(multStr('3', '8')) // 24
console.log(multStr('12', '12')) // 144
console.log(multStr('36', '36')) // 1296
console.log(multStr('99999', '99999')) // 9999800001
