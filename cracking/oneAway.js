const oneAway = (str1, str2) => {
    if (str1 === str2) return true
    let longer, shorter;
    if (str1.length > str2.length) {
        longer = str1.split('')
        shorter = str2.split('')
    }
    else if (str2.length > str1.length) {
        longer = str2.split('')
        shorter = str1.split('')
    }
    else {
        longer = str1.split('')
        shorter = str2.split('')
    }
    let numOperations = 0
    for (let i = 0; i < longer.length; i++) {
        if (longer[i] !== shorter[i]) {
            if (longer.length === shorter.length) {
                shorter[i] = longer[i]
                numOperations++ 
            } else {
                shorter.splice(i, 0, longer[i])
                numOperations++
            }
        }
    }
    return numOperations <= 1
}

console.log(oneAway('pale', 'ple'))
console.log(oneAway('pales', 'pale'))
console.log(oneAway('pale', 'bale'))
console.log(oneAway('pale', 'bake'))
