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
  length = 0;
  head = null;

  getUnderlyingList() {
    return this.head
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new ListNode(value)
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = new ListNode(value);
    }
    this.length++
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }


  dequeue() {
    if (!this.head) {
      return null;
    }
    let delH = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return delH.value;



    // while (this.head && this.head.value === value) {
    //   deletedNode = this.head;
    //   this.head = this.head.next;
    // }


    // let current = new ListNode();
    // head = current.next
    // return head;

    // this.list.value = null
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
