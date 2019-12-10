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
    returnString += current.value;
    while(current !== null){
      current = current.next;
    }
    return returnString;
  }


}

module.exports = { Node, LinkedList };

