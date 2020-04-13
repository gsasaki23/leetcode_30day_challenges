/* Day 13: Contigious Array

Given a binary array, find the maximum length of a contiguous subarray with equal AMOUNTS of 0 and 1.

Input:[0,0,0,0,0,1,1]
Output: 4. The last [0,0,1,1] has equal amounts of 0s and 1s (2 of each)
*/


/* Approach: 
    Let total = +1 when 1 and -1 when 0
    Make a map of {total of 1s and 0s, last idx where that total happened}
    
    Every time a total shows up again, find the last idx where that happened and calculate the length from there to current index

O(n), we go through entire array and the reference dict is constant access
*/
var findMaxLength = function(nums) {
    // Early exit edge case
    if (nums.length < 2) return 0;

    let map = new Map();
    // start map with {0,-1} because the first time a total gets to 0, we need an index to compare to
    map[0] = -1; 
    let maxLen = 0;
    let total = 0;
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] === 1){total++;}
        else{total--;}
        
        if (map.hasOwnProperty(total)){
            // from last index with same total to current: index - map[total].index
            let distanceToOld = index - map[total];
            
            // if that > maxLen, overwrite
            maxLen = Math.max(maxLen, distanceToOld);
        }
        else {map[total] = index;}
    }
    return maxLen;
};

let test = [0,1];
console.log(findMaxLength(test));
//Expected: 2