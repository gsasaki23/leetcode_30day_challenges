/* Day 15: Product of Array Except Self

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

*/

/*    ~~~~~~~~~~~~~~ Note: Please solve it without division and in O(n).  ~~~~~~~~~~~~~~~ */
/* Approach: 
    multiply product of everything to the left X everything to the right

    [1,2,3] >> [1,1,2] and [6,3,1] >> [6,3,2]
*/
var productExceptSelf = function(nums) {
    let lefts = [];
    let leftProduct = 1;
    for (let index = 0; index < nums.length; index++) {
        if (index === 0){
            lefts.push(leftProduct);
        }
        else{
            lefts.push(leftProduct *= nums[index-1]);
        }
    }
    
    let rights = [];
    let rightProduct = 1;
    for (let index = nums.length-1; index >= 0; index--) {
        if (index === nums.length - 1){
            rights.push(rightProduct);
        }
        else{
            rights.splice(0,0,rightProduct *= nums[index+1]);
        }
    }
    
    let answer = [];
    for (let index in nums) answer.push(lefts[index] * rights[index]);
    
    return answer;
};



let test = [0];
console.log(productExceptSelf(test));
//Expected: [6,3,2]