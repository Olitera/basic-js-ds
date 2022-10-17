const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l;
  function remove(position) {
    let current = head;
    if (position === 0) {
      head = current.next
    }
    else {
      let prev = null;
      let index = 0;
      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
    }
    return head;
  }

  function indexOf(el) {
    let current = head;
    let index = 0
    while (current) {
      if (current.value === el) {
        return index
      }
      current = current.next;
      index++
    }
    return null;

  }

  do {
    head = remove(indexOf(k)); 
  } while (indexOf(k))

  return head;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  removeKFromList
};
