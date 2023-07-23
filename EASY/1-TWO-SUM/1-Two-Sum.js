/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let compliment = {}
    for(let i= 0; i< nums.length; i++){
        if(nums[i] in compliment)
            return [compliment[nums[i]],i]
        else
            compliment[target-nums[i]] = i;
    }
};

