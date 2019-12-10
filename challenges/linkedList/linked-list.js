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
}

module.exports = { Node, LinkedList };

