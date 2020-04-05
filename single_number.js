/* Day 1: Single Number

Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Try for O(n) speed and without using extra memory.
*/

/* Approach: Loop through once each and make a hashmap of {val: #times seen}
Find the one val that was seen once

O(n)
*/
var singleNumber = function (nums) {
    // Make hashmap
    let seen = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        let num = nums[idx].toString();
        if (seen.hasOwnProperty(num)) {
            seen[num] = seen[num] + 1;
        }
        else {
            seen[num] = 1;
        }
    }
    // Find single in hashmap
    for (key in seen) {
        if (seen[key] === 1) {
            return key;
        }
    }
};

/*
    (Solution #1)
    num XOR 0 is num, num XOR num is 0. 
    Loop through entire list, XOR everything together and we get the leftover.

    (Solution #2)
    Make a set of every num and the sum of all nums.
    (the sum of the set * 2) - the sum = the leftover.
*/


let test = [4,1,2,1,2];
console.log(singleNumber(test));
//Expected: 4
