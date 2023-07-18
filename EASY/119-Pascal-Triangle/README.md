# Intuition
The code generates Pascal's triangle, where each number is the sum of the two numbers directly above it.
# Approach
To generate Pascal's triangle, we iterate over each row and each element within the row. We initialize the triangle array and populate it by adding the appropriate numbers based on the current row and column indices.

# Complexity
- Time complexity:O(n2)

- Space complexity:O(n2)
# Code
```
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let pasc=[];
    for(let i=0; i<numRows;i++){
        for(let j=0; j<=i ; j++){
            if(j===0) pasc.push([1]);
            else if(j===i) pasc[i].push(1)
            else pasc[i].push(pasc[i-1][j-1]+pasc[i-1][j])
        }
    }
    return pasc
};
```