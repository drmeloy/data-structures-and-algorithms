const { Node, LinkedList } = require('../challenges/linkedList/linked-list');

describe('Node', () => {
  it('has a value', () => {
    const node = new Node('awesome');
    expect(node.value).toEqual('awesome');
  });

  it('has a next', () => {
    const node = new Node('awesome');
    expect(node.next).toEqual(null);
  });
});

describe('Linked List', () => {
  it('has a head', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it('can insert a node to the beginning with insert', () => {
    const list = new LinkedList();
    list.insert('first insert');
    expect(list.head.value).toEqual('first insert');
    list.insert('second insert');
    expect(list.head.value).toEqual('second insert');
  });

  it('can check if list includes a value with inclues', () => {
    const list = new LinkedList();
    list.insert('check');
    list.insert('me');
    list.insert('out');
    expect(list.includes('me')).toEqual(true);
    expect(list.includes('out')).toEqual(true);
    expect(list.includes('check')).toEqual(true);
    expect(list.includes('playa')).toEqual(false);
  });
});
