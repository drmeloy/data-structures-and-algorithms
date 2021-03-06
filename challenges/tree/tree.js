class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value = null){
    this.root = typeof value === 'object' ? value : value !== null ? new Node(value) : null;
  }

  add(value){
    const node = new Node(value);
    if(!this.root) this.root = node;
    else {
      let current = this.root;
      // eslint-disable-next-line no-extra-boolean-cast
      while(!!current){
        if(node.value < current.value){
          if(!current.left){
            current.left = node;
            break;
          }
          current = current.left;
        }
        else {
          if(!current.right){
            current.right = node;
            break;
          }
          current = current.right;
        }
      }
    }
    return this;
  }

  contains(value){
    let current = this.root;
    while(current){
      if(value === current.value) return true;
      if(value < current.value) current = current.left;
      if(value > current.value) current = current.right;
    }
    return false;
  }

  preOrder(){
    const array = [];
    (function castPreArray(current){
      if(current){
        array.push(current.value);
        castPreArray(current.left);
        castPreArray(current.right);
      }
    }).apply(null, [this.root]);
    return array;
  }

  inOrder(){
    const array = [];
    (function castInArray(current){
      if(current){
        castInArray(current.left);
        array.push(current.value);
        castInArray(current.right);
      }
    }).apply(null, [this.root]);
    return array;
  }

  postOrder(){
    const array = [];
    (function castPostArray(current){
      if(current){
        castPostArray(current.left);
        castPostArray(current.right);
        array.push(current.value);
      }
    }).apply(null, [this.root]);
    return array;
  }

  levelTraverse(){
    if(this.root === null) return;
    const queue = [this.root];
    const returnArray = [];
    while(queue.length > 0){
      const current = queue[0];
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
      returnArray.push(queue.shift().value);
    }
    return returnArray;
  }

  clone(copyNode){
    if(!copyNode) return;
    const node = new Node(copyNode.value);
    node.left = this.clone(copyNode.left);
    node.right = this.clone(copyNode.right);
    return node;
  }

  findMax(){
    if(this.root === null) return;
    const queue = [this.root];
    let maxValue = this.root.value;
    while(queue.length > 0){
      const current = queue[0];
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
      const currentValue = queue.shift().value;
      maxValue = currentValue > maxValue ? currentValue : maxValue;
    }
    return maxValue;
  }
}

module.exports = { Node, BinarySearchTree };
