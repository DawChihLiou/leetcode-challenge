/**
 * Write a function that takes an unsigned integer and returns the number of ’1' 
 * bits it has (also known as the Hamming weight).
 *
 * For example, the 32-bit integer ’11' has binary representation 
 * 00000000000000000000000000001011, so the function should return 3.
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // remove 0s from base2 representation of the number
    return n.toString(2).replace(/0/g, '').length;
};
