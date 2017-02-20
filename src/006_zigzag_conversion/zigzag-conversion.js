/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number 
 * of rows like this: (you may want to display this pattern in a fixed font for 
 * better legibility)
 *
 *  P   A   H   N
 *  A P L S I I G
 *  Y   I   R
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number 
 * of rows:
 *
 *  string convert(string text, int nRows);
 *  convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR"
 *
 * Examples:
 *  1. convert('ABCDEF', 2) returns 'ACEBDF'
 *
 *    A   C   E
 *	B   D   F
 *
 *  2. convert('ABCDEF', 3) returns 'AEBDFC'
 *
 *    A	      E
 *	B   D	F
 *	  C
 *
 *  3. convert('ABCDEF', 4) returns 'ABFCED'
 *
 *    A
 *	B	F
 *	  C   E
 *	    D
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // return original string if can't zigzag
    if (numRows === 1 || s.length < numRows) return s;
    
    let rows = []
    let converted = '';
    let reverse = false;
    let count = 0
    
    // prepare rows
    for (let i = 0; i < numRows; i++) rows[i] = [];
    
    // reverse the push flow when reaching turning points
    for (let i = 0; i < s.length; i++) {
	rows[count].push(s[i]);
        reverse ? count-- : count++;
        if (count === numRows - 1 || count === 0) reverse = !reverse;
    }
    
    // concat rows in order
    for (const r of rows) converted += r.join('');
    
    return converted;
};
