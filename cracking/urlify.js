// const urlify = (str, len) => {
//     return str.split(' ').filter(w => w !== '').join('%20')
// }

const urlify = (str, len) => {
    let res = ''
    for (let i = 0; i < len; i++) {
        const letter = str[i]
        if (letter === ' ') {
            res = res + '%20'
        } else {
            res += letter
        }
    }
    return res
}

console.log(urlify('Mr John Smith  ', 13))
