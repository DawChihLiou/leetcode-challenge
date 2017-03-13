/**
 * Given a string which consists of lowercase or uppercase letters, find the length 
 * of the longest palindromes that can be built with those letters.
 *
 * This is case sensitive, for example "Aa" is not considered a palindrome here.
 *
 * Note:
 *  Assume the length of given string will not exceed 1,010.
 *
 * Example:
 *
 *  Input:
 *    "abccccdd"
 *  Output:
 *    7
 *  Explanation:
 *    One longest palindrome that can be built is "dccaccd", whose length is 7.
 *
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const set = {};
    let count = 0;
    let keys;
    
    // collection of characters and their occurrences
    for (let i = 0; i < s.length; i++) {
        if (!set[s.charAt(i)]) set[s.charAt(i)] = 1;
        else set[s.charAt(i)]++;
    }

    keys = Object.keys(set);
    
    // palindromes have characters in pairs and one solo character
    for (const k of keys) {
        if (set[k] % 2 !== 0) count = count + set[k] - 1;
        else count += set[k];
    }

    for (const k of keys) {
        if (set[k] % 2 === 0) continue;
        count += 1;
        break;
    }
    
    return count;
};
