/**
 * Find the sum of all left leaves in a given binary tree.
 *
 * Example:
 *
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 * There are two left leaves in the binary tree, with values 9 and 15 
 * respectively. Return 24.
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
var sumOfLeftLeaves = function(root) {
    let leaves = [];
    if (root) dfs(root, leaves);
    return leaves.reduce((sum, val) => sum + val, 0);
};

function dfs(node, leaves) {
    if (node.left) dfs(node.left, leaves);
    if (node.right) dfs(node.right, leaves);
    // it's a left leave if the left node doesn't have child nodes
    if (node.left && !node.left.left && !node.left.right) leaves.push(node.left.val);
}
