const { Pseudoqueue } = require('../challenges/queueWithStacks/queueWithStacks');

describe('Pseudoqueue', () => {
  it('should add items to the pseudoqueue with enqueue', () => {
    const pseudo = new Pseudoqueue();
    pseudo.enqueue(1);
    expect(pseudo.stack1.peek()).toEqual(1);
    pseudo.enqueue(2);
    expect(pseudo.stack1.peek()).toEqual(2);
  });

  it('should remove the first in item with dequeue', () => {
    const pseudo = new Pseudoqueue();
    pseudo.enqueue(1);
    pseudo.enqueue(2);
    pseudo.enqueue(3);
    expect(pseudo.dequeue().value).toEqual(1);
    expect(pseudo.dequeue().value).toEqual(2);
    expect(pseudo.dequeue().value).toEqual(3);
  });
});
