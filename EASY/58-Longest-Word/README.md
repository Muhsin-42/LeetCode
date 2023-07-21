# Intuition
The problem requires finding the length of the last word in a given string. We can approach this by first trimming the input string to remove any leading or trailing spaces. Then, we split the trimmed string into an array of words using space as the delimiter. Finally, we access the last element of the array and return its length.

# Approach
1. Trim the input string to remove leading and trailing spaces.
2. Split the trimmed string into an array of words using space as the delimiter.
3. Access the last element of the array and return its length.
# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.trim().split(' ')
   return words[words.length-1].length;
};
```