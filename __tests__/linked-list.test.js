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
  });

  it('inserts a node after a specified node value with insertAfter()', () => {
    checkMeOut();
    list.insertAfter('me', 'woooah');
    expect(list.toString()).toEqual('out => me => woooah => check');
  });
});
