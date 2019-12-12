const { LinkedList } = require('../challenges/linkedList/linked-list');
const llMerge = require('../challenges/llMerge/llMerge');

describe('llMerge', () => {
  let listOne;
  let listTwo;

  beforeEach(() => {
    listOne = new LinkedList();
    listTwo = new LinkedList();
  });

  it('should merge two linked lists like a zipper', () => {
    listOne.insert(1);
    listOne.insert(2);
    listOne.insert(3);
    listTwo.insert(1);
    listTwo.insert(2);
    listTwo.insert(3);
    
    expect(llMerge(listOne, listTwo).toString()).toEqual('3 => 3 => 2 => 2 => 1 => 1');
  });

  it('should merge lists of different sizes', () => {
    listOne.insert(1);
    listOne.insert(2);
    listOne.insert(3);
    listOne.insert(4);
    listOne.insert(5);
    listTwo.insert(1);
    listTwo.insert(2);
    listTwo.insert(3);

    expect(llMerge(listOne, listTwo).toString()).toEqual('5 => 3 => 4 => 2 => 3 => 1 => 2 => 1');
  });
});
