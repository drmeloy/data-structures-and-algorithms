const { fizzBuzzTree } = require('../challenges/fizzBuzzTree/FizzBuzzTree');
const { Node, BinarySearchTree } = require('../challenges/tree/tree');

describe('fizzBuzzTree', () => {
  it('returns a new tree with values divisible by 3 replaced with "Fizz", values divisible by 5 replaced with "Buzz", values divisible by both replaced with "FizzBuzz", and values divisible by neither converted to strings', () => {
    const tree = new BinarySearchTree(25);
    tree.add(24);
    tree.add(18);
    tree.add(9);
    tree.add(41);
    tree.add(17);
    tree.add(7);
    tree.add(30);
    tree.add(60);
    tree.add(27);
    tree.add(23);
    tree.add(60);
    const fbt = fizzBuzzTree(tree);
    
    expect(tree.preOrder()).toEqual([25, 24, 18, 9, 7, 17, 23, 41, 30, 27, 60, 60]);
    expect(tree.inOrder()).toEqual([7, 9, 17, 18, 23, 24, 25, 27, 30, 41, 60, 60]);
    expect(tree.postOrder()).toEqual([7, 17, 9, 23, 18, 24, 27, 30, 60, 60, 41, 25]);

    expect(fbt.preOrder()).toEqual(['Buzz', 'Fizz', 'Fizz', 'Fizz', '7', '17', '23', '41', 'FizzBuzz', 'Fizz', 'FizzBuzz', 'FizzBuzz']);
    expect(fbt.inOrder()).toEqual(['7', 'Fizz', '17', 'Fizz', '23', 'Fizz', 'Buzz', 'Fizz', 'FizzBuzz', '41', 'FizzBuzz', 'FizzBuzz']);
    expect(fbt.postOrder()).toEqual(['7', '17', 'Fizz', '23', 'Fizz', 'Fizz', 'Fizz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz', '41', 'Buzz']);
  });
});
