const stringToNum = str => {
    let numParts = str.split('-')
    let indexOfMillion = numParts.indexOf('million')
    let indexOfThousand = numParts.indexOf('thousand')
    let millions, thousands, hundreds;
    if (indexOfMillion !== -1) {
        millions = numParts.slice(0, indexOfMillion)
    }
    if (indexOfThousand !== -1) {
        if (indexOfMillion) {
            thousands = numParts.slice(indexOfMillion + 1, indexOfThousand)
        } else {
            thousands = numParts.slice(0, indexOfThousand)
        }
    }
    if (indexOfThousand === -1 && indexOfMillion === -1) {
        hundreds = numParts.slice(0)
    } else if (indexOfMillion !== -1 && indexOfThousand === -1) {
        hundreds = numParts.slice(indexOfMillion + 1)
    } else {
        hundreds = numParts.slice(indexOfThousand + 1)
    }
    let result = (convertThreeDigit(millions) * 1000000) + (convertThreeDigit(thousands) * 1000) + convertThreeDigit(hundreds)
    return result
}

const convertThreeDigit = (arr) => {
    if (!arr) return 0
    let numsMap = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        forty: 40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90,
    }
    let result = 0
    for (let word of arr) {
        if (word === 'hundred') {
            result = result * 100
        } else {
            result += numsMap[word]
        }
    }
    return result
}

stringToNum('one-million-two-hundred-thirty-two-thousand-five-hundred-forty-one')
stringToNum('one-million-one-hundred-thousand-five-hundred-forty-one')
stringToNum('six-million-two-hundred')
stringToNum('two')
