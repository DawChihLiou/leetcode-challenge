/**
 * Given a List of words, return the words that can be typed using letters 
 * of alphabet on only one row's of American keyboard like the image below.
 *
 * Example:
 *  Input: ["Hello", "Alaska", "Dad", "Peace"]
 *  Output: ["Alaska", "Dad"]
 * 
 * Note:
 *  You may use one character in the keyboard more than once.
 *  You may assume the input string will only contain letters of alphabet.
 *
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    return words.filter((w) => {
	// if word fails all three rows, remove from array
	if (
	    !/^[qwertyuiop]*$/i.test(w) &&
	    !/^[asdfghjkl]*$/i.test(w) &&
	    !/^[zxcvbnm]*$/i.test(w)
	) return false;
            
        return true;
    });
};
