/* Day 8 : Middle of the Linked List

Given a non-empty, singly linked list with head node head, return a middle node of linked list.
If there are two middle nodes, return the second middle node.

*/


/* Approach: 
    one loop to get # nodes
    get "middle" count (accounting for evens)
    one loop to get to "middle" node and return it
O(1.5n) -> O(n)?
*/
var middleNode = function(head) {
    let runner = head;
    let listSize = 0;
    while(runner !== null){
        listSize++;
        runner = runner.next;
    }

    let middleMinusOne;
    if (listSize % 2 === 0) {
        middleMinusOne = (listSize / 2);
    }
    else {
        middleMinusOne = (listSize - 1) / 2;
    }


    let answer = head;
    for (let index = 0; index < middleMinusOne; index++) {
        answer = answer.next;
    }
    
    return answer;
};

/*
    Solution: One loop with 2 runners, one slow and one fast
*/
var middleNodeSolution = function(head) {
    let slowrunner = head;
    let fastrunner = head;
    let size = 0;
    while(fastrunner && fastrunner.next){
        slowrunner = slowrunner.next;
        fastrunner = fastrunner.next.next;
        size += 2;
    }
    return size%2!==0 ? slowrunner.next :slowrunner;
};

// tested using the LeetCode platform since it's annoying to test w/o setting up here..