/**
 * Calculate the sum of two integers a and b, but you are not allowed to use 
 * the operator + and -.
 *
 * Example:
 *  Given a = 1 and b = 2, return 3.
 * 
 * Review the stackoverflow below for clarification
 *  http://stackoverflow.com/questions/9070937/adding-two-numbers-without-operator-clarification
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    // the sum without carry over
    const sum = a ^ b;
    // the carry overs with the correct position
    const carry = (a & b) << 1;
    
    // repeat the algorithm until there are no more carry overs
    return ((a & b) !== 0) ? getSum(sum, carry) : sum;
};
