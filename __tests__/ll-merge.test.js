const { LinkedList } = require('../challenges/linkedList/linked-list');
const llMerge = require('../challenges/llMerge/llMerge');

describe('llMerge', () => {
  it('should merge two linked lists like a zipper', () => {
    const listOne = new LinkedList;
    const listTwo = new LinkedList;

    listOne.insert(1);
    listOne.insert(2);
    listOne.insert(3);
    listTwo.insert(1);
    listTwo.insert(2);
    listTwo.insert(3);

    console.log(listOne.toString());
    console.log(listTwo.toString());
    
    expect(llMerge(listOne, listTwo).toString()).toEqual('3 => 3 => 2 => 2 => 1 => 1');
  });
});
