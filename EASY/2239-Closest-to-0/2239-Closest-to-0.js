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