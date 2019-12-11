const { Node, LinkedList } = require('../challenges/linkedList/linked-list');

describe('Node', () => {
  let node;

  beforeEach(() => {
    node = new Node('awesome');
  });

  it('has a value', () => {
    expect(node.value).toEqual('awesome');
  });

  it('has a next', () => {
    expect(node.next).toEqual(null);
  });
});

describe('Linked List', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  const checkMeOut = () => {
    list.insert('check');
    list.insert('me');
    list.insert('out');
  };

  it('has a head', () => {
    expect(list.head).toEqual(null);
  });

  it('can insert a node to the beginning with insert', () => {
    list.insert('first insert');
    expect(list.head.value).toEqual('first insert');
    list.insert('second insert');
    expect(list.head.value).toEqual('second insert');
  });

  it('can check if list includes a value with inclues', () => {
    checkMeOut();
    expect(list.includes('me')).toEqual(true);
    expect(list.includes('out')).toEqual(true);
    expect(list.includes('check')).toEqual(true);
    expect(list.includes('playa')).toEqual(false);
  });

  it('returns a string of values within the list with toString', () => {
    checkMeOut();
    expect(list.toString()).toEqual('out => me => check');
  });

  it('adds a node to the end of the list with append', () => {
    checkMeOut(); 
    expect(list.toString()).toEqual('out => me => check');
    list.append('woooah');
    expect(list.toString()).toEqual('out => me => check => woooah');
  });

  it('inserts a node before a specified node value with insertBefore', () => {
    checkMeOut();
    list.insertBefore('me', 'woooah');
    expect(list.toString()).toEqual('out => woooah => me => check');
    list.insertBefore('out', 'first!');
    expect(list.toString()).toEqual('first! => out => woooah => me => check');
  });

  it('inserts a node after a specified node value with insertAfter()', () => {
    checkMeOut();
    list.insertAfter('me', 'woooah');
    expect(list.toString()).toEqual('out => me => woooah => check');
  });

  it('can delete a specified node with delete', () => {
    checkMeOut();
    list.delete('me');
    expect(list.toString()).toEqual('out => check');
    list.append('woooah');
    list.delete('check');
    expect(list.toString()).toEqual('out => woooah');
  });

  it('can find a node value kth from end with kthFromEnd', () => {
    expect(list.kthFromEnd(2)).toEqual('No items in list');
    list.insert('oOoOo');
    expect(list.kthFromEnd(0)).toEqual('oOoOo');
    checkMeOut();
    checkMeOut();
    expect(list.kthFromEnd(3)).toEqual('out');
    expect(list.kthFromEnd(2)).toEqual('me');
    expect(list.kthFromEnd(1)).toEqual('check');
    expect(list.kthFromEnd(7)).toEqual('out');
    expect(list.kthFromEnd(-6)).toEqual('Please input a positive number');
    expect(list.kthFromEnd(8)).toEqual('Provided number is higher than length of list. Please provide number within the linked list\'s length.');
  });
});
