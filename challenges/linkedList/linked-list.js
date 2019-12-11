class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value){
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value){
    let current = this.head;

    while(current !== null){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString(){
    let returnString = '';
    let current = this.head;
    
    while(current !== null){
      if(current.next !== null){
        returnString += current.value + ' => ';
      } else {
        returnString += current.value;
      }
      current = current.next;
    }
    return returnString;
  }

  append(value){
    const node = new Node(value);
    let current = this.head;
    while(current.next !== null){
      current = current.next;
    }
    current.next = node;
  }

  insertBefore(value, newValue){
    const node = new Node(newValue);
    if(value === this.head.value){
      node.next = this.head;
      return this.head = node;
    }
    let current = this.head;
    while(current.next.value !== value){
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }

  insertAfter(value, newValue){
    const node = new Node(newValue);
    let current = this.head;
    while(current.value !== value){
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }

  delete(value){
    let current = this.head;
    while(current.next.value !== value){
      current = current.next;
    }
    current.next = current.next.next;
  }

  kthFromEnd(num){
    if(num < 0){
      return 'Please input a positive number';
    }
    if(this.head === null){
      return 'No items in list';
    }
    let current = this.head;
    let lengthCounter = 1;
    while(current.next !== null){
      current = current.next;
      lengthCounter++;
    }
    if(num > lengthCounter){
      return 'Provided number is higher than length of list. Please provide number within the linked list\'s length.';
    }
    current = this.head;
    for(let i = 0; i < lengthCounter - 1 - num; i++){
      current = current.next;
    }
    return current.value;
  }
}

module.exports = { Node, LinkedList };

