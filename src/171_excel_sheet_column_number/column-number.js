/**
 * Related to question [Excel Sheet Column Title]
 * (https://leetcode.com/problems/excel-sheet-column-title/?tab=Description)
 *
 * Given a column title as appear in an Excel sheet, return its corresponding 
 * column number.
 *
 * For example:
 *
 *  A -> 1
 *  B -> 2
 *  C -> 3
 *  ...
 *  Z -> 26
 *  AA -> 27
 *  AB -> 28 
 *
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    const charCodeBase = 'A'.charCodeAt(0) - 1;
    const n = s.length;
    let number = 0;
    
    // think of it as base 26
    for (let i = 0; i < n; i++)
        number += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, n-i-1);
    
    return number;
};
