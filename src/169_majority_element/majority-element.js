/**
 * Given an array of size n, find the majority element. The majority element is the 
 * element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always exist 
 * in the array.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = nums.length;

    return nums.reduce((counts, num) => {
	if (!counts[num]) counts[num] = 1;
	    else counts[num]++;
            return counts;
    }, []).findIndex(num => num > n/2);
};
