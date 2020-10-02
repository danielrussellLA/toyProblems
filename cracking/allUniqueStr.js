const allUniq = str => {
    let map = {}
    for(let i = 0; i < str.length; i++) {
        let letter = str[i]
        if (!map[letter]) {
            map[letter] = 1
        } else if (map[letter]) {
            return false
        }
    }
    return true
}

console.log('allUniq', allUniq('daniell'))
