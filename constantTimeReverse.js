function constantTimeReverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let other = arr.length - i - 1
        let temp = arr[i]
        arr[i] = arr[other]
        arr[other] = temp
    }
    return arr
}

console.log(constantTimeReverse([1,2,3,4,5,6]))
