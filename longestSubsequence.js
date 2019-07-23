// "ABAZDC", "BACBAD" => "ABAD"
// "AGGTAB", "GXTXAYB" => "GTAB"
// "aaaa", "aa" => "aa"
// "", "..." => ""
// "ABBA", "ABCABA" => "ABBA"

function longestSubseq(a, b) {
    var aSub = a.substr(0, a.length - 1);
    var bSub = b.substr(0, b.length - 1);

    if (a.length === 0 || b.length === 0) {
      return '';
    } else if (a.charAt(a.length -1) === b.charAt(b.length -1)) {
      return longestSubseq(aSub, bSub) + a.charAt(a.length - 1); 
    } else {
      var x = longestSubseq(a, bSub);
      var y = longestSubseq(aSub, b);
      return x.length > y.length ? x : y;
    }
}


// TEST CASES
console.log(
  '"ABAZDC", "BACBAD" => "ABAD"',
  longestSubseq("ABAZDC", "BACBAD"),
  longestSubseq("ABAZDC", "BACBAD") === "ABAD"
)
console.log(
  '"AGGTAB", "GXTXAYB" => "GTAB"',
  longestSubseq("AGGTAB", "GXTXAYB"),
  longestSubseq("AGGTAB", "GXTXAYB") === "GTAB"
)
console.log(
  '"aaaa", "aa" => "aa"',
  longestSubseq("aaaa", "aa"),
  longestSubseq("aaaa", "aa") === "aa"
)
console.log(
  '"", "..." => ""',
  longestSubseq("", "..."),
  longestSubseq("", "...") === ""
)
console.log(
  '"ABBA", "ABCABA" => "ABBA"',
  longestSubseq("ABBA", "ABCABA"),
  longestSubseq("ABBA", "ABCABA") === "ABBA"
)
