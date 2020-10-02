const binarySearch = (
    list,
    target,
    left = 0,
    right = list.length - 1
) => {
    const mid = Math.floor((left + right) / 2)
    if (left > right) return null
    const pivot = list[mid]
    if (pivot === target) return mid
    if (pivot > target) {
        return binarySearch(list, target, 0, mid - 1)
    }
    if (pivot < target) {
        return binarySearch(list, target, mid + 1, right)
    }
}

/**
 * Test Cases
 */

const tests = [
    [binarySearch([1, 2, 3, 4, 5], 3), 2],
    [binarySearch([2, 3, 4, 5], 5), 3],
    [binarySearch([31, 44, 51, 200], 200), 3],
    [binarySearch([31, 44, 51, 200], 1), null],
    [binarySearch([31, 44, 51, 200], 44), 1],
    [binarySearch([-1, 0, 3, 5, 9, 12], 2), null]
]

tests.forEach(result => {
    console.log(result[0] === result[1])
})


let tries = 0
const binarySearch2 = (
    list,
    property,
    target,
    left = 0,
    right = list.length - 1
) => {
    tries += 1
    const mid = Math.floor((left + right) / 2)
    if (left > right) return null
    const pivot = list[mid][property]
    if (pivot === target) return [list[mid], mid, tries]
    if (pivot > target) {
        return binarySearch2(list, property, target, 0, mid - 1)
    }
    if (pivot < target) {
        return binarySearch2(list, property, target, mid + 1, right)
    }
}

/**
 * complex test case
 */

const data = [
    { name: 'daniel' },
    { name: 'pickles' },
    { name: 'michael' },
    { name: 'jessica' },
    { name: 'michelle' },
    { name: 'joseph' },
    { name: 'donald' },
    { name: 'levi' },
    { name: 'brynn' },
    { name: 'livia' },
]

const sorted = data.sort((a, b) => a.name > b.name)
// console.log(sorted)
console.log(binarySearch2(sorted, 'name', 'levi'))
