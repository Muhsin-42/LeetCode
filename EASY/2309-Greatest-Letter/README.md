# Intuition
Find the greatest letter in the given string.


# Approach
Iterate through each character in the string. If the character is an uppercase letter and its lowercase counterpart exists in the string, update the hold variable with the greater letter.

# Complexity
- Time complexity:O(n)
- Space complexity: O(1)

# Code
```
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let hold='';
    for(let i=0;i<s.length;i++){
        if(s[i].toLowerCase()!=s[i] && s.includes(s[i].toLowerCase())){
            hold=hold>s[i]?hold:s[i];
        }
    }
    return hold;
};
```