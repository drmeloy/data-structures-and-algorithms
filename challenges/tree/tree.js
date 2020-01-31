class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  add(value){
    let node = new Node(value);
    if(!this.root) this.root = node;
    else {
      let current = this.root;
      while(current){
        if(node.value < current.value){
          if(!current.left){
            current.left = node;
            current = current.left;
          }
          current = current.left;
        }
        if(node.value >= current.value){
          if(!current.right){
            current.right = node;
            current = current.right;
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

  preOrder(current = this.root){
    const array = [];
    if(current){
      array.push(current.value);
      this.preOrder(current.left);
      this.preOrder(current.right);
    }
    return array;
  }

  inOrder(){

  }

  postOrder(){

  }
}
