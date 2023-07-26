# Intuition
We want to assign ranks to athletes based on their scores.

# Approach
To achieve this, we can sort the scores in descending order and then determine the rank of each athlete based on their position in the sorted array.
# Complexity
- Time complexity:O(n logn)
- Space complexity: O(n)
# Code
```
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sorted = [...score].sort((a,b)=>b-a);
    let res = score.map((ele)=>{
        let index = sorted.indexOf(ele);
        if(index===0) return "Gold Medal"
        if(index===1) return "Silver Medal"
        if(index===2) return "Bronze Medal"
        return index+1+""
    })
    return res
};
```