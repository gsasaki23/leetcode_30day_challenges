/* Day 18: Minimum Path Sum

Given a m x height grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path. Move only down or right.

Input:
[
    [1,3,1],
    [1,5,1],
    [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.

*/


/* Approach: 
    Convert every cell into the minimum sum taken to reach it from [0,0], then return the bottom right.
*/
var minPathSum = function(grid) {
    // Convert the far left col ([X][0])
    // ex. [2][0] =  [0][0] + [1][0] + [2][0]
    for (let index = 1; index < grid.length; index++) {
        grid[index][0] += grid[index-1][0];        
    }
    
    // Convert the top row ([0][X])
    // ex. [0][2] =  [0][0] + [0][1] + [0][2]
    for (let index = 1; index < grid[0].length; index++) {
        grid[0][index] += grid[0][index-1];
    }

    // Convert the rest (= every cell except left col or top row) of the 2D array 
    // ex. for [2][2], add whichever is smaller: [1][2] or [2][1]
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
        }
    }
    
	// Return the bottom right corner
    return grid[grid.length-1][grid[0].length-1];
}



/*
    (Solution or Best Answer from Discussion Board)
*/
// {{ SOLUTION CODE IF CODED OUT}}

let test = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
];

console.log(minPathSum(test));
//Expected: 7