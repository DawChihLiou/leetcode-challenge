/**
 * Given a binary search tree with non-negative values, find the minimum absolute difference 
 * between values of any two nodes.
 *
 * Example:
 *  Input:
 *
 *    1
 *     \
 *      3
 *     /
 *    2
 *
 *  Output:
 *    1
 *
 * Explanation:
 *  The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 
 *  2 and 3).
 *
 * Additional Test case: 
 *  [8,3,10,1,6,null,14,null,null,4,7,13,null]
 *
 * Definition for a binary tree node.
 *  
 *  function TreeNode(val) {
 *	this.val = val;
 *	this.left = this.right = null;
 *  }
 *
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let values = [];

    // run bsf to collect all values in the tree   
    bsf(root, values);
    
    // loop through values and keep track of minimun difference
    return values.reduce((min, val, i) => {
        if (i === 0) return min;
        return Math.min(min, Math.abs(val - values[i-1]));
    }, Number.MAX_SAFE_INTEGER);
};

function bsf (node, arr) {
    if (node.left) bsf(node.left, arr);
    arr.push(node.val);
    if (node.right) bsf(node.right, arr);
}
