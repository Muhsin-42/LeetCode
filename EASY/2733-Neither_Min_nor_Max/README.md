# Intuition
1. Identify the unique elements in the given array and sort them in ascending order.
2. If the length of the sorted array is less than or equal to 2, return -1.
3. Otherwise, return the second element of the sorted array.

# Approach
1. Convert the input array to a set to eliminate duplicates.
2. Convert the set back to an array and sort it in ascending order.
3. Check the length of the sorted array.
4. Return the second element if the length is greater than 2, otherwise return -1.

# Complexity
- Time complexity: O(n log n) due to the sorting operation.
- Space complexity: O(n) to store the set of unique elements

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    nums = [...new Set(nums)].sort((a,b)=>a-b);
    return nums.length<=2 ? -1 : nums[1];
};
```