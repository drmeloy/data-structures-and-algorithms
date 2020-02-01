const { BinarySearchTree } = require('../tree/tree');

const fizzBuzzTree = tree => {
  const treeRootNodeCopy = tree.clone(tree.root);
  const copyTree = new BinarySearchTree(treeRootNodeCopy);

  // const treeCopy = JSON.parse(JSON.stringify(tree));
  // const copyTree = new BinarySearchTree(treeCopy.root);
  
  (function transformCopy(current){
    if(current){
      transformCopy(current.left);
      transformCopy(current.right);
      if(current.value % 3 === 0 && current.value % 5 === 0){
        current.value = 'FizzBuzz';
      }
      else if(current.value % 5 === 0){
        current.value = 'Buzz';
      }
      else if(current.value % 3 === 0){
        current.value = 'Fizz';
      }
      else {
        current.value = current.value.toString();
      }
    }
  }).apply(null, [copyTree.root]);
  return copyTree;
};

module.exports = { fizzBuzzTree };
