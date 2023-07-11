# Intuition
* The goal of the function is to find the closest number to zero in the given array.
# Approach
* Initialize the variable closest to the first element in the input array.
* Iterate over each element in the array.
Check if the absolute difference between the current element and zero is equal to the current closest value. If so, update closest to the maximum of the current closest value and the current element.
* If the absolute difference is less than the current closest value, update closest to the current element.
* Return the closest value.
# Complexity
- Time complexity: O(n)
- Space complexity: O(1)
# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  let closest = nums[0];
  for(let i=0; i<nums.length; i++){
      if(Math.abs(0-nums[i]===closest))
      {
          closest = closest > nums[i] ? closest : nums[i]; 
      }
     else if(Math.abs(0-nums[i])<Math.abs(closest))
      { 
        closest = nums[i]
      }
  }
  return closest;
};
```