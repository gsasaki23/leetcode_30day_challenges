/* Day 2: Happy Number

A happy number is a number defined by the following process: 
Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is happy
1^2 + 9^2 = 82
8^2 + ^2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
*/


/* Approach: 
    Build the "next" int
    If it's 1, then it's happy
    If it's been seen before in the Set, then we're stuck in a loop so we can assume it'll never be happy
    If it's never been seen before but it isn't 1, then add it to the Set

    +Speed boost with the "squares" dictionary rather than calculating it every time
*/
const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81}

var isHappy = function(n) {
    let seen = new Set();
    while(n!==1){        
        // Build next int
        let nStr = n.toString();
        n = 0;
        for (let idx=0; idx<nStr.length; idx++){
            n += squares[nStr[idx]];
        }
        
        // If seen, we're in a loop
        if (seen.has(n)) return false;
        
        // Else, add to seen
        seen.add(n)
    }
    return true;
};

/*
    No solutions available
*/

let test = 19;
console.log(isHappy(test));
//Expected: true
