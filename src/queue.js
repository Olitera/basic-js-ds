const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  list = {};

  getUnderlyingList() {
      
      return this.list 
  
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    let a = new ListNode(value);
    if(!this.list.value) {
      this.list.value = a.value;
      this.list.next = a.next;
    } else {
      this.list.next = a;
    }
    
    // {"value": value, "next": null};
        // this.list.value = value
    // this.list.value = value
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    // this.list.value = null
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
