const { Stack } = require('./stack');

class Pseudoqueue {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    this.stack1.push(value, this.stack1.top);
  }

  dequeue(){
    while(this.stack1.top){
      const popped = this.stack1.pop();
      this.stack2.push(popped.value);
    }
    const removed = this.stack2.pop();
    while(this.stack2.top){
      const popped = this.stack2.pop();
      this.stack1.push(popped.value);
    }
    return removed;
  }
}

module.exports = { Pseudoqueue };
