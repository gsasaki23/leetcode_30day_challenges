/* Day 18: Number of Islands

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Input:  2-d array
[
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0],
]
Output: number of islands (1)

*/


/* Approach: 
    Starting at top left, find an island (where [row][col] === "1")
        Increment # islands
        From there, recursively convert all adjacent 1s into 0s (because that's part of the same island)
    Repeat until end of the 2d array

*/
const numIslands = (grid) => {
    let count = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            // If island found, increment count and recursively remove adjacent 1s
            if (grid[row][col] == '1') {
                count++
                convert(grid, row, col)
            }
        }
    }
    return count
}



// Depth-first search converts all adjacent 1s into 0s
function convert(grid, row, col) {
    // if out of bounds OR we're at a 0, finished converting
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === '0') {
        return;
    }

    // else, convert to 0
    grid[row][col] = '0'

    // and look at adjacent cells
    // right
    convert(grid, row, col + 1)
    // left
    convert(grid, row, col - 1)
    // up
    convert(grid, row + 1, col)
    // down
    convert(grid, row - 1, col)

    return;
}