/**
 * Given an integer array with even length, where different numbers in this array 
 * represent different kinds of candies. Each number means one candy of the 
 * corresponding kind. You need to distribute these candies equally in number to 
 * brother and sister. Return the maximum number of kinds of candies the sister 
 * could gain.
 *
 * Example 1:
 *  Input: candies = [1,1,2,2,3,3]
 *  Output: 3
 *  Explanation:
 *    There are three different kinds of candies (1, 2 and 3), and two candies for 
 *    each kind. Optimal distribution: The sister has candies [1,2,3] and the 
 *    brother has candies [1,2,3], too. The sister has three different kinds of 
 *    candies. 
 * 
 * Example 2:
 *  Input: candies = [1,1,2,3]
 *  Output: 2
 *  Explanation: 
 *    For example, the sister has candies [2,3] and the brother has 
 *    candies [1,1]. The sister has two different kinds of candies, the brother has 
 *    only one kind of candies.
 *
 * Illustrations: 
 *  [1,1,2,3] -> 2
 *  len: 4
 *  set: {1,2,3}
 *
 *  [1,1,2,2,3,3] -> 3
 *  len: 6
 *  set: {1,2,3}
 *
 *  [1,1,2,3,4,5] -> 3
 *  len: 6
 *  set: {1,2,3,4,5}
 *
 *  [1,1,2,3,4,5,6,7] -> 4
 *  len: 8
 *  set: {1,2,3,4,5,6,7}
 *
 *  [1,1,1,2,3,4,5,5] -> 4
 *  len: 8
 *  set: {1,2,3,4,5}
 *
 *  [1,1,1,1,1,1,2,2] -> 2
 *  len: 8
 *  set: {1,2}
 *
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const candySet = new Set(candies);

    // sister picks half of the candies from the set
    // she gets all kinds of candies if set size is less than half of the candies
    return Math.min(candySet.size, candies.length / 2);
};
