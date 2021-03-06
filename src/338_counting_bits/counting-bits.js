/**
 * Given a non negative integer number num. For every numbers i in the range 
 * 0 ≤ i ≤ num calculate the number of 1's in their binary representation and 
 * return them as an array.
 *
 * Example:
 *  For num = 5 you should return [0,1,1,2,1,2].
 *
 * Follow up:
 *
 *  1. It is very easy to come up with a solution with run time O(n*sizeof(integer)). 
 *     But can you do it in linear time O(n) /possibly in a single pass?
 *  2. Space complexity should be O(n).
 *  3. Can you do it like a boss? Do it without using any builtin function like 
 *     __builtin_popcount in c++ or in any other language. 
 *
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let bits = [];
    
    for (let i = 0; i <= num; i++)
        bits.push(Number(i).toString(2).replace(/0/g, '').length);
        
    return bits;
};
