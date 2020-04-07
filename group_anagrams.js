/* Day 6: Group Anagrams

Given an array of strings, group anagrams together
*/


/* Approach: 
    Brute force
O(n^3)
*/
var groupAnagrams = function(strs) {
    if (strs.length === 0) return [];
    
    // Build {"act":["cat", "tac"]...}
    let seen = new Map();
    for (let str of strs){
        let checkStr = str.split('').sort().join(",");
        
        if (seen.hasOwnProperty(checkStr)){
            seen[checkStr].push(str);
        } 
        else {
            seen[checkStr] = [str];
        }
    }

    return Object.values(seen);
}


let test = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(test));
// Expected: [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]