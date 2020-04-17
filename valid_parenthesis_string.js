/* Day 16: Valid Parenthesis String

Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.

*/


/* Approach: 
    {{ APPROACH }}
{{ SPEED }}
*/
var checkValidString = function (s) {
    if (s === "") return true;

    let sum = 0;
    let asteriskBank = 0;
    for (let char of s) {
        if (char === "(") {
            sum++;
        }
        else if (char === ")") {
            // all cancelled out with a stray CLOSE
            if (sum === 0) {
                // asterisk not available
                if (asteriskBank === 0) return false;
                // asterisk available
                asteriskBank--;
            }
            // else, assume there is OPEN and cancel it
            else {
                sum--;
            }
        }
        else {
            asteriskBank++;
        }
    }

    return sum <= asteriskBank || sum === 0;
};


let original = "(((******))";
console.log(checkValidString(original));
//Expected: True





/*
    from Discussion Board - ????
*/
var solution = function (s, count = 0) {
    if (count < 0) {return false;}
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '(') {count++;}
        else if (char === ")"){count--;}

        const next = s.slice(i + 1);

        return checkValidString(next, count)
            || checkValidString(next, count + 1)
            || checkValidString(next, count - 1);
    }

    return count === 0;
};

let original2 = "(((******))";
console.log(solution(original2));
//Expected: True