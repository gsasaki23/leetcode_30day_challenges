/* Day 12: Last Stone Weight

We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

*/


/* Approach: 
    {{ APPROACH }}
{{ SPEED }}
*/
var lastStoneWeight = function(stones) {
    while (stones.length > 1){
        let largestIdx = 0;
        for(var stoneIdx in stones){
            if(stones[stoneIdx] > stones[largestIdx]){
                largestIdx = stoneIdx;
            }
        }
        let largestStone = stones[largestIdx];
        stones.splice(largestIdx,1);
        
        let secondIdx = 0;
        for(var stoneIdx in stones){
            if(stones[stoneIdx] > stones[secondIdx]){
                secondIdx = stoneIdx;
            }
        }
        let secondStone = stones[secondIdx];
        stones.splice(secondIdx,1);

        let newStone = largestStone - secondStone;
        if (newStone > 0) {
            stones.push(newStone);
        }
    }    
    if (stones.length === 1){
        return stones[0];
    }
    return 0;
};

/*
    (Solution or Best Answer from Discussion Board)
*/
// {{ SOLUTION CODE IF CODED OUT}}

let test = [1,3];
// console.log(lastStoneWeight(test));
//Expected: 1