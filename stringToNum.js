const sortNameEntries = entries => {
    return entries.sort((a, b) => {
        let splitA = a.split(' '),
        splitB = b.split(' ')
        let nameA = splitA[0]
        nameB = splitB[0]
        let numA = splitA[1]
        let numB = splitB[1]
        if (nameA === nameB) {
            let convertedA = stringToNum(numA)
            let convertedB = stringToNum(numB)
            console.log(convertedA, convertedB)
            return convertedB - convertedA
        }
        return nameA.localeCompare(nameB)
    })
}


const stringToNum = str => {
    let wordNums = str.split('-')
    let [millions, thousands, hundreds] = splitIntoThree(wordNums)
    let result = (convertToDigits(millions) * 1000000) + (convertToDigits(thousands) * 1000) + convertToDigits(hundreds)
    return result
}

const splitIntoThree = wordNums => {
    let indexOfMillion = wordNums.indexOf('million')
    let indexOfThousand = wordNums.indexOf('thousand')
    let millions, thousands, hundreds;
    if (indexOfMillion !== -1) {
        millions = wordNums.slice(0, indexOfMillion)
    }
    if (indexOfThousand !== -1) {
        if (indexOfMillion) {
            thousands = wordNums.slice(indexOfMillion + 1, indexOfThousand)
        } else {
            thousands = wordNums.slice(0, indexOfThousand)
        }
    }
    if (indexOfThousand === -1 && indexOfMillion === -1) {
        hundreds = wordNums.slice(0)
    } else if (indexOfMillion !== -1 && indexOfThousand === -1) {
        hundreds = wordNums.slice(indexOfMillion + 1)
    } else {
        hundreds = wordNums.slice(indexOfThousand + 1)
    }
    return [millions, thousands, hundreds]
}

const convertToDigits = arr => {
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

console.log(
    sortNameEntries([
        'erin one-hundred-one',
        'daniel two-thousand-fifteen',
        'daniel five-million-one-hundred-thousand-two-hundred-eleven',
        'daniel one-million-two-hundred-six'
    ])
)
