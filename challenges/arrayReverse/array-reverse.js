const reverseArray = array => {
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray[i] = array[array.length - 1 - i];
  }
  return newArray;
};

const reverseArrayTwo = array => {
  let newObject = {};
  for(let i = 0; i < array.length; i++){
    newObject[i] = array[i];
  }
  for(let i = 0; i < array.length; i++){
    array[i] = newObject[array.length - 1 - i];
  }
  return array;
};

module.exports = { reverseArray, reverseArrayTwo };
