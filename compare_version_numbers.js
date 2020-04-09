/* NOT part of April but doing it for fun

Compare Version Numbers:
Compare given non-empty strings  and version 2
    version1 > version 2 returns 1
    version1 = version2 returns 0
    version1 < version 2 returns -1
version strings include ints and . to separate
default of each is 0

0.1 < 1.1
1.0.1 > 1
7.5.2.4 < 7.5.3
1.01 = 1.001    (ignore leading zeros)
1.0  = 1.0.0    (ignore leading zeros)

. < 1.1
0 < 1.1


*/


/* Approach:
    Loop through each char of str and make arrays
        
    "1.02.045" turns into [1,2,45]


*/

var compareVersion = function(version1, version2) {
    let answer1 = version1.split(".");
    let answer2 = version2.split(".");

    // Long-Hand:
    // let loop_count = 0;
    // if (answer1.length > answer2.length) loop_count = answer1.length;
    // else loop_count = answer2.length;
    var loop_count = Math.max(answer1.length, answer2.length);
    
    /*
        Assumption: "1..01" = 1.0.1
        ex) "1..01" and "1", we essentially compare [1,0,1] and [1,0,0]
    */ 
    for (let index = 0; index < loop_count; index++) {
        /* 
            Takes care of a few conversions
            A) Leading zeros (i.e. "001" becomes 1)
            B) Periods in a row (i.e. "1.." should mean [1,0])
            C) The shorter array ran out (i.e. "1" could be [1,0] or more trailing zeros if the other array has more indexes)
        */
        var num1 = parseInt(answer1[index]) || 0;
        var num2 = parseInt(answer2[index]) || 0;

        if (num1 > num2){
            return 1;
        }
        else if (num1 < num2){
            return -1;
        }
    }
    return 0;
};

console.log(compareVersion("1.0..01","1"));
