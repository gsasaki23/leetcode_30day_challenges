/* Day 22: Subarray Sum Equals K

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

*/


/* Approach: 
    Brute Force O(n^2)
*/
var subarraySum = function(nums, k) {
    let answer = 0;
    for (let i=0;i<nums.length;i++){
        let sum = 0;
        for (let j=i;j<nums.length;j++){
            sum += nums[j];
            if (sum === k) answer++;
        }
    }
    return answer;
};

/*
    Solution (Java)
        Make HashMap of {cumulative sum : # occurence}
        # times sum-k happens = there is a subarray with sum k = increment answer int
*/
// public class Solution {
//     public int subarraySum(int[] nums, int k) {
//         int count = 0, sum = 0;
//         HashMap < Integer, Integer > map = new HashMap < > ();
//         map.put(0, 1);
//         for (int i = 0; i < nums.length; i++) {
//             sum += nums[i];
//             if (map.containsKey(sum - k))
//                 count += map.get(sum - k);
//             map.put(sum, map.getOrDefault(sum, 0) + 1);
//         }
//         return count;
//     }
// }



let nums = [1,1,1], k = 2;
console.log(subarraySum(nums, k));
//Expected: 2
