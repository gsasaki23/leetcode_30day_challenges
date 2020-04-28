/* Day 26: Longest Common Subsequence

Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

*/


/* Approach: 
    Find shorter len string, loop over each char and see if the larger partner has all chars
    If not, pop one char off and try again until found, or that len becomes 0
{{ SPEED }}
*/
var longestCommonSubsequence = function(text1, text2) {
    const memo = new Map();
    return recursion(text1, text2, text1.length - 1, text2.length - 1, memo);
};

function recursion(text1, text2, index1, index2, memo) {
    // base cases
    if (index1 < 0 || index2 < 0) return 0;
    
    const key = index1 + '#' + index2;
    
    if (memo.has(key)) return memo.get(key);
    
    let result;

    if (text1.charAt(index1) === text2.charAt(index2)) {
        result = recursion(text1, text2, index1 - 1, index2 - 1, memo) + 1;
    } else {
        result = Math.max(recursion(text1, text2, index1, index2 - 1, memo), recursion(text1, text2, index1 - 1, index2, memo));
    }
    
    memo.set(key, result);
    return result;
}

/*
    Dynamic Programming Approach from Discussion Board
*/
var longestCommonSubsequence_solution = function(text1, text2) {
    const dp = [];
    let m = text1.length;
    let n = text2.length;
    
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // two  possible scenarioes:
            // 1. the current char of text1 and text2 does not match
            // 2. the current char of text1 and text2 matches
            
			if (text1.charAt(i - 1) != text2.charAt(j - 1)) {
                // check left and top for longer subsequence length
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
            else {
                // check diag for prev longest subsequence length and add 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }
    
    return dp[m][n];
};

let test = "abcde", test2 = "ace";
console.log(longestCommonSubsequence_solution(test, test2));
//Expected: XXX
