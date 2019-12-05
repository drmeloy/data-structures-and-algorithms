const { arrayBinarySearch } = require('../challenges/arrayBinarySearch/array-binary-search');

describe('arrayBinarySearch', () => {
  it('should find the index of a value in an array or return -1', () => {
    expect(arrayBinarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
    expect(arrayBinarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
    }
  });
});
