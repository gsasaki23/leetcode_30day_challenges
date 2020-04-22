/* Day 21: Leftmost Column with at Least a One

A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
BinaryMatrix.dimensions() returns a list of 2 elements [m, n], which means the matrix is m * n.
Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.

*/



/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/* Approach: 
    Originally had a regular O(n^2) search for 1, but that calls .get() too many times to cound as a solution :c

    Start at Row 0, Col Max (top left) and the goal is to move towards top left
    Move left if 1, down if 0
    If we get out of bounds (no more cols on left or no more rows below)
        -If we ever moved the col leftward (= we found at least one 1 somewhere), we moved left every time we found a 1, so return the col one right of the final pointed col
        -Else, we never moved left so we return -1
*/
/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    let rows = binaryMatrix.dimensions()[0];
    let cols = binaryMatrix.dimensions()[1];
    let curr_row = 0
    let curr_col = cols - 1
    
    while(curr_row < rows && curr_col >= 0){
        if (binaryMatrix.get(curr_row, curr_col) === 0){
            curr_row++;
        }
        else{
            curr_col--;
        }
    }
    if (curr_col != cols-1) return curr_col+1;
    else return -1;
};

// Tested on the LeetCode platform...