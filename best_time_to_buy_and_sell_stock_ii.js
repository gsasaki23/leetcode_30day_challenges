/* Day 5: Best Time to Buy and Sell Stock II

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

*/


/* Approach: 
    find longest upwards substring

O(n)
*/
var maxProfit = function(prices) {
    if(prices.length < 1) return 0;
    let total = 0;
    let streakHead = 0;
    let streakTail = 0;

    for(let i=0;i<prices.length - 1;i++){
        if (prices[i] > prices[i+1]){
            if(streakHead < streakTail){
                total += prices[streakTail] - prices[streakHead];
            }
            streakHead = i + 1;
            streakTail = i + 1;
        }
        else {
            streakTail = i+1;
        }
    }
    if(streakHead < streakTail){
        total += prices[streakTail] - prices[streakHead];
    }
    return total;
};

/*
    (Solution)
    Add any upwards difference to the total sum.
    ex: if there's a [1,2,3] streak, the difference of [1,3] = [1,2]+[2,3] anyways
*/
var maxProfit_solution = function(prices) {
    if(prices.length < 1) return 0;
    let total = 0;

    for(let i=0;i<prices.length - 1;i++){
        if (prices[i] < prices[i+1]){
            total += (prices[i+1] - prices[i]);
        }
    }
    return total;
};

let test = [7,6,8,3,1];
console.log(maxProfit_solution(test));
//Expected: 4