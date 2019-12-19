const { Queue } = require('../challenges/fifoAnimalShelter/fifoAnimalShelter');

describe('Animal shelter queue', () => {
  it('can add an animal node to the queue', () => {
    const queue = new Queue();
    queue.enqueue('dog');
    expect(queue.front.value).toEqual('dog');
    expect(queue.last.value).toEqual('dog');
    queue.enqueue('cat');
    expect(queue.front.value).toEqual('dog');
    expect(queue.last.value).toEqual('cat');
    queue.enqueue('dog');
    expect(queue.front.value).toEqual('dog');
    expect(queue.last.value).toEqual('dog');
  });

  it('can take a preferred animal from the queue', () => {
    const queue = new Queue();
    queue.enqueue('dog');
    queue.enqueue('dog');
    queue.enqueue('dog');
    queue.enqueue('cat');
    queue.enqueue('dog');
    expect(queue.dequeue('cat')).toEqual('cat');
    expect(queue.dequeue('cat')).toEqual('Preference not available');
  });
});
