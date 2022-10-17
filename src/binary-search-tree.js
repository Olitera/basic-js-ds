const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  head = null;
  left = null;
  right = null;
  current = null;


  root() {
    return this.head
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.current = this.head;
      return;
    } else {
      if (data < this.current.data) {
        if (this.current.left) {
          this.current = this.current.left;
          this.add(data);
        } else {
          this.current.left = new Node(data);
          this.current = this.root();
          return;
        }


      } else if (data > this.current.data) {
        if (this.current.right) {
          this.current = this.current.right;
          this.add(data);
        } else {
          this.current.right = new Node(data);
          this.current = this.root();
          return;
        }

      }
    }
    this.current = this.root();
    return
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    return !!this.find(data);
    // if (this.current) {
    //   if (data < this.current.data) {
    //     if (this.current.left) {
    //       this.current = this.current.left;
    //       this.has(data);
    //     } else {
    //       this.current = this.root();
    //       return false;
    //     }


    //   } else if (data > this.current.data) {
    //     if (this.current.right) {
    //       this.current = this.current.right;
    //       this.has(data);
    //     } else {
    //       this.current = this.root();
    //       return false;
    //     }

    //   }
    //   return true;
    // }
    // return false;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    if (this.current) {
      if (data < this.current.data) {
        if (this.current.left) {
          this.current = this.current.left;
          this.find(data);
        } else {
          this.current = this.root();
          return null;
        }


      } else if (data > this.current.data) {
        if (this.current.right) {
          this.current = this.current.right;
          this.find(data);
        } else {
          this.current = this.root();
          return null;
        }

      } 
      else if (data === this.current.data) {
        return this.current;
      }
    }
    return null;
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