/**
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Examples:
 *  1. Given "abcabcbb", the answer is "abc", which the length is 3.
 *  2. Given "bbbbb", the answer is "b", with the length of 1.
 *  3. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must 
 *     be a substring, "pwke" is a subsequence and not a substring.
 *  
 * Solution reference: 
 *  https://discuss.leetcode.com/topic/25499/share-my-java-solution-using-hashset
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let i = 0;
    let j = 0;
    let longest = 0;
    
    while (j < s.length) {
	if (set.has(s[j])) set.delete(s[i++]);
        else {
	    set.add(s[j++]);
	    longest = Math.max(longest, set.size);
	}
    }
    
    return longest;
};
