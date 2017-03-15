/**
 * Given an array of integers, find if the array contains any duplicates. Your 
 * function should return true if any value appears at least twice in the array, 
 * and it should return false if every element is distinct.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    
    // duplicate numbers locates side by side in the sorted array
    for (const [i, n] of nums.entries())
        if (i > 0 && n === nums[i-1]) return true;
    
    return false;
};
