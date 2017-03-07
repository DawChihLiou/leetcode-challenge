/**
 * Given a string, find the first non-repeating character in it and return it's 
 * index. If it doesn't exist, return -1.
 *
 * Examples:
 *
 *  s = "leetcode"
 *  return 0.
 *
 *  s = "loveleetcode",
 *  return 2.
 * 
 * Note: You may assume the string contain only lowercase letters.
 *
 * Solution Reference:
 *  https://discuss.leetcode.com/topic/55148/java-7-lines-solution-29ms
 *
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const occurances = [];
    const charCodeBase = 'a'.charCodeAt(0)
    
    // collect character occurances
    for (let i = 0; i < s.length; i++) {
	let position = s.charCodeAt(i) - charCodeBase;
        if (!occurances[position]) occurances[position] = 1
        else occurances[position]++;
    
    }
    // find the first unique character
    for (let i = 0; i < s.length; i++)
        if (occurances[s.charCodeAt(i) - charCodeBase] === 1) return i;
    
    return -1;
};
