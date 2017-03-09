/**
 * Given two binary trees, write a function to check if they are equal or not.
 *
 * Two binary trees are considered equal if they are structurally identical and 
 * the nodes have the same value.
 *
 * Definition for a binary tree node.
 *  
 *  function TreeNode(val) {
 *    this.val = val;
 *    this.left = this.right = null;
 *  }
 * 
 * Test case 1:
 *
 *  n -> null
 *  o -> return true
 *  x -> return false
 *
 *	 o10		   o10 
 *      /    \	          /    \
 *    o5     o15	o5     o15
 *   /  \   /  \       /  \    /  \
 * on   on on   on   on   on on    on 
 *  
 *
 * Test case 2:
 * 
 *	 x10	           x10
 *      /    \	          /   \
 *    x5     x15        x5    xn
 *   /  \   /  \       /  \
 *  on  xn n    n    on   x15
 *  
 * Explanation:
 *  DFS goes from the left child and then the right child.
 *  And then up a level and do the same thing. The comparison logic is in the 
 *  following order.
 *    
 *    1. return true if both nodes are null
 *    2. return false if one of the nodes is null or the values are not idential
 *    3. traverse both trees
 *
 *  It will start from comparing the leaves. If both left and right comparisons
 *  are true, the parent node return true; otherwise return false;
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    // not identical if one of nodes is null or the values are different
    if ((!p && q) || (p && !q) || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
