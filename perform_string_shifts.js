/* Day 14: Perform String Shifts

You are given 
1) a string s containing lowercase English letters, and 
2) a matrix shift, where shift[i] = [direction, amount]:
    direction can be 0 (for left shift) or 1 (for right shift)
    amount is the amount by which string s is to be shifted.

A left shift by 1 means remove the first character of s and append it to the end.
Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
Return the final string after all operations.

Example: shifting "a,b,c" by [1,1] means "c,a,b"

Constraints:
    1 <= s.length <= 100
    s only contains lower case English letters.
    1 <= shift.length <= 100
    shift[i].length == 2
    0 <= shift[i][0] <= 1
    0 <= shift[i][1] <= 100

*/


/* Approach: 
    Get the total "shift" first
    Apply shift
{{ SPEED }}
*/
var stringShift = function(s, shift) {
    let sum = 0;
    for (let matrix of shift){
        // - for left, + for right
        matrix[0] === 0 ? sum -= matrix[1] : sum += matrix[1];
    }  
    // We can cut extra shift "laps"
    sum = sum % s.length

    // Handle shifts
    if (sum === 0) {return s;}
    return sum > 0 
        ? s.slice(s.length - sum) + s.slice(0,s.length - sum)
        : s.slice((sum * -1))+s.slice(0,(sum * -1));
};

/*
    (Solution or Best Answer from Discussion Board)
*/
// {{ SOLUTION CODE IF CODED OUT}}

let s = "abcdefg";
let shift = [[1,1],[1,1],[0,2],[1,3]]
console.log(stringShift(s,shift));
//Expected: efgabcd
