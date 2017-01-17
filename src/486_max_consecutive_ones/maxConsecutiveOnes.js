/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  return nums.join('').split('0').reduce((acc, cur) => (acc > cur) ? acc : cur).length;
};
