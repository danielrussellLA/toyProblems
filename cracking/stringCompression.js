const stringCompression = str => {
    const map = {}
    let result = ''
    let lastLetter = str[0]
    let count = 0
    for (let i = 0; i < str.length; i++) {
        let letter = str[i]
        if (letter === lastLetter) {
            count++
        }
        else {
            result += `${lastLetter}${count}`
            lastLetter = letter
            count = 1
        }
    }
    result += `${lastLetter}${count}`
    return result
}

console.log(stringCompression('aabcccccaaa'))
