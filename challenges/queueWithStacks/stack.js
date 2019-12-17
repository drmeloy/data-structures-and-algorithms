class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value){
    const node = new Node(value, this.top);
    this.top = node;
  }

  pop(){
    if(!this.top) return null;
    const pop = this.top;
    this.top = this.top.next;
    return pop;
  }

  peek(){
    if(!this.top) return null;
    return this.top.value;
  }

  isEmpty(){
    return !this.top;
  }
}

module.exports = { Node, Stack }