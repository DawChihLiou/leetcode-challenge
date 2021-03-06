/**
* Given two non-empty binary trees s and t, check whether tree t has exactly 
* the same structure and node values with a subtree of s. A subtree of s is 
* a tree consists of a node in s and all of this node's descendants. The 
* tree s could also be considered as a subtree of itself.
*
* Example 1:
*   Given tree s:
*
*      3
*     / \
*    4   5
*   / \
*  1   2
*             
*   Given tree t:
*
*       4 
*      / \
*     1   2
*                      
*   Return true, because t has the same structure and node values with a 
*   subtree of s.
*                      
* Example 2:
*   Given tree s:
*
*       3
*      / \
*     4   5
*    / \
*   1   2
*  /
* 0
*                                            
*   Given tree t:
*                                     
*       4
*      / \
*     1   2
*                                             
*   Return false.
*
* Definition for a binary tree node.
*   function TreeNode(val) {
*       this.val = val;
*       this.left = this.right = null;
* }
*     
* @param {TreeNode} s
* @param {TreeNode} t
* @return {boolean}
*/
var isSubtree = function(s, t) {
    function dfs(s, t) {
        if (!s && !t) return true;
        if (!s || !t) return false;
        if (s.val !== t.val) return false;
        
        // if nodes have the same value, keep comparing
        return dfs(s.left, t.left) && dfs(s.right, t.right);
    }
    
    if (!s) return false;
    
    // see if two trees are identical 
    if (dfs(s, t)) return true;
    // compare every node of tree with subtree
    return isSubtree(s.left, t) || isSubtree(s.right, t);
};}
