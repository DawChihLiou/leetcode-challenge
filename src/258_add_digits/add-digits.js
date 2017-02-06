/**
 * Given a non-negative integer num, repeatedly add all its digits until the 
 * result has only one digit.
 *
 * For example:
 *  Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has 
 *  only one digit, return it.
 *
 * Follow up:
 *  Could you do it without any loop/recursion in O(1) runtime?
 *
 * Hint:
 *  1. A naive implementation of the above process is trivial. Could you come 
 *     up with other methods?
 *  2. What are all the possible results?
 *
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let a = Math.floor(num / 10);
    let b = num % 10;
    
    if (a + b < 10) return a + b;
    return addDigits(a + b);
};
