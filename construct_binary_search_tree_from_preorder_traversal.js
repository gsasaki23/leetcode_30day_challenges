/* Day 20: Construct Binary Search Tree from Preorder Traversal

Return the root node of a binary search tree that matches the given preorder traversal.
Preorder values are distinct, and there are 1~100 values.

Input: [8,5,1,7,10,12]

Becomes
                8
        5               10
    1      7        null    12

Output: node with 8 is returned, which is [8,5,10,1,7,null,12]
*/


/* Approach:
    Recursively build nodes with smaller/bigger vals

    ex) [8,5,1,7,10,12] takes 8 as root | [5,1,7] as left | [10,12] as right
        >> 5 as root | [1] as left | [7] as right
            >> 1 as root | [null] as left | [7] as right
                >> null, so return back
        etc.
*/

// ~~~~~~~~~ I N I T I A L ~~~~~~~~~
// var bstFromPreorder = function(preorder) {
//     // Base case: given list is null
//     if (preorder.length === 0) return null;

//     // destructure where 
//     //  rest is a copy of preorder
//     //  first is the first val of preorder
//     const [first, ...rest] = preorder
    
//     // Recursive cases: we'll either get back a node or null
//     const root = new TreeNode(first)
//     root.left = bstFromPreorder(rest.filter(n => n < first))
//     root.right = bstFromPreorder(rest.filter(n => n > first))
//     return root;
// };

// No recursive calls when there are no more less/greater values to check
// = hopefully faster?
var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder[0])

    let leftList = preorder.filter(n => n < preorder[0]);
    // If the filtered list is empty, assume there are no more nodes to add to left
    root.left = (leftList.length !== 0)
    ? bstFromPreorder(leftList)
    : null;
    
    let rightList = preorder.filter(n => n > preorder[0]);
    // If the filtered list is empty, assume there are no more nodes to add to right
    root.right = (rightList.length !== 0)
        ? bstFromPreorder(rightList)
        : null;
    
    return root
};

