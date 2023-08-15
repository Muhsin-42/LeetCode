/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let ans = [];
    let prd = 1;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0 && count === 0) {
            count++;
        } else if (nums[i] === 0 && count !== 0) {
            count++;
            prd = 0;
            break;
        }
        if (nums[i] !== 0) {
            prd *= nums[i];
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (count > 1) {
            ans.push(0);
        } else if (count === 1) {
            ans.push(nums[i] === 0 ? prd : 0);
        } else {
            ans.push(prd / nums[i]);
        }
    }
    
    return ans;SS
};