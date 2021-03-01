const splitIntoThrees = (str) => {
    let result = []
    let tmp = ''
    for (let i = str.length - 1; i >= 0; i--) {
        tmp =  str[i] + tmp
        if (tmp.length === 3 || i == 0) {
            result.unshift(tmp)
            tmp = ''
        }
    }
    return result
}

const createSeparators = (len) => {
    let result = []
    if (len > 3) result.unshift('thousand')
    if (len > 6) result.unshift('million')
    if (len > 9) result.unshift('billion')
    return result
}

const createSection = (strNum) => {
    const numberToWords = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'fourty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    let split = strNum.split('')
    let result = ''
    let counter = 0
    while (counter < 3) {
        if (strNum.substr(1).length == 2 && strNum.substr(1) in numberToWords && counter === 0) {
            result = numberToWords[strNum.substr(1)] + result
            counter += 2
            split.pop()
            split.pop()
            continue
        }
        let num = split.pop()
        if (counter === 0) {
            result = numberToWords[num]
        } else if (counter === 1) {
            let tens = num + '0'
            result = numberToWords[tens] + '-' + result
        } else if (counter === 2 && num !== undefined) {
            let hundreds = numberToWords[num] + ' hundred'
            result = hundreds + ' ' + result
        }
        counter++
    }
    return result
}

Number.prototype.toEnglish = function () {
    let strNum = String(this)
    let separators = createSeparators(strNum.length)
    let splitNum = splitIntoThrees(strNum)
    let result = ''
    splitNum.forEach((section) => {
        let sep = separators.shift()
        if (sep !== undefined) {
            result += createSection(section) + ' ' + sep + ' '
        } else {
            result += createSection(section)
        }
    })
    return result
}

let a = new Number(78193512)
console.log(a.toEnglish()) // "seventy-eight million one hundred ninety-three thousand five hundred twelve"
let b = new Number(28578193512)
console.log(b.toEnglish()) // "twenty-eight billion five hundred seventy-eight million one hundred ninety-three thousand five hundred twelve"
