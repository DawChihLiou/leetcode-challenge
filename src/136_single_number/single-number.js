/**
 * Given an array of integers, every element appears twice except for one. Find 
 * that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it 
 * without using extra memory?
 *
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var single = 0;
    
    /* 
     * A XOR A = 0 and the XOR operator is commutative
     * XOR will return 1 only on two different bits. So if two numbers are the 
     * same, XOR will return 0. Finally only one number left.
     * A ^ A = 0 and A ^ B ^ A = B
     */
    for (var i = 0; i < nums.length; i++) 
	single ^= nums[i];
    
    return single;
};
