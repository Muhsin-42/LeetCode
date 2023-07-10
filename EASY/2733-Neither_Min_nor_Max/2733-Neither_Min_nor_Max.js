/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    nums = [...new Set(nums)].sort((a,b)=>a-b);
    return nums.length<=2 ? -1 : nums[1];
};