class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor(){
    this.head = null;
  }

  insert(value){
    const node = new Node(value);
    this.head = node;
  }

  includes(value){
    let current = this.head;
    if(current.value === value){
      return true;
    }
    while(current.next !== null){
      current = current.next;
    }
    return false;
  }

  toString(){
    let returnString = '';
    let current = this.head;
    returnString += current.value;
    while(current.next !== null){
      current = current.next;
    }
    return returnString;
  }
}

module.exports = { Node, linkedList };

