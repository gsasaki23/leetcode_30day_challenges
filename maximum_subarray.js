/* Day 3: Maximum Subarray

Given [nums], find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

*/


/* Approach: 
    Loop over each index, keeping the maxSum and "streak" sum
    For each index
        use whatever is stronger of A) "Streak" + idx or B) idx
        replace maxSum if that "streak" is greater
O(n)
*/
var maxSubArray = function(nums) {
    if (nums.length === 0) return -Infinity;
    if (nums.length === 1) return nums[0];

    var answer = -Infinity;
    var temp = 0;

    // Look at each Idx
    for (var i = 0; i < nums.length; i++) {  
        // is it > to merge it to an ongoing 'streak', or to use it by itself?
        if (temp + nums[i] > nums[i]){
            temp = temp + nums[i];
        }
        else{
            temp = nums[i];
        }

        // is the newest 'streak' > answer?
        if (temp > answer){
            answer = temp;
        }
    }
    return answer;

};

/*
    Solution: Divide and conquer.
    Recursively look at the max subarray of left and right halves
    then find the max subarray covers both sides of the initial middle border
    find the maxSum of all 3 searches
*/

let test = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(test));
//Expected: 6 because largest subArray is [4,-1,2,1]
