// checks if a string is a permutation of a palindrome
const palindromePermutation = str => {
    let res = 0
    let string = str.split(' ').join('').toLowerCase()
    const map = {}
    for (let i = 0; i < string.length; i++) {
        const letter = string[i]
        if (!map[letter]) {
            map[letter] = 1
        } else {
            map[letter] += 1
        }
    }
    for (let letter in map) {
        if (map[letter] % 2 !== 0) {
            res++
        }
    }
    return res === 1
}

console.log(palindromePermutation('Tact Coa'))
