const { arrayBinarySearch } = require('../challenges/arrayBinarySearch/array-binary-search');

describe('arrayBinarySearch', () => {
  it('should find the index of a value in an array or return -1', () => {
    expect(arrayBinarySearch([4, 8, 15, 16, 23, 42], 15))
      .toEqual(2);
    expect(arrayBinarySearch([11, 22, 33, 44, 55, 66, 77], 90))
      .toEqual(-1);

    const hundredArray = [];
    for(let i = 0; i < 100; i++){
      hundredArray[i] = i;
    }
    expect(arrayBinarySearch(hundredArray, 46))
      .toEqual(46);

    const thousandArray = [];
    for(let i = 0; i < 1000; i++){
      thousandArray[i] = i;
    }
    expect(arrayBinarySearch(thousandArray, 789))
      .toEqual(789);

    const tenThousandArray = [];
    for(let i = 0; i < 10000; i++){
      tenThousandArray[i] = i;
    }
    expect(arrayBinarySearch(tenThousandArray, 9458))
      .toEqual(9458);

    const hundredThousandArray = [];
    for(let i = 0; i < 100000; i++){
      hundredThousandArray[i] = i;
    }
      
    expect(arrayBinarySearch(hundredThousandArray, 42576))
      .toEqual(42576);
    expect(arrayBinarySearch(hundredThousandArray, 842576))
      .toEqual(-1);
  });
});
