function FloodFill(matrix, start, color) {
    var newMatrix = [...matrix]
    function recurse(mtx, row, col) {
        if (mtx[row][col] === 1 || mtx[row][col] === undefined || mtx[row][col] === color) {
            return mtx;
        } else {
            mtx[row][col] = color;
            if (mtx[row] && mtx[row][col+1] !== undefined) {
                recurse(mtx, row, col+1);
            }
            if (mtx[row+1] && mtx[row+1][col] !== undefined) {
                recurse(mtx, row+1, col);
            }
            if (mtx[row] && mtx[row][col-1] !== undefined) {
                recurse(mtx, row, col-1);
            }
            if (mtx[row -1] && mtx[row-1][col] !== undefined) {
                recurse(mtx, row-1, col);
            }
        }
        return mtx;
    }
    return recurse(newMatrix, start[0], start[1])
}

var flooded1 = FloodFill([
    [0,0,1,0],
    [0,0,1,0],
    [1,1,1,0],
    [0,0,0,0],
], [0,0], 'red')
var result1 = JSON.stringify(flooded1)
var expected1 = JSON.stringify([
    ['red','red',1,0],
    ['red','red',1,0],
    [1,1,1,0],
    [0,0,0,0],
])
console.log('TEST PASSING: ', result1 === expected1);
console.log('expect', result1, 'to equal', expected1);

var flooded2 = FloodFill([
    [0,0,1,0],
    [0,0,1,0],
    [1,1,1,0],
    [0,0,0,0],
], [0,3], 'red')
var result2 = JSON.stringify(flooded2)
var expected2 = JSON.stringify([
    [0,0,1,'red'],
    [0,0,1,'red'],
    [1,1,1,'red'],
    ['red','red','red','red'],
])
console.log('TEST PASSING: ', result2 === expected2);
console.log('expect', result2, 'to equal', expected2);
