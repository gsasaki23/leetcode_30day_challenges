/* Day 25: Jump Game

Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.
*/


/* Approach: 
    
{{ SPEED }}
*/

var canJump = function (nums) {
    let runner = 0;
    let max = 0;

    while (runner < nums.length) {
        // Biggest possible jump from current idx
        max = Math.max(max, runner + nums[runner]);

        console.log("Max: " + max + ", Runner: " + runner);
        

        // we made it to the goal (or past it)
        if (max >= nums.length - 1) {
            return true;
        }

        // Early exit: found a 0
        // Should keep looking if there is more to look
        if (max <= runner && nums[runner] === 0) {
            return false;
        }

        runner++;
    }

    // return false;
};

let test = [2, 3, 3, 1, 4];
console.log(canJump(test)); // true (2,1,1)
let test2 = [3, 2, 1, 0, 4];
console.log(canJump(test2)); // false (3,0)
let test3 = [2, 0, 0];
console.log(canJump(test3)); // true (1,0)
let test4 = [2, 5, 0, 0];
console.log(canJump(test4)); // true ()