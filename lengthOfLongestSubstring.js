// Optimized best approach

var lengthOfLongestSubstring = function(s) {
    let n = s.length, ans = 0;
    const map = {}

    for (let j = 0, i = 0; j < n; j++) {
        if (s.charAt(j) in map) {
            i = Math.max(map[s.charAt(j)], i)
        }
        ans = Math.max(ans, j - i + 1)
        map[s.charAt(j)] = j + 1
    }
    return ans
};


// BEST APPROACH - the "sliding window"

var lengthOfLongestSubstring = function(s) {
    const n = s.length
    const set = new Set()
    let ans = 0, i = 0, j = 0;
    while(i < n && j < n) {
        if (!set.has(s.charAt(j))) {
            set.add(s.charAt(j++))
            ans = Math.max(ans, j - i)
        }
        else {
            set.delete(s.charAt(i++))
        }
    }
    return ans
};


// NAIVE APPROACH (TOO SLOW)
/**
 * @param {string} s
 * @return {number}
 */
// dvdf
// s e

var lengthOfLongestSubstring = function(s) {
    let longest = 0

    let start = 0
    let end = 1

    if (!s.length) {
        return 0
    }

    while (start <= s.length - 1) {
        let sub = s.slice(start, end)
        // console.log(sub)
        if (allUnique(sub) && sub.length > longest) {
            longest = sub.length
        }
        if (end === s.length) {
            start++
            end = start + 1
            continue
        }
        end++
    }

    return longest
};

function allUnique(s) {
    const set = new Set(s)
    return set.size === s.length
}
