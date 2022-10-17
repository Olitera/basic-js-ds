const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  head = null
  

  root() {
    return this.head
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    if (this.left) {
      this.left.parent = null;
    }
    if (data) {
      this.left = data;
      this.left.parent = this;
    }

    if (this.right) {
      this.right.parent = null;
    }
    if (data) {
      this.right = data;
      this.right.parent = this;
    }

    return data


  // function  insert(data) {
  //   let newNode = new BinarySearchTree(data)
  //   if (this.root === null) {
  //     this.root = newNode;
  //     return;
  //   }
  //   this._insert(this.root, newNode)
  // }

  // function _insert(currentNode, newNode) {
  //   if (newNode.value < currentNode.value) {
  //     if (currentNode.left === null) {
  //       currentNode.left = newNode;
  //     } else {
  //       this._insert(currentNode.left, newNode);
  //     }
  //   }

  //   if (newNode.value > currentNode.value) {
  //     if (currentNode.right === null) {
  //       currentNode.right = newNode;
  //     } else {
  //       this._insert(currentNode.right, newNode);
  //     }
  //   }
  //   return newNode
  //   // if (newNode.value === currentNode.value) {
    //   console.warn(elementExistMessage);
    // }

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};