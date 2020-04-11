/* Day 11: Diameter of Binary Tree

Given a binary tree, compute the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.

ex:
        1
    2       3
4       5

The longest path would be either 4 to 3 or 5 to 3, which are 3 long
*/


/* Approach: 
    The "length" is the same thing as looking for the depth/height of the tree
    Except edge cases, recursively look for the count of the depth

{{ SPEED }}
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let answer = 0
    
    const countDepth = (root) => {
        // Base Case: if there are no more to count in given layer
        if (!root) return 0

        // Recursive Cases: 
        const left = countDepth(root.left)
        const right = countDepth(root.right)

        // If we ever found a 'new' deepest layer, overwrite the original counter
        if (left + right > answer){
            answer = left + right;
        }

        // Return back to recursive calls: the total height from your level + down
        // i.e. in the example, 4 gets back 0 and 0 so 4's level + down is 1
        // i.e. in the example, 2 gets back 1 and 1 so 2's level + down is 2
        return Math.max(left, right) + 1
    }
    
    countDepth(root)

    return answer
};

/*
    (Solution or Best Answer from Discussion Board)
*/
// Look for 'depth-first search'


// Annoying to test, so done on LeetCode