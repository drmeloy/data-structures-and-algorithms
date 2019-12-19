const { Stack } = require('../queueWithStacks/stack');

const multiBracketValidation = input => {
  const stack = new Stack();
  for(let i = 0; i < input.length; i++){
    const char = input.charAt(i);
    const openers = /[({[]/;
    const closers = /[)}\]]/;
    let opener;
    let closer;

    if(openers.test(char)) opener = char.match(openers)[0];
    if(closers.test(char)) closer = char.match(closers)[0];
    if(opener) stack.push(opener);
    if(closer){
      closer = closer === ')' ? '(' : closer === ']' ? '[' : closer === '}' ? '{' : null;
      if(closer !== stack.peek()) return false;
      stack.pop();
    }
  }
  return !stack.top;
};

module.exports = { multiBracketValidation };
