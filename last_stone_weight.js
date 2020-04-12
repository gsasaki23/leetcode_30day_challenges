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
var lastStoneWeightSolution = function(stones) {
    // Sort stones smallest to largest
    stones = stones.sort((a,b)=>a-b);
    
    while(stones.length > 1) {
        // Get new stone while removing the 2 largest at the time
        const newStone = stones.pop() - stones.pop();
        
        // insert new stone back in at appropriate index
        if(newStone > 0) {
            let idx = 0;
            // breaks when idx goes out of bounds?
            while(newStone > stones[idx]) {
                idx++;
            }
            stones.splice(idx, 0, newStone);
        }
        // if there are no stones, and the last 2 stones cancelled each other out
        else if (stones.length === 0){
            return 0;
        }
    }
    
    return stones[0];
}


let test = [1,3,4,7,7,800,900];
console.log(lastStoneWeightSolution(test));
//Expected: 1