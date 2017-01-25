/**
 * Given a string, determine if a permutation of the string could form a palindrome.
 *
 * ------------------------------------------------------
 * For example,
 *   "code" -> False, "aab" -> True, "carerac" -> True.
 * ------------------------------------------------------
 *
 * Hint:
 *   1. Consider the palindromes of odd vs even length. What difference do you notice?
 *   2. Count the frequency of each character.
 *   3. If each character occurs even number of times, then it must be a palindrome. How 
 *      about character which occurs odd number of times?
 *
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    const charset = {};
    
    // maintain a set of charactors that occur odd number of times
    for (var c of s) {
            if (charset[c]) delete charset[c];
            else charset[c] = 1;
        }
    
    // return true if zero or one charactor that occur odd number of times
    return Object.keys(charset).length <= 1 ? true : false;
};
