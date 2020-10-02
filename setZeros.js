// var setZeroes = function(matrix) {
//     let m = matrix.length
//     let n = matrix[0].length
//     let currentRow = 0;
//
//     let colsUpdated = {}
//
//     while (currentRow < m) {
//         let row = matrix[currentRow]
//         let hasFoundZero = false
//         for (let colIdx = 0; colIdx < row.length; colIdx++) {
//             let el = row[colIdx]
//             if (el === 0) {
//                 if(colsUpdated[colIdx] === undefined) {
//                     hasFoundZero = true
//                     matrix.forEach(r => {
//                         r[colIdx] = 0
//                     })
//                 }
//                 colsUpdated[colIdx] = 1
//             }
//         }
//         if (hasFoundZero) {
//             matrix[currentRow] = new Array(n).fill(0)
//         }
//         currentRow++
//     }
//
//     return matrix
// }
//
// let matrix = [[1,1,1],[1,0,1],[1,1,1]]
// console.log(setZeroes(matrix))


var setZeroes = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    const colsShouldUpdate = new Set()
    const rowsShouldUpdate = new Set()

    matrix.forEach((row, i) => {
        row.forEach((col, j) => {
            if (col === 0) {
                rowsShouldUpdate.add(i)
                colsShouldUpdate.add(j)
            }
        })
    })

    let a = Array.from(colsShouldUpdate)
    let b = Array.from(rowsShouldUpdate)

    b.forEach(rowIdx => {
        matrix[rowIdx] = new Array(n).fill(0)
    })

    matrix.forEach(row => {
        row.forEach((col, colIdx) => {
            if (a.includes(colIdx)) {
                row[colIdx] = 0
            }
        })
    })
    return matrix
}

let matrix = [[1,1,1],[1,0,1],[1,1,1]]
console.log(setZeroes(matrix))
