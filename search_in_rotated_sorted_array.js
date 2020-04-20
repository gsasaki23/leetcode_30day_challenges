/* Day 20: Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Your algorithm's runtime complexity must be in the order of O(log n).
*/


/* Approach: 
    Assume that either rotated half will still be sorted
*/
var search = function (nums, target) {
    // Left edge of search scope
    let left = 0;
    // Right edge of search scope
    let right = nums.length - 1;

    while (left <= right) {
        // find middle index
        let mid = Math.floor((left + right) / 2);

        // Return if target was found
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            // Left side of middle is sorted. Is target in that range?
            if (nums[left] <= target && target <= nums[mid]) {
                // Yes, so shrink the search to the left half and repeat loop
                right = mid - 1;
            } 
            else {
                // Target is in the right, shrink search to the right half and repeat loop
                left = mid + 1;
            }
        }
        // Same logic, except mirrored
        else {
            if (nums[mid] <= target && target <= nums[right]) {
                left = mid + 1;
            } 
            else {
                right = mid - 1;
            }
        }
    }
    // While loop exited MEANS search scope became illegal MEANS target was never found
    return -1;
};


let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(search(nums, target));
//Expected: 4
