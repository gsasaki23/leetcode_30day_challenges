/* Day 20: Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Your algorithm's runtime complexity must be in the order of O(log n).
*/


/* Approach: 
    Slowest possible search, REDO THIS LOL
*/
var search = function(nums, target) {
    for (var idx in nums){
        if (nums[idx] === target) return idx;
    }
    return -1;
};

/*
    (Solution or Best Answer from Discussion Board)
*/
// {{ SOLUTION CODE IF CODED OUT}}

let nums = [4,5,6,7,0,1,2];
let target = 0;
console.log(search(nums, target));
//Expected: 4
