/**
 * You are a professional robber planning to rob houses along a street. Each 
 * house has a certain amount of money stashed, the only constraint stopping 
 * you from robbing each of them is that adjacent houses have security 
 * system connected and it will automatically contact the police if two 
 * adjacent houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of 
 * each house, determine the maximum amount of money you can rob tonight 
 * without alerting the police.
 *
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    
    let n = nums.length;
    let progress = [nums[0], Math.max(nums[0], nums[1])];
    
    // trance the maximum gain every step away
    for (let i = 2; i < n; i++)
        progress.push(Math.max(progress[i-2]+nums[i], progress[i-1]))
    
    return progress[n-1];
};
