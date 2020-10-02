const checkPermutation = (str, target) => {
    for (let i = 0; i < str.length; i++) {
        const currLetter = str[i]
        const exp = str.slice(i, target.length + 1)
        if (exp === target) {
            return true
        }
    }
    return false
}

console.log(checkPermutation('daniel', 'ani'))
