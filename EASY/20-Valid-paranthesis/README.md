# Intuition
The problem is to check whether a given string of parentheses is valid or not.
# Approach
We use a stack to keep track of the opening parentheses. For each character in the string, if it is an opening parenthesis, we push it onto the stack. If it is a closing parenthesis, we check if the top of the stack matches the current closing parenthesis. If they match, we pop the top element from the stack. Finally, we check if the stack is empty, which indicates that all opening parentheses have been matched.

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)
# Code
```
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2!=0) return false;
    let stack = [];
    
    for(let i=0; i< s.length; i++){
        stack.push(s[i])
        let len = stack.length-1;
        if((stack[len-1]=='{' && stack[len]=='}') ||  
            (stack[len-1]=='[' && stack[len]==']') ||
            (stack[len-1]=='(' && stack[len]==')') && len>0)
        {
            stack.pop();
            stack.pop();
        }
    }
    
    return stack.length? false: true
};
```