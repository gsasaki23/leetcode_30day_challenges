/* Day 7: Counting Elements

Given an integer array arr, count element x such that x + 1 is also in arr.
If there're duplicates in arr, count them seperately.

*/


/* Approach: 
    use a hashmap to store unique "plus one"s
    loop over arr to get count of nums with plus ones
O(2n) = O(n)?
*/
var countElements = function(arr) {
    let plusones = new Map();
    for (let num of arr) {
        if (!plusones.hasOwnProperty(num)){
            plusones[num] = "seen";
        }
    }

    let answer = 0;
    for (let num of arr) {
        if (plusones.hasOwnProperty(num + 1)){
                answer++;
        }
    }

    return answer;
}


let test = [1,3,2,3,5,0];
console.log(countElements(test));
//Expected: 3
// 0, 1 and 2 are counted since 1, 2 and 3 are in arr.