/* Day 9: Backspace String Compare

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Guaranteed len between 1 and 200
guaranteed lowercase and # ONLY
*/

var convert = function(S) {
    let clean = true;
    
    // Eliminate any char/hash pairs
    let temp = "";
    for (let index = S.length-1; index >= 0; index--) {
        if (S[index] !== "#") {
            temp = S[index] + temp;
        }
        else if (S[index] === "#" && S[index-1] === "#") {
            temp = S[index] + temp;
            clean = false;
        }
        else if (S[index] === "#" && S[index-1] !== "#") {
            index--;
        }
    }
    
    // Eliminate any leading hashes
    while(temp[0] === "#"){
        temp = temp.slice(1,);
    }
    
    if (clean) return temp;
    else return convert(temp);
}

/* Approach: 
    convert the 2 strings (= handle the # deletes)
    compare for equality
O(n = 200 max)
*/
var backspaceCompare = function(S, T) {
    let left = convert(S); // S converted
    let right = convert(T); // T converted
    if (left.length !== right.length) {
        console.log(false);
        return false;
    }
    console.log(left === right);
    return left === right;
};

var backspaceCompareSolution = function(S, T){
    var stack = [];
        
    for(let i =0; i < S.length ; i++){
        if(S[i] === "#"){
            stack.pop();
        }else{
            stack.push(S[i]);
        }
    }

    var str1 = stack.join("");

    stack = [];

    for(let i =0; i < T.length ; i++){
        if(T[i] === "#"){
            stack.pop();
        }else{
            stack.push(T[i]);
        }
    }
    return str1 === stack.join("");
};

function testSuite() {
    // testing against ac
    let temp = "ab#c";

    backspaceCompareSolution(temp,"ac") // expected result: true
    backspaceCompareSolution(temp,"ab#c") // expected result: true
    backspaceCompareSolution(temp,"ad#a#c") // expected result: true
    backspaceCompareSolution(temp,"ad##c") // expected result: false
    backspaceCompareSolution(temp,"ad###c") // expected result: false
}
testSuite();