/* Day 4: Move Zeros

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/


/* Approach: Loop through each idx once. 
If it's 0, then we remove it and add it to the end. 
Each time, we can assume that we'd need to loop one less time than we originally thought, so we can decrement the total loop count.

O(n2) assuming splice is O(n), but it's faster than the "optimal" solution in some cases because of the skips.
*/
var moveZeroes = function(nums) {
    let loop_count = nums.length
    for (let i = 0; i < loop_count; i++) {        
        if (nums[i] === 0){
            nums.splice(i,1);
            nums.push(0);
            i--;
            loop_count--;
        }
    }
};

/*
    (From the discussions)
    Approach: swap any non-zero with what would be the 'first' zero at the very end state of [anything, zeros]
*/
var moveZeroes_solution = function(nums) {
    let firstZeroIdx = 0;
    for (let i = 0; i < nums.length; i++) {       
        if (nums[i] !== 0){
            [nums[firstZeroIdx],nums[i]]=[nums[i],nums[firstZeroIdx]];
            firstZeroIdx++
        }
    }
};


let test = [0,1,0,3,12];
moveZeroes(test);
console.log(test);
//Expected: [1,3,12,0,0]
