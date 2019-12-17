const { LinkedList } = require('../linkedList/linked-list');

module.exports = (list1, list2) => {
  const list3 = new LinkedList();

  let current1 = list1.head;
  let current2 = list2.head;

  list3.head = current1;
  current1 = current1.next;

  let current3 = list3.head;

  while(current2){
    current3.next = current2;
    current2 = current2.next;
    current3 = current3.next;
    if(current1){
      current3.next = current1;
      current1 = current1.next;
      current3 = current3.next;
    }
  }
  while(current1){
    current3.next = current1;
    current1 = current1.next;
    current3 = current3.next;
  }
  return list3;
};
