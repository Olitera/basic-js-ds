const { NotImplementedError, ListNode } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  top = null;
  size = 0;

  //  Node = function(data){
  //   this.data = data;
  //   this.previous = null;
  // };

  push(element) {
  //   let current = new ListNode(element)
  //   current.next = this.head
  //   this.head = current
  const newNode = new ListNode(element, this.head);
  this.head = newNode;
  if (!this.tail) {
    this.tail = newNode;
  }
  return this;



    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  pop() {
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
