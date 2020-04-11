/* Day 10: Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

*/

/*
    Approach: add objects of the val and whatever is min at the time
*/
var MinStack = function () {
    this.elements = [];
};

/**
@param {number} x
@return {void}
 */
MinStack.prototype.push = function (x) {
    let numObj = {
        value: x,
        min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
    };
    this.elements.push(numObj);
};

/**
@return {void}
*/
MinStack.prototype.pop = function () {
    this.elements.pop();
};

/**
@return {number}
*/
MinStack.prototype.top = function () {
    return this.elements[this.elements.length - 1].value;
};

/**
@return {number}
*/
MinStack.prototype.getMin = function () {
    return this.elements[this.elements.length - 1].min;
};


var obj = new MinStack() // null
obj.push(2147483646) // null, [6]
obj.push(2147483646) // null, [6,6]
obj.push(2147483647) // null, [6,6,7]
obj.pop();           // null  [6,6]
obj.getMin();        // 6, 6
obj.pop();           // null  [6]
obj.push(-2147483648) // null [6, -8]

console.log(obj.getMin()); // expect -8