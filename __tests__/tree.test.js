const { Node, BinarySearchTree } = require('../challenges/tree/tree');

describe('Node class', () => {
  let node;
  beforeEach(() => {
    node = new Node(3);
  });

  it('has a value', () => {
    expect(node.value).toEqual(3);
  });

  it('has a left property', () => {
    expect(node.left).toEqual(null);
  });

  it('has a right property', () => {
    expect(node.right).toEqual(null);
  });
});

describe('BinarySearchTree class', () => {
  let tree;
  beforeEach(() => {
    tree = new BinarySearchTree(3);
  });

  it('can instantiate a new tree with root null', () => {
    const emptyTree = new BinarySearchTree();
    expect(emptyTree.root).toEqual(null);
  });

  it('can instantiate a new tree with provided root', () => {
    expect(tree.root.value).toEqual(3);
  });

  it('can add left and right nodes', () => {
    tree.add(2);
    tree.add(4);
    expect(tree.root.left.value).toEqual(2);
    expect(tree.root.right.value).toEqual(4);
  });

  it('can return a collection from preorder traversal', () => {
    tree.add(1);
    tree.add(2);
    tree.add(4);
    tree.add(5);
    expect(tree.preOrder()).toEqual([3, 1, 2, 4, 5]);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    tree.add(1);
    tree.add(2);
    expect(tree.preOrder()).toEqual([3, 1, 2, 1, 2, 4, 3, 5, 4, 5]);
  });

  it('can return a collection from inorder traversal', () => {
    tree.add(1);
    tree.add(2);
    tree.add(4);
    tree.add(5);
    expect(tree.preOrder()).toEqual([3, 1, 2, 4, 5]);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    tree.add(1);
    tree.add(2);
    expect(tree.preOrder()).toEqual([3, 1, 2, 1, 2, 4, 3, 5, 4, 5]);
  });

  it('can return a collection from postorder traversal', () => {
    tree.add(1);
    tree.add(2);
    tree.add(4);
    tree.add(5);
    expect(tree.postOrder()).toEqual([2, 1, 5, 4, 3]);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    tree.add(1);
    tree.add(2);
    expect(tree.postOrder()).toEqual([1, 2, 2, 1, 3, 4, 5, 5, 4, 3]);
  });

  it('can return a breadth first traversal', () => {
    tree.add(1);
    tree.add(2);
    tree.add(4);
    tree.add(5);
    expect(tree.levelTraverse()).toEqual([3, 1, 4, 2, 5]);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    tree.add(1);
    tree.add(2);
    expect(tree.levelTraverse()).toEqual([3, 1, 4, 2, 3, 5, 1, 2, 4, 5]);
  });
});
