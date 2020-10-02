def lengthOfLongestSubstring(s):
        uniq = set(s)
        final = []
        result = ''
        for i, letter in enumerate(s):
            if not letter in result:
                result += letter
                final.append(result)
            else:
                result = ''
                result += letter
        if len(sorted(final)):
            return sorted(final)
        else:
            return 0
print(lengthOfLongestSubstring("dvdf"))
